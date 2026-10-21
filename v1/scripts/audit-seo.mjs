import { readdir, readFile } from "node:fs/promises";
import { join, relative, sep } from "node:path";

const root = "dist";
const errors = [];
const warnings = [];
const records = [];

async function findHtml(directory) {
  const entries = await readdir(directory, { withFileTypes: true });
  const files = [];
  for (const entry of entries) {
    const path = join(directory, entry.name);
    if (entry.isDirectory()) files.push(...await findHtml(path));
    else if (entry.name === "index.html") files.push(path);
  }
  return files;
}

function first(html, pattern) {
  return html.match(pattern)?.[1]?.trim() ?? "";
}

const files = await findHtml(root);
for (const file of files) {
  const html = await readFile(file, "utf8");
  const rel = relative(root, file).split(sep).join("/");
  const route = rel === "index.html" ? "/" : `/${rel.replace(/\/index\.html$/, "")}`;
  const title = first(html, /<title>(.*?)<\/title>/s);
  const description = first(html, /<meta name="description" content="(.*?)" \/>/s);
  const canonical = first(html, /<link rel="canonical" href="(.*?)" \/>/s);
  const h1Count = (html.match(/<h1(?:\s|>)/g) ?? []).length;
  const hasStaticBody = html.includes('<div id="root" data-prerendered="true"><div');
  const schemas = [...html.matchAll(/<script type="application\/ld\+json">([\s\S]*?)<\/script>/g)];

  if (!title) errors.push(`${route}: missing title`);
  if (!description) errors.push(`${route}: missing meta description`);
  if (canonical !== `https://mirasai.co${route}`) errors.push(`${route}: canonical is ${canonical || "missing"}`);
  if (h1Count !== 1) errors.push(`${route}: expected one H1, found ${h1Count}`);
  if (!hasStaticBody) errors.push(`${route}: route content was not statically rendered`);
  if (title.length > 65) warnings.push(`${route}: title is ${title.length} characters`);
  if (description.length < 90 || description.length > 170) warnings.push(`${route}: description is ${description.length} characters`);

  let jobPostingCount = 0;
  for (const schema of schemas) {
    try {
      const parsed = JSON.parse(schema[1]);
      const serialized = JSON.stringify(parsed);
      jobPostingCount += (serialized.match(/"JobPosting"/g) ?? []).length;
      if (serialized.includes('"FAQPage"')) errors.push(`${route}: obsolete FAQPage schema is present`);
    } catch (error) {
      errors.push(`${route}: invalid JSON-LD (${error.message})`);
    }
  }
  if (route === "/careers" && jobPostingCount) errors.push(`${route}: listing page must not contain JobPosting schema`);
  if (route.startsWith("/careers/") && jobPostingCount !== 1) errors.push(`${route}: expected one JobPosting schema, found ${jobPostingCount}`);
  records.push({ route, title, description });
}

for (const field of ["title", "description"]) {
  const seen = new Map();
  for (const record of records) {
    const existing = seen.get(record[field]);
    if (existing) errors.push(`${record.route}: duplicate ${field} also used by ${existing}`);
    else seen.set(record[field], record.route);
  }
}

const sitemap = await readFile(join(root, "sitemap.xml"), "utf8");
for (const { route } of records) {
  const loc = `https://mirasai.co${route}`;
  if (!sitemap.includes(`<loc>${loc}</loc>`)) errors.push(`${route}: missing from sitemap.xml`);
}

if (warnings.length) console.warn(`SEO audit warnings (${warnings.length}):\n- ${warnings.join("\n- ")}`);
if (errors.length) {
  console.error(`SEO audit failed (${errors.length}):\n- ${errors.join("\n- ")}`);
  process.exit(1);
}
console.log(`SEO audit passed for ${records.length} statically rendered routes.`);

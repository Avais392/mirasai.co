// Builds the /v1 and /v2 archives. mirasai.co and /v3 are built by assemble-pages.mjs.
import { cp, mkdir, readFile, readdir, rm, stat, writeFile } from "node:fs/promises";
import { join } from "node:path";

const archiveSource = "sites/v1";
const out = "dist";
const archive = join(out, "v1");

async function files(dir) {
  const found = [];
  for (const name of await readdir(dir)) {
    const path = join(dir, name);
    (await stat(path)).isDirectory() ? found.push(...await files(path)) : found.push(path);
  }
  return found;
}

await mkdir(out, { recursive: true });
await cp(".build-v2", join(out, "v2"), { recursive: true });
await rm(join(out, "v2", "v1"), { recursive: true, force: true });
await cp(archiveSource, archive, { recursive: true });

for (const file of await files(archive)) {
  if (!file.endsWith(".html")) continue;
  let html = await readFile(file, "utf8");
  const robotsTag = '<meta name="robots" content="noindex, follow"><meta name="googlebot" content="noindex, follow">';
  html = html.replace(/<meta name="robots"[^>]*>/gi, "").replace(/<meta name="googlebot"[^>]*>/gi, "").replace("</head>", `${robotsTag}</head>`);
  await writeFile(file, html);
}

await rm(".build-v2", { recursive: true, force: true });
console.log("Assembled /v1 archive and /v2 archive.");

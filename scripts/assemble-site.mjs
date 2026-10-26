import { cp, mkdir, readFile, readdir, rm, stat, writeFile } from "node:fs/promises";
import { dirname, join, relative } from "node:path";

const origin = "https://mirasai.co";
const source = "public/v1";
const out = "dist";
const archive = join(out, "v1");

const routes = {
  "index.html": { path: "/", label: "Home" },
  "about/index.html": { path: "/about", label: "About" },
  "approach/index.html": { path: "/approach", label: "Approach" },
  "work/index.html": { path: "/work", label: "Work" },
  "services/index.html": { path: "/services", label: "Services" },
  "services/product-platform-engineering/index.html": { path: "/services/product-platform-engineering", label: "Product and platform engineering", service: true },
  "services/mobile-systems/index.html": { path: "/services/mobile-systems", label: "Mobile systems", service: true },
  "services/applied-ai-automation/index.html": { path: "/services/applied-ai-automation", label: "Applied AI and automation", service: true },
  "services/voice-language-data/index.html": { path: "/services/voice-language-data", label: "Voice and language data", service: true },
  "services/technical-leadership/index.html": { path: "/services/technical-leadership", label: "Technical leadership", service: true },
  "careers/index.html": { path: "/careers", label: "Careers" },
  "careers/full-stack-engineering-intern/index.html": { path: "/careers/full-stack-engineering-intern", label: "Full-Stack Engineering Intern (AI/ML Focus)", job: "engineering" },
  "careers/business-development-sales-intern/index.html": { path: "/careers/business-development-sales-intern", label: "Business Development & Sales Intern", job: "growth" },
  "careers/social-media-visual-content-intern/index.html": { path: "/careers/social-media-visual-content-intern", label: "Social Media & Visual Content Intern", job: "marketing" },
  "contact/index.html": { path: "/contact", label: "Contact" },
  "cookie-policy/index.html": { path: "/cookie-policy", label: "Cookie Policy" },
  "privacy/index.html": { path: "/privacy-policy", label: "Privacy Policy" },
  "terms/index.html": { path: "/terms-of-service", label: "Terms of Service" },
  "insights/index.html": { path: "/insights", label: "Insights" },
  "insights/react-native-stabilization/index.html": { path: "/insights/react-native-stabilization", label: "How long does React Native stabilization take?", article: true },
  "insights/evaluating-ai-workflows/index.html": { path: "/insights/evaluating-ai-workflows", label: "What data is required before an AI pilot?", article: true },
  "insights/architecture-assessment/index.html": { path: "/insights/architecture-assessment", label: "What does a technical architecture assessment deliver?", article: true },
  "insights/multilingual-transcription-quality/index.html": { path: "/insights/multilingual-transcription-quality", label: "How is multilingual transcription quality measured?", article: true },
  "insights/fractional-cto/index.html": { path: "/insights/fractional-cto", label: "When should a company use a fractional CTO?", article: true },
};

const serviceDescriptions = {
  "/services/product-platform-engineering": "Design and deliver production-ready web and mobile products with senior architecture, integrations, QA and release engineering.",
  "/services/mobile-systems": "Build and stabilize React Native products with native integrations, payments, deep links, real-time features and reliable releases.",
  "/services/applied-ai-automation": "Turn practical AI use cases into governed workflows with evaluation, human review, permissions, escalation and observability.",
  "/services/voice-language-data": "Plan multilingual speech and language-data programs with collection, transcription, annotation and measurable quality assurance.",
  "/services/technical-leadership": "Get fractional CTO support for architecture, technical roadmaps, delivery governance, due diligence and engineering leadership.",
};

const jobs = {
  engineering: {
    title: "Full-Stack Engineering Intern (AI/ML Focus)",
    team: "Engineering",
    description: "<p>Build practical features across frontend and UI, APIs and backend, data and AI services, testing and documentation.</p><h2>Responsibilities</h2><ul><li>Build frontend and backend features.</li><li>Work with APIs and databases.</li><li>Connect practical AI services.</li><li>Test, debug and document your work.</li></ul><h2>Qualifications</h2><ul><li>Programming and Git fundamentals.</li><li>Comfort with web and API concepts.</li><li>Ability to explain one project clearly.</li><li>Curiosity about product engineering.</li><li>Students and recent graduates are encouraged to apply.</li></ul><p>This is a hybrid internship based in Lahore, Pakistan. Apply by emailing your CV and relevant project links to recruitment@mirasai.co.</p>",
  },
  growth: {
    title: "Business Development & Sales Intern",
    team: "Growth",
    description: "<p>Turn thoughtful research into useful conversations through company research, outreach writing, lead qualification and follow-ups.</p><h2>Responsibilities</h2><ul><li>Research relevant companies and prospects.</li><li>Draft tailored LinkedIn and email outreach.</li><li>Keep lead lists and follow-ups organized.</li><li>Support proposals with approved information.</li></ul><h2>Qualifications</h2><ul><li>Strong written English.</li><li>Clear research and analytical skills.</li><li>Curiosity about software and AI.</li><li>Comfort with spreadsheets or CRM habits.</li><li>Students and recent graduates are encouraged to apply.</li></ul><p>This is a hybrid internship based in Lahore, Pakistan. Apply by emailing your CV and relevant work to recruitment@mirasai.co.</p>",
  },
  marketing: {
    title: "Social Media & Visual Content Intern",
    team: "Marketing",
    description: "<p>Design clear, on-brand content from planning and post design to captions, clean exports and brand consistency.</p><h2>Responsibilities</h2><ul><li>Plan relevant content ideas.</li><li>Design social posts and carousels.</li><li>Write captions and prepare clean exports.</li><li>Check readability on mobile.</li></ul><h2>Qualifications</h2><ul><li>Strong typography and layout sense.</li><li>Comfort with Canva, Figma or Adobe tools.</li><li>Clear communication and visual judgment.</li><li>Personal, university or freelance work is welcome.</li><li>Students and recent graduates are encouraged to apply.</li></ul><p>This is a hybrid internship based in Lahore, Pakistan. Apply by emailing your CV and portfolio links to recruitment@mirasai.co.</p>",
  },
};

const homepageFaq = `<section class="miras-faq" id="faq"><div class="miras-faq-shell"><p class="miras-eyebrow">Frequently asked</p><h2>Practical answers before we speak</h2><div class="miras-faq-list">
  <details><summary>What does Miras AI build?</summary><div><p>Miras AI designs and delivers web and mobile products, React Native systems, applied AI workflows, multilingual speech and language-data programs, and fractional technical leadership.</p></div></details>
  <details><summary>Where is Miras AI based?</summary><div><p>Miras AI is registered and headquartered in Bloomington, Indiana, with delivery operations in Lahore, Pakistan. The team supports work across US and Asian time zones.</p></div></details>
  <details><summary>Which South Asian languages does Miras AI support?</summary><div><p>The team works across more than 45 South Asian languages, including Urdu, Punjabi, Sindhi, Pashto, Saraiki and Balochi, with capability spanning collection, transcription, annotation and quality assurance.</p></div></details>
  <details><summary>How can a company engage Miras AI?</summary><div><p>Engagements include defined projects, focused senior workstreams, delivery pods, embedded engineering teams, white-label delivery and fractional CTO support.</p></div></details>
  <details><summary>How long does an engagement take?</summary><div><p>A technical assessment can take two to four weeks. Focused releases commonly run four to twelve weeks, while defined product builds typically run six to sixteen weeks. Scope and dependencies determine the final plan.</p></div></details>
  <details><summary>How does a project start?</summary><div><p>Send the objective, current state and principal constraints. Miras AI aims to respond within one business day with a discovery call, scoped assessment or a clear view on fit.</p></div></details>
</div></div></section>`;

function esc(value) {
  return value.replaceAll("&", "&amp;").replaceAll('"', "&quot;").replaceAll("<", "&lt;").replaceAll(">", "&gt;");
}

function metaContent(html, name) {
  return html.match(new RegExp(`<meta name=["']${name}["'] content=["']([^"']*)`, "i"))?.[1] || "";
}

function titleContent(html) {
  return html.match(/<title>(.*?)<\/title>/i)?.[1].replace(/&amp;/g, "&") || "Miras AI";
}

function schemas(route, title, description) {
  const url = `${origin}${route.path === "/" ? "/" : route.path}`;
  const graph = [];
  if (route.path === "/") {
    graph.push({
      "@type": ["Organization", "ProfessionalService"], "@id": `${origin}/#organization`, name: "Miras AI", legalName: "Miras AI",
      url: `${origin}/`, logo: { "@type": "ImageObject", url: `${origin}/assets/miras-logo.png`, width: 637, height: 228 },
      email: "hello@mirasai.co", foundingDate: "2026",
      address: [{ "@type": "PostalAddress", addressLocality: "Bloomington", addressRegion: "Indiana", addressCountry: "US" }, { "@type": "PostalAddress", addressLocality: "Lahore", addressRegion: "Punjab", addressCountry: "PK" }],
      sameAs: ["https://www.linkedin.com/company/mirasai/about/"],
      contactPoint: [{ "@type": "ContactPoint", contactType: "sales", email: "hello@mirasai.co", availableLanguage: ["English", "Urdu"] }, { "@type": "ContactPoint", contactType: "recruiting", email: "recruitment@mirasai.co" }],
    });
    graph.push({ "@type": "WebSite", "@id": `${origin}/#website`, url: `${origin}/`, name: "Miras AI", publisher: { "@id": `${origin}/#organization` }, inLanguage: "en-US" });
  }
  graph.push({ "@type": "WebPage", "@id": `${url}#webpage`, url, name: title, description, isPartOf: { "@id": `${origin}/#website` }, about: { "@id": `${origin}/#organization` }, inLanguage: "en-US" });
  if (route.path !== "/") {
    const crumbs = [{ "@type": "ListItem", position: 1, name: "Home", item: `${origin}/` }];
    if (route.path.startsWith("/services/")) crumbs.push({ "@type": "ListItem", position: 2, name: "Services", item: `${origin}/services` });
    if (route.path.startsWith("/careers/")) crumbs.push({ "@type": "ListItem", position: 2, name: "Careers", item: `${origin}/careers` });
    if (route.path.startsWith("/insights/")) crumbs.push({ "@type": "ListItem", position: 2, name: "Insights", item: `${origin}/insights` });
    crumbs.push({ "@type": "ListItem", position: crumbs.length + 1, name: route.label, item: url });
    graph.push({ "@type": "BreadcrumbList", itemListElement: crumbs });
  }
  if (route.service) graph.push({ "@type": "Service", "@id": `${url}#service`, name: route.label, description, url, provider: { "@id": `${origin}/#organization` }, areaServed: ["United States", "Pakistan"] });
  if (route.article) graph.push({ "@type": "Article", "@id": `${url}#article`, headline: route.label, description, url, datePublished: "2026-10-26", dateModified: "2026-10-26", author: { "@id": `${origin}/#organization` }, publisher: { "@id": `${origin}/#organization` }, mainEntityOfPage: { "@id": `${url}#webpage` } });
  if (route.job) {
    const job = jobs[route.job];
    graph.push({ "@type": "JobPosting", title: job.title, description: job.description, datePosted: "2026-10-20", validThrough: "2026-12-31T23:59:59+05:00", employmentType: "INTERN", industry: job.team, directApply: false, url, hiringOrganization: { "@type": "Organization", "@id": `${origin}/#organization`, name: "Miras AI", sameAs: `${origin}/`, logo: `${origin}/assets/miras-logo.png` }, jobLocation: { "@type": "Place", address: { "@type": "PostalAddress", addressLocality: "Lahore", addressRegion: "Punjab", addressCountry: "PK" } }, applicantLocationRequirements: { "@type": "Country", name: "Pakistan" } });
  }
  return `<script type="application/ld+json">${JSON.stringify({ "@context": "https://schema.org", "@graph": graph }).replaceAll("<", "\\u003c")}</script>`;
}

function enhance(html, route) {
  html = html.replaceAll('/v1/privacy', '/privacy-policy').replaceAll('/v1/terms', '/terms-of-service').replaceAll('/v1', '');
  html = html.replace(/<meta name="robots"[^>]*>/gi, "").replace(/<meta name="googlebot"[^>]*>/gi, "");
  html = html.replace(/<link rel="canonical"[^>]*>/gi, "");
  html = html.replace(/<meta property="og:[^"]+"[^>]*>/gi, "").replace(/<meta name="twitter:[^"]+"[^>]*>/gi, "");
  html = html.replace(/<script type="application\/ld\+json">[\s\S]*?<\/script>/gi, "");
  html = html.replace(/\saria-label="View details for [^"]+"/g, "");
  if (route.path === "/") html = html.replace('<section class="py-24 lg:py-32" id="start-project">', `${homepageFaq}<section class="py-24 lg:py-32" id="start-project">`);
  const title = titleContent(html);
  let description = metaContent(html, "description") || "Miras AI product engineering and AI systems services.";
  if (serviceDescriptions[route.path]) description = serviceDescriptions[route.path];
  html = html.replace(/<meta name="description" content="[^"]*">/i, `<meta name="description" content="${esc(description)}">`);
  const canonical = `${origin}${route.path === "/" ? "/" : route.path}`;
  const head = `<meta name="robots" content="index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1"><meta name="googlebot" content="index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1"><link rel="canonical" href="${canonical}"><meta property="og:type" content="website"><meta property="og:site_name" content="Miras AI"><meta property="og:locale" content="en_US"><meta property="og:title" content="${esc(title)}"><meta property="og:description" content="${esc(description)}"><meta property="og:url" content="${canonical}"><meta property="og:image" content="${origin}/og-cover.jpg"><meta property="og:image:width" content="1200"><meta property="og:image:height" content="630"><meta property="og:image:alt" content="Miras AI product engineering and AI systems"><meta name="twitter:card" content="summary_large_image"><meta name="twitter:title" content="${esc(title)}"><meta name="twitter:description" content="${esc(description)}"><meta name="twitter:image" content="${origin}/og-cover.jpg">${schemas(route, title, description)}`;
  html = html.replace("</head>", `${head}</head>`);
  return html;
}

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
await cp(source, archive, { recursive: true });

for (const file of await files(archive)) {
  if (!file.endsWith(".html")) continue;
  let html = await readFile(file, "utf8");
  const robotsTag = '<meta name="robots" content="noindex, follow"><meta name="googlebot" content="noindex, follow">';
  html = html.replace(/<meta name="robots"[^>]*>/gi, "").replace(/<meta name="googlebot"[^>]*>/gi, "").replace("</head>", `${robotsTag}</head>`);
  await writeFile(file, html);
}

for (const [rel, route] of Object.entries(routes)) {
  const input = join(source, rel);
  const output = route.path === "/" ? join(out, "index.html") : join(out, route.path.slice(1), "index.html");
  await mkdir(dirname(output), { recursive: true });
  await writeFile(output, enhance(await readFile(input, "utf8"), route));
}

await cp(join(source, "assets"), join(out, "assets"), { recursive: true });
await cp(join(source, "styles.css"), join(out, "styles.css"));
await cp(join(source, "site.js"), join(out, "site.js"));
for (const file of ["og-cover.jpg", "robots.txt", "sitemap.xml", "llms.txt", "humans.txt", "site.webmanifest", "404.html", "miras-gold-mark.png", "miras-gold-transparent.png", "miras-gold-wordmark.webp", "miras-header-logo.png", "miras-logo.png", "miras-mark.png", "miras-nav-mark.png", "miras-primary-light.png", "miras-urdu-mark.png"]) {
  await cp(join("public", file), join(out, file));
}
await cp("public/projects", join(out, "projects"), { recursive: true });
await rm(".build-v2", { recursive: true, force: true });
console.log(`Assembled canonical root (${Object.keys(routes).length} pages), /v1 archive and /v2 archive.`);

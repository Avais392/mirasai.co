// Builds mirasai.co from sites/main and the /v3 preview from sites/v3. Runs after assemble-site.mjs.
// Each site folder carries its own text in content.mjs and work.mjs, so /v3 can change without touching mirasai.co.
import { cp, mkdir, readFile, writeFile } from "node:fs/promises";
import { dirname, join } from "node:path";

const origin = "https://mirasai.co";
// Last content update, used as dateModified on case studies.
const modified = "2026-11-05";
const outputs = [{ dir: "dist", source: "sites/main", preview: false }, { dir: join("dist", "v3"), source: "sites/v3", preview: true }];

const routes = {
  "index.html": { path: "/", label: "Home" },
  "about/index.html": { path: "/about", label: "About" },
  "approach/index.html": { path: "/approach", label: "Approach" },
  "work/index.html": { path: "/work", label: "Work" },
  "services/index.html": { path: "/services", label: "Services" },
  "services/product-platform-engineering/index.html": { path: "/services/product-platform-engineering", label: "Product and platform engineering", service: true },
  "services/mobile-systems/index.html": { path: "/services/mobile-systems", label: "Mobile engineering", service: true },
  "services/applied-ai-automation/index.html": { path: "/services/applied-ai-automation", label: "Applied AI and automation", service: true },
  "services/voice-language-data/index.html": { path: "/services/voice-language-data", label: "Voice and language data", service: true },
  "services/technical-leadership/index.html": { path: "/services/technical-leadership", label: "Engineering leadership", service: true },
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

const canonicalContentStyles = `<style>
.miras-product-context{margin-top:1.5rem;padding:1.25rem 1.35rem;border-left:2px solid hsl(var(--accent));background:hsl(var(--secondary));}
.miras-product-context>p:first-child,.miras-supporting-label{font-size:.7rem;font-weight:700;letter-spacing:.14em;text-transform:uppercase;color:hsl(var(--accent));}
.miras-product-context blockquote{margin:.65rem 0 0;font-size:.95rem;line-height:1.75;color:hsl(var(--foreground));}
.miras-product-context .miras-supporting-label{margin-top:1rem;color:hsl(var(--muted-foreground));line-height:1.6;}
.miras-earlier-work{margin-top:5rem;padding-top:4.5rem;border-top:1px solid hsl(var(--border));}
.miras-earlier-work-heading{max-width:48rem;}
.miras-earlier-work-heading h2{margin-top:.65rem;font-family:var(--font-heading);font-size:clamp(2rem,4vw,3.25rem);line-height:1.05;letter-spacing:-.035em;}
.miras-earlier-work-heading>p:last-child{margin-top:1rem;max-width:42rem;line-height:1.75;color:hsl(var(--muted-foreground));}
.miras-earlier-work-grid{display:grid;margin-top:2.25rem;border:1px solid hsl(var(--border));}
.miras-earlier-work-grid article{padding:1.75rem;background:hsl(var(--background));}
.miras-earlier-work-grid article+article{border-top:1px solid hsl(var(--border));}
.miras-earlier-work-grid span{font-size:.72rem;color:hsl(var(--muted-foreground));}
.miras-earlier-work-grid h3{margin-top:1.2rem;font-family:var(--font-heading);font-size:1.2rem;}
.miras-earlier-work-grid p{margin-top:.8rem;font-size:.9rem;line-height:1.7;color:hsl(var(--muted-foreground));}
.miras-earlier-work-grid .miras-earlier-evidence{padding-top:.8rem;border-top:1px solid hsl(var(--border));font-size:.78rem;font-style:italic;}
.miras-current-initiative{display:flex;align-items:flex-end;justify-content:space-between;gap:2rem;margin-top:2rem;padding:2rem;border:1px solid hsl(var(--border));background:hsl(var(--secondary));}
.miras-current-initiative>div{max-width:43rem;}
.miras-current-initiative h2{margin-top:.6rem;font-family:var(--font-heading);font-size:1.75rem;}
.miras-current-initiative>div>h2+p{margin-top:.8rem;line-height:1.7;color:hsl(var(--muted-foreground));}
.miras-initiative-link{display:inline-flex;margin-top:1rem;color:hsl(var(--accent));font-size:.85rem;font-weight:700;}
.miras-initiative-link:hover{text-decoration:underline;text-underline-offset:.25rem;}
.miras-initiative-role{flex:none;padding:.55rem .8rem;background:hsl(var(--primary));color:hsl(var(--primary-foreground));font-size:.72rem;font-weight:700;text-transform:uppercase;letter-spacing:.12em;}
.miras-leadership-stats{display:grid;grid-template-columns:repeat(3,minmax(0,1fr));margin-top:1.75rem;border:1px solid hsl(var(--border));}
.miras-leadership-stats>div{padding:1rem;}
.miras-leadership-stats>div+div{border-left:1px solid hsl(var(--border));}
.miras-leadership-stats strong{display:block;font-family:var(--font-heading);font-size:1.35rem;line-height:1.1;color:hsl(var(--foreground));}
.miras-leadership-stats span{display:block;margin-top:.45rem;font-size:.72rem;line-height:1.45;color:hsl(var(--muted-foreground));}
.miras-professional-record{display:inline-flex;margin-top:1.5rem;font-size:.85rem;font-weight:600;color:hsl(var(--accent));}
.miras-professional-record:hover{text-decoration:underline;text-underline-offset:.25rem;}
@media(min-width:768px){.miras-earlier-work-grid{grid-template-columns:repeat(3,minmax(0,1fr));}.miras-earlier-work-grid article+article{border-top:0;border-left:1px solid hsl(var(--border));}}
@media(max-width:640px){.miras-current-initiative{align-items:flex-start;flex-direction:column}.miras-leadership-stats{grid-template-columns:1fr}.miras-leadership-stats>div+div{border-left:0;border-top:1px solid hsl(var(--border));}}
</style>`;

function esc(value) {
  return value.replaceAll("&", "&amp;").replaceAll('"', "&quot;").replaceAll("<", "&lt;").replaceAll(">", "&gt;");
}

function metaContent(html, name) {
  return html.match(new RegExp(`<meta name=["']${name}["'] content=(["'])(.*?)\\1`, "i"))?.[2] || "";
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
      sameAs: ["https://www.linkedin.com/company/mirasai/about/"], ...(site.founder && { founder: site.founder }),
      contactPoint: [{ "@type": "ContactPoint", contactType: "sales", email: "hello@mirasai.co", availableLanguage: ["English", "Urdu"] }, { "@type": "ContactPoint", contactType: "recruiting", email: "recruitment@mirasai.co" }],
    });
    graph.push({ "@type": "WebSite", "@id": `${origin}/#website`, url: `${origin}/`, name: "Miras AI", publisher: { "@id": `${origin}/#organization` }, inLanguage: "en-US" });
  }
  graph.push({ "@type": "WebPage", "@id": `${url}#webpage`, url, name: title, description, isPartOf: { "@id": `${origin}/#website` }, about: { "@id": `${origin}/#organization` }, inLanguage: "en-US" });
  if (route.path !== "/") {
    const crumbs = [{ "@type": "ListItem", position: 1, name: "Home", item: `${origin}/` }];
    if (route.path.startsWith("/services/")) crumbs.push({ "@type": "ListItem", position: 2, name: "Services", item: `${origin}/services` });
    if (route.path.startsWith("/careers/")) crumbs.push({ "@type": "ListItem", position: 2, name: "Careers", item: `${origin}/careers` });
    if (route.path.startsWith("/work/")) crumbs.push({ "@type": "ListItem", position: 2, name: "Work", item: `${origin}/work` });
    if (route.path.startsWith("/insights/")) crumbs.push({ "@type": "ListItem", position: 2, name: "Insights", item: `${origin}/insights` });
    crumbs.push({ "@type": "ListItem", position: crumbs.length + 1, name: route.label, item: url });
    graph.push({ "@type": "BreadcrumbList", itemListElement: crumbs });
  }
  // Case studies that carry a publish date (and optionally an image) get Article data for search and AI tools.
  const study = route.study;
  if (study?.published) graph.push({ "@type": "Article", "@id": `${url}#article`, headline: `${study.name} case study`, description, url, ...(study.shareImage && { image: `${origin}${study.shareImage.src}` }), datePublished: study.published, dateModified: modified, author: { "@id": `${origin}/#organization` }, publisher: { "@id": `${origin}/#organization` }, mainEntityOfPage: { "@id": `${url}#webpage` }, about: study.sector });
  if (route.service) graph.push({ "@type": "Service", "@id": `${url}#service`, name: route.label, description, url, provider: { "@id": `${origin}/#organization` }, areaServed: ["United States", "Pakistan"] });
  if (route.article) graph.push({ "@type": "Article", "@id": `${url}#article`, headline: route.label, description, url, datePublished: "2026-10-26", dateModified: "2026-10-26", author: { "@id": `${origin}/#organization` }, publisher: { "@id": `${origin}/#organization` }, mainEntityOfPage: { "@id": `${url}#webpage` } });
  if (route.job) {
    const job = site.jobs[route.job];
    graph.push({ "@type": "JobPosting", title: job.title, description: job.description, datePosted: "2026-10-20", employmentType: "INTERN", industry: job.team, directApply: false, url, hiringOrganization: { "@type": "Organization", "@id": `${origin}/#organization`, name: "Miras AI", sameAs: `${origin}/`, logo: `${origin}/assets/miras-logo.png` }, jobLocation: { "@type": "Place", address: { "@type": "PostalAddress", addressLocality: "Lahore", addressRegion: "Punjab", addressCountry: "PK" } }, applicantLocationRequirements: { "@type": "Country", name: "Pakistan" } });
  }
  return `<script type="application/ld+json">${JSON.stringify({ "@context": "https://schema.org", "@graph": graph }).replaceAll("<", "\\u003c")}</script>`;
}

function enhance(html, route, { preview: isPreview = false } = {}) {
  html = html
    .replaceAll('href="/v1"', 'href="/"')
    .replaceAll("href='/v1'", "href='/'")
    .replaceAll('/v1/privacy', '/privacy-policy')
    .replaceAll('/v1/terms', '/terms-of-service')
    .replaceAll('/v1', '');
  html = html
    .replaceAll(
      "Avais brings production engineering experience across enterprise commerce, health and fitness, and telemedicine. Before co-founding Miras AI, he worked as a senior mobile engineer on products including CP AXTRA's React Native commerce ecosystem, the AimFit fitness platform, and Your Doctors Online's mobile and web workflows.",
      "Avais brings hands-on experience building and improving production software across enterprise commerce, health and fitness, and telemedicine. His work spans CP AXTRA's multi-market React Native commerce ecosystem, AimFit's consumer fitness platform, and Your Doctors Online's mobile and web workflows.",
    )
    .replaceAll(
      "The track record below reflects Avais's prior employment history. These products were not built by Miras AI.",
      "That experience informs how Miras AI approaches architecture, delivery risk and production readiness.",
    )
    .replaceAll("Prior engineering track record", "Selected product experience");
  if (route.path === "/about") {
    html = html.replace(
      "<p class=\"text-xs text-muted-foreground/50 italic\" style=\"white-space:pre-line\">That experience informs how Miras AI approaches architecture, delivery risk and production readiness.</p>",
      '<p class="text-xs text-muted-foreground/50 italic" style="white-space:pre-line">That experience informs how Miras AI approaches architecture, delivery risk and production readiness.</p><div class="miras-leadership-stats" aria-label="Avais professional experience"><div><strong>8+ years</strong><span>Software and product engineering</span></div><div><strong>6+ years</strong><span>React Native and cross-platform systems</span></div><div><strong>4 markets</strong><span>Regional commerce delivery</span></div></div><a class="miras-professional-record" href="https://avais.me" target="_blank" rel="noopener noreferrer">View Avais’s complete professional record →</a>',
    );
  }
  if (route.path === "/work") html = html.replace("<!-- live-apps -->", () => site.liveApps);
  if (route.path === "/services") html = html.replace(/<main>[\s\S]*?<\/main>/, site.servicesOverviewPage);
  html = html.replace("</footer>", '<div class="miras-footer-wordmark" aria-hidden="true">MIRAS AI</div></footer>');
  // Individual service pages stay published; on-site links point to that service on the overview unless marked data-detail.
  html = html.replace(/href="\/services\/([a-z-]+)"(?! data-detail)/g, 'href="/services#$1"');
  html = html.replace(/<meta name="robots"[^>]*>/gi, "").replace(/<meta name="googlebot"[^>]*>/gi, "");
  html = html.replace(/<link rel="canonical"[^>]*>/gi, "");
  html = html.replace(/<meta property="og:[^"]+"[^>]*>/gi, "").replace(/<meta name="twitter:[^"]+"[^>]*>/gi, "");
  html = html.replace(/<script type="application\/ld\+json">[\s\S]*?<\/script>/gi, "");
  html = html.replace(/\saria-label="View details for [^"]+"/g, "");
  if (route.path === "/") html = html.replace('<section class="py-24 lg:py-32" id="start-project">', `${site.homepageFaq}<section class="py-24 lg:py-32" id="start-project">`);
  const title = titleContent(html);
  let description = metaContent(html, "description") || "Miras AI product engineering and AI systems services.";
  if (site.serviceDescriptions[route.path]) description = site.serviceDescriptions[route.path];
  html = html.replace(/<meta name="description" content="[^"]*">/i, `<meta name="description" content="${esc(description)}">`);
  const canonical = `${origin}${route.path === "/" ? "/" : route.path}`;
  const robots = isPreview
    ? "noindex, follow, noarchive"
    : "index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1";
  const shareImage = route.study?.shareImage ?? { src: "/og-cover.jpg", width: 1200, height: 630, alt: "Miras AI product engineering and AI systems" };
  const head = `<meta name="robots" content="${robots}"><meta name="googlebot" content="${robots}"><link rel="canonical" href="${canonical}"><meta property="og:type" content="website"><meta property="og:site_name" content="Miras AI"><meta property="og:locale" content="en_US"><meta property="og:title" content="${esc(title)}"><meta property="og:description" content="${esc(description)}"><meta property="og:url" content="${canonical}"><meta property="og:image" content="${origin}${shareImage.src}"><meta property="og:image:width" content="${shareImage.width}"><meta property="og:image:height" content="${shareImage.height}"><meta property="og:image:alt" content="${esc(shareImage.alt)}"><meta name="twitter:card" content="summary_large_image"><meta name="twitter:title" content="${esc(title)}"><meta name="twitter:description" content="${esc(description)}"><meta name="twitter:image" content="${origin}${shareImage.src}">${schemas(route, title, description)}`;
  if (route.path.startsWith("/work") || route.path === "/about") html = html.replace("</head>", `${canonicalContentStyles}</head>`);
  html = html.replace("</head>", `${head}</head>`);
  if (isPreview) html = html.replace(/\b(href|src|srcset|action)=(['"])\/(?!v1(?:\/|$)|v2(?:\/|$)|v3(?:\/|$))/g, "$1=$2/v3/");
  return html;
}

// The site being built; enhance() and schemas() read its text from here.
let site;
for (const { dir, source, preview } of outputs) {
  site = { ...await import(new URL(`../${source}/content.mjs`, import.meta.url)), ...await import(new URL(`../${source}/work.mjs`, import.meta.url)) };
  for (const [rel, route] of Object.entries(routes)) {
    const output = route.path === "/" ? join(dir, "index.html") : join(dir, route.path.slice(1), "index.html");
    await mkdir(dirname(output), { recursive: true });
    await writeFile(output, enhance(await readFile(join(source, rel), "utf8"), route, { preview }));
  }

  const workShell = await readFile(join(source, "work/index.html"), "utf8");
  for (const study of site.caseStudies) {
    const route = { path: `/work/${study.slug}`, label: study.name, study };
    const html = workShell
      .replace(/<main[\s\S]*?<\/main>/, () => site.caseStudyMain(study))
      .replace(/<title>.*?<\/title>/, () => `<title>${study.name} case study | Miras AI</title>`)
      .replace(/<meta name="description" content="[^"]*">/, () => `<meta name="description" content="${esc(study.description ?? study.summary)}">`);
    const output = join(dir, route.path.slice(1), "index.html");
    await mkdir(dirname(output), { recursive: true });
    await writeFile(output, enhance(html, route, { preview }));
  }

  await cp(join(source, "assets"), join(dir, "assets"), { recursive: true });
  await cp(join(source, "styles.css"), join(dir, "styles.css"));
  await cp(join(source, "site.js"), join(dir, "site.js"));
  for (const file of ["og-cover.jpg", "robots.txt", "sitemap.xml", "llms.txt", "humans.txt", "site.webmanifest", "404.html", "miras-gold-mark.png", "miras-gold-transparent.png", "miras-gold-wordmark.webp", "miras-header-logo.png", "miras-logo.png", "miras-mark.png", "miras-nav-mark.png", "miras-primary-light.png", "miras-urdu-mark.png"]) {
    await cp(join(source, file), join(dir, file));
  }
  await cp(join(source, "projects"), join(dir, "projects"), { recursive: true });
  console.log(`Assembled ${dir} (${Object.keys(routes).length + site.caseStudies.length} pages) from ${source}.`);
}

import { mkdir, readFile, rm, writeFile } from "node:fs/promises";
import { dirname, join } from "node:path";
const outputDir = process.env.OUTPUT_DIR || "dist";
const ssrDir = process.env.SSR_DIR || "dist-ssr";
const urlPrefix = (process.env.URL_PREFIX || "").replace(/\/$/, "");
const robots = process.env.ROBOTS || "index";
const { render } = await import(`../${ssrDir}/entry-server.js`);

const origin = "https://mirasai.co";
const organizationId = `${origin}/#organization`;

const routes = [
  { path: "/", title: "Miras AI | Product Engineering, Applied AI & Language Data", description: "Miras AI delivers senior product engineering, applied AI, mobile systems and multilingual language-data capability from teams in the United States and Pakistan.", label: "Home" },
  { path: "/about", title: "About Miras AI | Leadership, Locations & Purpose", description: "Meet the founder-led Miras AI team: a US-registered engineering company with delivery operations in Bloomington, Indiana and Lahore, Pakistan.", label: "About" },
  { path: "/work", title: "Engineering Work & Experience | Miras AI", description: "Review the production engineering experience behind Miras AI across enterprise commerce, mobile fitness and telemedicine platforms.", label: "Work" },
  { path: "/services", title: "Product Engineering & AI Services | Miras AI", description: "Explore product engineering, React Native mobile systems, applied AI, South Asian voice and language data, and fractional technical leadership.", label: "Services" },
  { path: "/services/product-platform-engineering", title: "Product & Platform Engineering Services | Miras AI", description: "Senior product discovery, architecture, web and mobile engineering, integrations, QA and production release for new platforms and product expansion.", label: "Product and platform engineering", parent: ["Services", "/services"], service: true },
  { path: "/services/mobile-systems", title: "React Native & Mobile Engineering Services | Miras AI", description: "React Native architecture, native integrations, payments, deep links, real-time communication and multi-market mobile release engineering.", label: "Mobile engineering", parent: ["Services", "/services"], service: true },
  { path: "/services/applied-ai-automation", title: "Applied AI & Workflow Automation Services | Miras AI", description: "Production AI workflows with retrieval, model integrations, evaluation, permissions, human review, exception handling and observability.", label: "Applied AI and automation", parent: ["Services", "/services"], service: true },
  { path: "/services/voice-language-data", title: "South Asian Voice & Language Data Services | Miras AI", description: "Speech and language-data programs across 45+ South Asian languages, including collection, transcription, annotation and quality assurance.", label: "Voice and language data", parent: ["Services", "/services"], service: true },
  { path: "/services/technical-leadership", title: "Fractional CTO & Engineering Leadership | Miras AI", description: "Architecture, roadmap, delivery governance, technical due diligence and senior engineering leadership without a full-time executive hire.", label: "Engineering leadership", parent: ["Services", "/services"], service: true },
  { path: "/careers", title: "Careers at Miras AI | Open Roles in Lahore", description: "Explore open roles at Miras AI in Lahore, Pakistan, across engineering, AI, language data and growth.", label: "Careers" },
  { path: "/careers/full-stack-engineering-intern", title: "Full-Stack Engineering Intern in Lahore | Miras AI Careers", description: "Apply for the Full-Stack Engineering Intern (AI/ML focus) role at Miras AI in Lahore: build frontend, backend and practical AI features end to end.", label: "Full-Stack Engineering Intern (AI/ML Focus)", parent: ["Careers", "/careers"], job: { title: "Full-Stack Engineering Intern (AI/ML Focus)", team: "Engineering", summary: "Build practical features you can explain end to end, across frontend and UI, APIs and backend, data and AI services, and testing." } },
  { path: "/careers/business-development-sales-intern", title: "BD & Sales Intern in Lahore | Miras AI Careers", description: "Apply for the Business Development & Sales Intern role at Miras AI in Lahore: company research, tailored outreach, lead qualification and follow-ups.", label: "Business Development & Sales Intern", parent: ["Careers", "/careers"], job: { title: "Business Development & Sales Intern", team: "Growth", summary: "Turn thoughtful research into useful conversations through company research, outreach writing, lead qualification and follow-ups." } },
  { path: "/careers/social-media-visual-content-intern", title: "Social Media Intern in Lahore | Miras AI Careers", description: "Apply for the Social Media & Visual Content Intern role at Miras AI in Lahore: plan content, design posts and carousels, and keep the brand consistent.", label: "Social Media & Visual Content Intern", parent: ["Careers", "/careers"], job: { title: "Social Media & Visual Content Intern", team: "Marketing", summary: "Design clear, on-brand content that communicates ideas well, from content planning and post design to captions and brand consistency." } },
  { path: "/contact", title: "Contact Miras AI | Discuss an Engineering or AI Project", description: "Discuss a product, AI, mobile or multilingual systems mandate with Miras AI. We aim to respond within one business day.", label: "Contact" },
  { path: "/cookie-policy", title: "Cookie Policy | Miras AI", description: "Learn which browser storage the Miras AI website uses, what it does and how to control it.", label: "Cookie Policy" },
  { path: "/privacy-policy", title: "Privacy Policy | Miras AI", description: "Learn how Miras AI handles enquiries, job applications, technical access data, international transfers and privacy requests.", label: "Privacy Policy" },
  { path: "/terms-of-service", title: "Terms of Service | Miras AI", description: "Read the terms that govern access to the Miras AI website, including permitted use, intellectual property, disclaimers and Indiana law.", label: "Terms of Service" },
];

const template = await readFile(join(outputDir, "index.html"), "utf8");

function escapeHtml(value) {
  return value.replaceAll("&", "&amp;").replaceAll('"', "&quot;").replaceAll("<", "&lt;").replaceAll(">", "&gt;");
}

function breadcrumb(route) {
  if (route.path === "/") return null;
  const items = [{ "@type": "ListItem", position: 1, name: "Home", item: `${origin}/` }];
  if (route.parent) items.push({ "@type": "ListItem", position: 2, name: route.parent[0], item: `${origin}${route.parent[1]}` });
  items.push({ "@type": "ListItem", position: items.length + 1, name: route.label, item: `${origin}${route.path}` });
  return { "@type": "BreadcrumbList", itemListElement: items };
}

function routeSchema(route) {
  const url = `${origin}${route.path}`;
  const graph = [{
    "@type": "WebPage",
    "@id": `${url}#webpage`,
    url,
    name: route.title,
    description: route.description,
    isPartOf: { "@id": `${origin}/#website` },
    about: { "@id": organizationId },
    inLanguage: "en-US",
  }];
  const trail = breadcrumb(route);
  if (trail) graph.push(trail);
  if (route.service) graph.push({
    "@type": "Service",
    "@id": `${url}#service`,
    name: route.label,
    description: route.description,
    url,
    provider: { "@id": organizationId },
    areaServed: [{ "@type": "Country", name: "United States" }, { "@type": "Country", name: "Pakistan" }],
  });
  if (route.job) graph.push({
    "@type": "JobPosting",
    title: route.job.title,
    description: route.job.summary,
    datePosted: "2026-10-21",
    employmentType: "INTERN",
    industry: route.job.team,
    directApply: false,
    url,
    hiringOrganization: { "@type": "Organization", name: "Miras AI", sameAs: `${origin}/`, logo: `${origin}/miras-gold-wordmark.webp` },
    jobLocation: { "@type": "Place", address: { "@type": "PostalAddress", addressLocality: "Lahore", addressRegion: "Punjab", addressCountry: "PK" } },
    applicantLocationRequirements: { "@type": "Country", name: "Pakistan" },
  });
  return JSON.stringify({ "@context": "https://schema.org", "@graph": graph }).replaceAll("<", "\\u003c");
}

function routeHtml(route) {
  const canonical = `${origin}${urlPrefix}${route.path === "/" ? "/" : route.path}`;
  const safeTitle = escapeHtml(route.title);
  const safeDescription = escapeHtml(route.description);
  const body = render(`${urlPrefix}${route.path}`);
  return template
    .replace(/<title>.*?<\/title>/, `<title>${safeTitle}</title>`)
    .replace(/(<meta name="title" content=").*?(" \/>)/, `$1${safeTitle}$2`)
    .replace(/(<meta name="description" content=").*?(" \/>)/, `$1${safeDescription}$2`)
    .replace(/(<meta property="og:url" content=").*?(" \/>)/, `$1${canonical}$2`)
    .replace(/(<meta property="og:title" content=").*?(" \/>)/, `$1${safeTitle}$2`)
    .replace(/(<meta property="og:description" content=").*?(" \/>)/, `$1${safeDescription}$2`)
    .replace(/(<meta name="twitter:title" content=").*?(" \/>)/, `$1${safeTitle}$2`)
    .replace(/(<meta name="twitter:description" content=").*?(" \/>)/, `$1${safeDescription}$2`)
    .replace(/(<link rel="canonical" href=").*?(" \/>)/, `$1${canonical}$2`)
    .replace(/(<meta name="robots" content=").*?(" \/>)/, `$1${robots === "noindex" ? "noindex, follow" : "index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1"}$2`)
    .replace(/(<meta name="googlebot" content=").*?(" \/>)/, `$1${robots === "noindex" ? "noindex, follow" : "index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1"}$2`)
    .replace("</head>", `    <script type="application/ld+json">${routeSchema(route)}</script>\n  </head>`)
    .replace('<div id="root"></div>', `<div id="root" data-prerendered="true">${body}</div>`);
}

for (const route of routes) {
  const output = route.path === "/" ? join(outputDir, "index.html") : join(outputDir, route.path.slice(1), "index.html");
  await mkdir(dirname(output), { recursive: true });
  await writeFile(output, routeHtml(route));
}

await rm(ssrDir, { recursive: true, force: true });
console.log(`Statically rendered ${routes.length} route entry points.`);

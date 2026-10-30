// Builds the /v3 site from its own source in sites/v3. Runs after assemble-site.mjs; it never writes outside dist/v3.
import { cp, mkdir, readFile, writeFile } from "node:fs/promises";
import { dirname, join } from "node:path";
import { caseStudies, caseStudyMain, liveApps } from "./v3-work.mjs";

const origin = "https://mirasai.co";
const source = "sites/v3";
const preview = join("dist", "v3");

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

const servicesOverviewPage = `<main class="miras-services-overview">
  <section class="miras-services-intro"><div class="miras-services-shell"><p class="miras-eyebrow">What we build</p><h1>Services built around real delivery</h1><p>We work where product, architecture and operations meet: the points where a polished interface still has to survive authentication, payments, real-time behaviour, native constraints, releases and production edge cases. Not just the screen, but the architecture, integrations, release pipeline, security and maintainability behind it.</p></div></section>
  <section class="miras-services-list" aria-label="Miras AI services"><div class="miras-services-shell">
    <article class="miras-service-row"><div class="miras-service-summary"><span>01</span><h2>Product and platform engineering</h2><p class="miras-service-kicker">From first decision to production</p><p>We help founders and teams turn a product opportunity into a maintainable system. Discovery, experience design, frontend and backend engineering, integrations, testing and launch form one coherent delivery path.</p><p class="miras-service-audience">Founders and product teams moving from opportunity to working software.</p></div><div class="miras-service-deliverables"><p>Deliverables</p><ul><li>Product and technical discovery</li><li>MVP scope and milestones</li><li>Web and mobile application builds</li><li>API and integration design</li><li>Authentication, payments and notifications</li><li>QA, deployment, analytics and handover</li></ul><div class="miras-proven-in"><p>Proven in</p><ul><li><a href="/work/your-doctors-online">Your Doctors Online</a></li><li><a href="/work/wrap-and-co">Wrap and Co</a></li><li><a href="/work#more-products">AgriBazaar</a></li><li><a href="/work#more-products">Pukaar</a></li></ul></div></div></article>
    <article class="miras-service-row"><div class="miras-service-summary"><span>02</span><h2>Mobile engineering</h2><p class="miras-service-kicker">For products with real complexity</p><p>We work across the app and the systems around it: architecture, native integrations, authentication, WebViews, deep links, analytics, real-time behavior and release operations.</p><p class="miras-service-audience">CTOs and engineering leads with complex mobile codebases or release bottlenecks.</p></div><div class="miras-service-deliverables"><p>Deliverables</p><ul><li>React Native feature and architecture work</li><li>iOS and Android build diagnostics</li><li>App modernization</li><li>Payment and commerce integrations</li><li>Real-time chat, audio and video</li><li>CI/CD, signing and store releases</li></ul><div class="miras-proven-in"><p>Proven in</p><ul><li><a href="/work/makro-pro">Makro PRO</a></li><li><a href="/work/aimfit">AimFit</a></li><li><a href="/work/retailo">RetailO</a></li></ul></div></div></article>
    <article class="miras-service-row"><div class="miras-service-summary"><span>03</span><h2>Applied AI and automation</h2><p class="miras-service-kicker">Put AI to work inside a real process</p><p>A useful AI feature needs the right data, clear boundaries and a way to measure whether it helps. We design and implement retrieval, model integrations, agents and automation around actual tasks, approvals and exceptions.</p><p class="miras-service-audience">Product teams and operations leaders who need AI inside an existing workflow.</p></div><div class="miras-service-deliverables"><p>Deliverables</p><ul><li>Use-case assessment and feasibility</li><li>RAG and knowledge retrieval</li><li>LLM and provider integration</li><li>Tool-calling agents with human review</li><li>Workflow orchestration and document processes</li><li>Evaluation, observability and handover</li><li>LLM gateway: one stable interface across model providers, with routing, metering and governance</li><li>Guardrails: access control, prompt and output checks, structured responses, escalation</li><li>Local and hybrid models (Ollama, Qwen, Phi) where privacy, cost or offline access matter</li><li>On-premise deployment patterns for regulated or private workloads</li><li>Low-cost automation pipelines with queues, retries and human approval</li></ul><div class="miras-proven-in"><p>Proven in</p><ul><li><a href="/work/kaawu">KAAWU</a></li><li><a href="/work/wrap-and-co">Wrap and Co</a></li></ul></div></div></article>
    <article class="miras-service-row"><div class="miras-service-summary"><span>04</span><h2>Voice and language data</h2><p class="miras-service-kicker">Systems shaped around your data</p><p>For teams working with calls, speech interfaces or underserved languages, we investigate transcription quality, dataset readiness, analysis and deployment choices before recommending a build.</p><p class="miras-service-audience">Contact centres and enterprises with multilingual voice or call-analysis needs.</p></div><div class="miras-service-deliverables"><p>Deliverables</p><ul><li>Call and data audit</li><li>ASR and TTS feasibility</li><li>Speech dataset preparation and quality control</li><li>Transcription and QA analytics prototypes</li><li>Agent-assist and voice-agent architecture</li><li>Privacy and on-premise deployment assessment</li><li>Voice AI architecture combining turn detection, streaming or batch ASR, an LLM or workflow layer, TTS and WebSockets</li></ul><div class="miras-proven-in"><p>Proven in</p><ul><li><a href="/work#omnilingual">Meta Omnilingual ASR (39 languages)</a></li><li><a href="/work#ai4pakistan">AI4Pakistan</a></li></ul></div></div></article>
    <article class="miras-service-row"><div class="miras-service-summary"><span>05</span><h2>Engineering leadership</h2><p class="miras-service-kicker">Senior technical ownership when it matters most</p><p>We help make the early decisions, unblock difficult work and keep product and engineering aligned. The engagement can be advisory, embedded or tied to a delivery scope.</p><p class="miras-service-audience">Founders and product owners who need a senior technical owner without a full-time hire.</p></div><div class="miras-service-deliverables"><p>Deliverables</p><ul><li>Feasibility and discovery</li><li>Architecture and buy-versus-build decisions</li><li>Roadmap and code review</li><li>Vendor and team assessment</li><li>Hiring and mentoring support</li><li>Delivery governance and technical acceptance</li><li>Technology strategy</li><li>Solution architecture (components, boundaries, failure modes, deployment)</li><li>Technical scoping (requirements, milestones, acceptance criteria, estimates)</li><li>Vendor and model selection (cost, privacy, latency, lock-in)</li></ul><div class="miras-proven-in"><p>Proven in</p><ul><li><a href="/work/makro-pro">Makro PRO (multi-market architecture)</a></li><li><a href="/work#ai4pakistan">AI4Pakistan</a></li></ul></div></div></article>
  </div></section>
  <section class="miras-ai-principles" aria-labelledby="ai-principles-title"><div class="miras-services-shell"><p class="miras-eyebrow">AI principles</p><h2 id="ai-principles-title">How we build AI systems</h2><ol><li><span>01</span><p>Start with a measurable user task and a held-out evaluation set, not a model demo.</p></li><li><span>02</span><p>Keep provider choice behind a gateway, with a controlled path to local or on-prem inference.</p></li><li><span>03</span><p>Separate retrieval quality, model quality and application reliability so failures can be diagnosed.</p></li><li><span>04</span><p>Put human approval at high-impact boundaries: publishing, payments, customer communication, clinical decisions.</p></li><li><span>05</span><p>Measure quality, latency, cost and operational burden together before calling a system production-ready.</p></li></ol></div></section>
  <section class="miras-engagements" aria-labelledby="engagement-options-title"><div class="miras-engagements-shell"><p class="miras-eyebrow">How we engage</p><h2 id="engagement-options-title">Engagement options</h2><div class="miras-engagements-grid"><article><h3>Defined project</h3><p>A scoped build with clear milestones and deliverables.</p></article><article><h3>Focused workstream</h3><p>A senior technical resource embedded in your team for a specific area.</p></article><article><h3>Delivery pod</h3><p>A small, accountable team that owns a product workstream end to end.</p></article><article><h3>White-label partner</h3><p>Technical delivery capacity for agencies and studios.</p></article><article><h3>Fractional CTO</h3><p>Architecture, roadmap and delivery ownership on a part-time basis.</p></article></div><p class="miras-engagements-note">Availability and team composition are scoped for each engagement.</p></div></section>
  <section class="miras-services-cta"><div class="miras-services-shell"><div><h2>Not sure which service fits?</h2></div><div><p>Tell us the problem. We will help you figure out the right scope and approach.</p><a href="/contact">Discuss a project <span aria-hidden="true">→</span></a></div></div></section>
</main>`;

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
    if (route.path.startsWith("/work/")) crumbs.push({ "@type": "ListItem", position: 2, name: "Work", item: `${origin}/work` });
    if (route.path.startsWith("/insights/")) crumbs.push({ "@type": "ListItem", position: 2, name: "Insights", item: `${origin}/insights` });
    crumbs.push({ "@type": "ListItem", position: crumbs.length + 1, name: route.label, item: url });
    graph.push({ "@type": "BreadcrumbList", itemListElement: crumbs });
  }
  if (route.service) graph.push({ "@type": "Service", "@id": `${url}#service`, name: route.label, description, url, provider: { "@id": `${origin}/#organization` }, areaServed: ["United States", "Pakistan"] });
  if (route.article) graph.push({ "@type": "Article", "@id": `${url}#article`, headline: route.label, description, url, datePublished: "2026-10-26", dateModified: "2026-10-26", author: { "@id": `${origin}/#organization` }, publisher: { "@id": `${origin}/#organization` }, mainEntityOfPage: { "@id": `${url}#webpage` } });
  if (route.job) {
    const job = jobs[route.job];
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
  if (isPreview && route.path === "/about") {
    html = html.replace(
      "<p class=\"text-xs text-muted-foreground/50 italic\" style=\"white-space:pre-line\">That experience informs how Miras AI approaches architecture, delivery risk and production readiness.</p>",
      '<p class="text-xs text-muted-foreground/50 italic" style="white-space:pre-line">That experience informs how Miras AI approaches architecture, delivery risk and production readiness.</p><div class="miras-leadership-stats" aria-label="Avais professional experience"><div><strong>8+ years</strong><span>Software and product engineering</span></div><div><strong>6+ years</strong><span>React Native and cross-platform systems</span></div><div><strong>4 markets</strong><span>Regional commerce delivery</span></div></div><a class="miras-professional-record" href="https://avais.me" target="_blank" rel="noopener noreferrer">View Avais’s complete professional record →</a>',
    );
  }
  if (route.path === "/work") html = html.replace("<!-- live-apps -->", () => liveApps);
  if (route.path === "/services") html = html.replace(/<main>[\s\S]*?<\/main>/, servicesOverviewPage);
  html = html.replace("</footer>", '<div class="miras-footer-wordmark" aria-hidden="true">MIRAS AI</div></footer>');
  // Individual service pages stay published, but all on-site links point to the overview.
  html = html.replace(/href="\/services\/[a-z-]+"/g, 'href="/services"');
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
  const robots = isPreview
    ? "noindex, follow, noarchive"
    : "index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1";
  const head = `<meta name="robots" content="${robots}"><meta name="googlebot" content="${robots}"><link rel="canonical" href="${canonical}"><meta property="og:type" content="website"><meta property="og:site_name" content="Miras AI"><meta property="og:locale" content="en_US"><meta property="og:title" content="${esc(title)}"><meta property="og:description" content="${esc(description)}"><meta property="og:url" content="${canonical}"><meta property="og:image" content="${origin}/og-cover.jpg"><meta property="og:image:width" content="1200"><meta property="og:image:height" content="630"><meta property="og:image:alt" content="Miras AI product engineering and AI systems"><meta name="twitter:card" content="summary_large_image"><meta name="twitter:title" content="${esc(title)}"><meta name="twitter:description" content="${esc(description)}"><meta name="twitter:image" content="${origin}/og-cover.jpg">${schemas(route, title, description)}`;
  if (isPreview && (route.path.startsWith("/work") || route.path === "/about")) html = html.replace("</head>", `${canonicalContentStyles}</head>`);
  html = html.replace("</head>", `${head}</head>`);
  if (isPreview) html = html.replace(/\b(href|src|action)=(['"])\/(?!v1(?:\/|$)|v2(?:\/|$)|v3(?:\/|$))/g, "$1=$2/v3/");
  return html;
}

for (const [rel, route] of Object.entries(routes)) {
  const input = join(source, rel);
  const previewOutput = route.path === "/" ? join(preview, "index.html") : join(preview, route.path.slice(1), "index.html");
  await mkdir(dirname(previewOutput), { recursive: true });
  await writeFile(previewOutput, enhance(await readFile(input, "utf8"), route, { preview: true }));
}

const workShell = await readFile(join(source, "work/index.html"), "utf8");
for (const study of caseStudies) {
  const route = { path: `/work/${study.slug}`, label: study.name };
  const html = workShell
    .replace(/<main[\s\S]*?<\/main>/, () => caseStudyMain(study))
    .replace(/<title>.*?<\/title>/, () => `<title>${study.name} case study | Miras AI</title>`)
    .replace(/<meta name="description" content="[^"]*">/, () => `<meta name="description" content="${esc(study.summary)}">`);
  const output = join(preview, route.path.slice(1), "index.html");
  await mkdir(dirname(output), { recursive: true });
  await writeFile(output, enhance(html, route, { preview: true }));
}

await cp(join(source, "assets"), join(preview, "assets"), { recursive: true });
await cp(join(source, "styles.css"), join(preview, "styles.css"));
await cp(join(source, "site.js"), join(preview, "site.js"));
for (const file of ["og-cover.jpg", "robots.txt", "sitemap.xml", "llms.txt", "humans.txt", "site.webmanifest", "404.html", "miras-gold-mark.png", "miras-gold-transparent.png", "miras-gold-wordmark.webp", "miras-header-logo.png", "miras-logo.png", "miras-mark.png", "miras-nav-mark.png", "miras-primary-light.png", "miras-urdu-mark.png"]) {
  await cp(join(source, file), join(preview, file));
}
await cp(join(source, "projects"), join(preview, "projects"), { recursive: true });
console.log(`Assembled /v3 (${Object.keys(routes).length + caseStudies.length} pages) from ${source}.`);

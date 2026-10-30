// Content and the shared template for the /v3 Work page app cards and case study pages. Used only by assemble-v3.mjs.

const ext = (href, label) => `<a href="${href}" target="_blank" rel="noopener noreferrer">${label} <span aria-hidden="true">↗</span></a>`;
const num = (i) => String(i + 1).padStart(2, "0");

const sources = {
  time: "https://time.com/collection/best-inventions/2026/meta-omnilingual-asr/",
  makroNews: "https://www.cpaxtra.com/en/newsroom/news/499/makro-pro-ranked-no1-grocery-e-commerce-platform-in-thailand-by-euromonitor-international-a-global-leader-in-market-analysis-and-research",
  ydoConsultations: "https://yourdoctors.online/newsroom/your-doctors-online-crosses-1-5-million-virtual-consultations-in-canada-the-u-s/",
  ydoPatients: "https://yourdoctors.online/newsroom/your-doctors-online-reports-serving-more-than-1-million-patients-through-its-virtual-healthcare-platform/",
  aimfit: "https://www.aim-fit.com/franchise",
  retailoverse: "https://retailo.co/retailoverse",
  retailoMedia: "https://retailo.co/media",
  kaawu: "https://www.instagram.com/kaaw.u/",
  meta: "https://ai.meta.com/blog/omnilingual-asr-advancing-automatic-speech-recognition/",
  datasets: "https://mozilladatacollective.com/organization/cmnenb62r00ptnl07tyo36fft",
};

const apps = {
  makro: { name: "Makro PRO", region: "Thailand, grocery commerce", desc: "Digital grocery and wholesale platform", play: "https://play.google.com/store/apps/details?id=com.makromangoapp.production", ios: "https://apps.apple.com/us/app/makro-pro/id1570380497" },
  psar: { name: "PSAR PLUS", region: "Cambodia, grocery commerce", desc: "Cambodia shopping experience", play: "https://play.google.com/store/apps/details?id=com.makro.makro", ios: "https://apps.apple.com/kh/app/psar-plus/id1447748977" },
  makroMyanmar: { name: "Makro PRO Myanmar", region: "Myanmar, grocery commerce", desc: "Regional commerce experience for Myanmar", play: "https://play.google.com/store/apps/details?id=com.siammakro.myanmar", ios: "https://apps.apple.com/us/app/makro-pro-myanmar/id1502816249" },
  lotuss: { name: "Lotus's App", region: "Malaysia, omnichannel retail", desc: "Shopping, rewards and delivery in one app", play: "https://play.google.com/store/apps/details?id=com.lotuss.oneapp.my", ios: "https://apps.apple.com/my/app/lotuss-app/id1551754541" },
  ydo: { name: "Your Doctors Online", region: "Canada and US, telemedicine", desc: "On-demand virtual healthcare", play: "https://play.google.com/store/apps/details?id=com.ydo.smartapp", ios: "https://apps.apple.com/pk/app/yourdoctors-online-doctor/id1439216318" },
  aimfit: { name: "AimFit Online", region: "Pakistan, women's fitness", desc: "At-home workouts and community fitness", play: "https://play.google.com/store/apps/details?id=com.goteamup.app.aimfitpk", ios: "https://apps.apple.com/pk/app/aimfit-online/id6743081729" },
  retailo: { name: "RetailO", region: "MENAP, B2B commerce", desc: "Digital inventory and restocking for retailers", play: "https://play.google.com/store/apps/details?id=com.app.retailerapp" },
  omyoga: { name: "OM Yoga Magazine", region: "UK, digital publishing", desc: "Digital issues and subscriptions", play: "https://play.google.com/store/apps/details?id=com.triactivemedia.omyoga", ios: "https://apps.apple.com/gb/app/om-yoga-magazine/id438185574" },
};

// RetailO has no iOS link: its App Store listing (id1607963433) returns 404 in every storefront.
const storeLinks = (app) => `${ext(app.play, "Android")}${app.ios ? ext(app.ios, "iPhone") : ""}`;

export const liveApps = `${Object.values(apps).map((app) => `<article class="miras-app-card"><p>${app.region}</p><h3>${app.name}</h3><p>${app.desc}</p><div class="miras-app-links">${storeLinks(app)}</div></article>`).join("")}<article class="miras-app-card"><p>Instagram, AI content operations</p><h3>KAAWU</h3><p>Character-led Urdu wit and poetry reels</p><div class="miras-app-links">${ext(sources.kaawu, "Instagram")}</div></article>`;

const picture = (img) => `<picture><source srcset="${img.webp}" type="image/webp"><img src="${img.src}" alt="${img.alt}" loading="lazy" decoding="async" width="${img.width}" height="${img.height}"></picture>`;
const igLink = (inner, cls) => `<a class="${cls}" href="${sources.kaawu}" target="_blank" rel="noopener noreferrer">${inner}</a>`;
const follow = igLink('Follow KAAWU on Instagram <span aria-hidden="true">↗</span>', "miras-case-follow");

const list = (items) => `<ul class="miras-case-list">${items.map((item) => `<li>${item}</li>`).join("")}</ul>`;

const concept = { caption: "Concept visual", images: [
  { src: "/projects/makro-commerce-concept.webp", alt: "Concept grocery commerce mobile interface", width: 1400, height: 788 },
  { src: "/projects/makro-systems-concept.webp", alt: "Concept architecture for a multi-market grocery commerce platform", width: 1400, height: 788 },
] };

export const caseStudies = [
  {
    slug: "language-data", name: "South Asian speech and language data", sector: "Voice and language data",
    summary: "Speech and text data for languages that modern AI has left behind, from Meta's Omnilingual ASR to open datasets anyone can use.",
    chips: ["ASR data", "TTS datasets", "Speech translation", "Text corpora", "Annotation", "QA", "Low-resource languages"],
    linksLabel: "Links",
    links: `${ext(sources.time, "TIME")}${ext(sources.meta, "Meta announcement")}${ext(sources.datasets, "Our datasets on Mozilla Data Collective")}`,
    heroAside: '<div class="miras-case-hero-stat"><strong>39</strong><span>Pakistani languages contributed to Omnilingual ASR</span></div>',
    overview: "<p>Hundreds of millions of people speak Saraiki, Sindhi, Pashto, Balochi, Burushaski and other South Asian languages that have little or no representation in the data that trains speech recognition, translation and language models. We build that data: we source it with speaker communities, universities and local partners, then annotate, validate and publish it.</p><!-- TODO: add total hours of speech and number of speakers once confirmed by the team -->",
    challenge: "Low-resource languages have few speakers online, little written material and no ready-made datasets. Data has to be collected in the field, transcribed by native speakers and checked carefully, or the resulting models simply don't work.",
    extra: [["Meta Omnilingual ASR", `<p>Meta's FAIR team released Omnilingual ASR in November 2025: open-source speech recognition for 1,600+ languages, around 500 of them never transcribed by AI before, with character error rates below 10 for 78% of languages. TIME named it one of the Best Inventions of 2026. We contributed speech data for 39 Pakistani languages to it.</p><p class="miras-work-links">${ext(sources.time, "TIME")}${ext(sources.meta, "Meta announcement")}</p>`]],
    modules: [
      ["Speech recognition data", "Transcribed, time-aligned speech for ASR training and evaluation."],
      ["Text-to-speech datasets", "Single-speaker recordings with aligned text, including 10-hour Punjabi and Saraiki TTS datasets."],
      ["Speech translation", "The Burushaski to English Speech Translation Corpus."],
      ["Large text corpora", "Multilingual news corpora in Urdu, Pashto, Sindhi, Balochi and Saraiki, plus literature corpora for languages such as Balti, Dameli, Palula, Gawar-Bati, Ormuri and Wakhi."],
      ["Benchmarks", "Translation of Meta's BOUQuET benchmark into seven Pakistani languages."],
      ["Publishing", "Datasets released on Mozilla Data Collective with clear licences and datasheets."],
    ],
    highlightsTitle: "How we keep the data trustworthy",
    highlights: `<ol class="miras-case-steps">${[
      "Consent, fair compensation and community involvement in every collection.",
      "Native-speaker transcription and annotation, followed by validation passes.",
      "Peer-reviewed research alongside the data, at venues such as LREC, MWE-UD and SIGUL.",
      "Documented, properly licensed releases so others can actually use the data.",
    ].map((item) => `<li>${item}</li>`).join("")}</ol>`,
  },
  {
    slug: "makro-pro", name: "Makro PRO", sector: "Enterprise commerce",
    summary: "Multi-market React Native and Next.js commerce from one modular codebase.",
    chips: ["React Native", "Next.js", "TypeScript", "Feature flags", "Universal Links", "AppsFlyer", "Bitrise", "Fastlane", "GitLab CI", "CodePush"],
    live: [apps.makro, apps.psar, apps.makroMyanmar, apps.lotuss],
    media: concept,
    overview: "<p>A mature enterprise commerce platform delivered from a shared modular codebase. Country modules and configuration are built independently, then composed into one application and controlled through feature flags, serving four live markets: Thailand (Makro PRO), Cambodia (PSAR PLUS), Myanmar (Makro PRO Myanmar) and Malaysia (Lotus's).</p>",
    challenge: "Ship market-specific features without fragmenting a shared codebase, and make web-delivered screens feel native inside the app.",
    modules: [
      ["Country composition", "Market features and config packaged separately and assembled on a shared foundation."],
      ["Feature control", "Feature flags and environment config for market, brand and rollout behaviour."],
      ["Native and WebView bridge", "Two-way bridge for identity, tokens, navigation, callbacks, analytics and state between React Native and Next.js."],
      ["Referral program", "Attribution, deep-link entry, install journeys and state restoration across lifecycle interruptions."],
      ["ClubCard and loyalty", "Account linking, premium membership and loyalty flows."],
      ["Business documents and National ID OCR", "Document capture, ID scanning, field extraction and automated verification."],
      ["Affiliate program", "Affiliate acquisition and attribution."],
      ["Deep linking", "Universal Links, URL schemes, Firebase or AppsFlyer routing and deferred install."],
      ["Regional release system", "Separate regional build and release paths with shared engineering kept in sync."],
    ],
    highlights: list([
      "Traced an iOS bug where referral data vanished after the OS terminated the app to session storage behaviour during WebView restoration.",
      "Isolated iOS-only network failures with Proxyman to certificate trust and SSL behaviour rather than treating them as generic API faults.",
      "Kept the shared repository clean by separating reusable platform capabilities from country configuration.",
    ]),
    scale: [
      ["39.5%", "Makro PRO share of Thailand grocery e-commerce by 2024 sales, ranked No. 1", sources.makroNews],
      ["1M+", "Downloads of the Makro PRO Thailand Android app", apps.makro.play],
    ],
  },
  {
    slug: "your-doctors-online", name: "Your Doctors Online", sector: "Telemedicine",
    summary: "24/7 virtual care with real-time routing and persistent care history.",
    chips: ["React Native", "Firebase Realtime Database", "Cloud Functions", "Agora", "WebRTC", "Stripe", "In-app purchases", "EMR / SOAP"],
    live: [apps.ydo],
    media: { images: [
      { src: "/projects/ydo-overview.jpg", alt: "Your Doctors Online product case study showing a mobile doctor consultation", width: 1024, height: 576 },
      { src: "/projects/ydo-system.jpg", alt: "Your Doctors Online consultation, EMR, pharmacy and payment integrations", width: 1024, height: 576 },
    ] },
    overview: "<p>Patients and clinicians connect through real-time chat, audio and video consultation. We worked on the mobile and full-stack architecture: consultation flows, payments, medical data integrations and an in-house doctor routing system.</p>",
    challenge: "Connect every patient to a doctor fast, even when the first doctor doesn't pick up, without losing clinical context when a returning patient sees someone new.",
    modules: [
      ["Real-time chat", "Firebase Realtime Database and cloud logic keep messages and consultation state in sync for patients and doctors."],
      ["Audio and video", "Consultations through Agora, with earlier WebRTC implementations."],
      ["Dynamic doctor queue", "Assigns patients to available doctors and shows queue state to both sides."],
      ["Timed reassignment", "After roughly 90 to 120 seconds without pickup, the encounter is redirected to another suitable doctor."],
      ["Freelancer fallback", "Escalates to an always-available doctor pool, targeting a connection within about 60 seconds."],
      ["EMR and prescriptions", "EMR and SOAP integrations send prescriptions to a pharmacy and record fulfilment status."],
      ["Follow-ups and reminders", "Clinicians schedule automated messages over days or weeks, with retries."],
      ["Payments", "Stripe, in-app purchases, subscriptions and one-time purchases."],
    ],
    highlights: `<p>How a consultation is routed:</p><ol class="miras-case-steps">${[
      "A patient starts a consultation and enters the active queue.",
      "Available doctors see the waiting encounter while the patient sees a clear queued state.",
      "If not accepted in the configured window, the queue is re-evaluated and another doctor is selected.",
      "If normal coverage can't meet the response target, the encounter moves to the freelancer pool.",
      "The encounter stays in the patient's longitudinal thread, with messages attributed to each original doctor, and follow-ups return to the same context.",
    ].map((step) => `<li>${step}</li>`).join("")}</ol>`,
    scale: [
      ["1.5M+", "Virtual consultations across Canada and the US in 2025", sources.ydoConsultations],
      ["1M+", "Patients served", sources.ydoPatients],
    ],
  },
  {
    slug: "aimfit", name: "AimFit", sector: "Health and fitness",
    summary: "Women-first fitness with live and recorded workouts, rewards and community.",
    chips: ["React Native", "TypeScript", "Zoom", "Mux", "Push notifications", "Dynamic links", "Bitrise", "Fastlane", "CodePush"],
    live: [apps.aimfit],
    media: { images: [
      { src: "/projects/aimfit-overview.jpg", alt: "AimFit product case study showing its mobile workout experience", width: 832, height: 464 },
      { src: "/projects/aimfit-system.jpg", alt: "AimFit live, recorded and offline media architecture", width: 832, height: 464 },
    ] },
    overview: "<p>Live workouts, recorded classes, nutrition tracking, community and accountability in one app. We contributed mobile and solution architecture, media delivery, engagement logic and release modernisation.</p>",
    challenge: "Deliver live and on-demand video smoothly on varied networks and storage, while turning viewing into fair, consistent rewards.",
    modules: [
      ["Live workouts", "Live classes through Zoom."],
      ["Recorded library", "Optimised streaming and controlled downloads."],
      ["Nutrition tracking"],
      ["Community and support"],
      ["Leaderboard"],
      ["Rewards", "Attendance-based reward points and completion rewards."],
      ["Notifications and dynamic links"],
    ],
    highlights: `${list([
      "Chunked background downloads that never block active streaming, with one shared progress model across live, recorded and offline content.",
      "Attendance and reward rules based on how much of a class is watched:",
    ])}<ol class="miras-thresholds" aria-label="Attendance and reward thresholds"><li><strong>About 15%</strong><span>watched marks attendance</span></li><li><strong>About 50%</strong><span>earns reward points</span></li><li><strong>About 70%</strong><span>unlocks a completion reward</span></li></ol>${list([
      "Migrated the app from JavaScript to a modular TypeScript architecture with environment build flavours, Bitrise and Fastlane pipelines and OTA updates.",
    ])}`,
    scale: [
      ["500K+", "Women in the AimFit community", sources.aimfit],
      ["35M+", "Workout minutes", sources.aimfit],
    ],
  },
  {
    slug: "retailo", name: "RetailO", sector: "B2B commerce",
    summary: "Marketplace ordering and local payments for retailers.",
    chips: ["React Native", "Marketplace", "JazzCash", "EasyPaisa", "BNPL", "Dynamic links"],
    live: [apps.retailo],
    overview: "<p>A B2B commerce platform retailers use for digital inventory ordering and restocking. We built buyer and seller journeys and payment flows designed around local banking and wallet behaviour.</p>",
    modules: [
      ["Marketplace", "Discovery, buyer and seller flows, cart and ordering."],
      ["Local payments", "JazzCash and EasyPaisa."],
      ["BNPL and installments"],
      ["Customer history"],
      ["Wishlist and favourites"],
      ["Engagement", "Dynamic links and notifications."],
    ],
    scale: [
      ["50K+", "Retailers on the platform", sources.retailoverse],
      ["$36M", "Series A announced in 2022", sources.retailoMedia],
      ["100K+", "Android app downloads", apps.retailo.play],
    ],
  },
  {
    slug: "kaawu", name: "KAAWU", sector: "AI content operations",
    summary: "A low-cost AI media pipeline that produces character-led reels with human approval.",
    chips: ["AI image and video generation", "Prompt generation", "Browser automation", "Job queue", "Retries", "Upscaling", "Instagram publishing"],
    follow,
    heroAside: igLink(picture({ src: "/projects/kaawu-grid.png", webp: "/projects/kaawu-grid.webp", alt: "KAAWU Instagram profile showing a grid of character-led Urdu reels", width: 959, height: 1212 }), "miras-case-hero-image"),
    overview: `<div class="miras-case-split"><div><p>KAAWU is a character brand (“Tiny crow. Big maslay.”) publishing Urdu wit and poetry reels from Pakistan, with every post produced by this pipeline.</p><p>KAAWU runs on a persistent production queue instead of one-off manual generation. It uses existing subscription allowances and limited generation tokens efficiently, keeping running costs low while keeping retry, review and publishing controls.</p>${follow}</div>${igLink(picture({ src: "/projects/kaawu-reel.png", webp: "/projects/kaawu-reel.webp", alt: "A single KAAWU reel featuring the crow character", width: 666, height: 1112 }), "miras-case-reel")}</div>`,
    challenge: "Produce a steady stream of on-brand, character-consistent short videos without a production team, and without low-quality output ever reaching the public.",
    modules: [
      ["Content queue", "Traceable jobs with status, inputs, outputs, failures and retry state."],
      ["Concept and mood"],
      ["Identity rules", "Consistent character and brand cues."],
      ["Prompt generation"],
      ["Image and video creation", "Browser automation for Google-based flows where direct APIs are limited."],
      ["Quality and upscaling", "1080p delivery, with low-quality items blocked."],
      ["Publishing package", "Captions, hashtags, cloud delivery and Instagram publishing."],
      ["Operational safety", "Step-level retries, recovery and human approval."],
    ],
    highlights: "<p>We separate creative intent from execution, keep every stage observable, and spend human attention only on approval and exceptions. The same pattern applies to any repetitive content or document operation.</p>",
  },
  {
    slug: "wrap-and-co", name: "Wrap and Co invoice system", sector: "Workflow automation",
    summary: "A no-code invoicing workflow with reusable business rules and branded output.",
    chips: ["No-code", "Business rules", "Partial payments", "Shareable preview", "PDF"],
    image: { src: "/projects/wrapco-invoice.jpg", webp: "/projects/wrapco-invoice.webp", alt: "Wrap and Co invoice builder with saved services and pricing rules beside the branded invoice preview", width: 1600, height: 890, caption: "Invoice builder and customer preview, shown with sample data." },
    overview: "<p>Turns a recurring manual invoicing process into a reusable workflow. Operators build an invoice from saved services, apply pricing rules, add customer messaging and share a polished result without rebuilding the document each time.</p><p>It is a focused invoicing and customer document system, not accounting or ERP software.</p>",
    modules: [
      ["Invoice builder", "Build an invoice from saved services instead of rebuilding the document each time."],
      ["Reusable options", "Saved services, charges, greetings and event messages."],
      ["Flexible pricing", "Discounts, service charges, delivery fees and tips, including discounts applied to a specific charge."],
      ["Partial payments", "Prepaid amounts, balances and payment method."],
      ["Branded messaging", "Event-specific greetings and notes."],
      ["Preview and sharing", "A shareable link and PDF output."],
      ["Operational reuse"],
    ],
  },
];

const moduleTable = (modules) => `<table class="miras-module-table"><thead><tr><th scope="col">Module</th><th scope="col">What it delivers</th></tr></thead><tbody>${modules.map(([name, delivers]) => delivers
  ? `<tr><th scope="row">${name}</th><td>${delivers}</td></tr>`
  : `<tr><th scope="row" colspan="2">${name}</th></tr>`).join("")}</tbody></table>`;

export const statRow = (stats) => `<div class="miras-stat-row">${stats.map(([value, label, href]) => `<div><strong>${value}</strong><span>${label}</span>${ext(href, "source")}</div>`).join("")}</div><p class="miras-stat-note">Product scale figures from public sources.</p>`;

const media = ({ images, caption }) => `<div class="miras-work-media">${images.map((img) => `<figure><img src="${img.src}" alt="${img.alt}" loading="lazy" decoding="async" width="${img.width}" height="${img.height}"></figure>`).join("")}</div>${caption ? `<p class="miras-media-caption">${caption}</p>` : ""}`;

export function caseStudyMain(study) {
  const next = caseStudies[(caseStudies.indexOf(study) + 1) % caseStudies.length];
  const live = study.live ? study.live.map((app) => `<div><span>${app.name}</span>${storeLinks(app)}</div>`).join("") : `<div><span>${study.linksLabel || "Live"}</span>${study.links}</div>`;
  const sections = [
    ["Overview", study.overview],
    study.challenge && ["The challenge", `<p>${study.challenge}</p>`],
    ...(study.extra || []),
    ["What we built", moduleTable(study.modules)],
    study.highlights && [study.highlightsTitle || "Engineering highlights", study.highlights],
    study.scale && ["Product scale", statRow(study.scale)],
  ].filter(Boolean);
  return `<main class="miras-work-page miras-case-page">
  <section class="miras-work-intro miras-case-hero"><div class="miras-work-shell${study.heroAside ? " miras-case-hero-split" : ""}"><div><nav class="miras-breadcrumb" aria-label="Breadcrumb"><a href="/work">Work</a><span aria-hidden="true">/</span><span aria-current="page">${study.name}</span></nav><p class="miras-eyebrow">${study.sector}</p><h1>${study.name}</h1><p class="miras-case-summary">${study.summary}</p><div class="miras-work-tags">${study.chips.map((chip) => `<span>${chip}</span>`).join("")}</div>${study.live || study.links ? `<div class="miras-case-live">${live}</div>` : ""}${study.follow || ""}</div>${study.heroAside || ""}</div></section>
  ${study.media ? `<section class="miras-case-media"><div class="miras-work-shell">${media(study.media)}</div></section>` : ""}${study.image ? `<section class="miras-case-media"><div class="miras-work-shell"><figure class="miras-case-figure">${picture(study.image)}<figcaption class="miras-media-caption">${study.image.caption}</figcaption></figure></div></section>` : ""}
  ${sections.map(([title, body], i) => `<section class="miras-case-section"><div class="miras-work-shell"><div class="miras-case-grid"><div class="miras-case-section-head"><span>${num(i)}</span><h2>${title}</h2></div><div class="miras-case-section-body">${body}</div></div></div></section>`).join("\n  ")}
  <section class="miras-case-end"><div class="miras-work-shell"><section class="miras-work-cta"><div><h2>Have a comparable mandate?</h2><p>Share the outcome, current state and constraints with our senior team.</p></div><a href="/contact">Discuss a project →</a></section><a class="miras-case-next" href="/work/${next.slug}"><span>Next case study →</span><strong>${next.name}</strong></a></div></section>
</main>`;
}

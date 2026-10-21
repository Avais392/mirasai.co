# Miras AI website review: SEO, GEO, AEO and legal content

Audit date: October 21, 2026  
Scope: current local production build for `mirasai.co`

## Executive assessment

The site now has a sound technical search foundation. All 16 public routes ship meaningful HTML before JavaScript runs, have unique titles and descriptions, use self-referencing canonical URLs, contain one H1, and appear in the XML sitemap. Structured data reflects visible content and job markup now follows Google's requirement that each `JobPosting` appear on a page devoted to one role.

The main constraint on future ranking is no longer page metadata. It is external evidence and topical authority: Miras AI still needs approved results-based case studies, useful expert publications, reputable third-party references and a confirmed legal entity name. Those items cannot be generated truthfully from the codebase.

## Changes completed

### Legal and trust content

- Rewrote the Privacy Policy around the website's actual data flows: email-based enquiries, recruiting, hosting logs, US-Pakistan access, legal bases, service providers, retention, security, rights, children and contact routes.
- Rewrote the Cookie Policy to state the current reality: one local-storage theme preference and no analytics, advertising or behavioral-tracking cookies.
- Rewrote the Terms of Service to separate website use from signed client engagements and cover permitted use, intellectual property, third-party marks, confidential submissions, disclaimers, liability, Indiana law, severability and changes.
- Added effective dates, summaries, related-policy navigation and readable legal-page styling in both themes.
- Added a privacy notice next to the project enquiry form and cautioned visitors not to send credentials or regulated data through general email.
- Removed the external Google Fonts request, reducing third-party data exposure and render-blocking network work.

### Crawlability and technical SEO

- Replaced metadata-only route copies with full static rendering for every public route.
- Added unique metadata for legal pages and individual job pages.
- Added WebPage and Breadcrumb JSON-LD to inner routes and Service JSON-LD to service pages.
- Preserved Organization, ProfessionalService, WebSite and OfferCatalog entity data.
- Removed an unverified Bloomington postal code from structured data.
- Added two canonical single-role career URLs with matching JobPosting schema.
- Removed JobPosting schema from the multi-role careers listing, which Google explicitly identifies as a structured-data policy error.
- Removed FAQPage schema because Google retired FAQ rich results in June 2026. The visible FAQ remains because its concise answers are useful to buyers and answer systems.
- Expanded the sitemap to cover job and legal URLs.
- Added a real noindex 404 page and removed the catch-all `200` redirect that created soft-404 risk on unknown URLs.
- Added security and caching headers for hosts that support the `_headers` convention.
- Added a repeatable `npm run audit:seo` check for titles, descriptions, canonicals, H1s, static content, sitemap coverage and structured-data placement.

### Performance and accessibility

- Switched AimFit and Your Doctors Online display assets from 280-416 KB PNGs to 28-44 KB JPEGs.
- Added intrinsic width and height to logo and project images to reduce layout shift.
- Kept below-the-fold project images lazy loaded.
- Added current-page state to primary navigation.
- Added `aria-expanded` and `aria-controls` to the mobile menu.
- Ensured the dedicated contact route has a proper H1 while the homepage version retains correct heading hierarchy.

### GEO and AEO

- Important service pages already state audience, problems, deliverables, timeframe, technologies, experience and next action in visible text.
- Company identity, locations, leadership, services and operating model are stated consistently in page copy and structured data.
- The homepage FAQ answers commercial questions directly in the first sentence.
- `llms.txt` now includes key pages, verified operating facts, engagement timeframes, engagement models, contact routes and case-study attribution.
- Core content is available in initial HTML, improving access for answer systems that do not execute client-side JavaScript reliably.

## Remaining gaps, in priority order

### 1. Confirm and publish the exact legal entity

The site says Miras AI is registered in Indiana, but the exact legal entity name and registration identifier were not provided. Confirm them from the formation documents, then use the exact name consistently in the legal policies, footer, invoices, contracts, LinkedIn and Organization schema. Do not infer or invent the name.

### 2. Add evidence that buyers can verify

The Work page carefully identifies projects as the CTO's prior experience, which is credible and legally safer. Its organic and commercial value will improve when permissions allow publication of:

- the specific mandate and the CTO's role;
- scale or operating constraints;
- architecture and decisions;
- measurable outcomes such as release time, reliability, adoption or conversion;
- an authorized client quotation or public source.

Do not create metrics, endorsements or client relationships that cannot be substantiated.

### 3. Build expert topical authority

The site has strong service pages but no insight library. Publish original, named-author material that answers the questions qualified buyers search for. The strongest initial topics are:

- React Native modernization and release-risk assessment;
- designing controlled AI workflows with evaluation and human review;
- English-Urdu code-switching speech-data quality;
- South Asian ASR dataset collection and annotation quality assurance;
- multi-market mobile architecture and configuration;
- fractional CTO due diligence for product investment decisions.

Each article should identify the author and review date, answer the query immediately, explain trade-offs with concrete examples, cite primary sources and link to the relevant service page.

### 4. Earn third-party entity signals

Align the same company name, domain, locations, founder profiles and service description across LinkedIn, reputable company databases, university or research profiles, partner pages and authorized client announcements. Relevant editorial references are more valuable than bulk directory submissions or purchased links.

### 5. Improve conversion measurement and scheduling

The project form intentionally opens the visitor's email application. This is privacy-light but cannot confirm successful delivery or capture attribution. When ready, add a secure server-side form with spam protection and a published retention process. Add a real meeting-booking URL when Miras AI has selected the scheduling account. Do not label a mailto link as instant scheduling.

If analytics is introduced, update the Cookie and Privacy Policies before activation and implement consent where required. Useful events are project enquiry started, email opened, meeting booked, career application opened and qualified outbound click.

### 6. Create route-specific social images

The current global Open Graph image is valid and correctly sized. Unique service, careers and case-study images would improve sharing context, though they are secondary to content quality and authority.

### 7. Verify production-only behavior

Local code cannot prove production DNS, redirects, CDN caching, real HTTP status codes, Core Web Vitals or header delivery. After deployment, verify:

- HTTP to HTTPS and one canonical hostname;
- known routes return `200`, retired URLs return `404` or `410`, and unknown URLs return `404`;
- `_headers` rules are honored by the selected host, or configured in that host's native settings;
- mobile and desktop Core Web Vitals with field data when available;
- rendered HTML and screenshots through Search Console URL Inspection.

## Search launch sequence

1. Deploy the production build and verify the production-only behavior above.
2. Add a Google Search Console **Domain property** for `mirasai.co` and verify it with DNS.
3. Submit `https://mirasai.co/sitemap.xml` in Search Console.
4. Inspect the homepage, Services, Voice and Language Data, both job pages and Contact. Run **Test live URL**, review rendered HTML, then request indexing once.
5. Test each job page in Google's Rich Results Test. Remove or return `404/410` for a role as soon as it closes.
6. Create or import the property in Bing Webmaster Tools and submit the same sitemap. Add IndexNow only after a key and automatic update workflow are ready.
7. Validate all schema with Schema.org Validator and run PageSpeed Insights on representative mobile and desktop URLs.
8. Check Search Console monthly for indexing, Core Web Vitals, manual actions, structured-data issues, queries, pages and countries. Improve pages that already earn relevant impressions before creating loosely related content.

## Validation completed

- `npm run build` — passed; 16 routes statically rendered.
- `npm run typecheck` — passed.
- `npm run lint` — passed with zero warnings.
- `npm run audit:seo` — passed for all 16 routes.

## Reference standards used

- Google Search Central, SEO Starter Guide: https://developers.google.com/search/docs/fundamentals/seo-starter-guide
- Google Search Central, JavaScript SEO basics: https://developers.google.com/search/docs/crawling-indexing/javascript/javascript-seo-basics
- Google Search Central, JobPosting structured data: https://developers.google.com/search/docs/appearance/structured-data/job-posting
- Google Search Central, Breadcrumb structured data: https://developers.google.com/search/docs/appearance/structured-data/breadcrumb
- Google Search Console setup: https://developers.google.com/search/docs/monitor-debug/search-console-start
- Bing Webmaster Tools sitemap guidance: https://www.bing.com/webmasters/help/sitemaps-3b5cf6ed
- 10Pearls privacy-policy structure reviewed for industry context: https://10pearls.com/privacypolicy/
- tkxel privacy-policy structure reviewed for industry context: https://tkxel.com/privacy-policy/

The legal pages are a tailored operational draft, not a substitute for review by licensed counsel. Counsel should verify the exact legal entity, retention practices, governing-law language and any obligations triggered by the markets where Miras AI actively does business.

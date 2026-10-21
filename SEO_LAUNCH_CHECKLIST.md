# Miras AI search launch checklist

The site includes route-specific metadata, full static HTML for every public route, self-canonical URLs, a sitemap, robots directives, Organization, WebSite, WebPage, Service, Breadcrumb and compliant single-role JobPosting schema, social preview metadata, security headers and an `llms.txt` company summary.

## 1. Deploy and verify the production site

1. Deploy the current production build to `https://mirasai.co`.
2. Confirm HTTPS redirects every `http://` request to `https://`.
3. Confirm only one hostname is canonical. Redirect `www.mirasai.co` to `mirasai.co`, or reverse the choice everywhere before launch.
4. Open these URLs directly in a private browser window:
   - `/`
   - `/services`
   - `/services/voice-language-data`
   - `/work`
   - `/about`
   - `/careers`
   - `/careers/ai-engineer-intern`
   - `/careers/sales-intern`
   - `/contact`
   - `/privacy-policy`
   - `/robots.txt`
   - `/sitemap.xml`
   - `/llms.txt`

## 2. Google Search Console

1. Go to [Google Search Console](https://search.google.com/search-console/).
2. Add a **Domain property** for `mirasai.co`. A Domain property covers HTTPS, HTTP, the root domain and subdomains.
3. Copy the TXT verification record Google provides into the DNS manager for the domain. DNS verification is preferable to an HTML tag because it survives site deployments.
4. After verification, open **Sitemaps** and submit `https://mirasai.co/sitemap.xml`.
5. Use **URL inspection** for the home page, services page, voice and language-data page, careers page and contact page. Run **Test live URL**, then request indexing.
6. Review **Page indexing**, **Core Web Vitals**, **HTTPS**, **Job postings**, **Manual actions** and relevant structured-data reports weekly for the first month.
7. Do not repeatedly request indexing for unchanged pages. Resubmit after material copy, service or job changes.

## 3. Bing and other discovery systems

1. Create a [Bing Webmaster Tools](https://www.bing.com/webmasters/) account.
2. Import the verified Google Search Console property or verify the domain through DNS.
3. Submit the same sitemap.
4. Enable IndexNow after deployment. Generate an IndexNow key, host the key file at the site root, and submit changed URLs when services, jobs or articles are published.
5. Keep `robots.txt` and `sitemap.xml` publicly accessible without authentication or geographic blocking. `llms.txt` is maintained for systems that choose to read it; Google states that it does not affect Google Search rankings.

## 4. Analytics and conversion measurement

1. Create a GA4 property and web data stream for `mirasai.co` only when measurement is operationally useful.
2. Add the supplied measurement ID through Google Tag Manager or a consent-aware analytics integration. Update the Cookie and Privacy Policies before activation and obtain consent wherever required.
3. Record these conversions:
   - Project form initiated
   - Project email opened
   - Discovery-call request
   - Career application email opened
   - LinkedIn outbound click
4. Link GA4 and Search Console after both are collecting data.
5. Use campaign parameters on LinkedIn and outbound marketing links so qualified enquiries can be attributed.

## 5. Entity and local trust signals

1. Keep the same company name, Bloomington headquarters, Lahore delivery office, domain and contact email on the website, LinkedIn and business directories.
2. Complete the LinkedIn company profile with the same service description and website URL.
3. If the Bloomington location is eligible and can be verified, create a Google Business Profile. Use the real legal/business details and an accurate customer-facing or service-area configuration.
4. Add the exact legal entity name and registration identifier to the website only after they are confirmed. Do not publish an inferred company number.

## 6. Validate the implementation after deployment

Run these checks on production URLs:

- [Google Rich Results Test](https://search.google.com/test/rich-results) for each individual job page
- [Schema.org Validator](https://validator.schema.org/) for Organization, WebPage, Breadcrumb, Service and JobPosting markup
- [PageSpeed Insights](https://pagespeed.web.dev/) on mobile and desktop
- [Google Mobile-Friendly testing through Lighthouse](https://developer.chrome.com/docs/lighthouse/overview/)
- LinkedIn Post Inspector and Facebook Sharing Debugger for the social image

Each active role has its own canonical page and one matching JobPosting object. The careers listing deliberately contains no JobPosting markup. Remove an expired role page from the sitemap, structured data and internal links, and return a genuine 404 or 410 for the retired URL. Keep job location, employment type and application method consistent with the visible description.

Google retired FAQ rich results in June 2026, so the visible FAQ remains useful for visitors and answer engines but is not marked up as `FAQPage` for a discontinued search feature.

## 7. Build authority over time

Technical SEO makes the site eligible to rank; authority and useful evidence determine whether it does.

1. Publish one strong page for each commercial question buyers search for, such as:
   - React Native platform modernization
   - AI workflow feasibility assessment
   - English–Urdu code-switching speech data
   - South Asian ASR dataset collection and quality assurance
   - Fractional CTO support for funded product teams
2. Use named authors with relevant biographies. Link research claims to primary sources.
3. Expand approved case studies with the mandate, constraints, responsibilities, architecture and measurable result. Clearly distinguish Miras AI work from founders' prior experience.
4. Earn relevant references from partners, research institutions, client announcements, technical communities and reputable directories. Avoid purchased link packages.
5. Keep service facts and company identity consistent on LinkedIn, directories and partner pages. This helps search engines and answer engines resolve the company as one entity.
6. Review Search Console queries monthly. Improve pages that receive impressions but have weak click-through rates, and build supporting content around queries that already show commercial relevance.

## 8. GEO and AEO editorial standard

Every important page should state:

- who the service is for;
- the problem it solves;
- what is delivered;
- the typical timeframe;
- the relevant technologies and evidence;
- where the company operates;
- a direct next action.

Prefer specific, verifiable statements over promotional claims. Answer the question in the first paragraph, then provide proof and detail. Keep key facts in HTML text rather than images. Update `llms.txt` and structured data whenever the visible company facts materially change.

import LegalPage from "../LegalPage";

interface CookiePolicyProps { onBack: () => void; }

export default function CookiePolicy({ onBack }: CookiePolicyProps) {
  return (
    <LegalPage
      title="Cookie Policy"
      summary="A plain-language record of the browser storage used on mirasai.co. The current website does not use advertising cookies or analytics cookies."
      onBack={onBack}
    >
      <section>
        <h2>1. Scope</h2>
        <p>This policy applies to the Miras AI website at mirasai.co. It should be read with our Privacy Policy, which explains how we handle personal information received through enquiries, recruitment and normal website operations.</p>
      </section>

      <section>
        <h2>2. What the website stores</h2>
        <p>The website currently uses browser local storage to remember whether you selected the light or dark visual theme. Local storage is data saved by your browser on your device. It is similar to a cookie in function, but it is not sent to Miras AI with each web request.</p>
        <div className="legal-table-wrap mt-5 overflow-x-auto rounded-xl border border-white/[0.08]">
          <table className="w-full min-w-[620px] text-left text-sm">
            <thead><tr><th>Technology</th><th>Purpose</th><th>Duration</th><th>Category</th></tr></thead>
            <tbody><tr><td><code>miras-theme</code></td><td>Remembers the light or dark theme you select.</td><td>Until you clear site data or change the setting.</td><td>Preference</td></tr></tbody>
          </table>
        </div>
        <p className="mt-5">This preference is not used to identify you, follow you across websites or build an advertising profile.</p>
      </section>

      <section>
        <h2>3. Cookies currently used</h2>
        <p>Miras AI does not currently set analytics, advertising or behavioral-tracking cookies on this website. Because no optional cookies are active, the site does not presently display a cookie-consent banner. If we introduce optional analytics or marketing technologies, we will update this policy and obtain consent where applicable before activating them.</p>
      </section>

      <section>
        <h2>4. External links</h2>
        <p>The site links to LinkedIn but does not embed LinkedIn tracking technology. LinkedIn receives information only if you choose to open its website, at which point its own terms and privacy notice apply.</p>
      </section>

      <section>
        <h2>5. Your controls</h2>
        <p>You can remove the saved theme preference through your browser&apos;s site-data or local-storage controls. Clearing it resets the site to your device&apos;s color-scheme preference. Blocking local storage will not prevent access to the site, although your theme choice may not persist between visits.</p>
      </section>

      <section>
        <h2>6. Changes to this policy</h2>
        <p>We will revise this page when the website&apos;s storage or tracking practices change. The effective and last-updated dates at the top show when the current version took effect.</p>
      </section>

      <section>
        <h2>7. Contact</h2>
        <p>Questions about this policy or the technologies used on the site may be sent to <a href="mailto:avais@mirasai.co">avais@mirasai.co</a>.</p>
      </section>
    </LegalPage>
  );
}

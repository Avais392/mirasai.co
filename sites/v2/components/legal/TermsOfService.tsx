import LegalPage from "../LegalPage";

interface TermsOfServiceProps { onBack: () => void; }

export default function TermsOfService({ onBack }: TermsOfServiceProps) {
  return (
    <LegalPage
      title="Terms of Service"
      summary="The terms that govern access to mirasai.co. Client work is governed by a separate signed services agreement and statement of work."
      onBack={onBack}
    >
      <section>
        <h2>1. Acceptance and scope</h2>
        <p>These Terms of Service (&ldquo;Terms&rdquo;) apply when you access or use the Miras AI website at mirasai.co. By using the site, you agree to these Terms. If you do not agree, do not use the site. If you use the site for an organization, you represent that you are authorized to act for it.</p>
        <p>The website describes capabilities, experience and possible engagement models. It does not itself create a client, employment, partnership, fiduciary or advisory relationship.</p>
      </section>

      <section>
        <h2>2. Client services require a signed agreement</h2>
        <p>Proposals, estimates, timelines and website descriptions are informational until the parties sign an applicable master services agreement, statement of work or other engagement document. That signed agreement controls the scope, fees, ownership, confidentiality, warranties, security duties and liability for client work. If it conflicts with these Terms, it controls for that engagement.</p>
      </section>

      <section>
        <h2>3. Permitted use</h2>
        <p>You may view and use the site for lawful internal business evaluation and to communicate with Miras AI. You may not:</p>
        <ul>
          <li>interfere with the site, probe for vulnerabilities or attempt unauthorized access;</li>
          <li>introduce malicious code, overload infrastructure or bypass security controls;</li>
          <li>scrape or systematically extract content in a way that harms the site or violates law;</li>
          <li>misrepresent affiliation with Miras AI or use the site for fraud or unlawful activity;</li>
          <li>remove proprietary notices or reproduce substantial content for a competing commercial offering; or</li>
          <li>infringe intellectual-property, privacy or other rights.</li>
        </ul>
        <p>We may restrict access where reasonably necessary to protect the site, users or Miras AI.</p>
      </section>

      <section>
        <h2>4. Intellectual property and third-party marks</h2>
        <p>Unless stated otherwise, the website&apos;s original text, design, graphics, code and Miras AI branding are owned by or licensed to Miras AI and protected by applicable law. We grant you a limited, revocable, non-exclusive right to access the site for its intended purpose. No other license is granted.</p>
        <p>Product names, logos and screenshots used to discuss prior professional experience remain the property of their respective owners. Their appearance does not imply sponsorship or that the referenced products were built by Miras AI. The Work page identifies the relevant context.</p>
      </section>

      <section>
        <h2>5. Enquiries, submissions and confidentiality</h2>
        <p>General enquiries are not treated as confidential merely because they are sent to us. Do not send trade secrets, production credentials, health information, financial account data, export-controlled material or other sensitive information unless Miras AI has agreed in writing to receive it through an appropriate channel. Any confidentiality obligation must be set out in a separate written agreement.</p>
        <p>You represent that you have the right to share information you send and authorize us to use it to evaluate and respond to your request. Job applications are handled under the Privacy Policy.</p>
      </section>

      <section>
        <h2>6. Accuracy, availability and professional advice</h2>
        <p>We aim to keep the site accurate and current, but content may be incomplete, become outdated or contain errors. We may change or withdraw content without notice. Website content is general information, not technical, legal, financial, security or investment advice, and should not be relied on as a substitute for advice based on your specific facts.</p>
      </section>

      <section>
        <h2>7. Third-party websites</h2>
        <p>Links to third-party sites are provided for convenience. We do not control or endorse their content, availability, security or privacy practices. Your use of a third-party service is governed by its own terms.</p>
      </section>

      <section>
        <h2>8. Disclaimers</h2>
        <p className="legal-caps">TO THE FULLEST EXTENT PERMITTED BY LAW, THE WEBSITE IS PROVIDED &ldquo;AS IS&rdquo; AND &ldquo;AS AVAILABLE.&rdquo; MIRAS AI DISCLAIMS IMPLIED WARRANTIES, INCLUDING MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE, TITLE AND NON-INFRINGEMENT. WE DO NOT WARRANT THAT THE SITE WILL BE UNINTERRUPTED, SECURE OR ERROR-FREE, OR THAT WEBSITE CONTENT WILL PRODUCE A PARTICULAR RESULT.</p>
        <p>Nothing in these Terms excludes a warranty or right that applicable law does not permit us to exclude.</p>
      </section>

      <section>
        <h2>9. Limitation of liability</h2>
        <p className="legal-caps">TO THE FULLEST EXTENT PERMITTED BY LAW, MIRAS AI AND ITS OFFICERS, PERSONNEL AND SERVICE PROVIDERS WILL NOT BE LIABLE FOR INDIRECT, INCIDENTAL, SPECIAL, EXEMPLARY, PUNITIVE OR CONSEQUENTIAL LOSS, OR FOR LOSS OF PROFITS, DATA, GOODWILL OR BUSINESS OPPORTUNITY, ARISING FROM OR RELATED TO THE WEBSITE. OUR AGGREGATE LIABILITY FOR A CLAIM RELATING SOLELY TO USE OF THE WEBSITE WILL NOT EXCEED US$100.</p>
        <p>These limitations do not apply to liability that cannot lawfully be limited. Liability arising from paid services is governed by the applicable signed client agreement.</p>
      </section>

      <section>
        <h2>10. Governing law and forum</h2>
        <p>These Terms are governed by the laws of the State of Indiana, without regard to conflict-of-law rules. Subject to any non-waivable law, the state and federal courts located in Monroe County, Indiana will have exclusive jurisdiction over a dispute relating to these Terms or the website, and each party consents to that jurisdiction and venue.</p>
      </section>

      <section>
        <h2>11. General terms</h2>
        <p>If a provision is found unenforceable, it will be limited to the minimum extent necessary and the remaining provisions will continue. Our failure to enforce a provision is not a waiver. You may not assign rights under these Terms without our written consent; we may assign them in connection with a reorganization or transfer of the business. These Terms and the Privacy and Cookie Policies form the entire agreement concerning use of the website.</p>
      </section>

      <section>
        <h2>12. Changes and contact</h2>
        <p>We may revise these Terms as the website or applicable requirements change. Updated Terms apply from the effective date shown at the top. Questions may be sent to <a href="mailto:avais@mirasai.co">avais@mirasai.co</a>.</p>
      </section>
    </LegalPage>
  );
}

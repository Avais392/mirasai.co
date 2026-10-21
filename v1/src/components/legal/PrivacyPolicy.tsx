import LegalPage from "../LegalPage";

interface PrivacyPolicyProps { onBack: () => void; }

export default function PrivacyPolicy({ onBack }: PrivacyPolicyProps) {
  return (
    <LegalPage
      title="Privacy Policy"
      summary="How Miras AI handles business enquiries, job applications and the limited technical information generated when people use this website."
      onBack={onBack}
    >
      <section>
        <h2>1. Who we are and what this policy covers</h2>
        <p>Miras AI is a technology business headquartered in Bloomington, Indiana, United States, with delivery operations in Lahore, Pakistan. This policy applies to personal information handled through mirasai.co, direct business enquiries and applications for roles advertised on this website. It does not govern information processed for a client under a separate services agreement.</p>
        <p>For the activities described here, Miras AI determines why and how the information is used. References to &ldquo;Miras AI,&rdquo; &ldquo;we,&rdquo; &ldquo;us&rdquo; and &ldquo;our&rdquo; have that meaning.</p>
      </section>

      <section>
        <h2>2. Information we receive</h2>
        <h3>Business enquiries</h3>
        <p>When you contact us, we may receive your name, work email, company or team, area of interest, project details and any other information you include. The website&apos;s project form opens your email application; the message is not submitted to a Miras AI web database before you send it.</p>
        <h3>Recruitment</h3>
        <p>When you apply for a role, we may receive your contact details, CV, education and employment history, portfolio or repository links, interview notes, references and information you voluntarily provide. Applications are sent to recruitment@mirasai.co.</p>
        <h3>Website and device information</h3>
        <p>Our hosting and security providers may process limited request data such as IP address, date and time, requested page, referring page, browser, device and error or security events. Your browser can also store the theme preference described in our Cookie Policy. We do not currently use advertising pixels or behavioral analytics cookies on the site.</p>
      </section>

      <section>
        <h2>3. Why we use personal information</h2>
        <ul>
          <li>Respond to enquiries, assess fit and prepare a requested proposal or discovery conversation.</li>
          <li>Evaluate applications, communicate with candidates and administer recruitment.</li>
          <li>Operate, secure, diagnose and improve the website and its availability.</li>
          <li>Maintain business records, prevent misuse and establish or defend legal claims.</li>
          <li>Comply with accounting, employment, regulatory and other legal obligations.</li>
        </ul>
        <p>Where a law requires a legal basis, we rely as applicable on steps requested before entering a contract, performance of a contract, our legitimate interests in operating and protecting the business, compliance with law, or consent. You may withdraw consent at any time, without affecting earlier lawful processing.</p>
      </section>

      <section>
        <h2>4. When information is shared</h2>
        <p>We do not sell personal information and do not share it for cross-context behavioral advertising. We disclose information only as reasonably necessary to:</p>
        <ul>
          <li>authorized Miras AI personnel in the United States and Pakistan who need it for the relevant enquiry, engagement or recruitment process;</li>
          <li>providers of email, hosting, security, productivity, recruitment and professional-advisory services acting under appropriate duties;</li>
          <li>competent authorities or other parties when required by law or reasonably necessary to protect rights, safety and security; and</li>
          <li>a successor in a merger, financing, reorganization or transfer of the business, subject to appropriate safeguards.</li>
        </ul>
      </section>

      <section>
        <h2>5. International handling</h2>
        <p>Because we operate in the United States and Pakistan and use service providers that may operate in other countries, information can be accessed or stored outside the country where you live. Where required, we use contractual commitments or another lawful transfer mechanism and apply access controls appropriate to the information.</p>
      </section>

      <section>
        <h2>6. Retention</h2>
        <p>We keep information only while it serves the purpose for which it was collected and any legitimate legal, accounting or security need. Unless a longer period is required or reasonably justified, we generally retain unconverted business enquiries for up to 24 months after the last substantive contact and unsuccessful recruitment records for up to 12 months after the hiring decision. Records connected to a client, successful candidate, dispute or legal obligation may be kept for the applicable contractual or statutory period.</p>
      </section>

      <section>
        <h2>7. Security</h2>
        <p>We use proportionate administrative and technical measures, including role-based access, account security and limited internal access. No internet transmission or storage system is completely secure, so we cannot promise absolute security. Please do not send passwords, production credentials, regulated data or other sensitive material through a general enquiry unless we have agreed a secure method.</p>
      </section>

      <section>
        <h2>8. Your choices and rights</h2>
        <p>Depending on where you live, you may have rights to request access, correction, deletion, restriction, objection or a portable copy, and to appeal or complain to a data-protection authority. These rights can be subject to legal exceptions. To make a request, email avais@mirasai.co with enough information for us to verify and respond to it. We will not discriminate against you for exercising a privacy right.</p>
        <p>You can stop business-development email by replying with your preference. Recruitment communications can be managed through recruitment@mirasai.co. The Cookie Policy explains browser controls for the saved theme preference.</p>
      </section>

      <section>
        <h2>9. Children</h2>
        <p>This website and our services are directed to organizations and professionals, not children. We do not knowingly collect personal information from anyone under 16 through the website. If you believe a child has provided information, contact us so we can review and delete it where appropriate.</p>
      </section>

      <section>
        <h2>10. External services</h2>
        <p>The website links to services such as LinkedIn. Those providers handle information under their own notices after you choose to visit them. We are not responsible for the privacy practices of a third-party site you choose to open.</p>
      </section>

      <section>
        <h2>11. Changes and contact</h2>
        <p>We may update this policy to reflect changes in the website, our operations or applicable requirements. Material revisions will be identified by the dates at the top. Privacy questions and requests may be sent to <a href="mailto:avais@mirasai.co">avais@mirasai.co</a>. Recruitment enquiries should be sent to <a href="mailto:recruitment@mirasai.co">recruitment@mirasai.co</a>.</p>
      </section>
    </LegalPage>
  );
}

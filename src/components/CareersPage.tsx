import { BriefcaseBusiness, MapPin } from "lucide-react";
import { ROLES } from "@/content/careers";
import { withBase } from "@/base";

export default function CareersPage() {
  return (
    <main className="relative overflow-hidden pb-24 pt-28 sm:pb-32 sm:pt-36">
      <div className="absolute inset-0 bg-grid opacity-25" />
      <div className="page-aurora absolute inset-0" />
      <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
        <header className="max-w-4xl">
          <p className="font-mono text-sm text-cyan-300">/ careers</p>
          <h1 className="headline-safe mt-4 text-4xl font-semibold tracking-tight text-gradient sm:text-6xl">Build useful systems with people who care about the details.</h1>
          <p className="mt-6 max-w-3xl text-lg leading-relaxed text-gray-300">Miras AI is a US-registered technology company with a delivery team in Lahore. Our people work on active engineering, language-data and commercial priorities with direct access to senior leadership.</p>
        </header>

        <section className="mt-14 grid gap-4 sm:grid-cols-3" aria-label="Working at Miras AI">
          {[["Mentorship", "Direct feedback from senior team members."], ["Practical work", "Assignments connected to current products, research and client development."], ["Professional growth", "Structured learning, modern AI tools and exposure to international work."]].map(([title, description]) => (
            <article key={title} className="surface-card rounded-2xl border border-white/[0.08] p-6"><h2 className="font-semibold text-white">{title}</h2><p className="mt-2 text-sm leading-relaxed text-gray-400">{description}</p></article>
          ))}
        </section>

        <section className="mt-20" aria-labelledby="open-roles-heading">
          <p className="font-mono text-sm text-emerald-300">/ open roles</p>
          <h2 id="open-roles-heading" className="sr-only">Open roles</h2>

          {ROLES.length > 0 ? (
            <div className="mt-9 grid gap-6 lg:grid-cols-3">
              {ROLES.map((role) => (
                <article id={role.id} key={role.id} className="surface-card border-glow flex h-full flex-col rounded-3xl p-7 sm:p-8">
                  <div className="flex flex-wrap gap-3 font-mono text-xs text-cyan-200">
                    <span className="inline-flex items-center gap-1.5"><BriefcaseBusiness className="h-3.5 w-3.5" />{role.team}</span>
                    <span className="inline-flex items-center gap-1.5"><MapPin className="h-3.5 w-3.5" />{role.location}</span>
                  </div>
                  <h3 className="mt-5 text-2xl font-semibold text-white">{role.title}</h3>
                  <p className="mt-4 flex-1 text-sm leading-relaxed text-gray-400">{role.summary}</p>
                  <div className="mt-7 border-t border-white/[0.08] pt-6">
                    <a href={withBase(`/careers/${role.id}`)} className="secondary-cta inline-flex w-full items-center justify-center rounded-lg border px-5 py-3 text-sm font-semibold">View role</a>
                  </div>
                </article>
              ))}
            </div>
          ) : (
            <div className="surface-card mt-9 rounded-3xl border border-white/[0.08] p-8 sm:p-12">
              <h3 className="text-2xl font-semibold text-white">We are not currently hiring.</h3>
              <p className="mt-3 max-w-2xl leading-relaxed text-gray-400">New positions will be published here as they become available. Check this page again or follow <a className="font-medium text-cyan-200 hover:text-white" href="https://www.linkedin.com/company/mirasai/" target="_blank" rel="noreferrer">Miras AI on LinkedIn</a> for company updates.</p>
            </div>
          )}

          <div className="career-contact-note mt-7 max-w-3xl rounded-xl border p-5 text-sm leading-relaxed text-gray-400">
            <p>Questions about a role, internship or application? If the Apply button on a role page does not open, email <a className="font-medium text-cyan-200 hover:text-white" href="mailto:recruitment@mirasai.co">recruitment@mirasai.co</a> directly and include the position title in the subject line.</p>
            {ROLES.length > 0 && <p className="mt-3 text-gray-500">Include your CV and links to relevant work. Each role page lists any portfolio, project or writing samples that will help us review your application.</p>}
          </div>
        </section>
      </div>
    </main>
  );
}

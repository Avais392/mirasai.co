import { ArrowLeft, ArrowRight, BriefcaseBusiness, MapPin } from "lucide-react";
import { ROLES } from "@/content/careers";
import { withBase } from "@/base";

interface CareerRolePageProps {
  roleId: string;
}

export default function CareerRolePage({ roleId }: CareerRolePageProps) {
  const role = ROLES.find((item) => item.id === roleId);
  if (!role) return null;

  const applicationLink = `mailto:recruitment@mirasai.co?subject=${encodeURIComponent(role.applySubject)}&body=${encodeURIComponent("Please attach your CV and include links to relevant work, projects or profiles.")}`;

  return (
    <main className="relative overflow-hidden pb-24 pt-28 sm:pb-32 sm:pt-36">
      <div className="absolute inset-0 bg-grid opacity-25" />
      <div className="page-aurora absolute inset-0" />

      <div className="relative mx-auto max-w-5xl px-6 lg:px-8">
        <a href={withBase("/careers")} className="legal-back inline-flex items-center gap-2 text-sm transition-colors">
          <ArrowLeft className="h-4 w-4" /> All open roles
        </a>

        <article className="surface-card border-glow mt-9 rounded-3xl p-7 sm:p-10 lg:p-14">
          <header className="border-b border-white/[0.08] pb-9">
            <p className="font-mono text-sm text-emerald-300">/ open role</p>
            <h1 className="mt-4 text-4xl font-semibold tracking-tight text-white sm:text-6xl">{role.title}</h1>
            <div className="mt-5 flex flex-wrap gap-4 font-mono text-xs text-cyan-200">
              <span className="inline-flex items-center gap-1.5"><BriefcaseBusiness className="h-3.5 w-3.5" />{role.team}</span>
              <span className="inline-flex items-center gap-1.5"><MapPin className="h-3.5 w-3.5" />{role.location}</span>
            </div>
            <p className="mt-6 max-w-3xl text-lg leading-relaxed text-gray-300">{role.summary}</p>
          </header>

          <div className="mt-9 grid gap-12 lg:grid-cols-2">
            <section>
              <h2 className="text-xl font-semibold text-white">What you will work on</h2>
              <ul className="mt-5 space-y-4 leading-relaxed text-gray-400">
                {role.responsibilities.map((item) => <li key={item} className="flex gap-3"><span className="text-emerald-300">✓</span>{item}</li>)}
              </ul>
            </section>
            <section>
              <h2 className="text-xl font-semibold text-white">What we look for</h2>
              <ul className="mt-5 space-y-4 leading-relaxed text-gray-400">
                {role.requirements.map((item) => <li key={item} className="flex gap-3"><span className="text-violet-300">✓</span>{item}</li>)}
              </ul>
            </section>
          </div>

          <section className="mt-12 rounded-2xl border border-white/[0.08] bg-white/[0.025] p-6 sm:p-8">
            <h2 className="text-xl font-semibold text-white">How to apply</h2>
            <p className="mt-3 max-w-3xl leading-relaxed text-gray-400">
              Email your CV and links to relevant work to recruitment@mirasai.co. {role.applicationNote} Include the role title in the subject line.
            </p>
            <a href={applicationLink} className="primary-cta mt-6 inline-flex items-center gap-2 rounded-lg px-6 py-3 text-sm font-semibold">
              Apply <ArrowRight className="h-4 w-4" />
            </a>
            <p className="mt-4 text-sm text-gray-500">If the Apply button does not open, email recruitment@mirasai.co directly.</p>
          </section>
        </article>
      </div>
    </main>
  );
}

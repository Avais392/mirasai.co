import { ArrowLeft, ArrowRight, Check } from "lucide-react";
import type { Page } from "@/App";
import { SERVICE_BY_PAGE, type ServicePageId } from "@/content/services";

interface ServicePageProps {
  servicePage: ServicePageId;
  onNavigate: (page: Page) => void;
}

export default function ServicePage({ servicePage, onNavigate }: ServicePageProps) {
  const service = SERVICE_BY_PAGE[servicePage];
  const Icon = service.icon;

  const openContact = () => {
    onNavigate("contact");
  };

  return (
    <main className="relative overflow-hidden pb-24 pt-28 sm:pb-32 sm:pt-36">
      <div className="absolute inset-0 bg-grid opacity-20" />
      <div className="page-aurora absolute inset-0" />

      <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
        <a
          href="/services"
          onClick={(event) => {
            event.preventDefault();
            onNavigate("home");
            window.setTimeout(
              () => document.getElementById("services")?.scrollIntoView({ behavior: "smooth" }),
              100,
            );
          }}
          className="inline-flex items-center gap-2 text-sm text-gray-400 transition-colors hover:text-white"
        >
          <ArrowLeft className="h-4 w-4" /> Back to services
        </a>

        <div className="mt-10 grid gap-10 lg:grid-cols-[1.3fr_0.7fr] lg:items-end">
          <div>
            <div className="flex h-12 w-12 items-center justify-center rounded-xl border border-cyan-300/20 bg-cyan-300/[0.06]">
              <Icon className="h-5 w-5 text-cyan-100" />
            </div>
            <p className="mt-8 font-mono text-sm text-violet-300">/ service {service.number}</p>
            <h1 className="headline-safe mt-3 text-4xl font-semibold tracking-tight text-gradient sm:text-6xl">
              {service.title}
            </h1>
            <p className="mt-6 max-w-3xl text-lg leading-relaxed text-gray-300">
              {service.introduction}
            </p>
          </div>

          <aside className="rounded-2xl border border-white/[0.08] bg-white/[0.025] p-6">
            <p className="font-mono text-xs uppercase tracking-[0.2em] text-cyan-300">Typical timeline</p>
            <p className="mt-2 text-white">{service.timeline}</p>
            <div className="my-5 h-px bg-white/[0.08]" />
            <p className="font-mono text-xs uppercase tracking-[0.2em] text-cyan-300">Best for</p>
            <p className="mt-2 text-sm leading-relaxed text-gray-300">{service.bestFor}</p>
          </aside>
        </div>

        <div className="mt-20 grid gap-6 lg:grid-cols-2">
          <section className="rounded-2xl border border-white/[0.08] bg-white/[0.018] p-8">
            <p className="font-mono text-sm text-violet-300">/ problems solved</p>
            <h2 className="mt-3 text-2xl font-semibold text-white">When this service is useful</h2>
            <ul className="mt-7 space-y-4">
              {service.problems.map((problem) => (
                <li key={problem} className="flex gap-3 text-sm leading-relaxed text-gray-300">
                  <Check className="mt-0.5 h-4 w-4 shrink-0 text-violet-300" /> {problem}
                </li>
              ))}
            </ul>
          </section>

          <section className="rounded-2xl border border-cyan-300/15 bg-cyan-300/[0.025] p-8">
            <p className="font-mono text-sm text-cyan-300">/ deliverables</p>
            <h2 className="mt-3 text-2xl font-semibold text-white">What you can expect</h2>
            <ul className="mt-7 space-y-4">
              {service.deliverables.map((deliverable) => (
                <li key={deliverable} className="flex gap-3 text-sm leading-relaxed text-gray-300">
                  <Check className="mt-0.5 h-4 w-4 shrink-0 text-cyan-200" /> {deliverable}
                </li>
              ))}
            </ul>
          </section>
        </div>

        <section className="mt-16 grid gap-8 border-y border-white/[0.08] py-10 lg:grid-cols-[0.72fr_1.28fr]">
          <div>
            <p className="font-mono text-sm text-emerald-300">/ technologies and methods</p>
            <div className="mt-5 flex flex-wrap gap-2">
              {service.technologies.map((technology) => (
                <span key={technology} className="rounded-full border border-white/[0.1] px-3 py-1.5 text-xs text-gray-300">
                  {technology}
                </span>
              ))}
            </div>
          </div>
          <div>
            <p className="font-mono text-sm text-emerald-300">/ relevant experience</p>
            <p className="mt-5 text-lg leading-relaxed text-gray-300">{service.experience}</p>
          </div>
        </section>

        <section className="mt-16 flex flex-col items-start justify-between gap-7 rounded-2xl border border-violet-300/15 bg-gradient-to-br from-violet-400/[0.08] via-cyan-300/[0.04] to-transparent p-8 sm:flex-row sm:items-center sm:p-10">
          <div>
            <h2 className="text-2xl font-semibold text-white">Define the mandate</h2>
            <p className="mt-2 max-w-2xl text-gray-400">
              Share the current state, required outcome and material constraints. We will recommend a proportionate first step.
            </p>
          </div>
          <a
            href="/contact"
            onClick={(event) => { event.preventDefault(); openContact(); }}
            className="inline-flex shrink-0 items-center gap-2 rounded-lg bg-white px-5 py-3 text-sm font-semibold text-black transition-colors hover:bg-gray-200"
          >
            Discuss this service <ArrowRight className="h-4 w-4" />
          </a>
        </section>
      </div>
    </main>
  );
}

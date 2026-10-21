import { ArrowRight, Check } from "lucide-react";
import type { Page } from "@/App";
import EngagementModels from "@/components/EngagementModels";
import { SERVICES } from "@/content/services";

interface ServicesPageProps {
  onNavigate: (page: Page) => void;
}

export default function ServicesPage({ onNavigate }: ServicesPageProps) {
  const openContact = () => {
    onNavigate("contact");
  };

  return (
    <main className="relative overflow-hidden pb-24 pt-28 sm:pb-32 sm:pt-36">
      <div className="absolute inset-0 bg-grid opacity-20" />
      <div className="page-aurora absolute inset-0" />

      <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
        <div className="max-w-3xl">
          <p className="font-mono text-sm text-cyan-300">/ what we build</p>
          <h1 className="headline-safe mt-4 text-4xl font-semibold tracking-tight text-gradient sm:text-6xl">
            Engineering capability for critical product mandates
          </h1>
          <p className="mt-6 text-lg leading-relaxed text-gray-300">
            Engage Miras AI to launch a product, modernize a mobile platform,
            operationalize AI, build multilingual data capability or provide
            senior technical direction at a decisive stage.
          </p>
        </div>

        <div className="mt-16 overflow-hidden rounded-2xl border border-white/[0.08]">
          {SERVICES.map((service) => (
            <article
              key={service.page}
              className="grid border-b border-white/[0.08] last:border-b-0 lg:grid-cols-2"
            >
              <div className="bg-[#090c14]/90 p-7 sm:p-10">
                <span className="font-mono text-xs text-white/30">{service.number}</span>
                <h2 className="mt-5 text-2xl font-semibold text-white">{service.title}</h2>
                <p className="mt-2 text-sm font-medium text-cyan-300">{service.subtitle}</p>
                <p className="mt-6 max-w-xl text-sm leading-relaxed text-gray-400">
                  {service.shortDescription}
                </p>
                <p className="mt-7 text-xs italic leading-relaxed text-gray-500">
                  {service.audience}
                </p>
                <a
                  href={service.path}
                  onClick={(event) => { event.preventDefault(); onNavigate(service.page); }}
                  className="mt-7 inline-flex items-center gap-2 text-sm font-medium text-violet-200 transition-colors hover:text-white"
                >
                  View service details <ArrowRight className="h-4 w-4" />
                </a>
              </div>

              <div className="bg-white/[0.025] p-7 sm:p-10">
                <p className="font-mono text-xs uppercase tracking-[0.2em] text-gray-500">Deliverables</p>
                <ul className="mt-6 space-y-3">
                  {service.deliverables.map((deliverable) => (
                    <li key={deliverable} className="flex gap-3 text-sm leading-relaxed text-gray-300">
                      <Check className="mt-0.5 h-4 w-4 shrink-0 text-cyan-200" />
                      {deliverable}
                    </li>
                  ))}
                </ul>
              </div>
            </article>
          ))}
        </div>
      </div>

      <div className="relative mt-24">
        <EngagementModels />
      </div>

      <section className="relative mx-auto mt-24 grid max-w-7xl gap-8 px-6 lg:grid-cols-2 lg:items-center lg:px-8">
        <h2 className="text-3xl font-semibold tracking-tight text-white sm:text-5xl">
          Bring us the mandate, not a predefined solution.
        </h2>
        <div>
          <p className="max-w-xl text-lg leading-relaxed text-gray-400">
            We will assess the objective, delivery context and constraints, then recommend the smallest credible engagement.
          </p>
          <a
            href="/contact"
            onClick={(event) => { event.preventDefault(); openContact(); }}
            className="primary-cta mt-6 inline-flex items-center gap-2 rounded-lg px-5 py-3 text-sm font-semibold transition-colors"
          >
            Discuss a project <ArrowRight className="h-4 w-4" />
          </a>
        </div>
      </section>
    </main>
  );
}

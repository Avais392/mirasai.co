import { ArrowRight } from "lucide-react";
import { SERVICES, type ServicePageId } from "@/content/services";
import { withBase } from "@/base";

interface ServicesProps {
  onOpenService: (page: ServicePageId) => void;
}

const HOME_COPY = [
  { title: "Product and platform engineering", description: "Move from a defined opportunity to a working web or mobile product, with architecture, APIs, integrations, QA and release considered from the start." },
  { title: "Mobile systems", description: "Build and improve React Native products with complex navigation, native behavior, deep links, payments, real-time features and reliable release pipelines." },
  { title: "Applied AI and automation", description: "Connect models and tools to useful workflows, with evaluation, escalation, approvals and operational visibility." },
  { title: "Voice and language data", description: "Explore transcription, speech interfaces, call analysis, multilingual data pipelines and private deployment options through scoped discovery and pilots." },
  { title: "Technical leadership", description: "Get architecture, roadmap decisions, team guidance and delivery ownership when a full-time CTO or specialist hire is not the right immediate step." },
];

export default function Services({ onOpenService }: ServicesProps) {
  return (
    <section id="services" className="services-stage relative py-20 sm:py-24">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <p className="font-mono text-sm text-violet-400">/ what we do</p>
        <h2 className="mt-3 text-3xl font-semibold tracking-tight text-white sm:text-5xl">Services</h2>

        <div className="mt-10 grid gap-px overflow-hidden rounded-2xl border border-white/[0.08] bg-white/[0.08] lg:grid-cols-2">
          {SERVICES.map((service, index) => {
            const copy = HOME_COPY[index];
            return (
              <article key={service.page} className={`theme-info-panel flex flex-col bg-[#0a0d17] p-7 sm:p-8 ${index === 4 ? "lg:col-span-2" : ""}`}>
                <span className="font-mono text-xs text-violet-300">{service.number}</span>
                <h3 className="mt-3 text-xl font-semibold text-white">{copy.title}</h3>
                <p className="mt-3 max-w-2xl flex-1 text-sm leading-relaxed text-gray-400">{copy.description}</p>
                <a href={withBase(service.path)} onClick={(event) => { event.preventDefault(); onOpenService(service.page); }} className="group mt-6 inline-flex w-fit items-center gap-2 text-sm font-medium text-cyan-200 hover:text-white">
                  View service <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
                </a>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}

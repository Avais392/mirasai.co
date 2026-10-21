import { ArrowRight } from "lucide-react";
import { SERVICES, type ServicePageId } from "@/content/services";
import { withBase } from "@/base";

interface ServicesProps {
  onOpenService: (page: ServicePageId) => void;
}

export default function Services({ onOpenService }: ServicesProps) {
  return (
    <section id="services" className="services-stage relative overflow-hidden py-28 sm:py-36">
      <div className="absolute inset-0 bg-grid opacity-20" />
      <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
        {/* Section header */}
        <div className="max-w-2xl">
          <p className="font-mono text-sm text-violet-400 mb-3">/ services</p>
          <h2 className="text-4xl sm:text-5xl font-semibold tracking-tight text-white">
            Specialist engineering capability
          </h2>
          <p className="mt-4 text-lg text-gray-400">
            Senior teams for product launches, platform modernization,
            production AI and technically demanding delivery.
          </p>
        </div>

        {/* Bento grid */}
        <div className="mt-12 grid grid-cols-1 gap-4 lg:grid-cols-6">
          {SERVICES.map((service, index) => {
            const Icon = service.icon;
            const span = index < 2 ? "lg:col-span-3" : "lg:col-span-2";
            return (
              <article
                key={service.title}
                className={`service-card group border-glow flex flex-col rounded-2xl p-8 ${span}`}
              >
                <div className="mb-8 flex items-center justify-between">
                  <div className="flex h-11 w-11 items-center justify-center rounded-xl border border-white/[0.08] bg-white/[0.04] transition-colors duration-300 group-hover:border-cyan-300/30 group-hover:bg-cyan-300/[0.08]">
                    <Icon className="h-5 w-5 text-cyan-200" />
                  </div>
                  <span className="font-mono text-xs text-white/25">0{index + 1}</span>
                </div>
                <h3 className="text-lg font-semibold text-white tracking-tight">
                  {service.title}
                </h3>
                <p className="mt-3 text-sm text-gray-400 leading-relaxed">
                  {service.shortDescription}
                </p>
                <a
                  href={withBase(service.path)}
                  onClick={(event) => { event.preventDefault(); onOpenService(service.page); }}
                  className="mt-7 inline-flex items-center gap-2 self-start text-sm font-medium text-cyan-100 transition-colors hover:text-white"
                >
                  Explore this service
                  <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
                </a>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}

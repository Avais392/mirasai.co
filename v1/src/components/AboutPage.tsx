import { ArrowRight, Linkedin } from "lucide-react";
import type { Page } from "@/App";
import LanguageConstellation from "@/components/LanguageConstellation";
import { withBase } from "@/base";

interface AboutPageProps {
  onNavigate: (page: Page) => void;
}

const BELIEFS = [
  {
    title: "Clarity before code",
    description:
      "We establish the commercial objective, constraints and success measures before recommending a technical course.",
  },
  {
    title: "Accountable delivery",
    description:
      "Scope, progress, decisions and acceptance criteria remain visible throughout the engagement.",
  },
  {
    title: "Technical honesty",
    description:
      "We state what is feasible, expose material risk early and make trade-offs explicit.",
  },
  {
    title: "Human and direct",
    description:
      "Clients speak directly with the people responsible for architecture and delivery.",
  },
];

export default function AboutPage({ onNavigate }: AboutPageProps) {
  return (
    <main className="relative overflow-hidden pt-28 pb-24 sm:pt-36 sm:pb-32">
      <div className="absolute inset-0 bg-grid opacity-30" />
      <div className="page-aurora absolute inset-0" />
      <LanguageConstellation />

      <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
        <div className="max-w-3xl">
          <p className="font-mono text-sm text-cyan-300">/ who we are</p>
          <h1 className="headline-safe mt-4 text-4xl font-semibold tracking-tight text-gradient sm:text-6xl">
            A US engineering company with delivery operations in Pakistan.
          </h1>
          <p className="mt-6 max-w-2xl text-lg leading-relaxed text-gray-300">
            Miras AI combines senior product engineering, applied AI and
            language-data expertise. Our teams in Bloomington and Lahore serve
            founders, product leaders and agencies across US and Asian working hours.
          </p>
        </div>

        <section className="mt-20 grid gap-6 lg:grid-cols-[0.8fr_1.2fr]">
          <div className="rounded-2xl border border-cyan-300/15 bg-cyan-300/[0.04] p-8">
            <p className="font-mono text-xs uppercase tracking-[0.25em] text-cyan-300">
              Our mandate
            </p>
            <p className="mt-5 text-2xl font-medium leading-relaxed text-white">
              Turn consequential product and operational requirements into dependable systems, with clear technical ownership from assessment through release.
            </p>
          </div>
          <div className="surface-card rounded-2xl border border-white/[0.08] p-8 text-base leading-relaxed text-gray-300">
            Clients engage Miras AI for cross-platform products, complex integrations,
            applied AI, multilingual speech and data systems, delivery recovery and
            fractional engineering leadership.
          </div>
        </section>

        <section className="mt-24" aria-labelledby="company-facts-heading">
          <p className="font-mono text-sm text-cyan-300">/ company facts</p>
          <h2 id="company-facts-heading" className="mt-3 text-3xl font-semibold tracking-tight text-white sm:text-4xl">
            Built for cross-border delivery
          </h2>
          <div className="mt-8 grid gap-px overflow-hidden rounded-2xl border border-white/[0.08] bg-white/[0.08] sm:grid-cols-2 lg:grid-cols-3">
            {[
              ["Registered base", "Miras AI is registered in Indiana, United States, with its headquarters in Bloomington."],
              ["Operating locations", "Company leadership in the United States and an engineering delivery office in Lahore, Pakistan."],
              ["Delivery regions", "Primary client and delivery coverage across the United States and Pakistan."],
              ["Team structure", "Founder-led teams combining product engineering, applied AI and language-data capability."],
              ["Working coverage", "Planned overlap across US and Asian time zones for decisions, reviews and delivery."],
              ["Availability", "A limited number of concurrent engagements; team composition and start dates are confirmed during discovery."],
            ].map(([title, description]) => (
              <article key={title} className="bg-[#0a0d17] p-7">
                <h3 className="font-semibold text-white">{title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-gray-400">{description}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="mt-24">
          <p className="font-mono text-sm text-violet-300">/ leadership</p>
          <h2 className="mt-3 text-3xl font-semibold tracking-tight text-white sm:text-4xl">
            Engineering and language expertise under one standard
          </h2>

          <div className="mt-10 grid gap-5 lg:grid-cols-2">
            <article className="leadership-card rounded-2xl p-8">
              <div className="flex items-start justify-between gap-6">
                <div>
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl border border-violet-300/20 bg-violet-300/[0.08] font-mono text-sm text-violet-200">
                    AM
                  </div>
                  <h3 className="mt-6 text-2xl font-semibold text-white">
                    Avais Muhib Ur Rasool
                  </h3>
                  <p className="mt-1 text-sm text-violet-300">Co-Founder and CTO</p>
                </div>
                <a
                  href="https://www.linkedin.com/in/avais392/"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Avais Muhib Ur Rasool on LinkedIn"
                  className="rounded-lg border border-white/10 p-2.5 text-gray-400 transition-colors hover:border-violet-300/30 hover:text-white"
                >
                  <Linkedin className="h-4 w-4" />
                </a>
              </div>
              <p className="mt-6 leading-relaxed text-gray-400">
                Avais builds cross-platform products and the engineering systems
                behind them. His production experience spans enterprise
                commerce, health and fitness, and telemedicine, including CP
                AXTRA / Makro PRO, AimFit and Your Doctors Online.
              </p>
              <a
                href={withBase("/work")}
                onClick={(event) => { event.preventDefault(); onNavigate("work"); }}
                className="mt-6 inline-flex items-center gap-2 text-sm font-medium text-violet-200 hover:text-white"
              >
                View prior engineering work <ArrowRight className="h-4 w-4" />
              </a>
            </article>

            <article className="leadership-card leadership-card-cyan rounded-2xl p-8">
              <div className="flex items-start justify-between gap-6">
                <div>
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl border border-cyan-300/20 bg-cyan-300/[0.08] font-mono text-sm text-cyan-100">
                    MA
                  </div>
                  <h3 className="mt-6 text-2xl font-semibold text-white">Meesum Alam</h3>
                  <p className="mt-1 text-sm text-cyan-300">Co-Founder</p>
                </div>
                <a
                  href="https://www.linkedin.com/in/meesum-alam/"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Meesum Alam on LinkedIn"
                  className="rounded-lg border border-white/10 p-2.5 text-gray-400 transition-colors hover:border-cyan-300/30 hover:text-white"
                >
                  <Linkedin className="h-4 w-4" />
                </a>
              </div>
              <p className="mt-6 leading-relaxed text-gray-400">
                Meesum is a Fulbright PhD scholar in Computational Linguistics at
                Indiana University Bloomington. His work connects natural
                language processing, language documentation and community-led
                datasets for under-resourced South Asian languages.
              </p>
              <div className="mt-6 flex flex-wrap gap-2 font-mono text-xs text-cyan-100/80">
                <span className="rounded-full border border-cyan-300/15 px-3 py-1.5">NLP</span>
                <span className="rounded-full border border-cyan-300/15 px-3 py-1.5">Language data</span>
                <span className="rounded-full border border-cyan-300/15 px-3 py-1.5">Low-resource languages</span>
              </div>
            </article>
          </div>
        </section>

        <section className="mt-24">
          <p className="font-mono text-sm text-emerald-300">/ what we believe</p>
          <div className="mt-8 grid gap-px overflow-hidden rounded-2xl border border-white/[0.08] bg-white/[0.08] sm:grid-cols-2">
            {BELIEFS.map((belief) => (
              <article key={belief.title} className="bg-[#0a0d17] p-7">
                <h3 className="font-semibold text-white">{belief.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-gray-400">
                  {belief.description}
                </p>
              </article>
            ))}
          </div>
        </section>

        <section className="mt-24 rounded-2xl border border-violet-300/15 bg-gradient-to-br from-violet-400/[0.08] via-cyan-300/[0.04] to-emerald-300/[0.05] p-8 sm:p-12">
          <h2 className="text-3xl font-semibold text-white">Discuss a mandate</h2>
          <p className="mt-3 max-w-2xl leading-relaxed text-gray-300">
            We accept a limited number of concurrent engagements. Share the
            objective, current state and material constraints; we will respond
            with a practical first step.
          </p>
          <a
            href="mailto:avais@mirasai.co"
            className="mt-7 inline-flex items-center gap-2 rounded-lg bg-white px-5 py-3 text-sm font-semibold text-black transition-colors hover:bg-gray-200"
          >
            Start a conversation <ArrowRight className="h-4 w-4" />
          </a>
        </section>
      </div>
    </main>
  );
}

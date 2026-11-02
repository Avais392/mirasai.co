import { ArrowUpRight } from "lucide-react";

const REASONS = [
  {
    title: "Founder-led delivery",
    description: "The leaders who scope the engagement remain involved in architecture, delivery and the decisions that determine its success.",
  },
  {
    title: "Mobile and cross-platform depth",
    description: "Production experience spans React Native, native integrations, payments, real-time communication and multi-market releases.",
  },
  {
    title: "Computational linguistics expertise",
    description: "Our language work combines NLP, language documentation and community-led dataset development.",
  },
  {
    title: "South Asian language capability",
    description: "We work across more than 45 South Asian languages, including low-resource languages with limited existing data.",
  },
  {
    title: "Direct access to senior engineers",
    description: "Clients discuss trade-offs with the engineers responsible for the work, keeping decisions fast and technically grounded.",
  },
  {
    title: "Small capacity, accountable ownership",
    description: "We limit concurrent engagements so scope, communication and delivery remain visible to both sides.",
  },
];

export default function WhyMiras() {
  return (
    <section id="why-miras" className="relative py-24 sm:py-32">
      <div className="mx-auto grid max-w-7xl gap-14 px-6 lg:grid-cols-[0.72fr_1.28fr] lg:px-8">
        <div className="lg:sticky lg:top-28 lg:self-start">
          <p className="font-mono text-sm text-cyan-300">/ why Miras</p>
          <h2 className="mt-3 text-3xl font-semibold tracking-tight text-white sm:text-5xl">
            Senior judgment, without the layers
          </h2>
          <p className="mt-5 max-w-xl text-lg leading-relaxed text-gray-400">
            Miras AI is structured for mandates that require experienced decisions, specialist capability and a clearly accountable team.
          </p>
        </div>

        <div className="border-t border-white/[0.08]">
          {REASONS.map((reason, index) => (
            <article
              key={reason.title}
              className="group grid gap-3 border-b border-white/[0.08] py-7 sm:grid-cols-[52px_0.72fr_1.28fr] sm:items-start"
            >
              <span className="font-mono text-xs text-violet-300">0{index + 1}</span>
              <h3 className="flex items-center gap-2 font-semibold text-white">
                {reason.title}
                <ArrowUpRight className="h-3.5 w-3.5 text-white/25 transition-colors group-hover:text-cyan-200" />
              </h3>
              <p className="text-sm leading-relaxed text-gray-400">{reason.description}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

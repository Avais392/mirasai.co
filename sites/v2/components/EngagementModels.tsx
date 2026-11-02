const MODELS = [
  {
    title: "Defined project",
    description: "A defined scope, commercial model, milestone plan and acceptance criteria.",
  },
  {
    title: "Focused workstream",
    description: "A senior specialist embedded in your team to resolve a defined technical priority.",
  },
  {
    title: "Delivery pod",
    description: "A compact cross-functional team responsible for a product workstream from plan to release.",
  },
  {
    title: "White-label partner",
    description: "Confidential engineering capacity for agencies, consultancies and product studios.",
  },
  {
    title: "Fractional CTO",
    description: "Architecture, roadmap and engineering governance without a full-time executive hire.",
  },
  {
    title: "Embedded engineering team",
    description:
      "A dedicated team integrated into your operating rhythm, with agreed roles, capacity and delivery responsibility.",
  },
];

export default function EngagementModels() {
  return (
    <section id="engagement-models" className="services-stage relative py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="max-w-3xl">
          <p className="font-mono text-sm text-emerald-300">/ how we engage</p>
          <h2 className="mt-3 text-3xl font-semibold tracking-tight text-white sm:text-5xl">
            Ways to engage
          </h2>
        </div>

        <div className="mt-12 grid overflow-hidden rounded-2xl border border-white/[0.08] sm:grid-cols-2 lg:grid-cols-3">
          {MODELS.map((model) => (
            <article
              key={model.title}
              className="min-h-44 border-b border-white/[0.08] bg-white/[0.015] p-7 sm:border-r lg:p-8"
            >
              <h3 className="font-semibold text-white">{model.title}</h3>
              <p className="mt-3 text-sm leading-relaxed text-gray-400">{model.description}</p>
            </article>
          ))}
        </div>
        <p className="mt-5 text-sm italic text-gray-500">
          Team composition, working hours and start dates are confirmed during discovery.
        </p>
      </div>
    </section>
  );
}

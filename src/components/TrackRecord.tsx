const PROJECTS = [
  {
    name: "AimFit",
    domain: "Health and fitness",
    image: "/projects/aimfit-overview.jpg",
    imageWidth: 832,
    imageHeight: 464,
    imageAlt: "AimFit mobile workout interface and training categories",
    description:
      "Contributed to a consumer fitness platform with live and recorded workouts, nutrition and progress tracking, community features and mobile release work.",
  },
  {
    name: "Your Doctors Online",
    domain: "Telemedicine",
    image: "/projects/ydo-overview.jpg",
    imageWidth: 1024,
    imageHeight: 576,
    imageAlt: "Your Doctors Online mobile consultation interface",
    description:
      "Worked across mobile and web workflows — Agora consultations, Firebase chat, Apple/Google Pay and Stripe, EMR integration, doctor portal and queuing systems.",
  },
  {
    name: "CP AXTRA / Makro PRO",
    domain: "Enterprise commerce",
    image: "/projects/makro-commerce-concept.webp",
    imageWidth: 1400,
    imageHeight: 788,
    imageAlt: "Concept presentation of a multi-market grocery commerce mobile platform",
    wide: true,
    description:
      "Senior mobile engineering on CP AXTRA's React Native commerce ecosystem — referral, membership, deep links, multi-market configurations and release work.",
  },
];

interface TrackRecordProps {
  onOpenWork: () => void;
}

export default function TrackRecord({ onOpenWork }: TrackRecordProps) {
  return (
    <section id="work" className="relative py-24 sm:py-32">
      <div className="absolute inset-0 bg-radial-glow-blue opacity-50" />

      <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
        {/* Section header */}
        <div className="max-w-2xl">
          <p className="font-mono text-sm text-violet-400 mb-3">/ work</p>
          <h2 className="text-3xl sm:text-4xl font-semibold tracking-tight text-white">
            Selected engineering experience
          </h2>
          <p className="mt-4 text-lg text-gray-400">
            Before founding Miras AI, CTO Avais Muhib Ur Rasool contributed to
            production platforms in enterprise commerce, consumer fitness and
            telemedicine. The work below represents his prior engineering record.
          </p>
        </div>

        {/* Project cards */}
        <div className="mt-12 grid grid-cols-1 gap-5 lg:grid-cols-2">
          {PROJECTS.map((project) => (
            <article
              key={project.name}
              className={`group surface-card border-glow overflow-hidden rounded-2xl flex flex-col ${project.wide ? "lg:col-span-2 lg:grid lg:grid-cols-[1.15fr_0.85fr]" : ""}`}
            >
              {project.image ? (
                <div className={`project-media aspect-video overflow-hidden border-b border-white/[0.08] ${project.wide ? "lg:aspect-auto lg:border-b-0 lg:border-r" : ""}`}>
                  <img
                    src={project.image}
                    alt={project.imageAlt}
                    loading="lazy"
                    decoding="async"
                    width={project.imageWidth}
                    height={project.imageHeight}
                    className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-[1.02]"
                  />
                </div>
              ) : (
                <div className="project-proof flex min-h-44 items-end p-8">
                  <p className="max-w-sm font-mono text-sm leading-relaxed text-cyan-200">
                    React Native · multi-market configuration · membership · deep links · release operations
                  </p>
                </div>
              )}

              <div className="flex flex-1 flex-col p-7 sm:p-8">
                <span className="w-fit rounded-full border border-white/[0.08] bg-white/[0.03] px-3 py-1 text-xs font-medium text-gray-400">
                  {project.domain}
                </span>
                <h3 className="mt-5 text-xl font-semibold text-white tracking-tight">
                  {project.name}
                </h3>
                <p className="mt-3 text-sm text-gray-400 leading-relaxed flex-1">
                  {project.description}
                </p>
              </div>

            </article>
          ))}
        </div>

        <div className="mt-8 flex justify-end">
          <a
            href="/work"
            onClick={(event) => { event.preventDefault(); onOpenWork(); }}
            className="rounded-lg border border-cyan-300/20 bg-cyan-300/[0.05] px-5 py-2.5 text-sm font-medium text-cyan-100 transition-colors hover:border-cyan-300/40 hover:bg-cyan-300/[0.09]"
          >
            View the full track record
          </a>
        </div>
      </div>
    </section>
  );
}

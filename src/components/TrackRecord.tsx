import { withBase } from "@/base";

const PROJECTS = [
  {
    name: "CP AXTRA / Makro PRO",
    domain: "Enterprise commerce",
    image: withBase("/projects/makro-commerce-concept.webp"),
    width: 1400,
    height: 788,
    alt: "Concept presentation of a multi-market grocery commerce mobile platform",
    description: "Senior mobile engineering on CP AXTRA's React Native commerce ecosystem — referral, membership, deep links, multi-market configurations and release work across Thailand, Cambodia, Myanmar and Malaysia.",
  },
  {
    name: "AimFit",
    domain: "Health and fitness",
    image: withBase("/projects/aimfit-overview.jpg"),
    width: 832,
    height: 464,
    alt: "AimFit mobile workout interface and training categories",
    cropVideoHeading: true,
    description: "Contributed to a consumer fitness platform with live and recorded workouts, nutrition and progress tracking, community features and mobile release work.",
  },
  {
    name: "Your Doctors Online",
    domain: "Telemedicine",
    image: withBase("/projects/ydo-overview.jpg"),
    width: 1024,
    height: 576,
    alt: "Your Doctors Online mobile consultation interface",
    cropVideoHeading: true,
    description: "Worked across mobile and web workflows — Agora consultations, Firebase chat, Apple/Google Pay and Stripe, EMR integration, doctor portal and queuing systems.",
  },
];

interface TrackRecordProps { onOpenWork: () => void; }

export default function TrackRecord({ onOpenWork }: TrackRecordProps) {
  return (
    <section id="work" className="relative py-20 sm:py-24">
      <div className="absolute inset-0 bg-radial-glow-blue opacity-40" />
      <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
        <div className="max-w-3xl">
          <p className="font-mono text-sm text-violet-400">/ track record</p>
          <h2 className="mt-3 text-3xl font-semibold tracking-tight text-white sm:text-5xl">Experience behind the delivery</h2>
          <p className="mt-4 text-base leading-relaxed text-gray-400 sm:text-lg">
            Our Co-Founder and CTO, Avais Muhib Ur Rasool, has worked on production products across enterprise commerce, health and fitness. This is his prior engineering track record; these products were not built by Miras AI.
          </p>
        </div>

        <div className="mt-10 grid gap-5 lg:grid-cols-3">
          {PROJECTS.map((project) => (
            <article key={project.name} className="surface-card border-glow group overflow-hidden rounded-2xl">
              <div className="project-media aspect-video overflow-hidden border-b border-white/[0.08]">
                <img src={project.image} alt={project.alt} loading="lazy" decoding="async" width={project.width} height={project.height} className={`h-full w-full object-cover transition-transform duration-700 group-hover:scale-[1.02] ${project.cropVideoHeading ? "case-study-image" : ""}`} />
              </div>
              <div className="p-6">
                <span className="rounded-full border border-white/[0.08] bg-white/[0.03] px-3 py-1 text-xs text-gray-400">{project.domain}</span>
                <h3 className="mt-4 text-xl font-semibold text-white">{project.name}</h3>
                <p className="mt-3 text-sm leading-relaxed text-gray-400">{project.description}</p>
              </div>
            </article>
          ))}
        </div>

        <div className="mt-7 flex justify-end">
          <a href={withBase("/work")} onClick={(event) => { event.preventDefault(); onOpenWork(); }} className="secondary-cta rounded-lg border px-5 py-2.5 text-sm font-medium">View the full track record</a>
        </div>
      </div>
    </section>
  );
}

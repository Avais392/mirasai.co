import { Search, PenTool, Rocket, Globe } from "lucide-react";

const STEPS = [
  {
    icon: Search,
    title: "Frame the mandate",
    description:
      "We align the commercial objective, user need and operating constraints, then define what success must look like for both the business and the system.",
    outcome: "A clear mandate, priorities and acceptance criteria.",
  },
  {
    icon: PenTool,
    title: "De-risk the plan",
    description:
      "We test the critical assumptions across architecture, data, integrations, security and delivery capacity before expensive commitments are made.",
    outcome: "An executable roadmap with risks, ownership and trade-offs made explicit.",
  },
  {
    icon: Rocket,
    title: "Build with evidence",
    description:
      "We ship production-shaped increments early, review them with the people accountable for the outcome and keep quality, decisions and delivery risk visible.",
    outcome: "Tested software, working evidence and predictable delivery decisions.",
  },
  {
    icon: Globe,
    title: "Operate and improve",
    description:
      "We release with monitoring, runbooks and clear operational ownership, then use real performance and user behavior to guide the next investment.",
    outcome: "A controlled handover, measurable performance and a prioritized next-stage plan.",
  },
];

export default function HowWeWork() {
  return (
    <section id="approach" className="relative py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        {/* Section header */}
        <div className="max-w-3xl">
          <p className="font-mono text-sm text-violet-400 mb-3">/ approach</p>
          <h2 className="text-3xl sm:text-4xl font-semibold tracking-tight text-white">
            From ambiguity to accountable delivery
          </h2>
          <p className="mt-4 max-w-2xl text-lg leading-relaxed text-gray-400">
            Every engagement starts with the decision that needs to be made and the outcome that needs to change. We expose constraints early, deliver in reviewable increments and leave your team with clear ownership.
          </p>
        </div>

        {/* Timeline */}
        <div className="mt-16 relative">
          {/* Vertical line */}
          <div
            className="absolute left-[19px] sm:left-1/2 top-0 bottom-0 w-px sm:-translate-x-1/2"
            style={{
              background:
                "linear-gradient(to bottom, transparent 0%, rgba(124,109,247,0.3) 15%, rgba(124,109,247,0.3) 85%, transparent 100%)",
            }}
          />

          <div className="space-y-12">
            {STEPS.map((step, index) => {
              const Icon = step.icon;
              const isEven = index % 2 === 0;
              return (
                <div
                  key={step.title}
                  className={`relative flex items-center gap-8 ${
                    isEven ? "sm:flex-row" : "sm:flex-row-reverse"
                  }`}
                >
                  {/* Node */}
                  <div className="absolute left-0 sm:left-1/2 sm:-translate-x-1/2 z-10">
                    <div className="flex h-10 w-10 items-center justify-center rounded-full border border-violet-500/30 bg-[#080a12]">
                      <Icon className="h-4 w-4 text-violet-300" />
                    </div>
                    <div
                      className="absolute inset-0 rounded-full blur-md animate-pulse-glow"
                      style={{
                        background:
                          "radial-gradient(circle, rgba(124,109,247,0.4) 0%, transparent 70%)",
                      }}
                    />
                  </div>

                  {/* Content card */}
                  <div
                    className={`ml-16 sm:ml-0 sm:w-[calc(50%-2.5rem)] ${
                      isEven ? "sm:text-right" : "sm:text-left"
                    }`}
                  >
                    <div className="surface-card border-glow rounded-xl p-6">
                      <span className="font-mono text-xs text-violet-400">
                        0{index + 1}
                      </span>
                      <h3 className="mt-2 text-lg font-semibold text-white tracking-tight">
                        {step.title}
                      </h3>
                      <p className="mt-2 text-sm text-gray-400 leading-relaxed">
                        {step.description}
                      </p>
                      <div className={`mt-5 border-t border-white/[0.08] pt-4 ${isEven ? "sm:ml-auto" : ""}`}>
                        <p className="font-mono text-[10px] uppercase tracking-[0.16em] text-violet-400">
                          Stage outcome
                        </p>
                        <p className="mt-1.5 text-sm font-medium leading-relaxed text-gray-300">
                          {step.outcome}
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* Spacer for opposite side */}
                  <div className="hidden sm:block sm:w-[calc(50%-2.5rem)]" />
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}

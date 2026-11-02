import { ArrowRight } from "lucide-react";
import LanguageConstellation from "@/components/LanguageConstellation";

const CAPABILITIES = [
  "Product engineering",
  "Mobile and web",
  "Applied AI",
  "Automation",
  "Engineering leadership",
];

export default function Hero() {
  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="relative overflow-hidden pb-20 pt-32 sm:pb-24 sm:pt-40">
      <div className="absolute inset-0 bg-grid opacity-40" />
      <div className="absolute inset-0 bg-radial-glow" />
      <LanguageConstellation />

      <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-5xl text-center">
          <p className="animate-fade-up font-mono text-sm text-cyan-300">
            Product engineering and AI systems
          </p>
          <h1
            className="headline-safe animate-fade-up mt-5 text-4xl font-semibold tracking-tight text-gradient sm:text-6xl lg:text-7xl"
            style={{ animationDelay: "0.08s" }}
          >
            Build the product. Solve the hard parts. Own the outcome.
          </h1>
          <p
            className="animate-fade-up mx-auto mt-6 max-w-3xl text-base leading-relaxed text-gray-300 sm:text-lg"
            style={{ animationDelay: "0.16s" }}
          >
            Miras AI partners with founders and technology teams to design, build and improve software that has to work in the real world. From cross-platform products and complex integrations to AI workflows and technical leadership, we bring a clear plan and accountable delivery.
          </p>

          <div
            className="animate-fade-up mt-9 flex flex-col items-center justify-center gap-4 sm:flex-row"
            style={{ animationDelay: "0.24s" }}
          >
            <button onClick={() => scrollToSection("contact")} className="primary-cta group flex items-center gap-2 rounded-lg px-6 py-3 text-sm font-semibold">
              Discuss a project
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
            </button>
            <button onClick={() => scrollToSection("work")} className="secondary-cta rounded-lg border px-6 py-3 text-sm font-medium">
              Explore our work
            </button>
          </div>

          <ul className="animate-fade-up mt-10 flex flex-wrap justify-center gap-2" style={{ animationDelay: "0.32s" }} aria-label="Core capabilities">
            {CAPABILITIES.map((item) => (
              <li key={item} className="rounded-full border border-white/[0.09] bg-white/[0.035] px-4 py-2 text-xs text-gray-400">
                {item}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}

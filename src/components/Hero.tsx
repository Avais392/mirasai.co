import { ArrowRight } from "lucide-react";
import LanguageConstellation from "@/components/LanguageConstellation";

export default function Hero() {
  const scrollToSection = (id: string) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="relative overflow-hidden pt-32 pb-24 sm:pt-40 sm:pb-32">
      {/* Background layers */}
      <div className="absolute inset-0 bg-grid opacity-40" />
      <div className="absolute inset-0 bg-radial-glow" />
      <LanguageConstellation />
      <div
        className="absolute left-1/2 top-0 h-[400px] w-[600px] -translate-x-1/2 rounded-full blur-3xl animate-pulse-glow"
        style={{
          background:
            "radial-gradient(circle, rgba(124,109,247,0.15) 0%, transparent 70%)",
        }}
      />

      <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-5xl text-center">
          {/* Headline */}
          <h1
            className="headline-safe animate-fade-up text-4xl sm:text-5xl lg:text-[4rem] font-semibold tracking-tight text-gradient"
            style={{ animationDelay: "0.1s" }}
          >
            Senior engineering for products that cannot afford to fail.
          </h1>

          <p
            className="animate-fade-up mt-6 text-xl sm:text-2xl font-medium text-gray-200 leading-relaxed max-w-3xl mx-auto"
            style={{ animationDelay: "0.2s" }}
          >
            Mobile platforms, applied AI and multilingual systems—led from scope through production.
          </p>

          {/* Supporting copy */}
          <p
            className="animate-fade-up mt-5 text-base sm:text-lg text-gray-400 leading-relaxed max-w-3xl mx-auto"
            style={{ animationDelay: "0.25s" }}
          >
            Miras AI helps founders, CTOs and product leaders launch new
            platforms, modernize complex systems and recover delivery at risk.
            We assemble a senior team around the mandate and remain accountable
            through release.
          </p>

          {/* CTAs */}
          <div
            className="animate-fade-up mt-10 flex flex-col sm:flex-row items-center justify-center gap-4"
            style={{ animationDelay: "0.3s" }}
          >
            <button
              onClick={() => scrollToSection("contact")}
              className="primary-cta group flex items-center gap-2 rounded-lg px-6 py-3 text-sm font-semibold transition-all duration-300"
            >
              Discuss a project
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
            </button>
            <button
              onClick={() => scrollToSection("work")}
              className="secondary-cta flex items-center gap-2 rounded-lg border px-6 py-3 text-sm font-medium transition-all duration-300"
            >
              Explore our work
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

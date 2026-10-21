import { ArrowLeft } from "lucide-react";

interface LegalPageProps {
  title: string;
  summary: string;
  onBack: () => void;
  children: React.ReactNode;
}

const POLICY_LINKS = [
  ["Privacy Policy", "/privacy-policy"],
  ["Cookie Policy", "/cookie-policy"],
  ["Terms of Service", "/terms-of-service"],
];

export default function LegalPage({ title, summary, onBack, children }: LegalPageProps) {
  return (
    <main className="legal-page relative min-h-screen pb-32 pt-24">
      <div className="absolute inset-0 bg-grid opacity-30" />
      <div className="absolute inset-0 bg-radial-glow opacity-50" />

      <div className="relative mx-auto max-w-4xl px-6 lg:px-8">
        <button type="button" onClick={onBack} className="legal-back group mb-12 flex items-center gap-2 text-sm transition-colors">
          <ArrowLeft className="h-4 w-4 transition-transform group-hover:-translate-x-0.5" />
          Back to home
        </button>

        <header className="max-w-3xl">
          <p className="font-mono text-sm text-cyan-300">/ legal</p>
          <h1 className="mt-3 text-4xl font-semibold tracking-tight text-white sm:text-5xl">{title}</h1>
          <p className="mt-5 text-lg leading-relaxed text-gray-300">{summary}</p>
          <dl className="mt-7 flex flex-wrap gap-x-10 gap-y-3 border-y border-white/[0.08] py-5 text-sm">
            <div>
              <dt className="font-mono text-xs uppercase tracking-[0.14em] text-gray-500">Effective</dt>
              <dd className="mt-1 text-gray-300">October 21, 2026</dd>
            </div>
            <div>
              <dt className="font-mono text-xs uppercase tracking-[0.14em] text-gray-500">Last updated</dt>
              <dd className="mt-1 text-gray-300">October 21, 2026</dd>
            </div>
          </dl>
        </header>

        <article className="legal-copy mt-12 space-y-7 leading-relaxed text-gray-400">{children}</article>

        <nav className="legal-related mt-16 border-t border-white/[0.08] pt-8" aria-label="Related legal documents">
          <p className="font-mono text-xs uppercase tracking-[0.14em] text-gray-500">Related documents</p>
          <div className="mt-4 flex flex-wrap gap-3">
            {POLICY_LINKS.filter(([label]) => label !== title).map(([label, href]) => (
              <a key={href} href={href} className="secondary-cta rounded-lg border px-4 py-2 text-sm font-medium transition-colors">{label}</a>
            ))}
          </div>
        </nav>
      </div>
    </main>
  );
}

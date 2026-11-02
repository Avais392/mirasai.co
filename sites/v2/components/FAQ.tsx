import { Plus } from "lucide-react";

const QUESTIONS = [
  { question: "What does Miras AI build?", answer: "Miras AI designs and delivers web and mobile products, React Native systems, applied AI workflows, multilingual speech and language-data programs, and fractional technical leadership." },
  { question: "Where is Miras AI based?", answer: "Miras AI is registered and headquartered in Bloomington, Indiana, with delivery operations in Lahore, Pakistan. The team supports work across US and Asian time zones." },
  { question: "Which South Asian languages does Miras AI support?", answer: "The team works across more than 45 South Asian languages, including Urdu, Punjabi, Sindhi, Pashto, Saraiki and Balochi, with capability spanning collection, transcription, annotation and quality assurance." },
  { question: "How can a company engage Miras AI?", answer: "Engagements include defined projects, focused senior workstreams, delivery pods, embedded engineering teams, white-label delivery and fractional CTO support." },
  { question: "How long does an engagement take?", answer: "A technical assessment can take two to four weeks. Focused releases commonly run four to twelve weeks, while defined product builds typically run six to sixteen weeks. Scope and dependencies determine the final plan." },
  { question: "How does a project start?", answer: "Send the objective, current state and principal constraints. Miras AI aims to respond within one business day with a discovery call, scoped assessment or a clear view on fit." },
];

export default function FAQ() {
  return (
    <section className="services-stage relative py-16 sm:py-20" aria-labelledby="faq-heading">
      <div className="mx-auto max-w-5xl px-6 lg:px-8">
        <p className="font-mono text-sm text-violet-300">/ frequently asked</p>
        <h2 id="faq-heading" className="mt-3 text-3xl font-semibold tracking-tight text-white sm:text-4xl">Practical answers before we speak</h2>
        <div className="mt-8 divide-y divide-white/[0.08] border-y border-white/[0.08]">
          {QUESTIONS.map((item) => (
            <details key={item.question} className="faq-item group">
              <summary className="flex cursor-pointer list-none items-center justify-between gap-6 py-5 font-semibold text-white marker:content-none">
                {item.question}
                <Plus className="h-5 w-5 shrink-0 text-violet-300 transition-transform group-open:rotate-45" />
              </summary>
              <p className="max-w-3xl pb-5 pr-10 text-sm leading-relaxed text-gray-400">{item.answer}</p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}

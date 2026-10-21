const QUESTIONS = [
  {
    question: "What does Miras AI build?",
    answer:
      "Miras AI designs and delivers web and mobile products, React Native systems, applied AI workflows, multilingual speech and language-data programs, and fractional technical leadership.",
  },
  {
    question: "Where is Miras AI based?",
    answer:
      "Miras AI is registered and headquartered in Bloomington, Indiana, with delivery operations in Lahore, Pakistan. The team supports work across US and Asian time zones.",
  },
  {
    question: "Which South Asian languages does Miras AI support?",
    answer:
      "The team works across more than 45 South Asian languages, including Urdu, Punjabi, Sindhi, Pashto, Saraiki and Balochi, with capability spanning collection, transcription, annotation and quality assurance.",
  },
  {
    question: "How can a company engage Miras AI?",
    answer:
      "Engagements include defined projects, focused senior workstreams, delivery pods, embedded engineering teams, white-label delivery and fractional CTO support.",
  },
  {
    question: "How long does an engagement take?",
    answer:
      "A technical assessment can take two to four weeks. Focused releases commonly run four to twelve weeks, while defined product builds typically run six to sixteen weeks. Scope and dependencies determine the final plan.",
  },
  {
    question: "How does a project start?",
    answer:
      "Send the objective, current state and principal constraints. Miras AI aims to respond within one business day with a discovery call, scoped assessment or a clear view on fit.",
  },
];

export default function FAQ() {
  return (
    <section className="services-stage relative py-24 sm:py-32" aria-labelledby="faq-heading">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="max-w-3xl">
          <p className="font-mono text-sm text-violet-300">/ frequently asked</p>
          <h2 id="faq-heading" className="mt-3 text-3xl font-semibold tracking-tight text-white sm:text-5xl">
            Practical answers before we speak
          </h2>
        </div>

        <div className="mt-12 grid gap-px overflow-hidden rounded-2xl border border-white/[0.08] bg-white/[0.08] lg:grid-cols-2">
          {QUESTIONS.map((item) => (
            <article key={item.question} className="theme-info-panel bg-[#0a0d17] p-7 sm:p-8">
              <h3 className="font-semibold leading-snug text-white">{item.question}</h3>
              <p className="mt-3 text-sm leading-relaxed text-gray-400">{item.answer}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

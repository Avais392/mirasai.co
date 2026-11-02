const STEPS = [
  ["01", "Discover", "Understand the users, systems, constraints and success criteria."],
  ["02", "Shape", "Define a practical scope and technical path."],
  ["03", "Deliver", "Build in reviewable increments with QA and clear ownership."],
  ["04", "Launch", "Learn from production behavior, support needs and next priorities."],
];

export default function HowWeWork() {
  return (
    <section id="approach" className="relative border-y border-white/[0.06] py-16 sm:py-20">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <p className="font-mono text-sm text-violet-400">/ how we work</p>
        <h2 className="mt-3 text-3xl font-semibold tracking-tight text-white sm:text-4xl">Start with the problem, then choose the right build</h2>
        <div className="mt-10 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {STEPS.map(([number, title, description]) => (
            <article key={number}>
              <span className="text-2xl font-semibold text-white/15">{number}</span>
              <h3 className="mt-4 font-semibold text-white">{title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-gray-400">{description}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export default function DeliveryNeeds() {
  return (
    <section className="relative border-y border-white/[0.06] py-16 sm:py-20">
      <div className="mx-auto grid max-w-7xl gap-6 px-6 lg:grid-cols-[0.8fr_1.2fr] lg:items-start lg:px-8">
        <p className="font-mono text-sm text-violet-400">/ where we help</p>
        <div>
          <h2 className="text-3xl font-semibold tracking-tight text-white sm:text-4xl">
            When the next release needs more than extra hands
          </h2>
          <p className="mt-5 max-w-3xl text-base leading-relaxed text-gray-400 sm:text-lg">
            You may need a product built from the ground up, a mature app brought under control, an AI use case tested against real data, or a senior technical owner for an important workstream. We join at the point of friction, clarify what matters, and carry the work into production.
          </p>
        </div>
      </div>
    </section>
  );
}

const strengths = [
  {
    title: "Professional project management",
    detail: "Clear plans, accountable ownership, and coordination that keeps every trade aligned.",
  },
  {
    title: "Quality-focused execution",
    detail: "Standards that hold up on site — not just on paper — across interior, MEP, and ELV work.",
  },
  {
    title: "Timely delivery",
    detail: "Schedules treated as commitments, with progress visible to the client throughout.",
  },
  {
    title: "Transparent communication",
    detail: "Straightforward updates, honest constraints, and decisions you can trust.",
  },
];

export default function Strengths() {
  return (
    <section id="strengths" aria-labelledby="strengths-heading" className="bg-[var(--paper)] px-4 py-16 sm:px-6 sm:py-20 md:px-8 md:py-24">
      <div className="mx-auto max-w-6xl">
        <header className="max-w-xl">
          <p className="text-xs font-semibold uppercase tracking-[0.24em] text-[var(--leaf-deep)]">Our strengths</p>
          <h2
            id="strengths-heading"
            className="mt-3 font-[family-name:var(--font-display)] text-3xl font-semibold tracking-tight text-[var(--ink)] sm:text-4xl md:text-5xl"
          >
            Why clients stay with us
          </h2>
        </header>

        <div className="mt-10 grid gap-8 sm:mt-12 sm:grid-cols-2 lg:gap-x-12 lg:gap-y-10">
          {strengths.map((item) => (
            <article key={item.title} className="border-t border-[var(--line)] pt-5">
              <h3 className="font-[family-name:var(--font-display)] text-lg font-semibold text-[var(--ink)] sm:text-xl">
                {item.title}
              </h3>
              <p className="mt-3 max-w-md text-sm leading-relaxed text-[var(--muted)] sm:text-base">{item.detail}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

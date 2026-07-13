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
    <section id="strengths" className="bg-[var(--mist)] px-5 py-24 md:px-8">
      <div className="mx-auto max-w-6xl">
        <p className="text-xs uppercase tracking-[0.28em] text-[var(--muted)]">Our strengths</p>
        <h2 className="mt-4 max-w-xl font-[family-name:var(--font-display)] text-5xl tracking-[0.04em] text-[var(--ink)] md:text-6xl">
          How we work
        </h2>

        <div className="mt-14 grid gap-10 sm:grid-cols-2">
          {strengths.map((item) => (
            <article key={item.title} className="border-t border-[var(--line)] pt-6">
              <h3 className="font-[family-name:var(--font-serif)] text-2xl text-[var(--ink)]">
                {item.title}
              </h3>
              <p className="mt-3 max-w-md text-[var(--muted)] leading-relaxed">{item.detail}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

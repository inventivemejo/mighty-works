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
    <section id="strengths" className="bg-[var(--haze)] px-5 py-24 md:px-8">
      <div className="mx-auto max-w-6xl">
        <p className="text-xs font-medium uppercase tracking-[0.24em] text-[var(--muted)]">Our strengths</p>
        <h2 className="mt-4 max-w-lg font-[family-name:var(--font-serif)] text-4xl text-[var(--ink)] md:text-5xl">
          How projects move with us
        </h2>

        <ol className="relative mt-14 space-y-0">
          <div className="absolute bottom-2 left-[0.55rem] top-2 w-px bg-[var(--sky)] md:left-[0.7rem]" />
          {strengths.map((item, index) => (
            <li key={item.title} className="relative grid gap-3 py-7 pl-10 md:grid-cols-[14rem_1fr] md:gap-10 md:pl-14">
              <span className="absolute left-0 top-9 h-3 w-3 rounded-full border-2 border-[var(--signal)] bg-[var(--haze)] md:top-10" />
              <p className="font-[family-name:var(--font-display)] text-sm font-bold text-[var(--signal-deep)]">
                Step {String(index + 1).padStart(2, "0")}
              </p>
              <div>
                <h3 className="font-[family-name:var(--font-display)] text-xl font-bold text-[var(--ink)] md:text-2xl">
                  {item.title}
                </h3>
                <p className="mt-2 max-w-xl text-[var(--muted)] leading-relaxed">{item.detail}</p>
              </div>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}

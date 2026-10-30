import Image from "next/image";

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
    <section id="strengths" aria-labelledby="strengths-heading" className="bg-[var(--cloud)] px-4 py-20 sm:px-6 sm:py-24 md:px-8 md:py-28">
      <div className="mx-auto grid max-w-6xl gap-12 lg:grid-cols-[0.95fr_1.05fr] lg:items-center lg:gap-16">
        <div className="relative aspect-[4/5] overflow-hidden sm:aspect-[5/6] lg:aspect-[4/5]">
          <Image
            src="https://images.unsplash.com/photo-1503387762-592deb58ef4e?auto=format&fit=crop&w=1600&q=80"
            alt="Construction and coordination on a live project site"
            fill
            sizes="(max-width: 1024px) 100vw, 45vw"
            className="object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[var(--void)]/50 to-transparent" />
          <p className="absolute bottom-5 left-5 right-5 font-[family-name:var(--font-display)] text-lg font-semibold text-white sm:text-xl">
            Execution you can see. Results you can measure.
          </p>
        </div>

        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.28em] text-[var(--teal)]">Our strengths</p>
          <h2
            id="strengths-heading"
            className="mt-4 font-[family-name:var(--font-display)] text-3xl font-bold tracking-tight text-[var(--ink)] sm:text-4xl"
          >
            How we earn trust on every site
          </h2>

          <ul className="mt-10 space-y-7">
            {strengths.map((item, index) => (
              <li key={item.title} className="grid gap-2 border-t border-[var(--line)] pt-6 sm:grid-cols-[3rem_1fr] sm:gap-5">
                <span className="font-[family-name:var(--font-display)] text-sm font-bold text-[var(--teal)]">
                  {String(index + 1).padStart(2, "0")}
                </span>
                <div>
                  <h3 className="font-[family-name:var(--font-display)] text-lg font-semibold text-[var(--ink)] sm:text-xl">
                    {item.title}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-[var(--muted)] sm:text-base">{item.detail}</p>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}

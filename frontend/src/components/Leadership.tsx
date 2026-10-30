type LeadershipProps = {
  name: string;
  title: string;
  bio: string;
};

export default function Leadership({ name, title, bio }: LeadershipProps) {
  return (
    <section
      id="leadership"
      aria-labelledby="leadership-heading"
      className="relative overflow-hidden bg-[var(--paper)] px-4 py-20 sm:px-6 sm:py-24 md:px-8 md:py-28"
    >
      <div className="pointer-events-none absolute right-[-10%] top-[-20%] h-[28rem] w-[28rem] rounded-full bg-[var(--teal)]/10 blur-3xl" />
      <div className="mx-auto max-w-6xl">
        <p className="text-xs font-semibold uppercase tracking-[0.28em] text-[var(--teal)]">Leadership</p>
        <div className="mt-6 grid gap-10 lg:grid-cols-[0.85fr_1.15fr] lg:items-start">
          <div>
            <h2
              id="leadership-heading"
              className="font-[family-name:var(--font-display)] text-4xl font-bold tracking-tight text-[var(--ink)] sm:text-5xl"
            >
              {name}
            </h2>
            <p className="mt-3 text-sm font-semibold uppercase tracking-[0.2em] text-[var(--muted)]">{title}</p>
          </div>
          <blockquote className="border-l-2 border-[var(--teal)] pl-5 sm:pl-8">
            <p className="font-[family-name:var(--font-serif)] text-xl italic leading-relaxed text-[var(--slate)] sm:text-2xl md:text-[1.75rem]">
              {bio}
            </p>
          </blockquote>
        </div>
      </div>
    </section>
  );
}

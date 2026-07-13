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
      className="relative overflow-hidden bg-[var(--forest)] px-4 py-16 text-white sm:px-6 sm:py-20 md:px-8 md:py-24"
    >
      <div className="pointer-events-none absolute -left-20 top-10 h-64 w-64 rounded-full bg-[var(--leaf)]/20 blur-3xl" />
      <div className="mx-auto grid max-w-6xl gap-8 md:grid-cols-[0.9fr_1.1fr] md:items-end md:gap-14">
        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.24em] text-[var(--leaf)]">Leadership</p>
          <h2
            id="leadership-heading"
            className="mt-3 font-[family-name:var(--font-display)] text-3xl font-semibold tracking-tight sm:text-4xl md:text-5xl"
          >
            {name}
          </h2>
          <p className="mt-3 text-sm font-medium uppercase tracking-[0.18em] text-white/55">{title}</p>
        </div>
        <p className="font-[family-name:var(--font-serif)] text-lg leading-relaxed text-white/90 sm:text-xl md:text-2xl">
          {bio}
        </p>
      </div>
    </section>
  );
}

type LeadershipProps = {
  name: string;
  title: string;
  bio: string;
};

export default function Leadership({ name, title, bio }: LeadershipProps) {
  return (
    <section id="leadership" className="relative overflow-hidden bg-[var(--slate)] px-5 py-24 text-white md:px-8">
      <div className="pointer-events-none absolute -right-24 top-0 h-80 w-80 rounded-full bg-[var(--brass)]/15 blur-3xl" />
      <div className="mx-auto grid max-w-6xl gap-12 md:grid-cols-[1fr_1.2fr] md:items-end">
        <div>
          <p className="text-xs uppercase tracking-[0.28em] text-[var(--brass-soft)]">Leadership</p>
          <h2 className="mt-4 font-[family-name:var(--font-display)] text-5xl tracking-[0.04em] md:text-6xl">
            {name}
          </h2>
          <p className="mt-3 text-sm uppercase tracking-[0.22em] text-white/55">{title}</p>
        </div>
        <p className="font-[family-name:var(--font-serif)] text-xl leading-relaxed text-white/85 md:text-2xl">
          {bio}
        </p>
      </div>
    </section>
  );
}

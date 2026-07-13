type LeadershipProps = {
  name: string;
  title: string;
  bio: string;
};

export default function Leadership({ name, title, bio }: LeadershipProps) {
  return (
    <section id="leadership" className="bg-[var(--snow)] px-5 py-24 md:px-8">
      <div className="mx-auto max-w-6xl">
        <p className="text-xs font-medium uppercase tracking-[0.24em] text-[var(--muted)]">Leadership</p>

        <div className="mt-8 grid gap-10 lg:grid-cols-[0.85fr_1.15fr] lg:items-start">
          <div>
            <h2 className="font-[family-name:var(--font-display)] text-4xl font-extrabold tracking-tight text-[var(--ink)] md:text-5xl">
              {name}
            </h2>
            <p className="mt-3 text-sm font-medium uppercase tracking-[0.18em] text-[var(--signal-deep)]">
              {title}
            </p>
          </div>

          <blockquote className="relative border-l-4 border-[var(--signal)] pl-6 md:pl-8">
            <p className="font-[family-name:var(--font-serif)] text-2xl leading-snug text-[var(--navy)] md:text-3xl">
              {bio}
            </p>
          </blockquote>
        </div>
      </div>
    </section>
  );
}

type AboutProps = {
  about: string;
};

export default function About({ about }: AboutProps) {
  return (
    <section id="about" className="sky-wash px-5 py-24 md:px-8">
      <div className="mx-auto max-w-6xl">
        <div className="flex items-center gap-3">
          <span className="animate-pulse-dot inline-block h-2.5 w-2.5 rounded-full bg-[var(--signal)]" />
          <p className="text-xs font-medium uppercase tracking-[0.24em] text-[var(--muted)]">About us</p>
        </div>

        <div className="mt-8 grid gap-10 lg:grid-cols-[1.1fr_0.9fr] lg:items-end">
          <h2 className="max-w-2xl font-[family-name:var(--font-serif)] text-4xl leading-tight text-[var(--ink)] md:text-5xl">
            Dependable delivery for spaces that need to work every day.
          </h2>
          <div>
            <p className="text-lg leading-relaxed text-[var(--navy)]">{about}</p>
            <p className="mt-6 text-sm font-medium tracking-wide text-[var(--signal-deep)]">
              Residential · Commercial · Institutional
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

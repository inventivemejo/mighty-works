type AboutProps = {
  about: string;
};

export default function About({ about }: AboutProps) {
  return (
    <section id="about" aria-labelledby="about-heading" className="bg-[var(--paper)] px-4 py-16 sm:px-6 sm:py-20 md:px-8 md:py-24">
      <div className="mx-auto grid max-w-6xl gap-8 md:grid-cols-[0.85fr_1.15fr] md:gap-14 lg:gap-20">
        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.24em] text-[var(--leaf-deep)]">About us</p>
          <h2
            id="about-heading"
            className="mt-3 font-[family-name:var(--font-display)] text-3xl font-semibold tracking-tight text-[var(--ink)] sm:text-4xl md:text-5xl"
          >
            Built for dependable delivery
          </h2>
        </div>
        <div>
          <p className="font-[family-name:var(--font-serif)] text-lg leading-relaxed text-[var(--forest)] sm:text-xl md:text-2xl">
            {about}
          </p>
          <ul className="mt-8 flex flex-wrap gap-x-6 gap-y-2 text-sm font-medium text-[var(--muted)]">
            <li>Residential</li>
            <li aria-hidden="true">·</li>
            <li>Commercial</li>
            <li aria-hidden="true">·</li>
            <li>Institutional</li>
          </ul>
        </div>
      </div>
    </section>
  );
}

type AboutProps = {
  about: string;
};

export default function About({ about }: AboutProps) {
  return (
    <section id="about" aria-labelledby="about-heading" className="mesh px-4 py-20 sm:px-6 sm:py-24 md:px-8 md:py-28">
      <div className="mx-auto max-w-6xl">
        <div className="grid gap-10 lg:grid-cols-[1fr_1.15fr] lg:gap-16">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.28em] text-[var(--teal)]">About us</p>
            <h2
              id="about-heading"
              className="mt-4 font-[family-name:var(--font-display)] text-3xl font-bold tracking-tight text-[var(--ink)] sm:text-4xl md:text-5xl"
            >
              Spaces that perform.
              <span className="mt-2 block text-[var(--muted)]">Projects that finish.</span>
            </h2>
          </div>
          <div className="lg:pt-10">
            <p className="font-[family-name:var(--font-serif)] text-xl leading-relaxed text-[var(--slate)] sm:text-2xl md:text-[1.65rem]">
              {about}
            </p>
            <div className="mt-10 flex flex-wrap gap-3 text-sm font-medium text-[var(--ink)]">
              {["Residential", "Commercial", "Institutional"].map((item) => (
                <span
                  key={item}
                  className="border border-[var(--line)] bg-white/60 px-4 py-2 backdrop-blur-sm"
                >
                  {item}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

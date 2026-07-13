type AboutProps = {
  about: string;
};

export default function About({ about }: AboutProps) {
  return (
    <section id="about" className="bg-[var(--paper)] px-5 py-24 md:px-8">
      <div className="mx-auto grid max-w-6xl gap-10 md:grid-cols-[0.9fr_1.1fr] md:gap-16">
        <div>
          <p className="text-xs uppercase tracking-[0.28em] text-[var(--muted)]">About us</p>
          <h2 className="mt-4 font-[family-name:var(--font-display)] text-5xl tracking-[0.04em] text-[var(--ink)] md:text-6xl">
            Built for dependable delivery
          </h2>
        </div>
        <div>
          <p className="font-[family-name:var(--font-serif)] text-xl leading-relaxed text-[var(--slate)] md:text-2xl">
            {about}
          </p>
          <p className="mt-8 text-sm uppercase tracking-[0.2em] text-[var(--muted)]">
            Residential · Commercial · Institutional
          </p>
        </div>
      </div>
    </section>
  );
}

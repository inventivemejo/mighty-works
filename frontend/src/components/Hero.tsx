type HeroProps = {
  tagline: string;
};

export default function Hero({ tagline }: HeroProps) {
  return (
    <section id="top" className="relative isolate min-h-[100svh] overflow-hidden hero-grain">
      <div
        className="absolute inset-0 animate-fade bg-cover bg-center"
        style={{
          backgroundImage:
            "linear-gradient(120deg, rgba(14,20,25,0.92) 18%, rgba(14,20,25,0.55) 58%, rgba(14,20,25,0.75) 100%), url('https://images.unsplash.com/photo-1503387762-592deb58ef4e?auto=format&fit=crop&w=2400&q=80')",
        }}
      />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,rgba(201,148,58,0.18),transparent_45%)]" />

      <div className="relative mx-auto flex min-h-[100svh] max-w-6xl flex-col justify-end px-5 pb-16 pt-28 md:px-8 md:pb-24">
        <p className="animate-rise font-[family-name:var(--font-display)] text-[clamp(4.5rem,16vw,9.5rem)] leading-[0.85] tracking-[0.04em] text-white">
          MIGHTY
          <br />
          WORKS
        </p>
        <p className="animate-rise-delay mt-6 max-w-xl font-[family-name:var(--font-serif)] text-xl text-white/85 md:text-2xl">
          {tagline}
        </p>
        <div className="animate-rise-delay-2 mt-10 flex flex-wrap items-center gap-4">
          <a
            href="#contact"
            className="bg-[var(--brass)] px-6 py-3 text-sm font-medium tracking-wide text-[var(--ink)] transition hover:bg-[var(--brass-soft)]"
          >
            Discuss your project
          </a>
          <a
            href="#services"
            className="border border-white/35 px-6 py-3 text-sm tracking-wide text-white transition hover:border-[var(--brass-soft)] hover:text-[var(--brass-soft)]"
          >
            View services
          </a>
        </div>
      </div>
    </section>
  );
}

type HeroProps = {
  tagline: string;
};

export default function Hero({ tagline }: HeroProps) {
  return (
    <section id="top" className="relative isolate min-h-[100svh] overflow-hidden">
      <div
        className="absolute inset-0 animate-soft-zoom bg-cover bg-center"
        style={{
          backgroundImage:
            "linear-gradient(105deg, rgba(11,31,51,0.72) 8%, rgba(11,31,51,0.28) 48%, rgba(11,31,51,0.45) 100%), url('https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=2400&q=80')",
        }}
      />
      <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-[var(--snow)] to-transparent" />

      <div className="relative mx-auto flex min-h-[100svh] max-w-6xl flex-col justify-center px-5 pb-20 pt-28 md:px-8">
        <p className="animate-drift font-[family-name:var(--font-display)] text-[clamp(3.6rem,12vw,7.5rem)] font-extrabold leading-[0.9] tracking-[-0.03em] text-white">
          Mighty
          <span className="block text-[var(--signal)]">Works</span>
        </p>

        <div className="animate-draw mt-6 h-1 w-24 bg-[var(--signal)]" />

        <p className="animate-drift-delay mt-7 max-w-lg font-[family-name:var(--font-serif)] text-xl leading-snug text-white/90 md:text-2xl">
          {tagline}
        </p>

        <div className="animate-drift-delay-2 mt-10 flex flex-wrap gap-3">
          <a
            href="#contact"
            className="bg-[var(--signal)] px-6 py-3 text-sm font-medium text-white transition hover:bg-[var(--signal-deep)]"
          >
            Discuss your project
          </a>
          <a
            href="#services"
            className="border border-white/50 px-6 py-3 text-sm text-white transition hover:border-white hover:bg-white/10"
          >
            Explore services
          </a>
        </div>
      </div>
    </section>
  );
}

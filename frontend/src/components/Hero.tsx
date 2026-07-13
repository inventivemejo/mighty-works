import Image from "next/image";

type HeroProps = {
  tagline: string;
};

export default function Hero({ tagline }: HeroProps) {
  return (
    <section
      id="top"
      aria-label="Introduction"
      className="relative isolate min-h-[100svh] overflow-hidden"
    >
      <Image
        src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=2400&q=80"
        alt="Modern commercial building exterior representing Mighty Works project delivery in Bengaluru"
        fill
        priority
        sizes="100vw"
        className="animate-ken object-cover"
      />
      <div className="absolute inset-0 bg-[linear-gradient(120deg,rgba(15,42,31,0.88)_12%,rgba(15,42,31,0.45)_55%,rgba(15,42,31,0.7)_100%)]" />
      <div className="absolute inset-x-0 bottom-0 h-28 bg-gradient-to-t from-[var(--paper)] to-transparent sm:h-36" />

      <div className="relative mx-auto flex min-h-[100svh] w-full max-w-6xl flex-col justify-end px-4 pb-16 pt-28 sm:px-6 sm:pb-20 md:px-8 md:pb-24">
        <p className="animate-reveal text-xs font-medium uppercase tracking-[0.28em] text-[var(--leaf)] sm:text-sm">
          Bengaluru · Professional services
        </p>
        <h1 className="animate-reveal-delay mt-4 max-w-4xl font-[family-name:var(--font-display)] text-[clamp(2.6rem,10vw,5.8rem)] font-semibold leading-[0.95] tracking-tight text-white">
          Mighty Works
        </h1>
        <div className="animate-line mt-5 h-1 bg-[var(--leaf)]" />
        <p className="animate-reveal-delay-2 mt-6 max-w-xl font-[family-name:var(--font-serif)] text-lg leading-relaxed text-white/90 sm:text-xl md:text-2xl">
          {tagline}
        </p>
        <div className="animate-reveal-delay-2 mt-8 flex flex-col gap-3 sm:mt-10 sm:flex-row sm:items-center">
          <a
            href="#contact"
            className="inline-flex items-center justify-center bg-[var(--leaf)] px-6 py-3.5 text-sm font-semibold text-white transition hover:bg-[var(--leaf-deep)]"
          >
            Discuss your project
          </a>
          <a
            href="#services"
            className="inline-flex items-center justify-center border border-white/40 px-6 py-3.5 text-sm font-medium text-white transition hover:border-white hover:bg-white/10"
          >
            View our services
          </a>
        </div>
      </div>
    </section>
  );
}

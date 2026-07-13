import Image from "next/image";

type HeroProps = {
  tagline: string;
};

export default function Hero({ tagline }: HeroProps) {
  return (
    <section id="top" aria-label="Introduction" className="relative isolate min-h-[100svh] overflow-hidden">
      <Image
        src="https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=2400&q=80"
        alt="Refined modern interior space representing Mighty Works fit-out and coordination expertise"
        fill
        priority
        sizes="100vw"
        className="animate-zoom object-cover"
      />
      <div className="absolute inset-0 bg-[linear-gradient(105deg,rgba(7,8,11,0.82)_0%,rgba(7,8,11,0.35)_48%,rgba(7,8,11,0.72)_100%)]" />
      <div className="absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-[var(--paper)] via-[var(--paper)]/50 to-transparent" />

      <div className="relative mx-auto flex min-h-[100svh] max-w-6xl flex-col justify-end px-4 pb-20 pt-28 sm:px-6 sm:pb-24 md:px-8">
        <p className="animate-rise text-xs font-semibold uppercase tracking-[0.32em] text-[var(--teal-bright)] sm:text-sm">
          Bengaluru
        </p>
        <h1 className="animate-rise-d1 mt-4 max-w-5xl font-[family-name:var(--font-display)] text-[clamp(3rem,11vw,7rem)] font-extrabold leading-[0.9] tracking-[-0.04em] text-white">
          Mighty
          <span className="block text-[var(--teal-bright)]">Works</span>
        </h1>
        <p className="animate-rise-d2 mt-6 max-w-lg font-[family-name:var(--font-serif)] text-xl italic leading-snug text-white/90 sm:text-2xl md:text-[1.7rem]">
          {tagline}
        </p>
        <div className="animate-rise-d3 mt-9 flex flex-col gap-3 sm:flex-row sm:items-center">
          <a href="#contact" className="btn-primary">
            Discuss your project
          </a>
          <a href="#services" className="btn-ghost">
            Explore services
          </a>
        </div>
      </div>
    </section>
  );
}

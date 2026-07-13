import type { ServiceItem } from "@/lib/api";

type ServicesProps = {
  services: ServiceItem[];
};

export default function Services({ services }: ServicesProps) {
  return (
    <section id="services" aria-labelledby="services-heading" className="bg-[var(--void)] px-4 py-20 text-white sm:px-6 sm:py-24 md:px-8 md:py-28">
      <div className="mx-auto max-w-6xl">
        <header className="max-w-2xl">
          <p className="text-xs font-semibold uppercase tracking-[0.28em] text-[var(--teal-bright)]">Our services</p>
          <h2
            id="services-heading"
            className="mt-4 font-[family-name:var(--font-display)] text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl"
          >
            Four disciplines. One accountable partner.
          </h2>
          <p className="mt-4 text-base leading-relaxed text-white/60 sm:text-lg">
            Interior fit-out, MEP, ELV, and maintenance — delivered with clear ownership from kickoff to handover.
          </p>
        </header>

        <ul className="mt-12 border-t border-white/10 md:mt-16">
          {services.map((service, index) => (
            <li key={service.id} id={service.slug} className="border-b border-white/10">
              <article className="service-row grid gap-3 py-8 md:grid-cols-[5rem_minmax(0,1fr)_minmax(0,1.15fr)] md:items-center md:gap-10 md:py-10">
                <p className="font-[family-name:var(--font-display)] text-sm font-bold text-[var(--teal-bright)]">
                  {String(index + 1).padStart(2, "0")}
                </p>
                <h3 className="font-[family-name:var(--font-serif)] text-2xl italic text-white sm:text-3xl">
                  {service.title}
                </h3>
                <p className="text-sm leading-relaxed text-white/60 sm:text-base">{service.summary}</p>
              </article>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

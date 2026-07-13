import type { ServiceItem } from "@/lib/api";

type ServicesProps = {
  services: ServiceItem[];
};

export default function Services({ services }: ServicesProps) {
  return (
    <section id="services" aria-labelledby="services-heading" className="bg-[var(--mist)] px-4 py-16 sm:px-6 sm:py-20 md:px-8 md:py-24">
      <div className="mx-auto max-w-6xl">
        <header className="max-w-2xl">
          <p className="text-xs font-semibold uppercase tracking-[0.24em] text-[var(--leaf-deep)]">Our services</p>
          <h2
            id="services-heading"
            className="mt-3 font-[family-name:var(--font-display)] text-3xl font-semibold tracking-tight text-[var(--ink)] sm:text-4xl md:text-5xl"
          >
            Interior, MEP, ELV and maintenance under one team
          </h2>
          <p className="mt-4 text-base leading-relaxed text-[var(--muted)] sm:text-lg">
            Cost-effective professional services for projects that need reliable coordination and quality execution in Bengaluru.
          </p>
        </header>

        <ul className="mt-10 space-y-0 border-t border-[var(--line)] md:mt-14">
          {services.map((service, index) => (
            <li key={service.id} id={service.slug} className="border-b border-[var(--line)]">
              <article className="grid gap-3 py-7 sm:gap-4 sm:py-8 md:grid-cols-[4.5rem_minmax(0,1fr)_minmax(0,1.2fr)] md:items-start md:gap-8">
                <p className="font-[family-name:var(--font-display)] text-sm font-semibold text-[var(--leaf-deep)]">
                  {String(index + 1).padStart(2, "0")}
                </p>
                <h3 className="font-[family-name:var(--font-serif)] text-xl text-[var(--ink)] sm:text-2xl md:text-3xl">
                  {service.title}
                </h3>
                <p className="text-sm leading-relaxed text-[var(--muted)] sm:text-base">{service.summary}</p>
              </article>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

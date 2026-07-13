import type { ServiceItem } from "@/lib/api";

type ServicesProps = {
  services: ServiceItem[];
};

export default function Services({ services }: ServicesProps) {
  return (
    <section id="services" className="bg-[var(--ink)] px-5 py-24 text-white md:px-8">
      <div className="mx-auto max-w-6xl">
        <p className="text-xs uppercase tracking-[0.28em] text-[var(--brass-soft)]">Our services</p>
        <h2 className="mt-4 max-w-2xl font-[family-name:var(--font-display)] text-5xl tracking-[0.04em] md:text-6xl">
          Four capabilities. One accountable partner.
        </h2>

        <div className="mt-14 divide-y divide-white/10 border-y border-white/10">
          {services.map((service, index) => (
            <article
              key={service.id}
              className="group grid gap-4 py-8 transition md:grid-cols-[5rem_1fr_1.2fr] md:items-start md:gap-10"
            >
              <span className="font-[family-name:var(--font-display)] text-3xl text-[var(--brass)]">
                {String(index + 1).padStart(2, "0")}
              </span>
              <h3 className="font-[family-name:var(--font-serif)] text-2xl text-white md:text-3xl">
                {service.title}
              </h3>
              <p className="text-base leading-relaxed text-white/70">{service.summary}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

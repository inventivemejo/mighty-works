import type { ServiceItem } from "@/lib/api";

type ServicesProps = {
  services: ServiceItem[];
};

export default function Services({ services }: ServicesProps) {
  return (
    <section id="services" className="bg-[var(--ink)] px-5 py-24 text-white md:px-8">
      <div className="mx-auto max-w-6xl">
        <div className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
          <div>
            <p className="text-xs font-medium uppercase tracking-[0.24em] text-[var(--sky)]">Our services</p>
            <h2 className="mt-4 max-w-xl font-[family-name:var(--font-display)] text-4xl font-bold tracking-tight md:text-5xl">
              Practical capabilities across the build.
            </h2>
          </div>
          <p className="max-w-sm text-sm leading-relaxed text-white/65">
            Interior fit-out, MEP, ELV, and maintenance — coordinated under one accountable team.
          </p>
        </div>

        <div className="mt-14 grid gap-px bg-white/10 sm:grid-cols-2">
          {services.map((service, index) => (
            <article
              key={service.id}
              className="bg-[var(--ink)] p-8 transition hover:bg-[var(--navy)] md:p-10"
            >
              <p className="font-[family-name:var(--font-display)] text-sm font-bold text-[var(--signal)]">
                {String(index + 1).padStart(2, "0")}
              </p>
              <h3 className="mt-5 font-[family-name:var(--font-serif)] text-2xl text-white">
                {service.title}
              </h3>
              <p className="mt-4 max-w-md text-sm leading-relaxed text-white/65">{service.summary}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

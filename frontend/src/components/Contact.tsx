"use client";

import { useState, type FormEvent } from "react";
import ServiceDropdown from "@/components/ServiceDropdown";
import { submitContact, type CompanyInfo, type ServiceItem } from "@/lib/api";

type ContactProps = {
  company: CompanyInfo;
  services: ServiceItem[];
};

export default function Contact({ company, services }: ContactProps) {
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [error, setError] = useState<string | null>(null);
  const [formKey, setFormKey] = useState(0);

  async function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = event.currentTarget;
    const data = new FormData(form);

    setStatus("loading");
    setError(null);

    const result = await submitContact({
      name: String(data.get("name") ?? ""),
      email: String(data.get("email") ?? ""),
      phone: String(data.get("phone") ?? "") || undefined,
      service: String(data.get("service") ?? "") || undefined,
      message: String(data.get("message") ?? ""),
    });

    if (result.ok) {
      setStatus("success");
      form.reset();
      setFormKey((key) => key + 1);
      return;
    }

    setStatus("error");
    setError(result.error ?? "Something went wrong.");
  }

  return (
    <section id="contact" aria-labelledby="contact-heading" className="bg-[var(--slate)] px-4 py-20 text-white sm:px-6 sm:py-24 md:px-8 md:py-28">
      <div className="mx-auto grid max-w-6xl gap-12 lg:grid-cols-2 lg:gap-20">
        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.28em] text-[var(--teal-bright)]">Contact</p>
          <h2
            id="contact-heading"
            className="mt-4 font-[family-name:var(--font-display)] text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl"
          >
            Let’s build what’s next
          </h2>
          <p className="mt-4 max-w-md text-sm leading-relaxed text-white/65 sm:text-base">
            Share your interior, MEP, ELV, or maintenance requirement. We’ll come back with clear next steps.
          </p>

          <address className="mt-10 space-y-3 text-sm not-italic leading-relaxed text-white/75 sm:text-base">
            <p className="font-[family-name:var(--font-display)] text-xl font-bold text-white">{company.name}</p>
            <p>
              {company.address_line1}
              <br />
              {company.address_line2}
            </p>
            <p>
              <a className="transition hover:text-[var(--teal-bright)]" href={`tel:${company.phone.replace(/\s/g, "")}`}>
                {company.phone}
              </a>
            </p>
            <p>
              <a className="transition hover:text-[var(--teal-bright)]" href={`mailto:${company.email}`}>
                {company.email}
              </a>
            </p>
            <p className="text-white/45">GSTN: {company.gstn}</p>
          </address>
        </div>

        <form key={formKey} onSubmit={onSubmit} className="space-y-6" aria-describedby="contact-form-status">
          <div className="grid gap-6 sm:grid-cols-2">
            <label className="block text-sm">
              <span className="mb-2 block text-white/50">Name</span>
              <input required name="name" autoComplete="name" className="input-field" />
            </label>
            <label className="block text-sm">
              <span className="mb-2 block text-white/50">Email</span>
              <input required type="email" name="email" autoComplete="email" className="input-field" />
            </label>
          </div>

          <div className="grid gap-6 sm:grid-cols-2">
            <label className="block text-sm">
              <span className="mb-2 block text-white/50">Phone</span>
              <input name="phone" type="tel" autoComplete="tel" className="input-field" />
            </label>
            <div className="block text-sm">
              <span className="mb-2 block text-white/50">Service</span>
              <ServiceDropdown services={services} />
            </div>
          </div>

          <label className="block text-sm">
            <span className="mb-2 block text-white/50">Message</span>
            <textarea required name="message" rows={5} minLength={10} className="input-field resize-y" />
          </label>

          <button type="submit" disabled={status === "loading"} className="btn-primary disabled:opacity-60">
            {status === "loading" ? "Sending…" : "Send message"}
          </button>

          <div id="contact-form-status" aria-live="polite">
            {status === "success" ? (
              <p className="text-sm text-[var(--teal-bright)]">Thank you. Your message has been received.</p>
            ) : null}
            {status === "error" && error ? <p className="text-sm text-red-300">{error}</p> : null}
          </div>
        </form>
      </div>
    </section>
  );
}

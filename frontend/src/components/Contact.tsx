"use client";

import { useState, type FormEvent } from "react";
import { submitContact, type CompanyInfo, type ServiceItem } from "@/lib/api";

type ContactProps = {
  company: CompanyInfo;
  services: ServiceItem[];
};

export default function Contact({ company, services }: ContactProps) {
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [error, setError] = useState<string | null>(null);

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
      return;
    }

    setStatus("error");
    setError(result.error ?? "Something went wrong.");
  }

  return (
    <section id="contact" aria-labelledby="contact-heading" className="bg-[var(--ink)] px-4 py-16 text-white sm:px-6 sm:py-20 md:px-8 md:py-24">
      <div className="mx-auto grid max-w-6xl gap-12 lg:grid-cols-2 lg:gap-16">
        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.24em] text-[var(--leaf)]">Contact</p>
          <h2
            id="contact-heading"
            className="mt-3 font-[family-name:var(--font-display)] text-3xl font-semibold tracking-tight sm:text-4xl md:text-5xl"
          >
            Start your project conversation
          </h2>
          <p className="mt-4 max-w-md text-sm leading-relaxed text-white/70 sm:text-base">
            Tell us about your interior fit-out, MEP, ELV, or maintenance requirement in Bengaluru. We will respond with clear next steps.
          </p>

          <address className="mt-8 space-y-3 text-sm not-italic leading-relaxed text-white/80 sm:text-base">
            <p className="font-[family-name:var(--font-display)] text-xl font-semibold text-white">{company.name}</p>
            <p>
              {company.address_line1}
              <br />
              {company.address_line2}
            </p>
            <p>
              <a className="underline-offset-4 transition hover:text-[var(--leaf)] hover:underline" href={`tel:${company.phone.replace(/\s/g, "")}`}>
                {company.phone}
              </a>
            </p>
            <p>
              <a className="underline-offset-4 transition hover:text-[var(--leaf)] hover:underline" href={`mailto:${company.email}`}>
                {company.email}
              </a>
            </p>
            <p className="text-white/50">GSTN: {company.gstn}</p>
          </address>
        </div>

        <form onSubmit={onSubmit} className="space-y-5" noValidate={false} aria-describedby="contact-form-status">
          <div className="grid gap-5 sm:grid-cols-2">
            <label className="block text-sm">
              <span className="mb-2 block text-white/60">Name</span>
              <input required name="name" autoComplete="name" className="field" />
            </label>
            <label className="block text-sm">
              <span className="mb-2 block text-white/60">Email</span>
              <input required type="email" name="email" autoComplete="email" className="field" />
            </label>
          </div>

          <div className="grid gap-5 sm:grid-cols-2">
            <label className="block text-sm">
              <span className="mb-2 block text-white/60">Phone</span>
              <input name="phone" type="tel" autoComplete="tel" className="field" />
            </label>
            <label className="block text-sm">
              <span className="mb-2 block text-white/60">Service</span>
              <select name="service" defaultValue="" className="field">
                <option value="" className="text-[var(--ink)]">
                  Select a service
                </option>
                {services.map((service) => (
                  <option key={service.id} value={service.title} className="text-[var(--ink)]">
                    {service.title}
                  </option>
                ))}
              </select>
            </label>
          </div>

          <label className="block text-sm">
            <span className="mb-2 block text-white/60">Message</span>
            <textarea required name="message" rows={5} minLength={10} className="field resize-y" />
          </label>

          <button
            type="submit"
            disabled={status === "loading"}
            className="w-full bg-[var(--leaf)] px-6 py-3.5 text-sm font-semibold text-white transition hover:bg-[var(--leaf-deep)] disabled:opacity-60 sm:w-auto"
          >
            {status === "loading" ? "Sending…" : "Send message"}
          </button>

          <div id="contact-form-status" aria-live="polite">
            {status === "success" ? (
              <p className="text-sm text-[var(--leaf)]">Thank you. Your message has been received.</p>
            ) : null}
            {status === "error" && error ? <p className="text-sm text-red-300">{error}</p> : null}
          </div>
        </form>
      </div>
    </section>
  );
}

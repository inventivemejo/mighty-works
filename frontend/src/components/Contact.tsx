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
    <section id="contact" className="bg-[var(--navy)] px-5 py-24 text-white md:px-8">
      <div className="mx-auto grid max-w-6xl gap-14 lg:grid-cols-2">
        <div>
          <p className="text-xs font-medium uppercase tracking-[0.24em] text-[var(--sky)]">Contact</p>
          <h2 className="mt-4 font-[family-name:var(--font-serif)] text-4xl md:text-5xl">
            Tell us what you are building
          </h2>
          <p className="mt-5 max-w-md text-white/70 leading-relaxed">
            Share your interior, MEP, ELV, or maintenance requirement and we will follow up with next steps.
          </p>

          <div className="mt-10 space-y-4 text-sm leading-relaxed text-white/80">
            <p className="font-[family-name:var(--font-display)] text-2xl font-bold text-white">
              {company.name}
            </p>
            <p>
              {company.address_line1}
              <br />
              {company.address_line2}
            </p>
            <p>
              <a className="transition hover:text-[var(--signal)]" href={`tel:${company.phone.replace(/\s/g, "")}`}>
                {company.phone}
              </a>
            </p>
            <p>
              <a className="transition hover:text-[var(--signal)]" href={`mailto:${company.email}`}>
                {company.email}
              </a>
            </p>
            <p className="text-white/50">GSTN: {company.gstn}</p>
          </div>
        </div>

        <form onSubmit={onSubmit} className="space-y-6">
          <div className="grid gap-6 sm:grid-cols-2">
            <label className="block text-sm">
              <span className="mb-2 block text-white/55">Name</span>
              <input required name="name" className="field-input text-white placeholder:text-white/30" />
            </label>
            <label className="block text-sm">
              <span className="mb-2 block text-white/55">Email</span>
              <input required type="email" name="email" className="field-input text-white" />
            </label>
          </div>

          <div className="grid gap-6 sm:grid-cols-2">
            <label className="block text-sm">
              <span className="mb-2 block text-white/55">Phone</span>
              <input name="phone" className="field-input text-white" />
            </label>
            <label className="block text-sm">
              <span className="mb-2 block text-white/55">Service</span>
              <select name="service" defaultValue="" className="field-input text-white">
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
            <span className="mb-2 block text-white/55">Message</span>
            <textarea required name="message" rows={5} minLength={10} className="field-input resize-y text-white" />
          </label>

          <button
            type="submit"
            disabled={status === "loading"}
            className="bg-[var(--signal)] px-6 py-3 text-sm font-medium text-white transition hover:bg-[var(--signal-deep)] disabled:opacity-60"
          >
            {status === "loading" ? "Sending…" : "Send message"}
          </button>

          {status === "success" ? (
            <p className="text-sm text-[var(--sky)]">Thank you. Your message has been received.</p>
          ) : null}
          {status === "error" && error ? <p className="text-sm text-red-300">{error}</p> : null}
        </form>
      </div>
    </section>
  );
}

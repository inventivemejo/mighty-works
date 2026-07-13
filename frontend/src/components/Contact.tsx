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
    <section id="contact" className="bg-[var(--paper)] px-5 py-24 md:px-8">
      <div className="mx-auto grid max-w-6xl gap-14 lg:grid-cols-[0.95fr_1.05fr]">
        <div>
          <p className="text-xs uppercase tracking-[0.28em] text-[var(--muted)]">Contact</p>
          <h2 className="mt-4 font-[family-name:var(--font-display)] text-5xl tracking-[0.04em] text-[var(--ink)] md:text-6xl">
            Start a conversation
          </h2>
          <p className="mt-5 max-w-md text-[var(--muted)] leading-relaxed">
            Tell us about your interior, MEP, ELV, or maintenance requirement. We will respond with next steps.
          </p>

          <div className="mt-10 space-y-5 text-sm leading-relaxed text-[var(--slate)]">
            <div>
              <p className="font-[family-name:var(--font-display)] text-2xl tracking-[0.06em]">
                {company.name.toUpperCase()}
              </p>
              <p className="mt-2">{company.address_line1}</p>
              <p>{company.address_line2}</p>
            </div>
            <p>
              <a className="hover:text-[var(--brass)]" href={`tel:${company.phone.replace(/\s/g, "")}`}>
                {company.phone}
              </a>
            </p>
            <p>
              <a className="hover:text-[var(--brass)]" href={`mailto:${company.email}`}>
                {company.email}
              </a>
            </p>
            <p className="text-[var(--muted)]">GSTN: {company.gstn}</p>
          </div>
        </div>

        <form onSubmit={onSubmit} className="space-y-5 border-t border-[var(--line)] pt-8 lg:border-t-0 lg:border-l lg:pl-12 lg:pt-0">
          <div className="grid gap-5 sm:grid-cols-2">
            <label className="block text-sm">
              <span className="mb-2 block text-[var(--muted)]">Name</span>
              <input
                required
                name="name"
                className="w-full border-b border-[var(--line)] bg-transparent py-2 outline-none transition focus:border-[var(--brass)]"
              />
            </label>
            <label className="block text-sm">
              <span className="mb-2 block text-[var(--muted)]">Email</span>
              <input
                required
                type="email"
                name="email"
                className="w-full border-b border-[var(--line)] bg-transparent py-2 outline-none transition focus:border-[var(--brass)]"
              />
            </label>
          </div>

          <div className="grid gap-5 sm:grid-cols-2">
            <label className="block text-sm">
              <span className="mb-2 block text-[var(--muted)]">Phone</span>
              <input
                name="phone"
                className="w-full border-b border-[var(--line)] bg-transparent py-2 outline-none transition focus:border-[var(--brass)]"
              />
            </label>
            <label className="block text-sm">
              <span className="mb-2 block text-[var(--muted)]">Service</span>
              <select
                name="service"
                defaultValue=""
                className="w-full border-b border-[var(--line)] bg-transparent py-2 outline-none transition focus:border-[var(--brass)]"
              >
                <option value="">Select a service</option>
                {services.map((service) => (
                  <option key={service.id} value={service.title}>
                    {service.title}
                  </option>
                ))}
              </select>
            </label>
          </div>

          <label className="block text-sm">
            <span className="mb-2 block text-[var(--muted)]">Message</span>
            <textarea
              required
              name="message"
              rows={5}
              minLength={10}
              className="w-full resize-y border-b border-[var(--line)] bg-transparent py-2 outline-none transition focus:border-[var(--brass)]"
            />
          </label>

          <button
            type="submit"
            disabled={status === "loading"}
            className="bg-[var(--ink)] px-6 py-3 text-sm tracking-wide text-white transition hover:bg-[var(--steel)] disabled:opacity-60"
          >
            {status === "loading" ? "Sending…" : "Send message"}
          </button>

          {status === "success" ? (
            <p className="text-sm text-[var(--steel)]">Thank you. Your message has been received.</p>
          ) : null}
          {status === "error" && error ? <p className="text-sm text-red-700">{error}</p> : null}
        </form>
      </div>
    </section>
  );
}

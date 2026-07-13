"use client";

import { useEffect, useState } from "react";

const links = [
  { href: "#about", label: "About" },
  { href: "#services", label: "Services" },
  { href: "#leadership", label: "Leadership" },
  { href: "#contact", label: "Contact" },
];

export default function SiteHeader() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const solid = scrolled || open;

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        solid ? "bg-[var(--snow)]/90 shadow-[0_1px_0_var(--line)] backdrop-blur-md" : "bg-transparent"
      }`}
    >
      <div className="mx-auto flex max-w-6xl items-center justify-between px-5 py-4 md:px-8">
        <a
          href="#top"
          className={`font-[family-name:var(--font-display)] text-xl font-extrabold tracking-tight transition md:text-2xl ${
            solid ? "text-[var(--ink)]" : "text-white"
          }`}
        >
          Mighty Works
        </a>

        <nav className="hidden items-center gap-7 md:flex">
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className={`text-sm transition hover:text-[var(--signal)] ${
                solid ? "text-[var(--navy)]" : "text-white/85"
              }`}
            >
              {link.label}
            </a>
          ))}
          <a
            href="#contact"
            className="bg-[var(--signal)] px-4 py-2 text-sm font-medium text-white transition hover:bg-[var(--signal-deep)]"
          >
            Get a quote
          </a>
        </nav>

        <button
          type="button"
          aria-label="Toggle menu"
          className={solid ? "text-[var(--ink)] md:hidden" : "text-white md:hidden"}
          onClick={() => setOpen((value) => !value)}
        >
          <span className={`block h-0.5 w-6 ${solid ? "bg-[var(--ink)]" : "bg-white"}`} />
          <span className={`mt-1.5 block h-0.5 w-6 ${solid ? "bg-[var(--ink)]" : "bg-white"}`} />
        </button>
      </div>

      {open ? (
        <nav className="border-t border-[var(--line)] bg-[var(--snow)] px-5 py-4 md:hidden">
          <div className="flex flex-col gap-4">
            {links.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-[var(--navy)]"
                onClick={() => setOpen(false)}
              >
                {link.label}
              </a>
            ))}
          </div>
        </nav>
      ) : null}
    </header>
  );
}

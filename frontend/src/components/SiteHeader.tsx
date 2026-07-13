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
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-colors duration-300 ${
        scrolled || open ? "bg-[var(--ink)]/95 backdrop-blur-md" : "bg-transparent"
      }`}
    >
      <div className="mx-auto flex max-w-6xl items-center justify-between px-5 py-4 md:px-8">
        <a href="#top" className="font-[family-name:var(--font-display)] text-2xl tracking-[0.08em] text-white">
          MIGHTY WORKS
        </a>

        <nav className="hidden items-center gap-8 md:flex">
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm text-white/75 transition hover:text-[var(--brass-soft)]"
            >
              {link.label}
            </a>
          ))}
          <a
            href="#contact"
            className="border border-[var(--brass)] px-4 py-2 text-sm text-[var(--brass-soft)] transition hover:bg-[var(--brass)] hover:text-[var(--ink)]"
          >
            Get a quote
          </a>
        </nav>

        <button
          type="button"
          aria-label="Toggle menu"
          className="text-white md:hidden"
          onClick={() => setOpen((value) => !value)}
        >
          <span className="block h-px w-6 bg-white" />
          <span className="mt-1.5 block h-px w-6 bg-white" />
        </button>
      </div>

      {open ? (
        <nav className="border-t border-white/10 px-5 py-4 md:hidden">
          <div className="flex flex-col gap-4">
            {links.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-white/85"
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

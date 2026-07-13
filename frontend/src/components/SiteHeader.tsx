"use client";

import { useEffect, useState } from "react";

const links = [
  { href: "#about", label: "About" },
  { href: "#services", label: "Services" },
  { href: "#strengths", label: "Strengths" },
  { href: "#leadership", label: "Leadership" },
  { href: "#contact", label: "Contact" },
];

export default function SiteHeader() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 16);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  const solid = scrolled || open;

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        solid ? "border-b border-[var(--line)] bg-[var(--paper)]/95 backdrop-blur-md" : "bg-transparent"
      }`}
    >
      <div className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-4 py-3 sm:px-6 md:px-8 md:py-4">
        <a
          href="#top"
          className={`font-[family-name:var(--font-display)] text-base font-semibold tracking-tight sm:text-lg md:text-xl ${
            solid ? "text-[var(--ink)]" : "text-white"
          }`}
        >
          Mighty Works
        </a>

        <nav aria-label="Primary" className="hidden items-center gap-6 lg:flex">
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className={`text-sm transition hover:text-[var(--leaf)] ${
                solid ? "text-[var(--forest)]" : "text-white/85"
              }`}
            >
              {link.label}
            </a>
          ))}
          <a
            href="#contact"
            className="bg-[var(--leaf)] px-4 py-2 text-sm font-medium text-white transition hover:bg-[var(--leaf-deep)]"
          >
            Request a quote
          </a>
        </nav>

        <button
          type="button"
          className={`inline-flex h-10 w-10 items-center justify-center lg:hidden ${
            solid ? "text-[var(--ink)]" : "text-white"
          }`}
          aria-expanded={open}
          aria-controls="mobile-menu"
          aria-label={open ? "Close menu" : "Open menu"}
          onClick={() => setOpen((value) => !value)}
        >
          <span className="sr-only">Menu</span>
          <span className="flex w-5 flex-col gap-1.5">
            <span className={`block h-0.5 w-full ${solid ? "bg-[var(--ink)]" : "bg-white"}`} />
            <span className={`block h-0.5 w-full ${solid ? "bg-[var(--ink)]" : "bg-white"}`} />
            <span className={`block h-0.5 w-4 ${solid ? "bg-[var(--ink)]" : "bg-white"}`} />
          </span>
        </button>
      </div>

      {open ? (
        <nav
          id="mobile-menu"
          aria-label="Mobile"
          className="border-t border-[var(--line)] bg-[var(--paper)] px-4 py-6 lg:hidden"
        >
          <ul className="flex flex-col gap-4">
            {links.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  className="block py-1 text-lg text-[var(--ink)]"
                  onClick={() => setOpen(false)}
                >
                  {link.label}
                </a>
              </li>
            ))}
            <li>
              <a
                href="#contact"
                className="mt-2 inline-block bg-[var(--leaf)] px-4 py-3 text-sm font-medium text-white"
                onClick={() => setOpen(false)}
              >
                Request a quote
              </a>
            </li>
          </ul>
        </nav>
      ) : null}
    </header>
  );
}

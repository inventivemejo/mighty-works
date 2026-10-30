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
    const onScroll = () => setScrolled(window.scrollY > 18);
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
        solid ? "border-b border-[var(--line)] bg-[var(--cloud)]/90 backdrop-blur-xl" : "bg-transparent"
      }`}
    >
      <div className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-4 py-3.5 sm:px-6 md:px-8">
        <a
          href="#top"
          className={`font-[family-name:var(--font-display)] text-lg font-bold tracking-tight sm:text-xl ${
            solid ? "text-[var(--ink)]" : "text-white"
          }`}
        >
          Mighty Works
        </a>

        <nav aria-label="Primary" className="hidden items-center gap-7 lg:flex">
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className={`text-sm transition hover:text-[var(--teal)] ${
                solid ? "text-[var(--slate)]" : "text-white/80"
              }`}
            >
              {link.label}
            </a>
          ))}
          <a href="#contact" className="btn-primary text-sm">
            Get a quote
          </a>
        </nav>

        <button
          type="button"
          className={`inline-flex h-11 w-11 items-center justify-center rounded-full border lg:hidden ${
            solid ? "border-[var(--line)] text-[var(--ink)]" : "border-white/25 text-white"
          }`}
          aria-expanded={open}
          aria-controls="mobile-menu"
          aria-label={open ? "Close menu" : "Open menu"}
          onClick={() => setOpen((value) => !value)}
        >
          <span className="flex w-4 flex-col gap-1.5">
            <span className={`block h-0.5 w-full ${solid ? "bg-[var(--ink)]" : "bg-white"}`} />
            <span className={`block h-0.5 w-full ${solid ? "bg-[var(--ink)]" : "bg-white"}`} />
          </span>
        </button>
      </div>

      {open ? (
        <nav
          id="mobile-menu"
          aria-label="Mobile"
          className="min-h-[calc(100svh-4rem)] border-t border-[var(--line)] bg-[var(--cloud)] px-4 py-8 lg:hidden"
        >
          <ul className="flex flex-col gap-5">
            {links.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  className="font-[family-name:var(--font-display)] text-2xl font-semibold text-[var(--ink)]"
                  onClick={() => setOpen(false)}
                >
                  {link.label}
                </a>
              </li>
            ))}
            <li className="pt-2">
              <a href="#contact" className="btn-primary" onClick={() => setOpen(false)}>
                Get a quote
              </a>
            </li>
          </ul>
        </nav>
      ) : null}
    </header>
  );
}

type FooterProps = {
  phone: string;
  email: string;
};

export default function SiteFooter({ phone, email }: FooterProps) {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-[var(--void)] px-4 py-8 text-white/50 sm:px-6 md:px-8">
      <div className="mx-auto flex max-w-6xl flex-col gap-5 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <p className="font-[family-name:var(--font-display)] text-base font-bold text-white">Mighty Works</p>
          <p className="mt-1 text-xs sm:text-sm">© {year} Mighty Works · Bengaluru</p>
        </div>
        <nav aria-label="Footer" className="flex flex-wrap gap-x-6 gap-y-2 text-sm">
          <a href={`tel:${phone.replace(/\s/g, "")}`} className="hover:text-[var(--teal-bright)]">
            {phone}
          </a>
          <a href={`mailto:${email}`} className="hover:text-[var(--teal-bright)]">
            {email}
          </a>
          <a href="#services" className="hover:text-[var(--teal-bright)]">
            Services
          </a>
          <a href="#contact" className="hover:text-[var(--teal-bright)]">
            Contact
          </a>
        </nav>
      </div>
    </footer>
  );
}

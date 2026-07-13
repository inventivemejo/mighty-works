type FooterProps = {
  phone: string;
  email: string;
};

export default function SiteFooter({ phone, email }: FooterProps) {
  return (
    <footer className="bg-[var(--ink)] px-5 py-8 text-white/55 md:px-8">
      <div className="mx-auto flex max-w-6xl flex-col gap-4 md:flex-row md:items-center md:justify-between">
        <p className="font-[family-name:var(--font-display)] text-lg font-bold text-white">Mighty Works</p>
        <div className="flex flex-wrap gap-6 text-sm">
          <a href={`tel:${phone.replace(/\s/g, "")}`} className="hover:text-[var(--signal)]">
            {phone}
          </a>
          <a href={`mailto:${email}`} className="hover:text-[var(--signal)]">
            {email}
          </a>
          <span>Bengaluru</span>
        </div>
      </div>
    </footer>
  );
}

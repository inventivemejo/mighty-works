import About from "@/components/About";
import Contact from "@/components/Contact";
import Hero from "@/components/Hero";
import Leadership from "@/components/Leadership";
import Services from "@/components/Services";
import SiteFooter from "@/components/SiteFooter";
import SiteHeader from "@/components/SiteHeader";
import Strengths from "@/components/Strengths";
import { getCompany, getServices } from "@/lib/api";
import { buildLocalBusinessJsonLd, buildWebSiteJsonLd } from "@/lib/seo";
import { SITE } from "@/lib/site";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Mighty Works | Interior, MEP & ELV Services in Bengaluru",
  description: SITE.description,
  alternates: {
    canonical: "/",
  },
};

export default async function HomePage() {
  const [company, services] = await Promise.all([getCompany(), getServices()]);
  const jsonLd = [buildLocalBusinessJsonLd(company, services), buildWebSiteJsonLd()];

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-[60] focus:bg-white focus:px-4 focus:py-2 focus:text-[var(--ink)]"
      >
        Skip to main content
      </a>
      <SiteHeader />
      <main id="main-content">
        <Hero tagline={company.tagline} />
        <About about={company.about} />
        <Services services={services} />
        <Strengths />
        <Leadership
          name={company.leadership_name}
          title={company.leadership_title}
          bio={company.leadership_bio}
        />
        <Contact company={company} services={services} />
      </main>
      <SiteFooter phone={company.phone} email={company.email} />
    </>
  );
}

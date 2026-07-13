import About from "@/components/About";
import Contact from "@/components/Contact";
import Hero from "@/components/Hero";
import Leadership from "@/components/Leadership";
import Services from "@/components/Services";
import SiteFooter from "@/components/SiteFooter";
import SiteHeader from "@/components/SiteHeader";
import Strengths from "@/components/Strengths";
import { getCompany, getServices } from "@/lib/api";

export default async function HomePage() {
  const [company, services] = await Promise.all([getCompany(), getServices()]);

  return (
    <>
      <SiteHeader />
      <main>
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

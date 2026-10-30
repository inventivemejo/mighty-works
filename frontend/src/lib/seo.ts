import { SITE, SITE_URL } from "@/lib/site";
import type { CompanyInfo, ServiceItem } from "@/lib/api";

export function buildLocalBusinessJsonLd(company: CompanyInfo, services: ServiceItem[]) {
  return {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    "@id": `${SITE_URL}/#organization`,
    name: company.name,
    alternateName: SITE.legalName,
    description: company.about,
    url: SITE_URL,
    email: company.email,
    telephone: SITE.phoneE164,
    taxID: company.gstn,
    image: `${SITE_URL}/og-image.svg`,
    logo: `${SITE_URL}/og-image.svg`,
    priceRange: "$$",
    address: {
      "@type": "PostalAddress",
      streetAddress: company.address_line1,
      addressLocality: SITE.address.city,
      addressRegion: SITE.address.region,
      postalCode: SITE.address.postalCode,
      addressCountry: SITE.address.country,
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: SITE.geo.latitude,
      longitude: SITE.geo.longitude,
    },
    areaServed: {
      "@type": "City",
      name: "Bengaluru",
    },
    openingHoursSpecification: [
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
        opens: "09:30",
        closes: "18:30",
      },
    ],
    founder: {
      "@type": "Person",
      name: company.leadership_name,
      jobTitle: company.leadership_title,
      description: company.leadership_bio,
    },
    knowsAbout: services.map((service) => service.title),
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: "Mighty Works Services",
      itemListElement: services.map((service, index) => ({
        "@type": "Offer",
        position: index + 1,
        itemOffered: {
          "@type": "Service",
          name: service.title,
          description: service.summary,
          url: `${SITE_URL}/#services`,
        },
      })),
    },
    contactPoint: {
      "@type": "ContactPoint",
      telephone: SITE.phoneE164,
      contactType: "customer service",
      email: company.email,
      areaServed: "IN",
      availableLanguage: ["English", "Hindi", "Kannada"],
    },
  };
}

export function buildWebSiteJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "@id": `${SITE_URL}/#website`,
    url: SITE_URL,
    name: SITE.name,
    description: SITE.description,
    publisher: { "@id": `${SITE_URL}/#organization` },
    inLanguage: "en-IN",
  };
}

/** Single JSON-LD object for one script tag (avoids array parsing errors in dev tools). */
export function buildPageJsonLd(company: CompanyInfo, services: ServiceItem[]) {
  const { "@context": _orgContext, ...organization } = buildLocalBusinessJsonLd(company, services);
  const { "@context": _siteContext, ...website } = buildWebSiteJsonLd();

  return {
    "@context": "https://schema.org",
    "@graph": [organization, website],
  };
}

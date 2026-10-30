export const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL ?? "https://mightyworksblr.com";

export const SITE = {
  name: "Mighty Works",
  legalName: "Mighty Works",
  tagline: "Interior, MEP & ELV solutions built to last.",
  description:
    "Mighty Works is a Bengaluru-based professional services company specializing in interior fit-out, MEP works, ELV systems, and maintenance for residential, commercial, and institutional projects.",
  locale: "en_IN",
  phone: "+91 62384 29889",
  phoneE164: "+916238429889",
  email: "mightyworksblr@gmail.com",
  gstn: "29BHDPV8330H1ZX",
  address: {
    street: "No. 57/24, 5th Cross, Bhavani Layout",
    locality: "S G Palaya",
    region: "Karnataka",
    postalCode: "560029",
    country: "IN",
    city: "Bengaluru",
  },
  geo: {
    latitude: 12.9352,
    longitude: 77.6245,
  },
  keywords: [
    "Mighty Works Bengaluru",
    "interior fit-out Bangalore",
    "MEP contractors Bengaluru",
    "ELV systems Bangalore",
    "CCTV access control Bengaluru",
    "preventive maintenance services Bangalore",
    "electrical plumbing mechanical works",
  ],
} as const;

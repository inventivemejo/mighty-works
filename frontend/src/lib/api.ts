export type CompanyInfo = {
  name: string;
  tagline: string;
  about: string;
  leadership_name: string;
  leadership_title: string;
  leadership_bio: string;
  address_line1: string;
  address_line2: string;
  phone: string;
  email: string;
  gstn: string;
};

export type ServiceItem = {
  id: number;
  slug: string;
  title: string;
  summary: string;
  sort_order: number;
};

export type ContactPayload = {
  name: string;
  email: string;
  phone?: string;
  service?: string;
  message: string;
};

const API_URL = process.env.NEXT_PUBLIC_API_URL ?? "http://localhost:8000";

const FALLBACK_COMPANY: CompanyInfo = {
  name: "Mighty Works",
  tagline: "Interior, MEP & ELV solutions built to last.",
  about:
    "Mighty Works is a Bengaluru-based professional services company specializing in Interior works, MEP works, ELV solutions and maintenance. We deliver dependable and cost-effective solutions for residential, commercial, and institutional projects.",
  leadership_name: "Saby Varghese",
  leadership_title: "Project Manager",
  leadership_bio:
    "Led by Saby Varghese, Project Manager with over 25 years of experience across India and the Middle East, including landmark projects such as Dubai Metro, Dubai Airport, Tulah Wellness Project and more.",
  address_line1: "No. 57/24, 5th Cross, Bhavani Layout",
  address_line2: "S G Palaya, Bengaluru, Karnataka 560029",
  phone: "+91 62384 29889",
  email: "mightyworksblr@gmail.com",
  gstn: "29BHDPV8330H1ZX",
};

const FALLBACK_SERVICES: ServiceItem[] = [
  {
    id: 1,
    slug: "interior",
    title: "Interior fit-out & coordination",
    summary:
      "End-to-end interior fit-out with careful coordination across trades, so spaces finish clean, functional, and on schedule.",
    sort_order: 1,
  },
  {
    id: 2,
    slug: "mep",
    title: "MEP works",
    summary:
      "Electrical, plumbing, and mechanical works executed with precision for residential, commercial, and institutional buildings.",
    sort_order: 2,
  },
  {
    id: 3,
    slug: "elv",
    title: "ELV systems",
    summary:
      "CCTV, access control, automation, and related low-voltage systems designed for reliability and day-to-day usability.",
    sort_order: 3,
  },
  {
    id: 4,
    slug: "maintenance",
    title: "Annual & preventive maintenance",
    summary:
      "Planned maintenance programmes that keep systems performing, reduce downtime, and protect your long-term investment.",
    sort_order: 4,
  },
];

async function fetchJson<T>(path: string): Promise<T | null> {
  try {
    const response = await fetch(`${API_URL}${path}`, {
      next: { revalidate: 60 },
    });
    if (!response.ok) return null;
    return (await response.json()) as T;
  } catch {
    return null;
  }
}

export async function getCompany(): Promise<CompanyInfo> {
  return (await fetchJson<CompanyInfo>("/api/company")) ?? FALLBACK_COMPANY;
}

export async function getServices(): Promise<ServiceItem[]> {
  return (await fetchJson<ServiceItem[]>("/api/services")) ?? FALLBACK_SERVICES;
}

export async function submitContact(payload: ContactPayload): Promise<{ ok: boolean; error?: string }> {
  try {
    const response = await fetch(`${API_URL}/api/contact`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(payload),
    });

    if (!response.ok) {
      const data = (await response.json().catch(() => null)) as
        | { detail?: string | Array<{ msg?: string }> }
        | null;
      const detail = data?.detail;
      const message =
        typeof detail === "string"
          ? detail
          : Array.isArray(detail)
            ? detail.map((item) => item.msg).filter(Boolean).join(" ")
            : "Unable to send your message right now.";
      return { ok: false, error: message || "Unable to send your message right now." };
    }

    return { ok: true };
  } catch {
    return { ok: false, error: "Unable to reach the server. Please try again shortly." };
  }
}

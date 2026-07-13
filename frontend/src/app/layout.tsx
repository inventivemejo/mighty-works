import type { Metadata, Viewport } from "next";
import { Albert_Sans, Newsreader, Unbounded } from "next/font/google";
import { SITE, SITE_URL } from "@/lib/site";
import "./globals.css";

const display = Unbounded({
  variable: "--font-display",
  subsets: ["latin"],
  weight: ["500", "600", "700"],
});

const serif = Newsreader({
  variable: "--font-serif",
  subsets: ["latin"],
  weight: ["400", "600"],
});

const sans = Albert_Sans({
  variable: "--font-sans",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: "Mighty Works | Interior, MEP & ELV Services in Bengaluru",
    template: "%s | Mighty Works",
  },
  description: SITE.description,
  applicationName: SITE.name,
  keywords: [...SITE.keywords],
  authors: [{ name: "Saby Varghese", url: SITE_URL }],
  creator: SITE.name,
  publisher: SITE.name,
  category: "professional services",
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    locale: SITE.locale,
    url: SITE_URL,
    siteName: SITE.name,
    title: "Mighty Works | Interior, MEP & ELV Services in Bengaluru",
    description: SITE.description,
    images: [
      {
        url: "/og-image.svg",
        width: 1200,
        height: 630,
        alt: "Mighty Works — Interior, MEP, ELV and maintenance services in Bengaluru",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Mighty Works | Interior, MEP & ELV Services in Bengaluru",
    description: SITE.description,
    images: ["/og-image.svg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
  formatDetection: {
    email: true,
    address: true,
    telephone: true,
  },
};

export const viewport: Viewport = {
  themeColor: "#0f2a1f",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en-IN"
      className={`${display.variable} ${serif.variable} ${sans.variable} h-full antialiased`}
    >
      <body className="flex min-h-full flex-col bg-[var(--paper)] text-[var(--ink)]">
        {children}
      </body>
    </html>
  );
}

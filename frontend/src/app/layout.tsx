import type { Metadata } from "next";
import { Bebas_Neue, Source_Serif_4, Sora } from "next/font/google";
import "./globals.css";

const display = Bebas_Neue({
  variable: "--font-display",
  subsets: ["latin"],
  weight: "400",
});

const serif = Source_Serif_4({
  variable: "--font-serif",
  subsets: ["latin"],
  weight: ["400", "600"],
});

const sans = Sora({
  variable: "--font-sans",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
});

export const metadata: Metadata = {
  title: "Mighty Works | Interior, MEP & ELV Solutions — Bengaluru",
  description:
    "Bengaluru-based professional services for interior fit-out, MEP works, ELV systems, and maintenance. Led by Saby Varghese.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${display.variable} ${serif.variable} ${sans.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-[var(--mist)] text-[var(--ink)]">
        {children}
      </body>
    </html>
  );
}

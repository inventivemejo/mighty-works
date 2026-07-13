import type { Metadata } from "next";
import { Fraunces, Public_Sans, Syne } from "next/font/google";
import "./globals.css";

const display = Syne({
  variable: "--font-display",
  subsets: ["latin"],
  weight: ["600", "700", "800"],
});

const serif = Fraunces({
  variable: "--font-serif",
  subsets: ["latin"],
  weight: ["400", "600"],
});

const sans = Public_Sans({
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
      <body className="min-h-full flex flex-col bg-[var(--snow)] text-[var(--ink)]">
        {children}
      </body>
    </html>
  );
}

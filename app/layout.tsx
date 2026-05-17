import type { Metadata } from "next";
import { Playfair_Display, Inter, Geist_Mono } from "next/font/google";
import "./globals.css";

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
  weight: ["700", "900"],
  display: "swap",
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  display: "swap",
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "Levi Rudolph — Financial Advisor Frankfurt",
    template: "%s | Levi Rudolph",
  },
  description:
    "Maßgeschneiderte Finanzberatung für angehende Kammerberufler und Ingenieure. Levi Rudolph — Financial Advisor bei MLP Finanzberatung SE in Frankfurt.",
  keywords: [
    "Finanzberatung",
    "MLP",
    "Frankfurt",
    "Kammerberufler",
    "Ingenieure",
    "Altersvorsorge",
    "Berufsunfähigkeitsversicherung",
    "PKV",
    "Financial Advisor",
  ],
  authors: [{ name: "Levi Rudolph" }],
  creator: "Levi Rudolph",
  icons: {
    icon: [
      { url: "/favicon.svg", type: "image/svg+xml" },
    ],
    shortcut: "/favicon.svg",
  },
  openGraph: {
    type: "website",
    locale: "de_DE",
    url: "https://levi-rudolph.de",
    siteName: "Levi Rudolph — Financial Advisor",
    title: "Levi Rudolph — Financial Advisor Frankfurt",
    description:
      "Maßgeschneiderte Finanzberatung für angehende Kammerberufler und Ingenieure.",
  },
  twitter: {
    card: "summary_large_image",
    title: "Levi Rudolph — Financial Advisor Frankfurt",
    description:
      "Maßgeschneiderte Finanzberatung für angehende Kammerberufler und Ingenieure.",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

const personJsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: "Levi Rudolph",
  jobTitle: "Financial Advisor",
  worksFor: {
    "@type": "Organization",
    name: "MLP Finanzberatung SE",
    url: "https://www.mlp.de",
  },
  address: {
    "@type": "PostalAddress",
    addressLocality: "Frankfurt am Main",
    addressRegion: "Hessen",
    addressCountry: "DE",
  },
  url: "https://levi-rudolph.de",
  sameAs: ["https://de.linkedin.com/in/levi-rudolph-dh-student"],
};

const localBusinessJsonLd = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  name: "Levi Rudolph — Financial Advisor",
  image: "https://levi-rudolph.de/og-image.jpg",
  "@id": "https://levi-rudolph.de",
  url: "https://levi-rudolph.de",
  telephone: "",
  address: {
    "@type": "PostalAddress",
    addressLocality: "Frankfurt am Main",
    addressRegion: "Hessen",
    postalCode: "60313",
    addressCountry: "DE",
  },
  priceRange: "Kostenlose Erstberatung",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="de"
      className={`${playfair.variable} ${inter.variable} ${geistMono.variable} h-full`}
    >
      <body className="min-h-full flex flex-col">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(personJsonLd) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(localBusinessJsonLd),
          }}
        />
        {children}
      </body>
    </html>
  );
}

import type { Metadata } from "next";
import { GeistSans } from "geist/font/sans";
import { GeistMono } from "geist/font/mono";
import { Analytics } from "@vercel/analytics/next";

import { services } from "@/data/content";
import { SITE_URL, business } from "@/lib/site";

import "./globals.css";

const TITLE = "Agencia de eventos corporativos en Buenos Aires · Mito";
const DESCRIPTION =
  "Organizamos eventos corporativos, lanzamientos y experiencias de marca en Buenos Aires y LATAM. Creatividad, producción integral y comunicación B2B.";

// PNG estático (no la convención `opengraph-image.tsx`): el export estático la
// emite sin extensión y Apache la sirve sin Content-Type, así que los crawlers
// de WhatsApp/LinkedIn la descartan.
const OG_IMAGE = {
  url: "/og-image.png",
  width: 1200,
  height: 630,
  alt: "Mito Marketing · Agencia de eventos corporativos en Buenos Aires",
};

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: TITLE,
  description: DESCRIPTION,
  applicationName: business.name,
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: TITLE,
    description: DESCRIPTION,
    url: SITE_URL,
    siteName: business.name,
    locale: "es_AR",
    type: "website",
    images: [OG_IMAGE],
  },
  twitter: {
    card: "summary_large_image",
    title: TITLE,
    description: DESCRIPTION,
    images: [OG_IMAGE.url],
  },
  robots: {
    index: true,
    follow: true,
    "max-image-preview": "large",
    "max-snippet": -1,
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "ProfessionalService",
  "@id": `${SITE_URL}/#organization`,
  name: business.name,
  url: SITE_URL,
  description: DESCRIPTION,
  logo: `${SITE_URL}/logos/mito-logo-estandar.png`,
  image: `${SITE_URL}/og-image.png`,
  email: business.email,
  telephone: business.phone,
  priceRange: "$$$",
  address: {
    "@type": "PostalAddress",
    addressLocality: business.city,
    addressCountry: business.country,
  },
  areaServed: [
    { "@type": "Country", name: "Argentina" },
    { "@type": "Place", name: "América Latina" },
  ],
  sameAs: business.sameAs,
  knowsAbout: [
    "Eventos corporativos",
    "Producción de eventos",
    "Lanzamientos de producto",
    "Activaciones de marca",
    "Marketing B2B",
  ],
  hasOfferCatalog: {
    "@type": "OfferCatalog",
    name: "Servicios de Mito Marketing",
    itemListElement: services.map((service) => ({
      "@type": "Offer",
      itemOffered: {
        "@type": "Service",
        name: service.title,
        description: service.description,
      },
    })),
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es-AR" className={`${GeistSans.variable} ${GeistMono.variable}`}>
      <body className="min-h-screen bg-background font-sans text-foreground">
        {children}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <Analytics />
      </body>
    </html>
  );
}

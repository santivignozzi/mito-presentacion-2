import type { Metadata } from "next";
import { GeistSans } from "geist/font/sans";
import { GeistMono } from "geist/font/mono";

import "./globals.css";

export const metadata: Metadata = {
  title: "Mito Marketing · Agencia de experiencias corporativas",
  description:
    "Mito es una agencia boutique que diseña, produce y comunica eventos corporativos, activaciones y experiencias de marca para conectar a las marcas con las personas.",
  metadataBase: new URL("https://mitomarketing.com"),
  openGraph: {
    title: "Mito Marketing · Agencia de experiencias corporativas",
    description:
      "Diseño, producción y comunicación de eventos corporativos y experiencias de marca.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es" className={`${GeistSans.variable} ${GeistMono.variable}`}>
      <body className="min-h-screen bg-background font-sans text-foreground">
        {children}
      </body>
    </html>
  );
}

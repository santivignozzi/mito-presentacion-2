import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, ArrowUpRight } from "lucide-react";

import { LiquidButton } from "@/components/ui/liquid-glass-button";
import { SiteFooter } from "@/components/sections/site-footer";
import { SiteNav } from "@/components/site/site-nav";
import { cases } from "@/data/content";
import { CONTENT_UPDATED, SITE_URL, business } from "@/lib/site";

type Params = { params: { slug: string } };

export function generateStaticParams() {
  return cases.map((c) => ({ slug: c.slug }));
}

function getCase(slug: string) {
  return cases.find((c) => c.slug === slug);
}

export function generateMetadata({ params }: Params): Metadata {
  const c = getCase(params.slug);
  if (!c) return {};

  const title = `${c.type} para ${c.client} · Caso de Mito`;
  const description = `${c.objective} ${c.solution}`;

  return {
    title,
    description,
    alternates: { canonical: `/casos/${c.slug}/` },
    openGraph: {
      title,
      description,
      url: `${SITE_URL}/casos/${c.slug}/`,
      type: "article",
      images: [{ url: c.image, width: 1200, height: 630, alt: `${c.client} · ${c.type}` }],
    },
  };
}

export default function CasePage({ params }: Params) {
  const c = getCase(params.slug);
  if (!c) notFound();

  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "CreativeWork",
        "@id": `${SITE_URL}/casos/${c.slug}#caso`,
        name: `${c.type} para ${c.client}`,
        headline: c.objective,
        description: c.solution,
        image: `${SITE_URL}${c.image}`,
        url: `${SITE_URL}/casos/${c.slug}/`,
        inLanguage: "es-AR",
        about: c.type,
        keywords: c.capabilities.join(", "),
        dateModified: CONTENT_UPDATED,
        creator: { "@id": `${SITE_URL}/#organization` },
      },
      {
        "@type": "BreadcrumbList",
        itemListElement: [
          { "@type": "ListItem", position: 1, name: "Inicio", item: SITE_URL },
          {
            "@type": "ListItem",
            position: 2,
            name: "Casos",
            item: `${SITE_URL}/#casos`,
          },
          {
            "@type": "ListItem",
            position: 3,
            name: `${c.type} para ${c.client}`,
            item: `${SITE_URL}/casos/${c.slug}/`,
          },
        ],
      },
    ],
  };

  return (
    <main className="relative">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <SiteNav />

      <article>
        <header className="relative isolate overflow-hidden bg-mito-blue pb-20 pt-32 text-white md:pb-28 md:pt-40">
          <div className="pointer-events-none absolute inset-0 -z-10">
            <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_left,_rgba(136,58,255,0.35),_transparent_55%)]" />
            <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_right,_rgba(242,70,29,0.25),_transparent_55%)]" />
          </div>

          <div className="container">
            <Link
              href="/#casos"
              className="inline-flex items-center gap-2 text-sm text-white/60 transition-colors hover:text-white"
            >
              <ArrowLeft className="h-4 w-4" /> Todos los casos
            </Link>

            <div className="mt-8 flex items-center gap-4">
              <span className="caption-mito text-mito-yellow">
                {c.code} · {c.type}
              </span>
              <span className="h-px w-24 bg-white/15" />
            </div>

            <h1 className="display-tight mt-6 max-w-4xl text-balance text-4xl font-semibold tracking-tight md:text-6xl">
              {c.type} para {c.client}
            </h1>
            <p className="mt-6 max-w-2xl text-pretty text-base text-white/75 md:text-xl">
              {c.objective}
            </p>
          </div>
        </header>

        <div className="bg-white py-20 md:py-28">
          <div className="container grid gap-14 md:grid-cols-12">
            <div className="md:col-span-7">
              <div className="relative aspect-[4/3] overflow-hidden rounded-3xl bg-mito-blue">
                <Image
                  src={c.image}
                  alt={`${c.type} producido por Mito para ${c.client}`}
                  fill
                  priority
                  sizes="(min-width: 768px) 58vw, 100vw"
                  className="object-cover"
                />
              </div>
            </div>

            <div className="md:col-span-5">
              <div className="caption-mito text-mito-orange">
                Lo que hicimos
              </div>
              <p className="mt-4 text-pretty leading-relaxed text-mito-blue/75">
                {c.solution}
              </p>

              <div className="mt-10 caption-mito text-mito-blue/45">
                Capacidades aplicadas
              </div>
              <ul className="mt-4 flex flex-wrap gap-2">
                {c.capabilities.map((cap) => (
                  <li
                    key={cap}
                    className="rounded-full border border-mito-blue/15 px-3 py-1 text-sm text-mito-blue/70"
                  >
                    {cap}
                  </li>
                ))}
              </ul>

              <a
                href={c.instagramUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-10 inline-flex items-center gap-2 text-sm font-medium text-mito-blue transition-colors hover:text-mito-purple"
              >
                Ver el evento en Instagram
                <ArrowUpRight className="h-4 w-4" />
              </a>
            </div>
          </div>
        </div>

        <section className="bg-[#fafaf7] py-20 md:py-28">
          <div className="container text-center">
            <h2 className="display-tight text-balance text-3xl font-semibold text-mito-blue md:text-5xl">
              ¿Tenés un evento parecido en mente?
            </h2>
            <p className="mx-auto mt-5 max-w-xl text-pretty text-mito-blue/70">
              Contanos el objetivo y te armamos una propuesta a medida.
            </p>
            <div className="mt-9 flex flex-col items-center justify-center gap-4 sm:flex-row">
              <LiquidButton asChild size="xl" variant="orange">
                <a href={`https://wa.me/${business.phone.replace("+", "")}`}>
                  Escribir por WhatsApp
                </a>
              </LiquidButton>
              <LiquidButton asChild size="xl" variant="primary">
                <a href={`mailto:${business.email}`}>{business.email}</a>
              </LiquidButton>
            </div>
          </div>
        </section>
      </article>

      <SiteFooter />
    </main>
  );
}

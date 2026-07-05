"use client";

import Link from "next/link";

import { MitoLogo } from "@/components/site/mito-logo";
import { socials, services } from "@/data/content";

export function SiteFooter() {
  const year = new Date().getFullYear();
  return (
    <footer className="relative overflow-hidden bg-[#031d2e] py-20 text-white/80">
      <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/20 to-transparent" />
      <div className="container">
        <div className="grid gap-12 md:grid-cols-12">
          <div className="md:col-span-5">
            <MitoLogo variant="light" className="h-9 w-auto" />
            <p className="mt-5 max-w-sm text-pretty text-sm leading-relaxed text-white/65">
              Agencia boutique de experiencias corporativas. Creatividad,
              producción y comunicación para marcas que buscan impacto real.
            </p>
            <div className="mt-6 flex items-center gap-2 caption-mito text-white/45">
              <span className="h-1.5 w-1.5 rounded-full bg-mito-purple" />
              <span className="h-1.5 w-1.5 rounded-full bg-mito-orange" />
              <span className="h-1.5 w-1.5 rounded-full bg-mito-yellow" />
              <span>Buenos Aires · LATAM</span>
            </div>
          </div>

          <div className="md:col-span-3">
            <div className="caption-mito text-white/50">Servicios</div>
            <ul className="mt-5 space-y-2.5">
              {services.map((s) => (
                <li key={s.title}>
                  <Link
                    href="#que-hacemos"
                    className="text-sm text-white/85 transition-colors hover:text-mito-yellow"
                  >
                    {s.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="md:col-span-4">
            <div className="caption-mito text-white/50">Contacto</div>
            <ul className="mt-5 space-y-2.5 text-sm">
              <li>
                <a className="hover:text-white" href="mailto:gusvignozzi@mitomkt.com">
                  gusvignozzi@mitomkt.com
                </a>
              </li>
              <li>
                <a className="hover:text-white" href="https://wa.me/5491178870751" target="_blank" rel="noreferrer">
                  WhatsApp · +54 9 11 7887 0751
                </a>
              </li>
              <li>Buenos Aires, Argentina · Cobertura LATAM</li>
            </ul>
            <div className="mt-5 flex flex-wrap gap-2">
              {socials.map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  target="_blank"
                  rel="noreferrer"
                  className="rounded-full border border-white/15 px-3 py-1 text-xs uppercase tracking-[0.2em] transition-colors hover:border-white/40"
                >
                  {s.label}
                </a>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-14 flex flex-col items-start justify-between gap-3 border-t border-white/10 pt-6 text-xs text-white/45 md:flex-row md:items-center">
          <div>© {year} Mito Marketing · Todos los derechos reservados.</div>
          <div className="flex items-center gap-3 caption-mito text-white/40">
            <span>Hecho con intención</span>
            <span className="h-px w-8 bg-white/15" />
            <span>Buenos Aires</span>
          </div>
        </div>
      </div>
    </footer>
  );
}

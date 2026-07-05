"use client";

import * as React from "react";
import Link from "next/link";
import { Menu, X, Phone } from "lucide-react";

import { LiquidButton } from "@/components/ui/liquid-glass-button";
import { MitoLogo } from "@/components/site/mito-logo";
import { cn } from "@/lib/utils";

const nav = [
  { label: "Qué es Mito", href: "#que-es" },
  { label: "Qué hacemos", href: "#que-hacemos" },
  { label: "Proceso", href: "#proceso" },
  { label: "Casos", href: "#casos" },
  { label: "Contacto", href: "#contacto" },
];

export function SiteNav() {
  const [open, setOpen] = React.useState(false);
  const [scrolled, setScrolled] = React.useState(false);

  React.useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-50 transition-all duration-300",
        scrolled
          ? "bg-mito-blue/85 backdrop-blur-md border-b border-white/10"
          : "bg-transparent",
      )}
    >
      <div className="container flex h-16 items-center justify-between md:h-20">
        <Link href="#inicio" className="flex items-center gap-3" aria-label="Inicio Mito">
          <MitoLogo variant="inverse" className="h-8 w-auto md:h-9" />
        </Link>

        <nav className="hidden items-center gap-1 md:flex">
          {nav.map((item, idx) => (
            <Link
              key={item.href}
              href={item.href}
              className="rounded-full px-4 py-2 text-sm text-white/80 transition-colors hover:bg-white/5 hover:text-white"
            >
              <span className="caption-mito mr-2 text-white/30">
                0{idx + 1}
              </span>
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="hidden md:block">
          <LiquidButton asChild size="default" variant="orange">
            <a href="#contacto">
              <Phone className="h-4 w-4" /> Contactar a Mito
            </a>
          </LiquidButton>
        </div>

        <button
          onClick={() => setOpen((v) => !v)}
          className="flex h-10 w-10 items-center justify-center rounded-full border border-white/15 bg-white/5 text-white md:hidden"
          aria-label="Abrir menú"
        >
          {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </div>

      {open && (
        <div className="md:hidden">
          <div className="container pb-6">
            <div className="rounded-2xl border border-white/10 bg-mito-blue/95 p-3 backdrop-blur-md">
              {nav.map((item, idx) => (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={() => setOpen(false)}
                  className="flex items-center gap-3 rounded-xl px-4 py-3 text-sm text-white/85 hover:bg-white/5"
                >
                  <span className="caption-mito text-white/30">
                    0{idx + 1}
                  </span>
                  {item.label}
                </Link>
              ))}
              <LiquidButton
                asChild
                variant="orange"
                size="default"
                className="mt-2 w-full"
              >
                <a href="#contacto" onClick={() => setOpen(false)}>
                  <Phone className="h-4 w-4" /> Contactar a Mito
                </a>
              </LiquidButton>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}

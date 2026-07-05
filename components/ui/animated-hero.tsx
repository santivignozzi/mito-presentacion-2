"use client";

import { useEffect, useMemo, useState } from "react";
import { motion, useReducedMotion } from "framer-motion";
import { ArrowRight, MoveRight, Phone, Sparkles } from "lucide-react";

import { LiquidButton } from "@/components/ui/liquid-glass-button";
import { MitoLogo } from "@/components/site/mito-logo";
import {
  MitoMarquee,
  MitoStageGrid,
  MitoStageLights,
  MitoIsotypeParallax,
  MitoOrbits,
  MitoScrollHint,
} from "@/components/ui/mito-effects";
import { MitoSymbol } from "@/components/site/mito-symbol";
import { cn } from "@/lib/utils";

const rotating = [
  "memorables",
  "corporativas",
  "estratégicas",
  "creativas",
  "conectadas",
];

const heroMarquee = [
  "Eventos corporativos",
  "Producción integral",
  "Marketing B2B",
  "Experiencias de marca",
  "Lanzamientos",
  "Activaciones",
  "Brand storytelling",
];

type HeroProps = {
  eyebrow?: string;
  primaryCta?: { label: string; href: string };
  secondaryCta?: { label: string; href: string };
  className?: string;
};

export function AnimatedHero({
  eyebrow = "Mito · Agencia boutique de experiencias corporativas",
  primaryCta = { label: "Conocé lo que hacemos", href: "#que-hacemos" },
  secondaryCta = { label: "Hablar con Mito", href: "#contacto" },
  className,
}: HeroProps) {
  const [index, setIndex] = useState(0);
  const titles = useMemo(() => rotating, []);
  const reduce = useReducedMotion();

  useEffect(() => {
    const id = setTimeout(() => {
      setIndex((prev) => (prev === titles.length - 1 ? 0 : prev + 1));
    }, 2400);
    return () => clearTimeout(id);
  }, [index, titles]);

  return (
    <section
      id="inicio"
      className={cn(
        "relative isolate overflow-hidden bg-mito-blue text-white",
        className,
      )}
    >
      {/* Backgrounds */}
      <div className="pointer-events-none absolute inset-0 -z-30">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_rgba(136,58,255,0.35),_transparent_55%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom,_rgba(242,70,29,0.25),_transparent_55%)]" />
      </div>

      <MitoStageGrid className="pointer-events-none absolute inset-0 -z-20 opacity-60" />
      <MitoStageLights className="pointer-events-none absolute inset-x-0 top-0 -z-10 h-[460px]" />

      {/* Aurora blobs */}
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute -left-40 top-20 h-[520px] w-[520px] rounded-full bg-mito-purple/35 blur-[160px] animate-pulse-soft" />
        <div className="absolute -right-32 bottom-0 h-[540px] w-[540px] rounded-full bg-mito-orange/30 blur-[170px]" />
        <div className="absolute right-1/3 top-20 h-[280px] w-[280px] rounded-full bg-mito-yellow/22 blur-[120px]" />
        <div className="absolute left-1/3 bottom-24 h-[260px] w-[260px] rounded-full bg-mito-blue/40 blur-[140px]" />
      </div>

      <div className="absolute inset-0 -z-10 mito-grain opacity-60" />

      {/* Floating decorative isotype */}
      <MitoSymbol
        variant="tri"
        className="pointer-events-none absolute -right-32 top-24 h-[420px] w-[420px] opacity-[0.08] animate-spin-slow"
      />
      <MitoSymbol
        variant="violet"
        className="pointer-events-none absolute -left-12 bottom-10 h-56 w-56 opacity-[0.12]"
      />

      <div className="container relative z-10 grid min-h-[100svh] items-center gap-14 py-28 md:py-36 lg:grid-cols-12">
        {/* Copy */}
        <div className="lg:col-span-7">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="flex flex-col items-start gap-6"
          >
            <div className="rounded-2xl bg-white/5 px-4 py-3 ring-1 ring-white/10 backdrop-blur-md">
              <MitoLogo variant="light" className="h-9 w-auto md:h-10" priority />
            </div>
            <span className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-4 py-1.5 text-xs uppercase tracking-[0.22em] text-white/80 backdrop-blur-md">
              <Sparkles className="h-3.5 w-3.5 text-mito-yellow" /> {eyebrow}
            </span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 22 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.05 }}
            className="display-tight mt-10 max-w-4xl text-balance text-[2.75rem] font-semibold tracking-tight text-white sm:text-5xl md:text-6xl lg:text-[5.5rem]"
          >
            <span className="block">Creamos experiencias</span>
            <span className="block">corporativas que se</span>
            <span className="relative inline-flex h-[1.05em] items-end overflow-hidden align-baseline">
              <span className="text-white/80">sienten&nbsp;</span>
              <span className="relative inline-flex w-[6.5em] justify-start overflow-hidden">
                &nbsp;
                {titles.map((title, i) => (
                  <motion.span
                    key={title}
                    className="absolute font-semibold text-gradient-mito"
                    initial={{ opacity: 0, y: "-100%" }}
                    transition={{ type: "spring", stiffness: 80, damping: 18 }}
                    animate={
                      index === i
                        ? { y: 0, opacity: 1 }
                        : { y: index > i ? -120 : 120, opacity: 0 }
                    }
                  >
                    {title}
                  </motion.span>
                ))}
              </span>
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.15 }}
            className="mt-7 max-w-2xl text-pretty text-base text-white/75 md:text-xl"
          >
            En Mito diseñamos, producimos y comunicamos eventos corporativos,
            activaciones y experiencias de marca pensadas para conectar,
            comunicar y dejar una huella real.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.25 }}
            className="mt-10 flex flex-col items-start gap-4 sm:flex-row sm:items-center"
          >
            <LiquidButton asChild size="xl" variant="orange">
              <a href={primaryCta.href}>
                {primaryCta.label}
                <MoveRight className="h-4 w-4" />
              </a>
            </LiquidButton>

            <LiquidButton asChild size="xl" variant="primary">
              <a href={secondaryCta.href}>
                <Phone className="h-4 w-4" />
                {secondaryCta.label}
              </a>
            </LiquidButton>
          </motion.div>

          {/* Trust strip */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1.2, delay: 0.45 }}
            className="mt-12 grid w-full max-w-3xl grid-cols-2 gap-3 md:grid-cols-4"
          >
            {[
              { k: "Estrategia", v: "alineada al negocio" },
              { k: "Producción", v: "de punta a punta" },
              { k: "Creatividad", v: "con dirección estética" },
              { k: "Comunicación", v: "antes, durante y después" },
            ].map((it) => (
              <div
                key={it.k}
                className="rounded-2xl border border-white/10 bg-white/[0.04] p-4 backdrop-blur transition-colors hover:border-white/25 hover:bg-white/[0.08]"
              >
                <div className="caption-mito text-mito-yellow/90">{it.k}</div>
                <div className="mt-2 text-sm text-white/85">{it.v}</div>
              </div>
            ))}
          </motion.div>
        </div>

        {/* Right: visual isotype composition */}
        <div className="relative hidden h-[600px] lg:col-span-5 lg:block">
          <MitoOrbits className="absolute inset-0" />
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1.1, ease: [0.16, 1, 0.3, 1] }}
            className="absolute inset-0"
          >
            <MitoIsotypeParallax className="absolute inset-0" />
          </motion.div>

          {/* Mito logo at the center */}
          <motion.div
            initial={{ opacity: 0, scale: 0.85 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
            className="absolute inset-0 flex items-center justify-center"
          >
            <div className="flex h-40 w-40 items-center justify-center rounded-full liquid-surface-strong p-6">
              <MitoLogo variant="light" className="h-auto w-full" />
            </div>
          </motion.div>

          {/* Floating glass badges */}
          {[
            {
              label: "Producción",
              value: "120 proveedores",
              hint: "coordinados por Mito",
              className: "right-8 top-0",
              delay: 0.6,
              orbit: { x: [0, 8, 0, -8, 0], y: [0, -10, 0, 10, 0], duration: 9 },
            },
            {
              label: "Resultados",
              value: "+100 eventos exitosos",
              hint: "producidos por Mito",
              className: "right-0 top-1/3",
              delay: 0.75,
              orbit: { x: [0, -10, 0, 10, 0], y: [0, 8, 0, -8, 0], duration: 10 },
            },
            {
              label: "Clientes",
              value: "+20 clientes satisfechos",
              hint: "que confían en Mito",
              className: "right-10 bottom-44",
              delay: 0.9,
              orbit: { x: [0, 9, 0, -9, 0], y: [0, 9, 0, -9, 0], duration: 11 },
            },
            {
              label: "Alcance",
              value: "+5 países",
              hint: "con presencia de Mito",
              className: "right-2 bottom-0",
              delay: 1.05,
              orbit: { x: [0, -8, 0, 8, 0], y: [0, -9, 0, 9, 0], duration: 9.5 },
            },
          ].map((badge) => (
            <motion.div
              key={badge.value}
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: badge.delay, duration: 0.8 }}
              className={cn("absolute rounded-2xl liquid-surface p-4", badge.className)}
            >
              <motion.div
                animate={
                  reduce
                    ? undefined
                    : { x: badge.orbit.x, y: badge.orbit.y }
                }
                transition={{
                  duration: badge.orbit.duration,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: badge.delay + 0.5,
                }}
              >
                <div className="caption-mito text-white/55">{badge.label}</div>
                <div className="mt-1.5 text-base font-medium text-white num-tag">
                  {badge.value}
                </div>
                <div className="text-xs text-white/60">{badge.hint}</div>
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Capabilities marquee footer */}
      <div className="relative z-10 border-t border-white/10 bg-mito-blue/40 py-7 backdrop-blur">
        <div className="container">
          <div className="mb-4 flex items-center gap-3 caption-mito text-white/55">
            <span className="h-1.5 w-1.5 rounded-full bg-mito-orange" />
            Capabilities
          </div>
        </div>
        <div className="fade-edges">
          <MitoMarquee items={heroMarquee} />
        </div>
        <div className="mt-4 fade-edges">
          <MitoMarquee items={heroMarquee.slice().reverse()} reverse />
        </div>
      </div>

      {!reduce && (
        <MitoScrollHint className="absolute inset-x-0 bottom-2 z-10" />
      )}
    </section>
  );
}

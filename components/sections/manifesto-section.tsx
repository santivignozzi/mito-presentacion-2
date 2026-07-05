"use client";

import { motion } from "framer-motion";
import { Compass, Lightbulb, Megaphone, MessageSquare, Sparkles } from "lucide-react";

import { LiquidButton } from "@/components/ui/liquid-glass-button";
import { fadeUp, stagger } from "@/lib/motion";
import { MitoSymbol } from "@/components/site/mito-symbol";

const pillars = [
  { icon: Compass, label: "Estrategia" },
  { icon: Lightbulb, label: "Creatividad" },
  { icon: Sparkles, label: "Producción" },
  { icon: Megaphone, label: "Comunicación" },
  { icon: MessageSquare, label: "Experiencia" },
];

export function ManifestoSection() {
  return (
    <section className="relative overflow-hidden bg-mito-blue py-28 text-white md:py-36">
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute left-1/2 top-1/2 h-[520px] w-[520px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-mito-purple/25 blur-[160px]" />
        <MitoSymbol
          variant="tri"
          className="absolute -left-32 top-10 h-96 w-96 opacity-[0.08] animate-spin-slow"
        />
        <MitoSymbol
          variant="orange"
          className="absolute -right-24 bottom-10 h-72 w-72 opacity-[0.10]"
        />
      </div>

      <div className="container relative grid items-center gap-14 md:grid-cols-12">
        <motion.div
          variants={stagger}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.3 }}
          className="md:col-span-6"
        >
          <motion.div variants={fadeUp} className="flex items-center gap-4">
            <span className="caption-mito text-mito-yellow">04 · De la idea al impacto</span>
            <span className="h-px w-24 bg-white/15" />
          </motion.div>
          <motion.h2
            variants={fadeUp}
            className="display-tight mt-7 max-w-3xl text-balance text-4xl font-semibold leading-[1.05] md:text-6xl"
          >
            Un evento no empieza cuando llegan los invitados.
            <span className="block text-gradient-mito">
              Empieza cuando una marca decide qué quiere hacer sentir.
            </span>
          </motion.h2>
          <motion.p
            variants={fadeUp}
            className="mt-7 max-w-xl text-pretty text-base text-white/75 md:text-lg"
          >
            Mito acompaña desde la primera idea hasta la ejecución final,
            integrando estrategia, creatividad, producción, comunicación,
            experiencia y seguimiento en una misma dirección.
          </motion.p>

          <motion.div
            variants={fadeUp}
            className="mt-8 flex flex-wrap items-center gap-2"
          >
            {pillars.map(({ icon: Icon, label }, idx) => (
              <span
                key={label}
                className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/[0.04] px-4 py-2 text-xs uppercase tracking-[0.18em] text-white/85 transition-colors hover:border-white/30 hover:bg-white/[0.08]"
              >
                <span className="caption-mito text-mito-orange">
                  0{idx + 1}
                </span>
                <Icon className="h-3.5 w-3.5 text-mito-orange" />
                {label}
              </span>
            ))}
          </motion.div>

          <motion.div variants={fadeUp} className="mt-10">
            <LiquidButton asChild size="lg" variant="orange">
              <a href="#soluciones">Ver cómo te podemos acompañar</a>
            </LiquidButton>
          </motion.div>
        </motion.div>

        <motion.div
          variants={stagger}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.3 }}
          className="md:col-span-6"
        >
          <div className="relative overflow-hidden rounded-[2rem] border border-white/10 liquid-surface p-8 md:p-10">
            <div className="absolute -right-12 -top-12 h-44 w-44 rounded-full bg-mito-purple/40 blur-3xl" />
            <div className="absolute -bottom-12 -left-12 h-44 w-44 rounded-full bg-mito-orange/40 blur-3xl" />
            <div className="relative">
              <div className="caption-mito text-mito-yellow/85">Manifiesto</div>
              <div className="mt-6 grid gap-5">
                {[
                  "Cada evento comunica.",
                  "Cada detalle habla de tu marca.",
                  "Cada experiencia construye percepción.",
                  "Cada encuentro puede convertirse en una oportunidad.",
                  "La diferencia está en cómo hacés sentir a las personas.",
                ].map((line, i) => (
                  <motion.p
                    key={line}
                    variants={fadeUp}
                    className="display-tight flex items-baseline gap-4 text-2xl font-medium leading-[1.05] md:text-3xl"
                  >
                    <span className="num-tag text-mito-yellow text-xl">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    <span>{line}</span>
                  </motion.p>
                ))}
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

"use client";

import { motion } from "framer-motion";
import { Quote } from "lucide-react";

import { fadeUp, stagger } from "@/lib/motion";
import { MitoSymbol } from "@/components/site/mito-symbol";

export function AboutSection() {
  return (
    <section id="que-es" className="relative overflow-hidden bg-white py-28 md:py-36">
      {/* Soft decorative blob behind right column */}
      <div className="pointer-events-none absolute -right-32 top-32 h-[420px] w-[420px] rounded-full bg-mito-purple/8 blur-[120px]" />
      <div className="pointer-events-none absolute -left-32 bottom-20 h-[320px] w-[320px] rounded-full bg-mito-orange/8 blur-[120px]" />

      <div className="container relative grid items-center gap-14 md:grid-cols-12">
        <motion.div
          variants={stagger}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.3 }}
          className="md:col-span-7"
        >
          <motion.div variants={fadeUp} className="flex items-center gap-4">
            <span className="caption-mito text-mito-purple">01 · Qué es Mito</span>
            <span className="dot-divider h-1 w-24 text-mito-blue/20" />
          </motion.div>

          <motion.h2
            variants={fadeUp}
            className="display-tight mt-8 max-w-3xl text-balance text-4xl font-semibold tracking-tight text-mito-blue md:text-6xl"
          >
            Una agencia boutique donde creatividad, producción y estrategia
            <span className="relative inline-block text-mito-orange">
              <span> se encuentran</span>
              <svg
                className="absolute -bottom-2 left-0 h-2 w-full text-mito-orange/40"
                viewBox="0 0 200 8"
                preserveAspectRatio="none"
                aria-hidden
              >
                <path
                  d="M0 4 C 50 0, 150 8, 200 4"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                />
              </svg>
            </span>
            .
          </motion.h2>

          <motion.p
            variants={fadeUp}
            className="mt-7 max-w-2xl text-pretty text-base leading-relaxed text-mito-blue/75 md:text-lg"
          >
            Mito transforma objetivos empresariales en experiencias memorables.
            Trabajamos junto a marcas, equipos y organizaciones para diseñar
            eventos y acciones que comuniquen mejor, conecten con las personas y
            representen la identidad de cada empresa.
          </motion.p>

          <motion.div variants={fadeUp} className="mt-10 grid gap-3 sm:grid-cols-3">
            {[
              { k: "Creatividad", v: "Conceptos con dirección estética y narrativa." },
              { k: "Producción", v: "Operación precisa con proveedores y timings." },
              { k: "Estrategia", v: "Cada decisión alineada al objetivo del negocio." },
            ].map((it, idx) => (
              <div
                key={it.k}
                className="group relative overflow-hidden rounded-2xl border border-mito-blue/10 bg-paper p-5 transition-all hover:-translate-y-0.5 hover:border-mito-blue/25 hover:shadow-[0_30px_60px_-30px_rgba(5,41,65,0.25)]"
                style={{ background: "linear-gradient(180deg, #ffffff 0%, #fafaf7 100%)" }}
              >
                <span className="caption-mito text-mito-orange">
                  0{idx + 1}
                </span>
                <div className="mt-2 text-sm font-semibold uppercase tracking-[0.12em] text-mito-blue">
                  {it.k}
                </div>
                <div className="mt-2 text-sm leading-relaxed text-mito-blue/75">
                  {it.v}
                </div>
              </div>
            ))}
          </motion.div>
        </motion.div>

        <motion.div
          variants={stagger}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.3 }}
          className="relative md:col-span-5"
        >
          <div className="relative aspect-[4/5] overflow-hidden rounded-3xl bg-mito-blue p-10 text-white">
            <div className="absolute inset-0 opacity-30">
              <MitoSymbol variant="tri" className="absolute -right-16 -top-16 h-72 w-72" />
              <MitoSymbol variant="violet" className="absolute -bottom-12 -left-12 h-56 w-56 opacity-80" />
            </div>
            <div className="absolute inset-0 bg-gradient-to-br from-transparent via-mito-blue/40 to-mito-blue/80" />
            <div className="relative flex h-full flex-col justify-between">
              <Quote className="h-8 w-8 text-mito-yellow" />
              <p className="display-tight text-balance text-2xl font-medium leading-[1.05] md:text-[1.8rem]">
                “Un evento no empieza cuando llegan los invitados. Empieza
                cuando una marca decide qué quiere hacer sentir.”
              </p>
              <div className="flex items-center gap-3 caption-mito text-white/70">
                <span className="h-px w-8 bg-mito-yellow" /> Manifiesto Mito
              </div>
            </div>
          </div>
          <div className="absolute -bottom-6 -left-6 hidden h-24 w-24 rotate-12 rounded-2xl bg-mito-yellow/90 glow-yellow md:block" />
          <div className="absolute -right-4 -top-4 hidden h-16 w-16 -rotate-6 rounded-full bg-mito-orange md:block" />
        </motion.div>
      </div>
    </section>
  );
}

"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { ArrowUpRight } from "lucide-react";

import { fadeUp, stagger } from "@/lib/motion";
import { cases } from "@/data/content";

export function CasesSection() {
  return (
    <section
      id="casos"
      className="relative overflow-hidden bg-mito-blue py-28 text-white md:py-36"
    >
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -right-20 top-10 h-72 w-72 rounded-full bg-mito-purple/30 blur-[140px]" />
        <div className="absolute -left-20 bottom-10 h-72 w-72 rounded-full bg-mito-orange/25 blur-[140px]" />
      </div>

      <div className="container relative">
        <motion.div
          variants={stagger}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.3 }}
          className="flex flex-col items-start justify-between gap-6 md:flex-row md:items-end"
        >
          <div className="max-w-2xl">
            <motion.div variants={fadeUp} className="flex items-center gap-4">
              <span className="caption-mito text-mito-yellow">06 · Trabajos</span>
              <span className="h-px w-24 bg-white/15" />
            </motion.div>
            <motion.h2
              variants={fadeUp}
              className="display-tight mt-7 text-balance text-4xl font-semibold leading-tight md:text-6xl"
            >
              Casos para mostrar cómo pensamos, producimos y
              <span className="text-gradient-mito"> potenciamos cada marca</span>.
            </motion.h2>
          </div>
          <motion.p variants={fadeUp} className="max-w-md text-pretty text-white/70">
            Algunos de los proyectos que produjimos para marcas líderes.
          </motion.p>
        </motion.div>

        <motion.div
          variants={stagger}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.2 }}
          className="mt-16 grid gap-6 md:grid-cols-3"
        >
          {cases.map((c, i) => (
            <motion.a
              key={c.code}
              href={c.instagramUrl}
              target="_blank"
              rel="noopener noreferrer"
              variants={fadeUp}
              className="group relative block overflow-hidden rounded-3xl border border-white/10 bg-white/[0.04] p-6 backdrop-blur transition-all hover:-translate-y-1 hover:border-white/25"
            >
              <div className="relative aspect-[4/3] overflow-hidden rounded-2xl bg-mito-blue">
                <Image
                  src={c.image}
                  alt={`${c.client} · ${c.type}`}
                  fill
                  sizes="(min-width: 768px) 33vw, 100vw"
                  className="object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute left-4 top-4 inline-flex items-center gap-2 rounded-full bg-white/15 px-3 py-1 text-[10px] uppercase tracking-[0.2em] backdrop-blur">
                  {c.code}
                </div>
                <div className="absolute bottom-4 right-4 inline-flex h-10 w-10 items-center justify-center rounded-full bg-white text-mito-blue transition-transform duration-300 group-hover:rotate-12">
                  <ArrowUpRight className="h-4 w-4" />
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-mito-blue/60 via-transparent to-transparent" />
              </div>

              <div className="mt-6">
                <div className="flex items-center justify-between">
                  <div className="caption-mito text-white/55">{c.client} · {c.type}</div>
                  <span className="caption-mito text-white/30">
                    {String(i + 1).padStart(2, "0")} / {String(cases.length).padStart(2, "0")}
                  </span>
                </div>
                <h3 className="display-tight mt-3 text-lg font-semibold leading-snug">
                  {c.objective}
                </h3>
                <p className="mt-2 text-sm text-white/70">{c.solution}</p>
              </div>
            </motion.a>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

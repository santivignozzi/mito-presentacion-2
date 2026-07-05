"use client";

import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

import { fadeUp, stagger } from "@/lib/motion";
import { MitoArc } from "@/components/site/mito-symbol";
import { process } from "@/data/content";

export function ProcessSection() {
  return (
    <section id="proceso" className="relative overflow-hidden bg-white py-28 md:py-36">
      <div className="pointer-events-none absolute -right-40 top-32 h-[420px] w-[420px] rounded-full bg-mito-yellow/10 blur-[140px]" />

      <div className="container relative">
        <motion.div
          variants={stagger}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.3 }}
          className="mx-auto max-w-3xl"
        >
          <motion.div variants={fadeUp} className="flex items-center gap-4">
            <span className="caption-mito text-mito-orange">03 · Cómo trabajamos</span>
            <span className="dot-divider h-1 w-24 text-mito-blue/20" />
          </motion.div>
          <motion.h2
            variants={fadeUp}
            className="display-tight mt-7 text-balance text-4xl font-semibold leading-tight text-mito-blue md:text-6xl"
          >
            Un proceso claro, colaborativo y orientado a resultados.
          </motion.h2>
          <motion.p
            variants={fadeUp}
            className="mt-5 max-w-xl text-pretty text-base text-mito-blue/70 md:text-lg"
          >
            Acompañamos cada proyecto con método y creatividad. Estas son las
            etapas que atravesamos para que cada experiencia suceda con
            coherencia.
          </motion.p>
        </motion.div>

        <div className="relative mt-24">
          <MitoArc className="absolute -top-10 left-0 h-20 w-full opacity-70" />
          <div className="absolute left-1/2 top-0 hidden h-full w-px -translate-x-1/2 bg-gradient-to-b from-mito-purple/30 via-mito-orange/30 to-mito-yellow/30 md:block" />

          <motion.ol
            variants={stagger}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.2 }}
            className="relative grid gap-10 md:gap-14"
          >
            {process.map((p, idx) => (
              <motion.li
                key={p.step}
                variants={fadeUp}
                className={`grid items-start gap-6 md:grid-cols-12 ${
                  idx % 2 === 1 ? "md:[&>*:first-child]:order-2" : ""
                }`}
              >
                <div className="md:col-span-5">
                  <div className="relative inline-flex items-baseline gap-4">
                    <span className="display-tight num-tag text-7xl font-semibold tracking-tighter text-mito-purple/25 md:text-[7.5rem]">
                      {p.step}
                    </span>
                    <span className="caption-mito text-mito-orange">
                      Etapa
                    </span>
                  </div>
                </div>
                <div className="md:col-span-7">
                  <div className="group relative overflow-hidden rounded-3xl border border-mito-blue/10 bg-paper p-8 transition-all hover:-translate-y-1 hover:border-mito-purple/30 hover:shadow-[0_30px_60px_-30px_rgba(5,41,65,0.25)]"
                    style={{ background: "linear-gradient(180deg, #ffffff 0%, #fafaf7 100%)" }}
                  >
                    <div className="pointer-events-none absolute -right-12 -top-12 h-40 w-40 rounded-full bg-mito-purple/10 blur-2xl transition-opacity duration-500 group-hover:opacity-90" />
                    <div className="flex items-center justify-between gap-4">
                      <div>
                        <span className="caption-mito text-mito-purple/70">Paso {p.step}</span>
                        <h3 className="display-tight mt-2 text-xl font-semibold leading-snug text-mito-blue md:text-2xl">
                          {p.title}
                        </h3>
                      </div>
                      <span className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-mito-orange/12 text-mito-orange transition-transform duration-300 group-hover:rotate-12">
                        <ArrowUpRight className="h-4 w-4" />
                      </span>
                    </div>
                    <p className="mt-4 text-pretty text-sm leading-relaxed text-mito-blue/75 md:text-base">
                      {p.description}
                    </p>
                    <div className="mt-6 flex items-center gap-2 caption-mito text-mito-blue/40">
                      <span>{String(idx + 1).padStart(2, "0")} / 05</span>
                      <span className="h-px flex-1 bg-mito-blue/10" />
                      <span>{p.title}</span>
                    </div>
                  </div>
                </div>
              </motion.li>
            ))}
          </motion.ol>
        </div>
      </div>
    </section>
  );
}

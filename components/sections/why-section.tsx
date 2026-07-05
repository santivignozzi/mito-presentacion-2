"use client";

import { motion } from "framer-motion";
import { Check } from "lucide-react";

import { fadeUp, stagger } from "@/lib/motion";
import { reasons } from "@/data/content";

export function WhySection() {
  return (
    <section
      className="relative overflow-hidden py-28 md:py-36"
      style={{ background: "linear-gradient(180deg, #ffffff 0%, #fafaf7 100%)" }}
    >
      <div className="pointer-events-none absolute -left-32 top-32 h-[380px] w-[380px] rounded-full bg-mito-purple/8 blur-[140px]" />
      <div className="pointer-events-none absolute -right-32 bottom-32 h-[380px] w-[380px] rounded-full bg-mito-orange/8 blur-[140px]" />

      <div className="container relative grid gap-14 md:grid-cols-12">
        <motion.div
          variants={stagger}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.3 }}
          className="md:col-span-5"
        >
          <motion.div variants={fadeUp} className="flex items-center gap-4">
            <span className="caption-mito text-[#9c7400]">07 · Por qué Mito</span>
            <span className="dot-divider h-1 w-24 text-mito-blue/20" />
          </motion.div>
          <motion.h2
            variants={fadeUp}
            className="display-tight mt-7 text-balance text-4xl font-semibold leading-tight text-mito-blue md:text-6xl"
          >
            Razones para elegir trabajar con nosotros.
          </motion.h2>
          <motion.p
            variants={fadeUp}
            className="mt-5 max-w-md text-pretty text-base text-mito-blue/70 md:text-lg"
          >
            Sin promesas exageradas. Estos son los rasgos que sostienen
            nuestros proyectos y que marcan la diferencia en cada entrega.
          </motion.p>

          <motion.div
            variants={fadeUp}
            className="mt-10 flex items-center gap-6 caption-mito text-mito-blue/40"
          >
            <div className="flex items-baseline gap-2">
              <span className="display-tight num-tag text-5xl text-mito-blue">
                07
              </span>
              <span>años creando experiencias</span>
            </div>
          </motion.div>
        </motion.div>

        <motion.ul
          variants={stagger}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.2 }}
          className="md:col-span-7"
        >
          <div className="grid gap-3 sm:grid-cols-2">
            {reasons.map((r, idx) => (
              <motion.li
                key={r}
                variants={fadeUp}
                className="group relative flex items-start gap-4 rounded-2xl border border-mito-blue/10 bg-white p-5 transition-all hover:-translate-y-0.5 hover:border-mito-blue/25 hover:shadow-[0_20px_40px_-20px_rgba(5,41,65,0.18)]"
              >
                <span className="caption-mito mt-0.5 text-mito-orange/70">
                  {String(idx + 1).padStart(2, "0")}
                </span>
                <span className="mt-0.5 inline-flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-mito-orange text-white transition-transform duration-300 group-hover:rotate-12">
                  <Check className="h-3.5 w-3.5" />
                </span>
                <span className="text-sm font-medium leading-snug text-mito-blue md:text-base">
                  {r}
                </span>
              </motion.li>
            ))}
          </div>
        </motion.ul>
      </div>
    </section>
  );
}

"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

import { fadeUp, stagger } from "@/lib/motion";
import { cn } from "@/lib/utils";
import { needs } from "@/data/content";

const accentMap: Record<
  string,
  { dot: string; chip: string; bar: string; tag: string }
> = {
  purple: {
    dot: "bg-mito-purple",
    chip: "bg-mito-purple/10 text-mito-purple",
    bar: "bg-mito-purple",
    tag: "Equipo & cultura",
  },
  orange: {
    dot: "bg-mito-orange",
    chip: "bg-mito-orange/10 text-mito-orange",
    bar: "bg-mito-orange",
    tag: "Lanzamiento",
  },
  yellow: {
    dot: "bg-mito-yellow",
    chip: "bg-mito-yellow/25 text-[#9c7400]",
    bar: "bg-mito-yellow",
    tag: "Comunicación",
  },
  blue: {
    dot: "bg-mito-blue",
    chip: "bg-mito-blue/8 text-mito-blue",
    bar: "bg-mito-blue",
    tag: "Operación 360",
  },
};

export function NeedsSection() {
  return (
    <section
      id="soluciones"
      className="relative overflow-hidden bg-paper-2 py-28 md:py-36"
      style={{ background: "linear-gradient(180deg, #ffffff 0%, #fafaf7 100%)" }}
    >
      <div className="container relative">
        <motion.div
          variants={stagger}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.3 }}
          className="mx-auto max-w-3xl"
        >
          <motion.div variants={fadeUp} className="flex items-center gap-4">
            <span className="caption-mito text-mito-blue">05 · Soluciones por necesidad</span>
            <span className="dot-divider h-1 w-24 text-mito-blue/20" />
          </motion.div>
          <motion.h2
            variants={fadeUp}
            className="display-tight mt-7 text-balance text-4xl font-semibold leading-tight text-mito-blue md:text-6xl"
          >
            Encontrá el punto de entrada que se parece a lo que necesitás.
          </motion.h2>
          <motion.p
            variants={fadeUp}
            className="mt-5 max-w-xl text-pretty text-base text-mito-blue/70 md:text-lg"
          >
            Si te identificás con alguna de estas situaciones, Mito tiene un
            equipo listo para hacerse cargo.
          </motion.p>
        </motion.div>

        <motion.div
          variants={stagger}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.2 }}
          className="mt-16 grid gap-5 md:grid-cols-2"
        >
          {needs.map((n, idx) => {
            const a = accentMap[n.accent];
            return (
              <motion.a
                key={n.title}
                href={`mailto:gusvignozzi@mitomkt.com?subject=${encodeURIComponent(n.title)}`}
                variants={fadeUp}
                className="group relative block overflow-hidden rounded-3xl border border-mito-blue/10 bg-white p-8 transition-all hover:-translate-y-1 hover:border-mito-blue/25 hover:shadow-[0_30px_60px_-30px_rgba(5,41,65,0.25)]"
              >
                <div
                  className={cn(
                    "absolute inset-x-0 top-0 h-1 origin-left scale-x-0 transition-transform duration-500 group-hover:scale-x-100",
                    a.bar,
                  )}
                />
                <div className="flex items-center justify-between">
                  <span className="caption-mito text-mito-blue/50">
                    {String(idx + 1).padStart(2, "0")} · {a.tag}
                  </span>
                  <span className="caption-mito text-mito-blue/30">
                    / 04
                  </span>
                </div>
                <div className="mt-5 flex items-start gap-3">
                  <span
                    className={cn(
                      "mt-3 h-2 w-2 shrink-0 rounded-full",
                      a.dot,
                    )}
                  />
                  <h3 className="display-tight text-xl font-semibold leading-snug text-mito-blue md:text-2xl">
                    {n.title}
                  </h3>
                </div>
                <p className="mt-4 text-pretty text-sm leading-relaxed text-mito-blue/75 md:text-base">
                  {n.description}
                </p>
                <div className="mt-6 flex items-center justify-between border-t border-mito-blue/10 pt-5">
                  <span
                    className={cn(
                      "inline-flex items-center gap-2 rounded-full px-3 py-1.5 text-xs uppercase tracking-[0.18em]",
                      a.chip,
                    )}
                  >
                    Solución Mito
                  </span>
                  <span className="inline-flex items-center gap-1.5 text-sm font-medium text-mito-blue transition-transform duration-300 group-hover:translate-x-1">
                    Empezar <ArrowRight className="h-4 w-4" />
                  </span>
                </div>
              </motion.a>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}

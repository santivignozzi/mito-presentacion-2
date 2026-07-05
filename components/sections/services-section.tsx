"use client";

import { motion } from "framer-motion";
import {
  CalendarDays,
  Megaphone,
  Sparkles,
  Star,
  type LucideIcon,
} from "lucide-react";

import { fadeUp, stagger } from "@/lib/motion";
import { cn } from "@/lib/utils";
import { services } from "@/data/content";

const iconMap: Record<string, LucideIcon> = {
  sparkles: Sparkles,
  calendar: CalendarDays,
  megaphone: Megaphone,
  star: Star,
};

const accentClasses: Record<
  string,
  {
    ring: string;
    chip: string;
    text: string;
    textStrong: string;
    bg: string;
    border: string;
    numberBar: string;
  }
> = {
  purple: {
    ring: "ring-mito-purple/30",
    chip: "bg-mito-purple/12 text-mito-purple",
    text: "text-mito-purple",
    textStrong: "text-mito-purple",
    bg: "from-mito-purple/15 via-transparent to-transparent",
    border: "group-hover:border-mito-purple/45",
    numberBar: "bg-mito-purple",
  },
  orange: {
    ring: "ring-mito-orange/30",
    chip: "bg-mito-orange/12 text-mito-orange",
    text: "text-mito-orange",
    textStrong: "text-mito-orange",
    bg: "from-mito-orange/15 via-transparent to-transparent",
    border: "group-hover:border-mito-orange/45",
    numberBar: "bg-mito-orange",
  },
  yellow: {
    ring: "ring-mito-yellow/45",
    chip: "bg-mito-yellow/22 text-[#9c7400]",
    text: "text-[#c69b00]",
    textStrong: "text-mito-yellow",
    bg: "from-mito-yellow/25 via-transparent to-transparent",
    border: "group-hover:border-mito-yellow/55",
    numberBar: "bg-mito-yellow",
  },
  blue: {
    ring: "ring-white/25",
    chip: "bg-white/10 text-white",
    text: "text-white",
    textStrong: "text-white",
    bg: "from-white/10 via-transparent to-transparent",
    border: "group-hover:border-white/40",
    numberBar: "bg-white/80",
  },
};

const accentIndex: Record<string, number> = {
  purple: 1,
  orange: 2,
  yellow: 3,
  blue: 4,
};

export function ServicesSection() {
  return (
    <section
      id="que-hacemos"
      className="relative overflow-hidden bg-mito-blue py-28 text-white md:py-36"
    >
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute left-1/2 top-0 h-72 w-[80%] -translate-x-1/2 rounded-full bg-mito-purple/30 blur-[120px]" />
        <div className="absolute -bottom-20 right-0 h-72 w-72 rounded-full bg-mito-orange/20 blur-[120px]" />
        <div className="absolute -left-20 top-40 h-60 w-60 rounded-full bg-mito-yellow/15 blur-[120px]" />
      </div>

      <div className="container relative">
        <motion.div
          variants={stagger}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.3 }}
          className="mx-auto max-w-3xl text-center"
        >
          <motion.div variants={fadeUp} className="flex items-center justify-center gap-4">
            <span className="caption-mito text-white/60">02 · Qué hacemos</span>
          </motion.div>
          <motion.h2
            variants={fadeUp}
            className="display-tight mt-7 text-balance text-4xl font-semibold leading-tight md:text-6xl"
          >
            Un ecosistema de servicios para que cada evento
            <span className="text-gradient-mito"> tenga intención</span>.
          </motion.h2>
          <motion.p
            variants={fadeUp}
            className="mt-5 text-pretty text-base text-white/70 md:text-lg"
          >
            Acompañamos a las marcas desde la primera idea hasta la última
            publicación. Cuatro pilares que se conectan para crear experiencias
            memorables.
          </motion.p>
        </motion.div>

        <motion.div
          variants={stagger}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.2 }}
          className="mt-16 grid gap-6 md:grid-cols-2"
        >
          {services.map((s) => {
            const Icon = iconMap[s.icon];
            const a = accentClasses[s.accent];
            const num = accentIndex[s.accent];
            return (
              <motion.article
                key={s.title}
                variants={fadeUp}
                className={cn(
                  "group relative overflow-hidden rounded-3xl border border-white/10 bg-white/[0.04] p-8 backdrop-blur-sm transition-all duration-500 hover:-translate-y-1",
                  a.border,
                )}
              >
                {/* Gradient wash */}
                <div
                  className={cn(
                    "pointer-events-none absolute inset-0 bg-gradient-to-br opacity-60 transition-opacity duration-500 group-hover:opacity-100",
                    a.bg,
                  )}
                />

                {/* Top number bar */}
                <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/20 to-transparent" />
                <span
                  className={cn(
                    "absolute right-8 top-7 num-tag text-xs font-semibold tracking-[0.3em] text-white/30",
                  )}
                >
                  / 0{num}
                </span>

                <div className="relative flex items-start gap-4">
                  <span
                    className={cn(
                      "inline-flex h-14 w-14 items-center justify-center rounded-2xl ring-1 transition-transform duration-500 group-hover:rotate-3 group-hover:scale-105",
                      a.ring,
                      a.chip,
                    )}
                  >
                    <Icon className="h-5 w-5" />
                  </span>
                  <div className="flex-1">
                    <span className="caption-mito text-white/55">Servicio</span>
                    <h3 className="mt-2 text-2xl font-semibold tracking-tight md:text-3xl">
                      {s.title}
                    </h3>
                  </div>
                </div>

                <p className="relative mt-6 max-w-xl text-pretty text-sm leading-relaxed text-white/75 md:text-base">
                  {s.description}
                </p>

                <div className="relative mt-6 border-t border-white/10 pt-6">
                  <ul className="grid grid-cols-1 gap-2 sm:grid-cols-2">
                    {s.bullets.map((b) => (
                      <li
                        key={b}
                        className="flex items-start gap-3 text-sm text-white/85"
                      >
                        <span
                          className={cn(
                            "mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full",
                            a.numberBar,
                          )}
                        />
                        {b}
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Accent corner */}
                <div
                  className={cn(
                    "absolute -bottom-12 -right-12 h-32 w-32 rounded-full opacity-30 blur-3xl transition-opacity duration-700 group-hover:opacity-70",
                    s.accent === "purple" && "bg-mito-purple",
                    s.accent === "orange" && "bg-mito-orange",
                    s.accent === "yellow" && "bg-mito-yellow",
                    s.accent === "blue" && "bg-white",
                  )}
                />
              </motion.article>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}

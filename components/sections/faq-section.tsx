"use client";

import { motion } from "framer-motion";
import { Plus } from "lucide-react";

import { fadeUp, stagger } from "@/lib/motion";
import { faqs } from "@/data/content";

export function FaqSection() {
  return (
    <section
      id="preguntas"
      className="relative overflow-hidden py-28 md:py-36"
      style={{ background: "linear-gradient(180deg, #fafaf7 0%, #ffffff 100%)" }}
    >
      <div className="pointer-events-none absolute -right-32 top-24 h-[380px] w-[380px] rounded-full bg-mito-purple/8 blur-[140px]" />

      <div className="container relative grid gap-14 md:grid-cols-12">
        <motion.div
          variants={stagger}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.3 }}
          className="md:col-span-5"
        >
          <motion.div variants={fadeUp} className="flex items-center gap-4">
            <span className="caption-mito text-mito-purple">
              08 · Preguntas frecuentes
            </span>
            <span className="dot-divider h-1 w-24 text-mito-blue/20" />
          </motion.div>
          <motion.h2
            variants={fadeUp}
            className="display-tight mt-7 text-balance text-4xl font-semibold leading-tight text-mito-blue md:text-6xl"
          >
            Lo que nos preguntan antes de empezar.
          </motion.h2>
          <motion.p
            variants={fadeUp}
            className="mt-5 max-w-md text-pretty text-base text-mito-blue/70 md:text-lg"
          >
            Si tu duda no está acá, escribinos y la respondemos sin vueltas.
          </motion.p>
        </motion.div>

        <motion.div
          variants={stagger}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.1 }}
          className="md:col-span-7"
        >
          {/* <details> nativo: el texto de las respuestas vive siempre en el DOM
              (indexable) y funciona sin JS. */}
          <ul className="space-y-3">
            {faqs.map((faq) => (
              <motion.li key={faq.question} variants={fadeUp}>
                <details className="group rounded-2xl border border-mito-blue/10 bg-white transition-colors open:border-mito-blue/25 hover:border-mito-blue/25">
                  <summary className="flex cursor-pointer list-none items-start gap-4 p-5 [&::-webkit-details-marker]:hidden">
                    <span className="mt-0.5 inline-flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-mito-purple/10 text-mito-purple transition-transform duration-300 group-open:rotate-45">
                      <Plus className="h-4 w-4" />
                    </span>
                    <h3 className="text-sm font-medium leading-snug text-mito-blue md:text-base">
                      {faq.question}
                    </h3>
                  </summary>
                  <p className="text-pretty px-5 pb-5 pl-16 text-sm leading-relaxed text-mito-blue/70">
                    {faq.answer}
                  </p>
                </details>
              </motion.li>
            ))}
          </ul>
        </motion.div>
      </div>
    </section>
  );
}

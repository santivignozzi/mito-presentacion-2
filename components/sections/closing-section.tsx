"use client";

import { motion } from "framer-motion";
import { Mail, MessageCircle, MapPin } from "lucide-react";

import { LiquidButton } from "@/components/ui/liquid-glass-button";
import { fadeUp, stagger } from "@/lib/motion";
import { MitoSymbol } from "@/components/site/mito-symbol";
import { socials } from "@/data/content";

export function ClosingSection() {
  return (
    <section
      id="contacto"
      className="relative overflow-hidden bg-mito-blue py-28 text-white md:py-36"
    >
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute left-1/2 top-1/2 h-[640px] w-[640px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-mito-purple/30 blur-[180px]" />
        <div className="absolute -left-32 bottom-0 h-72 w-72 rounded-full bg-mito-orange/30 blur-[140px]" />
        <div className="absolute -right-20 top-10 h-72 w-72 rounded-full bg-mito-yellow/20 blur-[140px]" />
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
            <span className="caption-mito text-mito-yellow">08 · Cierre</span>
            <span className="h-px w-24 bg-white/15" />
          </motion.div>
          <motion.h2
            variants={fadeUp}
            className="display-tight mt-7 text-balance text-4xl font-semibold leading-[1.05] md:text-6xl"
          >
            “Cuando una marca se encuentra con las personas correctas, en el
            momento correcto y de la forma correcta, la experiencia deja de ser
            un evento y se convierte en
            <span className="text-gradient-mito"> recuerdo</span>.”
          </motion.h2>
        </motion.div>

        <motion.div
          variants={stagger}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.2 }}
          className="relative mx-auto mt-16 max-w-5xl overflow-hidden rounded-[2rem] border border-white/10 liquid-surface-strong p-8 md:p-14"
        >
          <MitoSymbol
            variant="tri"
            className="pointer-events-none absolute -right-20 -top-20 h-72 w-72 opacity-15 animate-spin-slow"
          />
          <div className="grid items-center gap-12 md:grid-cols-2">
            <div>
              <span className="caption-mito text-mito-yellow">Próximo paso</span>
              <h3 className="display-tight mt-4 text-3xl font-semibold leading-tight md:text-4xl">
                Empezá tu próximo evento con Mito.
              </h3>
              <p className="mt-4 max-w-md text-pretty text-white/75 md:text-lg">
                Contanos qué necesitás y diseñamos juntos una experiencia a la
                altura de tu marca.
              </p>
              <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                <LiquidButton asChild size="lg" variant="orange">
                  <a href="mailto:gusvignozzi@mitomkt.com">
                    <Mail className="h-4 w-4" /> Escribir por mail
                  </a>
                </LiquidButton>
                <LiquidButton asChild size="lg" variant="primary">
                  <a href="https://wa.me/5491178870751" target="_blank" rel="noreferrer">
                    <MessageCircle className="h-4 w-4" /> Hablar por WhatsApp
                  </a>
                </LiquidButton>
              </div>
            </div>

            <div className="space-y-4 text-sm text-white/80">
              {[
                {
                  icon: Mail,
                  tone: "bg-mito-purple/15 text-mito-purple",
                  label: "Mail",
                  value: "gusvignozzi@mitomkt.com",
                  href: "mailto:gusvignozzi@mitomkt.com",
                },
                {
                  icon: MessageCircle,
                  tone: "bg-mito-orange/15 text-mito-orange",
                  label: "WhatsApp",
                  value: "+54 9 11 7887 0751",
                  href: "https://wa.me/5491178870751",
                },
                {
                  icon: MapPin,
                  tone: "bg-mito-yellow/25 text-[#9c7400]",
                  label: "Ubicación",
                  value: "Buenos Aires, Argentina · Cobertura LATAM",
                },
              ].map(({ icon: Icon, tone, label, value, href }) => (
                <div key={label} className="flex items-start gap-3">
                  <span
                    className={`inline-flex h-10 w-10 items-center justify-center rounded-xl ${tone}`}
                  >
                    <Icon className="h-4 w-4" />
                  </span>
                  <div>
                    <div className="caption-mito text-white/45">{label}</div>
                    {href ? (
                      <a href={href} className="text-white hover:text-mito-yellow">
                        {value}
                      </a>
                    ) : (
                      <span className="text-white">{value}</span>
                    )}
                  </div>
                </div>
              ))}

              <div className="mt-6 flex flex-wrap items-center gap-2 border-t border-white/10 pt-6">
                {socials.map((s) => (
                  <a
                    key={s.label}
                    href={s.href}
                    target="_blank"
                    rel="noreferrer"
                    className="rounded-full border border-white/15 bg-white/[0.04] px-4 py-1.5 text-xs uppercase tracking-[0.2em] text-white/80 transition-colors hover:border-white/40 hover:text-white"
                  >
                    {s.label}
                  </a>
                ))}
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

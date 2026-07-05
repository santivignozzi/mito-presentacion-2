"use client";

import * as React from "react";
import { motion, useReducedMotion } from "framer-motion";

/**
 * Marquee infinito con palabras clave Mito. Doble pasada (reverse + forward).
 */
export function MitoMarquee({
  items,
  reverse = false,
  className,
}: {
  items: string[];
  reverse?: boolean;
  className?: string;
}) {
  const reduce = useReducedMotion();
  return (
    <div className={className}>
      <div
        className={`flex w-max gap-12 ${
          reduce ? "" : reverse ? "animate-marquee-reverse" : "animate-marquee"
        }`}
        style={{ animationDuration: "38s" }}
      >
        {[...items, ...items, ...items].map((label, i) => (
          <span
            key={`${label}-${i}`}
            className="inline-flex items-center gap-3 text-xs uppercase tracking-[0.32em] text-white/70"
          >
            <span className="h-1.5 w-1.5 rounded-full bg-mito-orange" />
            {label}
          </span>
        ))}
      </div>
    </div>
  );
}

/**
 * Grid de escenario: líneas tenues con fade, recuerda a producción / escenario.
 */
export function MitoStageGrid({ className }: { className?: string }) {
  return (
    <svg
      aria-hidden
      className={className}
      viewBox="0 0 1440 900"
      preserveAspectRatio="none"
    >
      <defs>
        <linearGradient id="gridFade" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#ffffff" stopOpacity="0" />
          <stop offset="60%" stopColor="#ffffff" stopOpacity="0.10" />
          <stop offset="100%" stopColor="#ffffff" stopOpacity="0" />
        </linearGradient>
        <radialGradient id="gridCenter" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor="#ffffff" stopOpacity="0.18" />
          <stop offset="100%" stopColor="#ffffff" stopOpacity="0" />
        </radialGradient>
      </defs>
      {Array.from({ length: 9 }).map((_, i) => (
        <line
          key={`h-${i}`}
          x1="0"
          x2="1440"
          y1={(i + 1) * 90}
          y2={(i + 1) * 90}
          stroke="url(#gridFade)"
          strokeWidth="1"
        />
      ))}
      {Array.from({ length: 13 }).map((_, i) => (
        <line
          key={`v-${i}`}
          x1={(i + 1) * 110}
          x2={(i + 1) * 110}
          y1="0"
          y2="900"
          stroke="url(#gridFade)"
          strokeWidth="1"
        />
      ))}
      <rect x="0" y="0" width="1440" height="900" fill="url(#gridCenter)" />
    </svg>
  );
}

/**
 * Haces de luz cruzando el header. Refinados, en colores Mito.
 */
export function MitoStageLights({ className }: { className?: string }) {
  return (
    <div className={className} aria-hidden>
      <div className="absolute -top-10 left-1/4 h-[260px] w-[1px] rotate-12 bg-gradient-to-b from-white/45 via-white/10 to-transparent" />
      <div className="absolute -top-10 left-1/2 h-[280px] w-[1px] rotate-3 bg-gradient-to-b from-mito-orange/70 via-mito-orange/10 to-transparent" />
      <div className="absolute -top-10 left-3/4 h-[240px] w-[1px] -rotate-12 bg-gradient-to-b from-mito-purple/70 via-mito-purple/10 to-transparent" />
      <div className="absolute -top-10 right-1/4 h-[300px] w-[1px] rotate-6 bg-gradient-to-b from-mito-yellow/55 via-mito-yellow/5 to-transparent" />
    </div>
  );
}

/**
 * Símbolo isotype grande con parallax 3D al mover el mouse.
 */
export function MitoIsotypeParallax({ className }: { className?: string }) {
  const ref = React.useRef<HTMLDivElement>(null);
  const [tilt, setTilt] = React.useState({ x: 0, y: 0 });
  const reduce = useReducedMotion();

  React.useEffect(() => {
    if (reduce) return;
    const node = ref.current;
    if (!node) return;
    const onMove = (e: MouseEvent) => {
      const rect = node.getBoundingClientRect();
      const x = (e.clientX - rect.left) / rect.width - 0.5;
      const y = (e.clientY - rect.top) / rect.height - 0.5;
      setTilt({ x: y * -8, y: x * 10 });
    };
    node.addEventListener("mousemove", onMove);
    node.addEventListener("mouseleave", () => setTilt({ x: 0, y: 0 }));
    return () => node.removeEventListener("mousemove", onMove);
  }, [reduce]);

  return (
    <div ref={ref} className={className} aria-hidden>
      <motion.svg
        viewBox="0 0 600 600"
        animate={{ rotateX: tilt.x, rotateY: tilt.y }}
        transition={{ type: "spring", stiffness: 120, damping: 14 }}
        style={{ transformStyle: "preserve-3d" }}
        className="h-full w-full"
      >
        <defs>
          <linearGradient id="isoGrad" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stopColor="#883AFF" />
            <stop offset="55%" stopColor="#F2461D" />
            <stop offset="100%" stopColor="#FFC401" />
          </linearGradient>
          <radialGradient id="isoGlow" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor="#ffffff" stopOpacity="0.25" />
            <stop offset="100%" stopColor="#ffffff" stopOpacity="0" />
          </radialGradient>
        </defs>
        <circle cx="300" cy="300" r="280" fill="url(#isoGlow)" />
        <circle
          cx="300"
          cy="300"
          r="240"
          fill="none"
          stroke="url(#isoGrad)"
          strokeWidth="22"
          strokeLinecap="round"
          strokeDasharray="380 1500"
        />
        <circle
          cx="300"
          cy="300"
          r="170"
          fill="none"
          stroke="#FFC401"
          strokeWidth="14"
          strokeLinecap="round"
          strokeDasharray="320 800"
          opacity="0.85"
        />
        <circle cx="300" cy="300" r="80" fill="#F2461D" />
        <circle cx="300" cy="300" r="36" fill="#FFC401" />
        <path
          d="M120 470 C 220 240, 380 240, 480 470"
          fill="none"
          stroke="url(#isoGrad)"
          strokeWidth="14"
          strokeLinecap="round"
          opacity="0.5"
        />
      </motion.svg>
    </div>
  );
}

/**
 * Orbitales concéntricas + punto pulsante.
 */
export function MitoOrbits({ className }: { className?: string }) {
  return (
    <div className={className} aria-hidden>
      <div className="absolute left-1/2 top-1/2 h-[520px] w-[520px] -translate-x-1/2 -translate-y-1/2 rounded-full border border-white/10" />
      <div className="absolute left-1/2 top-1/2 h-[640px] w-[640px] -translate-x-1/2 -translate-y-1/2 rounded-full border border-white/5" />
      <div className="absolute left-1/2 top-1/2 h-[800px] w-[800px] -translate-x-1/2 -translate-y-1/2 rounded-full border border-dashed border-white/10" />
      <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
        <div className="h-3 w-3 animate-pulse-soft rounded-full bg-mito-yellow shadow-[0_0_25px_8px_rgba(255,196,1,0.35)]" />
      </div>
    </div>
  );
}

/**
 * Indicador de scroll inferior con arco y línea animada.
 */
export function MitoScrollHint({ className }: { className?: string }) {
  return (
    <div className={className} aria-hidden>
      <div className="flex flex-col items-center gap-2 text-[10px] uppercase tracking-[0.32em] text-white/50">
        <span>Scroll</span>
        <span className="relative flex h-10 w-px items-start justify-center overflow-hidden bg-white/15">
          <span className="absolute top-0 h-3 w-px animate-[float_2.6s_ease-in-out_infinite] bg-white/80" />
        </span>
      </div>
    </div>
  );
}

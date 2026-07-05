"use client";

import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";

import { cn } from "@/lib/utils";

/* -------------------------------------------------------------------------- */
/*  LiquidButton                                                              */
/* -------------------------------------------------------------------------- */

const liquidbuttonVariants = cva(
  "group inline-flex items-center justify-center cursor-pointer gap-2 whitespace-nowrap rounded-full text-sm font-semibold tracking-tight transition-[color,box-shadow,transform] duration-300 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg:not([class*='size-'])]:size-4 shrink-0 outline-none focus-visible:ring-[3px] focus-visible:ring-mito-purple/40",
  {
    variants: {
      variant: {
        primary:
          "bg-white/8 text-white backdrop-blur-xl ring-1 ring-inset ring-white/25 hover:ring-mito-purple/60 hover:bg-white/14",
        accent:
          "bg-mito-purple/18 text-white ring-1 ring-inset ring-mito-purple/55 backdrop-blur-xl hover:bg-mito-purple/30",
        orange:
          "bg-mito-orange/18 text-white ring-1 ring-inset ring-mito-orange/55 backdrop-blur-xl hover:bg-mito-orange/30",
        yellow:
          "bg-mito-yellow/22 text-[#5a4300] ring-1 ring-inset ring-mito-yellow/55 backdrop-blur-xl hover:bg-mito-yellow/35",
        default: "bg-transparent text-primary",
        outline:
          "border border-input bg-background hover:bg-accent hover:text-accent-foreground",
        secondary:
          "bg-secondary text-secondary-foreground hover:bg-secondary/80",
        ghost: "hover:bg-accent hover:text-accent-foreground",
        link: "text-primary underline-offset-4 hover:underline",
      },
      size: {
        default: "h-11 px-5 has-[>svg]:px-3",
        sm: "h-9 text-xs gap-1.5 px-4 has-[>svg]:px-4",
        lg: "h-14 rounded-full px-8 has-[>svg]:px-6 text-base",
        xl: "h-16 rounded-full px-10 has-[>svg]:px-8 text-lg",
        xxl: "h-[72px] rounded-full px-12 has-[>svg]:px-10 text-xl",
        icon: "size-11",
      },
    },
    defaultVariants: {
      variant: "primary",
      size: "lg",
    },
  },
);

export interface LiquidButtonProps
  extends Omit<React.ButtonHTMLAttributes<HTMLButtonElement>, "children">,
    VariantProps<typeof liquidbuttonVariants> {
  asChild?: boolean;
  children?: React.ReactNode;
}

const LiquidButton = React.forwardRef<HTMLButtonElement, LiquidButtonProps>(
  ({ className, variant, size, asChild = false, children, ...props }, ref) => {
    const Comp = asChild ? Slot : "button";

    return (
      <>
        <span className="group relative isolate inline-flex rounded-full">
          <div
            className="mito-glass-filter pointer-events-none absolute inset-0 -z-10 overflow-hidden rounded-[inherit]"
            style={{ backdropFilter: 'url("#container-glass")' }}
          />
          <div
            className={cn(
              "pointer-events-none absolute inset-0 -z-10 rounded-[inherit] transition-all duration-300",
              "shadow-[inset_0_1px_0_rgba(255,255,255,0.35),inset_0_-1px_0_rgba(0,0,0,0.25),inset_0_0_24px_rgba(255,255,255,0.06),0_10px_30px_-12px_rgba(0,0,0,0.55)]",
              "group-hover:shadow-[inset_0_1px_0_rgba(255,255,255,0.55),inset_0_-1px_0_rgba(0,0,0,0.25),inset_0_0_28px_rgba(255,255,255,0.10),0_18px_50px_-12px_rgba(0,0,0,0.65)]",
            )}
          />
          <div
            aria-hidden
            className="pointer-events-none absolute inset-0 -z-20 rounded-[inherit] opacity-0 transition-opacity duration-500 group-hover:opacity-100"
            style={{
              background:
                "linear-gradient(120deg, rgba(136,58,255,0.0), rgba(242,70,29,0.35), rgba(255,196,1,0.0))",
            }}
          />
          <Comp
            data-slot="liquid-button"
            ref={ref}
            className={cn(
              "relative z-10 will-change-transform",
              liquidbuttonVariants({ variant, size, className }),
            )}
            {...props}
          >
            {children}
          </Comp>
        </span>
        <GlassFilter />
      </>
    );
  },
);
LiquidButton.displayName = "LiquidButton";

function GlassFilter() {
  return (
    <svg className="hidden" aria-hidden>
      <defs>
        <filter
          id="container-glass"
          x="0%"
          y="0%"
          width="100%"
          height="100%"
          colorInterpolationFilters="sRGB"
        >
          <feTurbulence
            type="fractalNoise"
            baseFrequency="0.05 0.05"
            numOctaves="1"
            seed="1"
            result="turbulence"
          />
          <feGaussianBlur in="turbulence" stdDeviation="2" result="blurredNoise" />
          <feDisplacementMap
            in="SourceGraphic"
            in2="blurredNoise"
            scale="70"
            xChannelSelector="R"
            yChannelSelector="B"
            result="displaced"
          />
          <feGaussianBlur in="displaced" stdDeviation="4" result="finalBlur" />
          <feComposite in="finalBlur" in2="finalBlur" operator="over" />
        </filter>
      </defs>
    </svg>
  );
}

/* -------------------------------------------------------------------------- */
/*  MetalButton                                                               */
/* -------------------------------------------------------------------------- */

type ColorVariant =
  | "default"
  | "mitoBlue"
  | "mitoPurple"
  | "mitoOrange"
  | "mitoYellow"
  | "gold";

interface MetalButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: ColorVariant;
}

const metalColors: Record<
  ColorVariant,
  {
    outer: string;
    inner: string;
    button: string;
    textColor: string;
    textShadow: string;
    glow: string;
  }
> = {
  default: {
    outer: "bg-gradient-to-b from-[#000] to-[#A0A0A0]",
    inner: "bg-gradient-to-b from-[#FAFAFA] via-[#3E3E3E] to-[#E5E5E5]",
    button: "bg-gradient-to-b from-[#B9B9B9] to-[#969696]",
    textColor: "text-white",
    textShadow: "[text-shadow:_0_-1px_0_rgb(80_80_80_/_100%)]",
    glow: "shadow-[0_18px_50px_-12px_rgba(0,0,0,0.5)]",
  },
  mitoBlue: {
    outer: "bg-gradient-to-b from-[#000814] to-[#0a4368]",
    inner: "bg-gradient-to-b from-[#0d5680] via-[#052941] to-[#0a4368]",
    button: "bg-gradient-to-b from-[#1a6fa6] to-[#052941]",
    textColor: "text-white",
    textShadow: "[text-shadow:_0_-1px_0_rgb(2_18_28_/_100%)]",
    glow: "shadow-[0_18px_50px_-12px_rgba(5,41,65,0.7)]",
  },
  mitoPurple: {
    outer: "bg-gradient-to-b from-[#1a0033] to-[#6e1ee0]",
    inner: "bg-gradient-to-b from-[#a25dff] via-[#883AFF] to-[#5a14b0]",
    button: "bg-gradient-to-b from-[#a25dff] to-[#7423ec]",
    textColor: "text-white",
    textShadow: "[text-shadow:_0_-1px_0_rgb(36_4_78_/_100%)]",
    glow: "shadow-[0_18px_50px_-12px_rgba(136,58,255,0.7)]",
  },
  mitoOrange: {
    outer: "bg-gradient-to-b from-[#5a1300] to-[#f2461d]",
    inner: "bg-gradient-to-b from-[#ff8a6b] via-[#F2461D] to-[#7a1f0a]",
    button: "bg-gradient-to-b from-[#ff7a55] to-[#d8390f]",
    textColor: "text-white",
    textShadow: "[text-shadow:_0_-1px_0_rgb(78_18_4_/_100%)]",
    glow: "shadow-[0_18px_50px_-12px_rgba(242,70,29,0.75)]",
  },
  mitoYellow: {
    outer: "bg-gradient-to-b from-[#5a4300] to-[#FFC401]",
    inner: "bg-gradient-to-b from-[#FFEC9C] via-[#FFC401] to-[#9c7400]",
    button: "bg-gradient-to-b from-[#FFE070] to-[#c69b00]",
    textColor: "text-[#3a2b00]",
    textShadow: "[text-shadow:_0_-1px_0_rgb(255_255_255_/_60%)]",
    glow: "shadow-[0_18px_50px_-12px_rgba(255,196,1,0.6)]",
  },
  gold: {
    outer: "bg-gradient-to-b from-[#917100] to-[#EAD98F]",
    inner: "bg-gradient-to-b from-[#FFFDDD] via-[#856807] to-[#FFF1B3]",
    button: "bg-gradient-to-b from-[#FFEBA1] to-[#9B873F]",
    textColor: "text-[#FFFDE5]",
    textShadow: "[text-shadow:_0_-1px_0_rgb(178_140_2_/_100%)]",
    glow: "shadow-[0_18px_50px_-12px_rgba(178,140,2,0.55)]",
  },
};

export { LiquidButton, liquidbuttonVariants };

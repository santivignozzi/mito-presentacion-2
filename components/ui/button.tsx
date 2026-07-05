import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";

import { cn } from "@/lib/utils";

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-full text-sm font-medium tracking-tight ring-offset-background transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 select-none",
  {
    variants: {
      variant: {
        default:
          "bg-mito-blue text-white hover:bg-[#063653] shadow-[0_10px_30px_-12px_rgba(5,41,65,0.7)]",
        orange:
          "bg-mito-orange text-white hover:bg-[#d8390f] shadow-[0_10px_30px_-10px_rgba(242,70,29,0.7)]",
        purple:
          "bg-mito-purple text-white hover:bg-[#7423ec] shadow-[0_10px_30px_-10px_rgba(136,58,255,0.65)]",
        outline:
          "border border-white/25 bg-white/5 text-white backdrop-blur hover:bg-white/10 hover:border-white/40",
        ghost: "bg-transparent text-mito-blue hover:bg-mito-blue/5",
        link: "text-mito-purple underline-offset-4 hover:underline",
        softPurple:
          "bg-mito-purple/12 text-mito-purple hover:bg-mito-purple/20 border border-mito-purple/25",
        softOrange:
          "bg-mito-orange/12 text-mito-orange hover:bg-mito-orange/20 border border-mito-orange/25",
        softYellow:
          "bg-mito-yellow/18 text-[#9c7400] hover:bg-mito-yellow/30 border border-mito-yellow/45",
        softBlue:
          "bg-mito-blue/8 text-mito-blue hover:bg-mito-blue/14 border border-mito-blue/20",
        white:
          "bg-white text-mito-blue hover:bg-white/95 shadow-[0_10px_30px_-12px_rgba(255,255,255,0.45)]",
      },
      size: {
        default: "h-11 px-6",
        sm: "h-9 px-4 text-xs",
        lg: "h-14 px-8 text-base",
        xl: "h-16 px-10 text-lg",
        icon: "h-11 w-11",
      },
    },
    defaultVariants: { variant: "default", size: "default" },
  }
);

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "button";
    return (
      <Comp
        className={cn(buttonVariants({ variant, size, className }))}
        ref={ref}
        {...props}
      />
    );
  }
);
Button.displayName = "Button";

export { Button, buttonVariants };

"use client";

import Image from "next/image";
import { cn } from "@/lib/utils";

type LogoVariant = "light" | "dark" | "color" | "inverse";

const variantMap: Record<LogoVariant, string> = {
  light: "/logos/mito-logo-blanco.png",
  dark: "/logos/mito-logo-negro.png",
  color: "/logos/mito-logo-estandar.png",
  inverse: "/logos/mito-logo-fndoscuro.png",
};

export function MitoLogo({
  variant = "color",
  className,
  priority = false,
  width = 220,
  height = 82,
  alt = "Mito Marketing",
}: {
  variant?: LogoVariant;
  className?: string;
  priority?: boolean;
  width?: number;
  height?: number;
  alt?: string;
}) {
  return (
    <Image
      src={variantMap[variant]}
      alt={alt}
      width={width}
      height={height}
      priority={priority}
      className={cn("h-auto w-auto max-w-full", className)}
    />
  );
}

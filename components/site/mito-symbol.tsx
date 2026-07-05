import * as React from "react";

/**
 * Reusable abstract symbol inspired by the Mito isotype.
 * Curves, arcs and motion to represent connection and energy.
 */
export function MitoSymbol({
  className,
  variant = "violet",
}: {
  className?: string;
  variant?: "violet" | "orange" | "yellow" | "tri";
}) {
  if (variant === "tri") {
    return (
      <svg
        viewBox="0 0 200 200"
        xmlns="http://www.w3.org/2000/svg"
        className={className}
        aria-hidden
      >
        <defs>
          <linearGradient id="mitoTri" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stopColor="#883AFF" />
            <stop offset="60%" stopColor="#F2461D" />
            <stop offset="100%" stopColor="#FFC401" />
          </linearGradient>
        </defs>
        <circle cx="100" cy="100" r="86" fill="none" stroke="url(#mitoTri)" strokeWidth="14" strokeLinecap="round" strokeDasharray="220 540" />
        <circle cx="100" cy="100" r="48" fill="none" stroke="#FFC401" strokeWidth="14" strokeLinecap="round" strokeDasharray="150 320" />
        <circle cx="100" cy="100" r="14" fill="#F2461D" />
      </svg>
    );
  }

  const palette =
    variant === "orange"
      ? { a: "#F2461D", b: "#FFC401" }
      : variant === "yellow"
        ? { a: "#FFC401", b: "#F2461D" }
        : { a: "#883AFF", b: "#F2461D" };

  return (
    <svg
      viewBox="0 0 200 200"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-hidden
    >
      <defs>
        <linearGradient id={`grad-${variant}`} x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor={palette.a} />
          <stop offset="100%" stopColor={palette.b} />
        </linearGradient>
      </defs>
      <path
        d="M30 150 C 60 60, 140 60, 170 150"
        fill="none"
        stroke={`url(#grad-${variant})`}
        strokeWidth="16"
        strokeLinecap="round"
      />
      <circle cx="30" cy="150" r="10" fill={palette.a} />
      <circle cx="170" cy="150" r="10" fill={palette.b} />
    </svg>
  );
}

/**
 * Decorative arc divider inspired by the Mito isotype curve.
 */
export function MitoArc({
  className,
  colors = ["#883AFF", "#F2461D", "#FFC401"],
}: {
  className?: string;
  colors?: [string, string, string];
}) {
  const [a, b, c] = colors;
  const id = React.useId();
  return (
    <svg
      viewBox="0 0 1440 200"
      xmlns="http://www.w3.org/2000/svg"
      preserveAspectRatio="none"
      className={className}
      aria-hidden
    >
      <defs>
        <linearGradient id={`arc-${id}`} x1="0" y1="0" x2="1" y2="0">
          <stop offset="0%" stopColor={a} stopOpacity="0.0" />
          <stop offset="30%" stopColor={a} stopOpacity="0.9" />
          <stop offset="65%" stopColor={b} stopOpacity="0.9" />
          <stop offset="100%" stopColor={c} stopOpacity="0.0" />
        </linearGradient>
      </defs>
      <path
        d="M0 160 C 240 40, 480 40, 720 160 S 1200 40, 1440 160"
        fill="none"
        stroke={`url(#arc-${id})`}
        strokeWidth="3"
        strokeLinecap="round"
      />
      <circle cx="240" cy="74" r="5" fill={a} />
      <circle cx="720" cy="160" r="6" fill={b} />
      <circle cx="1200" cy="74" r="5" fill={c} />
    </svg>
  );
}

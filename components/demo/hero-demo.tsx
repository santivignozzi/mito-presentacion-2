import { LiquidButton } from "@/components/ui/liquid-glass-button";

export default function HeroDemo() {
  return (
    <div className="relative h-[200px] w-full bg-mito-blue">
      <LiquidButton
        className="absolute top-1/2 left-1/2 z-10 -translate-x-1/2 -translate-y-1/2"
        variant="orange"
      >
        Liquid Glass Mito
      </LiquidButton>
    </div>
  );
}

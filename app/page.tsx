import { AnimatedHero } from "@/components/ui/animated-hero";
import { AboutSection } from "@/components/sections/about-section";
import { ServicesSection } from "@/components/sections/services-section";
import { ProcessSection } from "@/components/sections/process-section";
import { ManifestoSection } from "@/components/sections/manifesto-section";
import { NeedsSection } from "@/components/sections/needs-section";
import { CasesSection } from "@/components/sections/cases-section";
import { WhySection } from "@/components/sections/why-section";
import { ClosingSection } from "@/components/sections/closing-section";
import { SiteFooter } from "@/components/sections/site-footer";
import { SiteNav } from "@/components/site/site-nav";

export default function Page() {
  return (
    <main className="relative">
      <SiteNav />
      <AnimatedHero />
      <AboutSection />
      <ServicesSection />
      <ProcessSection />
      <ManifestoSection />
      <NeedsSection />
      <CasesSection />
      <WhySection />
      <ClosingSection />
      <SiteFooter />
    </main>
  );
}

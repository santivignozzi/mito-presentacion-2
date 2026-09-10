import { AnimatedHero } from "@/components/ui/animated-hero";
import { AboutSection } from "@/components/sections/about-section";
import { ServicesSection } from "@/components/sections/services-section";
import { ProcessSection } from "@/components/sections/process-section";
import { ManifestoSection } from "@/components/sections/manifesto-section";
import { NeedsSection } from "@/components/sections/needs-section";
import { CasesSection } from "@/components/sections/cases-section";
import { ClientsSection } from "@/components/sections/clients-section";
import { WhySection } from "@/components/sections/why-section";
import { FaqSection } from "@/components/sections/faq-section";
import { ClosingSection } from "@/components/sections/closing-section";
import { SiteFooter } from "@/components/sections/site-footer";
import { SiteNav } from "@/components/site/site-nav";
import { WhatsAppFloat } from "@/components/site/whatsapp-float";
import { faqs } from "@/data/content";
import { CONTENT_UPDATED, SITE_URL } from "@/lib/site";

const faqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "@id": `${SITE_URL}/#faq`,
  inLanguage: "es-AR",
  dateModified: CONTENT_UPDATED,
  about: { "@id": `${SITE_URL}/#organization` },
  mainEntity: faqs.map((faq) => ({
    "@type": "Question",
    name: faq.question,
    acceptedAnswer: { "@type": "Answer", text: faq.answer },
  })),
};

export default function Page() {
  return (
    <main className="relative">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />
      <SiteNav />
      <AnimatedHero />
      <AboutSection />
      <ServicesSection />
      <ProcessSection />
      <ManifestoSection />
      <NeedsSection />
      <CasesSection />
      <ClientsSection />
      <WhySection />
      <FaqSection />
      <ClosingSection />
      <SiteFooter />
      <WhatsAppFloat />
    </main>
  );
}

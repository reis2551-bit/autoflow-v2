import type { Metadata } from "next";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { StickyContactBar } from "@/components/layout/StickyContactBar";
import { HeroSection } from "@/components/sections/HeroSection";
import { NicheSelectorSection } from "@/components/sections/NicheSelectorSection";
import { ProblemSection } from "@/components/sections/ProblemSection";
import { ROISection } from "@/components/sections/ROISection";
import { SolutionSection } from "@/components/sections/SolutionSection";
import { WhatsAppDemoSection } from "@/components/sections/WhatsAppDemoSection";
import { ComparisonSection } from "@/components/sections/ComparisonSection";
import { CaseAnchorSection } from "@/components/sections/CaseAnchorSection";
import { PricingSection } from "@/components/sections/PricingSection";
import { FAQShortSection } from "@/components/sections/FAQShortSection";
import { ScarcityBand } from "@/components/sections/ScarcityBand";
import { FinalCTASection } from "@/components/sections/FinalCTASection";
import { siteConfig } from "@/config/site";

export const metadata: Metadata = {
  title: `${siteConfig.name} — ${siteConfig.tagline}`,
  description: siteConfig.description,
};

export default function HomePage() {
  return (
    <>
      <Navbar />
      <main id="main-content">
        <HeroSection />
        <NicheSelectorSection />
        <ProblemSection />
        <ROISection />
        <SolutionSection />
        <WhatsAppDemoSection />
        <ComparisonSection />
        <CaseAnchorSection />
        <PricingSection />
        <FAQShortSection />
        <ScarcityBand />
        <FinalCTASection />
      </main>
      <Footer />
      <StickyContactBar />
    </>
  );
}

import type { Metadata } from "next";
import { SITE_URL } from "@/lib/config";
import { HomeHero } from "@/components/home/HomeHero";
import { MarqueeStrip } from "@/components/home/MarqueeStrip";
import { ProblemSection } from "@/components/home/ProblemSection";
import { FlowSection } from "@/components/home/FlowSection";
import { MindsetSection } from "@/components/home/MindsetSection";
import { ProductActionSection } from "@/components/home/ProductActionSection";
import { IntegrationsHomeSection } from "@/components/home/IntegrationsHomeSection";
import { ToolkitSection } from "@/components/home/ToolkitSection";
import { HomePricingSection } from "@/components/home/HomePricingSection";
import { MobileExperienceSection } from "@/components/home/MobileExperienceSection";
import { FaqHomeSection } from "@/components/home/FaqHomeSection";
import { ClosingCtaSection } from "@/components/home/ClosingCtaSection";

// Title, description and social cards come from the root layout defaults.
export const metadata: Metadata = { alternates: { canonical: SITE_URL } };

export default function HomePage() {
  return (
    <div className="relative">
      <HomeHero />
      <MarqueeStrip />
      <ProblemSection />
      <FlowSection />
      <MindsetSection />
      <ProductActionSection />
      <IntegrationsHomeSection />
      <ToolkitSection />
      <HomePricingSection />
      <MobileExperienceSection />
      <FaqHomeSection />
      <ClosingCtaSection />
    </div>
  );
}

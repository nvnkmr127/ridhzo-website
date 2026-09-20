import { HeroSection } from "@/components/marketing/HeroSection";
import { SpeedComparison } from "@/components/marketing/SpeedComparison";
import { FeatureShowcase } from "@/components/marketing/FeatureShowcase";
import { PipelinePreview } from "@/components/marketing/PipelinePreview";
import { SolutionsSection } from "@/components/marketing/SolutionsSection";
import { AboutUsSection } from "@/components/marketing/AboutUsSection";
import { PricingSection } from "@/components/marketing/PricingSection";
import { FaqSection } from "@/components/marketing/FaqSection";
import { ContactUsSection } from "@/components/marketing/ContactUsSection";
import { CtaBanner } from "@/components/marketing/CtaBanner";

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <SpeedComparison />
      <FeatureShowcase />
      <PipelinePreview />
      <SolutionsSection />
      <AboutUsSection />
      <PricingSection />
      <FaqSection />
      <ContactUsSection />
      <CtaBanner />
    </>
  );
}



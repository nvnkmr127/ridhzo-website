import type { Metadata } from "next";
import { SITE_URL } from "@/lib/config";
import { HomeHero } from "@/components/home/HomeHero";
import { JourneySection } from "@/components/home/JourneySection";
import { FlowSection } from "@/components/home/FlowSection";
import { LeadManagementSection } from "@/components/home/LeadManagementSection";
import { PipelineSection } from "@/components/home/PipelineSection";
import { FollowUpSection } from "@/components/home/FollowUpSection";
import { IntegrationsHomeSection } from "@/components/home/IntegrationsHomeSection";
import { InsightsSection } from "@/components/home/InsightsSection";
import { WhySection } from "@/components/home/WhySection";
import { UseCasesHomeSection } from "@/components/home/UseCasesHomeSection";
import { PricingPlans } from "@/components/site/PricingPlans";
import { FaqHomeSection } from "@/components/home/FaqHomeSection";
import { SiteCta } from "@/components/site/SiteCta";
import { PageGlows } from "@/components/site/primitives";

// Title, description and social cards come from the root layout defaults.
export const metadata: Metadata = { alternates: { canonical: SITE_URL } };

export default function HomePage() {
  return (
    <div className="relative">
      <PageGlows />
      <HomeHero />
      <JourneySection />
      <FlowSection />
      <LeadManagementSection />
      <PipelineSection />
      <FollowUpSection />
      <IntegrationsHomeSection />
      <InsightsSection />
      <WhySection />
      <UseCasesHomeSection />
      <PricingPlans />
      <FaqHomeSection />
      <SiteCta secondary={{ href: "#journey", label: "See How It Works" }} />
    </div>
  );
}

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
import { PricingHomeSection } from "@/components/home/PricingHomeSection";
import { FaqHomeSection } from "@/components/home/FaqHomeSection";
import { FinalCtaSection } from "@/components/home/FinalCtaSection";

export default function HomePage() {
  return (
    <>
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
      <PricingHomeSection />
      <FaqHomeSection />
      <FinalCtaSection />
    </>
  );
}

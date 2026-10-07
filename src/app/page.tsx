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

/** Atmospheric dark-green glows from the Figma page background (Ellipse 5, Vector 4/5/6). */
function PageGlows() {
  return (
    <div className="pointer-events-none absolute inset-0 hidden overflow-hidden lg:block" aria-hidden="true">
      <div className="absolute left-[56%] top-[32%] h-[527px] w-[956px] rotate-[29deg] bg-brand-deep blur-[150px]" />
      <div className="absolute left-[40%] top-[31.5%] h-[328px] w-[622px] rotate-[37deg] bg-brand-deep blur-[150px]" />
      <div className="absolute left-[43%] top-[32.5%] h-[273px] w-[517px] rotate-[37deg] bg-brand-deep blur-[100px]" />
      <div className="absolute -left-[22%] top-[19%] h-[527px] w-[800px] rotate-[171deg] bg-brand-deep blur-[150px]" />
    </div>
  );
}

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
      <PricingHomeSection />
      <FaqHomeSection />
      <FinalCtaSection />
    </div>
  );
}

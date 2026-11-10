import { SITE_URL } from "@/lib/config";
import { pageMetadata } from "@/lib/metadata";
import { PLANS } from "@/lib/plans";
import { PricingHeroSection } from "@/components/pricing/PricingHeroSection";
import { PricingPlansSection } from "@/components/pricing/PricingPlansSection";
import { PricingComparison } from "@/components/marketing/PricingComparison";
import { PricingLogicSection } from "@/components/pricing/PricingLogicSection";
import { PricingFaq } from "@/components/marketing/PricingFaq";
import { ClosingCtaSection } from "@/components/home/ClosingCtaSection";

export const metadata = pageMetadata({
  title: "Pricing",
  description:
    "Simple, transparent pricing for Ridhzo — start free forever with Meta Lead Ads capture, instant push alerts, and automations. Paid plans from ₹249/month for your whole team — not per user. 14-day free trial, no card required.",
  path: "/pricing",
  ogTitle: "Ridhzo Pricing — Plans That Pay for Themselves",
});

const productJsonLd = {
  "@context": "https://schema.org",
  "@type": "Product",
  name: "Ridhzo — Mobile-First Lead Management CRM",
  description:
    "Speed-to-lead CRM: capture leads instantly, get push alerts, follow up in 1 tap on WhatsApp, and manage your pipeline offline.",
  brand: { "@type": "Brand", name: "Ridhzo" },
  url: `${SITE_URL}/pricing`,
  offers: PLANS.map((p) => ({
    "@type": "Offer",
    name: p.name,
    price: String(p.monthly),
    priceCurrency: "INR",
    availability: "https://schema.org/InStock",
    url: `${SITE_URL}/pricing`,
  })),
};

export default function PricingPage() {
  return (
    <div className="relative">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(productJsonLd) }} />
      <PricingHeroSection />
      <PricingPlansSection />
      <PricingComparison />
      <PricingLogicSection />
      <PricingFaq />
      <ClosingCtaSection showEyebrow={false} />
    </div>
  );
}

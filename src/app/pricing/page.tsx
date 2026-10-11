import { ShieldCheck, CreditCard, XCircle, Gift } from "lucide-react";
import { SITE_URL } from "@/lib/config";
import { pageMetadata } from "@/lib/metadata";
import { PLANS } from "@/lib/plans";
import { PageHero } from "@/components/site/PageHero";
import { PricingPlans } from "@/components/site/PricingPlans";
import { SiteCta } from "@/components/site/SiteCta";
import { Accent, PageGlows } from "@/components/site/primitives";
import { PricingComparison } from "@/components/marketing/PricingComparison";
import { PricingFaq } from "@/components/marketing/PricingFaq";

export const metadata = pageMetadata({
  title: "Pricing",
  description:
    "Simple, transparent pricing for Ridhzo — start free forever with Meta Lead Ads capture, instant push alerts, and automations. Paid plans from ₹249/month for your whole team — not per user. 14-day free trial, no card required.",
  path: "/pricing",
  ogTitle: "Ridhzo Pricing — Plans That Pay for Themselves",
});

const TRUST = [
  { icon: Gift, label: "Free plan forever" },
  { icon: CreditCard, label: "No card to start" },
  { icon: XCircle, label: "Cancel anytime" },
  { icon: ShieldCheck, label: "Workspace-isolated data" },
];

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
      <PageGlows />
      <PageHero
        align="center"
        eyebrow="Simple pricing"
        title={
          <>
            Start free. Upgrade when you <Accent>grow.</Accent>
          </>
        }
        lead="One flat price for your whole team, not per user. Upgrade when you need more leads, teammates, lead sources and automations."
      >
        <ul className="mt-2 flex flex-wrap items-center justify-center gap-x-8 gap-y-2 text-sm text-white">
          {TRUST.map(({ icon: Icon, label }) => (
            <li key={label} className="flex items-center gap-1.5">
              <Icon className="h-4 w-4 text-highlight" aria-hidden="true" />
              {label}
            </li>
          ))}
        </ul>
      </PageHero>
      <PricingPlans showHeader={false} />
      <PricingComparison />
      <PricingFaq />
      <SiteCta secondary={{ href: "/contact", label: "Talk to Sales" }} />
    </div>
  );
}

import type { Metadata } from "next";
import { ShieldCheck, CreditCard, XCircle, Sparkles } from "lucide-react";
import { PricingSection } from "@/components/marketing/PricingSection";
import { PricingComparison } from "@/components/marketing/PricingComparison";
import { PricingFaq } from "@/components/marketing/PricingFaq";
import { CtaBanner } from "@/components/marketing/CtaBanner";

const SITE_URL = "https://ridhzo.com";

export const metadata: Metadata = {
  title: "Pricing",
  description:
    "Simple, transparent pricing for Ridhzo — start free forever, or unlock instant Meta Lead Ads capture, push alerts, and automations from ₹199/user/month. 14-day free trial, no card required.",
  alternates: { canonical: "/pricing" },
  openGraph: {
    title: "Ridhzo Pricing — Plans That Pay for Themselves",
    description:
      "Start free forever, then scale as your pipeline grows. Per-user pricing, 14-day free trial, cancel anytime.",
    url: `${SITE_URL}/pricing`,
    type: "website",
  },
};

const TRUST = [
  { icon: Sparkles, label: "Free plan forever" },
  { icon: CreditCard, label: "No card to start" },
  { icon: XCircle, label: "Cancel anytime" },
  { icon: ShieldCheck, label: "AES-256 encrypted" },
];

// Product + Offers structured data (prices mirror PricingSection monthly rates).
const productJsonLd = {
  "@context": "https://schema.org",
  "@type": "Product",
  name: "Ridhzo — Mobile-First Lead Management CRM",
  description:
    "Speed-to-lead CRM: capture leads instantly, get vibrating push alerts, follow up in 1 tap on WhatsApp, and manage your pipeline offline.",
  brand: { "@type": "Brand", name: "Ridhzo" },
  url: `${SITE_URL}/pricing`,
  offers: [
    { "@type": "Offer", name: "Free", price: "0", priceCurrency: "INR", url: `${SITE_URL}/pricing` },
    { "@type": "Offer", name: "Starter", price: "249", priceCurrency: "INR", url: `${SITE_URL}/pricing` },
    { "@type": "Offer", name: "Unlimited", price: "449", priceCurrency: "INR", url: `${SITE_URL}/pricing` },
  ],
};

export default function PricingPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(productJsonLd) }}
      />

      {/* Page hero — owns the H1 */}
      <header className="border-b border-border bg-card/40 py-14 sm:py-20">
        <div className="mx-auto max-w-3xl px-4 text-center sm:px-6 lg:px-8">
          <p className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">
            Pricing
          </p>
          <h1 className="mt-2 text-3xl font-extrabold tracking-tight text-foreground sm:text-5xl">
            Simple pricing that scales with your pipeline
          </h1>
          <p className="mt-4 text-sm leading-relaxed text-muted-foreground sm:text-lg">
            Start free forever. Upgrade when you need instant Meta Lead Ads capture, push
            alerts, and automations — one closed deal pays for the whole year.
          </p>

          <ul className="mt-8 flex flex-wrap items-center justify-center gap-x-5 gap-y-2 text-xs text-muted-foreground">
            {TRUST.map(({ icon: Icon, label }) => (
              <li key={label} className="flex items-center gap-1.5">
                <Icon className="h-3.5 w-3.5 text-foreground" aria-hidden="true" />
                <span>{label}</span>
              </li>
            ))}
          </ul>
        </div>
      </header>

      <PricingSection showHeader={false} />
      <PricingComparison />
      <PricingFaq />
      <CtaBanner />
    </>
  );
}

import { FaqAccordion, type FaqItem } from "@/components/site/FaqAccordion";
import { Accent } from "@/components/site/primitives";
import { getPlan, inr } from "@/lib/plans";

const starter = getPlan("starter");
const unlimited = getPlan("unlimited");

/** Objection-handling FAQ for the pricing page (FAQPage JSON-LD comes from FaqAccordion). */
const FAQS: FaqItem[] = [
  {
    q: "Is there really a free plan?",
    a: "Yes. The Free plan is free forever — up to 300 leads, a full mobile pipeline, 1-tap WhatsApp, Android call logging and offline lead capture. No credit card required to start.",
  },
  {
    q: "How does the 14-day trial work?",
    a: "Every new workspace starts with a 14-day trial of the Starter plan — no card needed. When the trial ends, your workspace moves to the Free plan automatically unless you subscribe, and nothing is deleted.",
  },
  {
    q: "Is pricing per user or per company?",
    a: `Per company. You pay one flat monthly price for your workspace, not per user. Starter (${inr(
      starter.monthly,
    )}/month) includes up to 3 seats; Unlimited (${inr(unlimited.monthly)}/month) has unlimited seats for larger brokerages and agencies.`,
  },
  {
    q: "What counts toward my lead limit?",
    a: "Every lead in your workspace counts, whatever its status. Leads you delete (to the recycle bin) don't count. If you reach the limit, nothing is deleted — you just can't add new leads until you upgrade.",
  },
  {
    q: "Can I switch plans or cancel later?",
    a: "Any time. Upgrade, downgrade, or cancel from your workspace billing settings.",
    link: { href: "/refund-policy", label: "Cancellation & Refund Policy" },
  },
  {
    q: "What payment methods do you accept?",
    a: "UPI, credit and debit cards, and net banking, handled securely by Razorpay. Prices exclude 18% GST, and every payment gets a GST invoice. Your card details are never stored on our servers.",
  },
  {
    q: "Is my data secure?",
    a: "Yes — every workspace is kept completely separate from others, sensitive secrets such as API keys and email passwords are encrypted with AES-256, and deleted leads stay in a 30-day recycle bin.",
    link: { href: "/security", label: "Read about security" },
  },
];

export function PricingFaq() {
  return (
    <FaqAccordion
      items={FAQS}
      eyebrow="Pricing FAQ"
      title={
        <>
          Pricing questions, <Accent>answered.</Accent>
        </>
      }
      lead="Still unsure? Our team is happy to help you pick the right plan."
    />
  );
}

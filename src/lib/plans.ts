import { appUrl } from "@/lib/config";

/**
 * Single source of truth for Ridhzo plans. The homepage and /pricing cards, the comparison table,
 * the Product JSON-LD and the pricing FAQs all read from here, so prices and entitlements can't drift.
 * Facts must match the product KB (see content/README.md).
 */

export type PlanId = "free" | "starter" | "unlimited";

export interface Plan {
  id: PlanId;
  name: string;
  /** INR per month on monthly billing. */
  monthly: number;
  /** INR per year on yearly billing (10× monthly = 2 months free). */
  yearly: number;
  banner: string | null;
  /** Plan-specific limits and extras shown at the top of the card. */
  highlights: string[];
  cta: string;
  href: string;
  primary: boolean;
}

/** Included on every plan. */
export const SHARED_FEATURES = [
  "Instant push alerts + 1-tap WhatsApp",
  "Kanban pipeline + follow-ups + meetings",
  "Web + mobile + offline lead capture",
  "Android call logging + Caller ID",
  "Dashboards + SLA tracking + team leaderboards",
];

export const PLANS: readonly Plan[] = [
  {
    id: "free",
    name: "Free",
    monthly: 0,
    yearly: 0,
    banner: null,
    highlights: ["Up to 300 leads", "1 user", "1 lead source", "2 automations", "1 follow-up sequence", "15 AI credits / month"],
    cta: "Start Free Forever",
    href: appUrl("/signup"),
    primary: false,
  },
  {
    id: "starter",
    name: "Starter",
    monthly: 249,
    yearly: 2490,
    banner: "Most Popular",
    highlights: [
      "Up to 5,000 leads",
      "3 team seats",
      "5 lead sources",
      "15 automations",
      "10 follow-up sequences",
      "300 AI credits / month",
      "AI auto-tagging of incoming replies",
      "Remove “Powered by Ridhzo” from forms",
    ],
    cta: "Start 14-Day Free Trial",
    href: appUrl("/signup?plan=starter"),
    primary: true,
  },
  {
    id: "unlimited",
    name: "Unlimited",
    monthly: 449,
    yearly: 4490,
    banner: "Best Value",
    highlights: [
      "Unlimited leads",
      "Unlimited team seats",
      "Unlimited lead sources",
      "Unlimited automations",
      "Unlimited follow-up sequences",
      "2,000 AI credits / month",
      "AI auto-tagging of incoming replies",
      "Remove “Powered by Ridhzo” from forms",
    ],
    cta: "Go Unlimited",
    href: appUrl("/signup?plan=unlimited"),
    primary: false,
  },
];

export function getPlan(id: PlanId): Plan {
  return PLANS.find((p) => p.id === id)!;
}

export const inr = (n: number) => `₹${n.toLocaleString("en-IN")}`;

/** Small print shown under every set of plan cards. */
export const PRICING_FOOTNOTE =
  "Prices exclude 18% GST. Yearly plans include 2 months free. Every new workspace starts on a 14-day Starter trial — no card needed — and moves to Free unless you subscribe. Nothing is ever deleted.";

const free = getPlan("free");
const starter = getPlan("starter");
const unlimited = getPlan("unlimited");

/** One-line pricing summary reused by FAQs and metadata. */
export const PRICING_SUMMARY = `There are three plans: Free (${inr(free.monthly)}), Starter (${inr(starter.monthly)}/month, or ${inr(
  starter.yearly,
)}/year) and Unlimited (${inr(unlimited.monthly)}/month, or ${inr(
  unlimited.yearly,
)}/year). Pricing is flat per workspace, not per user. Yearly plans include 2 months free, and prices exclude 18% GST.`;

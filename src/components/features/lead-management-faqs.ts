import { PRICING_SUMMARY } from "@/lib/plans";

export const LEAD_FAQS = [
  {
    q: "Can I use Ridhzo for free?",
    a: "Yes. The Free plan is ₹0 forever and gives you a practical way to start capturing and managing inbound leads before you upgrade.",
  },
  {
    q: "Is there a trial for paid plans?",
    a: "Yes. Every new workspace starts on a 14-day Starter trial with no card required. When the trial ends it moves to the Free plan unless you subscribe, and nothing is ever deleted.",
  },
  {
    q: "How does Ridhzo pricing work?",
    a: PRICING_SUMMARY,
  },
  {
    q: "Is pricing per company or per user?",
    a: "Pricing is per workspace, and each plan includes a set number of team seats: 1 user on Free, 3 team seats on Starter and unlimited seats on Unlimited.",
  },
  {
    q: "Can my team use WhatsApp with Ridhzo?",
    a: "Yes. Tap WhatsApp on any lead and your own WhatsApp opens with the chat and a personalised template ready. You can connect the official WhatsApp Business API later for automatic welcome messages, sequences and bulk campaigns.",
  },
  {
    q: "Is my sales data secure?",
    a: "Ridhzo enforces workspace boundaries in the application on every request, and you stay in control of your data, including when it leaves Ridhzo. The security page has the full details.",
  },
  {
    q: "Are there limits on leads and automation?",
    a: "Free includes up to 300 leads and 2 automations, Starter up to 5,000 leads and 15 automations, and Unlimited has no limits on leads, lead sources, automations or follow-up sequences.",
  },
] as const;

export const LEAD_FAQ_JSON_LD = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: LEAD_FAQS.map((f) => ({
    "@type": "Question",
    name: f.q,
    acceptedAnswer: { "@type": "Answer", text: f.a },
  })),
};


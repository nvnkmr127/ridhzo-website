import { PRICING_SUMMARY } from "@/lib/plans";

export const PIPELINE_FAQS = [
  {
    q: "Can I drag leads between stages?",
    a: "Yes. The Ridhzo pipeline interface shows draggable cards and a list view.",
  },
  {
    q: "Can I open a lead from the board?",
    a: "Yes. Every card stays linked to its full lead record, owner, activity history and next action so you can open and act on it directly.",
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
] as const;

export const PIPELINE_FAQ_JSON_LD = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: PIPELINE_FAQS.map((f) => ({
    "@type": "Question",
    name: f.q,
    acceptedAnswer: { "@type": "Answer", text: f.a },
  })),
};


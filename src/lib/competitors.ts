import { getPlan, inr } from "@/lib/plans";

/**
 * Centralized competitor data — the single source of truth behind every
 * /compare/[slug] page. Keeping it here (not in each page) means a pricing or
 * positioning update propagates to all comparison pages at once.
 *
 * Accuracy note: competitor pricing and positioning are summarized from public
 * sources as of the AS_OF date below and framed fairly. Comparison pages must
 * stay honest — verify competitor claims before changing them.
 */

export const AS_OF = "September 2026";

const freePlan = getPlan("free");
const starterPlan = getPlan("starter");
const unlimitedPlan = getPlan("unlimited");

export const RIDHZO_STARTER_PRICE = inr(starterPlan.monthly);
export const RIDHZO_UNLIMITED_PRICE = inr(unlimitedPlan.monthly);
export const RIDHZO_FREE_PRICE = inr(freePlan.monthly);

export interface CompareRow {
  dimension: string;
  ridhzoTitle: string;
  ridhzoDetail: string;
  competitor: string;
}

export interface CompareFaq {
  q: string;
  a: string;
}

export interface ComparePricingCard {
  eyebrow: string;
  name: string;
  description: string;
  price: string;
  unit: string;
  exampleLabel: string;
  exampleTotal: string;
}

export interface Competitor {
  /** URL slug, e.g. "ridhzo-vs-zoho-crm". */
  slug: string;
  competitorName: string;
  /** Short label for tables/cards. */
  competitorShort: string;
  /** One-line description of what the competitor actually is. */
  competitorCategory: string;
  title: string;
  metaTitle: string;
  metaDescription: string;
  /** Crisp 2-line hero summary directly under the display H1. */
  heroSummary: string;
  /** 2–3 sentence honest summary for scanners. */
  tldr: string;
  atAGlance: CompareRow[];
  ridhzoBestFor: string[];
  competitorBestFor: string[];
  ridhzoPricingCard: ComparePricingCard;
  competitorPricingCard: ComparePricingCard;
  faqs: CompareFaq[];
}

const RIDHZO_ONE_LINER =
  "a mobile-first, WhatsApp-native lead CRM built around one job: responding to inbound leads in seconds";

const DEFAULT_RIDHZO_PRICING_CARD: ComparePricingCard = {
  eyebrow: "RIDHZO / STARTER WORKSPACE TIER",
  name: "Ridhzo.",
  description: "Built for teams that want capture, contact and follow-up in a focused workflow.",
  price: RIDHZO_STARTER_PRICE,
  unit: "/ workspace / month",
  exampleLabel: "3 users · flat workspace / month",
  exampleTotal: RIDHZO_STARTER_PRICE,
};

export const COMPETITORS: Competitor[] = [
  {
    slug: "ridhzo-vs-zoho-crm",
    competitorName: "Zoho CRM",
    competitorShort: "Zoho CRM",
    competitorCategory:
      "a broad, highly customizable CRM suite that's part of the larger Zoho ecosystem",
    title: "Ridhzo vs Zoho CRM",
    metaTitle: "Ridhzo vs Zoho CRM: Which Lead CRM Is Right for You?",
    metaDescription:
      "An honest Ridhzo vs Zoho CRM comparison for lead-driven sales teams — speed-to-lead, WhatsApp, mobile-first vs. deep customization. Pricing, features, and who each is best for.",
    heroSummary:
      "Two CRMs. Different priorities. See what changes when your team needs speed, follow-through, mobile access and room to customize.",
    tldr: `Zoho CRM is a powerful, deeply customizable CRM suite for teams that want an all-in-one system and are willing to configure it. Ridhzo is ${RIDHZO_ONE_LINER}. If you buy paid leads and win or lose on response speed from your phone, Ridhzo is purpose-built for that; if you need heavy customization and a full business suite, Zoho is the broader platform.`,
    atAGlance: [
      {
        dimension: "Product approach",
        ridhzoTitle: "Focused sales CRM",
        ridhzoDetail: "Capture, assign, contact and follow up on leads.",
        competitor: "Broad CRM platform with extensive customization and modules.",
      },
      {
        dimension: "Lead management",
        ridhzoTitle: "Lead-first workspace",
        ridhzoDetail: "Saved views, filters, ownership and next actions in the lead record.",
        competitor: "Leads, contacts, deals and additional configurable CRM modules.",
      },
      {
        dimension: "Pipeline",
        ridhzoTitle: "Visible stage movement",
        ridhzoDetail: "Kanban board built around lead progression.",
        competitor: "Deal pipeline and process management with customization options.",
      },
      {
        dimension: "WhatsApp contact",
        ridhzoTitle: "One-tap contact from a lead",
        ridhzoDetail: "Open WhatsApp directly; customer conversations are not a native Ridhzo inbox.",
        competitor: "WhatsApp options depend on enabled integrations and configuration.",
      },
      {
        dimension: "Automation",
        ridhzoTitle: "One-off actions + timed sequences",
        ridhzoDetail: "Event rules and multi-day follow-up workflows are distinct tools.",
        competitor: "Configurable automation and customer engagement capabilities.",
      },
      {
        dimension: "Mobile workflow",
        ridhzoTitle: "Sales work on the move",
        ridhzoDetail: "Lead actions, follow-ups, offline capture and Android call sync.",
        competitor: "Mobile CRM apps and related capabilities; verify the required workflow by edition.",
      },
      {
        dimension: "Reporting",
        ridhzoTitle: "Actionable pipeline insights",
        ridhzoDetail: "Lead sources, pipeline health, speed and team performance.",
        competitor: "Broad reporting and analytics across CRM modules.",
      },
      {
        dimension: "Pricing comparison",
        ridhzoTitle: "Per-seat Ridhzo plans",
        ridhzoDetail: "Compare actual seat allowances and feature limits on Pricing.",
        competitor: "Pricing varies by edition, users and billing term. Check Zoho's current pricing.",
      },
    ],
    ridhzoBestFor: [
      "Incoming leads need quick follow-through.",
      "Your team uses calls, WhatsApp and meetings every day.",
      "Lead ownership and next actions should remain clear.",
      "Salespeople work frequently on mobile.",
    ],
    competitorBestFor: [
      "You need deeply configurable business modules.",
      "Several departments require different workflows.",
      "You want a wider suite of business applications.",
      "Your team has resources for custom setup.",
    ],
    ridhzoPricingCard: {
      eyebrow: "RIDHZO / SAMPLE STARTER TIER",
      name: "Ridhzo.",
      description: "Built for teams that want capture, contact and follow-up in a focused workflow.",
      price: "₹299",
      unit: "/ user / month",
      exampleLabel: "3 users · example / month",
      exampleTotal: "₹897",
    },
    competitorPricingCard: {
      eyebrow: "ZOHO CRM / SAMPLE COMPARISON TIER",
      name: "Zoho CRM",
      description: "Broad CRM platform with prices and features depending on the selected edition.",
      price: "₹999",
      unit: "/ user / month",
      exampleLabel: "3 users · example / month",
      exampleTotal: "₹2,997",
    },
    faqs: [
      {
        q: "Can I drag leads between stages?",
        a: "Yes. The Ridhzo pipeline interface shows draggable cards and a list view.",
      },
      {
        q: "Can I open a lead from the board?",
        a: "Yes. Tap any card on the pipeline board to open the full lead profile, call history, notes, and follow-up actions.",
      },
      {
        q: "How does Ridhzo pricing work?",
        a: `Ridhzo has three plans: Free (${RIDHZO_FREE_PRICE}), Starter (${RIDHZO_STARTER_PRICE}/month), and Unlimited (${RIDHZO_UNLIMITED_PRICE}/month).`,
      },
      {
        q: "Is pricing per company or per user?",
        a: `Starter (${RIDHZO_STARTER_PRICE}/month) covers up to 3 seats and Unlimited (${RIDHZO_UNLIMITED_PRICE}/month) covers unlimited seats for your workspace.`,
      },
      {
        q: "Can my team use WhatsApp with Ridhzo?",
        a: "Yes. Open WhatsApp directly from any lead with 1-tap deep links and ready templates.",
      },
    ],
  },
  {
    slug: "ridhzo-vs-leadsquared",
    competitorName: "LeadSquared",
    competitorShort: "LeadSquared",
    competitorCategory:
      "an enterprise-grade sales-execution CRM for high-volume, distributed sales teams",
    title: "Ridhzo vs LeadSquared",
    metaTitle: "Ridhzo vs LeadSquared: Lightweight Speed-to-Lead vs Enterprise CRM",
    metaDescription:
      "Ridhzo vs LeadSquared compared honestly — mobile-first speed-to-lead for SMBs vs. enterprise sales-execution CRM with lead scoring. Pricing, features, and who each fits.",
    heroSummary:
      "Lightweight speed-to-lead vs. enterprise sales execution. See what changes when a solo agent or SMB wants fast response without a rollout project.",
    tldr: `LeadSquared is a powerful sales-execution CRM for large, high-lead-volume teams with field operations and ML lead scoring. Ridhzo is ${RIDHZO_ONE_LINER}. For big distributed sales orgs that need deep automation and can invest in onboarding, LeadSquared is built for that scale; for solo agents and small/mid teams that just need to respond fast without a rollout project, Ridhzo is lighter and quicker to value.`,
    atAGlance: [
      {
        dimension: "Product approach",
        ridhzoTitle: "Lightweight speed-to-lead CRM",
        ridhzoDetail: "Connect lead sources, get instant alerts and follow up in seconds.",
        competitor: "Enterprise sales-execution platform built for high-volume distributed teams.",
      },
      {
        dimension: "Setup & onboarding",
        ridhzoTitle: "Live the same day",
        ridhzoDetail: "Minimal configuration — start free and go live in minutes.",
        competitor: "Multi-week implementation and configuration project for enterprise workflows.",
      },
      {
        dimension: "Lead routing & alerts",
        ridhzoTitle: "Turnkey instant routing",
        ridhzoDetail: "Round-robin assignment, instant push alerts and response-time SLA built in.",
        competitor: "Rule-based lead distribution, scoring and field-ops routing inside a large suite.",
      },
      {
        dimension: "WhatsApp contact",
        ridhzoTitle: "Native 1-tap follow-up",
        ridhzoDetail: "Message any lead in one tap with templates, or connect WhatsApp API.",
        competitor: "WhatsApp messaging available via add-ons and enterprise configuration.",
      },
      {
        dimension: "Automation",
        ridhzoTitle: "Focused rules + sequences",
        ridhzoDetail: "When → If → Then triggers and multi-day follow-up sequences.",
        competitor: "Deep workflow engine, ML lead scoring and industry-specific automation.",
      },
      {
        dimension: "Mobile workflow",
        ridhzoTitle: "Built for mobile reps",
        ridhzoDetail: "Android app with auto call sync, Caller ID and offline lead capture.",
        competitor: "Full-featured mobile + field CRM designed for large field-sales fleets.",
      },
      {
        dimension: "Reporting",
        ridhzoTitle: "Speed & pipeline clarity",
        ridhzoDetail: "Response SLA, source ROI, Kanban pipeline and going-cold lists.",
        competitor: "Enterprise analytics, rep productivity tracking and custom dashboards.",
      },
      {
        dimension: "Pricing comparison",
        ridhzoTitle: "Flat workspace Ridhzo plans",
        ridhzoDetail: `Free (${RIDHZO_FREE_PRICE}), Starter ${RIDHZO_STARTER_PRICE}/mo (3 seats), Unlimited ${RIDHZO_UNLIMITED_PRICE}/mo.`,
        competitor: "Typically ~₹1,250–₹4,500/user/mo plus add-ons and onboarding.",
      },
    ],
    ridhzoBestFor: [
      "Solo agents and SMB teams that want speed without a rollout.",
      "Teams buying paid leads that compete on first-response time.",
      "WhatsApp-first, mobile-first sales motions.",
      "Budget-conscious teams that want to start free.",
    ],
    competitorBestFor: [
      "Large enterprises with high lead volume and many reps.",
      "Distributed field-sales operations needing deep automation.",
      "Teams requiring ML predictive lead scoring.",
      "Organizations ready for multi-week CRM implementation.",
    ],
    ridhzoPricingCard: DEFAULT_RIDHZO_PRICING_CARD,
    competitorPricingCard: {
      eyebrow: "LEADSQUARED / TYPICAL ENTRY TIER",
      name: "LeadSquared",
      description: "Enterprise sales-execution CRM where telephony and WhatsApp add-ons bill separately.",
      price: "~₹1,250",
      unit: "/ user / month",
      exampleLabel: "3 users · entry tier estimate / month",
      exampleTotal: "~₹3,750",
    },
    faqs: [
      {
        q: "Is Ridhzo a good LeadSquared alternative for small teams?",
        a: "Yes — LeadSquared is built for large, high-volume sales organizations and priced accordingly. If you're a solo agent or small/mid team that needs fast lead response without enterprise pricing or onboarding, Ridhzo is much lighter.",
      },
      {
        q: "Does Ridhzo have lead scoring like LeadSquared?",
        a: "Ridhzo focuses on speed-to-lead — instant capture, round-robin routing, alerts, and SLA tracking — rather than ML lead scoring. If predictive scoring across massive volumes is central, LeadSquared goes deeper there.",
      },
      {
        q: "How fast can I get started with Ridhzo vs LeadSquared?",
        a: "Ridhzo is typically live the same day: connect a lead source and go. LeadSquared implementations usually involve multi-week configuration suited to larger teams.",
      },
      {
        q: "Are WhatsApp and call logging extra add-ons on Ridhzo?",
        a: `No. 1-tap WhatsApp follow-up, Android call logging, and Caller ID are included on every Ridhzo plan, including the ${RIDHZO_FREE_PRICE} Free plan.`,
      },
    ],
  },
  {
    slug: "ridhzo-vs-kylas",
    competitorName: "Kylas",
    competitorShort: "Kylas",
    competitorCategory:
      "an SMB sales CRM known for flat, unlimited-user pricing",
    title: "Ridhzo vs Kylas",
    metaTitle: "Ridhzo vs Kylas: Speed-to-Lead CRM vs Flat Unlimited-User CRM",
    metaDescription:
      "Ridhzo vs Kylas compared — mobile-first speed-to-lead and WhatsApp vs. flat-price unlimited-user CRM. Pricing math, features, and who each is best for.",
    heroSummary:
      "Two flat-priced CRMs with very different price points. See how mobile-first speed-to-lead compares against a broad general SMB CRM.",
    tldr: `Kylas is an SMB CRM with a flat monthly price for unlimited users, Ridhzo is ${RIDHZO_ONE_LINER}, and is also flat-priced: a free plan, ₹249/month for up to 3 users, and ₹449/month for unlimited users. Kylas is a broad general CRM; Ridhzo is cheaper at any team size and purpose-built for fast lead response from mobile.`,
    atAGlance: [
      {
        dimension: "Product approach",
        ridhzoTitle: "Speed-to-lead specialization",
        ridhzoDetail: "Every screen is built around responding to new leads in seconds.",
        competitor: "Broad general-purpose SMB sales CRM with onboarding included.",
      },
      {
        dimension: "Lead capture",
        ridhzoTitle: "Instant multi-channel sync",
        ridhzoDetail: "Meta Ads, Google Lead Forms, web forms, webhooks and CSV out of the box.",
        competitor: "Lead capture forms, integrations and marketplace connectors.",
      },
      {
        dimension: "Pipeline",
        ridhzoTitle: "Kanban + Going Cold radar",
        ridhzoDetail: "Track stage movement and surface stalled leads automatically.",
        competitor: "Multi-pipeline deal management and customizable sales stages.",
      },
      {
        dimension: "WhatsApp contact",
        ridhzoTitle: "1-tap personal + API options",
        ridhzoDetail: "Launch WhatsApp directly from any lead with ready templates.",
        competitor: "WhatsApp available via marketplace integrations.",
      },
      {
        dimension: "Automation",
        ridhzoTitle: "No-code rules & cadences",
        ridhzoDetail: "Round-robin routing, instant follow-up rules and drip sequences.",
        competitor: "Workflow automation, task reminders and escalation rules.",
      },
      {
        dimension: "Mobile workflow",
        ridhzoTitle: "Mobile-first + offline outbox",
        ridhzoDetail: "Android call sync, push alerts and offline lead capture.",
        competitor: "Web-centric CRM supported by companion mobile apps.",
      },
      {
        dimension: "Unlimited users",
        ridhzoTitle: `${RIDHZO_UNLIMITED_PRICE}/mo flat unlimited`,
        ridhzoDetail: `Unlimited seats, leads and automations on Unlimited (${RIDHZO_UNLIMITED_PRICE}/mo).`,
        competitor: "Flat ~₹12,999/mo for unlimited users with dedicated onboarding.",
      },
      {
        dimension: "Entry price",
        ridhzoTitle: `Start at ${RIDHZO_FREE_PRICE} forever`,
        ridhzoDetail: `Free plan (${RIDHZO_FREE_PRICE}), then ${RIDHZO_STARTER_PRICE}/mo for up to 3 users.`,
        competitor: "Flat ~₹12,999/mo commitment from day one.",
      },
    ],
    ridhzoBestFor: [
      "Solo agents and small teams wanting to start free or lean.",
      "Speed-to-lead sales motions that live in WhatsApp.",
      "Field and mobile reps who need offline resilience.",
      "Growing teams wanting unlimited seats at ₹449/month.",
    ],
    competitorBestFor: [
      "Larger teams that want guided onboarding included.",
      "Businesses wanting a broad general-purpose SMB CRM.",
      "Teams needing multi-pipeline enterprise SMB reporting.",
      "Organizations comfortable with a ~₹12,999/month budget.",
    ],
    ridhzoPricingCard: {
      eyebrow: "RIDHZO / UNLIMITED WORKSPACE TIER",
      name: "Ridhzo.",
      description: "Flat unlimited seats, leads and automations — or start free and pay ₹249/mo for 3 seats.",
      price: RIDHZO_UNLIMITED_PRICE,
      unit: "/ workspace / month",
      exampleLabel: "Unlimited users · flat / month",
      exampleTotal: RIDHZO_UNLIMITED_PRICE,
    },
    competitorPricingCard: {
      eyebrow: "KYLAS / FLAT UNLIMITED PLAN",
      name: "Kylas",
      description: "General-purpose SMB CRM sold at a flat monthly rate with guided onboarding.",
      price: "~₹12,999",
      unit: "/ workspace / month",
      exampleLabel: "Unlimited users · flat / month",
      exampleTotal: "~₹12,999",
    },
    faqs: [
      {
        q: "Is Ridhzo or Kylas cheaper?",
        a: `Ridhzo, at any team size. Kylas charges ~₹12,999/month for unlimited users. Ridhzo is free to start (${RIDHZO_FREE_PRICE}), ${RIDHZO_STARTER_PRICE}/month for up to 3 users, and ${RIDHZO_UNLIMITED_PRICE}/month for unlimited users.`,
      },
      {
        q: "Why choose Ridhzo over a general CRM like Kylas?",
        a: "If your business wins or loses on lead-response speed, Ridhzo's specialization — instant capture, vibrating alerts, routing, 1-tap WhatsApp, and SLA tracking — is built for reps working on mobile.",
      },
      {
        q: "Do both Kylas and Ridhzo offer unlimited users?",
        a: `Yes. Kylas is known for flat unlimited-user pricing (~₹12,999/mo), and Ridhzo's Unlimited plan gives unlimited seats for ${RIDHZO_UNLIMITED_PRICE}/month (with Starter at ${RIDHZO_STARTER_PRICE}/mo for 3 seats).`,
      },
      {
        q: "Can I migrate my leads from Kylas to Ridhzo?",
        a: "Yes. Export your leads from Kylas to CSV, upload them into Ridhzo, and connect your lead ad forms or webhooks in a few minutes.",
      },
    ],
  },
  {
    slug: "ridhzo-vs-aisensy",
    competitorName: "AiSensy",
    competitorShort: "AiSensy",
    competitorCategory:
      "a WhatsApp Business API marketing platform for broadcasts, chatbots, and click-to-WhatsApp ads",
    title: "Ridhzo vs AiSensy",
    metaTitle: "Ridhzo vs AiSensy: Lead CRM vs WhatsApp Marketing Platform",
    metaDescription:
      "Ridhzo vs AiSensy compared — a speed-to-lead sales CRM with a pipeline vs. a WhatsApp broadcast & chatbot platform. Understand the difference and which you need (or both).",
    heroSummary:
      "Sales CRM pipeline vs. WhatsApp broadcast marketing. See which job each tool is built for — and when teams run both together.",
    tldr: `AiSensy and Ridhzo are actually different categories. AiSensy is a WhatsApp Business API platform for broadcasts, chatbots, and click-to-WhatsApp ads. Ridhzo is ${RIDHZO_ONE_LINER}, with a full sales pipeline. If you want to send WhatsApp campaigns at scale, AiSensy is built for that; if you want to capture leads, route them, and close deals with a pipeline, Ridhzo is the CRM. Many teams use a tool like each.`,
    atAGlance: [
      {
        dimension: "Product category",
        ridhzoTitle: "Lead CRM with sales pipeline",
        ridhzoDetail: "Capture, assign, call, WhatsApp and move deals to closed-won.",
        competitor: "WhatsApp Business API marketing, broadcast and chatbot platform.",
      },
      {
        dimension: "Core strength",
        ridhzoTitle: "Capturing & closing inbound leads",
        ridhzoDetail: "Instant rep alerts, call logging, follow-up reminders and SLAs.",
        competitor: "Bulk promotional WhatsApp broadcasts and automated chat flows.",
      },
      {
        dimension: "Sales pipeline",
        ridhzoTitle: "Visual Kanban + SLA tracking",
        ridhzoDetail: "Drag deals across stages and spot leads going cold.",
        competitor: "Not a full sales pipeline or call-tracking CRM.",
      },
      {
        dimension: "Lead capture",
        ridhzoTitle: "Meta, Google, web forms & CSV",
        ridhzoDetail: "Pulls ad and website enquiries into one unified lead inbox.",
        competitor: "Built around WhatsApp opt-ins, click-to-WhatsApp ads and contact lists.",
      },
      {
        dimension: "WhatsApp style",
        ridhzoTitle: "1-tap personal follow-up",
        ridhzoDetail: "Fast 1-on-1 rep follow-up from the lead record, plus API sequences.",
        competitor: "Official Business API one-to-many campaigns at scale.",
      },
      {
        dimension: "Mobile & calling",
        ridhzoTitle: "Android call sync + Caller ID",
        ridhzoDetail: "Logs sales calls automatically and works offline in the field.",
        competitor: "Focused on WhatsApp chat inbox rather than phone call workflows.",
      },
      {
        dimension: "Reporting",
        ridhzoTitle: "Response speed & revenue",
        ridhzoDetail: "Track team SLA, source ROI and stage conversion rates.",
        competitor: "Campaign delivery, read rates and WhatsApp chatbot analytics.",
      },
      {
        dimension: "Pricing comparison",
        ridhzoTitle: "Flat workspace Ridhzo plans",
        ridhzoDetail: `Free (${RIDHZO_FREE_PRICE}), Starter ${RIDHZO_STARTER_PRICE}/mo (3 seats), Unlimited ${RIDHZO_UNLIMITED_PRICE}/mo.`,
        competitor: "Free tier, then ~₹1,500+/mo plus WhatsApp per-message fees.",
      },
    ],
    ridhzoBestFor: [
      "Teams that need a real sales pipeline and lead routing.",
      "Speed-to-lead first contact from Meta/Google/web leads.",
      "Tracking response-time SLAs, phone calls and follow-ups.",
      "Reps closing deals personally, not just blasting campaigns.",
    ],
    competitorBestFor: [
      "Sending WhatsApp broadcasts and promotions at scale.",
      "Building no-code WhatsApp chatbots for support.",
      "Running click-to-WhatsApp ad campaigns on official API.",
      "Managing a shared multi-agent WhatsApp marketing inbox.",
    ],
    ridhzoPricingCard: DEFAULT_RIDHZO_PRICING_CARD,
    competitorPricingCard: {
      eyebrow: "AISENSY / BASIC MARKETING TIER",
      name: "AiSensy",
      description: "WhatsApp Business API broadcast and chatbot platform, plus conversation charges.",
      price: "~₹1,500",
      unit: "/ month + message fees",
      exampleLabel: "Starting paid tier / month",
      exampleTotal: "~₹1,500+",
    },
    faqs: [
      {
        q: "Is Ridhzo a replacement for AiSensy?",
        a: "Not exactly — they serve different jobs. AiSensy is a WhatsApp broadcast and chatbot platform; Ridhzo is a sales CRM with instant lead capture, call logging, and a visual pipeline. Many teams use both together.",
      },
      {
        q: "Does Ridhzo send bulk WhatsApp broadcasts like AiSensy?",
        a: "Ridhzo focuses on fast 1-tap personal follow-up tied to each lead record, plus automated follow-up sequences. For large promotional blasts on the official API, a dedicated broadcast tool like AiSensy is purpose-built.",
      },
      {
        q: "Can I use Ridhzo and AiSensy together?",
        a: "Yes. A common setup is using a WhatsApp marketing tool for bulk campaigns and Ridhzo as your sales CRM for capturing inbound leads, routing them to reps, and closing deals.",
      },
      {
        q: "How does Ridhzo pricing compare to AiSensy?",
        a: `Ridhzo has a ${RIDHZO_FREE_PRICE} free-forever plan and flat workspace tiers from ${RIDHZO_STARTER_PRICE}/month (3 seats) or ${RIDHZO_UNLIMITED_PRICE}/month (unlimited seats). AiSensy paid plans start around ₹1,500/month plus Meta's per-message fees.`,
      },
    ],
  },
];

export function getCompetitor(slug: string): Competitor | undefined {
  return COMPETITORS.find((c) => c.slug === slug);
}

export function getCompetitorSlugs(): string[] {
  return COMPETITORS.map((c) => c.slug);
}

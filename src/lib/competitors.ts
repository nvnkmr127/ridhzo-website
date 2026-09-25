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

export interface CompareRow {
  dimension: string;
  ridhzo: string;
  competitor: string;
}

export interface CompareFaq {
  q: string;
  a: string;
}

export interface CompareSection {
  heading: string;
  body: string;
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
  /** 2–3 sentence honest summary for scanners. */
  tldr: string;
  atAGlance: CompareRow[];
  narrative: CompareSection[];
  ridhzoBestFor: string[];
  competitorBestFor: string[];
  pricingNote: string;
  migration: string;
  faqs: CompareFaq[];
}

const RIDHZO_ONE_LINER =
  "a mobile-first, WhatsApp-native lead CRM built around one job: responding to inbound leads in seconds";

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
    tldr: `Zoho CRM is a powerful, deeply customizable CRM suite for teams that want an all-in-one system and are willing to configure it. Ridhzo is ${RIDHZO_ONE_LINER}. If you buy paid leads and win or lose on response speed from your phone, Ridhzo is purpose-built for that; if you need heavy customization and a full business suite, Zoho is the broader platform.`,
    atAGlance: [
      { dimension: "Best for", ridhzo: "Fast-closing SMB sales teams on their phones", competitor: "Teams wanting a customizable all-in-one suite" },
      { dimension: "Core focus", ridhzo: "Speed-to-lead & 1-tap WhatsApp", competitor: "Broad CRM + business apps" },
      { dimension: "Mobile experience", ridhzo: "Mobile-first PWA, offline-capable", competitor: "Web-first with mobile apps" },
      { dimension: "WhatsApp follow-up", ridhzo: "1-tap deep links, built-in", competitor: "Via integrations / add-ons" },
      { dimension: "Setup time", ridhzo: "Minutes", competitor: "Longer — more to configure" },
      { dimension: "Entry price", ridhzo: "Free plan, then ₹249/mo flat (3 users)", competitor: "Free for 3 users, then ~₹800+/user/mo" },
    ],
    narrative: [
      {
        heading: "Speed-to-lead",
        body: "Ridhzo is engineered so a new lead is captured, routed, and alerted in seconds, with 1-tap WhatsApp so first contact takes moments — this is the whole product. Zoho CRM can track response times and automate follow-ups, but out of the box it's a general CRM; hitting a sub-5-minute first response is something you configure rather than something the product is shaped around.",
      },
      {
        heading: "Mobile & offline",
        body: "Ridhzo is a mobile-first PWA with an offline outbox, built for reps working from the field or a showroom floor. Zoho offers capable mobile apps, but its center of gravity is the desktop web experience.",
      },
      {
        heading: "Breadth vs. focus",
        body: "This is the real trade-off. Zoho's strength is breadth and customization — modules, workflows, and a whole ecosystem (Desk, Campaigns, Analytics, and more). Ridhzo deliberately does less: it's a focused lead-response tool, not a suite. If you want one system to run your entire business, Zoho wins on breadth. If you want the fastest path from 'lead arrives' to 'rep is talking to them,' Ridhzo wins on focus.",
      },
    ],
    ridhzoBestFor: [
      "Solo agents and small/mid sales teams who live on their phones",
      "Teams that buy Meta/Google leads and compete on response speed",
      "WhatsApp-first sales motions (real estate, agencies, home services)",
      "Anyone who wants to be live in minutes, not after a setup project",
    ],
    competitorBestFor: [
      "Teams that need deep customization and many modules",
      "Companies already standardized on the Zoho ecosystem",
      "Businesses wanting CRM + support + marketing + analytics in one vendor",
    ],
    pricingNote: `As of ${AS_OF}, Zoho CRM offers a free edition for up to 3 users, with paid plans from roughly ₹800/user/month (Standard) up to ₹2,600/user/month (Ultimate) on annual billing, plus GST; the CRM Plus bundle is around ₹4,200/user/month. Ridhzo has a free-forever plan and flat workspace pricing: ₹249/month for up to 3 users, or ₹449/month for unlimited users. For a small team, Ridhzo is typically the lower-cost entry point; always check each vendor's current pricing.`,
    migration:
      "Moving from Zoho to Ridhzo is straightforward for lead data: export your leads to CSV and import them into Ridhzo, then connect your lead sources (Meta Lead Ads, web forms). Because Ridhzo is focused on lead response rather than a full suite, there's far less to reconfigure.",
    faqs: [
      { q: "Is Ridhzo cheaper than Zoho CRM?", a: "For small teams, usually yes — Ridhzo has a free-forever plan and flat pricing from ₹249/month for up to 3 users (₹449/month for unlimited users), while Zoho's paid CRM plans start around ₹800/user/month (it's free for up to 3 users). Compare current pricing for your team size before deciding." },
      { q: "Can Ridhzo do everything Zoho CRM does?", a: "No, and it isn't trying to. Zoho is a broad, customizable suite; Ridhzo is a focused speed-to-lead CRM. If you need deep customization or many business modules, Zoho is broader. If you want the fastest lead response from mobile, Ridhzo is purpose-built." },
      { q: "Does Ridhzo integrate with WhatsApp like Zoho?", a: "WhatsApp is native to Ridhzo — 1-tap deep links and templates are core, not an add-on. Zoho supports WhatsApp mainly through integrations." },
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
    tldr: `LeadSquared is a powerful sales-execution CRM for large, high-lead-volume teams with field operations and ML lead scoring. Ridhzo is ${RIDHZO_ONE_LINER}. For big distributed sales orgs that need deep automation and can invest in onboarding, LeadSquared is built for that scale; for solo agents and small/mid teams that just need to respond fast without a rollout project, Ridhzo is lighter and quicker to value.`,
    atAGlance: [
      { dimension: "Best for", ridhzo: "Solo agents & small/mid sales teams", competitor: "Large, high-volume distributed teams" },
      { dimension: "Core focus", ridhzo: "Speed-to-lead & 1-tap WhatsApp", competitor: "Sales execution, lead scoring, field ops" },
      { dimension: "Complexity", ridhzo: "Minimal — live in minutes", competitor: "Higher — configuration & onboarding" },
      { dimension: "Mobile experience", ridhzo: "Mobile-first PWA, offline-capable", competitor: "Strong mobile + field CRM" },
      { dimension: "Entry price", ridhzo: "Free plan, then ₹249/mo flat (3 users)", competitor: "~₹1,250–₹4,500/user/mo range" },
      { dimension: "Time to value", ridhzo: "Same day", competitor: "Weeks (implementation)" },
    ],
    narrative: [
      {
        heading: "Scale vs. simplicity",
        body: "LeadSquared shines for large sales organizations moving huge lead volumes across many reps and locations, with machine-learning lead scoring and industry-specific configurations. That power comes with configuration and onboarding. Ridhzo is intentionally simple: connect a lead source, get instant alerts, follow up in one tap — no implementation project.",
      },
      {
        heading: "Speed-to-lead out of the box",
        body: "Both care about response time, but Ridhzo makes it the default: instant capture, round-robin routing, vibrating push, and a response-time SLA are turnkey. In LeadSquared you have similar capabilities within a much larger platform you configure to your process.",
      },
      {
        heading: "Cost profile",
        body: "For a solo agent or a 3–10 person team, LeadSquared's enterprise pricing and add-ons (telephony, WhatsApp volume) are usually more than needed. Ridhzo's free tier and flat ₹249/month entry (₹449/month for unlimited users) make it far cheaper to start at small scale. At large enterprise scale with complex field operations, LeadSquared's depth may justify its cost.",
      },
    ],
    ridhzoBestFor: [
      "Solo agents and small/mid teams that want speed without a rollout",
      "Teams that buy paid leads and compete on first-response time",
      "WhatsApp-first, mobile-first sales motions",
      "Budget-conscious teams that want to start free",
    ],
    competitorBestFor: [
      "Large enterprises with high lead volume and many reps",
      "Distributed field-sales operations needing deep automation",
      "Teams that want ML lead scoring and heavy process customization",
    ],
    pricingNote: `As of ${AS_OF}, LeadSquared is typically priced in the ₹1,250–₹4,500/user/month range with enterprise implementation, and add-ons like telephony and WhatsApp messaging are billed separately. Ridhzo has a free-forever plan and flat workspace pricing: ₹249/month for up to 3 users, or ₹449/month for unlimited users. Ridhzo is the lighter, lower-cost option at small and mid scale; verify current pricing with each vendor.`,
    migration:
      "For small and mid teams switching from LeadSquared, export your leads to CSV, import into Ridhzo, and reconnect your lead sources. You'll trade heavy configuration for a much simpler setup focused on fast response.",
    faqs: [
      { q: "Is Ridhzo a good LeadSquared alternative for small teams?", a: "Yes — LeadSquared is built for large, high-volume sales orgs and priced accordingly. If you're a solo agent or a small/mid team that mainly needs to respond to leads fast, Ridhzo gives you that without enterprise pricing or a rollout project." },
      { q: "Does Ridhzo have lead scoring like LeadSquared?", a: "Ridhzo focuses on speed-to-lead — instant capture, routing, alerts, and SLA tracking — rather than ML lead scoring. If advanced predictive scoring is central to your process, LeadSquared goes deeper there." },
      { q: "How fast can I get started with Ridhzo vs LeadSquared?", a: "Ridhzo is usually same-day: connect a source and go. LeadSquared implementations are typically a multi-week configuration effort suited to larger organizations." },
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
    tldr: `Kylas is an SMB CRM with a flat monthly price for unlimited users, Ridhzo is ${RIDHZO_ONE_LINER}, and is also flat-priced: a free plan, ₹249/month for up to 3 users, and ₹449/month for unlimited users. Kylas is a broad general CRM; Ridhzo is cheaper at any team size and purpose-built for fast lead response from mobile.`,
    atAGlance: [
      { dimension: "Best for", ridhzo: "Solo agents & small/mid teams; speed-first", competitor: "Larger teams wanting a broad general CRM" },
      { dimension: "Pricing model", ridhzo: "Free plan, then flat ₹249 (3 users) or ₹449/mo (unlimited users)", competitor: "Flat ~₹12,999/mo, unlimited users" },
      { dimension: "Core focus", ridhzo: "Speed-to-lead & 1-tap WhatsApp", competitor: "General SMB sales CRM" },
      { dimension: "Mobile experience", ridhzo: "Mobile-first PWA, offline-capable", competitor: "Web + mobile apps" },
      { dimension: "Cheapest to start", ridhzo: "Free plan", competitor: "Flat fee from day one" },
      { dimension: "Unlimited users", ridhzo: "₹449/mo", competitor: "~₹12,999/mo" },
    ],
    narrative: [
      {
        heading: "The pricing math",
        body: "Both use flat pricing rather than charging per user. Kylas charges about ₹12,999/month for unlimited users. Ridhzo has a free plan, ₹249/month for up to 3 users, and ₹449/month for unlimited users — so Ridhzo costs less at any team size. What Kylas's higher price buys is a broader general-purpose CRM with onboarding included.",
      },
      {
        heading: "Focus: speed-to-lead",
        body: "Kylas is a capable general SMB CRM. Ridhzo is specialized: instant multi-channel capture, vibrating push alerts, round-robin routing, 1-tap WhatsApp, and a response-time SLA are the core, not features among many. If your business wins on how fast you reach a new lead, that specialization matters.",
      },
      {
        heading: "Mobile & WhatsApp",
        body: "Ridhzo is mobile-first with an offline outbox and native 1-tap WhatsApp — ideal for reps in the field. Kylas offers mobile apps and integrations, but isn't built mobile-first around WhatsApp speed.",
      },
    ],
    ridhzoBestFor: [
      "Solo agents and small teams who want to start free or cheap",
      "Speed-to-lead sales motions that live in WhatsApp",
      "Field and mobile reps who need offline resilience",
      "Teams that want a focused tool, not a general CRM",
    ],
    competitorBestFor: [
      "Larger teams that want onboarding included in the price",
      "Businesses wanting a broad general-purpose SMB CRM",
      "Teams that prefer predictable flat billing regardless of headcount",
    ],
    pricingNote: `As of ${AS_OF}, Kylas uses a flat price of about ₹12,999/month for unlimited users (with onboarding included). Ridhzo has a free-forever plan and flat pricing of ₹249/month (up to 3 users) or ₹449/month (unlimited users), so it is the lower-cost option at any team size. Check current pricing with each vendor.`,
    migration:
      "Switching from Kylas to Ridhzo means exporting leads to CSV, importing them, and connecting your lead sources. You'll move from a broad CRM to a focused speed-to-lead workflow.",
    faqs: [
      { q: "Is Ridhzo or Kylas cheaper?", a: "Ridhzo, at any team size. Kylas charges a flat ~₹12,999/month for unlimited users. Ridhzo is free to start, ₹249/month for up to 3 users, and ₹449/month for unlimited users." },
      { q: "Why choose Ridhzo over a general CRM like Kylas?", a: "If your business wins or loses on lead-response speed, Ridhzo's specialization — instant capture, push alerts, routing, 1-tap WhatsApp, and SLA tracking as the core — is built for exactly that, from mobile." },
      { q: "Does Kylas or Ridhzo have unlimited users?", a: "Kylas is known for flat pricing with unlimited users. Both do. Ridhzo's Unlimited plan gives unlimited seats for a flat ₹449/month; Starter covers up to 3 users for ₹249/month, and there's a free plan to start." },
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
    tldr: `AiSensy and Ridhzo are actually different categories. AiSensy is a WhatsApp Business API platform for broadcasts, chatbots, and click-to-WhatsApp ads. Ridhzo is ${RIDHZO_ONE_LINER}, with a full sales pipeline. If you want to send WhatsApp campaigns at scale, AiSensy is built for that; if you want to capture leads, route them, and close deals with a pipeline, Ridhzo is the CRM. Many teams use a tool like each.`,
    atAGlance: [
      { dimension: "Category", ridhzo: "Lead CRM with sales pipeline", competitor: "WhatsApp marketing / broadcast platform" },
      { dimension: "Best for", ridhzo: "Capturing & closing inbound leads", competitor: "Bulk WhatsApp campaigns & chatbots" },
      { dimension: "Sales pipeline", ridhzo: "Visual Kanban + SLA tracking", competitor: "Not a sales pipeline CRM" },
      { dimension: "Lead capture", ridhzo: "Meta Ads, web forms, webhooks, CSV", competitor: "Click-to-WhatsApp, contacts" },
      { dimension: "WhatsApp style", ridhzo: "1-tap personal follow-up + templates", competitor: "Official API broadcasts at scale" },
      { dimension: "Entry price", ridhzo: "Free plan, then ₹249/mo flat (3 users)", competitor: "Free plan, then ~₹1,500/mo + per-message" },
    ],
    narrative: [
      {
        heading: "Different jobs",
        body: "This isn't a like-for-like fight. AiSensy is a WhatsApp Business API platform — its job is sending promotional broadcasts, running chatbots, and powering click-to-WhatsApp ads at scale on the official API. Ridhzo's job is the sales pipeline: capture a lead the instant it arrives, route it to a rep, alert them, and move the deal through stages with a response-time SLA.",
      },
      {
        heading: "Follow-up vs. broadcast",
        body: "Ridhzo's WhatsApp is about fast, personal, 1-tap first contact and follow-up tied to a lead record and pipeline stage. AiSensy's WhatsApp is about one-to-many messaging — audience segments, campaign scheduling, and templates at volume. If you need a rep to reach a hot lead in seconds, that's Ridhzo. If you need to blast an offer to 10,000 contacts, that's AiSensy.",
      },
      {
        heading: "Do you need one or both?",
        body: "Plenty of teams run both: a WhatsApp marketing tool for broadcasts and a lead CRM for the actual sales pipeline. If you only get one, choose by the job you're trying to do — pipeline and speed-to-lead (Ridhzo) or bulk WhatsApp marketing (AiSensy).",
      },
    ],
    ridhzoBestFor: [
      "Teams that need a real sales pipeline and lead routing",
      "Speed-to-lead first contact from Meta/Google/web leads",
      "Tracking response-time SLAs and pipeline stages",
      "Reps closing deals, not just sending campaigns",
    ],
    competitorBestFor: [
      "Sending WhatsApp broadcasts and promotions at scale",
      "Building WhatsApp chatbots for support/engagement",
      "Running click-to-WhatsApp ad campaigns on the official API",
    ],
    pricingNote: `As of ${AS_OF}, AiSensy offers a free-forever plan with paid plans from about ₹1,500/month (Basic) and ₹3,200/month (Pro), plus WhatsApp's per-message charges. Ridhzo has a free-forever plan and flat workspace pricing from ₹249/month. Because they do different jobs, compare by the outcome you need rather than price alone.`,
    migration:
      "Ridhzo isn't a replacement for a WhatsApp broadcast tool — it's the CRM layer. If you're moving lead management into Ridhzo, import your contacts via CSV and connect your lead sources; you can keep using a dedicated WhatsApp marketing platform alongside it for bulk campaigns.",
    faqs: [
      { q: "Is Ridhzo a replacement for AiSensy?", a: "Not exactly — they're different categories. AiSensy is a WhatsApp broadcast and chatbot platform; Ridhzo is a lead CRM with a sales pipeline. If you need to capture, route, and close leads fast, Ridhzo is the CRM. For bulk WhatsApp marketing, a tool like AiSensy fits. Many teams use both." },
      { q: "Does Ridhzo send WhatsApp broadcasts like AiSensy?", a: "Ridhzo focuses on fast, personal 1-tap follow-up tied to your pipeline, plus templates. For large one-to-many promotional broadcasts on the official API, a dedicated WhatsApp marketing platform like AiSensy is purpose-built." },
      { q: "Can I use Ridhzo and a WhatsApp marketing tool together?", a: "Yes. A common setup is a WhatsApp broadcast tool for campaigns and Ridhzo as the sales CRM for lead capture, routing, and closing." },
    ],
  },
];

export function getCompetitor(slug: string): Competitor | undefined {
  return COMPETITORS.find((c) => c.slug === slug);
}

export function getCompetitorSlugs(): string[] {
  return COMPETITORS.map((c) => c.slug);
}

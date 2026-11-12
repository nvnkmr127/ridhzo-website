import {
  type IconComponent,
  FeatherInbox,
  FeatherSmartphone,
  FeatherWifiOff,
  FeatherSend,
  FeatherGitBranch,
  FeatherUsers,
  FeatherColumns,
  FeatherBarChart2,
  FeatherMapPin,
  FeatherActivity,
  FeatherBookOpen,
  FeatherHome,
  FeatherTrendingUp,
  FeatherBriefcase,
  FeatherSun,
  FeatherAward,
  FeatherTruck,
  FeatherCompass,
  FeatherLifeBuoy,
  FeatherPhone,
  FeatherStar,
  WhatsappIcon,
  CalendarGridIcon,
  WebhooksIcon,
  ClipboardListIcon,
  ShieldCheckIcon,
} from "@/components/site/icons";

/**
 * Site-wide navigation model. The navbar mega-menus, the mobile drawer, the
 * footer, the home-page feature grid and the /features index all read from
 * here so product naming and grouping never drift between surfaces.
 *
 * Feature slugs must match the `slug` frontmatter in content/features/*.md.
 */

export type FeatureCategory = "capture" | "engage" | "automate" | "manage" | "analyze" | "platform";

export interface FeatureCategoryMeta {
  id: FeatureCategory;
  label: string;
  description: string;
}

export const FEATURE_CATEGORIES: readonly FeatureCategoryMeta[] = [
  { id: "capture", label: "Capture", description: "Get every lead in, from every channel, in seconds." },
  { id: "engage", label: "Engage", description: "Reach out first and keep following up until they reply." },
  { id: "automate", label: "Automate & Route", description: "Let the playbook run itself and route leads fairly." },
  { id: "manage", label: "Manage", description: "Work the pipeline, from quick triage to closed deals." },
  { id: "analyze", label: "Analyze", description: "Measure speed, forecast revenue and fix bottlenecks." },
  { id: "platform", label: "Platform", description: "Customize Ridhzo and connect it to your stack." },
] as const;

export interface NavItem {
  label: string;
  href: string;
  description?: string;
  icon?: IconComponent;
  badge?: string;
}

export interface FeatureNavItem extends NavItem {
  slug: string;
  category: FeatureCategory;
}

function feature(
  slug: string,
  category: FeatureCategory,
  label: string,
  description: string,
  icon: IconComponent,
  badge?: string,
): FeatureNavItem {
  return { slug, category, label, description, icon, badge, href: `/features/${slug}` };
}

export const FEATURE_NAV: readonly FeatureNavItem[] = [
  feature("lead-capture", "capture", "Lead Capture", "Meta, Google, web forms, webhooks & CSV", FeatherInbox),
  feature("mobile-pwa", "capture", "Mobile App & Alerts", "Android app & installable web app with instant alerts", FeatherSmartphone),
  feature("call-sync", "capture", "Call Sync & Caller ID", "Android calls logged automatically, lead names on incoming calls", FeatherPhone, "New"),
  feature("offline-mode", "capture", "Offline Mode", "Add leads with zero signal, auto-sync later", FeatherWifiOff),
  feature("whatsapp", "engage", "WhatsApp Messaging", "1-tap personal or Business API messaging", WhatsappIcon),
  feature("follow-ups", "engage", "Follow-ups & Reminders", "On-time reminders & overdue alerts", CalendarGridIcon),
  feature("meetings", "engage", "Meetings & Booking", "Site visits, reminders & a booking page", FeatherMapPin),
  feature("sequences", "engage", "Drip Sequences", "WhatsApp & email cadences that stop on reply", FeatherSend),
  feature("ai", "engage", "AI Assistant", "Summaries, reply drafts & actions you approve", FeatherStar, "New"),
  feature("automations", "automate", "Automations", "No-code When → If → Then rules", FeatherGitBranch),
  feature("team-routing", "automate", "Round-Robin Routing", "Fair, capacity-aware lead assignment", FeatherUsers),
  feature("lead-management", "manage", "Lead Management", "Search, filters, bulk actions & lead profile", ClipboardListIcon),
  feature("pipeline-kanban", "manage", "Pipeline & Going Cold", "Kanban board, SLA and cold-lead radar", FeatherColumns),
  feature("dashboards", "analyze", "Dashboards & Insights", "Response speed, source ROI & forecasts", FeatherBarChart2),
  feature("integrations", "platform", "Integrations & API", "Lead Ads, Calendar, CAPI, REST API & webhooks", WebhooksIcon),
  feature("team-and-security", "platform", "Team, Roles & Security", "Custom roles, audit log & data protection", ShieldCheckIcon),
];

export function featuresByCategory(category: FeatureCategory): FeatureNavItem[] {
  return FEATURE_NAV.filter((f) => f.category === category);
}

export function getFeatureNav(slug: string): FeatureNavItem | undefined {
  return FEATURE_NAV.find((f) => f.slug === slug);
}

export const SOLUTION_NAV: readonly NavItem[] = [
  { label: "Real Estate", href: "/usecases/real-estate", description: "Brochures & site visits in minutes", icon: FeatherHome },
  { label: "Marketing Agencies", href: "/usecases/marketing-agencies", description: "Prove lead quality to clients", icon: FeatherTrendingUp },
  { label: "Financial & Insurance", href: "/usecases/financial-advisors", description: "High-trust, compliant follow-up", icon: FeatherBriefcase },
  { label: "Solar & Home Services", href: "/usecases/solar-contractors", description: "Field sales that work offline", icon: FeatherSun },
  { label: "Education & Institutes", href: "/usecases/education", description: "Admissions enquiries answered fast", icon: FeatherBookOpen },
  { label: "Clinics & Healthcare", href: "/usecases/clinics", description: "Book more consultations", icon: FeatherActivity },
  { label: "Coaching & Consulting", href: "/usecases/coaching-consulting", description: "Webinar leads to paying clients", icon: FeatherAward },
  { label: "Auto Dealerships", href: "/usecases/auto-dealerships", description: "Book more test drives", icon: FeatherTruck },
];

export const RESOURCE_NAV: readonly NavItem[] = [
  { label: "Blog", href: "/blog", description: "Speed-to-lead playbooks & data", icon: FeatherBookOpen },
  { label: "How-To Guides", href: "/how-to", description: "Step-by-step setup walkthroughs", icon: FeatherCompass },
  { label: "Help Center", href: "/help", description: "Answers for getting started & billing", icon: FeatherLifeBuoy },
  { label: "Compare Ridhzo", href: "/compare", description: "vs Zoho, LeadSquared, Kylas & more", icon: FeatherColumns },
];

/** Top-level navbar structure: dropdown menus or direct links. */
export type TopNavEntry =
  | { kind: "menu"; id: "product" | "solutions" | "resources"; label: string }
  | { kind: "link"; label: string; href: string };

export const TOP_NAV: readonly TopNavEntry[] = [
  { kind: "menu", id: "product", label: "Product" },
  { kind: "menu", id: "solutions", label: "Solutions" },
  { kind: "link", label: "Pricing", href: "/pricing" },
  { kind: "menu", id: "resources", label: "Resources" },
  { kind: "link", label: "Contact", href: "/contact" },
];

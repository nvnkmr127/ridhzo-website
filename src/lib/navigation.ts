import type { LucideIcon } from "lucide-react";
import {
  Inbox,
  Smartphone,
  WifiOff,
  MessageSquare,
  Send,
  CalendarCheck,
  Sparkles,
  Workflow,
  Users,
  Kanban,
  LayoutList,
  BarChart3,
  Plug,
  ShieldCheck,
  MapPin,
  Stethoscope,
  School,
  Building2,
  Megaphone,
  Briefcase,
  Sun,
  GraduationCap,
  Car,
  BookOpen,
  Compass,
  LifeBuoy,
  Scale,
} from "lucide-react";

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
  icon?: LucideIcon;
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
  icon: LucideIcon,
  badge?: string,
): FeatureNavItem {
  return { slug, category, label, description, icon, badge, href: `/features/${slug}` };
}

export const FEATURE_NAV: readonly FeatureNavItem[] = [
  feature("lead-capture", "capture", "Lead Capture", "Meta, Google, web forms, webhooks & CSV", Inbox),
  feature("mobile-pwa", "capture", "Mobile App & Alerts", "Installable app with instant lead alerts", Smartphone),
  feature("offline-mode", "capture", "Offline Mode", "Add leads with zero signal, auto-sync later", WifiOff),
  feature("whatsapp", "engage", "WhatsApp Messaging", "1-tap personal or Business API messaging", MessageSquare),
  feature("follow-ups", "engage", "Follow-ups & Reminders", "On-time reminders & overdue alerts", CalendarCheck),
  feature("meetings", "engage", "Meetings & Booking", "Site visits, reminders & a booking page", MapPin),
  feature("sequences", "engage", "Drip Sequences", "WhatsApp & email cadences that stop on reply", Send),
  feature("ai", "engage", "AI Assistant", "Summaries, reply drafts & actions you approve", Sparkles, "New"),
  feature("automations", "automate", "Automations", "No-code When → If → Then rules", Workflow),
  feature("team-routing", "automate", "Round-Robin Routing", "Fair, capacity-aware lead assignment", Users),
  feature("lead-management", "manage", "Lead Management", "Search, filters, bulk actions & lead profile", LayoutList),
  feature("pipeline-kanban", "manage", "Pipeline & Going Cold", "Kanban board, SLA and cold-lead radar", Kanban),
  feature("dashboards", "analyze", "Dashboards & Insights", "Response speed, source ROI & forecasts", BarChart3),
  feature("integrations", "platform", "Integrations & API", "Lead Ads, Calendar, CAPI, REST API & webhooks", Plug),
  feature("team-and-security", "platform", "Team, Roles & Security", "Custom roles, audit log & data protection", ShieldCheck),
];

export function featuresByCategory(category: FeatureCategory): FeatureNavItem[] {
  return FEATURE_NAV.filter((f) => f.category === category);
}

export function getFeatureNav(slug: string): FeatureNavItem | undefined {
  return FEATURE_NAV.find((f) => f.slug === slug);
}

export const SOLUTION_NAV: readonly NavItem[] = [
  { label: "Real Estate", href: "/usecases/real-estate", description: "Brochures & site visits in minutes", icon: Building2 },
  { label: "Marketing Agencies", href: "/usecases/marketing-agencies", description: "Prove lead quality to clients", icon: Megaphone },
  { label: "Financial & Insurance", href: "/usecases/financial-advisors", description: "High-trust, compliant follow-up", icon: Briefcase },
  { label: "Solar & Home Services", href: "/usecases/solar-contractors", description: "Field sales that work offline", icon: Sun },
  { label: "Education & Institutes", href: "/usecases/education", description: "Admissions enquiries answered fast", icon: School },
  { label: "Clinics & Healthcare", href: "/usecases/clinics", description: "Book more consultations", icon: Stethoscope },
  { label: "Coaching & Consulting", href: "/usecases/coaching-consulting", description: "Webinar leads to paying clients", icon: GraduationCap },
  { label: "Auto Dealerships", href: "/usecases/auto-dealerships", description: "Book more test drives", icon: Car },
];

export const RESOURCE_NAV: readonly NavItem[] = [
  { label: "Blog", href: "/blog", description: "Speed-to-lead playbooks & data", icon: BookOpen },
  { label: "How-To Guides", href: "/how-to", description: "Step-by-step setup walkthroughs", icon: Compass },
  { label: "Help Center", href: "/help", description: "Answers for getting started & billing", icon: LifeBuoy },
  { label: "Compare Ridhzo", href: "/compare", description: "vs Zoho, LeadSquared, Kylas & more", icon: Scale },
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

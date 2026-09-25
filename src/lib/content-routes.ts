import type { ContentType } from "@/lib/content";

/**
 * Display metadata for each content collection: the public route, index-page
 * copy, and the eyebrow label used across cards and heroes. Single source of
 * truth so navigation, breadcrumbs, and index pages never drift.
 */
export interface ContentRoute {
  type: ContentType;
  /** URL segment, e.g. "/usecases". */
  path: string;
  /** Short label for nav/breadcrumbs. */
  label: string;
  /** Index page H1. */
  title: string;
  /** Index page + metadata description. */
  description: string;
  /** Eyebrow shown above the index title. */
  eyebrow: string;
}

export const CONTENT_ROUTES: Record<ContentType, ContentRoute> = {
  features: {
    type: "features",
    path: "/features",
    label: "Features",
    title: "Product Features",
    description:
      "Everything inside Ridhzo — instant lead capture, 1-tap WhatsApp, automatic assignment, follow-ups, meetings, automations, sequences, AI and dashboards.",
    eyebrow: "Platform",
  },
  usecases: {
    type: "usecases",
    path: "/usecases",
    label: "Use Cases",
    title: "Ridhzo by Industry",
    description:
      "How fast-closing teams use Ridhzo to win the speed-to-lead race — real estate, agencies, education, clinics, insurance, solar & interiors, coaching, auto and more.",
    eyebrow: "Solutions",
  },
  blog: {
    type: "blog",
    path: "/blog",
    label: "Blog",
    title: "The Ridhzo Blog",
    description:
      "Playbooks, teardowns and data on speed-to-lead, WhatsApp selling, and turning paid leads into closed deals.",
    eyebrow: "Articles",
  },
  "how-to": {
    type: "how-to",
    path: "/how-to",
    label: "How-To Guides",
    title: "How-To Guides",
    description:
      "Step-by-step guides to set up Ridhzo and respond to inbound leads faster — from connecting Meta Lead Ads to building automated follow-up sequences.",
    eyebrow: "Guides",
  },
  help: {
    type: "help",
    path: "/help",
    label: "Help Center",
    title: "Help Center",
    description:
      "Answers to common questions about setting up, using, and getting the most out of Ridhzo.",
    eyebrow: "Support",
  },
};

export const CONTENT_ROUTE_LIST: ContentRoute[] = Object.values(CONTENT_ROUTES);

# Ridhzo Website Content Library

This folder contains the complete copy, technical specifications, and marketing frameworks for all of Ridhzo's features and industry use cases.

## Directory Index

### 📁 features/
Each feature file sets `category` (capture · engage · automate · manage · analyze · platform) and `order` in its frontmatter. The `/features` index groups by category, and the navbar menu reads from `src/lib/navigation.ts`, so add new slugs there too.

**Capture**
- `instant-lead-capture.md` (`/features/lead-capture`): Meta & Google Lead Form Ads, hosted forms, website webhook, CSV wizard, API; LinkedIn/WhatsApp inbound on the roadmap.
- `hosted-web-forms.md` (`/features/web-forms`): multi-step (up to 10) hosted forms and iframe embeds.
- `mobile-pwa-push-alerts.md` (`/features/mobile-pwa`): installable PWA with vibrating push alerts.
- `offline-outbox-sync.md` (`/features/offline-mode`): offline outbox with automatic sync on reconnect.

**Engage**
- `whatsapp-instant-messaging.md` (`/features/whatsapp`): 1-tap WhatsApp, templates, personal vs Cloud API modes.
- `lead-profile.md` (`/features/lead-profile`): 360° profile, trackable content links and buying signals, ad attribution.
- `sequences.md` (`/features/sequences`): WhatsApp & email drips, AI drafting, auto-stop on reply, quiet hours.
- `follow-ups-calendar.md` (`/features/follow-ups`): follow-up list, calendar, 15-min reminders, escalation, Google Calendar.
- `ai-sales-copilot.md` (`/features/ai-assistant`): in-app AI assistant with human-approved outreach.

**Automate & Route**
- `automated-sequences.md` (`/features/automations`): When → If → Then builder, templates, triggers/actions.
- `team-round-robin-routing.md` (`/features/team-routing`): capacity round-robin, teams, 13-permission custom roles.

**Manage**
- `leads-hub.md` (`/features/leads-hub`): smart segments, filters, saved views, bulk actions, CSV import, ⌘K search.
- `pipeline-kanban-sla.md` (`/features/pipeline-kanban`): Kanban board, SLA engine, 14-day Going Cold radar.

**Analyze**
- `dashboards-insights.md` (`/features/analytics`): Executive Dashboard, My Dashboard, Insights.

**Platform**
- `custom-fields-templates.md` (`/features/custom-fields-templates`): custom fields, stages, templates, workspace settings.
- `api-webhooks.md` (`/features/api-webhooks`): REST API keys and signed outbound webhooks.
- `lead-intelligence.md` (`/features/lead-intelligence`): Meta CAPI & Conversion Leads, enrichment, inbound email.

### 📁 usecases/
- `real-estate-agents.md` — High-ticket property walkthroughs, instant brochure sharing, 5-minute lead response rule.
- `performance-marketing-agencies.md` — Lead ad attribution, proof of client response speed, automated WhatsApp greetings to reduce CPA.
- `financial-insurance-advisors.md` — High-trust policy inquiries, scheduled renewal reminders, compliance audit logs.
- `solar-home-services.md` — Field sales canvassing, offline rooftop estimates, contractor team routing.
- `coaching-consulting.md` — Webinar and masterclass attendee qualification, 1-on-1 discovery call bookings.
- `auto-dealerships.md` — Inbound test drive requests, showroom walk-ins, rep performance leaderboards.

### 📁 how-to/
- `connect-meta-lead-ads.md`: connect Facebook & Instagram Lead Ads.
- `respond-to-leads-faster.md`: hit a sub-5-minute first response.
- `build-your-first-automation.md`: instant WhatsApp welcome + round-robin.
- `create-a-whatsapp-drip-sequence.md`: AI-drafted multi-day nurture.

### Source of truth
Product capabilities are documented in `/docs/*.md` (exported from the app). When the app changes, update those docs first, then the matching feature page here.

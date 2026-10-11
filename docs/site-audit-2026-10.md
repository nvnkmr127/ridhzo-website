# Ridhzo Website — Full-Site Audit (Oct 2026)

Scope: every route in `src/app` (60 statically generated pages), shared layout, navigation, content pipeline, analytics/consent, and SEO plumbing. **Design benchmark: the homepage** (`src/app/page.tsx` + `src/components/home/*`), which is the only part of the site rebuilt to the Figma design.

Method: read every route and shared component, traced each CTA/form to its destination, ran `tsc --noEmit` (clean) and `next build` (clean, 60/60 pages), then inspected the built HTML for titles, canonicals and H1s.

---

## 1. Feature Summary

Ridhzo.com is a static Next.js 15 marketing site for a mobile-first lead CRM. Users land on the homepage, learn about the product through feature, use-case, comparison and guide pages, compare plans on `/pricing`, and convert via **Start Free / Start 14-Day Free Trial** (links into `app.ridhzo.com/signup`) or via **/contact** (WhatsApp, email or a contact form). There is no backend of its own: content comes from Markdown in `content/`, competitor data from `src/lib/competitors.ts`, and `/blog` can optionally be proxied to WordPress by `src/middleware.ts`.

The site currently runs **two visual systems side by side**:

| | Homepage system (target) | Legacy system (everything else) |
|---|---|---|
| Section opener | `Eyebrow` — green pill, `border-highlight/60 bg-highlight/20` | `.section-label` — gray pill, `bg-secondary/60` |
| Headline | `SectionTitle` 52/56 semibold, `Accent` words in `#5ee878` | `text-5xl font-bold`, `.text-gradient` white→gray |
| Body | `Lead` — `text-white/65`, 18/28 | `text-muted-foreground`, often `text-xs` |
| Buttons | `HomeButton` — h-14 / h-12, `rounded-[14px]`, `bg-white/80 border-white` + arrow; secondary `bg-white/[0.04] border-white/12` | shadcn `Button` — `rounded-full`, solid white, `shadow-glow` |
| Cards | `rounded-3xl/[30px] bg-white/[0.04]`, glass panels `bg-white/[0.12]` | `rounded-2xl border-border bg-card` (#121212) |
| Container | `max-w-[1272px]` | `max-w-7xl` / `max-w-3xl` |
| Atmosphere | hero photo, grain texture, deep-green glows | white `glow-blob`, dot grid, `CornerTicks` |
| Closing CTA | `FinalCtaSection` | `CtaBanner` |

Pages on the legacy system: `/pricing`, `/about`, `/contact`, `/compare`, `/compare/[slug]`, `/features`, `/features/[slug]`, `/usecases`, `/usecases/[slug]`, `/blog`, `/blog/[slug]`, `/how-to`, `/how-to/[slug]`, `/help`, `/help/[slug]`, the six policy pages, plus the navbar dropdowns, CTA buttons and cookie banner. The footer is already on the new system.

---

## 2. Critical Issues

### C1. The contact form throws messages away — **Critical**
- **Location:** `src/components/marketing/ContactUsSection.tsx:17-20`
- **Problem:** `handleSubmit` only calls `setSubmitted(true)`. Nothing is sent anywhere, but the user sees "Thank You! … One of our team members will reach out … within 15 minutes."
- **Root cause:** UI built without a server action, API route or third-party form endpoint.
- **User impact:** Every enquiry from the main contact page is lost, and the visitor is promised a 15-minute reply that will never come. This is the site's only non-signup conversion path.
- **Fix:** Add a server action or `/api/contact` route that validates the input (zod), checks a honeypot and rate limit, and delivers the message (email via Resend/SES, a webhook into the Ridhzo app as a lead, or both). Show a real loading state and an error state, and only show success once delivery succeeds. Interim option: remove the form and keep WhatsApp and email only.

### C2. `/about` and `/contact` canonicalise to the homepage — **High (SEO)**
- **Location:** `src/app/layout.tsx:84-86` (root `alternates.canonical: "https://ridhzo.com"`), `src/app/about/page.tsx`, `src/app/contact/page.tsx`
- **Problem:** Built HTML for both pages contains `<link rel="canonical" href="https://ridhzo.com">`.
- **Root cause:** The root layout sets a canonical that every page inherits unless it overrides it, and these two pages don't.
- **Impact:** Google is told both pages are duplicates of the homepage, so they can drop out of the index.
- **Fix:** Remove `canonical` from the root layout (put it in `page.tsx` for `/`), and give every page its own canonical. Better still, use one `pageMetadata({ title, description, path })` helper everywhere.

### C3. Doubled brand suffix in 8 page titles — **High (SEO/polish)**
- **Location:** `about`, `contact`, `security`, `terms`, `privacy`, `cookie-policy`, `refund-policy`, `shipping-policy` `page.tsx`
- **Problem:** The rendered `<title>` is e.g. `About Us — Ridhzo CRM — Ridhzo CRM`.
- **Root cause:** These titles already end in "— Ridhzo CRM", and the root `title.template` (`"%s — Ridhzo CRM"`) adds it again.
- **Fix:** Drop the suffix from each page title.

### C4. `/about` and `/contact` have no H1 — **Medium (SEO/a11y)**
- **Location:** `AboutUsSection.tsx:35`, `ContactUsSection.tsx:29` (both use `<h2>`)
- **Impact:** These pages have no top-level heading for search engines or screen readers.
- **Fix:** Render the page title as `h1` (`SectionTitle as="h1"` once these pages move to the homepage system).

### C5. Pricing facts contradict each other across pages — **High (trust/billing)**
- **Locations / contradictions:**
  - `/pricing` OG description says **"Per-user pricing"** (`src/app/pricing/page.tsx:19`), but the page body, FAQ and README all say flat per-workspace pricing.
  - The homepage lists **"Dashboards + SLA tracking + team leaderboards"** as an *Unlimited-only* extra (`PricingHomeSection.tsx:69`), while the comparison table marks it included on **all** plans (`PricingComparison.tsx:65`).
  - **"AI auto-tagging of incoming replies"** is a Starter feature on `/pricing` (`PricingSection.tsx:47`) but is missing from the homepage plan cards.
  - The billing toggle defaults to **yearly** on the homepage and **monthly** on `/pricing`, so the same plan shows ₹208 on one page and ₹249 on the other.
  - The Unlimited CTA is "Go Unlimited" on one page and "Upgrade to Unlimited" on the other.
- **Root cause:** Plan data is hard-coded separately in `PricingHomeSection`, `PricingSection`, `PricingComparison`, the Product JSON-LD in `pricing/page.tsx`, `PricingFaq`, `FaqHomeSection`, `CtaBanner` and `content/help/faq-plans-and-billing.md`.
- **Fix:** Create `src/lib/plans.ts` as the single source (prices, limits, feature flags, CTAs), have every surface read from it, and confirm the dashboards entitlement against the app's product KB.

### C6. `/blog` is fought over by Markdown and WordPress — **Medium (only when `WORDPRESS_ORIGIN` is set)**
- **Location:** `src/middleware.ts`, `src/app/blog/**`, `src/app/sitemap.ts`
- **Problem:** When `WORDPRESS_ORIGIN` is set, every `/blog*` request is rewritten to WordPress, so the Markdown blog pages are unreachable. The sitemap still lists `/blog/speed-to-lead-5-minute-rule` and `/blog/whatsapp-crm-for-meta-lead-ads`, which WordPress may 404. `WORDPRESS_ORIGIN` is also missing from `.env.example`.
- **Fix:** Pick one source. If WordPress: delete `content/blog` and `src/app/blog`, drop blog entries from the sitemap (WordPress publishes its own), and document the env var. If Markdown: remove the middleware.

---

## 3. Pending or Incomplete Work

- **Contact form has no backend** (C1). The industry dropdown offers 5 options while the site markets 8 industries.
- **Seven dead legacy components, about 1,700 lines** — not imported anywhere: `marketing/HeroSection.tsx` (368), `PipelinePreview.tsx` (344), `FeatureShowcase.tsx` (257), `SolutionsSection.tsx` (241), `SpeedComparison.tsx` (224), `IntegrationsSection.tsx` (122), `FaqSection.tsx` (102). They are left over from the pre-Figma homepage.
- **The design migration is partial.** Only the homepage and footer follow Figma. `CtaBanner`, `ContentIndex`, `ArticleLayout`, `ContentCard`, `ComparePage`, `PolicyLayout`, `PricingSection`, `PricingComparison`, `PricingFaq`, `AboutUsSection`, `ContactUsSection`, `CookieConsent` and the navbar buttons and dropdowns are still legacy.
- **The design tokens were never updated for the green brand.** The comment in `globals.css` still says "Strictly black → white … two colors". `--ring` is gray (focus rings are gray on green pages), `::selection` is white, and the `body::before` wash is white rather than green.
- **The lint script is broken.** `npm run lint` runs `next lint`, but there is no ESLint config or dependency, and `next lint` is deprecated in Next 15.5.
- **There is no way to change a cookie choice.** After Accept or Decline the banner is gone for good, and no "Cookie settings" link exists (the GDPR/DPDP withdraw-consent requirement).
- **The About page is thin.** It has no team, company details, founding story, location or social proof, and only one section plus CTA.

---

## 4. Logic Issues

1. **Plan data is duplicated in about 8 places** (C5). Any price change has to be made in 8 places by hand.
2. **`AttributionLinks` has a copy-pasted block.** The referrer-capture block appears twice (`AttributionLinks.tsx:18-39`). It is harmless (the second run is skipped) but it is dead duplication.
3. **`AttributionLinks` hard-codes `app.ridhzo.com`** (`:52`) instead of deriving the host from `APP_URL`. On staging or preview (`NEXT_PUBLIC_APP_URL` pointing elsewhere), UTMs are not carried into signups.
4. **The final CTA's secondary button points to `#journey`** (`FinalCtaSection.tsx:24`). That anchor exists only on the homepage, so the section can't be reused on inner pages as-is. The secondary href needs to be a prop (e.g. `/pricing` or `/contact` on inner pages).
5. **The homepage hero and the final CTA give different promises for the same link.** "Start 14-Day Free Trial" (hero) and "Start Free" (final CTA, navbar, footer) both open `/signup`. Pick one primary label, or link to the trial explicitly (`/signup?plan=starter`), as the pricing cards do.
6. **Reply-time promises conflict:** "Usually within 5 minutes" (WhatsApp card), "within 15 minutes" (form success), and "Urgent issues within 2 hours · everything else within 24 hours" (email).
7. **`CtaBanner` makes claims nobody checked:** "Setup in 60 Seconds" and "Join High-Velocity Closers" don't appear anywhere else, and the README requires product facts to come from the product KB.
8. **`getContentItem` → `resolveFileForSlug` reads and parses every Markdown file on each lookup** (an O(n²) pattern across `generateStaticParams` and `generateMetadata`). This only matters at build time, so it's acceptable now but grows with content.

---

## 5. Error Issues

| # | Scenario | Status | Where |
|---|---|---|---|
| E1 | Contact submit shows success with nothing sent | **Confirmed** | `ContactUsSection.tsx` |
| E2 | Contact form has no error state, no loading state, no double-submit guard, no spam protection | Confirmed | same |
| E3 | Canonical points to homepage on `/about`, `/contact` | **Confirmed in build output** | layout + pages |
| E4 | Duplicated titles on 8 pages | **Confirmed in build output** | policy/about/contact pages |
| E5 | No custom `not-found.tsx` / `error.tsx`; 404s render Next's default page inside the layout, off-brand | Confirmed | `src/app` |
| E6 | `/blog` sitemap entries 404 when WordPress proxy is on | Potential | middleware + sitemap |
| E7 | `npm run lint` fails or prompts interactively | Confirmed (no config) | `package.json` |
| E8 | At 1024–1272px the use-cases section has **zero side gutter** (`lg:px-0` on a `max-w-[1272px]` container) | Confirmed by code | `UseCasesHomeSection.tsx:43` |

`tsc --noEmit` and `next build` both pass with no errors or warnings.

---

## 6. UX Issues

1. **Visual whiplash between pages.** From the green, photographic, Figma homepage, any click lands on a flat gray monochrome page with different buttons, pills, headline weight and card style. This is the main issue raised in the brief.
2. **The navbar CTAs don't match the page.** The header "Start Free" is a solid white shadcn button with a glow, while every homepage CTA uses the white/80, 14px-radius `HomeButton`. The mobile drawer uses `rounded-full`. The dropdown panels use gray cards and gray icon chips with no green accent.
3. **Inner-page text is small:** card titles `text-sm`, summaries `text-xs`, meta `text-[11px]` (`ContentCard`, `ComparePage`, `AboutUsSection` values). The homepage body is 16–18px. This hurts readability on mobile.
4. **The cookie banner is monochrome legacy styling,** sitting on top of the green homepage.
5. **The contact page's primary action is buried.** WhatsApp is the fastest channel, but it is a small `text-xs` card while the (broken) form gets 7/12 of the width.
6. **The pricing page repeats the homepage pricing with a different design and different data.** Visitors who compare the two will notice.
7. **The use-case carousel autoplays every few seconds with no pause on hover or focus** (WCAG 2.2.2 for auto-moving content). It stops only for reduced-motion users.
8. **The footer duplicates links:** "Contact" appears under Resources and under Company, and "Security" under Company and in the legal row.
9. **Breadcrumbs exist on articles and comparisons but not on index pages,** and they use 11px gray text.

---

## 7. Features to Add

### Required
- **Working contact submission** (server action + delivery + validation + spam guard + real success/error states). The page's core purpose depends on it.
- **A single plan/pricing data module** (`src/lib/plans.ts`), so pricing can't contradict itself again.
- **Shared page shell components in the homepage design:** `PageHero` (Eyebrow + H1 SectionTitle + Lead, optional hero-bg and grain), `SiteCta` (FinalCtaSection with configurable secondary CTA), `FaqAccordion` (the homepage FAQ, data-driven, with FAQPage JSON-LD), `GlassCard`. Without these, "same design for all" means copying classes into 25 pages.
- **Correct per-page metadata** (canonical, title, OG) through one helper.
- **A branded `not-found.tsx`** in the homepage style, with links back to features, pricing and contact.

### Recommended
- **A cookie-settings link in the footer** that resets consent. This is a compliance requirement because tags are consent-gated.
- **Product imagery on feature and use-case pages.** These pages are text-only, while the homepage shows a screenshot for every area. Reusing `/home/*.webp` in a `ShotPanel` beside the hero would carry the design through.
- **A table of contents or sticky section nav on long feature articles,** like the one policy pages already have.
- **`Organization`/`SoftwareApplication` JSON-LD with `offers` from `plans.ts`** on the homepage, which currently has only Organization.

### Optional
- Social proof (logos, testimonials, counts) on About and Pricing, but only with real data.
- Per-page OG images (`opengraph-image.tsx` under `features/[slug]`, etc.) in the homepage look.

---

## 8. Features to Remove

| Remove | Why |
|---|---|
| 7 dead `marketing/*` components (§3) | Unused, about 1,700 lines, and they keep the legacy style in grep results and reviews |
| `CtaBanner` + `decor.tsx` (`CornerTicks`) | Replace with the shared homepage `FinalCtaSection`; two closing CTAs with different copy is confusing |
| Legacy utility classes `.section-label`, `.text-gradient`, `.glow-blob`, `.icon-chip`, `.bg-dots*` in `globals.css` | Remove once migrated; they are the legacy design system |
| `PricingSection` (legacy cards) | Replace with the homepage `PricingHomeSection` reading from `plans.ts` |
| Duplicate "Contact" and "Security" footer links | Redundant |
| Second referrer block in `AttributionLinks` | Copy-paste duplicate |
| Either `content/blog` + `src/app/blog` **or** the WordPress middleware | Two sources for one route |
| Tracked `.DS_Store` files (`.DS_Store`, `content/.DS_Store`) and tracked `.env.local` | Already in `.gitignore`, but committed anyway. `.env.local` holds only `NEXT_PUBLIC_APP_URL` (no secret), but leaving it tracked makes it easy to commit secrets later |
| "Setup in 60 Seconds" and other unverified claims | The content rules say only product-KB facts |

---

## 9. Features to Simplify

- **Pricing page:** hero → homepage pricing cards → comparison table → FAQ → CTA. Today it has its own hero, its own cards, a monochrome table and a different FAQ style. Reuse the homepage blocks and keep only the comparison table as the page-specific part, restyled in glass cards.
- **Contact page:** lead with two big actions (WhatsApp / email), then a short 3-field form (name, WhatsApp number, message). Business type is optional.
- **Content pages:** one `ArticleLayout` and one `ContentIndex` already serve 5 collections. Restyle those two files plus `ContentCard` and 15 routes move to the homepage design at once. This is the biggest win for the least effort.
- **Policy pages:** restyle only `PolicyLayout`; all six pages follow.
- **Metadata:** replace about 25 hand-written `metadata` objects with `pageMetadata({ title, description, path })`.

---

## 10. Technical Improvements

1. **Promote the homepage primitives to a shared design system:** move `components/home/primitives.tsx` and `icons.tsx` to `components/site/` (or `components/ui/brand/`) and export `Eyebrow`, `SectionTitle`, `Accent`, `Lead`, `HomeButton` (rename to `BrandButton`), `HomeSection` (rename to `Section`), `GlassPanel`, `ShotPanel`, `GrainTexture`, and the `PageGlows` currently inlined in `app/page.tsx`.
2. **Update the tokens in `globals.css`:** `--ring` → highlight green, `::selection` → green, `body::before` wash → green tint, and drop the "monochrome" comment. Optionally map `--primary` to the white/80 CTA so stray shadcn `Button`s match.
3. **Add a `pageMetadata()` helper and remove the root canonical** (C2, C3).
4. **Add `src/lib/plans.ts`** (C5). Generate the JSON-LD `offers` and FAQ answers from it.
5. **Contact backend:** server action + zod + honeypot + simple IP rate limit + provider env vars documented in `.env.example`.
6. **`AttributionLinks`:** derive the host from `APP_URL` and drop the duplicate block.
7. **ESLint:** add `eslint` + `eslint-config-next` (flat config) and switch the script to `eslint .`, or remove the script.
8. **Content loader:** build a slug→file map once per type (memoise) instead of re-parsing every file per lookup.
9. **`remark-html` with `sanitize: false`:** acceptable while content is repo-only. If content ever comes from a CMS, switch to `rehype-sanitize`.
10. **Constants:** `SITE_URL = "https://ridhzo.com"` is redefined in 8+ files. Move it to `lib/config.ts`.

---

## 11. Final Action Plan

### P0 — Broken functionality
| Task | Reason | Files | Depends on | Expected result |
|---|---|---|---|---|
| Wire the contact form to a real delivery path (or remove the form) | Every enquiry is lost today | `ContactUsSection.tsx`, new `app/contact/actions.ts`, `.env.example` | Choice of email or app-webhook provider | Messages arrive; honest success/error states |
| Fix canonicals on `/about`, `/contact`; move the root canonical into `app/page.tsx` | Pages are telling Google they are the homepage | `layout.tsx`, `about/page.tsx`, `contact/page.tsx`, `page.tsx` | — | Each page self-canonical |
| Fix pricing contradictions (per-user OG text, dashboards entitlement, AI auto-tagging) | Wrong billing info erodes trust | `pricing/page.tsx`, `PricingHomeSection.tsx`, `PricingComparison.tsx` | Confirm the dashboards entitlement against the product KB | One consistent story |

### P1 — Same design everywhere + important UX/SEO
| Task | Reason | Files | Depends on | Expected result |
|---|---|---|---|---|
| Extract shared brand primitives + `PageHero`, `SiteCta`, `FaqAccordion`, `GlassCard` | Base for the migration | `components/site/*`, `components/home/*` imports | — | One design system |
| Update tokens (ring, selection, wash) and remove legacy utilities after migration | Green brand everywhere, including focus states | `globals.css`, `tailwind.config.ts` | Above | Consistent accents |
| Restyle `ContentIndex`, `ArticleLayout`, `ContentCard` (green Eyebrow, SectionTitle H1, glass cards, green prose links/markers, `SiteCta`) | 15 routes in one change | `components/content/*` | Primitives | Features, use cases, blog, how-to and help match the homepage |
| Pricing page on `plans.ts` + `PricingHomeSection` + restyled comparison and FAQ | Consistency and one data source | `lib/plans.ts`, `pricing/page.tsx`, `PricingComparison.tsx`, `PricingFaq.tsx`, delete `PricingSection.tsx` | Primitives | Pricing matches the homepage exactly |
| Restyle About (H1, story, values as glass cards) and Contact (H1, WhatsApp-first, branded form) | Missing H1s and legacy look | `AboutUsSection.tsx`, `ContactUsSection.tsx` | P0 contact backend | Branded, accessible pages |
| Restyle `ComparePage` + `/compare` index | Legacy look | `components/compare/ComparePage.tsx`, `app/compare/page.tsx` | Primitives | Matches homepage |
| Restyle `PolicyLayout` | Six legal pages follow | `PolicyLayout.tsx` | Primitives | Matches homepage |
| Navbar: `BrandButton` CTAs, green-accent dropdown chips; restyle cookie banner | First thing users see on every page | `MarketingNavbar.tsx`, `CookieConsent.tsx` | Primitives | Header matches hero |
| Fix doubled titles; add `pageMetadata()` | SEO | all `page.tsx` | — | Clean titles |
| Replace `CtaBanner` with `SiteCta` site-wide | Two closing CTAs with different copy | `ArticleLayout`, `ContentIndex`, `ComparePage`, `about`, `pricing` | `SiteCta` | One closing CTA |

### P2 — Improvements
| Task | Reason | Files | Expected result |
|---|---|---|---|
| Delete 7 dead components + `CtaBanner`/`decor` | Remove the old design system | `components/marketing/*` | About 1,900 fewer lines |
| Decide blog source (WordPress vs Markdown) and align sitemap/env | Route conflict | `middleware.ts`, `app/blog`, `sitemap.ts`, `.env.example` | One blog, correct sitemap |
| Branded `not-found.tsx` | Off-brand 404 | `app/not-found.tsx` | On-brand 404 |
| Cookie-settings link to reopen consent | Compliance | `MarketingFooter.tsx`, `lib/consent.ts` | Consent can be withdrawn |
| Fix `UseCasesHomeSection` lg gutter; pause autoplay on hover/focus | Edge-touching layout; a11y | `UseCasesHomeSection.tsx` | Correct gutters; pausable carousel |
| `AttributionLinks` cleanup (APP_URL host, dedupe) | Attribution on non-prod; dead code | `AttributionLinks.tsx` | Correct UTMs |
| Remove footer duplicates; align reply-time promises; remove unverified claims | Clarity/trust | `MarketingFooter.tsx`, `ContactUsSection.tsx` | Consistent copy |
| Untrack `.DS_Store` and `.env.local`; fix the lint script | Repo hygiene | git index, `package.json` | Clean repo, working lint |

### P3 — Optional
- Product screenshots on feature and use-case heroes; per-collection OG images; real social proof on About/Pricing; memoised content slug index; central `SITE_URL`.

---

### The four answers
1. **What is broken?** The contact form (silently discards messages), canonicals on `/about` and `/contact`, doubled titles on 8 pages, contradictory pricing facts, the lint script, and the zero gutter on use-cases at 1024–1272px.
2. **What is incomplete or unclear?** The design migration: only the homepage and footer follow Figma, and 20+ routes plus the navbar CTAs and cookie banner are still legacy monochrome. Also the blog source of truth, consent withdrawal, and the thin About page.
3. **What should be added?** Shared brand primitives and page shells, `plans.ts`, a contact backend, a metadata helper, a branded 404, and cookie settings.
4. **What should be removed or simplified?** About 1,900 lines of dead and legacy components, `CtaBanner`, legacy CSS utilities, duplicate pricing implementations, duplicate footer links and duplicated attribution code.

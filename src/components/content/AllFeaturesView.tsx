import Link from "next/link";
import { FeatherArrowUpRight, FeatherChevronRight } from "@/components/site/icons";
import { SiteCta } from "@/components/site/SiteCta";

interface FeatureTile {
  eyebrow: string;
  title: string;
  description?: string;
  href: string;
}

const MAIN_CHAPTERS: readonly FeatureTile[] = [
  {
    eyebrow: "01 / CAPTURE & ORGANIZE",
    title: "Lead Management",
    description: "Find, organize and contact every lead.",
    href: "/features/lead-management",
  },
  {
    eyebrow: "02 / TRACK",
    title: "Pipeline",
    description: "See where each opportunity stands.",
    href: "/features/pipeline-kanban",
  },
  {
    eyebrow: "04 / WORKFLOWS",
    title: "Automations",
    description: "React to events without repeated manual work.",
    href: "/features/automations",
  },
  {
    eyebrow: "05 / TIMED OUTREACH",
    title: "Sequences",
    description: "Build timed, conditional multi-step follow-ups.",
    href: "/features/sequences",
  },
  {
    eyebrow: "06 / AI ASSISTANCE",
    title: "AI Assistant",
    description: "Ask about leads and review suggested drafts.",
    href: "/features/ai",
  },
  {
    eyebrow: "07 / ANALYTICS",
    title: "Insights",
    description: "Understand pipeline health, performance and risk.",
    href: "/features/dashboards",
  },
  {
    eyebrow: "08 / CONNECT",
    title: "Integrations",
    description: "Connect campaigns, forms and existing tools.",
    href: "/features/integrations",
  },
  {
    eyebrow: "03 / TAKE ACTION",
    title: "Follow-ups",
    description: "Make the next action impossible to miss.",
    href: "/features/follow-ups",
  },
];

const SMALLER_TOOLS: readonly FeatureTile[] = [
  { eyebrow: "SOURCES", title: "Lead Capture", href: "/features/lead-capture" },
  { eyebrow: "ENGAGE", title: "WhatsApp", href: "/features/whatsapp" },
  { eyebrow: "SCHEDULE", title: "Meetings", href: "/features/meetings" },
  { eyebrow: "ROUTE", title: "Round-Robin Routing", href: "/features/team-routing" },
  { eyebrow: "MOBILE", title: "Offline Capture", href: "/features/offline-mode" },
  { eyebrow: "MOBILE", title: "Android Call Sync", href: "/features/call-sync" },
  { eyebrow: "PLATFORM", title: "Team Roles & Security", href: "/features/team-and-security" },
  { eyebrow: "PLATFORM", title: "Mobile App", href: "/features/mobile-pwa" },
];

/**
 * Pixel-accurate implementation of Figma `All Features` (`254:27668` / `573:22291`):
 * Hero ("LESS ADMIN. MORE MOMENTUM.") -> 8-card white chapter grid ("ALL YOU NEED. NO REPETITION.")
 * -> 8-card dark grid ("SMALLER TOOLS. BIG DIFFERENCE.") -> Closing CTA ("DON'T LET THE NEXT ONE WAIT.").
 */
export function AllFeaturesView() {
  return (
    <>
      {/* Hero section (573:22295) — no z-index on inner container so hero-outline-cutout blends with glow */}
      <section className="relative overflow-hidden bg-[#080908] px-4 py-14 text-white sm:px-8 lg:px-[84px] lg:py-[80px]">
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 bg-[radial-gradient(760px_540px_at_6%_78%,rgba(94,232,120,0.22),rgba(94,232,120,0.07)_46%,transparent_76%)]"
        />

        <div className="relative mx-auto w-full max-w-[1272px]">
          <nav aria-label="Breadcrumb" className="border-b border-white/[0.08] pb-5 lg:pb-[24px]">
            <ol className="flex flex-wrap items-center gap-[2px] font-sans text-[12px] font-normal leading-[18px]">
              <li>
                <Link href="/" className="focus-ring rounded text-white/[0.48] transition-colors hover:text-white">
                  Home
                </Link>
              </li>
              <li className="inline-flex items-center gap-[2px]">
                <FeatherChevronRight className="size-[16px] text-white/[0.48]" />
                <span className="text-white/[0.48]">Product</span>
              </li>
              <li className="inline-flex items-center gap-[2px]">
                <FeatherChevronRight className="size-[16px] text-white/[0.48]" />
                <span className="font-medium text-[#5ee878]">All Features</span>
              </li>
            </ol>
          </nav>

          <div className="flex flex-col justify-between gap-8 pb-[24px] pt-[32px] lg:flex-row lg:items-end lg:pb-[40px]">
            <div className="flex flex-col items-start">
              <div className="flex items-center gap-4 sm:gap-[20px]">
                <span
                  aria-hidden="true"
                  className="flex size-[26px] shrink-0 items-center justify-center rounded-full bg-[#5ee878]/[0.32]"
                >
                  <span className="size-[10px] rounded-full bg-[#5ee878]" />
                </span>
                <span className="type-label text-[#5ee878]">
                  ONE CONNECTED WAY TO SELL
                </span>
              </div>

              <h1 className="pt-[28px] font-inter text-[44px] font-black uppercase leading-[1.02] sm:text-[72px] lg:max-w-[740px] lg:pt-[32px] lg:text-[96px]">
                <span className="block leading-[1.04] tracking-[-0.04em] text-white xl:tracking-[-5px]">
                  LESS ADMIN.
                </span>
                <span className="hero-outline-cutout block leading-[1.02] lg:leading-[92px]">MORE</span>
                <span className="hero-outline-cutout block leading-[1.02] lg:leading-[92px]">MOMENTUM.</span>
              </h1>
            </div>

            <p className="type-body-lg w-full pb-[12px] text-white/[0.64] lg:w-[460px] lg:shrink-0">
              Explore the product by the job it helps your team get done. Eight clear chapters, supported by smaller tools when you need more detail.
            </p>
          </div>
        </div>
      </section>

      {/* Main Chapters Section (573:22317) */}
      <section className="relative z-[1] bg-white px-4 py-16 text-black sm:px-8 lg:px-[84px] lg:py-[88px]">
        <div className="mx-auto w-full max-w-[1272px]">
          <div className="flex flex-col justify-between gap-6 lg:flex-row lg:items-end">
            <h2 className="type-h2">
              <span className="block text-black">ALL YOU NEED.</span>
              <span className="block text-[#5ee878]">NO REPETITION.</span>
            </h2>
            <p className="type-body-lg w-full pb-[12px] text-black/[0.64] lg:max-w-[440px]">
              A clear place for every major workflow. Each chapter includes a focused product preview and the related supporting capabilities.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-x-[24px] gap-y-6 pt-12 md:grid-cols-2 lg:gap-y-[32px] lg:pt-[72px]">
            {MAIN_CHAPTERS.map((chapter) => (
              <Link
                key={chapter.href}
                href={chapter.href}
                className="focus-ring group flex flex-col items-start justify-between gap-12 rounded-[16px] border border-black/20 bg-white p-6 transition-colors hover:border-black/50 sm:p-[32px] lg:gap-[104px]"
              >
                <div className="flex w-full items-start justify-between gap-4">
                  <span className="type-label text-black/[0.48]">
                    {chapter.eyebrow}
                  </span>
                  <FeatherArrowUpRight className="size-[32px] shrink-0 text-black transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
                </div>

                <div className="flex w-full flex-col items-start">
                  <h3 className="pb-[12px] font-inter text-[28px] font-extrabold leading-[1.08] tracking-[-0.035em] text-[#111] sm:text-[36px] lg:text-[40px] xl:text-[44px] xl:leading-[44px] xl:tracking-[-2px]">
                    {chapter.title}
                  </h3>
                  <p className="type-body text-black/[0.48]">
                    {chapter.description}
                  </p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Smaller Tools Section (573:22411) */}
      <section className="relative z-[1] overflow-hidden bg-black px-4 py-16 text-white sm:px-8 lg:px-[84px] lg:py-[88px]">
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 bg-[radial-gradient(720px_500px_at_94%_16%,rgba(94,232,120,0.22),rgba(94,232,120,0.07)_46%,transparent_76%)]"
        />

        <div className="relative mx-auto w-full max-w-[1272px]">
          <div className="flex flex-col justify-between gap-6 lg:flex-row lg:items-end">
            <div className="flex flex-col items-start gap-[16px]">
              <span className="type-label text-[#5ee878]">
                DEEPER INTO THE DETAILS
              </span>
              <h2 className="type-h2">
                <span className="block text-white">SMALLER TOOLS.</span>
                <span className="block text-[#5ee878]">BIG DIFFERENCE.</span>
              </h2>
            </div>

            <p className="type-body-lg w-full pb-[12px] text-white/[0.64] lg:max-w-[440px]">
              These are essential features, but they make more sense as supporting parts of a primary workflow than as eight competing main navigation items.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-5 pt-12 sm:grid-cols-2 lg:grid-cols-4 lg:gap-6 xl:gap-[32px] lg:pt-[72px]">
            {SMALLER_TOOLS.map((tool) => (
              <Link
                key={tool.href}
                href={tool.href}
                className="focus-ring group flex min-h-[160px] flex-col justify-between gap-[12px] rounded-[16px] border border-[#424742] bg-[#1a1e1a] p-[24px] transition-colors hover:border-[#5ee878]/70"
              >
                <div className="flex w-full flex-col items-start gap-[24px]">
                  <span className="type-label text-[#5ee878]">
                    {tool.eyebrow}
                  </span>
                  <h3 className="font-inter text-[19px] font-extrabold leading-[1.2] tracking-[-0.6px] text-white xl:text-[22px] xl:tracking-[-0.84px]">
                    {tool.title}
                  </h3>
                </div>
                <FeatherArrowUpRight className="ml-auto size-[32px] shrink-0 text-[#5ee878] transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
              </Link>
            ))}
          </div>
        </div>
      </section>

      <SiteCta showEyebrow={false} borderTop={false} />
    </>
  );
}

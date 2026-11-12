import Link from "next/link";
import { cn } from "@/lib/utils";
import { FeatherChevronRight } from "@/components/site/icons";
import { Eyebrow, PageGlows } from "@/components/site/primitives";

export interface Crumb {
  label: string;
  href?: string;
}

/**
 * Shared hero across non-home pages following Figma Design System frames
 * (573:22295 All Features, 650:16123 Contact, 639:13857 Blogs, 682:25914 How-to):
 * pure black canvas, subtle Highlight-Green radial glow, bottom-bordered breadcrumb bar,
 * glowing-dot green eyebrow, Inter Black uppercase H1, and Geist Body Large description.
 */
export function PageHero({
  breadcrumbs,
  crumbs,
  eyebrow,
  title,
  description,
  lead,
  align = "left",
  actions,
  bottomSplit,
  aside,
  titleClassName,
  children,
}: {
  breadcrumbs?: Crumb[];
  crumbs?: Crumb[];
  eyebrow?: string;
  title: React.ReactNode;
  description?: string;
  lead?: string;
  align?: "left" | "center";
  actions?: React.ReactNode;
  bottomSplit?: {
    lead: string;
    detail: string;
  };
  aside?: React.ReactNode;
  titleClassName?: string;
  children?: React.ReactNode;
}) {
  const trail = breadcrumbs ?? crumbs;
  const copy = description ?? lead;
  return (
    <section className="relative overflow-hidden bg-black px-4 py-14 text-white sm:px-8 lg:px-[84px] lg:py-[80px]">
      <PageGlows />
      <div className="relative mx-auto w-full max-w-[1272px]">
        {trail && trail.length > 0 && (
          <nav
            aria-label="Breadcrumb"
            className="mb-8 border-b border-white/[0.08] pb-5 lg:pb-[24px]"
          >
            <ol className="type-microcopy flex flex-wrap items-center gap-1 text-white/[0.48]">
              {trail.map((c, i) => {
                const isLast = i === trail.length - 1;
                return (
                  <li key={`${c.label}-${i}`} className="inline-flex items-center gap-1">
                    {i > 0 && <FeatherChevronRight className="h-4 w-4 text-white/[0.48]" />}
                    {c.href && !isLast ? (
                      <Link href={c.href} className="focus-ring rounded transition-colors hover:text-white">
                        {c.label}
                      </Link>
                    ) : (
                      <span className={cn(isLast ? "font-medium text-[#5ee878]" : "")}>{c.label}</span>
                    )}
                  </li>
                );
              })}
            </ol>
          </nav>
        )}

        <div
          className={cn(
            "flex flex-col gap-6",
            align === "center"
              ? "mx-auto max-w-[820px] items-center text-center"
              : "lg:flex-row lg:items-end lg:justify-between lg:gap-10",
          )}
        >
          <div className={cn("min-w-0", align === "left" && "max-w-[820px]")}>
            {eyebrow && (
              <Eyebrow className={cn("mb-5 lg:mb-7", align === "center" && "justify-center")}>
                {eyebrow}
              </Eyebrow>
            )}
            <h1
              className={cn(
                "type-display text-white",
                titleClassName,
              )}
            >
              {title}
            </h1>
          </div>

          {aside ? (
            <div className="shrink-0 lg:pb-2">{aside}</div>
          ) : copy && !bottomSplit ? (
            <p
              className={cn(
                "type-body-lg text-white/[0.64]",
                align === "left" ? "max-w-[460px] lg:pb-2" : "max-w-[640px]",
              )}
            >
              {copy}
            </p>
          ) : null}
        </div>

        {bottomSplit && (
          <div className="mt-12 grid gap-8 pt-4 lg:mt-16 lg:grid-cols-[minmax(0,1fr)_480px] lg:items-end lg:gap-12">
            <p className="type-body-emphasis-lg text-white">
              {bottomSplit.lead}
            </p>
            <p className="type-body border-t border-white/20 pt-5 text-white/[0.64]">
              {bottomSplit.detail}
            </p>
          </div>
        )}

        {actions && (
          <div className={cn("mt-8 flex flex-wrap gap-4 lg:mt-10", align === "center" && "justify-center")}>
            {actions}
          </div>
        )}

        {children}
      </div>
    </section>
  );
}

import Link from "next/link";
import { ChevronRight } from "lucide-react";
import { cn } from "@/lib/utils";
import { Eyebrow, SectionTitle, Lead, GrainTexture } from "./primitives";

export interface Crumb {
  label: string;
  href?: string;
}

/**
 * Inner-page hero in the homepage style: the Figma hero photo faded into the page, grain overlay,
 * green eyebrow, H1 and lead. Every non-home page opens with this so the site reads as one design.
 */
export function PageHero({
  eyebrow,
  title,
  lead,
  crumbs,
  align = "left",
  children,
  className,
  innerClassName,
}: {
  eyebrow?: React.ReactNode;
  title: React.ReactNode;
  lead?: React.ReactNode;
  crumbs?: Crumb[];
  align?: "left" | "center";
  /** Actions, meta rows or anything else rendered under the lead. */
  children?: React.ReactNode;
  className?: string;
  innerClassName?: string;
}) {
  const centered = align === "center";
  return (
    <header className={cn("relative overflow-hidden pb-12 pt-12 sm:pb-16 sm:pt-20", className)}>
      <div
        className="pointer-events-none absolute inset-0 bg-[url('/home/hero-bg.webp')] bg-cover bg-top opacity-70 [mask-image:linear-gradient(to_bottom,black_30%,transparent)]"
        aria-hidden="true"
      />
      <GrainTexture className="[mask-image:linear-gradient(to_bottom,black_30%,transparent)]" />
      <div
        className={cn(
          "relative mx-auto flex max-w-[1272px] flex-col gap-4 px-4 sm:px-6 lg:px-8",
          centered && "items-center text-center",
          innerClassName,
        )}
      >
        {crumbs && crumbs.length > 0 ? (
          <nav aria-label="Breadcrumb" className="mb-1">
            <ol className={cn("flex flex-wrap items-center gap-1.5 text-sm text-white/50", centered && "justify-center")}>
              {crumbs.map((c, i) => (
                <li key={`${c.label}-${i}`} className="flex min-w-0 items-center gap-1.5">
                  {i > 0 && <ChevronRight className="h-3.5 w-3.5 shrink-0" aria-hidden="true" />}
                  {c.href ? (
                    <Link href={c.href} className="focus-ring rounded-sm transition-colors hover:text-white">
                      {c.label}
                    </Link>
                  ) : (
                    <span aria-current="page" className="truncate text-white/80">
                      {c.label}
                    </span>
                  )}
                </li>
              ))}
            </ol>
          </nav>
        ) : null}
        {eyebrow ? <Eyebrow className="w-fit">{eyebrow}</Eyebrow> : null}
        <SectionTitle as="h1" className={cn("max-w-[900px]", centered && "mx-auto")}>
          {title}
        </SectionTitle>
        {lead ? <Lead className={cn("max-w-[720px]", centered && "mx-auto")}>{lead}</Lead> : null}
        {children}
      </div>
    </header>
  );
}

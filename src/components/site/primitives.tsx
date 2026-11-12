import Image from "next/image";
import Link from "next/link";
import { cn } from "@/lib/utils";
import { FeatherArrowRight } from "@/components/site/icons";

/**
 * Ridhzo Design System Eyebrow label with glowing Highlight-Green halo indicator
 * (Figma node 61:442 / SectionEyebrowBar) using the Label text style (Geist 13px/500/18px/+4% uppercase).
 */
export function Eyebrow({
  children,
  theme = "dark",
  variant = "dot",
  className,
}: {
  children: React.ReactNode;
  theme?: "dark" | "light";
  variant?: "dot" | "pill";
  className?: string;
}) {
  if (variant === "pill") {
    return (
      <span
        className={cn(
          "type-label inline-flex items-center justify-center rounded-full border border-[#5ee878]/60 bg-[#5ee878]/20 px-4 py-1.5",
          theme === "dark" ? "text-white" : "text-black",
          className,
        )}
      >
        {children}
      </span>
    );
  }

  return (
    <span className={cn("inline-flex items-center gap-3 sm:gap-4", className)}>
      <span
        className="flex size-[22px] shrink-0 items-center justify-center rounded-full bg-[#5ee878]/[0.32] sm:size-[26px]"
        aria-hidden="true"
      >
        <span className="size-[8px] rounded-full bg-[#5ee878] sm:size-[10px]" />
      </span>
      <span
        className={cn(
          "type-label",
          theme === "dark" ? "text-[#5ee878]" : "text-black",
        )}
      >
        {children}
      </span>
    </span>
  );
}

/**
 * Ridhzo Design System heading hierarchy (`Inter`, Figma node 264:32910):
 * - display-cta: 112px Black uppercase (-5px tracking)
 * - display: 96px Black uppercase (-5px tracking)
 * - h1: 80px Black uppercase (-5px tracking)
 * - h2: 72px ExtraBold uppercase (-5px tracking)
 * - h3: 32px Bold (-0.416px / -1.3% tracking)
 * - h4: 24px Bold (-0.312px / -1.3% tracking)
 * - h5: 20px Bold (-0.26px / -1.3% tracking)
 */
export function SectionTitle({
  children,
  className,
  as: Tag = "h2",
  theme = "dark",
  size = "h2",
}: {
  children: React.ReactNode;
  className?: string;
  as?: "h1" | "h2" | "h3" | "h4" | "h5" | "p" | "span";
  theme?: "dark" | "light";
  size?: "display-cta" | "display" | "h1" | "h2" | "h3" | "h4" | "h5";
}) {
  return (
    <Tag
      className={cn(
        theme === "dark" ? "text-white" : "text-black",
        size === "display-cta" && "type-display-cta",
        size === "display" && "type-display",
        size === "h1" && "type-h1",
        size === "h2" && "type-h2",
        size === "h3" && "type-h3",
        size === "h4" && "type-h4",
        size === "h5" && "type-h5",
        className,
      )}
    >
      {children}
    </Tag>
  );
}

/** Words emphasized in Highlight Green (`#5ee878`) — used inside H2 headings and Label eyebrows. */
export function Accent({ children, className }: { children: React.ReactNode; className?: string }) {
  return <span className={cn("text-[#5ee878]", className)}>{children}</span>;
}

/**
 * Outline / Stroke Variant for Display, H1, or H2 words (Figma node 264:32910).
 * Fill/stroke swap applied to individual inline spans sharing the parent Inter heading size & weight.
 */
export function TextOutline({
  children,
  variant = "dark",
  className,
}: {
  children: React.ReactNode;
  variant?: "dark" | "light" | "cutout" | "hero" | "pricing";
  className?: string;
}) {
  return (
    <span
      className={cn(
        variant === "dark" && "text-outline-white",
        variant === "light" && "text-outline-black",
        variant === "cutout" && "hero-outline-cutout",
        variant === "hero" && "text-outline-hero",
        variant === "pricing" && "text-outline-pricing",
        className,
      )}
    >
      {children}
    </span>
  );
}

/** Supporting body copy using Geist (`Body` -> `Body Large`) and 64% ink opacity. */
export function Lead({
  children,
  className,
  theme = "dark",
}: {
  children: React.ReactNode;
  className?: string;
  theme?: "dark" | "light";
}) {
  return (
    <p
      className={cn(
        "type-body-lg",
        theme === "dark" ? "text-white/[0.64]" : "text-black/[0.64]",
        className,
      )}
    >
      {children}
    </p>
  );
}

/** Geist body typography variants from Ridhzo Typography (Figma node 264:32910). */
export function BodyText({
  children,
  variant = "default",
  theme = "dark",
  tone = "secondary",
  as: Tag = "p",
  className,
}: {
  children: React.ReactNode;
  variant?: "emphasis-lg" | "emphasis" | "lg" | "default" | "sm";
  theme?: "dark" | "light";
  tone?: "primary" | "secondary" | "muted";
  as?: "p" | "span" | "div";
  className?: string;
}) {
  return (
    <Tag
      className={cn(
        variant === "emphasis-lg" && "type-body-emphasis-lg",
        variant === "emphasis" && "type-body-emphasis",
        variant === "lg" && "type-body-lg",
        variant === "default" && "type-body",
        variant === "sm" && "type-body-sm",
        theme === "dark"
          ? tone === "primary"
            ? "text-white"
            : tone === "muted"
              ? "text-white/[0.48]"
              : "text-white/[0.64]"
          : tone === "primary"
            ? "text-black"
            : tone === "muted"
              ? "text-black/[0.48]"
              : "text-black/[0.64]",
        className,
      )}
    >
      {children}
    </Tag>
  );
}

/** Geist Label eyebrow text (13px / 500 Medium / 18px / +4% tracking / uppercase). */
export function LabelText({
  children,
  theme = "dark",
  accent = false,
  as: Tag = "span",
  className,
}: {
  children: React.ReactNode;
  theme?: "dark" | "light";
  accent?: boolean;
  as?: "span" | "p";
  className?: string;
}) {
  return (
    <Tag
      className={cn(
        "type-label",
        accent ? "text-[#5ee878]" : theme === "dark" ? "text-white" : "text-black",
        className,
      )}
    >
      {children}
    </Tag>
  );
}

/** Geist Microcopy helper/breadcrumb text (12px / 400 Regular / 18px). */
export function Microcopy({
  children,
  theme = "dark",
  tone = "muted",
  as: Tag = "p",
  className,
}: {
  children: React.ReactNode;
  theme?: "dark" | "light";
  tone?: "primary" | "secondary" | "muted";
  as?: "p" | "span";
  className?: string;
}) {
  return (
    <Tag
      className={cn(
        "type-microcopy",
        theme === "dark"
          ? tone === "primary"
            ? "text-white"
            : tone === "secondary"
              ? "text-white/[0.64]"
              : "text-white/[0.48]"
          : tone === "primary"
            ? "text-black"
            : tone === "secondary"
              ? "text-black/[0.64]"
              : "text-black/[0.48]",
        className,
      )}
    >
      {children}
    </Tag>
  );
}

type BtnVariant = "primary" | "primary-dark" | "secondary" | "secondary-outline" | "secondary-light" | "text";

type BtnProps = {
  href: string;
  children: React.ReactNode;
  size?: "sm" | "md" | "lg";
  variant?: BtnVariant;
  arrow?: boolean;
  className?: string;
};

/**
 * Ridhzo Design System Button component (Figma node 50:590).
 * Sizes: sm (40px / R10), md (48px / R12), lg (56px / R14).
 */
export function HomeButton({ href, children, size = "lg", variant = "primary", arrow, className }: BtnProps) {
  const showArrow = arrow ?? (variant === "primary" || variant === "primary-dark" || variant === "text");
  return (
    <Link
      href={href}
      className={cn(
        "focus-ring type-button inline-flex items-center justify-center gap-[8px] whitespace-nowrap transition-colors",
        size === "sm" && "h-[40px] rounded-[10px] px-[16px]",
        size === "md" && "h-[48px] rounded-[12px] px-[20px]",
        size === "lg" && "h-[56px] rounded-[14px] px-[24px]",
        variant === "primary" &&
        "border border-white/80 bg-white text-black hover:border-white hover:bg-white/80 active:border-white active:bg-white/90",
        variant === "primary-dark" &&
        "border border-black/80 bg-black text-white hover:border-black hover:bg-black/80 active:border-black active:bg-black/90",
        variant === "secondary" &&
        "border border-white/[0.12] bg-white/[0.04] text-white hover:border-white/[0.16] hover:bg-white/[0.08] active:border-white/[0.12] active:bg-white/[0.06]",
        variant === "secondary-outline" &&
        "border border-white bg-transparent text-white hover:bg-white/10 active:bg-white/[0.06]",
        variant === "secondary-light" &&
        "border border-black bg-transparent text-black hover:bg-black/[0.04] active:bg-black/[0.08]",
        variant === "text" && "text-white/80 hover:text-white active:text-white/80",
        className,
      )}
    >
      {children}
      {showArrow && <FeatherArrowRight className="h-5 w-5" />}
    </Link>
  );
}

/** Alternating dark (#000000) / light (#ffffff) page section band. */
export function HomeSection({
  id,
  children,
  className,
  theme = "dark",
  texture = false,
}: {
  id?: string;
  children: React.ReactNode;
  className?: string;
  theme?: "dark" | "light";
  texture?: boolean;
}) {
  return (
    <section
      id={id}
      className={cn(
        "relative z-[1] overflow-x-clip px-4 py-16 sm:px-8 lg:px-[84px] lg:py-[88px]",
        theme === "dark" ? "bg-black text-white" : "bg-white text-black",
        className,
      )}
    >
      {texture && theme === "dark" && <GrainTexture />}
      <div className="relative z-[1] mx-auto w-full max-w-[1272px]">{children}</div>
    </section>
  );
}

/** Glassmorphism frame used across showcase screenshots. */
export function GlassPanel({ children, className }: { children: React.ReactNode; className?: string }) {
  return (
    <div
      className={cn(
        "relative overflow-hidden rounded-[24px] border border-white/[0.12] bg-white/[0.04] backdrop-blur-md",
        className,
      )}
    >
      {children}
    </div>
  );
}

export function FloatingChip({
  title,
  subtitle,
  badge,
  children,
  className,
}: {
  title?: string;
  subtitle?: string;
  badge?: string;
  children?: React.ReactNode;
  className?: string;
}) {
  return (
    <div
      className={cn(
        "flex items-center gap-3 rounded-xl border border-white/[0.12] bg-black/90 px-4 py-3 shadow-[0_20px_50px_rgba(0,0,0,0.5)] backdrop-blur-md",
        className,
      )}
    >
      {children ? (
        children
      ) : (
        <>
          {badge ? (
            <span className="grid h-[30px] w-[30px] shrink-0 place-items-center rounded-[9px] border border-[#28a263] bg-[#5ee878] text-[10px] font-bold text-black">
              {badge}
            </span>
          ) : (
            <span className="h-[9px] w-[9px] shrink-0 rounded-full bg-[#5ee878] shadow-[0_0_0_5px_rgba(94,232,120,0.12),0_0_16px_rgba(94,232,120,0.45)]" />
          )}
          <div>
            {title ? <p className="text-[11px] font-bold leading-[16px] text-white">{title}</p> : null}
            {subtitle ? <p className="text-[9px] leading-[14px] text-white/[0.64]">{subtitle}</p> : null}
          </div>
        </>
      )}
    </div>
  );
}

/** Bordered product screenshot inside a GlassPanel. */
export function ShotPanel({
  src,
  alt,
  width,
  height,
  sizes,
  priority,
  flush,
  className,
}: {
  src: string;
  alt: string;
  width: number;
  height: number;
  sizes?: string;
  priority?: boolean;
  flush?: boolean;
  className?: string;
}) {
  return (
    <GlassPanel className={cn(flush ? "rounded-b-none p-3 pb-0 sm:p-4 sm:pb-0" : "p-4 sm:p-8", className)}>
      <Image
        src={src}
        alt={alt}
        width={width}
        height={height}
        priority={priority}
        sizes={sizes ?? "(min-width: 1024px) 50vw, 100vw"}
        className={cn(
          "h-auto w-full rounded-[14px] border border-white/10",
          flush && "rounded-b-none shadow-2xl",
        )}
      />
    </GlassPanel>
  );
}

export function GrainTexture({ className }: { className?: string }) {
  return (
    <div
      className={cn(
        "pointer-events-none absolute inset-0 bg-[url('/home/texture.webp')] bg-cover bg-center opacity-40 mix-blend-overlay",
        className,
      )}
      aria-hidden="true"
    />
  );
}

/** Bordered surface card supporting both dark and light alternating sections. */
export function GlassCard({
  children,
  theme = "dark",
  className,
}: {
  children: React.ReactNode;
  theme?: "dark" | "light";
  className?: string;
}) {
  return (
    <div
      className={cn(
        "rounded-[16px] border p-6 transition-colors",
        theme === "dark"
          ? "border-white/[0.12] bg-white/[0.04] hover:border-white/[0.24] hover:bg-white/[0.06]"
          : "border-black/20 bg-white hover:border-black/40",
        className,
      )}
    >
      {children}
    </div>
  );
}

/** Highlight-Green radial ambient glow (Figma Color System node 264:33003 — replaces retired #0d2710). */
export function PageGlows({ className }: { className?: string }) {
  return (
    <div
      className={cn(
        "pointer-events-none absolute inset-0 overflow-hidden bg-[radial-gradient(620px_420px_at_92%_6%,rgba(94,232,120,0.18),rgba(94,232,120,0.05)_48%,transparent_76%),radial-gradient(560px_420px_at_6%_76%,rgba(94,232,120,0.12),rgba(94,232,120,0.03)_50%,transparent_76%)]",
        className,
      )}
      aria-hidden="true"
    />
  );
}

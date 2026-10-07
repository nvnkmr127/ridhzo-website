import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { cn } from "@/lib/utils";

/** Uppercase green pill that opens every section (Figma: Button/Eyebrow). */
export function Eyebrow({ children, className }: { children: React.ReactNode; className?: string }) {
  return (
    <span
      className={cn(
        "inline-flex items-center justify-center rounded-full border border-highlight/60 bg-highlight/20 px-3 py-1 text-[13px] font-medium uppercase leading-[18px] tracking-[0.04em] text-foreground",
        className,
      )}
    >
      {children}
    </span>
  );
}

/** Section H2: 52/56 semibold, with the accent words in highlight green. */
export function SectionTitle({
  children,
  className,
  as: Tag = "h2",
}: {
  children: React.ReactNode;
  className?: string;
  as?: "h1" | "h2";
}) {
  return (
    <Tag
      className={cn(
        "text-[34px] font-semibold leading-[1.1] tracking-[-0.025em] text-white sm:text-[44px] lg:text-[52px] lg:leading-[56px]",
        className,
      )}
    >
      {children}
    </Tag>
  );
}

export function Accent({ children }: { children: React.ReactNode }) {
  return <span className="text-highlight">{children}</span>;
}

export function Lead({ children, className }: { children: React.ReactNode; className?: string }) {
  return <p className={cn("text-base leading-7 text-white/65 sm:text-lg sm:leading-7", className)}>{children}</p>;
}

type BtnProps = {
  href: string;
  children: React.ReactNode;
  size?: "md" | "lg";
  variant?: "primary" | "secondary" | "text";
  arrow?: boolean;
  className?: string;
};

/** Figma Button: primary = white/80 fill, secondary = white/4 + white/12 border, text = no chrome. */
export function HomeButton({ href, children, size = "lg", variant = "primary", arrow, className }: BtnProps) {
  const showArrow = arrow ?? variant !== "secondary";
  return (
    <Link
      href={href}
      className={cn(
        "focus-ring inline-flex items-center justify-center gap-2 whitespace-nowrap text-sm font-medium transition-colors",
        size === "lg" ? "h-14 rounded-[14px] px-6" : "h-12 rounded-xl px-5",
        variant === "primary" && "border border-white bg-white/80 text-black hover:bg-white",
        variant === "secondary" && "border border-white/12 bg-white/[0.04] text-white hover:bg-white/10",
        variant === "text" && "text-white/80 hover:text-white",
        className,
      )}
    >
      {children}
      {showArrow && <ArrowRight className="h-5 w-5" aria-hidden="true" />}
    </Link>
  );
}

/** Wraps a section with the shared green-tinted ambient wash and standard padding. */
export function HomeSection({
  id,
  children,
  className,
  innerClassName,
  texture,
}: {
  id?: string;
  children: React.ReactNode;
  className?: string;
  innerClassName?: string;
  /** Figma "Frame 6": grain photo at 40% with an overlay blend. */
  texture?: boolean;
}) {
  return (
    <section id={id} className={cn("relative overflow-hidden py-16 sm:py-20", className)}>
      {texture && <GrainTexture />}
      <div
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(60rem_28rem_at_50%_50%,rgba(94,232,120,0.05),transparent_70%)] [mask-image:linear-gradient(to_bottom,transparent,black_30%,black_70%,transparent)]"
        aria-hidden="true"
      />
      <div className={cn("relative mx-auto max-w-[1272px] px-4 sm:px-6 lg:px-8", innerClassName)}>{children}</div>
    </section>
  );
}

/** Dark glass card used by the product mock-ups. */
export function GlassPanel({ children, className }: { children: React.ReactNode; className?: string }) {
  return (
    <div className={cn("rounded-3xl bg-white/[0.12] p-3 sm:p-8", className)}>
      <div className="overflow-hidden rounded-2xl border border-white/10 bg-[#0a0b0c]">{children}</div>
    </div>
  );
}

/** Floating notification chip (Figma: glass chips overlapping the mock-ups). */
export function FloatingChip({
  title,
  subtitle,
  badge,
  className,
}: {
  title: string;
  subtitle: string;
  badge?: string;
  className?: string;
}) {
  return (
    <div
      className={cn(
        "flex items-center gap-3 rounded-xl border border-white/12 bg-[rgba(10,12,11,0.9)] px-4 py-3 shadow-[0_20px_50px_rgba(0,0,0,0.5)] backdrop-blur-md",
        className,
      )}
    >
      {badge ? (
        <span className="grid h-[30px] w-[30px] shrink-0 place-items-center rounded-[9px] border border-[#28a263] bg-highlight text-[10px] font-bold text-black">
          {badge}
        </span>
      ) : (
        <span className="h-[9px] w-[9px] shrink-0 rounded-full bg-highlight shadow-[0_0_0_5px_rgba(94,232,120,0.1),0_0_16px_rgba(94,232,120,0.45)]" />
      )}
      <div>
        <p className="text-[11px] font-bold leading-[16px] text-[#f7f7f5]">{title}</p>
        <p className="text-[9px] leading-[14px] text-[#7d7d81]">{subtitle}</p>
      </div>
    </div>
  );
}

/** Glass frame around a product screenshot exported from Figma (white/12, 24px radius, 32px padding). */
export function ShotPanel({
  src,
  alt,
  width,
  height,
  priority,
  flush,
  sizes,
  className,
}: {
  src: string;
  alt: string;
  width: number;
  height: number;
  priority?: boolean;
  /** Bleed the screenshot off the bottom edge (pipeline section). */
  flush?: boolean;
  sizes?: string;
  className?: string;
}) {
  return (
    <div className={cn("rounded-3xl bg-white/[0.12] p-3 sm:p-8", flush && "rounded-b-none pb-0 sm:pb-0", className)}>
      <Image
        src={src}
        alt={alt}
        width={width}
        height={height}
        priority={priority}
        sizes={sizes ?? "(min-width: 1024px) 50vw, 100vw"}
        className={cn("h-auto w-full rounded-xl sm:rounded-2xl", flush && "rounded-b-none")}
      />
    </div>
  );
}

/** Grain photo from the Figma frames, blended as overlay at 40%. Decorative only. */
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

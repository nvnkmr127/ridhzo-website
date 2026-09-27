import { cn } from "@/lib/utils";

/**
 * Monochrome decoration primitives shared across the site:
 * blueprint-style corner brackets, crosshair marks, dot-grid washes and
 * annotated hairline rules. All inherit `currentColor` so they stay
 * strictly on the black→white scale.
 */

/** Blueprint corner brackets pinned to a relatively-positioned parent. */
export function CornerTicks({ className }: { className?: string }) {
  const corner = "absolute h-3 w-3 border-foreground/40";
  return (
    <div aria-hidden="true" className={cn("pointer-events-none absolute inset-1", className)}>
      <span className={cn(corner, "left-0 top-0 border-l border-t")} />
      <span className={cn(corner, "right-0 top-0 border-r border-t")} />
      <span className={cn(corner, "bottom-0 left-0 border-b border-l")} />
      <span className={cn(corner, "bottom-0 right-0 border-b border-r")} />
    </div>
  );
}

/** Small crosshair/plus register mark used at rule intersections and card corners. */
export function CrossMark({ className }: { className?: string }) {
  return (
    <svg
      aria-hidden="true"
      viewBox="0 0 12 12"
      className={cn("h-3 w-3 text-muted-foreground/60", className)}
      fill="none"
      stroke="currentColor"
      strokeWidth="1"
    >
      <path d="M6 0v12M0 6h12" />
    </svg>
  );
}

/** Annotated hairline rule: gradient line with a mono label and register marks. */
export function SectionRule({ label }: { label?: string }) {
  return (
    <div aria-hidden="true" className="flex items-center gap-3">
      <span className="h-px flex-1 bg-gradient-to-r from-transparent via-white/15 to-white/15" />
      {label ? (
        <>
          <CrossMark />
          <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-muted-foreground">{label}</span>
          <CrossMark />
        </>
      ) : null}
      <span className="h-px flex-1 bg-gradient-to-l from-transparent via-white/15 to-white/15" />
    </div>
  );
}

/**
 * Editorial two-digit marker (01, 02 …) used on cards to replace the generic
 * icon-only language with a numbered, catalogue-like system.
 */
export function IndexMarker({ index, className }: { index: number; className?: string }) {
  return (
    <span
      aria-hidden="true"
      className={cn(
        "font-mono text-xs font-semibold tracking-widest text-muted-foreground/70",
        className
      )}
    >
      {String(index).padStart(2, "0")}
    </span>
  );
}

/** Line-art device illustration: phone outline with vibration + alert marks. */
export function PhoneAlertIllustration({ className }: { className?: string }) {
  return (
    <svg
      aria-hidden="true"
      viewBox="0 0 96 120"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      className={cn("text-foreground/70", className)}
    >
      <rect x="28" y="8" width="40" height="84" rx="8" />
      <path d="M42 14h12" />
      {/* alert dot + radiating vibration marks */}
      <circle cx="48" cy="44" r="6" />
      <path d="M48 30v-6M48 64v-6M38 44h-6M64 44h-6" strokeWidth="1" />
      <path d="M36 26l-4-4M60 26l4-4M36 62l-4 4M60 62l4 4" strokeWidth="1" />
      <path d="M28 84c-10 4-16 10-16 18M68 84c10 4 16 10 16 18" strokeWidth="1" className="text-muted-foreground" />
    </svg>
  );
}

/** Line-art chat illustration: message bubble with a one-tap cursor. */
export function ChatTapIllustration({ className }: { className?: string }) {
  return (
    <svg
      aria-hidden="true"
      viewBox="0 0 120 96"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      className={cn("text-foreground/70", className)}
    >
      <path d="M12 20a8 8 0 018-8h72a8 8 0 018 8v40a8 8 0 01-8 8H44L26 84V68h-6a8 8 0 01-8-8V20z" />
      <path d="M28 28h48M28 40h32" strokeWidth="1" className="text-muted-foreground" />
      {/* tap cursor */}
      <circle cx="92" cy="52" r="10" strokeDasharray="2 3" strokeWidth="1" />
      <path d="M92 42V30l14 10-14 6v-6" strokeWidth="1.25" />
    </svg>
  );
}

/** Line-art kanban illustration: three columns with drifting cards. */
export function KanbanIllustration({ className }: { className?: string }) {
  return (
    <svg
      aria-hidden="true"
      viewBox="0 0 120 96"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      className={cn("text-foreground/70", className)}
    >
      <path d="M16 18v66M56 18v66M96 18v66" strokeWidth="1" className="text-muted-foreground" />
      <rect x="8" y="26" width="16" height="12" />
      <rect x="8" y="44" width="16" height="12" />
      <rect x="48" y="32" width="16" height="12" />
      <rect x="88" y="26" width="16" height="12" className="fill-foreground/10" />
      {/* motion arrow: card moving right */}
      <path d="M30 50h14m0 0l-4-4m4 4l-4 4" strokeWidth="1" />
      <path d="M70 38h14m0 0l-4-4m4 4l-4 4" strokeWidth="1" />
    </svg>
  );
}

import { cn } from "@/lib/utils";

/**
 * Shared section top eyebrow row from Figma:
 * [26px green halo dot] [LEFT LABEL] ────────── [RIGHT LABEL]
 */
export function SectionEyebrowBar({
  left,
  right,
  theme = "dark",
  rightMuted = false,
  className,
}: {
  left: string;
  right: string;
  theme?: "dark" | "light";
  rightMuted?: boolean;
  className?: string;
}) {
  const isDark = theme === "dark";
  return (
    <div className={cn("flex w-full items-center gap-2.5 sm:gap-[24px]", className)}>
      <div className="flex shrink-0 items-center gap-2 sm:gap-[20px]">
        <span
          className="flex size-[22px] shrink-0 items-center justify-center rounded-full bg-[#5ee878]/[0.32] sm:size-[26px]"
          aria-hidden="true"
        >
          <span className="size-[8px] rounded-full bg-[#5ee878] sm:size-[10px]" />
        </span>
        <span
          className={cn(
            "whitespace-nowrap font-sans text-[10px] font-medium uppercase leading-[16px] tracking-[0.04em] sm:text-[13px] sm:leading-[18px]",
            isDark ? "text-[#5ee878]" : "text-black",
          )}
        >
          {left}
        </span>
      </div>

      <div
        className={cn("h-px min-w-[12px] flex-1 sm:min-w-[24px]", isDark ? "bg-white/[0.32]" : "bg-black/20")}
        aria-hidden="true"
      />

      <span
        className={cn(
          "whitespace-nowrap text-right font-sans text-[10px] font-medium uppercase leading-[16px] tracking-[0.04em] sm:text-[13px] sm:leading-[18px]",
          isDark ? (rightMuted ? "text-white/80" : "text-white") : "text-black",
        )}
      >
        {right}
      </span>
    </div>
  );
}


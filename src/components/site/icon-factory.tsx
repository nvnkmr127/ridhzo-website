import type { ComponentType, ReactNode, SVGProps } from "react";
import { cn } from "@/lib/utils";

/** Shared prop contract for Design System Feather & Ridhzo icons (24×24px, 2px rounded strokes). */
export type IconComponent = ComponentType<SVGProps<SVGSVGElement>>;

export function createFeatherIcon(displayName: string, children: ReactNode): IconComponent {
  function FeatherIconComponent({ className, ...props }: SVGProps<SVGSVGElement>) {
    const isDecorative = !props["aria-label"] && !props["aria-labelledby"];
    return (
      <svg
        width={24}
        height={24}
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth={2}
        strokeLinecap="round"
        strokeLinejoin="round"
        aria-hidden={isDecorative ? true : undefined}
        className={cn("h-6 w-6 shrink-0", className)}
        {...props}
      >
        {children}
      </svg>
    );
  }
  FeatherIconComponent.displayName = displayName;
  return FeatherIconComponent;
}


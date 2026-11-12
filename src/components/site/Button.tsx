import Link from "next/link";
import type { AnchorHTMLAttributes, ButtonHTMLAttributes, ReactNode } from "react";
import { cn } from "@/lib/utils";
import { FeatherArrowRight } from "@/components/site/icons";

/**
 * Ridhzo Design System Button (Figma node 264:32808 / component set 50:590).
 *
 * Types (4 core + light-surface & outline counterparts):
 * - `primary`: Main action · default CTA (white fill, black text, 1px white/80 border)
 * - `secondary`: Supporting action (white/4 fill, white text, 1px white/12 border)
 * - `text`: Low-emphasis navigation (no fill, no border, white/80 -> white)
 * - `accent`: Rare, optional dark-green emphasis (#0d2710 fill, white text, 1px white/12 border)
 * - `primary-dark`: Main action on light surfaces (black fill, white text, 1px black/80 border)
 * - `secondary-outline`: White 1px bordered transparent CTA on dark surfaces
 * - `secondary-light`: Black 1px bordered transparent CTA on light surfaces
 * - `text-light`: Low-emphasis navigation on light surfaces
 *
 * Sizes:
 * - `sm`: 40px height · 16px horizontal padding · 10px radius
 * - `md`: 48px height · 20px horizontal padding · 12px radius (default)
 * - `lg`: 56px height · 24px horizontal padding · 14px radius
 */
export type ButtonVariant =
  | "primary"
  | "secondary"
  | "text"
  | "accent"
  | "primary-dark"
  | "secondary-outline"
  | "secondary-light"
  | "text-light";

export type ButtonSize = "sm" | "md" | "lg";

export type ButtonIconMode = "none" | "trailing";

export function buttonVariants({
  variant = "primary",
  size = "md",
  hasIcon = false,
  className,
}: {
  variant?: ButtonVariant;
  size?: ButtonSize;
  hasIcon?: boolean;
  className?: string;
} = {}) {
  const isOnLight =
    variant === "primary-dark" || variant === "secondary-light" || variant === "text-light";

  return cn(
    "group/btn focus-ring type-button inline-flex cursor-pointer select-none items-center justify-center whitespace-nowrap transition-[color,background-color,border-color] duration-150",
    "disabled:pointer-events-none aria-disabled:pointer-events-none",
    isOnLight && "focus-ring-light",
    hasIcon && "gap-[8px]",
    size === "sm" && "h-[40px] rounded-[10px] px-[16px]",
    size === "md" && "h-[48px] rounded-[12px] px-[20px]",
    size === "lg" && "h-[56px] rounded-[14px] px-[24px]",
    variant === "primary" &&
      "border border-white/80 bg-white text-black hover:border-white hover:bg-white/80 active:border-white active:bg-white/90 disabled:border-white/[0.12] disabled:bg-white/20 disabled:text-white/[0.48] aria-disabled:border-white/[0.12] aria-disabled:bg-white/20 aria-disabled:text-white/[0.48]",
    variant === "secondary" &&
      "border border-white/[0.12] bg-white/[0.04] text-white hover:border-white/[0.16] hover:bg-white/[0.08] active:border-white/[0.12] active:bg-white/[0.06] disabled:border-white/[0.08] disabled:bg-white/[0.02] disabled:text-white/[0.32] aria-disabled:border-white/[0.08] aria-disabled:bg-white/[0.02] aria-disabled:text-white/[0.32]",
    variant === "text" &&
      "border border-transparent bg-transparent text-white/80 hover:text-white active:text-white/80 disabled:text-white/[0.32] aria-disabled:text-white/[0.32]",
    variant === "accent" &&
      "border border-white/[0.12] bg-[#0d2710] text-white hover:border-white/[0.16] hover:bg-[#0d2710] active:border-white/[0.08] active:bg-[#0d2710] disabled:border-white/[0.08] disabled:bg-[#0d2710]/40 disabled:text-white/[0.32] aria-disabled:border-white/[0.08] aria-disabled:bg-[#0d2710]/40 aria-disabled:text-white/[0.32]",
    variant === "primary-dark" &&
      "border border-black/80 bg-black text-white hover:border-black hover:bg-black/80 active:border-black active:bg-black/90 disabled:border-black/[0.12] disabled:bg-black/20 disabled:text-black/[0.48] aria-disabled:border-black/[0.12] aria-disabled:bg-black/20 aria-disabled:text-black/[0.48]",
    variant === "secondary-outline" &&
      "border border-white bg-transparent text-white hover:bg-white/[0.08] active:bg-white/[0.06] disabled:border-white/20 disabled:text-white/[0.32] aria-disabled:border-white/20 aria-disabled:text-white/[0.32]",
    variant === "secondary-light" &&
      "border border-black bg-transparent text-black hover:bg-black/[0.04] active:bg-black/[0.08] disabled:border-black/20 disabled:text-black/[0.32] aria-disabled:border-black/20 aria-disabled:text-black/[0.32]",
    variant === "text-light" &&
      "border border-transparent bg-transparent text-black/80 hover:text-black active:text-black/80 disabled:text-black/[0.32] aria-disabled:text-black/[0.32]",
    className,
  );
}

type SharedButtonProps = {
  children: ReactNode;
  variant?: ButtonVariant;
  size?: ButtonSize;
  icon?: ButtonIconMode;
  arrow?: boolean;
  leadingIcon?: ReactNode;
  trailingIcon?: ReactNode;
  disabled?: boolean;
  className?: string;
};

type ButtonAsLinkProps = SharedButtonProps &
  Omit<AnchorHTMLAttributes<HTMLAnchorElement>, keyof SharedButtonProps> & {
    href: string;
    external?: boolean;
  };

type ButtonAsNativeProps = SharedButtonProps &
  Omit<ButtonHTMLAttributes<HTMLButtonElement>, keyof SharedButtonProps> & {
    href?: undefined;
    external?: never;
  };

export type ButtonProps = ButtonAsLinkProps | ButtonAsNativeProps;

export function Button(props: ButtonProps) {
  const {
    children,
    variant = "primary",
    size = "md",
    icon = "none",
    arrow,
    leadingIcon,
    trailingIcon,
    disabled = false,
    className,
    href,
    ...rest
  } = props;

  const showTrailing = Boolean(trailingIcon) || icon === "trailing" || arrow === true;
  const resolvedTrailing = trailingIcon ?? (showTrailing ? <FeatherArrowRight className="h-6 w-6" /> : null);
  const classes = buttonVariants({
    variant,
    size,
    hasIcon: Boolean(leadingIcon) || Boolean(resolvedTrailing),
    className,
  });

  const content = (
    <>
      {leadingIcon ? (
        <span className="inline-flex size-[24px] shrink-0 items-center justify-center" aria-hidden="true">
          {leadingIcon}
        </span>
      ) : null}
      {children}
      {resolvedTrailing ? (
        <span
          className={cn(
            "inline-flex size-[24px] shrink-0 items-center justify-center transition-transform duration-150",
            !disabled && !trailingIcon && "group-hover/btn:translate-x-[3px] group-active/btn:translate-x-0",
          )}
          aria-hidden="true"
        >
          {resolvedTrailing}
        </span>
      ) : null}
    </>
  );

  if (typeof href === "string") {
    const { external, target, rel, ...anchorProps } = rest as Omit<
      ButtonAsLinkProps,
      keyof SharedButtonProps | "href"
    >;

    if (disabled) {
      return (
        <span role="link" aria-disabled="true" className={classes}>
          {content}
        </span>
      );
    }

    if (external || target === "_blank") {
      return (
        <a
          href={href}
          target={target ?? "_blank"}
          rel={rel ?? "noopener noreferrer"}
          className={classes}
          {...anchorProps}
        >
          {content}
        </a>
      );
    }

    return (
      <Link href={href} target={target} rel={rel} className={classes} {...anchorProps}>
        {content}
      </Link>
    );
  }

  const { type = "button", ...buttonProps } = rest as Omit<
    ButtonAsNativeProps,
    keyof SharedButtonProps | "href"
  >;

  return (
    <button type={type} disabled={disabled} className={classes} {...buttonProps}>
      {content}
    </button>
  );
}

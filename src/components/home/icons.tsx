/** Custom icons exported from the Figma file (Ridhzo / Icons). Stroke colours follow `currentColor`. */

export function NoCardIcon({ className }: { className?: string }) {
  return (
    <svg
      width="16"
      height="16"
      viewBox="0 0 16 16"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.33333"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      aria-hidden="true"
    >
      <path d="M5.33337 3.33334H13.3334C13.687 3.33334 14.0261 3.47382 14.2762 3.72387C14.5262 3.97392 14.6667 4.31305 14.6667 4.66668V10" />
      <path d="M14.6667 12.6667H2.66671C2.31309 12.6667 1.97395 12.5262 1.7239 12.2762C1.47385 12.0261 1.33337 11.687 1.33337 11.3333V4.66668C1.33337 4.31305 1.47385 3.97392 1.7239 3.72387C1.97395 3.47382 2.31309 3.33334 2.66671 3.33334" />
      <path d="M1.33337 6H6.00004M8.66671 6H14.6667" />
      <path d="M1.33337 1.33334L14.6667 14.6667" />
    </svg>
  );
}

/** Pricing bullet: white/32 disc with a black check. */
export function CheckCircleFilled({ className }: { className?: string }) {
  return (
    <svg width="20" height="20" viewBox="0 0 20 20" fill="none" className={className} aria-hidden="true">
      <path
        d="M10.0003 18.3337C14.6027 18.3337 18.3337 14.6027 18.3337 10.0003C18.3337 5.39795 14.6027 1.66699 10.0003 1.66699C5.39795 1.66699 1.66699 5.39795 1.66699 10.0003C1.66699 14.6027 5.39795 18.3337 10.0003 18.3337Z"
        fill="white"
        fillOpacity="0.32"
      />
      <path d="M6 10.2004L8.75 12.8004L14 7.40039" stroke="black" strokeWidth="1.66667" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

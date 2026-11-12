import type { SVGProps } from "react";
import { cn } from "@/lib/utils";
import { createFeatherIcon, type IconComponent } from "./icon-factory";
import { FeatherGift, FeatherSmartphone } from "./feather-icons";

export { createFeatherIcon, type IconComponent };
export * from "./feather-icons";

/* -------------------------------------------------------------------------- */
/* Custom Ridhzo Design System Essentials Icons (Figma nodes 264:33629/33924) */
/* -------------------------------------------------------------------------- */

/** Figma `Ridhzo / Icons / Mobile` (node 70:181): 24×24 Feather smartphone. */
export const MobileIcon = FeatherSmartphone;

/** Figma `Ridhzo / Icons / Free` (node 70:193): 24×24 Feather gift. */
export const FreeIcon = FeatherGift;

/** Feather-style shield + check icon matching Design System 2px rounded strokes. */
export const ShieldCheckIcon = createFeatherIcon(
  "ShieldCheckIcon",
  <>
    <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
    <polyline points="9 12 11 14 15 10" />
  </>,
);

/** Feather-style cookie icon matching Design System 2px rounded strokes. */
export const CookieIcon = createFeatherIcon(
  "CookieIcon",
  <>
    <path d="M12 2a10 10 0 1 0 10 10 4 4 0 0 1-5-5 4 4 0 0 1-5-5" />
    <path d="M8.5 8.5v.01" />
    <path d="M16 15.5v.01" />
    <path d="M12 12v.01" />
    <path d="M11 17v.01" />
    <path d="M7 14v.01" />
  </>,
);

/** Figma `Ridhzo / Icons / Messages` (418:19272). */
export const MessagesIcon = createFeatherIcon(
  "MessagesIcon",
  <>
    <path d="M21 14L18 11H11C10.7348 11 10.4804 10.8946 10.2929 10.7071C10.1054 10.5196 10 10.2652 10 10V4C10 3.73478 10.1054 3.48043 10.2929 3.29289C10.4804 3.10536 10.7348 3 11 3H20C20.2652 3 20.5196 3.10536 20.7071 3.29289C20.8946 3.48043 21 3.73478 21 4V14Z" />
    <path d="M14 15V17C14 17.2652 13.8946 17.5196 13.7071 17.7071C13.5196 17.8946 13.2652 18 13 18H6L3 21V11C3 10.7348 3.10536 10.4804 3.29289 10.2929C3.48043 10.1054 3.73478 10 4 10H6" />
  </>,
);

/** Figma `Ridhzo / Icons / Whatsapp` (Essentials & Contact). */
export const WhatsappIcon = createFeatherIcon(
  "WhatsappIcon",
  <>
    <path d="M3 21L4.65 17.2C3.38766 15.4081 2.82267 13.217 3.06104 11.0381C3.29942 8.85918 4.32479 6.84214 5.94471 5.36552C7.56463 3.8889 9.66775 3.05421 11.8594 3.0181C14.051 2.98198 16.1805 3.74693 17.8482 5.16937C19.5159 6.59182 20.6071 8.57398 20.9172 10.7439C21.2272 12.9138 20.7347 15.1222 19.5321 16.9548C18.3295 18.7873 16.4994 20.118 14.3854 20.6971C12.2713 21.2762 10.0186 21.0639 8.05 20.1L3 21Z" />
    <path d="M9 10C9 10.1326 9.05268 10.2598 9.14645 10.3536C9.24021 10.4473 9.36739 10.5 9.5 10.5C9.63261 10.5 9.75979 10.4473 9.85355 10.3536C9.94732 10.2598 10 10.1326 10 10V9C10 8.86739 9.94732 8.74021 9.85355 8.64645C9.75979 8.55268 9.63261 8.5 9.5 8.5C9.36739 8.5 9.24021 8.55268 9.14645 8.64645C9.05268 8.74021 9 8.86739 9 9V10ZM9 10C9 11.3261 9.52678 12.5979 10.4645 13.5355C11.4021 14.4732 12.6739 15 14 15M14 15H15C15.1326 15 15.2598 14.9473 15.3536 14.8536C15.4473 14.7598 15.5 14.6326 15.5 14.5C15.5 14.3674 15.4473 14.2402 15.3536 14.1464C15.2598 14.0527 15.1326 14 15 14H14C13.8674 14 13.7402 14.0527 13.6464 14.1464C13.5527 14.2402 13.5 14.3674 13.5 14.5C13.5 14.6326 13.5527 14.7598 13.6464 14.8536C13.7402 14.9473 13.8674 15 14 15Z" />
  </>,
);

/** Figma `Ridhzo / Icons / webhooks`. */
export const WebhooksIcon = createFeatherIcon(
  "WebhooksIcon",
  <>
    <path d="M4.876 13.61C4.28624 13.9796 3.80311 14.4966 3.47436 15.1101C3.14561 15.7235 2.98261 16.4122 3.00147 17.1079C3.02033 17.8036 3.2204 18.4824 3.58191 19.0771C3.94341 19.6719 4.45385 20.162 5.06277 20.4991C5.67169 20.8362 6.35802 21.0085 7.05395 20.9991C7.74988 20.9897 8.43131 20.7989 9.03092 20.4456C9.63053 20.0922 10.1276 19.5885 10.4729 18.9842C10.8182 18.3799 10.9999 17.696 11 17H17" />
    <path d="M15.066 20.502C15.6003 20.7969 16.1949 20.9656 16.8045 20.9953C17.414 21.0249 18.0222 20.9147 18.5826 20.6731C19.143 20.4315 19.6406 20.0649 20.0375 19.6013C20.4344 19.1377 20.7199 18.5895 20.8722 17.9985C21.0246 17.4076 21.0397 16.7897 20.9164 16.192C20.7931 15.5943 20.5348 15.0328 20.161 14.5504C19.7873 14.0679 19.3082 13.6774 18.7603 13.4087C18.2124 13.14 17.6102 13.0002 17 13C16.294 13 15.576 13.179 15 13.5L12 8" />
    <path d="M16 8C16 6.93913 15.5786 5.92172 14.8284 5.17157C14.0783 4.42143 13.0609 4 12 4C10.9391 4 9.92172 4.42143 9.17157 5.17157C8.42143 5.92172 8 6.93913 8 8C8 9.506 8.77 10.818 10 11.5L7 17" />
  </>,
);

/** Figma `Ridhzo / Icons / Calendar`. */
export const CalendarGridIcon = createFeatherIcon(
  "CalendarGridIcon",
  <>
    <path d="M4 7C4 6.46957 4.21071 5.96086 4.58579 5.58579C4.96086 5.21071 5.46957 5 6 5H18C18.5304 5 19.0391 5.21071 19.4142 5.58579C19.7893 5.96086 20 6.46957 20 7V19C20 19.5304 19.7893 20.0391 19.4142 20.4142C19.0391 20.7893 18.5304 21 18 21H6C5.46957 21 4.96086 20.7893 4.58579 20.4142C4.21071 20.0391 4 19.5304 4 19V7Z" />
    <path d="M16 3V7" />
    <path d="M8 3V7" />
    <path d="M4 11H20" />
    <path d="M7 14H7.013" />
    <path d="M10.01 14H10.015" />
    <path d="M13.01 14H13.015" />
    <path d="M16.015 14H16.02" />
    <path d="M13.015 17H13.02" />
    <path d="M7.01 17H7.015" />
    <path d="M10.01 17H10.015" />
  </>,
);

/** Figma `Ridhzo / Icons / Email`. */
export const EmailEnvelopeIcon = createFeatherIcon(
  "EmailEnvelopeIcon",
  <>
    <path d="M3 7C3 6.46957 3.21071 5.96086 3.58579 5.58579C3.96086 5.21071 4.46957 5 5 5H19C19.5304 5 20.0391 5.21071 20.4142 5.58579C20.7893 5.96086 21 6.46957 21 7V17C21 17.5304 20.7893 18.0391 20.4142 18.4142C20.0391 18.7893 19.5304 19 19 19H5C4.46957 19 3.96086 18.7893 3.58579 18.4142C3.21071 18.0391 3 17.5304 3 17V7Z" />
    <path d="M3 7L12 13L21 7" />
  </>,
);

/** Figma `Ridhzo / Icons / Clipboard`. */
export const ClipboardListIcon = createFeatherIcon(
  "ClipboardListIcon",
  <>
    <path d="M9 5H7C6.46957 5 5.96086 5.21071 5.58579 5.58579C5.21071 5.96086 5 6.46957 5 7V19C5 19.5304 5.21071 20.0391 5.58579 20.4142C5.96086 20.7893 6.46957 21 7 21H17C17.5304 21 18.0391 20.7893 18.4142 20.4142C18.7893 20.0391 19 19.5304 19 19V7C19 6.46957 18.7893 5.96086 18.4142 5.58579C18.0391 5.21071 17.5304 5 17 5H15" />
    <path d="M9 5C9 4.46957 9.21071 3.96086 9.58579 3.58579C9.96086 3.21071 10.4696 3 11 3H13C13.5304 3 14.0391 3.21071 14.4142 3.58579C14.7893 3.96086 15 4.46957 15 5C15 5.53043 14.7893 6.03914 14.4142 6.41421C14.0391 6.78929 13.5304 7 13 7H11C10.4696 7 9.96086 6.78929 9.58579 6.41421C9.21071 6.03914 9 5.53043 9 5Z" />
    <path d="M9 12H9.01" />
    <path d="M13 12H15" />
    <path d="M9 16H9.01" />
    <path d="M13 16H15" />
  </>,
);

/** Figma `Ridhzo / Icons / CSV`. */
export const CsvFileIcon = createFeatherIcon(
  "CsvFileIcon",
  <>
    <path d="M14 3V7C14 7.26522 14.1054 7.51957 14.2929 7.70711C14.4804 7.89464 14.7348 8 15 8H19" />
    <path d="M5 12V5C5 4.46957 5.21071 3.96086 5.58579 3.58579C5.96086 3.21071 6.46957 3 7 3H14L19 8V12" />
    <path d="M7 16.5C7 16.1022 6.84196 15.7206 6.56066 15.4393C6.27936 15.158 5.89782 15 5.5 15C5.10218 15 4.72064 15.158 4.43934 15.4393C4.15804 15.7206 4 16.1022 4 16.5V19.5C4 19.8978 4.15804 20.2794 4.43934 20.5607C4.72064 20.842 5.10218 21 5.5 21C5.89782 21 6.27936 20.842 6.56066 20.5607C6.84196 20.2794 7 19.8978 7 19.5" />
    <path d="M10 20.25C10 20.664 10.336 21 10.75 21H12C12.2652 21 12.5196 20.8946 12.7071 20.7071C12.8946 20.5196 13 20.2652 13 20V19C13 18.7348 12.8946 18.4804 12.7071 18.2929C12.5196 18.1054 12.2652 18 12 18H11C10.7348 18 10.4804 17.8946 10.2929 17.7071C10.1054 17.5196 10 17.2652 10 17V16C10 15.7348 10.1054 15.4804 10.2929 15.2929C10.4804 15.1054 10.7348 15 11 15H12.25C12.4489 15 12.6397 15.079 12.7803 15.2197C12.921 15.3603 13 15.5511 13 15.75" />
    <path d="M16 15L18 21L20 15" />
  </>,
);

/** Figma `Ridhzo / Icons / Meta`. */
export const MetaIcon = createFeatherIcon(
  "MetaIcon",
  <>
    <path d="M12 10.174C13.766 7.39 15.315 6 16.648 6C18.648 6 19.911 8.213 20.648 11.217C21.352 14.086 21.148 18 18.648 18C17.534 18 16 16.435 14.5 14.348C13.5455 13.0329 12.709 11.6361 12 10.174Z" />
    <path d="M12 10.174C10.234 7.39 8.685 6 7.352 6C5.352 6 4.089 8.213 3.352 11.217C2.648 14.086 2.852 18 5.352 18C6.466 18 8 16.435 9.5 14.348C10.5 12.957 11.333 11.565 12 10.174Z" />
  </>,
);

/** Figma `Ridhzo / Icons / Google`. */
export const GoogleIcon = createFeatherIcon(
  "GoogleIcon",
  <path d="M20.945 11C21.1767 13.0717 20.682 15.1595 19.5456 16.907C18.4091 18.6545 16.7012 19.9533 14.7136 20.5817C12.726 21.21 10.5819 21.1289 8.64741 20.3522C6.71295 19.5755 5.10808 18.1514 4.10685 16.323C3.10562 14.4946 2.77012 12.3754 3.15764 10.3272C3.54515 8.27895 4.63165 6.42875 6.23161 5.09251C7.83157 3.75627 9.84577 3.01686 11.9303 3.00054C14.0148 2.98421 16.0403 3.69198 17.661 5.003L15.006 7.395C14.0544 6.77425 12.934 6.46341 11.7987 6.5052C10.6633 6.54699 9.56874 6.93935 8.66539 7.62837C7.76205 8.31739 7.09424 9.26925 6.75375 10.3532C6.41326 11.4371 6.41679 12.5998 6.76386 13.6816C7.11092 14.7634 7.78449 15.7112 8.69201 16.3948C9.59952 17.0783 10.6964 17.464 11.832 17.4989C12.9676 17.5338 14.0861 17.2161 15.0339 16.5896C15.9817 15.9631 16.7122 15.0585 17.125 14H13V11H20.945Z" />,
);

/** Figma article-share square-framed social icons (Full Blog node 639:14189). */
export const ShareLinkedInIcon = createFeatherIcon(
  "ShareLinkedInIcon",
  <>
    <path d="M8 11V16" />
    <path d="M8 8V8.01" />
    <path d="M12 16V11" />
    <path d="M16 16V13C16 12.4696 15.7893 11.9609 15.4142 11.5858C15.0391 11.2107 14.5304 11 14 11C13.4696 11 12.9609 11.2107 12.5858 11.5858C12.2107 11.9609 12 12.4696 12 13" />
    <path d="M3 7C3 5.93913 3.42143 4.92172 4.17157 4.17157C4.92172 3.42143 5.93913 3 7 3H17C18.0609 3 19.0783 3.42143 19.8284 4.17157C20.5786 4.92172 21 5.93913 21 7V17C21 18.0609 20.5786 19.0783 19.8284 19.8284C19.0783 20.5786 18.0609 21 17 21H7C5.93913 21 4.92172 20.5786 4.17157 19.8284C3.42143 19.0783 3 18.0609 3 17V7Z" />
  </>,
);

export const ShareXIcon = createFeatherIcon(
  "ShareXIcon",
  <>
    <path d="M4 4L15.733 20H20L8.267 4H4Z" />
    <path d="M4 20L10.768 13.232M13.228 10.772L20 4" />
  </>,
);

/** Figma custom icon `Ridhzo / Icons / No Card` (node 70:186): slashed credit card. */
export function NoCardIcon({
  size = 24,
  className = "text-highlight shrink-0",
  ...props
}: SVGProps<SVGSVGElement> & { size?: number }) {
  const isDecorative = !props["aria-label"] && !props["aria-labelledby"];
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      className={cn("shrink-0", className)}
      aria-hidden={isDecorative ? true : undefined}
      {...props}
    >
      <path d="M8 5H20a2 2 0 0 1 2 2v8" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M22 19H4a2 2 0 0 1-2-2V7a2 2 0 0 1 2-2" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M2 9h7M13 9h9" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
      <path d="m2 2 20 20" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
    </svg>
  );
}

/** Figma `Ridhzo / Icons / Check Circle Filled` (node 121:3819 / "Check Filled"): solid disc with check cutout. */
export function CheckCircleFilled({
  size = 24,
  className = "text-highlight shrink-0",
  checkStroke = "#000000",
  ...props
}: SVGProps<SVGSVGElement> & { size?: number; checkStroke?: string }) {
  const isDecorative = !props["aria-label"] && !props["aria-labelledby"];
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      className={cn("shrink-0", className)}
      aria-hidden={isDecorative ? true : undefined}
      {...props}
    >
      <circle cx="12" cy="12" r="10" fill="currentColor" />
      <path
        d="M7.2 12.24L10.5 15.36L16.8 8.88"
        stroke={checkStroke}
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export const CheckFilledIcon = CheckCircleFilled;

/** Figma custom glyph for closing-CTA and headline accents (node 172:8130): 3-node workflow graph. */
export function WorkflowGraphIcon({ className = "text-highlight shrink-0" }: { className?: string }) {
  return (
    <svg viewBox="0 0 64 56" fill="none" className={className} aria-hidden="true">
      <rect x="4" y="4" width="16" height="16" rx="4" stroke="currentColor" strokeWidth="4" />
      <rect x="24" y="36" width="16" height="16" rx="4" stroke="currentColor" strokeWidth="4" />
      <circle cx="52" cy="12" r="8" stroke="currentColor" strokeWidth="4" />
      <path d="M20 12H44" stroke="currentColor" strokeWidth="3.5" strokeLinecap="round" />
      <path d="M12 20V44H24" stroke="currentColor" strokeWidth="3.5" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M40 44H52V20" stroke="currentColor" strokeWidth="3.5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

/** Registry of Ridhzo custom & essential icons (Figma nodes 264:33629 / 264:33924). */
export const RIDHZO_CUSTOM_ICONS = {
  mobile: MobileIcon,
  "no-card": NoCardIcon,
  free: FreeIcon,
  "check-circle-filled": CheckCircleFilled,
  "shield-check": ShieldCheckIcon,
  cookie: CookieIcon,
  messages: MessagesIcon,
  whatsapp: WhatsappIcon,
  webhooks: WebhooksIcon,
  "calendar-grid": CalendarGridIcon,
  "email-envelope": EmailEnvelopeIcon,
  "clipboard-list": ClipboardListIcon,
  "csv-file": CsvFileIcon,
  meta: MetaIcon,
  google: GoogleIcon,
  "share-linkedin": ShareLinkedInIcon,
  "share-x": ShareXIcon,
  "workflow-graph": WorkflowGraphIcon,
} as const satisfies Record<string, IconComponent>;

export type RidhzoCustomIconName = keyof typeof RIDHZO_CUSTOM_ICONS;

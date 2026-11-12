import type { ComponentType, ReactNode, SVGProps } from "react";
import { cn } from "@/lib/utils";

/** Shared prop contract for Design System Feather & Ridhzo icons. */
export type IconComponent = ComponentType<SVGProps<SVGSVGElement>>;

function createFeatherIcon(displayName: string, children: ReactNode): IconComponent {
  function FeatherIcon({ className, ...props }: SVGProps<SVGSVGElement>) {
    const isDecorative = !props["aria-label"] && !props["aria-labelledby"];
    return (
      <svg
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth={2}
        strokeLinecap="round"
        strokeLinejoin="round"
        aria-hidden={isDecorative ? true : undefined}
        className={cn("h-5 w-5 shrink-0", className)}
        {...props}
      >
        {children}
      </svg>
    );
  }
  FeatherIcon.displayName = displayName;
  return FeatherIcon;
}

/* -------------------------------------------------------------------------- */
/* Official Feather Icons v4.29.2 (Figma Design System node 264:33629)         */
/* -------------------------------------------------------------------------- */

export const FeatherArrowRight = createFeatherIcon(
  "FeatherArrowRight",
  <>
    <line x1="5" y1="12" x2="19" y2="12" />
    <polyline points="12 5 19 12 12 19" />
  </>,
);

export const FeatherArrowLeft = createFeatherIcon(
  "FeatherArrowLeft",
  <>
    <line x1="19" y1="12" x2="5" y2="12" />
    <polyline points="12 19 5 12 12 5" />
  </>,
);

export const FeatherArrowUpRight = createFeatherIcon(
  "FeatherArrowUpRight",
  <>
    <line x1="7" y1="17" x2="17" y2="7" />
    <polyline points="7 7 17 7 17 17" />
  </>,
);

export const FeatherChevronDown = createFeatherIcon(
  "FeatherChevronDown",
  <polyline points="6 9 12 15 18 9" />,
);

export const FeatherChevronRight = createFeatherIcon(
  "FeatherChevronRight",
  <polyline points="9 18 15 12 9 6" />,
);

export const FeatherChevronLeft = createFeatherIcon(
  "FeatherChevronLeft",
  <polyline points="15 18 9 12 15 6" />,
);

export const FeatherMenu = createFeatherIcon(
  "FeatherMenu",
  <>
    <line x1="3" y1="12" x2="21" y2="12" />
    <line x1="3" y1="6" x2="21" y2="6" />
    <line x1="3" y1="18" x2="21" y2="18" />
  </>,
);

export const FeatherX = createFeatherIcon(
  "FeatherX",
  <>
    <line x1="18" y1="6" x2="6" y2="18" />
    <line x1="6" y1="6" x2="18" y2="18" />
  </>,
);

export const FeatherCheck = createFeatherIcon(
  "FeatherCheck",
  <polyline points="20 6 9 17 4 12" />,
);

export const FeatherCheckCircle = createFeatherIcon(
  "FeatherCheckCircle",
  <>
    <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
    <polyline points="22 4 12 14.01 9 11.01" />
  </>,
);

export const FeatherMinus = createFeatherIcon(
  "FeatherMinus",
  <line x1="5" y1="12" x2="19" y2="12" />,
);

export const FeatherPlus = createFeatherIcon(
  "FeatherPlus",
  <>
    <line x1="12" y1="5" x2="12" y2="19" />
    <line x1="5" y1="12" x2="19" y2="12" />
  </>,
);

export const FeatherClock = createFeatherIcon(
  "FeatherClock",
  <>
    <circle cx="12" cy="12" r="10" />
    <polyline points="12 6 12 12 16 14" />
  </>,
);

export const FeatherSend = createFeatherIcon(
  "FeatherSend",
  <>
    <line x1="22" y1="2" x2="11" y2="13" />
    <polygon points="22 2 15 22 11 13 2 9 22 2" />
  </>,
);

export const FeatherMail = createFeatherIcon(
  "FeatherMail",
  <>
    <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
    <polyline points="22,6 12,13 2,6" />
  </>,
);

export const FeatherPhone = createFeatherIcon(
  "FeatherPhone",
  <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />,
);

export const FeatherMessageSquare = createFeatherIcon(
  "FeatherMessageSquare",
  <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />,
);

export const FeatherAlertCircle = createFeatherIcon(
  "FeatherAlertCircle",
  <>
    <circle cx="12" cy="12" r="10" />
    <line x1="12" y1="8" x2="12" y2="12" />
    <line x1="12" y1="16" x2="12.01" y2="16" />
  </>,
);

export const FeatherAlertTriangle = createFeatherIcon(
  "FeatherAlertTriangle",
  <>
    <path d="M10.29 3.86L1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z" />
    <line x1="12" y1="9" x2="12" y2="13" />
    <line x1="12" y1="17" x2="12.01" y2="17" />
  </>,
);

export const FeatherAlertOctagon = createFeatherIcon(
  "FeatherAlertOctagon",
  <>
    <polygon points="7.86 2 16.14 2 22 7.86 22 16.14 16.14 22 7.86 22 2 16.14 2 7.86 7.86 2" />
    <line x1="12" y1="8" x2="12" y2="12" />
    <line x1="12" y1="16" x2="12.01" y2="16" />
  </>,
);

export const FeatherCalendar = createFeatherIcon(
  "FeatherCalendar",
  <>
    <rect x="3" y="4" width="18" height="18" rx="2" ry="2" />
    <line x1="16" y1="2" x2="16" y2="6" />
    <line x1="8" y1="2" x2="8" y2="6" />
    <line x1="3" y1="10" x2="21" y2="10" />
  </>,
);

export const FeatherShield = createFeatherIcon(
  "FeatherShield",
  <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />,
);

export const FeatherDatabase = createFeatherIcon(
  "FeatherDatabase",
  <>
    <ellipse cx="12" cy="5" rx="9" ry="3" />
    <path d="M21 12c0 1.66-4 3-9 3s-9-1.34-9-3" />
    <path d="M3 5v14c0 1.66 4 3 9 3s9-1.34 9-3V5" />
  </>,
);

export const FeatherUser = createFeatherIcon(
  "FeatherUser",
  <>
    <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" />
    <circle cx="12" cy="7" r="4" />
  </>,
);

export const FeatherUserCheck = createFeatherIcon(
  "FeatherUserCheck",
  <>
    <path d="M16 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
    <circle cx="8.5" cy="7" r="4" />
    <polyline points="17 11 19 13 23 9" />
  </>,
);

export const FeatherUsers = createFeatherIcon(
  "FeatherUsers",
  <>
    <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
    <circle cx="9" cy="7" r="4" />
    <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
    <path d="M16 3.13a4 4 0 0 1 0 7.75" />
  </>,
);

export const FeatherBell = createFeatherIcon(
  "FeatherBell",
  <>
    <path d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9" />
    <path d="M13.73 21a2 2 0 0 1-3.46 0" />
  </>,
);

export const FeatherServer = createFeatherIcon(
  "FeatherServer",
  <>
    <rect x="2" y="2" width="20" height="8" rx="2" ry="2" />
    <rect x="2" y="14" width="20" height="8" rx="2" ry="2" />
    <line x1="6" y1="6" x2="6.01" y2="6" />
    <line x1="6" y1="18" x2="6.01" y2="18" />
  </>,
);

export const FeatherLock = createFeatherIcon(
  "FeatherLock",
  <>
    <rect x="3" y="11" width="18" height="11" rx="2" ry="2" />
    <path d="M7 11V7a5 5 0 0 1 10 0v4" />
  </>,
);

export const FeatherKey = createFeatherIcon(
  "FeatherKey",
  <path d="M21 2l-2 2m-7.61 7.61a5.5 5.5 0 1 1-7.778 7.778 5.5 5.5 0 0 1 7.777-7.777zm0 0L15.5 7.5m0 0l3 3L22 7l-3-3m-3.5 3.5L19 4" />,
);

export const FeatherCpu = createFeatherIcon(
  "FeatherCpu",
  <>
    <rect x="4" y="4" width="16" height="16" rx="2" ry="2" />
    <rect x="9" y="9" width="6" height="6" />
    <line x1="9" y1="1" x2="9" y2="4" />
    <line x1="15" y1="1" x2="15" y2="4" />
    <line x1="9" y1="20" x2="9" y2="23" />
    <line x1="15" y1="20" x2="15" y2="23" />
    <line x1="20" y1="9" x2="23" y2="9" />
    <line x1="20" y1="14" x2="23" y2="14" />
    <line x1="1" y1="9" x2="4" y2="9" />
    <line x1="1" y1="14" x2="4" y2="14" />
  </>,
);

export const FeatherFileText = createFeatherIcon(
  "FeatherFileText",
  <>
    <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
    <polyline points="14 2 14 8 20 8" />
    <line x1="16" y1="13" x2="8" y2="13" />
    <line x1="16" y1="17" x2="8" y2="17" />
    <polyline points="10 9 9 9 8 9" />
  </>,
);

export const FeatherCreditCard = createFeatherIcon(
  "FeatherCreditCard",
  <>
    <rect x="1" y="4" width="22" height="16" rx="2" ry="2" />
    <line x1="1" y1="10" x2="23" y2="10" />
  </>,
);

export const FeatherSlash = createFeatherIcon(
  "FeatherSlash",
  <>
    <circle cx="12" cy="12" r="10" />
    <line x1="4.93" y1="4.93" x2="19.07" y2="19.07" />
  </>,
);

export const FeatherRotateCcw = createFeatherIcon(
  "FeatherRotateCcw",
  <>
    <polyline points="1 4 1 10 7 10" />
    <path d="M3.51 15a9 9 0 1 0 2.13-9.36L1 10" />
  </>,
);

export const FeatherHelpCircle = createFeatherIcon(
  "FeatherHelpCircle",
  <>
    <circle cx="12" cy="12" r="10" />
    <path d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3" />
    <line x1="12" y1="17" x2="12.01" y2="17" />
  </>,
);

export const FeatherSettings = createFeatherIcon(
  "FeatherSettings",
  <>
    <circle cx="12" cy="12" r="3" />
    <path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1 0 2.83 2 2 0 0 1-2.83 0l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-2 2 2 2 0 0 1-2-2v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83 0 2 2 0 0 1 0-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1-2-2 2 2 0 0 1 2-2h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 0-2.83 2 2 0 0 1 2.83 0l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 2-2 2 2 0 0 1 2 2v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 0 2 2 0 0 1 0 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 2 2 2 2 0 0 1-2 2h-.09a1.65 1.65 0 0 0-1.51 1z" />
  </>,
);

export const FeatherSliders = createFeatherIcon(
  "FeatherSliders",
  <>
    <line x1="4" y1="21" x2="4" y2="14" />
    <line x1="4" y1="10" x2="4" y2="3" />
    <line x1="12" y1="21" x2="12" y2="12" />
    <line x1="12" y1="8" x2="12" y2="3" />
    <line x1="20" y1="21" x2="20" y2="16" />
    <line x1="20" y1="12" x2="20" y2="3" />
    <line x1="1" y1="14" x2="7" y2="14" />
    <line x1="9" y1="8" x2="15" y2="8" />
    <line x1="17" y1="16" x2="23" y2="16" />
  </>,
);

export const FeatherInfo = createFeatherIcon(
  "FeatherInfo",
  <>
    <circle cx="12" cy="12" r="10" />
    <line x1="12" y1="16" x2="12" y2="12" />
    <line x1="12" y1="8" x2="12.01" y2="8" />
  </>,
);

export const FeatherCloud = createFeatherIcon(
  "FeatherCloud",
  <path d="M18 10h-1.26A8 8 0 1 0 9 20h9a5 5 0 0 0 0-10z" />,
);

export const FeatherZap = createFeatherIcon(
  "FeatherZap",
  <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2" />,
);

export const FeatherMonitor = createFeatherIcon(
  "FeatherMonitor",
  <>
    <rect x="2" y="3" width="20" height="14" rx="2" ry="2" />
    <line x1="8" y1="21" x2="16" y2="21" />
    <line x1="12" y1="17" x2="12" y2="21" />
  </>,
);

export const FeatherSmartphone = createFeatherIcon(
  "FeatherSmartphone",
  <>
    <rect x="5" y="2" width="14" height="20" rx="2" ry="2" />
    <line x1="12" y1="18" x2="12.01" y2="18" />
  </>,
);

export const FeatherSearch = createFeatherIcon(
  "FeatherSearch",
  <>
    <circle cx="11" cy="11" r="8" />
    <line x1="21" y1="21" x2="16.65" y2="16.65" />
  </>,
);

export const FeatherStar = createFeatherIcon(
  "FeatherStar",
  <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />,
);

export const FeatherPlay = createFeatherIcon(
  "FeatherPlay",
  <polygon points="5 3 19 12 5 21 5 3" />,
);

export const FeatherLayers = createFeatherIcon(
  "FeatherLayers",
  <>
    <polygon points="12 2 2 7 12 12 22 7 12 2" />
    <polyline points="2 17 12 22 22 17" />
    <polyline points="2 12 12 17 22 12" />
  </>,
);

export const FeatherLayout = createFeatherIcon(
  "FeatherLayout",
  <>
    <rect x="3" y="3" width="18" height="18" rx="2" ry="2" />
    <line x1="3" y1="9" x2="21" y2="9" />
    <line x1="9" y1="21" x2="9" y2="9" />
  </>,
);

export const FeatherActivity = createFeatherIcon(
  "FeatherActivity",
  <polyline points="22 12 18 12 15 21 9 3 6 12 2 12" />,
);

export const FeatherBarChart2 = createFeatherIcon(
  "FeatherBarChart2",
  <>
    <line x1="18" y1="20" x2="18" y2="10" />
    <line x1="12" y1="20" x2="12" y2="4" />
    <line x1="6" y1="20" x2="6" y2="14" />
  </>,
);

export const FeatherCompass = createFeatherIcon(
  "FeatherCompass",
  <>
    <circle cx="12" cy="12" r="10" />
    <polygon points="16.24 7.76 14.12 14.12 7.76 16.24 9.88 9.88 16.24 7.76" />
  </>,
);

export const FeatherBookOpen = createFeatherIcon(
  "FeatherBookOpen",
  <>
    <path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z" />
    <path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z" />
  </>,
);

export const FeatherLifeBuoy = createFeatherIcon(
  "FeatherLifeBuoy",
  <>
    <circle cx="12" cy="12" r="10" />
    <circle cx="12" cy="12" r="4" />
    <line x1="4.93" y1="4.93" x2="9.17" y2="9.17" />
    <line x1="14.83" y1="14.83" x2="19.07" y2="19.07" />
    <line x1="14.83" y1="9.17" x2="19.07" y2="4.93" />
    <line x1="4.93" y1="19.07" x2="9.17" y2="14.83" />
  </>,
);

export const FeatherBriefcase = createFeatherIcon(
  "FeatherBriefcase",
  <>
    <rect x="2" y="7" width="20" height="14" rx="2" ry="2" />
    <path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16" />
  </>,
);

export const FeatherSun = createFeatherIcon(
  "FeatherSun",
  <>
    <circle cx="12" cy="12" r="5" />
    <line x1="12" y1="1" x2="12" y2="3" />
    <line x1="12" y1="21" x2="12" y2="23" />
    <line x1="4.22" y1="4.22" x2="5.64" y2="5.64" />
    <line x1="18.36" y1="18.36" x2="19.78" y2="19.78" />
    <line x1="1" y1="12" x2="3" y2="12" />
    <line x1="21" y1="12" x2="23" y2="12" />
    <line x1="4.22" y1="19.78" x2="5.64" y2="18.36" />
    <line x1="18.36" y1="5.64" x2="19.78" y2="4.22" />
  </>,
);

export const FeatherHome = createFeatherIcon(
  "FeatherHome",
  <>
    <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
    <polyline points="9 22 9 12 15 12 15 22" />
  </>,
);

export const FeatherWifiOff = createFeatherIcon(
  "FeatherWifiOff",
  <>
    <line x1="1" y1="1" x2="23" y2="23" />
    <path d="M16.72 11.06A10.94 10.94 0 0 1 19 12.55" />
    <path d="M5 12.55a10.94 10.94 0 0 1 5.17-2.39" />
    <path d="M10.71 5.05A16 16 0 0 1 22.58 9" />
    <path d="M1.42 9a15.91 15.91 0 0 1 4.7-2.88" />
    <path d="M8.53 16.11a6 6 0 0 1 6.95 0" />
    <line x1="12" y1="20" x2="12.01" y2="20" />
  </>,
);

export const FeatherMapPin = createFeatherIcon(
  "FeatherMapPin",
  <>
    <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
    <circle cx="12" cy="10" r="3" />
  </>,
);

export const FeatherLink2 = createFeatherIcon(
  "FeatherLink2",
  <>
    <path d="M15 7h3a5 5 0 0 1 5 5 5 5 0 0 1-5 5h-3m-6 0H6a5 5 0 0 1-5-5 5 5 0 0 1 5-5h3" />
    <line x1="8" y1="12" x2="16" y2="12" />
  </>,
);

export const FeatherGitBranch = createFeatherIcon(
  "FeatherGitBranch",
  <>
    <line x1="6" y1="3" x2="6" y2="15" />
    <circle cx="18" cy="6" r="3" />
    <circle cx="6" cy="18" r="3" />
    <path d="M18 9a9 9 0 0 1-9 9" />
  </>,
);

export const FeatherList = createFeatherIcon(
  "FeatherList",
  <>
    <line x1="8" y1="6" x2="21" y2="6" />
    <line x1="8" y1="12" x2="21" y2="12" />
    <line x1="8" y1="18" x2="21" y2="18" />
    <line x1="3" y1="6" x2="3.01" y2="6" />
    <line x1="3" y1="12" x2="3.01" y2="12" />
    <line x1="3" y1="18" x2="3.01" y2="18" />
  </>,
);

export const FeatherTool = createFeatherIcon(
  "FeatherTool",
  <path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z" />,
);

export const FeatherAward = createFeatherIcon(
  "FeatherAward",
  <>
    <circle cx="12" cy="8" r="7" />
    <polyline points="8.21 13.89 7 23 12 20 17 23 15.79 13.88" />
  </>,
);

export const FeatherHeart = createFeatherIcon(
  "FeatherHeart",
  <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" />,
);

export const FeatherColumns = createFeatherIcon(
  "FeatherColumns",
  <path d="M12 3h7a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2h-7m0-18H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h7m0-18v18" />,
);

export const FeatherTruck = createFeatherIcon(
  "FeatherTruck",
  <>
    <rect x="1" y="3" width="15" height="13" />
    <polygon points="16 8 20 8 23 11 23 16 16 16 16 8" />
    <circle cx="5.5" cy="18.5" r="2.5" />
    <circle cx="18.5" cy="18.5" r="2.5" />
  </>,
);

export const FeatherRepeat = createFeatherIcon(
  "FeatherRepeat",
  <>
    <polyline points="17 1 21 5 17 9" />
    <path d="M3 11V9a4 4 0 0 1 4-4h14" />
    <polyline points="7 23 3 19 7 15" />
    <path d="M21 13v2a4 4 0 0 1-4 4H3" />
  </>,
);

export const FeatherTarget = createFeatherIcon(
  "FeatherTarget",
  <>
    <circle cx="12" cy="12" r="10" />
    <circle cx="12" cy="12" r="6" />
    <circle cx="12" cy="12" r="2" />
  </>,
);

export const FeatherTrendingUp = createFeatherIcon(
  "FeatherTrendingUp",
  <>
    <polyline points="23 6 13.5 15.5 8.5 10.5 1 18" />
    <polyline points="17 6 23 6 23 12" />
  </>,
);

export const FeatherInbox = createFeatherIcon(
  "FeatherInbox",
  <>
    <polyline points="22 12 16 12 14 15 10 15 8 12 2 12" />
    <path d="M5.45 5.11L2 12v6a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-6l-3.45-6.89A2 2 0 0 0 16.76 4H7.24a2 2 0 0 0-1.79 1.11z" />
  </>,
);

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

/* -------------------------------------------------------------------------- */
/* Custom Ridhzo Design System Essentials Icons (Figma node 264:33924)        */
/* -------------------------------------------------------------------------- */

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
export function NoCardIcon({ size = 20, className = "text-highlight shrink-0" }: { size?: number; className?: string }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" className={className} aria-hidden="true">
      <path d="M8 5H20a2 2 0 0 1 2 2v8" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M22 19H4a2 2 0 0 1-2-2V7a2 2 0 0 1 2-2" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M2 9h7M13 9h9" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
      <path d="m2 2 20 20" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
    </svg>
  );
}

/** Figma `Ridhzo / Icons / Check Circle Filled` (node 121:3819): solid disc with check cutout. */
export function CheckCircleFilled({
  size = 24,
  className = "text-highlight shrink-0",
  checkStroke = "#000000",
}: {
  size?: number;
  className?: string;
  checkStroke?: string;
}) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" className={className} aria-hidden="true">
      <circle cx="12" cy="12" r="10" fill="currentColor" />
      <path
        d="M8.5 12.2 10.8 14.5 15.8 9.5"
        stroke={checkStroke}
        strokeWidth="2.2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

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

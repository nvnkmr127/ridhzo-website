import { useId } from "react";

const THUNDER_PATH =
  "M2.04474 28.2042L6.7908 19.4059L1.91618 19.3813L8.53709 9.60311H12.7811L10.5818 13.4563L19.298 13.4855L0.0153051 31.9868L2.04474 28.2042Z";

/**
 * Ridhzo brand lockup (R lightning mark + wordmark) with green-to-white gradient blinking thunder bolt.
 */
export function RidhzoLogo({ tone = "dark" }: { tone?: "dark" | "light" }) {
  const gradientId = useId();

  return (
    <span className="flex h-[32px] items-center gap-[6.154px]">
      <span
        className={`relative h-[31.999px] w-[34.461px] shrink-0 ${
          tone === "light" ? "text-white" : "text-black"
        }`}
      >
        <svg
          viewBox="0 0 34.4606 31.9991"
          fill="none"
          aria-hidden="true"
          className="block size-full max-w-none"
        >
          <defs>
            <linearGradient id={gradientId} x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#5ee878" />
              <stop offset="100%" stopColor="#ffffff" />
            </linearGradient>
          </defs>
          <path d={THUNDER_PATH} fill="currentColor" />
          <path
            d={THUNDER_PATH}
            fill={`url(#${gradientId})`}
            className="animate-thunder-blink"
          />
          <path
            d="M34.459 31.9822L24.8873 31.9991L22.8395 29.8936L14.708 21.3839L20.4275 16.0118L21.5601 15.9489C23.1946 15.7938 24.7144 14.5375 24.8368 12.8128L24.8537 9.34203C24.8567 8.6279 24.4374 7.91684 23.9614 7.4254C23.3752 6.82185 22.5993 6.58841 21.7468 6.6222L6.09289 6.61913L0 0H22.5625C23.8344 0.0552874 24.9363 0.337867 26.0383 0.850811C30.9833 3.15445 33.2653 8.91202 31.1547 13.9908C29.7956 17.2573 26.4959 19.8221 22.8334 20.0064L24.9868 22.224L34.4606 31.9807L34.459 31.9822Z"
            fill="currentColor"
          />
        </svg>
      </span>
      <span className="relative h-[21.538px] w-[93.844px] shrink-0">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          alt="Ridhzo"
          src={tone === "light" ? "/figma/10920.svg" : "/figma/b36d9.svg"}
          className="block size-full max-w-none"
        />
      </span>
    </span>
  );
}

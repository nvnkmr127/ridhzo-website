"use client";

import { motion, useReducedMotion } from "motion/react";

const MARQUEE_ITEMS = [
  { text: "LESS WAITING", outlined: false, icon: "/figma/d0d30.svg", iconWidth: 20 },
  { text: "MORE CLOSING", outlined: true, icon: "/figma/d0d30.svg", iconWidth: 20 },
  { text: "LESS CLICKING", outlined: false, icon: "/figma/6029e.svg", iconWidth: 20 },
  { text: "MORE CONNECTING", outlined: true, icon: "/figma/6029e.svg", iconWidth: 20 },
  { text: "LESS WAITING", outlined: false, icon: "/figma/7b8d0.svg", iconWidth: 21 },
  { text: "MORE CLOSING", outlined: true, icon: "/figma/6029e.svg", iconWidth: 20 },
  { text: "LESS CLICKING", outlined: false, icon: "/figma/7b8d0.svg", iconWidth: 21 },
  { text: "MORE CONNECTING", outlined: true, icon: "/figma/7b8d0.svg", iconWidth: 21 },
] as const;

function MarqueeSequence() {
  return (
    <div className="flex shrink-0 items-center gap-[40px] pr-[40px]">
      {MARQUEE_ITEMS.map((item, idx) => (
        <div key={`${item.text}-${idx}`} className="flex shrink-0 items-center gap-[40px]">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            alt=""
            src={item.icon}
            width={item.iconWidth}
            height={20}
            aria-hidden="true"
            className="block shrink-0 max-w-none"
          />
          <span
            className={
              item.outlined
                ? "text-outline-marquee whitespace-nowrap text-[16px] font-normal leading-[24px] tracking-[0.8px]"
                : "whitespace-nowrap text-[16px] font-normal leading-[24px] text-black/80"
            }
          >
            {item.text}
          </span>
        </div>
      ))}
    </div>
  );
}

/** Figma Marquee strip (732:3472 / 720:3449 / motion node 732:3661). */
export function MarqueeStrip() {
  const prefersReducedMotion = useReducedMotion();

  return (
    <section
      aria-label="Key benefits"
      className="relative z-[1] h-[62px] w-full overflow-hidden bg-white"
      data-node-id="720:3449"
    >
      <motion.div
        data-node-id="732:3661"
        className="absolute left-0 top-[19px] flex w-max items-center will-change-transform"
        initial={{ x: "0%" }}
        animate={prefersReducedMotion ? { x: "0%" } : { x: "-50%" }}
        transition={
          prefersReducedMotion
            ? { duration: 0 }
            : {
                x: {
                  duration: 60,
                  ease: "linear",
                  repeat: Infinity,
                },
              }
        }
      >
        <div className="flex shrink-0 items-center">
          <MarqueeSequence />
          <div className="flex shrink-0 items-center" aria-hidden="true">
            <MarqueeSequence />
          </div>
        </div>
        <div className="flex shrink-0 items-center" aria-hidden="true">
          <MarqueeSequence />
          <MarqueeSequence />
        </div>
      </motion.div>
    </section>
  );
}


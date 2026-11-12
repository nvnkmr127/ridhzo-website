"use client";

import { useEffect, useMemo, useState } from "react";
import type { ContentHeading } from "@/lib/content";
import { cn } from "@/lib/utils";

interface HowToTocSidebarProps {
  headings: ContentHeading[];
}

/**
 * Interactive sticky table of contents for how-to guide detail pages (Figma 682:27424).
 */
export function HowToTocSidebar({ headings }: HowToTocSidebarProps) {
  const tocItems = useMemo(
    () => headings.filter((heading) => heading.level === 2),
    [headings]
  );
  const [activeId, setActiveId] = useState<string>(tocItems[0]?.id ?? "");

  useEffect(() => {
    if (tocItems.length === 0) return;

    const updateActive = () => {
      const offset = 150;
      let current = tocItems[0].id;
      for (const heading of tocItems) {
        const el = document.getElementById(heading.id);
        if (el && el.getBoundingClientRect().top <= offset) {
          current = heading.id;
        }
      }
      setActiveId(current);
    };

    updateActive();
    window.addEventListener("scroll", updateActive, { passive: true });
    return () => window.removeEventListener("scroll", updateActive);
  }, [tocItems]);

  return (
    <aside
      aria-label="Guide contents"
      className="w-full shrink-0 border-b border-black/10 pb-[24px] lg:sticky lg:top-[104px] lg:w-auto lg:pr-[40px]"
    >
      <div className="flex w-full flex-col items-start pt-[10px] lg:w-[220px]">
        <p className="font-sans text-[12px] font-normal leading-[18px] text-[#111]">
          IN THIS GUIDE
        </p>

        {tocItems.length > 0 && (
          <nav aria-label="In this guide" className="mt-[19px] flex w-full flex-col items-start">
            {tocItems.map((heading) => {
              const isActive = activeId === heading.id;
              return (
                <a
                  key={heading.id}
                  href={`#${heading.id}`}
                  onClick={() => setActiveId(heading.id)}
                  className={cn(
                    "block w-full border-solid px-[13px] py-[11px] font-sans text-[14px] leading-[20px] transition-colors",
                    isActive
                      ? "border-l-2 border-[#5ee878] bg-[#5ee878]/[0.16] font-medium text-[#111]"
                      : "border-l border-black/20 font-normal text-black/[0.64] hover:border-black/40 hover:text-[#111]"
                  )}
                >
                  {heading.text}
                </a>
              );
            })}
          </nav>
        )}

        <div className="w-full pt-[25px]">
          <p className="pl-[13px] font-sans text-[14px] font-normal leading-[20px] text-black/[0.64] lg:w-[220px]">
            Keep this guide open beside your workspace.
          </p>
        </div>
      </div>
    </aside>
  );
}


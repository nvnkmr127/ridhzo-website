"use client";

import { useState } from "react";
import { cn } from "@/lib/utils";
import { PIPELINE_FAQS } from "./pipeline-faqs";

type StageId = "new" | "in-progress" | "won";

interface PipelineCardItem {
  id: string;
  name: string;
  source: string;
  stage: StageId;
}

const STAGE_COLUMNS: readonly {
  id: StageId;
  label: string;
  baseCount: number;
  initialCardCount: number;
}[] = [
  { id: "new", label: "NEW", baseCount: 12, initialCardCount: 4 },
  { id: "in-progress", label: "IN PROGRESS", baseCount: 8, initialCardCount: 3 },
  { id: "won", label: "WON", baseCount: 0, initialCardCount: 0 },
];

const INITIAL_CARDS: readonly PipelineCardItem[] = [
  { id: "new-1", name: "Aarav S.", source: "Website form", stage: "new" },
  { id: "new-2", name: "Sana N.", source: "Meta campaign", stage: "new" },
  { id: "new-3", name: "Sana N.", source: "Meta campaign", stage: "new" },
  { id: "new-4", name: "Sana N.", source: "Meta campaign", stage: "new" },
  { id: "prog-1", name: "Priya K.", source: "Site visit booked", stage: "in-progress" },
  { id: "prog-2", name: "Rahul M.", source: "Quote sent", stage: "in-progress" },
  { id: "prog-3", name: "Rahul M.", source: "Quote sent", stage: "in-progress" },
];

const NEXT_STAGE: Record<StageId, StageId> = {
  new: "in-progress",
  "in-progress": "won",
  won: "new",
};

function columnBottomPadding(cardCount: number): string {
  if (cardCount === 0) return "pb-[106.41px]";
  if (cardCount === 3) return "pb-[47.81px]";
  if (cardCount >= 4) return "pb-[9px]";
  return "min-h-[219.41px] pb-[16px]";
}

/**
 * Interactive Figma "Illustrative sales pipeline" board (573:22813).
 * Renders the exact initial NEW (12), IN PROGRESS (8), and WON (0) columns
 * and supports HTML5 drag-and-drop plus click/keyboard stage progression.
 */
export function PipelineBoardPreview() {
  const [cards, setCards] = useState<PipelineCardItem[]>(() => [...INITIAL_CARDS]);
  const [draggedId, setDraggedId] = useState<string | null>(null);
  const [dragOverStage, setDragOverStage] = useState<StageId | null>(null);

  const moveCard = (cardId: string, targetStage: StageId) => {
    setCards((prev) =>
      prev.map((card) => (card.id === cardId ? { ...card, stage: targetStage } : card)),
    );
  };

  return (
    <div className="flex min-h-[228px] w-full flex-col gap-[16px] rounded-[16px] border border-white/[0.08] bg-[#0a0a0a] p-[18px] lg:w-[460px] lg:shrink-0 xl:w-[560px] min-[1380px]:w-[645px]">
      {/* Board header (573:22814) */}
      <div className="flex h-[32px] w-full items-center gap-[12px] border-b border-[#2b2f2b] px-[4px] pb-[12px]">
        <span
          aria-hidden="true"
          className="size-[7px] shrink-0 rounded-[3.5px] bg-[#5ee878] shadow-[0px_0px_0px_5px_rgba(94,232,120,0.12)]"
        />
        <span className="font-sans text-[12px] font-normal leading-normal text-white">
          Pipeline board
        </span>
      </div>

      {/* Kanban columns (573:22818) */}
      <div className="flex w-full flex-col items-stretch gap-[16px] sm:flex-row sm:items-start">
        {STAGE_COLUMNS.map((col) => {
          const colCards = cards.filter((c) => c.stage === col.id);
          const displayCount = Math.max(
            0,
            col.baseCount + (colCards.length - col.initialCardCount),
          );
          const isDropTarget = dragOverStage === col.id;

          return (
            <div
              key={col.id}
              onDragOver={(e) => {
                e.preventDefault();
                e.dataTransfer.dropEffect = "move";
                if (dragOverStage !== col.id) setDragOverStage(col.id);
              }}
              onDragLeave={(e) => {
                if (!e.currentTarget.contains(e.relatedTarget as Node | null)) {
                  setDragOverStage((prev) => (prev === col.id ? null : prev));
                }
              }}
              onDrop={(e) => {
                e.preventDefault();
                const id = e.dataTransfer.getData("text/plain") || draggedId;
                if (id) moveCard(id, col.id);
                setDraggedId(null);
                setDragOverStage(null);
              }}
              className={cn(
                "flex min-w-0 flex-1 flex-col items-start gap-[12px] rounded-[7px] border bg-[#111] px-[12px] pt-[16px] transition-colors",
                columnBottomPadding(colCards.length),
                isDropTarget ? "border-[#5ee878]/60" : "border-white/[0.08]",
              )}
            >
              {/* Column header */}
              <div className="flex w-full items-center justify-between pb-[7px]">
                <span className="font-inter text-[11px] font-extrabold leading-normal tracking-[0.27px] text-[#f8f8f8]">
                  {col.label}
                </span>
                <span className="font-inter text-[10px] font-extrabold leading-normal tracking-[0.27px] text-[#5ee878]">
                  {displayCount}
                </span>
              </div>

              {/* Lead cards or dropzone */}
              {colCards.length > 0 ? (
                colCards.map((card) => (
                  <button
                    key={card.id}
                    type="button"
                    draggable
                    onDragStart={(e) => {
                      setDraggedId(card.id);
                      e.dataTransfer.effectAllowed = "move";
                      e.dataTransfer.setData("text/plain", card.id);
                    }}
                    onDragEnd={() => {
                      setDraggedId(null);
                      setDragOverStage(null);
                    }}
                    onClick={() => moveCard(card.id, NEXT_STAGE[card.stage])}
                    aria-label={`Move ${card.name} (${card.source}) to next stage`}
                    className={cn(
                      "focus-ring flex w-full cursor-grab flex-col items-start gap-[6px] rounded-[5px] border border-white/[0.08] bg-white/[0.06] p-[16px] text-left transition-colors hover:border-white/20 active:cursor-grabbing",
                      draggedId === card.id && "opacity-50",
                    )}
                  >
                    <span className="font-inter text-[11px] font-bold leading-normal text-white">
                      {card.name}
                    </span>
                    <span className="w-full font-inter text-[8.4px] font-medium leading-[12.6px] text-white/[0.48]">
                      {card.source}
                    </span>
                  </button>
                ))
              ) : (
                <div className="flex h-[64px] w-full items-center justify-center rounded-[5px] border border-dashed border-white/[0.08] bg-white/[0.06] p-[16px]">
                  <span className="w-full text-center font-inter text-[8px] font-medium leading-[12.6px] text-white/[0.48]">
                    Drop leads here
                  </span>
                </div>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
}

/** Interactive accordion for Section 4 ("COMMON QUESTIONS" / 573:22994). */
export function PipelineFaq() {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <div className="w-full flex-1 border-t border-black/20">
      {PIPELINE_FAQS.map((item, idx) => {
        const isOpen = open === idx;
        return (
          <div key={item.q} className="w-full border-b border-black/20 py-[20px]">
            <div className="flex flex-col gap-[4px] px-[8px]">
              <button
                type="button"
                aria-expanded={isOpen}
                aria-controls={`pipeline-faq-panel-${idx}`}
                onClick={() => setOpen(isOpen ? null : idx)}
                className="focus-ring flex w-full cursor-pointer items-center justify-between gap-4 text-left"
              >
                <span className="font-sans text-[16px] font-normal leading-[24px] text-black">
                  {item.q}
                </span>
                <span className="relative size-[20px] shrink-0" aria-hidden="true">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    alt=""
                    src={isOpen ? "/figma/3918f.svg" : "/figma/e4128.svg"}
                    width={20}
                    height={20}
                    className="block size-full max-w-none"
                  />
                </span>
              </button>
              {isOpen ? (
                <p
                  id={`pipeline-faq-panel-${idx}`}
                  className="font-sans text-[14px] font-normal leading-[20px] text-black/[0.48]"
                >
                  {item.a}
                </p>
              ) : null}
            </div>
          </div>
        );
      })}
    </div>
  );
}


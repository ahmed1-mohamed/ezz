"use client";

import { cn } from "@/lib/utils";
import { useLanguage } from "@/contexts/LanguageContext";
import { READY_UNIT_STATE, type ReadyUnitState } from "../types";

const STYLES: Record<ReadyUnitState, string> = {
  [READY_UNIT_STATE.PENDING]: "bg-[#fff1ed] text-[#bc3916] border border-[#ffd5cc] dark:bg-orange-950/40 dark:text-orange-300 dark:border-orange-800/60",
  [READY_UNIT_STATE.ACCEPTED]: "bg-[#ecfdf3] text-[#027a48] border border-[#abefc6] dark:bg-emerald-950/40 dark:text-emerald-300 dark:border-emerald-800/60",
  [READY_UNIT_STATE.REJECTED]: "bg-[#fef3f2] text-[#b42318] border border-[#fecdca] dark:bg-red-950/40 dark:text-red-300 dark:border-red-800/60",
};

const LABEL_KEYS: Record<ReadyUnitState, string> = {
  [READY_UNIT_STATE.PENDING]: "readyMarket.status.pending",
  [READY_UNIT_STATE.ACCEPTED]: "readyMarket.status.confirmed",
  [READY_UNIT_STATE.REJECTED]: "readyMarket.status.rejected",
};

export function ReadyUnitStatusBadge({ state }: { state: ReadyUnitState | null }) {
  const { t } = useLanguage();
  if (state === null) return <span className="text-xs text-gray-400">-</span>;
  return (
    <span className={cn("inline-flex items-center rounded-md border px-2.5 py-0.5 text-xs font-medium", STYLES[state])}>
      {t(LABEL_KEYS[state])}
    </span>
  );
}

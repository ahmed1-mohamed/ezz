"use client";

import { AlertTriangle } from "lucide-react";
import { FollowUp } from "../types";
import { FollowUpItem } from "./FollowUpItem";
import { useLanguage } from "@/contexts/LanguageContext";
import { EmptyState } from "@/components/ui/empty-state";

interface OverdueSectionProps {
  items: FollowUp[];
  onMarkDone: (id: string | number) => void;
  isMarkingDone?: boolean;
}

export function OverdueSection({
  items,
  onMarkDone,
  isMarkingDone,
}: OverdueSectionProps) {
  const { language } = useLanguage();
  const isRTL = language === "ar";

  if (items.length === 0) {
    return (
      <div className="rounded-xl border border-gray-200 dark:border-neutral-800 bg-white dark:bg-neutral-900 p-8 text-center shadow-2xs">
        <EmptyState
          type="no_results"
          title={isRTL ? "لا توجد متابعات متأخرة 🎉" : "No overdue follow-ups 🎉"}
          message={
            isRTL
              ? "عمل رائع! جميع المتابعات المجدولة تم إنجازها في وقتها."
              : "Great job! All scheduled follow-ups are up to date."
          }
        />
      </div>
    );
  }

  return (
    <div className="rounded-xl border border-rose-200 dark:border-rose-900/60 bg-rose-50/30 dark:bg-rose-950/20 p-5 space-y-1 shadow-2xs">
      <div className="flex items-center gap-2 pb-2">
        <AlertTriangle className="h-4 w-4 text-rose-500 shrink-0" />
        <span className="font-semibold text-sm text-gray-900 dark:text-white">
          {isRTL ? "متأخرة" : "Overdue"}
        </span>
        <span className="inline-flex items-center justify-center px-2 py-0.5 rounded text-xs font-semibold bg-rose-100 text-rose-700 dark:bg-rose-900/60 dark:text-rose-300">
          {items.length}
        </span>
      </div>

      <div className="divide-y divide-rose-100 dark:divide-rose-900/40">
        {items.map((item) => (
          <FollowUpItem
            key={item.id}
            item={item}
            onMarkDone={onMarkDone}
            isMarkingDone={isMarkingDone}
          />
        ))}
      </div>
    </div>
  );
}
"use client";

import React from "react";
import { Phone, Check } from "lucide-react";
import { Button } from "@/components/ui/button";
import { FollowUp } from "../types";
import { useLanguage } from "@/contexts/LanguageContext";
import { toast } from "sonner";

interface FollowUpItemProps {
  item: FollowUp;
  onMarkDone: (id: string | number) => void;
  isMarkingDone?: boolean;
}

export const FollowUpItem = React.memo(function FollowUpItem({
  item,
  onMarkDone,
  isMarkingDone,
}: FollowUpItemProps) {
  const { language } = useLanguage();
  const isRTL = language === "ar";

  const formatScheduledDate = (dateStr: string) => {
    if (!dateStr) return "";
    const d = new Date(dateStr);
    if (isNaN(d.getTime())) return dateStr;

    const monthStr = d.toLocaleDateString("en-US", { month: "short" });
    const day = d.getDate();
    const hours = d.getHours();
    const minutes = String(d.getMinutes()).padStart(2, "0");
    const ampm = hours >= 12 ? "PM" : "AM";
    const formattedHours = String(hours % 12 || 12).padStart(2, "0");

    return `${monthStr} ${day}, ${formattedHours}:${minutes} ${ampm}`;
  };

  const handleCall = () => {
    if (item.phone && item.phone !== "—") {
      window.open(`tel:${item.phone}`, "_self");
    } else {
      toast.info(isRTL ? "لا يوجد رقم هاتف مسجل لهذا العميل" : "No phone number registered for this lead");
    }
  };

  const noteText = isRTL ? item.note_ar || item.note_en : item.note_en || item.note_ar;
  const formattedDate = formatScheduledDate(item.scheduled_at);

  return (
    <div className="flex items-center justify-between py-3 border-b border-rose-100 dark:border-rose-900/40 last:border-b-0 gap-4">
      <div className="flex flex-col">
        <span className="font-semibold text-sm text-gray-900 dark:text-white">
          {item.customer_name}
        </span>
        <span className="text-xs text-gray-500 dark:text-gray-400 mt-0.5" dir="ltr">
          {isRTL ? `${formattedDate} · ${noteText}` : `${noteText} · ${formattedDate}`}
        </span>
      </div>

      <div className="flex items-center gap-2 shrink-0">
        <button
          onClick={handleCall}
          title={isRTL ? "اتصال" : "Call"}
          className="p-2 text-teal-600 dark:text-teal-400 hover:bg-teal-50 dark:hover:bg-teal-950/40 rounded-lg transition-colors cursor-pointer"
        >
          <Phone className="h-4 w-4" />
        </button>

        <Button
          variant="outline"
          onClick={() => onMarkDone(item.id)}
          disabled={isMarkingDone}
          className="h-8 px-3 text-xs font-medium border-gray-200 dark:border-neutral-700 bg-white dark:bg-neutral-900 text-gray-700 dark:text-gray-200 hover:bg-gray-50 dark:hover:bg-neutral-800 gap-1 rounded-md shadow-2xs cursor-pointer"
        >
          <Check className="h-3.5 w-3.5 text-gray-600 dark:text-gray-300" />
          <span>{isRTL ? "تم" : "Done"}</span>
        </Button>
      </div>
    </div>
  );
});
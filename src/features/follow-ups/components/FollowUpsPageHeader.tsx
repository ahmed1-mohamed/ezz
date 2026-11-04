"use client";

import { Calendar } from "lucide-react";
import { Switch } from "@/components/ui/switch";
import { useLanguage } from "@/contexts/LanguageContext";

interface FollowUpsPageHeaderProps {
  isCalendarView: boolean;
  onCalendarToggle: (val: boolean) => void;
}

export function FollowUpsPageHeader({
  isCalendarView,
  onCalendarToggle,
}: FollowUpsPageHeaderProps) {
  const { t, language } = useLanguage();
  const isRTL = language === "ar";

  return (
    <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
      <div>
        <h1 className="text-xl sm:text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
          {t("sidebar.followUps") || "Follow-ups"}
        </h1>
        <p className="text-xs sm:text-sm text-gray-500 dark:text-gray-400 mt-0.5">
          {isRTL
            ? "متابعاتك المستحقة — أنجزها قبل فوات موعدها"
            : "Your due follow-ups — clear them before they slip"}
        </p>
      </div>

      <div className="flex items-center gap-2 self-start sm:self-auto">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-lg border border-gray-200 dark:border-neutral-800 bg-white dark:bg-neutral-900 h-9 shadow-2xs">
          <Calendar className="h-4 w-4 text-gray-500 dark:text-gray-400" />
          <span className="text-xs font-medium text-gray-700 dark:text-gray-300">
            {isRTL ? "التقويم" : "Calendar"}
          </span>
          <Switch
            checked={isCalendarView}
            onCheckedChange={onCalendarToggle}
            className="data-[state=checked]:bg-teal-600 data-[state=unchecked]:bg-gray-300 dark:data-[state=unchecked]:bg-neutral-700 scale-85 cursor-pointer"
          />
        </div>
      </div>
    </div>
  );
}
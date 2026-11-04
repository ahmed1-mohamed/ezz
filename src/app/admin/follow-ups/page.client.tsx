"use client";

import { useFollowUps } from "@/features/follow-ups/hooks/useFollowUps";
import { FollowUpsPageHeader } from "@/features/follow-ups/components/FollowUpsPageHeader";
import { OverdueSection } from "@/features/follow-ups/components/OverdueSection";
import { EmptyState } from "@/components/ui/empty-state";
import { useLanguage } from "@/contexts/LanguageContext";

export default function FollowUpsClient() {
  const { language } = useLanguage();
  const isRTL = language === "ar";

  const {
    overdueFollowUps,
    isLoading,
    isCalendarView,
    setIsCalendarView,
    markAsDone,
    isMarkingDone,
  } = useFollowUps();

  return (
    <div className="p-6 space-y-6 max-w-full overflow-hidden">
      <FollowUpsPageHeader
        isCalendarView={isCalendarView}
        onCalendarToggle={setIsCalendarView}
      />

      {isCalendarView ? (
        <div className="rounded-xl border border-gray-200 dark:border-neutral-800 bg-white dark:bg-neutral-900 p-8 shadow-2xs">
          <EmptyState
            type="no_results"
            title={isRTL ? "عرض التقويم" : "Calendar View"}
            message={
              isRTL
                ? "يتم عرض المتابعات المجدولة على شكل تقويم شهري وأسبوعي."
                : "Scheduled follow-up meetings and calls view."
            }
          />
        </div>
      ) : (
        <OverdueSection
          items={overdueFollowUps}
          onMarkDone={markAsDone}
          isMarkingDone={isMarkingDone}
        />
      )}
    </div>
  );
}
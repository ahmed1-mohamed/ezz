import { ChevronLeft, ChevronRight, Users, RotateCcw } from 'lucide-react';
import React from 'react';
import { useTranslation } from 'react-i18next';

export default React.memo(function TeacherScheduleWeekNavigator({
  weekOffset,
  onPrevWeek,
  onNextWeek,
  onResetWeek,
  weekTitle,
  weekRangeLabel,
  totalWeekSessions,
  selectedDate,
  onDateChange,
}) {
  const { t, i18n } = useTranslation();
  const isRtl = i18n?.language?.startsWith('ar') ?? true;
  const PrevIcon = isRtl ? ChevronRight : ChevronLeft;
  const NextIcon = isRtl ? ChevronLeft : ChevronRight;

  return (
    <div className="bg-white dark:bg-slate-900 rounded-3xl p-4 sm:p-5 shadow-xs border border-slate-100 dark:border-slate-800 flex flex-col md:flex-row md:items-center justify-between gap-4">
      <div className="flex items-center gap-2 flex-wrap">
        <div className="flex items-center gap-1 bg-slate-100 dark:bg-slate-800/80 p-1 rounded-2xl">
          <button
            onClick={onPrevWeek}
            className="p-2 rounded-xl text-slate-600 dark:text-slate-300 hover:bg-white dark:hover:bg-slate-700 transition-colors cursor-pointer"
            title={t('teacherSchedule.prevWeek', 'الأسبوع السابق')}
          >
            <PrevIcon size={16} />
          </button>

          <span className="px-3 py-1 text-xs font-bold text-slate-800 dark:text-slate-100 min-w-[7rem] text-center">
            {weekTitle}
          </span>

          <button
            onClick={onNextWeek}
            className="p-2 rounded-xl text-slate-600 dark:text-slate-300 hover:bg-white dark:hover:bg-slate-700 transition-colors cursor-pointer"
            title={t('teacherSchedule.nextWeek', 'الأسبوع القادم')}
          >
            <NextIcon size={16} />
          </button>
        </div>

        {weekOffset !== 0 && (
          <button
            onClick={onResetWeek}
            className="px-3 py-2 rounded-2xl border border-slate-200 dark:border-slate-700 text-xs font-bold text-slate-600 dark:text-slate-300 hover:bg-slate-50 dark:hover:bg-slate-800 transition-colors flex items-center gap-1 cursor-pointer"
          >
            <RotateCcw size={12} />
            <span>{t('teacherSchedule.currentWeek', 'الأسبوع الحالي')}</span>
          </button>
        )}

        {weekRangeLabel && (
          <span className="text-xs font-bold text-slate-400 dark:text-slate-500">
            {weekRangeLabel}
          </span>
        )}
      </div>

      <div className="flex items-center gap-3 self-end md:self-center flex-wrap">
        <div className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-2xl bg-emerald-50 text-[#00594C] dark:bg-emerald-950/40 dark:text-emerald-300 text-xs font-bold">
          <Users size={14} />
          <span>
            {totalWeekSessions} {t('teacherSchedule.weeklySessionsTotal', 'جلسة هذا الأسبوع')}
          </span>
        </div>

        <div className="flex items-center gap-1.5 text-xs">
          <input
            type="date"
            value={selectedDate}
            onChange={(e) => onDateChange(e.target.value)}
            className="px-3 py-1.5 rounded-2xl border border-slate-200 dark:border-slate-700 bg-slate-50/50 dark:bg-slate-800 text-slate-700 dark:text-slate-200 text-xs font-semibold focus:outline-none focus:ring-2 focus:ring-emerald-500/20"
          />
        </div>
      </div>
    </div>
  );
});

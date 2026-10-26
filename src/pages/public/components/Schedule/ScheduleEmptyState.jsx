import React from 'react';
import { Calendar, RotateCcw } from 'lucide-react';
import { useTranslation } from 'react-i18next';

export default React.memo(function ScheduleEmptyState({
    hasFiltersApplied,
    onResetFilters,
}) {
    const { t } = useTranslation();

    return (
        <div className="bg-white dark:bg-slate-900 rounded-3xl p-12 text-center max-w-lg mx-auto border border-slate-100 dark:border-slate-800 shadow-sm space-y-4">
            <div className="w-16 h-16 rounded-2xl bg-slate-50 dark:bg-slate-800 text-slate-400 dark:text-slate-500 flex items-center justify-center mx-auto">
                <Calendar className="w-8 h-8" />
            </div>

            <div className="space-y-1.5">
                <h3 className="text-xl font-bold text-slate-800 dark:text-white">
                    {hasFiltersApplied
                        ? t('schedule.noSearchResults', 'لا توجد جلسات تطابق التصنيف المختار')
                        : t('schedule.noSessionsTitle', 'لا توجد جلسات مجدولة لهذا اليوم')}
                </h3>
                <p className="text-sm text-slate-500 dark:text-slate-400">
                    {hasFiltersApplied
                        ? t('schedule.resetFiltersPrompt', 'يمكنك إعادة تعيين الفلاتر لرؤية جميع الجلسات المتاحة')
                        : t('schedule.enjoyRest', 'استمتع بوقتك وتابع مراجعتك الشخصية')}
                </p>
            </div>

            {hasFiltersApplied && (
                <button
                    onClick={onResetFilters}
                    className="inline-flex items-center gap-2 px-5 py-2.5 rounded-2xl bg-emerald-50 text-[#00695C] dark:bg-emerald-950/40 dark:text-emerald-400 hover:bg-emerald-100 font-bold text-xs transition-colors cursor-pointer"
                >
                    <RotateCcw className="w-3.5 h-3.5" />
                    <span>{t('schedule.resetFilters', 'إعادة ضبط الفلاتر')}</span>
                </button>
            )}
        </div>
    );
});

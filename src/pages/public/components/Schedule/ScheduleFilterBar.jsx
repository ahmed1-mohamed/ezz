import React from 'react';
import { useTranslation } from 'react-i18next';

export default React.memo(function ScheduleFilterBar({ statusFilter, onStatusFilterChange }) {
    const { t } = useTranslation();

    const filters = [
        { key: 'all', label: t('schedule.filterAll', 'جميع الجلسات') },
        { key: 'scheduled', label: t('schedule.filterScheduled', 'القادمة') },
        { key: 'live', label: t('schedule.filterLive', 'مباشر الآن') },
        { key: 'completed', label: t('schedule.filterCompleted', 'المنتهية') },
    ];

    return (
        <div className="bg-white dark:bg-slate-900 rounded-3xl p-3 sm:p-4 shadow-sm border border-slate-100 dark:border-slate-800 flex items-center justify-center">
            <div className="flex items-center gap-2 flex-wrap justify-center">
                {filters.map((flt) => (
                    <button
                        key={flt.key}
                        onClick={() => onStatusFilterChange(flt.key)}
                        className={`px-4 py-2 rounded-2xl text-xs sm:text-sm font-bold transition-all cursor-pointer ${
                            statusFilter === flt.key
                                ? 'bg-[#00695C] dark:bg-emerald-600 text-white shadow-sm'
                                : 'bg-slate-100 dark:bg-slate-800 hover:bg-slate-200 dark:hover:bg-slate-700 text-slate-600 dark:text-slate-300'
                        }`}
                    >
                        {flt.label}
                    </button>
                ))}
            </div>
        </div>
    );
});

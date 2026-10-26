import React from 'react';
import { useTranslation } from 'react-i18next';

export default React.memo(function ScheduleDayTabs({
    days,
    activeDayIndex,
    onSelectDay,
    getLocalizedDay,
}) {
    const { t } = useTranslation();

    return (
        <div className="flex justify-center gap-2.5 sm:gap-3.5 overflow-x-auto pb-2 px-1 scrollbar-none">
            {days.map((d, idx) => {
                const isSelected = activeDayIndex === idx;
                const sessionCount = d.sessions ? d.sessions.length : (d.sessionsCount || 0);
                const dayNum = d.dayNumber || (d.date ? d.date.split('-')[2] || d.date : '');
                const localizedDay = getLocalizedDay(d);

                return (
                    <button
                        key={`${d.day}-${d.date || idx}`}
                        onClick={() => onSelectDay(idx)}
                        className={`flex flex-col items-center justify-between min-w-[5.5rem] sm:min-w-[6.25rem] h-24 sm:h-28 rounded-3xl p-3 transition-all duration-300 font-bold focus:outline-none focus:ring-4 focus:ring-[#00695C]/20 shrink-0 cursor-pointer ${
                            isSelected
                                ? 'bg-[#00695C] dark:bg-emerald-600 text-white shadow-lg shadow-[#00695C]/25 dark:shadow-emerald-900/30 scale-105'
                                : 'bg-white dark:bg-slate-900 text-slate-600 dark:text-slate-300 hover:bg-slate-50 dark:hover:bg-slate-800 border border-slate-100 dark:border-slate-800 hover:-translate-y-0.5'
                        }`}
                    >
                        <span className="text-xs uppercase tracking-wider font-extrabold opacity-90 truncate max-w-full">
                            {localizedDay}
                        </span>

                        <span className={`text-xl sm:text-2xl font-black ${isSelected ? 'text-white' : 'text-slate-900 dark:text-white'}`}>
                            {dayNum || '-'}
                        </span>

                        <div className="flex items-center gap-1">
                            {d.isToday && (
                                <span className={`w-1.5 h-1.5 rounded-full ${isSelected ? 'bg-amber-300' : 'bg-emerald-500'} animate-pulse`} />
                            )}
                            <span className={`text-[10px] sm:text-[11px] font-bold ${isSelected ? 'text-emerald-100' : 'text-slate-400 dark:text-slate-500'}`}>
                                {sessionCount} {t('schedule.sessionSingle', 'حصة')}
                            </span>
                        </div>
                    </button>
                );
            })}
        </div>
    );
});

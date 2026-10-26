import React from 'react';
import { useTranslation } from 'react-i18next';

export default React.memo(function TeacherScheduleDaysTabs({
  weekDays,
  activeDayIndex,
  onSelectDay,
}) {
  const { t } = useTranslation();

  return (
    <div className="flex gap-2.5 overflow-x-auto pb-2 scrollbar-none">
      {weekDays.map((d, idx) => {
        const isSelected = activeDayIndex === idx;
        const sessionsCount = d.sessions?.length || 0;
        const dateNum = d.date ? d.date.split('-')[2] : '';

        return (
          <button
            key={d.date || d.dayKey || idx}
            onClick={() => onSelectDay(idx)}
            className={`flex flex-col items-center justify-between min-w-[5.25rem] sm:min-w-[6rem] h-24 rounded-3xl p-3 transition-all font-bold shrink-0 cursor-pointer ${
              isSelected
                ? 'bg-[#00594C] text-white shadow-md scale-102'
                : 'bg-white dark:bg-slate-900 text-slate-700 dark:text-slate-300 hover:bg-slate-50 dark:hover:bg-slate-800 border border-slate-100 dark:border-slate-800'
            }`}
          >
            <span className="text-xs font-bold truncate max-w-full">
              {d.dayName}
            </span>

            <span className={`text-xl font-black ${isSelected ? 'text-white' : 'text-slate-900 dark:text-white'}`}>
              {dateNum || '-'}
            </span>

            <div className="flex items-center gap-1">
              {d.isToday && (
                <span className={`w-1.5 h-1.5 rounded-full ${isSelected ? 'bg-amber-300' : 'bg-emerald-500'} animate-pulse`} />
              )}
              <span className={`text-[10px] font-semibold ${isSelected ? 'text-emerald-100' : 'text-slate-400'}`}>
                {sessionsCount} {t('teacherSchedule.sessionsCount', 'حصص')}
              </span>
            </div>
          </button>
        );
      })}
    </div>
  );
});

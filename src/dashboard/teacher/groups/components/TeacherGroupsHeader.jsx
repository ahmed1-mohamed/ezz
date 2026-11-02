import React from 'react';
import { Bell, Calendar } from 'lucide-react';
import { useTranslation } from 'react-i18next';

export default React.memo(function TeacherGroupsHeader({
  totalGroups = 0,
  currentTimeStr = '',
  currentDateStr = '',
  userInitial = 'أ',
  notificationsCount = 3,
}) {
  const { t, i18n } = useTranslation();
  const isRtl = i18n?.language?.startsWith('ar') ?? true;
  return (
    <header className="bg-white dark:bg-slate-900 rounded-3xl p-5 shadow-xs border border-slate-100 dark:border-slate-800 flex flex-col md:flex-row md:items-center justify-between gap-4" dir={isRtl ? 'rtl' : 'ltr'}>
      <div className="text-start">
        <h1 className="text-2xl sm:text-3xl font-black text-slate-900 dark:text-white leading-tight">
          {t('teacherGroups.title', 'مجموعاتي')}
        </h1>
        <p className="text-xs sm:text-sm text-slate-400 font-semibold mt-1">
          {totalGroups} {t('teacherGroups.assignedCount', 'مجموعة معينة')}
        </p>
      </div>
      <div className="flex items-center gap-3 self-end md:self-center flex-wrap">
        {currentTimeStr && (
          <span className="px-3.5 py-1.5 rounded-full text-xs font-mono font-bold bg-[#d2ede6] text-[#00594C] dark:bg-emerald-950/70 dark:text-emerald-300">
            {currentTimeStr}
          </span>
        )}
        {currentDateStr && (
          <div className="flex items-center gap-1.5 text-xs text-slate-500 dark:text-slate-400 font-semibold">
            <Calendar size={14} className="text-slate-400" />
            <span>{currentDateStr}</span>
          </div>
        )}
        <div className="relative p-2 rounded-xl text-slate-500 dark:text-slate-400 hover:bg-slate-50 dark:hover:bg-slate-800 transition-colors cursor-pointer">
          <Bell size={18} />
          {notificationsCount > 0 && (
            <span className="absolute -top-0.5 -end-0.5 w-4 h-4 rounded-full bg-[#00594C] text-white text-[10px] font-black flex items-center justify-center">
              {notificationsCount}
            </span>
          )}
        </div>
        <div className="w-9 h-9 rounded-full bg-amber-400 text-white font-black flex items-center justify-center text-sm shadow-xs shrink-0 select-none">
          {userInitial}
        </div>
      </div>
    </header>
  );
});

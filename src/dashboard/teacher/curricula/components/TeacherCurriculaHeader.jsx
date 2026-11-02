import React from 'react';
import { Calendar, Bell } from 'lucide-react';
import { useTranslation } from 'react-i18next';

export default React.memo(function TeacherCurriculaHeader({
  currentTimeStr = '',
  currentDateStr = '',
  userInitial = 'أ',
  notificationsCount = 3,
}) {
  const { t, i18n } = useTranslation();
  const isRtl = i18n?.language?.startsWith('ar') ?? true;
  return (
    <header
      className="bg-white dark:bg-slate-900 rounded-[28px] p-5 sm:p-6 shadow-xs border border-slate-100 dark:border-slate-800 flex flex-col md:flex-row md:items-center justify-between gap-4"
      dir={isRtl ? 'rtl' : 'ltr'}
    >
      <div className="text-start">
        <h1 className="text-xl sm:text-2xl font-black text-slate-800 dark:text-white leading-tight">
          {t('teacherCurricula.title', 'المناهج والمصادر التعليمية')}
        </h1>
        <p className="text-xs sm:text-sm text-slate-400 font-semibold mt-1">
          {t('teacherCurricula.subtitle', 'كل ما تحتاجه لتدريس مجموعاتك، في مكان واحد')}
        </p>
      </div>
      <div className="flex items-center gap-3 self-end md:self-center flex-wrap">
        <div className="w-9 h-9 rounded-full bg-[#E5AA38] text-white font-bold flex items-center justify-center text-sm shadow-xs select-none">
          {userInitial}
        </div>
        <div className="relative">
          <div className="w-9 h-9 rounded-full bg-slate-100 dark:bg-slate-800 flex items-center justify-center text-slate-600 dark:text-slate-300">
            <Bell size={16} />
          </div>
          {notificationsCount > 0 && (
            <span className="absolute -top-1 -right-1 w-4 h-4 rounded-full bg-[#00594C] text-white text-[10px] font-bold flex items-center justify-center">
              {notificationsCount}
            </span>
          )}
        </div>
        {currentDateStr && (
          <div className="flex items-center gap-1.5 text-xs text-slate-500 dark:text-slate-400 font-semibold">
            <Calendar size={14} className="text-slate-400" />
            <span>{currentDateStr}</span>
          </div>
        )}
        {currentTimeStr && (
          <span className="px-3.5 py-1.5 rounded-full text-xs font-mono font-bold bg-[#d2ede6] text-[#00594C] dark:bg-emerald-950/70 dark:text-emerald-300">
            {currentTimeStr}
          </span>
        )}
      </div>
    </header>
  );
});

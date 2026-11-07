import React from 'react';
import { Calendar } from 'lucide-react';
import { useTranslation } from 'react-i18next';

export default React.memo(function TeacherCurriculaHeader({
  currentTimeStr = '',
  currentDateStr = '',
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

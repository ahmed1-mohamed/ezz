import { useTranslation } from 'react-i18next';
import { Calendar, RotateCcw } from 'lucide-react';

export default function EvaluationHeader({ currentTimeStr, currentDateStr, onRefresh }) {
  const { t } = useTranslation();

  return (
    <div className="bg-white dark:bg-slate-900 rounded-3xl p-5 shadow-xs border border-slate-100 dark:border-slate-800 flex flex-col md:flex-row md:items-center justify-between gap-4">
      <div className="text-start">
        <h1 className="text-2xl sm:text-3xl font-black text-slate-800 dark:text-white leading-tight flex items-center gap-2">
          <span>{t('teacherEvaluations.title', 'التقييمات')}</span>
          <span className="text-2xl">⭐</span>
        </h1>
        <p className="text-xs sm:text-sm text-slate-400 font-semibold mt-0.5">
          {t('teacherEvaluations.subtitle', 'تقييم أداء وتلاوة الطلاب في الحصص ومتابعة مستواهم الدراسي')}
        </p>
      </div>

      <div className="flex items-center gap-3 self-end md:self-center flex-wrap">
        <span className="px-3.5 py-1 rounded-full text-xs font-mono font-bold bg-[#d2ede6] text-[#00594C] dark:bg-emerald-950/70 dark:text-emerald-300">
          {currentTimeStr}
        </span>

        <div className="flex items-center gap-1.5 text-xs text-slate-500 dark:text-slate-400 font-semibold">
          <Calendar size={14} className="text-slate-400" />
          <span>{currentDateStr}</span>
        </div>

        <button
          type="button"
          onClick={onRefresh}
          className="p-2 rounded-xl border border-slate-200 dark:border-slate-700 text-slate-600 dark:text-slate-300 hover:bg-slate-50 dark:hover:bg-slate-800 transition-colors cursor-pointer"
          title={t('teacherEvaluations.refresh', 'تحديث البيانات')}
        >
          <RotateCcw size={15} />
        </button>
      </div>
    </div>
  );
}

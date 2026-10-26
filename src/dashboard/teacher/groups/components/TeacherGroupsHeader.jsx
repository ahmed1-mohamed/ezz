import React from 'react';
import { Users, Calendar, RotateCcw } from 'lucide-react';
import { useTranslation } from 'react-i18next';

export default React.memo(function TeacherGroupsHeader({
  currentTimeStr,
  currentDateStr,
  isFetching,
  onRefetch,
}) {
  const { t } = useTranslation();

  return (
    <div className="bg-white dark:bg-slate-900 rounded-3xl p-5 shadow-xs border border-slate-100 dark:border-slate-800 flex flex-col md:flex-row md:items-center justify-between gap-4">
      <div className="flex items-center gap-3.5 text-start">
        <div className="w-12 h-12 rounded-2xl bg-[#00594C] text-white flex items-center justify-center shadow-xs shrink-0">
          <Users size={24} />
        </div>
        <div>
          <h1 className="text-xl sm:text-2xl font-black text-slate-800 dark:text-white leading-tight">
            {t('teacherGroups.title', 'المجموعات الدراسية')}
          </h1>
          <p className="text-xs sm:text-sm text-slate-400 font-semibold mt-0.5">
            {t('teacherGroups.description', 'إدارة المجموعات المعيّنة والطلاب والمناهج الدراسية')}
          </p>
        </div>
      </div>

      <div className="flex items-center gap-3 self-end md:self-center flex-wrap">
        <button
          onClick={onRefetch}
          disabled={isFetching}
          className="p-2 rounded-xl border border-slate-200 dark:border-slate-700 text-slate-600 dark:text-slate-300 hover:bg-slate-50 dark:hover:bg-slate-800 transition-colors disabled:opacity-50 cursor-pointer"
          title={t('common.refresh', 'تحديث')}
        >
          <RotateCcw size={16} className={isFetching ? 'animate-spin' : ''} />
        </button>

        {currentTimeStr && (
          <span className="px-3.5 py-1 rounded-full text-xs font-mono font-bold bg-[#d2ede6] text-[#00594C] dark:bg-emerald-950/70 dark:text-emerald-300">
            {currentTimeStr}
          </span>
        )}

        {currentDateStr && (
          <div className="flex items-center gap-1.5 text-xs text-slate-500 dark:text-slate-400 font-semibold">
            <Calendar size={14} className="text-slate-400" />
            <span>{currentDateStr}</span>
          </div>
        )}
      </div>
    </div>
  );
});

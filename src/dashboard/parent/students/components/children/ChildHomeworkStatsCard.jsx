import { useTranslation } from 'react-i18next';
import { useNavigate } from 'react-router-dom';
import {
  FileText,
  CheckCircle2,
  Clock,
  ChevronLeft,
  ChevronRight,
  } from 'lucide-react';

export default function ChildHomeworkStatsCard({
  totalHomework = 0,
  completedHomework = 0,
  pendingHomework = 0,
  studentId = '',
}) {
  const { t, i18n } = useTranslation();
  const navigate = useNavigate();
  const isRtl = i18n?.language?.startsWith('ar') ?? true;
  const total = Number(totalHomework || 0);
  const completed = Number(completedHomework || 0);
  const pending = Number(pendingHomework || 0);
  if (total === 0 && completed === 0 && pending === 0) {
    return null;
  }
  const completionRate = total > 0 ? Math.min(100, Math.round((completed / total) * 100)) : 0;
  return (
    <div
      className="bg-white dark:bg-slate-900 rounded-3xl p-6 sm:p-7 border border-slate-100 dark:border-slate-800 shadow-sm space-y-5"
      dir={isRtl ? 'rtl' : 'ltr'}
    >
      <div className="flex flex-wrap items-center justify-between gap-4">
        <div className="flex items-center gap-3">
          <div className="w-11 h-11 rounded-2xl bg-indigo-500/10 text-indigo-500 dark:text-indigo-400 flex items-center justify-center shrink-0">
            <FileText className="w-6 h-6" />
          </div>
          <div>
            <h3 className="text-lg font-black text-slate-900 dark:text-white">
              {t('parentDashboard.home.homeworkReport', 'متابعة الواجبات المدرسية')}
            </h3>
            <p className="text-xs text-slate-400 dark:text-slate-500 mt-0.5">
              {t('parentDashboard.home.homeworkSubtitle', 'متابعة الواجبات المسندة للابن ونسبة الإنجاز والحلول المكتملة')}
            </p>
          </div>
        </div>
        <button
          type="button"
          onClick={() => navigate(studentId ? `/dashboard/parent/assignments?studentId=${studentId}` : '/dashboard/parent/assignments')}
          className="text-xs text-[#0f7a6c] dark:text-emerald-400 font-bold hover:underline flex items-center gap-1 cursor-pointer"
        >
          <span>{t('parent.childrenList.viewAllHomework', 'استعراض كافة الواجبات')}</span>
          {isRtl ? <ChevronLeft className="w-4 h-4" /> : <ChevronRight className="w-4 h-4" />}
        </button>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
        <div className="p-4 rounded-2xl bg-slate-50 dark:bg-slate-800/60 border border-slate-100 dark:border-slate-800 flex items-center justify-between">
          <div>
            <span className="text-xs font-semibold text-slate-400 block mb-0.5">
              {t('parentDashboard.home.totalHomework', 'إجمالي الواجبات')}
            </span>
            <span className="text-2xl font-black text-slate-900 dark:text-white">
              {total}
            </span>
          </div>
          <div className="w-10 h-10 rounded-xl bg-slate-200/50 dark:bg-slate-700/50 text-slate-600 dark:text-slate-300 flex items-center justify-center font-bold">
            {total}
          </div>
        </div>
        <div className="p-4 rounded-2xl bg-slate-50 dark:bg-slate-800/60 border border-slate-100 dark:border-slate-800 flex items-center justify-between">
          <div>
            <span className="text-xs font-semibold text-slate-400 block mb-0.5">
              {t('parentDashboard.home.completedHomework', 'الواجبات المكتملة')}
            </span>
            <span className="text-2xl font-black text-emerald-600 dark:text-emerald-400">
              {completed}
            </span>
          </div>
          <div className="w-10 h-10 rounded-xl bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 flex items-center justify-center">
            <CheckCircle2 className="w-5 h-5" />
          </div>
        </div>
        <div className="p-4 rounded-2xl bg-slate-50 dark:bg-slate-800/60 border border-slate-100 dark:border-slate-800 flex items-center justify-between">
          <div>
            <span className="text-xs font-semibold text-slate-400 block mb-0.5">
              {t('parentDashboard.home.pendingHomework', 'قيد الانتظار والحل')}
            </span>
            <span className="text-2xl font-black text-amber-600 dark:text-amber-400">
              {pending}
            </span>
          </div>
          <div className="w-10 h-10 rounded-xl bg-amber-500/10 text-amber-500 flex items-center justify-center">
            <Clock className="w-5 h-5" />
          </div>
        </div>
      </div>
      <div className="space-y-1.5 pt-1">
        <div className="flex justify-between items-center text-xs font-bold">
          <span className="text-slate-500 dark:text-slate-400">
            {t('parentDashboard.home.homeworkCompletionRate', 'نسبة إنجاز الواجبات')}
          </span>
          <span className="text-[#0f7a6c] dark:text-emerald-400">
            {completionRate}%
          </span>
        </div>
        <div className="w-full bg-slate-100 dark:bg-slate-800 rounded-full h-2.5 overflow-hidden">
          <div
            className="h-full rounded-full bg-gradient-to-r from-[#0f7a6c] to-emerald-500 transition-all duration-700 ease-out"
            style={{ width: `${completionRate}%` }}
          />
        </div>
      </div>
    </div>
  );
}


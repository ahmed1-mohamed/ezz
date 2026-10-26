import { useTranslation } from 'react-i18next';
import { Star, ChevronLeft, ChevronRight } from 'lucide-react';

export default function EvaluationHistoryList({
  evaluationsList,
  paginatedEvaluations,
  evalPage,
  onPageChange,
  totalEvalPages,
}) {
  const { t, i18n } = useTranslation();
  const isRtl = i18n?.language?.startsWith('ar') ?? true;

  if (!evaluationsList || evaluationsList.length === 0) {
    return null;
  }

  const PrevIcon = isRtl ? ChevronRight : ChevronLeft;
  const NextIcon = isRtl ? ChevronLeft : ChevronRight;

  return (
    <div className="bg-white dark:bg-slate-900 rounded-3xl p-6 sm:p-7 shadow-xs border border-slate-100 dark:border-slate-800 space-y-4 text-start">
      <div className="flex items-center justify-between">
        <h3 className="text-base sm:text-lg font-black text-slate-800 dark:text-white">
          {t('teacherEvaluations.recordedEvaluations', 'تقييمات الطلاب المسجلة')}
        </h3>
        <span className="text-xs font-semibold text-slate-400">
          {t('teacherEvaluations.totalEvaluationsCount', 'إجمالي {{count}} تقييم', {
            count: evaluationsList.length,
          })}
        </span>
      </div>

      <div className="space-y-3">
        {paginatedEvaluations.map((evalItem) => (
          <div
            key={evalItem.id}
            className="bg-slate-50/80 dark:bg-slate-800/50 rounded-2xl p-4 sm:p-5 flex flex-col md:flex-row md:items-center justify-between gap-4 border border-slate-100/70 dark:border-slate-800 transition"
          >
            <div className="text-start space-y-1.5 flex-1 min-w-0">
              <div className="flex items-center gap-2 flex-wrap">
                <h5 className="text-sm sm:text-base font-bold text-slate-800 dark:text-white">
                  {evalItem.studentName}
                </h5>
                {evalItem.dateStr && (
                  <span className="text-xs text-slate-400 font-semibold">
                    • {evalItem.dateStr}
                  </span>
                )}
              </div>

              <p className="text-xs text-[#00594C] dark:text-emerald-400 font-bold">
                {t('teacherEvaluations.group', 'المجموعة')}: {evalItem.groupName} • {evalItem.sessionName}
              </p>

              {evalItem.notes && (
                <p className="text-xs text-slate-600 dark:text-slate-300 font-medium pt-1 line-clamp-2">
                  {evalItem.notes}
                </p>
              )}
            </div>

            <div className="flex items-center gap-1.5 px-4 py-2 rounded-xl bg-amber-50 dark:bg-amber-950/40 border border-amber-200/60 dark:border-amber-900/40 shrink-0 self-start md:self-center">
              <div className="flex items-center gap-0.5" dir="ltr">
                {[1, 2, 3, 4, 5].map((s) => (
                  <Star
                    key={s}
                    size={15}
                    className={
                      s <= evalItem.rating
                        ? 'fill-amber-400 text-amber-400'
                        : 'text-slate-200 dark:text-slate-700'
                    }
                  />
                ))}
              </div>
              <span className="text-xs font-bold text-amber-800 dark:text-amber-300 ms-1">
                {evalItem.rating} / 5
              </span>
            </div>
          </div>
        ))}
      </div>

      <div className="flex flex-col sm:flex-row items-center justify-between pt-4 border-t border-slate-100 dark:border-slate-800 text-xs gap-3">
        <span className="text-slate-500 dark:text-slate-400 font-semibold">
          {t('teacherEvaluations.showingPage', 'عرض صفحة {{current}} من {{total}}', {
            current: evalPage,
            total: totalEvalPages,
          })}
        </span>
        <div className="flex items-center gap-1.5">
          <button
            type="button"
            onClick={() => onPageChange(Math.max(1, evalPage - 1))}
            disabled={evalPage <= 1}
            className="p-2 rounded-xl border border-slate-200 dark:border-slate-700 text-slate-600 dark:text-slate-300 hover:bg-slate-50 dark:hover:bg-slate-800 disabled:opacity-40 cursor-pointer"
            title={t('teacherEvaluations.previous', 'السابق')}
          >
            <PrevIcon size={16} />
          </button>

          <div className="flex items-center gap-1">
            {Array.from({ length: totalEvalPages }, (_, i) => {
              const pNum = i + 1;
              return (
                <button
                  type="button"
                  key={pNum}
                  onClick={() => onPageChange(pNum)}
                  className={`w-8 h-8 rounded-xl font-bold text-xs transition cursor-pointer ${
                    pNum === evalPage
                      ? 'bg-[#00594C] text-white shadow-xs'
                      : 'border border-slate-200 dark:border-slate-700 text-slate-600 dark:text-slate-300 hover:bg-slate-50 dark:hover:bg-slate-800'
                  }`}
                >
                  {pNum}
                </button>
              );
            })}
          </div>

          <button
            type="button"
            onClick={() => onPageChange(Math.min(totalEvalPages, evalPage + 1))}
            disabled={evalPage >= totalEvalPages}
            className="p-2 rounded-xl border border-slate-200 dark:border-slate-700 text-slate-600 dark:text-slate-300 hover:bg-slate-50 dark:hover:bg-slate-800 disabled:opacity-40 cursor-pointer"
            title={t('teacherEvaluations.next', 'التالي')}
          >
            <NextIcon size={16} />
          </button>
        </div>
      </div>
    </div>
  );
}

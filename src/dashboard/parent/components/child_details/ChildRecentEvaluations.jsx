import { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { parentApi } from '@/shared/services/api/parentApi';

export default function ChildRecentEvaluations({ childId, initialEvaluations }) {
  const { t } = useTranslation();
  const [evaluations, setEvaluations] = useState(initialEvaluations || []);
  const [isLoading, setIsLoading] = useState(!initialEvaluations);
  const [prevInitialEvaluations, setPrevInitialEvaluations] = useState(initialEvaluations);
  if (prevInitialEvaluations !== initialEvaluations) {
    setPrevInitialEvaluations(initialEvaluations);
    if (initialEvaluations && initialEvaluations.length > 0) {
      setEvaluations(initialEvaluations);
      setIsLoading(false);
    }
  }
  useEffect(() => {
    if (initialEvaluations && initialEvaluations.length > 0) return;
    let isMounted = true;
    Promise.resolve().then(async () => {
      if (!isMounted) return;
      setIsLoading(true);
      const res = await parentApi.fetchStudentEvaluations({ studentId: childId });
      if (isMounted) {
        if (res?.success && Array.isArray(res.data) && res.data.length > 0) {
          setEvaluations(res.data);
        } else {
          setEvaluations([]);
        }
        setIsLoading(false);
      }
    });
    return () => { isMounted = false; };
  }, [childId, initialEvaluations]);
  return (
    <div className="bg-white dark:bg-slate-800 rounded-2xl p-6 shadow-sm border border-slate-100 dark:border-slate-700">
      <h3 className="font-bold text-slate-800 dark:text-slate-100 mb-6">
        {t('parentDashboard.childrenDetails.recentEvaluationsTitle', 'التقييمات الأخيرة')}
      </h3>
      {isLoading ? (
        <div className="space-y-3">
          {[1, 2].map((n) => (
            <div key={n} className="h-16 rounded-xl bg-slate-100 dark:bg-slate-700/50 animate-pulse" />
          ))}
        </div>
      ) : evaluations.length === 0 ? (
        <div className="text-center py-6 text-slate-500 dark:text-slate-400 text-sm">
          {t('parentDashboard.childrenDetails.noEvaluations', 'لا توجد تقييمات مسجلة حتى الآن')}
        </div>
      ) : (
        <div className="space-y-4">
          {evaluations.map((evalItem, idx) => {
            const title = evalItem.sessionData?.title || evalItem.title || evalItem.subject || evalItem.notes || evalItem.comment || t('parentDashboard.childrenDetails.evaluation', 'تقييم الحصة');
            const teacher = evalItem.teacherData?.name || evalItem.teacherName || evalItem.teacher;
            const date = evalItem.sessionData?.date || evalItem.date || evalItem.createdAt?.slice(0, 10);
            const ratingValue = evalItem.rating ?? evalItem.score ?? '-';
            return (
              <div
                key={evalItem.id || evalItem._id || idx}
                className="flex items-center justify-between p-4 bg-slate-50 dark:bg-slate-900 rounded-xl border border-slate-100 dark:border-slate-700"
              >
                <div className="text-start">
                  <h4 className="font-bold text-slate-800 dark:text-slate-100 text-sm">
                    {title}
                  </h4>
                  {teacher && (
                    <p className="text-xs text-slate-500 dark:text-slate-400 mt-1">
                      {teacher}
                    </p>
                  )}
                  {date && (
                    <p className="text-[10px] text-slate-400 mt-0.5">{date}</p>
                  )}
                </div>
                <div className="text-emerald-500 font-bold text-xl">
                  {ratingValue}
                </div>
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
}

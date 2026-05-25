import React from 'react';
import { useTranslation } from 'react-i18next';

export default function ChildRecentEvaluations() {
  const { t } = useTranslation();
  const evaluations = [
    { id: 1, title: t('parent.mockData.evaluations.memorizedSurahAlBaqarah'), teacher: t('parent.mockData.teachers.sheikhAhmedMansour'), date: '2026-04-08', score: 95 },
    { id: 2, title: t('parent.mockData.evaluations.memorizedSurahAlBaqarah'), teacher: t('parent.mockData.teachers.sheikhAhmedMansour'), date: '2026-04-08', score: 95 },
    { id: 3, title: t('parent.mockData.evaluations.memorizedSurahAlBaqarah'), teacher: t('parent.mockData.teachers.sheikhAhmedMansour'), date: '2026-04-08', score: 95 }
  ];

  return (
    <div className="bg-white dark:bg-slate-800 rounded-2xl p-6 shadow-sm border border-slate-100 dark:border-slate-700">
      <h3 className="font-bold text-slate-800 dark:text-slate-100 mb-6">{t('parentDashboard.childrenDetails.recentEvaluationsTitle')}</h3>
      <div className="space-y-4">
        {evaluations.map((evalItem) => (
          <div key={evalItem.id} className="flex items-center justify-between p-4 bg-slate-50 dark:bg-slate-900 rounded-xl border border-slate-100 dark:border-slate-700">
            <div className="text-start">
              <h4 className="font-bold text-slate-800 dark:text-slate-100 text-sm">{evalItem.title}</h4>
              <p className="text-xs text-slate-500 dark:text-slate-400 mt-1">{evalItem.teacher}</p>
              <p className="text-[10px] text-slate-400 mt-0.5">{evalItem.date}</p>
            </div>
            <div className="text-emerald-500 font-bold text-xl">
              {evalItem.score}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

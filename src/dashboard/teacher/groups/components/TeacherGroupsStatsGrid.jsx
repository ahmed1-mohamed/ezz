import React from 'react';
import { useTranslation } from 'react-i18next';

export default React.memo(function TeacherGroupsStatsGrid({
  totalGroups = 0,
  privateGroups = 0,
  publicGroups = 0,
  totalStudents = 0,
}) {
  const { t } = useTranslation();
  const statsItems = [
    {
      id: 'totalGroups',
      value: totalGroups,
      label: t('teacherGroups.statTotalGroups', 'إجمالي المجموعات'),
      colorClass: 'text-emerald-700 dark:text-emerald-400',
    },
    {
      id: 'privateGroups',
      value: privateGroups,
      label: t('teacherGroups.statPrivateGroups', 'مجموعات خاصة'),
      colorClass: 'text-purple-600 dark:text-purple-400',
    },
    {
      id: 'publicGroups',
      value: publicGroups,
      label: t('teacherGroups.statPublicGroups', 'مجموعات جماعية'),
      colorClass: 'text-blue-600 dark:text-blue-400',
    },
    {
      id: 'totalStudents',
      value: totalStudents,
      label: t('teacherGroups.statTotalStudents', 'إجمالي الطلاب'),
      colorClass: 'text-amber-500 dark:text-amber-400',
    },
  ];
  return (
    <section className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-5">
      {statsItems.map((item) => (
        <div
          key={item.id}
          className="bg-white dark:bg-slate-900 rounded-3xl p-5 sm:p-6 text-center border border-slate-100 dark:border-slate-800 shadow-xs flex flex-col items-center justify-center space-y-1 transition-shadow hover:shadow-sm"
        >
          <span className={`text-3xl sm:text-4xl font-black ${item.colorClass}`}>
            {item.value}
          </span>
          <span className="text-xs sm:text-sm font-bold text-slate-400 dark:text-slate-500">
            {item.label}
          </span>
        </div>
      ))}
    </section>
  );
});


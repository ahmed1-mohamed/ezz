import React from 'react';
import { BookOpen, BookMarked, Files, Users } from 'lucide-react';
import { useTranslation } from 'react-i18next';

export default React.memo(function TeacherCurriculaStatsGrid({
  totalCurricula = 0,
  booksCount = 0,
  supportMaterials = 0,
  linkedGroups = 0,
}) {
  const { t } = useTranslation();
  const statsItems = [
    {
      id: 'totalCurricula',
      value: totalCurricula,
      label: t('teacherCurricula.statTotalCurricula', 'مناهج معينة لك'),
      icon: BookOpen,
      iconBg: 'bg-[#e6f4f1] text-[#00594C] dark:bg-emerald-950/40 dark:text-emerald-400',
    },
    {
      id: 'booksCount',
      value: booksCount,
      label: t('teacherCurricula.statBooks', 'كتب ومراجع'),
      icon: BookMarked,
      iconBg: 'bg-[#fef9e7] text-amber-500 dark:bg-amber-950/40 dark:text-amber-400',
    },
    {
      id: 'supportMaterials',
      value: supportMaterials,
      label: t('teacherCurricula.statSupportMaterials', 'مواد مساندة'),
      icon: Files,
      iconBg: 'bg-[#f3f0fb] text-purple-600 dark:bg-purple-950/40 dark:text-purple-400',
    },
    {
      id: 'linkedGroups',
      value: linkedGroups,
      label: t('teacherCurricula.statLinkedGroups', 'مجموعات مرتبطة بالمناهج'),
      icon: Users,
      iconBg: 'bg-[#edf5fe] text-blue-500 dark:bg-blue-950/40 dark:text-blue-400',
    },
  ];
  return (
    <section className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-5">
      {statsItems.map((item) => {
        const Icon = item.icon;
        return (
          <div
            key={item.id}
            className="bg-white dark:bg-slate-900 rounded-[28px] p-5 sm:p-6 border border-slate-100 dark:border-slate-800 shadow-xs flex items-center justify-between transition-shadow hover:shadow-sm"
          >
            <div className="text-start">
              <span className="text-3xl sm:text-4xl font-black text-slate-800 dark:text-white leading-none block">
                {item.value}
              </span>
              <span className="text-xs sm:text-sm font-bold text-slate-400 dark:text-slate-400 mt-1 block">
                {item.label}
              </span>
            </div>
            <div className={`w-12 h-12 rounded-2xl flex items-center justify-center shrink-0 ${item.iconBg}`}>
              <Icon size={22} />
            </div>
          </div>
        );
      })}
    </section>
  );
});

import React from 'react';
import { CheckCircle2, Star, Award, GraduationCap } from 'lucide-react';
import { useTranslation } from 'react-i18next';

export default React.memo(function StudentCoreStatsGrid({
  attendanceRate = '0%',
  averageRating = '5.0',
  totalEvaluations = 0,
  academicLevel = '-',
}) {
  const { t } = useTranslation();
  const statItems = [
    {
      id: 'attendanceRate',
      label: t('studentDashboard.profile.attendanceRate', 'معدل الحضور'),
      value: attendanceRate,
      icon: CheckCircle2,
      colorClass: 'text-emerald-600 dark:text-emerald-400',
      bgClass: 'bg-emerald-50/70 dark:bg-emerald-950/20 border-emerald-100/60 dark:border-emerald-900/30',
      iconBg: 'bg-emerald-100/70 dark:bg-emerald-900/40 text-emerald-600 dark:text-emerald-300',
    },
    {
      id: 'averageRating',
      label: t('studentDashboard.profile.averageRating', 'متوسط التقييم'),
      value: `${averageRating} / 5`,
      icon: Star,
      colorClass: 'text-amber-500 dark:text-amber-400',
      bgClass: 'bg-amber-50/70 dark:bg-amber-950/20 border-amber-100/60 dark:border-amber-900/30',
      iconBg: 'bg-amber-100/70 dark:bg-amber-900/40 text-amber-500 dark:text-amber-300',
    },
    {
      id: 'totalEvaluations',
      label: t('studentDashboard.profile.totalEvaluations', 'إجمالي التقييمات'),
      value: totalEvaluations,
      icon: Award,
      colorClass: 'text-purple-600 dark:text-purple-400',
      bgClass: 'bg-purple-50/70 dark:bg-purple-950/20 border-purple-100/60 dark:border-purple-900/30',
      iconBg: 'bg-purple-100/70 dark:bg-purple-900/40 text-purple-600 dark:text-purple-300',
    },
    {
      id: 'academicLevel',
      label: t('studentDashboard.profile.academicLevel', 'المستوى الدراسي'),
      value: academicLevel,
      icon: GraduationCap,
      colorClass: 'text-[#005953] dark:text-teal-400',
      bgClass: 'bg-teal-50/70 dark:bg-teal-950/20 border-teal-100/60 dark:border-teal-900/30',
      iconBg: 'bg-teal-100/70 dark:bg-teal-900/40 text-[#005953] dark:text-teal-300',
    },
  ];
  return (
    <section className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-5">
      {statItems.map((item) => {
        const Icon = item.icon;
        return (
          <div
            key={item.id}
            className={`rounded-[24px] p-5 border shadow-xs flex items-center justify-between text-start transition-shadow hover:shadow-sm ${item.bgClass}`}
          >
            <div>
              <span className="text-xs font-bold text-slate-500 dark:text-slate-400 block mb-1">
                {item.label}
              </span>
              <span className={`text-2xl sm:text-3xl font-black block leading-none ${item.colorClass}`}>
                {item.value}
              </span>
            </div>
            <div className={`w-11 h-11 rounded-2xl flex items-center justify-center shrink-0 ${item.iconBg}`}>
              <Icon size={20} />
            </div>
          </div>
        );
      })}
    </section>
  );
});


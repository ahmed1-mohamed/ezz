import React from 'react';
import {
  GraduationCap,
  Users,
  Video,
  Clock,
  Wallet,
  AlertCircle,
  TrendingUp,
} from 'lucide-react';
import { useTranslation } from 'react-i18next';

export default React.memo(function TeacherStatsGrid({
  totalStudents,
  totalGroups,
  totalSessions,
  totalTeachingHours,
  totalEarnings,
  dueEarnings,
}) {
  const { t } = useTranslation();

  const statCards = [
    {
      id: 'students',
      label: t('teacherDashboard.totalStudents', 'إجمالي الطلاب'),
      value: totalStudents,
      icon: GraduationCap,
      iconBg: 'bg-[#e8f7f3] text-[#00594C] dark:bg-emerald-950/60 dark:text-emerald-400',
    },
    {
      id: 'groups',
      label: t('teacherDashboard.assignedGroups', 'المجموعات المعيّنة'),
      value: totalGroups,
      icon: Users,
      iconBg: 'bg-[#eff6ff] text-[#3b82f6] dark:bg-blue-950/60 dark:text-blue-400',
    },
    {
      id: 'sessions',
      label: t('teacherDashboard.totalSessions', 'إجمالي الجلسات'),
      value: totalSessions,
      icon: Video,
      iconBg: 'bg-[#f5f3ff] text-[#8b5cf6] dark:bg-purple-950/60 dark:text-purple-400',
    },
    {
      id: 'hours',
      label: t('teacherDashboard.teachingHours', 'ساعات التدريس'),
      value: totalTeachingHours,
      icon: Clock,
      iconBg: 'bg-[#fffbeb] text-[#f59e0b] dark:bg-amber-950/60 dark:text-amber-400',
    },
    {
      id: 'earnings',
      label: t('teacherDashboard.totalEarnings', 'إجمالي الأرباح'),
      value: totalEarnings,
      icon: Wallet,
      iconBg: 'bg-[#ecfdf5] text-[#10b981] dark:bg-emerald-950/60 dark:text-emerald-400',
    },
    {
      id: 'due',
      label: t('teacherDashboard.dueEarnings', 'أرباح قيد الانتظار'),
      value: dueEarnings,
      icon: AlertCircle,
      iconBg: 'bg-[#fff1f2] text-[#ef4444] dark:bg-rose-950/60 dark:text-rose-400',
    },
  ];

  return (
    <section className="space-y-3">
      <h2 className="text-base sm:text-lg font-bold text-slate-800 dark:text-slate-100 text-start">
        {t('teacherDashboard.overview', 'نظرة عامة')}
      </h2>

      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-3.5">
        {statCards.map((card) => {
          const Icon = card.icon;
          return (
            <div
              key={card.id}
              className="bg-white dark:bg-slate-900 rounded-3xl p-4 sm:p-5 shadow-xs border border-slate-100 dark:border-slate-800 hover:shadow-md transition-shadow flex flex-col justify-between text-center"
            >
              <div className="flex items-center justify-between mb-3">
                <div
                  className={`w-9 h-9 rounded-2xl flex items-center justify-center shrink-0 ${card.iconBg}`}
                >
                  <Icon size={18} />
                </div>
                <div className="text-emerald-500 flex items-center">
                  <TrendingUp size={14} />
                </div>
              </div>

              <div className="text-xl sm:text-2xl font-black text-slate-800 dark:text-white leading-tight">
                {card.value}
              </div>

              <div className="text-[11px] sm:text-xs font-semibold text-slate-400 dark:text-slate-500 mt-1 truncate">
                {card.label}
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
});

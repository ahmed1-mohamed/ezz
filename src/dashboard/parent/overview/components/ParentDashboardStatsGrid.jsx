import React from 'react';
import { useTranslation } from 'react-i18next';
import { Users, CheckCircle2, Calendar, Star } from 'lucide-react';
import StatCard from '../../components/StatCard';

export default React.memo(function ParentDashboardStatsGrid({ statistics }) {
  const { t } = useTranslation();
  const totalKids = statistics?.totalChildren ?? 0;
  const attendanceRate = statistics?.attendanceRate ?? 0;
  const averageRating = statistics?.averageRating ?? 0;
  const homeworkText = statistics?.homeworkStats?.text || statistics?.completedHomework || '0/0';
  const stats = [
    {
      id: 'children',
      label: t('parentDashboard.home.totalChildren', 'إجمالي الأبناء'),
      value: String(totalKids),
      color: 'text-[#0f7a6c] dark:text-emerald-400',
      icon: Users,
    },
    {
      id: 'attendance',
      label: t('parentDashboard.home.attendanceRate', 'معدل الحضور'),
      value: `${attendanceRate}%`,
      subtext: t('parentDashboard.home.attendanceSubtext', '+5% عن الشهر الماضي'),
      subtextColor: 'text-emerald-500',
      color: 'text-emerald-500',
      icon: CheckCircle2,
    },
    {
      id: 'homework',
      label: t('parentDashboard.home.completedAssignments', 'الواجبات المكتملة'),
      value: homeworkText,
      color: 'text-amber-500',
      icon: Calendar,
    },
    {
      id: 'rating',
      label: t('parentDashboard.home.averageRating', 'متوسط التقييم'),
      value: String(averageRating),
      color: 'text-amber-500',
      icon: Star,
    },
  ];
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
      {stats.map((stat) => (
        <div key={stat.id} className="h-full">
          <StatCard {...stat} layout="dashboard" />
        </div>
      ))}
    </div>
  );
});

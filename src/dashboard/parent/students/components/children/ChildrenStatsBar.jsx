import { useTranslation } from 'react-i18next';
import {
  Users,
  TrendingUp,
  BookOpen,
  Layers,
} from 'lucide-react';

export default function ChildrenStatsBar({ childrenList = [] }) {
  const { t } = useTranslation();
  const totalChildren = childrenList.length;
  const totalRemaining = childrenList.reduce((acc, c) => {
    const remaining = Number(c?.sessionsBalance?.remaining ?? c?.remainingClasses ?? 0);
    return acc + remaining;
  }, 0);
  const totalAttendanceSum = childrenList.reduce((acc, c) => {
    return acc + Number(c?.attendanceRate ?? 0);
  }, 0);
  const avgAttendance = totalChildren > 0
    ? Math.round(totalAttendanceSum / totalChildren)
    : 0;
  const allGroupsSet = new Set();
  childrenList.forEach((c) => {
    if (Array.isArray(c?.groups)) {
      c.groups.forEach((g) => {
        const gName = typeof g === 'object' && g !== null ? (g.name || g.title) : String(g || '');
        if (gName) allGroupsSet.add(gName);
      });
    }
  });
  const totalGroups = allGroupsSet.size;
  const stats = [
    {
      label: t('parent.childrenList.totalChildren', 'إجمالي الأبناء'),
      value: totalChildren,
      icon: Users,
      color: 'text-blue-500',
      bgColor: 'bg-blue-50 dark:bg-blue-950/30 border-blue-100 dark:border-blue-900/30',
    },
    {
      label: t('parent.childrenList.avgAttendance', 'متوسط الحضور العام'),
      value: `${avgAttendance}%`,
      icon: TrendingUp,
      color: 'text-emerald-500',
      bgColor: 'bg-emerald-50 dark:bg-emerald-950/30 border-emerald-100 dark:border-emerald-900/30',
    },
    {
      label: t('parent.childrenList.totalRemaining', 'إجمالي الحصص المتبقية'),
      value: totalRemaining,
      icon: BookOpen,
      color: 'text-[#0f7a6c] dark:text-emerald-400',
      bgColor: 'bg-[#0f7a6c]/10 border-[#0f7a6c]/20',
    },
    {
      label: t('parent.childrenList.activeGroups', 'المجموعات النشطة'),
      value: totalGroups,
      icon: Layers,
      color: 'text-amber-500',
      bgColor: 'bg-amber-50 dark:bg-amber-950/30 border-amber-100 dark:border-amber-900/30',
    },
  ];
  return (
    <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4">
      {stats.map((stat, idx) => {
        const IconComponent = stat.icon;
        return (
          <div
            key={idx}
            className={`p-4 rounded-2xl border ${stat.bgColor} flex items-center justify-between gap-3 shadow-xs`}
          >
            <div>
              <p className="text-xs font-semibold text-slate-500 dark:text-slate-400 mb-0.5">
                {stat.label}
              </p>
              <p className="text-2xl font-black text-slate-800 dark:text-white">
                {stat.value}
              </p>
            </div>
            <div className={`w-11 h-11 rounded-xl flex items-center justify-center shrink-0 ${stat.color} bg-white dark:bg-slate-900/60 shadow-xs`}>
              <IconComponent className="w-5 h-5" />
            </div>
          </div>
        );
      })}
    </div>
  );
}

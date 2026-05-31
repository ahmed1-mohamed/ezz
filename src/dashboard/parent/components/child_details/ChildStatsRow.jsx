import React from 'react';
import { useTranslation } from 'react-i18next';
import { BookOpen, TrendingUp, Award } from 'lucide-react';

export default function ChildStatsRow() {
  const { t } = useTranslation();
  const stats = [
    { label: t('parentDashboard.childrenDetails.totalClasses'), value: '24', icon: BookOpen, color: 'text-[#0f7a6c]' },
    { label: t('parentDashboard.childrenDetails.attendanceRate'), value: '96%', icon: TrendingUp, color: 'text-emerald-500' },
    { label: t('parentDashboard.childrenDetails.averageRating'), value: '92', icon: Award, color: 'text-amber-500' }
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
      {stats.map((stat, idx) => (
        <div key={idx} className="bg-white dark:bg-slate-800 rounded-2xl p-6 shadow-sm border border-slate-100 dark:border-slate-700 flex items-center justify-between">
          <div>
            <p className="text-xs text-slate-500 dark:text-slate-400 mb-1">{stat.label}</p>
            <p className={`text-2xl font-bold ${stat.color}`}>{stat.value}</p>
          </div>
          <stat.icon className={`w-8 h-8 ${stat.color} opacity-80`} />
        </div>
      ))}
    </div>
  );
}

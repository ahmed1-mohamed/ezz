import React from 'react';
import { useTranslation } from 'react-i18next';
import { Trophy, Star, Medal } from 'lucide-react';

export default function ChildBadges() {
  const { t } = useTranslation();
  const badges = [
    { id: 1, title: t('parent.mockData.badges.excellentInMemorization'), icon: Trophy, color: 'text-amber-600', bgColor: 'bg-amber-50 dark:bg-amber-900/20', borderColor: 'border-amber-100' },
    { id: 2, title: t('parent.mockData.badges.regularAttendance'), icon: Star, color: 'text-emerald-600', bgColor: 'bg-emerald-50 dark:bg-emerald-900/20', borderColor: 'border-emerald-100' },
    { id: 3, title: t('parent.mockData.badges.bestStudentOfMonth'), icon: Medal, color: 'text-rose-600', bgColor: 'bg-rose-50 dark:bg-rose-900/20', borderColor: 'border-rose-100' }
  ];

  return (
    <div className="bg-white dark:bg-slate-800 rounded-2xl p-6 shadow-sm border border-slate-100 dark:border-slate-700">
      <h3 className="font-bold text-slate-800 dark:text-slate-100 mb-6">{t('parentDashboard.childrenDetails.badgesTitle')}</h3>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {badges.map((badge) => (
          <div key={badge.id} className={`flex flex-col items-center justify-center p-4 rounded-xl border ${badge.bgColor} ${badge.borderColor} dark:border-slate-700`}>
            <badge.icon className={`w-8 h-8 ${badge.color} mb-2`} />
            <span className={`text-sm font-bold ${badge.color}`}>{badge.title}</span>
          </div>
        ))}
      </div>
    </div>
  );
}

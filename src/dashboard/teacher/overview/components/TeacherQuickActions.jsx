import React from 'react';
import { Link } from 'react-router-dom';
import { FilePlus, Star, Calendar, Award, MessageSquare, User, Sparkles } from 'lucide-react';
import { useTranslation } from 'react-i18next';

export default React.memo(function TeacherQuickActions() {
  const { t } = useTranslation();

  const actions = [
    {
      to: '/dashboard/teacher/assignments/create',
      label: t('teacherDashboard.createHomework', 'إنشاء واجب جديد'),
      icon: FilePlus,
      bg: 'bg-emerald-50 text-[#00594C] dark:bg-emerald-950/40 dark:text-emerald-400',
    },
    {
      to: '/dashboard/teacher/evaluations',
      label: t('teacherDashboard.evaluateStudents', 'تقييم الطلاب'),
      icon: Star,
      bg: 'bg-amber-50 text-amber-600 dark:bg-amber-950/40 dark:text-amber-400',
    },
    {
      to: '/dashboard/teacher/schedule',
      label: t('teacherDashboard.viewSchedule', 'جدول الحصص'),
      icon: Calendar,
      bg: 'bg-blue-50 text-blue-600 dark:bg-blue-950/40 dark:text-blue-400',
    },
    {
      to: '/dashboard/teacher/rewards',
      label: t('teacherDashboard.manageRewards', 'المكافآت'),
      icon: Award,
      bg: 'bg-purple-50 text-purple-600 dark:bg-purple-950/40 dark:text-purple-400',
    },
    {
      to: '/dashboard/teacher/complaints',
      label: t('teacherDashboard.fileComplaint', 'الشكاوى والمقترحات'),
      icon: MessageSquare,
      bg: 'bg-rose-50 text-rose-600 dark:bg-rose-950/40 dark:text-rose-400',
    },
    {
      to: '/dashboard/teacher/profile',
      label: t('teacherDashboard.editProfile', 'الملف الشخصي'),
      icon: User,
      bg: 'bg-slate-100 text-slate-700 dark:bg-slate-800 dark:text-slate-300',
    },
  ];

  return (
    <div className="bg-white dark:bg-slate-900 rounded-3xl p-6 shadow-xs border border-slate-100 dark:border-slate-800 space-y-4">
      <div className="flex items-center gap-2 text-start">
        <Sparkles size={18} className="text-[#00594C] dark:text-emerald-400" />
        <h2 className="text-base sm:text-lg font-bold text-slate-800 dark:text-slate-100">
          {t('teacherDashboard.quickActions', 'إجراءات سريعة')}
        </h2>
      </div>

      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3">
        {actions.map((act) => {
          const Icon = act.icon;
          return (
            <Link
              key={act.to}
              to={act.to}
              className="p-3.5 rounded-2xl border border-slate-100 dark:border-slate-800 hover:border-slate-200 dark:hover:border-slate-700 flex flex-col items-center text-center gap-2.5 transition-all hover:-translate-y-1 hover:shadow-xs group cursor-pointer"
            >
              <div className={`w-10 h-10 rounded-xl flex items-center justify-center shrink-0 ${act.bg} group-hover:scale-110 transition-transform`}>
                <Icon size={18} />
              </div>
              <span className="text-xs font-bold text-slate-700 dark:text-slate-200 line-clamp-1">
                {act.label}
              </span>
            </Link>
          );
        })}
      </div>
    </div>
  );
});

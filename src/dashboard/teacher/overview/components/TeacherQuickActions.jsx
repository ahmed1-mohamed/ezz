import React from 'react';
import { Link } from 'react-router-dom';
import { Play, BookOpen, Star, Users } from 'lucide-react';
import { useTranslation } from 'react-i18next';

export default React.memo(function TeacherQuickActions() {
  const { t } = useTranslation();

  return (
    <div className="bg-white dark:bg-slate-900 rounded-3xl p-5 sm:p-6 shadow-xs border border-slate-100 dark:border-slate-800 space-y-4">
      <h2 className="text-base font-bold text-slate-800 dark:text-slate-100 text-start">
        {t('teacherDashboard.quickActions', 'الإجراءات السريعة')}
      </h2>

      <div className="grid grid-cols-2 gap-3">
        {/* 1. ابدأ جلسة */}
        <Link
          to="/dashboard/teacher/live"
          className="flex flex-col items-center justify-center p-4 rounded-2xl bg-white dark:bg-slate-800/60 border border-slate-100 dark:border-slate-800 hover:shadow-md hover:border-[#00594C]/30 transition-all text-center gap-2 cursor-pointer group"
        >
          <div className="w-10 h-10 rounded-2xl bg-[#e8f7f3] text-[#00594C] dark:bg-emerald-950/40 dark:text-emerald-400 flex items-center justify-center group-hover:scale-105 transition-transform">
            <Play size={18} className="fill-[#00594C] dark:fill-emerald-400" />
          </div>
          <span className="text-xs font-bold text-slate-700 dark:text-slate-200">
            {t('teacherDashboard.startSession', 'ابدأ جلسة')}
          </span>
        </Link>

        {/* 2. واجب جديد */}
        <Link
          to="/dashboard/teacher/homework/create"
          className="flex flex-col items-center justify-center p-4 rounded-2xl bg-white dark:bg-slate-800/60 border border-slate-100 dark:border-slate-800 hover:shadow-md hover:border-[#0284c7]/30 transition-all text-center gap-2 cursor-pointer group"
        >
          <div className="w-10 h-10 rounded-2xl bg-[#f0f9ff] text-[#0284c7] dark:bg-blue-950/40 dark:text-blue-400 flex items-center justify-center group-hover:scale-105 transition-transform">
            <BookOpen size={18} />
          </div>
          <span className="text-xs font-bold text-slate-700 dark:text-slate-200">
            {t('teacherDashboard.newHomework', 'واجب جديد')}
          </span>
        </Link>

        {/* 3. تقييم طالب */}
        <Link
          to="/dashboard/teacher/evaluations"
          className="flex flex-col items-center justify-center p-4 rounded-2xl bg-white dark:bg-slate-800/60 border border-slate-100 dark:border-slate-800 hover:shadow-md hover:border-[#f59e0b]/30 transition-all text-center gap-2 cursor-pointer group"
        >
          <div className="w-10 h-10 rounded-2xl bg-[#fffbeb] text-[#f59e0b] dark:bg-amber-950/40 dark:text-amber-400 flex items-center justify-center group-hover:scale-105 transition-transform">
            <Star size={18} />
          </div>
          <span className="text-xs font-bold text-slate-700 dark:text-slate-200">
            {t('teacherDashboard.studentEvaluation', 'تقييم طالب')}
          </span>
        </Link>

        {/* 4. تسجيل حضور */}
        <Link
          to="/dashboard/teacher/schedule"
          className="flex flex-col items-center justify-center p-4 rounded-2xl bg-white dark:bg-slate-800/60 border border-slate-100 dark:border-slate-800 hover:shadow-md hover:border-[#8b5cf6]/30 transition-all text-center gap-2 cursor-pointer group"
        >
          <div className="w-10 h-10 rounded-2xl bg-[#f5f3ff] text-[#8b5cf6] dark:bg-purple-950/40 dark:text-purple-400 flex items-center justify-center group-hover:scale-105 transition-transform">
            <Users size={18} />
          </div>
          <span className="text-xs font-bold text-slate-700 dark:text-slate-200">
            {t('teacherDashboard.takeAttendance', 'تسجيل حضور')}
          </span>
        </Link>
      </div>
    </div>
  );
});

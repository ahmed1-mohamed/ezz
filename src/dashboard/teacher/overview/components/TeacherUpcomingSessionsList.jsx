import React from 'react';
import { Link } from 'react-router-dom';
import { Video, Clock, Users, ChevronLeft, ChevronRight, Play } from 'lucide-react';
import { useTranslation } from 'react-i18next';

export default React.memo(function TeacherUpcomingSessionsList({ upcomingSessions }) {
  const { t, i18n } = useTranslation();
  const isRtl = i18n?.language?.startsWith('ar') ?? true;
  const ChevronIcon = isRtl ? ChevronLeft : ChevronRight;

  return (
    <div className="space-y-3">
      {/* Header */}
      <div className="flex items-center justify-between">
        <h2 className="text-base sm:text-lg font-bold text-slate-800 dark:text-slate-100">
          {t('teacherDashboard.upcomingSessions', 'الجلسات القادمة')}
        </h2>

        <Link
          to="/dashboard/teacher/schedule"
          className="inline-flex items-center gap-1 text-xs sm:text-sm font-bold text-slate-500 hover:text-[#00594C] dark:hover:text-emerald-400 transition-colors"
        >
          <span>{t('teacherDashboard.viewAll', 'عرض الكل')}</span>
          <ChevronIcon size={16} />
        </Link>
      </div>

      {/* Stack of Upcoming Sessions */}
      {upcomingSessions && upcomingSessions.length > 0 ? (
        <div className="space-y-3">
          {upcomingSessions.slice(0, 4).map((session, idx) => (
            <div
              key={session.id || idx}
              className="bg-white dark:bg-slate-900 rounded-3xl p-4 sm:p-5 shadow-xs border border-slate-100 dark:border-slate-800 flex items-center justify-between gap-3 hover:shadow-md transition-shadow"
            >
              {/* Right cluster: Video Icon + Title */}
              <div className="flex items-center gap-3 min-w-0">
                <div className="w-11 h-11 rounded-2xl bg-[#e8f7f3] text-[#00594C] dark:bg-emerald-950/40 dark:text-emerald-400 flex items-center justify-center shrink-0">
                  <Video size={20} />
                </div>
                <div className="truncate text-start">
                  <h3 className="text-sm sm:text-base font-black text-slate-900 dark:text-white truncate">
                    {session.title}
                  </h3>
                </div>
              </div>

              {/* Middle details: Time & Students & Relative Pill */}
              <div className="hidden sm:flex items-center gap-3 md:gap-4 text-xs font-semibold text-slate-500 dark:text-slate-400 shrink-0">
                <div className="flex items-center gap-1.5 font-mono">
                  <Clock size={13} className="text-slate-400" />
                  <span>{session.timeStr}</span>
                </div>

                <span className="text-slate-300 dark:text-slate-700">·</span>

                <div className="flex items-center gap-1.5">
                  <Users size={13} className="text-slate-400" />
                  <span>{session.studentsCount || 0} {t('teacherDashboard.students', 'طلاب')}</span>
                </div>

                {session.relativeBadge && (
                  session.badgeVariant === 'blue' ? (
                    <span className="px-3 py-1 rounded-full text-xs font-bold bg-[#eff6ff] text-[#2563eb] dark:bg-blue-950/40 dark:text-blue-300">
                      {session.relativeBadge}
                    </span>
                  ) : (
                    <span className="px-3 py-1 rounded-full text-xs font-bold bg-[#fffbeb] text-[#d97706] dark:bg-amber-950/40 dark:text-amber-300">
                      {session.relativeBadge}
                    </span>
                  )
                )}
              </div>

              {/* Left Action Button: ابدأ > */}
              <Link
                to={session.joinUrl || '/dashboard/teacher/live'}
                className="px-4 py-2 rounded-xl bg-[#00594C] hover:bg-[#00473d] text-white text-xs sm:text-sm font-bold flex items-center gap-1.5 shadow-xs transition-colors shrink-0 cursor-pointer"
              >
                <span>{t('teacherDashboard.start', 'ابدأ')}</span>
                <Play size={12} className="fill-white" />
              </Link>
            </div>
          ))}
        </div>
      ) : (
        <div className="bg-white dark:bg-slate-900 rounded-3xl p-8 text-center text-slate-400 text-xs font-semibold border border-slate-100 dark:border-slate-800">
          {t('teacherDashboard.noUpcomingSessions', 'لا توجد جلسات قادمة مجدولة')}
        </div>
      )}
    </div>
  );
});

import React from 'react';
import { Link } from 'react-router-dom';
import { Video, Clock, Users, ChevronLeft, ChevronRight } from 'lucide-react';
import { useTranslation } from 'react-i18next';

export default React.memo(function TeacherUpcomingSessionsList({ upcomingSessions }) {
  const { t, i18n } = useTranslation();
  const isRtl = i18n?.language?.startsWith('ar') ?? true;
  const ChevronIcon = isRtl ? ChevronLeft : ChevronRight;

  return (
    <div className="bg-white dark:bg-slate-900 rounded-3xl p-6 shadow-xs border border-slate-100 dark:border-slate-800 space-y-4 h-full flex flex-col justify-between">
      <div className="space-y-4">
        <div className="flex items-center justify-between">
          <h2 className="text-base sm:text-lg font-bold text-slate-800 dark:text-slate-100">
            {t('teacherDashboard.upcomingSessions', 'الحصص القادمة')}
          </h2>

          <Link
            to="/dashboard/teacher/sessions"
            className="text-xs font-bold text-[#00594C] dark:text-emerald-400 hover:underline flex items-center gap-1 cursor-pointer"
          >
            <span>{t('teacherDashboard.viewAllSessions', 'عرض كل الحصص')}</span>
            <ChevronIcon size={14} />
          </Link>
        </div>

        {upcomingSessions && upcomingSessions.length > 0 ? (
          <div className="space-y-3">
            {upcomingSessions.slice(0, 4).map((session, idx) => (
              <div
                key={session.id || idx}
                className="p-3.5 rounded-2xl bg-slate-50/70 dark:bg-slate-800/50 border border-slate-100 dark:border-slate-800 flex items-center justify-between gap-3 text-start hover:border-slate-200 transition-colors"
              >
                <div className="flex items-center gap-3 min-w-0">
                  <div className="w-9 h-9 rounded-xl bg-emerald-50 text-[#00594C] dark:bg-emerald-950/40 dark:text-emerald-400 flex items-center justify-center shrink-0">
                    <Video size={16} />
                  </div>
                  <div className="min-w-0">
                    <h4 className="text-xs sm:text-sm font-bold text-slate-800 dark:text-white truncate">
                      {session.title}
                    </h4>
                    {session.timeStr && (
                      <p className="text-[11px] text-slate-400 font-semibold flex items-center gap-1 mt-0.5" dir="ltr">
                        <Clock size={12} />
                        <span>{session.timeStr}</span>
                      </p>
                    )}
                  </div>
                </div>

                <div className="flex items-center gap-2 shrink-0">
                  <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full text-[11px] font-bold bg-[#e8f7f3] text-[#00594C] dark:bg-emerald-950/60 dark:text-emerald-300">
                    <Users size={12} />
                    <span>{session.studentsCount || 0}</span>
                  </span>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="py-8 text-center text-slate-400 text-xs font-semibold">
            {t('teacherDashboard.noUpcomingSessions', 'لا توجد حصص قادمة مجدولة')}
          </div>
        )}
      </div>

      <Link
        to="/dashboard/teacher/schedule"
        className="w-full py-2.5 px-4 rounded-2xl border border-slate-200 dark:border-slate-700 hover:bg-slate-50 dark:hover:bg-slate-800 text-slate-700 dark:text-slate-300 text-xs font-bold text-center transition-all cursor-pointer block"
      >
        {t('teacherDashboard.viewSchedule', 'جدول الحصص الأسبوعي')}
      </Link>
    </div>
  );
});

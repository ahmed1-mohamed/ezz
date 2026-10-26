import React from 'react';
import { Clock, Users, Video, ExternalLink, BookOpen } from 'lucide-react';
import { useTranslation } from 'react-i18next';

export default React.memo(function TeacherScheduleSessionCard({ session, index }) {
  const { t } = useTranslation();

  const isLive = session.status === 'live' || session.status === 'in_progress';
  const isCompleted = session.status === 'completed';

  const zoomUrl = session.zoomJoinUrl || session.joinUrl || session.meetingUrl;

  return (
    <div
      className={`rounded-3xl p-5 sm:p-6 border transition-all flex flex-col justify-between ${
        isLive
          ? 'bg-gradient-to-br from-red-50/70 to-white dark:from-red-950/20 dark:to-slate-900 border-red-200 dark:border-red-900/40 shadow-sm ring-1 ring-red-500/20'
          : 'bg-white dark:bg-slate-900 border-slate-100 dark:border-slate-800 shadow-xs hover:shadow-md'
      }`}
    >
      <div className="space-y-3.5 text-start">
        <div className="flex items-center justify-between gap-2">
          <span className="text-xs font-bold text-slate-400">
            {t('schedule.sessionNo', 'الحصة رقم')} {index + 1}
          </span>

          {isLive ? (
            <span className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full text-[11px] font-black bg-red-500 text-white animate-pulse">
              <span className="w-1.5 h-1.5 rounded-full bg-white" />
              {t('teacherSchedule.filterLive', 'مباشرة الآن')}
            </span>
          ) : isCompleted ? (
            <span className="px-2.5 py-0.5 rounded-full text-[11px] font-bold bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-400">
              {t('teacherSchedule.filterCompleted', 'مكتملة')}
            </span>
          ) : (
            <span className="px-2.5 py-0.5 rounded-full text-[11px] font-bold bg-emerald-50 dark:bg-emerald-950/50 text-[#00594C] dark:text-emerald-400">
              {t('teacherSchedule.filterScheduled', 'مجدولة')}
            </span>
          )}
        </div>

        <div>
          <div className="flex items-center gap-1.5 text-xs font-bold text-[#00594C] dark:text-emerald-400 mb-1">
            <BookOpen size={14} />
            <span className="truncate">{session.groupName}</span>
          </div>
          <h3 className="text-base sm:text-lg font-black text-slate-900 dark:text-white leading-snug">
            {session.title}
          </h3>
        </div>

        <div className="pt-2 border-t border-slate-100 dark:border-slate-800/80 space-y-1.5 text-xs text-slate-500 dark:text-slate-400 font-semibold">
          {session.timeRange && (
            <div className="flex items-center gap-2" dir="ltr">
              <Clock size={14} className="text-slate-400" />
              <span>{session.timeRange}</span>
            </div>
          )}
          {session.studentsCount > 0 && (
            <div className="flex items-center gap-2">
              <Users size={14} className="text-slate-400" />
              <span>{session.studentsCount} {t('teacherSchedule.students', 'طلاب')}</span>
            </div>
          )}
        </div>
      </div>

      <div className="mt-5 pt-3 border-t border-slate-100 dark:border-slate-800/80">
        {zoomUrl ? (
          <a
            href={zoomUrl}
            target="_blank"
            rel="noopener noreferrer"
            className={`w-full py-2.5 px-4 rounded-2xl text-xs font-bold flex items-center justify-center gap-2 transition-all cursor-pointer ${
              isLive
                ? 'bg-red-600 hover:bg-red-700 text-white shadow-xs'
                : 'bg-[#00594C] hover:bg-[#00483d] text-white shadow-xs'
            }`}
          >
            <Video size={14} />
            <span>{t('teacherSchedule.joinLive', 'انضمام للحصة')}</span>
            <ExternalLink size={12} className="opacity-80" />
          </a>
        ) : (
          <div className="w-full py-2 px-3 rounded-2xl bg-slate-100 dark:bg-slate-800/60 text-slate-400 text-xs font-semibold text-center">
            {isCompleted ? t('teacherSchedule.filterCompleted', 'مكتملة') : t('schedule.linkPending', 'رابط الجلسة سيتاح قبل الموعد')}
          </div>
        )}
      </div>
    </div>
  );
});

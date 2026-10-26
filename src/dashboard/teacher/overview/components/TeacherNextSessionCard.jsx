import { memo } from 'react';
import { Clock, Users, Play } from 'lucide-react';
import { useTranslation } from 'react-i18next';

export default memo(function TeacherNextSessionCard({ nextSession }) {
  const { t } = useTranslation();

  return (
    <div className="bg-gradient-to-br from-[#00594C] to-[#004037] text-white rounded-3xl p-6 sm:p-7 shadow-sm flex flex-col justify-between relative overflow-hidden h-full">
      <div className="space-y-4">
        <div className="flex items-center justify-between">
          <span className="px-3 py-1 rounded-full text-xs font-bold bg-white/15 backdrop-blur-xs text-white">
            {t('teacherDashboard.nextSession', 'الحصة القادمة')}
          </span>
          <span className="w-2.5 h-2.5 rounded-full bg-emerald-400 animate-ping" />
        </div>

        {nextSession ? (
          <div className="space-y-2 text-start">
            <h3 className="text-xl sm:text-2xl font-black text-white leading-tight">
              {nextSession.title}
            </h3>
            <p className="text-sm font-semibold text-emerald-100 flex items-center gap-2">
              <Users size={16} />
              <span>{nextSession.groupName}</span>
            </p>
            {nextSession.timeStr && (
              <p className="text-xs font-mono text-emerald-200 flex items-center gap-2" dir="ltr">
                <Clock size={14} />
                <span>{nextSession.timeStr}</span>
              </p>
            )}
          </div>
        ) : (
          <div className="py-6 text-center text-emerald-100 text-sm font-semibold">
            {t('teacherDashboard.noNextSession', 'لا توجد جلسات قادمة مجدولة حالياً')}
          </div>
        )}
      </div>

      {nextSession && (nextSession.zoomJoinUrl || nextSession.joinUrl || nextSession.meetingUrl) ? (
        <a
          href={nextSession.zoomJoinUrl || nextSession.joinUrl || nextSession.meetingUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-6 w-full py-3 px-4 rounded-2xl bg-white hover:bg-emerald-50 text-[#00594C] font-black text-xs sm:text-sm shadow-md hover:shadow-lg transition-all flex items-center justify-center gap-2 cursor-pointer"
        >
          <Play size={16} className="fill-[#00594C]" />
          <span>{t('teacherDashboard.joinSession', 'الانضمام للحصة')}</span>
        </a>
      ) : (
        <div className="mt-6 py-2.5 px-4 rounded-2xl bg-white/10 text-emerald-100 text-xs font-semibold text-center">
          {t('schedule.linkPending', 'رابط الجلسة سيتاح قبل الموعد')}
        </div>
      )}
    </div>
  );
});

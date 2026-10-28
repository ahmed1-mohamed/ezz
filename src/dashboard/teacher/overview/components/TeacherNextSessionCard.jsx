import { memo } from 'react';
import { Play } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

export default memo(function TeacherNextSessionCard({ nextSession }) {
  const { t } = useTranslation();

  if (!nextSession || !nextSession.title) {
    return (
      <div className="bg-[#00594C] text-white rounded-3xl p-6 shadow-md flex flex-col justify-between space-y-4">
        <div className="text-start space-y-1">
          <h3 className="font-black text-base text-white">
            {t('teacherDashboard.nextSession', 'الجلسة التالية')}
          </h3>
          <p className="text-xs text-emerald-100 font-semibold">
            {t('teacherDashboard.noNextSession', 'لا توجد جلسات قادمة مجدولة حالياً')}
          </p>
        </div>
      </div>
    );
  }

  const title = nextSession.title;
  const group = nextSession.group ? String(nextSession.group) : '';
  const countdown = nextSession.countdown || '0:00';
  const countdownUnit = nextSession.countdownUnit || '';

  return (
    <div className="bg-[#00594C] text-white rounded-3xl p-6 shadow-md flex flex-col justify-between space-y-4">
      {/* Top: Header & Subtitle */}
      <div className="text-start space-y-1">
        <h3 className="font-black text-base text-white">
          {t('teacherDashboard.nextSession', 'الجلسة التالية')}
        </h3>
        <p className="text-xs text-emerald-100 font-semibold truncate" title={title}>
          {title}
        </p>
        {group && (
          <p className="text-[11px] text-emerald-200/90 font-medium truncate" title={group}>
            {group}
          </p>
        )}
      </div>

      {/* Bottom: Action Button & Countdown */}
      <div className="flex items-end justify-between pt-2">
        {/* Button: دخول الجلسة > */}
        <Link
          to={nextSession.zoomJoinUrl || nextSession.joinUrl || (nextSession.id ? `/dashboard/teacher/live?session=${nextSession.id}` : '/dashboard/teacher/live')}
          className="px-5 py-2.5 bg-white text-[#00594C] hover:bg-emerald-50 rounded-2xl font-black text-xs sm:text-sm flex items-center gap-2 shadow-xs transition-all cursor-pointer"
        >
          <span>{t('teacherDashboard.enterSession', 'دخول الجلسة')}</span>
          <Play size={13} className="fill-[#00594C]" />
        </Link>

        {/* Countdown */}
        <div className="text-end">
          <span className="text-[11px] text-emerald-200 block font-medium">
            {t('teacherDashboard.startsIn', 'تبدأ بعد')}
          </span>
          <div className="flex items-baseline gap-1 justify-end font-mono">
            <span className="text-2xl sm:text-3xl font-black text-white">
              {countdown}
            </span>
            {countdownUnit && (
              <span className="text-xs text-emerald-200 font-bold font-sans">
                {countdownUnit}
              </span>
            )}
          </div>
        </div>
      </div>
    </div>
  );
});

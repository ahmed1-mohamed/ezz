import React from 'react';
import {
  X,
  Users,
  User,
} from 'lucide-react';
import { useTranslation } from 'react-i18next';
import { useAuth } from '@/shared/context/useAuth.jsx';
import ZoomMeetingPlayer from '@/shared/components/ZoomMeetingPlayer.jsx';

function ElapsedSessionTimer() {
  const [seconds, setSeconds] = React.useState(0);
  React.useEffect(() => {
    const interval = setInterval(() => {
      setSeconds((prev) => prev + 1);
    }, 1000);
    return () => clearInterval(interval);
  }, []);
  const hours = Math.floor(seconds / 3600);
  const minutes = Math.floor((seconds % 3600) / 60);
  const secs = seconds % 60;
  const formatted = hours > 0
    ? `${String(hours).padStart(2, '0')}:${String(minutes).padStart(2, '0')}:${String(secs).padStart(2, '0')}`
    : `${String(minutes).padStart(2, '0')}:${String(seconds).padStart(2, '0')}`;
  return (
    <span className="font-mono text-xs sm:text-sm font-black text-emerald-600 dark:text-emerald-400">
      {formatted}
    </span>
  );
}

function resolveName(nameField, isRtl) {
  if (typeof nameField === 'object' && nameField !== null) {
    return (isRtl ? nameField.ar || nameField.en : nameField.en || nameField.ar) || '';
  }
  return String(nameField || '');
}

export default React.memo(function StudentDuringSessionView({
  session,
  joinData,
  onLeaveSession,
  onRefreshJoinData,
  isRefreshing = false,
}) {
  const { t, i18n } = useTranslation();
  const { user } = useAuth();
  const isRtl = i18n?.language?.startsWith('ar') ?? true;
  const groupName = resolveName(session?.group, isRtl) || session?.groupName || '-';
  const teacherName = resolveName(session?.teacher, isRtl) || session?.teacherName || '-';
  const sessionTitle = resolveName(session?.title, isRtl) || session?.className || t('studentDashboard.live.nextSessionTitle', 'الحصة المباشرة');
  const studentName = (() => {
    if (!user) return 'الطالب';
    const isSpecialRole = user.role === 'Admin' || user.role === 'super_admin' || user.role === 'Manager';
    const rawName = (typeof user.name === 'object' && user.name !== null)
      ? (isRtl ? user.name.ar || user.name.en : user.name.en || user.name.ar)
      : (user.name || user.fullName);
    if (isSpecialRole) {
      const roleLabel = isRtl ? '(إدارة)' : '(Admin)';
      return `${rawName || 'Admin'} ${roleLabel}`;
    }
    return rawName || 'الطالب';
  })();
  const studentEmail = user?.email || '';
  return (
    <div className="h-full flex-1 min-h-0 flex flex-col space-y-3 max-w-6xl w-full mx-auto overflow-hidden" dir={isRtl ? 'rtl' : 'ltr'}>
      <header className="bg-white dark:bg-slate-900 rounded-2xl sm:rounded-3xl px-4 py-2.5 sm:px-5 sm:py-3 shadow-xs border border-slate-100 dark:border-slate-800 flex flex-col md:flex-row md:items-center justify-between gap-3 shrink-0">
        <div className="text-start space-y-1">
          <div className="flex items-center gap-2 text-xs font-bold text-[#00594C] dark:text-emerald-400">
            <Users size={14} className="shrink-0" />
            <span className="truncate">{groupName}</span>
          </div>
          <h1 className="text-lg sm:text-xl font-black text-slate-800 dark:text-white leading-tight truncate">
            {sessionTitle}
          </h1>
          <div className="flex items-center gap-1.5 text-xs font-semibold text-slate-500 dark:text-slate-400">
            <User size={13} className="shrink-0 text-slate-400" />
            <span className="truncate">{teacherName}</span>
          </div>
        </div>
        <div className="flex items-center gap-3 self-end md:self-center flex-wrap">
          <div className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-slate-50 dark:bg-slate-800 border border-slate-100 dark:border-slate-700">
            <span className="w-2 h-2 rounded-full bg-emerald-500 animate-ping" />
            <ElapsedSessionTimer />
          </div>
          <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-black bg-rose-50 text-rose-600 dark:bg-rose-950/40 dark:text-rose-400 border border-rose-200/60 dark:border-rose-900/40">
            <span className="w-2 h-2 rounded-full bg-rose-500 animate-pulse" />
            <span>{t('studentDashboard.live.liveNow', 'مباشر الآن')}</span>
          </span>
          <button
            type="button"
            onClick={onLeaveSession}
            className="flex items-center gap-1.5 px-4 py-1.5 bg-rose-50 hover:bg-rose-100 dark:bg-rose-950/40 dark:hover:bg-rose-900/50 text-rose-600 dark:text-rose-400 border border-rose-200 dark:border-rose-800 rounded-full text-xs font-black transition-colors cursor-pointer"
          >
            <X size={14} />
            <span>{t('studentDashboard.live.leaveSession', 'مغادرة')}</span>
          </button>
        </div>
      </header>
      <ZoomMeetingPlayer
        meetingId={joinData?.meetingId || joinData?.meetingNumber || session?.meetingId || session?.meetingNumber}
        passcode={joinData?.passcode || joinData?.password || session?.passcode || session?.password}
        role={joinData?.role !== undefined ? joinData.role : 0}
        sdkSignature={joinData?.sdkSignature || session?.sdkSignature || joinData?.signature || session?.signature}
        startUrl=""
        joinUrl={joinData?.joinUrl || session?.joinUrl || session?.zoomJoinUrl || session?.zoom_join_url}
        zakToken={joinData?.zak || joinData?.zakToken || joinData?.zak_token}
        leaveUrl="/dashboard/student/schedule"
        userName={studentName}
        userEmail={joinData?.userEmail || studentEmail || user?.email || import.meta.env?.VITE_ZOOM_EMAIL || import.meta.env?.NEXT_PUBLIC_ZOOM_EMAIL || 'manartalezzacademy1@gmail.com'}
        sessionTitle={sessionTitle}
        className="w-full flex-1 min-h-0 h-full overflow-hidden"
        onRefreshJoinData={onRefreshJoinData}
        isRefreshing={isRefreshing}
      />
    </div>
  );
});

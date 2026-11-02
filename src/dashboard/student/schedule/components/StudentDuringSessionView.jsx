import React, { useState, useEffect } from 'react';
import {
  Maximize2,
  Mic,
  MicOff,
  Hand,
  X,
  Video,
  Copy,
  ExternalLink,
  Users,
  User,
  BookOpen,
} from 'lucide-react';
import { useTranslation } from 'react-i18next';
import { showSuccessToast } from '@/shared/utils/sweetAlert';

function ElapsedSessionTimer() {
  const [seconds, setSeconds] = useState(0);
  useEffect(() => {
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
    : `${String(minutes).padStart(2, '0')}:${String(secs).padStart(2, '0')}`;
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
}) {
  const { t, i18n } = useTranslation();
  const isRtl = i18n?.language?.startsWith('ar') ?? true;
  const [isMicOn, setIsMicOn] = useState(true);
  const [isHandRaised, setIsHandRaised] = useState(false);
  const groupName = resolveName(session?.group, isRtl) || session?.groupName || '-';
  const teacherName = resolveName(session?.teacher, isRtl) || session?.teacherName || '-';
  const sessionTitle = resolveName(session?.title, isRtl) || session?.className || t('studentDashboard.live.nextSessionTitle', 'الحصة المباشرة');
  const meetingUrl = joinData?.joinUrl || joinData?.url || joinData?.startUrl || session?.liveUrl || null;
  const meetingNumber = joinData?.meetingNumber || joinData?.meetingId || session?.meetingId || null;
  const meetingPassword = joinData?.password || joinData?.passcode || session?.passcode || null;
  function handleCopyDetails() {
    const lines = [];
    if (meetingNumber) lines.push(`Meeting ID: ${meetingNumber}`);
    if (meetingPassword) lines.push(`Passcode: ${meetingPassword}`);
    if (meetingUrl) lines.push(`Link: ${meetingUrl}`);
    if (lines.length > 0) {
      navigator.clipboard.writeText(lines.join('\n'));
      showSuccessToast(t('studentDashboard.live.copied', 'تم النسخ بنجاح'));
    }
  }
  function handleLaunchExternal() {
    if (meetingUrl) {
      window.open(meetingUrl, '_blank', 'noopener,noreferrer');
    }
  }
  return (
    <div className="space-y-4 max-w-6xl mx-auto" dir={isRtl ? 'rtl' : 'ltr'}>
      <header className="bg-white dark:bg-slate-900 rounded-[28px] px-5 py-4 shadow-xs border border-slate-100 dark:border-slate-800 flex flex-col md:flex-row md:items-center justify-between gap-4">
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
      <div className="relative bg-[#0d1f2d] rounded-[28px] overflow-hidden shadow-md border border-slate-800 aspect-video flex flex-col justify-between">
        <div className="p-4 flex items-center justify-between z-10">
          <button
            type="button"
            onClick={() => {
              if (document.fullscreenElement) {
                document.exitFullscreen();
              } else {
                document.documentElement.requestFullscreen?.();
              }
            }}
            className="w-9 h-9 bg-black/40 hover:bg-black/60 rounded-xl flex items-center justify-center text-white transition-colors cursor-pointer"
            title="Fullscreen"
          >
            <Maximize2 size={16} />
          </button>
          {meetingUrl && (
            <button
              type="button"
              onClick={handleLaunchExternal}
              className="flex items-center gap-1.5 px-3.5 py-1.5 bg-blue-600 hover:bg-blue-700 text-white rounded-xl text-xs font-bold transition-colors cursor-pointer shadow-xs"
            >
              <ExternalLink size={13} />
              <span>{t('studentDashboard.live.openInZoomApp', 'فتح في تطبيق Zoom')}</span>
            </button>
          )}
        </div>
        {meetingUrl ? (
          <iframe
            src={meetingUrl}
            title="Live Meeting Stream"
            className="w-full h-full border-0 absolute inset-0 z-0"
            allow="camera; microphone; fullscreen; display-capture; autoplay"
            allowFullScreen
          />
        ) : (
          <div className="flex flex-col items-center justify-center p-6 text-center space-y-3 my-auto z-10">
            <div className="w-16 h-16 bg-[#00594C] rounded-3xl flex items-center justify-center text-white shadow-lg mx-auto">
              <Video size={30} />
            </div>
            <div className="space-y-1">
              <p className="text-white font-black text-lg sm:text-xl">{sessionTitle}</p>
              <p className="text-slate-400 text-xs sm:text-sm font-semibold">
                {teacherName} • {groupName}
              </p>
            </div>
            {(meetingNumber || meetingPassword) && (
              <div className="bg-white/10 backdrop-blur-md rounded-2xl p-3.5 border border-white/10 flex items-center gap-4 text-xs text-white font-mono mt-3">
                {meetingNumber && (
                  <span>
                    ID: <strong className="text-emerald-300">{meetingNumber}</strong>
                  </span>
                )}
                {meetingPassword && (
                  <span>
                    Pass: <strong className="text-amber-300">{meetingPassword}</strong>
                  </span>
                )}
                <button
                  type="button"
                  onClick={handleCopyDetails}
                  className="p-1.5 bg-white/10 hover:bg-white/20 rounded-lg text-white transition-colors cursor-pointer"
                  title={t('studentDashboard.live.copyMeetingDetails', 'نسخ بيانات الاجتماع')}
                >
                  <Copy size={13} />
                </button>
              </div>
            )}
          </div>
        )}
        <div className="p-4 bg-gradient-to-t from-black/80 via-black/40 to-transparent flex items-center justify-between z-10">
          <button
            type="button"
            onClick={onLeaveSession}
            className="w-10 h-10 rounded-2xl bg-rose-600 hover:bg-rose-700 text-white flex items-center justify-center transition-all shadow-md cursor-pointer"
            title={t('studentDashboard.live.leaveSession', 'مغادرة الحصة')}
          >
            <X size={18} />
          </button>
          <div className="flex items-center gap-2.5">
            <button
              type="button"
              onClick={() => setIsHandRaised((prev) => !prev)}
              className={`w-10 h-10 rounded-2xl flex items-center justify-center transition-all shadow-md cursor-pointer ${
                isHandRaised
                  ? 'bg-amber-400 hover:bg-amber-500 text-slate-900 font-bold'
                  : 'bg-white/20 hover:bg-white/30 text-white'
              }`}
              title="Raise Hand"
            >
              <Hand size={18} />
            </button>
            <button
              type="button"
              onClick={() => setIsMicOn((prev) => !prev)}
              className={`w-10 h-10 rounded-2xl flex items-center justify-center transition-all shadow-md cursor-pointer ${
                isMicOn
                  ? 'bg-white/20 hover:bg-white/30 text-white'
                  : 'bg-rose-600 hover:bg-rose-700 text-white'
              }`}
              title="Microphone"
            >
              {isMicOn ? <Mic size={18} /> : <MicOff size={18} />}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
});


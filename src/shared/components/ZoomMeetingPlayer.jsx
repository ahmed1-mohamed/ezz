import { useState, useEffect, useRef } from 'react';
import {
  Video,
  Maximize2,
  Minimize2,
  Copy,
  RotateCcw,
  ShieldCheck,
  UserCheck,
} from 'lucide-react';
import { useTranslation } from 'react-i18next';
import { showSuccessToast } from '@/shared/utils/sweetAlert.js';

export default function ZoomMeetingPlayer({
  meetingId,
  passcode,
  role = 0,
  startUrl,
  joinUrl,
  userName = '',
  sessionTitle = '',
  className = '',
}) {
  const { t, i18n } = useTranslation();
  const isRtl = i18n?.language?.startsWith('ar') ?? true;
  const containerRef = useRef(null);
  const [isFullscreen, setIsFullscreen] = useState(false);
  const [iframeKey, setIframeKey] = useState(1);
  const [mountedAt] = useState(() => Date.now());
  const cleanMeetingId = String(meetingId || '').replace(/\s/g, '');
  const cleanPasscode = String(passcode || '');
  const isHost = Number(role) === 1;

  // Teacher: the backend start link (startUrl). Student: Zoom web client built from joinUrl.
  const startZakExp = (() => {
    try {
      const zak = new URL(startUrl).searchParams.get('zak') || '';
      const payload = JSON.parse(atob(zak.split('.')[1].replace(/-/g, '+').replace(/_/g, '/')));
      return Number(payload.exp) || null;
    } catch {
      return null;
    }
  })();
  const isStartLinkExpired = isHost && startZakExp !== null && startZakExp * 1000 < mountedAt;

  const studentWebClientUrl = (() => {
    if (!cleanMeetingId) return joinUrl || '';
    let pwd;
    try {
      pwd = new URL(joinUrl).searchParams.get('pwd') || '';
    } catch {
      pwd = '';
    }
    const q = new URLSearchParams();
    if (pwd) q.set('pwd', pwd);
    else if (cleanPasscode) q.set('pwd', cleanPasscode);
    q.set('prefer', '1');
    if (userName) {
      try {
        q.set('un', btoa(unescape(encodeURIComponent(userName))));
      } catch {
        // name prefill is optional
      }
    }
    return `https://app.zoom.us/wc/${cleanMeetingId}/join?${q.toString()}`;
  })();

  const embedUrl = isHost ? (startUrl || '') : studentWebClientUrl;
  const handleCopyMeetingInfo = () => {
    const lines = [];
    if (cleanMeetingId) lines.push(`Meeting ID: ${cleanMeetingId}`);
    if (cleanPasscode) lines.push(`Passcode: ${cleanPasscode}`);
    if (isHost && startUrl) lines.push(`Host Start URL: ${startUrl}`);
    if (joinUrl) lines.push(`Student Join URL: ${joinUrl}`);
    if (lines.length > 0) {
      navigator.clipboard.writeText(lines.join('\n'));
      showSuccessToast(t('teacherLive.copiedMeetingDetails', 'تم نسخ بيانات الاجتماع بنجاح'), isRtl);
    }
  };
  const handleToggleFullscreen = () => {
    if (!containerRef.current) return;
    if (!document.fullscreenElement) {
      containerRef.current.requestFullscreen?.().then(() => setIsFullscreen(true)).catch(() => {});
    } else {
      document.exitFullscreen?.().then(() => setIsFullscreen(false)).catch(() => {});
    }
  };
  const handleReloadStream = () => {
    setIframeKey((prev) => prev + 1);
  };
  useEffect(() => {
    const handleFullscreenChange = () => {
      setIsFullscreen(Boolean(document.fullscreenElement));
    };
    document.addEventListener('fullscreenchange', handleFullscreenChange);
    return () => {
      document.removeEventListener('fullscreenchange', handleFullscreenChange);
    };
  }, []);
  return (
    <div
      ref={containerRef}
      className={`bg-[#080d14] rounded-3xl overflow-hidden border border-slate-800 shadow-2xl flex flex-col text-white ${className}`}
      dir={isRtl ? 'rtl' : 'ltr'}
    >
      {/* Top Header Controls Bar */}
      <div className="bg-[#0b131e] px-4 sm:px-6 py-3 border-b border-slate-800 flex flex-wrap items-center justify-between gap-3 shrink-0">
        <div className="flex items-center gap-3 min-w-0">
          <div className="w-9 h-9 rounded-xl bg-blue-500/20 text-blue-400 flex items-center justify-center shrink-0">
            <Video className="w-5 h-5" />
          </div>
          <div className="min-w-0">
            <div className="flex items-center gap-2">
              <span className="font-black text-sm text-white truncate">
                {sessionTitle || t('teacherLive.liveSessionTitle', 'الحصة المباشرة')}
              </span>
              <span
                className={`inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full text-[11px] font-bold ${
                  isHost
                    ? 'bg-emerald-500/20 text-emerald-300 border border-emerald-500/30'
                    : 'bg-blue-500/20 text-blue-300 border border-blue-500/30'
                }`}
              >
                {isHost ? (
                  <>
                    <ShieldCheck className="w-3 h-3" />
                    <span>{t('teacherLive.hostTeacherBadge', 'مضيف الجلسة (معلّم)')}</span>
                  </>
                ) : (
                  <>
                    <UserCheck className="w-3 h-3" />
                    <span>{t('studentDashboard.live.participantBadge', 'مشارك (طالب)')}</span>
                  </>
                )}
              </span>
            </div>
            <div className="flex items-center gap-3 text-xs text-slate-400 font-mono mt-0.5">
              {cleanMeetingId && (
                <span>
                  ID: <strong className="text-slate-200">{cleanMeetingId}</strong>
                </span>
              )}
              {cleanPasscode && (
                <span>
                  Pass: <strong className="text-emerald-400">{cleanPasscode}</strong>
                </span>
              )}
            </div>
          </div>
        </div>
        {/* Action Buttons */}
        <div className="flex items-center gap-2 flex-wrap">
          <button
            type="button"
            onClick={handleCopyMeetingInfo}
            className="px-3 py-1.5 rounded-xl bg-white/5 hover:bg-white/10 text-slate-300 hover:text-white text-xs font-bold transition-colors flex items-center gap-1.5 cursor-pointer"
            title={t('teacherLive.copyDetails', 'نسخ البيانات')}
          >
            <Copy className="w-3.5 h-3.5" />
            <span className="hidden sm:inline">{t('teacherLive.copyDetails', 'نسخ البيانات')}</span>
          </button>
          <button
            type="button"
            onClick={handleReloadStream}
            className="p-2 rounded-xl bg-white/5 hover:bg-white/10 text-slate-300 hover:text-white transition-colors cursor-pointer"
            title="إعادة تحميل البث"
          >
            <RotateCcw className="w-3.5 h-3.5" />
          </button>
          <button
            type="button"
            onClick={handleToggleFullscreen}
            className="p-2 rounded-xl bg-white/5 hover:bg-white/10 text-slate-300 hover:text-white transition-colors cursor-pointer"
            title={isFullscreen ? 'تصغير' : 'ملء الشاشة'}
          >
            {isFullscreen ? <Minimize2 className="w-3.5 h-3.5" /> : <Maximize2 className="w-3.5 h-3.5" />}
          </button>
        </div>
      </div>
      {/* Main Viewport Container */}
      <div className="relative w-full flex-1 min-h-[560px] bg-[#020508] overflow-hidden flex flex-col justify-center items-center">
        {isStartLinkExpired || !embedUrl ? (
          <div className="max-w-md mx-6 text-center flex flex-col items-center gap-3 p-6 rounded-3xl bg-[#0f172a] border border-white/10">
            <div className="w-12 h-12 rounded-2xl bg-amber-500/15 text-amber-300 flex items-center justify-center">
              <Video className="w-6 h-6" />
            </div>
            <div className="font-black text-base">
              {!embedUrl
                ? t('teacherLive.noMeetingLink', 'لا يوجد رابط للحصة')
                : t('teacherLive.startLinkExpired', 'انتهت صلاحية رابط بدء الحصة')}
            </div>
            <p className="text-sm text-slate-400 leading-relaxed">
              {!embedUrl
                ? t('teacherLive.noMeetingLinkHint', 'لم يُرسل الخادم رابط الحصة. حاول تحديث الصفحة.')
                : t('teacherLive.startLinkExpiredHint', 'رابط Zoom لبدء الحصة كمعلّم صالح لمدة ساعتين فقط. يجب أن يُرجع الخادم رابطاً جديداً (startUrl) عند فتح الحصة.')}
            </p>
            <button
              type="button"
              onClick={() => window.location.reload()}
              className="px-4 py-2 rounded-xl bg-blue-600 hover:bg-blue-700 text-white text-xs font-bold cursor-pointer"
            >
              {t('teacherLive.retry', 'إعادة المحاولة')}
            </button>
          </div>
        ) : (
          <iframe
            key={iframeKey}
            src={embedUrl}
            title="Zoom Live Meeting Stream"
            className="w-full h-full min-h-[560px] border-0 relative z-10 flex-1"
            allow="camera; microphone; fullscreen; display-capture; autoplay; clipboard-write; speaker-selection"
          />
        )}
      </div>
      {/* Bottom Info Footer */}
      <div className="bg-[#0b131e] px-4 sm:px-6 py-2.5 border-t border-slate-800 text-[11px] text-slate-400 flex flex-wrap items-center justify-between gap-2 shrink-0">
        <div className="flex items-center gap-2">
          <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
          <span>
            {isHost
              ? t('teacherLive.hostLiveHint', 'أنت متصل الآن كمعلّم رئيسي (Host). يمكنك الشرح ومشاركة الشاشة وتقييم الطلاب في نفس الوقت.')
              : t('studentDashboard.live.participantLiveHint', 'أنت متصل الآن بالحصة كطالب (Participant). يمكنك متابعة الشرح والتفاعل مع المعلم.')}
          </span>
        </div>
        <div className="flex items-center gap-3">
        </div>
      </div>
    </div>
  );
}

import { useState, useEffect, useRef } from 'react';
import {
  Video,
  Maximize2,
  Minimize2,
  ExternalLink,
  Copy,
  RotateCcw,
  ShieldCheck,
  UserCheck,
  Globe,
} from 'lucide-react';
import { useTranslation } from 'react-i18next';
import { showSuccessToast } from '@/shared/utils/sweetAlert.js';

export default function ZoomMeetingPlayer({
  meetingId,
  passcode,
  role = 0,
  sdkSignature,
  sdkKey = import.meta.env?.VITE_ZOOM_SDK_KEY || import.meta.env?.NEXT_PUBLIC_ZOOM_SDK_KEY || 'O3n0tKuQ0WS9yk0N9JeqQ',
  startUrl,
  joinUrl,
  zakToken,
  leaveUrl,
  userName = '',
  userEmail = import.meta.env?.VITE_ZOOM_EMAIL || import.meta.env?.NEXT_PUBLIC_ZOOM_EMAIL || 'manartalezzacademy1@gmail.com',
  sessionTitle = '',
  className = '',
}) {
  const { t, i18n } = useTranslation();
  const isRtl = i18n?.language?.startsWith('ar') ?? true;
  const containerRef = useRef(null);
  const [isFullscreen, setIsFullscreen] = useState(false);
  const [iframeKey, setIframeKey] = useState(1);
  const cleanMeetingId = String(meetingId || '').replace(/\s/g, '');
  const cleanPasscode = String(passcode || '');
  const isHost = Number(role) === 1;
  const launchAppUrl = isHost ? (startUrl || joinUrl || '') : (joinUrl || '');
  const webClientUrl = isHost
    ? (startUrl || joinUrl || '')
    : (cleanMeetingId
      ? `https://us05web.zoom.us/wc/${cleanMeetingId}/join?prefer=1${cleanPasscode ? `&pwd=${encodeURIComponent(cleanPasscode)}` : ''}`
      : (joinUrl || ''));
  const params = new URLSearchParams();
  if (cleanMeetingId) params.set('meetingId', cleanMeetingId);
  if (cleanPasscode) params.set('passcode', cleanPasscode);
  params.set('role', String(role));
  if (sdkSignature) params.set('sdkSignature', sdkSignature);
  if (sdkKey) params.set('sdkKey', sdkKey);
  if (zakToken) params.set('zak', zakToken);
  if (leaveUrl) params.set('leaveUrl', leaveUrl);
  if (userName) params.set('userName', userName);
  const effectiveUserEmail = userEmail || import.meta.env?.VITE_ZOOM_EMAIL || import.meta.env?.NEXT_PUBLIC_ZOOM_EMAIL || 'manartalezzacademy1@gmail.com';
  params.set('userEmail', effectiveUserEmail);
  if (startUrl) params.set('startUrl', startUrl);
  if (joinUrl) params.set('joinUrl', joinUrl);
  const embedUrl = `/zoom-embed.html?${params.toString()}`;
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
  const handleLaunchZoomApp = () => {
    if (launchAppUrl) {
      window.open(launchAppUrl, '_blank', 'noopener,noreferrer');
    }
  };
  const handleLaunchWebClient = () => {
    if (webClientUrl) {
      window.open(webClientUrl, '_blank', 'noopener,noreferrer');
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
          {launchAppUrl && (
            <button
              type="button"
              onClick={handleLaunchZoomApp}
              className={`px-3.5 py-1.5 rounded-xl text-white text-xs font-bold shadow-md transition-colors flex items-center gap-1.5 cursor-pointer ${
                isHost ? 'bg-blue-600 hover:bg-blue-700' : 'bg-[#0f7a6c] hover:bg-[#0c6156]'
              }`}
            >
              <ExternalLink className="w-3.5 h-3.5" />
              <span>
                {isHost
                  ? t('teacherLive.startAsHostApp', 'بدء كمعلّم (Host)')
                  : t('studentDashboard.live.joinAsStudentApp', 'انضمام كطالب (Zoom)')}
              </span>
            </button>
          )}
          {webClientUrl && (
            <button
              type="button"
              onClick={handleLaunchWebClient}
              className="px-3.5 py-1.5 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-200 hover:text-white text-xs font-bold transition-colors flex items-center gap-1.5 cursor-pointer border border-slate-700"
            >
              <Globe className="w-3.5 h-3.5" />
              <span>
                {isHost
                  ? t('teacherLive.startAsHostWeb', 'المتصفح (Host)')
                  : t('studentDashboard.live.joinAsStudentWeb', 'المتصفح (طالب)')}
              </span>
            </button>
          )}
        </div>
      </div>
      {/* Main Viewport Container */}
      <div className="relative w-full flex-1 min-h-[560px] bg-[#020508] overflow-hidden flex flex-col justify-center items-center">
        <iframe
          key={iframeKey}
          src={embedUrl}
          title="Zoom Live Meeting Stream"
          className="w-full h-full min-h-[560px] border-0 relative z-10 flex-1"
          allow="camera; microphone; fullscreen; display-capture; autoplay; clipboard-write; speaker-selection"
        />
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
          {launchAppUrl && (
            <button
              type="button"
              onClick={handleLaunchZoomApp}
              className="text-blue-400 hover:text-blue-300 hover:underline inline-flex items-center gap-1 font-semibold cursor-pointer"
            >
              <span>
                {isHost
                  ? t('teacherLive.preferDesktopHost', 'بدء الحصة كـ Host عبر تطبيق Zoom')
                  : t('studentDashboard.live.preferDesktopStudent', 'انضمام كطالب عبر تطبيق Zoom')}
              </span>
              <ExternalLink className="w-3 h-3" />
            </button>
          )}
        </div>
      </div>
    </div>
  );
}

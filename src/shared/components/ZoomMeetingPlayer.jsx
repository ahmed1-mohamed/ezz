import { useState, useEffect, useRef } from 'react';
import {
  Video,
  Maximize2,
  Minimize2,
  Copy,
  RotateCcw,
  ShieldCheck,
  UserCheck,
  ExternalLink,
} from 'lucide-react';
import { useTranslation } from 'react-i18next';
import { showSuccessToast } from '@/shared/utils/sweetAlert.js';

export default function ZoomMeetingPlayer({
  meetingId,
  passcode,
  role = 0,
  sdkSignature,
  startUrl,
  joinUrl,
  zakToken,
  leaveUrl,
  userName = '',
  userEmail = import.meta.env?.VITE_ZOOM_EMAIL || import.meta.env?.NEXT_PUBLIC_ZOOM_EMAIL || 'manartalezzacademy1@gmail.com',
  sessionTitle = '',
  className = '',
  onRefreshJoinData,
  isRefreshing = false,
}) {
  const { t, i18n } = useTranslation();
  const isRtl = i18n?.language?.startsWith('ar') ?? true;
  const containerRef = useRef(null);
  const [isFullscreen, setIsFullscreen] = useState(false);
  const [iframeKey, setIframeKey] = useState(1);
  const [mountedAt] = useState(() => Date.now());
  const [currentTime, setCurrentTime] = useState(() => Date.now());

  useEffect(() => {
    const timer = setInterval(() => setCurrentTime(Date.now()), 15000);
    return () => clearInterval(timer);
  }, []);

  const cleanMeetingId = String(meetingId || '').replace(/\s/g, '');
  const cleanPasscode = String(passcode || '');
  const isHost = Number(role) === 1;
  const startZakExp = (() => {
    try {
      const effectiveZak = zakToken || (startUrl ? new URL(startUrl).searchParams.get('zak') : '') || '';
      if (!effectiveZak || !effectiveZak.includes('.')) return null;
      const payload = JSON.parse(atob(effectiveZak.split('.')[1].replace(/-/g, '+').replace(/_/g, '/')));
      return Number(payload.exp) || null;
    } catch {
      return null;
    }
  })();
  const isStartLinkExpired = isHost && startZakExp !== null && startZakExp * 1000 < currentTime;
  const studentWebClientUrl = (() => {
    if (!cleanMeetingId) return joinUrl || '';
    let pwd;
    try {
      pwd = new URL(joinUrl).searchParams.get('pwd') || cleanPasscode;
    } catch {
      pwd = cleanPasscode;
    }
    const q = new URLSearchParams();
    if (pwd) q.set('pwd', pwd);
    q.set('prefer', '1');
    if (userName) {
      try {
        q.set('un', btoa(unescape(encodeURIComponent(userName))));
      } catch (err) {
        console.debug('Failed to encode username for Zoom:', err);
      }
    }
    return `https://app.zoom.us/wc/${cleanMeetingId}/join?${q.toString()}`;
  })();
  const effectiveHostStartUrl = (() => {
    if (startUrl) {
      try {
        const u = new URL(startUrl);
        if (zakToken) u.searchParams.set('zak', zakToken);
        return u.toString();
      } catch {
        return startUrl;
      }
    }
    if (cleanMeetingId && zakToken) {
      return `https://us05web.zoom.us/s/${cleanMeetingId}?zak=${encodeURIComponent(zakToken)}`;
    }
    return joinUrl || '';
  })();
  const hostWebClientUrl = (() => {
    if (!cleanMeetingId) return effectiveHostStartUrl || joinUrl || '';
    const q = new URLSearchParams();
    q.set('prefer', '1');
    if (cleanPasscode) q.set('pwd', cleanPasscode);
    const effectiveZak = zakToken || (() => {
      try {
        return startUrl ? new URL(startUrl).searchParams.get('zak') || '' : '';
      } catch {
        return '';
      }
    })();
    if (effectiveZak) q.set('zak', effectiveZak);
    return `https://app.zoom.us/wc/${cleanMeetingId}/start?${q.toString()}`;
  })();
  const launchAppUrl = isHost
    ? (effectiveHostStartUrl || joinUrl || '')
    : (joinUrl || (cleanMeetingId ? `zoommtg://zoom.us/join?action=join&confno=${cleanMeetingId}${cleanPasscode ? `&pwd=${cleanPasscode}` : ''}` : ''));
  const webClientUrl = isHost
    ? (hostWebClientUrl || effectiveHostStartUrl || joinUrl || '')
    : (studentWebClientUrl || joinUrl || '');
  const embedUrl = (() => {
    if (!cleanMeetingId && !startUrl && !joinUrl) return '';
    const params = new URLSearchParams();
    if (cleanMeetingId) params.set('meetingId', cleanMeetingId);
    if (cleanPasscode) params.set('passcode', cleanPasscode);
    params.set('role', String(role));
    params.set('sdkKey', 'O3n0tKuQ0WS9yk0N9JeqQ');
    if (sdkSignature) params.set('sdkSignature', sdkSignature);
    const startUrlZak = (() => {
      try {
        return startUrl ? new URL(startUrl).searchParams.get('zak') || '' : '';
      } catch {
        return '';
      }
    })();
    const effectiveZak = zakToken || startUrlZak || '';
    if (effectiveZak) params.set('zak', effectiveZak);
    if (leaveUrl) params.set('leaveUrl', leaveUrl);
    if (userName) params.set('userName', userName);
    const effectiveEmail = userEmail || import.meta.env?.VITE_ZOOM_EMAIL || import.meta.env?.NEXT_PUBLIC_ZOOM_EMAIL || 'manartalezzacademy1@gmail.com';
    if (effectiveEmail) params.set('userEmail', effectiveEmail);
    if (startUrl) params.set('startUrl', startUrl);
    if (joinUrl) params.set('joinUrl', joinUrl);
    params.set('_v', '3');
    params.set('_t', String(mountedAt));
    params.set('_k', String(iframeKey));
    return `/zoom-embed.html?${params.toString()}`;
  })();
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
  const handleRefreshServerData = () => {
    if (onRefreshJoinData) {
      onRefreshJoinData();
    }
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
        <div className="flex items-center gap-2 flex-wrap">
          {launchAppUrl && (
            <button
              type="button"
              onClick={handleLaunchZoomApp}
              className="px-3.5 py-1.5 rounded-xl bg-blue-600 hover:bg-blue-700 text-white text-xs font-bold transition-all shadow-sm flex items-center gap-1.5 cursor-pointer active:scale-95"
              title={isHost ? t('teacherLive.startAsHostApp', 'بدء كمعلّم عبر تطبيق Zoom') : t('studentDashboard.live.joinAsStudentApp', 'انضمام عبر تطبيق Zoom')}
            >
              <Video className="w-3.5 h-3.5" />
              <span>{isHost ? t('teacherLive.startAsHostApp', 'بدء عبر تطبيق Zoom') : t('studentDashboard.live.joinAsStudentApp', 'انضمام عبر تطبيق Zoom')}</span>
            </button>
          )}
          {webClientUrl && (
            <button
              type="button"
              onClick={handleLaunchWebClient}
              className="px-3 py-1.5 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-200 hover:text-white text-xs font-bold transition-colors flex items-center gap-1.5 cursor-pointer border border-slate-700"
              title={t('teacherLive.openInBrowser', 'فتح في المتصفح')}
            >
              <ExternalLink className="w-3.5 h-3.5" />
              <span className="hidden sm:inline">{t('teacherLive.openInBrowser', 'المتصفح')}</span>
            </button>
          )}
          {onRefreshJoinData && (
            <button
              type="button"
              onClick={handleRefreshServerData}
              disabled={isRefreshing}
              className="p-2 rounded-xl bg-white/5 hover:bg-white/10 text-slate-300 hover:text-white transition-colors cursor-pointer disabled:opacity-50"
              title={t('teacherLive.refreshLinkFromServer', 'تحديث رابط الحصة من الخادم')}
            >
              <RotateCcw className={`w-3.5 h-3.5 ${isRefreshing ? 'animate-spin' : ''}`} />
            </button>
          )}
          <button
            type="button"
            onClick={handleCopyMeetingInfo}
            className="px-3 py-1.5 rounded-xl bg-white/5 hover:bg-white/10 text-slate-300 hover:text-white text-xs font-bold transition-colors flex items-center gap-1.5 cursor-pointer"
            title={t('teacherLive.copyDetails', 'نسخ البيانات')}
          >
            <Copy className="w-3.5 h-3.5" />
            <span className="hidden md:inline">{t('teacherLive.copyDetails', 'نسخ البيانات')}</span>
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
      {isHost && isStartLinkExpired && (
        <div className="bg-amber-500/10 border-b border-amber-500/20 px-4 sm:px-6 py-2.5 flex flex-wrap items-center justify-between gap-3 text-xs text-amber-200">
          <div className="flex items-center gap-2">
            <Video className="w-4 h-4 text-amber-400 shrink-0" />
            <span>{t('teacherLive.zakExpiredNotice', 'الحصة مفتوحة حالياً (90 دقيقة). يمكنك بدء الحصة فوراً عبر تطبيق Zoom أو تسجيل الدخول كـ Host في المتصفح:')}</span>
          </div>
          <div className="flex items-center gap-2">
            {launchAppUrl && (
              <button
                type="button"
                onClick={handleLaunchZoomApp}
                className="px-3 py-1 rounded-lg bg-amber-500 hover:bg-amber-600 text-slate-950 font-extrabold text-[11px] transition-colors flex items-center gap-1 cursor-pointer"
              >
                <Video className="w-3.5 h-3.5" />
                <span>{t('teacherLive.startAsHostApp', 'بدء كمعلّم عبر تطبيق Zoom')}</span>
              </button>
            )}
            {onRefreshJoinData && (
              <button
                type="button"
                onClick={handleRefreshServerData}
                disabled={isRefreshing}
                className="px-3 py-1 rounded-lg bg-white/10 hover:bg-white/20 text-white font-bold text-[11px] transition-colors flex items-center gap-1 cursor-pointer disabled:opacity-50"
              >
                <RotateCcw className={`w-3 h-3 ${isRefreshing ? 'animate-spin' : ''}`} />
                <span>{t('teacherLive.refreshLinkFromServer', 'طلب رابط جديد من الخادم')}</span>
              </button>
            )}
          </div>
        </div>
      )}
      <div className="relative w-full flex-1 min-h-[560px] bg-[#020508] overflow-hidden flex flex-col justify-center items-center">
        {!embedUrl && !cleanMeetingId ? (
          <div className="max-w-md mx-6 text-center flex flex-col items-center gap-3 p-6 rounded-3xl bg-[#0f172a] border border-white/10">
            <div className="w-12 h-12 rounded-2xl bg-amber-500/15 text-amber-300 flex items-center justify-center">
              <Video className="w-6 h-6" />
            </div>
            <div className="font-black text-base">
              {t('teacherLive.noMeetingLink', 'لا يوجد رابط للحصة')}
            </div>
            <p className="text-sm text-slate-400 leading-relaxed">
              {t('teacherLive.noMeetingLinkHint', 'لم يُرسل الخادم رابط الحصة بعد. انقر على الزر أدناه لجلب رابط الحصة من الخادم.')}
            </p>
            <button
              type="button"
              onClick={handleRefreshServerData}
              disabled={isRefreshing}
              className="px-4 py-2 rounded-xl bg-blue-600 hover:bg-blue-700 text-white text-xs font-bold cursor-pointer disabled:opacity-50 flex items-center gap-2"
            >
              <RotateCcw className={`w-3.5 h-3.5 ${isRefreshing ? 'animate-spin' : ''}`} />
              <span>{t('teacherLive.fetchLinkNow', 'تحديث بيانات الحصة')}</span>
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
      <div className="bg-[#0b131e] px-4 sm:px-6 py-2.5 border-t border-slate-800 text-[11px] text-slate-400 flex flex-wrap items-center justify-between gap-2 shrink-0">
        <div className="flex items-center gap-2">
          <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
          <span>
            {isHost
              ? t('teacherLive.hostLiveHint', 'أنت متصل الآن كمعلّم رئيسي (Host). يمكنك الشرح ومشاركة الشاشة وتقييم الطلاب في نفس الوقت.')
              : t('studentDashboard.live.participantLiveHint', 'أنت متصل الآن بالحصة كطالب (Participant). يمكنك متابعة الشرح والتفاعل مع المعلم.')}
          </span>
        </div>
      </div>
    </div>
  );
}

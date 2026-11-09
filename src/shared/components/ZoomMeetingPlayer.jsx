import { useState, useEffect, useRef } from 'react';
import {
  Video,
  VideoOff,
  Mic,
  MicOff,
  Sliders,
  Maximize2,
  Minimize2,
  RotateCcw,
  ExternalLink,
} from 'lucide-react';
import { useTranslation } from 'react-i18next';
import DevicePreviewModal from './DevicePreviewModal.jsx';

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
  const iframeRef = useRef(null);
  const [isFullscreen, setIsFullscreen] = useState(false);
  const [iframeKey, setIframeKey] = useState(1);
  const [isMicMuted, setIsMicMuted] = useState(false);
  const [isCameraOff, setIsCameraOff] = useState(false);
  const [isPreviewModalOpen, setIsPreviewModalOpen] = useState(false);
  const [mountedAt] = useState(() => Date.now());
  const cleanMeetingId = String(meetingId || '').replace(/\s/g, '');
  const cleanPasscode = String(passcode || '');
  const isHost = Number(role) === 1;
  const embedUrl = (() => {
    if (!cleanMeetingId && !startUrl && !joinUrl) return '';
    const params = new URLSearchParams();
    if (cleanMeetingId) params.set('meetingId', cleanMeetingId);
    if (cleanPasscode) params.set('passcode', cleanPasscode);
    params.set('role', String(role));
    const extractedSdkKey = (() => {
      try {
        if (!sdkSignature || !sdkSignature.includes('.')) return '';
        const payload = JSON.parse(atob(sdkSignature.split('.')[1].replace(/-/g, '+').replace(/_/g, '/')));
        return payload.sdkKey || payload.appKey || '';
      } catch {
        return '';
      }
    })();
    const finalSdkKey = extractedSdkKey || import.meta.env?.VITE_ZOOM_SDK_KEY || 'O3n0tKuQ0WS9yk0N9JeqQ';
    params.set('sdkKey', finalSdkKey);
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
    params.set('_v', '6');
    params.set('lang', isRtl ? 'ar' : 'en');
    params.set('_t', String(mountedAt));
    params.set('_k', String(iframeKey));
    return `/zoom-embed.html?${params.toString()}`;
  })();
  const handleToggleFullscreen = () => {
    if (!containerRef.current) return;
    if (!document.fullscreenElement) {
      containerRef.current.requestFullscreen?.().then(() => setIsFullscreen(true)).catch(() => {});
    } else {
      document.exitFullscreen?.().then(() => setIsFullscreen(false)).catch(() => {});
    }
  };
  const handleToggleMic = () => {
    const nextState = !isMicMuted;
    setIsMicMuted(nextState);
    if (iframeRef.current && iframeRef.current.contentWindow) {
      iframeRef.current.contentWindow.postMessage(
        { type: 'ZOOM_TOGGLE_AUDIO', mute: nextState },
        '*'
      );
    }
  };
  const handleToggleCamera = () => {
    const nextState = !isCameraOff;
    setIsCameraOff(nextState);
    if (iframeRef.current && iframeRef.current.contentWindow) {
      iframeRef.current.contentWindow.postMessage(
        { type: 'ZOOM_TOGGLE_VIDEO', stopVideo: nextState },
        '*'
      );
    }
  };
  const handleReloadStream = () => {
    setIframeKey((prev) => prev + 1);
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
    const handleZoomMessage = (event) => {
      if (event.data?.type === 'ZOOM_MEETING_LEFT') {
        const destination = event.data.leaveUrl || (isHost ? '/dashboard/teacher/sessions' : '/dashboard/student/schedule');
        window.location.href = destination;
      } else if (event.data?.type === 'ZOOM_MEDIA_STATE') {
        if (typeof event.data.isMuted === 'boolean') {
          setIsMicMuted(event.data.isMuted);
        }
        if (typeof event.data.isVideoOff === 'boolean') {
          setIsCameraOff(event.data.isVideoOff);
        }
      }
    };
    document.addEventListener('fullscreenchange', handleFullscreenChange);
    window.addEventListener('message', handleZoomMessage);
    return () => {
      document.removeEventListener('fullscreenchange', handleFullscreenChange);
      window.removeEventListener('message', handleZoomMessage);
    };
  }, [isHost]);
  useEffect(() => {
    if (!sdkSignature || !sdkSignature.includes('.')) return;
    try {
      const payload = JSON.parse(atob(sdkSignature.split('.')[1].replace(/-/g, '+').replace(/_/g, '/')));
      const expSec = payload.exp || payload.tokenExp;
      if (expSec) {
        const expMs = Number(expSec) * 1000;
        const now = Date.now();
        const diffMs = expMs - now;
        if (diffMs <= 180000 && onRefreshJoinData) {
          onRefreshJoinData();
        } else if (diffMs > 180000 && onRefreshJoinData) {
          const timeoutMs = Math.min(diffMs - 180000, 7100000);
          const timer = setTimeout(() => {
            onRefreshJoinData();
          }, timeoutMs);
          return () => clearTimeout(timer);
        }
      }
    } catch {
      // Signature parsing non-fatal
    }
  }, [sdkSignature, onRefreshJoinData]);
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
            </div>
          </div>
        </div>
        <div className="flex items-center gap-2 flex-wrap">
          {(joinUrl || startUrl || cleanMeetingId) && (
            <button
              type="button"
              onClick={() => {
                const target = isHost ? (startUrl || joinUrl) : (joinUrl || startUrl);
                if (target) {
                  window.open(target, '_blank', 'noopener,noreferrer');
                } else if (cleanMeetingId) {
                  const fallbackZoom = `https://zoom.us/j/${cleanMeetingId}${cleanPasscode ? `?pwd=${cleanPasscode}` : ''}`;
                  window.open(fallbackZoom, '_blank', 'noopener,noreferrer');
                }
              }}
              className="px-3.5 py-1.5 sm:px-4 sm:py-2 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white text-xs font-bold transition-all shadow-md active:scale-95 cursor-pointer flex items-center gap-1.5"
              title={isRtl ? 'انضمام مباشر للحصة' : 'Join Meeting'}
            >
              <ExternalLink className="w-3.5 h-3.5" />
              <span>{isRtl ? 'انضمام' : 'Join'}</span>
            </button>
          )}
          <button
            type="button"
            onClick={handleToggleMic}
            className={`px-3 py-1.5 sm:px-3.5 sm:py-2 rounded-xl text-xs font-bold transition-all flex items-center gap-1.5 cursor-pointer shadow-sm active:scale-95 ${
              isMicMuted
                ? 'bg-rose-600/90 hover:bg-rose-700 text-white border border-rose-500/40'
                : 'bg-emerald-600/90 hover:bg-emerald-700 text-white border border-emerald-500/40'
            }`}
            title={isMicMuted ? (isRtl ? 'تشغيل المايك' : 'Unmute Mic') : (isRtl ? 'كتم المايك' : 'Mute Mic')}
          >
            {isMicMuted ? <MicOff className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-white" /> : <Mic className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-white" />}
            <span className="font-extrabold text-xs">
              {isMicMuted ? (isRtl ? 'المايك مكتوم' : 'Mic Muted') : (isRtl ? 'المايك يعمل' : 'Mic On')}
            </span>
          </button>
          <button
            type="button"
            onClick={handleToggleCamera}
            className={`px-3 py-1.5 sm:px-3.5 sm:py-2 rounded-xl text-xs font-bold transition-all flex items-center gap-1.5 cursor-pointer shadow-sm active:scale-95 ${
              isCameraOff
                ? 'bg-rose-600/90 hover:bg-rose-700 text-white border border-rose-500/40'
                : 'bg-blue-600/90 hover:bg-blue-700 text-white border border-blue-500/40'
            }`}
            title={isCameraOff ? (isRtl ? 'تشغيل الكاميرا' : 'Start Video') : (isRtl ? 'إيقاف الكاميرا' : 'Stop Video')}
          >
            {isCameraOff ? <VideoOff className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-white" /> : <Video className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-white" />}
            <span className="font-extrabold text-xs">
              {isCameraOff ? (isRtl ? 'الكاميرا مغلقة' : 'Camera Off') : (isRtl ? 'الكاميرا تعمل' : 'Camera On')}
            </span>
          </button>
          <button
            type="button"
            onClick={() => setIsPreviewModalOpen(true)}
            className="px-2.5 py-1.5 sm:px-3 sm:py-2 rounded-xl bg-white/10 hover:bg-white/20 text-amber-300 hover:text-amber-200 border border-amber-500/30 text-xs font-bold transition-colors cursor-pointer flex items-center gap-1.5"
            title={isRtl ? 'فحص وتجهيز الكاميرا والمايك' : 'Check Devices'}
          >
            <Sliders className="w-3.5 h-3.5" />
            <span className="hidden sm:inline">{isRtl ? 'فحص الأجهزة' : 'Check Devices'}</span>
          </button>
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
      <div className="relative w-full flex-1 min-h-[320px] sm:min-h-[360px] bg-[#020508] overflow-hidden flex flex-col justify-center items-center">
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
            ref={iframeRef}
            key={iframeKey}
            src={embedUrl}
            title="Zoom Live Meeting Stream"
            className="w-full h-full min-h-[320px] sm:min-h-[360px] border-0 relative z-10 flex-1"
            allow="camera; microphone; fullscreen; display-capture; autoplay; clipboard-write; speaker-selection; unload"
          />
        )}
      </div>
      <div className="bg-[#0b131e] px-4 sm:px-6 py-2.5 border-t border-slate-800 text-[11px] text-slate-400 flex flex-wrap items-center justify-between gap-3 shrink-0">
        <div className="flex items-center gap-2">
          <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
          <span>
            {isHost
              ? t('teacherLive.hostLiveHint', 'أنت متصل الآن كمعلّم رئيسي (Host). يمكنك الشرح ومشاركة الشاشة وتقييم الطلاب في نفس الوقت.')
              : (userName.includes('إدارة') || userName.includes('Admin'))
              ? (isRtl ? 'أنت متصل الآن بوضع المراقبة والإشراف المباشر.' : 'You are connected in live supervisory mode.')
              : t('studentDashboard.live.participantLiveHint', 'أنت متصل الآن بالحصة المباشرة. يمكنك متابعة الشرح والتفاعل مع المعلم.')}
          </span>
        </div>
        <div className="flex items-center gap-2">
          <button
            type="button"
            onClick={handleToggleMic}
            className={`px-3 py-1 rounded-lg text-xs font-bold transition-all flex items-center gap-1.5 cursor-pointer ${
              isMicMuted ? 'bg-rose-500/20 text-rose-300 border border-rose-500/30' : 'bg-emerald-500/20 text-emerald-300 border border-emerald-500/30'
            }`}
          >
            {isMicMuted ? <MicOff className="w-3.5 h-3.5" /> : <Mic className="w-3.5 h-3.5" />}
            <span>{isMicMuted ? (isRtl ? 'المايك مكتوم' : 'Muted') : (isRtl ? 'المايك يعمل' : 'Mic Active')}</span>
          </button>
          <button
            type="button"
            onClick={handleToggleCamera}
            className={`px-3 py-1 rounded-lg text-xs font-bold transition-all flex items-center gap-1.5 cursor-pointer ${
              isCameraOff ? 'bg-rose-500/20 text-rose-300 border border-rose-500/30' : 'bg-blue-500/20 text-blue-300 border border-blue-500/30'
            }`}
          >
            {isCameraOff ? <VideoOff className="w-3.5 h-3.5" /> : <Video className="w-3.5 h-3.5" />}
            <span>{isCameraOff ? (isRtl ? 'الكاميرا مغلقة' : 'Off') : (isRtl ? 'الكاميرا تعمل' : 'Video Active')}</span>
          </button>
        </div>
      </div>
      <DevicePreviewModal
        isOpen={isPreviewModalOpen}
        onClose={() => setIsPreviewModalOpen(false)}
        isRtl={isRtl}
      />
    </div>
  );
}

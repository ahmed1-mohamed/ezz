import { useState, useEffect, useRef, useCallback } from 'react';
import { createPortal } from 'react-dom';
import {
  Mic,
  MicOff,
  Video as VideoIcon,
  VideoOff,
  Volume2,
  CheckCircle2,
  AlertCircle,
  X,
  RefreshCw,
  Sparkles,
} from 'lucide-react';

export default function DevicePreviewModal({ isOpen, onClose, isRtl = true }) {
  const videoRef = useRef(null);
  const streamRef = useRef(null);
  const audioContextRef = useRef(null);
  const analyserRef = useRef(null);
  const animFrameRef = useRef(null);
  const [errorMessage, setErrorMessage] = useState(null);
  const [isCameraActive, setIsCameraActive] = useState(true);
  const [isMicActive, setIsMicActive] = useState(true);
  const [audioLevel, setAudioLevel] = useState(0);
  const stopMediaTracks = () => {
    if (animFrameRef.current) {
      cancelAnimationFrame(animFrameRef.current);
      animFrameRef.current = null;
    }
    if (audioContextRef.current) {
      try {
        audioContextRef.current.close();
      } catch (err) { void err; }
      audioContextRef.current = null;
    }
    if (streamRef.current) {
      streamRef.current.getTracks().forEach((track) => track.stop());
      streamRef.current = null;
    }
    if (videoRef.current) {
      videoRef.current.srcObject = null;
    }
    setAudioLevel(0);
  };
  const startMediaPreview = useCallback(async () => {
    stopMediaTracks();
    setErrorMessage(null);
    try {
      const stream = await navigator.mediaDevices.getUserMedia({
        video: { width: { ideal: 1280 }, height: { ideal: 720 } },
        audio: true,
      });
      streamRef.current = stream;
      if (videoRef.current) {
        videoRef.current.srcObject = stream;
      }
      setIsCameraActive(true);
      setIsMicActive(true);
      try {
        const AudioContextClass = window.AudioContext || window.webkitAudioContext;
        if (AudioContextClass) {
          const ctx = new AudioContextClass();
          audioContextRef.current = ctx;
          const analyser = ctx.createAnalyser();
          analyser.fftSize = 256;
          analyserRef.current = analyser;
          const source = ctx.createMediaStreamSource(stream);
          source.connect(analyser);
          const dataArray = new Uint8Array(analyser.frequencyBinCount);
          const checkVolume = () => {
            if (!analyserRef.current) return;
            analyserRef.current.getByteFrequencyData(dataArray);
            let sum = 0;
            for (let i = 0; i < dataArray.length; i++) {
              sum += dataArray[i];
            }
            const average = sum / dataArray.length;
            const normalized = Math.min(100, Math.round((average / 128) * 100));
            setAudioLevel(normalized);
            animFrameRef.current = requestAnimationFrame(checkVolume);
          };
          checkVolume();
        }
      } catch (audioErr) {
        console.warn('[DevicePreview] Audio analyser initialization error:', audioErr);
      }
    } catch (err) {
      console.warn('[DevicePreview] Media access error:', err);
      setErrorMessage(
        err?.name === 'NotAllowedError'
          ? (isRtl ? 'تم رفض صلاحية الكاميرا أو الميكروفون من المتصفح. برجاء السماح بالوصول من إعدادات المتصفح.' : 'Camera or microphone permission was denied. Please allow access in browser settings.')
          : (isRtl ? 'تعذّر الوصول إلى الكاميرا أو الميكروفون. تأكد من توصيل الجهاز بشكل صحيح.' : 'Unable to access camera or microphone. Please ensure your device is connected.')
      );
    }
  }, [isRtl]);
  useEffect(() => {
    if (isOpen) {
      startMediaPreview();
    } else {
      stopMediaTracks();
    }
    return () => stopMediaTracks();
  }, [isOpen, startMediaPreview]);
  const handleToggleCamera = () => {
    if (!streamRef.current) return;
    const videoTracks = streamRef.current.getVideoTracks();
    if (videoTracks.length > 0) {
      const nextState = !isCameraActive;
      videoTracks.forEach((track) => {
        track.enabled = nextState;
      });
      setIsCameraActive(nextState);
    }
  };
  const handleToggleMic = () => {
    if (!streamRef.current) return;
    const audioTracks = streamRef.current.getAudioTracks();
    if (audioTracks.length > 0) {
      const nextState = !isMicActive;
      audioTracks.forEach((track) => {
        track.enabled = nextState;
      });
      setIsMicActive(nextState);
      if (!nextState) setAudioLevel(0);
    }
  };
  if (!isOpen || typeof document === 'undefined') return null;
  return createPortal(
    <div className="fixed inset-0 w-screen h-screen min-h-screen z-[99999] flex items-center justify-center p-3 sm:p-4 bg-black/80 backdrop-blur-md animate-fade-in" dir={isRtl ? 'rtl' : 'ltr'}>
      <div className="bg-slate-900 border border-slate-800 text-white rounded-3xl w-full max-w-xl shadow-2xl overflow-hidden flex flex-col">
        <div className="p-4 sm:p-5 border-b border-slate-800 flex items-center justify-between">
          <div className="flex items-center gap-2.5">
            <div className="w-9 h-9 rounded-xl bg-[#0f7a6c]/20 text-emerald-400 flex items-center justify-center">
              <Sparkles className="w-5 h-5" />
            </div>
            <div>
              <h3 className="font-extrabold text-base sm:text-lg">
                {isRtl ? 'فحص وتجهيز الكاميرا والصوت' : 'Camera & Audio Device Check'}
              </h3>
              <p className="text-xs text-slate-400">
                {isRtl ? 'تأكد من وضوح الصورة وتدفق الصوت قبل وأثناء الحصة' : 'Verify video clarity and microphone levels before joining'}
              </p>
            </div>
          </div>
          <button
            type="button"
            onClick={onClose}
            className="p-2 rounded-xl text-slate-400 hover:text-white hover:bg-slate-800 transition-colors cursor-pointer"
            aria-label="Close"
          >
            <X className="w-5 h-5" />
          </button>
        </div>
        <div className="p-4 sm:p-6 space-y-5 flex-1 overflow-y-auto">
          <div className="relative rounded-2xl overflow-hidden bg-black aspect-video flex items-center justify-center border border-slate-800">
            <video
              ref={videoRef}
              autoPlay
              playsInline
              muted
              className={`w-full h-full object-cover ${!isCameraActive ? 'hidden' : ''}`}
            />
            {!isCameraActive && (
              <div className="flex flex-col items-center justify-center gap-2 text-slate-400 p-6 text-center select-none">
                <div className="w-14 h-14 rounded-2xl bg-slate-800 flex items-center justify-center text-slate-500">
                  <VideoOff className="w-7 h-7" />
                </div>
                <span className="text-xs font-bold">
                  {isRtl ? 'تم إيقاف الكاميرا' : 'Camera is turned off'}
                </span>
              </div>
            )}
            {errorMessage && (
              <div className="absolute inset-0 bg-slate-950/90 flex flex-col items-center justify-center p-6 text-center text-red-300 gap-3">
                <AlertCircle className="w-8 h-8 text-red-400" />
                <p className="text-xs sm:text-sm font-semibold max-w-sm">{errorMessage}</p>
                <button
                  type="button"
                  onClick={startMediaPreview}
                  className="px-4 py-2 rounded-xl bg-slate-800 hover:bg-slate-700 text-white text-xs font-bold inline-flex items-center gap-2 cursor-pointer transition-colors"
                >
                  <RefreshCw className="w-3.5 h-3.5" />
                  <span>{isRtl ? 'إعادة المحاولة' : 'Retry Permission'}</span>
                </button>
              </div>
            )}
            <div className="absolute bottom-3 inset-x-3 flex items-center justify-between pointer-events-none">
              <span className={`px-2.5 py-1 rounded-lg text-[11px] font-bold backdrop-blur-md flex items-center gap-1.5 ${isCameraActive ? 'bg-emerald-500/80 text-white' : 'bg-red-500/80 text-white'}`}>
                {isCameraActive ? <CheckCircle2 className="w-3.5 h-3.5" /> : <AlertCircle className="w-3.5 h-3.5" />}
                <span>{isCameraActive ? (isRtl ? 'الكاميرا جاهزة' : 'Camera Ready') : (isRtl ? 'الكاميرا مغلقة' : 'Camera Disabled')}</span>
              </span>
              <span className={`px-2.5 py-1 rounded-lg text-[11px] font-bold backdrop-blur-md flex items-center gap-1.5 ${isMicActive ? 'bg-emerald-500/80 text-white' : 'bg-amber-500/80 text-white'}`}>
                {isMicActive ? <CheckCircle2 className="w-3.5 h-3.5" /> : <AlertCircle className="w-3.5 h-3.5" />}
                <span>{isMicActive ? (isRtl ? 'المايك يعمل' : 'Mic Active') : (isRtl ? 'المايك مكتوم' : 'Mic Muted')}</span>
              </span>
            </div>
          </div>
          <div className="bg-slate-800/60 rounded-2xl p-4 border border-slate-700/60 space-y-3">
            <div className="flex items-center justify-between text-xs font-bold text-slate-300">
              <div className="flex items-center gap-2">
                <Volume2 className={`w-4 h-4 ${audioLevel > 5 ? 'text-emerald-400 animate-pulse' : 'text-slate-400'}`} />
                <span>{isRtl ? 'مستوى التقاط الميكروفون المباشر:' : 'Live Microphone Input Meter:'}</span>
              </div>
              <span className="font-mono text-emerald-400">{audioLevel}%</span>
            </div>
            <div className="w-full bg-slate-900 h-3 rounded-full overflow-hidden p-0.5 border border-slate-700/80">
              <div
                className={`h-full rounded-full transition-all duration-75 ${audioLevel > 40 ? 'bg-gradient-to-r from-emerald-500 to-teal-400' : 'bg-emerald-500'}`}
                style={{ width: `${Math.max(2, Math.min(100, audioLevel))}%` }}
              />
            </div>
            <p className="text-[11px] text-slate-400 leading-relaxed">
              {isRtl ? 'تحدث الآن في الميكروفون للتأكد من صعود المؤشر الأخضر واستجابة الصوت.' : 'Speak into your microphone now to confirm the green meter reacts to your voice.'}
            </p>
          </div>
          <div className="grid grid-cols-2 gap-3">
            <button
              type="button"
              onClick={handleToggleMic}
              className={`p-3.5 rounded-2xl font-bold text-xs sm:text-sm flex items-center justify-center gap-2 border transition-all cursor-pointer ${
                isMicActive
                  ? 'bg-emerald-500/15 border-emerald-500/30 text-emerald-300 hover:bg-emerald-500/25'
                  : 'bg-red-500/15 border-red-500/30 text-red-300 hover:bg-red-500/25'
              }`}
            >
              {isMicActive ? <Mic className="w-4 h-4" /> : <MicOff className="w-4 h-4" />}
              <span>{isMicActive ? (isRtl ? 'كتم المايك' : 'Mute Mic') : (isRtl ? 'تشغيل المايك' : 'Unmute Mic')}</span>
            </button>
            <button
              type="button"
              onClick={handleToggleCamera}
              className={`p-3.5 rounded-2xl font-bold text-xs sm:text-sm flex items-center justify-center gap-2 border transition-all cursor-pointer ${
                isCameraActive
                  ? 'bg-blue-500/15 border-blue-500/30 text-blue-300 hover:bg-blue-500/25'
                  : 'bg-red-500/15 border-red-500/30 text-red-300 hover:bg-red-500/25'
              }`}
            >
              {isCameraActive ? <VideoIcon className="w-4 h-4" /> : <VideoOff className="w-4 h-4" />}
              <span>{isCameraActive ? (isRtl ? 'إيقاف الكاميرا' : 'Stop Camera') : (isRtl ? 'تشغيل الكاميرا' : 'Start Camera')}</span>
            </button>
          </div>
        </div>
        <div className="p-4 sm:p-5 border-t border-slate-800 bg-slate-900/80 flex items-center justify-end gap-3">
          <button
            type="button"
            onClick={onClose}
            className="w-full sm:w-auto px-6 py-2.5 rounded-xl bg-[#0f7a6c] hover:bg-[#0c6156] text-white text-xs sm:text-sm font-bold shadow-md cursor-pointer transition-all"
          >
            {isRtl ? 'تم، كل شيء جاهز' : 'Done, All Ready'}
          </button>
        </div>
      </div>
    </div>,
    document.body
  );
}


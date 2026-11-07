import { useState, useMemo } from 'react';
import { useSearchParams } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { useQuery } from '@tanstack/react-query';
import {
  Video,
  Mic,
  Sliders,
  Calendar,
  Clock,
  ChevronLeft,
  ChevronRight,
  RotateCcw,
  PlayCircle,
  AlertCircle,
  CheckCircle2,
  CalendarClock,
  Loader2,
} from 'lucide-react';
import { teacherSessionsApi } from '@/shared/services/api/teacherSessionsApi';
import Swal from 'sweetalert2';
import CountdownTimer from './CountdownTimer';
import AttendanceList from './AttendanceList';
import RescheduleSessionModal from './RescheduleSessionModal';
import DevicePreviewModal from '@/shared/components/DevicePreviewModal.jsx';
import { checkCanJoinSession } from '@/shared/utils/sessionTiming.js';

function normalizeStatusKey(raw) {
  if (!raw) return 'scheduled';
  const str = String(raw).trim().toLowerCase();
  if (str === 'completed' || str === 'مكتملة' || str === 'مكتمل') return 'completed';
  if (str === 'cancelled' || str === 'canceled' || str === 'ملغاة' || str === 'ملغية' || str === 'ملغي') return 'cancelled';
  if (str === 'live' || str === 'in_progress' || str === 'in-progress' || str === 'مباشرة' || str === 'جارية') return 'live';
  if (str === 'rescheduled' || str === 'معاد جدولتها' || str === 'معاد جدولته') return 'rescheduled';
  return 'scheduled';
}

function formatSessionDate(dateValue, isRtl) {
  if (!dateValue) return '-';
  const dateObj = new Date(dateValue);
  if (isNaN(dateObj.getTime())) return String(dateValue);
  return dateObj.toLocaleDateString(isRtl ? 'ar-EG' : 'en-GB', {
    weekday: 'long',
    day: 'numeric',
    month: 'long',
    year: 'numeric',
  });
}

function formatSessionTime(timeValue) {
  if (!timeValue) return '-';
  const str = String(timeValue).trim();
  if (/^\d{4}-\d{2}-\d{2}T/.test(str)) {
    const d = new Date(str);
    if (!isNaN(d.getTime())) {
      return d.toLocaleTimeString('en-GB', { hour: '2-digit', minute: '2-digit', hour12: false });
    }
  }
  return str;
}

export default function BeforeSessionTab({ onStartSession }) {
  const { t, i18n } = useTranslation();
  const isRtl = i18n?.language?.startsWith('ar') ?? true;
  const [searchParams] = useSearchParams();
  const querySessionId = searchParams.get('session') || searchParams.get('sessionId');
  const [offset, setOffset] = useState(0);
  const [isStarting, setIsStarting] = useState(false);
  const [isRescheduleOpen, setIsRescheduleOpen] = useState(false);
  const [isDeviceCheckOpen, setIsDeviceCheckOpen] = useState(false);
  const { data: sessionData, isLoading, isError, refetch } = useQuery({
    queryKey: ['teacher-session-detail-or-offset', querySessionId, offset],
    queryFn: () => {
      if (querySessionId && offset === 0) {
        return teacherSessionsApi.fetchSessionDetails(querySessionId);
      }
      return teacherSessionsApi.fetchNextSessionWithOffset(offset);
    },
    staleTime: 60 * 1000,
    refetchOnWindowFocus: false,
    refetchOnReconnect: false,
  });
  const session = useMemo(() => {
    if (!sessionData) return null;
    return sessionData.data || sessionData.session || sessionData;
  }, [sessionData]);
  const hasValidSession = Boolean(session && (session.id || session._id || session.title));
  const statusKey = useMemo(() => {
    return normalizeStatusKey(session?.status || session?.rawStatus);
  }, [session]);
  const showCountdown = statusKey === 'scheduled' || statusKey === 'rescheduled';
  const isLive = statusKey === 'live';
  const isCompleted = statusKey === 'completed';
  const isCancelled = statusKey === 'cancelled';
  const sessionTitle = typeof session?.title === 'object' && session?.title !== null
    ? (isRtl ? session.title.ar : session.title.en)
    : (session?.title || session?.subject || t('teacherLive.liveSessionTitle', 'حصة مباشرة'));
  const groupName = typeof session?.group === 'object' && session?.group !== null
    ? (isRtl ? session.group.name?.ar || session.group.name : session.group.name?.en || session.group.name)
    : (session?.groupName || session?.group || '-');
  const startDateTime = useMemo(() => {
    if (!session?.date && !session?.startTime) return null;
    if (session?.startTime && /^\d{4}-\d{2}-\d{2}T/.test(session.startTime)) {
      return session.startTime;
    }
    if (session?.date && session?.startTime) {
      return `${session.date}T${session.startTime}`;
    }
    return session?.date || session?.startTime || null;
  }, [session]);
  const joinCheck = useMemo(() => {
    return checkCanJoinSession(session);
  }, [session]);
  const handlePrevSession = () => {
    setOffset((prev) => prev - 1);
  };
  const handleNextSession = () => {
    setOffset((prev) => prev + 1);
  };
  const handleResetOffset = () => {
    setOffset(0);
  };
  const handleStartSessionClick = async () => {
    if (isStarting || !session) return;
    setIsStarting(true);
    const sid = session?.id || session?._id;
    try {
      const joinData = await teacherSessionsApi.fetchSessionJoinData(sid);
      setIsStarting(false);
      onStartSession(session, joinData);
    } catch (err) {
      setIsStarting(false);
      const serverMessage =
        err?.response?.data?.message ||
        err?.response?.data?.error ||
        err?.message ||
        t('teacherLive.cannotJoinNow', 'لا يمكنك الانضمام الآن، يمكنك الدخول قبل موعد الحصة بـ 5 دقائق وحتى 30 دقيقة بعد انتهائها');
      const finalMsg = Array.isArray(serverMessage) ? serverMessage.join(', ') : serverMessage;
      Swal.fire({
        icon: 'warning',
        title: isRtl ? 'موعد الحصة المباشرة' : 'Live Session Notice',
        text: finalMsg,
        confirmButtonText: isRtl ? 'حسناً' : 'OK',
        confirmButtonColor: '#0f7a6c',
      });
    }
  };
  return (
    <div className="space-y-6">
      <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-2xl p-4 shadow-sm flex flex-wrap items-center justify-between gap-3">
        <div className="flex items-center gap-2">
          <CalendarClock className="w-5 h-5 text-[#0f7a6c]" />
          <span className="font-bold text-sm text-slate-800 dark:text-slate-100">
            {offset === 0
              ? t('teacherLive.currentNextSession', 'الحصة القادمة (الحالية)')
              : offset > 0
              ? t('teacherLive.upcomingOffset', 'حصة قادمة (+{{offset}})', { offset })
              : t('teacherLive.previousOffset', 'حصة سابقة ({{offset}})', { offset })}
          </span>
        </div>
        <div className="flex items-center gap-2">
          <button
            type="button"
            onClick={handlePrevSession}
            className="flex items-center gap-1 px-3 py-1.5 rounded-xl border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 text-slate-700 dark:text-slate-200 text-xs font-bold hover:bg-slate-50 dark:hover:bg-slate-700 transition-colors"
          >
            {isRtl ? <ChevronRight className="w-4 h-4" /> : <ChevronLeft className="w-4 h-4" />}
            <span>{t('teacherLive.previousSessionNav', 'الحصة السابقة')}</span>
          </button>
          {offset !== 0 && (
            <button
              type="button"
              onClick={handleResetOffset}
              className="flex items-center gap-1 px-3 py-1.5 rounded-xl bg-[#0f7a6c]/10 text-[#0f7a6c] dark:text-emerald-400 text-xs font-bold hover:bg-[#0f7a6c]/20 transition-colors"
            >
              <RotateCcw className="w-3.5 h-3.5" />
              <span>{t('teacherLive.currentSessionReset', 'العودة للحالية')}</span>
            </button>
          )}
          <button
            type="button"
            onClick={handleNextSession}
            className="flex items-center gap-1 px-3 py-1.5 rounded-xl border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 text-slate-700 dark:text-slate-200 text-xs font-bold hover:bg-slate-50 dark:hover:bg-slate-700 transition-colors"
          >
            <span>{t('teacherLive.nextSessionNav', 'الحصة التالية')}</span>
            {isRtl ? <ChevronLeft className="w-4 h-4" /> : <ChevronRight className="w-4 h-4" />}
          </button>
        </div>
      </div>
      {isLoading ? (
        <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-3xl p-12 text-center shadow-sm">
          <div className="w-10 h-10 border-3 border-[#0f7a6c] border-t-transparent rounded-full animate-spin mx-auto mb-3" />
          <p className="text-sm font-semibold text-slate-500 dark:text-slate-400">
            {t('teacherLive.loadingSession', 'جاري تحميل بيانات الحصة...')}
          </p>
        </div>
      ) : isError || !hasValidSession ? (
        <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-3xl p-12 text-center shadow-sm space-y-4">
          <div className="w-14 h-14 bg-slate-100 dark:bg-slate-800 rounded-2xl flex items-center justify-center mx-auto text-slate-400">
            <Video className="w-7 h-7" />
          </div>
          <div>
            <h3 className="text-lg font-bold text-slate-800 dark:text-slate-100">
              {t('teacherLive.noSessionAtOffset', 'لا توجد حصة مسجلة في هذا الترتيب')}
            </h3>
            <p className="text-xs text-slate-500 dark:text-slate-400 mt-1 max-w-sm mx-auto">
              {t('teacherLive.noSessionSubtitle', 'يمكنك التنقل بين الحصص السابقة والقادمة أو العودة للحصة الحالية')}
            </p>
          </div>
          {offset !== 0 && (
            <button
              type="button"
              onClick={handleResetOffset}
              className="px-5 py-2.5 rounded-xl bg-[#0f7a6c] hover:bg-[#0c6156] text-white text-xs font-bold shadow-md transition-colors inline-flex items-center gap-2"
            >
              <RotateCcw className="w-4 h-4" />
              <span>{t('teacherLive.currentSessionReset', 'العودة للحالية')}</span>
            </button>
          )}
        </div>
      ) : (
        <>
          <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-3xl p-6 sm:p-8 shadow-sm space-y-6 relative overflow-hidden">
            <div className="flex flex-wrap items-start justify-between gap-4 border-b border-slate-100 dark:border-slate-800 pb-6">
              <div className="space-y-2">
                <div className="flex flex-wrap items-center gap-2">
                  <span className="text-xs font-bold px-3 py-1 rounded-full bg-[#0f7a6c]/10 text-[#0f7a6c] dark:text-emerald-400 border border-[#0f7a6c]/20">
                    {groupName}
                  </span>
                  {isLive && (
                    <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-50 dark:bg-emerald-950/40 text-emerald-700 dark:text-emerald-300 border border-emerald-200 dark:border-emerald-800 text-xs font-bold shadow-sm">
                      <span className="w-2 h-2 rounded-full bg-emerald-500 animate-ping" />
                      <span>{t('teacherLive.liveNow', 'مباشرة الآن')}</span>
                    </span>
                  )}
                  {statusKey === 'scheduled' && (
                    <span className="inline-flex items-center gap-1 px-3 py-1 rounded-full bg-blue-50 dark:bg-blue-950/40 text-blue-700 dark:text-blue-300 border border-blue-200 dark:border-blue-800 text-xs font-bold">
                      <Clock className="w-3.5 h-3.5" />
                      <span>{t('teacherLive.statusScheduled', 'مجدولة')}</span>
                    </span>
                  )}
                  {statusKey === 'rescheduled' && (
                    <span className="inline-flex items-center gap-1 px-3 py-1 rounded-full bg-amber-50 dark:bg-amber-950/40 text-amber-700 dark:text-amber-300 border border-amber-200 dark:border-amber-800 text-xs font-bold">
                      <AlertCircle className="w-3.5 h-3.5" />
                      <span>{t('teacherLive.statusRescheduled', 'معاد جدولتها')}</span>
                    </span>
                  )}
                  {isCompleted && (
                    <span className="inline-flex items-center gap-1 px-3 py-1 rounded-full bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 border border-slate-200 dark:border-slate-700 text-xs font-bold">
                      <CheckCircle2 className="w-3.5 h-3.5 text-slate-500" />
                      <span>{t('teacherLive.statusCompleted', 'مكتملة')}</span>
                    </span>
                  )}
                  {isCancelled && (
                    <span className="inline-flex items-center gap-1 px-3 py-1 rounded-full bg-rose-50 dark:bg-rose-950/40 text-rose-700 dark:text-rose-300 border border-rose-200 dark:border-rose-800 text-xs font-bold">
                      <AlertCircle className="w-3.5 h-3.5 text-rose-500" />
                      <span>{t('teacherLive.statusCancelled', 'ملغاة')}</span>
                    </span>
                  )}
                </div>
                <h2 className="text-2xl font-extrabold text-slate-900 dark:text-slate-100 leading-snug">
                  {sessionTitle}
                </h2>
                <div className="flex flex-wrap items-center gap-x-5 gap-y-2 text-xs text-slate-500 dark:text-slate-400 font-medium pt-1">
                  <div className="flex items-center gap-1.5">
                    <Calendar className="w-4 h-4 text-[#0f7a6c]" />
                    <span>{formatSessionDate(session.date || session.scheduledDate || session.startTime, isRtl)}</span>
                  </div>
                  <div className="flex items-center gap-1.5">
                    <Clock className="w-4 h-4 text-[#0f7a6c]" />
                    <span>
                      {formatSessionTime(session.startTime)}
                      {session.endTime && ` - ${formatSessionTime(session.endTime)}`}
                    </span>
                  </div>
                  {session.duration && (
                    <div className="flex items-center gap-1.5">
                      <span className="w-1.5 h-1.5 rounded-full bg-slate-300 dark:bg-slate-600" />
                      <span>
                        {t('teacherLive.durationMinutes', '{{duration}} دقيقة', { duration: session.duration })}
                      </span>
                    </div>
                  )}
                </div>
              </div>
              {showCountdown && startDateTime && (
                <div className="bg-slate-50 dark:bg-slate-800/80 p-4 rounded-2xl border border-slate-200/80 dark:border-slate-700/80 shadow-xs">
                  <CountdownTimer
                    targetDateTime={startDateTime}
                    onTimeReached={() => refetch()}
                  />
                </div>
              )}
            </div>
            {/* Audio & Camera Device Pre-check Banner */}
            <div className="bg-slate-50 dark:bg-slate-800/60 rounded-2xl p-4 sm:p-5 border border-slate-200/80 dark:border-slate-700/80 flex flex-wrap items-center justify-between gap-4">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-emerald-500/15 text-emerald-600 dark:text-emerald-400 flex items-center justify-center shrink-0">
                  <Sliders className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="font-extrabold text-sm text-slate-900 dark:text-white">
                    {isRtl ? 'فحص وتجهيز الصوت والكاميرا قبل بدء الحصة' : 'Audio & Camera Device Check'}
                  </h4>
                  <p className="text-xs text-slate-500 dark:text-slate-400 mt-0.5">
                    {isRtl ? 'تأكد من عمل الميكروفون وتدفق الكاميرا بوضوح قبل الدخول للجلسة' : 'Test your microphone and preview your camera before joining the live session'}
                  </p>
                </div>
              </div>
              <button
                type="button"
                onClick={() => setIsDeviceCheckOpen(true)}
                className="px-4 py-2.5 rounded-xl bg-slate-900 hover:bg-slate-800 dark:bg-slate-700 dark:hover:bg-slate-600 text-white text-xs font-bold transition-all shadow-sm flex items-center gap-2 cursor-pointer active:scale-95 border border-slate-700 dark:border-slate-600"
              >
                <Video className="w-3.5 h-3.5 text-blue-400" />
                <Mic className="w-3.5 h-3.5 text-emerald-400" />
                <span>{isRtl ? 'فحص وتجربة الكاميرا والمايك' : 'Test Camera & Mic'}</span>
              </button>
            </div>
            <div className="flex flex-wrap items-center justify-between gap-4 pt-2">
              <div className="flex flex-wrap items-center gap-3">
                <button
                  type="button"
                  onClick={handleStartSessionClick}
                  disabled={isCancelled || isStarting}
                  className={`px-7 py-3 rounded-2xl font-bold text-sm shadow-md transition-all flex items-center gap-2.5 ${
                    isCancelled || isStarting
                      ? 'bg-slate-200 dark:bg-slate-800 text-slate-400 cursor-not-allowed'
                      : 'bg-[#0f7a6c] hover:bg-[#0c6156] text-white shadow-[#0f7a6c]/25 hover:scale-[1.01]'
                  }`}
                >
                  {isStarting ? (
                    <Loader2 className="w-5 h-5 animate-spin" />
                  ) : (
                    <PlayCircle className="w-5 h-5" />
                  )}
                  <span>
                    {isStarting
                      ? t('teacherLive.startingSession', 'جاري بدء الجلسة...')
                      : t('teacherLive.startSessionButton', 'بدء الجلسة')}
                  </span>
                </button>
                <button
                  type="button"
                  onClick={() => setIsRescheduleOpen(true)}
                  disabled={isCompleted || isCancelled}
                  className={`px-5 py-3 rounded-2xl font-bold text-sm border transition-colors flex items-center gap-2 ${
                    isCompleted || isCancelled
                      ? 'border-slate-200 dark:border-slate-800 text-slate-400 cursor-not-allowed'
                      : 'border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 text-slate-700 dark:text-slate-200 hover:bg-slate-50 dark:hover:bg-slate-700'
                  }`}
                >
                  <CalendarClock className="w-4 h-4 text-amber-600 dark:text-amber-400" />
                  <span>{t('teacherLive.requestRescheduleButton', 'طلب تأجيل')}</span>
                </button>
              </div>
              <div className="text-xs text-slate-400 dark:text-slate-500 font-medium">
                {t('teacherLive.startSessionHint', 'الضغط على بدء الجلسة ينقلك مباشرة إلى شاشة البث المباشر')}
              </div>
            </div>
          </div>
          <AttendanceList session={session} />
        </>
      )}
      <RescheduleSessionModal
        isOpen={isRescheduleOpen}
        onClose={() => setIsRescheduleOpen(false)}
        session={session}
      />
      <DevicePreviewModal
        isOpen={isDeviceCheckOpen}
        onClose={() => setIsDeviceCheckOpen(false)}
        isRtl={isRtl}
      />
    </div>
  );
}

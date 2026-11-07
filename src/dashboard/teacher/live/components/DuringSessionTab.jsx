import { useState, useEffect, useMemo } from 'react';
import { useTranslation } from 'react-i18next';
import { useQuery } from '@tanstack/react-query';
import {
  Award,
  Star,
  CheckCircle,
  ChevronLeft,
  ChevronRight,
  Radio,
  Video,
} from 'lucide-react';
import { teacherSessionsApi } from '@/shared/services/api/teacherSessionsApi';
import { useAuth } from '@/shared/context/useAuth.jsx';
import ZoomMeetingPlayer from '@/shared/components/ZoomMeetingPlayer.jsx';
import InSessionRewardModal from './InSessionRewardModal';
import InSessionEvaluationModal from './InSessionEvaluationModal';

function ElapsedTimer() {
  const [elapsedSeconds, setElapsedSeconds] = useState(0);
  useEffect(() => {
    const timerInterval = setInterval(() => {
      setElapsedSeconds((prev) => prev + 1);
    }, 1000);
    return () => clearInterval(timerInterval);
  }, []);
  const hours = Math.floor(elapsedSeconds / 3600);
  const minutes = Math.floor((elapsedSeconds % 3600) / 60);
  const seconds = elapsedSeconds % 60;
  const formatted = hours > 0
    ? `${String(hours).padStart(2, '0')}:${String(minutes).padStart(2, '0')}:${String(seconds).padStart(2, '0')}`
    : `${String(minutes).padStart(2, '0')}:${String(seconds).padStart(2, '0')}`;
  return (
    <span className="font-mono text-sm font-extrabold text-emerald-600 dark:text-emerald-400">
      {formatted}
    </span>
  );
}

export default function DuringSessionTab({ session, onEndSession, onBackToBefore }) {
  const { t, i18n } = useTranslation();
  const { user } = useAuth();
  const isRtl = i18n?.language?.startsWith('ar') ?? true;
  const [isRewardModalOpen, setIsRewardModalOpen] = useState(false);
  const [isEvalModalOpen, setIsEvalModalOpen] = useState(false);
  const sessionId = session?.id || session?._id;

  const initialCachedJoin = useMemo(() => {
    try {
      const stored = sessionStorage.getItem('teacher_live_joindata');
      if (stored) {
        const parsed = JSON.parse(stored);
        if (parsed && (parsed.meetingId || parsed.joinUrl || parsed.startUrl)) return parsed;
      }
    } catch {}
    return null;
  }, []);

  const { data: joinDataRes, isLoading, refetch, isFetching } = useQuery({
    queryKey: ['teacher-session-join', sessionId],
    queryFn: () => teacherSessionsApi.fetchSessionJoinData(sessionId),
    enabled: Boolean(sessionId),
    initialData: initialCachedJoin,
    staleTime: 5 * 60 * 1000,
    gcTime: 15 * 60 * 1000,
    refetchOnMount: false,
    refetchOnWindowFocus: false,
    refetchOnReconnect: false,
  });

  const joinData = useMemo(() => {
    const raw = joinDataRes?.data || joinDataRes || initialCachedJoin;
    if (raw) {
      try {
        sessionStorage.setItem('teacher_live_joindata', JSON.stringify(raw));
      } catch {}
    }
    return raw;
  }, [joinDataRes, initialCachedJoin]);
  const sessionTitle = typeof session?.title === 'object' && session?.title !== null
    ? (isRtl ? session.title.ar : session.title.en)
    : (session?.title || session?.subject || t('teacherLive.liveSessionTitle', 'حصة مباشرة'));
  const groupName = typeof session?.group === 'object' && session?.group !== null
    ? (isRtl ? session.group.name?.ar || session.group.name : session.group.name?.en || session.group.name)
    : (session?.groupName || session?.group || '-');

  const teacherName = (() => {
    if (!user) return 'المعلم';
    if (typeof user.name === 'object' && user.name !== null) {
      return (isRtl ? user.name.ar || user.name.en : user.name.en || user.name.ar) || 'المعلم';
    }
    return user.name || user.fullName || 'المعلم';
  })();
  return (
    <div className="space-y-6">
      <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-3xl p-5 shadow-sm space-y-4">
        <div className="flex flex-wrap items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <button
              type="button"
              onClick={onBackToBefore}
              className="p-2 rounded-xl text-slate-400 hover:text-slate-600 hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors cursor-pointer"
              title={t('teacherLive.backToBeforeSession', 'الرجوع إلى تفاصيل الحصة')}
            >
              {isRtl ? <ChevronRight className="w-5 h-5" /> : <ChevronLeft className="w-5 h-5" />}
            </button>
            <div>
              <div className="flex items-center gap-2">
                <span className="text-xs font-bold px-2.5 py-0.5 rounded-full bg-[#0f7a6c]/10 text-[#0f7a6c] dark:text-emerald-400">
                  {groupName}
                </span>
                <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-red-50 dark:bg-red-950/40 text-red-600 dark:text-red-400 border border-red-200 dark:border-red-800 text-xs font-bold">
                  <span className="w-2 h-2 rounded-full bg-red-500 animate-pulse" />
                  <span>{t('teacherLive.liveNow', 'مباشر الآن')}</span>
                </span>
              </div>
              <h2 className="text-xl font-extrabold text-slate-900 dark:text-slate-100 mt-1">
                {sessionTitle}
              </h2>
            </div>
          </div>
          <div className="flex flex-wrap items-center gap-2.5">
            {joinData?.startUrl && (
              <a
                href={joinData.startUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="px-4 py-2.5 rounded-xl bg-blue-600 hover:bg-blue-700 text-white text-xs font-black shadow-md shadow-blue-600/30 transition-all flex items-center gap-2 cursor-pointer active:scale-95"
                title={t('teacherLive.startAsHostApp', 'بدء الحصة كمعلم ومضيف رئيسي عبر تطبيق Zoom')}
              >
                <Video className="w-4 h-4" />
                <span>{t('teacherLive.startAsHostApp', '🚀 بدء البث في Zoom (Host)')}</span>
              </a>
            )}
            <div className="flex items-center gap-2 px-3 py-2 rounded-xl bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700">
              <span className="text-xs text-slate-500 dark:text-slate-400">
                {t('teacherLive.elapsedTime', 'المدة المنقضية')}:
              </span>
              <ElapsedTimer />
            </div>
            <button
              type="button"
              onClick={() => setIsRewardModalOpen(true)}
              className="px-4 py-2.5 rounded-xl bg-amber-500 hover:bg-amber-600 text-white text-xs font-bold shadow-md shadow-amber-500/20 transition-all flex items-center gap-1.5 cursor-pointer"
            >
              <Award className="w-4 h-4" />
              <span>{t('teacherLive.rewardStudentButton', 'منح مكافأة')}</span>
            </button>
            <button
              type="button"
              onClick={() => setIsEvalModalOpen(true)}
              className="px-4 py-2.5 rounded-xl bg-[#0f7a6c] hover:bg-[#0c6156] text-white text-xs font-bold shadow-md shadow-[#0f7a6c]/20 transition-all flex items-center gap-1.5 cursor-pointer"
            >
              <Star className="w-4 h-4 fill-current" />
              <span>{t('teacherLive.evaluateStudentButton', 'تقييم طالب')}</span>
            </button>
            <button
              type="button"
              onClick={() => onEndSession(session)}
              className="px-4 py-2.5 rounded-xl bg-slate-800 hover:bg-slate-900 text-white text-xs font-bold shadow-md transition-all flex items-center gap-1.5 cursor-pointer"
            >
              <CheckCircle className="w-4 h-4 text-emerald-400" />
              <span>{t('teacherLive.endSessionAndEvaluate', 'إنهاء الحصة والانتقال للتقييم')}</span>
            </button>
          </div>
        </div>
      </div>
      {isLoading ? (
        <div className="bg-[#080d14] rounded-3xl min-h-[560px] border border-slate-800 flex flex-col items-center justify-center p-8 text-center text-white">
          <div className="w-12 h-12 border-4 border-blue-500/20 border-t-blue-500 rounded-full animate-spin mb-4" />
          <p className="font-bold text-base">{t('teacherLive.loadingSessionData', 'جاري تجهيز بيانات البث المباشر...')}</p>
          <p className="text-xs text-slate-400 mt-1">{t('teacherLive.connectingToZoom', 'يتم الاتصال بخوادم Zoom وتوليد مفاتيح الحصة')}</p>
        </div>
      ) : joinData && joinData.canJoinNow === false ? (
        <div className="bg-[#080d14] rounded-3xl min-h-[560px] border border-slate-800 flex flex-col items-center justify-center p-8 text-center text-white space-y-4">
          <div className="w-16 h-16 rounded-2xl bg-amber-500/15 text-amber-400 flex items-center justify-center">
            <Radio className="w-8 h-8 animate-pulse" />
          </div>
          <h3 className="text-lg font-extrabold text-white">
            {t('teacherLive.cannotJoinNow', 'الحصة غير متاحة للانضمام الآن')}
          </h3>
          <p className="text-xs sm:text-sm text-slate-400 max-w-md">
            {joinData?.message || t('teacherLive.cannotJoinNowHint', 'لم يبدأ وقت الحصة المسموح به بعد، أو أن الحصة قد انتهت.')}
          </p>
          <div className="flex items-center gap-3 pt-2">
            <button
              type="button"
              onClick={onBackToBefore}
              className="px-5 py-2.5 rounded-xl bg-slate-800 hover:bg-slate-700 text-white text-xs font-bold transition-colors cursor-pointer"
            >
              {t('teacherLive.backToBeforeSession', 'الرجوع إلى تفاصيل الحصة')}
            </button>
            <button
              type="button"
              onClick={() => refetch()}
              disabled={isFetching}
              className="px-5 py-2.5 rounded-xl bg-[#0f7a6c] hover:bg-[#0c6156] text-white text-xs font-bold transition-colors cursor-pointer disabled:opacity-50"
            >
              {t('teacherLive.retryJoin', 'إعادة المحاولة')}
            </button>
          </div>
        </div>
      ) : (
        <ZoomMeetingPlayer
          meetingId={joinData?.meetingId || joinData?.meetingNumber || joinData?.zoom?.id || session?.meetingId || session?.meetingNumber || session?.zoom?.id}
          passcode={joinData?.passcode || joinData?.password || joinData?.zoom?.password || session?.passcode || session?.password || session?.zoom?.password}
          role={joinData?.role !== undefined ? joinData.role : 1}
          sdkSignature={joinData?.sdkSignature || session?.sdkSignature || joinData?.signature || session?.signature}
          startUrl={joinData?.startUrl || joinData?.start_url || joinData?.zoomStartUrl || joinData?.zoom_start_url || joinData?.zoom?.start_url || joinData?.zoom?.startUrl || session?.startUrl || session?.start_url || session?.zoomStartUrl || session?.zoom_start_url || session?.zoom?.start_url || session?.zoom?.startUrl || session?.meetingUrl}
          joinUrl={joinData?.joinUrl || joinData?.join_url || joinData?.zoomJoinUrl || joinData?.zoom_join_url || joinData?.zoom?.join_url || joinData?.zoom?.joinUrl || session?.joinUrl || session?.join_url || session?.zoomJoinUrl || session?.zoom_join_url || session?.zoom?.join_url || session?.zoom?.joinUrl || session?.meetingUrl}
          zakToken={joinData?.zak || joinData?.zakToken || joinData?.zak_token || joinData?.zoom?.zak || session?.zak || session?.zakToken || (() => {
            try {
              const url = joinData?.startUrl || session?.startUrl;
              return url ? new URL(url).searchParams.get('zak') : null;
            } catch {
              return null;
            }
          })()}
          leaveUrl="/teacher/sessions"
          userName={teacherName}
          userEmail={import.meta.env?.VITE_ZOOM_EMAIL || import.meta.env?.NEXT_PUBLIC_ZOOM_EMAIL || 'manartalezzacademy1@gmail.com'}
          sessionTitle={sessionTitle}
          className="w-full"
          onRefreshJoinData={refetch}
          isRefreshing={isFetching}
        />
      )}
      <InSessionRewardModal
        isOpen={isRewardModalOpen}
        onClose={() => setIsRewardModalOpen(false)}
        session={session}
      />
      <InSessionEvaluationModal
        isOpen={isEvalModalOpen}
        onClose={() => setIsEvalModalOpen(false)}
        session={session}
      />
    </div>
  );
}

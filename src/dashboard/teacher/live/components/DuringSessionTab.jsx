import { useState, useEffect, useMemo } from 'react';
import { useTranslation } from 'react-i18next';
import { useQuery } from '@tanstack/react-query';
import {
  Award,
  Star,
  CheckCircle,
  ChevronLeft,
  ChevronRight,
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
  const { data: joinDataRes, isLoading } = useQuery({
    queryKey: ['teacher-session-join', sessionId],
    queryFn: () => teacherSessionsApi.fetchSessionJoinData(sessionId),
    enabled: Boolean(sessionId),
  });
  const joinData = useMemo(() => {
    if (!joinDataRes) return null;
    return joinDataRes.data || joinDataRes;
  }, [joinDataRes]);
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
  const teacherEmail = user?.email || '';
  return (
    <div className="space-y-6">
      {/* Top Header Card: Session metadata & quick actions */}
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
            <div className="flex items-center gap-2 px-3 py-2 rounded-xl bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700">
              <span className="text-xs text-slate-500 dark:text-slate-400">
                {t('teacherLive.elapsedTime', 'المدة المنقضية')}:
              </span>
              <ElapsedTimer />
            </div>
            {joinData?.startUrl && (
              <a
                href={joinData.startUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="px-4 py-2.5 rounded-xl bg-blue-600 hover:bg-blue-700 text-white text-xs font-bold shadow-md shadow-blue-500/20 transition-all flex items-center gap-1.5 cursor-pointer"
                title={t('teacherLive.startAsHostApp', 'بدء كمعلّم (Host)')}
              >
                <Video className="w-4 h-4" />
                <span>{t('teacherLive.startAsHostApp', 'بدء كمعلّم (Host)')}</span>
              </a>
            )}
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
      {/* Embedded Zoom Meeting Player Inside Live Screen */}
      {isLoading ? (
        <div className="bg-[#080d14] rounded-3xl min-h-[560px] border border-slate-800 flex flex-col items-center justify-center p-8 text-center text-white">
          <div className="w-12 h-12 border-4 border-blue-500/20 border-t-blue-500 rounded-full animate-spin mb-4" />
          <p className="font-bold text-base">{t('teacherLive.loadingSessionData', 'جاري تجهيز بيانات البث المباشر...')}</p>
          <p className="text-xs text-slate-400 mt-1">{t('teacherLive.connectingToZoom', 'يتم الاتصال بخوادم Zoom وتوليد مفاتيح الحصة')}</p>
        </div>
      ) : (
        <ZoomMeetingPlayer
          meetingId={joinData?.meetingId || joinData?.meetingNumber || session?.meetingId}
          passcode={joinData?.passcode || joinData?.password || session?.passcode}
          role={joinData?.role !== undefined ? joinData.role : 1}
          sdkSignature={joinData?.sdkSignature || session?.sdkSignature}
          sdkKey={joinData?.sdkKey || import.meta.env?.VITE_ZOOM_SDK_KEY || import.meta.env?.NEXT_PUBLIC_ZOOM_SDK_KEY || 'O3n0tKuQ0WS9yk0N9JeqQ'}
          startUrl={joinData?.startUrl || session?.startUrl || session?.zoomStartUrl}
          joinUrl={joinData?.joinUrl || session?.joinUrl || session?.zoomJoinUrl}
          zakToken={joinData?.zak || joinData?.zakToken}
          leaveUrl="/teacher/sessions"
          userName={teacherName}
          userEmail={joinData?.userEmail || joinData?.hostEmail || 'manartalezzacademy1@gmail.com'}
          sessionTitle={sessionTitle}
          className="w-full"
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

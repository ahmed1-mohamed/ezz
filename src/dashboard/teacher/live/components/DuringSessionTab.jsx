import { useState, useEffect, useMemo } from 'react';
import { useTranslation } from 'react-i18next';
import { useQuery } from '@tanstack/react-query';
import {
  Video,
  ExternalLink,
  Award,
  Star,
  CheckCircle,
  Copy,
  Users,
  ShieldCheck,
  ChevronLeft,
  ChevronRight,
} from 'lucide-react';
import toast from 'react-hot-toast';
import { teacherSessionsApi } from '@/shared/services/api/teacherSessionsApi';
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
  const isRtl = i18n?.language?.startsWith('ar') ?? true;

  const [isRewardModalOpen, setIsRewardModalOpen] = useState(false);
  const [isEvalModalOpen, setIsEvalModalOpen] = useState(false);

  const sessionId = session?.id || session?._id;

  const { data: joinDataRes, isLoading, isError } = useQuery({
    queryKey: ['teacher-session-join', sessionId],
    queryFn: () => teacherSessionsApi.fetchSessionJoinData(sessionId),
    enabled: Boolean(sessionId),
  });

  const joinData = useMemo(() => {
    if (!joinDataRes) return null;
    return joinDataRes.data || joinDataRes;
  }, [joinDataRes]);

  const meetingUrl = joinData?.startUrl || joinData?.joinUrl || joinData?.url || session?.liveUrl || null;
  const meetingNumber = joinData?.meetingNumber || joinData?.meetingId || joinData?.id || '-';
  const meetingPassword = joinData?.password || joinData?.passcode || '-';

  const sessionTitle = typeof session?.title === 'object' && session?.title !== null
    ? (isRtl ? session.title.ar : session.title.en)
    : (session?.title || session?.subject || t('teacherLive.liveSessionTitle', 'حصة مباشرة'));
  const groupName = typeof session?.group === 'object' && session?.group !== null
    ? (isRtl ? session.group.name?.ar || session.group.name : session.group.name?.en || session.group.name)
    : (session?.groupName || session?.group || '-');

  const studentsCount = useMemo(() => {
    if (Array.isArray(session?.attendance)) return session.attendance.length;
    if (Array.isArray(session?.students)) return session.students.length;
    if (Array.isArray(session?.group?.students)) return session.group.students.length;
    return 0;
  }, [session]);

  const handleCopyMeetingInfo = () => {
    const textToCopy = `Meeting ID: ${meetingNumber}\nPasscode: ${meetingPassword}${meetingUrl ? `\nLink: ${meetingUrl}` : ''}`;
    navigator.clipboard.writeText(textToCopy);
    toast.success(t('teacherLive.copiedMeetingDetails', 'تم نسخ بيانات الاجتماع'));
  };

  const handleLaunchZoom = () => {
    if (meetingUrl) {
      window.open(meetingUrl, '_blank', 'noopener,noreferrer');
    } else {
      toast.error(t('teacherLive.noMeetingUrl', 'رابط الاجتماع غير متوفر حالياً'));
    }
  };

  return (
    <div className="space-y-6">
      <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-3xl p-5 shadow-sm space-y-4">
        <div className="flex flex-wrap items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <button
              type="button"
              onClick={onBackToBefore}
              className="p-2 rounded-xl text-slate-400 hover:text-slate-600 hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors"
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

            <button
              type="button"
              onClick={() => setIsRewardModalOpen(true)}
              className="px-4 py-2.5 rounded-xl bg-amber-500 hover:bg-amber-600 text-white text-xs font-bold shadow-md shadow-amber-500/20 transition-all flex items-center gap-1.5"
            >
              <Award className="w-4 h-4" />
              <span>{t('teacherLive.rewardStudentButton', 'منح مكافأة')}</span>
            </button>

            <button
              type="button"
              onClick={() => setIsEvalModalOpen(true)}
              className="px-4 py-2.5 rounded-xl bg-[#0f7a6c] hover:bg-[#0c6156] text-white text-xs font-bold shadow-md shadow-[#0f7a6c]/20 transition-all flex items-center gap-1.5"
            >
              <Star className="w-4 h-4 fill-current" />
              <span>{t('teacherLive.evaluateStudentButton', 'تقييم طالب')}</span>
            </button>

            <button
              type="button"
              onClick={() => onEndSession(session)}
              className="px-4 py-2.5 rounded-xl bg-slate-800 hover:bg-slate-900 text-white text-xs font-bold shadow-md transition-all flex items-center gap-1.5"
            >
              <CheckCircle className="w-4 h-4 text-emerald-400" />
              <span>{t('teacherLive.endSessionAndEvaluate', 'إنهاء الحصة والانتقال للتقييم')}</span>
            </button>
          </div>
        </div>
      </div>

      <div className="bg-[#0b131e] rounded-3xl overflow-hidden shadow-xl border border-slate-800 text-white p-6 sm:p-10 space-y-6">
        <div className="flex flex-wrap items-center justify-between gap-4 border-b border-slate-800 pb-5">
          <div className="flex items-center gap-3">
            <div className="w-12 h-12 rounded-2xl bg-blue-500/20 text-blue-400 flex items-center justify-center">
              <Video className="w-6 h-6" />
            </div>
            <div>
              <h3 className="font-bold text-lg text-white">
                {t('teacherLive.zoomSessionActiveTitle', 'جلسة البث المباشر (Zoom)')}
              </h3>
              <p className="text-xs text-slate-400">
                {t('teacherLive.zoomSessionSubtitle', 'متصل بنظام إدارة الحصص المباشرة والـ Zoom SDK')}
              </p>
            </div>
          </div>

          <div className="flex items-center gap-2">
            <button
              type="button"
              onClick={handleCopyMeetingInfo}
              className="px-3.5 py-2 rounded-xl bg-white/10 hover:bg-white/20 text-slate-200 text-xs font-bold transition-colors flex items-center gap-1.5"
            >
              <Copy className="w-3.5 h-3.5" />
              <span>{t('teacherLive.copyDetails', 'نسخ البيانات')}</span>
            </button>
            {meetingUrl && (
              <button
                type="button"
                onClick={handleLaunchZoom}
                className="px-5 py-2 rounded-xl bg-blue-600 hover:bg-blue-700 text-white text-xs font-bold shadow-md transition-colors flex items-center gap-1.5"
              >
                <ExternalLink className="w-3.5 h-3.5" />
                <span>{t('teacherLive.openZoomApp', 'فتح في تطبيق Zoom')}</span>
              </button>
            )}
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
          <div className="p-4 rounded-2xl bg-white/5 border border-white/10 space-y-1">
            <span className="text-[11px] text-slate-400 block">
              {t('teacherLive.meetingNumberLabel', 'معرف الاجتماع (Meeting ID)')}
            </span>
            <span className="font-mono text-base font-bold text-white block">
              {meetingNumber}
            </span>
          </div>

          <div className="p-4 rounded-2xl bg-white/5 border border-white/10 space-y-1">
            <span className="text-[11px] text-slate-400 block">
              {t('teacherLive.passcodeLabel', 'رمز المرور (Passcode)')}
            </span>
            <span className="font-mono text-base font-bold text-emerald-400 block">
              {meetingPassword}
            </span>
          </div>

          <div className="p-4 rounded-2xl bg-white/5 border border-white/10 space-y-1">
            <span className="text-[11px] text-slate-400 block">
              {t('teacherLive.studentsCountLabel', 'الطلاب المسجلون')}
            </span>
            <span className="font-bold text-base text-white flex items-center gap-1.5">
              <Users className="w-4 h-4 text-[#0f7a6c]" />
              <span>{studentsCount}</span>
            </span>
          </div>
        </div>

        <div className="relative rounded-2xl bg-[#080d14] border border-white/10 p-8 sm:p-14 text-center space-y-4">
          <div className="w-16 h-16 rounded-full bg-blue-500/10 text-blue-400 flex items-center justify-center mx-auto ring-4 ring-blue-500/20 animate-pulse">
            <ShieldCheck className="w-8 h-8" />
          </div>
          <div className="space-y-1 max-w-md mx-auto">
            <h4 className="font-bold text-base text-white">
              {t('teacherLive.zoomSdkReadyTitle', 'البث المباشر يعمل كمعلّم رئيسي')}
            </h4>
            <p className="text-xs text-slate-400 leading-relaxed">
              {t('teacherLive.zoomSdkReadyDesc', 'يمكنك فتح البث مباشرة عبر تطبيق Zoom أو المتصفح. تظل هذه الصفحة نشطة لتمكينك من منح المكافآت وتقييم أداء الطلاب في أي وقت أثناء الشرح دون انقطاع.')}
            </p>
          </div>
          {meetingUrl && (
            <button
              type="button"
              onClick={handleLaunchZoom}
              className="px-7 py-3 rounded-2xl bg-[#0f7a6c] hover:bg-[#0c6156] text-white font-bold text-sm shadow-lg shadow-[#0f7a6c]/30 transition-all inline-flex items-center gap-2"
            >
              <ExternalLink className="w-4 h-4" />
              <span>{t('teacherLive.startTeachingZoom', 'بدء التدريس عبر Zoom')}</span>
            </button>
          )}
        </div>
      </div>

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

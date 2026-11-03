import React, { useState, useEffect, useMemo } from 'react';
import { Video, Calendar, Clock, Users, User, PlayCircle, ArrowRight, CheckCircle2, AlertCircle } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import { useNavigate } from 'react-router-dom';
import { checkCanJoinSession, showSessionJoinAlert } from '@/shared/utils/sessionTiming.js';

const SECOND_IN_MS = 1000;
const MINUTE_IN_MS = SECOND_IN_MS * 60;
const HOUR_IN_MS = MINUTE_IN_MS * 60;
const DAY_IN_MS = HOUR_IN_MS * 24;

function calculateTimeLeft(target) {
  if (!target) return { totalMs: 0, days: 0, hours: 0, minutes: 0, seconds: 0 };
  const targetMs = new Date(target).getTime();
  if (Number.isNaN(targetMs)) return { totalMs: 0, days: 0, hours: 0, minutes: 0, seconds: 0 };
  const diffMs = Math.max(0, targetMs - Date.now());
  const days = Math.floor(diffMs / DAY_IN_MS);
  const hours = Math.floor((diffMs % DAY_IN_MS) / HOUR_IN_MS);
  const minutes = Math.floor((diffMs % HOUR_IN_MS) / MINUTE_IN_MS);
  const seconds = Math.floor((diffMs % MINUTE_IN_MS) / SECOND_IN_MS);
  return { totalMs: diffMs, days, hours, minutes, seconds };
}

function resolveName(nameField, isRtl) {
  if (typeof nameField === 'object' && nameField !== null) {
    return (isRtl ? nameField.ar || nameField.en : nameField.en || nameField.ar) || '';
  }
  return String(nameField || '');
}

export default React.memo(function StudentBeforeSessionView({
  session,
  onJoinSession,
  isJoining = false,
}) {
  const { t, i18n } = useTranslation();
  const navigate = useNavigate();
  const isRtl = i18n?.language?.startsWith('ar') ?? true;
  const targetDateStr = session?.date && session?.startTime
    ? `${session.date}T${session.startTime}`
    : session?.startTime || session?.date || null;
  const [timeLeft, setTimeLeft] = useState(() => calculateTimeLeft(targetDateStr));
  useEffect(() => {
    if (!targetDateStr) return;
    const timerInterval = setInterval(() => {
      setTimeLeft(calculateTimeLeft(targetDateStr));
    }, SECOND_IN_MS);
    return () => clearInterval(timerInterval);
  }, [targetDateStr]);
  const joinCheck = useMemo(() => {
    return checkCanJoinSession(session);
  }, [session]);
  const handleJoinClick = () => {
    const check = checkCanJoinSession(session);
    if (!check.canJoin) {
      showSessionJoinAlert(check.message, isRtl);
      return;
    }
    onJoinSession(session);
  };
  if (!session) {
    return (
      <div className="bg-white dark:bg-slate-900 rounded-[28px] border border-slate-100 dark:border-slate-800 p-8 sm:p-12 text-center max-w-lg mx-auto shadow-xs space-y-4">
        <div className="w-16 h-16 bg-slate-100 dark:bg-slate-800 text-[#00594C] dark:text-emerald-400 rounded-3xl flex items-center justify-center mx-auto shadow-xs">
          <Video size={32} />
        </div>
        <h3 className="text-lg sm:text-xl font-black text-slate-800 dark:text-white">
          {t('studentDashboard.live.noActiveSession', 'لا توجد حصة قادمة مجدولة حالياً')}
        </h3>
        <p className="text-xs sm:text-sm text-slate-400 font-semibold max-w-sm mx-auto">
          {t('studentDashboard.live.checkSchedule', 'يرجى مراجعة جدول الحصص الأسبوعي للاطلاع على مواعيد البث القادمة')}
        </p>
        <button
          type="button"
          onClick={() => navigate('/dashboard/student/schedule')}
          className="inline-flex items-center gap-2 px-6 py-3 bg-[#00594C] hover:bg-[#00483d] text-white rounded-2xl text-xs sm:text-sm font-black transition-all shadow-xs cursor-pointer"
        >
          <span>{t('studentDashboard.live.goToSchedule', 'الذهاب إلى الجدول')}</span>
          <ArrowRight size={15} className={isRtl ? 'rotate-180' : ''} />
        </button>
      </div>
    );
  }
  const groupName = resolveName(session.group, isRtl) || session.groupName || '-';
  const teacherName = resolveName(session.teacher, isRtl) || session.teacherName || '-';
  const sessionTitle = resolveName(session.title, isRtl) || session.className || `${t('studentDashboard.live.sessionNumber', 'الحصة')} #${session.sessionNumber || 1}`;
  const isLive = session.status === 'live' || session.status === 'in_progress' || session.status === 'جارية' || Boolean(session.canJoinNow);
  const timeRange = session.timeRange || (session.startTime ? `${session.startTime} ${session.endTime ? `- ${session.endTime}` : ''}` : '-');
  const duration = session.durationTime || session.durationMinutes || session.duration || 60;
  const isTimeReached = timeLeft.totalMs <= 0 || isLive;
  return (
    <div className="space-y-6 max-w-4xl mx-auto" dir={isRtl ? 'rtl' : 'ltr'}>
      <div className="bg-white dark:bg-slate-900 rounded-[28px] border border-slate-100 dark:border-slate-800 p-6 sm:p-8 shadow-xs text-start space-y-6">
        <div className="flex flex-wrap items-center justify-between gap-3 pb-4 border-b border-slate-100 dark:border-slate-800">
          <div className="flex items-center gap-3">
            <div className="w-11 h-11 rounded-2xl bg-[#00594C]/10 text-[#00594C] dark:bg-emerald-950/40 dark:text-emerald-400 flex items-center justify-center shrink-0">
              <Video size={22} />
            </div>
            <div>
              <span className="text-[11px] font-bold text-slate-400 dark:text-slate-500 uppercase tracking-wide">
                {t('studentDashboard.live.nextSessionTitle', 'الحصة القادمة')}
              </span>
              <h2 className="text-xl font-black text-slate-800 dark:text-white leading-tight">
                {sessionTitle}
              </h2>
            </div>
          </div>
          {isLive ? (
            <span className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full text-xs font-black bg-rose-50 text-rose-600 dark:bg-rose-950/40 dark:text-rose-400 border border-rose-200/60 dark:border-rose-900/40">
              <span className="w-2 h-2 rounded-full bg-rose-500 animate-pulse" />
              <span>{t('studentDashboard.live.sessionLiveNow', 'الحصة جارية الآن')}</span>
            </span>
          ) : (
            <span className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full text-xs font-black bg-emerald-50 text-[#00594C] dark:bg-emerald-950/40 dark:text-emerald-300 border border-emerald-200/60 dark:border-emerald-900/40">
              <CheckCircle2 size={13} />
              <span>{session.status || t('studentDashboard.live.sessionScheduled', 'حصة مجدولة')}</span>
            </span>
          )}
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div className="p-4 rounded-2xl bg-slate-50 dark:bg-slate-800/60 flex items-center gap-3.5 text-start">
            <div className="w-10 h-10 rounded-xl bg-white dark:bg-slate-700 text-[#00594C] dark:text-emerald-300 flex items-center justify-center shadow-xs shrink-0">
              <Users size={18} />
            </div>
            <div className="min-w-0">
              <span className="text-[11px] font-bold text-slate-400 dark:text-slate-500 block">
                {t('studentDashboard.live.groupNameLabel', 'المجموعة الدراسية')}
              </span>
              <span className="text-sm font-black text-slate-800 dark:text-white truncate block">
                {groupName}
              </span>
            </div>
          </div>
          <div className="p-4 rounded-2xl bg-slate-50 dark:bg-slate-800/60 flex items-center gap-3.5 text-start">
            <div className="w-10 h-10 rounded-xl bg-white dark:bg-slate-700 text-[#00594C] dark:text-emerald-300 flex items-center justify-center shadow-xs shrink-0">
              <User size={18} />
            </div>
            <div className="min-w-0">
              <span className="text-[11px] font-bold text-slate-400 dark:text-slate-500 block">
                {t('studentDashboard.live.teacherNameLabel', 'المعلم')}
              </span>
              <span className="text-sm font-black text-slate-800 dark:text-white truncate block">
                {teacherName}
              </span>
            </div>
          </div>
          <div className="p-4 rounded-2xl bg-slate-50 dark:bg-slate-800/60 flex items-center gap-3.5 text-start">
            <div className="w-10 h-10 rounded-xl bg-white dark:bg-slate-700 text-[#00594C] dark:text-emerald-300 flex items-center justify-center shadow-xs shrink-0">
              <Calendar size={18} />
            </div>
            <div className="min-w-0">
              <span className="text-[11px] font-bold text-slate-400 dark:text-slate-500 block">
                {t('studentDashboard.live.sessionTimeLabel', 'تاريخ وموعد الحصة')}
              </span>
              <span className="text-sm font-black text-slate-800 dark:text-white truncate block">
                {session.day ? `${session.day} • ` : ''}{session.date || ''} ({timeRange})
              </span>
            </div>
          </div>
          <div className="p-4 rounded-2xl bg-slate-50 dark:bg-slate-800/60 flex items-center gap-3.5 text-start">
            <div className="w-10 h-10 rounded-xl bg-white dark:bg-slate-700 text-[#00594C] dark:text-emerald-300 flex items-center justify-center shadow-xs shrink-0">
              <Clock size={18} />
            </div>
            <div className="min-w-0">
              <span className="text-[11px] font-bold text-slate-400 dark:text-slate-500 block">
                {t('studentDashboard.live.sessionDurationLabel', 'مدة الحصة')}
              </span>
              <span className="text-sm font-black text-slate-800 dark:text-white truncate block">
                {duration} {t('studentDashboard.live.minutes', 'دقيقة')}
              </span>
            </div>
          </div>
        </div>
        {!isLive && !isTimeReached && (
          <div className="p-5 rounded-2xl bg-[#f0f7f5] dark:bg-emerald-950/20 border border-[#00594C]/20 text-center space-y-3">
            <span className="text-xs font-bold text-[#00594C] dark:text-emerald-300 block">
              {t('teacherLive.countdownTitle', 'الوقت المتبقي لبدء الحصة')}
            </span>
            <div className="flex items-center justify-center gap-2 font-mono">
              {timeLeft.days > 0 && (
                <div className="flex flex-col items-center bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-xl px-3 py-1.5 min-w-[55px] shadow-xs">
                  <span className="text-lg font-black text-[#00594C] dark:text-emerald-300">
                    {String(timeLeft.days).padStart(2, '0')}
                  </span>
                  <span className="text-[10px] font-bold text-slate-400">{t('teacherLive.days', 'يوم')}</span>
                </div>
              )}
              <div className="flex flex-col items-center bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-xl px-3 py-1.5 min-w-[55px] shadow-xs">
                <span className="text-lg font-black text-[#00594C] dark:text-emerald-300">
                  {String(timeLeft.hours).padStart(2, '0')}
                </span>
                <span className="text-[10px] font-bold text-slate-400">{t('teacherLive.hours', 'ساعة')}</span>
              </div>
              <span className="text-lg font-black text-[#00594C]">:</span>
              <div className="flex flex-col items-center bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-xl px-3 py-1.5 min-w-[55px] shadow-xs">
                <span className="text-lg font-black text-[#00594C] dark:text-emerald-300">
                  {String(timeLeft.minutes).padStart(2, '0')}
                </span>
                <span className="text-[10px] font-bold text-slate-400">{t('teacherLive.minutes', 'دقيقة')}</span>
              </div>
              <span className="text-lg font-black text-[#00594C]">:</span>
              <div className="flex flex-col items-center bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-xl px-3 py-1.5 min-w-[55px] shadow-xs">
                <span className="text-lg font-black text-[#00594C] dark:text-emerald-300">
                  {String(timeLeft.seconds).padStart(2, '0')}
                </span>
                <span className="text-[10px] font-bold text-slate-400">{t('teacherLive.seconds', 'ثانية')}</span>
              </div>
            </div>
          </div>
        )}
        {!isLive && !joinCheck.canJoin && joinCheck.isTooEarly && (
          <div className="flex items-center gap-3 p-4 rounded-2xl bg-amber-50 dark:bg-amber-950/30 border border-amber-200/80 dark:border-amber-800/70 text-amber-800 dark:text-amber-200 text-xs sm:text-sm font-semibold">
            <AlertCircle className="w-5 h-5 text-amber-600 dark:text-amber-400 shrink-0" />
            <span>{joinCheck.message}</span>
          </div>
        )}
        {isLive && (
          <div className="p-4 rounded-2xl bg-emerald-50 dark:bg-emerald-950/30 border border-emerald-200 dark:border-emerald-800/60 flex items-center gap-3 text-xs font-bold text-emerald-800 dark:text-emerald-300">
            <span className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-ping shrink-0" />
            <span>{t('teacherLive.sessionStartingNow', 'حان موعد بدء الحصة الآن! يمكنك الانضمام مباشرة والمشاركة مع المعلم')}</span>
          </div>
        )}
        <div className="pt-2">
          <button
            type="button"
            onClick={handleJoinClick}
            disabled={isJoining}
            className={`w-full py-4 rounded-2xl font-black text-sm sm:text-base flex items-center justify-center gap-2.5 transition-all shadow-sm cursor-pointer disabled:opacity-50 ${
              !joinCheck.canJoin && joinCheck.isTooEarly
                ? 'bg-slate-700 hover:bg-slate-800 text-white shadow-slate-700/20'
                : 'bg-[#00594C] hover:bg-[#00483d] active:scale-[0.99] text-white'
            }`}
          >
            <PlayCircle size={20} />
            <span>
              {isJoining
                ? t('studentDashboard.live.joining', 'جاري الاتصال بالحصة...')
                : t('studentDashboard.live.joinNow', 'الانضمام للحصة الآن')}
            </span>
          </button>
        </div>
      </div>
    </div>
  );
});

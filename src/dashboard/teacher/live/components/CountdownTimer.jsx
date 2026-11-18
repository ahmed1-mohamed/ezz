import { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { Clock } from 'lucide-react';

const SECOND_IN_MS = 1000;
const MINUTE_IN_MS = SECOND_IN_MS * 60;
const HOUR_IN_MS = MINUTE_IN_MS * 60;
const DAY_IN_MS = HOUR_IN_MS * 24;

function calculateTimeLeft(target) {
  if (!target) return null;
  const targetMs = new Date(target).getTime();
  if (!Number.isFinite(targetMs)) return null;

  const diffMs = Math.max(0, targetMs - Date.now());
  return {
    totalMs: diffMs,
    days: Math.floor(diffMs / DAY_IN_MS),
    hours: Math.floor((diffMs % DAY_IN_MS) / HOUR_IN_MS),
    minutes: Math.floor((diffMs % HOUR_IN_MS) / MINUTE_IN_MS),
    seconds: Math.floor((diffMs % MINUTE_IN_MS) / SECOND_IN_MS),
  };
}

export default function CountdownTimer({ targetDateTime, onTimeReached }) {
  const { t } = useTranslation();
  const [timeLeft, setTimeLeft] = useState(() => calculateTimeLeft(targetDateTime));

  useEffect(() => {
    let timerInterval;
    let hasReachedTarget = false;

    const updateCountdown = () => {
      const remaining = calculateTimeLeft(targetDateTime);
      setTimeLeft(remaining);

      if (remaining && remaining.totalMs <= 0 && !hasReachedTarget) {
        hasReachedTarget = true;
        if (timerInterval) clearInterval(timerInterval);
        onTimeReached?.();
      }
    };

    updateCountdown();
    if (calculateTimeLeft(targetDateTime)?.totalMs > 0) {
      timerInterval = setInterval(updateCountdown, SECOND_IN_MS);
    }

    return () => {
      if (timerInterval) clearInterval(timerInterval);
    };
  }, [targetDateTime, onTimeReached]);

  if (!timeLeft) return null;
  if (timeLeft.totalMs <= 0) {
    return (
      <div className="flex items-center gap-2 px-4 py-2 bg-emerald-50 dark:bg-emerald-950/40 border border-emerald-200 dark:border-emerald-800 rounded-xl text-emerald-700 dark:text-emerald-300 font-bold text-sm">
        <span className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-ping" />
        <span>{t('teacherLive.sessionStartingNow', 'حان موعد بدء الحصة الآن')}</span>
      </div>
    );
  }

  return (
    <div className="flex flex-col items-center sm:items-start gap-1.5">
      <div className="flex items-center gap-1.5 text-xs font-semibold text-slate-500 dark:text-slate-400">
        <Clock className="w-3.5 h-3.5 text-[#0f7a6c]" />
        <span>{t('teacherLive.countdownTitle', 'الوقت المتبقي لبدء الحصة')}</span>
      </div>
      <div className="flex items-center gap-2 font-mono">
        {timeLeft.days > 0 && (
          <div className="flex flex-col items-center bg-slate-100 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-lg px-2.5 py-1 min-w-[50px]">
            <span className="text-lg font-extrabold text-[#0f7a6c] leading-tight">{String(timeLeft.days).padStart(2, '0')}</span>
            <span className="text-[10px] text-slate-500 dark:text-slate-400">{t('teacherLive.days', 'يوم')}</span>
          </div>
        )}
        <div className="flex flex-col items-center bg-slate-100 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-lg px-2.5 py-1 min-w-[50px]">
          <span className="text-lg font-extrabold text-[#0f7a6c] leading-tight">{String(timeLeft.hours).padStart(2, '0')}</span>
          <span className="text-[10px] text-slate-500 dark:text-slate-400">{t('teacherLive.hours', 'ساعة')}</span>
        </div>
        <span className="text-base font-bold text-slate-400">:</span>
        <div className="flex flex-col items-center bg-slate-100 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-lg px-2.5 py-1 min-w-[50px]">
          <span className="text-lg font-extrabold text-[#0f7a6c] leading-tight">{String(timeLeft.minutes).padStart(2, '0')}</span>
          <span className="text-[10px] text-slate-500 dark:text-slate-400">{t('teacherLive.minutes', 'دقيقة')}</span>
        </div>
        <span className="text-base font-bold text-slate-400">:</span>
        <div className="flex flex-col items-center bg-emerald-50 dark:bg-emerald-950/40 border border-emerald-200 dark:border-emerald-800 rounded-lg px-2.5 py-1 min-w-[50px]">
          <span className="text-lg font-extrabold text-emerald-600 dark:text-emerald-400">{String(timeLeft.seconds).padStart(2, '0')}</span>
          <span className="text-[10px] text-emerald-600 dark:text-emerald-400">{t('teacherLive.seconds', 'ثانية')}</span>
        </div>
      </div>
    </div>
  );
}

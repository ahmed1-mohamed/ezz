import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import {
  Maximize2,
  Mic,
  MicOff,
  Hand,
  X,
  Video,
  MessageSquare,
  Clock,
  Users,
} from 'lucide-react';
import { useTranslation } from 'react-i18next';


const mockSession = {
  title: 'حصة التجويد - سورة البقرة',
  titleEn: 'Tajweed - Surah Al-Baqarah',
  teacher: 'الشيخ أحمد السيد',
  teacherEn: 'Sheikh Ahmed Al-Sayed',
  subject: 'أحكام النون الساكنة والتنوين',
  subjectEn: 'Rules of Noon Sakinah and Tanween',
  startTime: '4:00 م',
  endTime: '5:00 م',
  durationMinutes: 60,
  studentsPresent: 4,
  raisedHands: 2,
  messages: 4,
  liveUrl: null,
};

function SessionTimer() {
  const [seconds, setSeconds] = useState(45 * 60 + 23);

  useEffect(() => {
    const interval = setInterval(() => {
      setSeconds((prev) => prev + 1);
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  const minutes = Math.floor(seconds / 60);
  const secs = seconds % 60;
  const formatted = `${String(minutes).padStart(2, '0')}:${String(secs).padStart(2, '0')}`;

  return (
    <span className="font-mono text-sm font-bold text-slate-700 dark:text-slate-200">
      {formatted}
    </span>
  );
}

function StatCard({ value, label, icon: Icon, bgColor, iconColor }) {
  return (
    <div className={`flex flex-col items-center justify-center rounded-2xl p-4 ${bgColor}`}>
      <div className="flex items-center gap-1.5 mb-1">
        <span className="text-xl font-extrabold text-slate-800 dark:text-slate-100">{value}</span>
        <Icon size={16} className={iconColor} />
      </div>
      <p className="text-xs text-slate-500 dark:text-slate-400">{label}</p>
    </div>
  );
}

export default function StudentLive() {
  const { t, i18n } = useTranslation();
  const isRtl = i18n.language.startsWith('ar');
  const [isMicOn, setIsMicOn] = useState(true);
  const [isHandRaised, setIsHandRaised] = useState(false);

  const session = mockSession;
  const title = isRtl ? session.title : session.titleEn;
  const teacher = isRtl ? session.teacher : session.teacherEn;
  const subject = isRtl ? session.subject : session.subjectEn;

  return (
    <div
      className="min-h-screen bg-[#f3f7f6] dark:bg-slate-900 p-4 sm:p-6"
      dir={isRtl ? 'rtl' : 'ltr'}
    >
      <motion.div
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4 }}
        className="max-w-7xl mx-auto space-y-4"
      >

        <div className="bg-white dark:bg-slate-800 rounded-2xl px-5 py-3.5 shadow-sm border border-slate-100 dark:border-slate-700 flex items-center justify-between gap-3">
          <div className="text-end">
            <h1 className="text-base font-bold text-slate-800 dark:text-slate-100 leading-tight">
              {title}
            </h1>
            <p className="text-xs text-slate-500 dark:text-slate-400 mt-0.5">{teacher}</p>
          </div>
          <div className="flex items-center gap-2.5 shrink-0">
            <SessionTimer />
            <span className="flex items-center gap-1.5 bg-red-100 text-red-600 text-xs font-bold px-3 py-1.5 rounded-full">
              <span className="w-1.5 h-1.5 rounded-full bg-red-500 animate-pulse" />
              {t('studentDashboard.schedule.liveNow')}
            </span>
          </div>
        </div>

        <div className="relative bg-[#0d1f2d] rounded-2xl overflow-hidden shadow-xl" style={{ aspectRatio: '16/9' }}>

          <button className="absolute top-3 start-3 z-10 w-8 h-8 bg-white/10 hover:bg-white/20 rounded-lg flex items-center justify-center transition-colors">
            <Maximize2 size={16} className="text-white" />
          </button>

          <div className="absolute top-3 end-3 z-10">
            <span className="flex items-center gap-1.5 bg-red-500 text-white text-xs font-bold px-3 py-1.5 rounded-full shadow-md">
              <span className="w-1.5 h-1.5 rounded-full bg-white animate-pulse" />
              {t('studentDashboard.schedule.liveNow')}
            </span>
          </div>

          {session.liveUrl ? (

            <iframe
              src={session.liveUrl}
              title="live-stream"
              className="w-full h-full border-0"
              allow="camera; microphone; fullscreen"
              allowFullScreen
            />
          ) : (
            <div className="flex flex-col items-center justify-center h-full gap-3">
              <div className="w-16 h-16 bg-[#0f7a6c] rounded-full flex items-center justify-center shadow-lg shadow-emerald-900/50">
                <Video size={28} className="text-white" />
              </div>
              <div className="text-center">
                <p className="text-white font-bold text-base">{teacher}</p>
                <p className="text-slate-400 text-xs mt-1">
                  {t('studentDashboard.live.liveVideoStream')}
                </p>
              </div>
            </div>
          )}

          <div className="absolute bottom-14 start-3 flex flex-col items-center gap-1">
            <div className="w-16 h-12 bg-slate-700/80 rounded-xl flex items-center justify-center border border-slate-600/50">
              <div className="w-8 h-8 bg-[#0f7a6c] rounded-full flex items-center justify-center">
                <span className="text-white text-sm font-bold">أ</span>
              </div>
            </div>
            <span className="text-white text-[10px] font-medium">
              {t('studentDashboard.live.you')}
            </span>
          </div>

          <div className="absolute bottom-0 inset-x-0 bg-gradient-to-t from-black/60 to-transparent px-4 py-3 flex items-center justify-between">
            <div className="flex items-center gap-2">
              <button className="w-9 h-9 rounded-full bg-red-500 hover:bg-red-600 flex items-center justify-center transition-colors shadow-md">
                <X size={16} className="text-white" />
              </button>
            </div>

            <div className="flex items-center gap-2">
              <button
                onClick={() => setIsHandRaised(!isHandRaised)}
                className={`w-9 h-9 rounded-full flex items-center justify-center transition-colors shadow-md ${isHandRaised
                  ? 'bg-amber-400 hover:bg-amber-500'
                  : 'bg-white/20 hover:bg-white/30'
                  }`}
              >
                <Hand size={16} className="text-white" />
              </button>
              <button
                onClick={() => setIsMicOn(!isMicOn)}
                className={`w-9 h-9 rounded-full flex items-center justify-center transition-colors shadow-md ${isMicOn
                  ? 'bg-white/20 hover:bg-white/30'
                  : 'bg-red-500 hover:bg-red-600'
                  }`}
              >
                {isMicOn
                  ? <Mic size={16} className="text-white" />
                  : <MicOff size={16} className="text-white" />
                }
              </button>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-4 gap-3">
          <StatCard
            value={session.messages}
            label={t('studentDashboard.live.messages')}
            icon={MessageSquare}
            bgColor="bg-white dark:bg-slate-800 border border-slate-100 dark:border-slate-700"
            iconColor="text-slate-400"
          />
          <StatCard
            value={session.raisedHands}
            label={t('studentDashboard.live.raiseHand')}
            icon={Hand}
            bgColor="bg-amber-50 dark:bg-amber-900/20 border border-amber-100 dark:border-amber-800/40"
            iconColor="text-amber-500"
          />
          <StatCard
            value={session.durationMinutes}
            label={t('studentDashboard.recorded.duration')}
            icon={Clock}
            bgColor="bg-blue-50 dark:bg-blue-900/20 border border-blue-100 dark:border-blue-800/40"
            iconColor="text-blue-500"
          />
          <StatCard
            value={session.studentsPresent}
            label={t('studentDashboard.teachers.students')}
            icon={Users}
            bgColor="bg-white dark:bg-slate-800 border border-slate-100 dark:border-slate-700"
            iconColor="text-slate-400"
          />
        </div>

        <div className="bg-white dark:bg-slate-800 rounded-2xl px-5 py-4 shadow-sm border border-slate-100 dark:border-slate-700">
          <div className="flex flex-wrap items-center gap-x-6 gap-y-2 justify-end">
            <div className="flex items-center gap-2 text-sm text-slate-600 dark:text-slate-300">
              <span className="w-2 h-2 rounded-full bg-[#0f7a6c] shrink-0" />
              <span className="font-medium text-slate-500 dark:text-slate-400">
                {t('studentDashboard.live.topic')}
              </span>
              <span className="font-bold text-slate-800 dark:text-slate-100">{subject}</span>
            </div>
            <div className="flex items-center gap-3 text-xs text-slate-500 dark:text-slate-400">
              <span>
                {t('studentDashboard.live.started')}{' '}
                <span className="font-bold text-slate-700 dark:text-slate-200">{session.startTime}</span>
              </span>
              <span className="text-slate-300 dark:text-slate-600">|</span>
              <span>
                {t('studentDashboard.live.ends')}{' '}
                <span className="font-bold text-slate-700 dark:text-slate-200">{session.endTime}</span>
              </span>
            </div>
          </div>
        </div>

      </motion.div>
    </div>
  );
}

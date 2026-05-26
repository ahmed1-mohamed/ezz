import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  Calendar,
  ChevronLeft,
  ChevronRight,
  Clock,
  User,
  Play,
  Lock,
  X,
  BookOpen,
} from 'lucide-react';
import { useTranslation } from 'react-i18next';


const WEEK_DAYS_AR = ['الأحد', 'الاثنين', 'الثلاثاء', 'الأربعاء', 'الخميس', 'الجمعة', 'السبت'];
const WEEK_DAYS_EN = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
const MONTHS_AR = ['يناير', 'فبراير', 'مارس', 'أبريل', 'مايو', 'يونيو', 'يوليو', 'أغسطس', 'سبتمبر', 'أكتوبر', 'نوفمبر', 'ديسمبر'];
const MONTHS_EN = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];

const THIRTY_DAYS_MS = 30 * 24 * 60 * 60 * 1000;

const TODAY = new Date('2026-04-12');

function daysAgo(n) {
  const d = new Date(TODAY);
  d.setDate(d.getDate() - n);
  return d;
}

const RECORDINGS_BY_DAY = {
  '2026-04-12': [
    {
      id: 1,
      startTime: '4:00 م',
      endTime: '5:00 م',
      title: 'حصة التجويد - سورة البقرة (الآيات 1-10)',
      titleEn: 'Tajweed - Surah Al-Baqarah (Ayahs 1-10)',
      subject: 'القرآن الكريم',
      subjectEn: 'Holy Quran',
      teacher: 'الشيخ أحمد السيد',
      teacherEn: 'Sheikh Ahmed Al-Sayed',
      duration: '58:42',
      recordedAt: daysAgo(1),
      streamUrl: null,
    },
    {
      id: 2,
      startTime: '4:00 م',
      endTime: '5:00 م',
      title: 'حصة التجويد - سورة البقرة (الآيات 1-10)',
      titleEn: 'Tajweed - Surah Al-Baqarah (Ayahs 1-10)',
      subject: 'القرآن الكريم',
      subjectEn: 'Holy Quran',
      teacher: 'الشيخ أحمد السيد',
      teacherEn: 'Sheikh Ahmed Al-Sayed',
      duration: '58:42',
      recordedAt: daysAgo(32),
      streamUrl: null,
    },
  ],
  '2026-04-10': [
    {
      id: 3,
      startTime: '7:00 م',
      endTime: '8:00 م',
      title: 'البلاغة والأدب - الجلسة الأولى',
      titleEn: 'Rhetoric & Literature - Session 1',
      subject: 'اللغة العربية',
      subjectEn: 'Arabic Language',
      teacher: 'الدكتور محمد الأمين',
      teacherEn: 'Dr. Mohammed Al-Amin',
      duration: '47:15',
      recordedAt: daysAgo(5),
      streamUrl: null,
    },
  ],
};


function toDateKey(date) {
  return date.toISOString().split('T')[0];
}

function buildWeek(baseDate) {
  const days = [];
  const start = new Date(baseDate);
  start.setDate(start.getDate() - start.getDay());
  for (let i = 0; i < 7; i++) {
    const d = new Date(start);
    d.setDate(start.getDate() + i);
    days.push(d);
  }
  return days;
}

function hasRecordings(dateKey) {
  return (RECORDINGS_BY_DAY[dateKey] ?? []).length > 0;
}

function isExpired(recordedAt) {
  return Date.now() - recordedAt.getTime() > THIRTY_DAYS_MS;
}

function daysRemaining(recordedAt) {
  const elapsed = Date.now() - recordedAt.getTime();
  const remaining = Math.ceil((THIRTY_DAYS_MS - elapsed) / (24 * 60 * 60 * 1000));
  return remaining;
}

// ── Video Player Modal ────────────────────────────────────

function VideoModal({ recording, onClose, isRtl }) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 z-50 bg-black/80 flex items-center justify-center p-4"
      onClick={onClose}
    >
      <motion.div
        initial={{ scale: 0.92, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        exit={{ scale: 0.92, opacity: 0 }}
        transition={{ duration: 0.25 }}
        className="w-full max-w-7xl bg-[#0d1f2d] rounded-2xl overflow-hidden shadow-2xl"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex items-center justify-between px-5 py-3.5 border-b border-white/10" dir={isRtl ? 'rtl' : 'ltr'}>
          <div>
            <p className="text-white font-bold text-sm">{isRtl ? recording.title : recording.titleEn}</p>
            <p className="text-slate-400 text-xs mt-0.5">{isRtl ? recording.teacher : recording.teacherEn}</p>
          </div>
          <button
            onClick={onClose}
            className="w-8 h-8 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center transition-colors"
          >
            <X size={16} className="text-white" />
          </button>
        </div>

        <div className="relative bg-[#0d1f2d]" style={{ aspectRatio: '16/9' }}>
          <div
            className="absolute inset-0 z-10"
            onContextMenu={(e) => e.preventDefault()}
          />

          {recording.streamUrl ? (

            <video
              src={recording.streamUrl}
              controls
              autoPlay
              controlsList="nodownload"
              disablePictureInPicture
              className="w-full h-full object-cover"
              onContextMenu={(e) => e.preventDefault()}
            />
          ) : (
            <div className="flex flex-col items-center justify-center h-full gap-3">
              <div className="w-16 h-16 bg-[#0f7a6c] rounded-full flex items-center justify-center shadow-lg shadow-emerald-900/50">
                <Play size={26} className="text-white ms-1" />
              </div>
              <p className="text-slate-400 text-sm">
                {isRtl ? 'سيتم عرض التسجيل من الخادم' : 'Recording will stream from server'}
              </p>
            </div>
          )}
        </div>

        <div className="flex items-center justify-center gap-2 py-3 bg-black/40">
          <Lock size={12} className="text-amber-400" />
          <p className="text-amber-400 text-xs font-medium">
            {isRtl ? 'هذا التسجيل للمشاهدة فقط — التحميل غير مسموح' : 'For viewing only — downloading is not permitted'}
          </p>
        </div>
      </motion.div>
    </motion.div>
  );
}


function RecordingRow({ recording, onWatch, isRtl }) {
  const expired = isExpired(recording.recordedAt);
  const remaining = expired ? 0 : daysRemaining(recording.recordedAt);
  const title = isRtl ? recording.title : recording.titleEn;
  const subject = isRtl ? recording.subject : recording.subjectEn;
  const teacher = isRtl ? recording.teacher : recording.teacherEn;

  return (
    <motion.div
      initial={{ opacity: 0, y: 8 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3 }}
      className={`grid grid-cols-1 sm:grid-cols-[auto_1fr_1.4fr_0.8fr_0.8fr_auto] gap-3 sm:gap-4 items-center px-5 py-4 ${expired ? 'opacity-55' : ''
        }`}
    >
      <div className="relative w-16 h-12 bg-slate-700 dark:bg-slate-900 rounded-xl overflow-hidden shrink-0 flex items-center justify-center">
        <div className="w-8 h-8 bg-[#0f7a6c] rounded-full flex items-center justify-center">
          <span className="text-white text-sm font-bold">أ</span>
        </div>
        {expired && (
          <div className="absolute inset-0 bg-black/60 flex items-center justify-center">
            <Lock size={14} className="text-red-400" />
          </div>
        )}
      </div>

      <div className="flex items-center gap-2 text-slate-600 dark:text-slate-300">
        <Clock size={14} className="text-[#0f7a6c] dark:text-emerald-400 shrink-0" />
        <div>
          <p className="text-xs font-bold">{recording.startTime}</p>
          <p className="text-[10px] text-slate-400">- {recording.endTime}</p>
        </div>
      </div>

      <div>
        <p className="text-sm font-bold text-slate-800 dark:text-slate-100 mb-1 line-clamp-1">{title}</p>
        <span className="inline-block bg-emerald-50 dark:bg-emerald-900/20 text-[#0f7a6c] dark:text-emerald-400 text-[10px] font-bold px-2.5 py-0.5 rounded-full">
          {subject}
        </span>
      </div>

      <div className="flex items-center gap-1.5 text-slate-500 dark:text-slate-400">
        <User size={13} className="shrink-0" />
        <span className="text-xs font-medium">{teacher}</span>
      </div>

      <div className="text-sm font-bold text-slate-700 dark:text-slate-200 font-mono">
        {recording.duration}
      </div>

      <div className="flex flex-col items-start gap-1">
        {expired ? (
          <span className="flex items-center gap-1.5 text-xs text-red-500 dark:text-red-400 font-bold bg-red-50 dark:bg-red-900/20 px-3 py-1.5 rounded-xl">
            <Lock size={11} />
            {isRtl ? 'انتهت الصلاحية' : 'Expired'}
          </span>
        ) : (
          <>
            <button
              onClick={() => onWatch(recording)}
              className="flex items-center gap-1.5 bg-[#0f7a6c] hover:bg-[#0c6156] active:scale-95 text-white text-xs font-bold px-3.5 py-2 rounded-xl transition-all duration-200 shadow-sm shadow-emerald-200/50"
            >
              <Play size={12} className="ms-0.5" />
              {isRtl ? 'مشاهدة' : 'Watch'}
            </button>
            <p className="text-[9px] text-slate-400 dark:text-slate-500 ps-1">
              {isRtl ? `متاح لـ ${remaining} يوم` : `${remaining}d left`}
            </p>
          </>
        )}
      </div>
    </motion.div>
  );
}


export default function StudentRecorded() {
  const { i18n } = useTranslation();
  const isRtl = i18n.language.startsWith('ar');

  const [selectedDate, setSelectedDate] = useState(TODAY);
  const [weekBase, setWeekBase] = useState(TODAY);
  const [activeRecording, setActiveRecording] = useState(null);

  const weekDays = buildWeek(weekBase);
  const selectedKey = toDateKey(selectedDate);
  const recordings = RECORDINGS_BY_DAY[selectedKey] ?? [];

  const monthLabel = isRtl
    ? `${MONTHS_AR[weekDays[0].getMonth()]} ${weekDays[0].getFullYear()}`
    : `${MONTHS_EN[weekDays[0].getMonth()]} ${weekDays[0].getFullYear()}`;

  const dayLabel = isRtl
    ? `${WEEK_DAYS_AR[selectedDate.getDay()]} ${selectedDate.getDate()} ${MONTHS_AR[selectedDate.getMonth()]}`
    : `${WEEK_DAYS_EN[selectedDate.getDay()]} ${selectedDate.getDate()} ${MONTHS_EN[selectedDate.getMonth()]}`;

  function prevWeek() {
    const d = new Date(weekBase);
    d.setDate(d.getDate() - 7);
    setWeekBase(d);
  }

  function nextWeek() {
    const d = new Date(weekBase);
    d.setDate(d.getDate() + 7);
    setWeekBase(d);
  }

  return (
    <>
      <div className="min-h-screen bg-[#f3f7f6] dark:bg-slate-900 p-4 sm:p-6" dir={isRtl ? 'rtl' : 'ltr'}>
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
          className="max-w-7xl mx-auto space-y-5"
        >

          <div className="bg-white dark:bg-slate-800 rounded-2xl p-5 shadow-sm border border-slate-100 dark:border-slate-700">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-emerald-50 dark:bg-emerald-900/20 rounded-xl flex items-center justify-center shrink-0">
                  <Calendar size={20} className="text-[#0f7a6c] dark:text-emerald-400" />
                </div>
                <div>
                  <h1 className="text-xl font-bold text-slate-800 dark:text-slate-100">
                    {isRtl ? 'الحصص المسجلة' : 'Recorded Sessions'}
                  </h1>
                  <p className="text-xs text-slate-500 dark:text-slate-400 mt-0.5">
                    {isRtl ? 'اختر التاريخ لمشاهدة التسجيلات' : 'Select a date to view recordings'}
                  </p>
                </div>
              </div>
              <div className="hidden sm:flex items-center gap-2 bg-amber-50 dark:bg-amber-900/20 border border-amber-100 dark:border-amber-800/40 text-amber-700 dark:text-amber-400 text-xs font-bold px-3 py-2 rounded-xl">
                <Lock size={12} />
                {isRtl ? 'متاحة لمدة 30 يوماً · التحميل ممنوع' : 'Available 30 days · No downloads'}
              </div>
            </div>
          </div>

          <div className="bg-white dark:bg-slate-800 rounded-2xl p-5 shadow-sm border border-slate-100 dark:border-slate-700">
            <div className="flex items-center justify-between mb-5">
              <button
                onClick={prevWeek}
                className="w-8 h-8 rounded-full bg-slate-100 dark:bg-slate-700 flex items-center justify-center hover:bg-slate-200 dark:hover:bg-slate-600 transition-colors"
              >
                {isRtl
                  ? <ChevronRight size={16} className="text-slate-600 dark:text-slate-300" />
                  : <ChevronLeft size={16} className="text-slate-600 dark:text-slate-300" />}
              </button>
              <span className="text-sm font-bold text-slate-700 dark:text-slate-200">{monthLabel}</span>
              <button
                onClick={nextWeek}
                className="w-8 h-8 rounded-full bg-slate-100 dark:bg-slate-700 flex items-center justify-center hover:bg-slate-200 dark:hover:bg-slate-600 transition-colors"
              >
                {isRtl
                  ? <ChevronLeft size={16} className="text-slate-600 dark:text-slate-300" />
                  : <ChevronRight size={16} className="text-slate-600 dark:text-slate-300" />}
              </button>
            </div>

            <div className="grid grid-cols-7 gap-1.5">
              {weekDays.map((day) => {
                const key = toDateKey(day);
                const isSelected = key === selectedKey;
                const isToday = key === toDateKey(TODAY);
                const hasData = hasRecordings(key);

                return (
                  <button
                    key={key}
                    onClick={() => setSelectedDate(day)}
                    className={`flex flex-col items-center py-3 rounded-2xl transition-all duration-200 ${isSelected
                      ? 'bg-[#0f7a6c] text-white shadow-md shadow-emerald-200/50'
                      : isToday
                        ? 'bg-emerald-50 dark:bg-emerald-900/20 text-[#0f7a6c]'
                        : 'text-slate-600 dark:text-slate-400 hover:bg-slate-50 dark:hover:bg-slate-700'
                      }`}
                  >
                    <span className={`text-[10px] font-medium mb-1 ${isSelected ? 'text-white/80' : 'text-slate-400 dark:text-slate-500'}`}>
                      {isRtl ? WEEK_DAYS_AR[day.getDay()].slice(0, 3) : WEEK_DAYS_EN[day.getDay()]}
                    </span>
                    <span className="text-base font-bold leading-none">{day.getDate()}</span>
                    <span className={`mt-1.5 w-1.5 h-1.5 rounded-full ${hasData ? (isSelected ? 'bg-white/70' : 'bg-[#0f7a6c] dark:bg-emerald-400') : 'bg-transparent'}`} />
                  </button>
                );
              })}
            </div>
          </div>

          <div className="bg-white dark:bg-slate-800 rounded-2xl shadow-sm border border-slate-100 dark:border-slate-700 overflow-hidden">
            <div className="px-5 pt-5 pb-3 border-b border-slate-100 dark:border-slate-700">
              <h2 className="text-sm font-bold text-slate-700 dark:text-slate-200">
                {isRtl ? `تسجيلات يوم ${dayLabel}` : `Recordings — ${dayLabel}`}
              </h2>
            </div>

            {recordings.length === 0 ? (
              <div className="flex flex-col items-center justify-center py-16 px-6 text-center">
                <div className="w-14 h-14 bg-slate-50 dark:bg-slate-700 rounded-2xl flex items-center justify-center mb-3">
                  <BookOpen size={24} className="text-slate-400" />
                </div>
                <p className="text-sm font-medium text-slate-500 dark:text-slate-400">
                  {isRtl ? 'لا توجد تسجيلات في هذا اليوم' : 'No recordings on this day'}
                </p>
              </div>
            ) : (
              <>
                <div className="hidden sm:grid grid-cols-[auto_0.8fr_2fr_1.5fr_0.8fr_auto] gap-4 px-5 py-3 bg-slate-50 dark:bg-slate-700/50 text-xs font-bold text-slate-500 dark:text-slate-400 uppercase tracking-wide">
                  <span className="w-16" />
                  <span>{isRtl ? 'الوقت' : 'Time'}</span>
                  <span>{isRtl ? 'عنوان الحصة' : 'Session Title'}</span>
                  <span>{isRtl ? 'المعلم' : 'Teacher'}</span>
                  <span>{isRtl ? 'المدة' : 'Duration'}</span>
                  <span>{isRtl ? 'الإجراءات' : 'Actions'}</span>
                </div>

                <div className="divide-y divide-slate-100 dark:divide-slate-700">
                  {recordings.map((rec) => (
                    <RecordingRow
                      key={rec.id}
                      recording={rec}
                      isRtl={isRtl}
                      onWatch={setActiveRecording}
                    />
                  ))}
                </div>
              </>
            )}

            <div className="flex items-center justify-center gap-2 py-3 px-5 border-t border-slate-100 dark:border-slate-700 bg-slate-50/50 dark:bg-slate-700/20">
              <Lock size={11} className="text-slate-400 dark:text-slate-500" />
              <p className="text-[10px] text-slate-400 dark:text-slate-500">
                {isRtl
                  ? 'التسجيلات متاحة للمشاهدة لمدة 30 يوماً من تاريخ الحصة · التحميل محظور تماماً'
                  : 'Recordings are available for 30 days from session date · Downloading is strictly prohibited'}
              </p>
            </div>
          </div>
        </motion.div>
      </div>

      <AnimatePresence>
        {activeRecording && (
          <VideoModal
            recording={activeRecording}
            isRtl={isRtl}
            onClose={() => setActiveRecording(null)}
          />
        )}
      </AnimatePresence>
    </>
  );
}

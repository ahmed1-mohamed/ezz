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

const ARABIC_MONTHS = [
  'يناير',
  'فبراير',
  'مارس',
  'أبريل',
  'مايو',
  'يونيو',
  'يوليو',
  'أغسطس',
  'سبتمبر',
  'أكتوبر',
  'نوفمبر',
  'ديسمبر',
];

const ENGLISH_MONTHS = [
  'January',
  'February',
  'March',
  'April',
  'May',
  'June',
  'July',
  'August',
  'September',
  'October',
  'November',
  'December',
];

const ARABIC_DAYS = [
  'الأحد',
  'الإثنين',
  'الثلاثاء',
  'الأربعاء',
  'الخميس',
  'الجمعة',
  'السبت',
];

const ENGLISH_DAYS = [
  'Sunday',
  'Monday',
  'Tuesday',
  'Wednesday',
  'Thursday',
  'Friday',
  'Saturday',
];

const DEFAULT_WEEK_DAYS = [
  { dayNameAr: 'الخميس', dayNameEn: 'Thu', dateNumber: 9, dateKey: '2026-04-09' },
  { dayNameAr: 'الأربعاء', dayNameEn: 'Wed', dateNumber: 8, dateKey: '2026-04-08' },
  { dayNameAr: 'الجمعة', dayNameEn: 'Fri', dateNumber: 10, dateKey: '2026-04-10' },
  { dayNameAr: 'السبت', dayNameEn: 'Sat', dateNumber: 11, dateKey: '2026-04-11' },
  { dayNameAr: 'الأحد', dayNameEn: 'Sun', dateNumber: 12, dateKey: '2026-04-12' },
  { dayNameAr: 'الإثنين', dayNameEn: 'Mon', dateNumber: 13, dateKey: '2026-04-13' },
  { dayNameAr: 'الثلاثاء', dayNameEn: 'Tue', dateNumber: 14, dateKey: '2026-04-14' },
];

const RECORDINGS_DATA = {
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
      streamUrl: null,
    },
  ],
  '2026-04-11': [
    {
      id: 3,
      startTime: '6:00 م',
      endTime: '7:00 م',
      title: 'تفسير جزء عم - سورة النبأ',
      titleEn: 'Tafsir Juz Amma - Surah An-Naba',
      subject: 'الدراسات الإسلامية',
      subjectEn: 'Islamic Studies',
      teacher: 'الشيخ أحمد السيد',
      teacherEn: 'Sheikh Ahmed Al-Sayed',
      duration: '49:15',
      streamUrl: null,
    },
  ],
  '2026-04-10': [
    {
      id: 4,
      startTime: '5:00 م',
      endTime: '6:00 م',
      title: 'البلاغة والأدب - الجلسة الأولى',
      titleEn: 'Rhetoric & Literature - Session 1',
      subject: 'اللغة العربية',
      subjectEn: 'Arabic Language',
      teacher: 'الدكتور محمد الأمين',
      teacherEn: 'Dr. Mohammed Al-Amin',
      duration: '52:10',
      streamUrl: null,
    },
  ],
  '2026-04-09': [
    {
      id: 5,
      startTime: '4:30 م',
      endTime: '5:30 م',
      title: 'مراجعة أحكام النون الساكنة والتنوين',
      titleEn: 'Review of Noon Sakinah Rules',
      subject: 'القرآن الكريم',
      subjectEn: 'Holy Quran',
      teacher: 'الشيخ أحمد السيد',
      teacherEn: 'Sheikh Ahmed Al-Sayed',
      duration: '55:20',
      streamUrl: null,
    },
  ],
  '2026-04-08': [
    {
      id: 6,
      startTime: '3:00 م',
      endTime: '4:00 م',
      title: 'مدخل إلى علوم القرآن الكريم',
      titleEn: 'Introduction to Quranic Sciences',
      subject: 'القرآن الكريم',
      subjectEn: 'Holy Quran',
      teacher: 'الشيخ أحمد السيد',
      teacherEn: 'Sheikh Ahmed Al-Sayed',
      duration: '45:00',
      streamUrl: null,
    },
  ],
};

function formatDateToKey(targetDate) {
  const yearString = targetDate.getFullYear();
  const monthString = String(targetDate.getMonth() + 1).padStart(2, '0');
  const dayString = String(targetDate.getDate()).padStart(2, '0');
  return `${yearString}-${monthString}-${dayString}`;
}

function computeWeekDays(weekOffset) {
  if (weekOffset === 0) {
    return DEFAULT_WEEK_DAYS;
  }
  const baseDate = new Date(2026, 3, 12);
  baseDate.setDate(baseDate.getDate() + weekOffset * 7);
  const startDay = new Date(baseDate);
  startDay.setDate(startDay.getDate() - 3);
  return Array.from({ length: 7 }, (_, index) => {
    const current = new Date(startDay);
    current.setDate(startDay.getDate() + index);
    const dayIndex = current.getDay();
    return {
      dayNameAr: ARABIC_DAYS[dayIndex],
      dayNameEn: ENGLISH_DAYS[dayIndex].slice(0, 3),
      dateNumber: current.getDate(),
      dateKey: formatDateToKey(current),
    };
  });
}

function checkHasRecordings(dateKey) {
  const items = RECORDINGS_DATA[dateKey];
  return Array.isArray(items) && items.length > 0;
}

function formatHeaderDateTitle(selectedKey, isRtl) {
  const parts = selectedKey.split('-');
  const year = parseInt(parts[0], 10);
  const monthIndex = parseInt(parts[1], 10) - 1;
  const day = parseInt(parts[2], 10);
  const dateObj = new Date(year, monthIndex, day);
  const dayName = isRtl ? ARABIC_DAYS[dateObj.getDay()] : ENGLISH_DAYS[dateObj.getDay()];
  const monthName = isRtl ? ARABIC_MONTHS[monthIndex] : ENGLISH_MONTHS[monthIndex];
  return isRtl
    ? `تسجيلات يوم ${dayName} - ${day} ${monthName}`
    : `Recordings for ${dayName} - ${day} ${monthName}`;
}

function formatCalendarMonthHeader(weekDays, isRtl) {
  const sampleKey = weekDays[4]?.dateKey || weekDays[0]?.dateKey;
  const parts = sampleKey.split('-');
  const year = parts[0];
  const monthIndex = parseInt(parts[1], 10) - 1;
  const monthName = isRtl ? ARABIC_MONTHS[monthIndex] : ENGLISH_MONTHS[monthIndex];
  return `${monthName} ${year}`;
}

function VideoPlayerModal({ recording, onClose, isRtl, t }) {
  const title = isRtl ? recording.title : recording.titleEn;
  const teacher = isRtl ? recording.teacher : recording.teacherEn;
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 z-50 bg-black/80 backdrop-blur-sm flex items-center justify-center p-4"
      onClick={onClose}
    >
      <motion.div
        initial={{ scale: 0.94, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        exit={{ scale: 0.94, opacity: 0 }}
        transition={{ duration: 0.2 }}
        className="w-full max-w-4xl bg-[#0f172a] rounded-3xl overflow-hidden shadow-2xl border border-white/10"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex items-center justify-between px-6 py-4 border-b border-white/10" dir={isRtl ? 'rtl' : 'ltr'}>
          <div>
            <h3 className="text-white font-bold text-base sm:text-lg">{title}</h3>
            <p className="text-slate-400 text-xs sm:text-sm mt-0.5">{teacher}</p>
          </div>
          <button
            type="button"
            onClick={onClose}
            className="w-9 h-9 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center transition-colors cursor-pointer"
          >
            <X size={18} className="text-white" />
          </button>
        </div>
        <div className="relative bg-black" style={{ aspectRatio: '16/9' }}>
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
            <div className="flex flex-col items-center justify-center h-full gap-4 text-center px-4">
              <div className="w-16 h-16 bg-[#00594C] rounded-full flex items-center justify-center shadow-lg shadow-emerald-950/60">
                <Play size={28} className="text-white ms-1" />
              </div>
              <p className="text-slate-300 text-sm font-medium">
                {t('studentDashboard.recorded.streamSoon', 'سيتم تشغيل البث المباشر للتسجيل قريباً')}
              </p>
            </div>
          )}
        </div>
        <div className="flex items-center justify-center gap-2 py-3.5 bg-black/50 border-t border-white/5">
          <Lock size={14} className="text-amber-400" />
          <p className="text-amber-400 text-xs font-semibold">
            {t('studentDashboard.recorded.viewingOnly', 'هذا التسجيل للمشاهدة فقط — التحميل غير مسموح')}
          </p>
        </div>
      </motion.div>
    </motion.div>
  );
}

export default function StudentRecorded() {
  const { t, i18n } = useTranslation();
  const isRtl = i18n.language.startsWith('ar');
  const [selectedDateKey, setSelectedDateKey] = useState('2026-04-12');
  const [weekOffset, setWeekOffset] = useState(0);
  const [activeRecording, setActiveRecording] = useState(null);
  const weekDays = computeWeekDays(weekOffset);
  const currentRecordings = RECORDINGS_DATA[selectedDateKey] || [];
  const monthHeaderLabel = formatCalendarMonthHeader(weekDays, isRtl);
  const dateHeaderTitle = formatHeaderDateTitle(selectedDateKey, isRtl);
  function handleSelectDay(dayKey) {
    setSelectedDateKey(dayKey);
  }
  function handlePrevWeek() {
    setWeekOffset((current) => current - 1);
  }
  function handleNextWeek() {
    setWeekOffset((current) => current + 1);
  }
  function handleOpenRecording(item) {
    setActiveRecording(item);
  }
  function handleCloseRecording() {
    setActiveRecording(null);
  }
  return (
    <>
      <div className="min-h-screen bg-[#EEF4F2] dark:bg-slate-950 p-4 sm:p-6 lg:p-8" dir={isRtl ? 'rtl' : 'ltr'}>
        <div className="max-w-6xl mx-auto space-y-5">
          <div className="bg-white dark:bg-slate-900 rounded-3xl p-6 sm:px-8 sm:py-6 border border-slate-100 dark:border-slate-800 shadow-sm flex items-center justify-between">
            <div>
              <h1 className="text-xl sm:text-2xl font-black text-slate-900 dark:text-slate-100 tracking-tight">
                {t('studentDashboard.recorded.title', 'الحصص المسجلة')}
              </h1>
              <p className="text-xs sm:text-sm text-slate-400 dark:text-slate-500 mt-1 font-medium">
                {t('studentDashboard.recorded.selectDate', 'اختر التاريخ لمشاهدة التسجيلات')}
              </p>
            </div>
            <div className="text-[#00594C] dark:text-emerald-400">
              <Calendar size={28} strokeWidth={2} />
            </div>
          </div>
          <div className="bg-white dark:bg-slate-900 rounded-3xl p-5 sm:p-6 border border-slate-100 dark:border-slate-800 shadow-sm">
            <div className="flex items-center justify-between mb-5 px-1">
              <button
                type="button"
                onClick={isRtl ? handleNextWeek : handlePrevWeek}
                aria-label={isRtl ? 'Next Week' : 'Previous Week'}
                className="w-9 h-9 rounded-full bg-slate-50 dark:bg-slate-800 border border-slate-200/60 dark:border-slate-700 flex items-center justify-center text-slate-400 dark:text-slate-300 hover:text-slate-700 dark:hover:text-white hover:bg-slate-100 dark:hover:bg-slate-700 transition-colors cursor-pointer"
              >
                <ChevronLeft size={18} />
              </button>
              <span className="text-base sm:text-lg font-bold text-slate-800 dark:text-slate-100">
                {monthHeaderLabel}
              </span>
              <button
                type="button"
                onClick={isRtl ? handlePrevWeek : handleNextWeek}
                aria-label={isRtl ? 'Previous Week' : 'Next Week'}
                className="w-9 h-9 rounded-full bg-slate-50 dark:bg-slate-800 border border-slate-200/60 dark:border-slate-700 flex items-center justify-center text-slate-400 dark:text-slate-300 hover:text-slate-700 dark:hover:text-white hover:bg-slate-100 dark:hover:bg-slate-700 transition-colors cursor-pointer"
              >
                <ChevronRight size={18} />
              </button>
            </div>
            <div className="grid grid-cols-7 gap-2 sm:gap-3">
              {weekDays.map((dayItem) => {
                const isSelected = dayItem.dateKey === selectedDateKey;
                const hasDots = checkHasRecordings(dayItem.dateKey);
                const dayLabel = isRtl ? dayItem.dayNameAr : dayItem.dayNameEn;
                return (
                  <button
                    key={dayItem.dateKey}
                    type="button"
                    onClick={() => handleSelectDay(dayItem.dateKey)}
                    className={`py-3 sm:py-4 px-1 sm:px-2 rounded-2xl flex flex-col items-center justify-center transition-all cursor-pointer ${
                      isSelected
                        ? 'bg-[#3B82F6] text-white shadow-lg shadow-blue-500/25 border border-blue-400/20'
                        : 'bg-[#F8FAFC] dark:bg-slate-800/80 border border-slate-100 dark:border-slate-700/60 hover:bg-slate-100/70'
                    }`}
                  >
                    <span
                      className={`text-[11px] sm:text-xs font-medium mb-1 ${
                        isSelected ? 'text-white' : 'text-slate-400 dark:text-slate-400'
                      }`}
                    >
                      {dayLabel}
                    </span>
                    <span
                      className={`text-lg sm:text-xl font-extrabold ${
                        isSelected ? 'text-white' : 'text-slate-700 dark:text-slate-200'
                      }`}
                    >
                      {dayItem.dateNumber}
                    </span>
                    <span
                      className={`w-1.5 h-1.5 rounded-full mt-2 transition-opacity ${
                        hasDots && !isSelected
                          ? 'bg-[#3B82F6]'
                          : 'bg-transparent'
                      }`}
                    />
                  </button>
                );
              })}
            </div>
          </div>
          <div className="bg-white dark:bg-slate-900 rounded-3xl p-6 sm:p-8 border border-slate-100 dark:border-slate-800 shadow-sm">
            <h2 className="text-base sm:text-lg font-bold text-slate-900 dark:text-slate-100 mb-6">
              {dateHeaderTitle}
            </h2>
            {currentRecordings.length === 0 ? (
              <div className="flex flex-col items-center justify-center py-16 px-4 text-center">
                <div className="w-14 h-14 bg-slate-50 dark:bg-slate-800 rounded-2xl flex items-center justify-center mb-3 text-slate-400">
                  <BookOpen size={24} />
                </div>
                <p className="text-sm font-medium text-slate-500 dark:text-slate-400">
                  {t('studentDashboard.recorded.noRecordings', 'لا توجد تسجيلات في هذا اليوم')}
                </p>
              </div>
            ) : (
              <div className="overflow-x-auto">
                <table className="w-full text-start border-collapse">
                  <thead>
                    <tr className="border-b border-slate-100 dark:border-slate-800 text-xs font-bold text-slate-600 dark:text-slate-400">
                      <th className="pb-4 text-start font-bold">{t('studentDashboard.recorded.time', 'الوقت')}</th>
                      <th className="pb-4 text-start font-bold">{t('studentDashboard.recorded.sessionTitle', 'عنوان الحصة')}</th>
                      <th className="pb-4 text-start font-bold">{t('studentDashboard.recorded.teacher', 'المعلم')}</th>
                      <th className="pb-4 text-start font-bold">{t('studentDashboard.recorded.duration', 'المدة')}</th>
                      <th className="pb-4 text-start font-bold">{t('studentDashboard.recorded.actions', 'الإجراءات')}</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-100/80 dark:divide-slate-800/80">
                    {currentRecordings.map((recordingItem) => {
                      const sessionTitle = isRtl ? recordingItem.title : recordingItem.titleEn;
                      const sessionSubject = isRtl ? recordingItem.subject : recordingItem.subjectEn;
                      const teacherName = isRtl ? recordingItem.teacher : recordingItem.teacherEn;
                      return (
                        <tr key={recordingItem.id} className="group">
                          <td className="py-5 ps-0 pe-4 align-middle whitespace-nowrap">
                            <div className="flex items-center gap-2">
                              <span className="text-xs sm:text-sm font-bold text-slate-700 dark:text-slate-200">
                                {recordingItem.startTime} - {recordingItem.endTime}
                              </span>
                              <Clock size={16} className="text-[#3B82F6] shrink-0" />
                            </div>
                          </td>
                          <td className="py-5 px-4 align-middle">
                            <p className="text-xs sm:text-sm font-bold text-slate-800 dark:text-slate-100">
                              {sessionTitle}
                            </p>
                            <span className="inline-block mt-1 bg-[#EAF5F2] dark:bg-emerald-950/40 text-[#00594C] dark:text-emerald-400 text-xs font-bold px-3 py-0.5 rounded-full">
                              {sessionSubject}
                            </span>
                          </td>
                          <td className="py-5 px-4 align-middle whitespace-nowrap">
                            <div className="flex items-center gap-2 text-slate-600 dark:text-slate-300">
                              <User size={15} className="text-slate-400 shrink-0" />
                              <span className="text-xs sm:text-sm font-medium">{teacherName}</span>
                            </div>
                          </td>
                          <td className="py-5 px-4 align-middle whitespace-nowrap">
                            <span className="text-xs sm:text-sm font-bold text-slate-800 dark:text-slate-200 font-mono">
                              {recordingItem.duration}
                            </span>
                          </td>
                          <td className="py-5 ps-4 pe-0 align-middle whitespace-nowrap">
                            <button
                              type="button"
                              onClick={() => handleOpenRecording(recordingItem)}
                              className="bg-[#00594C] hover:bg-[#004742] active:scale-95 text-white text-xs sm:text-sm font-bold px-6 py-2 rounded-xl transition-all shadow-sm cursor-pointer"
                            >
                              {t('studentDashboard.recorded.watch', 'مشاهدة')}
                            </button>
                          </td>
                        </tr>
                      );
                    })}
                  </tbody>
                </table>
              </div>
            )}
          </div>
        </div>
      </div>
      <AnimatePresence>
        {activeRecording && (
          <VideoPlayerModal
            recording={activeRecording}
            isRtl={isRtl}
            t={t}
            onClose={handleCloseRecording}
          />
        )}
      </AnimatePresence>
    </>
  );
}


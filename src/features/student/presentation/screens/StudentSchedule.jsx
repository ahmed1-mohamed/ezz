import { useState } from 'react';
import { motion } from 'framer-motion';
import { Calendar, ChevronLeft, ChevronRight, Clock, User, Video } from 'lucide-react';
import { useTranslation } from 'react-i18next';

const SESSIONS_BY_DAY = {
  '2026-04-13': [],
  '2026-04-14': [
    {
      id: 101,
      startTime: '11:00 ص',
      endTime: '12:00 م',
      subject: 'علوم القرآن',
      teacher: 'الشيخ أحمد السيد',
      status: 'completed',
    },
  ],
  '2026-04-15': [
    {
      id: 1,
      startTime: '4:00 م',
      endTime: '5:00 م',
      subject: 'التجويد - أحكام النون الساكنة',
      teacher: 'الشيخ أحمد السيد',
      status: 'live',
    },
    {
      id: 2,
      startTime: '7:00 م',
      endTime: '8:00 م',
      subject: 'البلاغة والأدب',
      teacher: 'الشيخ أحمد السيد',
      status: 'live',
    },
  ],
  '2026-04-16': [
    {
      id: 3,
      startTime: '3:00 م',
      endTime: '4:00 م',
      subject: 'النحو والصرف',
      teacher: 'الدكتور محمد الأمين',
      status: 'upcoming',
    },
  ],
  '2026-04-17': [
    {
      id: 4,
      startTime: '5:00 م',
      endTime: '6:00 م',
      subject: 'حفظ سورة البقرة',
      teacher: 'الشيخ أحمد السيد',
      status: 'upcoming',
    },
  ],
  '2026-04-18': [],
  '2026-04-19': [],
};

const WEEK_DAYS_AR = ['الأحد', 'الاثنين', 'الثلاثاء', 'الأربعاء', 'الخميس', 'الجمعة', 'السبت'];
const WEEK_DAYS_EN = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
const MONTHS_AR = ['يناير', 'فبراير', 'مارس', 'أبريل', 'مايو', 'يونيو', 'يوليو', 'أغسطس', 'سبتمبر', 'أكتوبر', 'نوفمبر', 'ديسمبر'];
const MONTHS_EN = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];

function buildWeek(baseDate) {
  const days = [];
  const start = new Date(baseDate);
  const dayOfWeek = start.getDay();
  start.setDate(start.getDate() - dayOfWeek);
  for (let i = 0; i < 7; i++) {
    const d = new Date(start);
    d.setDate(start.getDate() + i);
    days.push(d);
  }
  return days;
}

function toDateKey(date) {
  return date.toISOString().split('T')[0];
}

function getStatusConfig(status) {
  switch (status) {
    case 'live':
      return { label: 'مباشر الآن', labelEn: 'Live Now', badgeClass: 'bg-red-100 text-red-600', dotClass: 'bg-red-500' };
    case 'upcoming':
      return { label: 'قادم', labelEn: 'Upcoming', badgeClass: 'bg-amber-100 text-amber-700', dotClass: 'bg-amber-400' };
    case 'completed':
      return { label: 'مكتمل', labelEn: 'Completed', badgeClass: 'bg-slate-100 text-slate-500', dotClass: 'bg-slate-400' };
    default:
      return { label: status, labelEn: status, badgeClass: 'bg-slate-100 text-slate-500', dotClass: 'bg-slate-400' };
  }
}

function hasSessions(dateKey) {
  return (SESSIONS_BY_DAY[dateKey] || []).length > 0;
}

export default function StudentSchedule() {
  const { t, i18n } = useTranslation();
  const isRtl = i18n.language.startsWith('ar');
  const today = new Date('2026-04-15');
  const [selectedDate, setSelectedDate] = useState(today);
  const [weekBase, setWeekBase] = useState(today);

  const weekDays = buildWeek(weekBase);
  const selectedKey = toDateKey(selectedDate);
  const sessions = SESSIONS_BY_DAY[selectedKey] || [];

  const monthLabel = isRtl
    ? `${MONTHS_AR[weekDays[0].getMonth()]} ${weekDays[0].getFullYear()}`
    : `${MONTHS_EN[weekDays[0].getMonth()]} ${weekDays[0].getFullYear()}`;

  const dayLabel = isRtl
    ? `${WEEK_DAYS_AR[selectedDate.getDay()]} ${selectedDate.getDate()} ${MONTHS_AR[selectedDate.getMonth()]}`
    : `${WEEK_DAYS_EN[selectedDate.getDay()]} ${selectedDate.getDate()} ${MONTHS_EN[selectedDate.getMonth()]}`;

  function goToPrevWeek() {
    const d = new Date(weekBase);
    d.setDate(d.getDate() - 7);
    setWeekBase(d);
  }

  function goToNextWeek() {
    const d = new Date(weekBase);
    d.setDate(d.getDate() + 7);
    setWeekBase(d);
  }

  return (
    <div className="min-h-screen bg-[#f3f7f6] dark:bg-slate-900 p-4 sm:p-6" dir={isRtl ? 'rtl' : 'ltr'}>
      <motion.div
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4 }}
        className="max-w-7xl mx-auto space-y-5"
      >

        <div className="bg-white dark:bg-slate-800 rounded-2xl p-5 shadow-sm border border-slate-100 dark:border-slate-700">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-emerald-50 dark:bg-emerald-900/20 rounded-xl flex items-center justify-center shrink-0">
              <Calendar size={20} className="text-[#0f7a6c] dark:text-emerald-400" />
            </div>
            <div>
              <h1 className="text-xl font-bold text-slate-800 dark:text-slate-100">
                {isRtl ? 'جدول الحصص' : 'Class Schedule'}
              </h1>
              <p className="text-xs text-slate-500 dark:text-slate-400 mt-0.5">
                {isRtl ? 'اختر التاريخ لمشاهدة الحصص' : 'Select a date to view sessions'}
              </p>
            </div>
          </div>
        </div>

        <div className="bg-white dark:bg-slate-800 rounded-2xl p-5 shadow-sm border border-slate-100 dark:border-slate-700">
          <div className="flex items-center justify-between mb-5">
            <button
              onClick={goToPrevWeek}
              className="w-8 h-8 rounded-full bg-slate-100 dark:bg-slate-700 flex items-center justify-center hover:bg-slate-200 dark:hover:bg-slate-600 transition-colors"
            >
              {isRtl ? <ChevronRight size={16} className="text-slate-600 dark:text-slate-300" /> : <ChevronLeft size={16} className="text-slate-600 dark:text-slate-300" />}
            </button>
            <span className="text-sm font-bold text-slate-700 dark:text-slate-200">{monthLabel}</span>
            <button
              onClick={goToNextWeek}
              className="w-8 h-8 rounded-full bg-slate-100 dark:bg-slate-700 flex items-center justify-center hover:bg-slate-200 dark:hover:bg-slate-600 transition-colors"
            >
              {isRtl ? <ChevronLeft size={16} className="text-slate-600 dark:text-slate-300" /> : <ChevronRight size={16} className="text-slate-600 dark:text-slate-300" />}
            </button>
          </div>

          <div className="grid grid-cols-7 gap-1.5">
            {weekDays.map((day) => {
              const key = toDateKey(day);
              const isSelected = key === selectedKey;
              const isToday = key === toDateKey(today);
              const hasData = hasSessions(key);

              return (
                <button
                  key={key}
                  onClick={() => setSelectedDate(day)}
                  className={`flex flex-col items-center py-3 rounded-2xl transition-all duration-200 ${isSelected
                    ? 'bg-[#0f7a6c] text-white shadow-md shadow-emerald-200/50'
                    : isToday
                      ? 'bg-emerald-50 dark:bg-emerald-900/20 text-[#0f7a6c] dark:text-emerald-400'
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
              {isRtl ? `حصص يوم ${dayLabel}` : `Sessions — ${dayLabel}`}
            </h2>
          </div>

          {sessions.length === 0 ? (
            <div className="flex flex-col items-center justify-center py-16 text-center px-6">
              <div className="w-14 h-14 bg-slate-50 dark:bg-slate-700 rounded-2xl flex items-center justify-center mb-3">
                <Calendar size={24} className="text-slate-400" />
              </div>
              <p className="text-sm font-medium text-slate-500 dark:text-slate-400">
                {isRtl ? 'لا توجد حصص في هذا اليوم' : 'No sessions on this day'}
              </p>
            </div>
          ) : (
            <>
              <div className="hidden sm:grid grid-cols-[1fr_2fr_1.5fr_1fr_1.2fr] gap-4 px-5 py-3 bg-slate-50 dark:bg-slate-700/50 text-xs font-bold text-slate-500 dark:text-slate-400 uppercase tracking-wide">
                <span>{isRtl ? 'الوقت' : 'Time'}</span>
                <span>{isRtl ? 'المادة' : 'Subject'}</span>
                <span>{isRtl ? 'المعلم' : 'Teacher'}</span>
                <span>{isRtl ? 'الحالة' : 'Status'}</span>
                <span>{isRtl ? 'الإجراء' : 'Action'}</span>
              </div>

              <div className="divide-y divide-slate-100 dark:divide-slate-700">
                {sessions.map((session) => {
                  const config = getStatusConfig(session.status);
                  return (
                    <motion.div
                      key={session.id}
                      initial={{ opacity: 0, x: isRtl ? 12 : -12 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.3 }}
                      className="grid grid-cols-1 sm:grid-cols-[1fr_2fr_1.5fr_1fr_1.2fr] gap-3 sm:gap-4 items-center px-5 py-4"
                    >
                      <div className="flex items-center gap-2 text-slate-600 dark:text-slate-300">
                        <Clock size={14} className="text-[#0f7a6c] dark:text-emerald-400 shrink-0" />
                        <div>
                          <p className="text-xs font-bold">{session.startTime}</p>
                          <p className="text-[10px] text-slate-400">- {session.endTime}</p>
                        </div>
                      </div>

                      <p className="text-sm font-bold text-slate-800 dark:text-slate-100">{session.subject}</p>

                      <div className="flex items-center gap-1.5 text-slate-500 dark:text-slate-400">
                        <User size={13} className="shrink-0" />
                        <span className="text-xs font-medium">{session.teacher}</span>
                      </div>

                      <div>
                        <span className={`inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-bold ${config.badgeClass}`}>
                          <span className={`w-1.5 h-1.5 rounded-full ${config.dotClass} ${session.status === 'live' ? 'animate-pulse' : ''}`} />
                          {isRtl ? config.label : config.labelEn}
                        </span>
                      </div>

                      <div>
                        {session.status === 'live' || session.status === 'upcoming' ? (
                          <button className="flex items-center gap-1.5 bg-[#0f7a6c] hover:bg-[#0c6156] active:scale-95 text-white text-xs font-bold px-3 py-2 rounded-xl transition-all duration-200 shadow-sm shadow-emerald-200/50">
                            <Video size={13} />
                            <span>{isRtl ? 'الانتقال إلى البث الآن' : 'Join Live'}</span>
                          </button>
                        ) : (
                          <span className="text-xs text-slate-400 dark:text-slate-500">{isRtl ? 'انتهت الحصة' : 'Ended'}</span>
                        )}
                      </div>
                    </motion.div>
                  );
                })}
              </div>
            </>
          )}
        </div>
      </motion.div>
    </div>
  );
}

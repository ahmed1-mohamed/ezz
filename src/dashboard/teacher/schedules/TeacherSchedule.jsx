import { useState, useMemo, useEffect } from 'react';
import { motion } from 'framer-motion';
import {
  Calendar,
  ChevronLeft,
  ChevronRight,
  Clock,
  RotateCcw,
  GraduationCap,
  BookOpen,
  Timer,
} from 'lucide-react';
import { useTranslation } from 'react-i18next';
import { useQuery, keepPreviousData } from '@tanstack/react-query';
import { timetableApi } from '@/shared/services/api/timetableApi.js';
import Spinner from '@/shared/components/Spinner.jsx';

const DAY_KEYS = ['saturday', 'sunday', 'monday', 'tuesday', 'wednesday', 'thursday', 'friday'];
const STALE_TIME_MS = 60 * 1000;
const MONTHS_AR = [
  'يناير', 'فبراير', 'مارس', 'أبريل', 'مايو', 'يونيو',
  'يوليو', 'أغسطس', 'سبتمبر', 'أكتوبر', 'نوفمبر', 'ديسمبر',
];
const MONTHS_EN = [
  'January', 'February', 'March', 'April', 'May', 'June',
  'July', 'August', 'September', 'October', 'November', 'December',
];
const MONTHS_SHORT_AR = [
  'يناير', 'فبراير', 'مارس', 'أبريل', 'مايو', 'يونيو',
  'يوليو', 'أغسطس', 'سبتمبر', 'أكتوبر', 'نوفمبر', 'ديسمبر',
];
const MONTHS_SHORT_EN = [
  'Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun',
  'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec',
];

function parseLocalDate(dateString) {
  if (!dateString) return new Date();
  if (dateString instanceof Date) return dateString;
  const parts = String(dateString).split('T')[0].split('-').map(Number);
  if (parts.length === 3 && !isNaN(parts[0]) && !isNaN(parts[1]) && !isNaN(parts[2])) {
    return new Date(parts[0], parts[1] - 1, parts[2]);
  }
  const parsed = new Date(dateString);
  return isNaN(parsed.getTime()) ? new Date() : parsed;
}

function checkIsSameDay(dateA, dateB) {
  if (!dateA || !dateB) return false;
  return (
    dateA.getFullYear() === dateB.getFullYear() &&
    dateA.getMonth() === dateB.getMonth() &&
    dateA.getDate() === dateB.getDate()
  );
}

function formatSessionTime(session, isRtl) {
  if (session.timeRange) return session.timeRange;
  if (!session.startTime) return '-';
  if (!session.startTime.includes('T')) {
    return session.endTime ? `${session.startTime} - ${session.endTime}` : session.startTime;
  }
  try {
    const locale = isRtl ? 'ar-EG' : 'en-GB';
    const start = new Date(session.startTime).toLocaleTimeString(locale, {
      hour: '2-digit',
      minute: '2-digit',
      hour12: false,
    });
    const end = session.endTime
      ? new Date(session.endTime).toLocaleTimeString(locale, {
          hour: '2-digit',
          minute: '2-digit',
          hour12: false,
        })
      : '';
    return end ? `${start} - ${end}` : start;
  } catch {
    return session.startTime || '-';
  }
}

function resolveGroupName(rawGroup, isRtl, fallback) {
  if (!rawGroup) return fallback;
  if (typeof rawGroup === 'string') return rawGroup.trim();
  if (typeof rawGroup === 'object') {
    const name = rawGroup.name || rawGroup.title;
    if (typeof name === 'string') return name.trim();
    if (typeof name === 'object' && name !== null) {
      return (isRtl ? name.ar || name.en : name.en || name.ar) || fallback;
    }
  }
  return fallback;
}

function resolveSessionTitle(rawTitle, isRtl, fallback) {
  if (!rawTitle) return fallback;
  if (typeof rawTitle === 'string') return rawTitle.trim();
  if (typeof rawTitle === 'object') {
    return (isRtl ? rawTitle.ar || rawTitle.en : rawTitle.en || rawTitle.ar) || fallback;
  }
  return String(rawTitle);
}

function getDayNumber(dayObject) {
  if (!dayObject) return '';
  if (dayObject.date) {
    const parts = dayObject.date.split('-');
    if (parts.length === 3) return parseInt(parts[2], 10);
  }
  return '';
}

function formatDayHeading(dayObject, isRtl) {
  if (!dayObject) return '';
  const name = dayObject.dayName || dayObject.day || '';
  if (!dayObject.date) return name;
  const parsedDate = parseLocalDate(dayObject.date);
  if (isNaN(parsedDate.getTime())) return `${name} - ${dayObject.date}`;
  const dateFormatted = isRtl
    ? `${parsedDate.getDate()} ${MONTHS_SHORT_AR[parsedDate.getMonth()]}`
    : `${parsedDate.getDate()} ${MONTHS_SHORT_EN[parsedDate.getMonth()]}`;
  return isRtl ? `حصص يوم ${name} - ${dateFormatted}` : `Sessions for ${name} - ${dateFormatted}`;
}

export default function TeacherSchedule() {
  const { t, i18n } = useTranslation();
  const isRtl = i18n?.language?.startsWith('ar') ?? true;
  const today = useMemo(() => new Date(), []);
  const [weekOffset, setWeekOffset] = useState(0);
  const [selectedDate, setSelectedDate] = useState('');
  const [selectedDayIndex, setSelectedDayIndex] = useState(null);
  const [currentTimeStr, setCurrentTimeStr] = useState('');
  const [currentDateStr, setCurrentDateStr] = useState('');
  useEffect(() => {
    const updateDateTime = () => {
      const now = new Date();
      try {
        const timeFormatted = new Intl.DateTimeFormat('en-GB', {
          hour: '2-digit',
          minute: '2-digit',
          second: '2-digit',
          hour12: false,
        }).format(now);
        setCurrentTimeStr(timeFormatted);
      } catch {
        setCurrentTimeStr(now.toTimeString().slice(0, 8));
      }
      try {
        const dateFormatted = new Intl.DateTimeFormat(
          isRtl ? 'ar-EG-u-ca-gregory' : 'en-GB-u-ca-gregory',
          {
            weekday: 'long',
            day: 'numeric',
            month: 'long',
            year: 'numeric',
          }
        ).format(now);
        setCurrentDateStr(dateFormatted);
      } catch {
        setCurrentDateStr(now.toLocaleDateString(isRtl ? 'ar-EG' : 'en-GB'));
      }
    };
    updateDateTime();
    const interval = setInterval(updateDateTime, 1000);
    return () => clearInterval(interval);
  }, [isRtl]);
  const {
    data: timetableData,
    isLoading,
    isFetching,
    refetch,
  } = useQuery({
    queryKey: ['teacherTimetable', weekOffset, selectedDate],
    queryFn: () =>
      timetableApi.fetchTeacherTimetable({
        weekOffset,
        date: selectedDate || undefined,
      }),
    staleTime: STALE_TIME_MS,
    placeholderData: keepPreviousData,
  });
  const weekInfo = useMemo(() => {
    const raw = timetableData?.data || timetableData || {};
    return raw.weekInfo || raw.week || {};
  }, [timetableData]);
  const weekDays = useMemo(() => {
    const raw = timetableData?.data || timetableData || {};
    const apiDays = Array.isArray(raw.days)
      ? raw.days
      : Array.isArray(raw)
      ? raw
      : Array.isArray(timetableData?.days)
      ? timetableData.days
      : [];
    if (apiDays.length > 0) {
      return apiDays.map((dayItem, index) => {
        const dateObject = dayItem.date ? parseLocalDate(dayItem.date) : null;
        const dayKey = dayItem.day ? dayItem.day.toLowerCase() : DAY_KEYS[index % 7];
        const dayName = t(`schedule.${dayKey}`, { defaultValue: dayItem.dayName || dayItem.day });
        const fallbackGroup = t('teacherDashboard.groupName', 'مجموعة دراسية');
        const fallbackTitle = t('teacherSchedule.sessionTitleFallback', 'حصة دراسية');
        const sessions = (Array.isArray(dayItem.sessions) ? dayItem.sessions : []).map((sess, sIdx) => {
          const resolvedGroup = resolveGroupName(sess.group || sess.groupName, isRtl, fallbackGroup);
          const resolvedTitle = resolveSessionTitle(sess.title || sess.name, isRtl, fallbackTitle);
          const timeRange = formatSessionTime(sess, isRtl);
          const durationMinutes = Number(sess.durationMinutes || sess.duration || 0);
          const durationText = durationMinutes > 0
            ? `${durationMinutes} ${isRtl ? 'دقيقة' : 'min'}`
            : (sess.durationText || '-');
          const type = (sess.type || 'regular').toLowerCase();
          const typeText = sess.typeText || (
            type === 'trial'
              ? (isRtl ? 'تجريبية' : 'Trial')
              : type === 'makeup' || type === 'replacement'
              ? (isRtl ? 'تعويضية' : 'Makeup')
              : type === 'extra'
              ? (isRtl ? 'إضافية' : 'Extra')
              : (isRtl ? 'عادية' : 'Regular')
          );
          return {
            id: sess.id || sess._id || `s-${index}-${sIdx}`,
            title: resolvedTitle,
            groupName: resolvedGroup,
            startTime: sess.startTime || sess.time || '',
            endTime: sess.endTime || '',
            timeRange,
            durationMinutes,
            durationText,
            type,
            typeText,
            status: (sess.status || 'scheduled').toLowerCase(),
            statusText: sess.statusText || null,
          };
        });
        return {
          dayKey,
          dayName,
          date: dayItem.date,
          dateObject,
          isToday: dayItem.isToday ?? (dateObject ? checkIsSameDay(dateObject, today) : false),
          sessionsCount: dayItem.sessionsCount ?? sessions.length,
          sessions,
        };
      });
    }
    return [];
  }, [timetableData, today, t, isRtl]);
  const activeDayIndex = useMemo(() => {
    if (selectedDayIndex !== null && selectedDayIndex >= 0 && selectedDayIndex < weekDays.length) {
      return selectedDayIndex;
    }
    const todayIndex = weekDays.findIndex((d) => d.isToday);
    if (todayIndex !== -1) return todayIndex;
    const firstWithSessions = weekDays.findIndex((d) => d.sessionsCount > 0);
    return firstWithSessions >= 0 ? firstWithSessions : 0;
  }, [selectedDayIndex, weekDays]);
  const selectedDay = weekDays[activeDayIndex] || weekDays[0] || null;
  const sessions = selectedDay?.sessions || [];
  const handlePrevWeek = () => {
    if (weekInfo?.previousWeekDate) {
      setSelectedDate(weekInfo.previousWeekDate);
      setWeekOffset(0);
    } else {
      setWeekOffset((prev) => prev - 1);
    }
    setSelectedDayIndex(0);
  };
  const handleNextWeek = () => {
    if (weekInfo?.nextWeekDate) {
      setSelectedDate(weekInfo.nextWeekDate);
      setWeekOffset(0);
    } else {
      setWeekOffset((prev) => prev + 1);
    }
    setSelectedDayIndex(0);
  };
  const handleCurrentWeek = () => {
    setWeekOffset(0);
    setSelectedDate('');
    setSelectedDayIndex(null);
  };
  const monthYearLabel = useMemo(() => {
    const referenceDate = selectedDay?.date || weekInfo?.startDate || weekInfo?.currentWeekDate || selectedDate;
    if (!referenceDate) return isRtl ? 'الجدول الأسبوعي' : 'Weekly Schedule';
    const parsedDate = parseLocalDate(referenceDate);
    if (isNaN(parsedDate.getTime())) return isRtl ? 'الجدول الأسبوعي' : 'Weekly Schedule';
    return isRtl
      ? `${MONTHS_AR[parsedDate.getMonth()]} ${parsedDate.getFullYear()}`
      : `${MONTHS_EN[parsedDate.getMonth()]} ${parsedDate.getFullYear()}`;
  }, [selectedDay, weekInfo, selectedDate, isRtl]);
  const renderStatusBadge = (session) => {
    const status = session.status?.toLowerCase();
    const isLive = status === 'live' || status === 'in_progress';
    if (isLive) {
      return (
        <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold bg-[#FFEAEA] dark:bg-red-950/40 text-[#E53E3E] dark:text-red-400">
          <span className="w-2 h-2 rounded-full bg-[#E53E3E] animate-pulse" />
          <span>{t('teacherSchedule.filterLive', 'مباشر الآن')}</span>
        </span>
      );
    }
    switch (status) {
      case 'cancelled':
        return (
          <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-xs font-bold bg-rose-50 dark:bg-rose-950/30 text-rose-600 dark:text-rose-400">
            <span className="w-1.5 h-1.5 rounded-full bg-rose-500" />
            <span>{session.statusText || t('teacherSchedule.cancelledSession', 'ملغاة')}</span>
          </span>
        );
      case 'rescheduled':
        return (
          <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-xs font-bold bg-amber-50 dark:bg-amber-950/40 text-amber-700 dark:text-amber-400">
            <span className="w-1.5 h-1.5 rounded-full bg-amber-500" />
            <span>{session.statusText || t('teacherSchedule.rescheduled', 'معاد جدولتها')}</span>
          </span>
        );
      case 'completed':
        return (
          <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-xs font-bold bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-400">
            <span className="w-1.5 h-1.5 rounded-full bg-slate-400" />
            <span>{session.statusText || t('teacherSchedule.filterCompleted', 'مكتملة')}</span>
          </span>
        );
      case 'scheduled':
      default:
        return (
          <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-xs font-bold bg-emerald-50 dark:bg-emerald-950/40 text-[#00695C] dark:text-emerald-400">
            <span className="w-1.5 h-1.5 rounded-full bg-[#00695C] dark:bg-emerald-400" />
            <span>{session.statusText || t('teacherSchedule.filterScheduled', 'مجدولة')}</span>
          </span>
        );
    }
  };
  const isCurrentWeek = weekOffset === 0 && !selectedDate && (weekInfo?.isCurrentWeek ?? true);
  return (
    <div className="space-y-6 max-w-7xl mx-auto pb-12 font-sans" dir={isRtl ? 'rtl' : 'ltr'}>
      <motion.div
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4 }}
        className="space-y-6"
      >
        <section className="bg-white dark:bg-slate-900 rounded-3xl p-5 sm:p-6 shadow-xs border border-slate-100 dark:border-slate-800 flex flex-col md:flex-row md:items-center justify-between gap-4">
          <div className="flex items-center gap-3.5 text-start">
            <div className="w-12 h-12 rounded-2xl bg-[#00594C] text-white flex items-center justify-center shadow-xs shrink-0">
              <Calendar size={24} />
            </div>
            <div>
              <h1 className="text-xl sm:text-2xl font-black text-slate-800 dark:text-white leading-tight flex items-center gap-2">
                <span>{t('teacherSchedule.title', 'الجدول الأسبوعي')}</span>
                {isFetching && (
                  <div className="w-4 h-4 border-2 border-[#00594C]/30 border-t-[#00594C] rounded-full animate-spin" />
                )}
              </h1>
              <p className="text-xs sm:text-sm text-slate-400 font-semibold mt-0.5">
                {t('teacherSchedule.subtitle', 'اختر التاريخ لمشاهدة الحصص الدراسية')}
              </p>
            </div>
          </div>
          <div className="flex items-center gap-3 self-end md:self-center flex-wrap">
            <button
              type="button"
              onClick={() => refetch()}
              disabled={isFetching}
              className="p-2 rounded-xl border border-slate-200 dark:border-slate-700 text-slate-600 dark:text-slate-300 hover:bg-slate-50 dark:hover:bg-slate-800 transition-colors disabled:opacity-50 cursor-pointer"
              title={t('common.refresh', 'تحديث')}
            >
              <RotateCcw size={16} className={isFetching ? 'animate-spin' : ''} />
            </button>
            {currentTimeStr && (
              <span className="px-3.5 py-1 rounded-full text-xs font-mono font-bold bg-[#d2ede6] text-[#00594C] dark:bg-emerald-950/70 dark:text-emerald-300">
                {currentTimeStr}
              </span>
            )}
            {currentDateStr && (
              <div className="flex items-center gap-1.5 text-xs text-slate-500 dark:text-slate-400 font-semibold">
                <Calendar size={14} className="text-slate-400" />
                <span>{currentDateStr}</span>
              </div>
            )}
          </div>
        </section>
        <section className="bg-white dark:bg-slate-900 rounded-3xl p-6 sm:p-8 shadow-xs border border-slate-100 dark:border-slate-800 space-y-6">
          <div className="flex items-center justify-between">
            <button
              type="button"
              onClick={isRtl ? handleNextWeek : handlePrevWeek}
              aria-label="Navigate"
              className="w-10 h-10 rounded-full bg-slate-100 dark:bg-slate-800 hover:bg-slate-200 dark:hover:bg-slate-700 flex items-center justify-center text-slate-700 dark:text-slate-200 transition-colors cursor-pointer"
            >
              {isRtl ? <ChevronRight size={20} /> : <ChevronLeft size={20} />}
            </button>
            <div className="flex items-center gap-3">
              <h2 className="text-lg sm:text-xl font-bold text-slate-800 dark:text-slate-100">
                {monthYearLabel}
              </h2>
              {!isCurrentWeek && (
                <button
                  type="button"
                  onClick={handleCurrentWeek}
                  className="text-xs font-bold text-[#00594C] dark:text-emerald-400 bg-emerald-50 dark:bg-emerald-950/40 px-3 py-1 rounded-full hover:bg-emerald-100 dark:hover:bg-emerald-900/60 transition-colors cursor-pointer"
                >
                  {isRtl ? 'الأسبوع الحالي' : 'Current Week'}
                </button>
              )}
            </div>
            <button
              type="button"
              onClick={isRtl ? handlePrevWeek : handleNextWeek}
              aria-label="Navigate"
              className="w-10 h-10 rounded-full bg-slate-100 dark:bg-slate-800 hover:bg-slate-200 dark:hover:bg-slate-700 flex items-center justify-center text-slate-700 dark:text-slate-200 transition-colors cursor-pointer"
            >
              {isRtl ? <ChevronLeft size={20} /> : <ChevronRight size={20} />}
            </button>
          </div>
          {weekDays.length > 0 && (
            <div className="grid grid-cols-7 gap-2 sm:gap-3">
              {weekDays.map((dayItem, index) => {
                const isSelected = activeDayIndex === index;
                const sessionsCount = dayItem.sessionsCount ?? dayItem.sessions?.length ?? 0;
                const hasSessions = sessionsCount > 0;
                const dayNum = getDayNumber(dayItem);
                return (
                  <button
                    key={dayItem.date || index}
                    type="button"
                    onClick={() => setSelectedDayIndex(index)}
                    className={`py-3 px-1 sm:py-4 sm:px-2 rounded-2xl sm:rounded-3xl flex flex-col items-center justify-center transition-all cursor-pointer select-none ${
                      isSelected
                        ? 'bg-[#00594C] text-white shadow-md shadow-[#00594C]/25 scale-[1.02]'
                        : 'bg-[#F8FAF9] dark:bg-slate-800 text-slate-700 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-750 border border-slate-100/80 dark:border-slate-700/60'
                    }`}
                  >
                    <span
                      className={`text-[11px] sm:text-xs font-medium ${
                        isSelected ? 'text-white/90' : 'text-slate-400 dark:text-slate-400'
                      }`}
                    >
                      {dayItem.dayName || dayItem.day}
                    </span>
                    <span className="text-base sm:text-xl font-bold mt-1">
                      {dayNum}
                    </span>
                    <div className="h-2 flex items-center justify-center mt-2">
                      {hasSessions ? (
                        <span
                          className={`w-1.5 h-1.5 rounded-full ${
                            isSelected
                              ? 'bg-white/80'
                              : 'bg-[#00594C] dark:bg-emerald-400'
                          }`}
                        />
                      ) : (
                        <span className="w-1.5 h-1.5 opacity-0" />
                      )}
                    </div>
                  </button>
                );
              })}
            </div>
          )}
        </section>
        <section className="bg-white dark:bg-slate-900 rounded-3xl p-6 sm:p-8 shadow-xs border border-slate-100 dark:border-slate-800 space-y-6">
          <div className="border-b border-slate-100 dark:border-slate-800 pb-4">
            <h3 className="text-lg sm:text-xl font-extrabold text-[#1E293B] dark:text-white text-start">
              {formatDayHeading(selectedDay, isRtl)}
            </h3>
          </div>
          {isLoading ? (
            <div className="flex h-48 items-center justify-center">
              <Spinner />
            </div>
          ) : sessions.length === 0 ? (
            <div className="py-12 text-center space-y-3">
              <div className="w-16 h-16 bg-slate-100 dark:bg-slate-800 text-slate-400 rounded-full flex items-center justify-center mx-auto">
                <Calendar size={28} />
              </div>
              <h4 className="text-base font-bold text-slate-700 dark:text-slate-200">
                {t('teacherSchedule.noSessionsDay', 'لا توجد حصص مجدولة لهذا اليوم')}
              </h4>
              <p className="text-xs text-slate-400 dark:text-slate-500">
                {t('teacherSchedule.selectAnotherDay', 'اختر يوماً آخر من الأسبوع لمشاهدة الحصص')}
              </p>
            </div>
          ) : (
            <div>
              <div className="hidden md:grid grid-cols-12 items-center text-xs font-bold text-slate-500 dark:text-slate-400 pb-3 border-b border-slate-100 dark:border-slate-800">
                <div className="col-span-2 text-start">
                  {t('teacherSchedule.time', 'الوقت')}
                </div>
                <div className="col-span-3 text-start">
                  {t('teacherSchedule.subjectOrGroup', 'المجموعة التعليمية')}
                </div>
                <div className="col-span-3 text-start">
                  {t('teacherSchedule.sessionTitle', 'عنوان الحصة')}
                </div>
                <div className="col-span-2 text-center">
                  {t('teacherSchedule.duration', 'المدة')}
                </div>
                <div className="col-span-1 text-center">
                  {t('teacherSchedule.sessionType', 'النوع')}
                </div>
                <div className="col-span-1 text-center">
                  {t('teacherSchedule.status', 'الحالة')}
                </div>
              </div>
              <div className="divide-y divide-slate-100 dark:divide-slate-800/80">
                {sessions.map((session) => (
                  <motion.div
                    key={session.id}
                    initial={{ opacity: 0, y: 8 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="py-4 hover:bg-slate-50/50 dark:hover:bg-slate-800/30 transition-colors rounded-2xl px-2"
                  >
                    <div className="hidden md:grid grid-cols-12 items-center gap-2">
                      <div className="col-span-2 text-start">
                        <div className="flex items-center gap-2 text-xs sm:text-sm font-bold text-slate-700 dark:text-slate-200">
                          <Clock size={15} className="text-[#00594C] dark:text-emerald-400 shrink-0" />
                          <span>{session.timeRange || '-'}</span>
                        </div>
                      </div>
                      <div className="col-span-3 text-start">
                        <div className="flex items-center gap-2.5 min-w-0">
                          <div className="w-8 h-8 rounded-xl bg-teal-50 dark:bg-emerald-950/40 text-[#00594C] dark:text-emerald-400 flex items-center justify-center shrink-0">
                            <GraduationCap size={16} />
                          </div>
                          <h4 className="text-xs sm:text-sm font-bold text-slate-900 dark:text-white truncate">
                            {session.groupName}
                          </h4>
                        </div>
                      </div>
                      <div className="col-span-3 text-start">
                        <div className="flex items-center gap-2.5 min-w-0">
                          <div className="w-8 h-8 rounded-xl bg-slate-100 dark:bg-slate-800 text-slate-500 dark:text-slate-400 flex items-center justify-center shrink-0">
                            <BookOpen size={15} />
                          </div>
                          <span className="text-xs sm:text-sm font-semibold text-slate-700 dark:text-slate-200 truncate">
                            {session.title || '-'}
                          </span>
                        </div>
                      </div>
                      <div className="col-span-2 text-center flex justify-center">
                        <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-slate-50 dark:bg-slate-800 border border-slate-200/60 dark:border-slate-700 text-xs font-bold text-slate-700 dark:text-slate-300">
                          <Timer size={13} className="text-amber-600 dark:text-amber-400 shrink-0" />
                          <span>{session.durationText}</span>
                        </span>
                      </div>
                      <div className="col-span-1 text-center flex justify-center">
                        <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-[11px] font-bold ${
                          session.type === 'trial'
                            ? 'bg-purple-50 dark:bg-purple-950/40 text-purple-700 dark:text-purple-300 border border-purple-200/60'
                            : session.type === 'makeup' || session.type === 'replacement'
                            ? 'bg-amber-50 dark:bg-amber-950/40 text-amber-700 dark:text-amber-300 border border-amber-200/60'
                            : 'bg-blue-50 dark:bg-blue-950/40 text-blue-700 dark:text-blue-300 border border-blue-200/60'
                        }`}>
                          {session.typeText}
                        </span>
                      </div>
                      <div className="col-span-1 text-center flex justify-center">
                        {renderStatusBadge(session)}
                      </div>
                    </div>
                    <div className="md:hidden space-y-2.5 text-start">
                      <div className="flex items-start justify-between gap-2">
                        <div className="space-y-0.5 min-w-0">
                          <h4 className="text-sm font-bold text-slate-900 dark:text-white truncate">
                            {session.groupName}
                          </h4>
                          {session.title && (
                            <p className="text-xs text-slate-500 dark:text-slate-400 truncate">
                              {session.title}
                            </p>
                          )}
                        </div>
                        <div className="shrink-0">{renderStatusBadge(session)}</div>
                      </div>
                      <div className="flex flex-wrap items-center gap-2 pt-1">
                        <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-xl bg-slate-50 dark:bg-slate-800 border border-slate-100 dark:border-slate-700 text-xs font-bold text-slate-700 dark:text-slate-300">
                          <Clock size={13} className="text-[#00594C] dark:text-emerald-400" />
                          <span>{session.timeRange || '-'}</span>
                        </span>
                        <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-xl bg-slate-50 dark:bg-slate-800 border border-slate-100 dark:border-slate-700 text-xs font-bold text-slate-700 dark:text-slate-300">
                          <Timer size={13} className="text-amber-600 dark:text-amber-400" />
                          <span>{session.durationText}</span>
                        </span>
                        <span className={`inline-flex items-center px-2 py-1 rounded-xl text-xs font-bold ${
                          session.type === 'trial'
                            ? 'bg-purple-50 dark:bg-purple-950/40 text-purple-700 dark:text-purple-300'
                            : session.type === 'makeup' || session.type === 'replacement'
                            ? 'bg-amber-50 dark:bg-amber-950/40 text-amber-700 dark:text-amber-400'
                            : 'bg-blue-50 dark:bg-blue-950/40 text-blue-700 dark:text-blue-300'
                        }`}>
                          {session.typeText}
                        </span>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          )}
        </section>
      </motion.div>
    </div>
  );
}

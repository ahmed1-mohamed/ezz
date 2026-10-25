import { useState, useMemo, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { useQuery, keepPreviousData } from '@tanstack/react-query';
import { Link } from 'react-router-dom';
import {
  CalendarDays,
  Calendar,
  Clock,
  ChevronLeft,
  ChevronRight,
  RotateCcw,
  Video,
  Play,
  Users,
  CheckCircle2,
 
} from 'lucide-react';
import { timetableApi } from '@/shared/services/api/timetableApi.js';

const DAYS_IN_WEEK = 7;
const DAY_KEYS = ['saturday', 'sunday', 'monday', 'tuesday', 'wednesday', 'thursday', 'friday'];
const DAY_NAMES_AR = {
  saturday: 'السبت',
  sunday: 'الأحد',
  monday: 'الاثنين',
  tuesday: 'الثلاثاء',
  wednesday: 'الأربعاء',
  thursday: 'الخميس',
  friday: 'الجمعة',
};

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

function toDateKey(date) {
  if (!date) return '';
  const y = date.getFullYear();
  const m = String(date.getMonth() + 1).padStart(2, '0');
  const d = String(date.getDate()).padStart(2, '0');
  return `${y}-${m}-${d}`;
}

function isSameDay(a, b) {
  if (!a || !b) return false;
  return (
    a.getFullYear() === b.getFullYear() &&
    a.getMonth() === b.getMonth() &&
    a.getDate() === b.getDate()
  );
}

const DEFAULT_PREVIEW_DAYS = [
  {
    day: 'saturday',
    date: '2026-10-24',
    sessions: [
      {
        id: 's-preview-1',
        title: 'مقدمة في علم التجويد',
        groupName: 'مجموعة التأسيس الأولى',
        startTime: '10:00 AM',
        endTime: '11:30 AM',
        timeRange: '10:00 AM - 11:30 AM',
        status: 'completed',
        studentsCount: 5,
        zoomJoinUrl: null,
      },
    ],
  },
  {
    day: 'sunday',
    date: '2026-10-25',
    sessions: [
      {
        id: 's-preview-2',
        title: 'تلاوة سورة البقرة',
        groupName: 'مجموعة التجويد المتقدمة',
        startTime: '04:00 PM',
        endTime: '05:30 PM',
        timeRange: '04:00 PM - 05:30 PM',
        status: 'live',
        studentsCount: 4,
        zoomJoinUrl: 'https://zoom.us',
      },
    ],
  },
  {
    day: 'monday',
    date: '2026-10-26',
    sessions: [
      {
        id: 's-preview-3',
        title: 'أحكام الميم الساكنة',
        groupName: 'مجموعة القراءات',
        startTime: '06:00 PM',
        endTime: '07:30 PM',
        timeRange: '06:00 PM - 07:30 PM',
        status: 'scheduled',
        studentsCount: 5,
        zoomJoinUrl: 'https://zoom.us',
      },
    ],
  },
  {
    day: 'tuesday',
    date: '2026-10-27',
    sessions: [],
  },
  {
    day: 'wednesday',
    date: '2026-10-28',
    sessions: [
      {
        id: 's-preview-4',
        title: 'مخارج الحروف وصفاتها',
        groupName: 'مجموعة التجويد الثالثة',
        startTime: '05:00 PM',
        endTime: '06:30 PM',
        timeRange: '05:00 PM - 06:30 PM',
        status: 'scheduled',
        studentsCount: 4,
        zoomJoinUrl: 'https://zoom.us',
      },
    ],
  },
  {
    day: 'thursday',
    date: '2026-10-29',
    sessions: [],
  },
  {
    day: 'friday',
    date: '2026-10-30',
    sessions: [],
  },
];

export default function TeacherSchedule() {
  const { t, i18n } = useTranslation();
  const isRtl = i18n?.language?.startsWith('ar') ?? true;
  const today = useMemo(() => new Date(), []);

  const [weekOffset, setWeekOffset] = useState(0);
  const [selectedDate, setSelectedDate] = useState('');

  const [currentTimeStr, setCurrentTimeStr] = useState('01:53:04 AM');
  const [currentDateStr, setCurrentDateStr] = useState('');

  useEffect(() => {
    const updateDateTime = () => {
      const now = new Date();
      try {
        const timeFormatted = new Intl.DateTimeFormat('en-US', {
          hour: 'numeric',
          minute: '2-digit',
          second: '2-digit',
          hour12: true,
        }).format(now);
        setCurrentTimeStr(timeFormatted);
      } catch {
        setCurrentTimeStr(now.toLocaleTimeString('en-US'));
      }

      try {
        const dateFormatted = new Intl.DateTimeFormat(isRtl ? 'ar-EG' : 'en-US', {
          weekday: 'long',
          day: 'numeric',
          month: 'long',
          year: 'numeric',
        }).format(now);
        setCurrentDateStr(dateFormatted);
      } catch {
        setCurrentDateStr(now.toLocaleDateString(isRtl ? 'ar-EG' : 'en-US'));
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
    error,
    refetch,
  } = useQuery({
    queryKey: ['teacherTimetable', weekOffset, selectedDate],
    queryFn: () =>
      timetableApi.fetchTeacherTimetable({
        weekOffset,
        date: selectedDate || undefined,
      }),
    staleTime: 60 * 1000,
    placeholderData: keepPreviousData,
  });

  const weekInfo = timetableData?.weekInfo || timetableData?.week || {};

  const weekDays = useMemo(() => {
    const apiDays = timetableData?.days;
    if (Array.isArray(apiDays) && apiDays.length > 0) {
      return apiDays.map((d, idx) => {
        const dObj = d.date ? parseLocalDate(d.date) : null;
        const dayKey = d.day ? d.day.toLowerCase() : DAY_KEYS[idx % 7];
        const dayName = DAY_NAMES_AR[dayKey] || d.dayName || d.day;
        const sessions = (Array.isArray(d.sessions) ? d.sessions : []).map((s, sIdx) => ({
          id: s.id || s._id || `s-${idx}-${sIdx}`,
          title: s.title || s.name || 'حصة دراسية',
          groupName:
            (typeof s.group === 'object' && s.group !== null
              ? s.group.name || s.group.title
              : s.groupName || s.group) || 'مجموعة دراسية',
          startTime: s.startTime || '',
          endTime: s.endTime || '',
          timeRange: s.timeRange || (s.startTime && s.endTime ? `${s.startTime} - ${s.endTime}` : s.startTime || '-'),
          status: (s.status || 'scheduled').toLowerCase(),
          studentsCount: s.studentsCount ?? (Array.isArray(s.students) ? s.students.length : 5),
          zoomJoinUrl: s.zoomJoinUrl || s.joinUrl || s.meetingUrl || null,
        }));
        return {
          dayKey,
          dayName,
          date: d.date || (dObj ? toDateKey(dObj) : ''),
          dateObj: dObj,
          isToday: dObj ? isSameDay(dObj, today) : Boolean(d.isToday),
          sessions,
        };
      });
    }

    return DEFAULT_PREVIEW_DAYS.map((d) => {
      const dObj = parseLocalDate(d.date);
      return {
        dayKey: d.day,
        dayName: DAY_NAMES_AR[d.day] || d.day,
        date: d.date,
        dateObj: dObj,
        isToday: isSameDay(dObj, today),
        sessions: d.sessions,
      };
    });
  }, [timetableData, today]);

  const totalWeekSessions = useMemo(() => {
    return weekDays.reduce((acc, d) => acc + (d.sessions?.length || 0), 0);
  }, [weekDays]);

  const weekRangeLabel = useMemo(() => {
    if (weekInfo?.formattedRange) return weekInfo.formattedRange;
    if (weekInfo?.startDate && weekInfo?.endDate) {
      return `من ${weekInfo.startDate} إلى ${weekInfo.endDate}`;
    }
    if (weekDays.length >= 2) {
      const first = weekDays[0].date;
      const last = weekDays[weekDays.length - 1].date;
      if (first && last) return `من ${first} إلى ${last}`;
    }
    return '';
  }, [weekInfo, weekDays]);

  const weekTitle = useMemo(() => {
    if (weekOffset === 0 && !selectedDate) return 'الأسبوع الحالي';
    if (weekOffset > 0) return `الأسبوع القادم (+${weekOffset})`;
    if (weekOffset < 0) return `الأسبوع السابق (${weekOffset})`;
    return weekInfo?.weekLabel || 'الجدول الأسبوعي';
  }, [weekOffset, selectedDate, weekInfo]);

  const handlePrevWeek = () => {
    setSelectedDate('');
    setWeekOffset((prev) => prev - 1);
  };

  const handleNextWeek = () => {
    setSelectedDate('');
    setWeekOffset((prev) => prev + 1);
  };

  const handleResetCurrentWeek = () => {
    setSelectedDate('');
    setWeekOffset(0);
  };

  const handleDateChange = (e) => {
    const val = e.target.value;
    if (val) {
      setSelectedDate(val);
      setWeekOffset(0);
    }
  };

  const renderSessionBadge = (status) => {
    const st = (status || '').toLowerCase();
    if (st === 'live' || st === 'in_progress' || st.includes('مباشر')) {
      return (
        <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-full text-[10px] font-bold bg-emerald-100 text-[#00594C] dark:bg-emerald-950/60 dark:text-emerald-300">
          <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
          مباشرة
        </span>
      );
    }
    if (st === 'completed' || st.includes('مكتمل')) {
      return (
        <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-full text-[10px] font-bold bg-blue-100 text-blue-800 dark:bg-blue-950/60 dark:text-blue-300">
          <CheckCircle2 size={10} />
          مكتملة
        </span>
      );
    }
    return (
      <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-full text-[10px] font-bold bg-sky-100 text-sky-800 dark:bg-sky-950/60 dark:text-sky-300">
        <Clock size={10} />
        مجدولة
      </span>
    );
  };

  return (
    <div className="space-y-6 max-w-7xl mx-auto pb-12" dir="rtl">
      <div className="bg-white dark:bg-slate-900 rounded-3xl p-5 shadow-xs border border-slate-100 dark:border-slate-800 flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div className="text-start">
          <h1 className="text-2xl sm:text-3xl font-black text-slate-800 dark:text-white leading-tight flex items-center gap-3">
            <span className="p-2.5 bg-[#e8f7f3] dark:bg-emerald-950/50 rounded-2xl text-[#00594C] dark:text-emerald-400">
              <CalendarDays size={24} />
            </span>
            <span>الجدول الأسبوعي</span>
            {isFetching && (
              <div className="w-5 h-5 ms-1 border-2 border-[#00594C]/30 border-t-[#00594C] rounded-full animate-spin" />
            )}
          </h1>
          <p className="text-xs sm:text-sm text-slate-400 font-semibold mt-1">
            جدول الحصص الأسبوعية الخاصة بك ({totalWeekSessions} حصة مجدولة)
          </p>
        </div>

        <div className="flex items-center gap-3 self-end md:self-center flex-wrap">
          <span className="px-3.5 py-1 rounded-full text-xs font-mono font-bold bg-[#d2ede6] text-[#00594C] dark:bg-emerald-950/70 dark:text-emerald-300">
            {currentTimeStr}
          </span>

          <div className="flex items-center gap-1.5 text-xs text-slate-500 dark:text-slate-400 font-semibold">
            <Calendar size={14} className="text-slate-400" />
            <span>{currentDateStr}</span>
          </div>

          <button
            onClick={() => refetch()}
            disabled={isFetching}
            className="p-2 rounded-xl border border-slate-200 dark:border-slate-700 text-slate-600 dark:text-slate-300 hover:bg-slate-50 dark:hover:bg-slate-800 transition-colors cursor-pointer disabled:opacity-50"
            title="تحديث"
          >
            <RotateCcw size={15} className={isFetching ? 'animate-spin' : ''} />
          </button>
        </div>
      </div>

      <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4 p-4 bg-white dark:bg-slate-900 rounded-3xl border border-slate-100 dark:border-slate-800 shadow-soft">
        <div className="flex items-center justify-between bg-slate-50 dark:bg-slate-800 border border-slate-200/80 dark:border-slate-700 rounded-2xl overflow-hidden min-w-[320px]">
          <button
            type="button"
            onClick={handleNextWeek}
            aria-label="الأسبوع التالي"
            className="p-3 hover:bg-slate-100 dark:hover:bg-slate-700 text-slate-600 dark:text-slate-300 transition-colors cursor-pointer"
            title="الأسبوع التالي (+1)"
          >
            <ChevronRight size={20} />
          </button>

          <div className="px-4 py-1.5 text-center">
            <span className="block text-sm font-black text-slate-800 dark:text-slate-100 whitespace-nowrap">
              {weekTitle}
            </span>
            <span className="block text-[11px] text-slate-400 font-mono whitespace-nowrap mt-0.5">
              {weekRangeLabel}
            </span>
          </div>

          <button
            type="button"
            onClick={handlePrevWeek}
            aria-label="الأسبوع السابق"
            className="p-3 hover:bg-slate-100 dark:hover:bg-slate-700 text-slate-600 dark:text-slate-300 transition-colors cursor-pointer"
            title="الأسبوع السابق (-1)"
          >
            <ChevronLeft size={20} />
          </button>
        </div>

        <div className="flex items-center gap-3 flex-wrap">
          {(weekOffset !== 0 || Boolean(selectedDate)) && (
            <button
              type="button"
              onClick={handleResetCurrentWeek}
              className="px-4 py-2.5 rounded-2xl bg-[#00594C] text-white hover:bg-[#00473d] text-xs font-bold transition-all shadow-xs cursor-pointer flex items-center gap-1.5"
            >
              <RotateCcw size={13} />
              <span>العودة للأسبوع الحالي</span>
            </button>
          )}

          <div className="flex items-center gap-2">
            <input
              type="date"
              value={selectedDate}
              onChange={handleDateChange}
              aria-label="اختيار تاريخ"
              className="px-4 py-2.5 rounded-2xl bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-200 text-xs font-semibold outline-none focus:ring-2 focus:ring-[#00594C]/20 focus:border-[#00594C] transition-all cursor-pointer"
            />
          </div>

          <Link
            to="/dashboard/teacher/sessions"
            className="px-4 py-2.5 rounded-2xl bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-200 hover:bg-slate-200 dark:hover:bg-slate-700 text-xs font-bold transition-colors cursor-pointer"
          >
            عرض سجل الجلسات
          </Link>
        </div>
      </div>

      {isLoading ? (
        <div className="h-96 rounded-3xl bg-white dark:bg-slate-900 border border-slate-100 dark:border-slate-800 animate-pulse" />
      ) : (
        <div className="bg-white dark:bg-slate-900 rounded-3xl border border-slate-100 dark:border-slate-800 shadow-xs overflow-x-auto">
          <div className="min-w-[980px]">
            <div className="grid grid-cols-7 border-b border-slate-100 dark:border-slate-800 bg-slate-50/60 dark:bg-slate-800/40">
              {weekDays.map((d, idx) => (
                <div
                  key={`header-${d.dayKey}-${idx}`}
                  className={`flex flex-col items-center gap-1 px-3 py-4 border-s first:border-s-0 border-slate-100 dark:border-slate-800 ${
                    d.isToday ? 'bg-[#e8f7f3] dark:bg-emerald-950/30' : ''
                  }`}
                >
                  <span
                    className={`text-xs font-bold ${
                      d.isToday ? 'text-[#00594C] dark:text-emerald-400 font-black' : 'text-slate-500 dark:text-slate-400'
                    }`}
                  >
                    {d.dayName}
                  </span>
                  <div className="flex items-center gap-1">
                    <span
                      className={`w-8 h-8 rounded-full flex items-center justify-center text-sm font-black ${
                        d.isToday
                          ? 'bg-[#00594C] text-white shadow-xs'
                          : 'text-slate-800 dark:text-slate-200'
                      }`}
                    >
                      {d.dateObj ? d.dateObj.getDate() : d.date.split('-')[2] || '—'}
                    </span>
                  </div>
                  {d.isToday && (
                    <span className="px-2 py-0.5 rounded-full text-[9px] font-bold bg-[#00594C] text-white">
                      اليوم
                    </span>
                  )}
                </div>
              ))}
            </div>

            <div className="grid grid-cols-7 min-h-[420px]">
              {weekDays.map((d, idx) => (
                <div
                  key={`day-col-${d.dayKey}-${idx}`}
                  className={`flex flex-col gap-3 p-3 border-s first:border-s-0 border-slate-100 dark:border-slate-800 ${
                    d.isToday ? 'bg-[#e8f7f3]/20 dark:bg-emerald-950/10' : ''
                  }`}
                >
                  {d.sessions.length === 0 ? (
                    <div className="flex-1 flex flex-col items-center justify-center py-10 opacity-30">
                      <span className="text-xs text-slate-400 font-semibold">لا توجد حصص</span>
                    </div>
                  ) : (
                    d.sessions.map((session) => (
                      <div
                        key={session.id}
                        className="rounded-2xl p-3 bg-white dark:bg-slate-800 border border-slate-200/70 dark:border-slate-700/80 shadow-xs hover:shadow-md hover:border-[#00594C]/40 transition-all space-y-2 text-start group"
                      >
                        <div className="flex items-center justify-between gap-1">
                          {renderSessionBadge(session.status)}
                          <div className="flex items-center gap-1 text-[11px] font-bold text-slate-400">
                            <Users size={11} />
                            <span>{session.studentsCount}</span>
                          </div>
                        </div>

                        <div className="space-y-0.5">
                          <h4 className="text-xs font-black text-slate-800 dark:text-white leading-snug line-clamp-2">
                            {session.title}
                          </h4>
                          <p className="text-[11px] text-[#00594C] dark:text-emerald-400 font-bold truncate">
                            {session.groupName}
                          </p>
                        </div>

                        <div className="flex items-center gap-1 text-[11px] text-slate-500 dark:text-slate-400 font-mono">
                          <Clock size={11} className="shrink-0 text-slate-400" />
                          <span className="truncate">{session.timeRange}</span>
                        </div>

                        <div className="pt-1 border-t border-slate-100 dark:border-slate-700/60 flex items-center justify-between gap-1">
                          {session.status === 'live' ? (
                            <Link
                              to="/dashboard/teacher/live"
                              className="w-full py-1.5 rounded-xl bg-[#00594C] text-white hover:bg-[#00473d] font-bold text-[11px] flex items-center justify-center gap-1 shadow-xs transition-colors cursor-pointer"
                            >
                              <Play size={10} className="fill-white" />
                              <span>دخول البث</span>
                            </Link>
                          ) : (
                            <Link
                              to="/dashboard/teacher/live"
                              className="w-full py-1.5 rounded-xl bg-slate-50 hover:bg-slate-100 dark:bg-slate-700/60 dark:hover:bg-slate-700 text-slate-700 dark:text-slate-200 font-bold text-[11px] flex items-center justify-center gap-1 transition-colors cursor-pointer"
                            >
                              <Video size={11} />
                              <span>بدء الجلسة</span>
                            </Link>
                          )}
                        </div>
                      </div>
                    ))
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
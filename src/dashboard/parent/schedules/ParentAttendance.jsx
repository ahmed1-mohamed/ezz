import { useState, useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import {
  ChevronRight,
  ChevronLeft,
  ChevronDown,
  CheckCircle2,
  XCircle,
  Clock,
  FileText,
  AlertCircle,
  Calendar,
  User,
  BookOpen,
} from 'lucide-react';
import { useTranslation } from 'react-i18next';
import { useSearchParams } from 'react-router-dom';
import { parentApi } from '@/shared/services/api/parentApi';

const containerVariants = {
  hidden: { opacity: 0 },
  show: { opacity: 1, transition: { staggerChildren: 0.08 } }
};

const itemVariants = {
  hidden: { opacity: 0, y: 15 },
  show: { opacity: 1, y: 0, transition: { type: 'spring', stiffness: 320, damping: 26 } }
};

const ARABIC_MONTH_NAMES = [
  'يناير', 'فبراير', 'مارس', 'أبريل', 'مايو', 'يونيو',
  'يوليو', 'أغسطس', 'سبتمبر', 'أكتوبر', 'نوفمبر', 'ديسمبر'
];

const ENGLISH_MONTH_NAMES = [
  'January', 'February', 'March', 'April', 'May', 'June',
  'July', 'August', 'September', 'October', 'November', 'December'
];

function formatYearMonthKey(year, month) {
  const safeYear = Number(year) || new Date().getFullYear();
  const safeMonth = Math.min(12, Math.max(1, Number(month) || 1));
  return `${safeYear}-${String(safeMonth).padStart(2, '0')}`;
}

function parseYearMonth(val, fallbackYear = null) {
  if (val === null || val === undefined || val === '') {
    return null;
  }
  if (typeof val === 'number' && val >= 1 && val <= 12) {
    const safeYear = fallbackYear || new Date().getFullYear();
    return { year: safeYear, month: val, key: formatYearMonthKey(safeYear, val) };
  }
  const str = String(val).trim();
  const match = str.match(/^(\d{4})-(\d{1,2})$/);
  if (match) {
    const y = Number(match[1]);
    const m = Number(match[2]);
    if (m >= 1 && m <= 12) {
      return { year: y, month: m, key: formatYearMonthKey(y, m) };
    }
  }
  const parsedNum = Number(str);
  if (!isNaN(parsedNum) && parsedNum >= 1 && parsedNum <= 12) {
    const safeYear = fallbackYear || new Date().getFullYear();
    return { year: safeYear, month: parsedNum, key: formatYearMonthKey(safeYear, parsedNum) };
  }
  return null;
}

function getPreviousMonthKey(year, month) {
  if (month <= 1) {
    return formatYearMonthKey(year - 1, 12);
  }
  return formatYearMonthKey(year, month - 1);
}

function getNextMonthKey(year, month) {
  if (month >= 12) {
    return formatYearMonthKey(year + 1, 1);
  }
  return formatYearMonthKey(year, month + 1);
}

function buildMonthInfo(rawMonthInfo, monthQueryParam, baseCurrentMonth, baseCurrentYear) {
  const parsedTarget = parseYearMonth(monthQueryParam, baseCurrentYear);
  const activeYear = parsedTarget?.year || Number(rawMonthInfo?.year) || baseCurrentYear;
  const activeMonth = parsedTarget?.month || Number(rawMonthInfo?.month) || baseCurrentMonth;
  const activeMonthKey = formatYearMonthKey(activeYear, activeMonth);
  const currentMonthKey = formatYearMonthKey(baseCurrentYear, baseCurrentMonth);
  const isCurrentMonth = monthQueryParam === null
    ? (rawMonthInfo?.isCurrentMonth !== undefined ? Boolean(rawMonthInfo.isCurrentMonth) : activeMonthKey === currentMonthKey)
    : activeMonthKey === currentMonthKey;
  const parsedRawPrev = parseYearMonth(rawMonthInfo?.previousMonth, activeMonth === 1 ? activeYear - 1 : activeYear);
  const prevMonthKey = parsedRawPrev?.key || getPreviousMonthKey(activeYear, activeMonth);
  const canGoPrevious = rawMonthInfo?.canGoPrevious !== undefined ? Boolean(rawMonthInfo.canGoPrevious) : true;
  const parsedRawNext = parseYearMonth(rawMonthInfo?.nextMonth, activeMonth === 12 ? activeYear + 1 : activeYear);
  const nextMonthKey = parsedRawNext?.key || getNextMonthKey(activeYear, activeMonth);
  const canGoNext = rawMonthInfo?.canGoNext !== undefined
    ? Boolean(rawMonthInfo.canGoNext)
    : activeMonthKey < currentMonthKey;
  const localizedLabel = {
    ar: `${ARABIC_MONTH_NAMES[activeMonth - 1] || ''} ${activeYear}`,
    en: `${ENGLISH_MONTH_NAMES[activeMonth - 1] || ''} ${activeYear}`
  };
  const rawLabel = rawMonthInfo?.month === activeMonth ? rawMonthInfo.monthLabel : null;
  const monthLabel = rawLabel ? extractSafeText(rawLabel, true).replace(/\(الشهر الحالي\)|\(Current Month\)/gi, '').trim() : localizedLabel;
  return {
    year: activeYear,
    month: activeMonth,
    monthKey: activeMonthKey,
    monthLabel,
    isCurrentMonth,
    previousMonth: canGoPrevious ? prevMonthKey : null,
    nextMonth: canGoNext ? nextMonthKey : null,
    canGoPrevious,
    canGoNext,
    startDate: rawMonthInfo?.startDate || null,
    endDate: rawMonthInfo?.endDate || null,
  };
}

function extractSafeText(val, isRtl = true) {
  if (val === null || val === undefined) return '';
  if (typeof val === 'string') return val.trim();
  if (typeof val === 'number') return String(val);
  if (typeof val === 'object') {
    const localized = isRtl ? (val.ar || val.en) : (val.en || val.ar);
    if (localized && typeof localized === 'string') return localized.trim();
    if (val.reason && typeof val.reason === 'string') return val.reason.trim();
    if (val.name && typeof val.name === 'string') return val.name.trim();
    if (val.title && typeof val.title === 'string') return val.title.trim();
    if (val.notes && typeof val.notes === 'string') return val.notes.trim();
    if (val.text && typeof val.text === 'string') return val.text.trim();
    return '';
  }
  return '';
}

function extractExcuseDetails(excuse, isRtl = true) {
  if (!excuse) return null;
  if (typeof excuse === 'string') {
    const trimmed = excuse.trim();
    return trimmed ? { reason: trimmed, submittedBy: '', notes: '' } : null;
  }
  if (typeof excuse === 'object') {
    const reason = extractSafeText(excuse.reason || excuse.text, isRtl);
    const submittedBy = extractSafeText(excuse.submittedBy, isRtl);
    const notes = extractSafeText(excuse.notes, isRtl);
    if (!reason && !notes && !submittedBy) return null;
    return {
      reason: reason || notes,
      submittedBy,
      notes: notes !== reason ? notes : '',
    };
  }
  return null;
}

export default function ParentAttendance() {
  const { t, i18n } = useTranslation();
  const [searchParams] = useSearchParams();
  const isRtl = i18n.language.startsWith('ar');
  const studentIdQuery = searchParams.get('studentId');
  const [isLoading, setIsLoading] = useState(true);
  const [studentsList, setStudentsList] = useState([]);
  const [selectedStudentId, setSelectedStudentId] = useState('');
  const [monthQuery, setMonthQuery] = useState(null);
  const currentMonthInfoRef = useRef(null);
  const [attendanceData, setAttendanceData] = useState({
    student: null,
    monthInfo: null,
    statistics: null,
    days: []
  });
  const getAttendanceStatusBadge = (attendanceStatus, color) => {
    const raw = String(attendanceStatus || '').trim();
    if (raw === 'حاضر' || raw === 'attended' || color === 'green') {
      return {
        label: raw || (isRtl ? 'حاضر' : 'Present'),
        badgeClass: 'bg-emerald-50 text-emerald-600 border border-emerald-200 dark:bg-emerald-950/40 dark:text-emerald-400 dark:border-emerald-900/30',
        dotClass: 'bg-emerald-500'
      };
    }
    if (raw === 'غائب' || raw === 'absent' || color === 'red') {
      return {
        label: raw || (isRtl ? 'غائب' : 'Absent'),
        badgeClass: 'bg-rose-50 text-rose-600 border border-rose-200 dark:bg-rose-950/40 dark:text-rose-400 dark:border-rose-900/30',
        dotClass: 'bg-rose-500'
      };
    }
    if (raw === 'متأخر' || raw === 'late' || color === 'amber') {
      return {
        label: raw || (isRtl ? 'متأخر' : 'Late'),
        badgeClass: 'bg-amber-50 text-amber-600 border border-amber-200 dark:bg-amber-950/40 dark:text-amber-400 dark:border-amber-900/30',
        dotClass: 'bg-amber-500'
      };
    }
    if (raw === 'معذور' || raw === 'excused') {
      return {
        label: raw || (isRtl ? 'معذور' : 'Excused'),
        badgeClass: 'bg-sky-50 text-sky-600 border border-sky-200 dark:bg-sky-950/40 dark:text-sky-400 dark:border-sky-900/30',
        dotClass: 'bg-sky-500'
      };
    }
    return {
      label: raw || (isRtl ? 'قيد الانتظار' : 'Pending'),
      badgeClass: 'bg-slate-100 text-slate-600 border border-slate-200 dark:bg-slate-800 dark:text-slate-400 dark:border-slate-700',
      dotClass: 'bg-slate-400'
    };
  };
  const getSessionStatusBadge = (sessionStatus) => {
    const raw = String(sessionStatus || '').trim();
    if (raw === 'ملغاة') {
      return 'bg-rose-100 text-rose-700 dark:bg-rose-950/30 dark:text-rose-400';
    }
    if (raw === 'مكتملة') {
      return 'bg-emerald-100 text-emerald-700 dark:bg-emerald-950/30 dark:text-emerald-400';
    }
    return 'bg-blue-100 text-blue-700 dark:bg-blue-950/30 dark:text-blue-400';
  };
  useEffect(() => {
    let isMounted = true;
    const fetchStudents = async () => {
      try {
        const res = await parentApi.fetchChildren();
        if (isMounted && res?.success && Array.isArray(res.data) && res.data.length > 0) {
          setStudentsList(res.data);
          const match = studentIdQuery ? res.data.find((s) => (s.student_id || s.id || s.user_id) === studentIdQuery) : null;
          const initialStudent = match || res.data[0];
          const defaultId = initialStudent?.student_id || initialStudent?.id || initialStudent?.user_id;
          setSelectedStudentId((prev) => prev || defaultId);
        }
      } catch (err) {
        console.error('Failed to load children for attendance:', err);
      }
    };
    fetchStudents();
    return () => {
      isMounted = false;
    };
  }, [studentIdQuery]);
  useEffect(() => {
    if (!selectedStudentId) return;
    let isMounted = true;
    const fetchAttendanceData = async () => {
      try {
        const parsedTarget = parseYearMonth(monthQuery);
        const params = {};
        if (parsedTarget?.key) {
          params.month = parsedTarget.key;
        }
        const res = await parentApi.fetchAttendance(selectedStudentId, params);
        if (isMounted && res?.success && res.data) {
          const rawInfo = res.data.monthInfo || null;
          const currentRealDate = new Date();
          const baseMonth = currentMonthInfoRef.current?.month || Number(rawInfo?.baseMonth || rawInfo?.currentMonth) || (currentRealDate.getMonth() + 1);
          const baseYear = currentMonthInfoRef.current?.year || Number(rawInfo?.baseYear || rawInfo?.currentYear) || currentRealDate.getFullYear();
          if (!currentMonthInfoRef.current && !monthQuery && rawInfo?.month) {
            currentMonthInfoRef.current = {
              month: Number(rawInfo.month),
              year: Number(rawInfo.year) || baseYear
            };
          }
          const resolvedMonthInfo = buildMonthInfo(rawInfo, monthQuery, baseMonth, baseYear);
          setAttendanceData({
            student: res.data.student || null,
            monthInfo: resolvedMonthInfo,
            statistics: res.data.statistics || null,
            days: Array.isArray(res.data.days) ? res.data.days : []
          });
        }
      } catch (err) {
        console.error('Failed to load student attendance:', err);
      } finally {
        if (isMounted) setIsLoading(false);
      }
    };
    fetchAttendanceData();
    return () => {
      isMounted = false;
    };
  }, [selectedStudentId, monthQuery]);
  const handlePrevMonth = () => {
    if (attendanceData.monthInfo?.previousMonth) {
      setIsLoading(true);
      setMonthQuery(attendanceData.monthInfo.previousMonth);
    }
  };
  const handleNextMonth = () => {
    if (attendanceData.monthInfo?.nextMonth) {
      setIsLoading(true);
      setMonthQuery(attendanceData.monthInfo.nextMonth);
    }
  };
  const handleCurrentMonth = () => {
    setIsLoading(true);
    setMonthQuery(null);
  };
  const statsList = [
    {
      id: 'rate',
      label: isRtl ? 'معدل الحضور' : 'Attendance Rate',
      value: attendanceData.statistics?.attendanceRateFormatted || `${attendanceData.statistics?.attendanceRate || 0}%`,
      color: 'text-[#0f7a6c] dark:text-emerald-400',
      bg: 'bg-[#0f7a6c]/10 dark:bg-emerald-950/30',
      icon: CheckCircle2
    },
    {
      id: 'attended',
      label: isRtl ? 'حضور' : 'Present',
      value: String(attendanceData.statistics?.attendedCount ?? 0),
      color: 'text-emerald-600 dark:text-emerald-400',
      bg: 'bg-emerald-50 dark:bg-emerald-950/30',
      icon: CheckCircle2
    },
    {
      id: 'absent',
      label: isRtl ? 'غياب' : 'Absent',
      value: String(attendanceData.statistics?.absentCount ?? 0),
      color: 'text-rose-600 dark:text-rose-400',
      bg: 'bg-rose-50 dark:bg-rose-950/30',
      icon: XCircle
    },
    {
      id: 'late',
      label: isRtl ? 'تأخر' : 'Late',
      value: String(attendanceData.statistics?.lateCount ?? 0),
      color: 'text-amber-600 dark:text-amber-400',
      bg: 'bg-amber-50 dark:bg-amber-950/30',
      icon: Clock
    },
    {
      id: 'excused',
      label: isRtl ? 'معذور' : 'Excused',
      value: String(attendanceData.statistics?.excusedCount ?? 0),
      color: 'text-sky-600 dark:text-sky-400',
      bg: 'bg-sky-50 dark:bg-sky-950/30',
      icon: FileText
    },
    {
      id: 'pending',
      label: isRtl ? 'قيد الانتظار' : 'Pending',
      value: String(attendanceData.statistics?.pendingCount ?? 0),
      color: 'text-slate-600 dark:text-slate-400',
      bg: 'bg-slate-100 dark:bg-slate-800',
      icon: AlertCircle
    }
  ];
  const totalSessionsCount = attendanceData.days.reduce((acc, d) => acc + (d.sessionsCount || d.sessions?.length || 0), 0);
  const studentDisplayName = extractSafeText(attendanceData.student?.name, isRtl);
  const monthLabelText = extractSafeText(attendanceData.monthInfo?.monthLabel, isRtl);
  return (
    <motion.div
      variants={containerVariants}
      initial="hidden"
      animate="show"
      className="p-4 md:p-8 max-w-7xl mx-auto space-y-6 font-sans bg-transparent min-h-screen"
      dir={isRtl ? 'rtl' : 'ltr'}
    >
      <motion.div variants={itemVariants} className="bg-white dark:bg-slate-800 rounded-3xl p-6 md:p-8 shadow-sm border border-slate-100 dark:border-slate-700 flex flex-col md:flex-row items-center justify-between gap-6">
        <div>
          <h1 className="text-2xl font-black text-slate-800 dark:text-slate-100">{t('parent.attendance.title', 'سجل الحضور والغياب')}</h1>
          <p className="text-sm text-slate-500 dark:text-slate-400 mt-1">
            {studentDisplayName ? (isRtl ? `متابعة حضور التلميذ ${studentDisplayName}` : `Tracking attendance for ${studentDisplayName}`) : (isRtl ? 'متابعة سجل حضور وغياب الأبناء ونسب الالتزام بالحصص' : 'Track children attendance records and session commitment')}
          </p>
        </div>
        <div className="flex flex-col sm:flex-row items-center gap-3 w-full md:w-auto">
          <div className="relative w-full sm:w-60">
            <select
              value={selectedStudentId}
              onChange={(e) => {
                setIsLoading(true);
                setSelectedStudentId(e.target.value);
              }}
              className="w-full appearance-none bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-200 rounded-2xl py-3 px-4 pe-10 focus:outline-none focus:ring-2 focus:ring-[#0f7a6c]/40 font-bold text-sm cursor-pointer transition-all shadow-sm"
            >
              {studentsList.map((s) => {
                const sId = s.student_id || s.id || s.user_id;
                const sName = extractSafeText(s.name, isRtl) || sId;
                return <option key={sId} value={sId}>{sName}</option>;
              })}
            </select>
            <ChevronDown className="w-4 h-4 absolute top-1/2 -translate-y-1/2 end-3 text-slate-400 pointer-events-none" />
          </div>
        </div>
      </motion.div>
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3 md:gap-4">
        {statsList.map((st) => (
          <motion.div
            variants={itemVariants}
            key={st.id}
            className="bg-white dark:bg-slate-800 rounded-2xl p-4 md:p-5 shadow-sm border border-slate-100 dark:border-slate-700 flex flex-col items-center justify-center gap-2 text-center"
          >
            <div className={`w-9 h-9 rounded-xl flex items-center justify-center ${st.bg} ${st.color}`}>
              <st.icon className="w-5 h-5" />
            </div>
            <span className="text-xs text-slate-500 dark:text-slate-400 font-medium">{st.label}</span>
            <span className={`text-xl md:text-2xl font-black ${st.color}`}>{st.value}</span>
          </motion.div>
        ))}
      </div>
      {attendanceData.monthInfo && (
        <motion.div variants={itemVariants} className="bg-white dark:bg-slate-800 rounded-2xl p-4 md:p-6 shadow-sm border border-slate-100 dark:border-slate-700 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-[#0f7a6c]/10 text-[#0f7a6c] dark:bg-emerald-950/40 dark:text-emerald-400 flex items-center justify-center shrink-0">
              <Calendar className="w-5 h-5" />
            </div>
            <div>
              <div className="flex items-center gap-2">
                <span className="font-extrabold text-base text-slate-800 dark:text-slate-100">{monthLabelText}</span>
                {attendanceData.monthInfo.isCurrentMonth && (
                  <span className="px-2.5 py-0.5 rounded-full text-[11px] font-bold bg-emerald-500 text-white">{isRtl ? 'الشهر الحالي' : 'Current Month'}</span>
                )}
              </div>
              <p className="text-xs text-slate-400 dark:text-slate-500 font-medium mt-0.5">
                {isRtl ? 'إجمالي الحصص المسجلة:' : 'Total recorded sessions:'} {attendanceData.statistics?.totalSessions ?? 0} {isRtl ? 'حصة' : 'sessions'}
              </p>
            </div>
          </div>
          <div className="flex items-center gap-2">
            {!attendanceData.monthInfo.isCurrentMonth && (
              <button
                type="button"
                onClick={handleCurrentMonth}
                className="px-3 py-2 text-xs font-bold text-[#0f7a6c] dark:text-emerald-400 bg-emerald-50 dark:bg-emerald-950/30 hover:bg-emerald-100 rounded-xl transition-colors cursor-pointer"
              >
                {isRtl ? 'الشهر الحالي' : 'Current Month'}
              </button>
            )}
            <button
              type="button"
              onClick={handlePrevMonth}
              disabled={!attendanceData.monthInfo.canGoPrevious || !attendanceData.monthInfo.previousMonth}
              className="p-2.5 rounded-xl border border-slate-200 dark:border-slate-700 hover:bg-slate-50 dark:hover:bg-slate-700/60 disabled:opacity-30 disabled:cursor-not-allowed transition-all text-slate-700 dark:text-slate-200 cursor-pointer"
              title={isRtl ? 'الشهر السابق' : 'Previous Month'}
            >
              {isRtl ? <ChevronRight className="w-4 h-4" /> : <ChevronLeft className="w-4 h-4" />}
            </button>
            <button
              type="button"
              onClick={handleNextMonth}
              disabled={!attendanceData.monthInfo.canGoNext || !attendanceData.monthInfo.nextMonth}
              className="p-2.5 rounded-xl border border-slate-200 dark:border-slate-700 hover:bg-slate-50 dark:hover:bg-slate-700/60 disabled:opacity-30 disabled:cursor-not-allowed transition-all text-slate-700 dark:text-slate-200 cursor-pointer"
              title={isRtl ? 'الشهر القادم' : 'Next Month'}
            >
              {isRtl ? <ChevronLeft className="w-4 h-4" /> : <ChevronRight className="w-4 h-4" />}
            </button>
          </div>
        </motion.div>
      )}
      {isLoading ? (
        <div className="flex justify-center items-center py-24">
          <div className="w-9 h-9 rounded-full border-3 border-[#0f7a6c] border-t-transparent animate-spin" />
        </div>
      ) : totalSessionsCount === 0 ? (
        <motion.div variants={itemVariants} className="bg-white dark:bg-slate-800 rounded-3xl p-16 text-center border border-slate-100 dark:border-slate-700 shadow-sm space-y-3">
          <div className="w-16 h-16 rounded-2xl bg-slate-50 dark:bg-slate-900 text-slate-400 flex items-center justify-center mx-auto">
            <Calendar className="w-8 h-8" />
          </div>
          <h3 className="text-lg font-bold text-slate-700 dark:text-slate-200">{isRtl ? 'لا توجد حصص مسجلة في هذا الشهر' : 'No recorded sessions this month'}</h3>
          <p className="text-xs text-slate-400">{isRtl ? 'يمكنك التنقل بين الشهور للاطلاع على سجلات الحضور السابقة.' : 'You can navigate between months to view previous attendance records.'}</p>
        </motion.div>
      ) : (
        <div className="space-y-6">
          {attendanceData.days.map((dayGroup, dIdx) => (
            <motion.div variants={itemVariants} key={dayGroup.date || dIdx} className="space-y-3">
              <div className="flex items-center gap-2 ps-2">
                <span className="font-extrabold text-base text-slate-800 dark:text-slate-100">{extractSafeText(dayGroup.day, isRtl)}</span>
                <span className="text-xs font-semibold text-slate-400">{extractSafeText(dayGroup.formattedDate || dayGroup.date, isRtl)}</span>
                <span className="px-2 py-0.5 rounded-md text-[10px] font-bold bg-slate-100 dark:bg-slate-800 text-slate-500">
                  {dayGroup.sessionsCount || dayGroup.sessions?.length || 0} {isRtl ? 'حصة' : 'sessions'}
                </span>
              </div>
              <div className="grid grid-cols-1 gap-4">
                {(dayGroup.sessions || []).map((session) => {
                  const attBadge = getAttendanceStatusBadge(session.attendanceStatus, session.color);
                  const sessStatusClass = getSessionStatusBadge(session.sessionStatus);
                  const sessionTitle = extractSafeText(session.title, isRtl) || (isRtl ? `الحصة رقم ${session.sessionNumber || ''}` : `Session #${session.sessionNumber || ''}`);
                  const groupTitle = extractSafeText(session.group, isRtl);
                  const teacherName = extractSafeText(session.teacher, isRtl);
                  const notesText = extractSafeText(session.notes, isRtl);
                  const excuseInfo = extractExcuseDetails(session.excuse, isRtl);
                  const timeDisplay = extractSafeText(session.timeRange || session.startTime, isRtl);
                  return (
                    <motion.div
                      whileHover={{ y: -2 }}
                      transition={{ duration: 0.2 }}
                      key={session.id}
                      className="bg-white dark:bg-slate-800 rounded-3xl p-5 md:p-6 shadow-sm border border-slate-100 dark:border-slate-700 flex flex-col md:flex-row items-start md:items-center justify-between gap-6"
                    >
                      <div className="flex flex-col sm:flex-row items-start sm:items-center gap-5 w-full md:w-auto flex-1">
                        <div className="flex flex-col items-center justify-center bg-slate-50 dark:bg-slate-900/80 rounded-2xl px-4 py-3 shrink-0 min-w-[110px] text-center border border-slate-100 dark:border-slate-800">
                          <div className="flex items-center gap-1.5 text-amber-500 text-xs font-bold mb-1">
                            <Clock className="w-3.5 h-3.5" />
                            <span>{timeDisplay}</span>
                          </div>
                          <span className="text-[11px] text-slate-400 font-medium">
                            {session.durationMinutes ? `${session.durationMinutes} ${isRtl ? 'دقيقة' : 'min'}` : (extractSafeText(session.day, isRtl) || extractSafeText(dayGroup.day, isRtl))}
                          </span>
                        </div>
                        <div className="space-y-1.5 flex-1 min-w-0">
                          <div className="flex items-center gap-2 flex-wrap">
                            <h3 className="text-base font-extrabold text-slate-800 dark:text-slate-100">
                              {sessionTitle}
                            </h3>
                            <span className={`px-2.5 py-0.5 rounded-full text-xs font-bold ${attBadge.badgeClass}`}>
                              {attBadge.label}
                            </span>
                            {session.sessionStatus && (
                              <span className={`px-2 py-0.5 rounded-md text-[11px] font-bold ${sessStatusClass}`}>
                                {extractSafeText(session.sessionStatus, isRtl)}
                              </span>
                            )}
                          </div>
                          <div className="flex flex-wrap items-center gap-y-1 gap-x-4 text-xs text-slate-500 dark:text-slate-400 font-medium">
                            {groupTitle && (
                              <div className="flex items-center gap-1.5 text-[#0f7a6c] dark:text-emerald-400 font-bold truncate">
                                <BookOpen className="w-3.5 h-3.5 shrink-0" />
                                <span className="truncate">{groupTitle}</span>
                              </div>
                            )}
                            {teacherName && (
                              <div className="flex items-center gap-1">
                                <span className="text-slate-400">{isRtl ? 'المعلم:' : 'Teacher:'}</span>
                                <span className="font-semibold text-slate-700 dark:text-slate-300">{teacherName}</span>
                              </div>
                            )}
                            {studentDisplayName && (
                              <div className="flex items-center gap-1">
                                <User className="w-3.5 h-3.5 text-slate-400" />
                                <span className="font-semibold text-slate-700 dark:text-slate-300">{studentDisplayName}</span>
                              </div>
                            )}
                          </div>
                          {Boolean(notesText) && (
                            <p className="text-xs text-slate-500 dark:text-slate-400 mt-2 bg-slate-50 dark:bg-slate-900/50 p-2.5 rounded-xl border border-slate-100 dark:border-slate-800">
                              <span className="font-bold text-slate-700 dark:text-slate-300">{isRtl ? 'ملاحظات: ' : 'Notes: '}</span>
                              <span>{notesText}</span>
                            </p>
                          )}
                          {excuseInfo && (
                            <div className="text-xs text-amber-800 dark:text-amber-300 mt-2 bg-amber-50 dark:bg-amber-950/30 p-2.5 rounded-xl border border-amber-200 dark:border-amber-900/30 space-y-1">
                              <div className="flex items-center gap-1.5 font-bold">
                                <FileText className="w-3.5 h-3.5 text-amber-600 dark:text-amber-400 shrink-0" />
                                <span>{isRtl ? 'العذر المقبول: ' : 'Accepted Excuse: '}</span>
                                <span className="font-semibold text-amber-900 dark:text-amber-200">
                                  {excuseInfo.reason}
                                </span>
                              </div>
                              {excuseInfo.submittedBy && (
                                <div className="text-[11px] text-amber-700/80 dark:text-amber-400/80 ps-5">
                                  <span>{isRtl ? 'مقدم العذر: ' : 'Submitted by: '}</span>
                                  <span className="font-semibold">{excuseInfo.submittedBy}</span>
                                </div>
                              )}
                              {excuseInfo.notes && (
                                <div className="text-[11px] text-amber-700/80 dark:text-amber-400/80 ps-5">
                                  <span>{isRtl ? 'ملاحظة الإدارة: ' : 'Admin note: '}</span>
                                  <span className="font-semibold">{excuseInfo.notes}</span>
                                </div>
                              )}
                            </div>
                          )}
                        </div>
                      </div>
                    </motion.div>
                  );
                })}
              </div>
            </motion.div>
          ))}
        </div>
      )}
    </motion.div>
  );
}

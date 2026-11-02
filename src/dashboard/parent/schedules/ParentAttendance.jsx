import { useState, useEffect, useCallback } from 'react';
import { motion } from 'framer-motion';
import { ChevronRight, ChevronLeft, ChevronDown, CheckCircle2, XCircle, Clock, FileText, AlertCircle, Calendar, User, BookOpen } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import { parentApi } from '@/shared/services/api/parentApi';

const containerVariants = {
  hidden: { opacity: 0 },
  show: { opacity: 1, transition: { staggerChildren: 0.08 } }
};

const itemVariants = {
  hidden: { opacity: 0, y: 15 },
  show: { opacity: 1, y: 0, transition: { type: 'spring', stiffness: 320, damping: 26 } }
};

export default function ParentAttendance() {
  const { t, i18n } = useTranslation();
  const isRtl = i18n.language.startsWith('ar');
  const [isLoading, setIsLoading] = useState(true);
  const [studentsList, setStudentsList] = useState([]);
  const [selectedStudentId, setSelectedStudentId] = useState('');
  const [monthQuery, setMonthQuery] = useState(null);
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
        label: raw || 'حاضر',
        badgeClass: 'bg-emerald-50 text-emerald-600 border border-emerald-200 dark:bg-emerald-950/40 dark:text-emerald-400 dark:border-emerald-900/30',
        dotClass: 'bg-emerald-500'
      };
    }
    if (raw === 'غائب' || raw === 'absent' || color === 'red') {
      return {
        label: raw || 'غائب',
        badgeClass: 'bg-rose-50 text-rose-600 border border-rose-200 dark:bg-rose-950/40 dark:text-rose-400 dark:border-rose-900/30',
        dotClass: 'bg-rose-500'
      };
    }
    if (raw === 'متأخر' || raw === 'late' || color === 'amber') {
      return {
        label: raw || 'متأخر',
        badgeClass: 'bg-amber-50 text-amber-600 border border-amber-200 dark:bg-amber-950/40 dark:text-amber-400 dark:border-amber-900/30',
        dotClass: 'bg-amber-500'
      };
    }
    if (raw === 'معذور' || raw === 'excused') {
      return {
        label: raw || 'معذور',
        badgeClass: 'bg-sky-50 text-sky-600 border border-sky-200 dark:bg-sky-950/40 dark:text-sky-400 dark:border-sky-900/30',
        dotClass: 'bg-sky-500'
      };
    }
    return {
      label: raw || 'قيد الانتظار',
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

  const loadStudents = useCallback(async () => {
    try {
      const res = await parentApi.fetchChildren();
      if (res?.success && Array.isArray(res.data) && res.data.length > 0) {
        setStudentsList(res.data);
        const first = res.data[0];
        const defaultId = first.student_id || first.id || first.user_id;
        setSelectedStudentId((prev) => prev || defaultId);
      }
    } catch (err) {
      console.error('Failed to load children for attendance:', err);
    }
  }, []);

  const loadAttendance = useCallback(async (studentId, monthParam) => {
    if (!studentId) return;
    setIsLoading(true);
    try {
      const params = {};
      if (monthParam) {
        params.monthKey = monthParam;
        if (monthParam.includes('-')) {
          const parts = monthParam.split('-');
          params.year = Number(parts[0]);
          params.month = Number(parts[1]);
        }
      }
      const res = await parentApi.fetchAttendance(studentId, params);
      if (res?.success && res.data) {
        setAttendanceData({
          student: res.data.student || null,
          monthInfo: res.data.monthInfo || null,
          statistics: res.data.statistics || null,
          days: Array.isArray(res.data.days) ? res.data.days : []
        });
      }
    } catch (err) {
      console.error('Failed to load student attendance:', err);
    } finally {
      setIsLoading(false);
    }
  }, []);

  useEffect(() => {
    loadStudents();
  }, [loadStudents]);

  useEffect(() => {
    if (selectedStudentId) {
      loadAttendance(selectedStudentId, monthQuery);
    }
  }, [loadAttendance, selectedStudentId, monthQuery]);

  const handlePrevMonth = () => {
    if (attendanceData.monthInfo?.previousMonth) {
      setMonthQuery(attendanceData.monthInfo.previousMonth);
    }
  };

  const handleNextMonth = () => {
    if (attendanceData.monthInfo?.nextMonth) {
      setMonthQuery(attendanceData.monthInfo.nextMonth);
    }
  };

  const handleCurrentMonth = () => {
    setMonthQuery(null);
  };

  const statsList = [
    {
      id: 'rate',
      label: 'معدل الحضور',
      value: attendanceData.statistics?.attendanceRateFormatted || `${attendanceData.statistics?.attendanceRate || 0}%`,
      color: 'text-[#0f7a6c] dark:text-emerald-400',
      bg: 'bg-[#0f7a6c]/10 dark:bg-emerald-950/30',
      icon: CheckCircle2
    },
    {
      id: 'attended',
      label: 'حضور',
      value: String(attendanceData.statistics?.attendedCount ?? 0),
      color: 'text-emerald-600 dark:text-emerald-400',
      bg: 'bg-emerald-50 dark:bg-emerald-950/30',
      icon: CheckCircle2
    },
    {
      id: 'absent',
      label: 'غياب',
      value: String(attendanceData.statistics?.absentCount ?? 0),
      color: 'text-rose-600 dark:text-rose-400',
      bg: 'bg-rose-50 dark:bg-rose-950/30',
      icon: XCircle
    },
    {
      id: 'late',
      label: 'تأخر',
      value: String(attendanceData.statistics?.lateCount ?? 0),
      color: 'text-amber-600 dark:text-amber-400',
      bg: 'bg-amber-50 dark:bg-amber-950/30',
      icon: Clock
    },
    {
      id: 'excused',
      label: 'معذور',
      value: String(attendanceData.statistics?.excusedCount ?? 0),
      color: 'text-sky-600 dark:text-sky-400',
      bg: 'bg-sky-50 dark:bg-sky-950/30',
      icon: FileText
    },
    {
      id: 'pending',
      label: 'قيد الانتظار',
      value: String(attendanceData.statistics?.pendingCount ?? 0),
      color: 'text-slate-600 dark:text-slate-400',
      bg: 'bg-slate-100 dark:bg-slate-800',
      icon: AlertCircle
    }
  ];

  const totalSessionsCount = attendanceData.days.reduce((acc, d) => acc + (d.sessionsCount || d.sessions?.length || 0), 0);

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
            {attendanceData.student?.name ? `متابعة حضور التلميذ ${attendanceData.student.name}` : 'متابعة سجل حضور وغياب الأبناء ونسب الالتزام بالحصص'}
          </p>
        </div>

        <div className="flex flex-col sm:flex-row items-center gap-3 w-full md:w-auto">
          <div className="relative w-full sm:w-60">
            <select
              value={selectedStudentId}
              onChange={(e) => setSelectedStudentId(e.target.value)}
              className="w-full appearance-none bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-200 rounded-2xl py-3 px-4 pe-10 focus:outline-none focus:ring-2 focus:ring-[#0f7a6c]/40 font-bold text-sm cursor-pointer transition-all shadow-sm"
            >
              {studentsList.map((s) => {
                const sId = s.student_id || s.id || s.user_id;
                const sName = typeof s.name === 'object' ? (isRtl ? s.name.ar : s.name.en) : (s.name || sId);
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
                <span className="font-extrabold text-base text-slate-800 dark:text-slate-100">{attendanceData.monthInfo.monthLabel}</span>
                {attendanceData.monthInfo.isCurrentMonth && (
                  <span className="px-2.5 py-0.5 rounded-full text-[11px] font-bold bg-emerald-500 text-white">الشهر الحالي</span>
                )}
              </div>
              <p className="text-xs text-slate-400 dark:text-slate-500 font-medium mt-0.5">
                إجمالي الحصص المسجلة: {attendanceData.statistics?.totalSessions ?? 0} حصة
              </p>
            </div>
          </div>

          <div className="flex items-center gap-2">
            {!attendanceData.monthInfo.isCurrentMonth && (
              <button
                onClick={handleCurrentMonth}
                className="px-3 py-2 text-xs font-bold text-[#0f7a6c] dark:text-emerald-400 bg-emerald-50 dark:bg-emerald-950/30 hover:bg-emerald-100 rounded-xl transition-colors"
              >
                الشهر الحالي
              </button>
            )}

            <button
              onClick={handlePrevMonth}
              disabled={!attendanceData.monthInfo.canGoPrevious && !attendanceData.monthInfo.previousMonth}
              className="p-2.5 rounded-xl border border-slate-200 dark:border-slate-700 hover:bg-slate-50 dark:hover:bg-slate-700/60 disabled:opacity-30 disabled:cursor-not-allowed transition-all text-slate-700 dark:text-slate-200"
              title="الشهر السابق"
            >
              {isRtl ? <ChevronRight className="w-4 h-4" /> : <ChevronLeft className="w-4 h-4" />}
            </button>

            <button
              onClick={handleNextMonth}
              disabled={!attendanceData.monthInfo.canGoNext && !attendanceData.monthInfo.nextMonth}
              className="p-2.5 rounded-xl border border-slate-200 dark:border-slate-700 hover:bg-slate-50 dark:hover:bg-slate-700/60 disabled:opacity-30 disabled:cursor-not-allowed transition-all text-slate-700 dark:text-slate-200"
              title="الشهر القادم"
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
          <h3 className="text-lg font-bold text-slate-700 dark:text-slate-200">لا توجد حصص مسجلة في هذا الشهر</h3>
          <p className="text-xs text-slate-400">يمكنك التنقل بين الشهور للاطلاع على سجلات الحضور السابقة.</p>
        </motion.div>
      ) : (
        <div className="space-y-6">
          {attendanceData.days.map((dayGroup, dIdx) => (
            <motion.div variants={itemVariants} key={dayGroup.date || dIdx} className="space-y-3">
              <div className="flex items-center gap-2 ps-2">
                <span className="font-extrabold text-base text-slate-800 dark:text-slate-100">{dayGroup.day}</span>
                <span className="text-xs font-semibold text-slate-400">{dayGroup.formattedDate || dayGroup.date}</span>
                <span className="px-2 py-0.5 rounded-md text-[10px] font-bold bg-slate-100 dark:bg-slate-800 text-slate-500">
                  {dayGroup.sessionsCount || dayGroup.sessions?.length || 0} حصة
                </span>
              </div>

              <div className="grid grid-cols-1 gap-4">
                {(dayGroup.sessions || []).map((session) => {
                  const attBadge = getAttendanceStatusBadge(session.attendanceStatus, session.color);
                  const sessStatusClass = getSessionStatusBadge(session.sessionStatus);
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
                            <span>{session.timeRange || session.startTime}</span>
                          </div>
                          <span className="text-[11px] text-slate-400 font-medium">
                            {session.durationMinutes ? `${session.durationMinutes} دقيقة` : (session.day || dayGroup.day)}
                          </span>
                        </div>

                        <div className="space-y-1.5 flex-1">
                          <div className="flex items-center gap-2 flex-wrap">
                            <h3 className="text-base font-extrabold text-slate-800 dark:text-slate-100">
                              {session.title || `الحصة رقم ${session.sessionNumber || ''}`}
                            </h3>
                            <span className={`px-2.5 py-0.5 rounded-full text-xs font-bold ${attBadge.badgeClass}`}>
                              {attBadge.label}
                            </span>
                            {session.sessionStatus && (
                              <span className={`px-2 py-0.5 rounded-md text-[11px] font-bold ${sessStatusClass}`}>
                                {session.sessionStatus}
                              </span>
                            )}
                          </div>

                          <div className="flex flex-wrap items-center gap-y-1 gap-x-4 text-xs text-slate-500 dark:text-slate-400 font-medium">
                            {session.group && (
                              <div className="flex items-center gap-1.5 text-[#0f7a6c] dark:text-emerald-400 font-bold">
                                <BookOpen className="w-3.5 h-3.5" />
                                <span>{session.group}</span>
                              </div>
                            )}
                            {session.teacher && (
                              <div className="flex items-center gap-1">
                                <span className="text-slate-400">المعلم:</span>
                                <span className="font-semibold text-slate-700 dark:text-slate-300">{session.teacher}</span>
                              </div>
                            )}
                            {attendanceData.student?.name && (
                              <div className="flex items-center gap-1">
                                <User className="w-3.5 h-3.5 text-slate-400" />
                                <span className="font-semibold text-slate-700 dark:text-slate-300">{attendanceData.student.name}</span>
                              </div>
                            )}
                          </div>

                          {session.notes && (
                            <p className="text-xs text-slate-500 dark:text-slate-400 mt-2 bg-slate-50 dark:bg-slate-900/50 p-2.5 rounded-xl border border-slate-100 dark:border-slate-800">
                              <span className="font-bold text-slate-700 dark:text-slate-300">ملاحظات: </span>
                              {session.notes}
                            </p>
                          )}
                          {session.excuse && (
                            <p className="text-xs text-amber-700 dark:text-amber-300 mt-2 bg-amber-50 dark:bg-amber-950/30 p-2.5 rounded-xl border border-amber-200 dark:border-amber-900/30">
                              <span className="font-bold">العذر المقبول: </span>
                              {session.excuse}
                            </p>
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

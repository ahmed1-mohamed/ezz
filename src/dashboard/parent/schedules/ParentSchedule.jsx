import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Calendar, Clock, ChevronDown, ChevronRight, ChevronLeft, User, BookOpen } from 'lucide-react';
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

export default function ParentSchedule() {
  const { t, i18n } = useTranslation();
  const isRtl = i18n.language.startsWith('ar');
  const [isLoading, setIsLoading] = useState(true);
  const [selectedStudent, setSelectedStudent] = useState('all');
  const [studentsList, setStudentsList] = useState([]);
  const [targetDate, setTargetDate] = useState(null);
  const [timetableData, setTimetableData] = useState({
    weekInfo: null,
    days: []
  });
  const getStatusBadge = (status, color) => {
    const raw = String(status || '').trim();
    if (raw === 'ملغاة' || color === 'red') {
      return {
        label: raw || (isRtl ? 'ملغاة' : 'Cancelled'),
        badgeClass: 'bg-rose-50 text-rose-600 border border-rose-200 dark:bg-rose-950/30 dark:text-rose-400 dark:border-rose-900/30',
        cardBorder: 'border-s-4 border-s-rose-500'
      };
    }
    if (raw === 'مكتملة' || raw === 'completed' || color === 'green') {
      return {
        label: raw || (isRtl ? 'مكتملة' : 'Completed'),
        badgeClass: 'bg-emerald-50 text-emerald-600 border border-emerald-200 dark:bg-emerald-950/30 dark:text-emerald-400 dark:border-emerald-900/30',
        cardBorder: 'border-s-4 border-s-emerald-500'
      };
    }
    if (raw === 'مباشر الآن' || raw === 'live') {
      return {
        label: isRtl ? 'مباشر الآن' : 'Live Now',
        badgeClass: 'bg-red-600 text-white animate-pulse shadow-sm',
        cardBorder: 'border-s-4 border-s-red-500'
      };
    }
    return {
      label: raw || (isRtl ? 'مجدولة' : 'Scheduled'),
      badgeClass: 'bg-[#0f7a6c]/10 text-[#0f7a6c] border border-[#0f7a6c]/20 dark:bg-emerald-950/30 dark:text-emerald-400 dark:border-emerald-900/30',
      cardBorder: 'border-s-4 border-s-[#0f7a6c]'
    };
  };
  useEffect(() => {
    let isMounted = true;
    async function fetchChildrenList() {
      try {
        const res = await parentApi.fetchChildren();
        if (isMounted && res?.success && Array.isArray(res.data)) {
          setStudentsList(res.data);
        }
      } catch (err) {
        if (isMounted) {
          console.error('Failed to load children for schedule:', err);
        }
      }
    }
    fetchChildrenList();
    return () => {
      isMounted = false;
    };
  }, []);
  useEffect(() => {
    let isMounted = true;
    async function fetchSchedule() {
      setIsLoading(true);
      try {
        const params = {};
        if (targetDate) params.date = targetDate;
        if (selectedStudent && selectedStudent !== 'all') params.studentId = selectedStudent;
        const res = await parentApi.fetchTimetable(params);
        if (isMounted && res?.success && res.data) {
          setTimetableData({
            weekInfo: res.data.weekInfo || null,
            days: Array.isArray(res.data.days) ? res.data.days : []
          });
        }
      } catch (err) {
        if (isMounted) {
          console.error('Failed to load parent timetable:', err);
        }
      } finally {
        if (isMounted) {
          setIsLoading(false);
        }
      }
    }
    fetchSchedule();
    return () => {
      isMounted = false;
    };
  }, [targetDate, selectedStudent]);
  const handlePrevWeek = () => {
    if (timetableData.weekInfo?.previousWeekDate) {
      setTargetDate(timetableData.weekInfo.previousWeekDate);
    }
  };
  const handleNextWeek = () => {
    if (timetableData.weekInfo?.nextWeekDate) {
      setTargetDate(timetableData.weekInfo.nextWeekDate);
    }
  };
  const handleCurrentWeek = () => {
    setTargetDate(null);
  };
  const filteredDays = timetableData.days.map((dayGroup) => {
    const rawSessions = Array.isArray(dayGroup.sessions) ? dayGroup.sessions : [];
    if (selectedStudent === 'all') return dayGroup;
    const matchingSessions = rawSessions.filter((s) => {
      const sId = String(s.studentId || s.student_id || '');
      const sName = String(s.student || '');
      const selectedChild = studentsList.find((c) => String(c.id) === String(selectedStudent) || String(c.student_id) === String(selectedStudent));
      const childName = selectedChild?.name || '';
      return sId === String(selectedStudent) || (childName && sName.includes(childName));
    });
    return { ...dayGroup, sessions: matchingSessions, sessionsCount: matchingSessions.length };
  }).filter((dayGroup) => dayGroup.sessionsCount > 0 || timetableData.days.length <= 1);
  const totalSessionsCount = filteredDays.reduce((acc, d) => acc + (d.sessionsCount || d.sessions?.length || 0), 0);
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
          <h1 className="text-2xl font-black text-slate-800 dark:text-slate-100">{t('parent.schedule.title', 'جدول الحصص')}</h1>
          <p className="text-sm text-slate-500 dark:text-slate-400 mt-1">{t('parent.schedule.subtitle', 'متابعة جدول الحصص الأسبوعية للأبناء بدقة')}</p>
        </div>
        <div className="flex flex-col sm:flex-row items-center gap-3 w-full md:w-auto">
          <div className="relative w-full sm:w-60">
            <select
              value={selectedStudent}
              onChange={(e) => setSelectedStudent(e.target.value)}
              className="w-full appearance-none bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-200 rounded-2xl py-3 px-4 pe-10 focus:outline-none focus:ring-2 focus:ring-[#0f7a6c]/40 font-bold text-sm cursor-pointer transition-all shadow-sm"
            >
              <option value="all">{t('parent.schedule.allStudents', 'جميع الأبناء')}</option>
              {studentsList.map((s) => {
                const sId = s.id || s.student_id;
                const sName = typeof s.name === 'object' ? (isRtl ? s.name.ar : s.name.en) : (s.name || sId);
                return <option key={sId} value={sId}>{sName}</option>;
              })}
            </select>
            <ChevronDown className="w-4 h-4 absolute top-1/2 -translate-y-1/2 end-3 text-slate-400 pointer-events-none" />
          </div>
        </div>
      </motion.div>
      {timetableData.weekInfo && (
        <motion.div variants={itemVariants} className="bg-white dark:bg-slate-800 rounded-2xl p-4 md:p-6 shadow-sm border border-slate-100 dark:border-slate-700 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-[#0f7a6c]/10 text-[#0f7a6c] dark:bg-emerald-950/40 dark:text-emerald-400 flex items-center justify-center shrink-0">
              <Calendar className="w-5 h-5" />
            </div>
            <div>
              <div className="flex items-center gap-2">
                <span className="font-extrabold text-base text-slate-800 dark:text-slate-100">{timetableData.weekInfo.weekLabel || (isRtl ? 'الأسبوع' : 'Week')}</span>
                {timetableData.weekInfo.isCurrentWeek && (
                  <span className="px-2.5 py-0.5 rounded-full text-[11px] font-bold bg-emerald-500 text-white">{isRtl ? 'الحالي' : 'Current'}</span>
                )}
              </div>
              <p className="text-xs text-slate-400 dark:text-slate-500 font-medium mt-0.5">{timetableData.weekInfo.formattedRange}</p>
            </div>
          </div>
          <div className="flex items-center gap-2">
            {!timetableData.weekInfo.isCurrentWeek && (
              <button
                onClick={handleCurrentWeek}
                className="px-3 py-2 text-xs font-bold text-[#0f7a6c] dark:text-emerald-400 bg-emerald-50 dark:bg-emerald-950/30 hover:bg-emerald-100 rounded-xl transition-colors cursor-pointer"
              >
                {isRtl ? 'الأسبوع الحالي' : 'Current Week'}
              </button>
            )}
            <button
              onClick={handlePrevWeek}
              disabled={!timetableData.weekInfo.previousWeekDate || isLoading}
              className="p-2.5 rounded-xl border border-slate-200 dark:border-slate-700 hover:bg-slate-50 dark:hover:bg-slate-700/60 disabled:opacity-30 disabled:cursor-not-allowed transition-all text-slate-700 dark:text-slate-200 cursor-pointer"
              title={isRtl ? 'الأسبوع السابق' : 'Previous Week'}
            >
              {isRtl ? <ChevronRight className="w-4 h-4" /> : <ChevronLeft className="w-4 h-4" />}
            </button>
            <button
              onClick={handleNextWeek}
              disabled={!timetableData.weekInfo.nextWeekDate || isLoading}
              className="p-2.5 rounded-xl border border-slate-200 dark:border-slate-700 hover:bg-slate-50 dark:hover:bg-slate-700/60 disabled:opacity-30 disabled:cursor-not-allowed transition-all text-slate-700 dark:text-slate-200 cursor-pointer"
              title={isRtl ? 'الأسبوع القادم' : 'Next Week'}
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
          <h3 className="text-lg font-bold text-slate-700 dark:text-slate-200">{t('parent.schedule.noClasses', 'لا توجد حصص مجدولة لهذا الأسبوع')}</h3>
          <p className="text-xs text-slate-400">{t('parent.schedule.navigateWeeks', isRtl ? 'يمكنك التنقل بين الأسابيع لمعرفة جدول الحصص القادمة والسابقة.' : 'You can navigate between weeks to view upcoming and previous sessions.')}</p>
        </motion.div>
      ) : (
        <div className="space-y-6">
          {filteredDays.map((dayGroup, dIdx) => (
            <motion.div variants={itemVariants} key={dayGroup.date || dIdx} className="space-y-3">
              <div className="flex items-center gap-2 ps-2">
                <span className="font-extrabold text-base text-slate-800 dark:text-slate-100">{dayGroup.day}</span>
                <span className="text-xs font-semibold text-slate-400">{dayGroup.formattedDate || dayGroup.date}</span>
                <span className="px-2 py-0.5 rounded-md text-[10px] font-bold bg-slate-100 dark:bg-slate-800 text-slate-500">
                  {dayGroup.sessionsCount || dayGroup.sessions?.length || 0} {isRtl ? 'حصة' : 'sessions'}
                </span>
              </div>
              <div className="grid grid-cols-1 gap-4">
                {(dayGroup.sessions || []).map((session) => {
                  const badge = getStatusBadge(session.status, session.color);
                  return (
                    <motion.div
                      whileHover={{ y: -2 }}
                      transition={{ duration: 0.2 }}
                      key={session.id}
                      className={`bg-white dark:bg-slate-800 rounded-3xl p-5 md:p-6 shadow-sm border border-slate-100 dark:border-slate-700 flex flex-col md:flex-row items-start md:items-center justify-between gap-6 ${badge.cardBorder}`}
                    >
                      <div className="flex flex-col sm:flex-row items-start sm:items-center gap-5 w-full md:w-auto flex-1">
                        <div className="flex flex-col items-center justify-center bg-slate-50 dark:bg-slate-900/80 rounded-2xl px-4 py-3 shrink-0 min-w-[110px] text-center border border-slate-100 dark:border-slate-800">
                          <div className="flex items-center gap-1.5 text-amber-500 text-xs font-bold mb-1">
                            <Clock className="w-3.5 h-3.5" />
                            <span>{session.timeRange || session.startTime}</span>
                          </div>
                          <span className="text-[11px] text-slate-400 font-medium">
                            {session.durationMinutes ? `${session.durationMinutes} ${isRtl ? 'دقيقة' : 'min'}` : (session.day || dayGroup.day)}
                          </span>
                        </div>
                        <div className="space-y-1.5 flex-1">
                          <div className="flex items-center gap-2 flex-wrap">
                            <h3 className="text-base font-extrabold text-slate-800 dark:text-slate-100">
                              {session.title || (isRtl ? `الحصة رقم ${session.sessionNumber || ''}` : `Session #${session.sessionNumber || ''}`)}
                            </h3>
                            <span className={`px-2.5 py-0.5 rounded-full text-xs font-bold ${badge.badgeClass}`}>
                              {badge.label}
                            </span>
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
                                <span className="text-slate-400">{isRtl ? 'المعلم:' : 'Teacher:'}</span>
                                <span className="font-semibold text-slate-700 dark:text-slate-300">{session.teacher}</span>
                              </div>
                            )}
                            {session.student && (
                              <div className="flex items-center gap-1">
                                <User className="w-3.5 h-3.5 text-slate-400" />
                                <span className="font-semibold text-slate-700 dark:text-slate-300">{session.student}</span>
                              </div>
                            )}
                          </div>
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

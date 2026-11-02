import { useState, useEffect, useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  Calendar,
  ChevronLeft,
  ChevronRight,
  Clock,
  User,
  Video,
  ExternalLink,
  AlertCircle
} from 'lucide-react';
import { useTranslation } from 'react-i18next';
import { studentPortalApi } from '@/shared/services/api/studentPortalApi';
import Spinner from '@/shared/components/Spinner';

export default function StudentSchedule() {
  const { t, i18n } = useTranslation();
  const isRtl = i18n?.language?.startsWith('ar') ?? true;
  const [timetableData, setTimetableData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [currentDateParam, setCurrentDateParam] = useState(null);
  const [selectedDayIndex, setSelectedDayIndex] = useState(0);
  const fetchSchedule = async (date) => {
    try {
      setLoading(true);
      const params = date ? { date } : {};
      const res = await studentPortalApi.fetchWeeklyTimetable(params);
      const data = res?.data || res;
      setTimetableData(data);
      if (data?.days?.length) {
        const todayStr = new Date().toISOString().split('T')[0];
        const todayIdx = data.days.findIndex((d) => d.date === todayStr);
        if (todayIdx >= 0) {
          setSelectedDayIndex(todayIdx);
        } else {
          const firstWithSessions = data.days.findIndex(
            (d) => (d.sessionsCount ?? d.sessions?.length ?? 0) > 0
          );
          setSelectedDayIndex(firstWithSessions >= 0 ? firstWithSessions : 0);
        }
      }
    } catch (err) {
      console.warn('Could not load weekly timetable:', err);
    } finally {
      setLoading(false);
    }
  };
  useEffect(() => {
    fetchSchedule(currentDateParam);
  }, [currentDateParam]);
  const weekInfo = timetableData?.weekInfo || {};
  const days = Array.isArray(timetableData?.days) ? timetableData.days : [];
  const selectedDay = days[selectedDayIndex] || days[0] || null;
  const sessions = Array.isArray(selectedDay?.sessions) ? selectedDay.sessions : [];
  const handlePrevWeek = () => {
    if (weekInfo.previousWeekDate) {
      setCurrentDateParam(weekInfo.previousWeekDate);
    }
  };
  const handleNextWeek = () => {
    if (weekInfo.nextWeekDate) {
      setCurrentDateParam(weekInfo.nextWeekDate);
    }
  };
  const handleCurrentWeek = () => {
    setCurrentDateParam(null);
  };
  const isCurrentWeek = useMemo(() => {
    if (!currentDateParam && weekInfo.isCurrentWeek !== false) return true;
    if (weekInfo.isCurrentWeek !== undefined) return Boolean(weekInfo.isCurrentWeek);
    const todayStr = new Date().toISOString().split('T')[0];
    return days.some((d) => d.date === todayStr);
  }, [currentDateParam, weekInfo.isCurrentWeek, days]);

  const monthYearLabel = useMemo(() => {
    const refDate = selectedDay?.date || weekInfo.startDate || weekInfo.currentWeekDate;
    if (!refDate) return isRtl ? 'الجدول الأسبوعي' : 'Weekly Schedule';
    const d = new Date(refDate);
    if (isNaN(d.getTime())) return isRtl ? 'الجدول الأسبوعي' : 'Weekly Schedule';
    const monthsAr = [
      'يناير', 'فبراير', 'مارس', 'أبريل', 'مايو', 'يونيو',
      'يوليو', 'أغسطس', 'سبتمبر', 'أكتوبر', 'نوفمبر', 'ديسمبر'
    ];
    const monthsEn = [
      'January', 'February', 'March', 'April', 'May', 'June',
      'July', 'August', 'September', 'October', 'November', 'December'
    ];
    return isRtl ? `${monthsAr[d.getMonth()]} ${d.getFullYear()}` : `${monthsEn[d.getMonth()]} ${d.getFullYear()}`;
  }, [selectedDay, weekInfo, isRtl]);
  const formatDayHeading = (dayObj) => {
    if (!dayObj) return '';
    const name = dayObj.dayName || dayObj.day || '';
    if (!dayObj.date) return name;
    const d = new Date(dayObj.date);
    if (isNaN(d.getTime())) return `${name} - ${dayObj.formattedDate || dayObj.date}`;
    const monthsAr = [
      'يناير', 'فبراير', 'مارس', 'أبريل', 'مايو', 'يونيو',
      'يوليو', 'أغسطس', 'سبتمبر', 'أكتوبر', 'نوفمبر', 'ديسمبر'
    ];
    const monthsEn = [
      'Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun',
      'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'
    ];
    const dateFormatted = isRtl
      ? `${d.getDate()} ${monthsAr[d.getMonth()]}`
      : `${d.getDate()} ${monthsEn[d.getMonth()]}`;
    return isRtl ? `حصص يوم ${name} - ${dateFormatted}` : `Sessions for ${name} - ${dateFormatted}`;
  };
  const getDayNumber = (dayObj) => {
    if (!dayObj) return '';
    if (dayObj.date) {
      const parts = dayObj.date.split('-');
      if (parts.length === 3) return parseInt(parts[2], 10);
    }
    if (dayObj.formattedDate) {
      const parts = dayObj.formattedDate.split('/');
      if (parts.length >= 1) return parts[0];
    }
    return '';
  };
  const renderStatusBadge = (session) => {
    const status = session.status?.toLowerCase();
    const canJoin = session.canJoinNow || status === 'live' || status === 'in_progress';
    if (canJoin) {
      return (
        <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold bg-[#FFEAEA] dark:bg-red-950/40 text-[#E53E3E] dark:text-red-400">
          <span className="w-2 h-2 rounded-full bg-[#E53E3E] animate-pulse" />
          <span>{t('studentDashboard.schedule.liveNow', 'مباشر الآن')}</span>
        </span>
      );
    }
    switch (status) {
      case 'cancelled':
        return (
          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold bg-rose-50 dark:bg-rose-950/30 text-rose-600 dark:text-rose-400">
            <span className="w-1.5 h-1.5 rounded-full bg-rose-500" />
            <span>{session.statusText || t('studentDashboard.schedule.cancelledSession', 'ملغاة')}</span>
          </span>
        );
      case 'rescheduled':
        return (
          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold bg-amber-50 dark:bg-amber-950/40 text-amber-700 dark:text-amber-400">
            <span className="w-1.5 h-1.5 rounded-full bg-amber-500" />
            <span>{session.statusText || t('studentDashboard.schedule.rescheduled', 'معاد جدولتها')}</span>
          </span>
        );
      case 'completed':
        return (
          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-400">
            <span className="w-1.5 h-1.5 rounded-full bg-slate-400" />
            <span>{session.statusText || t('studentDashboard.schedule.sessionCompleted', 'مكتملة')}</span>
          </span>
        );
      case 'scheduled':
      default:
        return (
          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold bg-emerald-50 dark:bg-emerald-950/40 text-[#00695C] dark:text-emerald-400">
            <span className="w-1.5 h-1.5 rounded-full bg-[#00695C] dark:bg-emerald-400" />
            <span>{session.statusText || t('studentDashboard.schedule.scheduled', 'مجدولة')}</span>
          </span>
        );
    }
  };
  const renderActionButton = (session) => {
    const zoomUrl = session.zoom?.joinUrl || session.joinUrl;
    const status = session.status?.toLowerCase();
    if (status === 'cancelled') {
      return (
        <span className="text-xs font-semibold text-slate-400 bg-slate-50 dark:bg-slate-800/60 px-4 py-2 rounded-xl">
          {t('studentDashboard.schedule.cancelledSession', 'حصة ملغاة')}
        </span>
      );
    }
    if (zoomUrl) {
      return (
        <a
          href={zoomUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-xl bg-[#00594C] hover:bg-[#00473C] text-white text-xs sm:text-sm font-bold shadow-xs transition-all active:scale-95 cursor-pointer"
        >
          <Video size={16} />
          <span>{t('studentDashboard.schedule.joinLiveNow', 'انتقل إلى البث الآن')}</span>
        </a>
      );
    }
    return (
      <span className="text-xs font-medium text-slate-400 bg-slate-50 dark:bg-slate-800/40 px-3.5 py-2 rounded-xl border border-slate-100 dark:border-slate-800">
        {status === 'completed'
          ? t('studentDashboard.schedule.sessionCompleted', 'الحصة مكتملة')
          : t('studentDashboard.schedule.linkAvailableSoon', 'الرابط متاح قريباً')}
      </span>
    );
  };
  return (
    <div className="min-h-screen bg-[#EEF5F3] dark:bg-slate-950 p-4 sm:p-6 lg:p-8" dir={isRtl ? 'rtl' : 'ltr'}>
      <motion.div
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4 }}
        className="max-w-7xl mx-auto space-y-6"
      >
        {/* Card 1: Top Header Banner */}
        <section className="bg-white dark:bg-slate-900 rounded-3xl p-6 sm:p-8 shadow-xs border border-slate-100 dark:border-slate-800 flex items-center justify-between">
          <div className="text-start space-y-1">
            <h1 className="text-2xl sm:text-3xl font-black text-[#1E293B] dark:text-white">
              {t('studentDashboard.schedule.title', 'جدول الحصص')}
            </h1>
            <p className="text-xs sm:text-sm font-medium text-slate-400 dark:text-slate-500">
              {t('studentDashboard.schedule.subtitle', 'اختر التاريخ لمشاهدة الحصص')}
            </p>
          </div>
          <div className="w-12 h-12 rounded-2xl flex items-center justify-center text-[#00594C] dark:text-emerald-400 bg-emerald-50/60 dark:bg-emerald-950/30">
            <Calendar size={28} />
          </div>
        </section>
        {/* Card 2: Week Navigation & Days Selector */}
        <section className="bg-white dark:bg-slate-900 rounded-3xl p-6 sm:p-8 shadow-xs border border-slate-100 dark:border-slate-800 space-y-6">
          {/* Month/Year Title & Arrow Navigators */}
          <div className="flex items-center justify-between">
            <button
              type="button"
              onClick={isRtl ? handlePrevWeek : handleNextWeek}
              disabled={isRtl ? !weekInfo.previousWeekDate : !weekInfo.nextWeekDate}
              aria-label={isRtl ? 'الأسبوع السابق' : 'Previous Week'}
              title={isRtl ? 'الأسبوع السابق' : 'Previous Week'}
              className="w-10 h-10 rounded-full bg-slate-100 dark:bg-slate-800 hover:bg-slate-200 dark:hover:bg-slate-700 flex items-center justify-center text-slate-700 dark:text-slate-200 transition-colors cursor-pointer disabled:opacity-40 disabled:cursor-not-allowed"
            >
              {isRtl ? <ChevronRight size={20} /> : <ChevronLeft size={20} />}
            </button>
            <div className="flex items-center gap-3">
              <h2 className="text-lg sm:text-xl font-bold text-slate-800 dark:text-slate-100">
                {monthYearLabel}
              </h2>
              {isCurrentWeek ? (
                <span className="text-xs font-bold text-[#00594C] dark:text-emerald-400 bg-emerald-50 dark:bg-emerald-950/40 px-3 py-1 rounded-full border border-emerald-200/50 dark:border-emerald-800/50 select-none">
                  {isRtl ? 'الأسبوع الحالي' : 'Current Week'}
                </span>
              ) : (
                <button
                  type="button"
                  onClick={handleCurrentWeek}
                  className="text-xs font-bold text-slate-600 dark:text-slate-300 bg-slate-100 hover:bg-slate-200 dark:bg-slate-800 dark:hover:bg-slate-700 px-3 py-1 rounded-full transition-colors cursor-pointer flex items-center gap-1.5"
                >
                  <span>{isRtl ? 'العودة للأسبوع الحالي' : 'Back to Current Week'}</span>
                </button>
              )}
            </div>
            <button
              type="button"
              onClick={isRtl ? handleNextWeek : handlePrevWeek}
              disabled={isRtl ? !weekInfo.nextWeekDate : !weekInfo.previousWeekDate}
              aria-label={isRtl ? 'الأسبوع التالي' : 'Next Week'}
              title={isRtl ? 'الأسبوع التالي' : 'Next Week'}
              className="w-10 h-10 rounded-full bg-slate-100 dark:bg-slate-800 hover:bg-slate-200 dark:hover:bg-slate-700 flex items-center justify-center text-slate-700 dark:text-slate-200 transition-colors cursor-pointer disabled:opacity-40 disabled:cursor-not-allowed"
            >
              {isRtl ? <ChevronLeft size={20} /> : <ChevronRight size={20} />}
            </button>
          </div>
          {/* 7 Days Row */}
          {days.length > 0 && (
            <div className="grid grid-cols-7 gap-2 sm:gap-3">
              {days.map((dayItem, index) => {
                const isSelected = selectedDayIndex === index;
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
                    {/* Dot indicator for sessions */}
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
        {/* Card 3: Selected Day Sessions Details */}
        <section className="bg-white dark:bg-slate-900 rounded-3xl p-6 sm:p-8 shadow-xs border border-slate-100 dark:border-slate-800 space-y-6">
          {/* Day Title */}
          <div className="border-b border-slate-100 dark:border-slate-800 pb-4">
            <h3 className="text-lg sm:text-xl font-extrabold text-[#1E293B] dark:text-white text-start">
              {formatDayHeading(selectedDay)}
            </h3>
          </div>
          {loading ? (
            <div className="flex h-48 items-center justify-center">
              <Spinner />
            </div>
          ) : sessions.length === 0 ? (
            <div className="py-12 text-center space-y-3">
              <div className="w-16 h-16 bg-slate-100 dark:bg-slate-800 text-slate-400 rounded-full flex items-center justify-center mx-auto">
                <Calendar size={28} />
              </div>
              <h4 className="text-base font-bold text-slate-700 dark:text-slate-200">
                {t('studentDashboard.schedule.noSessionsDay', 'لا توجد حصص مجدولة لهذا اليوم')}
              </h4>
              <p className="text-xs text-slate-400 dark:text-slate-500">
                {t('studentDashboard.schedule.selectAnotherDay', 'اختر يوماً آخر من الأسبوع لمشاهدة الحصص')}
              </p>
            </div>
          ) : (
            <div>
              {/* Table Column Headers (Desktop/Tablet) */}
              <div className="hidden md:grid grid-cols-12 items-center text-xs font-bold text-slate-500 dark:text-slate-400 pb-3 border-b border-slate-100 dark:border-slate-800">
                <div className="col-span-3 text-start">
                  {t('studentDashboard.schedule.time', 'الوقت')}
                </div>
                <div className="col-span-4 text-start">
                  {t('studentDashboard.schedule.subject', 'المادة')}
                </div>
                <div className="col-span-2 text-start">
                  {t('studentDashboard.schedule.teacher', 'المعلم')}
                </div>
                <div className="col-span-2 text-center">
                  {t('studentDashboard.schedule.status', 'الحالة')}
                </div>
                <div className="col-span-1 text-end">
                  {t('studentDashboard.schedule.action', 'الإجراء')}
                </div>
              </div>
              {/* Sessions Rows */}
              <div className="divide-y divide-slate-100 dark:divide-slate-800/80">
                {sessions.map((session) => {
                  const groupName = typeof session.group === 'object'
                    ? session.group?.name
                    : (session.group || session.title);
                  const teacherName = typeof session.teacher === 'object'
                    ? session.teacher?.name
                    : (session.teacher || '-');
                  const teacherImage = typeof session.teacher === 'object'
                    ? session.teacher?.image
                    : null;
                  return (
                    <motion.div
                      key={session.id}
                      initial={{ opacity: 0, y: 8 }}
                      animate={{ opacity: 1, y: 0 }}
                      className="py-5 hover:bg-slate-50/50 dark:hover:bg-slate-800/30 transition-colors rounded-2xl px-2"
                    >
                      {/* Desktop Table View */}
                      <div className="hidden md:grid grid-cols-12 items-center gap-2">
                        {/* 1. Time */}
                        <div className="col-span-3 text-start">
                          <div className="flex items-center gap-2 text-xs sm:text-sm font-bold text-slate-700 dark:text-slate-200">
                            <Clock size={16} className="text-[#00594C] dark:text-emerald-400 shrink-0" />
                            <span>{session.timeRange || (session.durationMinutes ? `${session.durationMinutes} دقيقة` : '-')}</span>
                          </div>
                        </div>
                        {/* 2. Subject / Group */}
                        <div className="col-span-4 text-start">
                          <div className="space-y-0.5">
                            <h4 className="text-sm sm:text-base font-bold text-slate-900 dark:text-white truncate">
                              {groupName}
                            </h4>
                            {session.title && session.title !== groupName && (
                              <p className="text-xs text-slate-400 dark:text-slate-500 truncate">
                                {session.title}
                              </p>
                            )}
                          </div>
                        </div>
                        {/* 3. Teacher */}
                        <div className="col-span-2 text-start">
                          <div className="flex items-center gap-2 min-w-0">
                            {teacherImage ? (
                              <img
                                src={teacherImage}
                                alt=""
                                className="w-7 h-7 rounded-full object-cover shrink-0"
                                onError={(e) => { e.currentTarget.style.display = 'none'; }}
                              />
                            ) : (
                              <div className="w-7 h-7 rounded-full bg-slate-100 dark:bg-slate-800 flex items-center justify-center shrink-0 text-slate-400">
                                <User size={15} />
                              </div>
                            )}
                            <span className="text-xs sm:text-sm font-medium text-slate-700 dark:text-slate-300 truncate">
                              {teacherName}
                            </span>
                          </div>
                        </div>
                        {/* 4. Status */}
                        <div className="col-span-2 text-center">
                          <div className="flex justify-center">
                            {renderStatusBadge(session)}
                          </div>
                        </div>
                        {/* 5. Action */}
                        <div className="col-span-1 text-end flex justify-end">
                          {renderActionButton(session)}
                        </div>
                      </div>
                      {/* Mobile Card View */}
                      <div className="md:hidden space-y-3 text-start">
                        <div className="flex items-start justify-between gap-2">
                          <div className="space-y-1">
                            <h4 className="text-sm font-bold text-slate-900 dark:text-white">
                              {groupName}
                            </h4>
                            {session.title && session.title !== groupName && (
                              <p className="text-xs text-slate-400 dark:text-slate-500">
                                {session.title}
                              </p>
                            )}
                          </div>
                          <div>{renderStatusBadge(session)}</div>
                        </div>
                        <div className="flex flex-wrap items-center gap-4 text-xs text-slate-600 dark:text-slate-300 pt-1">
                          <div className="flex items-center gap-1.5 font-bold">
                            <Clock size={14} className="text-[#00594C] dark:text-emerald-400" />
                            <span>{session.timeRange || '-'}</span>
                          </div>
                          <div className="flex items-center gap-1.5">
                            <User size={14} className="text-slate-400" />
                            <span>{teacherName}</span>
                          </div>
                        </div>
                        <div className="pt-2 flex justify-end">
                          {renderActionButton(session)}
                        </div>
                      </div>
                    </motion.div>
                  );
                })}
              </div>
            </div>
          )}
        </section>
      </motion.div>
    </div>
  );
}

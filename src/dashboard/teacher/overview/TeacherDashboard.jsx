import { useTranslation } from 'react-i18next';
import { useQuery } from '@tanstack/react-query';
import { Link } from 'react-router-dom';
import {
  BookOpen,
  Users,
  Calendar,
  Clock,
  AlertCircle,
  CheckCircle2,
  ChevronRight,
  ChevronLeft,
  CalendarClock,
  Wallet,
  CreditCard,
  Layers,
  GraduationCap,
  Sparkles,
} from 'lucide-react';
import DashboardLayout from '../../../layouts/DashboardLayout.jsx';
import StatsCard from '@/shared/components/StatsCard.jsx';
import { roleNavigation } from '@/shared/constants/navigation.js';
import { dashboardApi } from '@/shared/services/api/dashboardApi.js';

/**
 * Converts a UTC ISO date string or Date to a local-timezone time string (HH:MM).
 * @param {string|Date} utcValue
 * @returns {string}
 */
function utcToLocalTime(utcValue) {
  if (!utcValue) return '—';
  if (typeof utcValue === 'string') {
    if (utcValue.includes('T')) {
      const date = new Date(utcValue);
      if (!isNaN(date.getTime())) {
        return date.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
      }
    }
    return utcValue.length > 5 ? utcValue.substring(0, 5) : utcValue;
  }
  if (utcValue instanceof Date && !isNaN(utcValue.getTime())) {
    return utcValue.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
  }
  return String(utcValue);
}

/**
 * Formats a UTC ISO string to a local date string.
 * @param {string} utcValue
 * @param {boolean} isRtl
 * @returns {string}
 */
function utcToLocalDate(utcValue, isRtl = true) {
  if (!utcValue) return '—';
  const date = new Date(utcValue);
  if (isNaN(date.getTime())) return String(utcValue);
  return date.toLocaleDateString(isRtl ? 'ar-EG' : 'en-US', {
    weekday: 'short',
    year: 'numeric',
    month: 'short',
    day: 'numeric',
  });
}

/**
 * Returns a human-readable countdown until a future UTC timestamp.
 * @param {string} utcValue
 * @param {boolean} isRtl
 * @returns {string}
 */
function countdownTo(utcValue, isRtl = true) {
  if (!utcValue) return '';
  const target = new Date(utcValue);
  if (isNaN(target.getTime())) return '';
  const diffMs = target.getTime() - Date.now();
  if (diffMs <= 0) return isRtl ? 'الآن' : 'Now';
  const totalMin = Math.floor(diffMs / 60000);
  if (totalMin < 60) return isRtl ? `بعد ${totalMin} دقيقة` : `in ${totalMin}m`;
  const hours = Math.floor(totalMin / 60);
  const mins = totalMin % 60;
  if (mins === 0) return isRtl ? `بعد ${hours} ساعة` : `in ${hours}h`;
  return isRtl ? `بعد ${hours}س ${mins}د` : `in ${hours}h ${mins}m`;
}

function StatusBadge({ status, isRtl = true }) {
  const normalized = (status || '').toLowerCase().trim();
  if (
    normalized === 'live' ||
    normalized === 'in_progress' ||
    normalized === 'in-progress' ||
    normalized === 'مباشرة' ||
    normalized === 'مباشرة الآن'
  ) {
    return (
      <span className="inline-flex items-center gap-1.5 bg-red-50 text-red-600 border border-red-100 rounded-full px-3 py-1 text-xs font-semibold dark:bg-red-950/40 dark:text-red-400 dark:border-red-900/50">
        <span className="w-1.5 h-1.5 rounded-full bg-red-600 dark:bg-red-500 animate-pulse" />
        {isRtl ? 'مباشرة الآن' : 'Live Now'}
      </span>
    );
  }
  if (
    normalized === 'scheduled' ||
    normalized === 'upcoming' ||
    normalized === 'مجدولة' ||
    normalized === 'قادمة'
  ) {
    return (
      <span className="inline-flex items-center gap-1.5 bg-blue-50 text-blue-600 border border-blue-100 rounded-full px-3 py-1 text-xs font-semibold dark:bg-blue-950/40 dark:text-blue-400 dark:border-blue-900/50">
        <span className="w-1.5 h-1.5 rounded-full bg-blue-600 dark:bg-blue-500" />
        {isRtl ? 'مجدولة' : 'Scheduled'}
      </span>
    );
  }
  if (normalized === 'completed' || normalized === 'مكتملة') {
    return (
      <span className="inline-flex items-center gap-1.5 bg-emerald-50 text-emerald-600 border border-emerald-100 rounded-full px-3 py-1 text-xs font-semibold dark:bg-emerald-950/40 dark:text-emerald-400 dark:border-emerald-900/50">
        <span className="w-1.5 h-1.5 rounded-full bg-emerald-600 dark:bg-emerald-500" />
        {isRtl ? 'مكتملة' : 'Completed'}
      </span>
    );
  }
  if (normalized === 'cancelled' || normalized === 'canceled' || normalized === 'ملغاة') {
    return (
      <span className="inline-flex items-center gap-1.5 bg-red-50 text-red-600 border border-red-100 rounded-full px-3 py-1 text-xs font-semibold dark:bg-red-950/40 dark:text-red-400 dark:border-red-900/50">
        <span className="w-1.5 h-1.5 rounded-full bg-red-600 dark:bg-red-500" />
        {isRtl ? 'ملغاة' : 'Cancelled'}
      </span>
    );
  }
  return (
    <span className="inline-flex items-center gap-1.5 bg-slate-100 text-slate-600 border border-slate-200 rounded-full px-3 py-1 text-xs font-semibold dark:bg-slate-800 dark:text-slate-300 dark:border-slate-700">
      {status || '—'}
    </span>
  );
}

export default function TeacherDashboard() {
  const { t, i18n } = useTranslation();
  const isRtl = i18n?.language?.startsWith('ar') ?? true;
  const ChevronIcon = isRtl ? ChevronLeft : ChevronRight;

  // ── Fetch statistics from /api/v1/teacher/dashboard/statistics ──
  const { data: statsRes, isLoading: isLoadingStats } = useQuery({
    queryKey: ['teacher-dashboard-statistics'],
    queryFn: () => dashboardApi.fetchTeacherStatistics(),
    staleTime: 3 * 60 * 1000,
    refetchInterval: 60 * 1000,
  });

  const { data: pendingRes } = useQuery({
    queryKey: ['teacher-pending-evaluation'],
    queryFn: () => dashboardApi.fetchPendingEvaluation(),
    staleTime: 2 * 60 * 1000,
  });

  // Extract root data from response
  const apiData = statsRes?.data?.data ?? statsRes?.data ?? {};

  // 1. Statistics numbers
  const stats = apiData.statistics || {};
  const totalStudents = stats.totalStudents ?? 0;
  const totalGroups = stats.totalGroups ?? 0;
  const totalSessions = stats.totalSessions ?? 0;
  const totalTeachingHours = stats.totalTeachingHours ?? 0;
  const totalEarnings = stats.totalEarnings ?? 0;
  const dueEarnings = stats.dueEarnings ?? 0;

  // 2. Next session
  const nextSession = apiData.nextSession || null;

  // 3. Upcoming sessions
  const upcomingSessions = Array.isArray(apiData.upcomingSessions) ? apiData.upcomingSessions : [];

  // 4. Groups overview
  const groupsOverview = Array.isArray(apiData.groupsOverview) ? apiData.groupsOverview : [];

  const statCards = [
    {
      title: t('teacher.totalStudents', 'إجمالي الطلاب'),
      value: isLoadingStats ? '...' : totalStudents,
      icon: <Users className="w-5 h-5" />,
      accent: 'bg-[#E8EAF6] text-[#3949AB] dark:bg-[#1A237E]/30 dark:text-[#7986CB]',
    },
    {
      title: t('teacher.totalGroups', 'المجموعات'),
      value: isLoadingStats ? '...' : totalGroups,
      icon: <Layers className="w-5 h-5" />,
      accent: 'bg-[#FFF3E0] text-[#E65100] dark:bg-[#BF360C]/20 dark:text-[#FFAB40]',
    },
    {
      title: t('teacher.totalSessions', 'إجمالي الحصص'),
      value: isLoadingStats ? '...' : totalSessions,
      icon: <Calendar className="w-5 h-5" />,
      accent: 'bg-[#E0F2F1] text-[#00796B] dark:bg-[#004D40]/30 dark:text-[#4DB6AC]',
    },
    {
      title: t('teacher.totalTeachingHours', 'ساعات التدريس'),
      value: isLoadingStats
        ? '...'
        : `${totalTeachingHours} ${isRtl ? 'ساعة' : 'hrs'}`,
      icon: <Clock className="w-5 h-5" />,
      accent: 'bg-[#F3E5F5] text-[#7B1FA2] dark:bg-[#4A148C]/20 dark:text-[#BA68C8]',
    },
    {
      title: t('teacher.totalEarnings', 'إجمالي الأرباح'),
      value: isLoadingStats
        ? '...'
        : `${Number(totalEarnings).toLocaleString()} $`,
      icon: <Wallet className="w-5 h-5" />,
      accent: 'bg-[#E8F5E9] text-[#2E7D32] dark:bg-[#1B5E20]/20 dark:text-[#81C784]',
    },
    {
      title: t('teacher.dueEarnings', 'الأرباح المستحقة'),
      value: isLoadingStats
        ? '...'
        : `${Number(dueEarnings).toLocaleString()} $`,
      icon: <CreditCard className="w-5 h-5" />,
      accent: 'bg-[#FCE4EC] text-[#C2185B] dark:bg-[#880E4F]/20 dark:text-[#F48FB1]',
    },
  ];

  const pendingSession = pendingRes?.session;
  const pendingStudentIds = pendingRes?.pendingStudentIds ?? [];

  return (
    <DashboardLayout
      title={t('teacher.teacherDashboard', 'لوحة المعلم')}
      role={t('auth.teacher')}
      links={roleNavigation.Teacher}
    >
      {/* ── 1. Statistics Numbers Cards ── */}
      <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6 gap-4 sm:gap-5">
        {statCards.map((stat, i) => (
          <StatsCard
            key={i}
            title={stat.title}
            value={stat.value}
            icon={stat.icon}
            accent={stat.accent}
          />
        ))}
      </section>

      {/* ── Pending evaluation banner (if applicable) ── */}
      {pendingSession && pendingStudentIds.length > 0 && (
        <div className="mt-6 rounded-2xl border border-amber-200 bg-amber-50 dark:bg-amber-950/20 dark:border-amber-800/40 p-4 sm:p-5 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
          <div className="flex items-start gap-3">
            <AlertCircle className="w-5 h-5 text-amber-600 dark:text-amber-400 shrink-0 mt-0.5" />
            <div>
              <p className="font-bold text-amber-800 dark:text-amber-300 text-sm">
                {isRtl
                  ? `يوجد ${pendingStudentIds.length} طالب بانتظار تقييمك`
                  : `You have ${pendingStudentIds.length} students pending your evaluation`}
              </p>
              <p className="text-xs text-amber-700 dark:text-amber-400 mt-0.5">
                {pendingSession.title || 'حصة مكتملة'} — {pendingSession.group || ''}
              </p>
            </div>
          </div>
          <Link
            to="/dashboard/teacher/students"
            className="flex items-center gap-2 bg-amber-600 hover:bg-amber-700 text-white rounded-xl px-4 py-2 text-sm font-bold transition-colors shrink-0"
          >
            <CheckCircle2 className="w-4 h-4" />
            {isRtl ? 'إضافة التقييمات' : 'Add Evaluations'}
          </Link>
        </div>
      )}

      {/* ── Main Content Grid ── */}
      <div className="space-y-6 mt-6">
        {/* ── 2. Next Session (الحصة القادمة) ── */}
        <div className="rounded-2xl sm:rounded-3xl border border-slate-200/80 bg-white/90 p-5 sm:p-7 shadow-soft backdrop-blur-xl dark:border-slate-700/60 dark:bg-slate-900/80">
          <div className="flex items-center justify-between mb-5">
            <h2 className="flex items-center gap-2.5 font-bold text-slate-800 dark:text-slate-100 text-lg sm:text-xl">
              <CalendarClock className="w-6 h-6 text-[#00695C] dark:text-[#4DB6AC] shrink-0" />
              <span>{t('teacher.nextSession', 'الحصة القادمة')}</span>
            </h2>
            <Link
              to="/dashboard/teacher/schedule"
              className="text-xs sm:text-sm text-[#00695C] dark:text-[#4DB6AC] hover:underline font-bold flex items-center gap-1"
            >
              <span>{t('admin.viewAll', 'عرض الجدول')}</span>
              <ChevronIcon className="w-4 h-4" />
            </Link>
          </div>

          {isLoadingStats ? (
            <div className="py-10 flex items-center justify-center gap-2 text-slate-500 text-sm">
              <div className="w-5 h-5 rounded-full border-2 border-[#00695C] border-t-transparent animate-spin" />
              <span>{isRtl ? 'جاري التحميل...' : 'Loading...'}</span>
            </div>
          ) : nextSession ? (
            <div className="bg-gradient-to-br from-emerald-50/60 via-teal-50/30 to-transparent dark:from-emerald-950/20 dark:via-teal-950/10 dark:to-transparent border border-emerald-100/80 dark:border-emerald-800/40 rounded-2xl p-5 sm:p-6 transition-all">
              <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-5">
                <div className="space-y-3 min-w-0">
                  <div className="flex flex-wrap items-center gap-2.5">
                    <StatusBadge status={nextSession.status} isRtl={isRtl} />
                    {nextSession.startTime && (
                      <span className="inline-flex items-center gap-1 text-xs text-[#00695C] dark:text-emerald-400 font-bold bg-[#E0F2F1] dark:bg-[#004D40]/40 px-3 py-1 rounded-full">
                        <Sparkles className="w-3.5 h-3.5" />
                        {countdownTo(nextSession.startTime, isRtl)}
                      </span>
                    )}
                  </div>

                  <h3 className="font-bold text-slate-900 dark:text-white text-lg sm:text-2xl">
                    {nextSession.title || (isRtl ? 'حصة مجدولة' : 'Scheduled Session')}
                  </h3>

                  <p className="text-sm font-semibold text-[#00695C] dark:text-[#4DB6AC] flex items-center gap-2">
                    <BookOpen className="w-4 h-4 shrink-0" />
                    <span>
                      {typeof nextSession.group === 'object'
                        ? nextSession.group?.name || nextSession.group?.title
                        : nextSession.group || '—'}
                    </span>
                  </p>

                  <div className="flex flex-wrap items-center gap-x-5 gap-y-2 text-xs sm:text-sm text-slate-600 dark:text-slate-300 pt-1">
                    <span className="flex items-center gap-1.5 font-medium">
                      <Calendar className="w-4 h-4 text-slate-400 shrink-0" />
                      <span>
                        {nextSession.day ? `${nextSession.day}، ` : ''}
                        {nextSession.date || utcToLocalDate(nextSession.startTime, isRtl)}
                      </span>
                    </span>
                    <span className="flex items-center gap-1.5 font-medium" dir="ltr">
                      <Clock className="w-4 h-4 text-slate-400 shrink-0" />
                      <span>
                        {utcToLocalTime(nextSession.startTime)}
                        {nextSession.endTime ? ` – ${utcToLocalTime(nextSession.endTime)}` : ''}
                      </span>
                    </span>
                  </div>
                </div>

                <div className="flex items-center gap-3 shrink-0 self-start lg:self-center">
                  <Link
                    to="/dashboard/teacher/schedule"
                    className="flex items-center gap-2 bg-[#00695C] hover:bg-[#004D40] text-white rounded-xl px-5 py-2.5 text-sm font-bold transition-all shadow-sm active:scale-95"
                  >
                    <CalendarClock className="w-4 h-4" />
                    <span>{isRtl ? 'عرض الجدول' : 'View Schedule'}</span>
                  </Link>
                </div>
              </div>
            </div>
          ) : (
            <div className="py-8 flex flex-col items-center justify-center text-center bg-slate-50/50 dark:bg-slate-800/30 rounded-2xl border border-dashed border-slate-200 dark:border-slate-800">
              <div className="w-10 h-10 rounded-full bg-emerald-50 dark:bg-emerald-950/30 flex items-center justify-center mb-2">
                <CalendarClock className="w-5 h-5 text-[#00695C]/70" />
              </div>
              <p className="text-sm font-semibold text-slate-700 dark:text-slate-200">
                {isRtl ? 'لا توجد حصة قادمة حالياً' : 'No next session currently'}
              </p>
              <p className="text-xs text-slate-400 dark:text-slate-500 mt-1">
                {isRtl ? 'ستظهر الحصة هنا تلقائياً عند اقتراب موعدها' : 'Sessions will appear here automatically when scheduled'}
              </p>
            </div>
          )}
        </div>

        {/* ── 3. Upcoming Sessions (الحصص القادمة للمعلم) ── */}
        <div className="rounded-2xl sm:rounded-3xl border border-slate-200/80 bg-white/90 p-5 sm:p-6 shadow-soft backdrop-blur-xl dark:border-slate-700/60 dark:bg-slate-900/80">
          <div className="flex items-center justify-between mb-4 px-1">
            <h2 className="flex items-center gap-2 text-lg sm:text-xl font-bold text-slate-800 dark:text-slate-100">
              <Calendar className="w-5 h-5 text-[#00695C] dark:text-[#4DB6AC] shrink-0" />
              <span>{t('teacher.upcomingSessions', 'الحصص القادمة')}</span>
              {upcomingSessions.length > 0 && (
                <span className="bg-emerald-100 dark:bg-emerald-950/60 text-[#00695C] dark:text-emerald-400 text-xs px-2.5 py-0.5 rounded-full font-bold">
                  {upcomingSessions.length}
                </span>
              )}
            </h2>
            <Link
              to="/dashboard/teacher/schedule"
              className="text-[#00695C] dark:text-[#4DB6AC] hover:underline text-xs sm:text-sm font-bold transition-colors flex items-center gap-1"
            >
              <span>{t('admin.viewAll', 'عرض الكل')}</span>
              <ChevronIcon className="w-4 h-4" />
            </Link>
          </div>

          {isLoadingStats ? (
            <div className="space-y-3">
              {[1, 2, 3].map((i) => (
                <div key={i} className="h-16 bg-slate-100 dark:bg-slate-800 rounded-xl animate-pulse" />
              ))}
            </div>
          ) : upcomingSessions.length > 0 ? (
            <div className="divide-y divide-slate-100 dark:divide-slate-800">
              {upcomingSessions.map((session, idx) => {
                const sessionId = session.id || session._id || idx;
                const groupName =
                  (typeof session.group === 'object'
                    ? session.group?.name || session.group?.title
                    : session.group) || (isRtl ? 'مجموعة دراسية' : 'Study Group');
                const timeStart = utcToLocalTime(session.startTime);
                const timeEnd = utcToLocalTime(session.endTime);
                const timeStr = timeStart !== '—' ? `${timeStart}${timeEnd !== '—' ? ` – ${timeEnd}` : ''}` : '';

                return (
                  <div
                    key={sessionId}
                    className="flex flex-col sm:flex-row sm:items-center justify-between py-4 first:pt-1 last:pb-1 gap-3 hover:bg-slate-50/50 dark:hover:bg-slate-800/30 px-2 rounded-xl transition-colors"
                  >
                    <div className="flex items-start gap-3.5 min-w-0">
                      <div className="w-10 h-10 rounded-xl bg-emerald-50 dark:bg-emerald-950/40 text-[#00695C] dark:text-emerald-400 flex items-center justify-center shrink-0 font-bold text-sm">
                        <GraduationCap className="w-5 h-5" />
                      </div>
                      <div className="flex flex-col gap-1 min-w-0">
                        <h4 className="text-sm sm:text-base font-bold text-slate-900 dark:text-slate-100 truncate">
                          {session.title || groupName}
                        </h4>
                        <p className="text-xs text-slate-500 dark:text-slate-400 font-medium truncate">
                          {groupName}
                        </p>
                        <div className="flex flex-wrap items-center gap-x-4 gap-y-1 text-xs text-slate-400 dark:text-slate-500 mt-0.5">
                          <span className="flex items-center gap-1">
                            <Calendar className="w-3.5 h-3.5 text-slate-400 shrink-0" />
                            <span>
                              {session.day ? `${session.day}، ` : ''}
                              {session.date || utcToLocalDate(session.startTime, isRtl)}
                            </span>
                          </span>
                          {timeStr && (
                            <span className="flex items-center gap-1" dir="ltr">
                              <Clock className="w-3.5 h-3.5 text-slate-400 shrink-0" />
                              <span>{timeStr}</span>
                            </span>
                          )}
                        </div>
                      </div>
                    </div>
                    <div className="self-end sm:self-center shrink-0">
                      <StatusBadge status={session.status} isRtl={isRtl} />
                    </div>
                  </div>
                );
              })}
            </div>
          ) : (
            <div className="py-8 flex flex-col items-center justify-center text-center bg-slate-50/50 dark:bg-slate-800/30 rounded-2xl border border-dashed border-slate-200 dark:border-slate-800">
              <p className="text-sm font-semibold text-slate-700 dark:text-slate-200">
                {t('teacher.noUpcomingSessions', 'لا توجد حصص قادمة مجدولة حالياً')}
              </p>
              <p className="text-xs text-slate-400 dark:text-slate-500 mt-1">
                {isRtl ? 'ستظهر الحصص القادمة هنا تلقائياً عند جدولتها' : 'Upcoming sessions will appear here once scheduled'}
              </p>
            </div>
          )}
        </div>

        {/* ── 4. Groups Overview (مجموعات المعلم) ── */}
        <div className="rounded-2xl sm:rounded-3xl border border-slate-200/80 bg-white/90 p-5 sm:p-6 shadow-soft backdrop-blur-xl dark:border-slate-700/60 dark:bg-slate-900/80">
          <div className="flex items-center justify-between mb-4 px-1">
            <h2 className="flex items-center gap-2 text-lg sm:text-xl font-bold text-slate-800 dark:text-slate-100">
              <Layers className="w-5 h-5 text-[#00695C] dark:text-[#4DB6AC] shrink-0" />
              <span>{t('teacher.groupsOverview', 'مجموعات المعلم')}</span>
              {groupsOverview.length > 0 && (
                <span className="bg-emerald-100 dark:bg-emerald-950/60 text-[#00695C] dark:text-emerald-400 text-xs px-2.5 py-0.5 rounded-full font-bold">
                  {groupsOverview.length}
                </span>
              )}
            </h2>
            <Link
              to="/dashboard/teacher/groups"
              className="text-[#00695C] dark:text-[#4DB6AC] hover:underline text-xs sm:text-sm font-bold transition-colors flex items-center gap-1"
            >
              <span>{t('teacher.groupsTitle', 'عرض المجموعات')}</span>
              <ChevronIcon className="w-4 h-4" />
            </Link>
          </div>

          {isLoadingStats ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {[1, 2, 3].map((i) => (
                <div key={i} className="h-32 bg-slate-100 dark:bg-slate-800 rounded-2xl animate-pulse" />
              ))}
            </div>
          ) : groupsOverview.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {groupsOverview.map((group, idx) => {
                const groupId = group.id || group._id || idx;
                const groupName =
                  (typeof group.name === 'object'
                    ? group.name?.ar || group.name?.en
                    : group.name) || group.title || (isRtl ? 'مجموعة دراسية' : 'Study Group');
                const studentsCount =
                  group.studentsCount ??
                  group.totalStudents ??
                  (Array.isArray(group.students) ? group.students.length : 0);
                const levelName =
                  typeof group.level === 'object'
                    ? group.level?.name?.ar || group.level?.name
                    : group.level || group.curriculum || '';

                return (
                  <div
                    key={groupId}
                    className="bg-white dark:bg-slate-900 border border-slate-100 dark:border-slate-800 rounded-2xl p-5 hover:border-[#00695C]/40 transition-all flex flex-col justify-between gap-4 shadow-sm"
                  >
                    <div className="space-y-2">
                      <div className="flex items-center justify-between gap-2">
                        <span className="text-xs px-2.5 py-1 rounded-full bg-emerald-50 dark:bg-emerald-950/40 text-[#00695C] dark:text-emerald-400 font-bold">
                          {group.type || (isRtl ? 'مجموعة' : 'Group')}
                        </span>
                        {levelName && (
                          <span className="text-xs text-slate-400 dark:text-slate-500 font-medium truncate">
                            {levelName}
                          </span>
                        )}
                      </div>
                      <h4 className="font-bold text-slate-800 dark:text-slate-100 text-base line-clamp-1">
                        {groupName}
                      </h4>
                    </div>

                    <div className="pt-3 border-t border-slate-100 dark:border-slate-800 flex items-center justify-between text-xs text-slate-500 dark:text-slate-400">
                      <span className="flex items-center gap-1.5 font-medium">
                        <Users className="w-3.5 h-3.5 text-slate-400" />
                        <span>
                          {studentsCount} {isRtl ? 'طالب' : 'students'}
                        </span>
                      </span>
                      <Link
                        to={groupId ? `/dashboard/teacher/groups/${groupId}` : '/dashboard/teacher/groups'}
                        className="text-[#00695C] dark:text-[#4DB6AC] font-bold hover:underline flex items-center gap-1"
                      >
                        <span>{isRtl ? 'التفاصيل' : 'Details'}</span>
                        <ChevronIcon className="w-3.5 h-3.5" />
                      </Link>
                    </div>
                  </div>
                );
              })}
            </div>
          ) : (
            <div className="py-8 flex flex-col items-center justify-center text-center bg-slate-50/50 dark:bg-slate-800/30 rounded-2xl border border-dashed border-slate-200 dark:border-slate-800">
              <div className="w-10 h-10 rounded-full bg-slate-100 dark:bg-slate-800 flex items-center justify-center mb-2">
                <BookOpen className="w-5 h-5 text-slate-400" />
              </div>
              <p className="text-sm font-semibold text-slate-700 dark:text-slate-200">
                {t('teacher.noGroups', 'لا توجد مجموعات مسندة حالياً')}
              </p>
              <p className="text-xs text-slate-400 dark:text-slate-500 mt-1">
                {isRtl
                  ? 'ستظهر المجموعات هنا بمجرد تعيينها لك من قبل إدارة الأكاديمية'
                  : 'Groups will appear here once assigned to you by the administration'}
              </p>
            </div>
          )}
        </div>
      </div>
    </DashboardLayout>
  );
}

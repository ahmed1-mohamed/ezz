import { useTranslation } from 'react-i18next'
import { useQuery } from '@tanstack/react-query'
import { Link } from 'react-router-dom'
import { BookOpen, GraduationCap, Users, Calendar, Layers, Activity, Clock, Radio } from 'lucide-react'
import StatsCard from '@/shared/components/StatsCard.jsx'
import DataTable from '@/shared/components/DataTable.jsx'
import { dashboardApi } from '@/shared/services/api/dashboardApi.js'

/**
 * Converts a UTC ISO string to the user's local time string (HH:MM).
 * Works automatically for any timezone based on the device locale.
 */
function utcToLocalTime(utcValue) {
    if (!utcValue) return '—';
    const date = new Date(utcValue);
    if (isNaN(date.getTime())) return String(utcValue);
    return date.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
}

/**
 * Converts a UTC ISO string to the user's local date string.
 */
function utcToLocalDate(utcValue) {
    if (!utcValue) return '—';
    // If it's already a plain date string like "2026-11-01", treat as-is (no time component).
    if (/^\d{4}-\d{2}-\d{2}$/.test(String(utcValue))) {
        const [y, m, d] = utcValue.split('-').map(Number);
        return new Date(y, m - 1, d).toLocaleDateString([], {
            weekday: 'short', year: 'numeric', month: 'short', day: 'numeric',
        });
    }
    const date = new Date(utcValue);
    if (isNaN(date.getTime())) return String(utcValue);
    return date.toLocaleDateString([], {
        weekday: 'short', year: 'numeric', month: 'short', day: 'numeric',
    });
}

/**
 * Returns a human-readable elapsed time since a UTC start timestamp.
 */
function formatElapsedTime(session, t) {
    if (!session) return t('admin.statusLive', 'مباشرة الآن');

    // Prefer startedAt (actual live start) over scheduled startTime
    const timestamp = session.startedAt || session.startTime;
    if (timestamp) {
        const started = new Date(timestamp);
        if (!isNaN(started.getTime())) {
            const diffMin = Math.max(1, Math.floor((Date.now() - started.getTime()) / 60000));
            if (diffMin < 60) {
                return t('adminDashboard.elapsedMin', { defaultValue: 'منذ {{count}} دقيقة', count: diffMin });
            }
            return t('adminDashboard.elapsedHours', { defaultValue: 'منذ {{count}} ساعة', count: Math.floor(diffMin / 60) });
        }
    }

    return t('admin.statusLive', 'مباشرة الآن');
}

export default function AdminDashboard() {
    const { t } = useTranslation()

    // Single query — statistics endpoint returns latestSessions + liveSessions for admins
    const { data: statsRes, isLoading: isLoadingStats } = useQuery({
        queryKey: ['dashboard-stats'],
        queryFn: () => dashboardApi.fetchStatistics(),
        staleTime: 5 * 60 * 1000,
    });

    // The API returns: { data: { latestSessions, liveSessions, statistics: {...} } }
    // statsRes.data is already unwrapped by dashboardApi (response.data?.data || response.data)
    const apiData = statsRes?.data?.data ?? statsRes?.data ?? {};

    // ── Sessions: siblings of statistics at data-root level ──
    const rawLatest =
        apiData?.latestSessions ??
        apiData?.recentSessions ??
        apiData?.statistics?.latestSessions ??
        [];
    const sessionsList = Array.isArray(rawLatest) ? rawLatest : [];

    const rawLive =
        apiData?.liveSessions ??
        apiData?.activeSessions ??
        apiData?.statistics?.liveSessions ??
        [];
    const liveList = Array.isArray(rawLive) && rawLive.length > 0
        ? rawLive
        : sessionsList.filter((s) => {
            const st = (s.status || '').toLowerCase();
            return st === 'live' || st === 'in_progress' || st === 'in-progress';
        });

    // ── Statistics numbers: nested inside data.statistics ──
    const statsData =
        apiData?.statistics ??
        apiData?.stats ??
        apiData ?? {};

    const dashboardStats = {
        students:            statsData.students            ?? statsData.totalStudents        ?? '...',
        teachers:            statsData.teachers            ?? statsData.totalTeachers        ?? '...',
        parents:             statsData.parents             ?? statsData.totalParents         ?? '...',
        groups:              statsData.groups              ?? statsData.totalGroups          ?? statsData.classes ?? '...',
        todayActiveSessions: statsData.todayActiveSessions ?? statsData.activeSessionsToday ?? statsData.activeSessions ?? '...',
        platformRating:      statsData.platformRating      ?? statsData.rating              ?? '4.8',
    };

    const stats = [
        {
            title: t('admin.totalStudents'),
            value: dashboardStats.students,
            to: '/dashboard/admin/students',
            icon: <BookOpen className="w-5 h-5" />,
            accent: 'bg-[#E0F2F1] text-[#00796B] dark:bg-[#004D40]/30 dark:text-[#4DB6AC]'
        },
        {
            title: t('admin.totalTeachers'),
            value: dashboardStats.teachers,
            to: '/dashboard/admin/teachers',
            icon: <GraduationCap className="w-5 h-5" />,
            accent: 'bg-[#E0F2F1] text-[#00796B] dark:bg-[#004D40]/30 dark:text-[#4DB6AC]'
        },
        {
            title: t('admin.parents'),
            value: dashboardStats.parents,
            to: '/dashboard/admin/parents',
            icon: <Users className="w-5 h-5" />,
            accent: 'bg-[#E0F2F1] text-[#00796B] dark:bg-[#004D40]/30 dark:text-[#4DB6AC]'
        },
        {
            title: t('admin.activeSessionsToday'),
            value: dashboardStats.todayActiveSessions,
            to: '/dashboard/admin/sessions',
            icon: <Calendar className="w-5 h-5" />,
            accent: 'bg-[#FFEBEE] text-[#D32F2F] dark:bg-[#C62828]/20 dark:text-[#EF5350]'
        },
        {
            title: t('admin.totalGroups'),
            value: dashboardStats.groups,
            to: '/dashboard/admin/groups',
            icon: <Layers className="w-5 h-5" />,
            accent: 'bg-[#E0F2F1] text-[#00796B] dark:bg-[#004D40]/30 dark:text-[#4DB6AC]'
        },
        {
            title: t('admin.platformRating'),
            value: (
                <span className="flex items-center gap-1.5">
                    <span>{dashboardStats.platformRating}</span>
                    <span className="text-amber-500 text-lg sm:text-xl">★</span>
                </span>
            ),
            icon: <Activity className="w-5 h-5" />,
            accent: 'bg-[#E0F2F1] text-[#00796B] dark:bg-[#004D40]/30 dark:text-[#4DB6AC]'
        }
    ];

    // ── Status badge renderer ──
    const renderStatusBadge = (status) => {
        const normalized = (status || '').toLowerCase().trim();
        if (normalized === 'live' || normalized === 'in_progress' || normalized === 'in-progress' || normalized === 'مباشرة الآن') {
            return (
                <span className="inline-flex items-center gap-1.5 bg-red-50 text-red-600 border border-red-100 rounded-full px-3 py-1 text-xs font-semibold dark:bg-red-950/40 dark:text-red-400 dark:border-red-900/50">
                    <span className="w-1.5 h-1.5 rounded-full bg-red-600 dark:bg-red-500 animate-pulse" />
                    {t('admin.statusLive', 'مباشرة الآن')}
                </span>
            );
        }
        if (normalized === 'upcoming' || normalized === 'scheduled' || normalized === 'قادمة' || normalized === 'مجدولة') {
            return (
                <span className="inline-flex items-center gap-1.5 bg-blue-50 text-blue-600 border border-blue-100 rounded-full px-3 py-1 text-xs font-semibold dark:bg-blue-950/40 dark:text-blue-400 dark:border-blue-900/50">
                    <span className="w-1.5 h-1.5 rounded-full bg-blue-600 dark:bg-blue-500" />
                    {t('admin.statusUpcoming', 'قادمة')}
                </span>
            );
        }
        if (normalized === 'completed' || normalized === 'مكتملة') {
            return (
                <span className="inline-flex items-center gap-1.5 bg-emerald-50 text-emerald-600 border border-emerald-100 rounded-full px-3 py-1 text-xs font-semibold dark:bg-emerald-950/40 dark:text-emerald-400 dark:border-emerald-900/50">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-600 dark:bg-emerald-500" />
                    {t('admin.statusCompleted', 'مكتملة')}
                </span>
            );
        }
        if (normalized === 'cancelled' || normalized === 'canceled' || normalized === 'ملغاة') {
            return (
                <span className="inline-flex items-center gap-1.5 bg-red-50 text-red-600 border border-red-100 rounded-full px-3 py-1 text-xs font-semibold dark:bg-red-950/40 dark:text-red-400 dark:border-red-900/50">
                    <span className="w-1.5 h-1.5 rounded-full bg-red-600 dark:bg-red-500" />
                    {t('admin.statusCancelled', 'ملغاة')}
                </span>
            );
        }
        return (
            <span className="inline-flex items-center gap-1.5 bg-slate-100 text-slate-600 border border-slate-200 rounded-full px-3 py-1 text-xs font-semibold dark:bg-slate-800 dark:text-slate-300 dark:border-slate-700">
                {status || '-'}
            </span>
        );
    };

    // ── Table rows — times converted from UTC to local ──
    const rows = sessionsList.map((session, idx) => {
        const groupName =
            (typeof session.group === 'object' ? session.group?.name : session.group) ||
            session.groupName ||
            session.title ||
            t('sessions.defaultGroup', 'مجموعة دراسية');

        const teacherName =
            (typeof session.teacher === 'object' ? session.teacher?.name : session.teacher) ||
            session.teacherName ||
            t('sessions.defaultTeacher', 'غير محدد');

        // Date: prefer the plain date field or ISO timestamp converted to user's local timezone
        const localDate = utcToLocalDate(session.startTime || session.date);

        // Time: convert UTC ISO startTime/endTime to local time
        const startStr = utcToLocalTime(session.startTime);
        const endStr = utcToLocalTime(session.endTime);
        const localTime = startStr !== '—'
            ? (endStr !== '—' ? `${startStr} – ${endStr}` : startStr)
            : (session.time || session.startTime || '—');

        return [
            groupName,
            teacherName,
            localDate,
            localTime,
            <div key={session.id || session._id || idx}>
                {renderStatusBadge(session.status)}
            </div>,
        ];
    });

    // Upcoming sessions count — from statistics or count from list
    const upcomingSessionsCount =
        statsData?.upcomingSessions ??
        statsData?.scheduledSessions ??
        apiData?.upcomingSessions ??
        sessionsList.filter((s) => {
            const st = (s.status || '').toLowerCase();
            return st === 'scheduled' || st === 'upcoming';
        }).length;

    return (
        <>
            <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
                {stats.map((stat, i) => {
                    const cardElement = (
                        <StatsCard
                            title={stat.title}
                            value={stat.value}
                            change={stat.change}
                            icon={stat.icon}
                            accent={stat.accent}
                        />
                    );
                    return stat.to ? (
                        <Link
                            key={i}
                            to={stat.to}
                            className="block transition-transform duration-200 hover:-translate-y-1 focus:outline-none focus:ring-2 focus:ring-[#00796B]/30 rounded-2xl sm:rounded-3xl"
                        >
                            {cardElement}
                        </Link>
                    ) : (
                        <div key={i}>{cardElement}</div>
                    );
                })}
            </section>

            {/* ── Latest sessions table ── */}
            <div className="space-y-4 sm:space-y-6 pt-6">
                <div>
                    <div className="flex items-center justify-between mb-4 px-1">
                        <h2 className="text-lg sm:text-xl font-bold text-slate-800 dark:text-slate-100">
                            {t('admin.latestSessions')}
                        </h2>
                        <Link
                            to="/dashboard/admin/sessions"
                            className="text-[#00695C] dark:text-[#4DB6AC] hover:text-[#004D40] text-sm font-bold transition-colors"
                        >
                            {t('admin.viewAll')}
                        </Link>
                    </div>
                    <DataTable
                        headers={[
                            t('admin.group'),
                            t('admin.teacher'),
                            t('admin.date'),
                            t('admin.time'),
                            t('admin.status')
                        ]}
                        rows={rows}
                        isLoading={isLoadingStats}
                        emptyMessage={t('adminDashboard.noSessionsFound', 'لا توجد حصص مسجلة حالياً')}
                    />
                </div>
            </div>

            {/* ── Live sessions + upcoming count ── */}
            <div className="space-y-4 sm:space-y-6 pt-6">
                <div className="rounded-2xl sm:rounded-3xl border border-slate-200/80 bg-white/90 p-4 sm:p-6 shadow-soft backdrop-blur-xl dark:border-slate-700/60 dark:bg-slate-900/80">
                    <div className="flex items-center justify-between mb-4">
                        <h3 className="flex items-center gap-2 font-bold text-slate-800 dark:text-slate-100 text-lg">
                            <span className="w-2.5 h-2.5 rounded-full bg-red-600 animate-pulse shrink-0" />
                            <span>{t('adminDashboard.liveNowSection', 'مباشر الآن')}</span>
                            {liveList.length > 0 && (
                                <span className="bg-red-100 dark:bg-red-950/60 text-red-600 dark:text-red-400 text-xs px-2 py-0.5 rounded-full font-bold">
                                    {liveList.length}
                                </span>
                            )}
                        </h3>
                        <Link
                            to="/dashboard/admin/sessions"
                            className="text-xs text-[#00695C] dark:text-[#4DB6AC] hover:underline font-semibold"
                        >
                            {t('admin.viewAll', 'عرض الكل')}
                        </Link>
                    </div>

                    {isLoadingStats && liveList.length === 0 ? (
                        <div className="py-8 flex items-center justify-center gap-2 text-slate-500 text-sm">
                            <div className="w-5 h-5 rounded-full border-2 border-red-500 border-t-transparent animate-spin" />
                            <span>جاري التحميل...</span>
                        </div>
                    ) : liveList.length > 0 ? (
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                            {liveList.slice(0, 4).map((liveSession, idx) => {
                                const groupTitle =
                                    liveSession.groupName ||
                                    liveSession.title ||
                                    (typeof liveSession.group === 'object' ? liveSession.group?.name : liveSession.group) ||
                                    t('sessions.defaultGroup', 'مجموعة دراسية');

                                const teacherTitle =
                                    (typeof liveSession.teacher === 'object' ? liveSession.teacher?.name : liveSession.teacher) ||
                                    liveSession.teacherName ||
                                    t('sessions.defaultTeacher', 'غير محدد');

                                const studentCount =
                                    liveSession.studentsCount ??
                                    liveSession.students?.length ??
                                    liveSession.attendance?.length ?? 0;

                                const elapsed = formatElapsedTime(liveSession, t);

                                return (
                                    <Link
                                        key={liveSession.id || liveSession._id || idx}
                                        to="/dashboard/admin/sessions"
                                        className="bg-red-50/40 dark:bg-red-950/10 border border-red-100 dark:border-red-900/30 rounded-2xl p-5 flex items-center justify-between gap-4 hover:border-red-200 dark:hover:border-red-800/50 transition-all hover:shadow-sm group cursor-pointer"
                                    >
                                        <div className="space-y-1 min-w-0">
                                            <h4 className="font-bold text-slate-800 dark:text-slate-200 text-sm sm:text-base truncate group-hover:text-red-700 dark:group-hover:text-red-400 transition-colors">
                                                {groupTitle}
                                            </h4>
                                            <p className="text-xs text-slate-400 dark:text-slate-500 font-medium truncate">
                                                {teacherTitle}
                                            </p>
                                            <div className="flex items-center gap-1 text-slate-400 dark:text-slate-500 text-xs mt-1">
                                                <Users size={12} className="shrink-0" />
                                                <span>
                                                    {studentCount} {t('adminDashboard.studentsCount', 'طلاب')}
                                                </span>
                                            </div>
                                        </div>
                                        <span className="text-xs text-red-500 font-bold shrink-0">
                                            {elapsed}
                                        </span>
                                    </Link>
                                );
                            })}
                        </div>
                    ) : (
                        <div className="py-8 flex flex-col items-center justify-center text-center p-4 bg-slate-50/50 dark:bg-slate-800/30 rounded-2xl border border-dashed border-slate-200 dark:border-slate-800 mb-4">
                            <div className="w-10 h-10 rounded-full bg-red-50 dark:bg-red-950/30 flex items-center justify-center mb-2">
                                <Radio className="w-5 h-5 text-red-500/70" />
                            </div>
                            <p className="text-sm font-semibold text-slate-700 dark:text-slate-200">
                                {t('adminDashboard.noLiveSessions', 'لا توجد حصص مباشرة في الوقت الحالي')}
                            </p>
                            <p className="text-xs text-slate-400 dark:text-slate-500 mt-1">
                                {t('adminDashboard.noLiveSessionsHint', 'ستظهر الحصص هنا تلقائياً عند بدء البث المباشر')}
                            </p>
                        </div>
                    )}

                    <div className="bg-slate-100 dark:bg-slate-800/80 rounded-xl sm:rounded-2xl p-4 flex items-center justify-center gap-2 text-slate-600 dark:text-slate-300 text-sm font-semibold border border-slate-200/40 dark:border-slate-700/30">
                        <Clock size={16} className="text-slate-500 dark:text-slate-400 shrink-0" />
                        <span>
                            {upcomingSessionsCount > 0
                                ? t('adminDashboard.upcomingSessionsCount', {
                                      defaultValue: '{{count}} حصص قادمة اليوم',
                                      count: upcomingSessionsCount,
                                  })
                                : t('adminDashboard.noUpcomingToday', 'لا توجد حصص قادمة اليوم')}
                        </span>
                    </div>
                </div>
            </div>
        </>
    )
}
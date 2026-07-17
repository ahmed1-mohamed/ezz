import { useTranslation } from 'react-i18next'
import { useQuery } from '@tanstack/react-query'
import { Link } from 'react-router-dom'
import { BookOpen, GraduationCap, Users, Calendar, Layers, Activity, Clock } from 'lucide-react'
import StatsCard from '@/shared/components/StatsCard.jsx'
import DataTable from '@/shared/components/DataTable.jsx'
import { dashboardApi } from '@/shared/services/api/dashboardApi.js'


export default function AdminDashboard() {
    const { t } = useTranslation()
    const { data: statsRes } = useQuery({
        queryKey: ['dashboard-stats'],
        queryFn: () => dashboardApi.fetchStatistics(),
        staleTime: 5 * 60 * 1000,
    });

    const dashboardStats = {
        students: statsRes?.data?.statistics?.students ?? '...',
        teachers: statsRes?.data?.statistics?.teachers ?? '...',
        parents: statsRes?.data?.statistics?.parents ?? '...',
        classes: statsRes?.data?.statistics?.classes ?? '...'
    };

    const stats = [
        {
            title: t('admin.totalStudents'),
            value: dashboardStats.students,

            icon: <BookOpen className="w-5 h-5" />,
            accent: 'bg-[#E0F2F1] text-[#00796B] dark:bg-[#004D40]/30 dark:text-[#4DB6AC]'
        },
        {
            title: t('admin.totalTeachers'),
            value: dashboardStats.teachers,

            icon: <GraduationCap className="w-5 h-5" />,
            accent: 'bg-[#E0F2F1] text-[#00796B] dark:bg-[#004D40]/30 dark:text-[#4DB6AC]'
        },
        {
            title: t('admin.parents'),
            value: dashboardStats.parents,

            icon: <Users className="w-5 h-5" />,
            accent: 'bg-[#E0F2F1] text-[#00796B] dark:bg-[#004D40]/30 dark:text-[#4DB6AC]'
        },
        {
            title: t('admin.activeSessionsToday'),
            value: '7',

            icon: <Calendar className="w-5 h-5" />,
            accent: 'bg-[#FFEBEE] text-[#D32F2F] dark:bg-[#C62828]/20 dark:text-[#EF5350]'
        },
        {
            title: t('admin.totalGroups'),
            value: dashboardStats.classes,

            icon: <Layers className="w-5 h-5" />,
            accent: 'bg-[#E0F2F1] text-[#00796B] dark:bg-[#004D40]/30 dark:text-[#4DB6AC]'
        },
        {
            title: t('admin.platformRating'),
            value: (
                <span className="flex items-center gap-1.5">
                    <span>4.8</span>
                    <span className="text-amber-500 text-lg sm:text-xl">★</span>
                </span>
            ),

            icon: <Activity className="w-5 h-5" />,
            accent: 'bg-[#E0F2F1] text-[#00796B] dark:bg-[#004D40]/30 dark:text-[#4DB6AC]'
        }
    ]

    const rows = [
        [
            t('sessions.groupQuranA'),
            t('sessions.teacherFatima'),
            '2024-04-23',
            '10:00',
            <span key="s1" className="inline-flex items-center gap-1.5 bg-red-50 text-red-600 border border-red-100 rounded-full px-3 py-1 text-xs font-semibold dark:bg-red-950/40 dark:text-red-400 dark:border-red-900/50">
                <span className="w-1.5 h-1.5 rounded-full bg-red-600 dark:bg-red-500 animate-pulse" />
                {t('admin.statusLive')}
            </span>
        ],
        [
            t('sessions.groupArabicB'),
            t('sessions.teacherMohamed'),
            '2024-04-23',
            '14:00',
            <span key="s2" className="inline-flex items-center gap-1.5 bg-blue-50 text-blue-600 border border-blue-100 rounded-full px-3 py-1 text-xs font-semibold dark:bg-blue-950/40 dark:text-blue-400 dark:border-blue-900/50">
                <span className="w-1.5 h-1.5 rounded-full bg-blue-600 dark:bg-blue-500" />
                {t('admin.statusUpcoming')}
            </span>
        ],
        [
            t('sessions.groupQuranC'),
            t('sessions.teacherAisha'),
            '2024-04-22',
            '16:00',
            <span key="s3" className="inline-flex items-center gap-1.5 bg-emerald-50 text-emerald-600 border border-emerald-100 rounded-full px-3 py-1 text-xs font-semibold dark:bg-emerald-950/40 dark:text-emerald-400 dark:border-emerald-900/50">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-600 dark:bg-emerald-500" />
                {t('admin.statusCompleted')}
            </span>
        ],
        [
            t('sessions.privateSessionMajed'),
            t('sessions.teacherMaryam'),
            '2024-04-22',
            '11:00',
            <span key="s4" className="inline-flex items-center gap-1.5 bg-emerald-50 text-emerald-600 border border-emerald-100 rounded-full px-3 py-1 text-xs font-semibold dark:bg-emerald-950/40 dark:text-emerald-400 dark:border-emerald-900/50">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-600 dark:bg-emerald-500" />
                {t('admin.statusCompleted')}
            </span>
        ],
        [
            t('sessions.groupArabicA'),
            t('sessions.teacherMaryam'),
            '2024-04-21',
            '15:00',
            <span key="s5" className="inline-flex items-center gap-1.5 bg-red-50 text-red-600 border border-red-100 rounded-full px-3 py-1 text-xs font-semibold dark:bg-red-950/40 dark:text-red-400 dark:border-red-900/50">
                <span className="w-1.5 h-1.5 rounded-full bg-red-600 dark:bg-red-500" />
                {t('admin.statusCancelled')}
            </span>
        ],
        [
            t('sessions.groupQuranA'),
            t('sessions.teacherFatima'),
            '2024-04-24',
            '10:00',
            <span key="s6" className="inline-flex items-center gap-1.5 bg-blue-50 text-blue-600 border border-blue-100 rounded-full px-3 py-1 text-xs font-semibold dark:bg-blue-950/40 dark:text-blue-400 dark:border-blue-900/50">
                <span className="w-1.5 h-1.5 rounded-full bg-blue-600 dark:bg-blue-500" />
                {t('admin.statusUpcoming')}
            </span>
        ]
    ]

    return (
        <>
            <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
                {stats.map((stat, i) => (
                    <StatsCard
                        key={i}
                        title={stat.title}
                        value={stat.value}
                        change={stat.change}
                        icon={stat.icon}
                        accent={stat.accent}
                    />
                ))}
            </section>

            <div className="space-y-4 sm:space-y-6 pt-6">
                <div>
                    <div className="flex items-center justify-between mb-4 px-1">
                        <h2 className="text-lg sm:text-xl font-bold text-slate-800 dark:text-slate-100">
                            {t('admin.latestSessions')}
                        </h2>
                        <Link
                            to="/dashboard/admin/reports"
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
                    />
                </div>
            </div>

            <div className="space-y-4 sm:space-y-6 pt-6">
                <div className="rounded-2xl sm:rounded-3xl border border-slate-200/80 bg-white/90 p-4 sm:p-6 shadow-soft backdrop-blur-xl dark:border-slate-700/60 dark:bg-slate-900/80">
                    <h3 className="flex items-center gap-2 font-bold text-slate-800 dark:text-slate-100 text-lg mb-4">
                        <span className="w-2.5 h-2.5 rounded-full bg-red-600 animate-pulse shrink-0" />
                        <span>{t('adminDashboard.liveNowSection', 'مباشر الآن')}</span>
                    </h3>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                        <div className="bg-red-50/40 dark:bg-red-950/10 border border-red-100 dark:border-red-900/30 rounded-2xl p-5 flex items-center justify-between gap-4">
                            <div className="space-y-1">
                                <h4 className="font-bold text-slate-800 dark:text-slate-200 text-sm sm:text-base">
                                    {t('adminDashboard.quranGroupA', 'مجموعة القرآن أ')}
                                </h4>
                                <p className="text-xs text-slate-400 dark:text-slate-500 font-medium">
                                    {t('sessions.teacherFatima', 'أ. فاطمة الزهراء')}
                                </p>
                                <div className="flex items-center gap-1 text-slate-400 dark:text-slate-500 text-xs mt-1">
                                    <Users size={12} className="shrink-0" />
                                    <span>{t('adminDashboard.fourStudents', '4 طلاب')}</span>
                                </div>
                            </div>
                            <span className="text-xs text-red-500 font-bold shrink-0">
                                {t('adminDashboard.elapsed23Min', 'منذ 23 دقيقة')}
                            </span>
                        </div>

                        <div className="bg-red-50/40 dark:bg-red-950/10 border border-red-100 dark:border-red-900/30 rounded-2xl p-5 flex items-center justify-between gap-4">
                            <div className="space-y-1">
                                <h4 className="font-bold text-slate-800 dark:text-slate-200 text-sm sm:text-base">
                                    {t('adminDashboard.privateSessionYazid', 'حصة خاصة - يزيد')}
                                </h4>
                                <p className="text-xs text-slate-400 dark:text-slate-500 font-medium">
                                    {t('sessions.teacherAisha', 'أ. عائشة محمود')}
                                </p>
                                <div className="flex items-center gap-1 text-slate-400 dark:text-slate-500 text-xs mt-1">
                                    <Users size={12} className="shrink-0" />
                                    <span>{t('adminDashboard.oneStudent', '1 طلاب')}</span>
                                </div>
                            </div>
                            <span className="text-xs text-red-500 font-bold shrink-0">
                                {t('adminDashboard.elapsed8Min', 'منذ 8 دقائق')}
                            </span>
                        </div>
                    </div>

                    <div className="bg-slate-100 dark:bg-slate-800/80 rounded-xl sm:rounded-2xl p-4 flex items-center justify-center gap-2 text-slate-600 dark:text-slate-300 text-sm font-semibold border border-slate-200/40 dark:border-slate-700/30">
                        <Clock size={16} className="text-slate-500 dark:text-slate-400 shrink-0" />
                        <span>{t('adminDashboard.upcomingSessionsToday', '5 حصص قادمة اليوم')}</span>
                    </div>
                </div>
            </div>
        </>
    )
}
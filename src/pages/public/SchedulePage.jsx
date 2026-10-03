import React, { useState, useEffect, useMemo, useCallback } from 'react'
import { useTranslation } from 'react-i18next'
import { motion, AnimatePresence } from 'framer-motion'
import {
    Clock,
    User,
    Calendar,
    Video,
    ExternalLink,
    Copy,
    Check,
    Search,
    BookOpen,
    Sparkles,
    CalendarDays,
    Radio,
    CheckCircle2,
    Users,
    ArrowRight,
    ArrowLeft,
    RotateCcw
} from 'lucide-react'
import { landingApi } from '@/shared/services/api/landingApi'
import CTASection from '@/shared/components/CTASection.jsx'

// Fallback current week data matching the exact backend response structure
const FALLBACK_WEEK_DATA = {
    week: {
        startDate: '2026-02-14',
        endDate: '2026-02-20',
        formattedRange: 'من تاريخ 14/02/2026 إلى تاريخ 20/02/2026'
    },
    days: [
        {
            day: 'السبت',
            date: '2026-02-14',
            sessions: [
                {
                    id: '6a35c80bed7ee094f8cac039',
                    title: 'مقدمة في علم التجويد ومخارج الحروف العامة',
                    sessionNumber: 1,
                    date: '2026-02-14',
                    day: 'السبت',
                    rawDay: 'saturday',
                    startTime: '10:00',
                    endTime: '11:30',
                    durationMinutes: 90,
                    type: 'regular',
                    status: 'completed',
                    zoomJoinUrl: 'https://us05web.zoom.us/j/84920491823?pwd=secretPassword123',
                    group: {
                        id: '6a35c80bed7ee094f8cac029',
                        name: 'مجموعة التأسيس - المستوى الأول'
                    },
                    teacher: {
                        id: '6a35c80bed7ee094f8cacfbd',
                        name: 'الشيخ أحمد المصطفى',
                        email: 'ahmed@manaretalezz.com',
                        phone: '+966509988776'
                    }
                }
            ]
        },
        {
            day: 'الأحد',
            date: '2026-02-15',
            sessions: [
                {
                    id: '6a35c80bed7ee094f8cac040',
                    title: 'سورة النبأ من الآية 1 إلى 20 مع أحكام النون الساكنة',
                    sessionNumber: 4,
                    date: '2026-02-15',
                    day: 'الأحد',
                    rawDay: 'sunday',
                    startTime: '16:00',
                    endTime: '17:30',
                    durationMinutes: 90,
                    type: 'regular',
                    status: 'scheduled',
                    zoomJoinUrl: 'https://us05web.zoom.us/j/84920491823?pwd=secretPassword123',
                    group: {
                        id: '6a35c80bed7ee094f8cac030',
                        name: 'مجموعة الإتقان - المستوى الثاني'
                    },
                    teacher: {
                        id: '6a35c80bed7ee094f8cacfbe',
                        name: 'الشيخ عبد الرحمن السديس',
                        email: 'teacher@manaretalezz.com',
                        phone: '+966501112233'
                    }
                },
                {
                    id: '6a35c80bed7ee094f8cac041',
                    title: 'شرح متن الآجرومية في قواعد النحو والصرف',
                    sessionNumber: 3,
                    date: '2026-02-15',
                    day: 'الأحد',
                    rawDay: 'sunday',
                    startTime: '18:00',
                    endTime: '19:30',
                    durationMinutes: 90,
                    type: 'regular',
                    status: 'scheduled',
                    zoomJoinUrl: 'https://us05web.zoom.us/j/84920491823?pwd=secretPassword123',
                    group: {
                        id: '6a35c80bed7ee094f8cac031',
                        name: 'برنامج اللغة العربية واللسان المبين'
                    },
                    teacher: {
                        id: '6a35c80bed7ee094f8cacfbf',
                        name: 'أ. د. محمد سالم الشنقيطي',
                        email: 'm.salem@manaretalezz.com',
                        phone: '+966502223344'
                    }
                }
            ]
        },
        {
            day: 'الاثنين',
            date: '2026-02-16',
            sessions: [
                {
                    id: '6a35c80bed7ee094f8cac042',
                    title: 'حفظ ومراجعة سورة البقرة (الربع الثالث)',
                    sessionNumber: 8,
                    date: '2026-02-16',
                    day: 'الاثنين',
                    rawDay: 'monday',
                    startTime: '16:30',
                    endTime: '18:00',
                    durationMinutes: 90,
                    type: 'regular',
                    status: 'scheduled',
                    zoomJoinUrl: 'https://us05web.zoom.us/j/84920491823?pwd=secretPassword123',
                    group: {
                        id: '6a35c80bed7ee094f8cac032',
                        name: 'حلقة الحفاظ - المستوى المتقدم'
                    },
                    teacher: {
                        id: '6a35c80bed7ee094f8cacfc0',
                        name: 'الشيخ عبد الله بن علي البصري',
                        email: 'ali.basri@manaretalezz.com',
                        phone: '+966503334455'
                    }
                }
            ]
        },
        {
            day: 'الثلاثاء',
            date: '2026-02-17',
            sessions: [
                {
                    id: '6a35c80bed7ee094f8cac043',
                    title: 'قصص الأنبياء والعبر الإيمانية للناشئة',
                    sessionNumber: 5,
                    date: '2026-02-17',
                    day: 'الثلاثاء',
                    rawDay: 'tuesday',
                    startTime: '17:00',
                    endTime: '18:15',
                    durationMinutes: 75,
                    type: 'regular',
                    status: 'scheduled',
                    zoomJoinUrl: 'https://us05web.zoom.us/j/84920491823?pwd=secretPassword123',
                    group: {
                        id: '6a35c80bed7ee094f8cac033',
                        name: 'براعم النور - المرحلة الابتدائية'
                    },
                    teacher: {
                        id: '6a35c80bed7ee094f8cacfc1',
                        name: 'أ. فاطمة الزهراء الشريف',
                        email: 'fatima@manaretalezz.com',
                        phone: '+966504445566'
                    }
                }
            ]
        },
        {
            day: 'الأربعاء',
            date: '2026-02-18',
            sessions: [
                {
                    id: '6a35c80bed7ee094f8cac044',
                    title: 'تطبيق عملي: صفات الحروف وترقيق وتفخيم الراء واللام',
                    sessionNumber: 6,
                    date: '2026-02-18',
                    day: 'الأربعاء',
                    rawDay: 'wednesday',
                    startTime: '16:00',
                    endTime: '17:30',
                    durationMinutes: 90,
                    type: 'regular',
                    status: 'scheduled',
                    zoomJoinUrl: 'https://us05web.zoom.us/j/84920491823?pwd=secretPassword123',
                    group: {
                        id: '6a35c80bed7ee094f8cac030',
                        name: 'مجموعة الإتقان - المستوى الثاني'
                    },
                    teacher: {
                        id: '6a35c80bed7ee094f8cacfbe',
                        name: 'الشيخ عبد الرحمن السديس',
                        email: 'teacher@manaretalezz.com',
                        phone: '+966501112233'
                    }
                }
            ]
        },
        {
            day: 'الخميس',
            date: '2026-02-19',
            sessions: [
                {
                    id: '6a35c80bed7ee094f8cac045',
                    title: 'حلقة التسميع الشامل والتقييم الأسبوعي',
                    sessionNumber: 7,
                    date: '2026-02-19',
                    day: 'الخميس',
                    rawDay: 'thursday',
                    startTime: '15:30',
                    endTime: '17:00',
                    durationMinutes: 90,
                    type: 'regular',
                    status: 'scheduled',
                    zoomJoinUrl: 'https://us05web.zoom.us/j/84920491823?pwd=secretPassword123',
                    group: {
                        id: '6a35c80bed7ee094f8cac034',
                        name: 'حلقة الإجازة بالسند المتصل'
                    },
                    teacher: {
                        id: '6a35c80bed7ee094f8cacfc2',
                        name: 'فضيلة الشيخ المقرئ حسام الدين',
                        email: 'hossam@manaretalezz.com',
                        phone: '+966505556677'
                    }
                }
            ]
        },
        {
            day: 'الجمعة',
            date: '2026-02-20',
            sessions: []
        }
    ]
}

export default function SchedulePage() {
    const { t, i18n } = useTranslation()
    const isRtl = i18n.language === 'ar'

    const [timetableData, setTimetableData] = useState(FALLBACK_WEEK_DATA)
    const [loading, setLoading] = useState(true)
    const [activeDayIndex, setActiveDayIndex] = useState(1) // Default to Sunday (index 1)
    const [searchTerm, setSearchTerm] = useState('')
    const [statusFilter, setStatusFilter] = useState('all') // 'all' | 'scheduled' | 'live' | 'completed'
    const [copiedSessionId, setCopiedSessionId] = useState(null)

    // Load Timetable from backend public API
    useEffect(() => {
        let isMounted = true
        const loadTimetable = async () => {
            setLoading(true)
            try {
                // Fetch public current week timetable
                const res = await landingApi.fetchPublicCurrentWeekTimetable({ lang: i18n.language })
                const data = res?.data || res
                if (isMounted && data && (data.days || data.week)) {
                    setTimetableData({
                        week: data.week || FALLBACK_WEEK_DATA.week,
                        days: Array.isArray(data.days) && data.days.length > 0 ? data.days : FALLBACK_WEEK_DATA.days
                    })
                }
            } catch (err) {
                console.warn('Using fallback timetable data due to API status:', err?.message)
                if (isMounted) {
                    setTimetableData(FALLBACK_WEEK_DATA)
                }
            } finally {
                if (isMounted) setLoading(false)
            }
        }

        loadTimetable()
        return () => {
            isMounted = false
        }
    }, [i18n.language])

    const days = useMemo(() => timetableData?.days || [], [timetableData])
    const weekInfo = useMemo(() => timetableData?.week || {}, [timetableData])

    // Keep active day in valid range
    const activeDay = useMemo(() => {
        if (!days || days.length === 0) return null
        return days[activeDayIndex] || days[0]
    }, [days, activeDayIndex])

    // Total counts across the week
    const totalWeeklySessions = useMemo(() => {
        return days.reduce((acc, d) => acc + (d.sessions ? d.sessions.length : 0), 0)
    }, [days])

    // Filter sessions of the active day
    const activeDaySessions = useMemo(() => {
        if (!activeDay || !activeDay.sessions) return []
        return activeDay.sessions.filter((s) => {
            const matchesSearch =
                !searchTerm.trim() ||
                (s.title && s.title.toLowerCase().includes(searchTerm.toLowerCase().trim())) ||
                (s.teacher?.name && s.teacher.name.toLowerCase().includes(searchTerm.toLowerCase().trim())) ||
                (s.group?.name && s.group.name.toLowerCase().includes(searchTerm.toLowerCase().trim()))

            const matchesStatus =
                statusFilter === 'all' ||
                s.status === statusFilter ||
                (statusFilter === 'completed' && (s.status === 'finished' || s.status === 'attended'))

            return matchesSearch && matchesStatus
        })
    }, [activeDay, searchTerm, statusFilter])

    const handleCopyZoom = useCallback((url, id) => {
        if (!url) return
        navigator.clipboard.writeText(url)
        setCopiedSessionId(id)
        setTimeout(() => setCopiedSessionId(null), 2500)
    }, [])

    return (
        <div className="min-h-screen bg-[#EEF2F0]/80 py-10 sm:py-14 px-4 sm:px-6 lg:px-8 font-sans">
            <div className="max-w-7xl mx-auto space-y-8 sm:space-y-10">

                {/* Hero Header */}
                <motion.div
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    className="text-center space-y-4 max-w-3xl mx-auto"
                >
                    <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-emerald-100/70 border border-emerald-200/60 text-[#00695C] text-xs sm:text-sm font-bold shadow-xs">
                        <Sparkles className="w-4 h-4 text-emerald-600" />
                        <span>{t('schedule.badge', 'الجدول الدراسي التفاعلي')}</span>
                    </div>

                    <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#00695C] tracking-tight">
                        {t('schedule.pageTitle', 'جدول الحلقات والجلسات اليومية')}
                    </h1>

                    <p className="text-slate-600 font-medium text-sm sm:text-base lg:text-lg leading-relaxed">
                        {t('schedule.pageSubtitle', 'تابع رحلتك القرآنية والعلمية مع نخبة من المعلمين المعتمدين في منارة العز وانضم لحصتك بنقرة واحدة.')}
                    </p>

                    {/* Current Week Range Banner */}
                    <div className="inline-flex items-center gap-2.5 px-5 py-2.5 rounded-2xl bg-white shadow-sm border border-slate-200/80 text-slate-700 text-xs sm:text-sm font-semibold mt-2">
                        <CalendarDays className="w-4 h-4 text-[#00695C]" />
                        <span>
                            {weekInfo.formattedRange ||
                                `${t('schedule.weekOf', 'أسبوع')}: ${weekInfo.startDate || ''} - ${weekInfo.endDate || ''}`}
                        </span>
                        <span className="w-1.5 h-1.5 rounded-full bg-slate-300" />
                        <span className="text-[#00695C] font-bold">
                            {totalWeeklySessions} {t('schedule.sessionsThisWeek', 'جلسة هذا الأسبوع')}
                        </span>
                    </div>
                </motion.div>

                {/* Search & Filter Bar */}
                <div className="bg-white rounded-3xl p-4 sm:p-5 shadow-sm border border-slate-100 flex flex-col md:flex-row items-center justify-between gap-4">
                    {/* Search Input */}
                    <div className="relative w-full md:w-80">
                        <div className="absolute inset-y-0 start-0 flex items-center ps-3.5 pointer-events-none text-slate-400">
                            <Search className="w-4 h-4" />
                        </div>
                        <input
                            type="text"
                            value={searchTerm}
                            onChange={(e) => setSearchTerm(e.target.value)}
                            placeholder={t('schedule.searchPlaceholder', 'ابحث عن حلقة، معلم، أو مجموعة...')}
                            className="w-full bg-[#F5F8F7] border border-transparent focus:border-[#00695C] text-slate-800 rounded-2xl py-2.5 ps-10 pe-4 text-xs sm:text-sm outline-none transition-all placeholder-slate-400"
                        />
                    </div>

                    {/* Filter Pills */}
                    <div className="flex items-center gap-2 flex-wrap w-full md:w-auto justify-start md:justify-end">
                        {[
                            { key: 'all', label: t('schedule.filterAll', 'جميع الجلسات') },
                            { key: 'scheduled', label: t('schedule.filterScheduled', 'القادمة') },
                            { key: 'live', label: t('schedule.filterLive', 'مباشر الآن') },
                            { key: 'completed', label: t('schedule.filterCompleted', 'المنتهية') },
                        ].map((flt) => (
                            <button
                                key={flt.key}
                                onClick={() => setStatusFilter(flt.key)}
                                className={`px-3.5 py-1.5 rounded-xl text-xs sm:text-sm font-semibold transition-all cursor-pointer ${
                                    statusFilter === flt.key
                                        ? 'bg-[#00695C] text-white shadow-sm'
                                        : 'bg-slate-100 hover:bg-slate-200 text-slate-600'
                                }`}
                            >
                                {flt.label}
                            </button>
                        ))}
                    </div>
                </div>

                {/* Days Navigation Tabs */}
                <div className="flex justify-center gap-2.5 sm:gap-3.5 overflow-x-auto pb-2 px-1 scrollbar-none">
                    {days.map((d, idx) => {
                        const isSelected = activeDayIndex === idx
                        const sessionCount = d.sessions ? d.sessions.length : 0
                        const dayNum = d.date ? d.date.split('-')[2] || d.date : ''

                        return (
                            <button
                                key={`${d.day}-${d.date || idx}`}
                                onClick={() => setActiveDayIndex(idx)}
                                className={`flex flex-col items-center justify-between min-w-[5.25rem] sm:min-w-[6rem] h-24 sm:h-28 rounded-3xl p-3 transition-all duration-300 font-bold focus:outline-none focus:ring-4 focus:ring-[#00695C]/20 shrink-0 cursor-pointer ${
                                    isSelected
                                        ? 'bg-[#00695C] text-white shadow-lg shadow-[#00695C]/25 scale-105'
                                        : 'bg-white text-slate-600 hover:bg-slate-50 border border-slate-100 hover:-translate-y-0.5'
                                }`}
                            >
                                <span className="text-xs sm:text-sm font-semibold truncate w-full text-center">
                                    {d.day}
                                </span>
                                <span className="text-xl sm:text-2xl font-black">
                                    {dayNum}
                                </span>
                                <span
                                    className={`text-[10px] sm:text-xs px-2 py-0.5 rounded-full font-bold transition-colors ${
                                        isSelected
                                            ? 'bg-white/20 text-white'
                                            : sessionCount > 0
                                            ? 'bg-emerald-50 text-[#00695C]'
                                            : 'bg-slate-100 text-slate-400'
                                    }`}
                                >
                                    {sessionCount} {isRtl ? 'جلسات' : 'sessions'}
                                </span>
                            </button>
                        )
                    })}
                </div>

                {/* Active Day Title & Overview */}
                {activeDay && (
                    <div className="flex items-center justify-between px-2 border-b border-slate-200/60 pb-3">
                        <div className="flex items-center gap-2 text-slate-800 font-bold text-lg sm:text-xl">
                            <Calendar className="w-5 h-5 text-[#00695C]" />
                            <span>
                                {activeDay.day} - {activeDay.date}
                            </span>
                        </div>
                        <span className="text-xs sm:text-sm text-slate-500 font-medium">
                            {activeDaySessions.length} {t('schedule.sessionsCount', 'جلسة مجدولة')}
                        </span>
                    </div>
                )}

                {/* Sessions List */}
                <AnimatePresence mode="wait">
                    {loading ? (
                        <div className="space-y-4">
                            {[1, 2, 3].map((n) => (
                                <div
                                    key={n}
                                    className="bg-white rounded-[2rem] p-6 shadow-sm border border-slate-100 animate-pulse h-36"
                                />
                            ))}
                        </div>
                    ) : activeDaySessions.length > 0 ? (
                        <motion.div
                            key={`${activeDay?.day}-${activeDayIndex}-${statusFilter}-${searchTerm}`}
                            initial={{ opacity: 0, y: 12 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -12 }}
                            transition={{ duration: 0.3 }}
                            className="space-y-5"
                        >
                            {activeDaySessions.map((session, index) => {
                                const teacherName = session.teacher?.name || t('schedule.certifiedTeacher', 'معلم معتمد')
                                const teacherInitial = teacherName.trim().charAt(0) || 'م'
                                const isCopied = copiedSessionId === session.id

                                return (
                                    <motion.div
                                        key={session.id || index}
                                        initial={{ opacity: 0, y: 15 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        transition={{ duration: 0.3, delay: index * 0.05 }}
                                        className="bg-white rounded-[2rem] p-5 sm:p-7 shadow-sm border border-slate-100 flex flex-col lg:flex-row items-start lg:items-center justify-between gap-6 hover:shadow-lg hover:border-[#00695C]/25 transition-all duration-300 group"
                                    >
                                        {/* Main Session Info */}
                                        <div className="space-y-3.5 flex-1 min-w-0">
                                            {/* Top badges */}
                                            <div className="flex flex-wrap items-center gap-2">
                                                {session.sessionNumber && (
                                                    <span className="px-3 py-1 rounded-full text-xs font-extrabold bg-[#00695C] text-white">
                                                        {t('schedule.sessionNo', 'الجلسة')} #{session.sessionNumber}
                                                    </span>
                                                )}
                                                {session.group?.name && (
                                                    <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-emerald-50 text-[#00695C] border border-emerald-100/70">
                                                        <BookOpen className="w-3.5 h-3.5 text-[#00695C]" />
                                                        <span className="truncate max-w-[200px] sm:max-w-none">{session.group.name}</span>
                                                    </span>
                                                )}
                                                <StatusBadge status={session.status} t={t} />
                                            </div>

                                            {/* Session Title */}
                                            <h3 className="text-xl sm:text-2xl font-extrabold text-slate-900 group-hover:text-[#00695C] transition-colors leading-snug">
                                                {session.title}
                                            </h3>

                                            {/* Session Details: Teacher, Timing, Duration */}
                                            <div className="flex flex-wrap items-center gap-3 sm:gap-5 text-xs sm:text-sm text-slate-600 font-medium">
                                                {/* Teacher */}
                                                <div className="flex items-center gap-2 bg-[#F5F8F7] px-3.5 py-2 rounded-2xl">
                                                    <div className="w-7 h-7 rounded-full bg-[#00695C] text-white flex items-center justify-center font-bold text-xs shrink-0">
                                                        {teacherInitial}
                                                    </div>
                                                    <span className="font-semibold text-slate-800">{teacherName}</span>
                                                </div>

                                                {/* Time */}
                                                <div className="flex items-center gap-1.5 bg-[#F5F8F7] px-3.5 py-2 rounded-2xl text-slate-700">
                                                    <Clock className="w-4 h-4 text-[#00695C] shrink-0" />
                                                    <span className="font-bold dir-ltr">
                                                        {session.startTime} - {session.endTime}
                                                    </span>
                                                </div>

                                                {/* Duration */}
                                                {session.durationMinutes && (
                                                    <div className="flex items-center gap-1 text-slate-500 text-xs px-2 py-1 bg-slate-100 rounded-xl">
                                                        <span>{session.durationMinutes}</span>
                                                        <span>{t('schedule.minutes', 'دقيقة')}</span>
                                                    </div>
                                                )}
                                            </div>
                                        </div>

                                        {/* Actions: Join Zoom / Copy Link */}
                                        <div className="w-full lg:w-auto flex flex-col sm:flex-row items-stretch sm:items-center gap-2.5 shrink-0 pt-2 lg:pt-0 border-t lg:border-t-0 border-slate-100">
                                            {session.zoomJoinUrl ? (
                                                <>
                                                    <a
                                                        href={session.zoomJoinUrl}
                                                        target="_blank"
                                                        rel="noopener noreferrer"
                                                        className={`flex items-center justify-center gap-2 px-6 py-3.5 rounded-2xl font-bold text-sm transition-all shadow-md active:scale-95 text-white ${
                                                            session.status === 'live'
                                                                ? 'bg-red-600 hover:bg-red-700 animate-pulse shadow-red-500/20'
                                                                : 'bg-[#00695C] hover:bg-[#005247] shadow-[#00695C]/20'
                                                        }`}
                                                    >
                                                        <Video className="w-4 h-4" />
                                                        <span>
                                                            {session.status === 'live'
                                                                ? t('schedule.joinLiveNow', 'انضم للبث المباشر الآن')
                                                                : t('schedule.joinViaZoom', 'الانضمام عبر Zoom')}
                                                        </span>
                                                        <ExternalLink className="w-3.5 h-3.5 opacity-80" />
                                                    </a>

                                                    <button
                                                        type="button"
                                                        onClick={() => handleCopyZoom(session.zoomJoinUrl, session.id)}
                                                        className={`flex items-center justify-center gap-1.5 px-4 py-3.5 rounded-2xl border text-sm font-semibold transition-all cursor-pointer ${
                                                            isCopied
                                                                ? 'bg-emerald-50 border-emerald-300 text-emerald-700'
                                                                : 'bg-white hover:bg-slate-50 border-slate-200 text-slate-700'
                                                        }`}
                                                        title={t('schedule.copyZoomLink', 'نسخ رابط الزوم')}
                                                    >
                                                        {isCopied ? (
                                                            <>
                                                                <Check className="w-4 h-4 text-emerald-600" />
                                                                <span className="text-xs">{t('schedule.copied', 'تم النسخ!')}</span>
                                                            </>
                                                        ) : (
                                                            <>
                                                                <Copy className="w-4 h-4 text-slate-500" />
                                                                <span className="text-xs hidden sm:inline">{t('schedule.copy', 'نسخ')}</span>
                                                            </>
                                                        )}
                                                    </button>
                                                </>
                                            ) : (
                                                <div className="px-5 py-3 rounded-2xl bg-slate-100 text-slate-500 text-xs sm:text-sm font-semibold text-center">
                                                    {session.status === 'completed'
                                                        ? t('schedule.sessionCompleted', 'انتهت الجلسة')
                                                        : t('schedule.linkPending', 'سيتم تفعيل الرابط قبل البدء')}
                                                </div>
                                            )}
                                        </div>
                                    </motion.div>
                                )
                            })}
                        </motion.div>
                    ) : (
                        /* Empty state */
                        <motion.div
                            initial={{ opacity: 0, scale: 0.96 }}
                            animate={{ opacity: 1, scale: 1 }}
                            className="bg-white rounded-[2rem] p-12 text-center shadow-sm border border-slate-100 max-w-xl mx-auto space-y-4"
                        >
                            <div className="w-16 h-16 rounded-full bg-slate-100 text-slate-400 flex items-center justify-center mx-auto mb-2">
                                <CalendarDays className="w-8 h-8" />
                            </div>
                            <h3 className="text-xl font-bold text-slate-800">
                                {t('schedule.noSessionsTitle', 'لا توجد جلسات مجدولة في هذا اليوم')}
                            </h3>
                            <p className="text-sm text-slate-500">
                                {searchTerm || statusFilter !== 'all'
                                    ? t('schedule.noSearchResults', 'لا توجد جلسات تطابق البحث أو الفلتر المحدد. جرب مسح البحث.')
                                    : t('schedule.enjoyRest', 'يمكنك الاستفادة من وقتك في مراجعة الأوراد السابقة والاستعداد للجلسات القادمة.')}
                            </p>
                            {(searchTerm || statusFilter !== 'all') && (
                                <button
                                    onClick={() => {
                                        setSearchTerm('')
                                        setStatusFilter('all')
                                    }}
                                    className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-[#00695C] text-white text-xs sm:text-sm font-semibold hover:bg-[#005247] transition-all cursor-pointer"
                                >
                                    <RotateCcw className="w-4 h-4" />
                                    <span>{t('schedule.resetFilters', 'إعادة تعيين الفلاتر')}</span>
                                </button>
                            )}
                        </motion.div>
                    )}
                </AnimatePresence>

                {/* Bottom CTA Banner */}
                <CTASection />

            </div>
        </div>
    )
}

const StatusBadge = React.memo(({ status, t }) => {
    if (status === 'live') {
        return (
            <span className="inline-flex items-center gap-1.5 bg-red-50 text-red-600 px-3 py-1 rounded-full text-xs font-bold border border-red-200">
                <span className="w-2 h-2 rounded-full bg-red-600 animate-ping" />
                <span className="w-2 h-2 rounded-full bg-red-600" />
                {t('schedule.status.live', 'مباشر الآن')}
            </span>
        )
    }
    if (status === 'scheduled') {
        return (
            <span className="inline-flex items-center gap-1.5 bg-amber-50 text-amber-700 px-3 py-1 rounded-full text-xs font-bold border border-amber-200/80">
                <span className="w-1.5 h-1.5 rounded-full bg-amber-500" />
                {t('schedule.status.scheduled', 'مجدولة')}
            </span>
        )
    }
    if (status === 'completed' || status === 'finished') {
        return (
            <span className="inline-flex items-center gap-1.5 bg-slate-100 text-slate-600 px-3 py-1 rounded-full text-xs font-bold border border-slate-200">
                <CheckCircle2 className="w-3.5 h-3.5 text-slate-500" />
                {t('schedule.status.completed', 'مكتملة')}
            </span>
        )
    }
    return (
        <span className="inline-flex items-center gap-1.5 bg-slate-100 text-slate-500 px-3 py-1 rounded-full text-xs font-bold border border-slate-200">
            {status}
        </span>
    )
})

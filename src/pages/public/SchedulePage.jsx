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

// Localized fallback week data matching backend response structure
const getFallbackWeekData = (isEn) => ({
    week: {
        startDate: '2026-10-03',
        endDate: '2026-10-09',
        formattedRange: isEn ? 'From 03/10/2026 to 09/10/2026' : 'من تاريخ 03/10/2026 إلى تاريخ 09/10/2026'
    },
    days: [
        {
            day: 'saturday',
            dayName: isEn ? 'Saturday' : 'السبت',
            date: '2026-10-03',
            isToday: true,
            sessions: [
                {
                    id: '6a35c80bed7ee094f8cac039',
                    title: isEn ? 'Introduction to Tajweed & Articulation Points' : 'مقدمة في علم التجويد ومخارج الحروف العامة',
                    sessionNumber: 1,
                    date: '2026-10-03',
                    day: 'saturday',
                    rawDay: 'saturday',
                    startTime: '10:00',
                    endTime: '11:30',
                    timeRange: isEn ? '10:00 AM - 11:30 AM' : '10:00 ص - 11:30 ص',
                    durationMinutes: 90,
                    type: 'regular',
                    status: 'completed',
                    zoomJoinUrl: 'https://us05web.zoom.us/j/84920491823?pwd=secretPassword123',
                    group: {
                        id: '6a35c80bed7ee094f8cac029',
                        name: isEn ? 'Foundation Group - Level 1' : 'مجموعة التأسيس - المستوى الأول'
                    },
                    teacher: {
                        id: '6a35c80bed7ee094f8cacfbd',
                        name: isEn ? 'Sheikh Ahmed Al-Mustafa' : 'الشيخ أحمد المصطفى',
                        email: 'ahmed@manaretalezz.com',
                        phone: '+966509988776'
                    }
                }
            ]
        },
        {
            day: 'sunday',
            dayName: isEn ? 'Sunday' : 'الأحد',
            date: '2026-10-04',
            isToday: false,
            sessions: [
                {
                    id: '6a35c80bed7ee094f8cac040',
                    title: isEn ? 'Surah An-Naba (1-20) with Rules of Nun Sakinah' : 'سورة النبأ من الآية 1 إلى 20 مع أحكام النون الساكنة',
                    sessionNumber: 4,
                    date: '2026-10-04',
                    day: 'sunday',
                    rawDay: 'sunday',
                    startTime: '16:00',
                    endTime: '17:30',
                    timeRange: isEn ? '04:00 PM - 05:30 PM' : '04:00 م - 05:30 م',
                    durationMinutes: 90,
                    type: 'regular',
                    status: 'scheduled',
                    zoomJoinUrl: 'https://us05web.zoom.us/j/84920491823?pwd=secretPassword123',
                    group: {
                        id: '6a35c80bed7ee094f8cac030',
                        name: isEn ? 'Mastery Group - Level 2' : 'مجموعة الإتقان - المستوى الثاني'
                    },
                    teacher: {
                        id: '6a35c80bed7ee094f8cacfbe',
                        name: isEn ? 'Sheikh Abdul Rahman Al-Sudais' : 'الشيخ عبد الرحمن السديس',
                        email: 'teacher@manaretalezz.com',
                        phone: '+966501112233'
                    }
                },
                {
                    id: '6a35c80bed7ee094f8cac041',
                    title: isEn ? 'Explanation of Al-Ajurrumiyyah in Arabic Grammar' : 'شرح متن الآجرومية في قواعد النحو والصرف',
                    sessionNumber: 3,
                    date: '2026-10-04',
                    day: 'sunday',
                    rawDay: 'sunday',
                    startTime: '18:00',
                    endTime: '19:30',
                    timeRange: isEn ? '06:00 PM - 07:30 PM' : '06:00 م - 07:30 م',
                    durationMinutes: 90,
                    type: 'regular',
                    status: 'scheduled',
                    zoomJoinUrl: 'https://us05web.zoom.us/j/84920491823?pwd=secretPassword123',
                    group: {
                        id: '6a35c80bed7ee094f8cac031',
                        name: isEn ? 'Arabic Language & Eloquence Program' : 'برنامج اللغة العربية واللسان المبين'
                    },
                    teacher: {
                        id: '6a35c80bed7ee094f8cacfbf',
                        name: isEn ? 'Prof. Dr. Mohammed Salem Al-Shinqiti' : 'أ. د. محمد سالم الشنقيطي',
                        email: 'm.salem@manaretalezz.com',
                        phone: '+966502223344'
                    }
                }
            ]
        },
        {
            day: 'monday',
            dayName: isEn ? 'Monday' : 'الاثنين',
            date: '2026-10-05',
            isToday: false,
            sessions: [
                {
                    id: '6a35c80bed7ee094f8cac042',
                    title: isEn ? 'Memorization & Revision of Surah Al-Baqarah' : 'حفظ ومراجعة سورة البقرة (الربع الثالث)',
                    sessionNumber: 8,
                    date: '2026-10-05',
                    day: 'monday',
                    rawDay: 'monday',
                    startTime: '16:30',
                    endTime: '18:00',
                    timeRange: isEn ? '04:30 PM - 06:00 PM' : '04:30 م - 06:00 م',
                    durationMinutes: 90,
                    type: 'regular',
                    status: 'scheduled',
                    zoomJoinUrl: 'https://us05web.zoom.us/j/84920491823?pwd=secretPassword123',
                    group: {
                        id: '6a35c80bed7ee094f8cac032',
                        name: isEn ? 'Huffaz Circle - Advanced Level' : 'حلقة الحفاظ - المستوى المتقدم'
                    },
                    teacher: {
                        id: '6a35c80bed7ee094f8cacfc0',
                        name: isEn ? 'Sheikh Abdullah Al-Basri' : 'الشيخ عبد الله بن علي البصري',
                        email: 'ali.basri@manaretalezz.com',
                        phone: '+966503334455'
                    }
                }
            ]
        },
        {
            day: 'tuesday',
            dayName: isEn ? 'Tuesday' : 'الثلاثاء',
            date: '2026-10-06',
            isToday: false,
            sessions: [
                {
                    id: '6a35c80bed7ee094f8cac043',
                    title: isEn ? 'Stories of the Prophets & Faith Lessons for Youth' : 'قصص الأنبياء والعبر الإيمانية للناشئة',
                    sessionNumber: 5,
                    date: '2026-10-06',
                    day: 'tuesday',
                    rawDay: 'tuesday',
                    startTime: '17:00',
                    endTime: '18:15',
                    timeRange: isEn ? '05:00 PM - 06:15 PM' : '05:00 م - 06:15 م',
                    durationMinutes: 75,
                    type: 'regular',
                    status: 'scheduled',
                    zoomJoinUrl: 'https://us05web.zoom.us/j/84920491823?pwd=secretPassword123',
                    group: {
                        id: '6a35c80bed7ee094f8cac033',
                        name: isEn ? 'Buds of Light - Primary Stage' : 'براعم النور - المرحلة الابتدائية'
                    },
                    teacher: {
                        id: '6a35c80bed7ee094f8cacfc1',
                        name: isEn ? 'Fatima Al-Zahraa Al-Sharif' : 'أ. فاطمة الزهراء الشريف',
                        email: 'fatima@manaretalezz.com',
                        phone: '+966504445566'
                    }
                }
            ]
        },
        {
            day: 'wednesday',
            dayName: isEn ? 'Wednesday' : 'الأربعاء',
            date: '2026-10-07',
            isToday: false,
            sessions: [
                {
                    id: '6a35c80bed7ee094f8cac044',
                    title: isEn ? 'Practical Tajweed: Letter Characteristics & Tarqeeq/Tafkheem' : 'تطبيق عملي: صفات الحروف وترقيق وتفخيم الراء واللام',
                    sessionNumber: 6,
                    date: '2026-10-07',
                    day: 'wednesday',
                    rawDay: 'wednesday',
                    startTime: '16:00',
                    endTime: '17:30',
                    timeRange: isEn ? '04:00 PM - 05:30 PM' : '04:00 م - 05:30 م',
                    durationMinutes: 90,
                    type: 'regular',
                    status: 'scheduled',
                    zoomJoinUrl: 'https://us05web.zoom.us/j/84920491823?pwd=secretPassword123',
                    group: {
                        id: '6a35c80bed7ee094f8cac030',
                        name: isEn ? 'Mastery Group - Level 2' : 'مجموعة الإتقان - المستوى الثاني'
                    },
                    teacher: {
                        id: '6a35c80bed7ee094f8cacfbe',
                        name: isEn ? 'Sheikh Abdul Rahman Al-Sudais' : 'الشيخ عبد الرحمن السديس',
                        email: 'teacher@manaretalezz.com',
                        phone: '+966501112233'
                    }
                }
            ]
        },
        {
            day: 'thursday',
            dayName: isEn ? 'Thursday' : 'الخميس',
            date: '2026-10-08',
            isToday: false,
            sessions: [
                {
                    id: '6a35c80bed7ee094f8cac045',
                    title: isEn ? 'Comprehensive Recitation & Weekly Assessment' : 'حلقة التسميع الشامل والتقييم الأسبوعي',
                    sessionNumber: 7,
                    date: '2026-10-08',
                    day: 'thursday',
                    rawDay: 'thursday',
                    startTime: '15:30',
                    endTime: '17:00',
                    timeRange: isEn ? '03:30 PM - 05:00 PM' : '03:30 م - 05:00 م',
                    durationMinutes: 90,
                    type: 'regular',
                    status: 'scheduled',
                    zoomJoinUrl: 'https://us05web.zoom.us/j/84920491823?pwd=secretPassword123',
                    group: {
                        id: '6a35c80bed7ee094f8cac034',
                        name: isEn ? 'Ijazah Recitation Circle' : 'حلقة الإجازة بالسند المتصل'
                    },
                    teacher: {
                        id: '6a35c80bed7ee094f8cacfc2',
                        name: isEn ? 'Sheikh Hossam El-Din' : 'فضيلة الشيخ المقرئ حسام الدين',
                        email: 'hossam@manaretalezz.com',
                        phone: '+966505556677'
                    }
                }
            ]
        },
        {
            day: 'friday',
            dayName: isEn ? 'Friday' : 'الجمعة',
            date: '2026-10-09',
            isToday: false,
            sessions: []
        }
    ]
})

export default function SchedulePage({ role }) {
    const { t, i18n } = useTranslation()
    const isRtl = i18n.language === 'ar'
    const isEn = i18n.language === 'en'

    const fallbackData = useMemo(() => getFallbackWeekData(isEn), [isEn])
    const [timetableData, setTimetableData] = useState(fallbackData)
    const [loading, setLoading] = useState(true)
    const [activeDayIndex, setActiveDayIndex] = useState(0)
    const [statusFilter, setStatusFilter] = useState('all') // 'all' | 'scheduled' | 'live' | 'completed'
    const [copiedSessionId, setCopiedSessionId] = useState(null)

    // Load Timetable from backend public API
    useEffect(() => {
        let isMounted = true
        const loadTimetable = async () => {
            setLoading(true)
            const fallback = getFallbackWeekData(i18n.language === 'en')
            try {
                // Fetch public current week timetable with current language
                const res = await landingApi.fetchPublicCurrentWeekTimetable({ lang: i18n.language })
                const data = res?.data || res
                if (isMounted && data) {
                    const week = data.currentWeek || data.week || fallback.week
                    const days = Array.isArray(data.days) && data.days.length > 0 ? data.days : fallback.days
                    setTimetableData({
                        week,
                        days,
                        title: data.title,
                        subtitle: data.subtitle
                    })

                    // Automatically select today if present in days
                    const todayIdx = days.findIndex((d) => d.isToday)
                    if (todayIdx !== -1) {
                        setActiveDayIndex(todayIdx)
                    }
                }
            } catch (err) {
                console.warn('Using fallback timetable data due to API status:', err?.message)
                if (isMounted) {
                    setTimetableData(fallback)
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

    // Formatted date range localized properly
    const formattedWeekRange = useMemo(() => {
        if (weekInfo?.formattedRange) {
            // If English and the formattedRange contains Arabic letters, translate properly
            if (isEn && /[\u0600-\u06FF]/.test(weekInfo.formattedRange)) {
                if (weekInfo.startDate && weekInfo.endDate) {
                    return `From ${weekInfo.startDate} to ${weekInfo.endDate}`
                }
            }
            // If Arabic and formattedRange starts with English, translate properly
            if (isRtl && weekInfo.formattedRange.startsWith('From')) {
                if (weekInfo.startDate && weekInfo.endDate) {
                    return `من تاريخ ${weekInfo.startDate} إلى تاريخ ${weekInfo.endDate}`
                }
            }
            return weekInfo.formattedRange
        }
        if (weekInfo?.startDate && weekInfo?.endDate) {
            return isRtl
                ? `من تاريخ ${weekInfo.startDate} إلى تاريخ ${weekInfo.endDate}`
                : `From ${weekInfo.startDate} to ${weekInfo.endDate}`
        }
        return ''
    }, [weekInfo, isRtl, isEn])

    // Total counts across the week
    const totalWeeklySessions = useMemo(() => {
        return days.reduce((acc, d) => acc + (d.sessions ? d.sessions.length : (d.sessionsCount || 0)), 0)
    }, [days])

    // Localize day name consistently
    const getLocalizedDay = useCallback((dayItem) => {
        if (!dayItem) return ''
        const raw = (dayItem.day || dayItem.rawDay || '').toString().trim().toLowerCase()
        const arabicToKey = {
            'السبت': 'saturday',
            'الأحد': 'sunday',
            'الاحد': 'sunday',
            'الاثنين': 'monday',
            'الإثنين': 'monday',
            'الثلاثاء': 'tuesday',
            'الأربعاء': 'wednesday',
            'الاربعاء': 'wednesday',
            'الخميس': 'thursday',
            'الجمعة': 'friday'
        }
        const key = arabicToKey[dayItem.day] || arabicToKey[dayItem.dayName] || raw
        if (key && ['saturday', 'sunday', 'monday', 'tuesday', 'wednesday', 'thursday', 'friday'].includes(key)) {
            return t(`schedule.${key}`, { defaultValue: dayItem.dayName || dayItem.day })
        }
        if (dayItem.date) {
            try {
                const dateObj = new Date(dayItem.date)
                if (!isNaN(dateObj.getTime())) {
                    const dayKeys = ['sunday', 'monday', 'tuesday', 'wednesday', 'thursday', 'friday', 'saturday']
                    const dayIndex = dateObj.getDay()
                    return t(`schedule.${dayKeys[dayIndex]}`, { defaultValue: dayItem.dayName || dayItem.day })
                }
            } catch {
                // fallback
            }
        }
        return dayItem.dayName || dayItem.day || ''
    }, [t])

    // Localize session time format
    const formatSessionTime = useCallback((session) => {
        if (session.timeRange) return session.timeRange
        if (!session.startTime) return ''
        if (!session.startTime.includes('T')) {
            return session.endTime ? `${session.startTime} - ${session.endTime}` : session.startTime
        }
        try {
            const locale = isRtl ? 'ar-EG' : 'en-US'
            const start = new Date(session.startTime).toLocaleTimeString(locale, {
                hour: '2-digit',
                minute: '2-digit'
            })
            const end = session.endTime
                ? new Date(session.endTime).toLocaleTimeString(locale, {
                      hour: '2-digit',
                      minute: '2-digit'
                  })
                : ''
            return end ? `${start} - ${end}` : start
        } catch {
            return `${session.startTime} - ${session.endTime || ''}`
        }
    }, [isRtl])

    // Filter sessions of the active day
    const activeDaySessions = useMemo(() => {
        if (!activeDay || !activeDay.sessions) return []
        return activeDay.sessions.filter((s) => {
            if (statusFilter === 'all') return true
            if (statusFilter === 'scheduled') {
                return s.status === 'scheduled' || s.status === 'upcoming' || s.badgeType === 'upcoming'
            }
            if (statusFilter === 'live') {
                return s.status === 'live' || s.isLive || s.badgeType === 'live'
            }
            if (statusFilter === 'completed') {
                return s.status === 'completed' || s.status === 'finished' || s.status === 'attended' || s.badgeType === 'completed'
            }
            return s.status === statusFilter
        })
    }, [activeDay, statusFilter])

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
                        {timetableData.title || t('schedule.pageTitle', 'جدول الحلقات والجلسات اليومية')}
                    </h1>

                    <p className="text-slate-600 font-medium text-sm sm:text-base lg:text-lg leading-relaxed">
                        {timetableData.subtitle || t('schedule.pageSubtitle', 'تابع رحلتك القرآنية والعلمية مع نخبة من المعلمين المعتمدين في منارة العز وانضم لحصتك بنقرة واحدة.')}
                    </p>

                    {/* Current Week Range Banner */}
                    <div className="inline-flex items-center gap-2.5 px-5 py-2.5 rounded-2xl bg-white shadow-sm border border-slate-200/80 text-slate-700 text-xs sm:text-sm font-semibold mt-2">
                        <CalendarDays className="w-4 h-4 text-[#00695C]" />
                        <span>
                            {formattedWeekRange ||
                                `${t('schedule.weekOf', 'أسبوع')}: ${weekInfo.startDate || ''} - ${weekInfo.endDate || ''}`}
                        </span>
                        <span className="w-1.5 h-1.5 rounded-full bg-slate-300" />
                        <span className="text-[#00695C] font-bold">
                            {totalWeeklySessions} {t('schedule.sessionsThisWeek', 'جلسة هذا الأسبوع')}
                        </span>
                    </div>
                </motion.div>

                {/* Sessions Filter Bar */}
                <div className="bg-white rounded-3xl p-3 sm:p-4 shadow-sm border border-slate-100 flex items-center justify-center">
                    <div className="flex items-center gap-2 flex-wrap justify-center">
                        {[
                            { key: 'all', label: t('schedule.filterAll', 'جميع الجلسات') },
                            { key: 'scheduled', label: t('schedule.filterScheduled', 'القادمة') },
                            { key: 'live', label: t('schedule.filterLive', 'مباشر الآن') },
                            { key: 'completed', label: t('schedule.filterCompleted', 'المنتهية') },
                        ].map((flt) => (
                            <button
                                key={flt.key}
                                onClick={() => setStatusFilter(flt.key)}
                                className={`px-4 py-2 rounded-2xl text-xs sm:text-sm font-bold transition-all cursor-pointer ${
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
                        const sessionCount = d.sessions ? d.sessions.length : (d.sessionsCount || 0)
                        const dayNum = d.dayNumber || (d.date ? d.date.split('-')[2] || d.date : '')
                        const localizedDay = getLocalizedDay(d)

                        return (
                            <button
                                key={`${d.day}-${d.date || idx}`}
                                onClick={() => setActiveDayIndex(idx)}
                                className={`flex flex-col items-center justify-between min-w-[5.5rem] sm:min-w-[6.25rem] h-24 sm:h-28 rounded-3xl p-3 transition-all duration-300 font-bold focus:outline-none focus:ring-4 focus:ring-[#00695C]/20 shrink-0 cursor-pointer ${
                                    isSelected
                                        ? 'bg-[#00695C] text-white shadow-lg shadow-[#00695C]/25 scale-105'
                                        : 'bg-white text-slate-600 hover:bg-slate-50 border border-slate-100 hover:-translate-y-0.5'
                                }`}
                            >
                                <span className="text-xs sm:text-sm font-semibold truncate w-full text-center">
                                    {localizedDay}
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
                                    {sessionCount}{' '}
                                    {sessionCount === 1
                                        ? t('schedule.sessionSingle', isRtl ? 'جلسة' : 'session')
                                        : t('schedule.sessionsPlural', isRtl ? 'جلسات' : 'sessions')}
                                </span>
                            </button>
                        )
                    })}
                </div>

                {/* Active Day Title & Overview */}
                {activeDay && (
                    <div className="flex items-center justify-between px-2 border-b border-slate-200/60 pb-3">
                        <div className="flex items-center gap-2.5 text-slate-800 font-bold text-lg sm:text-xl">
                            <Calendar className="w-5 h-5 text-[#00695C]" />
                            <span>
                                {getLocalizedDay(activeDay)} - {activeDay.formattedDate || activeDay.date}
                            </span>
                            {activeDay.isToday && (
                                <span className="text-xs px-2.5 py-0.5 rounded-full bg-emerald-100 text-[#00695C] font-bold">
                                    {t('schedule.today', 'اليوم')}
                                </span>
                            )}
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
                                const joinUrl = session.zoomJoinUrl || session.meetingUrl || session.zoomUrl || session.link
                                const isCopied = copiedSessionId === session.id
                                const groupOrCurriculum = session.group?.name || session.curriculum?.name

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
                                                {groupOrCurriculum && (
                                                    <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-emerald-50 text-[#00695C] border border-emerald-100/70">
                                                        <BookOpen className="w-3.5 h-3.5 text-[#00695C]" />
                                                        <span className="truncate max-w-[200px] sm:max-w-none">
                                                            {groupOrCurriculum}
                                                            {session.studentLevel?.name && ` • ${session.studentLevel.name}`}
                                                        </span>
                                                    </span>
                                                )}
                                                <StatusBadge
                                                    status={session.status}
                                                    badge={session.badge}
                                                    badgeType={session.badgeType}
                                                    isLive={session.isLive}
                                                    t={t}
                                                />
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
                                                        {formatSessionTime(session)}
                                                    </span>
                                                </div>

                                                {/* Duration */}
                                                {(session.durationMinutes || session.duration) && (
                                                    <div className="flex items-center gap-1 text-slate-500 text-xs px-2 py-1 bg-slate-100 rounded-xl">
                                                        <span>{session.durationMinutes ? `${session.durationMinutes} ${t('schedule.minutes', 'دقيقة')}` : session.duration}</span>
                                                    </div>
                                                )}
                                            </div>
                                        </div>

                                        {/* Actions: Join Zoom / Copy Link */}
                                        <div className="w-full lg:w-auto flex flex-col sm:flex-row items-stretch sm:items-center gap-2.5 shrink-0 pt-2 lg:pt-0 border-t lg:border-t-0 border-slate-100">
                                            {joinUrl ? (
                                                <>
                                                    <a
                                                        href={joinUrl}
                                                        target="_blank"
                                                        rel="noopener noreferrer"
                                                        className={`flex items-center justify-center gap-2 px-6 py-3.5 rounded-2xl font-bold text-sm transition-all shadow-md active:scale-95 text-white ${
                                                            session.status === 'live' || session.isLive
                                                                ? 'bg-red-600 hover:bg-red-700 animate-pulse shadow-red-500/20'
                                                                : 'bg-[#00695C] hover:bg-[#005247] shadow-[#00695C]/20'
                                                        }`}
                                                    >
                                                        <Video className="w-4 h-4" />
                                                        <span>
                                                            {session.status === 'live' || session.isLive
                                                                ? t('schedule.joinLiveNow', 'انضم للبث المباشر الآن')
                                                                : t('schedule.joinViaZoom', 'الانضمام عبر Zoom')}
                                                        </span>
                                                        <ExternalLink className="w-3.5 h-3.5 opacity-80" />
                                                    </a>

                                                    <button
                                                        type="button"
                                                        onClick={() => handleCopyZoom(joinUrl, session.id)}
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
                                                    {session.status === 'completed' || session.status === 'finished'
                                                        ? t('schedule.sessionCompleted', 'انتهت الجلسة')
                                                        : (session.actionText || t('schedule.linkPending', 'سيتم تفعيل الرابط قبل البدء'))}
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

                {/* Bottom CTA Banner (Only for public page, not nested in dashboards) */}
                {!role && <CTASection />}

            </div>
        </div>
    )
}

const StatusBadge = React.memo(({ status, badge, badgeType, isLive: propIsLive, t }) => {
    const isLive = status === 'live' || badgeType === 'live' || propIsLive
    const isScheduled = status === 'scheduled' || badgeType === 'upcoming' || status === 'upcoming'
    const isCompleted = status === 'completed' || status === 'finished' || badgeType === 'completed'

    if (isLive) {
        return (
            <span className="inline-flex items-center gap-1.5 bg-red-50 text-red-600 px-3 py-1 rounded-full text-xs font-bold border border-red-200">
                <span className="w-2 h-2 rounded-full bg-red-600 animate-ping" />
                <span className="w-2 h-2 rounded-full bg-red-600" />
                {t('schedule.status.live', 'مباشر الآن')}
            </span>
        )
    }
    if (isScheduled) {
        return (
            <span className="inline-flex items-center gap-1.5 bg-amber-50 text-amber-700 px-3 py-1 rounded-full text-xs font-bold border border-amber-200/80">
                <span className="w-1.5 h-1.5 rounded-full bg-amber-500" />
                {t('schedule.status.scheduled', t('schedule.status.upcoming', 'مجدولة'))}
            </span>
        )
    }
    if (isCompleted) {
        return (
            <span className="inline-flex items-center gap-1.5 bg-slate-100 text-slate-600 px-3 py-1 rounded-full text-xs font-bold border border-slate-200">
                <CheckCircle2 className="w-3.5 h-3.5 text-slate-500" />
                {t('schedule.status.completed', t('schedule.status.finished', 'مكتملة'))}
            </span>
        )
    }
    return (
        <span className="inline-flex items-center gap-1.5 bg-slate-100 text-slate-500 px-3 py-1 rounded-full text-xs font-bold border border-slate-200">
            {badge || status}
        </span>
    )
})

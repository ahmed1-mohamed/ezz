import { useState, useEffect, useMemo, useCallback } from 'react';
import { useTranslation } from 'react-i18next';
import { Calendar } from 'lucide-react';
import { landingApi } from '@/shared/services/api/landingApi';
import CTASection from '@/shared/components/CTASection.jsx';
import ScheduleHero from './components/Schedule/ScheduleHero.jsx';
import ScheduleFilterBar from './components/Schedule/ScheduleFilterBar.jsx';
import ScheduleDayTabs from './components/Schedule/ScheduleDayTabs.jsx';
import ScheduleSessionCard from './components/Schedule/ScheduleSessionCard.jsx';
import ScheduleEmptyState from './components/Schedule/ScheduleEmptyState.jsx';

export default function SchedulePage() {
    const { t, i18n } = useTranslation();
    const isRtl = i18n.language?.startsWith('ar') ?? true;
    const isEn = i18n.language === 'en';

    const [timetableData, setTimetableData] = useState({ week: {}, days: [] });
    const [loading, setLoading] = useState(true);
    const [activeDayIndex, setActiveDayIndex] = useState(0);
    const [statusFilter, setStatusFilter] = useState('all');
    const [copiedSessionId, setCopiedSessionId] = useState(null);

    useEffect(() => {
        let isMounted = true;
        const loadTimetable = async () => {
            setLoading(true);
            try {
                const res = await landingApi.fetchPublicCurrentWeekTimetable();
                const data = res?.data || res;
                if (isMounted && data) {
                    const week = data.currentWeek || data.week || {};
                    const days = Array.isArray(data.days) ? data.days : [];
                    setTimetableData({
                        week,
                        days,
                        title: data.title,
                        subtitle: data.subtitle,
                    });

                    const todayIdx = days.findIndex((d) => d.isToday);
                    if (todayIdx !== -1) {
                        setActiveDayIndex(todayIdx);
                    }
                }
            } catch (err) {
                console.warn('Failed to fetch timetable data:', err?.message);
                if (isMounted) {
                    setTimetableData({ week: {}, days: [] });
                }
            } finally {
                if (isMounted) setLoading(false);
            }
        };

        loadTimetable();
        return () => {
            isMounted = false;
        };
    }, [i18n.language]);

    const days = useMemo(() => timetableData?.days || [], [timetableData]);
    const weekInfo = useMemo(() => timetableData?.week || {}, [timetableData]);

    const activeDay = useMemo(() => {
        if (!days || days.length === 0) return null;
        return days[activeDayIndex] || days[0];
    }, [days, activeDayIndex]);

    const formattedWeekRange = useMemo(() => {
        if (weekInfo?.formattedRange) {
            if (isEn && /[\u0600-\u06FF]/.test(weekInfo.formattedRange)) {
                if (weekInfo.startDate && weekInfo.endDate) {
                    return `From ${weekInfo.startDate} to ${weekInfo.endDate}`;
                }
            }
            if (isRtl && weekInfo.formattedRange.startsWith('From')) {
                if (weekInfo.startDate && weekInfo.endDate) {
                    return `من تاريخ ${weekInfo.startDate} إلى تاريخ ${weekInfo.endDate}`;
                }
            }
            return weekInfo.formattedRange;
        }
        if (weekInfo?.startDate && weekInfo?.endDate) {
            return isRtl
                ? `من تاريخ ${weekInfo.startDate} إلى تاريخ ${weekInfo.endDate}`
                : `From ${weekInfo.startDate} to ${weekInfo.endDate}`;
        }
        return '';
    }, [weekInfo, isRtl, isEn]);

    const totalWeeklySessions = useMemo(() => {
        return days.reduce((acc, d) => acc + (d.sessions ? d.sessions.length : (d.sessionsCount || 0)), 0);
    }, [days]);

    const getLocalizedDay = useCallback((dayItem) => {
        if (!dayItem) return '';
        const raw = (dayItem.day || dayItem.rawDay || '').toString().trim().toLowerCase();
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
            'الجمعة': 'friday',
        };
        const key = arabicToKey[dayItem.day] || arabicToKey[dayItem.dayName] || raw;
        if (key && ['saturday', 'sunday', 'monday', 'tuesday', 'wednesday', 'thursday', 'friday'].includes(key)) {
            return t(`schedule.${key}`, { defaultValue: dayItem.dayName || dayItem.day });
        }
        if (dayItem.date) {
            const dateObj = new Date(dayItem.date);
            if (!isNaN(dateObj.getTime())) {
                const dayKeys = ['sunday', 'monday', 'tuesday', 'wednesday', 'thursday', 'friday', 'saturday'];
                const dayIndex = dateObj.getDay();
                return t(`schedule.${dayKeys[dayIndex]}`, { defaultValue: dayItem.dayName || dayItem.day });
            }
        }
        return dayItem.dayName || dayItem.day || '';
    }, [t]);

    const formatSessionTime = useCallback((session) => {
        if (session.timeRange) return session.timeRange;
        if (!session.startTime) return '';
        if (!session.startTime.includes('T')) {
            return session.endTime ? `${session.startTime} - ${session.endTime}` : session.startTime;
        }
        try {
            const locale = isRtl ? 'ar-EG' : 'en-US';
            const start = new Date(session.startTime).toLocaleTimeString(locale, {
                hour: '2-digit',
                minute: '2-digit',
                hour12: false,
            });
            const end = session.endTime
                ? new Date(session.endTime).toLocaleTimeString(locale, {
                      hour: '2-digit',
                      minute: '2-digit',
                      hour12: false,
                  })
                : '';
            return end ? `${start} - ${end}` : start;
        } catch {
            return `${session.startTime} - ${session.endTime || ''}`;
        }
    }, [isRtl]);

    const activeDaySessions = useMemo(() => {
        if (!activeDay || !Array.isArray(activeDay.sessions)) return [];
        return activeDay.sessions.filter((s) => {
            if (statusFilter === 'all') return true;
            if (statusFilter === 'scheduled') {
                return s.status === 'scheduled' || s.status === 'upcoming' || s.badgeType === 'upcoming';
            }
            if (statusFilter === 'live') {
                return s.status === 'live' || s.isLive || s.badgeType === 'live';
            }
            if (statusFilter === 'completed') {
                return s.status === 'completed' || s.status === 'finished' || s.status === 'attended' || s.badgeType === 'completed';
            }
            return s.status === statusFilter;
        });
    }, [activeDay, statusFilter]);

    const handleCopyZoom = useCallback((url, id) => {
        if (!url) return;
        navigator.clipboard.writeText(url);
        setCopiedSessionId(id);
        setTimeout(() => setCopiedSessionId(null), 2500);
    }, []);

    return (
        <div className="min-h-screen bg-[#EEF2F0]/80 dark:bg-slate-950 transition-colors duration-300 py-10 sm:py-14 px-4 sm:px-6 lg:px-8 font-sans" dir={isRtl ? 'rtl' : 'ltr'}>
            <div className="max-w-7xl mx-auto space-y-8 sm:space-y-10">
                <ScheduleHero
                    title={timetableData.title}
                    subtitle={timetableData.subtitle}
                    formattedWeekRange={formattedWeekRange}
                    weekInfo={weekInfo}
                    totalWeeklySessions={totalWeeklySessions}
                />

                <ScheduleFilterBar
                    statusFilter={statusFilter}
                    onStatusFilterChange={setStatusFilter}
                />

                {loading ? (
                    <div className="space-y-4">
                        <div className="flex justify-center gap-3 overflow-x-auto pb-2">
                            {[1, 2, 3, 4, 5, 6, 7].map((i) => (
                                <div key={i} className="w-24 h-28 rounded-3xl bg-slate-200/60 dark:bg-slate-800/60 animate-pulse shrink-0" />
                            ))}
                        </div>
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 pt-4">
                            {[1, 2, 3].map((i) => (
                                <div key={i} className="h-64 rounded-3xl bg-slate-200/60 dark:bg-slate-800/60 animate-pulse" />
                            ))}
                        </div>
                    </div>
                ) : days.length === 0 ? (
                    <ScheduleEmptyState
                        hasFiltersApplied={false}
                        onResetFilters={() => setStatusFilter('all')}
                    />
                ) : (
                    <>
                        <ScheduleDayTabs
                            days={days}
                            activeDayIndex={activeDayIndex}
                            onSelectDay={setActiveDayIndex}
                            getLocalizedDay={getLocalizedDay}
                        />

                        {activeDay && (
                            <div className="flex items-center justify-between px-2 border-b border-slate-200/60 dark:border-slate-800 pb-3">
                                <div className="flex items-center gap-2.5 text-slate-800 dark:text-white font-bold text-lg sm:text-xl">
                                    <Calendar className="w-5 h-5 text-[#00695C] dark:text-emerald-400" />
                                    <span>
                                        {getLocalizedDay(activeDay)} - {activeDay.formattedDate || activeDay.date}
                                    </span>
                                    {activeDay.isToday && (
                                        <span className="text-xs px-2.5 py-0.5 rounded-full bg-emerald-100 dark:bg-[#00695C]/30 text-[#00695C] dark:text-emerald-400 font-bold">
                                            {t('schedule.today', 'اليوم')}
                                        </span>
                                    )}
                                </div>
                                <span className="text-xs sm:text-sm text-slate-500 dark:text-slate-400 font-medium">
                                    {activeDaySessions.length} {t('schedule.sessionsCount', 'جلسة مجدولة')}
                                </span>
                            </div>
                        )}

                        {activeDaySessions.length > 0 ? (
                            <div className="space-y-5">
                                {activeDaySessions.map((session, idx) => (
                                    <ScheduleSessionCard
                                        key={session.id || idx}
                                        session={session}
                                        index={idx}
                                        formatSessionTime={formatSessionTime}
                                        copiedSessionId={copiedSessionId}
                                        onCopyZoom={handleCopyZoom}
                                    />
                                ))}
                            </div>
                        ) : (
                            <ScheduleEmptyState
                                hasFiltersApplied={statusFilter !== 'all'}
                                onResetFilters={() => setStatusFilter('all')}
                            />
                        )}
                    </>
                )}

                <div className="pt-8">
                    <CTASection />
                </div>
            </div>
        </div>
    );
}

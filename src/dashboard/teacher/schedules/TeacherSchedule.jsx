import { useState, useMemo, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { useQuery, keepPreviousData } from '@tanstack/react-query';
import { timetableApi } from '@/shared/services/api/timetableApi.js';

import TeacherScheduleHeader from './components/TeacherScheduleHeader.jsx';
import TeacherScheduleWeekNavigator from './components/TeacherScheduleWeekNavigator.jsx';
import TeacherScheduleDaysTabs from './components/TeacherScheduleDaysTabs.jsx';
import TeacherScheduleSessionCard from './components/TeacherScheduleSessionCard.jsx';
import TeacherScheduleEmptyState from './components/TeacherScheduleEmptyState.jsx';

const DAY_KEYS = ['saturday', 'sunday', 'monday', 'tuesday', 'wednesday', 'thursday', 'friday'];

function parseLocalDate(dateString) {
  if (!dateString) return new Date();
  if (dateString instanceof Date) return dateString;
  const parts = String(dateString).split('T')[0].split('-').map(Number);
  if (parts.length === 3 && !isNaN(parts[0]) && !isNaN(parts[1]) && !isNaN(parts[2])) {
    return new Date(parts[0], parts[1] - 1, parts[2]);
  }
  const parsed = new Date(dateString);
  return isNaN(parsed.getTime()) ? new Date() : parsed;
}

function isSameDay(a, b) {
  if (!a || !b) return false;
  return (
    a.getFullYear() === b.getFullYear() &&
    a.getMonth() === b.getMonth() &&
    a.getDate() === b.getDate()
  );
}

export default function TeacherSchedule() {
  const { t, i18n } = useTranslation();
  const isRtl = i18n?.language?.startsWith('ar') ?? true;
  const today = useMemo(() => new Date(), []);

  const [weekOffset, setWeekOffset] = useState(0);
  const [selectedDate, setSelectedDate] = useState('');

  const [currentTimeStr, setCurrentTimeStr] = useState('');
  const [currentDateStr, setCurrentDateStr] = useState('');
  const [selectedDayIndex, setSelectedDayIndex] = useState(null);

  useEffect(() => {
    const updateDateTime = () => {
      const now = new Date();
      try {
        const timeFormatted = new Intl.DateTimeFormat(isRtl ? 'ar-EG' : 'en-US', {
          hour: 'numeric',
          minute: '2-digit',
          second: '2-digit',
          hour12: true,
        }).format(now);
        setCurrentTimeStr(timeFormatted);
      } catch {
        setCurrentTimeStr(now.toLocaleTimeString());
      }

      try {
        const dateFormatted = new Intl.DateTimeFormat(isRtl ? 'ar-EG' : 'en-US', {
          weekday: 'long',
          day: 'numeric',
          month: 'long',
          year: 'numeric',
        }).format(now);
        setCurrentDateStr(dateFormatted);
      } catch {
        setCurrentDateStr(now.toLocaleDateString());
      }
    };

    updateDateTime();
    const interval = setInterval(updateDateTime, 1000);
    return () => clearInterval(interval);
  }, [isRtl]);

  const {
    data: timetableData,
    isLoading,
    isFetching,
    refetch,
  } = useQuery({
    queryKey: ['teacherTimetable', weekOffset, selectedDate],
    queryFn: () =>
      timetableApi.fetchTeacherTimetable({
        weekOffset,
        date: selectedDate || undefined,
      }),
    staleTime: 60 * 1000,
    placeholderData: keepPreviousData,
  });

  const weekInfo = useMemo(
    () => timetableData?.weekInfo || timetableData?.week || {},
    [timetableData]
  );

  const weekDays = useMemo(() => {
    const apiDays = timetableData?.days;
    if (Array.isArray(apiDays) && apiDays.length > 0) {
      return apiDays.map((d, idx) => {
        const dObj = d.date ? parseLocalDate(d.date) : null;
        const dayKey = d.day ? d.day.toLowerCase() : DAY_KEYS[idx % 7];
        const dayName = t(`schedule.${dayKey}`, { defaultValue: d.dayName || d.day });
        const sessions = (Array.isArray(d.sessions) ? d.sessions : []).map((s, sIdx) => ({
          id: s.id || s._id || `s-${idx}-${sIdx}`,
          title: s.title || s.name || t('teacherSchedule.sessionTitleFallback', 'حصة دراسية'),
          groupName:
            (typeof s.group === 'object' && s.group !== null
              ? s.group.name || s.group.title
              : s.groupName || s.group) || t('teacherDashboard.groupName', 'مجموعة دراسية'),
          startTime: s.startTime || s.time || '',
          endTime: s.endTime || '',
          timeRange: s.timeRange || (s.startTime && s.endTime ? `${s.startTime} - ${s.endTime}` : s.startTime || s.time || ''),
          status: (s.status || 'scheduled').toLowerCase(),
          studentsCount: s.studentsCount ?? (Array.isArray(s.students) ? s.students.length : 0),
          zoomJoinUrl: s.zoomJoinUrl || s.joinUrl || s.meetingUrl || null,
        }));

        return {
          dayKey,
          dayName,
          date: d.date,
          dateObj: dObj,
          isToday: d.isToday ?? (dObj ? isSameDay(dObj, today) : false),
          sessions,
        };
      });
    }

    return [];
  }, [timetableData, today, t]);

  const activeDayIndex = useMemo(() => {
    if (selectedDayIndex !== null && selectedDayIndex >= 0 && selectedDayIndex < weekDays.length) {
      return selectedDayIndex;
    }
    const todayIdx = weekDays.findIndex((d) => d.isToday);
    return todayIdx !== -1 ? todayIdx : 0;
  }, [selectedDayIndex, weekDays]);

  const totalWeekSessions = useMemo(() => {
    return weekDays.reduce((acc, d) => acc + (d.sessions?.length || 0), 0);
  }, [weekDays]);

  const weekRangeLabel = useMemo(() => {
    if (weekInfo?.formattedRange) return weekInfo.formattedRange;
    if (weekInfo?.startDate && weekInfo?.endDate) {
      return `${t('teacherSchedule.from', 'من')} ${weekInfo.startDate} ${t('teacherSchedule.to', 'إلى')} ${weekInfo.endDate}`;
    }
    if (weekDays.length >= 2) {
      const first = weekDays[0].date;
      const last = weekDays[weekDays.length - 1].date;
      if (first && last) return `${t('teacherSchedule.from', 'من')} ${first} ${t('teacherSchedule.to', 'إلى')} ${last}`;
    }
    return '';
  }, [weekInfo, weekDays, t]);

  const weekTitle = useMemo(() => {
    if (weekOffset === 0 && !selectedDate) return t('teacherSchedule.currentWeek', 'الأسبوع الحالي');
    if (weekOffset > 0) return `${t('teacherSchedule.nextWeek', 'الأسبوع القادم')} (+${weekOffset})`;
    if (weekOffset < 0) return `${t('teacherSchedule.prevWeek', 'الأسبوع السابق')} (${weekOffset})`;
    return weekInfo?.weekLabel || t('teacherSchedule.allWeek', 'الجدول الأسبوعي');
  }, [weekOffset, selectedDate, weekInfo, t]);

  const activeDay = weekDays[activeDayIndex] || weekDays[0] || null;
  const activeDaySessions = activeDay?.sessions || [];

  return (
    <div className="space-y-6 max-w-7xl mx-auto pb-12 font-sans" dir={isRtl ? 'rtl' : 'ltr'}>
      <TeacherScheduleHeader
        currentTimeStr={currentTimeStr}
        currentDateStr={currentDateStr}
        isFetching={isFetching}
        onRefetch={refetch}
      />

      <TeacherScheduleWeekNavigator
        weekOffset={weekOffset}
        onPrevWeek={() => setWeekOffset((prev) => prev - 1)}
        onNextWeek={() => setWeekOffset((prev) => prev + 1)}
        onResetWeek={() => {
          setWeekOffset(0);
          setSelectedDate('');
        }}
        weekTitle={weekTitle}
        weekRangeLabel={weekRangeLabel}
        totalWeekSessions={totalWeekSessions}
        selectedDate={selectedDate}
        onDateChange={(val) => {
          setSelectedDate(val);
          setWeekOffset(0);
        }}
      />

      {isLoading ? (
        <div className="space-y-4">
          <div className="flex gap-2.5 overflow-x-auto pb-2">
            {[1, 2, 3, 4, 5, 6, 7].map((i) => (
              <div key={i} className="w-24 h-24 rounded-3xl bg-slate-200/60 dark:bg-slate-800/60 animate-pulse shrink-0" />
            ))}
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {[1, 2, 3].map((i) => (
              <div key={i} className="h-56 rounded-3xl bg-slate-200/60 dark:bg-slate-800/60 animate-pulse" />
            ))}
          </div>
        </div>
      ) : weekDays.length === 0 ? (
        <TeacherScheduleEmptyState message={t('teacherSchedule.noSessionsWeek', 'لا توجد حصص مجدولة لهذا الأسبوع')} />
      ) : (
        <>
          <TeacherScheduleDaysTabs
            weekDays={weekDays}
            activeDayIndex={activeDayIndex}
            onSelectDay={setSelectedDayIndex}
          />

          {activeDaySessions.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {activeDaySessions.map((session, idx) => (
                <TeacherScheduleSessionCard
                  key={session.id || idx}
                  session={session}
                  index={idx}
                />
              ))}
            </div>
          ) : (
            <TeacherScheduleEmptyState message={t('teacherSchedule.noSessionsDay', 'لا توجد حصص مجدولة لهذا اليوم')} />
          )}
        </>
      )}
    </div>
  );
}
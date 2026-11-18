import { useMemo } from 'react';
import { useTranslation } from 'react-i18next';
import { useQuery } from '@tanstack/react-query';
import { useAuth } from '@/shared/context/useAuth.jsx';
import { dashboardApi } from '@/shared/services/api/dashboardApi.js';
import TeacherDashboardHeader from './components/TeacherDashboardHeader.jsx';
import TeacherStatsGrid from './components/TeacherStatsGrid.jsx';
import TeacherNextSessionCard from './components/TeacherNextSessionCard.jsx';
import TeacherUpcomingSessionsList from './components/TeacherUpcomingSessionsList.jsx';
import TeacherGroupsOverviewTable from './components/TeacherGroupsOverviewTable.jsx';
import TeacherQuickActions from './components/TeacherQuickActions.jsx';

function getIsoOffsetMinutes(value, parsedDate) {
  if (typeof value === 'string') {
    if (/Z$/i.test(value)) return 0;
    const match = value.match(/([+-])(\d{2}):?(\d{2})$/);
    if (match) {
      const sign = match[1] === '-' ? -1 : 1;
      return sign * (Number(match[2]) * 60 + Number(match[3]));
    }
  }
  return -parsedDate.getTimezoneOffset();
}

function getZonedDateParts(value) {
  if (!value) return null;
  const parsedDate = value instanceof Date ? value : new Date(value);
  if (Number.isNaN(parsedDate.getTime())) return null;
  const offsetMinutes = getIsoOffsetMinutes(value, parsedDate);
  const wallDate = new Date(parsedDate.getTime() + offsetMinutes * 60 * 1000);
  const year = wallDate.getUTCFullYear();
  const month = String(wallDate.getUTCMonth() + 1).padStart(2, '0');
  const day = String(wallDate.getUTCDate()).padStart(2, '0');
  return {
    dateKey: year + '-' + month + '-' + day,
    hours: String(wallDate.getUTCHours()).padStart(2, '0'),
    minutes: String(wallDate.getUTCMinutes()).padStart(2, '0'),
    offsetMinutes,
  };
}

function getDateKeyAtOffset(timestamp, offsetMinutes) {
  const shiftedDate = new Date(timestamp + offsetMinutes * 60 * 1000);
  return shiftedDate.toISOString().slice(0, 10);
}

function getDateOrdinal(dateKey) {
  const [year, month, day] = dateKey.split('-').map(Number);
  return Date.UTC(year, month - 1, day) / (24 * 60 * 60 * 1000);
}

function getCalendarDayDifference(value) {
  const parts = getZonedDateParts(value);
  if (!parts) return null;
  const todayKey = getDateKeyAtOffset(Date.now(), parts.offsetMinutes);
  return getDateOrdinal(parts.dateKey) - getDateOrdinal(todayKey);
}

function formatClockTime(value) {
  const parts = getZonedDateParts(value);
  return parts ? parts.hours + ':' + parts.minutes : '';
}

function calculateCountdown(startTime, isRtl, t) {
  if (!startTime) return { countdown: '0:00', countdownUnit: '' };
  const target = new Date(startTime).getTime();
  if (isNaN(target)) return { countdown: '0:00', countdownUnit: '' };
  const now = Date.now();
  const diffMs = target - now;
  if (diffMs <= 0) {
    return { countdown: isRtl ? 'الآن' : 'Now', countdownUnit: '' };
  }
  const diffMinutes = Math.floor(diffMs / (1000 * 60));
  const diffHours = Math.floor(diffMinutes / 60);
  const diffDays = Math.floor(diffHours / 24);
  if (diffDays > 0) {
    return {
      countdown: String(diffDays),
      countdownUnit: isRtl
        ? (diffDays === 1 ? 'يوم' : diffDays === 2 ? 'يومان' : diffDays <= 10 ? 'أيام' : 'يوم')
        : (diffDays === 1 ? 'day' : 'days'),
    };
  }
  if (diffHours > 0) {
    const remMinutes = diffMinutes % 60;
    return {
      countdown: diffHours + ':' + String(remMinutes).padStart(2, '0'),
      countdownUnit: t ? t('teacherDashboard.hour', isRtl ? 'ساعة' : 'hour') : (isRtl ? 'ساعة' : 'hour'),
    };
  }
  return {
    countdown: String(diffMinutes),
    countdownUnit: isRtl ? 'دقيقة' : 'min',
  };
}

function formatSessionCard(s, idx, isRtl, t) {
  if (!s) return null;
  const id = s.id || s._id || ('session-' + idx);
  let title = '';
  if (typeof s.title === 'object' && s.title !== null) {
    title = isRtl ? (s.title.ar || s.title.en) : (s.title.en || s.title.ar);
  } else if (s.title) {
    title = String(s.title);
  }
  let group = '';
  if (typeof s.group === 'object' && s.group !== null) {
    group = isRtl
      ? (s.group.name?.ar || s.group.name?.en || s.group.name)
      : (s.group.name?.en || s.group.name?.ar || s.group.name);
  } else if (s.group) {
    group = String(s.group);
  }

  const dateVal = s.startTime || s.scheduledAt || s.startDate || s.date;
  const dayDifference = getCalendarDayDifference(dateVal);
  const startClock = formatClockTime(dateVal);
  const endClock = formatClockTime(s.endTime);
  const timeRange = s.timeRange || (startClock
    ? startClock + (endClock ? ' - ' + endClock : '')
    : '');
  let dayLabel = s.day || '';
  if (dayDifference === 0) {
    dayLabel = t('teacherDashboard.today', isRtl ? 'اليوم' : 'Today');
  } else if (dayDifference === 1) {
    dayLabel = t('teacherDashboard.tomorrow', isRtl ? 'غداً' : 'Tomorrow');
  }
  let timeStr = timeRange
    ? (dayLabel ? dayLabel + ' ' : '') + timeRange
    : '';
  if (!timeStr) {
    if (s.day && (s.time || s.startTime)) {
      timeStr = s.day + ' ' + (s.time || s.startTime);
    } else if (s.date && s.time) {
      timeStr = s.date + ' ' + s.time;
    } else if (s.date) {
      timeStr = String(s.date);
    }
  }

  let relativeBadge = '';
  let badgeVariant = 'amber';
  if (dateVal) {
    const target = new Date(dateVal).getTime();
    if (!Number.isNaN(target)) {
      const diffMs = target - Date.now();
      const diffMinutes = Math.ceil(diffMs / (1000 * 60));
      const diffHours = Math.floor(diffMs / (1000 * 60 * 60));
      if (diffMs > 0) {
        if (diffMinutes < 60) {
          relativeBadge = isRtl ? 'بعد ' + diffMinutes + ' دقيقة' : 'In ' + diffMinutes + 'm';
          badgeVariant = 'amber';
        } else if (diffHours < 2) {
          relativeBadge = isRtl ? 'بعد ساعة' : 'In 1 hour';
          badgeVariant = 'amber';
        } else if (diffHours < 3) {
          relativeBadge = isRtl ? 'بعد ساعتين' : 'In 2 hours';
          badgeVariant = 'amber';
        } else if (diffHours <= 10) {
          relativeBadge = isRtl ? 'بعد ' + diffHours + ' ساعات' : 'In ' + diffHours + ' hours';
          badgeVariant = 'amber';
        } else if (dayDifference === 0) {
          relativeBadge = t('teacherDashboard.today', isRtl ? 'اليوم' : 'Today');
          badgeVariant = 'amber';
        } else if (dayDifference === 1) {
          relativeBadge = t('teacherDashboard.tomorrow', isRtl ? 'غداً' : 'Tomorrow');
          badgeVariant = 'blue';
        } else if (dayDifference > 1 && dayDifference <= 7) {
          relativeBadge = dayDifference === 2
            ? t('teacherDashboard.inTwoDays', isRtl ? 'بعد يومين' : 'In 2 days')
            : t('teacherDashboard.afterDays', {
                count: dayDifference,
                defaultValue: isRtl ? 'بعد ' + dayDifference + ' أيام' : 'In ' + dayDifference + ' days',
              });
          badgeVariant = 'blue';
        }
      } else if (diffMs >= -60 * 60 * 1000) {
        relativeBadge = isRtl ? 'جارية الآن' : 'Live now';
        badgeVariant = 'blue';
      }
    }
  }
  return {
    id,
    title: title || (s.sessionNumber ? (isRtl ? 'الحصة رقم ' + s.sessionNumber : 'Session #' + s.sessionNumber) : group || ''),
    group,
    date: s.date,
    day: s.day,
    status: s.status,
    studentsCount: s.studentsCount ?? 0,
    timeStr,
    relativeBadge,
    badgeVariant,
    joinUrl: s.id ? '/dashboard/teacher/live?session=' + s.id : '/dashboard/teacher/live',
  };
}

function getGroupTypeLabel(group, t, isRtl = true) {
  const raw = String(group?.type || '').toLowerCase();
  const isPriv = group?.isPrivate === true ||
    raw === 'private' ||
    raw.includes('خاص') ||
    raw === 'individual' ||
    raw.includes('فردي') ||
    group?.maxStudents === 1;
  if (isPriv) {
    return t ? t('teacherDashboard.private', isRtl ? 'خاصة' : 'Private') : (isRtl ? 'خاصة' : 'Private');
  }
  return t ? t('teacherDashboard.public', isRtl ? 'عامة' : 'Public') : (isRtl ? 'عامة' : 'Public');
}

const GROUP_STATUS_KEYS = {
  active: 'active', 'نشطة': 'active', 'نشط': 'active',
  pending: 'pending', 'قيد الانتظار': 'pending',
  stopped: 'stopped', 'متوقفة': 'stopped', 'متوقف': 'stopped',
  completed: 'completed', 'مكتملة': 'completed', 'مكتمل': 'completed',
};

function getGroupStatusKey(status) {
  const key = String(status || '').trim().toLowerCase();
  return GROUP_STATUS_KEYS[key] || 'default';
}

function getGroupLevelLabel(group, isRtl = true) {
  const levelObj = group?.studentLevel || group?.level || group?.curriculum?.studentLevel || group?.stage;
  if (!levelObj) return '-';
  if (typeof levelObj === 'string') {
    const norm = levelObj.toLowerCase().trim();
    if (norm === 'advanced' || norm === 'متقدم') return isRtl ? 'متقدم' : 'Advanced';
    if (norm === 'middle' || norm === 'intermediate' || norm === 'متوسط') return isRtl ? 'متوسط' : 'Middle';
    if (norm === 'beginner' || norm === 'مبتدئ') return isRtl ? 'مبتدئ' : 'Beginner';
    return levelObj;
  }
  if (typeof levelObj === 'object' && levelObj !== null) {
    if (levelObj.name) {
      if (typeof levelObj.name === 'object' && levelObj.name !== null) {
        return isRtl ? (levelObj.name.ar || levelObj.name.en || '-') : (levelObj.name.en || levelObj.name.ar || '-');
      }
      return levelObj.name;
    }
    if (levelObj.ar || levelObj.en) {
      return isRtl ? (levelObj.ar || levelObj.en) : (levelObj.en || levelObj.ar);
    }
  }
  return '-';
}

export default function TeacherDashboard() {
  const { user } = useAuth();
  const { t, i18n } = useTranslation();
  const isRtl = i18n?.language?.startsWith('ar') ?? true;
  const teacherName = useMemo(() => {
    const fallback = t('teacher.teacherFallback', isRtl ? 'معلم' : 'Teacher');
    if (!user) return fallback;
    if (typeof user.name === 'object' && user.name !== null) {
      return (isRtl ? user.name.ar || user.name.en : user.name.en || user.name.ar) || fallback;
    }
    return user.name || fallback;
  }, [user, isRtl, t]);
  const { data: statsRes } = useQuery({
    queryKey: ['teacher-dashboard-statistics'],
    queryFn: () => dashboardApi.fetchTeacherStatistics(),
    staleTime: 60 * 1000,
  });
  const apiData = useMemo(() => statsRes?.data?.data ?? statsRes?.data ?? {}, [statsRes]);
  const { data: nextSessionRes } = useQuery({
    queryKey: ['teacher-dashboard-next-session'],
    queryFn: () => dashboardApi.fetchNextSession(),
    enabled: !apiData.nextSession,
    staleTime: 60 * 1000,
  });
  const stats = apiData.statistics || {};
  const currency = isRtl ? 'دولار' : 'USD';
  const totalStudents = stats.totalStudents ?? 0;
  const totalGroups = stats.totalGroups ?? 0;
  const totalSessions = stats.totalSessions ?? 0;
  const totalTeachingHours = stats.totalTeachingHours ?? 0;
  const totalEarnings = stats.totalEarnings !== undefined && stats.totalEarnings !== null
    ? `${Number(stats.totalEarnings).toLocaleString('en-US')} ${currency}`
    : `0 ${currency}`;
  const dueEarnings = stats.dueEarnings !== undefined && stats.dueEarnings !== null
    ? `${Number(stats.dueEarnings).toLocaleString('en-US')} ${currency}`
    : `0 ${currency}`;
  const upcomingSessions = useMemo(() => {
    const rawList = Array.isArray(apiData.upcomingSessions) ? apiData.upcomingSessions : [];
    return rawList.map((s, idx) => formatSessionCard(s, idx, isRtl, t)).filter(Boolean);
  }, [apiData.upcomingSessions, isRtl, t]);
  const nextSession = useMemo(() => {
    const rawNext = apiData.nextSession || nextSessionRes?.session;
    if (!rawNext || (!rawNext.id && !rawNext.title && !rawNext.group)) return null;
    let title = '';
    if (typeof rawNext.title === 'object' && rawNext.title !== null) {
      title = isRtl
        ? (rawNext.title.ar || rawNext.title.en || rawNext.title.name || '')
        : (rawNext.title.en || rawNext.title.ar || rawNext.title.name || '');
    } else if (rawNext.title) {
      title = String(rawNext.title);
    }
    let group = '';
    if (typeof rawNext.group === 'object' && rawNext.group !== null) {
      group = isRtl
        ? (rawNext.group.name?.ar || rawNext.group.name?.en || rawNext.group.name || '')
        : (rawNext.group.name?.en || rawNext.group.name?.ar || rawNext.group.name || '');
    } else if (rawNext.group) {
      group = String(rawNext.group);
    }
    const startTimeVal = rawNext.startTime || rawNext.scheduledAt || rawNext.startDate || rawNext.date;
    const { countdown, countdownUnit } = calculateCountdown(startTimeVal, isRtl, t);
    const dayDifference = getCalendarDayDifference(startTimeVal);
    const startClock = formatClockTime(startTimeVal);
    const endClock = formatClockTime(rawNext.endTime);
    const timeRange = rawNext.timeRange || (startClock
      ? startClock + (endClock ? ' - ' + endClock : '')
      : '');
    let dayLabel = rawNext.day || '';
    if (dayDifference === 0) {
      dayLabel = t('teacherDashboard.today', isRtl ? 'اليوم' : 'Today');
    } else if (dayDifference === 1) {
      dayLabel = t('teacherDashboard.tomorrow', isRtl ? 'غداً' : 'Tomorrow');
    }
    const timeStr = timeRange
      ? (dayLabel ? dayLabel + ' ' : '') + '(' + timeRange + ')'
      : '';
    return {
      ...rawNext,
      id: rawNext.id || rawNext._id,
      title: title || (rawNext.sessionNumber ? (isRtl ? 'الحصة رقم ' + rawNext.sessionNumber : 'Session #' + rawNext.sessionNumber) : ''),
      group,
      timeStr,
      countdown: rawNext.countdown || countdown,
      countdownUnit: rawNext.countdownUnit || countdownUnit,
      joinUrl: rawNext.id ? '/dashboard/teacher/live?session=' + rawNext.id : '/dashboard/teacher/live',
    };
  }, [apiData.nextSession, nextSessionRes?.session, isRtl, t]);
  const groupsOverviewTable = useMemo(() => {
    const list = Array.isArray(apiData.groupsOverview)
      ? apiData.groupsOverview
      : (Array.isArray(apiData.groups) ? apiData.groups : []);
    return list.map((g, idx) => {
      const studentsCount = typeof g.students === 'number'
        ? g.students
        : (Array.isArray(g.students)
          ? g.students.length
          : Number(g.currentStudentsCount ?? g.studentsCount ?? 0));
      const groupName =
        typeof g.name === 'object' && g.name !== null
          ? (isRtl ? g.name.ar || g.name.en : g.name.en || g.name.ar)
          : (g.name || `${t('teacherDashboard.groupName', 'مجموعة')} ${idx + 1}`);
      const statusText = typeof g.status === 'object' && g.status !== null
        ? (isRtl ? g.status.ar || g.status.en : g.status.en || g.status.ar)
        : (g.statusText || g.status || '');
      return {
        id: g.id || g._id || `g-${idx}`,
        name: groupName,
        image: g.image || null,
        country: g.country || null,
        curriculum: typeof g.curriculum === 'object' && g.curriculum !== null
          ? (isRtl ? g.curriculum.name?.ar || g.curriculum.name : g.curriculum.name?.en || g.curriculum.name)
          : (g.curriculum || null),
        language: g.language || null,
        type: getGroupTypeLabel(g, t, isRtl),
        level: getGroupLevelLabel(g, isRtl, t),
        studentsCount,
        maxStudents: g.maxStudents || 0,
        status: statusText,
        statusKey: getGroupStatusKey(g.rawStatus || g.status),
      };
    });
  }, [apiData.groupsOverview, apiData.groups, isRtl, t]);
  return (
    <div className="space-y-6 max-w-7xl mx-auto pb-12 font-sans" dir={isRtl ? 'rtl' : 'ltr'}>
      <TeacherDashboardHeader teacherName={teacherName} />
      <TeacherStatsGrid
        totalStudents={totalStudents}
        totalGroups={totalGroups}
        totalSessions={totalSessions}
        totalTeachingHours={totalTeachingHours}
        totalEarnings={totalEarnings}
        dueEarnings={dueEarnings}
      />
      <section className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
        <div className="lg:col-span-8">
          <TeacherUpcomingSessionsList upcomingSessions={upcomingSessions} />
        </div>
        <div className="lg:col-span-4 space-y-4">
          <TeacherQuickActions />
          <TeacherNextSessionCard nextSession={nextSession} />
        </div>
      </section>
      <TeacherGroupsOverviewTable groups={groupsOverviewTable} />
    </div>
  );
}


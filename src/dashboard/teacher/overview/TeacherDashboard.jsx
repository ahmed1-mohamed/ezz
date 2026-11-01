import { useMemo } from 'react';
import { useTranslation } from 'react-i18next';
import { useQuery } from '@tanstack/react-query';
import { useAuth } from '@/shared/context/useAuth.jsx';
import { dashboardApi } from '@/shared/services/api/dashboardApi.js';
import { teacherGroupsApi } from '@/shared/services/api/teacherGroupsApi.js';
import { teacherSessionsApi } from '@/shared/services/api/teacherSessionsApi.js';
import TeacherDashboardHeader from './components/TeacherDashboardHeader.jsx';
import TeacherPendingEvaluationBanner from './components/TeacherPendingEvaluationBanner.jsx';
import TeacherStatsGrid from './components/TeacherStatsGrid.jsx';
import TeacherNextSessionCard from './components/TeacherNextSessionCard.jsx';
import TeacherUpcomingSessionsList from './components/TeacherUpcomingSessionsList.jsx';
import TeacherGroupsOverviewTable from './components/TeacherGroupsOverviewTable.jsx';
import TeacherQuickActions from './components/TeacherQuickActions.jsx';

function calculateCountdown(startTime, isRtl, t) {
  if (!startTime) return { countdown: '0:00', countdownUnit: '' };
  const target = new Date(startTime).getTime();
  if (isNaN(target)) return { countdown: '0:00', countdownUnit: '' };

  const now = Date.now();
  const diffMs = target - now;

  if (diffMs <= 0) {
    return {
      countdown: isRtl ? 'الآن' : 'Now',
      countdownUnit: '',
    };
  }

  const diffMinutes = Math.floor(diffMs / (1000 * 60));
  const diffHours = Math.floor(diffMinutes / 60);
  const diffDays = Math.floor(diffHours / 24);

  if (diffDays > 0) {
    return {
      countdown: `${diffDays}`,
      countdownUnit: isRtl
        ? (diffDays === 1 ? 'يوم' : diffDays === 2 ? 'يومان' : diffDays <= 10 ? 'أيام' : 'يوم')
        : (diffDays === 1 ? 'day' : 'days'),
    };
  }

  if (diffHours > 0) {
    const remMinutes = diffMinutes % 60;
    return {
      countdown: `${diffHours}:${String(remMinutes).padStart(2, '0')}`,
      countdownUnit: t ? t('teacherDashboard.hour', isRtl ? 'ساعة' : 'hour') : (isRtl ? 'ساعة' : 'hour'),
    };
  }

  return {
    countdown: `${diffMinutes}`,
    countdownUnit: isRtl ? 'دقيقة' : 'min',
  };
}

function formatSessionCard(s, idx, isRtl, t) {
  if (!s) return null;
  const id = s.id || s._id || `session-${idx}`;
  let title = '';
  if (typeof s.group === 'object' && s.group !== null) {
    title = isRtl
      ? (s.group.name?.ar || s.group.name?.en || s.group.name)
      : (s.group.name?.en || s.group.name?.ar || s.group.name);
  } else if (s.group) {
    title = String(s.group);
  } else if (s.title) {
    title = typeof s.title === 'object' && s.title !== null
      ? (isRtl ? s.title.ar || s.title.en : s.title.en || s.title.ar)
      : String(s.title);
  }

   let timeStr = '';
  const dateVal = s.startTime || s.scheduledAt || s.startDate;
  if (dateVal) {
    const d = new Date(dateVal);
    if (!isNaN(d.getTime())) {
      const hours = String(d.getHours()).padStart(2, '0');
      const minutes = String(d.getMinutes()).padStart(2, '0');
      const isToday = new Date().toDateString() === d.toDateString();
      const tomorrow = new Date();
      tomorrow.setDate(new Date().getDate() + 1);
      const isTomorrow = tomorrow.toDateString() === d.toDateString();
      const dayLabel = isToday
        ? (isRtl ? (t ? t('teacherDashboard.today', 'اليوم') : 'اليوم') : 'Today')
        : (isTomorrow ? (isRtl ? (t ? t('teacherDashboard.tomorrow', 'غداً') : 'غداً') : 'Tomorrow') : (s.day || ''));
      timeStr = `${dayLabel ? `${dayLabel} ` : ''}${hours}:${minutes}`;
    }
  }

  if (!timeStr) {
    if (s.day && (s.time || s.startTime)) {
      timeStr = `${s.day} ${s.time || s.startTime}`;
    } else if (s.date && s.time) {
      timeStr = `${s.date} ${s.time}`;
    } else if (s.date) {
      timeStr = String(s.date);
    }
  }

  let studentsCount = 0;
  if (Array.isArray(s.students) && s.students.length > 0) {
    studentsCount = s.students.length;
  } else if (Array.isArray(s.attendance) && s.attendance.length > 0) {
    studentsCount = s.attendance.length;
  } else if (typeof s.studentsCount === 'number' && s.studentsCount > 0) {
    studentsCount = s.studentsCount;
  } else if (s.group?.studentsCount) {
    studentsCount = s.group.studentsCount;
  }

  let relativeBadge = '';
  let badgeVariant = 'amber';
  if (dateVal) {
    const d = new Date(dateVal);
    if (!isNaN(d.getTime())) {
      const now = new Date();
      const diffMs = d.getTime() - now.getTime();
      const diffMinutes = Math.round(diffMs / (1000 * 60));
      const diffHours = Math.round(diffMs / (1000 * 60 * 60));
      const isToday = now.toDateString() === d.toDateString();
      const tomorrow = new Date();
      tomorrow.setDate(now.getDate() + 1);
      const isTomorrow = tomorrow.toDateString() === d.toDateString();

      if (diffMs > 0) {
        if (diffMinutes < 60) {
          relativeBadge = isRtl ? `بعد ${diffMinutes} دقيقة` : `In ${diffMinutes}m`;
          badgeVariant = 'amber';
        } else if (diffHours === 1) {
          relativeBadge = isRtl ? 'بعد ساعة' : 'In 1 hour';
          badgeVariant = 'amber';
        } else if (diffHours === 2) {
          relativeBadge = isRtl ? 'بعد ساعتين' : 'In 2 hours';
          badgeVariant = 'amber';
        } else if (diffHours > 2 && diffHours <= 10) {
          relativeBadge = isRtl ? `بعد ${diffHours} ساعات` : `In ${diffHours} hours`;
          badgeVariant = 'amber';
        } else if (isToday) {
          relativeBadge = isRtl ? (t ? t('teacherDashboard.today', 'اليوم') : 'اليوم') : 'Today';
          badgeVariant = 'amber';
        } else if (isTomorrow) {
          relativeBadge = isRtl ? (t ? t('teacherDashboard.tomorrow', 'غداً') : 'غداً') : 'Tomorrow';
          badgeVariant = 'blue';
        } else {
          const diffDays = Math.ceil(diffMs / (1000 * 60 * 60 * 24));
          if (diffDays <= 7) {
            relativeBadge = isRtl ? `بعد ${diffDays} أيام` : `In ${diffDays} days`;
            badgeVariant = 'blue';
          }
        }
      } else if (diffMs >= -60 * 60 * 1000) {
        relativeBadge = isRtl ? 'جارية الآن' : 'Live now';
        badgeVariant = 'blue';
      }
    }
  }

  return {
    id,
    title: title || (s.sessionNumber ? `${t ? t('teacherDashboard.sessionNumberLabel', 'الحصة رقم {{number}}', { number: s.sessionNumber }) : `الحصة #${s.sessionNumber}`}` : ''),
    timeStr,
    studentsCount,
    relativeBadge,
    badgeVariant,
    joinUrl: s.zoomJoinUrl || s.joinUrl || (s.id ? `/dashboard/teacher/live?session=${s.id}` : '/dashboard/teacher/live'),
  };
}

function getGroupTypeLabel(group, t) {
  const raw = String(group?.type || '').toLowerCase();
  const isPriv = group?.isPrivate === true ||
    raw === 'private' ||
    raw.includes('خاص') ||
    raw === 'individual' ||
    raw.includes('فردي') ||
    group?.maxStudents === 1;
  if (isPriv) {
    return t ? t('teacherDashboard.private', 'خاصة') : 'خاصة';
  }
  return t ? t('teacherDashboard.public', 'عامة') : 'عامة';
}

function getGroupLevelLabel(group, isRtl = true, t) {
  const levelObj = group?.studentLevel || group?.level || group?.curriculum?.studentLevel || group?.stage;
  if (!levelObj) return '-';
  if (typeof levelObj === 'string') {
    if (/^[a-fA-F0-9]{24}$/.test(levelObj)) {
      if (group?.curriculum?.studentLevel?.name) {
        const cLevel = group.curriculum.studentLevel.name;
        return typeof cLevel === 'object' ? (isRtl ? cLevel.ar || cLevel.en : cLevel.en || cLevel.ar) : cLevel;
      }
      return '-';
    }
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
    if (!user) return isRtl ? 'أ. محمد العتيبي' : 'Mr. Mohamed Al-Otaibi';
    if (typeof user.name === 'object' && user.name !== null) {
      return (isRtl ? user.name.ar || user.name.en : user.name.en || user.name.ar) || (isRtl ? 'أ. محمد العتيبي' : 'Mr. Mohamed Al-Otaibi');
    }
    return user.name || (isRtl ? 'أ. محمد العتيبي' : 'Mr. Mohamed Al-Otaibi');
  }, [user, isRtl]);

  const { data: statsRes } = useQuery({
    queryKey: ['teacher-dashboard-statistics'],
    queryFn: () => dashboardApi.fetchTeacherStatistics(),
    staleTime: 0,
    refetchOnMount: 'always',
  });

  const { data: nextSessionRes } = useQuery({
    queryKey: ['teacher-dashboard-next-session'],
    queryFn: () => dashboardApi.fetchNextSession(),
    staleTime: 0,
    refetchOnMount: 'always',
  });

  const { data: scheduledSessionsRes } = useQuery({
    queryKey: ['teacher-dashboard-upcoming-sessions'],
    queryFn: () => teacherSessionsApi.fetchSessionsByStatus('scheduled', { limit: 5 }),
    staleTime: 0,
    refetchOnMount: 'always',
  });

  const { data: pendingRes } = useQuery({
    queryKey: ['teacher-pending-evaluation'],
    queryFn: () => dashboardApi.fetchPendingEvaluation(),
    staleTime: 0,
    refetchOnMount: 'always',
  });

  const { data: groupsRes } = useQuery({
    queryKey: ['teacher-dashboard-groups-overview'],
    queryFn: () => teacherGroupsApi.fetchGroups({ limit: 5 }),
    staleTime: 0,
    refetchOnMount: 'always',
  });

  const pendingSession = pendingRes?.session;
  const pendingStudentIds = useMemo(() => pendingRes?.pendingStudentIds || [], [pendingRes?.pendingStudentIds]);
  const pendingStudents = useMemo(() => {
    if (!pendingSession || !Array.isArray(pendingSession.attendance)) return [];
    if (pendingStudentIds.length === 0) {
      return pendingSession.attendance.map((att) => att.student).filter(Boolean);
    }
    return pendingSession.attendance
      .filter((att) => att?.student?.student_id && pendingStudentIds.includes(att.student.student_id))
      .map((att) => att.student);
  }, [pendingSession, pendingStudentIds]);

  const apiData = useMemo(() => statsRes?.data?.data ?? statsRes?.data ?? {}, [statsRes]);
  const stats = apiData.statistics || {};

  const currency = t('teacherDashboard.currency', 'ر.س');
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
    const rawList = Array.isArray(apiData.upcomingSessions) && apiData.upcomingSessions.length > 0
      ? apiData.upcomingSessions
      : (Array.isArray(scheduledSessionsRes?.data) && scheduledSessionsRes.data.length > 0
        ? scheduledSessionsRes.data
        : (Array.isArray(scheduledSessionsRes) && scheduledSessionsRes.length > 0 ? scheduledSessionsRes : null));

    if (!rawList || rawList.length === 0) {
      return [];
    }

    return rawList.map((s, idx) => formatSessionCard(s, idx, isRtl, t)).filter(Boolean);
  }, [apiData.upcomingSessions, scheduledSessionsRes, isRtl, t]);

   const nextSession = useMemo(() => {
    const rawNext = nextSessionRes?.session || apiData.nextSession;
    if (!rawNext || (!rawNext.id && !rawNext.title)) {
      return null;
    }

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
    let timeStr = '';
    if (startTimeVal) {
      try {
        const d = new Date(startTimeVal);
        if (!isNaN(d.getTime())) {
          timeStr = d.toLocaleTimeString(isRtl ? 'ar-EG' : 'en-US', {
            hour: '2-digit',
            minute: '2-digit',
            hour12: true,
          });
          if (rawNext.endTime) {
            const endD = new Date(rawNext.endTime);
            if (!isNaN(endD.getTime())) {
              timeStr += ` - ${endD.toLocaleTimeString(isRtl ? 'ar-EG' : 'en-US', { hour: '2-digit', minute: '2-digit', hour12: true })}`;
            }
          }
        }
      } catch {
        timeStr = '';
      }
    }

    return {
      ...rawNext,
      id: rawNext.id || rawNext._id,
      title: title || (rawNext.sessionNumber ? (isRtl ? `الحصة رقم ${rawNext.sessionNumber}` : `Session #${rawNext.sessionNumber}`) : ''),
      group,
      timeStr,
      countdown: rawNext.countdown || countdown,
      countdownUnit: rawNext.countdownUnit || countdownUnit,
      joinUrl: rawNext.zoomJoinUrl || rawNext.joinUrl || (rawNext.id ? `/dashboard/teacher/live?session=${rawNext.id}` : '/dashboard/teacher/live'),
    };
  }, [nextSessionRes?.session, apiData.nextSession, isRtl, t]);

   const groupsOverviewTable = useMemo(() => {
    const raw = groupsRes?.data;
    let list = [];
    if (Array.isArray(groupsRes)) {
      list = groupsRes;
    } else if (Array.isArray(raw)) {
      list = raw;
    } else if (Array.isArray(raw?.data)) {
      list = raw.data;
    } else if (Array.isArray(raw?.groups)) {
      list = raw.groups;
    }

    if (!list || list.length === 0) {
      return [];
    }

    return list.map((g, idx) => {
      const studentsCount = Array.isArray(g.students)
        ? g.students.length
        : (g.currentStudentsCount ?? 0);

      const groupName =
        typeof g.name === 'object' && g.name !== null
          ? (isRtl ? g.name.ar || g.name.en : g.name.en || g.name.ar)
          : (g.name || `${t('teacherDashboard.groupName', 'مجموعة')} ${idx + 1}`);

      const progress = g.progress ?? 0;
      let nextTime = g.nextSessionTime || '';
      if (!nextTime && Array.isArray(g.schedules) && g.schedules.length > 0) {
        nextTime = g.schedules.map((sc) => sc.day || sc.dayName || sc.time).filter(Boolean).join('، ');
      }

      return {
        id: g.id || g._id || `g-${idx}`,
        name: groupName,
        type: getGroupTypeLabel(g, t),
        level: getGroupLevelLabel(g, isRtl, t),
        studentsCount,
        maxStudents: g.maxStudents || 0,
        progress,
        nextSessionTime: nextTime,
      };
    });
  }, [groupsRes, isRtl, t]);

  return (
    <div className="space-y-6 max-w-7xl mx-auto pb-12 font-sans" dir={isRtl ? 'rtl' : 'ltr'}>
       <TeacherDashboardHeader teacherName={teacherName} />

       {pendingSession && (
        <TeacherPendingEvaluationBanner
          pendingSession={pendingSession}
          pendingStudents={pendingStudents}
        />
      )}

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
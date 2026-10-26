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

function formatSessionCard(s, idx, isRtl) {
  if (!s) return null;
  const id = s.id || s._id || `session-${idx}`;
  let title;
  if (typeof s.group === 'object' && s.group !== null) {
    title = isRtl
      ? (s.group.name?.ar || s.group.name?.en || s.group.name)
      : (s.group.name?.en || s.group.name?.ar || s.group.name);
  } else if (s.group) {
    title = String(s.group);
  } else if (s.title) {
    title = typeof s.title === 'object' ? (isRtl ? s.title.ar || s.title.en : s.title.en || s.title.ar) : s.title;
  } else {
    title = `جلسة ${idx + 1}`;
  }

  let timeStr;
  if (s.date && s.time) {
    timeStr = `${s.date} - ${s.time}`;
  } else if (s.day && (s.time || s.startTime)) {
    timeStr = `${s.day} - ${s.time || s.startTime}`;
  } else if (s.scheduledAt || s.startDate) {
    const d = new Date(s.scheduledAt || s.startDate);
    if (!isNaN(d.getTime())) {
      timeStr = new Intl.DateTimeFormat(isRtl ? 'ar-EG' : 'en-US', {
        month: 'short',
        day: 'numeric',
        hour: 'numeric',
        minute: '2-digit',
        hour12: true,
      }).format(d);
    } else {
      timeStr = String(s.scheduledAt || s.startDate);
    }
  } else {
    timeStr = s.time || s.day || s.date || '';
  }

  let studentsCount = 0;
  if (Array.isArray(s.students)) {
    studentsCount = s.students.length;
  } else if (Array.isArray(s.attendance)) {
    studentsCount = s.attendance.length;
  } else if (typeof s.studentsCount === 'number') {
    studentsCount = s.studentsCount;
  } else if (s.group?.studentsCount) {
    studentsCount = s.group.studentsCount;
  }

  return {
    id,
    title,
    timeStr,
    studentsCount,
  };
}

function getGroupTypeLabel(group, t) {
  const raw = (group?.type || '').toLowerCase();
  if (raw === 'private' || raw.includes('خاص') || raw === 'individual' || raw.includes('فردي')) {
    return t('teacherDashboard.private', 'خاص');
  }
  return t('teacherDashboard.public', 'عام');
}

function getGroupLevelLabel(group, isRtl = true) {
  const levelObj = group?.studentLevel || group?.level;
  if (!levelObj) return isRtl ? 'المستوى الأول' : 'Level 1';
  if (typeof levelObj === 'object' && levelObj !== null) {
    if (levelObj.name) {
      if (typeof levelObj.name === 'object' && levelObj.name !== null) {
        return isRtl ? (levelObj.name.ar || levelObj.name.en || 'المستوى الأول') : (levelObj.name.en || levelObj.name.ar || 'Level 1');
      }
      return levelObj.name;
    }
    return isRtl ? (levelObj.ar || levelObj.en || 'المستوى الأول') : (levelObj.en || levelObj.ar || 'Level 1');
  }
  return String(levelObj);
}

export default function TeacherDashboard() {
  const { user } = useAuth();
  const { t, i18n } = useTranslation();
  const isRtl = i18n?.language?.startsWith('ar') ?? true;

  const teacherName = useMemo(() => {
    if (!user) return t('teacherDashboard.teacherFallback', 'معلم');
    if (typeof user.name === 'object' && user.name !== null) {
      return (isRtl ? user.name.ar || user.name.en : user.name.en || user.name.ar) || t('teacherDashboard.teacherFallback', 'معلم');
    }
    return user.name || t('teacherDashboard.teacherFallback', 'معلم');
  }, [user, isRtl, t]);

  const { data: statsRes } = useQuery({
    queryKey: ['teacher-dashboard-statistics'],
    queryFn: () => dashboardApi.fetchTeacherStatistics(),
    staleTime: 3 * 60 * 1000,
  });

  const { data: nextSessionRes } = useQuery({
    queryKey: ['teacher-dashboard-next-session'],
    queryFn: () => dashboardApi.fetchNextSession(),
    staleTime: 2 * 60 * 1000,
  });

  const { data: scheduledSessionsRes } = useQuery({
    queryKey: ['teacher-dashboard-upcoming-sessions'],
    queryFn: () => teacherSessionsApi.fetchSessionsByStatus('scheduled', { limit: 5 }),
    staleTime: 2 * 60 * 1000,
  });

  const { data: pendingRes } = useQuery({
    queryKey: ['teacher-pending-evaluation'],
    queryFn: () => dashboardApi.fetchPendingEvaluation(),
    staleTime: 3 * 60 * 1000,
  });

  const { data: groupsRes } = useQuery({
    queryKey: ['teacher-dashboard-groups-overview'],
    queryFn: () => teacherGroupsApi.fetchGroups({ limit: 5 }),
    staleTime: 3 * 60 * 1000,
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

  const totalStudents = stats.totalStudents ?? 0;
  const totalGroups = stats.totalGroups ?? 0;
  const totalSessions = stats.totalSessions ?? 0;
  const totalTeachingHours = stats.totalTeachingHours ?? 0;
  const totalEarnings = stats.totalEarnings !== undefined && stats.totalEarnings !== null
    ? `$${Number(stats.totalEarnings).toLocaleString('en-US')}`
    : '$0';
  const dueEarnings = stats.dueEarnings !== undefined && stats.dueEarnings !== null
    ? `$${Number(stats.dueEarnings).toLocaleString('en-US')}`
    : '$0';

  const upcomingSessions = useMemo(() => {
    const rawList = Array.isArray(apiData.upcomingSessions) && apiData.upcomingSessions.length > 0
      ? apiData.upcomingSessions
      : (Array.isArray(scheduledSessionsRes?.data) ? scheduledSessionsRes.data : (Array.isArray(scheduledSessionsRes) ? scheduledSessionsRes : []));

    return rawList.map((s, idx) => formatSessionCard(s, idx, isRtl)).filter(Boolean);
  }, [apiData.upcomingSessions, scheduledSessionsRes, isRtl]);

  const nextSession = useMemo(() => {
    const rawNext = apiData.nextSession || nextSessionRes?.session;
    if (rawNext) {
      let title = typeof rawNext.title === 'object'
        ? (isRtl ? rawNext.title.ar || rawNext.title.en : rawNext.title.en || rawNext.title.ar)
        : (rawNext.title || '');
      
      let groupName = '';
      if (typeof rawNext.group === 'object' && rawNext.group !== null) {
        groupName = isRtl
          ? (rawNext.group.name?.ar || rawNext.group.name?.en || rawNext.group.name)
          : (rawNext.group.name?.en || rawNext.group.name?.ar || rawNext.group.name);
      } else if (rawNext.group) {
        groupName = String(rawNext.group);
      } else if (rawNext.groupName) {
        groupName = rawNext.groupName;
      }

      let timeStr = rawNext.timeStr || rawNext.time || '';
      if (!timeStr && rawNext.day) {
        timeStr = `${rawNext.day} - ${rawNext.time || rawNext.startTime || ''}`;
      } else if (!timeStr && (rawNext.scheduledAt || rawNext.startDate)) {
        const d = new Date(rawNext.scheduledAt || rawNext.startDate);
        if (!isNaN(d.getTime())) {
          timeStr = new Intl.DateTimeFormat(isRtl ? 'ar-EG' : 'en-US', {
            month: 'short',
            day: 'numeric',
            hour: 'numeric',
            minute: '2-digit',
            hour12: true,
          }).format(d);
        }
      }

      return {
        ...rawNext,
        title: title || groupName || t('teacherDashboard.teachingSession', 'جلسة تدريس'),
        groupName: groupName || title || t('teacherDashboard.studyGroup', 'مجموعة دراسية'),
        timeStr: timeStr || '',
      };
    }

    if (upcomingSessions.length > 0) {
      return {
        title: upcomingSessions[0].title,
        groupName: upcomingSessions[0].title,
        timeStr: upcomingSessions[0].timeStr,
      };
    }
    return null;
  }, [apiData.nextSession, nextSessionRes?.session, upcomingSessions, isRtl, t]);

  const groupsOverviewTable = useMemo(() => {
    const list = Array.isArray(groupsRes?.data) ? groupsRes.data : [];
    return list.map((g, idx) => {
      const studentsCount = Array.isArray(g.students)
        ? g.students.length
        : (g.currentStudentsCount ?? 0);

      const groupName =
        typeof g.name === 'object' && g.name !== null
          ? (isRtl ? g.name.ar || g.name.en : g.name.en || g.name.ar)
          : (g.name || `${t('teacherDashboard.groupName', 'مجموعة')} ${idx + 1}`);

      return {
        id: g.id || g._id || `g-${idx}`,
        name: groupName,
        type: getGroupTypeLabel(g, t),
        level: getGroupLevelLabel(g, isRtl),
        studentsCount,
        maxStudents: g.maxStudents || 0,
      };
    });
  }, [groupsRes, isRtl, t]);

  return (
    <div className="space-y-6 max-w-7xl mx-auto pb-12 font-sans" dir={isRtl ? 'rtl' : 'ltr'}>
      <TeacherDashboardHeader teacherName={teacherName} />

      <TeacherPendingEvaluationBanner
        pendingSession={pendingSession}
        pendingStudents={pendingStudents}
      />

      <TeacherStatsGrid
        totalStudents={totalStudents}
        totalGroups={totalGroups}
        totalSessions={totalSessions}
        totalTeachingHours={totalTeachingHours}
        totalEarnings={totalEarnings}
        dueEarnings={dueEarnings}
      />

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-stretch">
        <div className="lg:col-span-5 h-full">
          <TeacherNextSessionCard nextSession={nextSession} />
        </div>
        <div className="lg:col-span-7 h-full">
          <TeacherUpcomingSessionsList upcomingSessions={upcomingSessions} />
        </div>
      </div>

      <TeacherGroupsOverviewTable groups={groupsOverviewTable} />

      <TeacherQuickActions />
    </div>
  );
}
import { useState, useMemo, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { useQuery } from '@tanstack/react-query';
import { useAuth } from '@/shared/context/useAuth.jsx';
import { teacherGroupsApi } from '@/shared/services/api/teacherGroupsApi.js';
import TeacherGroupsHeader from './components/TeacherGroupsHeader.jsx';
import TeacherGroupsStatsGrid from './components/TeacherGroupsStatsGrid.jsx';
import TeacherGroupsFilterBar from './components/TeacherGroupsFilterBar.jsx';
import TeacherGroupCard from './components/TeacherGroupCard.jsx';
import TeacherGroupsEmptyState from './components/TeacherGroupsEmptyState.jsx';

function formatWeeklySchedule(weeklySchedule, isRtl = true) {
  if (!Array.isArray(weeklySchedule) || weeklySchedule.length === 0) {
    return isRtl ? 'المواعيد: لم تحدد' : 'Schedule: Not set';
  }
  const days = weeklySchedule.map((s) => s.day).filter(Boolean);
  const uniqueDays = [...new Set(days)];
  const firstTime = weeklySchedule[0]?.startTime || '';
  if (!firstTime) return uniqueDays.join('، ');
  let formattedTime = firstTime;
  const parts = firstTime.split(':');
  if (parts.length >= 2) {
    const hours = parseInt(parts[0], 10);
    const minutes = parts[1];
    if (!isNaN(hours)) {
      const period = isRtl ? (hours >= 12 ? 'م' : 'ص') : (hours >= 12 ? 'PM' : 'AM');
      const hours12 = hours % 12 || 12;
      formattedTime = `${hours12}:${minutes} ${period}`;
    }
  }
  return `${uniqueDays.join('، ')} - ${formattedTime}`;
}

function getGroupTypeLabel(rawType, isRtl = true, t) {
  const norm = String(rawType || '').toLowerCase().trim();
  const isPriv = norm === 'private' || norm.includes('خاص');
  if (isPriv) {
    return t ? t('teacherGroups.private', isRtl ? 'خاص' : 'Private') : (isRtl ? 'خاص' : 'Private');
  }
  return t ? t('teacherGroups.public', isRtl ? 'عام' : 'Public') : (isRtl ? 'عام' : 'Public');
}

function getGroupLevelLabel(level, isRtl = true) {
  if (!level) return '-';
  if (typeof level === 'string') {
    const norm = level.toLowerCase().trim();
    if (!norm) return '-';
    if (norm === 'advanced' || norm === 'متقدم') return isRtl ? 'متقدم' : 'Advanced';
    if (norm === 'middle' || norm === 'intermediate' || norm === 'متوسط') return isRtl ? 'متوسط' : 'Middle';
    if (norm === 'beginner' || norm === 'مبتدئ') return isRtl ? 'مبتدئ' : 'Beginner';
    return level;
  }
  return '-';
}

export default function TeacherGroups() {
  const { user } = useAuth();
  const { t, i18n } = useTranslation();
  const isRtl = i18n?.language?.startsWith('ar') ?? true;
  const [activeFilter, setActiveFilter] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');
  const [debouncedSearch, setDebouncedSearch] = useState('');
  const [currentTimeStr, setCurrentTimeStr] = useState('');
  const [currentDateStr, setCurrentDateStr] = useState('');
  const page = 1;
  const limit = 50;
  useEffect(() => {
    const updateDateTime = () => {
      const now = new Date();
      try {
        const timeFormatted = new Intl.DateTimeFormat('en-GB', {
          hour: '2-digit',
          minute: '2-digit',
          second: '2-digit',
          hour12: false,
        }).format(now);
        setCurrentTimeStr(timeFormatted);
      } catch {
        setCurrentTimeStr(now.toTimeString().slice(0, 8));
      }
      try {
        const dateFormatted = new Intl.DateTimeFormat(
          isRtl ? 'ar-EG-u-ca-gregory' : 'en-GB-u-ca-gregory',
          {
            weekday: 'long',
            day: 'numeric',
            month: 'long',
            year: 'numeric',
          }
        ).format(now);
        setCurrentDateStr(dateFormatted);
      } catch {
        setCurrentDateStr(now.toLocaleDateString(isRtl ? 'ar-EG' : 'en-GB'));
      }
    };
    updateDateTime();
    const interval = setInterval(updateDateTime, 1000);
    return () => clearInterval(interval);
  }, [isRtl]);
  useEffect(() => {
    const timer = setTimeout(() => {
      setDebouncedSearch(searchQuery);
    }, 300);
    return () => clearTimeout(timer);
  }, [searchQuery]);
  const { data: responseData, isLoading } = useQuery({
    queryKey: ['teacherGroups', page, limit],
    queryFn: () => teacherGroupsApi.fetchGroups({ page, limit }),
    staleTime: 60 * 1000,
  });
  const rawGroups = useMemo(() => {
    let list = [];
    if (Array.isArray(responseData?.data)) {
      list = responseData.data;
    } else if (Array.isArray(responseData?.data?.data)) {
      list = responseData.data.data;
    } else if (Array.isArray(responseData)) {
      list = responseData;
    }
    if (!Array.isArray(list)) return [];
    return list.map((g, idx) => {
      const groupName = typeof g.name === 'object' && g.name !== null
        ? (isRtl ? g.name.ar || g.name.en : g.name.en || g.name.ar)
        : (g.name || `${t('teacherDashboard.groupName', 'مجموعة')} ${idx + 1}`);
      const currName = typeof g.curriculum === 'object' && g.curriculum !== null
        ? (isRtl ? g.curriculum.name?.ar || g.curriculum.name?.en : g.curriculum.name?.en || g.curriculum.name?.ar)
        : (g.curriculum?.name || g.curriculum || '');
      const rawType = String(g.type || '').toLowerCase();
      const isPrivate = g.isPrivate === true || rawType === 'private' || rawType.includes('خاص') || g.maxStudents === 1;
      const rawStatus = String(g.status || '').toLowerCase();
      const isActive = rawStatus === 'active' || rawStatus.includes('نشط') || rawStatus === 'نشطة';
      const studentsCount = typeof g.currentStudentsCount === 'number'
        ? g.currentStudentsCount
        : (Array.isArray(g.students) ? g.students.length : 0);
      const scheduleText = formatWeeklySchedule(g.weeklySchedule || g.schedules, isRtl);
      return {
        id: g.id || g._id || `grp-${idx}`,
        name: groupName,
        curriculum: currName,
        country: g.country || '',
        language: g.language || '',
        status: g.status || 'نشطة',
        rawStatus,
        isActive,
        isPrivate,
        type: getGroupTypeLabel(g.type, isRtl, t),
        rawType,
        level: getGroupLevelLabel(g.level, isRtl),
        currentStudentsCount: studentsCount,
        maxStudents: g.maxStudents || 0,
        scheduleFormatted: scheduleText,
      };
    });
  }, [responseData, isRtl, t]);
  const stats = useMemo(() => {
    const totalGroups = responseData?.statistics?.total ?? rawGroups.length;
    const privateGroups = rawGroups.filter((g) => g.isPrivate).length;
    const publicGroups = rawGroups.filter((g) => !g.isPrivate).length;
    const totalStudents = rawGroups.reduce((acc, g) => acc + (Number(g.currentStudentsCount) || 0), 0);
    return {
      totalGroups,
      privateGroups,
      publicGroups,
      totalStudents,
    };
  }, [responseData?.statistics, rawGroups]);
  const filteredGroups = useMemo(() => {
    return rawGroups.filter((g) => {
      if (activeFilter === 'private' && !g.isPrivate) return false;
      if (activeFilter === 'public' && g.isPrivate) return false;
      if (activeFilter === 'active' && !g.isActive) return false;
      if (debouncedSearch.trim()) {
        const query = debouncedSearch.toLowerCase().trim();
        const matchesName = g.name.toLowerCase().includes(query);
        const matchesCurriculum = (g.curriculum || '').toLowerCase().includes(query);
        const matchesCountry = (g.country || '').toLowerCase().includes(query);
        return matchesName || matchesCurriculum || matchesCountry;
      }
      return true;
    });
  }, [rawGroups, activeFilter, debouncedSearch]);
  const userInitial = useMemo(() => {
    const name = user?.name || '';
    if (typeof name === 'object' && name !== null) {
      const resolved = isRtl ? name.ar || name.en : name.en || name.ar;
      return resolved ? resolved.trim().charAt(0) : 'أ';
    }
    return typeof name === 'string' && name.trim() ? name.trim().charAt(0) : 'أ';
  }, [user, isRtl]);
  return (
    <div className="space-y-6 max-w-7xl mx-auto pb-14 font-sans" dir={isRtl ? 'rtl' : 'ltr'}>
      <TeacherGroupsHeader
        totalGroups={stats.totalGroups}
        currentTimeStr={currentTimeStr}
        currentDateStr={currentDateStr}
        userInitial={userInitial}
        notificationsCount={3}
      />
      <TeacherGroupsStatsGrid
        totalGroups={stats.totalGroups}
        privateGroups={stats.privateGroups}
        publicGroups={stats.publicGroups}
        totalStudents={stats.totalStudents}
      />
      <TeacherGroupsFilterBar
        activeFilter={activeFilter}
        onFilterChange={setActiveFilter}
        searchQuery={searchQuery}
        onSearchChange={setSearchQuery}
      />
      {isLoading ? (
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-5">
          {[1, 2, 3, 4].map((i) => (
            <div key={i} className="h-64 rounded-3xl bg-slate-100 dark:bg-slate-800/60 animate-pulse border border-slate-100 dark:border-slate-800" />
          ))}
        </div>
      ) : filteredGroups.length === 0 ? (
        <TeacherGroupsEmptyState />
      ) : (
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-5">
          {filteredGroups.map((group) => (
            <TeacherGroupCard key={group.id} group={group} />
          ))}
        </div>
      )}
    </div>
  );
}


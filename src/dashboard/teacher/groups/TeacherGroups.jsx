import { useState, useMemo, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { useQuery } from '@tanstack/react-query';
import { teacherGroupsApi } from '@/shared/services/api/teacherGroupsApi.js';

import TeacherGroupsHeader from './components/TeacherGroupsHeader.jsx';
import TeacherGroupsFilterBar from './components/TeacherGroupsFilterBar.jsx';
import TeacherGroupCard from './components/TeacherGroupCard.jsx';
import TeacherGroupsEmptyState from './components/TeacherGroupsEmptyState.jsx';

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

function formatSchedule(group) {
  if (group.schedule && typeof group.schedule === 'string') return group.schedule;
  if (Array.isArray(group.schedules) && group.schedules.length > 0) {
    return group.schedules.map((s) => s.day || s.dayName || s.time).filter(Boolean).join('، ');
  }
  return '';
}

export default function TeacherGroups() {
  const { t, i18n } = useTranslation();
  const isRtl = i18n?.language?.startsWith('ar') ?? true;

  const [statusFilter, setStatusFilter] = useState('all');
  const [typeFilter, setTypeFilter] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');
  const [debouncedSearch, setDebouncedSearch] = useState('');
  const page = 1;
  const limit = 50;

  const [currentTimeStr, setCurrentTimeStr] = useState('');
  const [currentDateStr, setCurrentDateStr] = useState('');

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
          isRtl ? 'ar-SA-u-ca-islamic-umalqura' : 'en-US-u-ca-islamic-umalqura',
          {
            weekday: 'long',
            day: 'numeric',
            month: 'long',
            year: 'numeric',
          }
        ).format(now);
        setCurrentDateStr(dateFormatted);
      } catch {
        setCurrentDateStr(isRtl ? 'الأربعاء، ٥ ذو القعدة ١٤٤٧ هـ' : 'Wednesday, 5 Dhu al-Qi\'dah 1447 AH');
      }
    };

    updateDateTime();
    const interval = setInterval(updateDateTime, 1000);
    return () => clearInterval(interval);
  }, [isRtl]);

  useEffect(() => {
    const timer = setTimeout(() => {
      setDebouncedSearch(searchQuery);
    }, 350);
    return () => clearTimeout(timer);
  }, [searchQuery]);

  const {
    data: responseData,
    isLoading,
    isFetching,
    refetch,
  } = useQuery({
    queryKey: ['teacherGroups', page, statusFilter],
    queryFn: async () => {
      try {
        if (statusFilter && statusFilter !== 'all') {
          return await teacherGroupsApi.fetchGroupsByStatus(statusFilter, { page, limit });
        }
        const res = await teacherGroupsApi.fetchGroups({ page, limit });
        const list = Array.isArray(res?.data)
          ? res.data
          : (Array.isArray(res)
            ? res
            : (Array.isArray(res?.data?.data)
              ? res.data.data
              : (Array.isArray(res?.data?.groups) ? res.data.groups : [])));
        if (list && list.length > 0) {
          return res;
        }
        const activeRes = await teacherGroupsApi.fetchActiveGroups({ page, limit });
        const activeList = Array.isArray(activeRes?.data)
          ? activeRes.data
          : (Array.isArray(activeRes)
            ? activeRes
            : (Array.isArray(activeRes?.data?.data) ? activeRes.data.data : []));
        if (activeList && activeList.length > 0) {
          return activeRes;
        }
        return res;
      } catch (err) {
        if (statusFilter && statusFilter !== 'all') {
          return await teacherGroupsApi.fetchGroupsByStatus(statusFilter, { page, limit });
        }
        return await teacherGroupsApi.fetchActiveGroups({ page, limit });
      }
    },
    staleTime: 0,
    gcTime: 0,
    refetchOnMount: 'always',
    refetchOnWindowFocus: true,
  });

  useEffect(() => {
    refetch();
  }, [statusFilter, refetch]);

  const rawGroups = useMemo(() => {
    let list = [];
    if (Array.isArray(responseData)) {
      list = responseData;
    } else if (Array.isArray(responseData?.data)) {
      list = responseData.data;
    } else if (Array.isArray(responseData?.data?.data)) {
      list = responseData.data.data;
    } else if (Array.isArray(responseData?.data?.groups)) {
      list = responseData.data.groups;
    } else if (Array.isArray(responseData?.groups)) {
      list = responseData.groups;
    } else if (Array.isArray(responseData?.items)) {
      list = responseData.items;
    } else if (Array.isArray(responseData?.data?.items)) {
      list = responseData.data.items;
    } else if (Array.isArray(responseData?.result)) {
      list = responseData.result;
    } else if (Array.isArray(responseData?.data?.result)) {
      list = responseData.data.result;
    }
    if (!Array.isArray(list)) return [];
    return list.map((g, idx) => {
      const groupName = typeof g.name === 'object' && g.name !== null
        ? (isRtl ? g.name.ar || g.name.en : g.name.en || g.name.ar)
        : g.name || `${t('teacherDashboard.groupName', 'مجموعة')} ${idx + 1}`;

      const currName = typeof g.curriculum === 'object' && g.curriculum !== null
        ? (isRtl ? g.curriculum.name?.ar || g.curriculum.name?.en : g.curriculum.name?.en || g.curriculum.name?.ar)
        : (g.curriculum?.name || g.curriculum || '');

      const langName = typeof g.explanationLanguage === 'object' && g.explanationLanguage !== null
        ? (isRtl ? g.explanationLanguage.name?.ar || g.explanationLanguage.name?.en : g.explanationLanguage.name?.en || g.explanationLanguage.name?.ar)
        : (g.explanationLanguage?.name || g.language || '');

      return {
        id: g.id || g._id || `grp-${idx}`,
        name: groupName,
        curriculum: currName,
        status: g.status || (statusFilter !== 'all' ? statusFilter : 'active'),
        language: langName,
        currentStudentsCount: Array.isArray(g.students) ? g.students.length : (g.currentStudentsCount ?? 0),
        maxStudents: g.maxStudents || 0,
        type: getGroupTypeLabel(g, t),
        rawType: (g.type || 'public').toLowerCase(),
        level: getGroupLevelLabel(g, isRtl),
        schedule: formatSchedule(g),
      };
    });
  }, [responseData, statusFilter, isRtl, t]);

  const statusCounts = useMemo(() => {
    let all = rawGroups.length;
    let pending = 0;
    let active = 0;
    let stopped = 0;
    let completed = 0;

    rawGroups.forEach((g) => {
      const st = (g.status || '').toLowerCase();
      if (st === 'pending' || st.includes('انتظار')) {
        pending++;
      } else if (st === 'stopped' || st.includes('موقوف') || st.includes('متوقف')) {
        stopped++;
      } else if (st === 'completed' || st.includes('مكتمل')) {
        completed++;
      } else {
        active++;
      }
    });

    if (statusFilter !== 'all') {
      if (statusFilter === 'active') active = rawGroups.length;
      if (statusFilter === 'pending') pending = rawGroups.length;
      if (statusFilter === 'stopped') stopped = rawGroups.length;
      if (statusFilter === 'completed') completed = rawGroups.length;
    }

    return { all, active, pending, stopped, completed };
  }, [rawGroups, statusFilter]);

  const filteredGroups = useMemo(() => {
    return rawGroups.filter((g) => {
      const st = (g.status || '').toLowerCase();
      if (statusFilter === 'active' && (st === 'pending' || st === 'stopped' || st === 'completed' || st.includes('انتظار') || st.includes('موقوف') || st.includes('مكتمل'))) return false;
      if (statusFilter === 'pending' && st !== 'pending' && !st.includes('انتظار')) return false;
      if (statusFilter === 'stopped' && st !== 'stopped' && !st.includes('موقوف')) return false;
      if (statusFilter === 'completed' && st !== 'completed' && !st.includes('مكتمل')) return false;

      if (typeFilter !== 'all') {
        const isPriv = g.rawType === 'private' || g.type.includes('خاص');
        if (typeFilter === 'private' && !isPriv) return false;
        if (typeFilter === 'public' && isPriv) return false;
      }

      if (debouncedSearch.trim()) {
        const q = debouncedSearch.toLowerCase().trim();
        const matchName = g.name.toLowerCase().includes(q);
        const matchCurr = (g.curriculum || '').toLowerCase().includes(q);
        return matchName || matchCurr;
      }
      return true;
    });
  }, [rawGroups, statusFilter, typeFilter, debouncedSearch]);

  return (
    <div className="space-y-6 max-w-7xl mx-auto pb-12 font-sans" dir={isRtl ? 'rtl' : 'ltr'}>
      <TeacherGroupsHeader
        currentTimeStr={currentTimeStr}
        currentDateStr={currentDateStr}
        isFetching={isFetching}
        onRefetch={refetch}
      />

      <TeacherGroupsFilterBar
        statusFilter={statusFilter}
        onStatusFilterChange={setStatusFilter}
        typeFilter={typeFilter}
        onTypeFilterChange={setTypeFilter}
        searchQuery={searchQuery}
        onSearchChange={setSearchQuery}
        statusCounts={statusCounts}
      />

      {isLoading || (isFetching && rawGroups.length === 0) ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {[1, 2, 3, 4, 5, 6].map((i) => (
            <div key={i} className="h-64 rounded-3xl bg-slate-100 dark:bg-slate-800/60 animate-pulse border border-slate-100 dark:border-slate-800" />
          ))}
        </div>
      ) : filteredGroups.length === 0 ? (
        <TeacherGroupsEmptyState />
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {filteredGroups.map((group) => (
            <TeacherGroupCard key={group.id} group={group} />
          ))}
        </div>
      )}
    </div>
  );
}

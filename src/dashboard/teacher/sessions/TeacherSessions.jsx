import { useState, useMemo, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { useQuery } from '@tanstack/react-query';
import { teacherSessionsApi } from '@/shared/services/api/teacherSessionsApi.js';

import TeacherSessionsHeader from './components/TeacherSessionsHeader.jsx';
import TeacherSessionsFilterBar from './components/TeacherSessionsFilterBar.jsx';
import TeacherSessionsTable from './components/TeacherSessionsTable.jsx';
import TeacherSessionsEmptyState from './components/TeacherSessionsEmptyState.jsx';

function formatTimeDisplay(timeStr) {
  if (!timeStr) return '-';
  const str = String(timeStr).trim();
  if (str.includes('-')) {
    const parts = str.split('-').map((s) => s.trim());
    return `${formatTimeDisplay(parts[0])} - ${formatTimeDisplay(parts[1])}`;
  }
  if (str.includes('T')) {
    const d = new Date(str);
    if (!isNaN(d.getTime())) {
      return d.toLocaleTimeString('en-US', { hour: '2-digit', minute: '2-digit' });
    }
  }
  return str;
}

export default function TeacherSessions() {
  const { t, i18n } = useTranslation();
  const isRtl = i18n?.language?.startsWith('ar') ?? true;

  const [activeTab, setActiveTab] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');
  const [debouncedSearch, setDebouncedSearch] = useState('');
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 20;

  const [currentTimeStr, setCurrentTimeStr] = useState('');
  const [currentDateStr, setCurrentDateStr] = useState('');

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

  useEffect(() => {
    const timer = setTimeout(() => {
      setDebouncedSearch(searchQuery);
      setCurrentPage(1);
    }, 350);
    return () => clearTimeout(timer);
  }, [searchQuery]);

  const {
    data: responseData,
    isLoading,
    isFetching,
    refetch,
  } = useQuery({
    queryKey: ['teacherSessions', activeTab, currentPage, debouncedSearch],
    queryFn: () =>
      teacherSessionsApi.fetchSessionsByStatus(activeTab, {
        page: currentPage,
        limit: itemsPerPage,
        search: debouncedSearch,
      }),
  });

  const sessionsList = useMemo(() => {
    const list = responseData?.data || (Array.isArray(responseData) ? responseData : []);
    if (Array.isArray(list) && list.length > 0) {
      return list.map((item, idx) => ({
        id: item.id || item._id || `session-${idx}`,
        sessionNumber: item.sessionNumber || idx + 1,
        title: item.title || item.name || t('teacherSchedule.sessionTitleFallback', 'حصة دراسية'),
        groupName:
          (typeof item.group === 'object' && item.group !== null
            ? item.group.name || item.group.title
            : item.groupName || item.group) || t('teacherDashboard.groupName', 'مجموعة دراسية'),
        date: item.date || item.startTime?.split('T')[0] || '-',
        time: item.time || (item.startTime ? `${formatTimeDisplay(item.startTime)} - ${formatTimeDisplay(item.endTime)}` : '-'),
        status: (item.status || 'scheduled').toLowerCase(),
        studentsCount: item.studentsCount ?? (Array.isArray(item.students) ? item.students.length : 0),
        zoomJoinUrl: item.zoomJoinUrl || item.joinUrl || item.meetingUrl || null,
      }));
    }
    return [];
  }, [responseData, t]);

  const filteredSessions = useMemo(() => {
    return sessionsList.filter((s) => {
      const st = (s.status || '').toLowerCase();
      if (activeTab === 'scheduled' && st !== 'scheduled' && !st.includes('مجدول')) return false;
      if (activeTab === 'live' && st !== 'live' && st !== 'in_progress' && st !== 'in-progress' && !st.includes('مباشر')) return false;
      if (activeTab === 'completed' && st !== 'completed' && !st.includes('مكتمل')) return false;
      if (activeTab === 'cancelled' && st !== 'cancelled' && !st.includes('ملغ')) return false;

      if (debouncedSearch.trim()) {
        const q = debouncedSearch.toLowerCase().trim();
        const matchTitle = s.title?.toLowerCase().includes(q);
        const matchGroup = s.groupName?.toLowerCase().includes(q);
        return matchTitle || matchGroup;
      }
      return true;
    });
  }, [sessionsList, activeTab, debouncedSearch]);

  return (
    <div className="space-y-6 max-w-7xl mx-auto pb-12 font-sans" dir={isRtl ? 'rtl' : 'ltr'}>
      <TeacherSessionsHeader
        currentTimeStr={currentTimeStr}
        currentDateStr={currentDateStr}
        isFetching={isFetching}
        onRefetch={refetch}
      />

      <TeacherSessionsFilterBar
        activeTab={activeTab}
        onTabChange={(tab) => {
          setActiveTab(tab);
          setCurrentPage(1);
        }}
        searchQuery={searchQuery}
        onSearchChange={setSearchQuery}
      />

      {isLoading ? (
        <div className="bg-white dark:bg-slate-900 rounded-3xl p-6 shadow-xs border border-slate-100 dark:border-slate-800 space-y-3">
          {[1, 2, 3, 4, 5].map((i) => (
            <div key={i} className="h-14 rounded-2xl bg-slate-100 dark:bg-slate-800/60 animate-pulse" />
          ))}
        </div>
      ) : filteredSessions.length === 0 ? (
        <TeacherSessionsEmptyState />
      ) : (
        <TeacherSessionsTable sessions={filteredSessions} />
      )}
    </div>
  );
}

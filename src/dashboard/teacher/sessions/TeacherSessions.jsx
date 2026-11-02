import { useState, useMemo, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { useQuery } from '@tanstack/react-query';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { teacherSessionsApi } from '@/shared/services/api/teacherSessionsApi.js';

import TeacherSessionsHeader from './components/TeacherSessionsHeader.jsx';
import TeacherSessionsFilterBar from './components/TeacherSessionsFilterBar.jsx';
import TeacherSessionsTable from './components/TeacherSessionsTable.jsx';
import TeacherSessionsEmptyState from './components/TeacherSessionsEmptyState.jsx';

// Formats an ISO timestamp (or an "HH:mm" string) as HH:mm. ISO dates contain "-" too,
// so they must be parsed before treating "-" as a range separator.
function formatTimeDisplay(timeStr) {
  if (!timeStr) return '-';
  const str = String(timeStr).trim();
  if (/^\d{4}-\d{2}-\d{2}T/.test(str)) {
    const d = new Date(str);
    if (!isNaN(d.getTime())) {
      return d.toLocaleTimeString('en-GB', { hour: '2-digit', minute: '2-digit', hour12: false });
    }
  }
  if (/^\d{1,2}:\d{2}\s*-\s*\d{1,2}:\d{2}$/.test(str)) {
    return str.split('-').map((s) => s.trim()).join(' - ');
  }
  return str;
}

function formatDateDisplay(value, isRtl) {
  if (!value) return '-';
  const d = new Date(value);
  if (isNaN(d.getTime())) return String(value);
  return d.toLocaleDateString(isRtl ? 'ar-EG' : 'en-GB', { year: 'numeric', month: 'short', day: 'numeric' });
}

// Session status may come back as a key ("completed") or translated text ("مكتملة")
const STATUS_KEYS = {
  scheduled: 'scheduled', 'مجدولة': 'scheduled', 'مجدول': 'scheduled',
  rescheduled: 'rescheduled', 'معاد جدولتها': 'rescheduled', 'معاد جدولته': 'rescheduled', 'أعيدت جدولتها': 'rescheduled',
  live: 'live', in_progress: 'live', 'in-progress': 'live', 'مباشرة': 'live', 'جارية': 'live',
  completed: 'completed', 'مكتملة': 'completed', 'مكتمل': 'completed',
  cancelled: 'cancelled', canceled: 'cancelled', 'ملغاة': 'cancelled', 'ملغية': 'cancelled', 'ملغي': 'cancelled',
};

function normalizeSessionStatus(item) {
  const raw = String(item.rawStatus || item.statusKey || item.status || '').trim().toLowerCase();
  return STATUS_KEYS[raw] || raw || 'scheduled';
}

function getStudentsCount(item) {
  if (typeof item.studentsCount === 'number') return item.studentsCount;
  if (Array.isArray(item.attendance)) return item.attendance.length;
  if (Array.isArray(item.students)) return item.students.length;
  if (typeof item.group === 'object' && item.group !== null) {
    if (Array.isArray(item.group.students)) return item.group.students.length;
    return Number(item.group.studentsCount ?? item.group.currentStudentsCount ?? 0);
  }
  return 0;
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
        date: formatDateDisplay(item.startTime || item.date, isRtl),
        time: item.startTime
          ? `${formatTimeDisplay(item.startTime)} - ${formatTimeDisplay(item.endTime)}`
          : formatTimeDisplay(item.time),
        status: normalizeSessionStatus(item),
        studentsCount: getStudentsCount(item),
        zoomJoinUrl: item.zoomJoinUrl || item.joinUrl || item.meetingUrl || null,
      }));
    }
    return [];
  }, [responseData, t, isRtl]);

  const filteredSessions = useMemo(() => {
    return sessionsList.filter((s) => {
      const st = s.status;
      if (activeTab === 'scheduled' && st !== 'scheduled' && st !== 'rescheduled') return false;
      if (activeTab === 'live' && st !== 'live') return false;
      if (activeTab === 'completed' && st !== 'completed') return false;
      if (activeTab === 'cancelled' && st !== 'cancelled') return false;

      if (debouncedSearch.trim()) {
        const q = debouncedSearch.toLowerCase().trim();
        const matchTitle = s.title?.toLowerCase().includes(q);
        const matchGroup = s.groupName?.toLowerCase().includes(q);
        return matchTitle || matchGroup;
      }
      return true;
    });
  }, [sessionsList, activeTab, debouncedSearch]);

  const serverTotalPages =
    responseData?.pagination?.numberOfPages ||
    responseData?.pagination?.totalPages ||
    responseData?.totalPages ||
    responseData?.meta?.totalPages ||
    (responseData?.total ? Math.ceil(responseData.total / itemsPerPage) : 0);

  const totalPages = Math.max(1, serverTotalPages || Math.ceil(filteredSessions.length / itemsPerPage));

  const displaySessions = useMemo(() => {
    if (serverTotalPages && serverTotalPages > 1) {
      return filteredSessions;
    }
    const start = (currentPage - 1) * itemsPerPage;
    return filteredSessions.slice(start, start + itemsPerPage);
  }, [filteredSessions, currentPage, itemsPerPage, serverTotalPages]);

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
        <div className="space-y-4">
          <TeacherSessionsTable sessions={displaySessions} />

          {totalPages > 1 && (
            <div className="flex flex-col sm:flex-row items-center justify-between pt-4 text-xs gap-3">
              <span className="text-slate-500 dark:text-slate-400 font-semibold">
                {t('teacher.paginationInfo', 'عرض صفحة {{currentPage}} من {{totalPages}}', {
                  currentPage,
                  totalPages,
                })}
              </span>

              <div className="flex items-center gap-1.5">
                <button
                  type="button"
                  onClick={() => setCurrentPage((p) => Math.max(1, p - 1))}
                  disabled={currentPage <= 1}
                  className="p-2 rounded-xl border border-slate-200 dark:border-slate-700 text-slate-600 dark:text-slate-300 hover:bg-slate-50 dark:hover:bg-slate-800 disabled:opacity-40 cursor-pointer"
                  title={t('common.prev', 'الصفحة السابقة')}
                >
                  {isRtl ? <ChevronRight size={16} /> : <ChevronLeft size={16} />}
                </button>

                <div className="flex items-center gap-1">
                  {Array.from({ length: Math.min(totalPages, 5) }, (_, i) => {
                    const pageNum = i + 1;
                    const isCurrent = pageNum === currentPage;
                    return (
                      <button
                        type="button"
                        key={pageNum}
                        onClick={() => setCurrentPage(pageNum)}
                        className={`w-8 h-8 rounded-xl font-bold text-xs transition cursor-pointer ${
                          isCurrent
                            ? 'bg-[#00594C] text-white shadow-xs'
                            : 'border border-slate-200 dark:border-slate-700 text-slate-600 dark:text-slate-300 hover:bg-slate-50 dark:hover:bg-slate-800'
                        }`}
                      >
                        {pageNum}
                      </button>
                    );
                  })}
                </div>

                <button
                  type="button"
                  onClick={() => setCurrentPage((p) => Math.min(totalPages, p + 1))}
                  disabled={currentPage >= totalPages}
                  className="p-2 rounded-xl border border-slate-200 dark:border-slate-700 text-slate-600 dark:text-slate-300 hover:bg-slate-50 dark:hover:bg-slate-800 disabled:opacity-40 cursor-pointer"
                  title={t('common.next', 'الصفحة التالية')}
                >
                  {isRtl ? <ChevronLeft size={16} /> : <ChevronRight size={16} />}
                </button>
              </div>
            </div>
          )}
        </div>
      )}
    </div>
  );
}

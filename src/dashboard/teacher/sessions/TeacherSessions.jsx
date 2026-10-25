import { useState, useMemo, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { useQuery } from '@tanstack/react-query';
import { Link } from 'react-router-dom';
import {
  Calendar,
  Clock,
  Video,
  Search,
  CheckCircle2,
  AlertCircle,
  Play,
  RotateCcw,
   ChevronLeft,
  ChevronRight,
    Users,
} from 'lucide-react';
import { teacherSessionsApi } from '@/shared/services/api/teacherSessionsApi.js';

const STATUS_TABS = [
  { key: 'all', label: 'الكل' },
  { key: 'scheduled', label: 'مجدولة' },
  { key: 'live', label: 'مباشرة الآن' },
  { key: 'completed', label: 'مكتملة' },
  { key: 'cancelled', label: 'ملغاة' },
];

const DEFAULT_PREVIEW_SESSIONS = [
  {
    id: 's-1',
    sessionNumber: 1,
    title: 'تلاوة وتجويد سورة البقرة',
    groupName: 'مجموعة التجويد الأولى',
    date: '2026-10-25',
    time: '10:00 AM - 11:30 AM',
    status: 'live',
    studentsCount: 5,
    zoomJoinUrl: 'https://zoom.us',
  },
  {
    id: 's-2',
    sessionNumber: 2,
    title: 'أحكام النون الساكنة والتنوين',
    groupName: 'مجموعة القراءات والتجويد',
    date: '2026-10-26',
    time: '04:00 PM - 05:30 PM',
    status: 'scheduled',
    studentsCount: 4,
    zoomJoinUrl: 'https://zoom.us',
  },
  {
    id: 's-3',
    sessionNumber: 3,
    title: 'مخارج الحروف والصفات',
    groupName: 'مجموعة التجويد المتقدمة',
    date: '2026-10-23',
    time: '06:00 PM - 07:30 PM',
    status: 'completed',
    studentsCount: 5,
    zoomJoinUrl: null,
  },
  {
    id: 's-4',
    sessionNumber: 4,
    title: 'تطبيق عملي على سورة آل عمران',
    groupName: 'مجموعة التجويد الثالثة',
    date: '2026-10-20',
    time: '05:00 PM - 06:30 PM',
    status: 'cancelled',
    studentsCount: 4,
    zoomJoinUrl: null,
  },
];

function formatTimeDisplay(timeStr, isRtl = true) {
  if (!timeStr) return '-';
  const str = String(timeStr).trim();
  if (str.includes('-')) {
    const parts = str.split('-').map((s) => s.trim());
    return `${formatTimeDisplay(parts[0], isRtl)} - ${formatTimeDisplay(parts[1], isRtl)}`;
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
  const itemsPerPage = 10;

  const [currentTimeStr, setCurrentTimeStr] = useState('01:53:04 AM');
  const [currentDateStr, setCurrentDateStr] = useState('');

  useEffect(() => {
    const updateDateTime = () => {
      const now = new Date();
      try {
        const timeFormatted = new Intl.DateTimeFormat('en-US', {
          hour: 'numeric',
          minute: '2-digit',
          second: '2-digit',
          hour12: true,
        }).format(now);
        setCurrentTimeStr(timeFormatted);
      } catch {
        setCurrentTimeStr(now.toLocaleTimeString('en-US'));
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
        setCurrentDateStr(now.toLocaleDateString(isRtl ? 'ar-EG' : 'en-US'));
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
    error,
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

  const rawList = useMemo(() => {
    const list = responseData?.data || (Array.isArray(responseData) ? responseData : []);
    if (Array.isArray(list) && list.length > 0) {
      return list.map((item, idx) => ({
        id: item.id || item._id || `session-${idx}`,
        sessionNumber: item.sessionNumber || idx + 1,
        title: item.title || item.name || 'حصة دراسية',
        groupName:
          (typeof item.group === 'object' && item.group !== null
            ? item.group.name || item.group.title
            : item.groupName || item.group) || 'مجموعة دراسية',
        date: item.date || item.startTime?.split('T')[0] || '-',
        time: item.time || (item.startTime ? `${formatTimeDisplay(item.startTime)} - ${formatTimeDisplay(item.endTime)}` : '-'),
        status: (item.status || 'scheduled').toLowerCase(),
        studentsCount: item.studentsCount ?? (Array.isArray(item.students) ? item.students.length : 5),
        zoomJoinUrl: item.zoomJoinUrl || item.joinUrl || item.meetingUrl || null,
      }));
    }
    return DEFAULT_PREVIEW_SESSIONS;
  }, [responseData]);

  const filteredSessions = useMemo(() => {
    return rawList.filter((s) => {
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
  }, [rawList, activeTab, debouncedSearch]);

  const totalPages = Math.max(1, Math.ceil(filteredSessions.length / itemsPerPage));
  const paginatedSessions = useMemo(() => {
    const start = (currentPage - 1) * itemsPerPage;
    return filteredSessions.slice(start, start + itemsPerPage);
  }, [filteredSessions, currentPage, itemsPerPage]);

  const renderStatusBadge = (status) => {
    const st = (status || '').toLowerCase();
    if (st === 'live' || st === 'in_progress' || st === 'in-progress' || st.includes('مباشر')) {
      return (
        <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold bg-emerald-100 text-[#00594C] dark:bg-emerald-950/60 dark:text-emerald-300">
          <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
          مباشرة الآن
        </span>
      );
    }
    if (st === 'scheduled' || st.includes('مجدول')) {
      return (
        <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold bg-sky-100 text-sky-800 dark:bg-sky-950/60 dark:text-sky-300">
          <Clock size={12} />
          مجدولة
        </span>
      );
    }
    if (st === 'completed' || st.includes('مكتمل')) {
      return (
        <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold bg-blue-100 text-blue-800 dark:bg-blue-950/60 dark:text-blue-300">
          <CheckCircle2 size={12} />
          مكتملة
        </span>
      );
    }
    return (
      <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold bg-rose-100 text-rose-800 dark:bg-rose-950/60 dark:text-rose-300">
        <AlertCircle size={12} />
        ملغاة
      </span>
    );
  };

  return (
    <div className="space-y-6 max-w-7xl mx-auto pb-12" dir="rtl">
      <div className="bg-white dark:bg-slate-900 rounded-3xl p-5 shadow-xs border border-slate-100 dark:border-slate-800 flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div className="text-start">
          <h1 className="text-2xl sm:text-3xl font-black text-slate-800 dark:text-white leading-tight">
            سجل الجلسات
          </h1>
          <p className="text-xs sm:text-sm text-slate-400 font-semibold mt-0.5">
            متابعة الجلسات المجدولة والمكتملة والحالية
          </p>
        </div>

        <div className="flex items-center gap-3 self-end md:self-center flex-wrap">
          <span className="px-3.5 py-1 rounded-full text-xs font-mono font-bold bg-[#d2ede6] text-[#00594C] dark:bg-emerald-950/70 dark:text-emerald-300">
            {currentTimeStr}
          </span>

          <div className="flex items-center gap-1.5 text-xs text-slate-500 dark:text-slate-400 font-semibold">
            <Calendar size={14} className="text-slate-400" />
            <span>{currentDateStr}</span>
          </div>

          <button
            onClick={() => refetch()}
            disabled={isFetching}
            className="p-2 rounded-xl border border-slate-200 dark:border-slate-700 text-slate-600 dark:text-slate-300 hover:bg-slate-50 dark:hover:bg-slate-800 transition-colors cursor-pointer disabled:opacity-50"
            title="تحديث"
          >
            <RotateCcw size={15} className={isFetching ? 'animate-spin' : ''} />
          </button>
        </div>
      </div>

      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div className="flex items-center gap-2 overflow-x-auto pb-1 md:pb-0">
          {STATUS_TABS.map((tab) => {
            const isSelected = activeTab === tab.key;
            return (
              <button
                key={tab.key}
                onClick={() => {
                  setActiveTab(tab.key);
                  setCurrentPage(1);
                }}
                type="button"
                className={`px-5 py-2.5 rounded-2xl text-xs sm:text-sm font-bold transition-all cursor-pointer whitespace-nowrap shadow-xs ${
                  isSelected
                    ? 'bg-[#00594C] text-white'
                    : 'bg-white dark:bg-slate-900 text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white border border-slate-200/70 dark:border-slate-800'
                }`}
              >
                {tab.label}
              </button>
            );
          })}
        </div>

        <div className="relative flex-1 max-w-md">
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="ابحث باسم المجموعة أو عنوان الحصة..."
            className="w-full py-2.5 pe-4 ps-11 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200/80 dark:border-slate-800 text-sm text-slate-900 dark:text-white placeholder:text-slate-400 shadow-xs focus:outline-none focus:ring-2 focus:ring-[#00594C]/20 focus:border-[#00594C] transition-all text-start"
          />
          <Search
            size={18}
            className="absolute top-1/2 -translate-y-1/2 start-3.5 text-slate-400 pointer-events-none"
          />
        </div>
      </div>

      {isLoading ? (
        <div className="space-y-3">
          {[1, 2, 3, 4].map((i) => (
            <div
              key={i}
              className="h-20 bg-white dark:bg-slate-900 rounded-2xl animate-pulse border border-slate-100 dark:border-slate-800"
            />
          ))}
        </div>
      ) : paginatedSessions.length === 0 ? (
        <div className="p-16 text-center rounded-3xl bg-white dark:bg-slate-900 border border-dashed border-slate-200 dark:border-slate-800 space-y-2">
          <Video size={36} className="text-slate-300 dark:text-slate-600 mx-auto mb-2" />
          <h3 className="text-base font-bold text-slate-700 dark:text-slate-200">
            لا توجد جلسات مطابقة
          </h3>
          <p className="text-xs text-slate-400">
            لم يتم العثور على أي جلسات ضمن التصفية المحددة
          </p>
        </div>
      ) : (
        <div className="bg-white dark:bg-slate-900 rounded-3xl p-5 sm:p-6 shadow-xs border border-slate-100 dark:border-slate-800 overflow-x-auto">
          <table className="w-full text-start border-collapse min-w-[700px]">
            <thead>
              <tr className="text-xs font-semibold text-slate-400 dark:text-slate-500 border-b border-slate-100 dark:border-slate-800">
                <th className="text-start pb-4 font-semibold pe-4">الحصة</th>
                <th className="text-start pb-4 font-semibold px-4">المجموعة</th>
                <th className="text-start pb-4 font-semibold px-4">الموعد</th>
                <th className="text-center pb-4 font-semibold px-4">الطلاب</th>
                <th className="text-center pb-4 font-semibold px-4">الحالة</th>
                <th className="text-center pb-4 font-semibold ps-4">الإجراء</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100 dark:divide-slate-800/80">
              {paginatedSessions.map((session) => (
                <tr
                  key={session.id}
                  className="hover:bg-slate-50/50 dark:hover:bg-slate-800/40 transition-colors"
                >
                  <td className="py-4 text-start pe-4">
                    <div className="space-y-0.5">
                      <span className="font-bold text-sm text-slate-900 dark:text-white block">
                        {session.title}
                      </span>
                      <span className="text-[11px] font-mono text-slate-400">
                        حصة رقم #{session.sessionNumber}
                      </span>
                    </div>
                  </td>

                  <td className="py-4 text-start px-4">
                    <span className="text-xs sm:text-sm font-semibold text-slate-700 dark:text-slate-300">
                      {session.groupName}
                    </span>
                  </td>

                  <td className="py-4 text-start px-4">
                    <div className="space-y-0.5 text-xs text-slate-600 dark:text-slate-300 font-semibold">
                      <div className="flex items-center gap-1.5">
                        <Calendar size={13} className="text-slate-400" />
                        <span>{session.date}</span>
                      </div>
                      <div className="flex items-center gap-1.5 text-slate-400 font-mono text-[11px]">
                        <Clock size={12} />
                        <span>{session.time}</span>
                      </div>
                    </div>
                  </td>

                  <td className="py-4 text-center px-4">
                    <div className="inline-flex items-center gap-1 text-xs font-bold text-slate-700 dark:text-slate-300">
                      <span>{session.studentsCount}</span>
                      <Users size={13} className="text-slate-400" />
                    </div>
                  </td>

                  <td className="py-4 text-center px-4">
                    {renderStatusBadge(session.status)}
                  </td>

                  <td className="py-4 text-center ps-4">
                    <div className="flex items-center justify-center gap-2">
                      {session.status === 'live' ? (
                        <Link
                          to="/dashboard/teacher/live"
                          className="px-3.5 py-1.5 rounded-xl text-xs font-bold bg-[#00594C] text-white hover:bg-[#00473d] transition-colors flex items-center gap-1 shadow-xs cursor-pointer"
                        >
                          <Play size={12} className="fill-white" />
                          <span>دخول البث</span>
                        </Link>
                      ) : session.status === 'scheduled' ? (
                        <Link
                          to="/dashboard/teacher/live"
                          className="px-3.5 py-1.5 rounded-xl text-xs font-bold bg-emerald-50 text-[#00594C] hover:bg-emerald-100 dark:bg-emerald-950/50 dark:text-emerald-300 transition-colors flex items-center gap-1 cursor-pointer"
                        >
                          <Video size={12} />
                          <span>بدء الحصة</span>
                        </Link>
                      ) : (
                        <Link
                          to={`/dashboard/teacher/evaluations`}
                          className="px-3.5 py-1.5 rounded-xl text-xs font-bold bg-slate-100 hover:bg-slate-200 dark:bg-slate-800 dark:hover:bg-slate-700 text-slate-700 dark:text-slate-200 transition-colors cursor-pointer"
                        >
                          التقييم
                        </Link>
                      )}
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>

          {totalPages > 1 && (
            <div className="flex items-center justify-between pt-5 border-t border-slate-100 dark:border-slate-800 text-xs">
              <span className="text-slate-400 font-semibold">
                صفحة {currentPage} من {totalPages}
              </span>
              <div className="flex items-center gap-1.5">
                <button
                  onClick={() => setCurrentPage((p) => Math.max(1, p - 1))}
                  disabled={currentPage <= 1}
                  className="p-2 rounded-xl border border-slate-200 dark:border-slate-700 text-slate-600 dark:text-slate-300 hover:bg-slate-50 dark:hover:bg-slate-800 disabled:opacity-40 cursor-pointer"
                >
                  <ChevronRight size={16} />
                </button>
                <button
                  onClick={() => setCurrentPage((p) => Math.min(totalPages, p + 1))}
                  disabled={currentPage >= totalPages}
                  className="p-2 rounded-xl border border-slate-200 dark:border-slate-700 text-slate-600 dark:text-slate-300 hover:bg-slate-50 dark:hover:bg-slate-800 disabled:opacity-40 cursor-pointer"
                >
                  <ChevronLeft size={16} />
                </button>
              </div>
            </div>
          )}
        </div>
      )}
    </div>
  );
}

import { useState, useMemo, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { useQuery } from '@tanstack/react-query';
import { Link } from 'react-router-dom';
import {
  Users,
  Search,
  Clock,
  Globe,
  MoreVertical,
  BookOpen,
  Calendar,
  AlertCircle,
} from 'lucide-react';
import { useAuth } from '@/shared/context/useAuth.jsx';
import { teacherGroupsApi } from '@/shared/services/api/teacherGroupsApi.js';

const DEFAULT_PREVIEW_GROUPS = [
  {
    id: 'g-preview-1',
    name: 'مجموعة التجويد الأولى',
    curriculum: 'تجويد القرآن الكريم',
    status: 'نشط',
    language: 'العربية',
    currentStudentsCount: 5,
    maxStudents: 5,
    type: 'خاص',
    level: 'متوسط',
    progress: 65,
    schedule: 'الأحد، الثلاثاء، الخميس - 4:00 م',
  },
  {
    id: 'g-preview-2',
    name: 'مجموعة القراءات والتجويد',
    curriculum: 'تجويد القرآن الكريم',
    status: 'قيد الانتظار',
    language: 'العربية',
    currentStudentsCount: 4,
    maxStudents: 5,
    type: 'عام',
    level: 'متوسط',
    progress: 40,
    schedule: 'الأحد، الثلاثاء، الخميس - 4:00 م',
  },
  {
    id: 'g-preview-3',
    name: 'مجموعة التجويد الثالثة',
    curriculum: 'تجويد القرآن الكريم',
    status: 'موقوف',
    language: 'الإنجليزية',
    currentStudentsCount: 4,
    maxStudents: 5,
    type: 'خاص',
    level: 'مبتدئ',
    progress: 70,
    schedule: 'الأحد، الأربعاء - 6:00 م',
  },
  {
    id: 'g-preview-4',
    name: 'مجموعة التجويد المتقدمة',
    curriculum: 'تجويد القرآن الكريم',
    status: 'مكتمل',
    language: 'العربية',
    currentStudentsCount: 5,
    maxStudents: 5,
    type: 'عام',
    level: 'متقدم',
    progress: 100,
    schedule: 'السبت، الاثنين، الأربعاء - 5:00 م',
  },
];

function formatTimeAr(val, isRtl = true) {
  if (!val) return '';
  if (typeof val === 'string') {
    if (val.includes('T')) {
      const d = new Date(val);
      if (!isNaN(d.getTime())) {
        return d.toLocaleTimeString(isRtl ? 'ar-EG' : 'en-US', {
          hour: 'numeric',
          minute: '2-digit',
          hour12: true,
        });
      }
    }
    const parts = val.split(':');
    if (parts.length >= 2) {
      let hours = parseInt(parts[0], 10);
      const minutes = parts[1];
      if (!isNaN(hours)) {
        const isPm = hours >= 12;
        hours = hours % 12 || 12;
        const period = isRtl ? (isPm ? 'م' : 'ص') : isPm ? 'PM' : 'AM';
        return `${hours}:${minutes} ${period}`;
      }
    }
    return val;
  }
  return String(val);
}

export default function TeacherGroups() {
  const { user } = useAuth();
  const { i18n } = useTranslation();
  const isRtl = i18n.language.startsWith('ar');

  const [statusFilter, setStatusFilter] = useState('all');
  const [typeFilter, setTypeFilter] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');
  const [page, setPage] = useState(1);
  const limit = 10;

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

  const {
    data: responseData,
    isLoading,
    error,
    refetch,
  } = useQuery({
    queryKey: ['teacherGroups', page],
    queryFn: () => teacherGroupsApi.fetchGroups({ page, limit }),
    keepPreviousData: true,
  });

  const apiGroups = useMemo(() => {
    const list = responseData?.data || [];
    return Array.isArray(list) ? list : [];
  }, [responseData]);

  const rawGroups = useMemo(() => {
    if (apiGroups.length > 0) return apiGroups;
    return DEFAULT_PREVIEW_GROUPS;
  }, [apiGroups]);

  const statusCounts = useMemo(() => {
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

    return { pending, active, stopped, completed };
  }, [rawGroups]);

  const totalGroupsCount = rawGroups.length;

  const filteredGroups = useMemo(() => {
    return rawGroups.filter((group) => {
      const gType = (group.type || '').toLowerCase();
      const gStatus = (group.status || '').toLowerCase();

      if (statusFilter !== 'all') {
        if (statusFilter === 'pending') {
          const isPending = gStatus === 'pending' || gStatus.includes('انتظار');
          if (!isPending) return false;
        } else if (statusFilter === 'active') {
          const isActive = gStatus === 'active' || gStatus.includes('نشط');
          if (!isActive) return false;
        } else if (statusFilter === 'stopped') {
          const isStopped = gStatus === 'stopped' || gStatus.includes('موقوف') || gStatus.includes('متوقف');
          if (!isStopped) return false;
        } else if (statusFilter === 'completed') {
          const isCompleted = gStatus === 'completed' || gStatus.includes('مكتمل');
          if (!isCompleted) return false;
        }
      }

      if (typeFilter === 'private') {
        const isPrivate = gType.includes('خاص') || gType === 'private';
        if (!isPrivate) return false;
      } else if (typeFilter === 'public') {
        const isPublic =
          gType.includes('عام') ||
          gType.includes('جماع') ||
          gType === 'public' ||
          gType === 'general' ||
          gType.includes('عادي');
        if (!isPublic) return false;
      }

      if (searchQuery.trim()) {
        const q = searchQuery.toLowerCase().trim();
        const nameMatch = group.name?.toLowerCase().includes(q);
        const currMatch = group.curriculum?.toLowerCase().includes(q);
        const levelMatch = group.level?.toLowerCase().includes(q);
        return nameMatch || currMatch || levelMatch;
      }

      return true;
    });
  }, [rawGroups, statusFilter, typeFilter, searchQuery]);

  return (
    <div className="space-y-6 max-w-7xl mx-auto pb-12" dir="rtl">
      <div className="bg-white dark:bg-slate-900 rounded-3xl p-5 shadow-xs border border-slate-100 dark:border-slate-800 flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div className="text-start">
          <h1 className="text-2xl sm:text-3xl font-black text-slate-800 dark:text-white leading-tight">
            مجموعاتي
          </h1>
          <p className="text-xs sm:text-sm text-slate-400 font-semibold mt-0.5">
            {totalGroupsCount} مجموعة معيّنة
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
        </div>
      </div>

      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-5">
        <button
          type="button"
          onClick={() => setStatusFilter((prev) => prev === 'pending' ? 'all' : 'pending')}
          className={`bg-white dark:bg-slate-900 rounded-3xl p-6 text-center shadow-xs border transition-all cursor-pointer ${
            statusFilter === 'pending'
              ? 'border-[#f59e0b] ring-2 ring-[#f59e0b]/30 bg-amber-50/20'
              : 'border-slate-100 dark:border-slate-800 hover:shadow-md'
          }`}
        >
          <div className="text-3xl sm:text-4xl font-black text-[#f59e0b]">
            {statusCounts.pending}
          </div>
          <div className="text-xs sm:text-sm font-bold text-slate-500 dark:text-slate-400 mt-2">
            قيد الانتظار
          </div>
        </button>

        <button
          type="button"
          onClick={() => setStatusFilter((prev) => prev === 'active' ? 'all' : 'active')}
          className={`bg-white dark:bg-slate-900 rounded-3xl p-6 text-center shadow-xs border transition-all cursor-pointer ${
            statusFilter === 'active'
              ? 'border-[#00594C] ring-2 ring-[#00594C]/30 bg-emerald-50/20'
              : 'border-slate-100 dark:border-slate-800 hover:shadow-md'
          }`}
        >
          <div className="text-3xl sm:text-4xl font-black text-[#00594C] dark:text-emerald-400">
            {statusCounts.active}
          </div>
          <div className="text-xs sm:text-sm font-bold text-slate-500 dark:text-slate-400 mt-2">
            نشط
          </div>
        </button>

        <button
          type="button"
          onClick={() => setStatusFilter((prev) => prev === 'stopped' ? 'all' : 'stopped')}
          className={`bg-white dark:bg-slate-900 rounded-3xl p-6 text-center shadow-xs border transition-all cursor-pointer ${
            statusFilter === 'stopped'
              ? 'border-[#ef4444] ring-2 ring-[#ef4444]/30 bg-red-50/20'
              : 'border-slate-100 dark:border-slate-800 hover:shadow-md'
          }`}
        >
          <div className="text-3xl sm:text-4xl font-black text-[#ef4444]">
            {statusCounts.stopped}
          </div>
          <div className="text-xs sm:text-sm font-bold text-slate-500 dark:text-slate-400 mt-2">
            موقوف
          </div>
        </button>

        <button
          type="button"
          onClick={() => setStatusFilter((prev) => prev === 'completed' ? 'all' : 'completed')}
          className={`bg-white dark:bg-slate-900 rounded-3xl p-6 text-center shadow-xs border transition-all cursor-pointer ${
            statusFilter === 'completed'
              ? 'border-[#3b82f6] ring-2 ring-[#3b82f6]/30 bg-blue-50/20'
              : 'border-slate-100 dark:border-slate-800 hover:shadow-md'
          }`}
        >
          <div className="text-3xl sm:text-4xl font-black text-[#3b82f6]">
            {statusCounts.completed}
          </div>
          <div className="text-xs sm:text-sm font-bold text-slate-500 dark:text-slate-400 mt-2">
            مكتمل
          </div>
        </button>
      </div>

      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div className="relative flex-1 max-w-md">
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="ابحث عن مجموعة..."
            className="w-full py-3 pe-4 ps-11 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200/80 dark:border-slate-800 text-sm text-slate-900 dark:text-white placeholder:text-slate-400 shadow-xs focus:outline-none focus:ring-2 focus:ring-[#00594C]/20 focus:border-[#00594C] transition-all text-start"
          />
          <Search
            size={18}
            className="absolute top-1/2 -translate-y-1/2 start-3.5 text-slate-400 pointer-events-none"
          />
        </div>

        <div className="flex items-center gap-2 overflow-x-auto pb-1 md:pb-0">
          {[
            { id: 'all', label: 'الكل' },
            { id: 'public', label: 'عام' },
            { id: 'private', label: 'خاص' },
          ].map((btn) => {
            const isSelected = typeFilter === btn.id;
            return (
              <button
                key={btn.id}
                onClick={() => setTypeFilter(btn.id)}
                type="button"
                className={`px-7 py-2.5 rounded-2xl text-xs sm:text-sm font-bold transition-all cursor-pointer whitespace-nowrap shadow-xs ${
                  isSelected
                    ? 'bg-[#00594C] text-white'
                    : 'bg-white dark:bg-slate-900 text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white border border-slate-200/70 dark:border-slate-800'
                }`}
              >
                {btn.label}
              </button>
            );
          })}
        </div>
      </div>

      {isLoading ? (
        <div className="grid grid-cols-1 xl:grid-cols-2 gap-6">
          {[1, 2, 3, 4].map((i) => (
            <div
              key={i}
              className="bg-white dark:bg-slate-900 rounded-3xl p-6 shadow-xs border border-slate-100 dark:border-slate-800 h-64 animate-pulse space-y-4"
            >
              <div className="h-6 w-1/2 bg-slate-100 dark:bg-slate-800 rounded-xl" />
              <div className="h-4 w-1/3 bg-slate-100 dark:bg-slate-800 rounded-xl" />
              <div className="h-14 bg-slate-100 dark:bg-slate-800 rounded-2xl" />
            </div>
          ))}
        </div>
      ) : error && apiGroups.length === 0 ? (
        <div className="p-12 text-center rounded-3xl bg-white dark:bg-slate-900 border border-red-200 shadow-sm space-y-3">
          <AlertCircle size={40} className="text-red-500 mx-auto" />
          <p className="text-sm font-bold text-red-600">حدث خطأ أثناء تحميل المجموعات</p>
          <button
            onClick={() => refetch()}
            className="px-5 py-2 rounded-xl bg-red-600 text-white font-bold text-xs"
          >
            إعادة المحاولة
          </button>
        </div>
      ) : filteredGroups.length === 0 ? (
        <div className="p-16 text-center rounded-3xl bg-white dark:bg-slate-900 border border-dashed border-slate-300 dark:border-slate-800 shadow-xs space-y-2">
          <Users size={36} className="text-slate-300 dark:text-slate-600 mx-auto mb-2" />
          <h3 className="text-base font-bold text-slate-700 dark:text-slate-200">
            لم يتم العثور على أي مجموعات
          </h3>
          <p className="text-xs text-slate-400 max-w-sm mx-auto">
            جرب تغيير معايير البحث أو التصفية لعرض المجموعات المطلوبة.
          </p>
        </div>
      ) : (
        <div className="grid grid-cols-1 xl:grid-cols-2 gap-6">
          {filteredGroups.map((group, idx) => {
            const studentsCount =
              group.currentStudentsCount ?? group.students?.length ?? 5;
            const maxStudents = group.maxStudents || 5;
            const progressPercentage = group.progress ?? (idx % 2 === 0 ? 65 : 70);

            const isStopped =
              group.status === 'متوقف مؤقتاً' ||
              group.status === 'متوقفة' ||
              group.status === 'stopped' ||
              group.status === 'معلقة' ||
              group.status === 'pending';

            let scheduleStr = group.schedule || 'الأحد، الثلاثاء، الخميس - 4:00 م';
            if (group.weeklySchedule && group.weeklySchedule.length > 0) {
              const daysStr = group.weeklySchedule.map((s) => s.day).join('، ');
              const firstTime = group.weeklySchedule[0]?.startTime
                ? formatTimeAr(group.weeklySchedule[0].startTime, true)
                : '4:00 م';
              scheduleStr = `${daysStr} - ${firstTime}`;
            }

            return (
              <div
                key={group.id || idx}
                className="bg-white dark:bg-slate-900 rounded-3xl p-6 shadow-xs border border-slate-100 dark:border-slate-800 hover:shadow-md transition-shadow flex flex-col justify-between space-y-4 text-start"
              >
                <div className="flex items-start justify-between gap-3">
                  <div className="space-y-0.5">
                    <h3 className="text-base sm:text-lg font-black text-slate-900 dark:text-white leading-tight">
                      {group.name}
                    </h3>
                    <p className="text-xs text-slate-400 font-semibold">
                      {group.curriculum || 'تجويد القرآن الكريم'}
                    </p>
                  </div>

                  <div className="flex items-center gap-1.5 shrink-0">
                    {isStopped ? (
                      <span className="px-3.5 py-1 rounded-full text-[11px] font-bold bg-slate-100 text-slate-500 dark:bg-slate-800 dark:text-slate-400">
                        متوقف مؤقتاً
                      </span>
                    ) : (
                      <span className="px-3.5 py-1 rounded-full text-[11px] font-bold bg-[#e8f7f3] text-[#00594C] dark:bg-emerald-950/60 dark:text-emerald-300">
                        نشط
                      </span>
                    )}

                    <button
                      type="button"
                      className="p-1 rounded-lg text-slate-400 hover:text-slate-600 dark:hover:text-slate-200 transition-colors"
                      title="المزيد"
                    >
                      <MoreVertical size={16} />
                    </button>
                  </div>
                </div>

                <div className="grid grid-cols-4 gap-2.5 text-center">
                  <div className="bg-[#f8faf9] dark:bg-slate-800/60 rounded-2xl p-2.5">
                    <span className="text-[11px] text-slate-400 block mb-0.5 font-medium">
                      اللغة
                    </span>
                    <span className="text-xs font-black text-slate-800 dark:text-slate-100 flex items-center justify-center gap-1 truncate">
                      <Globe size={12} className="text-slate-400 shrink-0" />
                      <span>{group.language || 'العربية'}</span>
                    </span>
                  </div>

                  <div className="bg-[#f8faf9] dark:bg-slate-800/60 rounded-2xl p-2.5">
                    <span className="text-[11px] text-slate-400 block mb-0.5 font-medium">
                      الطلاب
                    </span>
                    <span className="text-xs font-black text-slate-800 dark:text-slate-100 flex items-center justify-center gap-1">
                      <Users size={12} className="text-slate-400 shrink-0" />
                      <span>
                        {studentsCount}/{maxStudents}
                      </span>
                    </span>
                  </div>

                  <div className="bg-[#f8faf9] dark:bg-slate-800/60 rounded-2xl p-2.5">
                    <span className="text-[11px] text-slate-400 block mb-0.5 font-medium">
                      النوع
                    </span>
                    <span className="text-xs font-black text-slate-800 dark:text-slate-100 truncate">
                      {group.type === 'خاصة' || group.type === 'خاص' ? 'خاص' : 'عادي'}
                    </span>
                  </div>

                  <div className="bg-[#f8faf9] dark:bg-slate-800/60 rounded-2xl p-2.5">
                    <span className="text-[11px] text-slate-400 block mb-0.5 font-medium">
                      المستوى
                    </span>
                    <span className="text-xs font-black text-slate-800 dark:text-slate-100 truncate">
                      {group.level || 'متوسط'}
                    </span>
                  </div>
                </div>

                <div className="space-y-1.5 pt-1">
                  <div className="flex items-center justify-between text-xs font-bold">
                    <span className="text-slate-400">تقدم المنهج</span>
                    <span className="text-[#00594C] dark:text-emerald-400 font-mono">
                      {progressPercentage}%
                    </span>
                  </div>
                  <div className="w-full h-1.5 bg-slate-100 dark:bg-slate-800 rounded-full overflow-hidden">
                    <div
                      className="h-full bg-[#00594C] rounded-full transition-all duration-500"
                      style={{ width: `${progressPercentage}%` }}
                    />
                  </div>
                </div>

                <div className="flex items-center justify-center gap-1.5 text-xs text-slate-500 dark:text-slate-400 font-semibold py-1">
                  <Clock size={13} className="text-slate-400 shrink-0" />
                  <span>{scheduleStr}</span>
                </div>

                <div className="flex items-center gap-2.5 pt-1">
                  <Link
                    to={`/dashboard/teacher/groups/${group.id}`}
                    className="flex-1 py-3 px-4 bg-[#00594C] hover:bg-[#00473d] text-white rounded-2xl font-bold text-sm text-center shadow-xs hover:shadow-md transition-all cursor-pointer"
                  >
                    عرض التفاصيل
                  </Link>

                  <Link
                    to={`/dashboard/teacher/live?group=${group.id}`}
                    className="py-3 px-5 bg-white dark:bg-slate-800 border border-[#00594C] text-[#00594C] dark:text-emerald-400 hover:bg-[#00594C]/5 rounded-2xl font-bold text-sm flex items-center justify-center gap-2 shadow-2xs transition-all cursor-pointer shrink-0"
                  >
                    <BookOpen size={16} />
                    <span>جلسة</span>
                  </Link>
                </div>
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
}

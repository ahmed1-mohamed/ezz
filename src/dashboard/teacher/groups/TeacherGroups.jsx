import { useState, useMemo } from 'react';
import { useTranslation } from 'react-i18next';
import { useQuery } from '@tanstack/react-query';
import { Link } from 'react-router-dom';
import {
  Users,
  Search,
  Calendar,
  Clock,
  BookOpen,
  GraduationCap,
  Layers,
  ChevronLeft,
  ChevronRight,
  Globe,
  CheckCircle2,
  AlertCircle,
  PauseCircle,
  Clock3,
  Sparkles,
  ArrowRight,
  ArrowLeft,
} from 'lucide-react';
import DashboardLayout from '../../../layouts/DashboardLayout.jsx';
import { roleNavigation } from '@/shared/constants/navigation.js';
import { teacherGroupsApi } from '@/shared/services/api/teacherGroupsApi.js';

/**
 * Formats time from UTC or string to local HH:MM
 */
function formatTime(val) {
  if (!val) return '—';
  if (typeof val === 'string') {
    if (val.includes('T')) {
      const d = new Date(val);
      if (!isNaN(d.getTime())) {
        return d.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
      }
    }
    return val.length > 5 ? val.substring(0, 5) : val;
  }
  return String(val);
}

export default function TeacherGroups() {
  const { t, i18n } = useTranslation();
  const isRtl = i18n.language.startsWith('ar');

  // Filters & State
  const [statusFilter, setStatusFilter] = useState('all'); // 'all' | 'pending' | 'active' | 'stopped' | 'completed'
  const [typeFilter, setTypeFilter] = useState('all'); // 'all' | 'public' | 'private'
  const [searchQuery, setSearchQuery] = useState('');
  const [page, setPage] = useState(1);
  const limit = 10;

  // Query groups
  const {
    data: responseData,
    isLoading,
    isFetching,
    error,
    refetch,
  } = useQuery({
    queryKey: ['teacherGroups', statusFilter, page],
    queryFn: () => teacherGroupsApi.fetchGroupsByStatus(statusFilter, { page, limit }),
    keepPreviousData: true,
  });

  const rawGroups = useMemo(() => {
    const list = responseData?.data || [];
    return Array.isArray(list) ? list : [];
  }, [responseData]);

  const statistics = responseData?.statistics || {
    total: 0,
    pending: 0,
    active: 0,
    stopped: 0,
    completed: 0,
  };

  const pagination = responseData?.pagination || {
    currentPage: 1,
    limit: 10,
    numberOfPages: 1,
    totalCount: rawGroups.length,
  };

  // Filter groups locally by type and search query
  const filteredGroups = useMemo(() => {
    return rawGroups.filter((group) => {
      // Type filter
      if (typeFilter === 'public') {
        const isPublic =
          group.type === 'عامة' ||
          group.type === 'عام' ||
          group.type?.toLowerCase() === 'public';
        if (!isPublic) return false;
      } else if (typeFilter === 'private') {
        const isPrivate =
          group.type === 'خاصة' ||
          group.type === 'خاص' ||
          group.type?.toLowerCase() === 'private';
        if (!isPrivate) return false;
      }

      // Search query
      if (searchQuery.trim()) {
        const q = searchQuery.toLowerCase().trim();
        const nameMatch = group.name?.toLowerCase().includes(q);
        const currMatch = group.curriculum?.toLowerCase().includes(q);
        const levelMatch = group.level?.toLowerCase().includes(q);
        const countryMatch = group.country?.toLowerCase().includes(q);
        return nameMatch || currMatch || levelMatch || countryMatch;
      }

      return true;
    });
  }, [rawGroups, typeFilter, searchQuery]);

  // Handle status tab change
  const handleStatusChange = (newStatus) => {
    setStatusFilter(newStatus);
    setPage(1);
  };

  // Status configuration for the top stat cards
  const statusBoxes = [
    {
      id: 'all',
      label: t('teacher.statusAll', 'الكل'),
      count: statistics.total ?? 0,
      icon: Layers,
      colorClasses: 'from-blue-500/10 to-indigo-500/10 text-blue-600 dark:text-blue-400 border-blue-200 dark:border-blue-900/50',
      activeRing: 'ring-2 ring-blue-500 border-blue-500 bg-blue-50/80 dark:bg-blue-950/40',
    },
    {
      id: 'pending',
      label: t('teacher.statusPending', 'قيد الانتظار'),
      count: statistics.pending ?? 0,
      icon: Clock3,
      colorClasses: 'from-amber-500/10 to-yellow-500/10 text-amber-600 dark:text-amber-400 border-amber-200 dark:border-amber-900/50',
      activeRing: 'ring-2 ring-amber-500 border-amber-500 bg-amber-50/80 dark:bg-amber-950/40',
    },
    {
      id: 'active',
      label: t('teacher.statusActive', 'نشطة'),
      count: statistics.active ?? 0,
      icon: CheckCircle2,
      colorClasses: 'from-emerald-500/10 to-teal-500/10 text-emerald-600 dark:text-emerald-400 border-emerald-200 dark:border-emerald-900/50',
      activeRing: 'ring-2 ring-emerald-500 border-emerald-500 bg-emerald-50/80 dark:bg-emerald-950/40',
    },
    {
      id: 'stopped',
      label: t('teacher.statusStopped', 'متوقفة'),
      count: statistics.stopped ?? 0,
      icon: PauseCircle,
      colorClasses: 'from-rose-500/10 to-red-500/10 text-rose-600 dark:text-rose-400 border-rose-200 dark:border-rose-900/50',
      activeRing: 'ring-2 ring-rose-500 border-rose-500 bg-rose-50/80 dark:bg-rose-950/40',
    },
    {
      id: 'completed',
      label: t('teacher.statusCompleted', 'مكتملة'),
      count: statistics.completed ?? 0,
      icon: GraduationCap,
      colorClasses: 'from-purple-500/10 to-violet-500/10 text-purple-600 dark:text-purple-400 border-purple-200 dark:border-purple-900/50',
      activeRing: 'ring-2 ring-purple-500 border-purple-500 bg-purple-50/80 dark:bg-purple-950/40',
    },
  ];

  // Group status badge helper
  const getStatusBadge = (status) => {
    switch (status) {
      case 'نشطة':
      case 'active':
        return (
          <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-xs font-semibold bg-emerald-500/15 text-emerald-700 dark:bg-emerald-500/20 dark:text-emerald-300 border border-emerald-500/30">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
            {t('teacher.statusActive', 'نشطة')}
          </span>
        );
      case 'معلقة':
      case 'قيد الانتظار':
      case 'pending':
        return (
          <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-xs font-semibold bg-amber-500/15 text-amber-700 dark:bg-amber-500/20 dark:text-amber-300 border border-amber-500/30">
            <span className="w-1.5 h-1.5 rounded-full bg-amber-500" />
            {t('teacher.statusPending', 'قيد الانتظار')}
          </span>
        );
      case 'متوقفة':
      case 'stopped':
        return (
          <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-xs font-semibold bg-rose-500/15 text-rose-700 dark:bg-rose-500/20 dark:text-rose-300 border border-rose-500/30">
            <span className="w-1.5 h-1.5 rounded-full bg-rose-500" />
            {t('teacher.statusStopped', 'متوقفة')}
          </span>
        );
      case 'مكتملة':
      case 'completed':
        return (
          <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-xs font-semibold bg-purple-500/15 text-purple-700 dark:bg-purple-500/20 dark:text-purple-300 border border-purple-500/30">
            <span className="w-1.5 h-1.5 rounded-full bg-purple-500" />
            {t('teacher.statusCompleted', 'مكتملة')}
          </span>
        );
      default:
        return (
          <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-xs font-medium bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300">
            {status || '—'}
          </span>
        );
    }
  };

  return (
    <DashboardLayout
      title={t('teacher.groupsTitle', 'المجموعات الدراسية')}
      role={t('auth.teacher', 'معلم')}
      links={roleNavigation.Teacher}
    >
      <div className="space-y-6 pb-12">
        {/* Header Intro */}
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 rounded-3xl border border-slate-200/80 bg-white/90 p-6 shadow-soft backdrop-blur-xl dark:border-slate-700/60 dark:bg-slate-900/80">
          <div>
            <div className="flex items-center gap-2">
              <span className="inline-flex items-center justify-center p-2 rounded-xl bg-emerald-50 text-emerald-600 dark:bg-emerald-950/50 dark:text-emerald-400">
                <Users size={22} />
              </span>
              <h2 className="text-xl sm:text-2xl font-bold text-slate-900 dark:text-slate-100">
                {t('teacher.groupsTitle', 'المجموعات الدراسية')}
              </h2>
            </div>
            <p className="mt-2 text-sm text-slate-500 dark:text-slate-400">
              {t('teacher.groupsDescription', 'متابعة وإدارة المجموعات الدراسية والطلاب المسجلين والحصص')}
            </p>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={() => refetch()}
              disabled={isFetching}
              className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl border border-slate-200 dark:border-slate-700 text-sm font-semibold text-slate-700 dark:text-slate-300 hover:bg-slate-50 dark:hover:bg-slate-800 transition-all cursor-pointer disabled:opacity-50"
            >
              <Sparkles size={16} className={isFetching ? 'animate-spin' : ''} />
              {t('common.refresh', 'تحديث البيانات')}
            </button>
          </div>
        </div>

        {/* 1. المربعات اللي فوق (Top Statistics Cards) */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-3 sm:gap-4">
          {statusBoxes.map((box) => {
            const Icon = box.icon;
            const isSelected = statusFilter === box.id;
            return (
              <button
                key={box.id}
                onClick={() => handleStatusChange(box.id)}
                type="button"
                className={`relative flex flex-col justify-between p-4 sm:p-5 rounded-2xl border transition-all text-start cursor-pointer group bg-white dark:bg-slate-900 shadow-soft hover:shadow-md hover:-translate-y-0.5 ${
                  isSelected
                    ? box.activeRing
                    : 'border-slate-200/80 dark:border-slate-800 hover:border-slate-300 dark:hover:border-slate-700'
                }`}
              >
                <div className="flex items-center justify-between gap-2">
                  <span className="text-xs sm:text-sm font-semibold text-slate-600 dark:text-slate-400">
                    {box.label}
                  </span>
                  <div className={`p-2 rounded-xl bg-gradient-to-br ${box.colorClasses}`}>
                    <Icon size={18} />
                  </div>
                </div>

                <div className="mt-3 flex items-baseline justify-between">
                  <span className="text-2xl sm:text-3xl font-extrabold text-slate-900 dark:text-white">
                    {box.count}
                  </span>
                  {isSelected && (
                    <span className="text-[11px] font-bold px-2 py-0.5 rounded-full bg-slate-900 text-white dark:bg-white dark:text-slate-900">
                      محدد
                    </span>
                  )}
                </div>
              </button>
            );
          })}
        </div>

        {/* 2. شريط البحث والـ 3 زراير جنب شريط البحث (Search & Group Type Filter) */}
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 p-4 rounded-2xl border border-slate-200/80 bg-white/95 dark:border-slate-800 dark:bg-slate-900/90 shadow-soft">
          {/* Search Bar */}
          <div className="relative flex-1 max-w-md">
            <Search
              size={18}
              className={`absolute top-1/2 -translate-y-1/2 text-slate-400 ${
                isRtl ? 'right-3.5' : 'left-3.5'
              }`}
            />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder={t('teacher.searchGroupsPlaceholder', 'ابحث باسم المجموعة، المنهج، أو المستوى...')}
              className={`w-full py-2.5 rounded-xl border border-slate-200 dark:border-slate-700 bg-slate-50/50 dark:bg-slate-800/50 text-slate-900 dark:text-white text-sm placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-emerald-500/30 focus:border-emerald-500 transition-all ${
                isRtl ? 'pr-10 pl-4' : 'pl-10 pr-4'
              }`}
            />
            {searchQuery && (
              <button
                onClick={() => setSearchQuery('')}
                className={`absolute top-1/2 -translate-y-1/2 text-xs text-slate-400 hover:text-slate-600 dark:hover:text-slate-200 px-2 ${
                  isRtl ? 'left-2' : 'right-2'
                }`}
              >
                مسح
              </button>
            )}
          </div>

          {/* 3 Type Filter Buttons (الكل - عام - خاص) */}
          <div className="flex items-center gap-1.5 p-1 rounded-xl bg-slate-100 dark:bg-slate-800/80 border border-slate-200/60 dark:border-slate-700/60 shrink-0 self-start md:self-auto">
            <button
              onClick={() => setTypeFilter('all')}
              type="button"
              className={`px-4 py-2 rounded-lg text-xs sm:text-sm font-semibold transition-all cursor-pointer ${
                typeFilter === 'all'
                  ? 'bg-white dark:bg-slate-700 text-slate-900 dark:text-white shadow-xs'
                  : 'text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white'
              }`}
            >
              {t('teacher.typeAll', 'الكل')}
            </button>
            <button
              onClick={() => setTypeFilter('public')}
              type="button"
              className={`px-4 py-2 rounded-lg text-xs sm:text-sm font-semibold transition-all cursor-pointer ${
                typeFilter === 'public'
                  ? 'bg-white dark:bg-slate-700 text-emerald-600 dark:text-emerald-400 shadow-xs'
                  : 'text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white'
              }`}
            >
              {t('teacher.typePublic', 'عامة')}
            </button>
            <button
              onClick={() => setTypeFilter('private')}
              type="button"
              className={`px-4 py-2 rounded-lg text-xs sm:text-sm font-semibold transition-all cursor-pointer ${
                typeFilter === 'private'
                  ? 'bg-white dark:bg-slate-700 text-blue-600 dark:text-blue-400 shadow-xs'
                  : 'text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white'
              }`}
            >
              {t('teacher.typePrivate', 'خاصة')}
            </button>
          </div>
        </div>

        {/* 3. قائمة المجموعات (Groups Cards List) */}
        {isLoading ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {[1, 2, 3, 4, 5, 6].map((idx) => (
              <div
                key={idx}
                className="rounded-3xl border border-slate-200/70 bg-white/60 p-6 shadow-soft dark:border-slate-800 dark:bg-slate-900/60 animate-pulse space-y-4"
              >
                <div className="h-6 w-3/4 rounded bg-slate-200 dark:bg-slate-800" />
                <div className="h-4 w-1/2 rounded bg-slate-200 dark:bg-slate-800" />
                <div className="h-2 rounded bg-slate-200 dark:bg-slate-800" />
                <div className="h-10 rounded-xl bg-slate-200 dark:bg-slate-800" />
              </div>
            ))}
          </div>
        ) : error ? (
          <div className="flex flex-col items-center justify-center p-12 rounded-3xl border border-red-200 bg-red-50/50 text-center dark:border-red-900/40 dark:bg-red-950/20">
            <AlertCircle size={44} className="text-red-500 mb-3" />
            <h3 className="text-lg font-bold text-red-900 dark:text-red-200">
              {t('common.errorLoading', 'حدث خطأ أثناء تحميل المجموعات')}
            </h3>
            <p className="mt-1 text-sm text-red-700 dark:text-red-300">
              {error?.message || t('common.tryAgainLater', 'يرجى المحاولة مرة أخرى لاحقاً.')}
            </p>
            <button
              onClick={() => refetch()}
              className="mt-4 px-4 py-2 rounded-xl bg-red-600 text-white text-sm font-semibold hover:bg-red-700 transition-all cursor-pointer"
            >
              {t('common.retry', 'إعادة المحاولة')}
            </button>
          </div>
        ) : filteredGroups.length === 0 ? (
          <div className="flex flex-col items-center justify-center p-16 rounded-3xl border border-dashed border-slate-300 bg-white/70 text-center dark:border-slate-700 dark:bg-slate-900/70 shadow-soft">
            <div className="p-4 rounded-2xl bg-slate-100 text-slate-400 dark:bg-slate-800 mb-3">
              <Users size={40} />
            </div>
            <h3 className="text-lg font-bold text-slate-800 dark:text-slate-200">
              {t('teacher.noGroupsFound', 'لم يتم العثور على أي مجموعات')}
            </h3>
            <p className="mt-1 text-sm text-slate-500 dark:text-slate-400 max-w-md">
              {searchQuery || typeFilter !== 'all' || statusFilter !== 'all'
                ? 'جرب تغيير فلاتر البحث أو التصفية لعرض مجموعات أخرى.'
                : 'لا توجد مجموعات مسندة إليك حالياً في هذا القسم.'}
            </p>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {filteredGroups.map((group) => {
              const studentsCount = group.currentStudentsCount ?? group.students?.length ?? 0;
              const maxStudents = group.maxStudents || 10;
              const fillPercentage = Math.min(100, Math.round((studentsCount / (maxStudents || 1)) * 100));
              const scheduleList = group.weeklySchedule || [];

              return (
                <div
                  key={group.id}
                  className="rounded-3xl border border-slate-200/80 bg-white dark:border-slate-800 dark:bg-slate-900 shadow-soft hover:shadow-lg transition-all duration-300 flex flex-col justify-between overflow-hidden group"
                >
                  <div className="p-5 sm:p-6 space-y-4">
                    {/* Header: Title & Badges */}
                    <div className="flex items-start justify-between gap-3">
                      <div>
                        <div className="flex items-center gap-2 flex-wrap mb-1">
                          {getStatusBadge(group.status)}
                          <span
                            className={`text-[11px] font-bold px-2 py-0.5 rounded-full ${
                              group.type === 'خاصة' || group.type?.toLowerCase() === 'private'
                                ? 'bg-blue-50 text-blue-700 border border-blue-200 dark:bg-blue-950/50 dark:text-blue-300 dark:border-blue-900/40'
                                : 'bg-emerald-50 text-emerald-700 border border-emerald-200 dark:bg-emerald-950/50 dark:text-emerald-300 dark:border-emerald-900/40'
                            }`}
                          >
                            {group.type || t('teacher.typePublic', 'عامة')}
                          </span>
                        </div>
                        <h3 className="text-lg font-bold text-slate-900 dark:text-slate-100 group-hover:text-emerald-600 dark:group-hover:text-emerald-400 transition-colors line-clamp-1">
                          {group.name}
                        </h3>
                      </div>

                      {group.country && (
                        <div className="text-xs font-medium px-2.5 py-1 rounded-xl bg-slate-50 dark:bg-slate-800 text-slate-600 dark:text-slate-300 border border-slate-200/60 dark:border-slate-700/60 shrink-0">
                          {group.country}
                        </div>
                      )}
                    </div>

                    {/* Curriculum & Level */}
                    <div className="space-y-1.5 pt-1">
                      {group.curriculum && (
                        <div className="flex items-center gap-2 text-xs text-slate-600 dark:text-slate-300">
                          <BookOpen size={14} className="text-emerald-500 shrink-0" />
                          <span className="font-semibold text-slate-700 dark:text-slate-200">
                            {t('teacher.curriculum', 'المنهج')}:
                          </span>
                          <span className="truncate">{group.curriculum}</span>
                        </div>
                      )}

                      {group.level && (
                        <div className="flex items-center gap-2 text-xs text-slate-600 dark:text-slate-300">
                          <GraduationCap size={14} className="text-indigo-500 shrink-0" />
                          <span className="font-semibold text-slate-700 dark:text-slate-200">
                            {t('teacher.level', 'المستوى')}:
                          </span>
                          <span className="truncate">{group.level}</span>
                        </div>
                      )}

                      {group.language && (
                        <div className="flex items-center gap-2 text-xs text-slate-600 dark:text-slate-300">
                          <Globe size={14} className="text-teal-500 shrink-0" />
                          <span className="font-semibold text-slate-700 dark:text-slate-200">
                            {t('teacher.language', 'لغة الشرح')}:
                          </span>
                          <span>{group.language}</span>
                        </div>
                      )}
                    </div>

                    {/* Students Count & Progress Bar */}
                    <div className="p-3 rounded-2xl bg-slate-50 dark:bg-slate-800/60 border border-slate-100 dark:border-slate-800/80 space-y-1.5">
                      <div className="flex items-center justify-between text-xs font-semibold">
                        <span className="text-slate-600 dark:text-slate-400">
                          {t('teacher.capacity', 'السعة والطلاب')}:
                        </span>
                        <span className="text-slate-900 dark:text-white font-bold">
                          {studentsCount} / {maxStudents} طلاب
                        </span>
                      </div>
                      <div className="w-full h-2 rounded-full bg-slate-200 dark:bg-slate-700 overflow-hidden">
                        <div
                          className="h-full rounded-full bg-gradient-to-r from-emerald-500 to-teal-500 transition-all duration-500"
                          style={{ width: `${fillPercentage}%` }}
                        />
                      </div>
                    </div>

                    {/* Weekly Schedule */}
                    {scheduleList.length > 0 && (
                      <div className="space-y-1.5 pt-1">
                        <span className="text-xs font-bold text-slate-500 dark:text-slate-400 flex items-center gap-1.5">
                          <Calendar size={13} />
                          {t('teacher.weeklySchedule', 'المواعيد الأسبوعية')}:
                        </span>
                        <div className="flex flex-wrap gap-1.5">
                          {scheduleList.map((item, sIdx) => (
                            <span
                              key={sIdx}
                              className="inline-flex items-center gap-1 px-2.5 py-1 rounded-lg text-[11px] font-semibold bg-emerald-50/80 text-emerald-800 dark:bg-emerald-950/40 dark:text-emerald-300 border border-emerald-200/50 dark:border-emerald-900/40"
                            >
                              <Clock size={11} />
                              {item.day}: {formatTime(item.startTime)} - {formatTime(item.endTime)}
                            </span>
                          ))}
                        </div>
                      </div>
                    )}
                  </div>

                  {/* Card Footer: Action */}
                  <div className="p-4 sm:p-5 pt-0">
                    <Link
                      to={`/dashboard/teacher/groups/${group.id}`}
                      className="w-full flex items-center justify-center gap-2 py-2.5 px-4 rounded-xl bg-slate-900 hover:bg-emerald-600 text-white dark:bg-slate-800 dark:hover:bg-emerald-600 text-sm font-semibold transition-all duration-200 shadow-xs hover:shadow-md cursor-pointer"
                    >
                      <span>{t('teacher.viewGroupDetails', 'عرض تفاصيل المجموعة')}</span>
                      {isRtl ? <ArrowLeft size={16} /> : <ArrowRight size={16} />}
                    </Link>
                  </div>
                </div>
              );
            })}
          </div>
        )}

        {/* 4. Pagination */}
        {pagination.numberOfPages > 1 && (
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4 p-4 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200/80 dark:border-slate-800 shadow-soft">
            <span className="text-xs sm:text-sm text-slate-500 dark:text-slate-400">
              صفحة <span className="font-bold text-slate-900 dark:text-white">{page}</span> من{' '}
              <span className="font-bold text-slate-900 dark:text-white">{pagination.numberOfPages}</span>{' '}
              (إجمالي {pagination.totalCount || rawGroups.length} مجموعة)
            </span>

            <div className="flex items-center gap-2">
              <button
                onClick={() => setPage((p) => Math.max(1, p - 1))}
                disabled={page <= 1}
                className="p-2 rounded-xl border border-slate-200 dark:border-slate-700 text-slate-600 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800 disabled:opacity-40 disabled:cursor-not-allowed cursor-pointer transition-colors"
                title={t('common.previous', 'السابق')}
              >
                {isRtl ? <ChevronRight size={18} /> : <ChevronLeft size={18} />}
              </button>

              {Array.from({ length: pagination.numberOfPages }, (_, i) => i + 1)
                .filter((pNum) => pNum === 1 || pNum === pagination.numberOfPages || Math.abs(pNum - page) <= 1)
                .map((pNum, idx, arr) => {
                  const prev = arr[idx - 1];
                  const showEllipsis = prev && pNum - prev > 1;
                  return (
                    <div key={pNum} className="flex items-center gap-1">
                      {showEllipsis && <span className="px-1 text-slate-400">...</span>}
                      <button
                        onClick={() => setPage(pNum)}
                        className={`w-9 h-9 rounded-xl text-sm font-semibold transition-all cursor-pointer ${
                          page === pNum
                            ? 'bg-emerald-600 text-white shadow-xs'
                            : 'border border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800'
                        }`}
                      >
                        {pNum}
                      </button>
                    </div>
                  );
                })}

              <button
                onClick={() => setPage((p) => Math.min(pagination.numberOfPages, p + 1))}
                disabled={page >= pagination.numberOfPages}
                className="p-2 rounded-xl border border-slate-200 dark:border-slate-700 text-slate-600 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800 disabled:opacity-40 disabled:cursor-not-allowed cursor-pointer transition-colors"
                title={t('common.next', 'التالي')}
              >
                {isRtl ? <ChevronLeft size={18} /> : <ChevronRight size={18} />}
              </button>
            </div>
          </div>
        )}
      </div>
    </DashboardLayout>
  );
}

import { useState, useMemo } from 'react';
import { useTranslation } from 'react-i18next';
import { useQuery } from '@tanstack/react-query';
import {
  MessageSquareWarning,
  Plus,
  Search,
   CheckCircle2,
  Clock3,
  XCircle,
  AlertTriangle,
  Lightbulb,
  CalendarClock,
  Sparkles,
  Calendar,
  Layers,
  Eye,
  ChevronLeft,
  ChevronRight,
} from 'lucide-react';
import { teacherComplaintsApi } from '@/shared/services/api/teacherComplaintsApi.js';
import TeacherNewComplaintModal from './TeacherNewComplaintModal.jsx';
import TeacherComplaintDetailsModal from './TeacherComplaintDetailsModal.jsx';

function formatDate(isoString, isRtl) {
  if (!isoString) return '—';
  const d = new Date(isoString);
  if (isNaN(d.getTime())) return isoString;
  return d.toLocaleDateString(isRtl ? 'ar-EG' : 'en-US', {
    year: 'numeric',
    month: 'short',
    day: 'numeric',
    hour: '2-digit',
    minute: '2-digit',
  });
}

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

export default function TeacherComplaints() {
  const { t, i18n } = useTranslation();
  const isRtl = i18n.language.startsWith('ar');

  const [statusFilter, setStatusFilter] = useState('all');
  const [typeFilter, setTypeFilter] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');

  const [isNewModalOpen, setIsNewModalOpen] = useState(false);
  const [selectedItemForDetails, setSelectedItemForDetails] = useState(null);

  const {
    data: responseData,
    isLoading,
    isFetching,
    error,
    refetch,
  } = useQuery({
    queryKey: ['teacherComplaints'],
    queryFn: () => teacherComplaintsApi.fetchComplaints(),
  });

  const rawList = useMemo(() => {
    const list = responseData?.data || (Array.isArray(responseData) ? responseData : []);
    return Array.isArray(list) ? list : [];
  }, [responseData]);

  const filteredList = useMemo(() => {
    return rawList.filter((item) => {
      const itemStatus = (item.status || '').toLowerCase();
      if (statusFilter === 'pending') {
        const isPending =
          itemStatus === 'pending' ||
          itemStatus.includes('انتظار') ||
          itemStatus.includes('مراجعة') ||
          itemStatus.includes('معلقة');
        if (!isPending) return false;
      } else if (statusFilter === 'resolved') {
        const isResolved =
          itemStatus === 'resolved' ||
          itemStatus.includes('محلول') ||
          itemStatus.includes('تم الحل') ||
          itemStatus.includes('مكتمل');
        if (!isResolved) return false;
      } else if (statusFilter === 'rejected') {
        const isRejected =
          itemStatus === 'rejected' ||
          itemStatus.includes('مرفوض');
        if (!isRejected) return false;
      }

      if (typeFilter !== 'all') {
        const itemType = (item.type || '').toLowerCase();
        if (typeFilter === 'reschedule') {
          const isResched =
            itemType === 'reschedule_request' ||
            itemType === 'reschedule' ||
            itemType === 'postpone' ||
            itemType.includes('تأجيل');
          if (!isResched) return false;
        } else if (typeFilter === 'complaint') {
          const isComplaint = itemType === 'complaint' || itemType.includes('شكوى');
          if (!isComplaint) return false;
        } else if (typeFilter === 'suggestion') {
          const isSuggestion = itemType === 'suggestion' || itemType.includes('مقترح');
          if (!isSuggestion) return false;
        } else if (item.type !== typeFilter) {
          return false;
        }
      }

      if (searchQuery.trim()) {
        const q = searchQuery.toLowerCase().trim();
        const titleMatch = item.title?.toLowerCase().includes(q);
        const detailsMatch = item.details?.toLowerCase().includes(q);
        const groupMatch = typeof item.group === 'string'
          ? item.group.toLowerCase().includes(q)
          : item.group?.name?.toLowerCase().includes(q);
        return titleMatch || detailsMatch || groupMatch;
      }

      return true;
    });
  }, [rawList, statusFilter, typeFilter, searchQuery]);

  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 6;

  const serverTotalPages =
    responseData?.pagination?.numberOfPages ||
    responseData?.pagination?.totalPages ||
    responseData?.totalPages;

  const totalPages = useMemo(() => {
    if (serverTotalPages && serverTotalPages > 0) return serverTotalPages;
    return Math.max(1, Math.ceil(filteredList.length / itemsPerPage));
  }, [serverTotalPages, filteredList.length, itemsPerPage]);

  const paginatedList = useMemo(() => {
    if (serverTotalPages && serverTotalPages > 1) return filteredList;
    const start = (currentPage - 1) * itemsPerPage;
    return filteredList.slice(start, start + itemsPerPage);
  }, [filteredList, currentPage, itemsPerPage, serverTotalPages]);

  const getTypeBadge = (type) => {
    if (type === 'reschedule_request' || type === 'reschedule' || type === 'postpone') {
      return (
        <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-xs font-bold bg-amber-50 text-amber-700 dark:bg-amber-950/40 dark:text-amber-300 border border-amber-200/60 dark:border-amber-900/40">
          <CalendarClock size={12} />
          <span>{t('teacher.typeReschedule', 'طلب تأجيل')}</span>
        </span>
      );
    }
    if (type === 'suggestion') {
      return (
        <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-xs font-bold bg-sky-50 text-sky-700 dark:bg-sky-950/40 dark:text-sky-300 border border-sky-200/60 dark:border-sky-900/40">
          <Lightbulb size={12} />
          <span>{t('teacher.typeSuggestion', 'مقترح')}</span>
        </span>
      );
    }
    return (
      <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-xs font-bold bg-rose-50 text-rose-700 dark:bg-rose-950/40 dark:text-rose-300 border border-rose-200/60 dark:border-rose-900/40">
        <AlertTriangle size={12} />
        <span>{t('teacher.typeComplaint', 'شكوى')}</span>
      </span>
    );
  };

  const getStatusBadge = (status) => {
    switch (status) {
      case 'resolved':
      case 'محلولة':
      case 'تم الحل':
        return (
          <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-xs font-bold bg-emerald-50 text-emerald-700 dark:bg-emerald-950/40 dark:text-emerald-300 border border-emerald-200/60 dark:border-emerald-900/40">
            <CheckCircle2 size={12} />
            <span>{t('teacher.statusResolved', 'محلولة')}</span>
          </span>
        );
      case 'rejected':
      case 'مرفوضة':
        return (
          <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-xs font-bold bg-rose-50 text-rose-700 dark:bg-rose-950/40 dark:text-rose-300 border border-rose-200/60 dark:border-rose-900/40">
            <XCircle size={12} />
            <span>{t('teacher.statusRejected', 'مرفوضة')}</span>
          </span>
        );
      default:
        return (
          <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-xs font-bold bg-amber-50 text-amber-700 dark:bg-amber-950/40 dark:text-amber-300 border border-amber-200/60 dark:border-amber-900/40">
            <Clock3 size={12} />
            <span>{t('teacher.statusPending', 'قيد المراجعة')}</span>
          </span>
        );
    }
  };

  return (
    <div className="space-y-6 max-w-7xl mx-auto pb-12" dir={isRtl ? 'rtl' : 'ltr'}>
      <div className="space-y-6">
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 rounded-3xl border border-slate-200/80 bg-white/90 p-6 shadow-soft backdrop-blur-xl dark:border-slate-700/60 dark:bg-slate-900/80">
          <div>
            <div className="flex items-center gap-2">
              <span className="inline-flex items-center justify-center p-2 rounded-xl bg-emerald-50 text-emerald-600 dark:bg-emerald-950/50 dark:text-emerald-400">
                <MessageSquareWarning size={22} />
              </span>
              <h2 className="text-xl sm:text-2xl font-bold text-slate-900 dark:text-slate-100">
                {t('teacher.complaintsTitle', 'الشكاوى والمقترحات')}
              </h2>
            </div>
            <p className="mt-2 text-sm text-slate-500 dark:text-slate-400">
              {t('teacher.complaintsDescription', 'تقديم ومتابعة الشكاوى والمقترحات وطلبات تأجيل الحصص')}
            </p>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={() => refetch()}
              disabled={isFetching}
              className="p-2.5 rounded-xl border border-slate-200 dark:border-slate-700 text-slate-600 dark:text-slate-300 hover:bg-slate-50 dark:hover:bg-slate-800 transition-colors cursor-pointer disabled:opacity-50"
              title="تحديث البيانات"
            >
              <Sparkles size={16} className={isFetching ? 'animate-spin' : ''} />
            </button>

            <button
              onClick={() => setIsNewModalOpen(true)}
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white text-sm font-bold shadow-md hover:shadow-lg transition-all cursor-pointer"
            >
              <Plus size={18} />
              <span>{t('teacher.newSubmission', 'تقديم طلب جديد')}</span>
            </button>
          </div>
        </div>

        <div className="flex items-center gap-2 border-b border-slate-200/80 dark:border-slate-800 pb-2 overflow-x-auto">
          {[
            { id: 'all', label: t('teacher.statusAll', 'الكل') },
            { id: 'pending', label: t('teacher.statusPending', 'قيد المراجعة') },
            { id: 'resolved', label: t('teacher.statusResolved', 'محلولة') },
            { id: 'rejected', label: t('teacher.statusRejected', 'مرفوضة') },
          ].map((tab) => {
            const isSelected = statusFilter === tab.id;
            return (
              <button
                key={tab.id}
                onClick={() => setStatusFilter(tab.id)}
                type="button"
                className={`px-4 py-2 rounded-xl text-sm font-bold transition-all cursor-pointer whitespace-nowrap ${
                  isSelected
                    ? 'bg-slate-900 text-white dark:bg-white dark:text-slate-900 shadow-sm'
                    : 'text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white hover:bg-slate-100 dark:hover:bg-slate-800/60'
                }`}
              >
                {tab.label}
              </button>
            );
          })}
        </div>

        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 p-4 rounded-2xl border border-slate-200/80 bg-white/95 dark:border-slate-800 dark:bg-slate-900/90 shadow-soft">
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
              placeholder="ابحث بالعنوان أو التفاصيل..."
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

          <div className="flex items-center gap-1.5 p-1 rounded-xl bg-slate-100 dark:bg-slate-800/80 border border-slate-200/60 dark:border-slate-700/60 shrink-0 self-start md:self-auto overflow-x-auto max-w-full">
            <button
              onClick={() => setTypeFilter('all')}
              type="button"
              className={`px-3.5 py-1.5 rounded-lg text-xs font-bold transition-all cursor-pointer whitespace-nowrap ${
                typeFilter === 'all'
                  ? 'bg-white dark:bg-slate-700 text-slate-900 dark:text-white shadow-xs'
                  : 'text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white'
              }`}
            >
              {t('teacher.typeAll', 'الكل')}
            </button>
            <button
              onClick={() => setTypeFilter('complaint')}
              type="button"
              className={`px-3.5 py-1.5 rounded-lg text-xs font-bold transition-all cursor-pointer whitespace-nowrap ${
                typeFilter === 'complaint'
                  ? 'bg-white dark:bg-slate-700 text-rose-600 dark:text-rose-400 shadow-xs'
                  : 'text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white'
              }`}
            >
              {t('teacher.typeComplaint', 'شكوى')}
            </button>
            <button
              onClick={() => setTypeFilter('suggestion')}
              type="button"
              className={`px-3.5 py-1.5 rounded-lg text-xs font-bold transition-all cursor-pointer whitespace-nowrap ${
                typeFilter === 'suggestion'
                  ? 'bg-white dark:bg-slate-700 text-sky-600 dark:text-sky-400 shadow-xs'
                  : 'text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white'
              }`}
            >
              {t('teacher.typeSuggestion', 'مقترح')}
            </button>
            <button
              onClick={() => setTypeFilter('reschedule')}
              type="button"
              className={`px-3.5 py-1.5 rounded-lg text-xs font-bold transition-all cursor-pointer whitespace-nowrap ${
                typeFilter === 'reschedule'
                  ? 'bg-white dark:bg-slate-700 text-amber-600 dark:text-amber-400 shadow-xs'
                  : 'text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white'
              }`}
            >
              {t('teacher.typeReschedule', 'طلبات تأجيل')}
            </button>
          </div>
        </div>

        {isLoading ? (
          <div className="space-y-4">
            {[1, 2, 3].map((i) => (
              <div
                key={i}
                className="h-32 rounded-3xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 p-6 animate-pulse"
              />
            ))}
          </div>
        ) : error ? (
          <div className="flex flex-col items-center justify-center p-12 rounded-3xl border border-red-200 bg-red-50/50 text-center dark:border-red-900/40 dark:bg-red-950/20">
            <AlertTriangle size={44} className="text-red-500 mb-3" />
            <h3 className="text-lg font-bold text-red-900 dark:text-red-200">
              حدث خطأ أثناء تحميل الشكاوى والمقترحات
            </h3>
            <p className="mt-1 text-sm text-red-700 dark:text-red-300">
              {error?.message || 'يرجى المحاولة مرة أخرى لاحقاً.'}
            </p>
            <button
              onClick={() => refetch()}
              className="mt-4 px-4 py-2 rounded-xl bg-red-600 text-white text-sm font-semibold hover:bg-red-700 transition-all cursor-pointer"
            >
              إعادة المحاولة
            </button>
          </div>
        ) : filteredList.length === 0 ? (
          <div className="flex flex-col items-center justify-center p-16 rounded-3xl border border-dashed border-slate-300 bg-white/70 text-center dark:border-slate-700 dark:bg-slate-900/70 shadow-soft">
            <div className="p-4 rounded-2xl bg-slate-100 text-slate-400 dark:bg-slate-800 mb-3">
              <MessageSquareWarning size={40} />
            </div>
            <h3 className="text-lg font-bold text-slate-800 dark:text-slate-200">
              {t('teacher.noComplaints', 'لا توجد شكاوى أو مقترحات')}
            </h3>
            <p className="mt-1 text-sm text-slate-500 dark:text-slate-400 max-w-md">
              {searchQuery || typeFilter !== 'all' || statusFilter !== 'all'
                ? t('teacher.noComplaintsMatch', 'لم يتم العثور على أي عناصر مطابقة للتصفية الحالية.')
                : 'يمكنك تقديم شكوى، مقترح، أو طلب تأجيل حصة عبر زر "تقديم طلب جديد" بالأعلى.'}
            </p>
            <button
              onClick={() => setIsNewModalOpen(true)}
              className="mt-5 inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-emerald-600 text-white text-sm font-bold shadow-md hover:bg-emerald-700 transition-all cursor-pointer"
            >
              <Plus size={16} />
              <span>{t('teacher.newSubmission', 'تقديم طلب جديد')}</span>
            </button>
          </div>
        ) : (
          <div className="space-y-4">
            {paginatedList.map((item) => {
              const isReschedule =
                item.type === 'reschedule_request' ||
                item.type === 'reschedule' ||
                item.type === 'postpone';

              return (
                <div
                  key={item.id}
                  className="rounded-3xl border border-slate-200/80 bg-white dark:border-slate-800 dark:bg-slate-900 shadow-soft hover:shadow-md transition-all duration-200 p-5 sm:p-6 space-y-4 text-start"
                >
                  <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-3">
                    <div className="space-y-1.5 flex-1 min-w-0">
                      <div className="flex items-center gap-2 flex-wrap">
                        {getTypeBadge(item.type)}
                        {getStatusBadge(item.status)}
                        {item.createdAt && (
                          <span className="text-xs text-slate-400 flex items-center gap-1">
                            <Calendar size={12} />
                            {formatDate(item.createdAt, isRtl)}
                          </span>
                        )}
                      </div>
                      <h3 className="text-base sm:text-lg font-bold text-slate-900 dark:text-white break-words">
                        {item.title}
                      </h3>
                    </div>

                    <button
                      onClick={() => setSelectedItemForDetails(item)}
                      className="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl bg-slate-100 hover:bg-slate-200 dark:bg-slate-800 dark:hover:bg-slate-700 text-xs font-bold text-slate-800 dark:text-slate-200 transition-colors shrink-0 cursor-pointer self-start sm:self-auto"
                    >
                      <Eye size={14} />
                      <span>{t('teacher.viewComplaintDetails', 'عرض التفاصيل')}</span>
                    </button>
                  </div>

                  <p className="text-sm text-slate-600 dark:text-slate-300 line-clamp-2 leading-relaxed">
                    {item.details}
                  </p>

                  {isReschedule && (
                    <div className="p-3 rounded-2xl bg-amber-50/70 dark:bg-amber-950/20 border border-amber-200/60 dark:border-amber-900/40 flex flex-wrap items-center gap-x-5 gap-y-2 text-xs">
                      {item.group && (
                        <span className="flex items-center gap-1 text-slate-700 dark:text-slate-300">
                          <Layers size={13} className="text-amber-600" />
                          <span className="font-semibold text-slate-500">المجموعة:</span>{' '}
                          <span className="font-bold">
                            {typeof item.group === 'string' ? item.group : item.group.name}
                          </span>
                        </span>
                      )}

                      {item.session && (
                        <span className="flex items-center gap-1 text-slate-700 dark:text-slate-300">
                          <Calendar size={13} className="text-amber-600" />
                          <span className="font-semibold text-slate-500">الحصة:</span>{' '}
                          <span className="font-bold">
                            {item.session.title || `حصة ${item.session.sessionNumber || ''}`}
                          </span>
                        </span>
                      )}

                      {item.proposedNewDate && (
                        <span className="flex items-center gap-1 text-amber-800 dark:text-amber-300 font-bold">
                          <CalendarClock size={13} />
                          <span>الموعد المقترح:</span> {item.proposedNewDate}{' '}
                          {item.proposedStartTime && (
                            <span className="font-mono">
                              ({formatTime(item.proposedStartTime)} - {formatTime(item.proposedEndTime)})
                            </span>
                          )}
                        </span>
                      )}
                    </div>
                  )}

                  {item.notes && (
                    <div className="p-3 rounded-xl bg-indigo-50/60 dark:bg-indigo-950/20 border border-indigo-200/50 dark:border-indigo-900/30 text-xs text-indigo-900 dark:text-indigo-200 flex items-center gap-2">
                      <span className="font-bold shrink-0">رد الإدارة:</span>
                      <span className="truncate">{item.notes}</span>
                    </div>
                  )}
                </div>
              );
            })}

            <div className="flex flex-col sm:flex-row items-center justify-between pt-5 border-t border-slate-200/80 dark:border-slate-800 text-xs gap-3">
              <span className="text-slate-500 dark:text-slate-400 font-semibold">
                عرض صفحة {currentPage} من {totalPages} (إجمالي {filteredList.length} طلب)
              </span>
              <div className="flex items-center gap-1.5">
                <button
                  type="button"
                  onClick={() => setCurrentPage((p) => Math.max(1, p - 1))}
                  disabled={currentPage <= 1}
                  className="p-2 rounded-xl border border-slate-200 dark:border-slate-700 text-slate-600 dark:text-slate-300 hover:bg-slate-50 dark:hover:bg-slate-800 disabled:opacity-40 cursor-pointer"
                  title="الصفحة السابقة"
                >
                  <ChevronRight size={16} />
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
                  title="الصفحة التالية"
                >
                  <ChevronLeft size={16} />
                </button>
              </div>
            </div>
          </div>
        )}

        {isNewModalOpen && (
          <TeacherNewComplaintModal onClose={() => setIsNewModalOpen(false)} />
        )}

        {selectedItemForDetails && (
          <TeacherComplaintDetailsModal
            item={selectedItemForDetails}
            onClose={() => setSelectedItemForDetails(null)}
          />
        )}
      </div>
    </div>
  );
}

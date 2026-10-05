import { useState, useMemo } from 'react'
import { useTranslation } from 'react-i18next'
import { useQuery, useMutation, useQueryClient, keepPreviousData } from '@tanstack/react-query'
import { MessageSquareWarning, ChevronRight, ChevronLeft } from 'lucide-react'
import { complaintsApi } from '@/shared/services/api/complaintsApi'
import { showDeleteConfirm, showNotesPrompt, showSuccessToast, showErrorToast } from '@/shared/utils/sweetAlert'
import ComplaintsStats from './components/ComplaintsStats'
import ComplaintsTypeFilter from './components/ComplaintsTypeFilter'
import ComplaintCard from './components/ComplaintCard'

const PAGE_LIMIT = 10
const STALE_TIME_MS = 60 * 1000
const CONFIRM_GREEN = '#059669'
const CONFIRM_RED = '#e11d48'

export default function AdminComplaints() {
  const { t, i18n } = useTranslation()
  const isRtl = i18n.language.startsWith('ar')
  const queryClient = useQueryClient()

  const [activeTab, setActiveTab] = useState('all')
  const [activeType, setActiveType] = useState('')
  const [currentPage, setCurrentPage] = useState(1)

  const handleSelectTab = (tabId) => {
    setActiveTab(tabId)
    setCurrentPage(1)
  }

  const handleSelectType = (type) => {
    setActiveType(type)
    setCurrentPage(1)
  }

  const {
    data: listData,
    isLoading: isListLoading,
    isFetching,
    isError: isListError,
    error: listError,
  } = useQuery({
    queryKey: ['complaints', activeTab, activeType, currentPage],
    // `type` is omitted by the API layer when empty, the backend rejects empty values
    queryFn: () => complaintsApi.fetchComplaints({
      status: activeTab,
      type: activeType || undefined,
      page: currentPage,
      limit: PAGE_LIMIT,
    }),
    staleTime: STALE_TIME_MS,
    placeholderData: keepPreviousData,
  })

  const { data: statsData } = useQuery({
    queryKey: ['complaintsStats'],
    queryFn: () => complaintsApi.fetchComplaints({ status: 'all', page: 1, limit: 1 }),
    staleTime: STALE_TIME_MS,
  })

  const statistics = statsData?.statistics || listData?.statistics || null
  const items = useMemo(() => (Array.isArray(listData?.data) ? listData.data : []), [listData])
  const pagination = listData?.pagination
  const totalPages = pagination?.numberOfPages ?? 1
  const totalItems = pagination?.totalCount ?? items.length
  const isPaginationDimmed = totalPages <= 1
  const indexOfFirstItem = totalItems > 0 ? (currentPage - 1) * PAGE_LIMIT + 1 : 0
  const indexOfLastItem = totalItems > 0 ? Math.min(currentPage * PAGE_LIMIT, totalItems) : 0

  const refreshData = () => {
    queryClient.invalidateQueries({ queryKey: ['complaints'] })
    queryClient.invalidateQueries({ queryKey: ['complaintsStats'] })
    queryClient.invalidateQueries({ queryKey: ['complaintDetails'] })
  }

  const getErrorText = (err, fallback) => err?.response?.data?.message || fallback

  const deleteMutation = useMutation({
    mutationFn: complaintsApi.deleteComplaint,
    onSuccess: () => {
      refreshData()
      showSuccessToast(t('adminDashboard.complaints.deleteSuccess', 'تم الحذف بنجاح'), isRtl)
    },
    onError: (err) => showErrorToast(getErrorText(err, t('adminDashboard.complaints.actionFailed', 'فشلت العملية')), isRtl),
  })

  const statusMutation = useMutation({
    mutationFn: ({ action, id, notes }) => complaintsApi[action]({ id, notes }),
    onSuccess: () => {
      refreshData()
      showSuccessToast(t('adminDashboard.complaints.updateSuccess', 'تم تحديث الحالة بنجاح'), isRtl)
    },
    onError: (err) => showErrorToast(getErrorText(err, t('adminDashboard.complaints.actionFailed', 'فشلت العملية')), isRtl),
  })

  const handleDelete = async (item) => {
    const isConfirmed = await showDeleteConfirm(isRtl, item.title)
    if (!isConfirmed) return
    deleteMutation.mutate(item.id || item._id)
  }

  const handleResolve = async (item) => {
    const isSuggestion = item.type === 'suggestion'
    const notes = await showNotesPrompt({
      isRtl,
      title: isSuggestion
        ? t('adminDashboard.complaints.acceptTitle', 'قبول المقترح')
        : t('adminDashboard.complaints.resolveTitle', 'تحديد الشكوى كمحلولة'),
      confirmText: isSuggestion
        ? t('adminDashboard.complaints.accept', 'قبول المقترح')
        : t('adminDashboard.complaints.markResolved', 'تحديد كمحلولة'),
      confirmColor: CONFIRM_GREEN,
    })
    if (!notes) return
    statusMutation.mutate({
      action: isSuggestion ? 'acceptSuggestion' : 'resolveComplaint',
      id: item.id || item._id,
      notes,
    })
  }

  const handleReject = async (item) => {
    const notes = await showNotesPrompt({
      isRtl,
      title: t('adminDashboard.complaints.rejectTitle', 'رفض الطلب'),
      confirmText: t('adminDashboard.complaints.reject', 'رفض'),
      confirmColor: CONFIRM_RED,
    })
    if (!notes) return
    statusMutation.mutate({ action: 'rejectComplaint', id: item.id || item._id, notes })
  }

  const errorMessage = isListError
    ? getErrorText(listError, t('adminDashboard.complaints.errorLoading', 'حدث خطأ أثناء تحميل الشكاوى والمقترحات'))
    : null

  return (
    <div className="space-y-6 sm:space-y-8 animate-fadeIn p-1 md:p-6" dir={isRtl ? 'rtl' : 'ltr'}>
      <div className="text-start">
        <h1 className="text-2xl sm:text-3xl font-black text-slate-800 dark:text-white flex items-center gap-3">
          <div className="p-2.5 bg-[#005953]/10 dark:bg-[#005953]/20 rounded-2xl text-[#005953] dark:text-brand-400">
            <MessageSquareWarning size={24} />
          </div>
          {t('adminDashboard.complaints.title', 'الشكاوى والمقترحات')}
          {isFetching && <div className="w-5 h-5 ms-2 border-2 border-[#005953]/30 border-t-[#005953] rounded-full animate-spin" />}
        </h1>
        <p className="text-sm text-slate-400 dark:text-slate-500 mt-1">
          {t('adminDashboard.complaints.subtitle', 'منارة العز أكاديمي · لوحة الإدارة')}
        </p>
      </div>

      {errorMessage && (
        <div className="bg-rose-50 dark:bg-rose-900/20 text-rose-600 dark:text-rose-400 p-4 rounded-2xl text-sm font-bold border border-rose-200 dark:border-rose-900/50">
          {errorMessage}
        </div>
      )}

      <ComplaintsStats
        statistics={statistics}
        activeTab={activeTab}
        onSelectTab={handleSelectTab}
        isLoading={isListLoading}
        t={t}
      />

      <ComplaintsTypeFilter activeType={activeType} onSelectType={handleSelectType} t={t} />

      <div className="space-y-4 sm:space-y-6">
        {isListLoading ? (
          <div className="bg-white dark:bg-slate-900 rounded-3xl border border-slate-100 dark:border-slate-800 p-12 text-center space-y-4 shadow-soft">
            <MessageSquareWarning className="mx-auto w-8 h-8 text-slate-300 dark:text-slate-600 animate-pulse" />
            <p className="text-sm font-bold text-slate-500">{t('adminDashboard.complaints.loading', 'جاري التحميل...')}</p>
          </div>
        ) : items.length === 0 ? (
          <div className="bg-white dark:bg-slate-900 rounded-3xl border border-slate-100 dark:border-slate-800 p-12 text-center space-y-4 shadow-soft">
            <MessageSquareWarning className="mx-auto w-12 h-12 text-slate-200 dark:text-slate-700" />
            <h3 className="text-base font-bold text-slate-600 dark:text-slate-400">
              {t('adminDashboard.complaints.noItems', 'لا توجد شكاوى أو مقترحات')}
            </h3>
          </div>
        ) : (
          items.map((item) => (
            <ComplaintCard
              key={item.id || item._id}
              item={item}
              isRtl={isRtl}
              t={t}
              onDelete={handleDelete}
              onResolve={handleResolve}
              onReject={handleReject}
            />
          ))
        )}
      </div>

      <div
        className={`flex flex-col sm:flex-row items-center justify-between gap-4 p-5 bg-white dark:bg-slate-900 border border-slate-100 dark:border-slate-800 rounded-3xl shadow-soft mt-6 transition-opacity duration-300 ${isPaginationDimmed ? 'opacity-40 pointer-events-none select-none' : ''}`}
      >
        <div className="text-xs text-slate-400 dark:text-slate-500 font-bold">
          {t('adminDashboard.complaints.pagination.showing', 'عرض')}{' '}
          <span className="font-extrabold text-slate-700 dark:text-slate-200">{indexOfFirstItem}</span>{' '}
          {t('adminDashboard.complaints.pagination.to', 'إلى')}{' '}
          <span className="font-extrabold text-slate-700 dark:text-slate-200">{indexOfLastItem}</span>{' '}
          {t('adminDashboard.complaints.pagination.of', 'من أصل')}{' '}
          <span className="font-extrabold text-slate-700 dark:text-slate-200">{totalItems}</span>
        </div>

        <div className="flex items-center gap-2">
          <button
            type="button"
            onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
            disabled={currentPage === 1 || isPaginationDimmed}
            className="flex items-center gap-1.5 px-4 py-2 rounded-xl text-xs font-semibold border border-slate-100 dark:border-slate-800 bg-white hover:bg-slate-50 dark:bg-slate-900 dark:hover:bg-slate-800 text-slate-700 dark:text-slate-300 disabled:opacity-40 disabled:cursor-not-allowed transition-all cursor-pointer"
          >
            {isRtl ? <ChevronRight size={14} /> : <ChevronLeft size={14} />}
          </button>

          <span className="px-3 py-2 rounded-xl text-xs font-bold border border-slate-100 dark:border-slate-800 bg-white dark:bg-slate-900 text-slate-700 dark:text-slate-300 min-w-[72px] text-center">
            {currentPage} / {totalPages}
          </span>

          <button
            type="button"
            onClick={() => setCurrentPage((prev) => Math.min(prev + 1, totalPages))}
            disabled={currentPage === totalPages || isPaginationDimmed}
            className="flex items-center gap-1.5 px-4 py-2 rounded-xl text-xs font-semibold border border-slate-100 dark:border-slate-800 bg-white hover:bg-slate-50 dark:bg-slate-900 dark:hover:bg-slate-800 text-slate-700 dark:text-slate-300 disabled:opacity-40 disabled:cursor-not-allowed transition-all cursor-pointer"
          >
            {isRtl ? <ChevronLeft size={14} /> : <ChevronRight size={14} />}
          </button>
        </div>
      </div>
    </div>
  )
}

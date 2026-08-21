import { useState, useMemo } from 'react'
import { useTranslation } from 'react-i18next'
import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query'
import { MessageSquare, Search, X, ChevronRight, ChevronLeft } from 'lucide-react'
import { messagesApi } from '@/shared/services/api/messagesApi'
import { showDeleteConfirm } from '@/shared/utils/sweetAlert'
import MessagesStats from './components/MessagesStats'
import MessageCard from './components/MessageCard'

const TAB_FETCHERS = {
  all: (params) => messagesApi.fetchAllMessages(params),
  unread: (params) => messagesApi.fetchUnreadMessages(params),
  read: (params) => messagesApi.fetchReadMessages(params),
}

const getPaginationItems = (currentPage, totalPages) => {
  if (totalPages <= 7) {
    return Array.from({ length: totalPages }, (_, i) => i + 1)
  }
  if (currentPage <= 4) {
    return [1, 2, 3, 4, 5, '...', totalPages]
  }
  if (currentPage >= totalPages - 3) {
    return [1, '...', totalPages - 4, totalPages - 3, totalPages - 2, totalPages - 1, totalPages]
  }
  return [1, '...', currentPage - 1, currentPage, currentPage + 1, '...', totalPages]
}

export default function AdminMessages() {
  const { t, i18n } = useTranslation()
  const isRtl = i18n.language === 'ar'
  const queryClient = useQueryClient()

  const [activeTab, setActiveTab] = useState('all')
  const [searchInput, setSearchInput] = useState('')
  const [appliedSearch, setAppliedSearch] = useState('')
  const [currentPage, setCurrentPage] = useState(1)
  const itemsPerPage = 10

  const handleSelectTab = (tabId) => {
    setActiveTab(tabId)
    setCurrentPage(1)
  }

  const handleSearchSubmit = (e) => {
    if (e) e.preventDefault()
    setAppliedSearch(searchInput.trim())
    setCurrentPage(1)
  }

  const handleClearSearch = () => {
    setSearchInput('')
    setAppliedSearch('')
    setCurrentPage(1)
  }

  const fetcher = TAB_FETCHERS[activeTab] || TAB_FETCHERS.all

  const {
    data: rawTabData,
    isLoading: isTabLoading,
    isFetching,
    isError: isTabError,
    error: tabError
  } = useQuery({
    queryKey: ['registrationRequestsTab', activeTab, i18n.language, appliedSearch, currentPage],
    queryFn: () => fetcher({ lang: i18n.language, search: appliedSearch || undefined, page: currentPage, limit: itemsPerPage }),
    staleTime: 5 * 60 * 1000,
    keepPreviousData: true,
  })

  const { data: statistics } = useQuery({
    queryKey: ['registrationRequestsStats', i18n.language],
    queryFn: () => messagesApi.fetchMessageStats({ lang: i18n.language }),
    staleTime: 5 * 60 * 1000,
  })

  const rawList = useMemo(() => {
    if (Array.isArray(rawTabData?.data)) return rawTabData.data
    if (Array.isArray(rawTabData)) return rawTabData
    if (Array.isArray(rawTabData?.messages)) return rawTabData.messages
    if (Array.isArray(rawTabData?.data?.messages)) return rawTabData.data.messages
    return []
  }, [rawTabData])

  const filteredMessages = useMemo(() => {
    if (!appliedSearch) return rawList
    const query = appliedSearch.toLowerCase().trim()
    return rawList.filter((item) => {
      const name = String(item.name || '').toLowerCase()
      const email = String(item.email || '').toLowerCase()
      const phone = String(item.phone || '').toLowerCase()
      const title = String(item.title || item.subject || '').toLowerCase()
      const message = String(item.message || item.content || '').toLowerCase()
      return (
        name.includes(query) ||
        email.includes(query) ||
        phone.includes(query) ||
        title.includes(query) ||
        message.includes(query)
      )
    })
  }, [rawList, appliedSearch])

  const pagination = rawTabData?.pagination || rawTabData?.meta || null
  const isServerPaginated = Boolean(
    pagination &&
    (pagination.numberOfPages > 1 || pagination.pages > 1 || pagination.totalPages > 1 || (pagination.total && pagination.total > itemsPerPage))
  )

  const totalItems = isServerPaginated
    ? (pagination?.total || pagination?.totalItems || pagination?.totalCount || pagination?.count || rawList.length)
    : filteredMessages.length

  const totalPages = isServerPaginated
    ? (pagination?.numberOfPages || pagination?.pages || pagination?.totalPages || Math.ceil(totalItems / itemsPerPage) || 1)
    : Math.max(1, Math.ceil(filteredMessages.length / itemsPerPage))

  const displayedMessages = isServerPaginated
    ? filteredMessages
    : filteredMessages.slice((currentPage - 1) * itemsPerPage, currentPage * itemsPerPage)

  const indexOfFirstItem = totalItems > 0 ? (currentPage - 1) * itemsPerPage : 0
  const indexOfLastItem = Math.min(currentPage * itemsPerPage, totalItems)

  const deleteMutation = useMutation({
    mutationFn: messagesApi.deleteMessage,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['registrationRequestsTab'] })
      queryClient.invalidateQueries({ queryKey: ['registrationRequestsStats'] })
    }
  })

  const handleDelete = async (message) => {
    const isConfirmed = await showDeleteConfirm(isRtl, message.title || message.name);
    if (!isConfirmed) return;
    deleteMutation.mutate(message.id || message._id)
  }

  const handleViewDetails = async (id) => {
    try {
      await messagesApi.fetchMessageById(id)
      queryClient.invalidateQueries({ queryKey: ['registrationRequestsTab'] })
      queryClient.invalidateQueries({ queryKey: ['registrationRequestsStats'] })
    } catch (err) {
      console.error('Failed to mark message as read:', err)
    }
  }

  const errorMessage = isTabError ? (tabError?.response?.data?.message || tabError?.message || t('adminDashboard.messages.errorLoading', 'حدث خطأ أثناء تحميل الرسائل')) : null

  return (
    <div className="space-y-6 sm:space-y-8 animate-fadeIn" dir={isRtl ? 'rtl' : 'ltr'}>

      <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
        <div>
          <h1 className="text-2xl sm:text-3xl font-black text-slate-800 dark:text-white flex items-center gap-3">
            <div className="p-2.5 bg-[#005953]/10 dark:bg-[#005953]/20 rounded-2xl text-[#005953] dark:text-brand-400">
              <MessageSquare size={24} />
            </div>
            {t('adminDashboard.messages.title', 'طلبات التسجيل')}
            {isFetching && <div className="w-5 h-5 ms-2 border-2 border-[#005953]/30 border-t-[#005953] rounded-full animate-spin" />}
          </h1>
        </div>
      </div>

      {errorMessage && (
        <div className="bg-rose-50 dark:bg-rose-900/20 text-rose-600 dark:text-rose-400 p-4 rounded-2xl text-sm font-bold border border-rose-200 dark:border-rose-900/50">
          {errorMessage}
        </div>
      )}

      <MessagesStats
        statistics={statistics}
        activeTab={activeTab}
        onSelectTab={handleSelectTab}
        isRtl={isRtl}
        isLoading={isTabLoading}
        t={t}
      />

      <div className="bg-white dark:bg-slate-900 p-4 sm:p-5 rounded-3xl border border-slate-100 dark:border-slate-800 shadow-soft">
        <form onSubmit={handleSearchSubmit} className="flex flex-col sm:flex-row items-center gap-3">
          <div className="relative flex-1 w-full">
            <Search className="absolute start-3.5 top-1/2 -translate-y-1/2 text-slate-400" size={18} />
            <input
              type="text"
              value={searchInput}
              onChange={(e) => setSearchInput(e.target.value)}
              placeholder={t('adminDashboard.messages.search', 'بحث بالاسم، البريد، أو رقم الهاتف...')}
              className="w-full bg-[#f3f7f6] dark:bg-slate-800 border border-slate-100 dark:border-slate-700 rounded-2xl ps-10 pe-10 py-3 text-sm text-slate-700 dark:text-slate-200 outline-none focus:ring-2 focus:ring-[#005953]/30 focus:border-[#005953] transition-all"
            />
            {searchInput && (
              <button
                type="button"
                onClick={handleClearSearch}
                className="absolute end-3 top-1/2 -translate-y-1/2 p-1.5 text-slate-400 hover:text-slate-600 dark:hover:text-slate-200 rounded-full hover:bg-slate-200 dark:hover:bg-slate-700 transition-colors cursor-pointer"
                title={isRtl ? 'مسح البحث' : 'Clear search'}
              >
                <X size={16} />
              </button>
            )}
          </div>

          <button
            type="submit"
            className="w-full sm:w-auto px-6 py-3 bg-[#005953] hover:bg-[#004742] text-white rounded-2xl text-sm font-bold transition-all shadow-md shadow-[#005953]/20 flex items-center justify-center gap-2 shrink-0 cursor-pointer"
          >
            <Search size={18} />
            <span>{isRtl ? 'بحث' : 'Search'}</span>
          </button>
        </form>
      </div>

      <div className="space-y-4 sm:space-y-6">
        {isTabLoading ? (
          <div className="bg-white dark:bg-slate-900 rounded-3xl border border-slate-100 dark:border-slate-800 p-12 text-center space-y-4 shadow-soft">
            <MessageSquare className="mx-auto w-8 h-8 text-slate-300 dark:text-slate-600 animate-pulse" />
            <p className="text-sm font-bold text-slate-500">
              {t('adminDashboard.messages.loading', 'جاري تحميل الرسائل...')}
            </p>
          </div>
        ) : displayedMessages.length === 0 ? (
          <div className="bg-white dark:bg-slate-900 rounded-3xl border border-slate-100 dark:border-slate-800 p-12 text-center space-y-4 shadow-soft">
            <MessageSquare className="mx-auto w-12 h-12 text-slate-200 dark:text-slate-700" />
            <h3 className="text-base font-bold text-slate-600 dark:text-slate-400">
              {appliedSearch
                ? (isRtl ? 'لا توجد نتائج مطابقة لبحثك' : 'No results found matching your search')
                : t('adminDashboard.messages.noMessages', 'لا توجد طلبات تسجيل')}
            </h3>
            {appliedSearch && (
              <button
                onClick={handleClearSearch}
                className="text-xs font-bold text-[#005953] hover:underline cursor-pointer"
              >
                {isRtl ? 'إعادة تعيين البحث' : 'Reset search'}
              </button>
            )}
          </div>
        ) : (
          displayedMessages.map((message) => (
            <MessageCard
              key={message.id || message._id}
              message={message}
              isRtl={isRtl}
              t={t}
              onDelete={handleDelete}
              onViewDetails={handleViewDetails}
            />
          ))
        )}
      </div>

      {totalPages > 1 && (
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 p-5 bg-white dark:bg-slate-900 border border-slate-100 dark:border-slate-800 rounded-3xl shadow-soft mt-6">
          <div className="text-xs text-slate-400 dark:text-slate-500 font-bold">
            {t('adminDashboard.managers.pagination.showing', 'عرض')}{' '}
            <span className="font-extrabold text-slate-700 dark:text-slate-200">
              {indexOfFirstItem + 1}
            </span>{' '}
            {t('adminDashboard.managers.pagination.to', 'إلى')}{' '}
            <span className="font-extrabold text-slate-700 dark:text-slate-200">
              {indexOfLastItem}
            </span>{' '}
            {t('adminDashboard.managers.pagination.of', 'من أصل')}{' '}
            <span className="font-extrabold text-slate-700 dark:text-slate-200">
              {totalItems}
            </span>{' '}
            {isRtl ? 'طلب' : 'requests'}
          </div>

          <div className="flex items-center gap-1.5 flex-wrap justify-center">
            <button
              onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
              disabled={currentPage === 1}
              className="px-3.5 py-2 rounded-xl text-xs font-bold border border-slate-100 dark:border-slate-800 bg-white hover:bg-slate-50 dark:bg-slate-900 dark:hover:bg-slate-800 text-slate-700 dark:text-slate-300 disabled:opacity-40 disabled:cursor-not-allowed transition-all cursor-pointer flex items-center gap-1"
            >
              {isRtl ? <ChevronRight size={14} /> : <ChevronLeft size={14} />}
              <span>{t('adminDashboard.managers.pagination.previous', 'السابق')}</span>
            </button>

            {getPaginationItems(currentPage, totalPages).map((p, idx) => {
              if (p === '...') {
                return (
                  <span key={`dots-${idx}`} className="w-8 h-8 flex items-center justify-center text-slate-400 text-xs font-bold">
                    ...
                  </span>
                )
              }
              const pageNum = Number(p)
              const isActive = currentPage === pageNum
              return (
                <button
                  key={pageNum}
                  onClick={() => setCurrentPage(pageNum)}
                  className={`h-8 w-8 flex items-center justify-center rounded-xl text-xs font-black transition-all cursor-pointer ${
                    isActive
                      ? 'bg-[#005953] text-white shadow-md shadow-[#005953]/20'
                      : 'border border-slate-100 dark:border-slate-800 bg-white hover:bg-slate-50 dark:bg-slate-900 dark:hover:bg-slate-800 text-slate-700 dark:text-slate-300'
                  }`}
                >
                  {pageNum}
                </button>
              )
            })}

            <button
              onClick={() => setCurrentPage((prev) => Math.min(prev + 1, totalPages))}
              disabled={currentPage === totalPages}
              className="px-3.5 py-2 rounded-xl text-xs font-bold border border-slate-100 dark:border-slate-800 bg-white hover:bg-slate-50 dark:bg-slate-900 dark:hover:bg-slate-800 text-slate-700 dark:text-slate-300 disabled:opacity-40 disabled:cursor-not-allowed transition-all cursor-pointer flex items-center gap-1"
            >
              <span>{t('adminDashboard.managers.pagination.next', 'التالي')}</span>
              {isRtl ? <ChevronLeft size={14} /> : <ChevronRight size={14} />}
            </button>
          </div>
        </div>
      )}
    </div>
  )
}
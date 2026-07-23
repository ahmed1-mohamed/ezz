import { useState, useMemo } from 'react'
import { useTranslation } from 'react-i18next'
import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query'
import { MessageSquare, Search } from 'lucide-react'
import { messagesApi } from '@/shared/services/api/messagesApi'
import { showDeleteConfirm } from '@/shared/utils/sweetAlert'
import MessagesStats from './components/MessagesStats'
import MessageCard from './components/MessageCard'

const TAB_FETCHERS = {
  all: (params) => messagesApi.fetchAllMessages(params),
  unread: (params) => messagesApi.fetchUnreadMessages(params),
  read: (params) => messagesApi.fetchReadMessages(params),
}

export default function AdminMessages() {
  const { t, i18n } = useTranslation()
  const isRtl = i18n.language === 'ar'
  const queryClient = useQueryClient()

  const [activeTab, setActiveTab] = useState('all')
  const [searchQuery, setSearchQuery] = useState('')

  const fetcher = TAB_FETCHERS[activeTab] || TAB_FETCHERS.all

  const {
    data: rawTabData,
    isLoading: isTabLoading,
    isError: isTabError,
    error: tabError
  } = useQuery({
    queryKey: ['registrationRequestsTab', activeTab, i18n.language],
    queryFn: () => fetcher({ lang: i18n.language }),
    staleTime: 5 * 60 * 1000,
    keepPreviousData: true,
  })

  const { data: statistics } = useQuery({
    queryKey: ['registrationRequestsStats', i18n.language],
    queryFn: () => messagesApi.fetchMessageStats({ lang: i18n.language }),
    staleTime: 5 * 60 * 1000,
  })

  const rawList = Array.isArray(rawTabData?.data) ? rawTabData.data : (Array.isArray(rawTabData) ? rawTabData : [])

  const filteredMessages = useMemo(() => {
    const query = searchQuery.toLowerCase().trim()
    if (!query) return rawList

    return rawList.filter((msg) => {
      const name = (msg.name || msg.title || '').toLowerCase()
      const email = (msg.email || '').toLowerCase()
      const phone = (msg.phone || '').toLowerCase()
      return name.includes(query) || email.includes(query) || phone.includes(query)
    })
  }, [rawList, searchQuery])

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
        onSelectTab={setActiveTab}
        isRtl={isRtl}
        isLoading={isTabLoading}
        t={t}
      />

      <div className="bg-white dark:bg-slate-900 p-4 rounded-3xl border border-slate-100 dark:border-slate-800 shadow-soft">
        <div className="relative w-full max-w-md">
          <Search className="absolute start-3.5 top-1/2 -translate-y-1/2 text-slate-400" size={18} />
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder={t('adminDashboard.messages.search', 'بحث بالاسم، البريد، أو رقم الهاتف...')}
            className="w-full bg-[#f3f7f6] dark:bg-slate-800 border border-slate-100 dark:border-slate-700 rounded-2xl ps-10 pe-4 py-2.5 text-sm text-slate-700 dark:text-slate-200 outline-none focus:ring-2 focus:ring-[#005953]/30 transition-all"
          />
        </div>
      </div>

      <div className="space-y-4 sm:space-y-6">
        {isTabLoading ? (
          <div className="bg-white dark:bg-slate-900 rounded-3xl border border-slate-100 dark:border-slate-800 p-12 text-center space-y-4 shadow-soft">
            <MessageSquare className="mx-auto w-8 h-8 text-slate-300 dark:text-slate-600 animate-pulse" />
            <p className="text-sm font-bold text-slate-500">
              {t('adminDashboard.messages.loading', 'جاري تحميل الرسائل...')}
            </p>
          </div>
        ) : filteredMessages.length === 0 ? (
          <div className="bg-white dark:bg-slate-900 rounded-3xl border border-slate-100 dark:border-slate-800 p-12 text-center space-y-4 shadow-soft">
            <MessageSquare className="mx-auto w-12 h-12 text-slate-200 dark:text-slate-700" />
            <h3 className="text-base font-bold text-slate-600 dark:text-slate-400">
              {t('adminDashboard.messages.noMessages', 'لا توجد طلبات تسجيل')}
            </h3>
          </div>
        ) : (
          filteredMessages.map((message) => (
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
    </div>
  )
}
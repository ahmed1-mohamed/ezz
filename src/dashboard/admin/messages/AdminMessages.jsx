import { useState } from 'react'
import { useTranslation } from 'react-i18next'
import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query'
import { MessageSquare, Search } from 'lucide-react'
import { messagesApi } from '@/shared/services/api/messagesApi'
import { showDeleteConfirm } from '@/shared/utils/sweetAlert'
import MessagesStats from './components/MessagesStats'
import MessageCard from './components/MessageCard'
import useDebounce from '@/shared/hooks/useDebounce'

export default function AdminMessages() {
  const { t, i18n } = useTranslation()
  const isRtl = i18n.language === 'ar'
  const queryClient = useQueryClient()

  const [search, setSearch] = useState('')
  const debouncedSearch = useDebounce(search, 500)

  const {
    data: messages = [],
    isLoading,
    isError,
    error
  } = useQuery({
    queryKey: ['adminMessages', debouncedSearch, i18n.language],
    queryFn: () => messagesApi.fetchMessages({ search: debouncedSearch, lang: i18n.language }),
    keepPreviousData: true,
    staleTime: 5 * 60 * 1000,
  })

  const deleteMutation = useMutation({
    mutationFn: messagesApi.deleteMessage,
    onSuccess: () => {
      queryClient.invalidateQueries(['adminMessages'])
    }
  })

  const updateStatusMutation = useMutation({
    mutationFn: ({ id, payload }) => messagesApi.updateMessageStatus(id, payload),
    onSuccess: () => {
      queryClient.invalidateQueries(['adminMessages'])
    }
  })

  const handleDelete = async (message) => {
    const isConfirmed = await showDeleteConfirm(isRtl, message.subject || message.name);
    if (!isConfirmed) return;
    deleteMutation.mutate(message.id)
  }

  const handleUpdateStatus = (id, payload) => {
    updateStatusMutation.mutate({ id, payload })
  }

  const errorMessage = isError ? (error?.response?.data?.message || error?.message || t('adminDashboard.messages.errorLoading', 'حدث خطأ أثناء تحميل الرسائل')) : null

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

        <div className="w-full md:w-96 relative">
          <input
            type="text"
            placeholder={t('adminDashboard.messages.searchPlaceholder', 'بحث...')}
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="w-full bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-2xl px-12 py-3.5 text-sm font-semibold text-slate-700 dark:text-slate-300 focus:outline-none focus:ring-2 focus:ring-[#005953]/20 focus:border-[#005953] transition-all shadow-sm"
          />
          <Search
            className={`absolute top-1/2 -translate-y-1/2 text-slate-400 ${isRtl ? 'right-4' : 'left-4'}`}
            size={20}
          />
        </div>
      </div>

      {errorMessage && (
        <div className="bg-rose-50 dark:bg-rose-900/20 text-rose-600 dark:text-rose-400 p-4 rounded-2xl text-sm font-bold border border-rose-200 dark:border-rose-900/50">
          {errorMessage}
        </div>
      )}

      <MessagesStats messages={messages} isRtl={isRtl} isLoading={isLoading} t={t} />

      <div className="space-y-4 sm:space-y-6">
        {isLoading ? (
          <div className="bg-white dark:bg-slate-900 rounded-3xl border border-slate-100 dark:border-slate-800 p-12 text-center space-y-4 shadow-soft">
            <MessageSquare className="mx-auto w-8 h-8 text-slate-300 dark:text-slate-600 animate-pulse" />
            <p className="text-sm font-bold text-slate-500">
              {t('adminDashboard.messages.loading', 'جاري تحميل الرسائل...')}
            </p>
          </div>
        ) : messages.length === 0 ? (
          <div className="bg-white dark:bg-slate-900 rounded-3xl border border-slate-100 dark:border-slate-800 p-12 text-center space-y-4 shadow-soft">
            <MessageSquare className="mx-auto w-12 h-12 text-slate-200 dark:text-slate-700" />
            <h3 className="text-base font-bold text-slate-600 dark:text-slate-400">
              {t('adminDashboard.messages.noMessages', 'لا توجد طلبات تسجيل')}
            </h3>
          </div>
        ) : (
          messages.map((message) => (
            <MessageCard
              key={message.id}
              message={message}
              isRtl={isRtl}
              t={t}
              onDelete={handleDelete}
              onUpdateStatus={handleUpdateStatus}
            />
          ))
        )}
      </div>

    </div>
  )
}
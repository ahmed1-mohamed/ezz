import { useTranslation } from 'react-i18next'
import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query'
import { MessageSquare } from 'lucide-react'
import { messagesApi } from '@/shared/services/api/messagesApi'
import { showDeleteConfirm } from '@/shared/utils/sweetAlert'
import MessagesStats from './components/MessagesStats'
import MessageCard from './components/MessageCard'

export default function AdminMessages() {
  const { t, i18n } = useTranslation()
  const isRtl = i18n.language === 'ar'
  const queryClient = useQueryClient()

  const {
    data: messages = [],
    isLoading,
    isError,
    error
  } = useQuery({
    queryKey: ['adminMessages', i18n.language],
    queryFn: () => messagesApi.fetchMessages({ lang: i18n.language }),
    keepPreviousData: true,
    staleTime: 5 * 60 * 1000,
  })

  const deleteMutation = useMutation({
    mutationFn: messagesApi.deleteMessage,
    onSuccess: () => {
      queryClient.invalidateQueries(['adminMessages'])
    }
  })

  const handleDelete = async (message) => {
    const isConfirmed = await showDeleteConfirm(isRtl, message.title || message.name);
    if (!isConfirmed) return;
    deleteMutation.mutate(message.id)
  }

  const handleViewDetails = async (id) => {
    try {
      await messagesApi.fetchMessageById(id)
      queryClient.invalidateQueries(['adminMessages'])
    } catch (err) {
      console.error('Failed to mark message as read:', err)
    }
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
              onViewDetails={handleViewDetails}
            />
          ))
        )}
      </div>

    </div>
  )
}
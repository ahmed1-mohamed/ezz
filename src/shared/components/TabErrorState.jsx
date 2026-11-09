import { AlertCircle, RotateCcw } from 'lucide-react'
import { useTranslation } from 'react-i18next'
import { stripEndpointAndUrls, containsTechnicalLeak } from '@/shared/utils/errorHandler.js'

export default function TabErrorState({
  message,
  onRetry,
  isRtl,
  compact = false,
  title,
}) {
  const { t, i18n } = useTranslation()
  const rtl = isRtl !== undefined ? isRtl : i18n.language.startsWith('ar')
  const defaultFallback = rtl
    ? 'حدث خطأ أثناء تحميل البيانات، يرجى المحاولة لاحقاً'
    : 'Failed to load data. Please try again later.'
  const cleanRawMessage = typeof message === 'string' ? stripEndpointAndUrls(message) : ''
  const resolvedMessage = (!cleanRawMessage || containsTechnicalLeak(cleanRawMessage))
    ? defaultFallback
    : cleanRawMessage
  if (compact) {
    return (
      <div
        className="w-full flex items-center justify-between gap-3 p-4 rounded-2xl bg-white dark:bg-slate-900 border border-red-200 dark:border-red-900/60 border-s-4 border-s-red-500 shadow-xs"
        dir={rtl ? 'rtl' : 'ltr'}
      >
        <div className="flex items-center gap-3 min-w-0">
          <div className="p-2 rounded-xl bg-red-50 dark:bg-red-950/40 text-red-500 shrink-0">
            <AlertCircle size={18} />
          </div>
          <div className="truncate">
            {title && (
              <h4 className="text-xs font-bold text-slate-800 dark:text-slate-100">
                {title}
              </h4>
            )}
            <p className="text-xs sm:text-sm font-bold text-red-600 dark:text-red-400 truncate">
              {resolvedMessage}
            </p>
          </div>
        </div>
        {onRetry && (
          <button
            type="button"
            onClick={onRetry}
            className="flex items-center gap-1.5 px-3 py-1.5 rounded-xl border border-red-200 dark:border-red-800 bg-white dark:bg-slate-800 hover:bg-red-50 dark:hover:bg-slate-700 text-xs font-bold text-red-600 dark:text-red-400 transition-colors shrink-0 cursor-pointer"
          >
            <RotateCcw size={14} />
            <span>{t('common.retry', 'إعادة المحاولة')}</span>
          </button>
        )}
      </div>
    )
  }
  return (
    <div
      className="w-full bg-white dark:bg-slate-900 border border-red-200 dark:border-red-900/60 border-s-4 border-s-red-500 rounded-3xl p-8 sm:p-12 text-center shadow-xs space-y-4"
      dir={rtl ? 'rtl' : 'ltr'}
    >
      <div className="w-14 h-14 rounded-2xl bg-red-50 dark:bg-red-950/40 text-red-500 flex items-center justify-center mx-auto">
        <AlertCircle size={28} />
      </div>
      <div className="space-y-1">
        <h3 className="text-base sm:text-lg font-bold text-slate-800 dark:text-slate-100">
          {title || t('common.errorLoading', 'حدث خطأ أثناء تحميل البيانات')}
        </h3>
        <p className="text-xs sm:text-sm font-bold text-red-600 dark:text-red-400 max-w-md mx-auto">
          {resolvedMessage}
        </p>
      </div>
      {onRetry && (
        <button
          type="button"
          onClick={onRetry}
          className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-[#005953] hover:bg-[#004742] text-white text-xs sm:text-sm font-bold shadow-sm transition-all cursor-pointer"
        >
          <RotateCcw size={14} />
          <span>{t('common.retry', 'إعادة المحاولة')}</span>
        </button>
      )}
    </div>
  )
}

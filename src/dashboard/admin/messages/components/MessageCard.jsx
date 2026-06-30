import { useState } from 'react'
import { Eye, EyeOff, Clock, CheckCircle2, Send, Mail, Calendar, Phone, AtSign, Trash2 } from 'lucide-react'

export default function MessageCard({ message, isRtl, t, onDelete, onUpdateStatus }) {
  const [isExpanded, setIsExpanded] = useState(false)

  const isNew = !message.isRead

  const formatDate = (isoString) => {
    if (!isoString) return ''
    try {
      const d = new Date(isoString)
      return d.toLocaleDateString(isRtl ? 'ar-EG' : 'en-US', {
        year: 'numeric',
        month: '2-digit',
        day: '2-digit',
        hour: '2-digit',
        minute: '2-digit'
      })
    } catch {
      return ''
    }
  }

  const getInitials = (name) => {
    if (!name) return 'م'
    return name.charAt(0)
  }

  const handleWhatsApp = () => {
    if (message.phone) {
      window.open(`https://wa.me/${message.phone.replace(/[^0-9]/g, '')}`, '_blank')
    }
  }

  const handleEmail = () => {
    if (message.email) {
      window.open(`mailto:${message.email}`, '_blank')
    }
  }

  return (
    <div className="bg-white dark:bg-slate-900 rounded-3xl border border-slate-100 dark:border-slate-800 shadow-soft overflow-hidden transition-all duration-300 hover:shadow-md">

      <div className="p-4 sm:p-6 lg:p-8">

        <div className="flex flex-col sm:flex-row gap-6">

          <div className="shrink-0 flex sm:flex-col items-center gap-4 sm:order-last">
            <div className="w-14 h-14 sm:w-16 sm:h-16 rounded-full bg-[#005953] flex items-center justify-center text-white text-2xl font-bold">
              {getInitials(message.name)}
            </div>
          </div>

          <div className="flex-1 space-y-4">

            <div className="flex items-center justify-between sm:justify-start gap-4">
              <h3 className="text-lg sm:text-xl font-bold text-slate-800 dark:text-white">
                {message.name}
              </h3>
              {isNew && (
                <span className="px-3 py-1 bg-amber-100 dark:bg-amber-900/30 text-amber-700 dark:text-amber-400 text-xs font-bold rounded-lg">
                  {t('adminDashboard.messages.new', 'جديد')}
                </span>
              )}
            </div>

            <div className="flex flex-wrap items-center gap-4 text-sm font-semibold text-slate-500 dark:text-slate-400">
              {message.createdAt && (
                <div className="flex items-center gap-1.5">
                  <Calendar size={14} className="shrink-0" />
                  <span dir="ltr">{formatDate(message.createdAt)}</span>
                </div>
              )}
              {message.phone && (
                <div className="flex items-center gap-1.5" dir="ltr">
                  <Phone size={14} className="shrink-0" />
                  <span>{message.phone}</span>
                </div>
              )}
              {message.email && (
                <div className="flex items-center gap-1.5">
                  <AtSign size={14} className="shrink-0" />
                  <span>{message.email}</span>
                </div>
              )}
            </div>

            <div className="bg-slate-50 dark:bg-slate-800/50 rounded-2xl p-4 border border-slate-100 dark:border-slate-800">
              <span className="text-xs font-bold text-slate-400 dark:text-slate-500 block mb-1">
                {t('adminDashboard.messages.messageSubject', 'موضوع الرسالة')}:
              </span>
              <p className="text-slate-700 dark:text-slate-200 font-semibold">
                {message.title || t('adminDashboard.messages.noSubject', 'بدون موضوع')}
              </p>
            </div>

            <div className="flex flex-wrap items-center gap-2 sm:gap-3 pt-2">
              <button
                onClick={() => setIsExpanded(!isExpanded)}
                className={`flex items-center gap-2 px-4 py-2 sm:py-2.5 rounded-xl text-sm font-bold border transition-colors ${isExpanded
                  ? 'border-[#005953] text-[#005953] dark:text-brand-400 dark:border-brand-400/50 bg-[#005953]/5 dark:bg-[#005953]/20'
                  : 'border-slate-200 dark:border-slate-700 text-slate-600 dark:text-slate-300 hover:bg-slate-50 dark:hover:bg-slate-800'
                  }`}
              >
                {isExpanded ? <EyeOff size={16} /> : <Eye size={16} />}
                {isExpanded
                  ? t('adminDashboard.messages.hideSenderDetails', 'إخفاء تفاصيل المرسل')
                  : t('adminDashboard.messages.showSenderDetails', 'عرض تفاصيل المرسل')
                }
              </button>

              <button
                onClick={() => onUpdateStatus(message.id, { status: 'processing' })}
                className="flex items-center gap-2 px-4 py-2 sm:py-2.5 rounded-xl text-sm font-bold bg-blue-500 hover:bg-blue-600 text-white transition-colors"
              >
                <Clock size={16} />
                {t('adminDashboard.messages.processing', 'قيد المعالجة')}
              </button>

              <button
                onClick={() => onUpdateStatus(message.id, { isRead: true })}
                className="flex items-center gap-2 px-4 py-2 sm:py-2.5 rounded-xl text-sm font-bold bg-emerald-500 hover:bg-emerald-600 text-white transition-colors"
              >
                <CheckCircle2 size={16} />
                {t('adminDashboard.messages.replied', 'تم الرد')}
              </button>

              <div className="flex-1 min-w-[20px]" /> {/* Spacer */}

              <button
                onClick={handleWhatsApp}
                disabled={!message.phone}
                className="flex items-center gap-2 px-4 py-2 sm:py-2.5 rounded-xl text-sm font-bold bg-green-500 hover:bg-green-600 text-white transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
              >
                <Send size={16} />
                {t('adminDashboard.messages.whatsapp', 'واتساب')}
              </button>

              <button
                onClick={handleEmail}
                disabled={!message.email}
                className="flex items-center gap-2 px-4 py-2 sm:py-2.5 rounded-xl text-sm font-bold bg-amber-500 hover:bg-amber-600 text-white transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
              >
                <Mail size={16} />
                {t('adminDashboard.messages.email', 'بريد')}
              </button>

              <button
                onClick={() => onDelete(message.id)}
                className="flex items-center justify-center p-2 sm:p-2.5 rounded-xl text-rose-500 hover:bg-rose-50 dark:hover:bg-rose-900/20 transition-colors"
                title="Delete"
              >
                <Trash2 size={18} />
              </button>
            </div>

          </div>
        </div>
      </div>

      {isExpanded && (
        <div className="px-4 sm:px-6 lg:px-8 pb-6 lg:pb-8 pt-4 border-t border-slate-100 dark:border-slate-800 bg-slate-50/50 dark:bg-slate-800/20">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

            <div className="space-y-1.5">
              <label className="text-sm font-bold text-slate-500 dark:text-slate-400">
                {t('adminDashboard.messages.fullName', 'الاسم الكامل')}
              </label>
              <div className="w-full bg-slate-100 dark:bg-slate-800 px-4 py-3 rounded-xl text-slate-700 dark:text-slate-200 font-semibold">
                {message.name || '-'}
              </div>
            </div>

            <div className="space-y-1.5">
              <label className="text-sm font-bold text-slate-500 dark:text-slate-400">
                {t('adminDashboard.messages.email', 'البريد الإلكتروني')}
              </label>
              <div className="w-full bg-slate-100 dark:bg-slate-800 px-4 py-3 rounded-xl text-slate-700 dark:text-slate-200 font-semibold" dir="ltr">
                {message.email || '-'}
              </div>
            </div>

            <div className="space-y-1.5">
              <label className="text-sm font-bold text-slate-500 dark:text-slate-400">
                {t('adminDashboard.messages.phoneNumber', 'رقم الهاتف')}
              </label>
              <div className="w-full bg-slate-100 dark:bg-slate-800 px-4 py-3 rounded-xl text-slate-700 dark:text-slate-200 font-semibold" dir="ltr">
                {message.phone || '-'}
              </div>
            </div>

            <div className="space-y-1.5">
              <label className="text-sm font-bold text-slate-500 dark:text-slate-400">
                {t('adminDashboard.messages.messageSubject', 'موضوع الرسالة')}
              </label>
              <div className="w-full bg-slate-100 dark:bg-slate-800 px-4 py-3 rounded-xl text-slate-700 dark:text-slate-200 font-semibold">
                {message.title || '-'}
              </div>
            </div>

            <div className="md:col-span-2 space-y-1.5">
              <label className="text-sm font-bold text-slate-500 dark:text-slate-400">
                {t('adminDashboard.messages.yourMessage', 'رسالتك')}
              </label>
              <div className="w-full bg-slate-100 dark:bg-slate-800 px-4 py-4 rounded-xl text-slate-700 dark:text-slate-200 font-semibold min-h-[120px] whitespace-pre-wrap">
                {message.message || '-'}
              </div>
            </div>

          </div>
        </div>
      )}

    </div>
  )
}
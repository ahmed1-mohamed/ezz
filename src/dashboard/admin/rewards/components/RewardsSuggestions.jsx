import {
  Trash2,
  Pencil,
  Award,
  Eye,
  Check,
  X,
  Layers,
  Clock,
  CheckCircle2,
  XCircle,
  Star,
  Trophy,
  Medal,
  Heart,
  User,
} from 'lucide-react'
import { useTranslation } from 'react-i18next'

function renderRewardIcon(icon) {
  if (!icon) return <span className="text-2xl">🎁</span>
  const lower = String(icon).toLowerCase().trim()
  if (lower === 'star') return <Star className="w-7 h-7 text-amber-500 fill-amber-500" />
  if (lower === 'trophy') return <Trophy className="w-7 h-7 text-amber-500" />
  if (lower === 'award') return <Award className="w-7 h-7 text-amber-500" />
  if (lower === 'medal') return <Medal className="w-7 h-7 text-amber-500" />
  if (lower === 'heart') return <Heart className="w-7 h-7 text-rose-500 fill-rose-500" />
  return <span className="text-2xl">{icon}</span>
}

function getLocalizedText(val, isRtl) {
  if (!val) return ''
  if (typeof val === 'object') {
    return isRtl ? (val.ar || val.en || '') : (val.en || val.ar || '')
  }
  return String(val)
}

export default function RewardsSuggestions({
  suggestions = [],
  stats = {},
  activeFilter = 'all',
  onFilterChange,
  isLoading = false,
  onApprove,
  onReject,
  onEdit,
  onDelete,
  onView,
}) {
  const { t, i18n } = useTranslation()
  const isRtl = i18n.language.startsWith('ar')
  const p = (key, fallback) => t(`adminDashboard.rewards.${key}`, fallback)

  const statsCards = [
    {
      id: 'all',
      label: p('statTotalSuggestions', 'إجمالي المقترحات'),
      value: stats?.total ?? 0,
      icon: Layers,
      textColor: 'text-slate-800 dark:text-slate-100',
      bgIcon: 'bg-slate-100 text-slate-600 dark:bg-slate-800 dark:text-slate-300',
      activeBorder: 'border-[#0f7a6c] ring-2 ring-[#0f7a6c]/20 bg-[#0f7a6c]/5 dark:bg-[#0f7a6c]/10',
    },
    {
      id: 'pending',
      label: p('statPendingReview', 'قيد المراجعة'),
      value: stats?.pending ?? 0,
      icon: Clock,
      textColor: 'text-amber-600 dark:text-amber-400',
      bgIcon: 'bg-amber-100 text-amber-600 dark:bg-amber-900/30 dark:text-amber-400',
      activeBorder: 'border-amber-500 ring-2 ring-amber-500/20 bg-amber-50/60 dark:bg-amber-900/10',
    },
    {
      id: 'accepted',
      label: p('statApproved', 'المقبولة'),
      value: stats?.accepted ?? 0,
      icon: CheckCircle2,
      textColor: 'text-emerald-600 dark:text-emerald-400',
      bgIcon: 'bg-emerald-100 text-emerald-600 dark:bg-emerald-900/30 dark:text-emerald-400',
      activeBorder: 'border-emerald-500 ring-2 ring-emerald-500/20 bg-emerald-50/60 dark:bg-emerald-900/10',
    },
    {
      id: 'rejected',
      label: p('statRejected', 'المرفوضة'),
      value: stats?.rejected ?? 0,
      icon: XCircle,
      textColor: 'text-rose-600 dark:text-rose-400',
      bgIcon: 'bg-rose-100 text-rose-600 dark:bg-rose-900/30 dark:text-rose-400',
      activeBorder: 'border-rose-500 ring-2 ring-rose-500/20 bg-rose-50/60 dark:bg-rose-900/10',
    },
  ]

  const renderStatusBadge = (status) => {
    if (status === 'accepted') {
      return (
        <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full text-[11px] font-bold bg-emerald-100 text-emerald-700 dark:bg-emerald-900/30 dark:text-emerald-400 shadow-sm">
          <CheckCircle2 size={12} />
          {isRtl ? 'مقبولة' : 'Accepted'}
        </span>
      )
    }
    if (status === 'rejected') {
      return (
        <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full text-[11px] font-bold bg-rose-100 text-rose-700 dark:bg-rose-900/30 dark:text-rose-400 shadow-sm">
          <XCircle size={12} />
          {isRtl ? 'مرفوضة' : 'Rejected'}
        </span>
      )
    }
    return (
      <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full text-[11px] font-bold bg-amber-100 text-amber-700 dark:bg-amber-900/30 dark:text-amber-400 shadow-sm">
        <Clock size={12} />
        {isRtl ? 'قيد المراجعة' : 'Pending'}
      </span>
    )
  }

  return (
    <div className="space-y-6">
       <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {statsCards.map((card) => {
          const Icon = card.icon
          const isActive = (activeFilter || 'all') === card.id
          return (
            <button
              key={card.id}
              type="button"
              onClick={() => onFilterChange?.(card.id)}
              className={`bg-white dark:bg-slate-900 rounded-3xl p-5 border transition-all cursor-pointer shadow-soft hover:shadow-md flex items-center justify-between text-start ${
                isActive
                  ? card.activeBorder
                  : 'border-slate-100 dark:border-slate-800/60 hover:border-slate-200 dark:hover:border-slate-700'
              }`}
            >
              <div>
                <span className="text-slate-400 dark:text-slate-500 text-xs font-semibold block">
                  {card.label}
                </span>
                <span className={`text-2xl font-black mt-1 block ${card.textColor}`}>
                  {card.value}
                </span>
              </div>
              <div className={`w-11 h-11 rounded-2xl flex items-center justify-center shrink-0 ${card.bgIcon}`}>
                <Icon size={20} />
              </div>
            </button>
          )
        })}
      </div>

       {isLoading ? (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          {Array.from({ length: 4 }).map((_, i) => (
            <div
              key={i}
              className="bg-white dark:bg-slate-900 rounded-3xl p-6 border border-slate-100 dark:border-slate-800/60 animate-pulse space-y-4"
            >
              <div className="h-24 bg-slate-100 dark:bg-slate-800 rounded-2xl" />
              <div className="h-4 bg-slate-200 dark:bg-slate-700 rounded w-1/2 mx-auto" />
              <div className="h-3 bg-slate-100 dark:bg-slate-800 rounded w-3/4 mx-auto" />
            </div>
          ))}
        </div>
      ) : suggestions.length === 0 ? (
        <div className="py-16 bg-white dark:bg-slate-900 rounded-3xl border border-slate-100 dark:border-slate-800/60 text-center text-slate-400 dark:text-slate-500 shadow-soft">
          <Award className="w-12 h-12 mx-auto text-slate-300 dark:text-slate-600 mb-3" />
          <p className="font-bold text-sm">
            {p('noSuggestions', 'لا توجد اقتراحات مكافآت في هذا التصنيف')}
          </p>
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          {suggestions.map((sug) => {
            const name = getLocalizedText(sug.name, isRtl)
            const description = getLocalizedText(sug.description, isRtl)
            const sugId = sug.id || sug._id

            return (
              <div
                key={sugId}
                className="bg-white dark:bg-slate-900 rounded-3xl border border-slate-100 dark:border-slate-800/60 p-5 shadow-soft flex flex-col justify-between transition-all hover:shadow-md"
              >
                <div>
                   <div
                    className="h-24 rounded-2xl flex items-center justify-center relative shadow-sm"
                    style={{ backgroundColor: sug.backgroundColor || '#f3f4f6' }}
                  >
                    <div className="w-14 h-14 rounded-2xl bg-white dark:bg-slate-900 flex items-center justify-center shadow-md">
                      {renderRewardIcon(sug.icon || sug.emoji)}
                    </div>
                    <div className="absolute top-3 end-3">
                      {renderStatusBadge(sug.status)}
                    </div>
                  </div>

                   <div className="text-center mt-3 px-2">
                    <h4 className="font-bold text-slate-800 dark:text-white text-base leading-snug">
                      {name}
                    </h4>
                    {description && (
                      <p className="text-slate-500 dark:text-slate-400 text-xs mt-1.5 line-clamp-2">
                        {description}
                      </p>
                    )}
                  </div>

                   {sug.teacher?.name && (
                    <div className="flex items-center gap-2 pt-3 border-t border-slate-100 dark:border-slate-800/60 w-full text-xs text-slate-600 dark:text-slate-400 mt-3">
                      {sug.teacher.image ? (
                        <img
                          src={sug.teacher.image}
                          alt={sug.teacher.name}
                          className="w-6 h-6 rounded-full object-cover border border-slate-200 dark:border-slate-700 shrink-0"
                        />
                      ) : (
                        <div className="w-6 h-6 rounded-full bg-[#0f7a6c]/10 text-[#0f7a6c] dark:bg-emerald-950/30 dark:text-emerald-400 flex items-center justify-center text-[10px] font-bold shrink-0">
                          <User size={12} />
                        </div>
                      )}
                      <div className="flex items-center gap-1.5 min-w-0">
                        <span className="text-[11px] text-slate-400">
                          {isRtl ? 'المعلم:' : 'Teacher:'}
                        </span>
                        <span className="font-semibold truncate text-slate-700 dark:text-slate-300">
                          {sug.teacher.name}
                        </span>
                      </div>
                    </div>
                  )}
                </div>

                 <div className="flex items-center justify-between border-t border-slate-100 dark:border-slate-800/60 pt-3 mt-4">
                  <div className="flex items-center gap-1">
                    {onView && (
                      <button
                        type="button"
                        onClick={() => onView(sug)}
                        className="p-2 text-slate-500 hover:text-slate-700 hover:bg-slate-100 dark:hover:bg-slate-800 rounded-xl transition-colors cursor-pointer"
                        title={isRtl ? 'عرض التفاصيل' : 'View Details'}
                      >
                        <Eye size={16} />
                      </button>
                    )}
                    {onEdit && (
                      <button
                        type="button"
                        onClick={() => onEdit(sug)}
                        className="p-2 text-brand-600 hover:bg-brand-50 dark:hover:bg-brand-900/30 rounded-xl transition-colors cursor-pointer"
                        title={isRtl ? 'تعديل' : 'Edit'}
                      >
                        <Pencil size={16} />
                      </button>
                    )}
                    <button
                      type="button"
                      onClick={() => onDelete(sug)}
                      className="p-2 text-rose-500 hover:bg-rose-50 dark:hover:bg-rose-900/30 rounded-xl transition-colors cursor-pointer"
                      title={isRtl ? 'حذف' : 'Delete'}
                    >
                      <Trash2 size={16} />
                    </button>
                  </div>

                  {sug.status === 'pending' && (
                    <div className="flex items-center gap-2">
                      <button
                        type="button"
                        onClick={() => onReject(sugId)}
                        className="flex items-center gap-1 px-3 py-1.5 rounded-xl bg-rose-50 hover:bg-rose-100 dark:bg-rose-900/20 dark:hover:bg-rose-900/40 text-rose-600 dark:text-rose-400 text-xs font-bold transition-colors cursor-pointer"
                      >
                        <X size={14} />
                        {p('rejectBtn', 'رفض')}
                      </button>
                      <button
                        type="button"
                        onClick={() => onApprove(sugId)}
                        className="flex items-center gap-1 px-3 py-1.5 rounded-xl bg-[#0f7a6c] hover:bg-[#0d6b5e] text-white text-xs font-bold transition-colors shadow-sm cursor-pointer"
                      >
                        <Check size={14} />
                        {p('approveBtn', 'موافقة')}
                      </button>
                    </div>
                  )}
                </div>
              </div>
            )
          })}
        </div>
      )}
    </div>
  )
}
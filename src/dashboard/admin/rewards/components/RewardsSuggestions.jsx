import { useState } from 'react'
import { Check, X, Trash2, Pencil, Award } from 'lucide-react'
import { useTranslation } from 'react-i18next'

export default function RewardsSuggestions({
  suggestions,
  stats,
  onApprove,
  onReject,
  onEdit,
  onDelete,
}) {
  const { t, i18n } = useTranslation()
  const isRtl = i18n.language.startsWith('ar')
  const p = (key) => t(`adminDashboard.rewards.${key}`, key)

  const [activeTab, setActiveTab] = useState('pending') // 'all' or 'pending'

  const filtered = activeTab === 'all'
    ? suggestions
    : suggestions.filter((s) => s.status === 'pending')

  const pendingCount = suggestions.filter((s) => s.status === 'pending').length

  const statsItems = [
    { label: p('statTotalSuggestions'), value: stats.totalSuggestions, color: 'text-slate-700 dark:text-slate-300' },
    { label: p('statApproved'), value: stats.approvedCount, color: 'text-emerald-600 dark:text-emerald-400' },
    { label: p('statPendingReview'), value: stats.pendingCount, color: 'text-blue-600 dark:text-blue-400' },
    { label: p('statRejected'), value: stats.rejectedCount, color: 'text-red-600 dark:text-red-400' },
  ]

  return (
    <div className="space-y-6">
      {/* Header and Left Tabs */}
      <div className="flex flex-col md:flex-row items-center justify-between gap-4">
        {/* Tabs (Left side) */}
        <div className="flex items-center gap-2 bg-slate-100 dark:bg-slate-800 p-1 rounded-2xl">
          <button
            onClick={() => setActiveTab('pending')}
            className={`px-4 py-2 rounded-xl text-xs font-bold transition-all ${
              activeTab === 'pending'
                ? 'bg-[#0f7a6c] text-white shadow-sm'
                : 'text-slate-500 dark:text-slate-400 hover:text-slate-700'
            }`}
          >
            {p('tabPending')} ({pendingCount})
          </button>
          <button
            onClick={() => setActiveTab('all')}
            className={`px-4 py-2 rounded-xl text-xs font-bold transition-all ${
              activeTab === 'all'
                ? 'bg-[#0f7a6c] text-white shadow-sm'
                : 'text-slate-500 dark:text-slate-400 hover:text-slate-700'
            }`}
          >
            {p('tabAll')} ({suggestions.length})
          </button>
        </div>

        {/* Heading & Badge (Right side) */}
        <div className="flex items-center gap-3">
          {pendingCount > 0 && (
            <span className="px-3 py-1 bg-amber-500 text-white rounded-full text-xs font-bold animate-pulse">
              {pendingCount} {p('pendingBadgeSuffix')}
            </span>
          )}
          <h2 className="text-slate-800 dark:text-white font-bold text-base flex items-center gap-2">
            <span>{p('suggestionsTitle')}</span>
            <span className="text-amber-500">⏰</span>
          </h2>
        </div>
      </div>

      {/* Stats row cards */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {statsItems.map((item, idx) => (
          <div
            key={idx}
            className="bg-white dark:bg-slate-900 rounded-3xl p-5 border border-slate-100 dark:border-slate-800/60 shadow-sm flex flex-col items-center justify-center text-center"
          >
            <span className="text-slate-400 dark:text-slate-500 text-xs font-semibold">
              {item.label}
            </span>
            <span className={`text-2xl font-extrabold mt-1.5 ${item.color}`}>
              {item.value}
            </span>
          </div>
        ))}
      </div>

      {/* Cards list grid */}
      {filtered.length === 0 ? (
        <div className="py-12 bg-white dark:bg-slate-900 rounded-3xl text-center text-slate-400">
          {p('noSuggestions')}
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          {filtered.map((sug) => (
            <div
              key={sug.id}
              className="bg-white dark:bg-slate-900 rounded-3xl border border-slate-100 dark:border-slate-800/60 p-5 shadow-sm flex flex-col relative transition-all hover:shadow-md"
            >
              {/* Header icons on top left */}
              <div className="absolute top-4 start-4 flex items-center gap-2">
                <button
                  onClick={() => onDelete(sug.id)}
                  className="p-1 text-slate-400 hover:text-red-500 transition-colors"
                >
                  <Trash2 size={15} />
                </button>
                <button
                  onClick={() => onEdit(sug)}
                  className="p-1 text-slate-400 hover:text-slate-600 transition-colors"
                >
                  <Pencil size={15} />
                </button>
              </div>

              {/* Emoji badge and title */}
              <div className="flex flex-col items-center text-center mt-3 flex-1">
                <div className="w-14 h-14 rounded-2xl bg-sky-50 dark:bg-sky-950/20 text-sky-600 dark:text-sky-400 flex items-center justify-center text-3xl shadow-sm mb-3">
                  {sug.emoji}
                </div>
                <h4 className="font-bold text-slate-800 dark:text-white text-base leading-tight">
                  {isRtl ? sug.name : sug.nameEn}
                </h4>
                <p className="text-slate-400 dark:text-slate-500 text-xs mt-2.5 max-w-sm px-4">
                  {isRtl ? sug.description : sug.descriptionEn}
                </p>
              </div>

              {/* Granted badge indicator & audience target */}
              <div className="flex items-center justify-between border-t border-slate-100 dark:border-slate-800/60 mt-5 pt-4 text-xs">
                <span className="px-2.5 py-1 bg-slate-50 dark:bg-slate-800 rounded-lg text-slate-500 dark:text-slate-400 font-semibold">
                  {isRtl ? sug.studentTarget : sug.studentTargetEn}
                </span>
                <span className="flex items-center gap-1.5 text-amber-500 font-bold">
                  <Award size={14} />
                  {sug.grantedCount} {p('grantedBadgesSuffix')}
                </span>
              </div>

              {/* Action Buttons */}
              {sug.status === 'pending' && (
                <div className="grid grid-cols-2 gap-3 mt-4">
                  <button
                    onClick={() => onReject(sug.id)}
                    className="py-2.5 rounded-xl bg-red-50 hover:bg-red-100/60 text-red-500 text-xs font-bold transition-colors text-center"
                  >
                    {p('rejectBtn')}
                  </button>
                  <button
                    onClick={() => onApprove(sug.id)}
                    className="py-2.5 rounded-xl bg-[#0f7a6c] hover:bg-[#0d6b5e] text-white text-xs font-bold transition-colors text-center"
                  >
                    {p('approveBtn')}
                  </button>
                </div>
              )}
            </div>
          ))}
        </div>
      )}
    </div>
  )
}

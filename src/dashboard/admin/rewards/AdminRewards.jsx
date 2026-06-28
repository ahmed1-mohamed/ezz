import { useState, useEffect } from 'react'
import { Plus, Gift } from 'lucide-react'
import { useTranslation } from 'react-i18next'
import Spinner from '@/shared/components/Spinner'
import { adminRewardsApi } from '@/shared/services/api/adminRewardsApi'
import RewardForm from './components/RewardForm'
import RewardsSuggestions from './components/RewardsSuggestions'
import GrantedBadgesGrid from './components/GrantedBadgesGrid'

export default function AdminRewards() {
  const { t, i18n } = useTranslation()
  const isRtl = i18n.language.startsWith('ar')
  const p = (key) => t(`adminDashboard.rewards.${key}`, key)

  const [stats, setStats] = useState(null)
  const [suggestions, setSuggestions] = useState([])
  const [achievements, setAchievements] = useState([])
  const [loading, setLoading] = useState(true)

  const [showForm, setShowForm] = useState(false)
  const [editingReward, setEditingReward] = useState(null)

  useEffect(() => {
    loadData()
  }, [])

  const loadData = async () => {
    setLoading(true)
    const [statsRes, suggestionsRes, achievementsRes] = await Promise.all([
      adminRewardsApi.fetchStats(),
      adminRewardsApi.fetchSuggestions(),
      adminRewardsApi.fetchAchievements(),
    ])
    if (statsRes?.data) setStats(statsRes.data)
    if (suggestionsRes?.data) setSuggestions(suggestionsRes.data)
    if (achievementsRes?.data) setAchievements(achievementsRes.data)
    setLoading(false)
  }

  const handleSaveReward = async (rewardData) => {
    if (editingReward) {
      const res = await adminRewardsApi.updateReward(editingReward.id, rewardData)
      if (res?.success) {
        // reload stats & suggestions
        loadData()
      }
    } else {
      const res = await adminRewardsApi.createReward(rewardData)
      if (res?.success) {
        loadData()
      }
    }
    setShowForm(false)
    setEditingReward(null)
  }

  const handleApproveSuggestion = async (id) => {
    const res = await adminRewardsApi.approveSuggestion(id)
    if (res?.success) {
      loadData()
    }
  }

  const handleRejectSuggestion = async (id) => {
    const res = await adminRewardsApi.rejectSuggestion(id)
    if (res?.success) {
      loadData()
    }
  }

  const handleDeleteSuggestion = async (id) => {
    const res = await adminRewardsApi.deleteSuggestion(id)
    if (res?.success) {
      loadData()
    }
  }

  if (loading && !stats) {
    return (
      <div className="flex items-center justify-center h-60">
        <Spinner />
      </div>
    )
  }

  return (
    <div className="space-y-8" dir={isRtl ? 'rtl' : 'ltr'}>
      {/* Top section: Total rewards count card */}
      <div className="bg-white dark:bg-slate-900 rounded-3xl border border-slate-100 dark:border-slate-800/60 p-6 shadow-sm flex items-center justify-between">
        <div className="flex flex-col items-center">
          <span className="text-slate-400 dark:text-slate-500 text-xs font-semibold">
            {p('statTotalRewards', 'إجمالي المكافآت')}
          </span>
          <span className="text-3xl font-extrabold text-[#0f7a6c] dark:text-emerald-400 mt-1.5">
            {stats.totalRewards}
          </span>
        </div>
      </div>

      {/* Header and create button */}
      <div className="flex items-center justify-between">
        <button
          onClick={() => {
            setEditingReward(null)
            setShowForm(!showForm)
          }}
          className="flex items-center gap-2 px-4 py-2.5 bg-[#0f7a6c] text-white rounded-xl text-xs font-bold hover:bg-[#0d6b5e] transition-colors shadow-sm shadow-[#0f7a6c]/20"
        >
          <Plus size={16} />
          {p('createRewardBtn', 'إنشاء مكافأة')}
        </button>
        <h2 className="text-slate-800 dark:text-white font-bold text-base">
          {p('availableRewardsTitle', 'المكافآت المتاحة')}
        </h2>
      </div>

      {/* Create / Edit Reward Form */}
      {showForm && (
        <RewardForm
          onSave={handleSaveReward}
          onCancel={() => {
            setShowForm(false)
            setEditingReward(null)
          }}
          editingReward={editingReward}
        />
      )}

      {/* Teacher Suggestions Grid/List */}
      <RewardsSuggestions
        suggestions={suggestions}
        stats={stats}
        onApprove={handleApproveSuggestion}
        onReject={handleRejectSuggestion}
        onEdit={(item) => {
          setEditingReward(item)
          setShowForm(true)
        }}
        onDelete={handleDeleteSuggestion}
      />

      {/* Achievements Section */}
      <div className="space-y-6">
        <div className="bg-white dark:bg-slate-900 rounded-3xl border border-slate-100 dark:border-slate-800/60 p-6 flex items-center justify-between">
          <div className="flex flex-col items-center">
            <span className="text-slate-400 dark:text-slate-500 text-xs font-semibold">
              {p('statTotalBadges', 'إجمالي الأوسمة')}
            </span>
            <span className="text-3xl font-extrabold text-slate-800 dark:text-white mt-1.5">
              {stats.totalAchievements}
            </span>
          </div>
          <h3 className="font-extrabold text-slate-800 dark:text-white text-base">
            {p('footerTitle', 'الانجازات و الأوسمة الكلية')}
          </h3>
        </div>

        <GrantedBadgesGrid achievements={achievements} />
      </div>
    </div>
  )
}

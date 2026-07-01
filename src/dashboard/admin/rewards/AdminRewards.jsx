import { useState, useEffect, useCallback } from 'react'
import { Plus, X } from 'lucide-react'
import { useTranslation } from 'react-i18next'
import Spinner from '@/shared/components/Spinner'
import { adminRewardsApi } from '@/shared/services/api/adminRewardsApi'
import { showDeleteConfirm, showSuccessToast, showErrorToast, showRewardDetails } from '@/shared/utils/sweetAlert'
import RewardForm from './components/RewardForm'
import RewardsSuggestions from './components/RewardsSuggestions'
import RewardsGrid from './components/RewardsGrid'

export default function AdminRewards() {
  const { t, i18n } = useTranslation()
  const isRtl = i18n.language.startsWith('ar')
  const p = (key) => t(`adminDashboard.rewards.${key}`, key)

  const [stats, setStats] = useState(null)
  const [rewards, setRewards] = useState([])
  const [suggestions, setSuggestions] = useState([])
  const [suggestionsStats, setSuggestionsStats] = useState(null)
  const [loading, setLoading] = useState(true)

  const [activeMainTab, setActiveMainTab] = useState('rewards')
  const [showForm, setShowForm] = useState(false)
  const [editingReward, setEditingReward] = useState(null)

  const loadData = useCallback(async () => {
    setLoading(true)
    const [statsRes, rewardsRes, suggestionsRes] = await Promise.all([
      adminRewardsApi.fetchStats(),
      adminRewardsApi.fetchRewards(),
      adminRewardsApi.fetchSuggestions(),
    ])
    if (statsRes?.data) setStats(statsRes.data)
    if (rewardsRes?.success) setRewards(rewardsRes.data)
    if (suggestionsRes?.success) {
      setSuggestions(suggestionsRes.data)
      if (suggestionsRes.stats) {
        setSuggestionsStats(suggestionsRes.stats)
      }
    }
    setLoading(false)
  }, [])

  useEffect(() => {
    // eslint-disable-next-line react-hooks/set-state-in-effect
    loadData()
  }, [loadData])

  const handleSaveReward = async (rewardData) => {
    if (editingReward) {
      const res = await adminRewardsApi.updateReward(editingReward.id || editingReward._id, rewardData)
      if (res?.success) {
        showSuccessToast(isRtl ? 'تم تحديث المكافأة بنجاح' : 'Reward updated successfully', isRtl)
        loadData()
      } else {
        showErrorToast(isRtl ? 'حدث خطأ أثناء التحديث' : 'Failed to update reward', isRtl)
      }
    } else {
      const res = await adminRewardsApi.createReward(rewardData)
      if (res?.success) {
        showSuccessToast(isRtl ? 'تم إضافة المكافأة بنجاح' : 'Reward added successfully', isRtl)
        loadData()
      } else {
        showErrorToast(isRtl ? 'حدث خطأ أثناء الإضافة' : 'Failed to add reward', isRtl)
      }
    }
    setShowForm(false)
    setEditingReward(null)
  }

  const handleDeleteReward = async (reward) => {
    const rewardName = typeof reward.name === 'object' ? (isRtl ? reward.name.ar : reward.name.en) : reward.name;
    const isConfirmed = await showDeleteConfirm(isRtl, rewardName);
    if (!isConfirmed) return;

    const res = await adminRewardsApi.deleteReward(reward.id || reward._id)
    if (res?.success) {
      showSuccessToast(isRtl ? 'تم الحذف بنجاح' : 'Deleted successfully', isRtl)
      loadData()
    } else {
      showErrorToast(isRtl ? 'فشل الحذف' : 'Deletion failed', isRtl)
    }
  }

  const handleApproveSuggestion = async (id) => {
    const res = await adminRewardsApi.approveSuggestion(id)
    if (res?.success) {
      showSuccessToast(isRtl ? 'تم قبول المقترح بنجاح' : 'Suggestion approved successfully', isRtl)
      loadData()
    } else {
      showErrorToast(isRtl ? 'فشل قبول المقترح' : 'Failed to approve suggestion', isRtl)
    }
  }

  const handleRejectSuggestion = async (id) => {
    const res = await adminRewardsApi.rejectSuggestion(id)
    if (res?.success) {
      showSuccessToast(isRtl ? 'تم رفض المقترح بنجاح' : 'Suggestion rejected successfully', isRtl)
      loadData()
    } else {
      showErrorToast(isRtl ? 'فشل رفض المقترح' : 'Failed to reject suggestion', isRtl)
    }
  }

  const handleDeleteSuggestion = async (suggestion) => {
    const suggestionName = typeof suggestion.name === 'object' ? (isRtl ? suggestion.name.ar : suggestion.name.en) : suggestion.name;
    const isConfirmed = await showDeleteConfirm(isRtl, suggestionName);
    if (!isConfirmed) return;

    const res = await adminRewardsApi.deleteSuggestion(suggestion.id || suggestion._id)
    if (res?.success) {
      showSuccessToast(isRtl ? 'تم حذف المقترح بنجاح' : 'Suggestion deleted successfully', isRtl)
      loadData()
    } else {
      showErrorToast(isRtl ? 'فشل حذف المقترح' : 'Failed to delete suggestion', isRtl)
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
      <div className="bg-white dark:bg-slate-900 rounded-3xl border border-slate-100 dark:border-slate-800/60 p-6 shadow-sm flex items-center justify-between">
        <div className="flex flex-col items-center">
          <span className="text-slate-400 dark:text-slate-500 text-xs font-semibold">
            {p('statTotalRewards', 'إجمالي المكافآت')}
          </span>
          <span className="text-3xl font-extrabold text-[#0f7a6c] dark:text-emerald-400 mt-1.5">
            {rewards.length}
          </span>
        </div>
      </div>

      <div className="flex items-center gap-2 border-b border-slate-200 dark:border-slate-800 pb-2 overflow-x-auto">
        <button
          onClick={() => setActiveMainTab('rewards')}
          className={`px-5 py-2.5 rounded-2xl text-sm font-bold transition-all whitespace-nowrap ${activeMainTab === 'rewards'
            ? 'bg-brand-50 text-brand-600 dark:bg-brand-900/30 dark:text-brand-400'
            : 'text-slate-500 hover:text-slate-700 dark:text-slate-400 dark:hover:text-slate-200 hover:bg-slate-50 dark:hover:bg-slate-800/50'
            }`}
        >
          {isRtl ? 'المكافآت المتاحة' : 'Available Rewards'}
        </button>
        <button
          onClick={() => setActiveMainTab('suggestions')}
          className={`px-5 py-2.5 rounded-2xl text-sm font-bold transition-all whitespace-nowrap ${activeMainTab === 'suggestions'
            ? 'bg-brand-50 text-brand-600 dark:bg-brand-900/30 dark:text-brand-400'
            : 'text-slate-500 hover:text-slate-700 dark:text-slate-400 dark:hover:text-slate-200 hover:bg-slate-50 dark:hover:bg-slate-800/50'
            }`}
        >
          {isRtl ? 'المكافآت المقترحة' : 'Suggested Rewards'}
        </button>
      </div>

      {activeMainTab === 'rewards' ? (
        <div className="space-y-6">
          <div className="flex items-center justify-between">
            <h2 className="text-slate-800 dark:text-white font-bold text-base">
              {p('availableRewardsTitle', 'المكافآت المتاحة')}
            </h2>
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
          </div>


          <RewardsGrid
            rewards={rewards}
            onView={(item) => showRewardDetails(item, isRtl)}
            onEdit={(item) => {
              setEditingReward(item)
              setShowForm(true)
            }}
            onDelete={handleDeleteReward}
          />
        </div>
      ) : (
        <RewardsSuggestions
          suggestions={suggestions}
          stats={suggestionsStats || stats || {}}
          onView={(item) => showRewardDetails(item, isRtl)}
          onApprove={handleApproveSuggestion}
          onReject={handleRejectSuggestion}
          onEdit={(item) => {
            setEditingReward(item)
            setShowForm(true)
            setActiveMainTab('rewards')
          }}
          onDelete={handleDeleteSuggestion}
        />
      )}

      {showForm && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-slate-900/50 backdrop-blur-sm overflow-y-auto">
          <div className="bg-white dark:bg-slate-900 rounded-3xl shadow-2xl w-full max-w-3xl my-8 relative flex flex-col max-h-[90vh]">
            <div className="p-6 border-b border-slate-100 dark:border-slate-800/60 flex items-center justify-between shrink-0">
              <h2 className="text-xl font-bold text-slate-800 dark:text-white">
                {editingReward ? (isRtl ? 'تعديل المكافأة' : 'Edit Reward') : (isRtl ? 'إضافة مكافأة' : 'Add Reward')}
              </h2>
              <button
                onClick={() => { setShowForm(false); setEditingReward(null); }}
                className="p-2 text-slate-400 hover:text-slate-600 bg-slate-100 rounded-full hover:bg-slate-200 dark:bg-slate-800 dark:hover:bg-slate-700 dark:hover:text-slate-300 transition-colors"
              >
                <X size={20} />
              </button>
            </div>
            <div className="p-6 overflow-y-auto">
              <RewardForm
                onSave={handleSaveReward}
                onCancel={() => {
                  setShowForm(false)
                  setEditingReward(null)
                }}
                editingReward={editingReward}
              />
            </div>
          </div>
        </div>
      )}
    </div>
  )
}
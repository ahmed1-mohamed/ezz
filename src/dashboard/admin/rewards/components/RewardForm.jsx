import { useState, useRef, useEffect } from 'react'
import { useTranslation } from 'react-i18next'
import {
  Gift,
  Smile,
  Sparkles,
  Check,
  Loader2,
  X,
  Palette,
} from 'lucide-react'
import EmojiPicker from 'emoji-picker-react'
import { formatRewardIcon } from '@/shared/services/api/adminRewardsApi'

const POPULAR_REWARD_EMOJIS = [
  '⭐',
  '🌟',
  '🏆',
  '🎖️',
  '👑',
  '🥇',
  '🥈',
  '🥉',
  '💪',
  '📖',
  '🎓',
  '💎',
  '🎯',
  '🔥',
  '✨',
  '🏅',
  '💡',
  '👏',
]

const COLOR_PRESETS = [
  { hex: '#4CAF50', name: 'أخضر زمردي' },
  { hex: '#00594C', name: 'أخضر وقور' },
  { hex: '#cca332', name: 'ذهبي فاخر' },
  { hex: '#2563EB', name: 'أزرق ملكي' },
  { hex: '#7C3AED', name: 'بنفسجي متألق' },
  { hex: '#E11D48', name: 'وردي ياقوتي' },
  { hex: '#D97706', name: 'عنبري مميز' },
  { hex: '#0D9488', name: 'فيروزي راقي' },
  { hex: '#475569', name: 'رمادي أنيق' },
]

export default function RewardForm({ onSave, onCancel, editingReward, isSaving = false }) {
  const { t, i18n } = useTranslation()
  const isRtl = i18n.language.startsWith('ar')
  const p = (key, fallback) => t(`adminDashboard.rewards.${key}`, fallback)

  const [name, setName] = useState('')
  const [nameEn, setNameEn] = useState('')
  const [icon, setIcon] = useState('⭐')
  const [backgroundColor, setBackgroundColor] = useState('#4CAF50')
  const [description, setDescription] = useState('')
  const [descriptionEn, setDescriptionEn] = useState('')
  const [showEmojiPicker, setShowEmojiPicker] = useState(false)

  const emojiPickerRef = useRef(null)

  useEffect(() => {
    function handleClickOutside(event) {
      if (emojiPickerRef.current && !emojiPickerRef.current.contains(event.target)) {
        setShowEmojiPicker(false)
      }
    }
    if (showEmojiPicker) {
      document.addEventListener('mousedown', handleClickOutside)
    }
    return () => {
      document.removeEventListener('mousedown', handleClickOutside)
    }
  }, [showEmojiPicker])

  useEffect(() => {
    if (editingReward) {
      const arName = typeof editingReward.name === 'object'
        ? (editingReward.name?.ar || editingReward.name?.en || '')
        : (editingReward.name || '')
      const enName = typeof editingReward.name === 'object'
        ? (editingReward.name?.en || editingReward.name?.ar || '')
        : (editingReward.nameEn || '')

      setName(arName)
      setNameEn(enName)

      const rawIcon = editingReward.icon || editingReward.emoji || '⭐'
      setIcon(formatRewardIcon(rawIcon))

      const rawBg = editingReward.backgroundColor || editingReward.bgColor || '#4CAF50'
      setBackgroundColor(rawBg)

      const arDesc = typeof editingReward.description === 'object'
        ? (editingReward.description?.ar || editingReward.description?.en || '')
        : (editingReward.description || '')
      const enDesc = typeof editingReward.description === 'object'
        ? (editingReward.description?.en || editingReward.description?.ar || '')
        : (editingReward.descriptionEn || '')

      setDescription(arDesc)
      setDescriptionEn(enDesc)
    } else {
      setName('')
      setNameEn('')
      setIcon('⭐')
      setBackgroundColor('#4CAF50')
      setDescription('')
      setDescriptionEn('')
    }
  }, [editingReward])

  const handleEmojiClick = (emojiData) => {
    if (emojiData?.emoji) {
      setIcon(emojiData.emoji)
      setShowEmojiPicker(false)
    }
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    if (!name.trim()) return

    onSave({
      name: name.trim(),
      nameEn: (nameEn.trim() || name.trim()),
      emoji: icon,
      icon,
      bgColor: backgroundColor,
      backgroundColor,
      description: description.trim(),
      descriptionEn: (descriptionEn.trim() || description.trim()),
    })
  }

  return (
    <div className="bg-white dark:bg-slate-900 rounded-3xl border border-slate-100 dark:border-slate-800/60 shadow-lg p-6 sm:p-8 max-w-4xl mx-auto space-y-6">
      <div className="flex items-center justify-between pb-4 border-b border-slate-100 dark:border-slate-800">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-2xl bg-[#0f7a6c]/10 text-[#0f7a6c] dark:bg-emerald-950/60 dark:text-emerald-300 flex items-center justify-center">
            <Gift size={22} />
          </div>
          <div className="text-start">
            <h3 className="text-lg font-black text-slate-800 dark:text-white">
              {editingReward ? p('editRewardTitle', 'تعديل بيانات المكافأة') : p('newRewardTitle', 'إنشاء مكافأة جديدة')}
            </h3>
            <p className="text-xs text-slate-400 font-medium mt-0.5">
              {editingReward
                ? p('editRewardSubtitle', 'قم بتحديث بيانات المكافأة وألوانها وأيقونتها')
                : p('newRewardSubtitle', 'أضف مكافأة تشجيعية جديدة للطلاب')}
            </p>
          </div>
        </div>
        <button
          type="button"
          onClick={onCancel}
          className="p-2 text-slate-400 hover:text-slate-600 dark:hover:text-slate-200 rounded-xl hover:bg-slate-50 dark:hover:bg-slate-800 transition-colors"
        >
          <X size={20} />
        </button>
      </div>

      <form onSubmit={handleSubmit} className="space-y-6">
        <div className="p-4 sm:p-5 rounded-2xl bg-slate-50 dark:bg-slate-800/40 border border-slate-100 dark:border-slate-800 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="text-start">
            <span className="text-[11px] font-bold uppercase tracking-wider text-slate-400 block mb-1">
              {p('livePreview', 'معاينة شكل بطاقة المكافأة')}
            </span>
            <p className="text-xs text-slate-500 dark:text-slate-400">
              {p('previewHint', 'هكذا ستظهر المكافأة للطلاب في شاشات الإنجازات والملف الشخصي')}
            </p>
          </div>
          <div className="w-44 rounded-2xl border border-slate-200 dark:border-slate-700 overflow-hidden shadow-sm bg-white dark:bg-slate-900 shrink-0">
            <div
              className="h-20 flex items-center justify-center transition-colors duration-300"
              style={{ backgroundColor: backgroundColor || '#4CAF50' }}
            >
              <div className="w-12 h-12 rounded-xl bg-white flex items-center justify-center text-2xl shadow-md">
                {icon}
              </div>
            </div>
            <div className="p-3 text-center">
              <p className="font-bold text-xs text-slate-800 dark:text-white truncate">
                {isRtl ? (name || 'اسم المكافأة') : (nameEn || name || 'Reward Name')}
              </p>
              <p className="text-[10px] text-slate-400 mt-1 line-clamp-1">
                {isRtl ? (description || 'وصف المكافأة...') : (descriptionEn || description || 'Reward description...')}
              </p>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label className="block text-xs font-bold text-slate-700 dark:text-slate-300 mb-2 text-start">
              {p('rewardNameAr', 'اسم المكافأة (باللغة العربية)')}
              <span className="text-red-500 ms-1">*</span>
            </label>
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="مثال: نجم القرآن، بطل الحفظ..."
              required
              minLength={2}
              maxLength={100}
              className="w-full bg-[#f3f7f6] dark:bg-slate-950 rounded-2xl px-4 py-3 text-sm outline-none placeholder-slate-400 text-start text-slate-800 dark:text-slate-100 border border-slate-200/80 dark:border-slate-800 focus:border-[#0f7a6c] transition-colors"
            />
          </div>
          <div>
            <label className="block text-xs font-bold text-slate-700 dark:text-slate-300 mb-2 text-start">
              {p('rewardNameEn', 'Reward Name (English)')}
            </label>
            <input
              type="text"
              value={nameEn}
              onChange={(e) => setNameEn(e.target.value)}
              placeholder="e.g. Quran Star, Memorization Hero..."
              dir="ltr"
              className="w-full bg-[#f3f7f6] dark:bg-slate-950 rounded-2xl px-4 py-3 text-sm outline-none placeholder-slate-400 text-start text-slate-800 dark:text-slate-100 border border-slate-200/80 dark:border-slate-800 focus:border-[#0f7a6c] transition-colors"
            />
          </div>
        </div>

        <div className="space-y-2">
          <label className="block text-xs font-bold text-slate-700 dark:text-slate-300 text-start">
            {p('selectIcon', 'أيقونة المكافأة (إيموجي)')}
            <span className="text-red-500 ms-1">*</span>
          </label>
          <div className="flex flex-wrap items-center gap-2">
            <div className="relative" ref={emojiPickerRef}>
              <button
                type="button"
                onClick={() => setShowEmojiPicker((prev) => !prev)}
                className="w-12 h-12 rounded-2xl bg-white dark:bg-slate-800 border-2 border-emerald-500/50 flex items-center justify-center text-2xl shadow-sm hover:scale-105 transition-transform cursor-pointer"
                title="اختر إيموجي مخصص"
              >
                {icon}
              </button>
              {showEmojiPicker && (
                <div className="absolute top-full mt-2 z-50 start-0 shadow-2xl rounded-2xl overflow-hidden">
                  <EmojiPicker onEmojiClick={handleEmojiClick} autoFocusSearch={false} />
                </div>
              )}
            </div>

            <div className="flex flex-wrap items-center gap-1.5 p-1.5 rounded-2xl bg-slate-50 dark:bg-slate-800/50 border border-slate-100 dark:border-slate-800 flex-1">
              {POPULAR_REWARD_EMOJIS.map((emojiOption) => {
                const isSelected = icon === emojiOption
                return (
                  <button
                    key={emojiOption}
                    type="button"
                    onClick={() => setIcon(emojiOption)}
                    className={`w-9 h-9 rounded-xl flex items-center justify-center text-lg transition-all cursor-pointer ${
                      isSelected
                        ? 'bg-white dark:bg-slate-700 shadow-sm ring-2 ring-[#0f7a6c] scale-110'
                        : 'hover:bg-white/60 dark:hover:bg-slate-700/60'
                    }`}
                  >
                    {emojiOption}
                  </button>
                )
              })}
            </div>
          </div>
        </div>

        <div className="space-y-2">
          <div className="flex items-center justify-between">
            <label className="block text-xs font-bold text-slate-700 dark:text-slate-300 text-start">
              {p('bgColor', 'لون خلفية المكافأة')}
              <span className="text-red-500 ms-1">*</span>
            </label>
            <div className="flex items-center gap-2">
              <span className="text-xs text-slate-400 font-mono" dir="ltr">{backgroundColor}</span>
              <input
                type="color"
                value={backgroundColor}
                onChange={(e) => setBackgroundColor(e.target.value)}
                className="w-6 h-6 rounded-lg cursor-pointer border-0 bg-transparent p-0"
              />
            </div>
          </div>
          <div className="grid grid-cols-3 sm:grid-cols-9 gap-2">
            {COLOR_PRESETS.map((preset) => {
              const isSelected = backgroundColor.toLowerCase() === preset.hex.toLowerCase()
              return (
                <button
                  key={preset.hex}
                  type="button"
                  onClick={() => setBackgroundColor(preset.hex)}
                  title={preset.name}
                  className={`h-11 rounded-xl flex items-center justify-center transition-all cursor-pointer border ${
                    isSelected ? 'ring-2 ring-[#0f7a6c] ring-offset-2 scale-105 shadow-md border-transparent' : 'border-black/5 hover:scale-102'
                  }`}
                  style={{ backgroundColor: preset.hex }}
                >
                  {isSelected && <Check size={16} className="text-white drop-shadow-md" />}
                </button>
              )
            })}
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label className="block text-xs font-bold text-slate-700 dark:text-slate-300 mb-2 text-start">
              {p('descAr', 'وصف المكافأة وسبب الاستحقاق (بالعربية)')}
              <span className="text-red-500 ms-1">*</span>
            </label>
            <textarea
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              rows={3}
              required
              placeholder="مثال: تُمنح للطالب عند إتمام حفظ الجزء بنجاح مع الالتزام التام بالأحكام..."
              className="w-full bg-[#f3f7f6] dark:bg-slate-950 rounded-2xl px-4 py-3 text-sm outline-none resize-none placeholder-slate-400 text-start text-slate-800 dark:text-slate-100 border border-slate-200/80 dark:border-slate-800 focus:border-[#0f7a6c] transition-colors"
            />
          </div>
          <div>
            <label className="block text-xs font-bold text-slate-700 dark:text-slate-300 mb-2 text-start">
              {p('descEn', 'Reward Description (English)')}
            </label>
            <textarea
              value={descriptionEn}
              onChange={(e) => setDescriptionEn(e.target.value)}
              rows={3}
              placeholder="e.g. Awarded to student upon completing the recitation with excellence..."
              dir="ltr"
              className="w-full bg-[#f3f7f6] dark:bg-slate-950 rounded-2xl px-4 py-3 text-sm outline-none resize-none placeholder-slate-400 text-start text-slate-800 dark:text-slate-100 border border-slate-200/80 dark:border-slate-800 focus:border-[#0f7a6c] transition-colors"
            />
          </div>
        </div>

        <div className="flex justify-end gap-3 pt-3 border-t border-slate-100 dark:border-slate-800">
          <button
            type="button"
            onClick={onCancel}
            disabled={isSaving}
            className="px-6 py-2.5 bg-slate-100 dark:bg-slate-800 hover:bg-slate-200 text-slate-600 dark:text-slate-300 rounded-2xl text-xs font-bold transition-colors disabled:opacity-50 cursor-pointer"
          >
            {p('cancelBtn', 'إلغاء')}
          </button>
          <button
            type="submit"
            disabled={isSaving}
            className="px-8 py-2.5 bg-[#0f7a6c] hover:bg-[#0d6b5e] text-white rounded-2xl text-xs font-bold transition-all shadow-sm shadow-[#0f7a6c]/20 disabled:opacity-70 flex items-center justify-center gap-2 cursor-pointer"
          >
            {isSaving && <Loader2 className="w-4 h-4 animate-spin" />}
            {editingReward ? p('updateBtn', 'تحديث المكافأة') : p('saveBtn', 'حفظ المكافأة')}
          </button>
        </div>
      </form>
    </div>
  )
}
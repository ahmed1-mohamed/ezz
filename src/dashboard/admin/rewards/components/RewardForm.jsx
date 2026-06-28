import { useState } from 'react'
import { useTranslation } from 'react-i18next'

const COLOR_OPTIONS = [
  { key: 'red', labelAr: 'احمر', labelEn: 'Red', bgColor: '#fee2e2', textColor: '#dc2626' },
  { key: 'green', labelAr: 'اخضر', labelEn: 'Green', bgColor: '#d1fae5', textColor: '#059669' },
  { key: 'yellow', labelAr: 'اصفر', labelEn: 'Yellow', bgColor: '#fef3c7', textColor: '#d97706' },
  { key: 'blue', labelAr: 'ازرق', labelEn: 'Blue', bgColor: '#dbeafe', textColor: '#2563eb' },
  { key: 'purple', labelAr: 'بنفسجي', labelEn: 'Purple', bgColor: '#f3e8ff', textColor: '#7c3aed' },
]

export default function RewardForm({ onSave, onCancel, editingReward }) {
  const { t, i18n } = useTranslation()
  const isRtl = i18n.language.startsWith('ar')
  const p = (key) => t(`adminDashboard.rewards.${key}`, key)

  const [name, setName] = useState('')
  const [nameEn, setNameEn] = useState('')
  const [emoji, setEmoji] = useState('⭐')
  const [selectedColor, setSelectedColor] = useState(COLOR_OPTIONS[0])
  const [description, setDescription] = useState('')
  const [descriptionEn, setDescriptionEn] = useState('')
  const [prevEditingReward, setPrevEditingReward] = useState(editingReward)

  if (editingReward !== prevEditingReward) {
    setPrevEditingReward(editingReward)
    if (editingReward) {
      setName(editingReward.name || '')
      setNameEn(editingReward.nameEn || '')
      setEmoji(editingReward.emoji || '⭐')
      const matched = COLOR_OPTIONS.find((c) => c.bgColor === editingReward.bgColor)
      if (matched) setSelectedColor(matched)
      setDescription(editingReward.description || '')
      setDescriptionEn(editingReward.descriptionEn || '')
    } else {
      setName('')
      setNameEn('')
      setEmoji('⭐')
      setSelectedColor(COLOR_OPTIONS[0])
      setDescription('')
      setDescriptionEn('')
    }
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    if (!name.trim()) return
    onSave({
      name,
      nameEn,
      emoji,
      bgColor: selectedColor.bgColor,
      textColor: selectedColor.textColor,
      description,
      descriptionEn,
    })
  }

  return (
    <div className="bg-white dark:bg-slate-900 rounded-3xl border border-slate-100 dark:border-slate-800/60 shadow-sm p-6 max-w-4xl mx-auto">
      <h3 className="font-bold text-slate-800 dark:text-white text-base mb-6 text-end">
        {editingReward ? p('editRewardTitle') : p('newRewardTitle')}
      </h3>

      <form onSubmit={handleSubmit} className="space-y-6">
        {/* Name Fields */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label className="block text-xs font-semibold text-slate-500 mb-2">Reward Name</label>
            <input
              type="text"
              value={nameEn}
              onChange={(e) => setNameEn(e.target.value)}
              placeholder="Name Reward"
              className="w-full bg-[#f3f7f6] dark:bg-slate-950 rounded-2xl px-4 py-3 text-sm outline-none placeholder-slate-400 text-start text-slate-800 dark:text-slate-100"
            />
          </div>
          <div>
            <label className="block text-xs font-semibold text-slate-500 mb-2 text-end">اسم المكافأة</label>
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="مثال: نجم القرآن"
              required
              className="w-full bg-[#f3f7f6] dark:bg-slate-950 rounded-2xl px-4 py-3 text-sm outline-none placeholder-slate-400 text-end text-slate-800 dark:text-slate-100"
            />
          </div>
        </div>

        {/* Emoji Icon Field */}
        <div>
          <label className="block text-xs font-semibold text-slate-500 mb-2 text-end">أيقونة (إيموجي)</label>
          <input
            type="text"
            value={emoji}
            onChange={(e) => setEmoji(e.target.value)}
            className="w-full bg-[#f3f7f6] dark:bg-slate-950 rounded-2xl px-4 py-3 text-sm outline-none text-center text-slate-800 dark:text-slate-100"
          />
        </div>

        {/* Background Color Field */}
        <div>
          <label className="block text-xs font-semibold text-slate-500 mb-2 text-end">لون الخلفية للمكافأة</label>
          <select
            value={selectedColor.key}
            onChange={(e) => {
              const matched = COLOR_OPTIONS.find((c) => c.key === e.target.value)
              if (matched) setSelectedColor(matched)
            }}
            className="w-full bg-[#f3f7f6] dark:bg-slate-950 rounded-2xl px-4 py-3 text-sm outline-none text-end text-slate-700 dark:text-slate-300"
          >
            {COLOR_OPTIONS.map((opt) => (
              <option key={opt.key} value={opt.key}>
                {isRtl ? opt.labelAr : opt.labelEn}
              </option>
            ))}
          </select>
        </div>

        {/* Description AR Field */}
        <div>
          <label className="block text-xs font-semibold text-slate-500 mb-2 text-end">وصف المكافأة</label>
          <textarea
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            rows={4}
            placeholder="اشرح متى ولمن تُمنح هذه المكافأة..."
            className="w-full bg-[#f3f7f6] dark:bg-slate-950 rounded-2xl px-4 py-3 text-sm outline-none resize-none placeholder-slate-400 text-end text-slate-800 dark:text-slate-100"
          />
        </div>

        {/* Description EN Field */}
        <div>
          <label className="block text-xs font-semibold text-slate-500 mb-2">Reward Describe</label>
          <textarea
            value={descriptionEn}
            onChange={(e) => setDescriptionEn(e.target.value)}
            rows={4}
            placeholder="Describe"
            className="w-full bg-[#f3f7f6] dark:bg-slate-950 rounded-2xl px-4 py-3 text-sm outline-none resize-none placeholder-slate-400 text-slate-800 dark:text-slate-100"
          />
        </div>

        {/* Buttons */}
        <div className="flex justify-end gap-3 pt-3">
          <button
            type="button"
            onClick={onCancel}
            className="px-6 py-2.5 bg-slate-100 dark:bg-slate-800 hover:bg-slate-200 text-slate-600 dark:text-slate-300 rounded-2xl text-xs font-bold transition-colors"
          >
            {p('cancelBtn')}
          </button>
          <button
            type="submit"
            className="px-8 py-2.5 bg-[#0f7a6c] hover:bg-[#0d6b5e] text-white rounded-2xl text-xs font-bold transition-all shadow-sm shadow-[#0f7a6c]/20"
          >
            {p('saveBtn')}
          </button>
        </div>
      </form>
    </div>
  )
}

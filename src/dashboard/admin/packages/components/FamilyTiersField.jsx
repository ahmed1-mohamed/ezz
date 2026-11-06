import { Plus, Trash2 } from 'lucide-react'
import { MIN_FAMILY_MEMBERS } from './packages_constants'

export default function FamilyTiersField({ tiers = [], maxMembers, basePrice, onChange, isRtl }) {
  const usedCounts = tiers.map((tier) => Number(tier.membersCount))
  const availableCounts = []
  for (let n = MIN_FAMILY_MEMBERS; n <= Number(maxMembers || MIN_FAMILY_MEMBERS); n++) availableCounts.push(n)
  const nextCount = availableCounts.find((n) => !usedCounts.includes(n))
  const updateTier = (index, key, value) => {
    onChange(tiers.map((tier, i) => (i === index ? { ...tier, [key]: value } : tier)))
  }
  return (
    <div className="space-y-3">
      <div className="flex items-center justify-between gap-2">
        <label className="block text-xs font-medium text-slate-500 text-start">
          {isRtl ? 'أسعار الأفراد حسب عدد الأفراد' : 'Price per person by number of members'}
        </label>
        <button
          type="button"
          disabled={!nextCount}
          onClick={() => onChange([...tiers, { membersCount: nextCount, pricePerPerson: basePrice || '' }])}
          className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl text-xs font-semibold text-[#0f7a6c] bg-[#0f7a6c]/10 hover:bg-[#0f7a6c]/20 disabled:opacity-40 disabled:cursor-not-allowed transition-colors"
        >
          <Plus size={14} />
          <span>{isRtl ? 'إضافة شريحة' : 'Add tier'}</span>
        </button>
      </div>
      {tiers.length === 0 ? (
        <p className="text-xs text-slate-400 bg-[#f3f7f6] dark:bg-slate-900/60 rounded-xl px-4 py-3 text-start">
          {isRtl ? 'لم تتم إضافة أسعار للأفراد بعد' : 'No member pricing added yet'}
        </p>
      ) : (
        <div className="space-y-2">
          {tiers.map((tier, index) => {
            const perPerson = Number(tier.pricePerPerson)
            const total = Number(tier.membersCount) * (Number.isFinite(perPerson) ? perPerson : 0)
            return (
              <div key={index} className="grid grid-cols-[1fr_1fr_auto] sm:grid-cols-[1fr_1fr_auto_auto] items-end gap-2">
                <div>
                  <span className="block text-[11px] text-slate-400 mb-1 text-start">{isRtl ? 'عدد الأفراد' : 'Members'}</span>
                  <select
                    value={tier.membersCount}
                    onChange={(e) => updateTier(index, 'membersCount', Number(e.target.value))}
                    className="w-full bg-[#f3f7f6] dark:bg-slate-900/60 rounded-xl px-3 py-2.5 text-sm outline-none text-slate-800 dark:text-slate-100"
                  >
                    {availableCounts
                      .filter((n) => n === Number(tier.membersCount) || !usedCounts.includes(n))
                      .map((n) => <option key={n} value={n}>{n}</option>)}
                  </select>
                </div>
                <div>
                  <span className="block text-[11px] text-slate-400 mb-1 text-start">{isRtl ? 'سعر الفرد' : 'Price per person'}</span>
                  <input
                    type="number"
                    min="0"
                    value={tier.pricePerPerson}
                    onChange={(e) => updateTier(index, 'pricePerPerson', e.target.value)}
                    dir="ltr"
                    className="w-full bg-[#f3f7f6] dark:bg-slate-900/60 rounded-xl px-3 py-2.5 text-sm outline-none text-slate-800 dark:text-slate-100"
                  />
                </div>
                <span className="hidden sm:block text-xs font-semibold text-slate-500 pb-3 whitespace-nowrap">
                  {isRtl ? `الإجمالي: ${total}` : `Total: ${total}`}
                </span>
                <button
                  type="button"
                  onClick={() => onChange(tiers.filter((_, i) => i !== index))}
                  aria-label={isRtl ? 'حذف الشريحة' : 'Remove tier'}
                  className="p-2.5 rounded-xl text-red-400 hover:bg-red-50 dark:hover:bg-red-900/20 transition-colors"
                >
                  <Trash2 size={16} />
                </button>
              </div>
            )
          })}
        </div>
      )}
    </div>
  )
}

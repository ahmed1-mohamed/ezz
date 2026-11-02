import { motion } from 'framer-motion'
import { Pencil, Trash2, Package, Check, Globe, Users, User } from 'lucide-react'
import { useTranslation } from 'react-i18next'
import { getCountryName } from '@/shared/utils/countryUtils'

export default function PackageCard({ pkg, onEdit, onDelete, explanationLanguages = [], countries = [] }) {
  const { t, i18n } = useTranslation()
  const p = (key) => t(`adminDashboard.packages.${key}`)

  const accentColor = '#005953'
  const cardBg = 'bg-[#005953]/5 dark:bg-[#005953]/10'

  const isRtl = i18n.language.startsWith('ar')
  const langObj = explanationLanguages.find(l => l.id === pkg.sessions_language)
  const languageLabel = langObj 
    ? (typeof langObj.name === 'object' && langObj.name !== null
        ? (isRtl ? (langObj.name.ar || langObj.name.en) : (langObj.name.en || langObj.name.ar))
        : langObj.name)
    : pkg.sessions_language

  const countryObj = countries.find(c => (c.id || c._id) === pkg.country || c.name === pkg.country || c.nameEn === pkg.country)
  const countryName = countryObj
    ? getCountryName(countryObj, isRtl)
    : (pkg.country || '')
  const countryFlag = countryObj?.flag || ''

  const displayName = isRtl ? (pkg.name || pkg.name_en) : (pkg.name_en || pkg.name)
  const isFamily = pkg.type === 'family'
  const hasDiscount = pkg.priceAfterDiscount !== null && pkg.priceAfterDiscount !== undefined && Number(pkg.priceAfterDiscount) < Number(pkg.price)
  const discountPct = hasDiscount
    ? (pkg.discountPercentage ?? Math.round((1 - Number(pkg.priceAfterDiscount) / Number(pkg.price)) * 10000) / 100)
    : null
  const tiers = Array.isArray(pkg.familyTiers) ? pkg.familyTiers : []

  const displayFeatures = isRtl
    ? (pkg.features?.length ? pkg.features : pkg.features_en || [])
    : (pkg.features_en?.length ? pkg.features_en : pkg.features || [])

  return (
    <motion.div
      layout
      initial={{ opacity: 0, y: 12 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, scale: 0.95 }}
      className={`rounded-3xl border border-slate-100 dark:border-slate-800 shadow-soft hover:shadow-md transition-all flex flex-col overflow-hidden ${cardBg}`}
    >
      <div className="p-6 flex flex-col items-center gap-3 flex-1">
        <div
          className="w-16 h-16 rounded-2xl flex items-center justify-center shadow-sm mt-1 overflow-hidden"
          style={{ backgroundColor: accentColor }}
        >
          {pkg.image ? (
            <img
              src={pkg.image}
              alt={displayName}
              className="w-full h-full object-cover"
              onError={(e) => {
                e.currentTarget.style.display = 'none'
                const fallbackIcon = e.currentTarget.parentElement.querySelector('.pkg-fallback-icon')
                if (fallbackIcon) fallbackIcon.style.display = 'flex'
              }}
            />
          ) : null}
          <div
            className="w-full h-full flex items-center justify-center text-white font-bold text-2xl uppercase pkg-fallback-icon"
            style={{ display: pkg.image ? 'none' : 'flex' }}
          >
            {displayName?.trim()?.charAt(0) || <Package size={24} className="text-white" />}
          </div>
        </div>

        <div className="text-center space-y-2">
          <h3 className="font-bold text-slate-800 dark:text-white text-base leading-tight">
            {displayName}
          </h3>
          <span className={`inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full text-[11px] font-bold ${isFamily
            ? 'bg-amber-50 text-amber-700 dark:bg-amber-950/30 dark:text-amber-400'
            : 'bg-sky-50 text-sky-700 dark:bg-sky-950/30 dark:text-sky-400'}`}
          >
            {isFamily ? <Users size={12} /> : <User size={12} />}
            {isFamily ? (isRtl ? 'باقة عائلية' : 'Family package') : (isRtl ? 'باقة فردية' : 'Individual package')}
          </span>
        </div>

        <div className="text-center mt-1">
          <div className="flex items-baseline justify-center gap-2 flex-wrap">
            <span className="text-4xl font-extrabold" style={{ color: accentColor }}>
              {hasDiscount ? pkg.priceAfterDiscount : pkg.price}
            </span>
            {hasDiscount && (
              <>
                <span className="text-lg font-bold text-slate-400 line-through">{pkg.price}</span>
                <span className="text-[11px] font-bold px-2 py-0.5 rounded-full bg-rose-50 text-rose-600 dark:bg-rose-950/30 dark:text-rose-400">
                  {isRtl ? `خصم ${discountPct}%` : `${discountPct}% off`}
                </span>
              </>
            )}
          </div>
          <p className="text-slate-500 dark:text-slate-400 text-xs mt-1">
            {isRtl ? 'دولار' : '$'} {p('perMonth')}
          </p>
          <p className="text-slate-400 dark:text-slate-500 text-xs mt-0.5 flex items-center justify-center flex-wrap gap-1">
            <span>{pkg.sessions_per_month} {p('sessions')}</span>
            {pkg.sessionDuration && (
              <>
                <span>·</span>
                <span className="font-semibold text-emerald-700 dark:text-emerald-400">
                  {pkg.sessionDuration} {isRtl ? 'دقيقة' : 'min'}
                </span>
              </>
            )}
            <span>·</span>
            <span>{languageLabel}</span>
            {countryName && (
              <>
                <span>·</span>
                <span className="inline-flex items-center gap-1 font-semibold text-slate-600 dark:text-slate-300">
                  {countryFlag ? <span>{countryFlag}</span> : <Globe size={11} className="text-[#005953]" />}
                  <span>{countryName}</span>
                </span>
              </>
            )}
          </p>
        </div>

        {isFamily && (
          <div className="w-full rounded-2xl bg-white/70 dark:bg-slate-900/50 border border-slate-100 dark:border-slate-800 p-3 space-y-2">
            <div className="flex items-center justify-between text-xs font-bold text-slate-600 dark:text-slate-300">
              <span>{isRtl ? 'أقصى عدد للأفراد' : 'Max members'}</span>
              <span>{pkg.maxMembers ?? '-'}</span>
            </div>
            {tiers.length > 0 && (
              <table className="w-full text-xs text-slate-600 dark:text-slate-300">
                <thead>
                  <tr className="text-slate-400">
                    <th className="font-semibold text-start py-1">{isRtl ? 'الأفراد' : 'Members'}</th>
                    <th className="font-semibold text-start py-1">{isRtl ? 'سعر الفرد' : 'Per person'}</th>
                    <th className="font-semibold text-start py-1">{isRtl ? 'الإجمالي' : 'Total'}</th>
                    <th className="font-semibold text-start py-1">{isRtl ? 'الخصم' : 'Discount'}</th>
                  </tr>
                </thead>
                <tbody>
                  {tiers.map((tier) => (
                    <tr key={tier.membersCount} className="border-t border-slate-100 dark:border-slate-800">
                      <td className="py-1 font-semibold">{tier.membersCount}</td>
                      <td className="py-1">{tier.pricePerPerson}</td>
                      <td className="py-1">{tier.totalPrice ?? Number(tier.membersCount) * Number(tier.pricePerPerson)}</td>
                      <td className="py-1">{tier.discountPercentage != null ? `${tier.discountPercentage}%` : '-'}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            )}
          </div>
        )}

        <ul className="w-full space-y-1.5 mt-1">
          {displayFeatures.map((feat, i) => (
            <li key={i} className="flex items-center justify-start gap-2 text-sm text-slate-600 dark:text-slate-400">
              <Check size={14} className="shrink-0" style={{ color: accentColor }} />
              <span>{feat}</span>
            </li>
          ))}
        </ul>
      </div>

      {(onEdit || onDelete) && (
        <div className="flex items-center gap-2 px-4 pb-4">
          {onEdit && (
            <button
              onClick={() => onEdit(pkg)}
              className="flex-1 flex items-center justify-center gap-2 py-2.5 rounded-xl text-white text-sm font-semibold transition-all hover:opacity-90 active:scale-95 cursor-pointer"
              style={{ backgroundColor: accentColor }}
            >
              <Pencil size={14} />
              {p('edit')}
            </button>
          )}
          {onDelete && (
            <button
              onClick={() => onDelete(pkg.id)}
              aria-label={p('deleteConfirm')}
              className="p-2.5 rounded-xl text-red-400 hover:bg-red-50 dark:hover:bg-red-900/20 border border-red-100 dark:border-red-900/30 transition-all shrink-0 cursor-pointer"
            >
              <Trash2 size={16} />
            </button>
          )}
        </div>
      )}
    </motion.div>
  )
}
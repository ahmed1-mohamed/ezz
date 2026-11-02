import { useState, useMemo } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { X } from 'lucide-react'
import { createPortal } from 'react-dom'
import { useTranslation } from 'react-i18next'
import Spinner from '@/shared/components/Spinner'
import toast from 'react-hot-toast'
import SelectField from './SelectField'
import PackageImageUpload from './PackageImageUpload'
import PackageFeaturesField from './PackageFeaturesField'
import { sortCountries, getCountryName } from '@/shared/utils/countryUtils'
import FamilyTiersField from './FamilyTiersField'
import {
  EMPTY_PACKAGE,
  PACKAGE_TYPES,
  MIN_FAMILY_MEMBERS,
  MAX_FAMILY_MEMBERS,
} from './packages_constants'

export default function PackageFormPanel({ isOpen, onClose, onSave, onRemoveDiscount, editingPackage, explanationLanguages = [], countries = [] }) {
  const { t, i18n } = useTranslation()
  const isRtl = i18n.language.startsWith('ar')
  const p = (key) => t(`adminDashboard.packages.${key}`)

  const sortedCountries = useMemo(() => {
    return sortCountries(countries, isRtl)
  }, [countries, isRtl])

  const [form, setForm] = useState(EMPTY_PACKAGE)
  const [saving, setSaving] = useState(false)
  const [removingDiscount, setRemovingDiscount] = useState(false)
  const [imagePreview, setImagePreview] = useState(null)
  const [imageFile, setImageFile] = useState(null)
  const [prevSyncKey, setPrevSyncKey] = useState({ isOpen, editingPackage })

  if (prevSyncKey.isOpen !== isOpen || prevSyncKey.editingPackage !== editingPackage) {
    setPrevSyncKey({ isOpen, editingPackage })
    if (isOpen) {
      if (editingPackage) {
        const validLanguage = explanationLanguages.some(l => l.id === editingPackage.sessions_language)
          ? editingPackage.sessions_language
          : (explanationLanguages?.[0]?.id || '')

        setForm({
          ...EMPTY_PACKAGE,
          ...editingPackage,
          country: editingPackage.country || editingPackage.countryId || '',
          sessions_language: validLanguage,
          features: editingPackage.features?.length ? [...editingPackage.features] : [''],
          features_en: editingPackage.features_en?.length ? [...editingPackage.features_en] : [''],
          priceAfterDiscount: editingPackage.priceAfterDiscount ?? '',
          maxMembers: editingPackage.maxMembers || MIN_FAMILY_MEMBERS,
          familyTiers: (editingPackage.familyTiers || []).map((tier) => ({
            membersCount: tier.membersCount,
            pricePerPerson: tier.pricePerPerson,
          })),
        })
        setImagePreview(editingPackage.image || null)
        setImageFile(null)
      } else {
        setForm({
          ...EMPTY_PACKAGE,
          country: '',
          sessions_language: explanationLanguages?.[0]?.id || ''
        })
        setImagePreview(null)
        setImageFile(null)
      }
    }
  }

  const handleImageChange = (e) => {
    const file = e.target.files[0]
    if (!file) return
    setImageFile(file)
    const reader = new FileReader()
    reader.onload = (ev) => setImagePreview(ev.target.result)
    reader.readAsDataURL(file)
  }

  const setField = (key, value) => setForm((prev) => ({ ...prev, [key]: value }))

  const setFeature = (index, value) => {
    const updated = [...form.features]
    updated[index] = value
    setField('features', updated)
  }

  const setFeatureEn = (index, value) => {
    const updated = [...form.features_en]
    updated[index] = value
    setField('features_en', updated)
  }

  const addFeature = () => {
    setField('features', [...form.features, ''])
    setField('features_en', [...form.features_en, ''])
  }

  const removeFeature = (index) => {
    setField('features', form.features.filter((_, i) => i !== index))
    setField('features_en', form.features_en.filter((_, i) => i !== index))
  }

  const handleSubmit = async (e) => {
    e.preventDefault()

    const rawFeatures = form.features
      .map(f => typeof f === 'string' ? f.trim() : '')
      .filter(f => f.length > 0)

    const rawFeaturesEn = form.features_en
      .map(f => typeof f === 'string' ? f.trim() : '')
      .filter(f => f.length > 0)

    if (rawFeatures.length === 0) {
      toast.error(isRtl ? 'يجب إضافة ميزة واحدة على الأقل للباقة' : 'At least one feature is required')
      return
    }

    const hasShortAr = rawFeatures.some(f => f.length < 3)
    if (hasShortAr) {
      toast.error(isRtl ? 'يجب أن لا يقل طول نص كل ميزة عن 3 أحرف' : 'Each feature must be at least 3 characters')
      return
    }

    if (!form.country) {
      toast.error(isRtl ? 'الرجاء اختيار الدولة' : 'Please select a country')
      return
    }

    const price = Number(form.price)
    const hasDiscount = form.type !== 'family' && form.priceAfterDiscount !== '' && form.priceAfterDiscount !== null
    if (hasDiscount && (Number(form.priceAfterDiscount) < 0 || Number(form.priceAfterDiscount) >= price)) {
      toast.error(isRtl ? 'السعر بعد الخصم يجب أن يكون أقل من السعر الأصلي' : 'Discounted price must be lower than the original price')
      return
    }

    if (form.type === 'family') {
      const maxMembers = Number(form.maxMembers)
      const invalidTier = form.familyTiers.find((tier) =>
        Number(tier.membersCount) < MIN_FAMILY_MEMBERS ||
        Number(tier.membersCount) > maxMembers ||
        tier.pricePerPerson === '' || Number(tier.pricePerPerson) < 0
      )
      if (invalidTier) {
        toast.error(isRtl
          ? `تأكد من أن عدد الأفراد بين ${MIN_FAMILY_MEMBERS} و ${maxMembers} وأن سعر الفرد صحيح`
          : `Members count must be between ${MIN_FAMILY_MEMBERS} and ${maxMembers} with a valid price per person`)
        return
      }
    }

    const finalFeaturesEn = rawFeatures.map((feat, idx) => {
      const enVal = rawFeaturesEn[idx]
      return (enVal && enVal.trim().length >= 3) ? enVal.trim() : feat
    })

    setSaving(true)
    const cleaned = {
      ...form,
      price,
      priceAfterDiscount: hasDiscount ? Number(form.priceAfterDiscount) : null,
      sessions_per_month: Number(form.sessions_per_month),
      sessionDuration: Number(form.sessionDuration) || 60,
      features: rawFeatures,
      features_en: finalFeaturesEn,
      imageFile
    }
    await onSave(cleaned)
    setSaving(false)
  }

  const handleRemoveDiscount = async () => {
    setRemovingDiscount(true)
    try {
      const ok = await onRemoveDiscount(editingPackage.id)
      if (ok) setField('priceAfterDiscount', '')
    } finally {
      setRemovingDiscount(false)
    }
  }

  const discountPreview = form.price && form.priceAfterDiscount !== '' && Number(form.priceAfterDiscount) < Number(form.price)
    ? Math.round((1 - Number(form.priceAfterDiscount) / Number(form.price)) * 10000) / 100
    : null
  const isFamily = form.type === 'family'

  return createPortal(
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-[9999] flex items-center justify-center p-4" dir={isRtl ? 'rtl' : 'ltr'}>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="absolute inset-0 bg-slate-950/40 dark:bg-black/60 backdrop-blur-sm"
          />
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 12 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 12 }}
            transition={{ duration: 0.25, ease: 'easeOut' }}
            className="relative z-10 w-full max-w-2xl max-h-[90vh] bg-white dark:bg-slate-900 rounded-3xl shadow-2xl flex flex-col border border-slate-100 dark:border-slate-800/60 overflow-hidden"
          >
            <div className="flex items-center justify-between px-6 py-5 border-b border-slate-100/60 dark:border-slate-800/60 shrink-0 bg-slate-50/50 dark:bg-slate-900/50">
              <h2 className="font-bold text-slate-800 dark:text-white text-base">
                {editingPackage ? p('editPackage') : p('createPackage')}
              </h2>
              <button
                onClick={onClose}
                className="p-2 rounded-xl hover:bg-slate-100 dark:hover:bg-slate-800 text-slate-400 hover:text-slate-600 transition-colors"
                aria-label={p('cancel')}
              >
                <X size={18} />
              </button>
            </div>

            <form onSubmit={handleSubmit} className="flex-1 overflow-y-auto px-6 py-5 space-y-5">
              <PackageImageUpload
                imagePreview={imagePreview}
                onImageChange={handleImageChange}
                label={p('packageImage')}
                hint={p('imageHint')}
                packageName={form.name || form.name_en}
              />

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
                  <label htmlFor="name" className="block text-xs font-medium text-slate-500 mb-1.5 text-start">{p('packageNameAr')}</label>
                  <input
                    id="name"
                    name="name"
                    value={form.name}
                    onChange={(e) => setField('name', e.target.value)}
                    placeholder={p('packageNameArPlaceholder')}
                    required
                    dir="rtl"
                    className="w-full bg-[#f3f7f6] dark:bg-slate-900/60 rounded-xl px-4 py-2.5 text-sm outline-none placeholder-slate-400 text-start text-slate-800 dark:text-slate-100"
                  />
                </div>
                <div>
                  <label htmlFor="name_en" className="block text-xs font-medium text-slate-500 mb-1.5 text-start">{p('packageNameEn')}</label>
                  <input
                    id="name_en"
                    name="name_en"
                    value={form.name_en}
                    onChange={(e) => setField('name_en', e.target.value)}
                    placeholder={p('packageNameEnPlaceholder')}
                    dir="ltr"
                    className="w-full bg-[#f3f7f6] dark:bg-slate-900/60 rounded-xl px-4 py-2.5 text-sm outline-none placeholder-slate-400 text-start text-slate-800 dark:text-slate-100"
                  />
                </div>
              </div>

              <div>
                <span className="block text-xs font-medium text-slate-500 mb-1.5 text-start">
                  {isRtl ? 'نوع الباقة' : 'Package type'}
                </span>
                <div className="grid grid-cols-2 gap-3" role="radiogroup">
                  {PACKAGE_TYPES.map((type) => {
                    const isSelected = form.type === type
                    return (
                      <button
                        key={type}
                        type="button"
                        role="radio"
                        aria-checked={isSelected}
                        onClick={() => {
                          setField('type', type)
                          if (type === 'family') setField('priceAfterDiscount', '')
                        }}
                        className={`py-2.5 rounded-xl text-sm font-semibold border transition-all ${isSelected
                          ? 'bg-[#0f7a6c] border-[#0f7a6c] text-white'
                          : 'bg-[#f3f7f6] dark:bg-slate-900/60 border-transparent text-slate-600 dark:text-slate-300 hover:border-[#0f7a6c]/30'}`}
                      >
                        {type === 'family' ? (isRtl ? 'باقة عائلية' : 'Family') : (isRtl ? 'باقة فردية' : 'Individual')}
                      </button>
                    )
                  })}
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                <div>
                  <label htmlFor="price" className="block text-xs font-medium text-slate-500 mb-1.5 text-start">{p('price')}</label>
                  <input
                    id="price"
                    name="price"
                    type="number"
                    value={form.price}
                    onChange={(e) => setField('price', e.target.value)}
                    placeholder={p('pricePlaceholder')}
                    required
                    dir="ltr"
                    className="w-full bg-[#f3f7f6] dark:bg-slate-900/60 rounded-xl px-4 py-2.5 text-sm outline-none placeholder-slate-400 text-start text-slate-800 dark:text-slate-100"
                  />
                </div>
                <div>
                  <label htmlFor="sessions_per_month" className="block text-xs font-medium text-slate-500 mb-1.5 text-start">{p('sessionsCount')}</label>
                  <input
                    id="sessions_per_month"
                    name="sessions_per_month"
                    type="number"
                    min="1"
                    value={form.sessions_per_month ?? ''}
                    onChange={(e) => setField('sessions_per_month', e.target.value)}
                    placeholder={p('sessionsCount')}
                    required
                    dir="ltr"
                    className="w-full bg-[#f3f7f6] dark:bg-slate-900/60 rounded-xl px-4 py-2.5 text-sm outline-none placeholder-slate-400 text-start text-slate-800 dark:text-slate-100"
                  />
                </div>
                <div>
                  <label htmlFor="sessionDuration" className="block text-xs font-medium text-slate-500 mb-1.5 text-start">
                    {isRtl ? 'مدة الحصة (بالدقائق)' : 'Duration (min)'}
                  </label>
                  <input
                    id="sessionDuration"
                    name="sessionDuration"
                    type="number"
                    min="1"
                    value={form.sessionDuration ?? 60}
                    onChange={(e) => setField('sessionDuration', e.target.value)}
                    placeholder={isRtl ? '60 دقيقة' : '60 min'}
                    required
                    dir="ltr"
                    className="w-full bg-[#f3f7f6] dark:bg-slate-900/60 rounded-xl px-4 py-2.5 text-sm outline-none placeholder-slate-400 text-start text-slate-800 dark:text-slate-100"
                  />
                </div>
              </div>

              {!isFamily && (
                <div>
                  <div className="flex items-center justify-between gap-2 mb-1.5">
                    <label htmlFor="priceAfterDiscount" className="block text-xs font-medium text-slate-500 text-start">
                      {isRtl ? 'السعر بعد الخصم (اختياري — عند وجود خصم فقط)' : 'Price after discount (optional — only if discounted)'}
                    </label>
                    {discountPreview !== null && (
                      <span className="text-[11px] font-bold px-2 py-0.5 rounded-full bg-rose-50 text-rose-600 dark:bg-rose-950/30 dark:text-rose-400 shrink-0">
                        {isRtl ? `خصم ${discountPreview}%` : `${discountPreview}% off`}
                      </span>
                    )}
                  </div>
                  <div className="flex gap-2">
                    <input
                      id="priceAfterDiscount"
                      name="priceAfterDiscount"
                      type="number"
                      min="0"
                      value={form.priceAfterDiscount ?? ''}
                      onChange={(e) => setField('priceAfterDiscount', e.target.value)}
                      placeholder={isRtl ? 'اتركه فارغاً إذا لا يوجد خصم' : 'Leave empty if there is no discount'}
                      dir="ltr"
                      className="flex-1 min-w-0 bg-[#f3f7f6] dark:bg-slate-900/60 rounded-xl px-4 py-2.5 text-sm outline-none placeholder-slate-400 text-start text-slate-800 dark:text-slate-100"
                    />
                    {editingPackage?.priceAfterDiscount != null && onRemoveDiscount && (
                      <button
                        type="button"
                        onClick={handleRemoveDiscount}
                        disabled={removingDiscount}
                        className="shrink-0 px-3 py-2.5 rounded-xl text-xs font-semibold text-rose-600 border border-rose-200 hover:bg-rose-50 dark:border-rose-900/40 dark:hover:bg-rose-950/20 disabled:opacity-50 transition-colors"
                      >
                        {isRtl ? 'إلغاء الخصم' : 'Remove discount'}
                      </button>
                    )}
                  </div>
                </div>
              )}

              {isFamily && (
                <div className="space-y-4 p-4 rounded-2xl border border-[#0f7a6c]/15 bg-[#0f7a6c]/[0.03]">
                  <div>
                    <span className="block text-xs font-medium text-slate-500 mb-1.5 text-start">
                      {isRtl ? 'أقصى عدد للأفراد في الباقة' : 'Maximum members'}
                    </span>
                    <div className="grid grid-cols-4 gap-2" role="radiogroup">
                      {Array.from({ length: MAX_FAMILY_MEMBERS - MIN_FAMILY_MEMBERS + 1 }, (_, i) => MIN_FAMILY_MEMBERS + i).map((n) => (
                        <button
                          key={n}
                          type="button"
                          role="radio"
                          aria-checked={Number(form.maxMembers) === n}
                          onClick={() => {
                            setField('maxMembers', n)
                            setField('familyTiers', form.familyTiers.filter((tier) => Number(tier.membersCount) <= n))
                          }}
                          className={`py-2 rounded-xl text-sm font-bold border transition-all ${Number(form.maxMembers) === n
                            ? 'bg-[#0f7a6c] border-[#0f7a6c] text-white'
                            : 'bg-white dark:bg-slate-900 border-slate-200 dark:border-slate-700 text-slate-600 dark:text-slate-300'}`}
                        >
                          {n}
                        </button>
                      ))}
                    </div>
                  </div>
                  <FamilyTiersField
                    tiers={form.familyTiers}
                    maxMembers={form.maxMembers}
                    basePrice={form.price}
                    onChange={(tiers) => setField('familyTiers', tiers)}
                    isRtl={isRtl}
                  />
                </div>
              )}

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <SelectField
                  id="country"
                  label={t('adminDashboard.packages.country', 'الدولة')}
                  value={form.country || ''}
                  onChange={(v) => setField('country', v)}
                  options={sortedCountries.map((c) => ({
                    value: c.id || c._id,
                    label: `${c.flag ? `${c.flag} ` : ''}${getCountryName(c, isRtl)}`,
                  }))}
                  placeholder={t('adminDashboard.packages.selectCountry', 'اختر الدولة')}
                />
                <SelectField
                  id="sessions_language"
                  label={p('language')}
                  value={form.sessions_language}
                  onChange={(v) => setField('sessions_language', v)}
                  options={explanationLanguages.map((lang) => ({
                    value: lang.id || lang._id,
                    label: typeof lang.name === 'object' && lang.name !== null
                      ? (isRtl ? lang.name.ar || lang.name.en : lang.name.en || lang.name.ar)
                      : lang.name,
                  }))}
                  placeholder={p('language')}
                />
              </div>

              <div id="features" tabIndex={-1} className="outline-none">
                <PackageFeaturesField
                  features={form.features}
                  featuresEn={form.features_en}
                  onAddFeature={addFeature}
                  onRemoveFeature={removeFeature}
                  onFeatureChange={setFeature}
                  onFeatureEnChange={setFeatureEn}
                />
              </div>
            </form>

            <div className="px-6 py-4 border-t border-slate-100/60 dark:border-slate-800/60 flex gap-3 shrink-0 bg-slate-50/50 dark:bg-slate-900/50">
              <button
                type="button"
                onClick={onClose}
                className="flex-1 py-2.5 rounded-xl border border-slate-200 dark:border-slate-700 text-slate-600 dark:text-slate-300 text-sm font-semibold hover:bg-slate-50 dark:hover:bg-slate-900 transition-colors"
              >
                {p('cancel')}
              </button>
              <button
                onClick={handleSubmit}
                disabled={saving}
                className="relative flex-1 py-2.5 rounded-xl bg-[#0f7a6c] text-white text-sm font-semibold hover:bg-[#0d6b5e] transition-colors disabled:opacity-60 flex items-center justify-center min-w-[140px]"
              >
                {saving && (
                  <span className="absolute rtl:right-4 ltr:left-4 flex items-center justify-center">
                    <Spinner size="sm" />
                  </span>
                )}
                <span>{p('save')}</span>
              </button>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>,
    document.body
  )
}
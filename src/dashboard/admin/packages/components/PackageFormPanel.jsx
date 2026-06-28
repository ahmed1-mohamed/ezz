import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { X } from 'lucide-react'
import { useTranslation } from 'react-i18next'
import Spinner from '@/shared/components/Spinner'
import SelectField from './SelectField'
import PackageImageUpload from './PackageImageUpload'
import PackageFeaturesField from './PackageFeaturesField'
import {
  EMPTY_PACKAGE, CURRENCY_OPTIONS,
  LANGUAGE_OPTIONS, SESSION_OPTIONS, COLOR_PRESETS,
} from './packages_constants'

export default function PackageFormPanel({ isOpen, onClose, onSave, editingPackage }) {
  const { t, i18n } = useTranslation()
  const isRtl = i18n.language.startsWith('ar')
  const p = (key) => t(`adminDashboard.packages.${key}`)

  const [form, setForm] = useState(EMPTY_PACKAGE)
  const [saving, setSaving] = useState(false)
  const [imagePreview, setImagePreview] = useState(null)

  useEffect(() => {
    if (editingPackage) {
      setForm({
        ...EMPTY_PACKAGE,
        ...editingPackage,
        features: editingPackage.features?.length ? [...editingPackage.features] : [''],
        features_en: editingPackage.features_en?.length ? [...editingPackage.features_en] : [''],
      })
    } else {
      setForm(EMPTY_PACKAGE)
      setImagePreview(null)
    }
  }, [editingPackage, isOpen])

  const handleImageChange = (e) => {
    const file = e.target.files[0]
    if (!file) return
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
    setSaving(true)
    const cleaned = {
      ...form,
      price: Number(form.price),
      sessions_per_month: Number(form.sessions_per_month),
      features: form.features.filter(Boolean),
      features_en: form.features_en.filter(Boolean),
    }
    await onSave(cleaned)
    setSaving(false)
  }

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4" dir={isRtl ? 'rtl' : 'ltr'}>
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
            {/* Header */}
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

            {/* Body */}
            <form onSubmit={handleSubmit} className="flex-1 overflow-y-auto px-6 py-5 space-y-5">
              {/* Image Upload Component */}
              <PackageImageUpload
                imagePreview={imagePreview}
                onImageChange={handleImageChange}
                label={p('packageImage')}
                hint={p('imageHint')}
              />

              {/* Name Fields */}
              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label className="block text-xs font-medium text-slate-500 mb-1.5">{p('packageNameEn')}</label>
                  <input
                    value={form.name_en}
                    onChange={(e) => setField('name_en', e.target.value)}
                    placeholder={p('packageNameEnPlaceholder')}
                    className="w-full bg-[#f3f7f6] dark:bg-slate-900/60 rounded-xl px-4 py-2.5 text-sm outline-none placeholder-slate-400 text-slate-800 dark:text-slate-100"
                  />
                </div>
                <div>
                  <label className="block text-xs font-medium text-slate-500 mb-1.5 text-end">{p('packageNameAr')}</label>
                  <input
                    value={form.name}
                    onChange={(e) => setField('name', e.target.value)}
                    placeholder={p('packageNameArPlaceholder')}
                    required
                    className="w-full bg-[#f3f7f6] dark:bg-slate-900/60 rounded-xl px-4 py-2.5 text-sm outline-none placeholder-slate-400 text-end text-slate-800 dark:text-slate-100"
                  />
                </div>
              </div>

              {/* Price + Currency Fields */}
              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label className="block text-xs font-medium text-slate-500 mb-1.5 text-start">{p('price')}</label>
                  <input
                    type="number"
                    value={form.price}
                    onChange={(e) => setField('price', e.target.value)}
                    placeholder={p('pricePlaceholder')}
                    required
                    className="w-full bg-[#f3f7f6] dark:bg-slate-900/60 rounded-xl px-4 py-2.5 text-sm outline-none placeholder-slate-400 text-start text-slate-800 dark:text-slate-100"
                  />
                </div>
                <SelectField
                  label={p('currency')}
                  value={form.currency}
                  onChange={(v) => setField('currency', v)}
                  options={CURRENCY_OPTIONS}
                  placeholder={p('currency')}
                />
              </div>

              {/* Sessions + Language Fields */}
              <div className="grid grid-cols-2 gap-3">
                <SelectField
                  label={p('language')}
                  value={form.sessions_language}
                  onChange={(v) => setField('sessions_language', v)}
                  options={LANGUAGE_OPTIONS}
                  placeholder={p('language')}
                />
                <SelectField
                  label={p('sessionsCount')}
                  value={form.sessions_per_month ? String(form.sessions_per_month) : ''}
                  onChange={(v) => setField('sessions_per_month', v)}
                  options={SESSION_OPTIONS.map(String)}
                  placeholder={p('sessionsCount')}
                />
              </div>

              {/* Color Picker */}
              <div>
                <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-2 text-start">
                  {p('color')}
                </label>
                <div className="flex gap-2 flex-wrap justify-start">
                  {COLOR_PRESETS.map((c) => (
                    <button
                      key={c}
                      type="button"
                      onClick={() => setField('color', c)}
                      className="w-8 h-8 rounded-full border-2 transition-transform hover:scale-110"
                      style={{
                        backgroundColor: c,
                        borderColor: form.color === c ? '#0f172a' : 'transparent',
                        outline: form.color === c ? `2px solid ${c}` : 'none',
                        outlineOffset: '2px',
                      }}
                    />
                  ))}
                </div>
              </div>

              {/* Description AR */}
              <div>
                <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-1.5 text-start">
                  {p('descriptionAr')}
                </label>
                <textarea
                  value={form.description}
                  onChange={(e) => setField('description', e.target.value)}
                  rows={3}
                  placeholder={p('descriptionArPlaceholder')}
                  className="w-full bg-[#f3f7f6] dark:bg-slate-900/60 rounded-xl px-4 py-3 text-sm outline-none resize-none placeholder-slate-400 text-start text-slate-800 dark:text-slate-100"
                />
              </div>

              {/* Description EN */}
              <div>
                <label className="block text-sm font-medium text-slate-500 mb-1.5">
                  {p('descriptionEn')}
                </label>
                <textarea
                  value={form.description_en}
                  onChange={(e) => setField('description_en', e.target.value)}
                  rows={3}
                  placeholder={p('descriptionEnPlaceholder')}
                  className="w-full bg-[#f3f7f6] dark:bg-slate-900/60 rounded-xl px-4 py-3 text-sm outline-none resize-none placeholder-slate-400 text-slate-800 dark:text-slate-100"
                />
              </div>

              {/* Features List Component */}
              <PackageFeaturesField
                features={form.features}
                featuresEn={form.features_en}
                onAddFeature={addFeature}
                onRemoveFeature={removeFeature}
                onFeatureChange={setFeature}
                onFeatureEnChange={setFeatureEn}
              />
            </form>

            {/* Footer */}
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
                className="flex-1 py-2.5 rounded-xl bg-[#0f7a6c] text-white text-sm font-semibold hover:bg-[#0d6b5e] transition-colors disabled:opacity-60 flex items-center justify-center gap-2"
              >
                {saving && <Spinner />}
                {p('save')}
              </button>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  )
}
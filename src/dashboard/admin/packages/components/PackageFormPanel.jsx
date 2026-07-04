import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { X } from 'lucide-react'
import { useTranslation } from 'react-i18next'
import Spinner from '@/shared/components/Spinner'
import SelectField from './SelectField'
import PackageImageUpload from './PackageImageUpload'
import PackageFeaturesField from './PackageFeaturesField'
import {
  EMPTY_PACKAGE,
  SESSION_OPTIONS,
} from './packages_constants'

export default function PackageFormPanel({ isOpen, onClose, onSave, editingPackage, explanationLanguages = [] }) {
  const { t, i18n } = useTranslation()
  const isRtl = i18n.language.startsWith('ar')
  const p = (key) => t(`adminDashboard.packages.${key}`)

  const [form, setForm] = useState(EMPTY_PACKAGE)
  const [saving, setSaving] = useState(false)
  const [imagePreview, setImagePreview] = useState(null)
  const [imageFile, setImageFile] = useState(null)
  const [prevEditingPackage, setPrevEditingPackage] = useState(editingPackage)
  const [prevIsOpen, setPrevIsOpen] = useState(isOpen)

  if (editingPackage !== prevEditingPackage || isOpen !== prevIsOpen) {
    setPrevEditingPackage(editingPackage)
    setPrevIsOpen(isOpen)
    if (editingPackage) {
      const validLanguage = explanationLanguages.some(l => l.id === editingPackage.sessions_language)
        ? editingPackage.sessions_language
        : (explanationLanguages?.[0]?.id || '');

      setForm({
        ...EMPTY_PACKAGE,
        ...editingPackage,
        sessions_language: validLanguage,
        features: editingPackage.features?.length ? [...editingPackage.features] : [''],
        features_en: editingPackage.features_en?.length ? [...editingPackage.features_en] : [''],
      })
      setImagePreview(null)
      setImageFile(null)
    } else {
      setForm({
        ...EMPTY_PACKAGE,
        sessions_language: explanationLanguages?.[0]?.id || ''
      })
      setImagePreview(null)
      setImageFile(null)
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
    setSaving(true)
    const cleaned = {
      ...form,
      price: Number(form.price),
      sessions_per_month: Number(form.sessions_per_month),
      features: form.features.filter(Boolean),
      features_en: form.features_en.filter(Boolean),
      imageFile
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
              />

              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label htmlFor="name_en" className="block text-xs font-medium text-slate-500 mb-1.5">{p('packageNameEn')}</label>
                  <input
                    id="name_en"
                    name="name_en"
                    value={form.name_en}
                    onChange={(e) => setField('name_en', e.target.value)}
                    placeholder={p('packageNameEnPlaceholder')}
                    className="w-full bg-[#f3f7f6] dark:bg-slate-900/60 rounded-xl px-4 py-2.5 text-sm outline-none placeholder-slate-400 text-slate-800 dark:text-slate-100"
                  />
                </div>
                <div>
                  <label htmlFor="name" className="block text-xs font-medium text-slate-500 mb-1.5 text-end">{p('packageNameAr')}</label>
                  <input
                    id="name"
                    name="name"
                    value={form.name}
                    onChange={(e) => setField('name', e.target.value)}
                    placeholder={p('packageNameArPlaceholder')}
                    required
                    className="w-full bg-[#f3f7f6] dark:bg-slate-900/60 rounded-xl px-4 py-2.5 text-sm outline-none placeholder-slate-400 text-end text-slate-800 dark:text-slate-100"
                  />
                </div>
              </div>

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
                  className="w-full bg-[#f3f7f6] dark:bg-slate-900/60 rounded-xl px-4 py-2.5 text-sm outline-none placeholder-slate-400 text-start text-slate-800 dark:text-slate-100"
                />
              </div>

              <div className="grid grid-cols-2 gap-3">
                <SelectField
                  id="sessions_language"
                  label={p('language')}
                  value={form.sessions_language}
                  onChange={(v) => setField('sessions_language', v)}
                  options={explanationLanguages.map(lang => ({
                    value: lang.id || lang._id,
                    label: typeof lang.name === 'object' && lang.name !== null
                      ? (isRtl ? lang.name.ar || lang.name.en : lang.name.en || lang.name.ar)
                      : lang.name
                  }))}
                  placeholder={p('language')}
                />
                <SelectField
                  id="sessions_per_month"
                  label={p('sessionsCount')}
                  value={form.sessions_per_month ? String(form.sessions_per_month) : ''}
                  onChange={(v) => setField('sessions_per_month', v)}
                  options={SESSION_OPTIONS.map(String)}
                  placeholder={p('sessionsCount')}
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
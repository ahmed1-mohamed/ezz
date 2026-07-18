import { useState, useEffect, useRef } from 'react'
import { useTranslation } from 'react-i18next'
import { X, Plus, Image as ImageIcon, Trash2 } from 'lucide-react'

export default function CurriculumForm({ onSave, onCancel, editingItem, isSaving, languages = [] }) {
  const { i18n } = useTranslation()
  const isRtl = i18n.language.startsWith('ar')

  const [nameAr, setNameAr] = useState('')
  const [nameEn, setNameEn] = useState('')
  const [descriptionAr, setDescriptionAr] = useState('')
  const [descriptionEn, setDescriptionEn] = useState('')
  const [image, setImage] = useState(null)
  const [previewImage, setPreviewImage] = useState(null)
  const [languageId, setLanguageId] = useState('')
  
  const [featuresAr, setFeaturesAr] = useState([''])
  const [featuresEn, setFeaturesEn] = useState([''])
  const [benefitsAr, setBenefitsAr] = useState([''])
  const [benefitsEn, setBenefitsEn] = useState([''])

  const fileInputRef = useRef(null)

  useEffect(() => {
    if (editingItem) {
      const arName = typeof editingItem.name === 'object' ? (editingItem.name?.ar || '') : (editingItem.name || '')
      const enName = typeof editingItem.name === 'object' ? (editingItem.name?.en || '') : (editingItem.name || '')
      setNameAr(arName)
      setNameEn(enName)

      const arDesc = typeof editingItem.description === 'object' ? (editingItem.description?.ar || '') : (editingItem.description || '')
      const enDesc = typeof editingItem.description === 'object' ? (editingItem.description?.en || '') : (editingItem.description || '')
      setDescriptionAr(arDesc)
      setDescriptionEn(enDesc)

      setImage(editingItem.image || null)
      setPreviewImage(editingItem.image || null)

      setLanguageId(editingItem.language?._id || editingItem.language?.id || editingItem.language || '')

      const fAr = editingItem.features?.ar || []
      const fEn = editingItem.features?.en || []
      setFeaturesAr(fAr.length > 0 ? fAr : [''])
      setFeaturesEn(fEn.length > 0 ? fEn : [''])

      const bAr = editingItem.benefitsAfterGraduation?.ar || []
      const bEn = editingItem.benefitsAfterGraduation?.en || []
      setBenefitsAr(bAr.length > 0 ? bAr : [''])
      setBenefitsEn(bEn.length > 0 ? bEn : [''])
    } else {
      setNameAr('')
      setNameEn('')
      setDescriptionAr('')
      setDescriptionEn('')
      setImage(null)
      setPreviewImage(null)
      setLanguageId('')
      setFeaturesAr([''])
      setFeaturesEn([''])
      setBenefitsAr([''])
      setBenefitsEn([''])
    }
  }, [editingItem])

  const handleImageChange = (e) => {
    const file = e.target.files[0]
    if (file) {
      setImage(file)
      setPreviewImage(URL.createObjectURL(file))
    }
  }

  const handleDynamicArrayChange = (setter) => (index, value) => {
    setter(prev => {
      const newArr = [...prev]
      newArr[index] = value
      return newArr
    })
  }

  const handleAddDynamicItem = (setter) => () => {
    setter(prev => [...prev, ''])
  }

  const handleRemoveDynamicItem = (setter) => (index) => {
    setter(prev => prev.filter((_, i) => i !== index))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    if (!nameAr.trim() || !nameEn.trim()) return

    const formData = new FormData()
    formData.append('name[ar]', nameAr.trim())
    formData.append('name[en]', nameEn.trim())
    
    if (descriptionAr.trim()) formData.append('description[ar]', descriptionAr.trim())
    if (descriptionEn.trim()) formData.append('description[en]', descriptionEn.trim())

    if (image instanceof File) {
      formData.append('image', image)
    }

    if (languageId) formData.append('language', languageId)

    const cleanFeaturesAr = featuresAr.filter(f => f.trim() !== '')
    cleanFeaturesAr.forEach((f) => {
      formData.append('features[ar][]', f.trim())
    })

    const cleanFeaturesEn = featuresEn.filter(f => f.trim() !== '')
    cleanFeaturesEn.forEach((f) => {
      formData.append('features[en][]', f.trim())
    })

    const cleanBenefitsAr = benefitsAr.filter(b => b.trim() !== '')
    cleanBenefitsAr.forEach((b) => {
      formData.append('benefitsAfterGraduation[ar][]', b.trim())
    })

    const cleanBenefitsEn = benefitsEn.filter(b => b.trim() !== '')
    cleanBenefitsEn.forEach((b) => {
      formData.append('benefitsAfterGraduation[en][]', b.trim())
    })

    onSave(formData)
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-6" dir={isRtl ? 'rtl' : 'ltr'}>
      
      {/* Image Upload Area */}
      <div className="flex flex-col items-center">
        <div 
          onClick={() => fileInputRef.current?.click()}
          className="relative w-full h-40 rounded-3xl bg-slate-50 dark:bg-slate-900 border-2 border-dashed border-slate-200 dark:border-slate-700 flex flex-col items-center justify-center cursor-pointer hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors overflow-hidden group"
        >
          {previewImage ? (
            <>
              <img src={previewImage} alt="Preview" className="w-full h-full object-cover" />
              <div className="absolute inset-0 bg-black/40 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                <span className="text-white text-sm font-bold flex items-center gap-2">
                  <ImageIcon size={18} /> {isRtl ? 'تغيير الصورة' : 'Change Image'}
                </span>
              </div>
            </>
          ) : (
            <div className="flex flex-col items-center text-slate-400">
              <ImageIcon size={32} className="mb-2" />
              <span className="text-sm font-semibold">{isRtl ? 'اختر صورة المنهج' : 'Select Curriculum Image'}</span>
            </div>
          )}
        </div>
        <input 
          ref={fileInputRef} 
          type="file" 
          accept="image/*" 
          onChange={handleImageChange} 
          className="hidden" 
        />
      </div>

      {/* Basic Info */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-5 text-start">
        <div>
          <label className="block text-xs font-bold text-slate-500 dark:text-slate-400 mb-1.5">
            {isRtl ? 'اسم المنهج (عربي)' : 'Curriculum Name (Arabic)'} <span className="text-red-500">*</span>
          </label>
          <input
            type="text"
            required
            value={nameAr}
            onChange={(e) => setNameAr(e.target.value)}
            className="w-full bg-[#f3f7f6] dark:bg-slate-950 border border-transparent focus:border-brand-500/20 focus:bg-white text-slate-850 dark:text-slate-105 rounded-2xl py-3 px-4 outline-none transition-all text-sm placeholder-slate-400"
            placeholder="مثال: منهج نور البيان"
          />
        </div>
        <div>
          <label className="block text-xs font-bold text-slate-500 dark:text-slate-400 mb-1.5">
            {isRtl ? 'اسم المنهج (إنجليزي)' : 'Curriculum Name (English)'} <span className="text-red-500">*</span>
          </label>
          <input
            type="text"
            required
            value={nameEn}
            onChange={(e) => setNameEn(e.target.value)}
            className="w-full bg-[#f3f7f6] dark:bg-slate-950 border border-transparent focus:border-brand-500/20 focus:bg-white text-slate-850 dark:text-slate-105 rounded-2xl py-3 px-4 outline-none transition-all text-sm placeholder-slate-400"
            placeholder="e.g. Noor Al-Bayan"
          />
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-5 text-start">
        <div>
           <label className="block text-xs font-bold text-slate-500 dark:text-slate-400 mb-1.5">
             {isRtl ? 'الوصف (عربي)' : 'Description (Arabic)'}
           </label>
           <textarea
             rows={3}
             value={descriptionAr}
             onChange={(e) => setDescriptionAr(e.target.value)}
             className="w-full bg-[#f3f7f6] dark:bg-slate-950 border border-transparent focus:border-brand-500/20 focus:bg-white text-slate-850 dark:text-slate-105 rounded-2xl py-3 px-4 outline-none transition-all text-sm placeholder-slate-400 resize-none"
             placeholder="وصف المنهج..."
           />
        </div>
        <div>
           <label className="block text-xs font-bold text-slate-500 dark:text-slate-400 mb-1.5">
             {isRtl ? 'الوصف (إنجليزي)' : 'Description (English)'}
           </label>
           <textarea
             rows={3}
             value={descriptionEn}
             onChange={(e) => setDescriptionEn(e.target.value)}
             className="w-full bg-[#f3f7f6] dark:bg-slate-950 border border-transparent focus:border-brand-500/20 focus:bg-white text-slate-850 dark:text-slate-105 rounded-2xl py-3 px-4 outline-none transition-all text-sm placeholder-slate-400 resize-none"
             placeholder="Description..."
           />
        </div>
      </div>

      <div className="text-start">
        <label className="block text-xs font-bold text-slate-500 dark:text-slate-400 mb-1.5">
          {isRtl ? 'لغة الشرح' : 'Explanation Language'}
        </label>
        <select
          value={languageId}
          onChange={(e) => setLanguageId(e.target.value)}
          className="w-full bg-[#f3f7f6] dark:bg-slate-950 border border-transparent focus:border-brand-500/20 focus:bg-white text-slate-850 dark:text-slate-105 rounded-2xl py-3 px-4 outline-none transition-all text-sm"
        >
          <option value="" disabled>{isRtl ? 'اختر لغة الشرح' : 'Select a language'}</option>
          {languages.map(lang => (
            <option key={lang.id || lang._id} value={lang.id || lang._id}>
              {typeof lang.name === 'object' ? (isRtl ? lang.name.ar : lang.name.en) : lang.name}
            </option>
          ))}
        </select>
      </div>

      {/* Features (Arabic & English) */}
      <div className="p-5 bg-slate-50 dark:bg-slate-800/40 rounded-2xl border border-slate-100 dark:border-slate-800 space-y-5">
        <div className="text-start">
          <label className="block text-sm font-bold text-slate-800 dark:text-white mb-3">
            {isRtl ? 'مميزات المنهج (عربي)' : 'Features (Arabic)'}
          </label>
          <div className="space-y-3">
            {featuresAr.map((feature, idx) => (
               <div key={`feat-ar-${idx}`} className="flex items-center gap-2">
                 <input
                   type="text"
                   value={feature}
                   onChange={(e) => handleDynamicArrayChange(setFeaturesAr)(idx, e.target.value)}
                   className="flex-1 bg-white dark:bg-slate-950 border border-slate-200 dark:border-slate-700 focus:border-[#0f7a6c] dark:focus:border-[#0f7a6c] rounded-xl py-2 px-4 outline-none transition-all text-sm"
                   placeholder="أدخل ميزة..."
                 />
                 <button type="button" onClick={() => handleRemoveDynamicItem(setFeaturesAr)(idx)} disabled={featuresAr.length === 1 && idx === 0} className="p-2 text-slate-400 hover:text-red-500 hover:bg-red-50 dark:hover:bg-red-900/30 rounded-xl transition-all">
                   <Trash2 size={16} />
                 </button>
               </div>
            ))}
            <button type="button" onClick={handleAddDynamicItem(setFeaturesAr)} className="flex items-center gap-1.5 text-xs font-bold text-[#0f7a6c] hover:text-[#0d6b5e] transition-colors">
               <Plus size={14} /> إضافة ميزة عربي
            </button>
          </div>
        </div>

        <div className="text-start">
          <label className="block text-sm font-bold text-slate-800 dark:text-white mb-3">
            {isRtl ? 'مميزات المنهج (إنجليزي)' : 'Features (English)'}
          </label>
          <div className="space-y-3">
            {featuresEn.map((feature, idx) => (
               <div key={`feat-en-${idx}`} className="flex items-center gap-2">
                 <input
                   type="text"
                   value={feature}
                   onChange={(e) => handleDynamicArrayChange(setFeaturesEn)(idx, e.target.value)}
                   className="flex-1 bg-white dark:bg-slate-950 border border-slate-200 dark:border-slate-700 focus:border-[#0f7a6c] dark:focus:border-[#0f7a6c] rounded-xl py-2 px-4 outline-none transition-all text-sm"
                   placeholder="Enter a feature..."
                 />
                 <button type="button" onClick={() => handleRemoveDynamicItem(setFeaturesEn)(idx)} disabled={featuresEn.length === 1 && idx === 0} className="p-2 text-slate-400 hover:text-red-500 hover:bg-red-50 dark:hover:bg-red-900/30 rounded-xl transition-all">
                   <Trash2 size={16} />
                 </button>
               </div>
            ))}
            <button type="button" onClick={handleAddDynamicItem(setFeaturesEn)} className="flex items-center gap-1.5 text-xs font-bold text-[#0f7a6c] hover:text-[#0d6b5e] transition-colors">
               <Plus size={14} /> Add English feature
            </button>
          </div>
        </div>
      </div>

      {/* Benefits (Arabic & English) */}
      <div className="p-5 bg-slate-50 dark:bg-slate-800/40 rounded-2xl border border-slate-100 dark:border-slate-800 space-y-5">
        <div className="text-start">
          <label className="block text-sm font-bold text-slate-800 dark:text-white mb-3">
            {isRtl ? 'فوائد التخرج (عربي)' : 'Graduation Benefits (Arabic)'}
          </label>
          <div className="space-y-3">
            {benefitsAr.map((benefit, idx) => (
               <div key={`ben-ar-${idx}`} className="flex items-center gap-2">
                 <input
                   type="text"
                   value={benefit}
                   onChange={(e) => handleDynamicArrayChange(setBenefitsAr)(idx, e.target.value)}
                   className="flex-1 bg-white dark:bg-slate-950 border border-slate-200 dark:border-slate-700 focus:border-[#0f7a6c] dark:focus:border-[#0f7a6c] rounded-xl py-2 px-4 outline-none transition-all text-sm"
                   placeholder="أدخل فائدة..."
                 />
                 <button type="button" onClick={() => handleRemoveDynamicItem(setBenefitsAr)(idx)} disabled={benefitsAr.length === 1 && idx === 0} className="p-2 text-slate-400 hover:text-red-500 hover:bg-red-50 dark:hover:bg-red-900/30 rounded-xl transition-all">
                   <Trash2 size={16} />
                 </button>
               </div>
            ))}
            <button type="button" onClick={handleAddDynamicItem(setBenefitsAr)} className="flex items-center gap-1.5 text-xs font-bold text-[#0f7a6c] hover:text-[#0d6b5e] transition-colors">
               <Plus size={14} /> إضافة فائدة عربي
            </button>
          </div>
        </div>

        <div className="text-start">
          <label className="block text-sm font-bold text-slate-800 dark:text-white mb-3">
            {isRtl ? 'فوائد التخرج (إنجليزي)' : 'Graduation Benefits (English)'}
          </label>
          <div className="space-y-3">
            {benefitsEn.map((benefit, idx) => (
               <div key={`ben-en-${idx}`} className="flex items-center gap-2">
                 <input
                   type="text"
                   value={benefit}
                   onChange={(e) => handleDynamicArrayChange(setBenefitsEn)(idx, e.target.value)}
                   className="flex-1 bg-white dark:bg-slate-950 border border-slate-200 dark:border-slate-700 focus:border-[#0f7a6c] dark:focus:border-[#0f7a6c] rounded-xl py-2 px-4 outline-none transition-all text-sm"
                   placeholder="Enter a benefit..."
                 />
                 <button type="button" onClick={() => handleRemoveDynamicItem(setBenefitsEn)(idx)} disabled={benefitsEn.length === 1 && idx === 0} className="p-2 text-slate-400 hover:text-red-500 hover:bg-red-50 dark:hover:bg-red-900/30 rounded-xl transition-all">
                   <Trash2 size={16} />
                 </button>
               </div>
            ))}
            <button type="button" onClick={handleAddDynamicItem(setBenefitsEn)} className="flex items-center gap-1.5 text-xs font-bold text-[#0f7a6c] hover:text-[#0d6b5e] transition-colors">
               <Plus size={14} /> Add English benefit
            </button>
          </div>
        </div>
      </div>

      <div className="flex justify-end gap-3 pt-2">
        <button
          type="button"
          onClick={onCancel}
          disabled={isSaving}
          className="px-5 py-2.5 bg-slate-100 hover:bg-slate-200 text-slate-700 font-bold text-xs rounded-xl transition-all cursor-pointer dark:bg-slate-800 dark:text-slate-300 disabled:opacity-50"
        >
          {isRtl ? 'إلغاء' : 'Cancel'}
        </button>
        <button
          type="submit"
          disabled={isSaving}
          className="px-6 py-2.5 bg-[#0f7a6c] hover:bg-[#0d6b5e] text-white font-bold text-xs rounded-xl transition-all cursor-pointer shadow-sm active:scale-95 disabled:opacity-50 flex items-center gap-2"
        >
          {isSaving && <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />}
          {editingItem 
            ? (isRtl ? 'حفظ التغييرات' : 'Save Changes')
            : (isRtl ? 'إضافة المنهج' : 'Add Curriculum')}
        </button>
      </div>
    </form>
  )
}

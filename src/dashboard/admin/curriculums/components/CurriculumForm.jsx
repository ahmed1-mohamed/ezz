import { useState, useRef } from 'react'
import { useTranslation } from 'react-i18next'
import { Plus, Image as ImageIcon, Trash2 } from 'lucide-react'
import toast from 'react-hot-toast'

function extractList(raw, lang) {
  if (!raw) return []
  if (typeof raw === 'object' && !Array.isArray(raw)) {
    const arr = raw[lang] || raw.ar || raw.en || []
    if (Array.isArray(arr) && arr.length > 0) {
      return arr.map(String).map(s => s.trim()).filter(Boolean)
    }
    return []
  }
  if (Array.isArray(raw)) {
    return raw.map(item => {
      if (typeof item === 'string') return item.trim()
      if (typeof item === 'object' && item !== null) {
        return (item[lang] || item.ar || item.en || '').trim()
      }
      return String(item).trim()
    }).filter(Boolean)
  }
  if (typeof raw === 'string' && raw.trim()) {
    return [raw.trim()]
  }
  return []
}

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
  const [showOnWebsite, setShowOnWebsite] = useState(true)

  const fileInputRef = useRef(null)

  const [prevEditingItem, setPrevEditingItem] = useState(editingItem)

  if (prevEditingItem !== editingItem) {
    setPrevEditingItem(editingItem)
    if (editingItem) {
      const arName = typeof editingItem.name === 'object' ? (editingItem.name?.ar || editingItem.name?.en || '') : (editingItem.name || '')
      const enName = typeof editingItem.name === 'object' ? (editingItem.name?.en || editingItem.name?.ar || '') : (editingItem.name || '')
      setNameAr(arName)
      setNameEn(enName || arName)

      const arDesc = typeof editingItem.description === 'object' ? (editingItem.description?.ar || editingItem.description?.en || '') : (editingItem.description || '')
      const enDesc = typeof editingItem.description === 'object' ? (editingItem.description?.en || editingItem.description?.ar || '') : (editingItem.description || '')
      setDescriptionAr(arDesc)
      setDescriptionEn(enDesc || arDesc)

      setImage(editingItem.image || null)
      setPreviewImage(editingItem.image || null)

      let resolvedLangId = editingItem.language?._id || editingItem.language?.id || editingItem.explanationLanguage?._id || editingItem.explanationLanguage?.id
      if (!resolvedLangId && typeof editingItem.language === 'string') {
        if (editingItem.language.length === 24) {
          resolvedLangId = editingItem.language
        } else if (Array.isArray(languages)) {
          const found = languages.find(l => {
            const lName = typeof l.name === 'object' ? (l.name.ar || l.name.en) : l.name
            return lName === editingItem.language || (l.id || l._id) === editingItem.language
          })
          if (found) resolvedLangId = found.id || found._id
        }
      }
      setLanguageId(resolvedLangId || '')

      const fAr = extractList(editingItem.features, 'ar')
      const fEn = extractList(editingItem.features, 'en')
      setFeaturesAr(fAr.length > 0 ? fAr : (fEn.length > 0 ? fEn : ['']))
      setFeaturesEn(fEn.length > 0 ? fEn : (fAr.length > 0 ? fAr : ['']))

      const bAr = extractList(editingItem.benefitsAfterGraduation, 'ar')
      const bEn = extractList(editingItem.benefitsAfterGraduation, 'en')
      setBenefitsAr(bAr.length > 0 ? bAr : (bEn.length > 0 ? bEn : ['']))
      setBenefitsEn(bEn.length > 0 ? bEn : (bAr.length > 0 ? bAr : ['']))

      setShowOnWebsite(Boolean(editingItem.showOnWebsite))
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
      setShowOnWebsite(true)
    }
  }

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
    if (!nameAr.trim() && !nameEn.trim()) {
      toast.error(isRtl ? 'يرجى إدخال اسم المنهج' : 'Please enter curriculum name')
      return
    }

    const finalNameAr = nameAr.trim() || nameEn.trim()
    const finalNameEn = nameEn.trim() || nameAr.trim()

    const cleanFeaturesAr = featuresAr.map(f => f.trim()).filter(Boolean)
    const cleanFeaturesEn = featuresEn.map(f => f.trim()).filter(Boolean)
    const cleanBenefitsAr = benefitsAr.map(b => b.trim()).filter(Boolean)
    const cleanBenefitsEn = benefitsEn.map(b => b.trim()).filter(Boolean)

    if (cleanFeaturesAr.length === 0 && cleanFeaturesEn.length === 0) {
      toast.error(isRtl ? 'يجب أن تحتوي المميزات على عنصر واحد على الأقل' : 'Features must have at least one item')
      return
    }

    if (cleanBenefitsAr.length === 0 && cleanBenefitsEn.length === 0) {
      toast.error(isRtl ? 'يجب أن تحتوي الإستفادة على عنصر واحد على الأقل' : 'Graduation benefits must have at least one item')
      return
    }

    const finalFeaturesAr = cleanFeaturesAr.length > 0 ? cleanFeaturesAr : cleanFeaturesEn
    const finalFeaturesEn = cleanFeaturesEn.length > 0 ? cleanFeaturesEn : cleanFeaturesAr

    const finalBenefitsAr = cleanBenefitsAr.length > 0 ? cleanBenefitsAr : cleanBenefitsEn
    const finalBenefitsEn = cleanBenefitsEn.length > 0 ? cleanBenefitsEn : cleanBenefitsAr

    const hasNewImageFile = image instanceof File

    if (hasNewImageFile) {
      const formData = new FormData()
      formData.append('name[ar]', finalNameAr)
      formData.append('name[en]', finalNameEn)
      
      if (descriptionAr.trim()) formData.append('description[ar]', descriptionAr.trim())
      if (descriptionEn.trim()) formData.append('description[en]', descriptionEn.trim() || descriptionAr.trim())

      formData.append('image', image)

      if (languageId) formData.append('language', languageId)

      formData.append('showOnWebsite', String(showOnWebsite))

      finalFeaturesAr.forEach((f) => {
        formData.append('features[ar][]', f)
      })

      finalFeaturesEn.forEach((f) => {
        formData.append('features[en][]', f)
      })

      finalBenefitsAr.forEach((b) => {
        formData.append('benefitsAfterGraduation[ar][]', b)
      })

      finalBenefitsEn.forEach((b) => {
        formData.append('benefitsAfterGraduation[en][]', b)
      })

      onSave(formData)
    } else {
      const jsonPayload = {
        name: {
          ar: finalNameAr,
          en: finalNameEn
        },
        description: {
          ar: descriptionAr.trim(),
          en: descriptionEn.trim() || descriptionAr.trim()
        },
        showOnWebsite: Boolean(showOnWebsite),
        features: {
          ar: finalFeaturesAr,
          en: finalFeaturesEn
        },
        benefitsAfterGraduation: {
          ar: finalBenefitsAr,
          en: finalBenefitsEn
        }
      }

      if (languageId) jsonPayload.language = languageId
      if (image && typeof image === 'string' && !image.startsWith('blob:')) {
        jsonPayload.image = image
      }

      onSave(jsonPayload)
    }
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-6" dir={isRtl ? 'rtl' : 'ltr'}>
      
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

      
      <div className="flex items-center justify-between p-4 bg-slate-50 dark:bg-slate-800/40 rounded-2xl border border-slate-100 dark:border-slate-800">
        <div>
          <h4 className="text-sm font-bold text-slate-800 dark:text-white">
            {isRtl ? 'عرض المنهج في الموقع الإلكتروني' : 'Show curriculum on website'}
          </h4>
          <p className="text-xs text-slate-500 dark:text-slate-400 mt-0.5">
            {isRtl ? 'إمكانية رؤية هذا المنهج للزوار والطلاب على الموقع' : 'Allow visitors and students to view this curriculum'}
          </p>
        </div>
        <button
          type="button"
          onClick={() => setShowOnWebsite(prev => !prev)}
          className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors focus:outline-none cursor-pointer ${
            showOnWebsite ? 'bg-[#0f7a6c]' : 'bg-slate-300 dark:bg-slate-700'
          }`}
        >
          <span
            className={`inline-block h-4 w-4 transform rounded-full bg-white shadow transition-transform ${
              showOnWebsite
                ? (isRtl ? '-translate-x-6' : 'translate-x-6')
                : (isRtl ? '-translate-x-1' : 'translate-x-1')
            }`}
          />
        </button>
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
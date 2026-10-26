import { useState } from 'react'
import { useQuery } from '@tanstack/react-query'
import toast from 'react-hot-toast'
import { Save, X, Loader2 } from 'lucide-react'
import { explanationLanguagesApi } from '@/shared/services/api/explanationLanguagesApi'
import AddEditCurriculumHeader from './AddEditCurriculumHeader'
import CurriculumMediaCard from './CurriculumMediaCard'
import CurriculumPublishingCard from './CurriculumPublishingCard'
import CurriculumBasicInfoCard from './CurriculumBasicInfoCard'
import CurriculumFeaturesCard from './CurriculumFeaturesCard'
import CurriculumBenefitsCard from './CurriculumBenefitsCard'

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

export default function AddEditCurriculumScreen({
  curriculum = null,
  isRtl = true,
  isSaving = false,
  onSave,
  onCancel
}) {
  const isEdit = Boolean(curriculum)

  const { data: languagesResponse } = useQuery({
    queryKey: ['admin-explanation-languages'],
    queryFn: () => explanationLanguagesApi.fetchLanguages(),
  })
  const languages = languagesResponse?.data || []

  const initialArName = typeof curriculum?.name === 'object'
    ? (curriculum.name?.ar || curriculum.name?.en || '')
    : (curriculum?.name || '')
  const initialEnName = typeof curriculum?.name === 'object'
    ? (curriculum.name?.en || curriculum.name?.ar || '')
    : (curriculum?.name || '')

  const initialArDesc = typeof curriculum?.description === 'object'
    ? (curriculum.description?.ar || curriculum.description?.en || '')
    : (curriculum?.description || '')
  const initialEnDesc = typeof curriculum?.description === 'object'
    ? (curriculum.description?.en || curriculum.description?.ar || '')
    : (curriculum?.description || '')

  const initialFeaturesAr = extractList(curriculum?.features, 'ar')
  const initialFeaturesEn = extractList(curriculum?.features, 'en')

  const initialBenefitsAr = extractList(curriculum?.benefitsAfterGraduation, 'ar')
  const initialBenefitsEn = extractList(curriculum?.benefitsAfterGraduation, 'en')

  const resolvedLangId = curriculum?.language?._id ||
    curriculum?.language?.id ||
    curriculum?.explanationLanguage?._id ||
    curriculum?.explanationLanguage?.id ||
    (typeof curriculum?.language === 'string' ? curriculum.language : '')

  const [nameAr, setNameAr] = useState(initialArName)
  const [nameEn, setNameEn] = useState(initialEnName)
  const [descriptionAr, setDescriptionAr] = useState(initialArDesc)
  const [descriptionEn, setDescriptionEn] = useState(initialEnDesc)
  const [image, setImage] = useState(curriculum?.image || null)
  const [previewImage, setPreviewImage] = useState(curriculum?.image || null)
  const [languageId, setLanguageId] = useState(resolvedLangId || '')

  const [featuresAr, setFeaturesAr] = useState(
    initialFeaturesAr.length > 0 ? initialFeaturesAr : (initialFeaturesEn.length > 0 ? initialFeaturesEn : [''])
  )
  const [featuresEn, setFeaturesEn] = useState(
    initialFeaturesEn.length > 0 ? initialFeaturesEn : (initialFeaturesAr.length > 0 ? initialFeaturesAr : [''])
  )

  const [benefitsAr, setBenefitsAr] = useState(
    initialBenefitsAr.length > 0 ? initialBenefitsAr : (initialBenefitsEn.length > 0 ? initialBenefitsEn : [''])
  )
  const [benefitsEn, setBenefitsEn] = useState(
    initialBenefitsEn.length > 0 ? initialBenefitsEn : (initialBenefitsAr.length > 0 ? initialBenefitsAr : [''])
  )

  const [showOnWebsite, setShowOnWebsite] = useState(
    curriculum ? Boolean(curriculum.showOnWebsite) : true
  )

  const handleImageChange = (e) => {
    const file = e.target.files[0]
    if (file) {
      setImage(file)
      setPreviewImage(URL.createObjectURL(file))
    }
  }

  const handleImageRemove = () => {
    setImage(null)
    setPreviewImage(null)
  }

  const handleDynamicChange = (setter) => (index, value) => {
    setter(prev => {
      const next = [...prev]
      next[index] = value
      return next
    })
  }

  const handleDynamicAdd = (setter) => () => {
    setter(prev => [...prev, ''])
  }

  const handleDynamicRemove = (setter) => (index) => {
    setter(prev => prev.filter((_, i) => i !== index))
  }

  const handleSubmit = (e) => {
    if (e) e.preventDefault()

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
      finalFeaturesAr.forEach(f => formData.append('features[ar][]', f))
      finalFeaturesEn.forEach(f => formData.append('features[en][]', f))
      finalBenefitsAr.forEach(b => formData.append('benefitsAfterGraduation[ar][]', b))
      finalBenefitsEn.forEach(b => formData.append('benefitsAfterGraduation[en][]', b))
      onSave(formData)
    } else {
      const jsonPayload = {
        name: { ar: finalNameAr, en: finalNameEn },
        description: { ar: descriptionAr.trim(), en: descriptionEn.trim() || descriptionAr.trim() },
        showOnWebsite: Boolean(showOnWebsite),
        features: { ar: finalFeaturesAr, en: finalFeaturesEn },
        benefitsAfterGraduation: { ar: finalBenefitsAr, en: finalBenefitsEn }
      }
      if (languageId) jsonPayload.language = languageId
      if (image && typeof image === 'string' && !image.startsWith('blob:')) {
        jsonPayload.image = image
      }
      onSave(jsonPayload)
    }
  }

  const currentDisplayName = isRtl ? (nameAr || nameEn) : (nameEn || nameAr)

  return (
    <div className="p-4 md:p-8 max-w-7xl mx-auto space-y-8 animate-fadeIn" dir={isRtl ? 'rtl' : 'ltr'}>
      <AddEditCurriculumHeader
        isEdit={isEdit}
        curriculumName={currentDisplayName}
        isRtl={isRtl}
        isSaving={isSaving}
        onCancel={onCancel}
        onSubmit={handleSubmit}
      />

      <form onSubmit={handleSubmit} className="space-y-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          <div className="lg:col-span-4 space-y-6">
            <CurriculumMediaCard
              previewImage={previewImage}
              onImageChange={handleImageChange}
              onImageRemove={handleImageRemove}
              isRtl={isRtl}
            />

            <CurriculumPublishingCard
              showOnWebsite={showOnWebsite}
              onToggleWebsiteVisibility={() => setShowOnWebsite(prev => !prev)}
              isRtl={isRtl}
            />
          </div>

          <div className="lg:col-span-8 space-y-6">
            <CurriculumBasicInfoCard
              nameAr={nameAr}
              setNameAr={setNameAr}
              nameEn={nameEn}
              setNameEn={setNameEn}
              descriptionAr={descriptionAr}
              setDescriptionAr={setDescriptionAr}
              descriptionEn={descriptionEn}
              setDescriptionEn={setDescriptionEn}
              languageId={languageId}
              setLanguageId={setLanguageId}
              languages={languages}
              isRtl={isRtl}
            />

            <CurriculumFeaturesCard
              featuresAr={featuresAr}
              featuresEn={featuresEn}
              onFeatureArChange={handleDynamicChange(setFeaturesAr)}
              onAddFeatureAr={handleDynamicAdd(setFeaturesAr)}
              onRemoveFeatureAr={handleDynamicRemove(setFeaturesAr)}
              onFeatureEnChange={handleDynamicChange(setFeaturesEn)}
              onAddFeatureEn={handleDynamicAdd(setFeaturesEn)}
              onRemoveFeatureEn={handleDynamicRemove(setFeaturesEn)}
              isRtl={isRtl}
            />

            <CurriculumBenefitsCard
              benefitsAr={benefitsAr}
              benefitsEn={benefitsEn}
              onBenefitArChange={handleDynamicChange(setBenefitsAr)}
              onAddBenefitAr={handleDynamicAdd(setBenefitsAr)}
              onRemoveBenefitAr={handleDynamicRemove(setBenefitsAr)}
              onBenefitEnChange={handleDynamicChange(setBenefitsEn)}
              onAddBenefitEn={handleDynamicAdd(setBenefitsEn)}
              onRemoveBenefitEn={handleDynamicRemove(setBenefitsEn)}
              isRtl={isRtl}
            />
          </div>
        </div>

        <div className="bg-white dark:bg-slate-900 rounded-3xl p-5 sm:p-6 border border-slate-100 dark:border-slate-800 shadow-xs flex items-center justify-end gap-3.5">
          <button
            type="button"
            onClick={onCancel}
            disabled={isSaving}
            className="px-6 py-3 rounded-2xl bg-slate-100 hover:bg-slate-200 text-slate-700 dark:bg-slate-800 dark:hover:bg-slate-700 dark:text-slate-200 text-sm font-bold transition-all cursor-pointer flex items-center gap-2 disabled:opacity-50"
          >
            <X size={16} />
            <span>{isRtl ? 'إلغاء والعودة' : 'Cancel & Return'}</span>
          </button>

          <button
            type="submit"
            disabled={isSaving}
            className="px-8 py-3 rounded-2xl bg-[#00594C] hover:bg-[#00473c] text-white text-sm font-bold shadow-md shadow-[#00594C]/25 transition-all cursor-pointer flex items-center gap-2.5 active:scale-95 disabled:opacity-60"
          >
            {isSaving ? (
              <Loader2 size={18} className="animate-spin" />
            ) : (
              <Save size={18} />
            )}
            <span>
              {isEdit
                ? (isRtl ? 'حفظ التعديلات' : 'Save Changes')
                : (isRtl ? 'حفظ ونشر المنهج' : 'Publish Curriculum')}
            </span>
          </button>
        </div>
      </form>
    </div>
  )
}

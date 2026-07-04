import { useState, useEffect } from 'react'
import { useTranslation } from 'react-i18next'
import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query'
import { toast } from 'react-hot-toast'
import { Plus } from 'lucide-react'

import { explanationLanguagesApi } from '@/shared/services/api/explanationLanguagesApi'
import Spinner from '@/shared/components/Spinner'

import ExplanationLanguageForm from './components/ExplanationLanguageForm'
import ExplanationLanguageCard from './components/ExplanationLanguageCard'
import { showDeleteConfirm } from '@/shared/utils/sweetAlert'

export default function AdminExplanationLanguages() {
  const { t, i18n } = useTranslation()
  const isRtl = i18n.language.startsWith('ar')
  const queryClient = useQueryClient()

  // Local state for languages
  const [explanationLanguages, setExplanationLanguages] = useState([])

  // Fetch explanation languages from API
  const { data: languagesData, isLoading: isLoadingLanguages } = useQuery({
    queryKey: ['explanation-languages'],
    queryFn: () => explanationLanguagesApi.fetchLanguages(),
    staleTime: 5 * 60 * 1000,
  })

  // Sync fetched languages to local state
  useEffect(() => {
    if (languagesData?.data) {
      setExplanationLanguages(languagesData.data)
    } else if (Array.isArray(languagesData)) {
      setExplanationLanguages(languagesData)
    }
  }, [languagesData])

  // Form states for Add/Edit Language
  const [showForm, setShowForm] = useState(false)
  const [editingLanguageId, setEditingLanguageId] = useState(null)
  const [langNameAr, setLangNameAr] = useState('')
  const [langNameEn, setLangNameEn] = useState('')

  // --- Mutations ---
  const createMutation = useMutation({
    mutationFn: explanationLanguagesApi.createLanguage,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['explanation-languages'] })
      setShowForm(false)
      setLangNameAr('')
      setLangNameEn('')
      toast.success(isRtl ? 'تم إضافة لغة الشرح بنجاح!' : 'Explanation language added successfully!')
    },
    onError: (err) => {
      console.error('Failed to create language', err)
      toast.error(isRtl ? 'حدث خطأ أثناء إضافة اللغة' : 'Failed to add language')
    }
  })

  const updateMutation = useMutation({
    mutationFn: ({ id, payload }) => explanationLanguagesApi.updateLanguage(id, payload),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['explanation-languages'] })
      setEditingLanguageId(null)
      setShowForm(false)
      setLangNameAr('')
      setLangNameEn('')
      toast.success(isRtl ? 'تم تحديث لغة الشرح بنجاح!' : 'Explanation language updated successfully!')
    },
    onError: (err) => {
      console.error('Failed to update language', err)
      toast.error(isRtl ? 'حدث خطأ أثناء تعديل اللغة' : 'Failed to edit language')
    }
  })

  const deleteMutation = useMutation({
    mutationFn: (id) => explanationLanguagesApi.deleteLanguage(id),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['explanation-languages'] })
      toast.success(isRtl ? 'تم حذف لغة الشرح بنجاح!' : 'Explanation language deleted successfully!')
    },
    onError: (err) => {
      console.error('Failed to delete language', err)
      toast.error(isRtl ? 'حدث خطأ أثناء حذف اللغة' : 'Failed to delete language')
    }
  })

  const handleSaveLanguage = async (e) => {
    e.preventDefault()
    if (!langNameAr.trim() || !langNameEn.trim()) {
      toast.error(isRtl ? 'الرجاء إدخال الاسم باللغتين العربية والإنجليزية!' : 'Please enter the name in both Arabic and English!')
      return
    }

    const payload = {
      name: {
        ar: langNameAr.trim(),
        en: langNameEn.trim()
      }
    }

    if (editingLanguageId) {
      await updateMutation.mutateAsync({ id: editingLanguageId, payload })
    } else {
      await createMutation.mutateAsync(payload)
    }
  }

  const handleEditLanguageClick = async (langItem) => {
    try {
      // In editing, use the get one endpoint that returns the full data (containing name in both languages)
      const res = await explanationLanguagesApi.fetchLanguageById(langItem.id || langItem._id)
      const langData = res?.data || res
      setEditingLanguageId(langItem.id || langItem._id)
      setLangNameAr(langData.name?.ar || langData.name || '')
      setLangNameEn(langData.name?.en || langData.nameEn || langData.name || '')
      setShowForm(true)
    } catch (error) {
      console.error('Failed to fetch language details for edit:', error)
      toast.error(isRtl ? 'حدث خطأ أثناء تحميل بيانات اللغة' : 'Failed to load language details')
    }
  }

  const handleDeleteLanguage = async (langItem) => {
    const displayName = typeof langItem.name === 'object'
      ? (isRtl ? langItem.name.ar : langItem.name.en)
      : langItem.name
    const isConfirmed = await showDeleteConfirm(isRtl, displayName)
    if (!isConfirmed) return
    await deleteMutation.mutateAsync(langItem.id || langItem._id)
  }

  if (isLoadingLanguages) {
    return (
      <div className="flex h-[60vh] items-center justify-center">
        <Spinner />
      </div>
    )
  }

  return (
    <div className="space-y-8 p-1 md:p-6 text-start animate-fadeIn" dir={isRtl ? 'rtl' : 'ltr'}>
      
      {/* 1. Header with title & add button */}
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
        <div>
          <h1 className="text-2xl font-bold text-slate-800 dark:text-white">
            {isRtl ? 'لغات الشرح' : 'Explanation Languages'}
          </h1>
          <p className="text-sm text-slate-400 dark:text-slate-500 mt-1">
            {isRtl ? 'منارة العز أكاديمي · لوحة الإدارة' : 'Ezz Academy · Admin Dashboard'}
          </p>
        </div>

        <button
          type="button"
          onClick={() => {
            setShowForm(!showForm)
            setEditingLanguageId(null)
            setLangNameAr('')
            setLangNameEn('')
          }}
          className="px-5 py-3 bg-[#005953] hover:bg-[#004742] text-white rounded-2xl text-sm font-semibold transition-all shadow-md flex items-center gap-2 cursor-pointer self-start sm:self-center hover:scale-102 active:scale-95"
        >
          <Plus size={16} />
          <span>{isRtl ? 'إضافة لغة' : 'Add Language'}</span>
        </button>
      </div>

      {/* 2. Add / Edit Language Form Card */}
      {showForm && (
        <ExplanationLanguageForm 
          langNameAr={langNameAr}
          setLangNameAr={setLangNameAr}
          langNameEn={langNameEn}
          setLangNameEn={setLangNameEn}
          onCancel={() => {
            setShowForm(false)
            setEditingLanguageId(null)
          }}
          onSubmit={handleSaveLanguage}
          isEditing={!!editingLanguageId}
        />
      )}

      {/* List section title */}
      <div className="text-start">
        <h2 className="text-base font-bold text-slate-800 dark:text-white">
          {isRtl ? 'لغات الشرح المتاحة' : 'Available Explanation Languages'}
        </h2>
      </div>

      {/* 3. Languages Cards List */}
      <div className="space-y-5">
        {explanationLanguages.length === 0 ? (
          <div className="bg-white dark:bg-slate-900 rounded-3xl border border-slate-100 dark:border-slate-800 p-12 text-center text-slate-400 dark:text-slate-500">
            {isRtl ? 'لا توجد لغات شرح حالياً.' : 'No explanation languages available.'}
          </div>
        ) : (
          explanationLanguages.map((langItem) => (
            <ExplanationLanguageCard 
              key={langItem.id || langItem._id}
              langItem={langItem}
              onEdit={handleEditLanguageClick}
              onDelete={handleDeleteLanguage}
            />
          ))
        )}
      </div>

    </div>
  )
}

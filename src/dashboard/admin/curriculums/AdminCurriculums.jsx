import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { useTranslation } from 'react-i18next'
import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query'
import { BookMarked, Plus, X } from 'lucide-react'
import { toast } from 'react-hot-toast'
import { createPortal } from 'react-dom'

import { adminCurriculaApi } from '@/shared/services/api/adminCurriculaApi'
import { explanationLanguagesApi } from '@/shared/services/api/explanationLanguagesApi'
import { adminLevelsApi } from '@/shared/services/api/adminLevelsApi'

import Spinner from '@/shared/components/Spinner'
import { showDeleteConfirm } from '@/shared/utils/sweetAlert'
import CurriculumCard from './components/CurriculumCard'
import CurriculumForm from './components/CurriculumForm'

export default function AdminCurriculums() {
  const { i18n } = useTranslation()
  const isRtl = i18n.language.startsWith('ar')
  const queryClient = useQueryClient()
  const navigate = useNavigate()

  const [showForm, setShowForm] = useState(false)
  const [editingItem, setEditingItem] = useState(null)
  const [searchQuery, setSearchQuery] = useState('')

  // Fetch Curricula
  const { data: curriculaResponse, isLoading } = useQuery({
    queryKey: ['admin-curricula'],
    queryFn: () => adminCurriculaApi.fetchCurricula(),
  })

  // Fetch Languages for Form
  const { data: languagesResponse } = useQuery({
    queryKey: ['admin-explanation-languages'],
    queryFn: () => explanationLanguagesApi.fetchLanguages(),
  })

  // Fetch Levels for Form
  const { data: levelsResponse } = useQuery({
    queryKey: ['admin-levels'],
    queryFn: () => adminLevelsApi.fetchLevels(),
  })

  const curricula = curriculaResponse?.data || []
  const languages = languagesResponse?.data || []
  const levels = levelsResponse?.data || []

  const createMutation = useMutation({
    mutationFn: adminCurriculaApi.createCurriculum,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['admin-curricula'] })
      setShowForm(false)
      toast.success(isRtl ? 'تم إضافة المنهج بنجاح!' : 'Curriculum added successfully!')
    },
    onError: (err) => {
      console.error('Failed to add curriculum', err)
      toast.error(isRtl ? 'حدث خطأ أثناء إضافة المنهج' : 'Failed to add curriculum')
    }
  })

  const updateMutation = useMutation({
    mutationFn: ({ id, payload }) => adminCurriculaApi.updateCurriculum(id, payload),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['admin-curricula'] })
      setShowForm(false)
      setEditingItem(null)
      toast.success(isRtl ? 'تم تحديث المنهج بنجاح!' : 'Curriculum updated successfully!')
    },
    onError: (err) => {
      console.error('Failed to update curriculum', err)
      toast.error(isRtl ? 'حدث خطأ أثناء التحديث' : 'Failed to update curriculum')
    }
  })

  const deleteMutation = useMutation({
    mutationFn: (id) => adminCurriculaApi.deleteCurriculum(id),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['admin-curricula'] })
      toast.success(isRtl ? 'تم حذف المنهج بنجاح!' : 'Curriculum deleted successfully!')
    },
    onError: (err) => {
      console.error('Failed to delete curriculum', err)
      toast.error(isRtl ? 'حدث خطأ أثناء الحذف' : 'Failed to delete curriculum')
    }
  })

  const handleSave = async (payloadFormData) => {
    if (editingItem) {
      await updateMutation.mutateAsync({ id: editingItem.id || editingItem._id, payload: payloadFormData })
    } else {
      await createMutation.mutateAsync(payloadFormData)
    }
  }

  const handleEditClick = async (item) => {
    try {
      const res = await adminCurriculaApi.fetchCurriculumByIdRaw(item.id || item._id)
      const data = res?.data || res || item
      setEditingItem(data)
      setShowForm(true)
    } catch (error) {
      console.error('Failed to fetch full curriculum data for edit:', error)
      setEditingItem(item)
      setShowForm(true)
    }
  }

  const handleDelete = async (item) => {
    const itemName = typeof item.name === 'object' ? (isRtl ? item.name.ar : item.name.en) : item.name;
    const isConfirmed = await showDeleteConfirm(isRtl, itemName);
    if (!isConfirmed) return;
    await deleteMutation.mutateAsync(item.id || item._id);
  }

  const handleView = (item) => {
    const id = item.id || item._id;
    navigate(`/dashboard/admin/curriculums/${id}`);
  }

  const filteredCurricula = curricula.filter(c => {
    if (!searchQuery) return true;
    const q = searchQuery.toLowerCase();
    const nameAr = (c.name?.ar || '').toLowerCase();
    const nameEn = (typeof c.name === 'string' ? c.name : (c.name?.en || '')).toLowerCase();
    return nameAr.includes(q) || nameEn.includes(q);
  });

  if (isLoading) {
    return (
      <div className="flex h-[60vh] items-center justify-center">
        <Spinner />
      </div>
    )
  }

  return (
    <div className="p-4 md:p-8 max-w-7xl mx-auto space-y-8 animate-fadeIn" dir={isRtl ? 'rtl' : 'ltr'}>
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div className="flex items-center gap-4">
          <div className="w-12 h-12 rounded-2xl bg-[#0f7a6c]/10 flex items-center justify-center shrink-0">
            <BookMarked className="w-6 h-6 text-[#0f7a6c]" />
          </div>
          <div className="text-start">
            <h1 className="text-2xl font-extrabold text-slate-800 dark:text-slate-100">
              {isRtl ? 'المناهج الدراسية' : 'Study Curriculums'}
            </h1>
            <p className="text-sm text-slate-500 dark:text-slate-400 mt-0.5">
              {isRtl ? 'إدارة المناهج الدراسية للأكاديمية' : 'Manage academy curricula'}
            </p>
          </div>
        </div>

        <button
          type="button"
          onClick={() => {
            setEditingItem(null)
            setShowForm(true)
          }}
          className="px-5 py-3 bg-[#0f7a6c] hover:bg-[#0d6b5e] text-white rounded-2xl text-sm font-semibold transition-all shadow-sm shadow-[#0f7a6c]/20 flex items-center justify-center gap-2"
        >
          <Plus size={18} />
          <span>{isRtl ? 'إضافة منهج جديد' : 'Add Curriculum'}</span>
        </button>
      </div>

      <div className="bg-white dark:bg-slate-900 rounded-3xl border border-slate-100 dark:border-slate-800/80 p-4 sm:p-6 shadow-sm">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 mb-6 text-start">
          <h2 className="text-base font-bold text-slate-800 dark:text-white">
            {isRtl ? `المناهج المتاحة (${filteredCurricula.length})` : `Available Curricula (${filteredCurricula.length})`}
          </h2>

          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder={isRtl ? 'بحث في المناهج...' : 'Search curricula...'}
            className="w-full sm:w-72 bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 focus:border-[#0f7a6c] dark:focus:border-[#0f7a6c] rounded-xl px-4 py-2.5 text-sm outline-none transition-all dark:text-white"
          />
        </div>

        {filteredCurricula.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {filteredCurricula.map((item) => (
              <CurriculumCard
                key={item.id || item._id}
                curriculum={item}
                onEdit={handleEditClick}
                onDelete={handleDelete}
                onView={handleView}
              />
            ))}
          </div>
        ) : (
          <div className="text-center py-16 flex flex-col items-center text-slate-500 dark:text-slate-400">
            <BookMarked size={48} className="text-slate-300 dark:text-slate-700 mb-4" />
            <p className="font-semibold text-lg">{isRtl ? 'لا توجد مناهج' : 'No curricula found'}</p>
            <p className="text-sm mt-1">{isRtl ? 'قم بإضافة مناهج جديدة أو جرب كلمة بحث أخرى' : 'Add new curricula or try a different search term'}</p>
          </div>
        )}
      </div>

      {showForm && createPortal(
        <div className="fixed inset-0 z-[99999] flex items-center justify-center p-4 bg-slate-900/60 backdrop-blur-sm overflow-y-auto">
          <div className="bg-white dark:bg-slate-900 rounded-3xl shadow-2xl w-full max-w-3xl my-8 relative flex flex-col max-h-[90vh]">
            <div className="p-6 border-b border-slate-100 dark:border-slate-800/60 flex items-center justify-between shrink-0 text-start">
              <h2 className="text-xl font-bold text-slate-800 dark:text-white">
                {editingItem
                  ? (isRtl ? 'تعديل بيانات المنهج' : 'Edit Curriculum')
                  : (isRtl ? 'إضافة منهج دراسي جديد' : 'Add New Curriculum')}
              </h2>
              <button
                onClick={() => { setShowForm(false); setEditingItem(null); }}
                className="p-2 text-slate-400 hover:text-slate-600 bg-slate-100 rounded-full hover:bg-slate-200 dark:bg-slate-800 dark:hover:bg-slate-700 dark:hover:text-slate-300 transition-colors shrink-0"
              >
                <X size={20} />
              </button>
            </div>

            <div className="p-6 overflow-y-auto">
              <CurriculumForm
                onSave={handleSave}
                onCancel={() => {
                  setShowForm(false)
                  setEditingItem(null)
                }}
                editingItem={editingItem}
                isSaving={createMutation.isPending || updateMutation.isPending}
                languages={languages}
                levels={levels}
              />
            </div>
          </div>
        </div>,
        document.body
      )}
    </div>
  )
}

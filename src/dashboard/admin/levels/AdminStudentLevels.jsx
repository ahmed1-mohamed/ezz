import { useState, useEffect } from 'react'
import { useTranslation } from 'react-i18next'
import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query'
import { toast } from 'react-hot-toast'
import { Plus } from 'lucide-react'

import { adminLevelsApi } from '@/shared/services/api/adminLevelsApi'
import Spinner from '@/shared/components/Spinner'

import StudentLevelForm from './components/StudentLevelForm'
import StudentLevelCard from './components/StudentLevelCard'
import { showDeleteConfirm } from '@/shared/utils/sweetAlert'

export default function AdminStudentLevels() {
  const { i18n } = useTranslation()
  const isRtl = i18n.language.startsWith('ar')
  const queryClient = useQueryClient()

  const [levels, setLevels] = useState([])

  const { data: levelsData, isLoading: isLoadingLevels } = useQuery({
    queryKey: ['student-levels', i18n.language],
    queryFn: () => adminLevelsApi.fetchLevels({ lang: i18n.language }),
    staleTime: 5 * 60 * 1000,
  })

  useEffect(() => {
    const rawData = levelsData?.data || (Array.isArray(levelsData) ? levelsData : [])
    if (rawData) {
      const fetchedLevels = rawData.map((item) => ({
        id: item.id || item._id,
        name: typeof item.name === 'object' ? (item.name.ar || item.name.en || '') : item.name,
        nameEn: typeof item.name === 'object' ? (item.name.en || item.name.ar || '') : (item.nameEn || item.name || ''),
        createdAt: item.createdAt,
      }))
      setLevels(fetchedLevels)
    }
  }, [levelsData, i18n.language])

  const [showForm, setShowForm] = useState(false)
  const [editingLevelId, setEditingLevelId] = useState(null)
  const [levelNameAr, setLevelNameAr] = useState('')
  const [levelNameEn, setLevelNameEn] = useState('')

  const createMutation = useMutation({
    mutationFn: adminLevelsApi.createLevel,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['student-levels'] })
      setShowForm(false)
      setLevelNameAr('')
      setLevelNameEn('')
      toast.success(isRtl ? 'تم إضافة المستوى بنجاح!' : 'Level added successfully!')
    },
    onError: (err) => {
      console.error('Failed to create level', err)
      toast.error(isRtl ? 'حدث خطأ أثناء إضافة المستوى' : 'Failed to add level')
    }
  })

  const updateMutation = useMutation({
    mutationFn: ({ id, payload }) => adminLevelsApi.updateLevel(id, payload),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['student-levels'] })
      setEditingLevelId(null)
      setShowForm(false)
      setLevelNameAr('')
      setLevelNameEn('')
      toast.success(isRtl ? 'تم تحديث المستوى بنجاح!' : 'Level updated successfully!')
    },
    onError: (err) => {
      console.error('Failed to update level', err)
      toast.error(isRtl ? 'حدث خطأ أثناء تعديل المستوى' : 'Failed to edit level')
    }
  })

  const deleteMutation = useMutation({
    mutationFn: (id) => adminLevelsApi.deleteLevel(id),
    onSuccess: () => {
      queryClient.invalidateQueries(['student-levels'])
      toast.success(isRtl ? 'تم حذف المستوى بنجاح!' : 'Level deleted successfully!')
    },
    onError: (err) => {
      console.error('Failed to delete level', err)
      toast.error(isRtl ? 'حدث خطأ أثناء حذف المستوى' : 'Failed to delete level')
    }
  })

  const handleSaveLevel = async (e) => {
    e.preventDefault()
    if (!levelNameAr.trim() || !levelNameEn.trim()) {
      toast.error(isRtl ? 'الرجاء إدخال الاسم باللغتين العربية والإنجليزية!' : 'Please enter the name in both Arabic and English!')
      return
    }

    const payload = {
      name: {
        ar: levelNameAr.trim(),
        en: levelNameEn.trim()
      }
    }

    if (editingLevelId) {
      await updateMutation.mutateAsync({ id: editingLevelId, payload })
    } else {
      await createMutation.mutateAsync(payload)
    }
  }

  const handleEditLevelClick = async (lvl) => {
    try {
      const res = await adminLevelsApi.fetchLevelById(lvl.id);
      const lvlData = res?.data || res;
      setEditingLevelId(lvl.id);
      setLevelNameAr(lvlData.name?.ar || lvlData.name || '');
      setLevelNameEn(lvlData.name?.en || lvlData.nameEn || lvlData.name || '');
      setShowForm(true);
    } catch (error) {
      console.error('Failed to fetch level details for edit:', error);
      toast.error(isRtl ? 'حدث خطأ أثناء تحميل بيانات المستوى' : 'Failed to load level details');
    }
  }

  const handleDeleteLevel = async (level) => {
    const isConfirmed = await showDeleteConfirm(isRtl, level.name);
    if (!isConfirmed) return;
    await deleteMutation.mutateAsync(level.id);
  }

  if (isLoadingLevels) {
    return (
      <div className="flex h-[60vh] items-center justify-center">
        <Spinner />
      </div>
    )
  }

  return (
    <div className="space-y-8 p-1 md:p-6 text-start animate-fadeIn" dir={isRtl ? 'rtl' : 'ltr'}>

      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
        <div>
          <h1 className="text-2xl font-bold text-slate-800 dark:text-white">
            {isRtl ? 'مستويات الطلاب' : 'Student Levels'}
          </h1>
          <p className="text-sm text-slate-400 dark:text-slate-500 mt-1">
            {isRtl ? 'منارة العز أكاديمي · لوحة الإدارة' : 'Ezz Academy · Admin Dashboard'}
          </p>
        </div>

        <button
          type="button"
          onClick={() => {
            setShowForm(!showForm)
            setEditingLevelId(null)
            setLevelNameAr('')
            setLevelNameEn('')
          }}
          className="px-5 py-3 bg-[#005953] hover:bg-[#004742] text-white rounded-2xl text-sm font-semibold transition-all shadow-md flex items-center gap-2 cursor-pointer self-start sm:self-center hover:scale-102 active:scale-95"
        >
          <Plus size={16} />
          <span>{isRtl ? 'إضافة مستوى' : 'Add Level'}</span>
        </button>
      </div>

      {showForm && (
        <StudentLevelForm
          levelNameAr={levelNameAr}
          setLevelNameAr={setLevelNameAr}
          levelNameEn={levelNameEn}
          setLevelNameEn={setLevelNameEn}
          onCancel={() => {
            setShowForm(false)
            setEditingLevelId(null)
          }}
          onSubmit={handleSaveLevel}
          isEditing={!!editingLevelId}
        />
      )}

      <div className="text-start">
        <h2 className="text-base font-bold text-slate-800 dark:text-white">
          {isRtl ? 'مستويات الطلاب المتاحة' : 'Available Student Levels'}
        </h2>
      </div>

      <div className="space-y-5">
        {levels.map((lvl) => (
          <StudentLevelCard
            key={lvl.id}
            lvl={lvl}
            onEdit={handleEditLevelClick}
            onDelete={() => handleDeleteLevel(lvl)}
          />
        ))}
      </div>

    </div>
  )
}
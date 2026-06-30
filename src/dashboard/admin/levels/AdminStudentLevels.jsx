import { useState, useEffect } from 'react'
import { useTranslation } from 'react-i18next'
import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query'
import { toast } from 'react-hot-toast'
import { Plus } from 'lucide-react'

import { adminLevelsApi } from '@/shared/services/api/adminLevelsApi'
import Spinner from '@/shared/components/Spinner'

import StudentLevelForm from './components/StudentLevelForm'
import StudentLevelCard from './components/StudentLevelCard'
import DeleteLevelModal from './components/DeleteLevelModal'

export default function AdminStudentLevels() {
  const { i18n } = useTranslation()
  const isRtl = i18n.language.startsWith('ar')
  const queryClient = useQueryClient()

  // Local state for levels
  const [levels, setLevels] = useState([])

  // Fetch levels from API
  const { data: levelsData, isLoading: isLoadingLevels } = useQuery({
    queryKey: ['student-levels'],
    queryFn: () => adminLevelsApi.fetchLevels(),
    staleTime: 5 * 60 * 1000,
  })

  // Sync fetched levels to local state so local editing/adding continues to work for now
  useEffect(() => {
    if (levelsData?.data) {
      const fetchedLevels = levelsData.data.map((item) => ({
        id: item.id,
        name: typeof item.name === 'object' ? (isRtl ? item.name.ar : item.name.en) : item.name,
        nameEn: typeof item.name === 'object' ? item.name.en : item.name,
        description: '', // Not provided by the list API currently
        descriptionEn: '',
        isVisible: true, // Default to true if not returned
        steps: [], // Mocking steps until we have step APIs
        createdAt: item.createdAt,
      }))
      setLevels(fetchedLevels)
    }
  }, [levelsData, isRtl])

  // Form states for Add/Edit Level
  const [showForm, setShowForm] = useState(false)
  const [editingLevelId, setEditingLevelId] = useState(null)
  const [levelName, setLevelName] = useState('')
  const [levelDescription, setLevelDescription] = useState('')
  const [levelToDelete, setLevelToDelete] = useState(null)

  // Expanded card accordions state (storing level IDs)
  const [expandedLevels, setExpandedLevels] = useState({ 2: true }) // Level 2 expanded by default as in screenshot

  // State for adding a new step inline
  const [addingStepLevelId, setAddingStepLevelId] = useState(null)
  const [newStepTitle, setNewStepTitle] = useState('')

  // State for editing a step inline
  const [editingStepId, setEditingStepId] = useState(null)
  const [editingStepTitle, setEditingStepTitle] = useState('')

  // --- Mutations ---
  const createMutation = useMutation({
    mutationFn: adminLevelsApi.createLevel,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['student-levels'] })
      setShowForm(false)
      setLevelName('')
      setLevelDescription('')
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
      setLevelName('')
      setLevelDescription('')
      toast.success(isRtl ? 'تم تحديث المستوى بنجاح!' : 'Level updated successfully!')
    },
    onError: (err) => {
      console.error('Failed to update level', err)
      toast.error(isRtl ? 'حدث خطأ أثناء تعديل المستوى' : 'Failed to edit level')
    }
  })

  const deleteMutation = useMutation({
    mutationFn: adminLevelsApi.deleteLevel,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['student-levels'] })
      setLevelToDelete(null)
      toast.success(isRtl ? 'تم حذف المستوى بنجاح!' : 'Level deleted successfully!')
    },
    onError: (err) => {
      console.error('Failed to delete level', err)
      toast.error(isRtl ? 'حدث خطأ أثناء حذف المستوى' : 'Failed to delete level')
    }
  })

  const toggleAccordion = (levelId) => {
    setExpandedLevels((prev) => ({
      ...prev,
      [levelId]: !prev[levelId]
    }))
  }

  const handleToggleVisibility = (levelId) => {
    setLevels((prev) =>
      prev.map((lvl) => (lvl.id === levelId ? { ...lvl, isVisible: !lvl.isVisible } : lvl))
    )
  }

  const handleSaveLevel = async (e) => {
    e.preventDefault()
    if (!levelName.trim()) {
      toast.error(isRtl ? 'الرجاء إدخال اسم المستوى الدراسي!' : 'Please enter the level name!')
      return
    }

    const payload = {
      name: {
        ar: levelName,
        en: levelName
      }
    }

    if (editingLevelId) {
      await updateMutation.mutateAsync({ id: editingLevelId, payload })
    } else {
      await createMutation.mutateAsync(payload)
    }
  }

  const handleEditLevelClick = (lvl) => {
    setEditingLevelId(lvl.id)
    setLevelName(lvl.name)
    setLevelDescription(lvl.description || '')
    setShowForm(true)
  }

  const handleDeleteLevelClick = (levelId) => {
    setLevelToDelete(levelId)
  }

  const confirmDeleteLevel = async () => {
    if (levelToDelete) {
      await deleteMutation.mutateAsync(levelToDelete)
    }
  }

  // --- Step Management Handlers ---

  const handleAddStepSubmit = (levelId) => {
    if (!newStepTitle.trim()) return
    setLevels((prev) =>
      prev.map((lvl) => {
        if (lvl.id === levelId) {
          return {
            ...lvl,
            steps: [...lvl.steps, { id: Date.now(), title: newStepTitle }]
          }
        }
        return lvl
      })
    )
    setNewStepTitle('')
    setAddingStepLevelId(null)
  }

  const handleStartEditStep = (step) => {
    setEditingStepId(step.id)
    setEditingStepTitle(step.title)
  }

  const handleSaveEditStepSubmit = (levelId, stepId) => {
    if (!editingStepTitle.trim()) return
    setLevels((prev) =>
      prev.map((lvl) => {
        if (lvl.id === levelId) {
          return {
            ...lvl,
            steps: lvl.steps.map((st) => (st.id === stepId ? { ...st, title: editingStepTitle } : st))
          }
        }
        return lvl
      })
    )
    setEditingStepId(null)
    setEditingStepTitle('')
  }

  const handleDeleteStep = (levelId, stepId) => {
    if (confirm(isRtl ? 'هل أنت متأكد من حذف هذه الدرجة/المرحلة؟' : 'Are you sure you want to delete this step?')) {
      setLevels((prev) =>
        prev.map((lvl) => {
          if (lvl.id === levelId) {
            return {
              ...lvl,
              steps: lvl.steps.filter((st) => st.id !== stepId)
            }
          }
          return lvl
        })
      )
    }
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
      
      <DeleteLevelModal 
        isOpen={!!levelToDelete}
        onClose={() => setLevelToDelete(null)}
        onConfirm={confirmDeleteLevel}
        isDeleting={deleteMutation.isPending}
      />

      {/* 1. Header with title & add button */}
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
            setLevelName('')
            setLevelDescription('')
          }}
          className="px-5 py-3 bg-[#005953] hover:bg-[#004742] text-white rounded-2xl text-sm font-semibold transition-all shadow-md flex items-center gap-2 cursor-pointer self-start sm:self-center hover:scale-102 active:scale-95"
        >
          <Plus size={16} />
          <span>{isRtl ? 'إضافة مستوى' : 'Add Level'}</span>
        </button>
      </div>

      {/* 2. Add / Edit Level Form Card */}
      {showForm && (
        <StudentLevelForm 
          levelName={levelName}
          setLevelName={setLevelName}
          levelDescription={levelDescription}
          setLevelDescription={setLevelDescription}
          onCancel={() => {
            setShowForm(false)
            setEditingLevelId(null)
          }}
          onSubmit={handleSaveLevel}
          isEditing={!!editingLevelId}
        />
      )}

      {/* List section title */}
      <div className="text-start">
        <h2 className="text-base font-bold text-slate-800 dark:text-white">
          {isRtl ? 'مستويات الطلاب المتاحة' : 'Available Student Levels'}
        </h2>
      </div>

      {/* 3. Levels Accordion Cards List */}
      <div className="space-y-5">
        {levels.map((lvl) => (
          <StudentLevelCard 
            key={lvl.id}
            lvl={lvl}
            isExpanded={!!expandedLevels[lvl.id]}
            onToggleExpand={toggleAccordion}
            onToggleVisibility={handleToggleVisibility}
            onEdit={handleEditLevelClick}
            onDelete={handleDeleteLevelClick}
            addingStepLevelId={addingStepLevelId}
            setAddingStepLevelId={setAddingStepLevelId}
            newStepTitle={newStepTitle}
            setNewStepTitle={setNewStepTitle}
            editingStepId={editingStepId}
            setEditingStepId={setEditingStepId}
            editingStepTitle={editingStepTitle}
            setEditingStepTitle={setEditingStepTitle}
            handleAddStepSubmit={handleAddStepSubmit}
            handleStartEditStep={handleStartEditStep}
            handleSaveEditStepSubmit={handleSaveEditStepSubmit}
            handleDeleteStep={handleDeleteStep}
          />
        ))}
      </div>

    </div>
  )
}

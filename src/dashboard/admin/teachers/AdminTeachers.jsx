import { useState, useEffect, useMemo } from 'react'
import { useTranslation } from 'react-i18next'
import { useQuery, useQueryClient } from '@tanstack/react-query'
import { teachersApi } from '@/shared/services/api/teachersApi'
import TeachersList from './components/TeachersList'
import TeacherProfileCard from './components/TeacherProfileCard'
import AddEditTeacherScreen from './components/AddEditTeacherScreen'
import TeacherDetailsScreen from './components/TeacherDetailsScreen'
import Spinner from '@/shared/components/Spinner'

export default function AdminTeachers() {
  const { t, i18n } = useTranslation()
  const isRtl = i18n.language.startsWith('ar')

  const queryClient = useQueryClient();
  const [viewMode, setViewMode] = useState('list')
  const [selectedTeacherId, setSelectedTeacherId] = useState(null)
  const [selectedTeacherRecord, setSelectedTeacherRecord] = useState(null)

  const { data: allRes, isLoading: isLoadingAll } = useQuery({
    queryKey: ['teachers'],
    queryFn: () => teachersApi.fetchTeachers(),
    staleTime: 5 * 60 * 1000,
  })

  const { data: activeRes, isLoading: isLoadingActive } = useQuery({
    queryKey: ['teachers-active'],
    queryFn: () => teachersApi.fetchActiveTeachers(),
    staleTime: 5 * 60 * 1000,
  })

  const { data: stoppedRes, isLoading: isLoadingStopped } = useQuery({
    queryKey: ['teachers-stopped'],
    queryFn: () => teachersApi.fetchStoppedTeachers(),
    staleTime: 5 * 60 * 1000,
  })

  const isLoading = isLoadingAll || isLoadingActive || isLoadingStopped

  const teachers = useMemo(() => allRes?.success ? allRes.data : [], [allRes])
  const activeTeachers = useMemo(() => activeRes?.success ? activeRes.data : [], [activeRes])
  const suspendedTeachers = useMemo(() => stoppedRes?.success ? stoppedRes.data : [], [stoppedRes])

  useEffect(() => {
    if (teachers.length > 0 && !selectedTeacherId) {
      setSelectedTeacherId(teachers[0].id)
    }
  }, [teachers, selectedTeacherId])

  const metrics = useMemo(() => {
    const total = teachers.length
    const active = activeTeachers.length
    const suspended = suspendedTeachers.length
    return { total, active, suspended }
  }, [teachers, activeTeachers, suspendedTeachers])

  const selectedTeacher = useMemo(() => {
    return teachers.find((t) => t.id === selectedTeacherId) || teachers[0] || null
  }, [teachers, selectedTeacherId])

  const handleToggleStatus = async (id) => {
    const teacher = teachers.find((t) => t.id === id)
    if (!teacher) return
    const newStatus = teacher.status === 'Active' ? 'Suspended' : 'Active'
    try {
      const res = await teachersApi.updateTeacher(id, { ...teacher, status: newStatus })
      if (res.success) {
        await queryClient.invalidateQueries({ queryKey: ['teachers'] })
        await queryClient.invalidateQueries({ queryKey: ['teachers-active'] })
        await queryClient.invalidateQueries({ queryKey: ['teachers-stopped'] })
        setSelectedTeacherRecord((prev) =>
          prev && prev.id === id ? { ...prev, status: newStatus } : prev
        )
      }
    } catch (err) {
      console.error('Failed to toggle status:', err)
    }
  }

  const handleSaveTeacher = async (formData) => {
    if (viewMode === 'edit-teacher' && selectedTeacherRecord) {
      try {
        const res = await teachersApi.updateTeacher(selectedTeacherRecord.id, {
          ...selectedTeacherRecord,
          ...formData
        })
        if (res.success) {
          await queryClient.invalidateQueries({ queryKey: ['teachers'] })
          setSelectedTeacherRecord(null)
          setViewMode('list')
        }
      } catch (err) {
        console.error('Failed to update teacher details:', err)
      }
    } else {
      try {
        const res = await teachersApi.createTeacher({
          ...formData,
          rating: 5.0,
          dueEarnings: 0
        })
        if (res.success) {
          await queryClient.invalidateQueries({ queryKey: ['teachers'] })
          await queryClient.invalidateQueries({ queryKey: ['teachers-active'] })
          setSelectedTeacherId(res.data.id)
          setViewMode('list')
        }
      } catch (err) {
        console.error('Failed to create teacher:', err)
      }
    }
  }

  const handleOpenEditScreen = (teacher) => {
    setSelectedTeacherRecord(teacher)
    setViewMode('edit-teacher')
  }

  return (
    <div className="space-y-8 p-1 md:p-6 relative" dir={isRtl ? 'rtl' : 'ltr'}>
      {isLoading && viewMode === 'list' && (
        <div className="absolute inset-0 z-50 flex items-center justify-center bg-white/50 dark:bg-slate-900/50 backdrop-blur-sm rounded-3xl">
          <Spinner />
        </div>
      )}
      {viewMode === 'list' && (
        <>
          <div className="text-start">
            <h1 className="text-2xl font-bold text-slate-800 dark:text-white">
              {t('adminDashboard.teachers.title', 'إدارة المعلمين')}
            </h1>
            <p className="text-sm text-slate-400 dark:text-slate-500 mt-1">
              {t('adminDashboard.teachers.subtitle', 'منارة العز أكاديمي · لوحة الإدارة')}
            </p>
          </div>

          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            <div className="flex items-center justify-between p-6 bg-white dark:bg-slate-900 rounded-3xl border border-slate-100 dark:border-slate-800/60 shadow-soft">
              <span className="text-xs font-bold text-slate-400 dark:text-slate-500">
                {t('adminDashboard.teachers.total', 'إجمالي المعلمين')}
              </span>
              <span className="text-3xl font-extrabold text-slate-700 dark:text-slate-205">
                {metrics.total}
              </span>
            </div>

            <div className="flex items-center justify-between p-6 bg-white dark:bg-slate-900 rounded-3xl border border-slate-100 dark:border-slate-800/60 shadow-soft">
              <span className="text-xs font-bold text-slate-400 dark:text-slate-500">
                {t('adminDashboard.teachers.active', 'نشطون')}
              </span>
              <span className="text-3xl font-extrabold text-emerald-600 dark:text-emerald-400">
                {metrics.active}
              </span>
            </div>

            <div className="flex items-center justify-between p-6 bg-white dark:bg-slate-900 rounded-3xl border border-slate-100 dark:border-slate-800/60 shadow-soft">
              <span className="text-xs font-bold text-slate-400 dark:text-slate-500">
                {t('adminDashboard.teachers.suspended', 'موقوفون')}
              </span>
              <span className="text-3xl font-extrabold text-rose-600 dark:text-rose-450">
                {metrics.suspended}
              </span>
            </div>
          </div>

          <div className="flex flex-col lg:flex-row gap-8 items-start">

            <div className="w-full lg:w-80 shrink-0">
              <TeacherProfileCard
                teacher={selectedTeacher}
                isRtl={isRtl}
                t={t}
                onEdit={handleOpenEditScreen}
                onToggleStatus={handleToggleStatus}
              />
            </div>

            <div className="flex-1 w-full">
              <TeachersList
                teachers={teachers}
                selectedTeacherId={selectedTeacherId}
                isRtl={isRtl}
                t={t}
                onSelectTeacher={setSelectedTeacherId}
                onOpenAddScreen={() => setViewMode('add-teacher')}
                onOpenEditScreen={handleOpenEditScreen}
                onViewDetails={(teacher) => {
                  setSelectedTeacherRecord(teacher)
                  setViewMode('view-teacher')
                }}
              />
            </div>

          </div>
        </>
      )}

      {(viewMode === 'add-teacher' || viewMode === 'edit-teacher') && (
        <AddEditTeacherScreen
          teacher={viewMode === 'edit-teacher' ? selectedTeacherRecord : null}
          isRtl={isRtl}
          t={t}
          onSave={handleSaveTeacher}
          onCancel={() => {
            setSelectedTeacherRecord(null)
            setViewMode('list')
          }}
        />
      )}

      {viewMode === 'view-teacher' && (
        <TeacherDetailsScreen
          teacher={selectedTeacherRecord}
          isRtl={isRtl}
          t={t}
          onCancel={() => {
            setSelectedTeacherRecord(null)
            setViewMode('list')
          }}
          onToggleStatus={handleToggleStatus}
          onEdit={(teacher) => {
            setSelectedTeacherRecord(teacher)
            setViewMode('edit-teacher')
          }}
        />
      )}
    </div>
  )
}
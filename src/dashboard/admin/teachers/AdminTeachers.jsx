import { useState, useEffect, useMemo } from 'react'
import { useTranslation } from 'react-i18next'
import { teachersApi } from '@/shared/services/api/teachersApi'
import TeachersList from './components/TeachersList'
import TeacherProfileCard from './components/TeacherProfileCard'
import AddEditTeacherScreen from './components/AddEditTeacherScreen'
import TeacherDetailsScreen from './components/TeacherDetailsScreen'
import Spinner from '@/shared/components/Spinner'

export default function AdminTeachers() {
  const { t, i18n } = useTranslation()
  const isRtl = i18n.language.startsWith('ar')

  const [viewMode, setViewMode] = useState('list')
  const [teachers, setTeachers] = useState([])
  const [selectedTeacherId, setSelectedTeacherId] = useState(null)
  const [selectedTeacherRecord, setSelectedTeacherRecord] = useState(null)
  const [isLoading, setIsLoading] = useState(true)

  const [activeTeachers, setActiveTeachers] = useState([])
  const [suspendedTeachers, setSuspendedTeachers] = useState([])

  useEffect(() => {
    async function loadTeachers() {
      setIsLoading(true)
      try {
        const [allRes, activeRes, stoppedRes] = await Promise.all([
          teachersApi.fetchTeachers(),
          teachersApi.fetchActiveTeachers(),
          teachersApi.fetchStoppedTeachers()
        ])
        if (allRes.success) {
          setTeachers(allRes.data)
          if (allRes.data.length > 0) {
            setSelectedTeacherId(allRes.data[0].id)
          }
        }
        if (activeRes.success) setActiveTeachers(activeRes.data)
        if (stoppedRes.success) setSuspendedTeachers(stoppedRes.data)
      } catch (err) {
        console.error('Failed to fetch teachers:', err)
      } finally {
        setIsLoading(false)
      }
    }
    loadTeachers()
  }, [])

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
        setTeachers((prev) =>
          prev.map((t) => (t.id === id ? { ...t, status: newStatus } : t))
        )
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
          setTeachers((prev) =>
            prev.map((t) => (t.id === selectedTeacherRecord.id ? { ...t, ...res.data } : t))
          )
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
          setTeachers((prev) => [...prev, res.data])
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

  if (isLoading) {
    return (
      <div className="flex h-[60vh] items-center justify-center">
        <Spinner />
      </div>
    )
  }

  return (
    <div className="space-y-8 p-1 md:p-6" dir={isRtl ? 'rtl' : 'ltr'}>
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
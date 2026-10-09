import { useState, useEffect, useMemo } from 'react'
import { useNavigate } from 'react-router-dom'
import { useTranslation } from 'react-i18next'
import { useQuery, useQueryClient } from '@tanstack/react-query'
import { toast } from 'react-hot-toast'
import { teachersApi } from '@/shared/services/api/teachersApi'
import { showDeleteConfirm } from '@/shared/utils/sweetAlert'
import TeachersList from './components/TeachersList'
import TeacherProfileCard from './components/TeacherProfileCard'
import AddEditTeacherScreen from './components/AddEditTeacherScreen'
import TeacherDetailsScreen from './components/TeacherDetailsScreen'
import Spinner from '@/shared/components/Spinner'

export default function AdminTeachers() {
  const navigate = useNavigate()
  const { t, i18n } = useTranslation()
  const isRtl = i18n.language.startsWith('ar')

  const queryClient = useQueryClient()
  const [viewMode, setViewMode] = useState('list')
  const [selectedTeacherId, setSelectedTeacherId] = useState(null)
  const [selectedTeacherRecord, setSelectedTeacherRecord] = useState(null)

  // Backend search and pagination states
  const [currentPage, setCurrentPage] = useState(1)
  const [searchVal, setSearchVal] = useState('')
  const [committedSearch, setCommittedSearch] = useState('')
  const [statusFilter, setStatusFilter] = useState('all') // 'all' | 'active' | 'stopped'

  // Reset to page 1 whenever committed search query or status filter changes
  useEffect(() => {
    setCurrentPage(1)
  }, [committedSearch, statusFilter])

  const handleSearchSubmit = () => {
    setCommittedSearch(searchVal.trim())
    setCurrentPage(1)
  }

  const handleClearSearch = () => {
    setSearchVal('')
    setCommittedSearch('')
    setCurrentPage(1)
  }

  // Backend query passing page, limit: 10, committed search, and status
  const { data: res, isLoading, isFetching } = useQuery({
    queryKey: ['teachers', currentPage, committedSearch, statusFilter],
    queryFn: () =>
      teachersApi.fetchTeachers({
        page: currentPage,
        limit: 10,
        search: committedSearch,
        status: statusFilter !== 'all' ? statusFilter : undefined
      }),
    staleTime: 60 * 1000,
  })

  const teachers = useMemo(() => res?.data || [], [res])
  const pagination = res?.pagination || { currentPage: 1, limit: 10, numberOfPages: 1 }
  const statistics = res?.statistics || {
    total: teachers.length,
    active: teachers.filter((t) => t.active).length,
    stopped: teachers.filter((t) => !t.active).length
  }

  useEffect(() => {
    if (teachers.length > 0 && (!selectedTeacherId || !teachers.some((t) => t.id === selectedTeacherId))) {
      setSelectedTeacherId(teachers[0].id)
    }
  }, [teachers, selectedTeacherId])

  const selectedTeacher = useMemo(() => {
    return teachers.find((t) => t.id === selectedTeacherId) || teachers[0] || null
  }, [teachers, selectedTeacherId])

  const handleToggleStatus = async (idOrTeacher) => {
    const teacher = (typeof idOrTeacher === 'object' && idOrTeacher !== null)
      ? idOrTeacher
      : (teachers.find((t) => t.id === idOrTeacher || t.teacher_id === idOrTeacher) ||
         (selectedTeacherRecord?.id === idOrTeacher || selectedTeacherRecord?.teacher_id === idOrTeacher ? selectedTeacherRecord : null))
    if (!teacher) return
    const id = teacher.id || teacher.teacher_id
    const newActive = !teacher.active

    try {
      await teachersApi.toggleTeacherStatus(teacher)
      await queryClient.invalidateQueries({ queryKey: ['teachers'] })
      setSelectedTeacherRecord((prev) =>
        prev && (prev.id === id || prev.teacher_id === id)
          ? { ...prev, active: newActive, status: newActive ? 'Active' : 'Suspended' }
          : prev
      )
      toast.success(
        newActive
          ? (isRtl ? 'تم تفعيل حساب المعلم بنجاح' : 'Teacher account activated')
          : (isRtl ? 'تم إيقاف حساب المعلم' : 'Teacher account suspended')
      )
    } catch (err) {
      const backendMsg = err.response?.data?.message
      const errorText = Array.isArray(backendMsg)
        ? backendMsg.join(' - ')
        : (backendMsg || (isRtl ? 'حدث خطأ أثناء تحديث حالة المعلم' : 'Failed to update teacher status'))
      toast.error(errorText)
      console.error('Failed to toggle status:', err)
    }
  }

  const handleDeleteTeacher = async (teacher) => {
    if (!teacher) return
    const id = teacher.teacher_id || teacher.id || teacher._id
    const teacherName = teacher.name || 'المعلم'

    const isConfirmed = await showDeleteConfirm(isRtl, teacherName)
    if (!isConfirmed) return

    try {
      await teachersApi.deleteTeacher(id)
      await queryClient.invalidateQueries({ queryKey: ['teachers'] })
      toast.success(isRtl ? 'تم حذف المعلم بنجاح' : 'Teacher deleted successfully')

      if (selectedTeacherId === id) {
        setSelectedTeacherId(null)
      }
      if (selectedTeacherRecord && (selectedTeacherRecord.id === id || selectedTeacherRecord.teacher_id === id)) {
        setSelectedTeacherRecord(null)
        setViewMode('list')
      }
    } catch (err) {
      toast.error(isRtl ? 'حدث خطأ أثناء حذف المعلم' : 'Failed to delete teacher')
      console.error('Failed to delete teacher:', err)
    }
  }

  const handleSaveTeacher = async (formData) => {
    const isUpdate = viewMode === 'edit-teacher' && selectedTeacherRecord
    const id = selectedTeacherRecord?.teacher_id || selectedTeacherRecord?.id

    try {
      if (isUpdate) {
        await teachersApi.updateTeacher(id, formData)
        toast.success(isRtl ? 'تم تحديث بيانات المعلم بنجاح' : 'Teacher updated successfully')
      } else {
        const createRes = await teachersApi.createTeacher(formData)
        toast.success(isRtl ? 'تمت إضافة المعلم بنجاح' : 'Teacher added successfully')
        if (createRes?.data?.id) {
          setSelectedTeacherId(createRes.data.id)
        }
      }
      await queryClient.invalidateQueries({ queryKey: ['teachers'] })
      setSelectedTeacherRecord(null)
      setViewMode('list')
    } catch (err) {
      const backendMsg = err.response?.data?.message
      const errorText = Array.isArray(backendMsg)
        ? backendMsg.join(' - ')
        : (backendMsg || (isRtl ? 'حدث خطأ أثناء حفظ بيانات المعلم' : 'Failed to save teacher'))
      toast.error(errorText)
      console.error('Failed to save teacher:', err)
    }
  }

  const handleOpenEditScreen = (teacher) => {
    setSelectedTeacherRecord(teacher)
    setViewMode('edit-teacher')
  }

  const handleViewDetails = (teacher) => {
    const id = teacher?.teacher_id || teacher?.id || teacher?.user_id || selectedTeacherId
    if (id) {
      navigate(`/dashboard/admin/teachers/${id}`)
    } else {
      setSelectedTeacherRecord(teacher)
      setViewMode('view-teacher')
    }
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
            <button
              type="button"
              onClick={() => setStatusFilter('all')}
              className={`flex items-center justify-between p-6 bg-white dark:bg-slate-900 rounded-3xl border transition-all text-start cursor-pointer hover:shadow-md ${
                statusFilter === 'all'
                  ? 'border-[#005953] ring-2 ring-[#005953]/20 shadow-soft'
                  : 'border-slate-100 dark:border-slate-800/60 shadow-soft'
              }`}
            >
              <div>
                <span className="text-xs font-bold text-slate-400 dark:text-slate-500 block">
                  {t('adminDashboard.teachers.total', 'إجمالي المعلمين')}
                </span>
                <span className="text-xs text-slate-400 mt-1 block">
                  {isRtl ? 'عرض جميع المعلمين' : 'View all teachers'}
                </span>
              </div>
              <span className="text-3xl font-extrabold text-slate-700 dark:text-slate-200">
                {statistics.total ?? 0}
              </span>
            </button>

            <button
              type="button"
              onClick={() => setStatusFilter('active')}
              className={`flex items-center justify-between p-6 bg-white dark:bg-slate-900 rounded-3xl border transition-all text-start cursor-pointer hover:shadow-md ${
                statusFilter === 'active'
                  ? 'border-emerald-500 ring-2 ring-emerald-500/20 shadow-soft'
                  : 'border-slate-100 dark:border-slate-800/60 shadow-soft'
              }`}
            >
              <div>
                <span className="text-xs font-bold text-slate-400 dark:text-slate-500 block">
                  {t('adminDashboard.teachers.active', 'نشطون')}
                </span>
                <span className="text-xs text-emerald-600/70 mt-1 block">
                  {isRtl ? 'المعلمون النشطون فقط' : 'Active teachers only'}
                </span>
              </div>
              <span className="text-3xl font-extrabold text-emerald-600 dark:text-emerald-400">
                {statistics.active ?? 0}
              </span>
            </button>

            <button
              type="button"
              onClick={() => setStatusFilter('stopped')}
              className={`flex items-center justify-between p-6 bg-white dark:bg-slate-900 rounded-3xl border transition-all text-start cursor-pointer hover:shadow-md ${
                statusFilter === 'stopped'
                  ? 'border-rose-500 ring-2 ring-rose-500/20 shadow-soft'
                  : 'border-slate-100 dark:border-slate-800/60 shadow-soft'
              }`}
            >
              <div>
                <span className="text-xs font-bold text-slate-400 dark:text-slate-500 block">
                  {t('adminDashboard.teachers.suspended', 'موقوفون')}
                </span>
                <span className="text-xs text-rose-500/70 mt-1 block">
                  {isRtl ? 'الحسابات الموقوفة' : 'Stopped / Suspended'}
                </span>
              </div>
              <span className="text-3xl font-extrabold text-rose-600 dark:text-rose-400">
                {statistics.stopped ?? 0}
              </span>
            </button>
          </div>

          <div className="flex flex-col lg:flex-row gap-8 items-start">
             <div className="w-full lg:w-80 shrink-0">
              <TeacherProfileCard
                teacher={selectedTeacher}
                isRtl={isRtl}
                t={t}
                onEdit={handleOpenEditScreen}
                onToggleStatus={handleToggleStatus}
                onDelete={handleDeleteTeacher}
                onViewDetails={handleViewDetails}
              />
            </div>

             <div className="flex-1 w-full">
              <TeachersList
                teachers={teachers}
                selectedTeacherId={selectedTeacherId}
                isRtl={isRtl}
                t={t}
                searchVal={searchVal}
                onSearchChange={setSearchVal}
                committedSearch={committedSearch}
                onSearchSubmit={handleSearchSubmit}
                onClearSearch={handleClearSearch}
                statusFilter={statusFilter}
                onStatusFilterChange={setStatusFilter}
                statistics={statistics}
                currentPage={currentPage}
                totalPages={pagination.numberOfPages || 1}
                totalItems={statistics.total || teachers.length}
                isFetching={isFetching}
                onPageChange={setCurrentPage}
                onSelectTeacher={setSelectedTeacherId}
                onOpenAddScreen={() => setViewMode('add-teacher')}
                onOpenEditScreen={handleOpenEditScreen}
                onViewDetails={handleViewDetails}
                onDelete={handleDeleteTeacher}
                onToggleStatus={handleToggleStatus}
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
          onDelete={handleDeleteTeacher}
          onEdit={(teacher) => {
            setSelectedTeacherRecord(teacher)
            setViewMode('edit-teacher')
          }}
        />
      )}
    </div>
  )
}
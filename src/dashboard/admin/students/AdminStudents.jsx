import { useState } from 'react'
import { useTranslation } from 'react-i18next'
import { toast } from 'react-hot-toast'
import { useQuery, useQueryClient } from '@tanstack/react-query'
import { studentsApi } from '@/shared/services/api/studentsApi'
import StudentsList from './components/StudentsList'
import AddEditStudentScreen from './components/AddEditStudentScreen'
import StudentDetailsScreen from './components/StudentDetailsScreen'
import AddSessionsModal from './components/AddSessionsModal'
import Spinner from '@/shared/components/Spinner'
import { showDeleteConfirm } from '@/shared/utils/sweetAlert'

export default function AdminStudents() {
  const { t, i18n } = useTranslation()
  const isRtl = i18n.language.startsWith('ar')

  const queryClient = useQueryClient()
  const [viewMode, setViewMode] = useState('list')
  const [selectedStudent, setSelectedStudent] = useState(null)
  const [sessionModalStudent, setSessionModalStudent] = useState(null)
  const [isAddingSessions, setIsAddingSessions] = useState(false)
  const [statusFilter, setStatusFilter] = useState('all') // 'all' | 'active' | 'stopped'
  const [currentPage, setCurrentPage] = useState(1)

  const { data: fetchRes, isLoading } = useQuery({
    queryKey: ['adminStudents', statusFilter, currentPage],
    queryFn: () => studentsApi.fetchStudents({
      status: statusFilter,
      page: currentPage,
      limit: 10
    }),
    staleTime: 3 * 60 * 1000
  })

  const rawList = fetchRes?.data || (Array.isArray(fetchRes) ? fetchRes : [])
  const students = Array.isArray(rawList) ? rawList : []

  const pagination = fetchRes?.pagination || {}
  const totalPages = Number(pagination.numberOfPages || 1)
  const totalCount = Number(pagination.totalCount || pagination.total || students.length)

  // Real statistics from backend
  const statistics = fetchRes?.statistics || {
    total: students.length,
    active: students.filter((s) => s.active === true || String(s.active) === 'true').length,
    stopped: students.filter((s) => s.active === false || String(s.active) === 'false').length
  }

  const handleStatusFilterChange = (newStatus) => {
    setStatusFilter(newStatus)
    setCurrentPage(1)
  }

  const handleSaveStudent = async (formData) => {
    const isUpdate = viewMode === 'edit-student' && selectedStudent
    const studentId = selectedStudent
      ? (selectedStudent.student_id || selectedStudent._id || selectedStudent.id || selectedStudent.user_id)
      : null

    if (isUpdate) {
      if (!studentId) {
        toast.error(isRtl ? 'حدث خطأ: لا يوجد معرّف صالح للطالب!' : 'Invalid student ID!')
        return
      }

      try {
        await studentsApi.updateStudent(studentId, formData)
        await queryClient.invalidateQueries({ queryKey: ['adminStudents'] })
        toast.success(isRtl ? 'تم تعديل بيانات الطالب بنجاح' : 'Student updated successfully')
        setSelectedStudent(null)
        setViewMode('list')
      } catch (err) {
        const errorMsg = err.response?.data?.message || err.message || (isRtl ? 'حدث خطأ أثناء التعديل' : 'Failed to update student')
        const displayMsg = Array.isArray(errorMsg) ? errorMsg.join(' - ') : errorMsg
        toast.error(displayMsg)
        console.error('Failed to update student details:', err)
      }
    } else {
      try {
        await studentsApi.createStudent(formData)
        await queryClient.invalidateQueries({ queryKey: ['adminStudents'] })
        toast.success(isRtl ? 'تم إنشاء حساب الطالب بنجاح' : 'Student created successfully')
        setViewMode('list')
      } catch (err) {
        const errorMsg = err.response?.data?.message || err.message || (isRtl ? 'فشل إنشاء الطالب' : 'Failed to create student')
        const displayMsg = Array.isArray(errorMsg) ? errorMsg.join(' - ') : errorMsg
        toast.error(displayMsg)
        console.error('Failed to create student:', err)
      }
    }
  }

  const handleDeleteStudent = async (student) => {
    if (!student) return
    const id = student.student_id || student._id || student.id || student.user_id
    const studentName = typeof student.name === 'string'
      ? student.name
      : (student.name?.ar || student.name?.en || 'الطالب')

    const isConfirmed = await showDeleteConfirm(isRtl, studentName)
    if (!isConfirmed) return

    try {
      await studentsApi.deleteStudent(id)
      await queryClient.invalidateQueries({ queryKey: ['adminStudents'] })
      if (selectedStudent && (selectedStudent.student_id || selectedStudent._id || selectedStudent.id) === id) {
        setSelectedStudent(null)
        setViewMode('list')
      }
      toast.success(isRtl ? 'تم حذف الطالب بنجاح' : 'Student deleted successfully')
    } catch (err) {
      toast.error(isRtl ? 'حدث خطأ أثناء حذف الطالب' : 'Failed to delete student')
      console.error('Failed to delete student:', err)
    }
  }

  const handleAddSessions = async (studentId, sessionsCount) => {
    if (!studentId || !sessionsCount) return
    setIsAddingSessions(true)
    try {
      await studentsApi.addSessions(studentId, sessionsCount)
      await queryClient.invalidateQueries({ queryKey: ['adminStudents'] })
      toast.success(
        isRtl
          ? `تمت إضافة ${sessionsCount} حصص للطالب بنجاح`
          : `Added ${sessionsCount} sessions successfully`
      )
      setSessionModalStudent(null)
    } catch (err) {
      const msg = err.response?.data?.message || (isRtl ? 'فشل إضافة الحصص' : 'Failed to add sessions')
      toast.error(Array.isArray(msg) ? msg.join(' - ') : msg)
      console.error('Failed to add sessions:', err)
    } finally {
      setIsAddingSessions(false)
    }
  }

  const handleToggleStatus = async (id) => {
    const student = students.find((s) => (s.student_id || s._id || s.id || s.user_id) === id) || selectedStudent
    if (!student) return
    const currentActive = student.active === true || String(student.active) === 'true'
    const nextActive = !currentActive

    try {
      await studentsApi.updateStudent(id, { active: nextActive })
      await queryClient.invalidateQueries({ queryKey: ['adminStudents'] })
      setSelectedStudent((prev) =>
        prev && (prev.student_id || prev._id || prev.id || prev.user_id) === id
          ? { ...prev, active: nextActive }
          : prev
      )
      toast.success(
        nextActive
          ? (isRtl ? 'تم تفعيل حساب الطالب' : 'Student activated')
          : (isRtl ? 'تم إيقاف حساب الطالب' : 'Student suspended')
      )
    } catch (err) {
      console.error('Failed to toggle student status:', err)
      toast.error(isRtl ? 'فشل تغيير حالة الطالب' : 'Failed to change student status')
    }
  }

  const handleChangeGroup = async (studentId, newGroupName) => {
    try {
      await studentsApi.updateStudent(studentId, { groupName: newGroupName })
      await queryClient.invalidateQueries({ queryKey: ['adminStudents'] })
      setSelectedStudent((prev) =>
        prev && (prev.student_id || prev._id || prev.id || prev.user_id) === studentId
          ? { ...prev, groupName: newGroupName }
          : prev
      )
      toast.success(isRtl ? 'تم تغيير المجموعة بنجاح' : 'Group changed successfully')
    } catch (err) {
      console.error('Failed to change student group:', err)
    }
  }

  const handleOpenEditScreen = (student) => {
    setSelectedStudent(student)
    setViewMode('edit-student')
  }

  const handleOpenDetailsScreen = (student) => {
    setSelectedStudent(student)
    setViewMode('view-student')
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
              {t('adminDashboard.students.title', 'إدارة الطلاب')}
            </h1>
            <p className="text-sm text-slate-400 dark:text-slate-500 mt-1">
              {t('adminDashboard.students.subtitle', 'منارة العز أكاديمي · لوحة الإدارة')}
            </p>
          </div>

          <StudentsList
            students={students}
            statistics={statistics}
            activeStatus={statusFilter}
            onStatusChange={handleStatusFilterChange}
            isRtl={isRtl}
            t={t}
            onOpenAddScreen={() => setViewMode('add-student')}
            onOpenEditScreen={handleOpenEditScreen}
            currentPage={currentPage}
            totalPages={totalPages}
            totalCount={totalCount}
            onPageChange={setCurrentPage}
            onOpenSessions={handleOpenDetailsScreen}
            onOpenAddSessions={(s) => setSessionModalStudent(s)}
            onDelete={handleDeleteStudent}
          />
        </>
      )}

      {(viewMode === 'add-student' || viewMode === 'edit-student') && (
        <AddEditStudentScreen
          student={viewMode === 'edit-student' ? selectedStudent : null}
          isRtl={isRtl}
          t={t}
          onSave={handleSaveStudent}
          onCancel={() => {
            setSelectedStudent(null)
            setViewMode('list')
          }}
        />
      )}

      {viewMode === 'view-student' && (
        <StudentDetailsScreen
          student={selectedStudent}
          isRtl={isRtl}
          t={t}
          onCancel={() => {
            setSelectedStudent(null)
            setViewMode('list')
          }}
          onEdit={handleOpenEditScreen}
          onToggleStatus={handleToggleStatus}
          onChangeGroup={handleChangeGroup}
          onAddSessions={handleAddSessions}
        />
      )}

      {/* Global Add Sessions Modal */}
      <AddSessionsModal
        isOpen={Boolean(sessionModalStudent)}
        onClose={() => setSessionModalStudent(null)}
        student={sessionModalStudent}
        isRtl={isRtl}
        onAddSessions={handleAddSessions}
        isLoading={isAddingSessions}
      />
    </div>
  )
}
import { useState } from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import { useTranslation } from 'react-i18next'
import { useQuery, useQueryClient } from '@tanstack/react-query'
import { toast } from 'react-hot-toast'
import { studentsApi } from '@/shared/services/api/studentsApi'
import { showDeleteConfirm } from '@/shared/utils/sweetAlert'
import StudentDetailsScreen from './components/StudentDetailsScreen'
import AddEditStudentScreen from './components/AddEditStudentScreen'
import Spinner from '@/shared/components/Spinner'

export default function AdminStudentDetails() {
  const { id } = useParams()
  const navigate = useNavigate()
  const { t, i18n } = useTranslation()
  const isRtl = i18n.language.startsWith('ar')
  const queryClient = useQueryClient()

  const [isEditing, setIsEditing] = useState(false)
  const [isSavingStudent, setIsSavingStudent] = useState(false)

  const { data: res, isLoading, isError } = useQuery({
    queryKey: ['student-details', id],
    queryFn: () => studentsApi.fetchStudentById(id),
    enabled: Boolean(id),
    staleTime: 60 * 1000
  })

  const student = res?.data || null

  const handleToggleStatus = async (studentObjOrId) => {
    const target = (typeof studentObjOrId === 'object' && studentObjOrId !== null)
      ? studentObjOrId
      : (student || { id, student_id: id })

    if (!target) return
    const currentActive = target.active === true || String(target.active) === 'true'
    const newActive = !currentActive

    try {
      await studentsApi.toggleStudentStatus(target)
      await queryClient.invalidateQueries({ queryKey: ['student-details', id] })
      await queryClient.invalidateQueries({ queryKey: ['adminStudents'] })
      toast.success(
        newActive
          ? (isRtl ? 'تم تفعيل حساب الطالب بنجاح' : 'Student account activated')
          : (isRtl ? 'تم تعليق حساب الطالب' : 'Student account suspended')
      )
    } catch (err) {
      const backendMsg = err.response?.data?.message
      const errorText = Array.isArray(backendMsg)
        ? backendMsg.join(' - ')
        : (backendMsg || (isRtl ? 'حدث خطأ أثناء تحديث حالة الطالب' : 'Failed to update student status'))
      toast.error(errorText)
      console.error('Failed to toggle student status:', err)
    }
  }

  const handleDeleteStudent = async (targetStudent) => {
    const target = targetStudent || student
    if (!target) return
    const targetId = target.student_id || target._id || target.id || id
    const studentName = typeof target.name === 'string'
      ? target.name
      : (target.name?.ar || target.name?.en || 'الطالب')

    const isConfirmed = await showDeleteConfirm(isRtl, studentName)
    if (!isConfirmed) return

    try {
      await studentsApi.deleteStudent(targetId)
      await queryClient.invalidateQueries({ queryKey: ['adminStudents'] })
      toast.success(isRtl ? 'تم حذف الطالب بنجاح' : 'Student deleted successfully')
      navigate('/dashboard/admin/students')
    } catch (err) {
      toast.error(isRtl ? 'حدث خطأ أثناء حذف الطالب' : 'Failed to delete student')
      console.error('Failed to delete student:', err)
    }
  }

  const handleSaveStudent = async (formData) => {
    setIsSavingStudent(true)
    try {
      await studentsApi.updateStudent(id, formData)

      if (formData.password && formData.password.trim().length >= 6) {
        const userId = student?.user_id || student?.userId || id
        try {
          await studentsApi.changeStudentPassword(userId, {
            password: formData.password,
            confirmPassword: formData.confirmPassword || formData.password,
            email: formData.email || student?.email,
            phone: formData.phone || student?.phone,
            country: formData.country || student?.country
          })
        } catch (pwErr) {
          console.warn('Student password update failed during edit:', pwErr)
        }
      }

      await queryClient.invalidateQueries({ queryKey: ['student-details', id] })
      await queryClient.invalidateQueries({ queryKey: ['adminStudents'] })
      toast.success(isRtl ? 'تم تعديل بيانات الطالب بنجاح' : 'Student updated successfully')
      setIsEditing(false)
    } catch (err) {
      const errorMsg = err.response?.data?.message || err.message || (isRtl ? 'حدث خطأ أثناء التعديل' : 'Failed to update student')
      const displayMsg = Array.isArray(errorMsg) ? errorMsg.join(' - ') : errorMsg
      toast.error(displayMsg)
      console.error('Failed to update student details:', err)
    } finally {
      setIsSavingStudent(false)
    }
  }

  const handleAddSessions = async (studentId, sessionsCount) => {
    const targetId = studentId || id
    if (!targetId || !sessionsCount) return
    try {
      await studentsApi.addSessions(targetId, sessionsCount)
      await queryClient.invalidateQueries({ queryKey: ['student-details', id] })
      await queryClient.invalidateQueries({ queryKey: ['adminStudents'] })
      toast.success(
        isRtl
          ? `تمت إضافة ${sessionsCount} حصص للطالب بنجاح`
          : `Added ${sessionsCount} sessions successfully`
      )
    } catch (err) {
      const msg = err.response?.data?.message || (isRtl ? 'فشل إضافة الحصص' : 'Failed to add sessions')
      toast.error(Array.isArray(msg) ? msg.join(' - ') : msg)
      console.error('Failed to add sessions:', err)
    }
  }

  const handleChangeGroup = async (studentId, newGroupName) => {
    const targetId = studentId || id
    try {
      await studentsApi.updateStudent(targetId, { groupName: newGroupName })
      await queryClient.invalidateQueries({ queryKey: ['student-details', id] })
      await queryClient.invalidateQueries({ queryKey: ['adminStudents'] })
      toast.success(isRtl ? 'تم تغيير المجموعة بنجاح' : 'Group changed successfully')
    } catch (err) {
      console.error('Failed to change student group:', err)
    }
  }

  if (isLoading) {
    return (
      <div className="flex h-[60vh] items-center justify-center">
        <Spinner />
      </div>
    )
  }

  if (isError || !student) {
    return (
      <div className="flex flex-col items-center justify-center min-h-[50vh] space-y-4" dir={isRtl ? 'rtl' : 'ltr'}>
        <div className="p-4 bg-rose-50 text-rose-600 rounded-full dark:bg-rose-950/20">
          <span className="text-2xl font-black">!</span>
        </div>
        <p className="text-slate-600 dark:text-slate-300 font-bold">
          {isRtl ? 'تعذر العثور على بيانات الطالب' : 'Could not find student data'}
        </p>
        <button
          type="button"
          onClick={() => navigate('/dashboard/admin/students')}
          className="px-6 py-2.5 bg-[#005953] hover:bg-[#004742] text-white rounded-xl text-sm font-semibold transition-all cursor-pointer"
        >
          {isRtl ? 'العودة لقائمة الطلاب' : 'Back to Students'}
        </button>
      </div>
    )
  }

  if (isEditing) {
    return (
      <div className="p-1 md:p-6" dir={isRtl ? 'rtl' : 'ltr'}>
        <AddEditStudentScreen
          student={student}
          isRtl={isRtl}
          t={t}
          isSaving={isSavingStudent}
          onSave={handleSaveStudent}
          onCancel={() => setIsEditing(false)}
        />
      </div>
    )
  }

  return (
    <div className="p-1 md:p-6" dir={isRtl ? 'rtl' : 'ltr'}>
      <StudentDetailsScreen
        student={student}
        isRtl={isRtl}
        t={t}
        onCancel={() => navigate('/dashboard/admin/students')}
        onEdit={() => setIsEditing(true)}
        onToggleStatus={handleToggleStatus}
        onChangeGroup={handleChangeGroup}
        onAddSessions={handleAddSessions}
        onDelete={handleDeleteStudent}
      />
    </div>
  )
}

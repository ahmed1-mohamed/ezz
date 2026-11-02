import { useState } from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import { useTranslation } from 'react-i18next'
import { useQuery, useQueryClient } from '@tanstack/react-query'
import { toast } from 'react-hot-toast'
import { studentsApi } from '@/shared/services/api/studentsApi'
import { adminGroupsApi } from '@/shared/services/api/adminGroupsApi'
import StudentDetailsScreen from './components/StudentDetailsScreen'
import Spinner from '@/shared/components/Spinner'
import { getApiErrorText } from '@/shared/utils/errorHandler'

export default function AdminStudentDetails() {
  const { id } = useParams()
  const navigate = useNavigate()
  const { t, i18n } = useTranslation()
  const isRtl = i18n.language.startsWith('ar')
  const queryClient = useQueryClient()
  const [isTogglingStatus, setIsTogglingStatus] = useState(false)

  const { data: student, isLoading, isError, refetch } = useQuery({
    queryKey: ['student-details', id, i18n.language],
    queryFn: () => studentsApi.fetchStudentById(id),
    enabled: Boolean(id),
    staleTime: 60 * 1000
  })

  const refreshStudent = async () => {
    await Promise.all([
      queryClient.invalidateQueries({ queryKey: ['student-details', id] }),
      queryClient.invalidateQueries({ queryKey: ['adminStudents'] })
    ])
  }

  const handleToggleStatus = async (target) => {
    const newActive = !(target.active === true || String(target.active) === 'true')
    setIsTogglingStatus(true)
    try {
      await studentsApi.toggleStudentStatus(target)
      await refreshStudent()
      toast.success(
        newActive
          ? (isRtl ? 'تم تفعيل حساب الطالب بنجاح' : 'Student account activated')
          : (isRtl ? 'تم تعليق حساب الطالب' : 'Student account suspended')
      )
    } catch (err) {
      toast.error(getApiErrorText(err, isRtl ? 'حدث خطأ أثناء تحديث حالة الطالب' : 'Failed to update student status'))
      console.error('Failed to toggle student status:', err)
    } finally {
      setIsTogglingStatus(false)
    }
  }

  const handleAddSessions = async (studentId, count, reason) => {
    try {
      await studentsApi.addSessions(studentId || id, count, reason)
      await refreshStudent()
      toast.success(
        isRtl
          ? `تمت إضافة ${count} حصص للطالب بنجاح`
          : `Added ${count} sessions successfully`
      )
    } catch (err) {
      toast.error(getApiErrorText(err, isRtl ? 'فشل إضافة الحصص' : 'Failed to add sessions'))
      console.error('Failed to add sessions:', err)
      throw err
    }
  }

  // Moves the student out of their current group (transfer) or adds them to a group if they have none.
  const handleChangeGroup = async (currentGroupId, targetGroupId) => {
    try {
      if (currentGroupId) {
        await adminGroupsApi.transferStudent(currentGroupId, { student: id, targetGroup: targetGroupId })
      } else {
        await adminGroupsApi.addStudentToGroup(targetGroupId, id)
      }
      await refreshStudent()
      toast.success(isRtl ? 'تم تغيير المجموعة بنجاح' : 'Group changed successfully')
    } catch (err) {
      toast.error(getApiErrorText(err, isRtl ? 'فشل تغيير المجموعة' : 'Failed to change group'))
      console.error('Failed to change student group:', err)
      throw err
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
        <div className="flex gap-3">
          <button
            type="button"
            onClick={() => refetch()}
            className="px-6 py-2.5 bg-slate-100 hover:bg-slate-200 dark:bg-slate-800 text-slate-700 dark:text-slate-200 rounded-xl text-sm font-semibold transition-all cursor-pointer"
          >
            {isRtl ? 'إعادة المحاولة' : 'Retry'}
          </button>
          <button
            type="button"
            onClick={() => navigate('/dashboard/admin/students')}
            className="px-6 py-2.5 bg-[#005953] hover:bg-[#004742] text-white rounded-xl text-sm font-semibold transition-all cursor-pointer"
          >
            {isRtl ? 'العودة لقائمة الطلاب' : 'Back to Students'}
          </button>
        </div>
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
        onEdit={() => navigate(`/dashboard/admin/students/${id}/edit`)}
        onToggleStatus={handleToggleStatus}
        isTogglingStatus={isTogglingStatus}
        onChangeGroup={handleChangeGroup}
        onAddSessions={handleAddSessions}
      />
    </div>
  )
}

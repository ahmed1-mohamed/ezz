import { useState } from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import { useTranslation } from 'react-i18next'
import { useQuery, useQueryClient } from '@tanstack/react-query'
import { toast } from 'react-hot-toast'
import { teachersApi } from '@/shared/services/api/teachersApi'
import { showDeleteConfirm } from '@/shared/utils/sweetAlert'
import TeacherDetailsScreen from './components/TeacherDetailsScreen'
import AddEditTeacherScreen from './components/AddEditTeacherScreen'
import Spinner from '@/shared/components/Spinner'

export default function AdminTeacherDetails() {
  const { id } = useParams()
  const navigate = useNavigate()
  const { t, i18n } = useTranslation()
  const isRtl = i18n.language.startsWith('ar')
  const queryClient = useQueryClient()

  const [isEditing, setIsEditing] = useState(false)

  const { data: res, isLoading, isError, refetch } = useQuery({
    queryKey: ['teacher-details', id],
    queryFn: () => teachersApi.fetchTeacherById(id),
    enabled: Boolean(id),
    staleTime: 60 * 1000,
  })

  const teacher = res?.data || null

  const handleToggleStatus = async (teacherObjOrId) => {
    const target = (typeof teacherObjOrId === 'object' && teacherObjOrId !== null)
      ? teacherObjOrId
      : teacher

    if (!target) return
    const targetId = target.id || target.teacher_id || id
    const newActive = !target.active

    try {
      await teachersApi.toggleTeacherStatus(target)
      await queryClient.invalidateQueries({ queryKey: ['teacher-details', id] })
      await queryClient.invalidateQueries({ queryKey: ['teachers'] })
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

  const handleDeleteTeacher = async (targetTeacher) => {
    const target = targetTeacher || teacher
    if (!target) return
    const targetId = target.teacher_id || target.id || id
    const teacherName = target.name || 'المعلم'

    const isConfirmed = await showDeleteConfirm(isRtl, teacherName)
    if (!isConfirmed) return

    try {
      await teachersApi.deleteTeacher(targetId)
      await queryClient.invalidateQueries({ queryKey: ['teachers'] })
      toast.success(isRtl ? 'تم حذف المعلم بنجاح' : 'Teacher deleted successfully')
      navigate('/dashboard/admin/teachers')
    } catch (err) {
      toast.error(isRtl ? 'حدث خطأ أثناء حذف المعلم' : 'Failed to delete teacher')
      console.error('Failed to delete teacher:', err)
    }
  }

  const handleSaveTeacher = async (formData) => {
    try {
      await teachersApi.updateTeacher(id, formData)

      // If hourlyRate was modified in edit form, call dedicated endpoint
      const newRate = Number(formData.hourlyRate)
      const oldRate = Number(teacher?.hourlyRate)
      if (!isNaN(newRate) && newRate !== oldRate && newRate >= 0) {
        try {
          await teachersApi.updateTeacherHourlyRate(id, newRate)
        } catch (rateErr) {
          console.warn('Hourly rate update failed:', rateErr)
        }
      }

      // If password was provided, call dedicated password endpoint
      if (formData.password && formData.password.trim().length >= 6) {
        const userId = teacher?.user_id || teacher?.userId || id
        try {
          await teachersApi.changeTeacherPassword(userId, {
            password: formData.password,
            confirmPassword: formData.confirmPassword || formData.password,
            phone: formData.phone || teacher?.phone,
            country: formData.country || teacher?.country
          })
        } catch (pwErr) {
          console.warn('Password update failed:', pwErr)
        }
      }

      toast.success(isRtl ? 'تم تحديث بيانات المعلم بنجاح' : 'Teacher updated successfully')
      await queryClient.invalidateQueries({ queryKey: ['teacher-details', id] })
      await queryClient.invalidateQueries({ queryKey: ['teachers'] })
      setIsEditing(false)
    } catch (err) {
      const backendMsg = err.response?.data?.message
      const errorText = Array.isArray(backendMsg)
        ? backendMsg.join(' - ')
        : (backendMsg || (isRtl ? 'حدث خطأ أثناء حفظ بيانات المعلم' : 'Failed to save teacher'))
      toast.error(errorText)
      console.error('Failed to save teacher:', err)
    }
  }

  const handleBack = () => {
    navigate('/dashboard/admin/teachers')
  }

  if (isLoading) {
    return (
      <div className="flex flex-col items-center justify-center min-h-[50vh] p-8 space-y-4" dir={isRtl ? 'rtl' : 'ltr'}>
        <Spinner />
        <p className="text-sm font-semibold text-slate-500">
          {isRtl ? 'جاري تحميل بيانات المعلم...' : 'Loading teacher details...'}
        </p>
      </div>
    )
  }

  if (isError || (!isLoading && !teacher)) {
    return (
      <div className="p-8 max-w-xl mx-auto my-12 bg-white dark:bg-slate-900 rounded-3xl border border-slate-100 dark:border-slate-800 text-center space-y-4 shadow-soft" dir={isRtl ? 'rtl' : 'ltr'}>
        <h2 className="text-lg font-bold text-slate-800 dark:text-white">
          {isRtl ? 'لم يتم العثور على المعلم' : 'Teacher Not Found'}
        </h2>
        <p className="text-xs text-slate-500 dark:text-slate-400">
          {isRtl ? 'قد يكون تم حذف الحساب أو المعرف غير صحيح.' : 'This teacher may have been deleted or the ID is invalid.'}
        </p>
        <div className="flex items-center justify-center gap-3 pt-2">
          <button
            type="button"
            onClick={() => refetch()}
            className="px-5 py-2.5 bg-slate-100 hover:bg-slate-200 dark:bg-slate-800 dark:hover:bg-slate-700 text-slate-700 dark:text-slate-200 rounded-2xl text-xs font-bold transition-all cursor-pointer"
          >
            {isRtl ? 'إعادة المحاولة' : 'Retry'}
          </button>
          <button
            type="button"
            onClick={handleBack}
            className="px-5 py-2.5 bg-[#005953] hover:bg-[#004742] text-white rounded-2xl text-xs font-bold transition-all cursor-pointer"
          >
            {isRtl ? 'العودة لقائمة المعلمين' : 'Back to Teachers'}
          </button>
        </div>
      </div>
    )
  }

  if (isEditing) {
    return (
      <div className="p-1 md:p-6" dir={isRtl ? 'rtl' : 'ltr'}>
        <AddEditTeacherScreen
          teacher={teacher}
          isRtl={isRtl}
          t={t}
          onSave={handleSaveTeacher}
          onCancel={() => setIsEditing(false)}
        />
      </div>
    )
  }

  return (
    <div className="p-1 md:p-6" dir={isRtl ? 'rtl' : 'ltr'}>
      <TeacherDetailsScreen
        teacher={teacher}
        isRtl={isRtl}
        t={t}
        onCancel={handleBack}
        onToggleStatus={handleToggleStatus}
        onDelete={handleDeleteTeacher}
        onEdit={() => setIsEditing(true)}
      />
    </div>
  )
}

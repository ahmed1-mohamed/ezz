import { useState } from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import { useTranslation } from 'react-i18next'
import { useQuery, useQueryClient } from '@tanstack/react-query'
import { toast } from 'react-hot-toast'
import { studentsApi } from '@/shared/services/api/studentsApi'
import AddEditStudentScreen from './components/AddEditStudentScreen'
import Spinner from '@/shared/components/Spinner'
import { getApiErrorText } from '@/shared/utils/errorHandler'

export default function AdminEditStudent() {
  const { id } = useParams()
  const navigate = useNavigate()
  const { t, i18n } = useTranslation()
  const isRtl = i18n.language.startsWith('ar')
  const queryClient = useQueryClient()
  const [isSaving, setIsSaving] = useState(false)
  const { data: student, isLoading, isError, refetch } = useQuery({
    queryKey: ['student-edit', id],
    queryFn: () => studentsApi.fetchStudentForEdit(id),
    enabled: Boolean(id),
    staleTime: 30 * 1000,
  })
  const backToDetails = () => navigate(`/dashboard/admin/students/${id}`)
  const handleSave = async (formData) => {
    setIsSaving(true)
    try {
      await studentsApi.updateStudent(id, formData)
      await Promise.all([
        queryClient.invalidateQueries({ queryKey: ['student-details', id] }),
        queryClient.invalidateQueries({ queryKey: ['student-edit', id] }),
        queryClient.invalidateQueries({ queryKey: ['adminStudents'] }),
      ])
      toast.success(isRtl ? 'تم تعديل بيانات الطالب بنجاح' : 'Student updated successfully')
      backToDetails()
    } catch (err) {
      console.error('Failed to update student:', err)
      toast.error(getApiErrorText(err, isRtl ? 'حدث خطأ أثناء التعديل' : 'Failed to update student'))
    } finally {
      setIsSaving(false)
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
        <p className="text-slate-600 dark:text-slate-300 font-bold">
          {isRtl ? 'تعذر تحميل بيانات الطالب' : 'Could not load student data'}
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
      <AddEditStudentScreen
        key={id}
        student={student}
        isRtl={isRtl}
        t={t}
        isSaving={isSaving}
        onSave={handleSave}
        onCancel={backToDetails}
      />
    </div>
  )
}

import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { useTranslation } from 'react-i18next'
import { useQueryClient } from '@tanstack/react-query'
import { toast } from 'react-hot-toast'
import { studentsApi } from '@/shared/services/api/studentsApi'
import AddEditStudentScreen from './components/AddEditStudentScreen'
import { getApiErrorText } from '@/shared/utils/errorHandler'

export default function AdminAddStudent() {
  const navigate = useNavigate()
  const { t, i18n } = useTranslation()
  const isRtl = i18n.language.startsWith('ar')
  const queryClient = useQueryClient()
  const [isSaving, setIsSaving] = useState(false)
  const handleSave = async (formData) => {
    setIsSaving(true)
    try {
      const res = await studentsApi.createStudent(formData)
      await queryClient.invalidateQueries({ queryKey: ['adminStudents'] })
      toast.success(isRtl ? 'تم إنشاء حساب الطالب بنجاح' : 'Student created successfully')
      const newId = res?.data?.student_id || res?.data?.id || res?.data?._id
      navigate(newId ? `/dashboard/admin/students/${newId}` : '/dashboard/admin/students')
    } catch (err) {
      console.error('Failed to create student:', err)
      toast.error(getApiErrorText(err, isRtl ? 'فشل إنشاء الطالب' : 'Failed to create student'))
    } finally {
      setIsSaving(false)
    }
  }
  return (
    <div className="p-1 md:p-6" dir={isRtl ? 'rtl' : 'ltr'}>
      <AddEditStudentScreen
        isRtl={isRtl}
        t={t}
        isSaving={isSaving}
        onSave={handleSave}
        onCancel={() => navigate('/dashboard/admin/students')}
      />
    </div>
  )
}

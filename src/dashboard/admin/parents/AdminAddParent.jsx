import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { useTranslation } from 'react-i18next'
import toast from 'react-hot-toast'
import { adminParentsApi } from '@/shared/services/api/adminParentsApi'
import { studentsApi } from '@/shared/services/api/studentsApi'
import AddEditParentScreen from './components/AddEditParentScreen'
import { getParentId } from './utils/parentUtils'

const showApiErrors = (err, fallback) => {
  const msgs = err?.response?.data?.message
  if (Array.isArray(msgs)) {
    msgs.forEach((m) => toast.error(m))
  } else if (typeof msgs === 'string') {
    toast.error(msgs)
  } else {
    toast.error(fallback)
  }
}

export default function AdminAddParent() {
  const navigate = useNavigate()
  const { i18n } = useTranslation()
  const isRtl = i18n.language.startsWith('ar')
  const [isSaving, setIsSaving] = useState(false)
  const handleSave = async (formData) => {
    setIsSaving(true)
    try {
      const res = await adminParentsApi.createParent(formData)
      const newId = getParentId(res?.data)
      toast.success(isRtl ? 'تم إضافة ولي الأمر بنجاح' : 'Parent created successfully')
      if (newId && formData.childrenIds?.length) {
        const results = await Promise.allSettled(
          formData.childrenIds.map((studentId) => studentsApi.updateStudent(studentId, { parent: newId }))
        )
        const failed = results.filter((r) => r.status === 'rejected').length
        if (failed > 0) {
          toast.error(isRtl ? `تعذر ربط ${failed} من الأبناء` : `Failed to link ${failed} child(ren)`)
        }
      }
      navigate(newId ? `/dashboard/admin/parents/${newId}` : '/dashboard/admin/parents')
    } catch (err) {
      console.error('Failed to create parent:', err)
      showApiErrors(err, isRtl ? 'حدث خطأ أثناء الإضافة' : 'Failed to create parent')
    } finally {
      setIsSaving(false)
    }
  }
  return (
    <div className="p-1 md:p-6" dir={isRtl ? 'rtl' : 'ltr'}>
      <AddEditParentScreen
        isRtl={isRtl}
        isSaving={isSaving}
        onSave={handleSave}
        onCancel={() => navigate('/dashboard/admin/parents')}
      />
    </div>
  )
}

import { useState } from 'react'
import { useNavigate, useLocation } from 'react-router-dom'
import { useTranslation } from 'react-i18next'
import { adminGroupsApi } from '@/shared/services/api/adminGroupsApi'
import AddEditGroupScreen from './components/AddEditGroupScreen'
import { showSuccessToast, showErrorToast } from '@/shared/utils/sweetAlert'

export default function AdminAddGroup() {
  const navigate = useNavigate()
  const location = useLocation()
  const { t, i18n } = useTranslation()
  const isRtl = i18n.language.startsWith('ar')
  const [isSaving, setIsSaving] = useState(false)

  const isPrivateGroup = location.pathname.includes('private-groups')
  const backPath = isPrivateGroup ? '/dashboard/admin/private-groups' : '/dashboard/admin/groups'
  const initialGroup = isPrivateGroup ? { type: 'private' } : null

  const handleSave = async (formData) => {
    setIsSaving(true)
    try {
      const payload = isPrivateGroup && !formData.type ? { ...formData, type: 'private' } : formData
      const res = await adminGroupsApi.createGroup(payload)
      showSuccessToast(res?.message || t('adminDashboard.groups.createSuccess', 'تم إنشاء المجموعة بنجاح'), isRtl)
      navigate(backPath)
    } catch (error) {
      console.error('Error creating group:', error)
      showErrorToast(error?.response?.data?.message || t('common.errorOccurred', 'حدث خطأ، يرجى المحاولة مرة أخرى'), isRtl)
    } finally {
      setIsSaving(false)
    }
  }

  return (
    <div className="p-1 md:p-6" dir={isRtl ? 'rtl' : 'ltr'}>
      <AddEditGroupScreen
        group={initialGroup}
        isRtl={isRtl}
        t={t}
        isSaving={isSaving}
        onSave={handleSave}
        onCancel={() => navigate(backPath)}
      />
    </div>
  )
}


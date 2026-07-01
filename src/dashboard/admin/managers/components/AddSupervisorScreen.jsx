import { useState } from 'react'
import { ArrowRight, ArrowLeft } from 'lucide-react'
import { showErrorToast } from '@/shared/utils/sweetAlert'
import IdentityInfoCard from './IdentityInfoCard'
import SecurityPasswordCard from './SecurityPasswordCard'
import PermissionsCard from './PermissionsCard'
import PermissionsPreviewCard from './PermissionsPreviewCard'

export default function AddSupervisorScreen({
  roles,
  rolesPermissions,
  isRtl,
  t,
  onSave,
  onCancel,
  initialData = null,
  countries = []
}) {
  const BackArrow = isRtl ? ArrowRight : ArrowLeft

  const [formData, setFormData] = useState({
    name: initialData?.name || '',
    nameEn: initialData?.nameEn || '',
    email: initialData?.email || '',
    phone: initialData?.phone || '',
    phonePrefix: initialData?.phonePrefix || '+20',
    password: '',
    confirmPassword: '',
    permissionId: initialData?.permissionId || null,
    status: initialData?.status || 'Active',
    photoUrl: initialData?.photoUrl || null
  })

  const [photoFile, setPhotoFile] = useState(null)

  const handleFieldChange = (key, value) => {
    setFormData((prev) => ({ ...prev, [key]: value }))
  }

  const handlePhotoChange = (file, previewUrl) => {
    setPhotoFile(file)
    handleFieldChange('photoUrl', previewUrl)
  }

  const handleSkipPermissions = () => {
    handleFieldChange('permissionId', null)
  }

  const handleSubmit = (e) => {
    e.preventDefault()

    if (!initialData || formData.password) {
      if (formData.password !== formData.confirmPassword) {
        showErrorToast(isRtl ? 'كلمات المرور غير متطابقة!' : 'Passwords do not match!', isRtl)
        return
      }
      if (formData.password.length < 6) {
        showErrorToast(isRtl ? 'يجب أن تكون كلمة المرور 6 أحرف على الأقل!' : 'Password must be at least 6 characters!', isRtl)
        return
      }
    }

    const selectedCountry = countries.find(c => c.phoneCode === formData.phonePrefix) || countries[0];
    const countryId = selectedCountry ? selectedCountry.id : null;

    onSave({
      adminData: {
        'name[ar]': formData.name,
        'name[en]': formData.nameEn,
        email: formData.email,
        phone: formData.phone,
        country: countryId,
        password: formData.password,
        confirmPassword: formData.confirmPassword,
        image: photoFile
      },
      permissionId: formData.permissionId
    })
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-8 pb-10" dir={isRtl ? 'rtl' : 'ltr'}>

      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
        <div className="flex items-center gap-3">
          <button
            type="button"
            onClick={onCancel}
            className="p-2.5 bg-white hover:bg-slate-50 dark:bg-slate-900 dark:hover:bg-slate-800 text-slate-600 dark:text-slate-300 rounded-full border border-slate-100 dark:border-slate-800 transition-all cursor-pointer hover:scale-105"
            title={t('adminDashboard.managers.permissionsScreen.backToList', 'العودة لقائمة المشرفين')}
          >
            <BackArrow size={20} />
          </button>
          <div>
            <h1 className="text-2xl font-bold text-slate-800 dark:text-white">
              {initialData
                ? (isRtl ? 'تعديل بيانات المشرف' : 'Edit Supervisor')
                : t('adminDashboard.managers.addSupervisorScreen.title', 'إضافة مشرف جديد')}
            </h1>
            <p className="text-sm text-slate-400 dark:text-slate-500 mt-1">
              {t('adminDashboard.managers.addSupervisorScreen.subtitle', 'حدد الهوية، وخصص الأدوار العالمية والأذونات الخاصة بالوحدات.')}
            </p>
          </div>
        </div>

        <button
          type="button"
          onClick={onCancel}
          className="px-5 py-2.5 bg-white hover:bg-slate-50 text-slate-700 border border-slate-200 rounded-2xl text-sm font-semibold transition-all dark:bg-slate-900 dark:text-slate-300 dark:border-slate-800 cursor-pointer"
        >
          {t('adminDashboard.managers.permissionsScreen.backToList', 'العودة لقائمة المشرفين')}
        </button>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">

        <div className="space-y-8 w-full">
          <IdentityInfoCard
            formData={formData}
            onChange={handleFieldChange}
            onPhotoChange={handlePhotoChange}
            isRtl={isRtl}
            t={t}
            countries={countries}
          />

          <SecurityPasswordCard
            formData={formData}
            onChange={handleFieldChange}
            isRtl={isRtl}
            t={t}
          />
        </div>

        <div className="space-y-8 w-full">
          <PermissionsCard
            permissionsList={roles} 
            selectedPermissionId={formData.permissionId}
            onSelectPermission={(id) => handleFieldChange('permissionId', id)}
            onSkipPermissions={handleSkipPermissions}
            isRtl={isRtl}
            t={t}
          />

          <PermissionsPreviewCard
            selectedPermissionId={formData.permissionId}
            permissionsList={roles}
            isRtl={isRtl}
          />
        </div>

      </div>

      <div className="flex flex-col sm:flex-row gap-4 pt-4 border-t border-slate-100 dark:border-slate-800">
        <button
          type="submit"
          className="flex-1 py-4 bg-brand-500 hover:bg-brand-650 text-white font-bold rounded-2xl transition-all shadow-md shadow-brand-500/10 active:scale-[0.98] cursor-pointer"
        >
          {t('adminDashboard.managers.addSupervisorScreen.saveChanges', 'حفظ التغييرات')}
        </button>
        <button
          type="button"
          onClick={onCancel}
          className="flex-1 py-4 bg-white hover:bg-slate-50 text-slate-700 font-bold rounded-2xl border border-slate-200 transition-all dark:bg-slate-900 dark:text-slate-350 dark:border-slate-800 active:scale-[0.98] cursor-pointer"
        >
          {t('adminDashboard.managers.addSupervisorScreen.cancel', 'إلغاء')}
        </button>
      </div>

    </form>
  )
}
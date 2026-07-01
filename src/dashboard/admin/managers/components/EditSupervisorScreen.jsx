import { useState, useMemo } from 'react'
import {
  ArrowRight,
  ArrowLeft,
  Pencil,
  Ban,
  CheckCircle2,
  Activity
} from 'lucide-react'
import { showSuccessToast } from '@/shared/utils/sweetAlert'
import EditProfileCard from './EditProfileCard'
import EditSecurityPasswordCard from './EditSecurityPasswordCard'
import EditGrantedPermissionsCard from './EditGrantedPermissionsCard'
import EditGoogleLinkCard from './EditGoogleLinkCard'

export default function EditSupervisorScreen({
  roles,
  rolesPermissions,
  supervisor,
  countries = [],
  isRtl,
  t,
  onSave,
  onToggleStatus,
  onCancel
}) {
  const BackArrow = isRtl ? ArrowRight : ArrowLeft

  const initialPrefix = useMemo(() => {
    if (supervisor.phone) {
      const parts = supervisor.phone.split(' ')
      if (parts.length > 1 && parts[0].startsWith('+')) {
        return parts[0]
      }
    }
    return '+20'
  }, [supervisor])

  const initialPhone = useMemo(() => {
    if (supervisor.phone) {
      const parts = supervisor.phone.split(' ')
      if (parts.length > 1) {
        return parts.slice(1).join(' ')
      }
      return supervisor.phone
    }
    return ''
  }, [supervisor])

  const [formData, setFormData] = useState({
    name: supervisor.name || '',
    nameEn: supervisor.nameEn || '',
    email: supervisor.email || '',
    phone: initialPhone,
    phonePrefix: initialPrefix,
    permissionId: supervisor.permissionId || null,
    status: supervisor.status || 'Active',
    photoUrl: supervisor.photoUrl || null
  })

  const [isDropdownOpen, setIsDropdownOpen] = useState(false)
  const [selectedCountry, setSelectedCountry] = useState(
    countries.find((c) => c.code === formData.phonePrefix) || countries[0]
  )

  const handleFieldChange = (key, value) => {
    setFormData((prev) => ({ ...prev, [key]: value }))
  }

  const selectCountryCode = (country) => {
    setSelectedCountry(country)
    setIsDropdownOpen(false)
    handleFieldChange('phonePrefix', country.code)
  }

  const handleUpdatePassword = () => {
    showSuccessToast(isRtl ? 'تم تحديث كلمة المرور بنجاح!' : 'Password updated successfully!', isRtl)
  }

  const handleLinkGoogle = () => {
    showSuccessToast(isRtl ? 'جاري توجيهك لربط حساب جوجل...' : 'Redirecting to link Google account...', isRtl)
  }

  const handleSubmit = (e) => {
    e.preventDefault()

    const selectedCountry = countries.find(c => c.phoneCode === formData.phonePrefix) || countries[0];
    const countryId = selectedCountry ? selectedCountry.id : null;

    onSave({
      adminData: {
        'name[ar]': formData.name,
        'name[en]': formData.nameEn,
        email: formData.email,
        phone: formData.phone,
        country: countryId
      },
      permissionId: formData.permissionId
    })
  }

  const mockJoinDate = supervisor.joinDate || '20/10/2025'
  const mockLastLogin = supervisor.lastLogin || (isRtl ? 'اليوم - 10:30 ص' : 'Today - 10:30 AM')
  const mockTotalActions = supervisor.totalActions || '1,234'
  const mockActiveSessions = supervisor.activeSessions || '3'
  const mockActivityRate = supervisor.activityRate || '98%'

  const isSuspended = formData.status !== 'Active'

  return (
    <div className="space-y-8 pb-10" dir={isRtl ? 'rtl' : 'ltr'}>

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
            <h1 className="text-2xl font-bold text-slate-800 dark:text-white flex items-center gap-2">
              <span>{isRtl ? 'قائمة المشرفين' : 'Supervisors List'}</span>
              <span className="text-slate-350 dark:text-slate-655 text-lg">/</span>
              <span className="text-slate-500 dark:text-slate-400 font-semibold text-lg">
                {isRtl ? 'تفاصيل المشرفين' : 'Supervisor Details'}
              </span>
            </h1>
          </div>
        </div>

        <div className="flex items-center gap-3">

          <button
            type="button"
            onClick={() => onToggleStatus(supervisor.id)}
            className={`px-5 py-2.5 rounded-2xl text-sm font-bold transition-all flex items-center gap-2 cursor-pointer active:scale-95 ${isSuspended
              ? 'bg-emerald-50 text-emerald-700 hover:bg-emerald-100 dark:bg-emerald-950/20 dark:text-emerald-400 border border-transparent'
              : 'bg-rose-50 text-rose-700 hover:bg-rose-100 dark:bg-rose-950/20 dark:text-rose-400 border border-transparent'
              }`}
          >
            {isSuspended ? (
              <>
                <CheckCircle2 size={16} />
                <span>{isRtl ? 'تفعيل الحساب' : 'Activate Account'}</span>
              </>
            ) : (
              <>
                <Ban size={16} />
                <span>{isRtl ? 'تعليق الحساب' : 'تعليق الحساب'}</span>
              </>
            )}
          </button>

          <div className="px-5 py-2.5 bg-brand-500 text-white rounded-2xl text-sm font-bold flex items-center gap-2 shadow-md shadow-brand-500/10 select-none">
            <Pencil size={16} />
            <span>{isRtl ? 'تعديل البيانات' : 'Edit Data'}</span>
          </div>

        </div>

      </div>

      <EditProfileCard
        formData={formData}
        mockJoinDate={mockJoinDate}
        isRtl={isRtl}
        t={t}
      />

      <div className="bg-white dark:bg-slate-900 rounded-3xl border border-slate-100 dark:border-slate-800/80 p-6 shadow-soft space-y-5">

        <h3 className="text-base font-bold text-slate-800 dark:text-white flex items-center gap-2 border-b border-slate-100 dark:border-slate-800/60 pb-3">
          <Activity size={18} className="text-brand-500" />
          <span>{isRtl ? 'إحصائيات النشاط' : 'Activity Statistics'}</span>
        </h3>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-5">

          <div className="text-center p-4 bg-slate-50/30 dark:bg-slate-950/20 rounded-2xl border border-slate-100/50 dark:border-slate-850/60">
            <p className="text-xs text-slate-400 dark:text-slate-500 font-bold mb-1.5">
              {isRtl ? 'آخر تسجيل دخول' : 'Last Login'}
            </p>
            <p className="text-base font-extrabold text-[#0d7367] dark:text-[#14b8a6]">
              {mockLastLogin}
            </p>
          </div>

          <div className="text-center p-4 bg-slate-50/30 dark:bg-slate-950/20 rounded-2xl border border-slate-100/50 dark:border-slate-850/60">
            <p className="text-xs text-slate-400 dark:text-slate-500 font-bold mb-1.5">
              {isRtl ? 'إجمالي الإجراءات' : 'Total Actions'}
            </p>
            <p className="text-base font-extrabold text-[#0d7367] dark:text-[#14b8a6]">
              {mockTotalActions}
            </p>
          </div>

          <div className="text-center p-4 bg-slate-50/30 dark:bg-slate-950/20 rounded-2xl border border-slate-100/50 dark:border-slate-850/60">
            <p className="text-xs text-slate-400 dark:text-slate-500 font-bold mb-1.5">
              {isRtl ? 'الجلسات النشطة' : 'Active Sessions'}
            </p>
            <p className="text-base font-extrabold text-[#0d7367] dark:text-[#14b8a6]">
              {mockActiveSessions}
            </p>
          </div>

          <div className="text-center p-4 bg-slate-50/30 dark:bg-slate-950/20 rounded-2xl border border-slate-100/50 dark:border-slate-850/60">
            <p className="text-xs text-slate-400 dark:text-slate-500 font-bold mb-1.5">
              {isRtl ? 'معدل النشاط' : 'Activity Rate'}
            </p>
            <p className="text-base font-extrabold text-[#0d7367] dark:text-[#14b8a6]">
              {mockActivityRate}
            </p>
          </div>

        </div>

      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">

        <div className="space-y-8 w-full">

          <div className="bg-white dark:bg-slate-900 rounded-3xl border border-slate-100 dark:border-slate-800/80 p-6 shadow-soft space-y-6">
            <h3 className="text-base font-bold text-slate-800 dark:text-white border-b border-slate-100 dark:border-slate-800/60 pb-3">
              {isRtl ? 'تعديل البيانات الأساسية' : 'Edit Basic Details'}
            </h3>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">

              <div>
                <label className="block text-xs font-bold text-slate-500 dark:text-slate-400 mb-1.5">
                  {t('adminDashboard.managers.addSupervisorScreen.fullNameEn', 'Full Name')}
                </label>
                <input
                  type="text"
                  required
                  value={formData.nameEn}
                  onChange={(e) => handleFieldChange('nameEn', e.target.value)}
                  className="w-full bg-[#f3f7f6] dark:bg-slate-950 border border-transparent focus:border-brand-500 focus:bg-white text-slate-850 dark:text-slate-105 rounded-2xl py-3 px-4 outline-none transition-all text-sm"
                  placeholder="Nora ahmed"
                  dir="ltr"
                />
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-500 dark:text-slate-400 mb-1.5">
                  {isRtl ? 'الإسم بالعربية' : 'Name in Arabic'}
                </label>
                <input
                  type="text"
                  required
                  value={formData.name}
                  onChange={(e) => handleFieldChange('name', e.target.value)}
                  className="w-full bg-[#f3f7f6] dark:bg-slate-950 border border-transparent focus:border-brand-500 focus:bg-white text-slate-850 dark:text-slate-105 rounded-2xl py-3 px-4 outline-none transition-all text-sm"
                  placeholder="نورة أحمد"
                />
              </div>

            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">

              <div>
                <label className="block text-xs font-bold text-slate-500 dark:text-slate-400 mb-1.5">
                  {t('adminDashboard.managers.addSupervisorScreen.phone', 'رقم الهاتف')}
                </label>
                <div className="flex gap-3" dir="ltr">

                  <div className="relative shrink-0">
                    <button
                      type="button"
                      onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                      className="h-12 flex items-center justify-center gap-2 px-3 bg-[#f3f7f6] dark:bg-slate-950 hover:bg-slate-100 dark:hover:bg-slate-900 border border-transparent rounded-2xl transition-all text-sm font-semibold text-slate-800 dark:text-slate-205 cursor-pointer"
                    >
                      <span>{selectedCountry.flag}</span>
                      <span>({selectedCountry.code})</span>
                    </button>

                    {isDropdownOpen && (
                      <div className="absolute left-0 mt-2 z-10 w-44 bg-white dark:bg-slate-950 rounded-2xl shadow-xl border border-slate-100 dark:border-slate-850 py-2 overflow-hidden animate-fadeIn">
                        {countries.map((country) => (
                          <button
                            key={country.code}
                            type="button"
                            onClick={() => selectCountryCode(country)}
                            className="w-full px-4 py-2.5 flex items-center gap-3 hover:bg-slate-50 dark:hover:bg-slate-900 text-slate-700 dark:text-slate-300 text-sm transition-colors text-left"
                          >
                            <span>{country.flag}</span>
                            <span className="font-semibold">{country.code}</span>
                            <span className="text-xs text-slate-400">{country.name}</span>
                          </button>
                        ))}
                      </div>
                    )}
                  </div>

                  <input
                    type="tel"
                    required
                    value={formData.phone}
                    onChange={(e) => handleFieldChange('phone', e.target.value)}
                    className="flex-1 bg-[#f3f7f6] dark:bg-slate-950 border border-transparent focus:border-brand-500 focus:bg-white text-slate-850 dark:text-slate-105 rounded-2xl py-3 px-4 outline-none transition-all text-sm"
                    placeholder="01012345678"
                  />

                </div>
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-500 dark:text-slate-400 mb-1.5">
                  {isRtl ? 'البريد الإلكتروني' : 'Email Address'}
                </label>
                <input
                  type="email"
                  required
                  value={formData.email}
                  onChange={(e) => handleFieldChange('email', e.target.value)}
                  className="w-full bg-[#f3f7f6] dark:bg-slate-950 border border-transparent focus:border-brand-500 focus:bg-white text-slate-850 dark:text-slate-105 rounded-2xl py-3 px-4 outline-none transition-all text-sm"
                  placeholder="Nora_ahmed@yahoo.com"
                  dir="ltr"
                />
              </div>

            </div>

            <div>
              <label className="block text-xs font-bold text-slate-500 dark:text-slate-400 mb-1.5">
                {isRtl ? 'الدور الوظيفي' : 'Job Role'}
              </label>
              <select
                value={formData.permissionId || ''}
                onChange={(e) => handleFieldChange('permissionId', e.target.value)}
                className="w-full bg-[#f3f7f6] dark:bg-slate-950 border border-transparent focus:border-brand-500 focus:bg-white text-slate-855 dark:text-slate-105 rounded-2xl py-3 px-4 outline-none transition-all text-sm cursor-pointer"
              >
                <option value="" disabled>{isRtl ? 'اختر الدور' : 'Select Role'}</option>
                {roles?.map((role) => (
                  <option key={role.id} value={role.id}>
                    {role.name}
                  </option>
                ))}
              </select>
            </div>

          </div>

          <EditGoogleLinkCard
            isRtl={isRtl}
            t={t}
            onLinkGoogle={handleLinkGoogle}
          />

        </div>

        <div className="space-y-8 w-full">

          <EditSecurityPasswordCard
            isRtl={isRtl}
            t={t}
            onUpdatePassword={handleUpdatePassword}
          />

          <EditGrantedPermissionsCard
            selectedPermissionId={formData.permissionId}
            permissionsList={roles}
            isRtl={isRtl}
            t={t}
          />

        </div>

      </div>

      <div className="flex flex-col sm:flex-row gap-4 pt-4 border-t border-slate-100 dark:border-slate-800">
        <button
          type="button"
          onClick={handleSubmit}
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

    </div>
  )
}
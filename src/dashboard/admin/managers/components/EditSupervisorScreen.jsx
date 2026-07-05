import { useState, useMemo } from 'react'
import {
  ArrowRight,
  ArrowLeft,
  Pencil,
  Ban,
  CheckCircle2
} from 'lucide-react'
import EditProfileCard from './EditProfileCard'
import EditSecurityPasswordCard from './EditSecurityPasswordCard'
import EditGrantedPermissionsCard from './EditGrantedPermissionsCard'

export default function EditSupervisorScreen({
  roles,
  supervisor,
  countries = [],
  isRtl,
  t,
  onSave,
  onToggleStatus,
  onUpdatePassword,
  onCancel
}) {
  const BackArrow = isRtl ? ArrowRight : ArrowLeft

  const [isEditing, setIsEditing] = useState(false)

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
    countryId: supervisor.country?._id || supervisor.country?.id || supervisor.country || '',
    status: supervisor.status || 'Active',
    photoUrl: supervisor.photoUrl || null
  })

  const sortedCountries = useMemo(() => {
    return [...countries].sort((a, b) => (a.name || '').localeCompare(b.name || ''))
  }, [countries])

  const [isDropdownOpen, setIsDropdownOpen] = useState(false)

  const normalizePhoneCode = (code) => {
    if (!code) return ''
    return String(code).replace(/\+/g, '').trim()
  }

  const matchedCountry = useMemo(() => {
    const prefixNorm = normalizePhoneCode(formData.phonePrefix)
    return sortedCountries.find(c => normalizePhoneCode(c.phoneCode) === prefixNorm || normalizePhoneCode(c.code) === prefixNorm) || sortedCountries[0] || {}
  }, [sortedCountries, formData.phonePrefix])

  const handleFieldChange = (key, value) => {
    setFormData((prev) => ({ ...prev, [key]: value }))
  }

  const selectCountryCode = (country) => {
    setIsDropdownOpen(false)
    handleFieldChange('phonePrefix', country.phoneCode || country.code)
  }

  const handleUpdatePassword = (newPassword) => {
    if (onUpdatePassword) onUpdatePassword(newPassword);
  }

  const handleSubmit = (e) => {
    e.preventDefault()

    const foundCountry = countries.find(c => c.phoneCode === formData.phonePrefix) || countries[0];
    const countryId = formData.countryId || foundCountry?.id || foundCountry?._id || null;

    onSave({
      adminData: {
        'name[ar]': formData.name,
        'name[en]': formData.nameEn,
        email: formData.email,
        phone: formData.phonePrefix + ' ' + formData.phone,
        country: countryId
      },
      permissionId: formData.permissionId
    })
  }

  const mockJoinDate = supervisor.joinDate || '20/10/2025'
  const isSuspended = supervisor.user?.active !== undefined ? !supervisor.user.active : (supervisor.active !== undefined ? !supervisor.active : formData.status !== 'Active')

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
            onClick={() => onToggleStatus(supervisor)}
            className={`px-5 py-2.5 rounded-2xl text-sm font-bold transition-all flex items-center gap-2 cursor-pointer active:scale-95 border ${isSuspended
              ? 'bg-emerald-50 border-emerald-200 text-emerald-700 hover:bg-emerald-100 dark:bg-emerald-950/20 dark:border-emerald-900/30 dark:text-emerald-400'
              : 'bg-rose-50 border-rose-200 text-rose-700 hover:bg-rose-100 dark:bg-rose-950/20 dark:border-rose-900/30 dark:text-rose-400'
              }`}
          >
            {isSuspended ? (
              <>
                <CheckCircle2 size={16} />
                <span>{isRtl ? 'إلغاء تعليق الحساب' : 'Cancel Suspension'}</span>
              </>
            ) : (
              <>
                <Ban size={16} />
                <span>{isRtl ? 'تعليق الحساب' : 'Suspend Account'}</span>
              </>
            )}
          </button>

          <button
            type="button"
            onClick={() => setIsEditing(!isEditing)}
            className={`px-5 py-2.5 rounded-2xl text-sm font-bold transition-all flex items-center gap-2 cursor-pointer active:scale-95 border ${isEditing
              ? 'bg-brand-50 border-brand-500 text-brand-700 dark:bg-brand-950/20 dark:border-brand-900/30 dark:text-brand-300'
              : 'bg-brand-500 border-transparent text-white hover:bg-brand-600 shadow-md shadow-brand-500/10'
              }`}
          >
            <Pencil size={16} />
            <span>{isRtl ? 'تعديل البيانات' : 'Edit Data'}</span>
          </button>

        </div>

      </div>

      <div className="space-y-8 max-w-8xl mx-auto">

        <EditProfileCard
          formData={formData}
          mockJoinDate={mockJoinDate}
          isRtl={isRtl}
          t={t}
          countryFlag={matchedCountry?.flag}
          roleName={roles?.find(r => r.id === formData.permissionId)?.name}
        />

        {isEditing && (
          <>
            <div className="bg-white dark:bg-slate-900 rounded-3xl border border-slate-100 dark:border-slate-800/80 p-6 shadow-soft space-y-6">
              <h3 className="text-base font-bold text-slate-800 dark:text-white border-b border-slate-100 dark:border-slate-800/60 pb-3">
                {isRtl ? 'تعديل البيانات الأساسية' : 'Edit Basic Details'}
              </h3>

              <div className="flex flex-col gap-5">

                <div>
                  <label className="block text-xs font-bold text-slate-500 dark:text-slate-400 mb-1.5">
                    {isRtl ? 'الاسم باللغة الإنجليزية' : 'Full Name (English)'}
                  </label>
                  <input
                    type="text"
                    required
                    value={formData.nameEn}
                    onChange={(e) => handleFieldChange('nameEn', e.target.value)}
                    className="w-full bg-[#f3f7f6] dark:bg-slate-950 border border-transparent focus:border-brand-500 focus:bg-white text-slate-855 dark:text-slate-105 rounded-2xl py-3 px-4 outline-none transition-all text-sm"
                    dir="ltr"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-500 dark:text-slate-400 mb-1.5">
                    {isRtl ? 'الاسم باللغة العربية' : 'Full Name (Arabic)'}
                  </label>
                  <input
                    type="text"
                    required
                    value={formData.name}
                    onChange={(e) => handleFieldChange('name', e.target.value)}
                    className="w-full bg-[#f3f7f6] dark:bg-slate-950 border border-transparent focus:border-brand-500 focus:bg-white text-slate-855 dark:text-slate-105 rounded-2xl py-3 px-4 outline-none transition-all text-sm"
                  />
                </div>

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
                        <span>{matchedCountry.flag}</span>
                        <span>({matchedCountry.phoneCode || matchedCountry.code})</span>
                      </button>

                      {isDropdownOpen && (
                        <div className="absolute left-0 mt-2 z-20 w-48 bg-white dark:bg-slate-950 rounded-2xl shadow-xl border border-slate-100 dark:border-slate-850 py-2 max-h-60 overflow-y-auto animate-fadeIn text-left">
                          {sortedCountries.map((country) => (
                            <button
                              key={country.id || country._id}
                              type="button"
                              onClick={() => selectCountryCode(country)}
                              className="w-full px-4 py-2.5 flex items-center justify-between hover:bg-slate-50 dark:hover:bg-slate-900 text-slate-700 dark:text-slate-300 text-sm transition-colors"
                            >
                              <span>{country.name}</span>
                              <span className="flex items-center gap-2">
                                <span className="text-slate-450 dark:text-slate-500 font-medium" dir="ltr">{country.phoneCode}</span>
                                <span className="text-lg">{country.flag}</span>
                              </span>
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
                      className="flex-1 bg-[#f3f7f6] dark:bg-slate-950 border border-transparent focus:border-brand-500 focus:bg-white text-slate-855 dark:text-slate-105 rounded-2xl py-3 px-4 outline-none transition-all text-sm"
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
                    className="w-full bg-[#f3f7f6] dark:bg-slate-950 border border-transparent focus:border-brand-500 focus:bg-white text-slate-855 dark:text-slate-105 rounded-2xl py-3 px-4 outline-none transition-all text-sm"
                    dir="ltr"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-500 dark:text-slate-400 mb-1.5">
                    {isRtl ? 'الدولة' : 'Country'}
                  </label>
                  <select
                    required
                    value={formData.countryId || ''}
                    onChange={(e) => handleFieldChange('countryId', e.target.value)}
                    className="w-full bg-[#f3f7f6] dark:bg-slate-950 border border-transparent focus:border-brand-500 focus:bg-white text-slate-855 dark:text-slate-105 rounded-2xl py-3 px-4 outline-none transition-all text-sm cursor-pointer text-start"
                  >
                    <option value="" disabled>{isRtl ? 'اختر الدولة' : 'Select Country'}</option>
                    {sortedCountries.map((country) => (
                      <option key={country.id || country._id} value={country.id || country._id}>
                        {country.name} {country.flag}
                      </option>
                    ))}
                  </select>
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
                  onClick={() => setIsEditing(false)}
                  className="flex-1 py-4 bg-white hover:bg-slate-50 text-slate-700 font-bold rounded-2xl border border-slate-200 transition-all dark:bg-slate-900 dark:text-slate-350 dark:border-slate-800 active:scale-[0.98] cursor-pointer"
                >
                  {t('adminDashboard.managers.addSupervisorScreen.cancel', 'إلغاء')}
                </button>
              </div>
            </div>
          </>
        )}

        <EditSecurityPasswordCard
          isRtl={isRtl}
          t={t}
          onUpdatePassword={handleUpdatePassword}
        />

        <EditGrantedPermissionsCard
          supervisorPermissions={supervisor.permissions}
          isRtl={isRtl}
          t={t}
        />

      </div>

    </div>
  )
}
import { useState, useMemo } from 'react'
import {
  ArrowRight,
  ArrowLeft,
  Pencil,
  Ban,
  CheckCircle2,
  Loader2
} from 'lucide-react'
import EditProfileCard from './EditProfileCard'
import EditSecurityPasswordCard from './EditSecurityPasswordCard'
import EditGrantedPermissionsCard from './EditGrantedPermissionsCard'
import { sortCountries, getCountryName } from '@/shared/utils/countryUtils'

export default function EditSupervisorScreen({
  roles,
  supervisor,
  countries = [],
  isRtl,
  t,
  isSaving = false,
  onSave,
  onToggleStatus,
  onUpdatePassword,
  onCancel
}) {
  const BackArrow = isRtl ? ArrowRight : ArrowLeft

  const [isEditing, setIsEditing] = useState(false)

  const { initialPrefix, initialPhone } = useMemo(() => {
    const fallback = { initialPrefix: '', initialPhone: '' }
    if (!supervisor.phone) return fallback

    const phone = String(supervisor.phone).trim()

    const spaceIdx = phone.indexOf(' ')
    if (spaceIdx > 0 && phone.startsWith('+')) {
      const prefix = phone.slice(0, spaceIdx)
      const number = phone.slice(spaceIdx + 1).trim()
      return { initialPrefix: prefix, initialPhone: number }
    }

    if (phone.startsWith('+') && countries && countries.length > 0) {
      const sorted = [...countries].sort(
        (a, b) => String(b.dialCode || b.phoneCode || '').replace(/\+/g, '').length - String(a.dialCode || a.phoneCode || '').replace(/\+/g, '').length
      )
      for (const country of sorted) {
        const code = String(country.dialCode || country.phoneCode || '').trim()
        if (code && phone.startsWith(code)) {
          return { initialPrefix: code, initialPhone: phone.slice(code.length).trim() }
        }
      }
      const guessPrefix = phone.match(/^(\+\d{1,4})/)?.[1] || ''
      return { initialPrefix: guessPrefix, initialPhone: phone.slice(guessPrefix.length).trim() }
    }

    return { initialPrefix: '', initialPhone: phone }
  }, [supervisor.phone, countries])

  const initialCountryId = useMemo(() => {
    if (!supervisor.country) return ''
    const sCountryId = supervisor.country?._id || supervisor.country?.id || supervisor.country;
    if (typeof sCountryId === 'string' && sCountryId.length !== 24) {
      const cleanStr = sCountryId.trim();
      const found = countries.find(c => {
        const cName = (c.name || '').trim();
        const cFlag = (c.flag || '').trim();
        return (cName && cleanStr.includes(cName)) || (cFlag && cleanStr.includes(cFlag));
      });
      return found?._id || found?.id || '';
    }
    return sCountryId || '';
  }, [supervisor.country, countries])

  const [formData, setFormData] = useState({
    name: typeof supervisor.name === 'object' ? (supervisor.name?.ar || '') : (supervisor.name || ''),
    nameEn: typeof supervisor.name === 'object' ? (supervisor.name?.en || '') : (supervisor.nameEn || ''),
    email: supervisor.email || '',
    phone: initialPhone,
    phonePrefix: initialPrefix,
    permissionId: supervisor.permission?._id || supervisor.permissionId || null,
    countryId: initialCountryId,
    status: supervisor.status || 'Active',
    photoUrl: supervisor.photoUrl || null
  })

  const sortedCountries = useMemo(() => {
    return sortCountries(countries, isRtl)
  }, [countries, isRtl])

  const [isDropdownOpen, setIsDropdownOpen] = useState(false)
  const [countrySearch, setCountrySearch] = useState('')

  const filteredCountries = useMemo(() => {
    if (!countrySearch.trim()) return sortedCountries;
    const query = countrySearch.toLowerCase().replace(/\+/g, '').trim();
    return sortedCountries.filter(c => {
      const cName = getCountryName(c, isRtl).toLowerCase();
      const cCode = (c.code || '').toLowerCase();
      const cPhone = String(c.dialCode || c.phoneCode || '').replace(/\+/g, '').trim();
      return cName.includes(query) || cPhone.includes(query) || cCode.includes(query);
    });
  }, [sortedCountries, countrySearch, isRtl])

  const normalizePhoneCode = (code) => {
    if (!code) return ''
    return String(code).replace(/\+/g, '').trim()
  }

  const matchedCountry = useMemo(() => {
    const prefixNorm = normalizePhoneCode(formData.phonePrefix)
    if (!prefixNorm) return null
    const found = sortedCountries.find(c => normalizePhoneCode(c.dialCode || c.phoneCode) === prefixNorm || normalizePhoneCode(c.code) === prefixNorm)
    return found || (formData.phonePrefix ? { phoneCode: formData.phonePrefix, dialCode: formData.phonePrefix, flag: '🌐' } : null)
  }, [sortedCountries, formData.phonePrefix])

  const handleFieldChange = (key, value) => {
    setFormData((prev) => ({ ...prev, [key]: value }))
  }

  const selectCountryCode = (country) => {
    setIsDropdownOpen(false)
    setCountrySearch('')
    const pfx = String(country.dialCode || country.phoneCode || country.code || '');
    const prefixWithPlus = pfx.startsWith('+') ? pfx : `+${pfx}`;
    handleFieldChange('phonePrefix', prefixWithPlus)
  }

  const handleUpdatePassword = (newPassword) => {
    if (onUpdatePassword) onUpdatePassword(newPassword, {
      phone: `${formData.phonePrefix} ${formData.phone}`.trim(),
      countryId: formData.countryId,
    });
  }

  const handleSubmit = (e) => {
    e.preventDefault()

    const foundCountry = countries.find(c => (c.dialCode || c.phoneCode) === formData.phonePrefix) || countries[0];
    const countryId = formData.countryId || foundCountry?.id || foundCountry?._id || null;

    let rawPhone = formData.phone || '';
    if (rawPhone.startsWith('+')) {
      const normPrefix = String(formData.phonePrefix || '').replace(/\+/g, '').trim();
      const normPhone = rawPhone.replace(/^\+/, '').trim();
      rawPhone = normPhone.startsWith(normPrefix) ? normPhone.slice(normPrefix.length).trim() : normPhone;
    }

    onSave({
      adminData: {
        'name[ar]': formData.name,
        'name[en]': formData.nameEn,
        email: formData.email,
        phone: formData.phonePrefix + ' ' + rawPhone,
        country: countryId
      },
      permissionId: formData.permissionId
    })
  }

  const joinDate = supervisor.createdAt
    ? new Date(supervisor.createdAt).toLocaleDateString()
    : (supervisor.joinDate || '-')
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
            <h2 className="text-2xl font-bold text-slate-800 dark:text-white flex items-center gap-2">
              <span>{isRtl ? 'قائمة المشرفين' : 'Supervisors List'}</span>
              <span className="text-slate-350 dark:text-slate-655 text-lg">/</span>
              <span className="text-slate-500 dark:text-slate-400 font-semibold text-lg">
                {isRtl ? 'تفاصيل المشرف' : 'Supervisor Details'}
              </span>
            </h2>
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
          formData={{
            name: typeof supervisor.name === 'object' ? (supervisor.name?.ar || '') : (supervisor.name || ''),
            email: supervisor.email || '',
            phone: initialPhone,
            phonePrefix: initialPrefix,
          }}
          joinDate={joinDate}
          isRtl={isRtl}
          t={t}
          countryFlag={matchedCountry?.flag}
          roleName={roles?.find(r => r.id === formData.permissionId)?.name || supervisor.permission?.name}
        />

        {isEditing && (
          <>
            <div className="bg-white dark:bg-slate-900 rounded-3xl border border-slate-100 dark:border-slate-800/80 p-6 shadow-soft space-y-6">
              <h3 className="text-base font-bold text-slate-800 dark:text-white border-b border-slate-100 dark:border-slate-800/60 pb-3">
                {isRtl ? 'تعديل البيانات الأساسية' : 'Edit Basic Details'}
              </h3>

              <div className="flex flex-col gap-5">

                <div>
                  <label htmlFor="editNameEnInput" className="block text-xs font-bold text-slate-500 dark:text-slate-400 mb-1.5">
                    {isRtl ? 'الاسم باللغة الإنجليزية' : 'Full Name (English)'}
                  </label>
                  <input
                    id="editNameEnInput"
                    type="text"
                    required
                    value={formData.nameEn}
                    onChange={(e) => handleFieldChange('nameEn', e.target.value)}
                    className="w-full bg-[#f3f7f6] dark:bg-slate-950 border border-transparent focus:border-brand-500 focus:bg-white text-slate-855 dark:text-slate-105 rounded-2xl py-3 px-4 outline-none transition-all text-sm"
                    dir="ltr"
                  />
                </div>

                <div>
                  <label htmlFor="editNameArInput" className="block text-xs font-bold text-slate-500 dark:text-slate-400 mb-1.5">
                    {isRtl ? 'الاسم باللغة العربية' : 'Full Name (Arabic)'}
                  </label>
                  <input
                    id="editNameArInput"
                    type="text"
                    required
                    value={formData.name}
                    onChange={(e) => handleFieldChange('name', e.target.value)}
                    className="w-full bg-[#f3f7f6] dark:bg-slate-950 border border-transparent focus:border-brand-500 focus:bg-white text-slate-855 dark:text-slate-105 rounded-2xl py-3 px-4 outline-none transition-all text-sm"
                  />
                </div>

                <div>
                  <label htmlFor="editPhoneInput" className="block text-xs font-bold text-slate-500 dark:text-slate-400 mb-1.5">
                    {t('adminDashboard.managers.addSupervisorScreen.phone', 'رقم الهاتف')}
                  </label>
                  <div className="flex gap-3" dir="ltr">

                    <div className="relative shrink-0">
                      <button
                        type="button"
                        aria-label={isRtl ? 'اختر رمز الدولة' : 'Select country code'}
                        aria-expanded={isDropdownOpen}
                        aria-haspopup="listbox"
                        onClick={() => {
                          setIsDropdownOpen(!isDropdownOpen);
                          if (isDropdownOpen) setCountrySearch('');
                        }}
                        className="h-12 flex items-center justify-center gap-2 px-3 bg-[#f3f7f6] dark:bg-slate-950 hover:bg-slate-100 dark:hover:bg-slate-900 border border-transparent rounded-2xl transition-all text-sm font-semibold text-slate-800 dark:text-slate-205 cursor-pointer"
                      >
                        <span aria-hidden="true">{matchedCountry?.flag || '🌍'}</span>
                        <span aria-hidden="true">{(matchedCountry?.dialCode || matchedCountry?.phoneCode) ? `(${matchedCountry.dialCode || matchedCountry.phoneCode})` : (formData.phonePrefix ? `(${formData.phonePrefix})` : '')}</span>
                      </button>

                      {isDropdownOpen && (
                        <div role="listbox" className="absolute left-0 mt-2 z-20 w-56 bg-white dark:bg-slate-950 rounded-2xl shadow-xl border border-slate-100 dark:border-slate-850 py-2 max-h-60 overflow-y-auto animate-fadeIn text-left">
                          <div className="px-3 pb-2 pt-1 border-b border-slate-100 dark:border-slate-800/60 sticky top-0 bg-white dark:bg-slate-955 z-10">
                            <label htmlFor="editCountrySearchInput" className="sr-only">
                              {isRtl ? 'بحث...' : 'Search...'}
                            </label>
                            <input
                              id="editCountrySearchInput"
                              type="search"
                              value={countrySearch}
                              onChange={(e) => setCountrySearch(e.target.value)}
                              placeholder={isRtl ? 'بحث...' : 'Search...'}
                              className="w-full px-2.5 py-1.5 bg-[#f3f7f6] dark:bg-slate-900 text-xs rounded-xl outline-none text-slate-800 dark:text-slate-200 border border-transparent focus:border-brand-500"
                            />
                          </div>
                          {filteredCountries.map((country) => (
                            <button
                              key={country.id || country._id}
                              type="button"
                              onClick={() => selectCountryCode(country)}
                              className="w-full px-4 py-2.5 flex items-center justify-between hover:bg-slate-50 dark:hover:bg-slate-900 text-slate-700 dark:text-slate-300 text-sm transition-colors"
                            >
                              <span>{getCountryName(country, isRtl)}</span>
                              <span className="flex items-center gap-2">
                                <span className="text-slate-450 dark:text-slate-500 font-medium" dir="ltr">{country.dialCode || country.phoneCode}</span>
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
                      onChange={(e) => {
                        const val = e.target.value;
                        if (val.startsWith('+')) {
                          const normalizedInput = val.replace(/\+/g, '').trim();
                          const matched = countries
                            .map(c => {
                              const dial = c.dialCode || c.phoneCode || '';
                              return { ...c, dial, normCode: dial.replace(/\+/g, '').trim() };
                            })
                            .filter(c => c.normCode)
                            .sort((a, b) => b.normCode.length - a.normCode.length)
                            .find(c => normalizedInput.startsWith(c.normCode));

                          if (matched) {
                            handleFieldChange('phonePrefix', matched.dial);
                            if (matched.id || matched._id) {
                              handleFieldChange('countryId', matched.id || matched._id);
                            }
                            let remaining = val.substring(1).substring(matched.normCode.length).trim();
                            handleFieldChange('phone', remaining);
                            return;
                          }
                        }
                        handleFieldChange('phone', val);
                      }}
                      className="flex-1 bg-[#f3f7f6] dark:bg-slate-950 border border-transparent focus:border-brand-500 focus:bg-white text-slate-855 dark:text-slate-105 rounded-2xl py-3 px-4 outline-none transition-all text-sm"
                    />

                  </div>
                </div>

                <div>
                  <label htmlFor="editCountrySelect" className="block text-xs font-bold text-slate-500 dark:text-slate-400 mb-1.5">
                    {isRtl ? 'الدولة' : 'Country'}
                  </label>
                  <select
                    id="editCountrySelect"
                    required
                    value={formData.countryId || ''}
                    onChange={(e) => handleFieldChange('countryId', e.target.value)}
                    className="w-full bg-[#f3f7f6] dark:bg-slate-950 border border-transparent focus:border-brand-500 focus:bg-[#f3f7f6] text-slate-855 dark:text-slate-105 rounded-2xl py-3 px-4 outline-none transition-all text-sm cursor-pointer text-start"
                  >
                    <option value="" disabled>{isRtl ? 'اختر الدولة' : 'Select Country'}</option>
                    {sortedCountries.map((country) => (
                      <option key={country.id || country._id} value={country.id || country._id}>
                        {getCountryName(country, isRtl)} {country.flag}
                      </option>
                    ))}
                  </select>
                </div>

              </div>

              <div className="flex flex-col sm:flex-row gap-4 pt-4 border-t border-slate-100 dark:border-slate-800">
                <button
                  type="button"
                  onClick={handleSubmit}
                  disabled={isSaving}
                  className="flex-1 py-4 bg-brand-500 hover:bg-brand-650 text-white font-bold rounded-2xl transition-all shadow-md shadow-brand-500/10 active:scale-[0.98] cursor-pointer flex items-center justify-center gap-2 disabled:opacity-50"
                >
                  {isSaving && <Loader2 className="w-5 h-5 animate-spin" />}
                  {t('adminDashboard.managers.addSupervisorScreen.saveChanges', 'حفظ التغييرات')}
                </button>
                <button
                  type="button"
                  onClick={() => setIsEditing(false)}
                  disabled={isSaving}
                  className="flex-1 py-4 bg-white hover:bg-slate-50 text-slate-700 font-bold rounded-2xl border border-slate-200 transition-all dark:bg-slate-900 dark:text-slate-350 dark:border-slate-800 active:scale-[0.98] cursor-pointer disabled:opacity-50"
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
          supervisorPermissions={supervisor.permission?.actions || supervisor.permissions || []}
          isRtl={isRtl}
          t={t}
        />

      </div>

    </div>
  )
}
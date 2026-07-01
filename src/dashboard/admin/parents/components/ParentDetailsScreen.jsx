import { useState, useEffect } from 'react'
import {
  ArrowRight,
  ArrowLeft,
  Pencil,
  UserX,
  MessageSquare,
} from 'lucide-react'
import SendMessageModal from './SendMessageModal'
import { showErrorToast } from '@/shared/utils/sweetAlert'
import { landingApi } from '@/shared/services/api/landingApi'
import ParentProfileSummary from './ParentProfileSummary'
import ParentEditForm from './ParentEditForm'
import ParentChildrenList from './ParentChildrenList'



const statusConfig = {
  Active: { label: 'فعال', dotClass: 'bg-emerald-500', badgeClass: 'bg-emerald-50 text-emerald-700 dark:bg-emerald-950/30 dark:text-emerald-400' },
  Expiring: { label: 'ينتهي قريباً', dotClass: 'bg-amber-500', badgeClass: 'bg-amber-50 text-amber-700 dark:bg-amber-950/30 dark:text-amber-400' },
  Expired: { label: 'منتهي', dotClass: 'bg-slate-400', badgeClass: 'bg-slate-100 text-slate-600 dark:bg-slate-800 dark:text-slate-400' },
}

export default function ParentDetailsScreen({
  parent,
  isRtl,
  t,
  onCancel,
  onSave,
  onSendMessage,
  onSuspend,
}) {
  const BackArrow = isRtl ? ArrowRight : ArrowLeft

  const [mode, setMode] = useState('view')
  const [showMessageModal, setShowMessageModal] = useState(false)
  const [isSuspending, setIsSuspending] = useState(false)

  const [countryCodesList, setCountryCodesList] = useState([
    { code: '+966', flag: '🇸🇦', name: 'Saudi Arabia' }
  ])
  const [countriesList, setCountriesList] = useState([
    { id: '', name: '🇪🇬 مصر', nameEn: 'Egypt' }
  ])

  const initialPrefix = parent.phonePrefix || '+966'
  const initialPhone = parent.phone ? parent.phone.replace(initialPrefix, '').trim() : ''

  const [selectedCountryCode, setSelectedCountryCode] = useState(countryCodesList[0])
  const [isPhoneDropdownOpen, setIsPhoneDropdownOpen] = useState(false)
  const [phoneVal, setPhoneVal] = useState(initialPhone)
  const [showPassword, setShowPassword] = useState(false)
  const [showConfirmPassword, setShowConfirmPassword] = useState(false)

  useEffect(() => {
    const fetchCountries = async () => {
      try {
        const res = await landingApi.fetchCountries();
        const fetchedCountries = Array.isArray(res) ? res : (res?.data || []);
        if (fetchedCountries.length > 0) {
          const formattedCountries = fetchedCountries.map(c => ({
            id: c.id,
            name: c.name || '',
            nameEn: c.nameEn || c.name || ''
          }));
          const formattedCodes = fetchedCountries.map(c => ({
            code: c.phoneCode || '',
            flag: c.flag || '🌐',
            name: c.name || ''
          }));

          setCountriesList(formattedCountries.length ? formattedCountries : [{ id: '', name: '🇪🇬 مصر', nameEn: 'Egypt' }]);
          setCountryCodesList(formattedCodes.length ? formattedCodes : [{ code: '+20', flag: '🇪🇬', name: 'Egypt' }]);

          let prefix = parent.phonePrefix;
          let phonePart = parent.phone || '';

          if (parent.phone && !parent.phonePrefix) {
            const matchedCode = fetchedCountries.find(c => parent.phone.startsWith(c.phoneCode));
            if (matchedCode) {
              prefix = matchedCode.phoneCode;
              phonePart = parent.phone.substring(prefix.length);
            } else {
              prefix = formattedCodes[0].code;
            }
          }

          setPhoneVal(phonePart);
          const matchedCountry = formattedCodes.find(c => c.code === prefix) || formattedCodes[0];
          setSelectedCountryCode(matchedCountry);
        }
      } catch (err) {
        console.error('Failed to fetch countries:', err);
      }
    };
    fetchCountries();
  }, [parent]);

  const [formData, setFormData] = useState({
    name: parent.name || '',
    nameEn: parent.nameEn || '',
    email: parent.email || '',
    country: parent.country || 'المملكة العربية السعودية',
    birthDate: parent.birthDate || '',
    status: parent.status || 'Active',
    profileImage: parent.profileImage || null,
    password: '',
    confirmPassword: '',
    notes: parent.notes || '',
  })

  const handleChange = (key, value) =>
    setFormData((prev) => ({ ...prev, [key]: value }))

  const handleSaveEdit = (e) => {
    e.preventDefault()
    if (formData.password && formData.password !== formData.confirmPassword) {
      showErrorToast(isRtl ? 'كلمة المرور وتأكيدها غير متطابقتين!' : 'Passwords do not match!', isRtl)
      return
    }
    onSave({
      ...parent,
      ...formData,
      phone: `${selectedCountryCode.code} ${phoneVal.trim()}`,
      phonePrefix: selectedCountryCode.code,
    })
    setMode('view')
  }

  const handleSuspend = async () => {
    const msg = isRtl
      ? 'هل أنت متأكد من تعليق هذا الحساب؟'
      : 'Are you sure you want to suspend this account?'
    if (!window.confirm(msg)) return
    setIsSuspending(true)
    try {
      await onSuspend(parent.id)
    } finally {
      setIsSuspending(false)
    }
  }

  const initial = parent.name.trim().charAt(0)
  const statusCfg = statusConfig[parent.status] || statusConfig.Expired
  const children = parent.children || []

  return (
    <div className="space-y-6 pb-10" dir={isRtl ? 'rtl' : 'ltr'}>

      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
        <div className="flex items-center gap-3">
          <button
            type="button"
            onClick={onCancel}
            className="p-2.5 bg-white hover:bg-slate-50 dark:bg-slate-900 dark:hover:bg-slate-800 text-slate-600 dark:text-slate-300 rounded-full border border-slate-100 dark:border-slate-800 transition-all hover:scale-105"
          >
            <BackArrow size={20} />
          </button>
          <div>
            <h1 className="text-2xl font-bold text-slate-800 dark:text-white flex items-center gap-2">
              <span>{isRtl ? 'أولياء الأمور' : 'Parents'}</span>
              <span className="text-slate-300 dark:text-slate-600 text-lg">/</span>
              <span className="text-slate-500 dark:text-slate-400 font-semibold text-lg">
                {parent.name}
              </span>
            </h1>
          </div>
        </div>

        {mode === 'view' && (
          <button
            type="button"
            onClick={() => setMode('edit')}
            className="flex items-center gap-2 px-5 py-2.5 bg-brand-600 hover:bg-brand-700 text-white text-sm font-bold rounded-2xl transition-all shadow-md shadow-brand-500/20 active:scale-[0.98]"
          >
            <Pencil size={15} />
            <span>{isRtl ? 'تعديل البيانات' : 'Edit Data'}</span>
          </button>
        )}
      </div>

      {mode === 'view' && (
        <ParentProfileSummary
          parent={parent}
          isRtl={isRtl}
          statusCfg={statusCfg}
        />
      )}

      {mode === 'edit' && (
        <ParentEditForm
          formData={formData}
          handleChange={handleChange}
          handleSaveEdit={handleSaveEdit}
          isRtl={isRtl}
          setMode={setMode}
          selectedCountryCode={selectedCountryCode}
          setSelectedCountryCode={setSelectedCountryCode}
          isPhoneDropdownOpen={isPhoneDropdownOpen}
          setIsPhoneDropdownOpen={setIsPhoneDropdownOpen}
          countryCodesList={countryCodesList}
          countriesList={countriesList}
          phoneVal={phoneVal}
          setPhoneVal={setPhoneVal}
          showPassword={showPassword}
          setShowPassword={setShowPassword}
          showConfirmPassword={showConfirmPassword}
          setShowConfirmPassword={setShowConfirmPassword}
        />
      )}

      {mode === 'view' && (
        <>
          <ParentChildrenList children={children} isRtl={isRtl} />

          <div className="flex gap-3">
            <button
              type="button"
              onClick={handleSuspend}
              disabled={isSuspending}
              className="flex-1 flex items-center justify-center gap-2 py-3.5 rounded-2xl border border-rose-200 dark:border-rose-800/50 text-rose-600 dark:text-rose-400 text-sm font-bold hover:bg-rose-50 dark:hover:bg-rose-950/20 transition-all disabled:opacity-60 disabled:cursor-not-allowed"
            >
              <UserX size={16} />
              <span>{isRtl ? 'تعليق الحساب' : 'Suspend Account'}</span>
            </button>
            <button
              type="button"
              onClick={() => setShowMessageModal(true)}
              className="flex-[2] flex items-center justify-center gap-2 py-3.5 rounded-2xl bg-brand-600 hover:bg-brand-700 text-white text-sm font-bold shadow-lg shadow-brand-500/20 transition-all active:scale-[0.98]"
            >
              <MessageSquare size={16} />
              <span>{isRtl ? 'إرسال رسالة' : 'Send Message'}</span>
            </button>
          </div>
        </>
      )}

      {showMessageModal && (
        <SendMessageModal
          parent={parent}
          isRtl={isRtl}
          t={t}
          onClose={() => setShowMessageModal(false)}
          onSend={onSendMessage}
        />
      )}
    </div>
  )
}
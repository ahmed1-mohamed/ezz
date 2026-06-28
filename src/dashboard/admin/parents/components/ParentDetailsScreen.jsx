import { useState } from 'react'
import {
  ArrowRight,
  ArrowLeft,
  Pencil,
  Star,
  Users,
  Phone,
  Mail,
  UserX,
  MessageSquare,
  Plus,
  ChevronDown,
  Eye,
  EyeOff,
  Upload,
} from 'lucide-react'
import SendMessageModal from './SendMessageModal'

const countryCodes = [
  { code: '+20',  flag: '🇪🇬', name: 'Egypt' },
  { code: '+966', flag: '🇸🇦', name: 'Saudi Arabia' },
  { code: '+971', flag: '🇦🇪', name: 'UAE' },
  { code: '+965', flag: '🇰🇼', name: 'Kuwait' },
  { code: '+974', flag: '🇶🇦', name: 'Qatar' },
]

const countries = [
  { name: 'مصر' },
  { name: 'المملكة العربية السعودية' },
  { name: 'الإمارات العربية المتحدة' },
  { name: 'الكويت' },
  { name: 'قطر' },
]

const statusConfig = {
  Active:   { label: 'فعال',        dotClass: 'bg-emerald-500', badgeClass: 'bg-emerald-50 text-emerald-700 dark:bg-emerald-950/30 dark:text-emerald-400' },
  Expiring: { label: 'ينتهي قريباً', dotClass: 'bg-amber-500',   badgeClass: 'bg-amber-50 text-amber-700 dark:bg-amber-950/30 dark:text-amber-400' },
  Expired:  { label: 'منتهي',        dotClass: 'bg-slate-400',   badgeClass: 'bg-slate-100 text-slate-600 dark:bg-slate-800 dark:text-slate-400' },
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

  // ─── Mode toggle: view / edit ──────────────────────────────────────────
  const [mode, setMode] = useState('view') // 'view' | 'edit'
  const [showMessageModal, setShowMessageModal] = useState(false)
  const [isSuspending, setIsSuspending] = useState(false)

  // ─── Edit form state ──────────────────────────────────────────────────
  const initialPrefix =
    countryCodes.find((c) => parent.phone?.startsWith(c.code))?.code || '+966'
  const initialPhone = parent.phone?.replace(initialPrefix, '').trim() || ''

  const [selectedCountryCode, setSelectedCountryCode] = useState(
    countryCodes.find((c) => c.code === initialPrefix) || countryCodes[0]
  )
  const [isPhoneDropdownOpen, setIsPhoneDropdownOpen] = useState(false)
  const [isCountryDropdownOpen, setIsCountryDropdownOpen] = useState(false)
  const [phoneVal, setPhoneVal] = useState(initialPhone)
  const [showPassword, setShowPassword] = useState(false)
  const [showConfirmPassword, setShowConfirmPassword] = useState(false)

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
      alert(isRtl ? 'كلمة المرور وتأكيدها غير متطابقتين!' : 'Passwords do not match!')
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

      {/* ── Header ───────────────────────────────────────────────────────── */}
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

      {/* ── Stats Cards ──────────────────────────────────────────────────── */}
      <div className="grid grid-cols-2 gap-4">
        <div className="p-5 bg-white dark:bg-slate-900 rounded-3xl border border-slate-100 dark:border-slate-800/60 shadow-soft flex items-center justify-between">
          <div>
            <p className="text-xs font-medium text-slate-400">{isRtl ? 'متوسط التقييم' : 'Avg. Rating'}</p>
            <p className="text-3xl font-bold text-amber-500 mt-0.5">{parent.averageRating || 0}</p>
          </div>
          <Star size={28} className="text-amber-400 fill-amber-400 opacity-80" />
        </div>
        <div className="p-5 bg-white dark:bg-slate-900 rounded-3xl border border-slate-100 dark:border-slate-800/60 shadow-soft flex items-center justify-between">
          <div>
            <p className="text-xs font-medium text-slate-400">{isRtl ? 'إجمالي الأبناء' : 'Total Children'}</p>
            <p className="text-3xl font-bold text-slate-800 dark:text-white mt-0.5">{parent.childrenCount || children.length}</p>
          </div>
          <Users size={28} className="text-brand-400 opacity-80" />
        </div>
      </div>

      {/* ── Parent Info Card ──────────────────────────────────────────────── */}
      <div className="bg-white dark:bg-slate-900 rounded-3xl border border-slate-100 dark:border-slate-800/60 shadow-soft p-5">
        <div className="flex items-center justify-between mb-4">
          <span className={`inline-flex items-center gap-1.5 rounded-full px-3 py-1 text-xs font-semibold ${statusCfg.badgeClass}`}>
            <span className={`h-1.5 w-1.5 rounded-full ${statusCfg.dotClass}`} />
            {statusCfg.label}
          </span>
          <div className="flex items-center gap-3">
            <div>
              <p className="font-bold text-lg text-slate-800 dark:text-white text-end">{parent.name}</p>
            </div>
            <div className="h-12 w-12 rounded-full bg-brand-600 flex items-center justify-center text-white text-xl font-bold">
              {initial}
            </div>
          </div>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
          <div className="flex items-center justify-end gap-2 bg-slate-50 dark:bg-slate-950/30 rounded-2xl p-3">
            <div className="text-end">
              <p className="text-xs text-slate-400">{isRtl ? 'عدد الأبناء' : 'Children'}</p>
              <p className="font-semibold text-sm text-slate-700 dark:text-slate-300">
                {parent.childrenCount || children.length} {isRtl ? 'طالب' : 'student(s)'}
              </p>
            </div>
            <div className="h-8 w-8 flex items-center justify-center rounded-xl bg-brand-50 dark:bg-brand-950/30 text-brand-600">
              <Users size={16} />
            </div>
          </div>
          <div className="flex items-center justify-end gap-2 bg-slate-50 dark:bg-slate-950/30 rounded-2xl p-3">
            <div className="text-end">
              <p className="text-xs text-slate-400">{isRtl ? 'رقم الجوال' : 'Phone'}</p>
              <p className="font-semibold text-sm text-slate-700 dark:text-slate-300" dir="ltr">{parent.phone}</p>
            </div>
            <div className="h-8 w-8 flex items-center justify-center rounded-xl bg-emerald-50 dark:bg-emerald-950/30 text-emerald-600">
              <Phone size={16} />
            </div>
          </div>
          <div className="flex items-center justify-end gap-2 bg-slate-50 dark:bg-slate-950/30 rounded-2xl p-3">
            <div className="text-end">
              <p className="text-xs text-slate-400">{isRtl ? 'البريد الإلكتروني' : 'Email'}</p>
              <p className="font-semibold text-sm text-slate-700 dark:text-slate-300 truncate max-w-[140px]" dir="ltr">{parent.email}</p>
            </div>
            <div className="h-8 w-8 flex items-center justify-center rounded-xl bg-blue-50 dark:bg-blue-950/30 text-blue-600">
              <Mail size={16} />
            </div>
          </div>
        </div>
      </div>

      {/* ── EDIT MODE ────────────────────────────────────────────────────── */}
      {mode === 'edit' && (
        <form onSubmit={handleSaveEdit} className="space-y-5">

          {/* Personal Data Card */}
          <div className="bg-white dark:bg-slate-900 rounded-3xl border border-slate-100 dark:border-slate-800/80 p-6 shadow-soft space-y-5">
            <h3 className="text-base font-bold text-slate-800 dark:text-white border-b border-slate-100 dark:border-slate-800/60 pb-3 text-end">
              {isRtl ? 'البيانات الشخصية' : 'Personal Details'}
            </h3>

            {/* Photo */}
            <div className="flex flex-col items-center gap-3">
              <div className="h-20 w-20 rounded-full bg-brand-600 flex items-center justify-center text-white text-2xl font-bold shadow-lg overflow-hidden">
                {formData.profileImage
                  ? <img src={formData.profileImage} alt="" className="w-full h-full object-cover" />
                  : <span>{initial}</span>}
              </div>
              <label className="flex items-center gap-2 px-4 py-2 bg-brand-600 hover:bg-brand-700 text-white text-sm font-semibold rounded-xl cursor-pointer transition-all">
                <Upload size={14} />
                <span>{isRtl ? 'تغيير الصورة' : 'Change Photo'}</span>
                <input type="file" className="hidden" accept="image/*" onChange={(e) => {
                  const f = e.target.files[0]
                  if (!f) return
                  const r = new FileReader()
                  r.onloadend = () => handleChange('profileImage', r.result)
                  r.readAsDataURL(f)
                }} />
              </label>
              <p className="text-xs text-slate-400">{isRtl ? 'الحد الأقصى 5 ميجابايت، PNG أو JPG' : 'Max 5MB, PNG or JPG'}</p>
            </div>

            {/* Names */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
              <div>
                <label className="block text-xs font-bold text-slate-500 mb-1.5 text-start">Full Name</label>
                <input type="text" value={formData.nameEn} onChange={(e) => handleChange('nameEn', e.target.value)}
                  placeholder="Khaled Al-Mansour" dir="ltr"
                  className="w-full bg-[#f3f7f6] dark:bg-slate-950 border border-transparent focus:border-brand-500/20 focus:bg-white dark:focus:bg-slate-900 text-slate-800 dark:text-slate-100 rounded-2xl py-3 px-4 outline-none transition-all text-sm placeholder-slate-400" />
              </div>
              <div>
                <label className="block text-xs font-bold text-slate-500 mb-1.5 text-end">{isRtl ? 'الاسم بالعربية' : 'Arabic Name'}</label>
                <input type="text" required value={formData.name} onChange={(e) => handleChange('name', e.target.value)}
                  placeholder={isRtl ? 'خالد المنصور' : 'Khaled Al-Mansour'}
                  className="w-full bg-[#f3f7f6] dark:bg-slate-950 border border-transparent focus:border-brand-500/20 focus:bg-white dark:focus:bg-slate-900 text-slate-800 dark:text-slate-100 rounded-2xl py-3 px-4 outline-none transition-all text-sm placeholder-slate-400 text-end" />
              </div>
            </div>

            {/* Phone + Email */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
              <div>
                <label className="block text-xs font-bold text-slate-500 mb-1.5 text-end">{isRtl ? 'رقم الهاتف' : 'Phone'}</label>
                <div className="flex gap-2" dir="ltr">
                  <div className="relative shrink-0">
                    <button type="button" onClick={() => setIsPhoneDropdownOpen(!isPhoneDropdownOpen)}
                      className="h-12 flex items-center gap-1.5 px-3 bg-[#f3f7f6] dark:bg-slate-950 border border-transparent rounded-2xl text-sm font-semibold text-slate-800 dark:text-slate-200 cursor-pointer hover:bg-slate-100 dark:hover:bg-slate-900 transition-all">
                      <span>{selectedCountryCode.flag}</span>
                      <span className="text-xs">({selectedCountryCode.code})</span>
                      <ChevronDown size={12} className="text-slate-400" />
                    </button>
                    {isPhoneDropdownOpen && (
                      <div className="absolute left-0 top-full mt-1 z-20 w-44 bg-white dark:bg-slate-900 rounded-2xl shadow-xl border border-slate-100 dark:border-slate-800 py-2">
                        {countryCodes.map((c) => (
                          <button key={c.code} type="button" onClick={() => { setSelectedCountryCode(c); setIsPhoneDropdownOpen(false) }}
                            className="w-full px-4 py-2.5 flex items-center gap-3 hover:bg-slate-50 dark:hover:bg-slate-800 text-sm text-left">
                            <span>{c.flag}</span><span className="font-semibold">{c.code}</span>
                          </button>
                        ))}
                      </div>
                    )}
                  </div>
                  <input type="tel" value={phoneVal} onChange={(e) => setPhoneVal(e.target.value)} placeholder="501234567"
                    className="flex-1 bg-[#f3f7f6] dark:bg-slate-950 border border-transparent focus:border-brand-500/20 focus:bg-white dark:focus:bg-slate-900 text-slate-800 dark:text-slate-100 rounded-2xl py-3 px-4 outline-none transition-all text-sm placeholder-slate-400" />
                </div>
              </div>
              <div>
                <label className="block text-xs font-bold text-slate-500 mb-1.5 text-end">{isRtl ? 'البريد الإلكتروني' : 'Email'}</label>
                <input type="email" value={formData.email} onChange={(e) => handleChange('email', e.target.value)}
                  placeholder="khalid@email.com" dir="ltr"
                  className="w-full bg-[#f3f7f6] dark:bg-slate-950 border border-transparent focus:border-brand-500/20 focus:bg-white dark:focus:bg-slate-900 text-slate-800 dark:text-slate-100 rounded-2xl py-3 px-4 outline-none transition-all text-sm placeholder-slate-400" />
              </div>
            </div>

            {/* Country */}
            <div className="relative">
              <label className="block text-xs font-bold text-slate-500 mb-1.5 text-end">{isRtl ? 'البلد' : 'Country'}</label>
              <button type="button" onClick={() => setIsCountryDropdownOpen(!isCountryDropdownOpen)}
                className="w-full flex items-center justify-between bg-[#f3f7f6] dark:bg-slate-950 border border-transparent rounded-2xl py-3 px-4 text-sm text-slate-800 dark:text-slate-100 cursor-pointer">
                <ChevronDown size={16} className="text-slate-400" />
                <span>{formData.country}</span>
              </button>
              {isCountryDropdownOpen && (
                <div className="absolute left-0 right-0 top-full mt-1 z-20 bg-white dark:bg-slate-900 rounded-2xl shadow-xl border border-slate-100 dark:border-slate-800 py-2">
                  {countries.map((c) => (
                    <button key={c.name} type="button" onClick={() => { handleChange('country', c.name); setIsCountryDropdownOpen(false) }}
                      className="w-full px-4 py-2.5 text-end hover:bg-slate-50 dark:hover:bg-slate-800 text-sm text-slate-700 dark:text-slate-300">
                      {c.name}
                    </button>
                  ))}
                </div>
              )}
            </div>
          </div>

          {/* Security Card */}
          <div className="bg-white dark:bg-slate-900 rounded-3xl border border-slate-100 dark:border-slate-800/80 p-6 shadow-soft space-y-5">
            <h3 className="text-base font-bold text-slate-800 dark:text-white border-b border-slate-100 dark:border-slate-800/60 pb-3 text-end">
              {isRtl ? 'الأمان وكلمة المرور' : 'Security & Password'}
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
              {[
                { key: 'confirmPassword', label: isRtl ? 'تأكيد كلمة المرور' : 'Confirm Password', show: showConfirmPassword, toggle: () => setShowConfirmPassword(!showConfirmPassword) },
                { key: 'password', label: isRtl ? 'كلمة المرور' : 'Password', show: showPassword, toggle: () => setShowPassword(!showPassword) },
              ].map(({ key, label, show, toggle }) => (
                <div key={key}>
                  <label className="block text-xs font-bold text-slate-500 mb-1.5 text-end">{label}</label>
                  <div className="relative" dir="ltr">
                    <input type={show ? 'text' : 'password'} value={formData[key]} onChange={(e) => handleChange(key, e.target.value)}
                      placeholder="••••••••••••••••••••"
                      className="w-full bg-[#f3f7f6] dark:bg-slate-950 border border-transparent focus:border-brand-500/20 focus:bg-white dark:focus:bg-slate-900 text-slate-800 dark:text-slate-100 rounded-2xl py-3 px-4 pr-11 outline-none transition-all text-sm placeholder-slate-400" />
                    <button type="button" onClick={toggle} className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-400 hover:text-slate-600 transition-colors">
                      {show ? <EyeOff size={16} /> : <Eye size={16} />}
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Action Buttons */}
          <div className="flex gap-3">
            <button type="button" onClick={() => setMode('view')}
              className="flex-1 py-3.5 rounded-2xl border border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-300 text-sm font-bold hover:bg-slate-50 dark:hover:bg-slate-800 transition-all">
              {isRtl ? 'إلغاء' : 'Cancel'}
            </button>
            <button type="submit"
              className="flex-[2] py-3.5 rounded-2xl bg-brand-600 hover:bg-brand-700 text-white text-sm font-bold shadow-lg shadow-brand-500/20 transition-all active:scale-[0.98]">
              {isRtl ? 'حفظ التعديلات' : 'Save Changes'}
            </button>
          </div>
        </form>
      )}

      {/* ── VIEW MODE ────────────────────────────────────────────────────── */}
      {mode === 'view' && (
        <>
          {/* Children (متابعة الأبناء) */}
          {children.length > 0 && (
            <div className="bg-white dark:bg-slate-900 rounded-3xl border border-slate-100 dark:border-slate-800/60 shadow-soft overflow-hidden">
              <div className="flex items-center justify-between p-5 border-b border-slate-100 dark:border-slate-800">
                <button className="flex items-center gap-1.5 px-3 py-1.5 bg-brand-50 dark:bg-brand-950/30 text-brand-600 dark:text-brand-400 rounded-xl text-xs font-semibold hover:bg-brand-100 transition-all">
                  <Plus size={13} />
                  <span>{isRtl ? 'إضافة ابن' : 'Add Child'}</span>
                </button>
                <div className="flex items-center gap-2">
                  <h3 className="text-sm font-bold text-slate-800 dark:text-white">{isRtl ? 'الأبناء المرتبطون' : 'Linked Children'}</h3>
                  <span className="text-xs text-slate-400">({children.length})</span>
                  <Users size={16} className="text-brand-500" />
                </div>
              </div>

              <div className="p-5 border-b border-slate-100 dark:border-slate-800">
                <h4 className="text-sm font-bold text-slate-800 dark:text-white text-end mb-0.5">{isRtl ? 'متابعة الأبناء' : 'Children Follow-up'}</h4>
                <p className="text-xs text-slate-400 text-end">{isRtl ? 'جميع معلومات أبنائك المسجلين' : 'All enrolled children info'}</p>
              </div>

              <div className="divide-y divide-slate-100 dark:divide-slate-800">
                {children.map((child) => {
                  const usedPct = Math.min((child.usedSessions / child.totalSessions) * 100, 100)
                  const isOver = child.usedSessions > child.totalSessions
                  const barColor = isOver
                    ? 'bg-rose-500'
                    : usedPct >= 80
                    ? 'bg-amber-500'
                    : 'bg-emerald-500'

                  return (
                    <div key={child.id} className="p-4">
                      <div className="flex items-start justify-between">
                        <button className="px-3 py-1.5 bg-brand-600 hover:bg-brand-700 text-white text-xs font-bold rounded-xl transition-all">
                          {isRtl ? 'التفاصيل' : 'Details'}
                        </button>
                        <div className="text-end">
                          <p className="font-bold text-sm text-slate-800 dark:text-slate-200">{child.name}</p>
                          <p className="text-xs text-slate-400 mt-0.5">
                            {isRtl ? 'تاريخ الانضمام:' : 'Joined:'} {child.joinDate}
                          </p>
                          <div className="flex items-center justify-end gap-3 mt-2">
                            <div className="text-end">
                              <p className="text-xs text-slate-400">{isRtl ? 'الحصص' : 'Sessions'}</p>
                              <p className="text-xs font-bold text-slate-700 dark:text-slate-300">
                                {child.usedSessions} {isRtl ? 'مستخدمة' : 'used'} •{' '}
                                <span className={isOver ? 'text-rose-500' : 'text-emerald-600'}>{child.totalSessions} {isRtl ? 'متبقية' : 'total'}</span>
                              </p>
                              <div className="w-28 h-1.5 rounded-full bg-slate-100 dark:bg-slate-800 mt-1 overflow-hidden">
                                <div className={`h-full rounded-full ${barColor} transition-all`} style={{ width: `${Math.min(usedPct, 100)}%` }} />
                              </div>
                            </div>
                            <div className="text-end">
                              <p className="text-xs text-slate-400">{isRtl ? 'المادة' : 'Subject'}</p>
                              <p className="text-xs font-bold text-slate-700 dark:text-slate-300">{child.subject}</p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  )
                })}
              </div>
            </div>
          )}

          {/* Action Buttons */}
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

      {/* ── Send Message Modal ────────────────────────────────────────────── */}
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

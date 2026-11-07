import { useState, useEffect } from 'react'
import { createPortal } from 'react-dom'
import {
  X,
  Upload,
  Coins,
  Send,
  AlertCircle,
  Trash2,
  GraduationCap,
  Landmark,
  Smartphone,
  CreditCard,
  Wallet,
  Check,
  Star,
  Loader2,
} from 'lucide-react'
import { toast } from 'react-hot-toast'
import { teachersApi } from '@/shared/services/api/teachersApi'
import { formatPaymentMethodInfo } from '@/shared/utils/paymentMethodUtils'

function renderMethodIcon(iconType) {
  if (iconType === 'bank') return <Landmark size={18} className="text-[#0f7a6c] dark:text-emerald-400" />
  if (iconType === 'wallet') return <Smartphone size={18} className="text-amber-600 dark:text-amber-400" />
  if (iconType === 'instapay') return <Send size={18} className="text-indigo-600 dark:text-indigo-400" />
  if (iconType === 'paypal') return <CreditCard size={18} className="text-blue-600 dark:text-blue-400" />
  return <Wallet size={18} className="text-slate-600 dark:text-slate-300" />
}

export default function AdminRecordPayoutModal({
  isOpen,
  onClose,
  teacher = null,
  teachersList = [],
  dueEarnings = 0,
  isRtl = true,
  onSuccess,
}) {
  const [selectedTeacherId, setSelectedTeacherId] = useState('')
  const [paymentMethods, setPaymentMethods] = useState([])
  const [isMethodsLoading, setIsMethodsLoading] = useState(false)
  const [amount, setAmount] = useState('')
  const [paymentMethodId, setPaymentMethodId] = useState('')
  const [referenceNumber, setReferenceNumber] = useState('')
  const [notes, setNotes] = useState('')
  const [proofImageFile, setProofImageFile] = useState(null)
  const [proofPreviewUrl, setProofPreviewUrl] = useState('')
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [errorMessage, setErrorMessage] = useState('')
  useEffect(() => {
    if (isOpen) {
      const initialId = teacher?.id || teacher?.teacher_id || teacher?._id || ''
      setSelectedTeacherId(initialId)
      setAmount('')
      setPaymentMethodId('')
      setReferenceNumber('')
      setNotes('')
      setProofImageFile(null)
      setProofPreviewUrl('')
      setErrorMessage('')
    }
  }, [isOpen, teacher])
  useEffect(() => {
    if (!isOpen || !selectedTeacherId) {
      setPaymentMethods([])
      return
    }
    let isMounted = true
    setIsMethodsLoading(true)
    teachersApi.fetchTeacherPaymentMethods(selectedTeacherId)
      .then((res) => {
        if (!isMounted) return
        const list = res?.data || (Array.isArray(res) ? res : [])
        setPaymentMethods(list)
        const defaultMethod = list.find((m) => m.isDefault) || list[0]
        if (defaultMethod) {
          setPaymentMethodId(defaultMethod.id || defaultMethod._id)
        } else {
          setPaymentMethodId('')
        }
      })
      .catch((err) => {
        console.error('Failed to load teacher payment methods:', err)
        if (isMounted) setPaymentMethods([])
      })
      .finally(() => {
        if (isMounted) setIsMethodsLoading(false)
      })
    return () => {
      isMounted = false
    }
  }, [isOpen, selectedTeacherId])
  useEffect(() => {
    if (!isOpen) return
    const original = document.body.style.overflow
    document.body.style.overflow = 'hidden'
    return () => {
      document.body.style.overflow = original
    }
  }, [isOpen])
  if (!isOpen || typeof document === 'undefined') return null
  const handleFileChange = (e) => {
    const file = e.target.files?.[0]
    if (!file) return
    if (!file.type.startsWith('image/')) {
      toast.error(isRtl ? 'يرجى اختيار ملف صورة صالح (PNG, JPG, WEBP)' : 'Please select a valid image file')
      return
    }
    setProofImageFile(file)
    const preview = URL.createObjectURL(file)
    setProofPreviewUrl(preview)
  }
  const handleRemoveFile = () => {
    setProofImageFile(null)
    if (proofPreviewUrl) {
      URL.revokeObjectURL(proofPreviewUrl)
      setProofPreviewUrl('')
    }
  }
  const handleSetFullDue = () => {
    if (Number(dueEarnings) > 0) {
      setAmount(String(dueEarnings))
    }
  }
  const handleSubmit = async (e) => {
    e.preventDefault()
    setErrorMessage('')
    if (!selectedTeacherId) {
      setErrorMessage(isRtl ? 'يرجى اختيار المعلم أولاً' : 'Please select a teacher first')
      return
    }
    const numAmount = Number(amount)
    if (isNaN(numAmount) || numAmount <= 0) {
      setErrorMessage(isRtl ? 'يرجى إدخال مبلغ تحويل صحيح أكبر من صفر' : 'Please enter a valid amount greater than 0')
      return
    }
    setIsSubmitting(true)
    try {
      const fd = new FormData()
      fd.append('amount', String(numAmount))
      if (paymentMethodId && String(paymentMethodId).trim()) {
        fd.append('paymentMethodId', String(paymentMethodId).trim())
      }
      if (referenceNumber && referenceNumber.trim()) {
        fd.append('referenceNumber', referenceNumber.trim())
      }
      if (notes && notes.trim()) {
        fd.append('notes', notes.trim())
      }
      if (proofImageFile instanceof File) {
        fd.append('proofImage', proofImageFile)
      }
      await teachersApi.createTeacherPayout(selectedTeacherId, fd)
      toast.success(
        isRtl
          ? 'تم تسجيل التحويل المالي وإرسال إثبات الدفع بنجاح'
          : 'Payment recorded and transfer proof sent successfully'
      )
      onSuccess?.()
      onClose()
    } catch (err) {
      console.error('Failed to create teacher payout:', err)
      const resMsg = err.response?.data?.message
      const msg = Array.isArray(resMsg) ? resMsg.join(' - ') : (resMsg || (isRtl ? 'فشل تسجيل التحويل المالي' : 'Failed to record payout'))
      setErrorMessage(msg)
      toast.error(msg)
    } finally {
      setIsSubmitting(false)
    }
  }
  return createPortal(
    <div
      onClick={(e) => {
        if (e.target === e.currentTarget && !isSubmitting) onClose()
      }}
      className="fixed inset-0 w-screen h-screen min-h-screen z-[99999] flex items-center justify-center p-3 sm:p-4 bg-black/80 backdrop-blur-sm animate-fade-in overflow-y-auto"
      dir={isRtl ? 'rtl' : 'ltr'}
    >
      <div
        onClick={(e) => e.stopPropagation()}
        className="bg-white dark:bg-slate-900 w-full max-w-xl rounded-3xl shadow-2xl border border-slate-100 dark:border-slate-800 overflow-hidden flex flex-col my-auto animate-scaleUp"
      >
        <div className="px-6 py-5 border-b border-slate-100 dark:border-slate-800 flex items-center justify-between bg-slate-50/60 dark:bg-slate-800/40">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-2xl bg-emerald-50 dark:bg-emerald-950/40 text-emerald-600 dark:text-emerald-400 flex items-center justify-center font-bold">
              <Coins size={20} />
            </div>
            <div>
              <h3 className="font-black text-base sm:text-lg text-slate-800 dark:text-white">
                {isRtl ? 'تسجيل تحويل مالي للمعلم (طلب دفع)' : 'Record Teacher Payout'}
              </h3>
              <p className="text-xs text-slate-400">
                {isRtl ? 'توثيق عملية التحويل البنكي أو المحفظة وإرفاق إيصال الدفع' : 'Record teacher payment proof and receipt'}
              </p>
            </div>
          </div>
          <button
            type="button"
            onClick={onClose}
            disabled={isSubmitting}
            className="w-8 h-8 rounded-xl bg-slate-100 dark:bg-slate-800 hover:bg-slate-200 dark:hover:bg-slate-700 text-slate-500 hover:text-slate-800 dark:hover:text-white flex items-center justify-center transition-colors cursor-pointer"
          >
            <X size={16} />
          </button>
        </div>
        <form onSubmit={handleSubmit} className="p-6 space-y-4 text-start">
          {errorMessage && (
            <div className="p-3.5 rounded-2xl bg-rose-50 dark:bg-rose-950/40 border border-rose-200 dark:border-rose-900/40 text-rose-700 dark:text-rose-300 text-xs font-bold flex items-center gap-2">
              <AlertCircle size={16} className="shrink-0" />
              <span>{errorMessage}</span>
            </div>
          )}
          {!teacher && (
            <div>
              <label className="text-xs font-extrabold text-slate-700 dark:text-slate-200 block mb-1.5">
                {isRtl ? 'اختر المعلم' : 'Select Teacher'} <span className="text-rose-500">*</span>
              </label>
              <div className="relative">
                <select
                  value={selectedTeacherId}
                  onChange={(e) => setSelectedTeacherId(e.target.value)}
                  required
                  className={`w-full py-2.5 ${isRtl ? 'pr-9 pl-3' : 'pl-9 pr-3'} rounded-2xl bg-slate-50 dark:bg-slate-800/80 border border-slate-200 dark:border-slate-700 text-xs font-bold text-slate-800 dark:text-white focus:outline-none focus:ring-2 focus:ring-[#0f7a6c]/30`}
                >
                  <option value="">{isRtl ? '-- اختر المعلم المستحق --' : '-- Select Teacher --'}</option>
                  {teachersList.map((tItem) => {
                    const tId = tItem.teacher_id || tItem.id || tItem._id || tItem.user_id
                    const tName = typeof tItem.name === 'object' ? (tItem.name?.ar || tItem.name?.en) : (tItem.name || 'معلم')
                    return (
                      <option key={tId} value={tId}>
                        {tName}
                      </option>
                    )
                  })}
                </select>
                <GraduationCap size={16} className={`absolute ${isRtl ? 'right-3' : 'left-3'} top-1/2 -translate-y-1/2 text-slate-400 pointer-events-none`} />
              </div>
            </div>
          )}
          <div>
            <div className="flex items-center justify-between mb-1.5">
              <label className="text-xs font-extrabold text-slate-700 dark:text-slate-200">
                {isRtl ? 'طريقة الاستلام المستخدمة' : 'Payment Method Used'} <span className="text-[10px] text-slate-400 font-normal">({isRtl ? 'اختياري - سيتم استخدام الافتراضية إن لم تحدد' : 'Optional - default will be used'})</span>
              </label>
              {isMethodsLoading && (
                <span className="text-[10px] text-[#0f7a6c] flex items-center gap-1 font-bold">
                  <Loader2 size={12} className="animate-spin" />
                  <span>{isRtl ? 'جاري جلب طرق الدفع...' : 'Loading methods...'}</span>
                </span>
              )}
            </div>
            {!selectedTeacherId ? (
              <div className="p-3.5 rounded-2xl bg-slate-50 dark:bg-slate-800/40 border border-dashed border-slate-200 dark:border-slate-700 text-center text-xs text-slate-400 font-medium">
                {isRtl ? 'اختر المعلم أولاً لعرض طرق الدفع المتاحة له' : 'Select a teacher first to view payment methods'}
              </div>
            ) : paymentMethods.length === 0 && !isMethodsLoading ? (
              <div className="p-3.5 rounded-2xl bg-amber-50 dark:bg-amber-950/30 border border-amber-200/80 dark:border-amber-900/40 text-amber-800 dark:text-amber-300 text-xs font-medium space-y-1">
                <span className="font-bold block">{isRtl ? 'تنبيه: لم يقم المعلم بإضافة طرق دفع بعد' : 'Notice: No payment methods added by teacher yet'}</span>
                <span className="text-[11px] block text-slate-500 dark:text-slate-400">
                  {isRtl ? 'يمكنك المتابعة بالتحويل المالي المباشر وكتابة التفاصيل في الملاحظات' : 'You can still proceed and enter details in notes'}
                </span>
              </div>
            ) : (
              <div className="space-y-2 max-h-48 overflow-y-auto p-1">
                {paymentMethods.map((m) => {
                  const mId = m.id || m._id
                  const isSelected = String(paymentMethodId) === String(mId)
                  const info = formatPaymentMethodInfo(m, isRtl)
                  return (
                    <div
                      key={mId}
                      onClick={() => setPaymentMethodId((prev) => (String(prev) === String(mId) ? '' : mId))}
                      className={`p-3 rounded-2xl border transition-all cursor-pointer flex items-center justify-between gap-3 ${
                        isSelected
                          ? 'border-[#0f7a6c] bg-teal-50/50 dark:bg-emerald-950/20 ring-1 ring-[#0f7a6c]'
                          : 'border-slate-100 dark:border-slate-800 hover:border-slate-200 bg-white dark:bg-slate-900'
                      }`}
                    >
                      <div className="flex items-center gap-3">
                        <div className="w-9 h-9 rounded-xl bg-slate-100 dark:bg-slate-800 flex items-center justify-center shrink-0">
                          {renderMethodIcon(info.iconType)}
                        </div>
                        <div>
                          <div className="flex items-center gap-1.5">
                            <span className="text-xs font-extrabold text-slate-800 dark:text-white">
                              {info.title}
                            </span>
                            <span className="text-[10px] px-2 py-0.5 rounded-full bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-400 font-bold">
                              {info.typeLabel}
                            </span>
                            {m.isDefault && (
                              <span className="text-[10px] px-1.5 py-0.5 rounded-md bg-amber-50 text-amber-700 border border-amber-200 font-bold inline-flex items-center gap-0.5">
                                <Star size={10} className="fill-current" />
                                {isRtl ? 'افتراضية' : 'Default'}
                              </span>
                            )}
                          </div>
                          {info.subtitle && (
                            <span className="font-mono text-[11px] text-slate-500 dark:text-slate-400 block" dir="ltr">
                              {info.subtitle}
                            </span>
                          )}
                          {info.accountHolder && (
                            <span className="text-[10px] text-slate-400 block">
                              {isRtl ? 'الاسم:' : 'Name:'} {info.accountHolder}
                            </span>
                          )}
                        </div>
                      </div>
                      <div className={`w-5 h-5 rounded-full border flex items-center justify-center shrink-0 ${isSelected ? 'border-[#0f7a6c] bg-[#0f7a6c] text-white' : 'border-slate-300 dark:border-slate-600'}`}>
                        {isSelected && <Check size={12} />}
                      </div>
                    </div>
                  )
                })}
              </div>
            )}
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            <div>
              <div className="flex items-center justify-between mb-1">
                <label className="text-xs font-extrabold text-slate-700 dark:text-slate-200">
                  {isRtl ? 'المبلغ المحول ($)' : 'Amount ($)'} <span className="text-rose-500">*</span>
                </label>
                {Number(dueEarnings) > 0 && (
                  <button
                    type="button"
                    onClick={handleSetFullDue}
                    className="text-[10px] font-bold text-[#0f7a6c] hover:underline cursor-pointer"
                  >
                    {isRtl ? 'كامل المستحق' : 'Full balance'} ({dueEarnings}$)
                  </button>
                )}
              </div>
              <input
                type="number"
                step="0.01"
                min="0.01"
                value={amount}
                onChange={(e) => setAmount(e.target.value)}
                placeholder="150.5"
                required
                className="w-full py-2.5 px-3 rounded-2xl bg-slate-50 dark:bg-slate-800/80 border border-slate-200 dark:border-slate-700 text-xs font-bold text-slate-800 dark:text-white focus:outline-none focus:ring-2 focus:ring-[#0f7a6c]/30"
              />
            </div>
            <div>
              <label className="text-xs font-extrabold text-slate-700 dark:text-slate-200 block mb-1">
                {isRtl ? 'رقم العملية المرجعي' : 'Reference Number'}
              </label>
              <input
                type="text"
                value={referenceNumber}
                onChange={(e) => setReferenceNumber(e.target.value)}
                placeholder="TX-1001"
                className="w-full py-2.5 px-3 rounded-2xl bg-slate-50 dark:bg-slate-800/80 border border-slate-200 dark:border-slate-700 text-xs font-mono text-slate-800 dark:text-white focus:outline-none focus:ring-2 focus:ring-[#0f7a6c]/30"
              />
            </div>
          </div>
          <div>
            <label className="text-xs font-extrabold text-slate-700 dark:text-slate-200 block mb-1">
              {isRtl ? 'ملاحظات التحويل' : 'Admin Notes'}
            </label>
            <input
              type="text"
              value={notes}
              onChange={(e) => setNotes(e.target.value)}
              placeholder={isRtl ? 'مثال: راتب شهر أكتوبر / دفعة مستحقات' : 'e.g. October payout'}
              className="w-full py-2.5 px-3 rounded-2xl bg-slate-50 dark:bg-slate-800/80 border border-slate-200 dark:border-slate-700 text-xs text-slate-800 dark:text-white focus:outline-none focus:ring-2 focus:ring-[#0f7a6c]/30"
            />
          </div>
          <div>
            <label className="text-xs font-extrabold text-slate-700 dark:text-slate-200 block mb-1">
              {isRtl ? 'صورة إيصال التحويل (إثبات الدفع)' : 'Proof of Payment Receipt'}
            </label>
            {proofPreviewUrl ? (
              <div className="relative rounded-2xl overflow-hidden border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-800/50 p-2 flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <img src={proofPreviewUrl} alt="Receipt preview" className="w-14 h-14 object-cover rounded-xl border border-slate-200 dark:border-slate-700" />
                  <div>
                    <span className="text-xs font-bold text-slate-800 dark:text-white block truncate max-w-xs">{proofImageFile?.name}</span>
                    <span className="text-[10px] text-slate-400 font-mono">{proofImageFile?.size ? `${Math.round(proofImageFile.size / 1024)} KB` : ''}</span>
                  </div>
                </div>
                <button
                  type="button"
                  onClick={handleRemoveFile}
                  className="p-2 rounded-xl text-rose-500 hover:bg-rose-50 dark:hover:bg-rose-950/40 transition-colors cursor-pointer"
                  title={isRtl ? 'حذف الإيصال' : 'Remove'}
                >
                  <Trash2 size={16} />
                </button>
              </div>
            ) : (
              <label className="flex flex-col items-center justify-center p-4 rounded-2xl border-2 border-dashed border-slate-200 dark:border-slate-700 hover:border-[#0f7a6c] dark:hover:border-emerald-500 bg-slate-50/60 dark:bg-slate-800/40 transition-colors cursor-pointer">
                <Upload size={22} className="text-[#0f7a6c] mb-1.5" />
                <span className="text-xs font-bold text-slate-700 dark:text-slate-200">
                  {isRtl ? 'اضغط لاختيار صورة إيصال التحويل' : 'Click to select receipt image'}
                </span>
                <span className="text-[10px] text-slate-400 mt-0.5">PNG, JPG, WEBP (حتى 5 ميجابايت)</span>
                <input type="file" accept="image/*" onChange={handleFileChange} className="hidden" />
              </label>
            )}
          </div>
          <div className="pt-3 border-t border-slate-100 dark:border-slate-800 flex items-center justify-end gap-2.5">
            <button
              type="button"
              onClick={onClose}
              disabled={isSubmitting}
              className="px-5 py-2.5 rounded-2xl border border-slate-200 dark:border-slate-700 text-xs font-bold text-slate-600 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors cursor-pointer"
            >
              {isRtl ? 'إلغاء' : 'Cancel'}
            </button>
            <button
              type="submit"
              disabled={isSubmitting || !selectedTeacherId || !amount}
              className="inline-flex items-center gap-2 px-6 py-2.5 rounded-2xl bg-[#0f7a6c] hover:bg-[#0c6156] disabled:opacity-50 text-white text-xs font-bold transition-all shadow-md cursor-pointer"
            >
              {isSubmitting ? (
                <>
                  <Loader2 size={15} className="animate-spin" />
                  <span>{isRtl ? 'جاري الإرسال...' : 'Submitting...'}</span>
                </>
              ) : (
                <>
                  <Send size={15} />
                  <span>{isRtl ? 'إرسال وتوثيق التحويل' : 'Submit Payout'}</span>
                </>
              )}
            </button>
          </div>
        </form>
      </div>
    </div>,
    document.body
  )
}


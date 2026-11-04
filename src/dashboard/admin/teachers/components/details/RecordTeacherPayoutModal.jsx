import React, { useState, useEffect } from 'react'
import { createPortal } from 'react-dom'
import {
  X,
  Upload,
  Coins,
  CreditCard,
  Building2,
  Send,
  Calendar,
  FileText,
  AlertCircle,
  CheckCircle2,
  Image as ImageIcon,
  Loader2,
  Trash2,
} from 'lucide-react'
import { toast } from 'react-hot-toast'
import { teachersApi } from '@/shared/services/api/teachersApi'

export default function RecordTeacherPayoutModal({
  isOpen,
  onClose,
  teacher,
  paymentMethods = [],
  dueEarnings = 0,
  isRtl = true,
  onSuccess,
}) {
  const [amount, setAmount] = useState('')
  const [methodId, setMethodId] = useState('')
  const [referenceNumber, setReferenceNumber] = useState('')
  const [paidAt, setPaidAt] = useState(() => new Date().toISOString().split('T')[0])
  const [notes, setNotes] = useState('')
  const [proofImageFile, setProofImageFile] = useState(null)
  const [proofPreviewUrl, setProofPreviewUrl] = useState('')
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [errorMessage, setErrorMessage] = useState('')

  const teacherId = teacher?.id || teacher?.teacher_id || teacher?._id
  const teacherName = typeof teacher?.name === 'object' && teacher?.name !== null
    ? (isRtl ? teacher.name.ar || teacher.name.en : teacher.name.en || teacher.name.ar)
    : (teacher?.name || 'المعلم')

  // Set default method when opening
  useEffect(() => {
    if (isOpen) {
      const defaultMethod = paymentMethods.find((m) => m.isDefault) || paymentMethods[0]
      if (defaultMethod) {
        setMethodId(defaultMethod.id || defaultMethod._id)
      }
      setAmount('')
      setReferenceNumber('')
      setPaidAt(new Date().toISOString().split('T')[0])
      setNotes('')
      setProofImageFile(null)
      setProofPreviewUrl('')
      setErrorMessage('')
    }
  }, [isOpen, paymentMethods])

  // Prevent background scroll
  useEffect(() => {
    if (!isOpen) return
    const original = document.body.style.overflow
    document.body.style.overflow = 'hidden'
    return () => {
      document.body.style.overflow = original
    }
  }, [isOpen])

  if (!isOpen) return null

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

    const numAmount = Number(amount)
    if (isNaN(numAmount) || numAmount <= 0) {
      setErrorMessage(isRtl ? 'يرجى إدخال مبلغ تحويل صحيح أكبر من صفر' : 'Please enter a valid amount greater than 0')
      return
    }

    if (!methodId) {
      setErrorMessage(isRtl ? 'يرجى اختيار طريقة دفع لتحويل المبلغ' : 'Please select a payment method')
      return
    }

    setIsSubmitting(true)
    try {
      const fd = new FormData()
      fd.append('amount', String(numAmount))
      fd.append('methodId', methodId)
      if (referenceNumber.trim()) fd.append('referenceNumber', referenceNumber.trim())
      if (paidAt) fd.append('paidAt', paidAt)
      if (notes.trim()) fd.append('notes', notes.trim())
      if (proofImageFile) {
        fd.append('proofImage', proofImageFile)
      }

      await teachersApi.createTeacherPayout(teacherId, fd)
      toast.success(
        isRtl
          ? 'تم تسجيل التحويل المالي وخصم المبلغ من مستحقات المعلم بنجاح'
          : 'Payout recorded and deducted from teacher balance successfully'
      )
      onSuccess?.()
      onClose()
    } catch (err) {
      console.error('Failed to record teacher payout:', err)
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
      className="fixed inset-0 w-screen h-screen min-h-screen z-[99999] flex items-center justify-center p-3 sm:p-4 bg-slate-950/80 backdrop-blur-sm animate-fadeIn overflow-y-auto"
      dir={isRtl ? 'rtl' : 'ltr'}
    >
      <div
        onClick={(e) => e.stopPropagation()}
        className="bg-white dark:bg-slate-900 w-full max-w-xl rounded-3xl shadow-2xl border border-slate-100 dark:border-slate-800 overflow-hidden flex flex-col my-auto animate-scaleUp"
      >
        {/* Modal Header */}
        <div className="px-6 py-5 border-b border-slate-100 dark:border-slate-800 flex items-center justify-between bg-slate-50/60 dark:bg-slate-800/40">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-2xl bg-emerald-50 dark:bg-emerald-950/40 text-emerald-600 dark:text-emerald-400 flex items-center justify-center font-bold">
              <Coins size={20} />
            </div>
            <div>
              <h3 className="font-extrabold text-base sm:text-lg text-slate-800 dark:text-white">
                تسجيل تحويل مالي يدوي لمعلم
              </h3>
              <p className="text-xs text-slate-400">
                المعلم: <strong className="text-slate-700 dark:text-slate-200">{teacherName}</strong>
              </p>
            </div>
          </div>
          <button
            type="button"
            onClick={onClose}
            disabled={isSubmitting}
            className="p-2 rounded-xl text-slate-400 hover:text-slate-600 dark:hover:text-white hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors cursor-pointer"
          >
            <X size={20} />
          </button>
        </div>

        {/* Modal Body / Form */}
        <form onSubmit={handleSubmit} className="p-6 space-y-5 overflow-y-auto max-h-[75vh]">
          {/* Due Balance Alert Strip */}
          <div className="p-4 rounded-2xl bg-amber-50/70 dark:bg-amber-950/30 border border-amber-200/80 dark:border-amber-800/40 flex items-center justify-between">
            <div className="flex items-center gap-2.5">
              <Coins size={18} className="text-amber-600 dark:text-amber-400 shrink-0" />
              <div>
                <span className="text-xs font-bold text-amber-900 dark:text-amber-200 block">
                  الرصيد المستحق للمعلم حالياً
                </span>
                <span className="text-[11px] text-amber-700 dark:text-amber-400">
                  سيتم خصم مبلغ التحويل تلقائياً من المستحقات
                </span>
              </div>
            </div>
            <div className="flex items-center gap-2">
              <span className="text-base font-black text-amber-600 dark:text-amber-400">
                {Number(dueEarnings || 0).toLocaleString('en-US')} $
              </span>
              {Number(dueEarnings || 0) > 0 && (
                <button
                  type="button"
                  onClick={handleSetFullDue}
                  className="px-2.5 py-1 rounded-xl text-[11px] font-bold bg-amber-600 text-white hover:bg-amber-700 transition-colors cursor-pointer"
                >
                  كامل المبلغ
                </button>
              )}
            </div>
          </div>

          {errorMessage && (
            <div className="p-3.5 rounded-2xl bg-rose-50 dark:bg-rose-950/40 border border-rose-200 dark:border-rose-800 text-rose-600 dark:text-rose-400 text-xs font-bold flex items-center gap-2">
              <AlertCircle size={16} className="shrink-0" />
              <span>{errorMessage}</span>
            </div>
          )}

          {/* Payment Method Selector */}
          <div className="space-y-1.5">
            <label className="text-xs font-bold text-slate-700 dark:text-slate-300 block">
              طريقة استلام المعلم <span className="text-rose-500">*</span>
            </label>
            {paymentMethods.length === 0 ? (
              <div className="p-3.5 rounded-2xl bg-slate-50 dark:bg-slate-800/60 border border-dashed border-slate-300 dark:border-slate-700 text-center text-xs text-slate-400 font-medium">
                لم يقم المعلم بإضافة أي طريقة دفع حتى الآن. يرجى التنسيق معه لإضافة حساب بنكي أو محفظة.
              </div>
            ) : (
              <select
                value={methodId}
                onChange={(e) => setMethodId(e.target.value)}
                required
                className="w-full px-4 py-2.5 rounded-2xl bg-slate-50 dark:bg-slate-800/80 border border-slate-200 dark:border-slate-700 text-xs font-bold text-slate-800 dark:text-white focus:outline-none focus:ring-2 focus:ring-emerald-500/30"
              >
                {paymentMethods.map((m) => {
                  const mId = m.id || m._id
                  const label = m.bankName
                    ? `${m.bankName} - ${m.accountHolderName || ''} (${m.accountNumber || m.iban || ''})`
                    : m.instapayAddress
                    ? `InstaPay: ${m.instapayAddress}`
                    : m.walletNumber
                    ? `محفظة (${m.walletProvider || 'إلكترونية'}): ${m.walletNumber}`
                    : m.paypalEmail
                    ? `PayPal: ${m.paypalEmail}`
                    : `${m.type || 'طريقة دفع'}`
                  return (
                    <option key={mId} value={mId}>
                      {label} {m.isDefault ? ' (الافتراضي ★)' : ''}
                    </option>
                  )
                })}
              </select>
            )}
          </div>

          {/* Amount & Reference Number Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="space-y-1.5">
              <label className="text-xs font-bold text-slate-700 dark:text-slate-300 block">
                مبلغ التحويل ($) <span className="text-rose-500">*</span>
              </label>
              <div className="relative">
                <input
                  type="number"
                  step="0.01"
                  min="0.1"
                  value={amount}
                  onChange={(e) => setAmount(e.target.value)}
                  placeholder="0.00"
                  required
                  className="w-full px-4 py-2.5 rounded-2xl bg-slate-50 dark:bg-slate-800/80 border border-slate-200 dark:border-slate-700 text-xs font-black text-slate-800 dark:text-white focus:outline-none focus:ring-2 focus:ring-emerald-500/30"
                />
                <span className="absolute left-3 top-1/2 -translate-y-1/2 text-xs font-black text-slate-400">
                  $
                </span>
              </div>
            </div>

            <div className="space-y-1.5">
              <label className="text-xs font-bold text-slate-700 dark:text-slate-300 block">
                رقم الحوالة / المرجع
              </label>
              <input
                type="text"
                value={referenceNumber}
                onChange={(e) => setReferenceNumber(e.target.value)}
                placeholder="مثال: TX-1001 أو رقم الإيصال"
                className="w-full px-4 py-2.5 rounded-2xl bg-slate-50 dark:bg-slate-800/80 border border-slate-200 dark:border-slate-700 text-xs font-bold text-slate-800 dark:text-white focus:outline-none focus:ring-2 focus:ring-emerald-500/30"
              />
            </div>
          </div>

          {/* Date of Payout */}
          <div className="space-y-1.5">
            <label className="text-xs font-bold text-slate-700 dark:text-slate-300 block">
              تاريخ التحويل
            </label>
            <input
              type="date"
              value={paidAt}
              onChange={(e) => setPaidAt(e.target.value)}
              className="w-full px-4 py-2.5 rounded-2xl bg-slate-50 dark:bg-slate-800/80 border border-slate-200 dark:border-slate-700 text-xs font-bold text-slate-800 dark:text-white focus:outline-none focus:ring-2 focus:ring-emerald-500/30"
            />
          </div>

          {/* Proof Image Upload */}
          <div className="space-y-1.5">
            <label className="text-xs font-bold text-slate-700 dark:text-slate-300 block">
              صورة إثبات التحويل / الإيصال البنكي
            </label>
            {proofPreviewUrl ? (
              <div className="relative rounded-2xl overflow-hidden border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-800 p-2 flex items-center justify-between gap-3">
                <div className="flex items-center gap-3">
                  <img
                    src={proofPreviewUrl}
                    alt="Proof preview"
                    className="w-14 h-14 object-cover rounded-xl border border-slate-200 dark:border-slate-700"
                  />
                  <div className="text-xs">
                    <p className="font-bold text-slate-800 dark:text-white truncate max-w-[200px]">
                      {proofImageFile?.name || 'إيصال التحويل'}
                    </p>
                    <p className="text-[11px] text-slate-400">
                      {proofImageFile?.size ? `${Math.round(proofImageFile.size / 1024)} KB` : ''}
                    </p>
                  </div>
                </div>
                <button
                  type="button"
                  onClick={handleRemoveFile}
                  className="p-2 rounded-xl text-rose-500 hover:bg-rose-50 dark:hover:bg-rose-950/40 transition-colors cursor-pointer"
                  title="حذف الصورة"
                >
                  <Trash2 size={16} />
                </button>
              </div>
            ) : (
              <label className="flex flex-col items-center justify-center p-6 border-2 border-dashed border-slate-200 dark:border-slate-700 rounded-2xl hover:border-emerald-500/60 dark:hover:border-emerald-500/60 bg-slate-50/50 dark:bg-slate-800/40 transition-colors cursor-pointer group">
                <Upload size={22} className="text-slate-400 group-hover:text-emerald-500 transition-colors mb-2" />
                <span className="text-xs font-bold text-slate-600 dark:text-slate-300">
                  اضغط لاختيار صورة إشعار أو إيصال التحويل
                </span>
                <span className="text-[11px] text-slate-400 mt-0.5">
                  يدعم صيغ JPG, PNG, WEBP
                </span>
                <input
                  type="file"
                  accept="image/*"
                  onChange={handleFileChange}
                  className="hidden"
                />
              </label>
            )}
          </div>

          {/* Notes */}
          <div className="space-y-1.5">
            <label className="text-xs font-bold text-slate-700 dark:text-slate-300 block">
              ملاحظات أو بيان التحويل
            </label>
            <textarea
              rows={2}
              value={notes}
              onChange={(e) => setNotes(e.target.value)}
              placeholder="مثال: تحويل مستحقات شهر أكتوبر 2026..."
              className="w-full px-4 py-2.5 rounded-2xl bg-slate-50 dark:bg-slate-800/80 border border-slate-200 dark:border-slate-700 text-xs font-medium text-slate-800 dark:text-white focus:outline-none focus:ring-2 focus:ring-emerald-500/30 resize-none"
            />
          </div>

          {/* Modal Actions */}
          <div className="pt-3 border-t border-slate-100 dark:border-slate-800 flex items-center justify-end gap-3">
            <button
              type="button"
              onClick={onClose}
              disabled={isSubmitting}
              className="px-5 py-2.5 rounded-2xl bg-slate-100 hover:bg-slate-200 dark:bg-slate-800 dark:hover:bg-slate-700 text-slate-700 dark:text-slate-200 text-xs font-bold transition-all cursor-pointer"
            >
              إلغاء
            </button>

            <button
              type="submit"
              disabled={isSubmitting || paymentMethods.length === 0}
              className="flex items-center gap-2 px-6 py-2.5 rounded-2xl bg-[#0f7a6c] hover:bg-[#0c6156] text-white text-xs font-extrabold shadow-md shadow-[#0f7a6c]/20 transition-all cursor-pointer disabled:opacity-50"
            >
              {isSubmitting ? (
                <>
                  <Loader2 size={16} className="animate-spin" />
                  <span>جاري تسجيل التحويل...</span>
                </>
              ) : (
                <>
                  <Send size={15} />
                  <span>تسجيل التحويل وتأكيد الخصم</span>
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


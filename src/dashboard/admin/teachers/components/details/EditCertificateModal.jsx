import { useState, useEffect, useRef } from 'react'
import { X, FileText, Upload, Loader2, Check, ExternalLink, RefreshCw } from 'lucide-react'
import { toast } from 'react-hot-toast'
import { teachersApi } from '@/shared/services/api/teachersApi'

export default function EditCertificateModal({
  isOpen,
  onClose,
  teacherId,
  certificate,
  isRtl,
  onSuccess
}) {
  const [nameAr, setNameAr] = useState('')
  const [nameEn, setNameEn] = useState('')
  const [replacementFile, setReplacementFile] = useState(null)
  const [replacementPreview, setReplacementPreview] = useState(null)
  const [isSubmitting, setIsSubmitting] = useState(false)
  const fileInputRef = useRef(null)

  useEffect(() => {
    if (certificate) {
      const curNameAr = certificate.nameAr || (typeof certificate.name === 'object' ? certificate.name?.ar : certificate.name) || ''
      const curNameEn = certificate.nameEn || (typeof certificate.name === 'object' ? certificate.name?.en : '') || ''
      setNameAr(curNameAr)
      setNameEn(curNameEn)
      setReplacementFile(null)
      setReplacementPreview(null)
    }
  }, [certificate, isOpen])

  if (!isOpen || !certificate) return null

  const certId = certificate.id || certificate._id
  const currentFile = certificate.file || certificate.image || certificate.url

  const handleFileChange = (e) => {
    const file = e.target.files?.[0]
    if (!file) return

    setReplacementFile(file)
    if (file.type.startsWith('image/')) {
      const url = URL.createObjectURL(file)
      setReplacementPreview(url)
    } else {
      setReplacementPreview(null)
    }
  }

  const handleSubmit = async (e) => {
    e.preventDefault()

    if (!nameAr.trim()) {
      toast.error(isRtl ? 'يرجى إدخال اسم الشهادة بالعربية' : 'Please enter certificate name in Arabic')
      return
    }

    try {
      setIsSubmitting(true)

      const payload = {
        name: {
          ar: nameAr.trim(),
          en: (nameEn || nameAr).trim()
        },
        nameAr: nameAr.trim(),
        nameEn: (nameEn || nameAr).trim(),
      }

      if (replacementFile) {
        payload.file = replacementFile
        payload.image = replacementFile
      }

      await teachersApi.updateTeacherCertificate(teacherId, certId, payload)
      toast.success(isRtl ? 'تم تحديث بيانات الشهادة بنجاح!' : 'Certificate updated successfully!')
      if (onSuccess) onSuccess()
      onClose()
    } catch (err) {
      const backendMsg = err.response?.data?.message
      const errorText = Array.isArray(backendMsg)
        ? backendMsg.join(' - ')
        : (backendMsg || (isRtl ? 'حدث خطأ أثناء تعديل الشهادة' : 'Failed to update certificate'))
      toast.error(errorText)
      console.error('Failed to update certificate:', err)
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/60 backdrop-blur-sm animate-fadeIn"
      dir={isRtl ? 'rtl' : 'ltr'}
      onClick={onClose}
    >
      <div
        className="bg-white dark:bg-slate-900 rounded-3xl max-w-lg w-full shadow-2xl border border-slate-100 dark:border-slate-800 overflow-hidden transform transition-all text-start"
        onClick={(e) => e.stopPropagation()}
      >
         <div className="bg-[#005953] px-6 py-4 flex items-center justify-between text-white">
          <div className="flex items-center gap-2.5">
            <div className="p-2 bg-white/10 rounded-xl">
              <RefreshCw size={18} />
            </div>
            <div>
              <h3 className="text-base font-bold">
                {isRtl ? 'تعديل الشهادة أو استبدال الملف' : 'Update Certificate / Replace File'}
              </h3>
              <p className="text-xs text-emerald-100 font-medium">
                {certificate.name || (isRtl ? 'تعديل وثيقة المعلم' : 'Edit Teacher Document')}
              </p>
            </div>
          </div>
          <button
            type="button"
            onClick={onClose}
            className="p-1.5 rounded-full hover:bg-white/20 transition-colors cursor-pointer"
          >
            <X size={18} />
          </button>
        </div>

         <form onSubmit={handleSubmit} className="p-6 space-y-4">
          <div className="space-y-1.5">
            <label className="block text-xs font-bold text-slate-700 dark:text-slate-300">
              {isRtl ? 'اسم الشهادة (بالعربية)' : 'Certificate Name (Arabic)'} *
            </label>
            <input
              type="text"
              required
              value={nameAr}
              onChange={(e) => setNameAr(e.target.value)}
              placeholder={isRtl ? 'مثال: إجازة متقدمة في متن الجزرية' : 'e.g. Al-Jazariyyah Certification'}
              className="w-full px-4 py-2.5 rounded-2xl bg-slate-50 dark:bg-slate-850 border border-slate-200 dark:border-slate-750 text-slate-900 dark:text-white font-semibold text-sm focus:outline-none focus:ring-2 focus:ring-[#005953] transition-all"
            />
          </div>

          <div className="space-y-1.5">
            <label className="block text-xs font-bold text-slate-700 dark:text-slate-300">
              {isRtl ? 'اسم الشهادة (بالإنجليزية - اختياري)' : 'Certificate Name (English - Optional)'}
            </label>
            <input
              type="text"
              value={nameEn}
              onChange={(e) => setNameEn(e.target.value)}
              placeholder="e.g. Advanced Al-Jazariyyah Certification"
              className="w-full px-4 py-2.5 rounded-2xl bg-slate-50 dark:bg-slate-850 border border-slate-200 dark:border-slate-750 text-slate-900 dark:text-white font-semibold text-sm focus:outline-none focus:ring-2 focus:ring-[#005953] transition-all"
            />
          </div>

           {currentFile && (
            <div className="p-3 bg-slate-50 dark:bg-slate-850 rounded-2xl border border-slate-200 dark:border-slate-800 flex items-center justify-between">
              <div className="flex items-center gap-2.5 min-w-0">
                <FileText size={18} className="text-amber-500 shrink-0" />
                <div className="min-w-0">
                  <span className="block text-[11px] font-bold text-slate-500">
                    {isRtl ? 'الملف الحالي:' : 'Current File:'}
                  </span>
                  <span className="block text-xs font-extrabold text-slate-800 dark:text-slate-200 truncate max-w-[220px]">
                    {certificate.name || 'ملف الشهادة'}
                  </span>
                </div>
              </div>
              <a
                href={currentFile}
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-1 px-3 py-1.5 bg-white dark:bg-slate-800 hover:bg-slate-100 dark:hover:bg-slate-700 text-[#005953] dark:text-emerald-400 rounded-xl text-xs font-bold border border-slate-200 dark:border-slate-700 transition-colors"
              >
                <span>{isRtl ? 'معاينة' : 'Preview'}</span>
                <ExternalLink size={12} />
              </a>
            </div>
          )}

           <div className="space-y-1.5">
            <label className="block text-xs font-bold text-slate-700 dark:text-slate-300">
              {isRtl ? 'استبدال الملف بملف جديد (اختياري)' : 'Replace With New File (Optional)'}
            </label>
            <div
              onClick={() => fileInputRef.current?.click()}
              className={`border-2 border-dashed rounded-2xl p-4 text-center cursor-pointer transition-all ${
                replacementFile
                  ? 'border-emerald-500 bg-emerald-50/20 dark:bg-emerald-950/20'
                  : 'border-slate-200 dark:border-slate-800 hover:border-[#005953] bg-slate-50/50 dark:bg-slate-950/20'
              }`}
            >
              <input
                ref={fileInputRef}
                type="file"
                accept=".pdf,.png,.jpg,.jpeg,.webp"
                className="hidden"
                onChange={handleFileChange}
              />

              {replacementFile ? (
                <div className="flex items-center justify-center gap-3">
                  {replacementPreview ? (
                    <img
                      src={replacementPreview}
                      alt="preview"
                      className="w-12 h-12 rounded-xl object-cover border border-emerald-300"
                    />
                  ) : (
                    <div className="p-3 bg-emerald-100 dark:bg-emerald-900/40 text-emerald-700 dark:text-emerald-300 rounded-xl">
                      <FileText size={24} />
                    </div>
                  )}
                  <div className="text-start">
                    <p className="text-xs font-bold text-slate-800 dark:text-slate-200 truncate max-w-[200px]">
                      {replacementFile.name}
                    </p>
                    <p className="text-[10px] text-emerald-600 dark:text-emerald-400 font-bold">
                      {isRtl ? 'ملف الاستبدال جاهز' : 'Replacement file ready'} ({(replacementFile.size / (1024 * 1024)).toFixed(2)} MB)
                    </p>
                  </div>
                </div>
              ) : (
                <div className="space-y-1 py-1">
                  <Upload size={20} className="mx-auto text-slate-400" />
                  <p className="text-xs font-bold text-slate-600 dark:text-slate-300">
                    {isRtl ? 'اضغط هنا لرفع ملف بديل' : 'Click here to upload replacement file'}
                  </p>
                  <p className="text-[10px] text-slate-400">
                    {isRtl ? 'اتركه فارغاً إذا كنت تريد تعديل الاسم فقط' : 'Leave empty to keep current file'}
                  </p>
                </div>
              )}
            </div>
          </div>

           <div className="flex items-center justify-end gap-3 pt-3 border-t border-slate-100 dark:border-slate-800">
            <button
              type="button"
              onClick={onClose}
              disabled={isSubmitting}
              className="px-5 py-2.5 rounded-xl text-xs font-bold text-slate-600 dark:text-slate-400 hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors cursor-pointer"
            >
              {isRtl ? 'إلغاء' : 'Cancel'}
            </button>
            <button
              type="submit"
              disabled={isSubmitting}
              className="flex items-center gap-2 px-6 py-2.5 bg-[#005953] hover:bg-[#004742] text-white rounded-xl text-xs font-bold shadow-md shadow-[#005953]/20 active:scale-95 transition-all cursor-pointer disabled:opacity-50"
            >
              {isSubmitting ? (
                <>
                  <Loader2 size={15} className="animate-spin" />
                  <span>{isRtl ? 'جاري الحفظ...' : 'Saving...'}</span>
                </>
              ) : (
                <>
                  <Check size={15} />
                  <span>{isRtl ? 'حفظ التعديلات' : 'Save Changes'}</span>
                </>
              )}
            </button>
          </div>
        </form>
      </div>
    </div>
  )
}

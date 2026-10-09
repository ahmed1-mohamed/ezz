import { useState, useRef } from 'react'
import { X, FileText, Upload, Loader2, Check, FileCheck } from 'lucide-react'
import { toast } from 'react-hot-toast'
import { teachersApi } from '@/shared/services/api/teachersApi'

export default function AddCertificateModal({
  isOpen,
  onClose,
  teacherId,
  isRtl,
  onSuccess
}) {
  const [nameAr, setNameAr] = useState('')
  const [nameEn, setNameEn] = useState('')
  const [selectedFile, setSelectedFile] = useState(null)
  const [filePreview, setFilePreview] = useState(null)
  const [isSubmitting, setIsSubmitting] = useState(false)
  const fileInputRef = useRef(null)

  if (!isOpen) return null

  const handleFileChange = (e) => {
    const file = e.target.files?.[0]
    if (!file) return

    setSelectedFile(file)
    if (file.type.startsWith('image/')) {
      const url = URL.createObjectURL(file)
      setFilePreview(url)
    } else {
      setFilePreview(null)
    }
  }

  const handleReset = () => {
    setNameAr('')
    setNameEn('')
    setSelectedFile(null)
    if (filePreview) URL.revokeObjectURL(filePreview)
    setFilePreview(null)
  }

  const handleSubmit = async (e) => {
    e.preventDefault()

    if (!nameAr.trim()) {
      toast.error(isRtl ? 'يرجى إدخال اسم الشهادة بالعربية' : 'Please enter certificate name in Arabic')
      return
    }

    if (!selectedFile) {
      toast.error(isRtl ? 'يرجى اختيار ملف الشهادة' : 'Please choose a certificate file')
      return
    }

    try {
      setIsSubmitting(true)
      await teachersApi.addTeacherCertificate(teacherId, {
        name: {
          ar: nameAr.trim(),
          en: (nameEn || nameAr).trim()
        },
        nameAr: nameAr.trim(),
        nameEn: (nameEn || nameAr).trim(),
        file: selectedFile,
        image: selectedFile
      })

      toast.success(isRtl ? 'تمت إضافة الشهادة بنجاح!' : 'Certificate added successfully!')
      handleReset()
      if (onSuccess) onSuccess()
      onClose()
    } catch (err) {
      const backendMsg = err.response?.data?.message
      const errorText = Array.isArray(backendMsg)
        ? backendMsg.join(' - ')
        : (backendMsg || (isRtl ? 'حدث خطأ أثناء إضافة الشهادة' : 'Failed to add certificate'))
      toast.error(errorText)
      console.error('Failed to add certificate:', err)
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
              <FileText size={18} />
            </div>
            <div>
              <h3 className="text-base font-bold">
                {isRtl ? 'إضافة شهادة أو إجازة للمعلم' : 'Add Teacher Certificate'}
              </h3>
              <p className="text-xs text-emerald-100 font-medium">
                {isRtl ? 'رفع وثيقة جديدة لملف المعلم الأكاديمي' : 'Upload certificate to teacher portfolio'}
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
              placeholder={isRtl ? 'مثال: إجازة في متن الجزرية' : 'e.g. Al-Jazariyyah Certification'}
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
              placeholder="e.g. Al-Jazariyyah Certification"
              className="w-full px-4 py-2.5 rounded-2xl bg-slate-50 dark:bg-slate-850 border border-slate-200 dark:border-slate-750 text-slate-900 dark:text-white font-semibold text-sm focus:outline-none focus:ring-2 focus:ring-[#005953] transition-all"
            />
          </div>

           <div className="space-y-1.5">
            <label className="block text-xs font-bold text-slate-700 dark:text-slate-300">
              {isRtl ? 'ملف الشهادة (PDF أو صورة)' : 'Certificate File (PDF or Image)'} *
            </label>
            <div
              onClick={() => fileInputRef.current?.click()}
              className={`border-2 border-dashed rounded-2xl p-4 text-center cursor-pointer transition-all ${
                selectedFile
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

              {selectedFile ? (
                <div className="flex items-center justify-center gap-3">
                  {filePreview ? (
                    <img
                      src={filePreview}
                      alt="preview"
                      className="w-12 h-12 rounded-xl object-cover border border-emerald-300"
                    />
                  ) : (
                    <div className="p-3 bg-emerald-100 dark:bg-emerald-900/40 text-emerald-700 dark:text-emerald-300 rounded-xl">
                      <FileCheck size={24} />
                    </div>
                  )}
                  <div className="text-start">
                    <p className="text-xs font-bold text-slate-800 dark:text-slate-200 truncate max-w-[200px]">
                      {selectedFile.name}
                    </p>
                    <p className="text-[10px] text-slate-400 font-semibold">
                      {(selectedFile.size / (1024 * 1024)).toFixed(2)} MB
                    </p>
                  </div>
                </div>
              ) : (
                <div className="space-y-1.5 py-2">
                  <Upload size={24} className="mx-auto text-slate-400" />
                  <p className="text-xs font-bold text-slate-700 dark:text-slate-300">
                    {isRtl ? 'اضغط لاختيار ملف الشهادة' : 'Click to choose certificate file'}
                  </p>
                  <p className="text-[10px] text-slate-400">
                    PDF, PNG, JPG, WEBP (Max 10MB)
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
                  <span>{isRtl ? 'جاري الرفع...' : 'Uploading...'}</span>
                </>
              ) : (
                <>
                  <Check size={15} />
                  <span>{isRtl ? 'إضافة الشهادة' : 'Add Certificate'}</span>
                </>
              )}
            </button>
          </div>
        </form>
      </div>
    </div>
  )
}

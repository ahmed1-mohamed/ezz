import { useState, useRef } from 'react'
import { createPortal } from 'react-dom'
import { useTranslation } from 'react-i18next'
import { X, Upload, File, Link as LinkIcon, Users, GraduationCap, Eye } from 'lucide-react'
import { toast } from 'react-hot-toast'

export default function FileModal({ isOpen, onClose, isSaving, onSubmit, editingFile = null }) {
  const { i18n } = useTranslation()
  const isRtl = i18n.language.startsWith('ar')
  const [resourceType, setResourceType] = useState('file')
  const [nameAr, setNameAr] = useState('')
  const [nameEn, setNameEn] = useState('')
  const [url, setUrl] = useState('')
  const [file, setFile] = useState(null)
  const [showToStudents, setShowToStudents] = useState(true)
  const [showToTeachers, setShowToTeachers] = useState(true)
  const fileInputRef = useRef(null)
  const [prevOpen, setPrevOpen] = useState(isOpen)
  if (prevOpen !== isOpen) {
    setPrevOpen(isOpen)
    if (isOpen) {
      if (editingFile) {
        setResourceType(editingFile.type === 'link' || editingFile.isLink ? 'link' : 'file')
        setNameAr(typeof editingFile.name === 'object' ? editingFile.name?.ar || '' : editingFile.name || '')
        setNameEn(typeof editingFile.name === 'object' ? editingFile.name?.en || '' : '')
        setUrl(editingFile.url || editingFile.link || '')
        setFile(null)
        setShowToStudents(editingFile.showToStudents !== false)
        setShowToTeachers(editingFile.showToTeachers !== false)
      } else {
        setResourceType('file')
        setNameAr('')
        setNameEn('')
        setUrl('')
        setFile(null)
        setShowToStudents(true)
        setShowToTeachers(true)
      }
    }
  }
  if (!isOpen || typeof document === 'undefined') return null
  const formatUrl = (rawUrl) => {
    let trimmed = (rawUrl || '').trim()
    if (!trimmed) return ''
    if (!/^https?:\/\//i.test(trimmed)) {
      trimmed = `https://${trimmed}`
    }
    return trimmed
  }
  const handleSubmit = (e) => {
    e.preventDefault()
    const cleanNameAr = nameAr.trim() || nameEn.trim()
    const cleanNameEn = nameEn.trim() || nameAr.trim()
    if (!cleanNameAr && !cleanNameEn) {
      toast.error(isRtl ? 'يرجى إدخال عنوان المحتوى' : 'Please enter resource title')
      return
    }
    if (resourceType === 'file') {
      if (!file && !editingFile) {
        toast.error(isRtl ? 'يرجى اختيار ملف' : 'Please select a file')
        return
      }
      const formData = new FormData()
      formData.append('type', 'file')
      formData.append('name[ar]', cleanNameAr)
      formData.append('name[en]', cleanNameEn)
      if (file) formData.append('file', file)
      formData.append('showToStudents', String(showToStudents))
      formData.append('showToTeachers', String(showToTeachers))
      onSubmit(formData, {
        showToStudents,
        showToTeachers,
        nameAr: cleanNameAr,
        nameEn: cleanNameEn,
        type: 'file',
        file,
      })
      return
    }
    if (resourceType === 'link') {
      const normalizedUrl = formatUrl(url)
      if (!normalizedUrl) {
        toast.error(isRtl ? 'يرجى إدخال رابط صالح' : 'Please enter a valid URL')
        return
      }
      const formData = new FormData()
      formData.append('type', 'link')
      formData.append('name[ar]', cleanNameAr)
      formData.append('name[en]', cleanNameEn)
      formData.append('url', normalizedUrl)
      formData.append('showToStudents', String(showToStudents))
      formData.append('showToTeachers', String(showToTeachers))
      onSubmit(formData, {
        showToStudents,
        showToTeachers,
        nameAr: cleanNameAr,
        nameEn: cleanNameEn,
        type: 'link',
        url: normalizedUrl,
      })
    }
  }
  const modalTitle = editingFile
    ? (isRtl ? 'تعديل محتوى / مصدر الوحدة' : 'Edit Unit Resource')
    : (isRtl ? 'إضافة محتوى / مصادر للوحدة' : 'Add Unit Content / Resource')
  return createPortal(
    <div className="fixed inset-0 w-screen h-screen min-h-screen z-[99999] flex items-center justify-center p-3 sm:p-5 bg-black/80 backdrop-blur-sm animate-fade-in">
      <div className="bg-white dark:bg-slate-900 rounded-3xl shadow-2xl w-full max-w-lg max-h-[92vh] overflow-y-auto flex flex-col border border-slate-100 dark:border-slate-800" dir={isRtl ? 'rtl' : 'ltr'}>
        <div className="p-5 border-b border-slate-100 dark:border-slate-800/60 flex items-center justify-between sticky top-0 bg-white/95 dark:bg-slate-900/95 backdrop-blur-sm z-10">
          <h2 className="text-lg font-bold text-slate-800 dark:text-white">
            {modalTitle}
          </h2>
          <button
            type="button"
            onClick={onClose}
            className="p-2 text-slate-400 hover:text-slate-600 bg-slate-50 rounded-xl hover:bg-slate-100 dark:bg-slate-800 dark:hover:bg-slate-700 transition-colors"
          >
            <X size={20} />
          </button>
        </div>
        <form onSubmit={handleSubmit} className="p-6 space-y-5 text-start">
          <div className="flex bg-slate-100 dark:bg-slate-800/60 p-1 rounded-2xl gap-1">
            <button
              type="button"
              onClick={() => setResourceType('file')}
              className={`flex-1 py-2 rounded-xl text-xs font-bold transition-all flex items-center justify-center gap-2 cursor-pointer ${resourceType === 'file' ? 'bg-white dark:bg-slate-700 text-[#0f7a6c] dark:text-emerald-400 shadow-sm' : 'text-slate-500 hover:text-slate-700 dark:text-slate-400'}`}
            >
              <File size={16} />
              {isRtl ? 'ملف (PDF / صورة)' : 'File (PDF / Image)'}
            </button>
            <button
              type="button"
              onClick={() => setResourceType('link')}
              className={`flex-1 py-2 rounded-xl text-xs font-bold transition-all flex items-center justify-center gap-2 cursor-pointer ${resourceType === 'link' ? 'bg-white dark:bg-slate-700 text-[#0f7a6c] dark:text-emerald-400 shadow-sm' : 'text-slate-500 hover:text-slate-700 dark:text-slate-400'}`}
            >
              <LinkIcon size={16} />
              {isRtl ? 'رابط خارجي' : 'External Link'}
            </button>
          </div>
          {resourceType === 'file' ? (
            <>
              <div
                onClick={() => fileInputRef.current?.click()}
                className={`w-full h-32 rounded-2xl border-2 border-dashed flex flex-col items-center justify-center cursor-pointer transition-colors ${file ? 'border-[#0f7a6c] bg-[#0f7a6c]/5' : 'border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-800/50 hover:bg-slate-100 dark:hover:bg-slate-800'}`}
              >
                {file ? (
                  <div className="flex flex-col items-center text-[#0f7a6c]">
                    <File size={32} className="mb-2" />
                    <span className="text-sm font-bold line-clamp-1 px-4">{file.name}</span>
                    <span className="text-xs opacity-70 mt-1">{(file.size / 1024 / 1024).toFixed(2)} MB</span>
                  </div>
                ) : editingFile && !file ? (
                  <div className="flex flex-col items-center text-slate-500 dark:text-slate-400">
                    <File size={28} className="mb-1 text-[#0f7a6c]" />
                    <span className="text-xs font-bold">{isRtl ? 'الملف الحالي مرفوع بالفعل' : 'Current file is attached'}</span>
                    <span className="text-[11px] text-slate-400 mt-1">{isRtl ? 'اضغط إذا كنت تريد استبداله بملف جديد' : 'Click to replace with a new file'}</span>
                  </div>
                ) : (
                  <div className="flex flex-col items-center text-slate-400">
                    <Upload size={32} className="mb-2" />
                    <span className="text-sm font-semibold">{isRtl ? 'اضغط لاختيار ملف' : 'Click to select a file'}</span>
                  </div>
                )}
              </div>
              <input
                type="file"
                ref={fileInputRef}
                onChange={(e) => e.target.files?.[0] && setFile(e.target.files[0])}
                className="hidden"
              />
            </>
          ) : (
            <div>
              <label className="block text-xs font-bold text-slate-500 dark:text-slate-400 mb-1.5">
                {isRtl ? 'الرابط (URL)' : 'Resource URL'} <span className="text-red-500">*</span>
              </label>
              <div className="relative">
                <input
                  type="text"
                  inputMode="url"
                  required
                  value={url}
                  onChange={(e) => setUrl(e.target.value)}
                  onBlur={(e) => {
                    if (e.target.value.trim()) {
                      setUrl(formatUrl(e.target.value))
                    }
                  }}
                  className="w-full bg-[#f3f7f6] dark:bg-slate-950 border border-transparent focus:border-[#0f7a6c]/20 focus:bg-white dark:focus:bg-slate-900 text-slate-800 dark:text-slate-100 rounded-xl py-2.5 px-4 outline-none transition-all text-sm font-mono"
                  placeholder="https://drive.google.com/... or https://..."
                  dir="ltr"
                />
              </div>
              <p className="text-[11px] text-slate-400 mt-1">
                {isRtl ? 'مثال: رابط Google Drive، YouTube، أو أي موقع خارجي' : 'Example: Google Drive, YouTube, or any external website'}
              </p>
            </div>
          )}
          <div>
            <label className="block text-xs font-bold text-slate-500 dark:text-slate-400 mb-1.5">
              {isRtl ? 'عنوان المحتوى (عربي)' : 'Title (Arabic)'} <span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              required
              value={nameAr}
              onChange={(e) => setNameAr(e.target.value)}
              className="w-full bg-[#f3f7f6] dark:bg-slate-950 border border-transparent focus:border-[#0f7a6c]/20 focus:bg-white dark:focus:bg-slate-900 text-slate-800 dark:text-slate-100 rounded-xl py-2.5 px-4 outline-none transition-all text-sm"
              placeholder={isRtl ? 'مثال: كتاب الشرح أو رابط المحاضرة' : 'e.g. Explanation Book or Lecture Link'}
            />
          </div>
          <div>
            <label className="block text-xs font-bold text-slate-500 dark:text-slate-400 mb-1.5">
              {isRtl ? 'عنوان المحتوى (إنجليزي)' : 'Title (English)'}
            </label>
            <input
              type="text"
              value={nameEn}
              onChange={(e) => setNameEn(e.target.value)}
              className="w-full bg-[#f3f7f6] dark:bg-slate-950 border border-transparent focus:border-[#0f7a6c]/20 focus:bg-white dark:focus:bg-slate-900 text-slate-800 dark:text-slate-100 rounded-xl py-2.5 px-4 outline-none transition-all text-sm"
              placeholder={isRtl ? 'e.g. Explanation Book' : 'e.g. Explanation Book'}
            />
          </div>
          <div className="bg-slate-50 dark:bg-slate-800/60 p-4 rounded-2xl border border-slate-200/80 dark:border-slate-700/80 space-y-3">
            <div className="flex items-center gap-2">
              <Eye size={16} className="text-[#0f7a6c] dark:text-emerald-400" />
              <span className="text-xs font-bold text-slate-800 dark:text-slate-100">
                {isRtl ? 'صلاحيات ظهور الملف' : 'File Visibility Permissions'}
              </span>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-0.5">
              <label
                className={`flex items-center justify-between p-3 rounded-xl border transition-all cursor-pointer ${
                  showToStudents
                    ? 'bg-emerald-50/80 dark:bg-emerald-950/30 border-emerald-300 dark:border-emerald-800 text-emerald-900 dark:text-emerald-200 shadow-2xs'
                    : 'bg-white dark:bg-slate-900 border-slate-200 dark:border-slate-700 text-slate-500 dark:text-slate-400 opacity-80'
                }`}
              >
                <div className="flex items-center gap-2.5 min-w-0">
                  <div className={`w-8 h-8 rounded-lg flex items-center justify-center shrink-0 ${
                    showToStudents
                      ? 'bg-emerald-500/10 text-emerald-600 dark:text-emerald-400'
                      : 'bg-slate-100 dark:bg-slate-800 text-slate-400'
                  }`}>
                    <Users size={16} />
                  </div>
                  <div className="min-w-0">
                    <span className="text-xs font-bold block truncate">
                      {isRtl ? 'يظهر للطلاب' : 'Show to Students'}
                    </span>
                    <span className="text-[10px] text-slate-400 block truncate">
                      {isRtl ? 'إتاحة الملف بحساب الطالب' : 'Visible in student portal'}
                    </span>
                  </div>
                </div>
                <input
                  type="checkbox"
                  checked={showToStudents}
                  onChange={(e) => setShowToStudents(e.target.checked)}
                  className="w-4 h-4 accent-[#0f7a6c] rounded cursor-pointer ms-2 shrink-0"
                />
              </label>
              <label
                className={`flex items-center justify-between p-3 rounded-xl border transition-all cursor-pointer ${
                  showToTeachers
                    ? 'bg-blue-50/80 dark:bg-blue-950/30 border-blue-300 dark:border-blue-800 text-blue-900 dark:text-blue-200 shadow-2xs'
                    : 'bg-white dark:bg-slate-900 border-slate-200 dark:border-slate-700 text-slate-500 dark:text-slate-400 opacity-80'
                }`}
              >
                <div className="flex items-center gap-2.5 min-w-0">
                  <div className={`w-8 h-8 rounded-lg flex items-center justify-center shrink-0 ${
                    showToTeachers
                      ? 'bg-blue-500/10 text-blue-600 dark:text-blue-400'
                      : 'bg-slate-100 dark:bg-slate-800 text-slate-400'
                  }`}>
                    <GraduationCap size={16} />
                  </div>
                  <div className="min-w-0">
                    <span className="text-xs font-bold block truncate">
                      {isRtl ? 'يظهر للمعلمين' : 'Show to Teachers'}
                    </span>
                    <span className="text-[10px] text-slate-400 block truncate">
                      {isRtl ? 'إتاحة الملف بحساب المعلم' : 'Visible in teacher portal'}
                    </span>
                  </div>
                </div>
                <input
                  type="checkbox"
                  checked={showToTeachers}
                  onChange={(e) => setShowToTeachers(e.target.checked)}
                  className="w-4 h-4 accent-blue-600 rounded cursor-pointer ms-2 shrink-0"
                />
              </label>
            </div>
          </div>
          <div className="flex justify-end gap-3 pt-4 border-t border-slate-100 dark:border-slate-800">
            <button
              type="button"
              onClick={onClose}
              disabled={isSaving}
              className="px-5 py-2.5 bg-slate-100 hover:bg-slate-200 dark:bg-slate-800 dark:hover:bg-slate-700 text-slate-700 dark:text-slate-300 font-bold text-xs rounded-xl transition-all cursor-pointer"
            >
              {isRtl ? 'إلغاء' : 'Cancel'}
            </button>
            <button
              type="submit"
              disabled={isSaving || (resourceType === 'file' && !file && !editingFile) || (resourceType === 'link' && !url.trim())}
              className="px-6 py-2.5 bg-[#0f7a6c] hover:bg-[#0d6b5e] text-white font-bold text-xs rounded-xl transition-all shadow-sm flex items-center gap-2 disabled:opacity-50 cursor-pointer"
            >
              {isSaving && <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />}
              {editingFile
                ? (isRtl ? 'حفظ التعديلات' : 'Save Changes')
                : (isRtl ? 'حفظ وإضافة' : 'Save & Add')}
            </button>
          </div>
        </form>
      </div>
    </div>,
    document.body
  )
}

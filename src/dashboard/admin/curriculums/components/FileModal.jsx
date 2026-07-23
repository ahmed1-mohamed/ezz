import { useState, useRef, useEffect } from 'react'
import { createPortal } from 'react-dom'
import { useTranslation } from 'react-i18next'
import { X, Upload, File, Link as LinkIcon } from 'lucide-react'

export default function FileModal({ isOpen, onClose, isSaving, onSubmit }) {
  const { i18n } = useTranslation()
  const isRtl = i18n.language.startsWith('ar')

  const [resourceType, setResourceType] = useState('file') // 'file' | 'link'
  const [nameAr, setNameAr] = useState('')
  const [nameEn, setNameEn] = useState('')
  const [url, setUrl] = useState('')
  const [file, setFile] = useState(null)
  const fileInputRef = useRef(null)

  useEffect(() => {
    if (isOpen) {
      setResourceType('file')
      setNameAr('')
      setNameEn('')
      setUrl('')
      setFile(null)
    }
  }, [isOpen])

  if (!isOpen) return null

  const handleSubmit = (e) => {
    e.preventDefault()
    if (!nameAr.trim() || !nameEn.trim()) return
    if (resourceType === 'file' && !file) return
    if (resourceType === 'link' && !url.trim()) return

    const formData = new FormData()
    formData.append('type', resourceType)
    formData.append('name[ar]', nameAr.trim())
    formData.append('name[en]', nameEn.trim())
    
    if (resourceType === 'file' && file) {
      formData.append('file', file)
    } else if (resourceType === 'link') {
      formData.append('url', url.trim())
      formData.append('link', url.trim())
    }

    onSubmit(formData)
  }

  return createPortal(
    <div className="fixed inset-0 z-[99999] flex items-center justify-center p-4 bg-slate-900/60 backdrop-blur-sm">
      <div className="bg-white dark:bg-slate-900 rounded-3xl shadow-2xl w-full max-w-lg overflow-hidden flex flex-col" dir={isRtl ? 'rtl' : 'ltr'}>
        <div className="p-5 border-b border-slate-100 dark:border-slate-800/60 flex items-center justify-between">
          <h2 className="text-lg font-bold text-slate-800 dark:text-white">
            {isRtl ? 'إضافة محتوى / مصادر للوحدة' : 'Add Unit Content / Resource'}
          </h2>
          <button onClick={onClose} className="p-2 text-slate-400 hover:text-slate-600 bg-slate-50 rounded-xl hover:bg-slate-100 dark:bg-slate-800 dark:hover:bg-slate-700 transition-colors">
            <X size={20} />
          </button>
        </div>
        
        <form onSubmit={handleSubmit} className="p-6 space-y-5 text-start">
          {/* Resource Type Selector */}
          <div className="flex bg-slate-100 dark:bg-slate-800/60 p-1 rounded-2xl gap-1">
            <button
              type="button"
              onClick={() => setResourceType('file')}
              className={`flex-1 py-2 rounded-xl text-xs font-bold transition-all flex items-center justify-center gap-2 ${resourceType === 'file' ? 'bg-white dark:bg-slate-700 text-[#0f7a6c] dark:text-emerald-400 shadow-sm' : 'text-slate-500 hover:text-slate-700 dark:text-slate-400'}`}
            >
              <File size={16} />
              {isRtl ? 'ملف (PDF / صورة)' : 'File (PDF / Image)'}
            </button>
            <button
              type="button"
              onClick={() => setResourceType('link')}
              className={`flex-1 py-2 rounded-xl text-xs font-bold transition-all flex items-center justify-center gap-2 ${resourceType === 'link' ? 'bg-white dark:bg-slate-700 text-[#0f7a6c] dark:text-emerald-400 shadow-sm' : 'text-slate-500 hover:text-slate-700 dark:text-slate-400'}`}
            >
              <LinkIcon size={16} />
              {isRtl ? 'رابط خاري' : 'External Link'}
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
                onChange={(e) => e.target.files[0] && setFile(e.target.files[0])} 
                className="hidden" 
              />
            </>
          ) : (
            <div>
              <label className="block text-xs font-bold text-slate-500 dark:text-slate-400 mb-1.5">
                {isRtl ? 'الرابط (URL)' : 'Resource URL'} <span className="text-red-500">*</span>
              </label>
              <input
                type="url"
                required
                value={url}
                onChange={(e) => setUrl(e.target.value)}
                className="w-full bg-[#f3f7f6] dark:bg-slate-950 border border-transparent focus:border-[#0f7a6c]/20 focus:bg-white text-slate-850 dark:text-slate-105 rounded-xl py-2.5 px-4 outline-none transition-all text-sm"
                placeholder="https://..."
              />
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
              className="w-full bg-[#f3f7f6] dark:bg-slate-950 border border-transparent focus:border-[#0f7a6c]/20 focus:bg-white text-slate-850 dark:text-slate-105 rounded-xl py-2.5 px-4 outline-none transition-all text-sm"
              placeholder={isRtl ? 'مثال: كتاب الشرح' : 'e.g. Explanation Book'}
            />
          </div>

          <div>
            <label className="block text-xs font-bold text-slate-500 dark:text-slate-400 mb-1.5">
              {isRtl ? 'عنوان المحتوى (إنجليزي)' : 'Title (English)'} <span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              required
              value={nameEn}
              onChange={(e) => setNameEn(e.target.value)}
              className="w-full bg-[#f3f7f6] dark:bg-slate-950 border border-transparent focus:border-[#0f7a6c]/20 focus:bg-white text-slate-850 dark:text-slate-105 rounded-xl py-2.5 px-4 outline-none transition-all text-sm"
              placeholder={isRtl ? 'e.g. Explanation Book' : 'e.g. Explanation Book'}
            />
          </div>

          <div className="flex justify-end gap-3 pt-4 border-t border-slate-100 dark:border-slate-800">
            <button type="button" onClick={onClose} disabled={isSaving} className="px-5 py-2.5 bg-slate-100 hover:bg-slate-200 text-slate-700 font-bold text-xs rounded-xl transition-all">
              {isRtl ? 'إلغاء' : 'Cancel'}
            </button>
            <button
              type="submit"
              disabled={isSaving || (resourceType === 'file' && !file) || (resourceType === 'link' && !url.trim())}
              className="px-6 py-2.5 bg-[#0f7a6c] hover:bg-[#0d6b5e] text-white font-bold text-xs rounded-xl transition-all shadow-sm flex items-center gap-2 disabled:opacity-50"
            >
              {isSaving && <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />}
              {isRtl ? 'حفظ وإضافة' : 'Save & Add'}
            </button>
          </div>
        </form>
      </div>
    </div>,
    document.body
  )
}

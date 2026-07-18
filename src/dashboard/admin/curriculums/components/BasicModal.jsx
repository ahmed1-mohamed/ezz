import { useState, useEffect } from 'react'
import { useTranslation } from 'react-i18next'
import { X } from 'lucide-react'

export default function BasicModal({ isOpen, onClose, title, isSaving, onSubmit, editingItem, typeName }) {
  const { i18n } = useTranslation()
  const isRtl = i18n.language.startsWith('ar')

  const [nameAr, setNameAr] = useState('')
  const [nameEn, setNameEn] = useState('')
  const [showOnWebsite, setShowOnWebsite] = useState(true)

  useEffect(() => {
    if (isOpen) {
      if (editingItem) {
        setNameAr(typeof editingItem.name === 'object' ? (editingItem.name?.ar || '') : (editingItem.name || ''))
        setNameEn(typeof editingItem.name === 'object' ? (editingItem.name?.en || '') : (editingItem.name || ''))
        setShowOnWebsite(editingItem.showOnWebsite ?? true)
      } else {
        setNameAr('')
        setNameEn('')
        setShowOnWebsite(true)
      }
    }
  }, [isOpen, editingItem])

  if (!isOpen) return null

  const handleSubmit = (e) => {
    e.preventDefault()
    if (!nameAr.trim() || !nameEn.trim()) return

    onSubmit({
      name: { ar: nameAr.trim(), en: nameEn.trim() }
    })
  }

  return (
    <div className="fixed inset-0 z-[9999] flex items-center justify-center p-4 bg-slate-900/50 backdrop-blur-sm">
      <div className="bg-white dark:bg-slate-900 rounded-3xl shadow-2xl w-full max-w-lg overflow-hidden flex flex-col" dir={isRtl ? 'rtl' : 'ltr'}>
        <div className="p-5 border-b border-slate-100 dark:border-slate-800/60 flex items-center justify-between">
          <h2 className="text-lg font-bold text-slate-800 dark:text-white">{title}</h2>
          <button onClick={onClose} className="p-2 text-slate-400 hover:text-slate-600 bg-slate-50 rounded-xl hover:bg-slate-100 dark:bg-slate-800 dark:hover:bg-slate-700 transition-colors">
            <X size={20} />
          </button>
        </div>
        
        <form onSubmit={handleSubmit} className="p-6 space-y-5 text-start">
          <div>
            <label className="block text-xs font-bold text-slate-500 dark:text-slate-400 mb-1.5">
              {isRtl ? `اسم ال${typeName} (عربي)` : `${typeName} Name (Arabic)`} <span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              required
              value={nameAr}
              onChange={(e) => setNameAr(e.target.value)}
              className="w-full bg-[#f3f7f6] dark:bg-slate-950 border border-transparent focus:border-[#0f7a6c]/20 focus:bg-white text-slate-850 dark:text-slate-105 rounded-xl py-2.5 px-4 outline-none transition-all text-sm"
              placeholder={isRtl ? 'الاسم بالعربية...' : 'Arabic name...'}
            />
          </div>

          <div>
            <label className="block text-xs font-bold text-slate-500 dark:text-slate-400 mb-1.5">
              {isRtl ? `اسم ال${typeName} (إنجليزي)` : `${typeName} Name (English)`} <span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              required
              value={nameEn}
              onChange={(e) => setNameEn(e.target.value)}
              className="w-full bg-[#f3f7f6] dark:bg-slate-950 border border-transparent focus:border-[#0f7a6c]/20 focus:bg-white text-slate-850 dark:text-slate-105 rounded-xl py-2.5 px-4 outline-none transition-all text-sm"
              placeholder={isRtl ? 'الاسم بالإنجليزية...' : 'English name...'}
            />
          </div>

          <div className="flex justify-end gap-3 pt-4 border-t border-slate-100 dark:border-slate-800">
            <button type="button" onClick={onClose} disabled={isSaving} className="px-5 py-2.5 bg-slate-100 hover:bg-slate-200 text-slate-700 font-bold text-xs rounded-xl transition-all">
              {isRtl ? 'إلغاء' : 'Cancel'}
            </button>
            <button type="submit" disabled={isSaving} className="px-6 py-2.5 bg-[#0f7a6c] hover:bg-[#0d6b5e] text-white font-bold text-xs rounded-xl transition-all shadow-sm flex items-center gap-2">
              {isSaving && <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />}
              {isRtl ? 'حفظ' : 'Save'}
            </button>
          </div>
        </form>
      </div>
    </div>
  )
}

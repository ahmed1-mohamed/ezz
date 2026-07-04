import { X } from 'lucide-react'
import Spinner from '@/shared/components/Spinner'

export default function AddRoleModal({
  isOpen,
  onClose,
  isRtl,
  t,
  newRoleNameAr,
  setNewRoleNameAr,
  newRoleNameEn,
  setNewRoleNameEn,
  onSubmit,
  isPending
}) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 p-4 animate-fadeIn">
      <div className="w-full max-w-md overflow-hidden bg-white dark:bg-slate-900 rounded-3xl shadow-2xl border border-slate-100 dark:border-slate-800 animate-slideUp">
        <div className="flex items-center justify-between border-b border-slate-100 dark:border-slate-800 p-6">
          <h3 className="text-lg font-bold text-slate-800 dark:text-white">
            {t('adminDashboard.managers.permissionsScreen.addNewRoleModalTitle', 'إضافة دور جديد')}
          </h3>
          <button
            onClick={onClose}
            className="p-2 text-slate-400 hover:text-slate-600 dark:hover:text-slate-200 transition-colors bg-slate-50 dark:bg-slate-800 rounded-full cursor-pointer"
          >
            <X size={18} />
          </button>
        </div>

        <form onSubmit={onSubmit} className="p-6 space-y-4">
          <div>
            <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-1.5 text-start">
              {isRtl ? 'الاسم (بالعربية)' : 'Name (Arabic)'}
            </label>
            <input
              type="text"
              required
              value={newRoleNameAr}
              onChange={(e) => setNewRoleNameAr(e.target.value)}
              className="w-full bg-[#f8fafc] dark:bg-slate-950 border border-transparent focus:border-[#0f7a6c] focus:bg-white text-slate-800 dark:text-slate-100 rounded-xl py-3 px-4 outline-none transition-all text-sm"
              placeholder={isRtl ? 'مثال: مشرف معلمين' : 'e.g., Teachers Supervisor'}
              dir={isRtl ? 'rtl' : 'ltr'}
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-1.5 text-start">
              {isRtl ? 'الاسم (بالإنجليزية)' : 'Name (English)'}
            </label>
            <input
              type="text"
              required
              value={newRoleNameEn}
              onChange={(e) => setNewRoleNameEn(e.target.value)}
              className="w-full bg-[#f8fafc] dark:bg-slate-950 border border-transparent focus:border-[#0f7a6c] focus:bg-white text-slate-800 dark:text-slate-100 rounded-xl py-3 px-4 outline-none transition-all text-sm"
              placeholder={isRtl ? 'مثال: Teachers Supervisor' : 'e.g., Teachers Supervisor'}
              dir="ltr"
            />
          </div>

          <div className="flex justify-end gap-3 pt-4 border-t border-slate-100 dark:border-slate-800">
            <button
              type="button"
              onClick={onClose}
              className="px-5 py-2.5 rounded-xl bg-slate-100 text-slate-700 hover:bg-slate-200 dark:bg-slate-800 dark:text-slate-300 dark:hover:bg-slate-700 transition-all font-semibold text-sm cursor-pointer"
            >
              {t('adminDashboard.managers.permissionsScreen.cancel', 'إلغاء')}
            </button>
            <button
              type="submit"
              disabled={isPending}
              className="px-6 py-2.5 rounded-xl bg-[#0f7a6c] text-white hover:bg-[#0d6b5e] transition-all font-semibold text-sm shadow-md shadow-[#0f7a6c]/20 flex items-center justify-center gap-2 cursor-pointer disabled:opacity-70"
            >
              {isPending && <Spinner />}
              {t('adminDashboard.managers.permissionsScreen.addRoleSubmit', 'إضافة دور')}
            </button>
          </div>
        </form>
      </div>
    </div>
  )
}

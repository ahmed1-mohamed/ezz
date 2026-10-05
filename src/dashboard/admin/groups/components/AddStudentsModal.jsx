import { useState, useMemo, useEffect } from 'react'
import { useTranslation } from 'react-i18next'
import { X, UserPlus, Mail, Phone, CheckCircle, Loader2 } from 'lucide-react'
import { createPortal } from 'react-dom'
import { studentsApi } from '@/shared/services/api/studentsApi'
import StudentSelect from './fields/StudentSelect'

export default function AddStudentsModal({ group, isRtl, onAdd, onCancel }) {
  const { t, i18n } = useTranslation()
  const isRtlResolved = isRtl !== undefined ? isRtl : i18n.language.startsWith('ar')

  const [allStudents, setAllStudents] = useState([])
  const [isLoading, setIsLoading] = useState(false)
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [selectedStudent, setSelectedStudent] = useState(null)

  useEffect(() => {
    let active = true
    const load = async () => {
      setIsLoading(true)
      try {
        const res = await studentsApi.fetchStudents({ limit: 1000 })
        if (!active) return
        const data = res?.data || res || []
        const list = Array.isArray(data) ? data : []
        setAllStudents(list)
      } catch (err) {
        console.warn('Failed to fetch students:', err)
        if (active) setAllStudents([])
      } finally {
        if (active) setIsLoading(false)
      }
    }
    load()
    return () => {
      active = false
    }
  }, [])

  const existingStudentIds = useMemo(() => {
    return (group?.students || []).map((s) => s.id || s._id)
  }, [group])

  const getStudentName = (s) => {
    if (!s) return ''
    if (typeof s.name === 'object' && s.name !== null) {
      return isRtlResolved ? (s.name.ar || s.name.en) : (s.name.en || s.name.ar)
    }
    return s.name || ''
  }

  const handleAdd = async () => {
    if (!selectedStudent) return
    setIsSubmitting(true)
    try {
      await onAdd([selectedStudent])
    } finally {
      setIsSubmitting(false)
    }
  }

  const selectedStudentName = selectedStudent ? getStudentName(selectedStudent) : ''

  return createPortal(
    <div
      className="fixed inset-0 z-[9999] flex items-center justify-center p-4"
      dir={isRtlResolved ? 'rtl' : 'ltr'}
    >
      <div
        className="absolute inset-0 bg-black/40 backdrop-blur-sm"
        onClick={onCancel}
      />

      <div className="relative w-full max-w-md bg-white dark:bg-slate-900 rounded-3xl shadow-2xl overflow-hidden animate-fadeIn flex flex-col">
         <div className="flex items-center justify-between px-6 pt-6 pb-4 border-b border-slate-100 dark:border-slate-800 shrink-0">
          <div className="flex items-center gap-3">
            <div className="flex h-10 w-10 items-center justify-center rounded-2xl bg-brand-500/10 text-brand-600 dark:text-brand-400">
              <UserPlus size={20} />
            </div>
            <div className="text-start">
              <h2 className="text-base font-bold text-slate-800 dark:text-white">
                {t('adminDashboard.groups.addStudentModalTitle', 'إضافة طالب للمجموعة')}
              </h2>
              <p className="text-xs text-slate-400">
                {group?.name || t('adminDashboard.groups.groupLabel', 'مجموعة')}
              </p>
            </div>
          </div>
          <button
            onClick={onCancel}
            className="p-2 rounded-xl text-slate-400 hover:text-slate-700 hover:bg-slate-100 dark:hover:bg-slate-800 transition-all cursor-pointer"
          >
            <X size={18} />
          </button>
        </div>

         <div className="p-6 space-y-5">
           <div>
            <label className="block text-xs font-bold text-slate-700 dark:text-slate-300 mb-2 text-start">
              {t('adminDashboard.groups.selectStudentDropdownLabel', 'اختر طالباً من القائمة')}
              <span className="text-red-500 ms-1">*</span>
            </label>

            {isLoading ? (
              <div className="flex items-center justify-center py-6 gap-2 text-slate-400 text-xs">
                <Loader2 size={16} className="animate-spin text-brand-500" />
                <span>{t('adminDashboard.groups.loadingStudents', 'جاري تحميل قائمة الطلاب...')}</span>
              </div>
            ) : (
              <StudentSelect
                students={allStudents}
                selectedStudent={selectedStudent}
                onSelect={setSelectedStudent}
                excludeIds={existingStudentIds}
                placeholder={t('adminDashboard.groups.selectStudentPlaceholder', 'ابحث أو اختر طالباً لإضافته...')}
                isRtl={isRtlResolved}
              />
            )}
          </div>

           {selectedStudent && (
            <div className="p-4 bg-brand-50/50 dark:bg-brand-900/10 border border-brand-200 dark:border-brand-800/40 rounded-2xl animate-fadeIn space-y-3">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-2xl bg-brand-500 text-white font-bold flex items-center justify-center text-sm shadow-sm shadow-brand-500/20">
                    {selectedStudentName.charAt(0) || 'ط'}
                  </div>
                  <div className="text-start">
                    <p className="text-sm font-bold text-slate-800 dark:text-white">
                      {selectedStudentName}
                    </p>
                    <span className="inline-flex items-center gap-1 text-[11px] text-emerald-600 dark:text-emerald-400 font-semibold">
                      <CheckCircle size={12} />
                      {t('adminDashboard.groups.readyToAdd', 'جاهز للإضافة للمجموعة')}
                    </span>
                  </div>
                </div>
                <button
                  type="button"
                  onClick={() => setSelectedStudent(null)}
                  className="p-1.5 rounded-lg text-slate-400 hover:text-red-500 hover:bg-red-50 dark:hover:bg-red-900/20 transition-all cursor-pointer"
                  title={t('adminDashboard.groups.deselect', 'إلغاء التحديد')}
                >
                  <X size={16} />
                </button>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 pt-2 border-t border-brand-200/50 dark:border-brand-800/30 text-xs text-slate-600 dark:text-slate-300">
                {selectedStudent.email && (
                  <div className="flex items-center gap-2 truncate">
                    <Mail size={13} className="text-slate-400 shrink-0" />
                    <span className="truncate">{selectedStudent.email}</span>
                  </div>
                )}
                {selectedStudent.phone && (
                  <div className="flex items-center gap-2 truncate">
                    <Phone size={13} className="text-slate-400 shrink-0" />
                    <span className="truncate dir-ltr">{selectedStudent.phone}</span>
                  </div>
                )}
              </div>
            </div>
          )}

          {!selectedStudent && !isLoading && (
            <div className="p-4 bg-slate-50 dark:bg-slate-800/40 rounded-2xl border border-dashed border-slate-200 dark:border-slate-800 text-center">
              <p className="text-xs text-slate-400">
                {t('adminDashboard.groups.selectStudentNotice', 'اختر طالباً من القائمة المنسدلة أعلاه لتتمكن من إضافته إلى هذه المجموعة')}
              </p>
            </div>
          )}
        </div>

        {/* Footer */}
        <div className="flex items-center gap-3 px-6 py-4 border-t border-slate-100 dark:border-slate-800 shrink-0 bg-white dark:bg-slate-900">
          <button
            onClick={handleAdd}
            disabled={!selectedStudent || isSubmitting}
            className="flex-1 flex items-center justify-center gap-2 py-3 rounded-2xl bg-brand-500 hover:bg-brand-600 disabled:opacity-50 disabled:cursor-not-allowed text-white font-semibold text-sm transition-all shadow-md shadow-brand-500/20 active:scale-[0.98] cursor-pointer"
          >
            {isSubmitting ? (
              <Loader2 size={16} className="animate-spin" />
            ) : (
              <UserPlus size={16} />
            )}
            <span>{t('adminDashboard.groups.addStudentSubmit', 'إضافة الطالب للمجموعة')}</span>
          </button>
          <button
            onClick={onCancel}
            className="px-6 py-3 rounded-2xl border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 text-slate-700 dark:text-slate-300 font-semibold text-sm transition-all hover:bg-slate-50 dark:hover:bg-slate-700 cursor-pointer"
          >
            {t('adminDashboard.groups.cancel', 'إلغاء')}
          </button>
        </div>
      </div>
    </div>,
    document.body
  )
}
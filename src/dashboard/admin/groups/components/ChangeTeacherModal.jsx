import { useState, useEffect } from 'react'
import { createPortal } from 'react-dom'
import { useTranslation } from 'react-i18next'
import { GraduationCap, ArrowRight, ArrowLeft, Loader2, Check, UserCheck, AlertCircle } from 'lucide-react'
import { teachersApi } from '@/shared/services/api/teachersApi'
import TeacherSelect from './fields/TeacherSelect'

export default function ChangeTeacherModal({ group, onClose, onConfirm, isRtl: propIsRtl }) {
  const { t, i18n } = useTranslation()
  const isRtl = propIsRtl !== undefined ? propIsRtl : i18n.language.startsWith('ar')
  const CloseArrow = isRtl ? ArrowRight : ArrowLeft

  const [teachers, setTeachers] = useState([])
  const [selectedTeacher, setSelectedTeacher] = useState(null)
  const [isLoadingTeachers, setIsLoadingTeachers] = useState(true)
  const [isSubmitting, setIsSubmitting] = useState(false)

  const currentTeacherId = group?.teacher?.id || (typeof group?.teacher === 'string' ? group?.teacher : null)
  const currentTeacherName = group?.teacher?.name || (typeof group?.teacher === 'string' ? group?.teacher : t('adminDashboard.groups.unassigned', 'غير محدد'))

  useEffect(() => {
    let isMounted = true
    const loadTeachers = async () => {
      setIsLoadingTeachers(true)
      try {
        const res = await teachersApi.fetchTeachersList({ limit: 1000 })
        const list = res?.data || (Array.isArray(res) ? res : [])
        if (!isMounted) return
        if (list.length > 0) {
          setTeachers(list)
        } else {
          setTeachers([])
        }
      } catch (err) {
        console.warn('Failed to load teachers for change-teacher modal:', err)
        if (isMounted) setTeachers([])
      } finally {
        if (isMounted) setIsLoadingTeachers(false)
      }
    }
    loadTeachers()
    return () => {
      isMounted = false
    }
  }, [])

  const handleSubmit = async (e) => {
    e?.preventDefault()
    if (!selectedTeacher || isSubmitting) return

    const selectedId = selectedTeacher.id || selectedTeacher.teacher_id || selectedTeacher._id
    if (String(selectedId) === String(currentTeacherId)) {
      onClose()
      return
    }

    setIsSubmitting(true)
    try {
      await onConfirm(selectedId, selectedTeacher)
      onClose()
    } finally {
      setIsSubmitting(false)
    }
  }

  const selectedName = selectedTeacher
    ? (typeof selectedTeacher.name === 'object'
        ? (isRtl ? selectedTeacher.name.ar : selectedTeacher.name.en)
        : selectedTeacher.name)
    : ''

  const isCurrentSelected = selectedTeacher && String(selectedTeacher.id || selectedTeacher.teacher_id) === String(currentTeacherId)

  return createPortal(
    <div
      className="fixed inset-0 z-[9999] flex items-center justify-center p-4"
      onClick={onClose}
    >
      <div className="absolute inset-0 bg-black/40 backdrop-blur-sm" />
      <div
        className="relative bg-white dark:bg-slate-900 rounded-3xl shadow-2xl w-full max-w-md max-h-[90vh] overflow-hidden flex flex-col"
        onClick={(e) => e.stopPropagation()}
        dir={isRtl ? 'rtl' : 'ltr'}
      >
         <div className="flex items-center justify-between p-5 border-b border-slate-100 dark:border-slate-800 bg-white dark:bg-slate-900 sticky top-0 z-10">
          <div className="flex items-center gap-3">
            <button
              onClick={onClose}
              className="p-2 rounded-xl bg-slate-50 dark:bg-slate-800 hover:bg-slate-100 dark:hover:bg-slate-700 transition-colors cursor-pointer text-slate-500"
            >
              <CloseArrow size={18} />
            </button>
            <div className="text-start">
              <h2 className="text-base font-bold text-slate-800 dark:text-white">
                {t('adminDashboard.groups.changeTeacherTitle', 'تغيير معلم المجموعة')}
              </h2>
              <p className="text-xs text-slate-400 mt-0.5 truncate max-w-xs" title={group?.name}>
                {group?.name}
              </p>
            </div>
          </div>
          <div className="w-9 h-9 rounded-xl bg-amber-50 dark:bg-amber-900/30 text-amber-600 dark:text-amber-400 flex items-center justify-center">
            <UserCheck size={18} />
          </div>
        </div>

         <div className="p-6 space-y-5 overflow-y-auto flex-1">
           <div className="p-4 bg-slate-50 dark:bg-slate-800/50 rounded-2xl border border-slate-100 dark:border-slate-800 flex items-center justify-between gap-3">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-2xl bg-brand-50 dark:bg-brand-900/30 text-brand-600 dark:text-brand-400 flex items-center justify-center font-bold text-sm shrink-0">
                {currentTeacherName.charAt(0) || <GraduationCap size={18} />}
              </div>
              <div className="text-start">
                <span className="text-[11px] font-semibold text-slate-400 uppercase tracking-wider block">
                  {t('adminDashboard.groups.currentTeacher', 'المعلم الحالي للمجموعة')}
                </span>
                <span className="text-sm font-bold text-slate-800 dark:text-slate-100">
                  {currentTeacherName}
                </span>
              </div>
            </div>
            <span className="text-[11px] px-2.5 py-1 rounded-full bg-slate-200 dark:bg-slate-700 text-slate-600 dark:text-slate-300 font-medium">
              {t('adminDashboard.groups.currentlyAssigned', 'المعين حالياً')}
            </span>
          </div>

           <div className="space-y-2">
            <label className="block text-xs font-bold text-slate-700 dark:text-slate-300 text-start">
              {t('adminDashboard.groups.selectNewTeacher', 'اختر المعلم البديل الجديد')}
              <span className="text-red-500 ms-1">*</span>
            </label>
            <TeacherSelect
              teachers={teachers}
              selectedTeacher={selectedTeacher}
              onSelect={setSelectedTeacher}
              currentTeacherId={currentTeacherId}
              placeholder={t('adminDashboard.groups.chooseSubstituteTeacher', 'ابحث واختر معلماً جديداً...')}
              isRtl={isRtl}
              disabled={isSubmitting || isLoadingTeachers}
            />
          </div>

           {selectedTeacher && (
            <div className="p-4 bg-amber-50/50 dark:bg-amber-950/20 rounded-2xl border border-amber-200 dark:border-amber-800/60 space-y-3 animate-fadeIn">
              <div className="flex items-center justify-between">
                <span className="text-xs font-bold text-amber-800 dark:text-amber-400 flex items-center gap-1.5">
                  <Check size={14} className="text-amber-600" />
                  {t('adminDashboard.groups.newTeacherReady', 'المعلم الجديد المختار')}
                </span>
                {isCurrentSelected && (
                  <span className="text-[10px] text-amber-700 dark:text-amber-300 bg-amber-100 dark:bg-amber-900/40 px-2 py-0.5 rounded-lg flex items-center gap-1">
                    <AlertCircle size={10} />
                    {t('adminDashboard.groups.sameTeacherNote', 'هذا هو نفس المعلم الحالي')}
                  </span>
                )}
              </div>

              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-2xl bg-amber-500 text-white flex items-center justify-center font-bold text-base shrink-0 overflow-hidden shadow-sm">
                  {selectedTeacher.image ? (
                    <img src={selectedTeacher.image} alt="" className="w-full h-full object-cover" />
                  ) : (
                    selectedName.charAt(0) || <GraduationCap size={20} />
                  )}
                </div>
                <div className="text-start min-w-0 flex-1">
                  <h4 className="text-sm font-bold text-slate-800 dark:text-white truncate">
                    {selectedName}
                  </h4>
                  {(selectedTeacher.subject || selectedTeacher.degree) && (
                    <p className="text-xs text-slate-500 dark:text-slate-400 truncate mt-0.5">
                      {[selectedTeacher.subject, selectedTeacher.degree].filter(Boolean).join(' · ')}
                    </p>
                  )}
                  {(selectedTeacher.phone || selectedTeacher.email) && (
                    <p className="text-[11px] text-slate-400 truncate dir-ltr text-end mt-0.5">
                      {selectedTeacher.phone || selectedTeacher.email}
                    </p>
                  )}
                </div>
              </div>
            </div>
          )}

           <p className="text-[11px] text-slate-400 leading-relaxed text-start">
            {t(
              'adminDashboard.groups.changeTeacherNotice',
              'عند تغيير المعلم، سيتم تحديث جدول المجموعة وإسناد جميع الجلسات القادمة في هذه المجموعة إلى المعلم الجديد تلقائياً.'
            )}
          </p>
        </div>

         <div className="p-5 border-t border-slate-100 dark:border-slate-800 bg-white dark:bg-slate-900 flex items-center justify-end gap-3 sticky bottom-0">
          <button
            type="button"
            onClick={onClose}
            disabled={isSubmitting}
            className="px-4 py-2.5 rounded-2xl border border-slate-200 dark:border-slate-700 text-slate-600 dark:text-slate-300 text-xs font-semibold hover:bg-slate-50 dark:hover:bg-slate-800 transition-all cursor-pointer disabled:opacity-50"
          >
            {t('adminDashboard.groups.cancel', 'إلغاء')}
          </button>
          <button
            type="button"
            onClick={handleSubmit}
            disabled={!selectedTeacher || isCurrentSelected || isSubmitting}
            className="flex items-center gap-2 px-6 py-2.5 rounded-2xl bg-amber-500 hover:bg-amber-600 disabled:opacity-50 disabled:cursor-not-allowed text-white text-xs font-bold transition-all shadow-md shadow-amber-500/20 active:scale-[0.98] cursor-pointer"
          >
            {isSubmitting ? (
              <>
                <Loader2 size={14} className="animate-spin" />
                <span>{t('adminDashboard.groups.updatingTeacher', 'جاري التحديث...')}</span>
              </>
            ) : (
              <>
                <UserCheck size={14} />
                <span>{t('adminDashboard.groups.confirmChangeTeacher', 'تأكيد تغيير المعلم')}</span>
              </>
            )}
          </button>
        </div>
      </div>
    </div>,
    document.body
  )
}

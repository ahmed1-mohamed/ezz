import { useState, useMemo } from 'react'
import { createPortal } from 'react-dom'
import { ArrowRightLeft, X, Loader2, Users, AlertCircle } from 'lucide-react'
import { getLocalizedValue } from '../utils/groupUtils'

export default function TransferStudentModal({
  student,
  currentGroup,
  groups = [],
  onClose,
  onConfirm,
  isRtl = true,
  t,
}) {
  const [selectedTargetGroupId, setSelectedTargetGroupId] = useState('')
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [errorMsg, setErrorMsg] = useState('')

  const currentGroupId = String(currentGroup?.id || currentGroup?._id || '')
  const studentName = student?.name || t('adminDashboard.groups.student', 'طالب')
  const currentGroupName = getLocalizedValue(currentGroup?.name, isRtl) || t('adminDashboard.groups.title', 'المجموعة')

  const availableTargetGroups = useMemo(() => {
    const list = Array.isArray(groups) ? groups : []
    return list.filter((g) => {
      const gId = String(g.id || g._id || '')
      return gId && gId !== currentGroupId
    })
  }, [groups, currentGroupId])

  const handleTransferSubmit = async (e) => {
    e?.preventDefault()
    if (!selectedTargetGroupId) {
      setErrorMsg(t('adminDashboard.groups.selectTargetGroupError', 'يرجى اختيار المجموعة المراد النقل إليها'))
      return
    }

    setIsSubmitting(true)
    setErrorMsg('')
    try {
      await onConfirm(selectedTargetGroupId)
      onClose()
    } catch (err) {
      console.error('Failed to transfer student:', err)
      setErrorMsg(err?.response?.data?.message || err?.message || t('adminDashboard.groups.transferError', 'فشل نقل الطالب'))
    } finally {
      setIsSubmitting(false)
    }
  }

  return createPortal(
    <div
      className="fixed inset-0 z-[100000] flex items-center justify-center p-4"
      onClick={onClose}
    >
      <div className="absolute inset-0 bg-black/50 backdrop-blur-sm" />
      <div
        className="relative bg-white dark:bg-slate-900 rounded-3xl shadow-2xl w-full max-w-lg overflow-hidden flex flex-col border border-slate-100 dark:border-slate-800"
        onClick={(e) => e.stopPropagation()}
        dir={isRtl ? 'rtl' : 'ltr'}
      >
        <div className="flex items-center justify-between p-5 border-b border-slate-100 dark:border-slate-800 bg-white dark:bg-slate-900 shrink-0">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-2xl bg-brand-50 dark:bg-brand-900/20 text-brand-600 dark:text-brand-400 flex items-center justify-center shrink-0">
              <ArrowRightLeft size={18} />
            </div>
            <div className="text-start">
              <h3 className="text-base font-bold text-slate-800 dark:text-white">
                {t('adminDashboard.groups.transferStudentTitle', 'نقل طالب إلى مجموعة أخرى')}
              </h3>
              <p className="text-xs text-slate-400 mt-0.5">
                {studentName}
              </p>
            </div>
          </div>
          <button
            type="button"
            onClick={onClose}
            className="p-1.5 rounded-xl bg-slate-50 dark:bg-slate-800 hover:bg-slate-100 dark:hover:bg-slate-700 text-slate-400 hover:text-slate-600 dark:hover:text-slate-200 transition-colors cursor-pointer"
          >
            <X size={18} />
          </button>
        </div>

        <form onSubmit={handleTransferSubmit} className="p-6 space-y-4">
          <div className="p-3.5 bg-slate-50 dark:bg-slate-800/50 rounded-2xl border border-slate-100 dark:border-slate-800 space-y-1.5 text-xs text-start">
            <div className="flex justify-between items-center text-slate-500 dark:text-slate-400">
              <span>{t('adminDashboard.groups.currentGroup', 'المجموعة الحالية')}:</span>
              <span className="font-bold text-slate-700 dark:text-slate-200">{currentGroupName}</span>
            </div>
            <div className="flex justify-between items-center text-slate-500 dark:text-slate-400">
              <span>{t('adminDashboard.groups.student', 'الطالب')}:</span>
              <span className="font-bold text-slate-700 dark:text-slate-200">{studentName}</span>
            </div>
          </div>

          <div>
            <label className="block text-xs font-bold text-slate-700 dark:text-slate-300 mb-2 text-start">
              {t('adminDashboard.groups.selectTargetGroup', 'اختر المجموعة الجديدة')}
            </label>
            {availableTargetGroups.length === 0 ? (
              <div className="p-4 bg-amber-50 dark:bg-amber-950/20 text-amber-600 dark:text-amber-400 rounded-2xl text-xs text-start flex items-center gap-2">
                <AlertCircle size={16} className="shrink-0" />
                <span>{t('adminDashboard.groups.noOtherGroupsAvailable', 'لا توجد مجموعات أخرى متاحة للنقل')}</span>
              </div>
            ) : (
              <select
                value={selectedTargetGroupId}
                onChange={(e) => {
                  setSelectedTargetGroupId(e.target.value)
                  setErrorMsg('')
                }}
                className="w-full bg-[#f3f7f6] dark:bg-slate-800 text-slate-800 dark:text-slate-100 border border-transparent focus:border-brand-500/30 rounded-2xl py-3 px-4 outline-none text-sm cursor-pointer transition-colors"
              >
                <option value="">{t('adminDashboard.groups.chooseGroupPlaceholder', '-- اختر المجموعة --')}</option>
                {availableTargetGroups.map((grp) => {
                  const gId = grp.id || grp._id
                  const name = getLocalizedValue(grp.name, isRtl)
                  const teacher = getLocalizedValue(grp.teacher?.name, isRtl) || (typeof grp.teacher === 'string' ? grp.teacher : '')
                  const curCount = grp.currentStudentsCount ?? (Array.isArray(grp.students) ? grp.students.length : 0)
                  const maxCount = grp.maxStudents || 5
                  return (
                    <option key={gId} value={gId}>
                      {name} {teacher ? `(${teacher})` : ''} - [{curCount}/{maxCount}]
                    </option>
                  )
                })}
              </select>
            )}
          </div>

          {errorMsg && (
            <div className="p-3 bg-red-50 dark:bg-red-950/30 text-red-600 dark:text-red-400 rounded-xl text-xs text-start flex items-center gap-2">
              <AlertCircle size={14} className="shrink-0" />
              <span>{errorMsg}</span>
            </div>
          )}

          <div className="p-3 bg-blue-50/60 dark:bg-blue-950/20 rounded-xl border border-blue-100 dark:border-blue-900/30 text-blue-700 dark:text-blue-300 text-xs text-start flex items-center gap-2">
            <Users size={15} className="shrink-0" />
            <span>{t('adminDashboard.groups.transferNotice', 'عند تأكيد النقل، سيتم تحديث تسجيل الطالب وإضافته للمجموعة الجديدة مباشرةً.')}</span>
          </div>

          <div className="flex items-center justify-end gap-2.5 pt-3 border-t border-slate-100 dark:border-slate-800">
            <button
              type="button"
              onClick={onClose}
              disabled={isSubmitting}
              className="px-5 py-2.5 rounded-2xl border border-slate-200 dark:border-slate-800 text-slate-600 dark:text-slate-300 hover:bg-slate-50 dark:hover:bg-slate-800 text-xs font-semibold transition-all cursor-pointer disabled:opacity-50"
            >
              {t('common.cancel', 'إلغاء')}
            </button>
            <button
              type="submit"
              disabled={isSubmitting || !selectedTargetGroupId || availableTargetGroups.length === 0}
              className="flex items-center gap-2 px-6 py-2.5 rounded-2xl bg-brand-500 hover:bg-brand-600 disabled:opacity-50 disabled:cursor-not-allowed text-white text-xs font-bold transition-all shadow-md shadow-brand-500/20 cursor-pointer"
            >
              {isSubmitting ? <Loader2 size={14} className="animate-spin" /> : <ArrowRightLeft size={14} />}
              <span>{t('adminDashboard.groups.confirmTransfer', 'تأكيد النقل')}</span>
            </button>
          </div>
        </form>
      </div>
    </div>,
    document.body
  )
}

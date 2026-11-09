import { useState, useEffect, useCallback } from 'react'
import { createPortal } from 'react-dom'
import {
  X,
  UserCheck,
  Search,
  Check,
  User,
  Loader2,
  AlertCircle,
} from 'lucide-react'
import { toast } from 'react-hot-toast'
import { adminTrialSessionsApi } from '@/shared/services/api/adminTrialSessionsApi'
import { studentsApi } from '@/shared/services/api/studentsApi'

function resolveText(val, isRtl = true) {
  if (!val) return ''
  if (typeof val === 'string') return val.trim()
  if (typeof val === 'object') {
    return (isRtl ? (val.ar || val.en) : (val.en || val.ar)) || val.name || ''
  }
  return String(val)
}

export default function AcceptWebsiteTrialModal({
  isOpen,
  onClose,
  trialSession,
  isRtl = true,
  onSuccess,
}) {
  const [searchTerm, setSearchTerm] = useState('')
  const [searchResults, setSearchResults] = useState([])
  const [isSearching, setIsSearching] = useState(false)
  const [selectedStudent, setSelectedStudent] = useState(null)
  const [notes, setNotes] = useState('')
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [errorMsg, setErrorMsg] = useState('')
  const trialId = trialSession?.id || trialSession?._id
  const applicantName = trialSession?.name || trialSession?.studentName || '-'
  const applicantAge = trialSession?.studentAge || trialSession?.age
  const applicantCurriculum = resolveText(trialSession?.curriculum?.name || trialSession?.curriculumName || trialSession?.curriculum, isRtl)
  const applicantEmail = trialSession?.email || '-'
  const applicantPhone = trialSession?.phone || '-'
  const searchStudents = useCallback(async (query) => {
    setIsSearching(true)
    setErrorMsg('')
    try {
      const res = await studentsApi.fetchStudents({ search: query, limit: 8 })
      const list = res?.items || res?.data || (Array.isArray(res) ? res : [])
      setSearchResults(Array.isArray(list) ? list : [])
    } catch (err) {
      console.error('Failed to search students:', err)
      setSearchResults([])
    } finally {
      setIsSearching(false)
    }
  }, [])
  useEffect(() => {
    if (!isOpen) return
    const initialQuery = applicantName && applicantName !== '-' ? applicantName.split(' ')[0] : ''
    const timer = setTimeout(() => {
      setSearchTerm(initialQuery)
      setSelectedStudent(null)
      setNotes('')
      setErrorMsg('')
      searchStudents(initialQuery)
    }, 0)
    return () => clearTimeout(timer)
  }, [isOpen, applicantName, searchStudents])
  useEffect(() => {
    if (!isOpen || !searchTerm) return
    const timer = setTimeout(() => {
      searchStudents(searchTerm.trim())
    }, 350)
    return () => clearTimeout(timer)
  }, [searchTerm, isOpen, searchStudents])
  if (!isOpen || !trialSession || typeof document === 'undefined') return null
  const handleSubmit = async (e) => {
    e.preventDefault()
    if (!selectedStudent) {
      setErrorMsg(isRtl ? 'يرجى اختيار طالب لربطه بهذا الطلب' : 'Please select a student to link')
      return
    }
    setIsSubmitting(true)
    setErrorMsg('')
    try {
      const studentId = selectedStudent.id || selectedStudent._id || selectedStudent.student_id
      await adminTrialSessionsApi.updateWebsiteTrialSession(trialId, {
        status: 'accepted',
        studentId,
        notes: notes.trim() || undefined,
      })
      toast.success(isRtl ? 'تم قبول طلب الحصة التجريبية وربط الطالب بنجاح' : 'Trial session accepted and student linked successfully')
      if (onSuccess) onSuccess()
      onClose()
    } catch (err) {
      const msg = err?.response?.data?.message || err?.message || (isRtl ? 'فشل تحديث الطلب' : 'Failed to update request')
      setErrorMsg(Array.isArray(msg) ? msg.join(', ') : msg)
    } finally {
      setIsSubmitting(false)
    }
  }
  return createPortal(
    <div
      onClick={(e) => {
        if (e.target === e.currentTarget && !isSubmitting) onClose()
      }}
      className="fixed inset-0 w-screen h-screen min-h-screen z-[99999] flex items-center justify-center p-3 sm:p-4 bg-black/80 backdrop-blur-sm animate-fade-in overflow-y-auto"
      dir={isRtl ? 'rtl' : 'ltr'}
    >
      <div
        onClick={(e) => e.stopPropagation()}
        className="bg-white dark:bg-slate-900 w-full max-w-xl rounded-3xl shadow-2xl border border-slate-100 dark:border-slate-800 overflow-hidden flex flex-col my-auto animate-scaleUp text-start"
      >
        <div className="px-6 py-5 border-b border-slate-100 dark:border-slate-800 flex items-center justify-between bg-emerald-50/60 dark:bg-emerald-950/30">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-2xl bg-emerald-100 dark:bg-emerald-900/40 text-emerald-700 dark:text-emerald-400 flex items-center justify-center font-bold">
              <UserCheck size={20} />
            </div>
            <div>
              <h3 className="font-black text-base sm:text-lg text-slate-800 dark:text-white">
                {isRtl ? 'قبول طلب الحصة وربط الطالب' : 'Accept Request & Link Student'}
              </h3>
              <p className="text-xs text-slate-500 dark:text-slate-400">
                {isRtl ? 'اختر الطالب من النظام لربط الطلب به وتحديث حالته إلى مقبول' : 'Select a student from the system to link and mark as accepted'}
              </p>
            </div>
          </div>
          <button
            type="button"
            disabled={isSubmitting}
            onClick={onClose}
            className="w-8 h-8 rounded-xl bg-slate-100 dark:bg-slate-800 hover:bg-slate-200 dark:hover:bg-slate-700 text-slate-500 hover:text-slate-800 dark:hover:text-white flex items-center justify-center transition-colors cursor-pointer disabled:opacity-40"
          >
            <X size={16} />
          </button>
        </div>
        <form onSubmit={handleSubmit} className="p-6 space-y-5 max-h-[78vh] overflow-y-auto">
          <div className="p-4 rounded-2xl bg-slate-50 dark:bg-slate-800/50 border border-slate-100 dark:border-slate-800 space-y-2 text-xs">
            <span className="font-bold text-slate-600 dark:text-slate-300 block mb-1">
              {isRtl ? 'بيانات الطلب الوارد من الموقع:' : 'Incoming Website Request Info:'}
            </span>
            <div className="grid grid-cols-2 gap-2 text-slate-700 dark:text-slate-300">
              <div>
                <span className="text-slate-400 block">{isRtl ? 'الاسم:' : 'Name:'}</span>
                <span className="font-bold">{applicantName}</span>
              </div>
              {applicantAge && (
                <div>
                  <span className="text-slate-400 block">{isRtl ? 'العمر:' : 'Age:'}</span>
                  <span className="font-bold">{applicantAge} {isRtl ? 'سنوات' : 'years'}</span>
                </div>
              )}
              {applicantCurriculum && (
                <div>
                  <span className="text-slate-400 block">{isRtl ? 'المنهج:' : 'Curriculum:'}</span>
                  <span className="font-bold text-[#005953] dark:text-emerald-400">{applicantCurriculum}</span>
                </div>
              )}
              <div>
                <span className="text-slate-400 block">{isRtl ? 'رقم الهاتف:' : 'Phone:'}</span>
                <span className="font-mono font-bold" dir="ltr">{applicantPhone}</span>
              </div>
              {applicantEmail && applicantEmail !== '-' && (
                <div className="col-span-2">
                  <span className="text-slate-400 block">{isRtl ? 'البريد الإلكتروني:' : 'Email:'}</span>
                  <span className="font-mono font-medium">{applicantEmail}</span>
                </div>
              )}
            </div>
          </div>
          {errorMsg && (
            <div className="p-3.5 rounded-2xl bg-rose-50 dark:bg-rose-950/40 border border-rose-200 dark:border-rose-900 text-rose-700 dark:text-rose-300 text-xs font-bold flex items-center gap-2">
              <AlertCircle size={16} className="shrink-0" />
              <span>{errorMsg}</span>
            </div>
          )}
          <div className="space-y-2">
            <label className="block text-xs font-bold text-slate-700 dark:text-slate-300">
              {isRtl ? 'البحث عن الطالب في المنصة *' : 'Search Student in Platform *'}
            </label>
            <div className="relative">
              <input
                type="text"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                placeholder={isRtl ? 'ابحث باسم الطالب أو رقم الهاتف أو البريد...' : 'Search by name, phone, or email...'}
                className="w-full px-4 py-2.5 ps-10 rounded-2xl border border-slate-200 dark:border-slate-700 text-xs font-medium bg-slate-50/50 dark:bg-slate-800 text-slate-900 dark:text-white transition-all focus:ring-2 focus:ring-[#005953] focus:outline-hidden"
              />
              <div className="absolute inset-y-0 start-3 flex items-center pointer-events-none text-slate-400">
                {isSearching ? <Loader2 size={16} className="animate-spin text-[#005953]" /> : <Search size={16} />}
              </div>
            </div>
            {selectedStudent ? (
              <div className="p-3.5 rounded-2xl bg-emerald-50 dark:bg-emerald-950/40 border border-emerald-300 dark:border-emerald-800 flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="w-9 h-9 rounded-xl bg-emerald-200 dark:bg-emerald-800 text-emerald-800 dark:text-emerald-100 flex items-center justify-center font-black text-sm">
                    {resolveText(selectedStudent.name, isRtl).charAt(0) || 'ط'}
                  </div>
                  <div className="text-xs">
                    <span className="font-black text-slate-800 dark:text-white block">
                      {resolveText(selectedStudent.name, isRtl)}
                    </span>
                    <span className="text-slate-500 dark:text-slate-400">
                      {selectedStudent.parentName ? `${isRtl ? 'ولي الأمر: ' : 'Parent: '}${selectedStudent.parentName}` : selectedStudent.email || selectedStudent.phone}
                    </span>
                  </div>
                </div>
                <button
                  type="button"
                  onClick={() => setSelectedStudent(null)}
                  className="text-xs font-bold text-rose-600 hover:text-rose-700 dark:text-rose-400 cursor-pointer px-2 py-1"
                >
                  {isRtl ? 'تغيير' : 'Change'}
                </button>
              </div>
            ) : (
              <div className="border border-slate-100 dark:border-slate-800 rounded-2xl overflow-hidden divide-y divide-slate-100 dark:divide-slate-800 max-h-48 overflow-y-auto bg-white dark:bg-slate-900 shadow-xs">
                {searchResults.length > 0 ? (
                  searchResults.map((stu) => {
                    const stuId = stu.id || stu._id || stu.student_id
                    const sName = resolveText(stu.name, isRtl)
                    return (
                      <div
                        key={stuId}
                        onClick={() => setSelectedStudent(stu)}
                        className="p-3 hover:bg-slate-50 dark:hover:bg-slate-800/60 cursor-pointer flex items-center justify-between transition-colors"
                      >
                        <div className="flex items-center gap-2.5">
                          <div className="w-8 h-8 rounded-xl bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300 flex items-center justify-center font-bold text-xs">
                            <User size={15} />
                          </div>
                          <div className="text-xs">
                            <span className="font-bold text-slate-800 dark:text-white block">{sName}</span>
                            <span className="text-[11px] text-slate-400">
                              {stu.parentName ? `${isRtl ? 'ولي الأمر: ' : 'Parent: '}${stu.parentName}` : (stu.email || stu.phone || '')}
                            </span>
                          </div>
                        </div>
                        <span className="text-xs font-bold text-[#005953] dark:text-emerald-400">
                          {isRtl ? 'اختيار' : 'Select'}
                        </span>
                      </div>
                    )
                  })
                ) : (
                  <div className="p-4 text-center text-xs text-slate-400 font-medium">
                    {isSearching ? (isRtl ? 'جاري البحث عن الطلاب...' : 'Searching students...') : (isRtl ? 'لم يتم العثور على طالب بهذا الاسم' : 'No students found')}
                  </div>
                )}
              </div>
            )}
          </div>
          <div className="space-y-1.5">
            <label className="block text-xs font-bold text-slate-700 dark:text-slate-300">
              {isRtl ? 'ملحوظة الإدارة (اختياري)' : 'Admin Notes (Optional)'}
            </label>
            <textarea
              rows={3}
              value={notes}
              onChange={(e) => setNotes(e.target.value)}
              placeholder={isRtl ? 'اكتب أي ملاحظة تريد حفظها مع قبول الطلب...' : 'Add notes regarding this acceptance...'}
              className="w-full px-4 py-2.5 rounded-2xl border border-slate-200 dark:border-slate-700 text-xs font-medium bg-slate-50/50 dark:bg-slate-800 text-slate-900 dark:text-white transition-all focus:ring-2 focus:ring-[#005953] focus:outline-hidden resize-none"
            />
          </div>
          <div className="pt-2 flex items-center justify-end gap-3 border-t border-slate-100 dark:border-slate-800">
            <button
              type="button"
              disabled={isSubmitting}
              onClick={onClose}
              className="px-4 py-2.5 rounded-2xl border border-slate-200 dark:border-slate-700 text-xs font-bold text-slate-600 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors cursor-pointer disabled:opacity-40"
            >
              {isRtl ? 'إلغاء' : 'Cancel'}
            </button>
            <button
              type="submit"
              disabled={isSubmitting || !selectedStudent}
              className="px-6 py-2.5 rounded-2xl bg-[#005953] hover:bg-[#004742] text-white text-xs font-bold transition-all shadow-md cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed flex items-center gap-2"
            >
              {isSubmitting ? (
                <>
                  <Loader2 size={15} className="animate-spin" />
                  <span>{isRtl ? 'جاري الحفظ...' : 'Saving...'}</span>
                </>
              ) : (
                <>
                  <Check size={15} />
                  <span>{isRtl ? 'تأكيد القبول والربط' : 'Confirm & Link'}</span>
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


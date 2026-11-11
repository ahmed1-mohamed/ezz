import { useState, useEffect } from 'react'
import { createPortal } from 'react-dom'
import { X, Search, UserCheck, Plus, Loader2 } from 'lucide-react'
import { studentsApi } from '@/shared/services/api/studentsApi'
import { toast } from 'react-hot-toast'
import { getApiErrorText } from '@/shared/utils/errorHandler'

export default function AddChildModal({
  isOpen,
  onClose,
  isRtl = true,
  onAddChild,
  existingChildIds = [],
}) {
  const [students, setStudents] = useState([])
  const [searchQuery, setSearchQuery] = useState('')
  const [isLoading, setIsLoading] = useState(false)
  const [isLinking, setIsLinking] = useState(false)
  useEffect(() => {
    if (!isOpen) return
    let active = true
    const trimmed = searchQuery.trim()
    const timer = setTimeout(async () => {
      setIsLoading(true)
      try {
        const res = await studentsApi.fetchStudents({
          search: trimmed || undefined,
          limit: 50
        })
        if (!active) return
        const list = res?.data || (Array.isArray(res) ? res : [])
        setStudents(Array.isArray(list) ? list : [])
      } catch (err) {
        console.error('Failed to load students for linking:', err)
        if (active) setStudents([])
      } finally {
        if (active) setIsLoading(false)
      }
    }, trimmed ? 300 : 0)
    return () => {
      active = false
      clearTimeout(timer)
    }
  }, [isOpen, searchQuery])
  if (!isOpen || typeof document === 'undefined') return null
  const handleSelectStudent = async (student) => {
    setIsLinking(true)
    try {
      await onAddChild(student)
      toast.success(isRtl ? 'تم ربط الطالب بنجاح' : 'Student linked successfully')
      onClose()
    } catch (err) {
      console.error('Failed to link student:', err)
      toast.error(getApiErrorText(err, isRtl ? 'فشل في ربط الطالب' : 'Failed to link student'))
    } finally {
      setIsLinking(false)
    }
  }
  return createPortal(
    <div
      role="dialog"
      aria-modal="true"
      className="fixed inset-0 w-screen h-screen min-h-screen z-[99999] flex items-center justify-center bg-black/80 backdrop-blur-sm p-4 animate-fade-in"
      dir={isRtl ? 'rtl' : 'ltr'}
    >
      <div className="w-full max-w-lg bg-white dark:bg-slate-900 rounded-3xl shadow-2xl overflow-hidden animate-fadeIn border border-slate-100 dark:border-slate-800">
        <div className="flex items-center justify-between px-6 py-5 border-b border-slate-100 dark:border-slate-800">
          <div className="flex items-center gap-2.5">
            <div className="w-9 h-9 rounded-2xl bg-emerald-50 dark:bg-emerald-950/40 text-[#00594C] dark:text-emerald-400 flex items-center justify-center">
              <UserCheck size={18} />
            </div>
            <h3 className="text-base font-bold text-slate-800 dark:text-white">
              {isRtl ? 'إضافة ابن إلى ولي الأمر' : 'Add Child to Parent'}
            </h3>
          </div>
          <button
            type="button"
            onClick={onClose}
            className="w-8 h-8 rounded-xl flex items-center justify-center text-slate-400 hover:text-slate-600 hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors cursor-pointer"
          >
            <X size={18} />
          </button>
        </div>
        <div className="p-6 space-y-4">
          <div className="relative">
            <Search
              size={18}
              className={`absolute top-1/2 -translate-y-1/2 ${isRtl ? 'right-3.5' : 'left-3.5'} text-slate-400`}
            />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder={isRtl ? 'ابحث عن طالب بالاسم، البريد، أو الهاتف...' : 'Search student by name, email, or phone...'}
              className={`w-full bg-[#f3f7f6] dark:bg-slate-950/80 border border-transparent focus:border-[#00594C]/30 focus:bg-white dark:focus:bg-slate-900 text-slate-800 dark:text-slate-100 rounded-2xl py-3 ${isRtl ? 'pr-11 pl-4' : 'pl-11 pr-4'} outline-none text-sm placeholder-slate-400 transition-all`}
            />
          </div>
          <div className="max-h-72 overflow-y-auto divide-y divide-slate-100 dark:divide-slate-800/80 pr-1">
            {isLoading ? (
              <div className="flex items-center justify-center py-10 text-slate-400">
                <Loader2 size={24} className="animate-spin text-[#00594C]" />
              </div>
            ) : students.length === 0 ? (
              <p className="text-center py-8 text-xs text-slate-400">
                {isRtl ? 'لا يوجد طلاب مطابقين للبحث' : 'No matching students found'}
              </p>
            ) : (
              students.map((student) => {
                const sId = student.student_id || student.id || student._id
                const isAlreadyLinked = existingChildIds.includes(sId)
                const sName = typeof student.name === 'object'
                  ? (isRtl ? student.name?.ar || student.name?.en : student.name?.en || student.name?.ar)
                  : (student.name || '-')
                return (
                  <div
                    key={sId}
                    className="py-3 flex items-center justify-between gap-3 hover:bg-slate-50 dark:hover:bg-slate-800/40 px-3 rounded-2xl transition-colors"
                  >
                    <div className="text-start">
                      <p className="text-sm font-bold text-slate-800 dark:text-white">
                        {sName}
                      </p>
                      <p className="text-xs text-slate-400 mt-0.5" dir="ltr">
                        {student.email || student.phone || '-'}
                      </p>
                    </div>
                    <button
                      type="button"
                      disabled={isAlreadyLinked || isLinking}
                      onClick={() => handleSelectStudent(student)}
                      className={`px-3.5 py-1.5 rounded-xl text-xs font-bold transition-all flex items-center gap-1 cursor-pointer ${
                        isAlreadyLinked
                          ? 'bg-slate-100 text-slate-400 dark:bg-slate-800 dark:text-slate-500 cursor-not-allowed'
                          : 'bg-[#00594C] hover:bg-[#004742] text-white shadow-xs active:scale-95'
                      }`}
                    >
                      {isAlreadyLinked ? (
                        <span>{isRtl ? 'مرتبط مسبقاً' : 'Linked'}</span>
                      ) : (
                        <>
                          <Plus size={13} />
                          <span>{isRtl ? 'ربط' : 'Link'}</span>
                        </>
                      )}
                    </button>
                  </div>
                )
              })
            )}
          </div>
        </div>
      </div>
    </div>,
    document.body
  )
}

import { useState, useEffect, useMemo } from 'react'
import { X, Search, BookOpen, Loader2 } from 'lucide-react'
import { createPortal } from 'react-dom'
import { showErrorToast } from '@/shared/utils/sweetAlert'
import { adminGroupsApi } from '@/shared/services/api/adminGroupsApi'

const textOf = (val) => (typeof val === 'object' && val !== null ? (val.name || val.ar || val.en || '') : (val || ''))

export default function ChangeGroupModal({
  isOpen,
  onClose,
  student,
  isRtl,
  onChangeGroup
}) {
  const [searchQuery, setSearchQuery] = useState('')
  const [groups, setGroups] = useState([])
  const [isLoadingGroups, setIsLoadingGroups] = useState(true)
  const [selectedGroup, setSelectedGroup] = useState(null)
  const [isSubmitting, setIsSubmitting] = useState(false)
  const currentGroups = Array.isArray(student?.groups) ? student.groups : []
  const currentGroup = currentGroups[0] || null
  const studentDisplayName = textOf(student?.name) || '-'
  useEffect(() => {
    let isMounted = true
    adminGroupsApi.fetchLocalizedActiveGroups({ limit: 100 })
      .then((res) => {
        if (isMounted) setGroups(Array.isArray(res?.data) ? res.data : [])
      })
      .catch((err) => console.error('Failed to load groups:', err))
      .finally(() => {
        if (isMounted) setIsLoadingGroups(false)
      })
    return () => {
      isMounted = false
    }
  }, [])
  const filteredGroups = useMemo(() => {
    const currentIds = currentGroups.map((g) => g.id)
    const available = groups.filter((g) => !currentIds.includes(g.id))
    const query = searchQuery.trim().toLowerCase()
    if (!query) return available
    return available.filter((g) =>
      textOf(g.name).toLowerCase().includes(query) || textOf(g.teacher).toLowerCase().includes(query)
    )
  }, [groups, currentGroups, searchQuery])
  if (!isOpen || !student) return null
  const handleConfirmChange = async () => {
    if (!selectedGroup) {
      showErrorToast(isRtl ? 'الرجاء اختيار مجموعة جديدة!' : 'Please select a new group!', isRtl)
      return
    }
    setIsSubmitting(true)
    try {
      await onChangeGroup(currentGroup?.id || null, selectedGroup.id)
      onClose()
    } catch {
    } finally {
      setIsSubmitting(false)
    }
  }
  return createPortal(
    <div className="fixed inset-0 z-[9999] flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm animate-fadeIn" dir={isRtl ? 'rtl' : 'ltr'}>
      <div className="absolute inset-0 cursor-default" onClick={onClose} />
      <div className="relative w-full max-w-2xl max-h-[90vh] overflow-y-auto bg-white dark:bg-slate-900 rounded-3xl p-5 sm:p-6 shadow-2xl z-10 flex flex-col gap-5 text-start border border-slate-100 dark:border-slate-800">
        <div className="flex items-center justify-between border-b border-slate-100 dark:border-slate-800 pb-3">
          <h3 className="text-lg font-bold text-slate-800 dark:text-white">
            {isRtl ? 'تغيير المجموعة للطالب' : 'Change Group for Student'}
          </h3>
          <button
            type="button"
            onClick={onClose}
            className="p-1.5 hover:bg-slate-50 dark:hover:bg-slate-800 text-slate-400 dark:text-slate-500 hover:text-slate-600 rounded-full transition-colors cursor-pointer"
          >
            <X size={20} />
          </button>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div>
            <label className="block text-xs font-bold text-slate-500 dark:text-slate-400 mb-1.5">
              {isRtl ? 'اسم الطالب' : 'Student Name'}
            </label>
            <input
              type="text"
              readOnly
              value={studentDisplayName}
              className="w-full bg-[#f3f7f6] dark:bg-slate-950/60 border border-slate-100/40 dark:border-slate-800/40 text-slate-500 dark:text-slate-400 rounded-2xl py-3 px-4 outline-none font-semibold text-sm cursor-not-allowed"
            />
          </div>
          <div>
            <label className="block text-xs font-bold text-slate-500 dark:text-slate-400 mb-1.5">
              {isRtl ? 'المجموعة الحالية' : 'Current Group'}
            </label>
            <input
              type="text"
              readOnly
              value={currentGroup ? textOf(currentGroup.name) : (isRtl ? 'لا يوجد مجموعة' : 'No Group')}
              className="w-full bg-[#f3f7f6] dark:bg-slate-950/60 border border-slate-100/40 dark:border-slate-800/40 text-slate-500 dark:text-slate-400 rounded-2xl py-3 px-4 outline-none font-semibold text-sm cursor-not-allowed"
            />
          </div>
        </div>
        <div className="space-y-4">
          <label className="block text-xs font-bold text-slate-500 dark:text-slate-400">
            {isRtl ? 'اختر المجموعة الجديدة' : 'Select New Group'}
          </label>
          <div className="relative">
            <div className={`absolute inset-y-0 ${isRtl ? 'left-3.5' : 'right-3.5'} flex items-center pointer-events-none text-slate-400`}>
              <Search size={16} />
            </div>
            <input
              type="text"
              placeholder={isRtl ? 'ابحث باسم المجموعة أو المعلم...' : 'Search by group or teacher...'}
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className={`w-full bg-[#f3f7f6] dark:bg-slate-950 border border-transparent focus:border-brand-500/20 focus:bg-white text-slate-800 dark:text-slate-100 rounded-2xl py-3 ${isRtl ? 'pl-10 pr-4' : 'pr-10 pl-4'} outline-none transition-all text-sm`}
            />
          </div>
          <div className="space-y-3 max-h-[35vh] overflow-y-auto pe-1">
            {isLoadingGroups ? (
              <div className="flex justify-center py-6">
                <Loader2 className="w-5 h-5 animate-spin text-[#005953]" />
              </div>
            ) : filteredGroups.length === 0 ? (
              <div className="text-center py-6 text-sm text-slate-400">
                {isRtl ? 'لم يتم العثور على مجموعات' : 'No groups found'}
              </div>
            ) : (
              filteredGroups.map((group) => {
                const isSelected = selectedGroup?.id === group.id
                const isFull = group.maxStudents && Number(group.currentStudentsCount) >= Number(group.maxStudents)
                return (
                  <button
                    type="button"
                    key={group.id}
                    disabled={isFull}
                    onClick={() => setSelectedGroup(group)}
                    className={`w-full flex items-center justify-between gap-3 p-4 rounded-2xl border transition-all text-start ${isFull ? 'opacity-50 cursor-not-allowed' : 'cursor-pointer'} ${isSelected
                      ? 'border-[#005953] bg-[#f3f7f6] dark:bg-slate-950/40'
                      : 'border-slate-100 dark:border-slate-800/80 hover:bg-slate-50 dark:hover:bg-slate-950/20 bg-white dark:bg-slate-900'
                      }`}
                  >
                    <div className="flex items-center gap-3 min-w-0">
                      <div className={`w-8 h-8 rounded-full flex items-center justify-center shrink-0 ${isSelected ? 'bg-[#005953] text-white' : 'bg-slate-100 dark:bg-slate-800 text-slate-400'}`}>
                        <BookOpen size={14} />
                      </div>
                      <div className="min-w-0 space-y-0.5">
                        <span className="block text-sm font-bold text-slate-700 dark:text-slate-200 truncate">
                          {textOf(group.name)}
                        </span>
                        <span className="block text-xs font-semibold text-slate-400 dark:text-slate-500 truncate">
                          {textOf(group.teacher)}
                        </span>
                      </div>
                    </div>
                    <div className="flex flex-wrap justify-end gap-2 shrink-0">
                      {group.studentLevel && (
                        <span className="inline-flex items-center px-2 py-0.5 rounded-xl text-[10px] font-bold bg-blue-50 text-blue-700 dark:bg-blue-950/25 dark:text-blue-400">
                          {textOf(group.studentLevel)}
                        </span>
                      )}
                      <span className="inline-flex items-center px-2 py-0.5 rounded-xl text-[10px] font-bold bg-slate-100 text-slate-600 dark:bg-slate-800 dark:text-slate-300">
                        {group.currentStudentsCount ?? 0}/{group.maxStudents ?? '-'}
                      </span>
                    </div>
                  </button>
                )
              })
            )}
          </div>
        </div>
        <button
          type="button"
          onClick={handleConfirmChange}
          disabled={isSubmitting || !selectedGroup}
          className="w-full py-4 bg-[#005953] hover:bg-[#004742] text-white font-bold rounded-2xl transition-all shadow-md active:scale-[0.98] cursor-pointer text-center text-sm flex items-center justify-center gap-2 disabled:opacity-50"
        >
          {isSubmitting && <Loader2 className="w-4 h-4 animate-spin" />}
          {isRtl ? 'تغيير المجموعة' : 'Change Group'}
        </button>
      </div>
    </div>,
    document.body
  )
}

import { useState, useEffect, useMemo } from 'react'
import { X, Search, BookOpen, Loader2, ChevronDown, ArrowRight } from 'lucide-react'
import { createPortal } from 'react-dom'
import { showErrorToast } from '@/shared/utils/sweetAlert'
import { adminGroupsApi } from '@/shared/services/api/adminGroupsApi'

const textOf = (val) => (typeof val === 'object' && val !== null ? (val.name || val.ar || val.en || '') : (val || ''))

export default function ChangeGroupModal({
  isOpen,
  onClose,
  student,
  isRtl,
  initialGroupId = null,
  onChangeGroup
}) {
  const cleanInitialId = typeof initialGroupId === 'string' && initialGroupId.trim() ? initialGroupId.trim() : null
  const [searchQuery, setSearchQuery] = useState('')
  const [groups, setGroups] = useState([])
  const [isLoadingGroups, setIsLoadingGroups] = useState(true)
  const [selectedGroup, setSelectedGroup] = useState(null)
  const [isSubmitting, setIsSubmitting] = useState(false)
  const studentId = useMemo(() => {
    return String(student?.id || student?._id || student?.student_id || student?.userId || '')
  }, [student])
  const studentRawGroups = useMemo(() => {
    const raw = student?.groups || student?.Groups || student?.enrolledGroups || (student?.group ? [student.group] : [])
    return Array.isArray(raw) ? raw : (raw ? [raw] : [])
  }, [student])
  const studentGroupsList = useMemo(() => {
    const map = new Map()
    studentRawGroups.forEach((grp, idx) => {
      if (typeof grp === 'string' && grp.trim()) {
        const found = groups.find((g) => (g.id || g._id) === grp.trim())
        if (found) {
          map.set(grp.trim(), found)
        } else {
          map.set(grp.trim(), { id: grp.trim(), _id: grp.trim(), name: grp.trim() })
        }
      } else if (typeof grp === 'object' && grp !== null) {
        const gId = String(grp.id || grp._id || `grp-${idx}`)
        const found = groups.find((g) => String(g.id || g._id) === gId)
        map.set(gId, found ? { ...grp, ...found } : grp)
      }
    })
    if (studentId && Array.isArray(groups)) {
      groups.forEach((g) => {
        const gStudents = Array.isArray(g.students) ? g.students : []
        const isMember = gStudents.some((s) => {
          const sId = typeof s === 'object' && s !== null ? String(s.id || s._id || s.student_id || '') : String(s || '')
          return sId && sId === studentId
        })
        const gId = String(g.id || g._id || '')
        if (isMember && gId && !map.has(gId)) {
          map.set(gId, g)
        }
      })
    }
    return Array.from(map.values())
  }, [studentRawGroups, groups, studentId])
  const otherPlatformGroups = useMemo(() => {
    const studentGroupIds = new Set(studentGroupsList.map((g) => String(g.id || g._id)))
    return groups.filter((g) => !studentGroupIds.has(String(g.id || g._id)))
  }, [groups, studentGroupsList])
  const [selectedSourceGroupId, setSelectedSourceGroupId] = useState(() => {
    if (cleanInitialId) return cleanInitialId
    const first = studentGroupsList[0]
    return first ? String(first.id || first._id || '') : ''
  })
  useEffect(() => {
    if (cleanInitialId) {
      setSelectedSourceGroupId(cleanInitialId)
    } else if (studentGroupsList.length > 0) {
      setSelectedSourceGroupId((prev) => {
        if (prev && (studentGroupsList.some((g) => String(g.id || g._id) === String(prev)) || groups.some((g) => String(g.id || g._id) === String(prev)))) {
          return prev
        }
        const first = studentGroupsList[0]
        return first ? String(first.id || first._id || '') : ''
      })
    }
  }, [cleanInitialId, studentGroupsList, groups, isOpen])
  const selectedSourceGroup = useMemo(() => {
    if (!selectedSourceGroupId) return null
    return (
      studentGroupsList.find((g) => String(g.id || g._id) === String(selectedSourceGroupId)) ||
      groups.find((g) => String(g.id || g._id) === String(selectedSourceGroupId)) ||
      null
    )
  }, [studentGroupsList, groups, selectedSourceGroupId])
  const studentDisplayName = textOf(student?.name) || '-'
  useEffect(() => {
    let isMounted = true
    const trimmed = searchQuery.trim()
    const timer = setTimeout(() => {
      setIsLoadingGroups(true)
      const params = { limit: 100 }
      if (trimmed) params.search = trimmed
      adminGroupsApi.fetchLocalizedActiveGroups(params)
        .then((res) => {
          if (isMounted) setGroups(Array.isArray(res?.data) ? res.data : [])
        })
        .catch((err) => console.error('Failed to load groups:', err))
        .finally(() => {
          if (isMounted) setIsLoadingGroups(false)
        })
    }, trimmed ? 300 : 0)
    return () => {
      isMounted = false
      clearTimeout(timer)
    }
  }, [searchQuery])
  const filteredGroups = useMemo(() => {
    return groups.filter((g) => {
      const gId = String(g.id || g._id)
      return gId !== String(selectedSourceGroupId)
    })
  }, [groups, selectedSourceGroupId])
  if (!isOpen || !student) return null
  const handleConfirmChange = async () => {
    if (!selectedSourceGroupId) {
      showErrorToast(isRtl ? 'الرجاء اختيار المجموعة الحالية المراد النقل منها!' : 'Please select the current group to transfer from!', isRtl)
      return
    }
    if (!selectedGroup) {
      showErrorToast(isRtl ? 'الرجاء اختيار المجموعة الجديدة المراد النقل إليها!' : 'Please select a new group!', isRtl)
      return
    }
    const targetId = selectedGroup.id || selectedGroup._id
    if (selectedSourceGroupId === targetId) {
      showErrorToast(isRtl ? 'لا يمكن النقل لنفس المجموعة الحالية!' : 'Cannot transfer to the same group!', isRtl)
      return
    }
    setIsSubmitting(true)
    try {
      await onChangeGroup(selectedSourceGroupId, targetId)
      onClose()
    } catch (err) { void err; } finally {
      setIsSubmitting(false)
    }
  }
  if (typeof document === 'undefined') return null
  return createPortal(
    <div className="fixed inset-0 w-screen h-screen min-h-screen z-[99999] flex items-center justify-center p-3 sm:p-5 bg-black/80 backdrop-blur-sm animate-fade-in" dir={isRtl ? 'rtl' : 'ltr'}>
      <div className="absolute inset-0 cursor-default" onClick={onClose} />
      <div className="relative w-full max-w-2xl max-h-[90vh] overflow-y-auto bg-white dark:bg-slate-900 rounded-3xl p-5 sm:p-6 shadow-2xl z-10 flex flex-col gap-5 text-start border border-slate-100 dark:border-slate-800">
        <div className="flex items-center justify-between border-b border-slate-100 dark:border-slate-800 pb-3">
          <h3 className="text-lg font-bold text-slate-800 dark:text-white">
            {isRtl ? 'نقل الطالب إلى مجموعة أخرى' : 'Transfer Student to Another Group'}
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
              className="w-full bg-[#f3f7f6] dark:bg-slate-950/60 border border-slate-100/40 dark:border-slate-800/40 text-slate-700 dark:text-slate-300 rounded-2xl py-3 px-4 outline-none font-semibold text-sm cursor-not-allowed"
            />
          </div>
          <div>
            <label className="block text-xs font-bold text-[#005953] dark:text-emerald-400 mb-1.5">
              {isRtl ? 'المجموعة الحالية (المراد النقل منها) *' : 'Current Group (To transfer from) *'}
            </label>
            <div className="relative">
              <select
                value={selectedSourceGroupId}
                onChange={(e) => {
                  const newSourceId = e.target.value
                  setSelectedSourceGroupId(newSourceId)
                  if (selectedGroup && String(selectedGroup.id || selectedGroup._id) === String(newSourceId)) {
                    setSelectedGroup(null)
                  }
                }}
                className="w-full bg-[#f3f7f6] dark:bg-slate-950 border border-[#005953]/30 dark:border-emerald-800/40 text-slate-800 dark:text-slate-100 rounded-2xl py-3 px-4 pe-10 font-bold text-sm outline-none focus:border-[#005953] transition-colors cursor-pointer appearance-none shadow-xs"
              >
                <option value="">
                  {isRtl ? '-- اختر المجموعة المراد النقل منها --' : '-- Select Source Group --'}
                </option>
                {studentGroupsList.length > 0 && (
                  <optgroup label={isRtl ? 'مجموعات الطالب الحالية المسجل بها' : 'Current Enrolled Groups'}>
                    {studentGroupsList.map((grp, idx) => {
                      const gId = String(grp.id || grp._id || idx)
                      const gName = textOf(grp.name) || `مجموعة ${idx + 1}`
                      const tName = textOf(grp.teacher)
                      return (
                        <option key={gId} value={gId} className="dark:bg-slate-900 font-bold">
                          {gName} {tName ? `(${tName})` : ''}
                        </option>
                      )
                    })}
                  </optgroup>
                )}
                {otherPlatformGroups.length > 0 && (
                  <optgroup label={isRtl ? 'مجموعات تعليمية أخرى بالمنصة' : 'Other Platform Groups'}>
                    {otherPlatformGroups.map((grp) => {
                      const gId = String(grp.id || grp._id)
                      const gName = textOf(grp.name)
                      const tName = textOf(grp.teacher)
                      return (
                        <option key={gId} value={gId} className="dark:bg-slate-900">
                          {gName} {tName ? `(${tName})` : ''}
                        </option>
                      )
                    })}
                  </optgroup>
                )}
              </select>
              <div className={`absolute top-1/2 -translate-y-1/2 ${isRtl ? 'left-3.5' : 'right-3.5'} pointer-events-none text-[#005953] dark:text-emerald-400`}>
                <ChevronDown size={16} />
              </div>
            </div>
            {studentGroupsList.length > 1 && (
              <p className="text-[11px] text-[#005953] dark:text-emerald-400 font-bold mt-1">
                {isRtl
                  ? `الطالب مسجل في ${studentGroupsList.length} مجموعات، يمكنك اختيار المجموعة التي تريد نقله منها.`
                  : `Student is enrolled in ${studentGroupsList.length} groups. Choose which one to transfer out of.`}
              </p>
            )}
          </div>
        </div>
        {selectedSourceGroup && selectedGroup && (
          <div className="p-3.5 bg-teal-50/80 dark:bg-emerald-950/30 border border-teal-100 dark:border-emerald-900/40 rounded-2xl flex items-center justify-between gap-3 text-xs font-bold text-slate-700 dark:text-slate-200">
            <div className="flex items-center gap-1.5 min-w-0">
              <span className="text-slate-400 font-normal shrink-0">{isRtl ? 'من:' : 'From:'}</span>
              <span className="text-[#005953] dark:text-emerald-400 font-black truncate">{textOf(selectedSourceGroup.name)}</span>
            </div>
            <ArrowRight size={16} className={`text-slate-400 shrink-0 ${isRtl ? 'rotate-180' : ''}`} />
            <div className="flex items-center gap-1.5 min-w-0">
              <span className="text-slate-400 font-normal shrink-0">{isRtl ? 'إلى:' : 'To:'}</span>
              <span className="text-[#005953] dark:text-emerald-400 font-black truncate">{textOf(selectedGroup.name)}</span>
            </div>
          </div>
        )}
        <div className="space-y-4">
          <label className="block text-xs font-bold text-slate-600 dark:text-slate-300">
            {isRtl ? 'اختر المجموعة الجديدة المراد النقل إليها' : 'Select Target Group (To transfer into)'}
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
              className={`w-full bg-[#f3f7f6] dark:bg-slate-950 border border-transparent focus:border-[#005953]/30 focus:bg-white dark:focus:bg-slate-900 text-slate-800 dark:text-slate-100 rounded-2xl py-3 ${isRtl ? 'pl-10 pr-4' : 'pr-10 pl-4'} outline-none transition-all text-sm font-medium`}
            />
          </div>
          <div className="space-y-3 max-h-[35vh] overflow-y-auto pe-1">
            {isLoadingGroups ? (
              <div className="flex justify-center py-6">
                <Loader2 className="w-5 h-5 animate-spin text-[#005953]" />
              </div>
            ) : filteredGroups.length === 0 ? (
              <div className="text-center py-6 text-sm text-slate-400">
                {isRtl ? 'لم يتم العثور على مجموعات متاحة' : 'No available groups found'}
              </div>
            ) : (
              filteredGroups.map((group) => {
                const gId = group.id || group._id
                const isSelected = (selectedGroup?.id || selectedGroup?._id) === gId
                const isFull = group.maxStudents && Number(group.currentStudentsCount) >= Number(group.maxStudents)
                return (
                  <button
                    type="button"
                    key={gId}
                    disabled={isFull}
                    onClick={() => setSelectedGroup(group)}
                    className={`w-full flex items-center justify-between gap-3 p-4 rounded-2xl border transition-all text-start ${isFull ? 'opacity-50 cursor-not-allowed' : 'cursor-pointer'} ${isSelected
                      ? 'border-[#005953] bg-teal-50/50 dark:bg-emerald-950/20 shadow-xs ring-1 ring-[#005953]/20'
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
          disabled={isSubmitting || !selectedGroup || !selectedSourceGroupId}
          className="w-full py-4 bg-[#005953] hover:bg-[#004742] text-white font-bold rounded-2xl transition-all shadow-md shadow-[#005953]/15 active:scale-[0.98] cursor-pointer text-center text-sm flex items-center justify-center gap-2 disabled:opacity-50"
        >
          {isSubmitting && <Loader2 className="w-4 h-4 animate-spin" />}
          {isRtl ? 'تأكيد نقل الطالب' : 'Confirm Student Transfer'}
        </button>
      </div>
    </div>,
    document.body
  )
}

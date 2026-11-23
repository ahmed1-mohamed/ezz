import { useState, useRef, useEffect, useMemo } from 'react'
import { ChevronDown, Search, X, Check, GraduationCap, Loader2 } from 'lucide-react'
import { teachersApi } from '@/shared/services/api/teachersApi'

function getLocalizedText(value, isRtl = true) {
  if (value === null || value === undefined) return ''
  if (typeof value === 'string' || typeof value === 'number') return String(value)
  if (Array.isArray(value)) return value.map((item) => getLocalizedText(item, isRtl)).filter(Boolean).join(' · ')
  if (typeof value !== 'object') return ''
  const localized = isRtl ? value.ar || value.en : value.en || value.ar
  if (localized) return getLocalizedText(localized, isRtl)
  for (const key of ['name', 'displayName', 'fullName', 'label', 'title']) {
    if (value[key]) return getLocalizedText(value[key], isRtl)
  }
  return ''
}

function getTeacherName(teacher, isRtl = true) {
  if (!teacher) return ''
  const bilingualName = teacher.name && typeof teacher.name === 'object' ? teacher.name : null
  return getLocalizedText(bilingualName, isRtl)
    || getLocalizedText(isRtl ? teacher.nameAr || teacher.name : teacher.nameEn || teacher.name, isRtl)
    || getLocalizedText(teacher.displayName, isRtl)
    || getLocalizedText(teacher.fullName, isRtl)
}

function getTeacherCurriculum(teacher, isRtl) {
  const specializations = Array.isArray(teacher.specializations)
    ? teacher.specializations.map((specialization) => {
        if (typeof specialization === 'string' && /^[a-f\d]{24}$/i.test(specialization)) return ''
        return specialization?.name || specialization?.title || specialization?.label || specialization
      }).filter(Boolean)
    : []
  return getLocalizedText(
    specializations.length
      ? specializations
      : (teacher.curriculum?.name || teacher.curriculum || teacher.subject),
    isRtl,
  )
}

function TeacherAvatar({ src, name, className }) {
  const [failedSrc, setFailedSrc] = useState(null)
  const imageSrc = typeof src === 'string' && src.trim() ? src.trim() : null
  return imageSrc && failedSrc !== imageSrc ? (
    <img src={imageSrc} alt="" onError={() => setFailedSrc(imageSrc)} className="w-full h-full object-cover" />
  ) : (
    <span className={className}>{name?.trim()?.charAt(0) || <GraduationCap size={15} />}</span>
  )
}

export default function TeacherSelect({
  teachers = [],
  selectedTeacher = null,
  onSelect,
  currentTeacherId = null,
  placeholder = 'اختر معلماً...',
  isRtl = true,
  disabled = false,
}) {
  const [isOpen, setIsOpen] = useState(false)
  const [searchQuery, setSearchQuery] = useState('')
  const [isSearching, setIsSearching] = useState(false)
  const [backendTeachers, setBackendTeachers] = useState(null)
  const containerRef = useRef(null)
  const searchInputRef = useRef(null)
  const currentPool = useMemo(() => {
    const list = backendTeachers !== null ? backendTeachers : teachers
    return Array.isArray(list) ? list : []
  }, [backendTeachers, teachers])
  const [prevSearchQuery, setPrevSearchQuery] = useState(searchQuery)
  if (prevSearchQuery !== searchQuery) {
    setPrevSearchQuery(searchQuery)
    if (!searchQuery.trim()) {
      setBackendTeachers(null)
      setIsSearching(false)
    }
  }
  useEffect(() => {
    if (!isOpen) return
    const trimmed = searchQuery.trim()
    if (!trimmed) return
    let active = true
    const timer = setTimeout(async () => {
      setIsSearching(true)
      try {
        const res = await teachersApi.fetchTeachers({ search: trimmed, limit: 50 })
        if (!active) return
        const list = res?.data || (Array.isArray(res) ? res : [])
        setBackendTeachers(Array.isArray(list) ? list : [])
      } catch (err) {
        console.warn('Backend teacher search failed:', err)
        if (active) setBackendTeachers([])
      } finally {
        if (active) setIsSearching(false)
      }
    }, 350)
    return () => {
      active = false
      clearTimeout(timer)
    }
  }, [searchQuery, isOpen])
  useEffect(() => {
    const handleClickOutside = (e) => {
      if (containerRef.current && !containerRef.current.contains(e.target)) {
        setIsOpen(false)
      }
    }
    document.addEventListener('mousedown', handleClickOutside)
    return () => document.removeEventListener('mousedown', handleClickOutside)
  }, [])
  useEffect(() => {
    if (isOpen && searchInputRef.current) {
      searchInputRef.current.focus()
    }
  }, [isOpen])
  const selectedName = selectedTeacher ? getTeacherName(selectedTeacher, isRtl) : ''
  const filteredTeachers = currentPool.filter((teacher) => teacher && typeof teacher === 'object')
  return (
    <div className="relative w-full" ref={containerRef} dir={isRtl ? 'rtl' : 'ltr'}>
      <button
        type="button"
        disabled={disabled}
        onClick={() => setIsOpen((prev) => !prev)}
        className={`w-full flex items-center justify-between gap-3 bg-[#f3f7f6] dark:bg-slate-950 border ${
          isOpen ? 'border-brand-500 shadow-sm' : 'border-slate-200 dark:border-slate-800'
        } rounded-2xl py-3 px-4 text-sm text-slate-800 dark:text-slate-100 transition-all hover:bg-slate-100 dark:hover:bg-slate-900 cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed`}
      >
        <div className="flex items-center gap-2.5 min-w-0">
          <div className="w-8 h-8 rounded-xl bg-amber-50 dark:bg-amber-900/30 text-amber-600 dark:text-amber-400 flex items-center justify-center shrink-0 text-xs font-bold overflow-hidden">
            {selectedTeacher ? <TeacherAvatar src={selectedTeacher.image} name={selectedName} className="font-bold" /> : <GraduationCap size={15} />}
          </div>
          <span className={`truncate font-medium ${selectedTeacher ? 'text-slate-800 dark:text-slate-100' : 'text-slate-400'}`}>
            {selectedTeacher ? selectedName : placeholder}
          </span>
        </div>
        <div className="flex items-center gap-1.5 shrink-0 text-slate-400">
          {selectedTeacher && (
            <span
              onClick={(e) => {
                e.stopPropagation()
                onSelect(null)
              }}
              className="p-1 hover:text-red-500 rounded-md transition-colors"
              title={isRtl ? 'إلغاء التحديد' : 'Clear selection'}
            >
              <X size={14} />
            </span>
          )}
          <ChevronDown
            size={16}
            className={`transition-transform duration-200 ${isOpen ? 'rotate-180' : ''}`}
          />
        </div>
      </button>
      {isOpen && (
        <div className="absolute left-0 right-0 top-full mt-2 z-50 bg-white dark:bg-slate-900 rounded-3xl shadow-2xl border border-slate-100 dark:border-slate-800 p-3 space-y-2 max-h-80 flex flex-col animate-fadeIn">
          <div className="relative shrink-0">
            <Search size={14} className={`absolute ${isRtl ? 'right-3' : 'left-3'} top-1/2 -translate-y-1/2 text-slate-400 pointer-events-none`} />
            <input
              ref={searchInputRef}
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder={isRtl ? 'ابحث باسم المعلم، التخصص، أو البريد...' : 'Search teacher by name or subject...'}
              className={`w-full bg-[#f3f7f6] dark:bg-slate-800 rounded-xl py-2 ${
                isRtl ? 'pr-9 pl-8' : 'pl-9 pr-8'
              } text-xs text-slate-800 dark:text-slate-100 outline-none border border-transparent focus:border-brand-400 transition-colors`}
            />
            {isSearching ? (
              <div className={`absolute ${isRtl ? 'left-2.5' : 'right-2.5'} top-1/2 -translate-y-1/2`}>
                <Loader2 size={12} className="animate-spin text-brand-600" />
              </div>
            ) : searchQuery ? (
              <button
                type="button"
                onClick={() => setSearchQuery('')}
                className={`absolute ${isRtl ? 'left-2.5' : 'right-2.5'} top-1/2 -translate-y-1/2 text-slate-400 hover:text-slate-600 p-0.5 cursor-pointer`}
              >
                <X size={12} />
              </button>
            ) : null}
          </div>
          <div className="overflow-y-auto space-y-1 pr-0.5 max-h-60">
            {filteredTeachers.length === 0 ? (
              <div className="py-6 text-center text-xs text-slate-400">
                {isRtl ? 'لا يوجد معلمون مطابقون للبحث' : 'No teachers found'}
              </div>
            ) : (
              filteredTeachers.map((teacher) => {
                const tId = teacher.id || teacher.teacher_id || teacher._id
                const tName = getTeacherName(teacher, isRtl)
                const curriculumText = getTeacherCurriculum(teacher, isRtl)
                const degreeText = getLocalizedText(teacher.degree || teacher.qualification, isRtl)
                const secondaryDetails = [curriculumText, degreeText, getLocalizedText(teacher.phone, isRtl)].filter(Boolean).join(' · ')
                const isSelected = selectedTeacher && String(selectedTeacher.id || selectedTeacher.teacher_id || selectedTeacher._id) === String(tId)
                const isCurrent = currentTeacherId && String(currentTeacherId) === String(tId)
                return (
                  <button
                    key={tId}
                    type="button"
                    onClick={() => {
                      onSelect(teacher)
                      setIsOpen(false)
                      setSearchQuery('')
                    }}
                    className={`w-full flex items-center justify-between p-2.5 rounded-2xl text-start transition-all cursor-pointer ${
                      isSelected
                        ? 'bg-amber-500 text-white font-semibold shadow-sm'
                        : 'hover:bg-slate-50 dark:hover:bg-slate-800/70 text-slate-700 dark:text-slate-200'
                    }`}
                  >
                    <div className="flex items-center gap-3 min-w-0">
                      <div
                        className={`w-9 h-9 rounded-xl flex items-center justify-center font-bold text-xs shrink-0 overflow-hidden ${
                          isSelected
                            ? 'bg-white/20 text-white'
                            : 'bg-amber-50 dark:bg-amber-900/30 text-amber-600 dark:text-amber-400'
                        }`}
                      >
                        <TeacherAvatar src={teacher.image} name={tName} className="font-bold" />
                      </div>
                      <div className="min-w-0">
                        <div className="flex items-center gap-1.5 flex-wrap">
                          <p className={`text-xs font-bold truncate ${isSelected ? 'text-white' : 'text-slate-800 dark:text-slate-100'}`}>
                            {tName}
                          </p>
                          {isCurrent && (
                            <span className={`text-[10px] px-1.5 py-0.2 rounded-md font-medium ${
                              isSelected ? 'bg-white/30 text-white' : 'bg-slate-200 dark:bg-slate-700 text-slate-600 dark:text-slate-300'
                            }`}>
                              {isRtl ? 'المعلم الحالي' : 'Current'}
                            </span>
                          )}
                        </div>
                        {secondaryDetails && (
                          <p className={`text-[10px] truncate mt-0.5 ${isSelected ? 'text-white/80' : 'text-slate-400'}`}>
                            {secondaryDetails}
                          </p>
                        )}
                      </div>
                    </div>
                    {isSelected && <Check size={16} className="text-white shrink-0" />}
                  </button>
                )
              })
            )}
          </div>
        </div>
      )}
    </div>
  )
}

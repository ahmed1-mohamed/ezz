import { useState, useRef, useEffect, useMemo } from 'react'
import { ChevronDown, Search, X, Check, User } from 'lucide-react'

export default function StudentSelect({
  students = [],
  selectedStudent = null,
  onSelect,
  excludeIds = [],
  placeholder = 'اختر طالباً...',
  isRtl = true,
  disabled = false,
}) {
  const [isOpen, setIsOpen] = useState(false)
  const [searchQuery, setSearchQuery] = useState('')
  const containerRef = useRef(null)
  const searchInputRef = useRef(null)

  const excludedSet = useMemo(() => new Set(excludeIds.map(String)), [excludeIds])

  const availableStudents = useMemo(() => {
    return students.filter((s) => !excludedSet.has(String(s.id || s._id)))
  }, [students, excludedSet])

  const filteredStudents = useMemo(() => {
    const q = searchQuery.trim().toLowerCase()
    if (!q) return availableStudents
    return availableStudents.filter((s) => {
      const name = typeof s.name === 'object' && s.name !== null
        ? `${s.name.ar || ''} ${s.name.en || ''}`
        : (s.name || '')
      const email = s.email || ''
      const phone = s.phone || ''
      return name.toLowerCase().includes(q) || email.toLowerCase().includes(q) || phone.includes(q)
    })
  }, [availableStudents, searchQuery])

  // Close when clicking outside
  useEffect(() => {
    const handleClickOutside = (e) => {
      if (containerRef.current && !containerRef.current.contains(e.target)) {
        setIsOpen(false)
      }
    }
    document.addEventListener('mousedown', handleClickOutside)
    return () => document.removeEventListener('mousedown', handleClickOutside)
  }, [])

  // Auto focus search input when opened
  useEffect(() => {
    if (isOpen && searchInputRef.current) {
      searchInputRef.current.focus()
    }
  }, [isOpen])

  const getStudentName = (s) => {
    if (!s) return ''
    if (typeof s.name === 'object' && s.name !== null) {
      return isRtl ? (s.name.ar || s.name.en) : (s.name.en || s.name.ar)
    }
    return s.name || ''
  }

  const selectedName = selectedStudent ? getStudentName(selectedStudent) : ''

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
          <div className="w-7 h-7 rounded-xl bg-brand-50 dark:bg-brand-900/30 text-brand-600 dark:text-brand-400 flex items-center justify-center shrink-0 text-xs font-bold">
            {selectedStudent ? (selectedName.charAt(0) || <User size={14} />) : <User size={14} />}
          </div>
          <span className={`truncate font-medium ${selectedStudent ? 'text-slate-800 dark:text-slate-100' : 'text-slate-400'}`}>
            {selectedStudent ? selectedName : placeholder}
          </span>
        </div>
        <div className="flex items-center gap-1.5 shrink-0 text-slate-400">
          {selectedStudent && (
            <span
              onClick={(e) => {
                e.stopPropagation()
                onSelect(null)
              }}
              className="p-1 hover:text-red-500 rounded-md transition-colors"
              title="إلغاء التحديد"
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
        <div className="absolute left-0 right-0 top-full mt-2 z-50 bg-white dark:bg-slate-900 rounded-3xl shadow-2xl border border-slate-100 dark:border-slate-800 p-3 space-y-2 max-h-72 flex flex-col animate-fadeIn">
           <div className="relative shrink-0">
            <Search size={14} className={`absolute ${isRtl ? 'right-3' : 'left-3'} top-1/2 -translate-y-1/2 text-slate-400 pointer-events-none`} />
            <input
              ref={searchInputRef}
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder={isRtl ? 'ابحث بالاسم أو البريد...' : 'Search student...'}
              className={`w-full bg-[#f3f7f6] dark:bg-slate-800 rounded-xl py-2 ${
                isRtl ? 'pr-9 pl-8' : 'pl-9 pr-8'
              } text-xs text-slate-800 dark:text-slate-100 outline-none border border-transparent focus:border-brand-400 transition-colors`}
            />
            {searchQuery && (
              <button
                type="button"
                onClick={() => setSearchQuery('')}
                className={`absolute ${isRtl ? 'left-2.5' : 'right-2.5'} top-1/2 -translate-y-1/2 text-slate-400 hover:text-slate-600 p-0.5 cursor-pointer`}
              >
                <X size={12} />
              </button>
            )}
          </div>

           <div className="overflow-y-auto space-y-1 pr-0.5 max-h-52">
            {filteredStudents.length === 0 ? (
              <div className="py-6 text-center text-xs text-slate-400">
                {isRtl ? 'لا يوجد طلاب متاحون' : 'No students found'}
              </div>
            ) : (
              filteredStudents.map((student) => {
                const sId = student.id || student._id
                const sName = getStudentName(student)
                const isSelected = selectedStudent && String(selectedStudent.id || selectedStudent._id) === String(sId)

                return (
                  <button
                    key={sId}
                    type="button"
                    onClick={() => {
                      onSelect(student)
                      setIsOpen(false)
                      setSearchQuery('')
                    }}
                    className={`w-full flex items-center justify-between p-2 rounded-2xl text-start transition-all cursor-pointer ${
                      isSelected
                        ? 'bg-brand-500 text-white font-semibold shadow-sm'
                        : 'hover:bg-slate-50 dark:hover:bg-slate-800/70 text-slate-700 dark:text-slate-200'
                    }`}
                  >
                    <div className="flex items-center gap-2.5 min-w-0">
                      <div
                        className={`w-8 h-8 rounded-xl flex items-center justify-center font-bold text-xs shrink-0 ${
                          isSelected
                            ? 'bg-white/20 text-white'
                            : 'bg-brand-50 dark:bg-brand-900/30 text-brand-600 dark:text-brand-400'
                        }`}
                      >
                        {student.image || student.avatar ? (
                          <img src={student.image || student.avatar} alt="" className="w-full h-full rounded-xl object-cover" />
                        ) : (
                          sName.charAt(0) || <User size={14} />
                        )}
                      </div>
                      <div className="min-w-0">
                        <p className={`text-xs font-bold truncate ${isSelected ? 'text-white' : 'text-slate-800 dark:text-slate-100'}`}>
                          {sName}
                        </p>
                        {(student.email || student.phone) && (
                          <p className={`text-[10px] truncate ${isSelected ? 'text-white/80' : 'text-slate-400'}`}>
                            {student.email || student.phone}
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
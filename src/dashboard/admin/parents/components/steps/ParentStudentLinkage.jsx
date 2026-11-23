import { useState } from 'react'
import { Plus, X, Search, Check } from 'lucide-react'

function getStudentDisplayName(student, isRtl) {
  if (typeof student?.name === 'object' && student.name !== null) {
    return isRtl
      ? student.name.ar || student.name.en || ''
      : student.name.en || student.name.ar || ''
  }

  return isRtl
    ? student?.nameAr || student?.name || student?.nameEn || ''
    : student?.nameEn || student?.name || student?.nameAr || ''
}

function StudentAvatar({ student, name, isRtl }) {
  const [imageFailed, setImageFailed] = useState(false)
  const image = student.image || student.profileImage
  const initial = (student.initial || name.trim().charAt(0) || (isRtl ? 'ط' : 'S')).toLocaleUpperCase(isRtl ? 'ar' : 'en')

  if (image && !imageFailed) {
    return (
      <img
        src={image}
        alt={name}
        onError={() => setImageFailed(true)}
        className="w-8 h-8 rounded-full object-cover border border-slate-200 dark:border-slate-700 shrink-0"
      />
    )
  }

  return (
    <div className="w-8 h-8 rounded-full bg-emerald-50 dark:bg-emerald-950/40 text-[#005953] dark:text-emerald-400 flex items-center justify-center font-bold text-xs shrink-0">
      {initial}
    </div>
  )
}

export default function ParentStudentLinkage({
  isRtl,
  showStudentSearch,
  setShowStudentSearch,
  selectedStudents,
  toggleStudentSelect,
  studentSearch,
  setStudentSearch,
  filteredStudents,
  isStudentSelected
}) {
  return (
    <div className="bg-white dark:bg-slate-900 rounded-3xl border border-slate-100 dark:border-slate-800/80 p-6 shadow-soft space-y-5">
      <div className="flex items-center justify-between">
        <button
          type="button"
          onClick={() => setShowStudentSearch(!showStudentSearch)}
          className="flex items-center gap-2 px-4 py-2 bg-brand-600 hover:bg-brand-700 text-white text-sm font-semibold rounded-xl transition-all cursor-pointer"
        >
          <Plus size={16} />
          <span>{isRtl ? 'إضافة' : 'Add'}</span>
        </button>
        <h3 className="text-base font-bold text-slate-800 dark:text-white text-start">
          {isRtl ? 'الأبناء' : 'Children'}
        </h3>
      </div>
      {selectedStudents.length > 0 && (
        <div className="flex flex-wrap gap-2 justify-end">
          {selectedStudents.map((s) => (
            <div
              key={s.id}
              className="flex items-center gap-2 px-3 py-1.5 bg-brand-50 dark:bg-brand-950/30 text-brand-700 dark:text-brand-300 rounded-full text-xs font-semibold"
            >
              <button
                type="button"
                onClick={() => toggleStudentSelect(s)}
                className="text-brand-400 hover:text-brand-700 transition-colors cursor-pointer"
              >
                <X size={12} />
              </button>
              <span>{getStudentDisplayName(s, isRtl)}</span>
            </div>
          ))}
        </div>
      )}
      {showStudentSearch && (
        <div className="border border-slate-100 dark:border-slate-800 rounded-2xl overflow-hidden animate-fadeIn">
          <div className="p-3 border-b border-slate-100 dark:border-slate-800">
            <div className="relative">
              <Search size={16} className={`absolute top-1/2 -translate-y-1/2 ${isRtl ? 'right-3' : 'left-3'} text-slate-400`} />
              <input
                type="text"
                placeholder={isRtl
                  ? 'ابحث باسم الطالب أو بريده الإلكتروني أو رقم جواله...'
                  : 'Search by student name, email, or phone...'}
                value={studentSearch}
                onChange={(e) => setStudentSearch(e.target.value)}
                className={`w-full bg-[#f3f7f6] dark:bg-slate-950 border border-transparent focus:border-brand-500/20 focus:bg-white dark:focus:bg-slate-900 text-slate-800 dark:text-slate-100 rounded-2xl py-2.5 ${isRtl ? 'pr-10 pl-4 text-start' : 'pl-10 pr-4 text-start'} outline-none transition-all text-xs placeholder-slate-400`}
              />
            </div>
          </div>
          <div className="max-h-[30vh] overflow-y-auto divide-y divide-slate-100 dark:divide-slate-800">
            {filteredStudents.length > 0 ? (
              filteredStudents.map((s) => {
                const selected = isStudentSelected(s.id)
                const studentName = getStudentDisplayName(s, isRtl)
                return (
                  <div
                    key={s.id}
                    onClick={() => toggleStudentSelect(s)}
                    className="flex items-center justify-between p-3 hover:bg-slate-50 dark:hover:bg-slate-800/40 cursor-pointer transition-colors"
                  >
                    <div className="flex items-center gap-2" dir="ltr">
                      {selected ? (
                        <div className="w-5 h-5 rounded-md bg-[#005953] text-white flex items-center justify-center">
                          <Check size={12} />
                        </div>
                      ) : (
                        <div className="w-5 h-5 rounded-md border border-slate-300" />
                      )}
                    </div>
                    <div className="flex items-center gap-3">
                      <div className="text-start">
                        <h4 className="text-xs font-bold text-slate-800 dark:text-white">
                          {studentName}
                        </h4>
                        <p className="text-[10px] text-slate-450 dark:text-slate-500 font-bold">
                          {s.level} · {s.groupName}
                        </p>
                      </div>
                      <StudentAvatar student={s} name={studentName} isRtl={isRtl} />
                    </div>
                  </div>
                )
              })
            ) : (
              <div className="p-4 text-center text-xs text-slate-400">
                {isRtl ? 'لا يوجد نتائج مطابقة' : 'No matching results'}
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  )
}

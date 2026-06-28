import { Plus, X, Search, Check } from 'lucide-react'

export default function ParentStudentLinkage({
  isRtl,
  showStudentSearch,
  setShowStudentSearch,
  selectedStudents,
  toggleStudentSelect,
  studentSearchTab,
  setStudentSearchTab,
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
        <h3 className="text-base font-bold text-slate-800 dark:text-white text-end">
          {isRtl ? 'أضف الطالب' : 'Add Student'}
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
              <span>{s.name}</span>
            </div>
          ))}
        </div>
      )}

      {showStudentSearch && (
        <div className="border border-slate-100 dark:border-slate-800 rounded-2xl overflow-hidden animate-fadeIn">
          <div className="flex items-center justify-end gap-2 p-3 bg-slate-50 dark:bg-slate-950/30 border-b border-slate-100 dark:border-slate-800">
            {[
              { key: 'phone', label: isRtl ? 'بحث بالجوال' : 'By Phone' },
              { key: 'email', label: isRtl ? 'بحث بالبريد' : 'By Email' },
              { key: 'name', label: isRtl ? 'بحث بالاسم' : 'By Name' },
            ].map((tab) => (
              <button
                key={tab.key}
                type="button"
                onClick={() => { setStudentSearchTab(tab.key); setStudentSearch('') }}
                className={`px-3 py-1.5 rounded-xl text-xs font-bold transition-all cursor-pointer ${studentSearchTab === tab.key
                    ? 'bg-brand-600 text-white'
                    : 'text-slate-500 dark:text-slate-400 hover:bg-slate-100 dark:hover:bg-slate-800'
                  }`}
              >
                {tab.label}
              </button>
            ))}
          </div>

          <div className="p-3 border-b border-slate-100 dark:border-slate-800">
            <div className="relative">
              <Search size={16} className={`absolute top-1/2 -translate-y-1/2 ${isRtl ? 'right-3' : 'left-3'} text-slate-400`} />
              <input
                type="text"
                placeholder={
                  studentSearchTab === 'name'
                    ? (isRtl ? 'ابحث بالاسم...' : 'Search by name...')
                    : studentSearchTab === 'email'
                      ? (isRtl ? 'ابحث بالبريد الإلكتروني...' : 'Search by email...')
                      : (isRtl ? 'ابحث برقم الهاتف...' : 'Search by phone number...')
                }
                value={studentSearch}
                onChange={(e) => setStudentSearch(e.target.value)}
                className={`w-full bg-[#f3f7f6] dark:bg-slate-950 border border-transparent focus:border-brand-500/20 focus:bg-white dark:focus:bg-slate-900 text-slate-800 dark:text-slate-100 rounded-2xl py-2.5 ${isRtl ? 'pr-10 pl-4 text-end' : 'pl-10 pr-4 text-start'} outline-none transition-all text-xs placeholder-slate-400`}
              />
            </div>
          </div>

          <div className="max-h-[30vh] overflow-y-auto divide-y divide-slate-100 dark:divide-slate-800">
            {filteredStudents.length > 0 ? (
              filteredStudents.map((s) => {
                const selected = isStudentSelected(s.id)
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
                      <div className="text-end">
                        <h4 className="text-xs font-bold text-slate-800 dark:text-white">
                          {s.name}
                        </h4>
                        <p className="text-[10px] text-slate-450 dark:text-slate-500 font-bold">
                          {s.level} · {s.groupName}
                        </p>
                      </div>
                      <div className="w-8 h-8 rounded-full bg-emerald-50 text-[#005953] flex items-center justify-center font-bold text-xs">
                        {s.initial}
                      </div>
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

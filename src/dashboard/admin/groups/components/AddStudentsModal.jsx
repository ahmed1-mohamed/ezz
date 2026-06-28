import { useState, useMemo } from 'react'
import { Search, X, UserPlus, Check, Phone, Mail, User, BookOpen } from 'lucide-react'

const mockAllStudents = [
  {
    id: 's_a1',
    name: 'أحمد خالد المنصور',
    email: 'student1@email.com',
    phone: '+96650100000',
    age: 10,
    level: 'متوسط',
    groupName: 'مجموعة القرآن أ',
  },
  {
    id: 's_a2',
    name: 'سارة يوسف الأحمد',
    email: 'sara.ahmad@email.com',
    phone: '+96650200000',
    age: 9,
    level: 'مبتدئ',
    groupName: 'مجموعة العربية ب',
  },
  {
    id: 's_a3',
    name: 'سليمان خالد المنصور',
    email: 'soliman@email.com',
    phone: '+96650300000',
    age: 9,
    level: 'مبتدئ',
    groupName: 'مجموعة التجويد ج',
  },
  {
    id: 's_a4',
    name: 'يوسف محمد السعيد',
    email: 'youssef@email.com',
    phone: '+97150300000',
    age: 11,
    level: 'متقدم',
    groupName: 'مجموعة القراءات',
  },
  {
    id: 's_a5',
    name: 'لينا عمر الحسن',
    email: 'lina@email.com',
    phone: '+96650400000',
    age: 8,
    level: 'مبتدئ',
    groupName: 'مجموعة القرآن أ',
  },
  {
    id: 's_a6',
    name: 'ريم سالم المطيري',
    email: 'reem@email.com',
    phone: '+96650500000',
    age: 12,
    level: 'متقدم',
    groupName: 'مجموعة التجويد ب',
  },
]

export default function AddStudentsModal({ group, isRtl, onAdd, onCancel }) {
  const [searchTab, setSearchTab] = useState('name')
  const [searchQuery, setSearchQuery] = useState('')
  const [selectedIds, setSelectedIds] = useState([])
  const [prevGroupId, setPrevGroupId] = useState(group?.id)

  if (group?.id !== prevGroupId) {
    setPrevGroupId(group?.id)
    setSearchQuery('')
    setSelectedIds([])
  }

  const existingStudentIds = useMemo(
    () => new Set((group?.students || []).map((s) => s.id)),
    [group]
  )

  const availableStudents = useMemo(() => {
    return mockAllStudents.filter((s) => !existingStudentIds.has(s.id))
  }, [existingStudentIds])

  const filteredStudents = useMemo(() => {
    const query = searchQuery.toLowerCase().trim()
    if (!query) return availableStudents
    return availableStudents.filter((s) => {
      if (searchTab === 'name') return s.name.toLowerCase().includes(query)
      if (searchTab === 'email') return s.email.toLowerCase().includes(query)
      if (searchTab === 'phone') return s.phone.includes(query)
      return true
    })
  }, [availableStudents, searchQuery, searchTab])

  const toggleSelect = (id) => {
    setSelectedIds((prev) =>
      prev.includes(id) ? prev.filter((x) => x !== id) : [...prev, id]
    )
  }

  const handleAdd = () => {
    const studentsToAdd = availableStudents.filter((s) => selectedIds.includes(s.id))
    onAdd(studentsToAdd)
  }

  const scheduleText = useMemo(() => {
    if (!group?.schedule?.length) return ''
    const days = group.schedule.map((s) => s.day).join(' - ')
    const time = group.schedule[0]?.timeFrom || ''
    return `${group.teacher || ''} · ${days} · ${time}`
  }, [group])

  const tabs = [
    { key: 'name', label: 'بحث بالاسم' },
    { key: 'email', label: 'بحث بالبريد' },
    { key: 'phone', label: 'بحث بالجوال' },
  ]

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4"
      dir={isRtl ? 'rtl' : 'ltr'}
    >
      {/* Backdrop */}
      <div
        className="absolute inset-0 bg-black/40 backdrop-blur-sm"
        onClick={onCancel}
      />

      {/* Modal */}
      <div className="relative w-full max-w-2xl max-h-[90vh] flex flex-col bg-white dark:bg-slate-900 rounded-3xl shadow-2xl overflow-hidden">

        {/* Header */}
        <div className="flex items-center justify-between px-6 pt-6 pb-4 border-b border-slate-100 dark:border-slate-800 shrink-0">
          <div className="flex items-center gap-3">
            <div className="flex h-10 w-10 items-center justify-center rounded-2xl bg-brand-500/10 text-brand-600">
              <UserPlus size={20} />
            </div>
            <h2 className="text-xl font-bold text-slate-800 dark:text-white">
              اضافة طلاب للمجموعة
            </h2>
          </div>
          <button
            onClick={onCancel}
            className="p-2 rounded-xl text-slate-400 hover:text-slate-700 hover:bg-slate-100 dark:hover:bg-slate-800 transition-all"
          >
            <X size={20} />
          </button>
        </div>

        {/* Group Info Bar */}
        {group && (
          <div className="flex flex-wrap items-center justify-between gap-3 px-6 py-3 bg-slate-50 dark:bg-slate-800/50 border-b border-slate-100 dark:border-slate-800 shrink-0">
            <div className="flex items-center gap-3">
              <span className="px-3 py-1 rounded-xl bg-brand-500 text-white text-xs font-bold">
                مجموعة
              </span>
              <span className="font-semibold text-slate-800 dark:text-slate-200 text-sm">
                {group.name}
              </span>
              <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-xs font-semibold bg-emerald-50 text-emerald-700 dark:bg-emerald-950/30 dark:text-emerald-400">
                <span className="h-1.5 w-1.5 rounded-full bg-emerald-500" />
                {group.status}
              </span>
              {group.level && (
                <span className="px-2.5 py-1 rounded-full text-xs font-semibold bg-slate-100 text-slate-600 dark:bg-slate-800 dark:text-slate-300">
                  {group.level}
                </span>
              )}
            </div>
            {scheduleText && (
              <p className="text-xs text-slate-400 dark:text-slate-500 truncate max-w-xs">
                {scheduleText}
              </p>
            )}
          </div>
        )}

        {/* Search Section */}
        <div className="px-6 pt-4 pb-3 shrink-0">
          {/* Tabs */}
          <div className="flex items-center gap-2 mb-3">
            {tabs.map((tab) => (
              <button
                key={tab.key}
                onClick={() => { setSearchTab(tab.key); setSearchQuery('') }}
                className={`px-4 py-2 rounded-xl text-sm font-semibold transition-all ${
                  searchTab === tab.key
                    ? 'bg-brand-500 text-white shadow-sm shadow-brand-500/20'
                    : 'bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-400 hover:bg-slate-200 dark:hover:bg-slate-700'
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>

          {/* Search Input */}
          <div className="relative">
            <div className={`absolute inset-y-0 ${isRtl ? 'right-4' : 'left-4'} flex items-center pointer-events-none text-slate-400`}>
              <Search size={16} />
            </div>
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder={
                searchTab === 'name' ? 'ابحث باسم الطالب...' :
                searchTab === 'email' ? 'ابحث بالبريد الإلكتروني...' :
                'ابحث برقم الجوال...'
              }
              className={`w-full bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 focus:border-brand-500/40 focus:bg-white dark:focus:bg-slate-900 text-slate-800 dark:text-slate-100 rounded-2xl py-3 ${isRtl ? 'pr-11 pl-4' : 'pl-11 pr-4'} outline-none transition-all text-sm placeholder-slate-400`}
            />
            {searchQuery && (
              <button
                onClick={() => setSearchQuery('')}
                className={`absolute inset-y-0 ${isRtl ? 'left-4' : 'right-4'} flex items-center text-slate-400 hover:text-slate-600 transition-colors`}
              >
                <X size={14} />
              </button>
            )}
          </div>
        </div>

        {/* Students List */}
        <div className="flex-1 overflow-y-auto px-6 pb-2">
          <div className="flex items-center justify-between mb-3">
            <p className="text-sm font-semibold text-slate-700 dark:text-slate-300">
              الطلاب المتاحون ({filteredStudents.length})
            </p>
            {selectedIds.length > 0 && (
              <span className="px-3 py-1 rounded-full bg-brand-500/10 text-brand-600 dark:text-brand-400 text-xs font-bold">
                تم اختيار {selectedIds.length}
              </span>
            )}
          </div>

          {filteredStudents.length === 0 ? (
            <div className="flex flex-col items-center justify-center py-12 text-slate-400 dark:text-slate-500">
              <Search size={36} className="mb-3 opacity-40" />
              <p className="text-sm font-medium">لا يوجد طلاب يطابقون بحثك</p>
            </div>
          ) : (
            <div className="space-y-3">
              {filteredStudents.map((student) => {
                const isSelected = selectedIds.includes(student.id)
                const initial = student.name.trim().charAt(0)
                return (
                  <button
                    key={student.id}
                    onClick={() => toggleSelect(student.id)}
                    className={`w-full text-start rounded-2xl border-2 transition-all duration-200 overflow-hidden ${
                      isSelected
                        ? 'border-brand-500 bg-brand-50 dark:bg-brand-950/20'
                        : 'border-slate-100 dark:border-slate-800 bg-white dark:bg-slate-900 hover:border-brand-300 hover:bg-slate-50 dark:hover:bg-slate-800'
                    }`}
                  >
                    {/* Student Name Row */}
                    <div className="flex items-center justify-between px-4 pt-3 pb-2">
                      <div className="flex items-center gap-3">
                        <div className={`flex h-9 w-9 shrink-0 items-center justify-center rounded-full font-bold text-sm ${
                          isSelected
                            ? 'bg-brand-500 text-white'
                            : 'bg-brand-500/10 text-brand-700 dark:text-brand-300'
                        }`}>
                          {isSelected ? <Check size={16} /> : initial}
                        </div>
                        <span className="font-semibold text-slate-800 dark:text-slate-200 text-sm">
                          {student.name}
                        </span>
                      </div>
                    </div>

                    {/* Info Grid */}
                    <div className="grid grid-cols-3 gap-2 px-4 pb-3">
                      <div className="flex flex-col gap-0.5 bg-white dark:bg-slate-800/60 rounded-xl px-3 py-2">
                        <span className="text-xs text-slate-400 dark:text-slate-500 flex items-center gap-1">
                          <User size={10} />
                          العمر
                        </span>
                        <span className="text-xs font-semibold text-slate-700 dark:text-slate-300">
                          {student.age} سنة
                        </span>
                      </div>
                      <div className="flex flex-col gap-0.5 bg-white dark:bg-slate-800/60 rounded-xl px-3 py-2">
                        <span className="text-xs text-slate-400 dark:text-slate-500 flex items-center gap-1">
                          <Mail size={10} />
                          البريد
                        </span>
                        <span className="text-xs font-semibold text-slate-700 dark:text-slate-300 truncate">
                          {student.email}
                        </span>
                      </div>
                      <div className="flex flex-col gap-0.5 bg-white dark:bg-slate-800/60 rounded-xl px-3 py-2">
                        <span className="text-xs text-slate-400 dark:text-slate-500 flex items-center gap-1">
                          <Phone size={10} />
                          الجوال
                        </span>
                        <span className="text-xs font-semibold text-slate-700 dark:text-slate-300">
                          {student.phone}
                        </span>
                      </div>
                      <div className="flex flex-col gap-0.5 bg-white dark:bg-slate-800/60 rounded-xl px-3 py-2">
                        <span className="text-xs text-slate-400 dark:text-slate-500 flex items-center gap-1">
                          <BookOpen size={10} />
                          المستوى
                        </span>
                        <span className="text-xs font-semibold text-slate-700 dark:text-slate-300">
                          {student.level}
                        </span>
                      </div>
                      <div className="col-span-2 flex flex-col gap-0.5 bg-white dark:bg-slate-800/60 rounded-xl px-3 py-2">
                        <span className="text-xs text-slate-400 dark:text-slate-500">المجموعة</span>
                        <span className="text-xs font-semibold text-slate-700 dark:text-slate-300 truncate">
                          {student.groupName}
                        </span>
                      </div>
                    </div>
                  </button>
                )
              })}
            </div>
          )}
        </div>

        {/* Footer Buttons */}
        <div className="flex items-center gap-3 px-6 py-4 border-t border-slate-100 dark:border-slate-800 shrink-0 bg-white dark:bg-slate-900">
          <button
            onClick={handleAdd}
            disabled={selectedIds.length === 0}
            className="flex-1 py-3 rounded-2xl bg-brand-500 hover:bg-brand-600 disabled:opacity-50 disabled:cursor-not-allowed text-white font-semibold text-sm transition-all shadow-md shadow-brand-500/20 active:scale-[0.98]"
          >
            {selectedIds.length > 0 ? `إضافة (${selectedIds.length})` : 'إضافة'}
          </button>
          <button
            onClick={onCancel}
            className="px-6 py-3 rounded-2xl border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 text-slate-700 dark:text-slate-300 font-semibold text-sm transition-all hover:bg-slate-50 dark:hover:bg-slate-700"
          >
            إلغاء
          </button>
        </div>
      </div>
    </div>
  )
}

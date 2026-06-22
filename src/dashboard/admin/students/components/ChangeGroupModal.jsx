import { useState } from 'react'
import { X, Search, BookOpen } from 'lucide-react'

const availableGroups = [
  {
    id: 'group-a',
    name: 'مجموعة القرآن أ',
    nameEn: 'Quran Group A',
    teacherName: 'أ. فاطمة الزهراء',
    teacherNameEn: 'Mrs. Fatima Alzahraa',
    level: 'متوسط',
    levelEn: 'Intermediate',
    schedule: 'السبت، الاثنين، الأربعاء - 10:00',
    scheduleEn: 'Sat, Mon, Wed - 10:00',
    status: 'Active', // نشط
    type: 'Group',
    language: 'Arabic'
  },
  {
    id: 'group-b',
    name: 'مجموعة التجويد ب',
    nameEn: 'Tajweed Group B',
    teacherName: 'أ. عائشة محمود',
    teacherNameEn: 'Mrs. Aisha Mahmoud',
    level: 'مبتدئ',
    levelEn: 'Beginner',
    schedule: 'الأحد، الثلاثاء، الخميس - 16:00',
    scheduleEn: 'Sun, Tue, Thu - 16:00',
    status: 'Active',
    type: 'Group',
    language: 'Arabic'
  },
  {
    id: 'group-c',
    name: 'مجموعة القراءات ج',
    nameEn: 'Qiraat Group C',
    teacherName: 'أ. عبد الرحمن علي',
    teacherNameEn: 'Mr. Abdulrahman Ali',
    level: 'متقدم',
    levelEn: 'Advanced',
    schedule: 'السبت، الاثنين، الأربعاء - 18:00',
    scheduleEn: 'Sat, Mon, Wed - 18:00',
    status: 'Active',
    type: 'Group',
    language: 'Arabic'
  }
]

export default function ChangeGroupModal({
  isOpen,
  onClose,
  student,
  isRtl,
  t,
  onChangeGroup
}) {
  const [searchQuery, setSearchQuery] = useState('')
  const [filteredGroups, setFilteredGroups] = useState(availableGroups)
  const [selectedGroup, setSelectedGroup] = useState(null)

  if (!isOpen || !student) return null

  const handleSearch = (e) => {
    e?.preventDefault()
    const query = searchQuery.trim().toLowerCase()
    if (!query) {
      setFilteredGroups(availableGroups)
      return
    }

    const filtered = availableGroups.filter((g) => {
      const nameMatch = g.name.toLowerCase().includes(query) || g.nameEn.toLowerCase().includes(query)
      const teacherMatch = g.teacherName.toLowerCase().includes(query) || g.teacherNameEn.toLowerCase().includes(query)
      return nameMatch || teacherMatch
    })
    setFilteredGroups(filtered)
  }

  const handleConfirmChange = () => {
    if (!selectedGroup) {
      alert(isRtl ? 'الرجاء اختيار مجموعة جديدة!' : 'Please select a new group!')
      return
    }
    onChangeGroup(student.id, selectedGroup.name)
    onClose()
  }

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm animate-fadeIn" dir={isRtl ? 'rtl' : 'ltr'}>
      {/* Backdrop click to close */}
      <div className="absolute inset-0 cursor-default" onClick={onClose} />

      {/* Modal Container */}
      <div className="relative w-full max-w-2xl bg-white dark:bg-slate-900 rounded-3xl p-6 shadow-2xl z-10 flex flex-col gap-5 text-start border border-slate-100 dark:border-slate-800">
        
        {/* Header */}
        <div className="flex items-center justify-between border-b border-slate-100 dark:border-slate-800 pb-3">
          <h3 className="text-lg font-bold text-slate-800 dark:text-white">
            {isRtl ? 'تغيير المجموعة للطالب' : 'Change Group for Student'}
          </h3>
          <button
            type="button"
            onClick={onClose}
            className="p-1.5 hover:bg-slate-50 dark:hover:bg-slate-800 text-slate-400 dark:text-slate-500 hover:text-slate-600 dark:hover:text-slate-350 rounded-full transition-colors cursor-pointer"
          >
            <X size={20} />
          </button>
        </div>

        {/* Student Name & Current Group Fields */}
        <div className="space-y-4">
          <div>
            <label className="block text-xs font-bold text-slate-500 dark:text-slate-400 mb-1.5">
              {isRtl ? 'أسم الطالب' : 'Student Name'}
            </label>
            <input
              type="text"
              readOnly
              value={student.name}
              className="w-full bg-[#f3f7f6] dark:bg-slate-950/60 border border-slate-100/40 dark:border-slate-800/40 text-slate-550 dark:text-slate-400 rounded-2xl py-3 px-4 outline-none font-semibold text-sm cursor-not-allowed"
            />
          </div>

          <div>
            <label className="block text-xs font-bold text-slate-500 dark:text-slate-400 mb-1.5">
              {isRtl ? 'المجموعة الحالية' : 'Current Group'}
            </label>
            <input
              type="text"
              readOnly
              value={student.groupName || (isRtl ? 'لا يوجد مجموعة' : 'No Group')}
              className="w-full bg-[#f3f7f6] dark:bg-slate-955/60 border border-slate-100/40 dark:border-slate-800/40 text-slate-550 dark:text-slate-400 rounded-2xl py-3 px-4 outline-none font-semibold text-sm cursor-not-allowed"
            />
          </div>
        </div>

        {/* Select New Group Section */}
        <div className="space-y-4">
          <label className="block text-xs font-bold text-slate-500 dark:text-slate-400">
            {isRtl ? 'اختر المجموعة الجديدة' : 'Select New Group'}
          </label>

          {/* Search box */}
          <form onSubmit={handleSearch} className="flex gap-2">
            <button
              type="submit"
              className="px-6 py-3 bg-[#005953] hover:bg-[#004742] text-white font-bold text-sm rounded-2xl transition-all shadow-md cursor-pointer active:scale-95 shrink-0"
            >
              {isRtl ? 'بحث' : 'Search'}
            </button>
            <div className="relative flex-1">
              <div className={`absolute inset-y-0 ${isRtl ? 'left-3.5' : 'right-3.5'} flex items-center pointer-events-none text-slate-400`}>
                <Search size={16} />
              </div>
              <input
                type="text"
                placeholder={isRtl ? 'بحث...' : 'Search...'}
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className={`w-full bg-[#f3f7f6] dark:bg-slate-950 border border-transparent focus:border-brand-500/20 focus:bg-white text-slate-850 dark:text-slate-100 rounded-2xl py-3 ${
                  isRtl ? 'pl-10 pr-4' : 'pr-10 pl-4'
                } outline-none transition-all text-sm`}
              />
            </div>
          </form>

          {/* List of Group options */}
          <div className="space-y-3 max-h-[30vh] overflow-y-auto pr-1">
            {filteredGroups.length === 0 ? (
              <div className="text-center py-6 text-sm text-slate-400">
                {isRtl ? 'لم يتم العثور على مجموعات' : 'No groups found'}
              </div>
            ) : (
              filteredGroups.map((group) => {
                const isSelected = selectedGroup?.id === group.id
                return (
                  <div
                    key={group.id}
                    onClick={() => setSelectedGroup(group)}
                    className={`flex items-center justify-between p-4 rounded-2xl border transition-all cursor-pointer ${
                      isSelected
                        ? 'border-[#005953] bg-[#f3f7f6] dark:bg-slate-950/40'
                        : 'border-slate-100 dark:border-slate-800/80 hover:bg-slate-50 dark:hover:bg-slate-950/20 bg-white dark:bg-slate-900'
                    }`}
                  >
                    {/* Schedule and teacher info */}
                    <div className="text-start space-y-1">
                      <div className="flex items-center gap-2 flex-wrap">
                        <span className="text-xs font-bold text-slate-450 dark:text-slate-500">
                          {isRtl ? group.teacherName : group.teacherNameEn}
                        </span>
                        <span className="text-slate-300 dark:text-slate-700">·</span>
                        <span className="text-[11px] font-semibold text-slate-400 dark:text-slate-500">
                          {isRtl ? group.schedule : group.scheduleEn}
                        </span>
                      </div>
                    </div>

                    {/* Group title and badges */}
                    <div className="flex items-center gap-3">
                      {/* Badges */}
                      <div className="flex gap-2">
                        <span className="inline-flex items-center px-2 py-0.5 rounded-xl text-[10px] font-bold bg-blue-50 text-blue-700 dark:bg-blue-950/25 dark:text-blue-400">
                          {isRtl ? group.level : group.levelEn}
                        </span>
                        <span className="inline-flex items-center px-2 py-0.5 rounded-xl text-[10px] font-bold bg-emerald-50 text-emerald-700 dark:bg-emerald-955/20 dark:text-emerald-400">
                          <span className="w-1 h-1 rounded-full bg-emerald-600 me-1" />
                          {isRtl ? 'نشط' : 'Active'}
                        </span>
                      </div>

                      <span className="text-sm font-bold text-slate-700 dark:text-slate-200">
                        {isRtl ? group.name : group.nameEn}
                      </span>

                      <div className={`w-8 h-8 rounded-full flex items-center justify-center shrink-0 ${
                        isSelected ? 'bg-[#005953] text-white' : 'bg-slate-100 dark:bg-slate-800 text-slate-450'
                      }`}>
                        <BookOpen size={14} />
                      </div>
                    </div>
                  </div>
                )
              })
            )}
          </div>
        </div>

        {/* Change Group button */}
        <button
          type="button"
          onClick={handleConfirmChange}
          className="w-full py-4 bg-[#005953] hover:bg-[#004742] text-white font-bold rounded-2xl transition-all shadow-md active:scale-[0.98] cursor-pointer text-center text-sm"
        >
          {isRtl ? 'تغيير المجموعة' : 'Change Group'}
        </button>

      </div>
    </div>
  )
}

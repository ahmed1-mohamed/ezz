import { useState } from 'react'
import TeacherDropdown from './TeacherDropdown'

export default function ChangeTeacherPanel({ session, onConfirm, onCancel, teachers }) {
  const [selectedTeacherId, setSelectedTeacherId] = useState(session.teacherId || null)

  return (
    <div className="bg-[#f3f7f6] dark:bg-slate-900/60 rounded-2xl p-4 space-y-3 border border-amber-100 dark:border-amber-900/30 mt-2 mx-2">
      <p className="text-sm font-bold text-slate-700 dark:text-slate-200 text-end">
        تغيير المدرس لمدرس جديد
      </p>
      <div className="flex flex-col gap-1">
        <label className="text-xs font-bold text-slate-500 dark:text-slate-400 text-end">أختر المدرس البديل</label>
        <TeacherDropdown
          value={selectedTeacherId}
          onChange={setSelectedTeacherId}
          teachers={teachers}
        />
      </div>
      <div className="flex items-center gap-3 justify-start pt-1">
        <button
          onClick={() => {
            const teacher = teachers.find((t) => t.id === selectedTeacherId)
            if (teacher) onConfirm(teacher.id, teacher.name)
          }}
          disabled={!selectedTeacherId}
          className="flex items-center gap-2 px-4 py-2 rounded-xl bg-amber-500 hover:bg-amber-600 disabled:opacity-50 disabled:cursor-not-allowed text-white text-sm font-semibold transition-all shadow-sm cursor-pointer"
        >
          تأكيد المدرس
        </button>
        <button
          onClick={onCancel}
          className="px-4 py-2 rounded-xl border border-slate-200 dark:border-slate-700 text-slate-600 dark:text-slate-350 text-sm font-medium hover:bg-slate-50 dark:hover:bg-slate-800 transition-all cursor-pointer"
        >
          إلغاء
        </button>
      </div>
    </div>
  )
}

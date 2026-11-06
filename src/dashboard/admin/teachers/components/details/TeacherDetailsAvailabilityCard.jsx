import { useQuery } from '@tanstack/react-query'
import { adminCurriculaApi } from '@/shared/services/api/adminCurriculaApi'
import { DAYS_OF_WEEK } from '../../utils/teacherConstants'

const localizedName = (name, isRtl) => (typeof name === 'object' && name !== null
  ? (isRtl ? name.ar || name.en : name.en || name.ar)
  : (name || ''))

const chipClass = (isActive) => `inline-flex flex-col items-center justify-center min-w-[7.5rem] px-5 py-2.5 rounded-2xl text-sm font-semibold border transition-colors ${isActive
  ? 'bg-[#0f7a6c] border-[#0f7a6c] text-white shadow-sm'
  : 'bg-slate-50 dark:bg-slate-950/60 border-slate-100 dark:border-slate-800 text-slate-400 dark:text-slate-500'}`

export default function TeacherDetailsAvailabilityCard({ teacher, isRtl = true }) {
  const { data: curricula = [] } = useQuery({
    queryKey: ['admin-curricula-options'],
    queryFn: async () => {
      const res = await adminCurriculaApi.fetchCurricula()
      return Array.isArray(res?.data) ? res.data : (Array.isArray(res) ? res : [])
    },
    staleTime: 10 * 60 * 1000,
  })
  const teacherSpecs = Array.isArray(teacher?.specializations) ? teacher.specializations : []
  const teacherSpecIds = teacherSpecs.map((s) => s?.id || s?._id).filter(Boolean)
  const subjects = curricula.length > 0 ? curricula : teacherSpecs
  const slotsByDay = (Array.isArray(teacher?.availability) ? teacher.availability : []).reduce((acc, slot) => {
    const key = String(slot.rawDay || slot.day || '').toLowerCase()
    if (key) acc[key] = [...(acc[key] || []), slot]
    return acc
  }, {})
  return (
    <div className="space-y-6">
      <section className="bg-white dark:bg-slate-900 rounded-[28px] p-6 sm:p-8 shadow-sm border border-slate-100/80 dark:border-slate-800/60 space-y-5 text-start">
        <h2 className="text-base sm:text-lg font-bold text-slate-800 dark:text-white">
          {isRtl ? 'المواد الدراسية' : 'Teaching Subjects'}
        </h2>
        {subjects.length === 0 ? (
          <p className="text-sm text-slate-400 dark:text-slate-500">
            {isRtl ? 'لم يتم تحديد مواد دراسية للمعلم' : 'No subjects assigned to this teacher'}
          </p>
        ) : (
          <div className="flex flex-wrap gap-3">
            {subjects.map((subject) => {
              const id = subject.id || subject._id
              return (
                <span key={id} className={chipClass(teacherSpecIds.includes(id))}>
                  {localizedName(subject.name, isRtl)}
                </span>
              )
            })}
          </div>
        )}
      </section>
      <section className="bg-white dark:bg-slate-900 rounded-[28px] p-6 sm:p-8 shadow-sm border border-slate-100/80 dark:border-slate-800/60 space-y-5 text-start">
        <h2 className="text-base sm:text-lg font-bold text-slate-800 dark:text-white">
          {isRtl ? 'أيام التدريس المتاحة أسبوعيا' : 'Weekly Available Teaching Days'}
        </h2>
        <div className="flex flex-wrap gap-3">
          {DAYS_OF_WEEK.map((day) => {
            const slots = slotsByDay[day.key] || []
            return (
              <span key={day.key} className={chipClass(slots.length > 0)}>
                <span>{isRtl ? day.ar : day.en}</span>
                {slots.map((slot, idx) => (
                  <span key={idx} className="text-[11px] font-medium opacity-90" dir="ltr">
                    {slot.startTime} - {slot.endTime}
                  </span>
                ))}
              </span>
            )
          })}
        </div>
      </section>
    </div>
  )
}

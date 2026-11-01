import { Users, Star } from 'lucide-react'

export default function ParentStatsRow({
  totalChildren = 3,
  rating = '4.8',
  isRtl = true,
}) {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 lg:gap-6">
      <div className="bg-white dark:bg-slate-900 rounded-3xl p-6 border border-slate-100 dark:border-slate-800/80 shadow-soft flex items-center justify-between">
        <div className="text-start">
          <p className="text-xs sm:text-sm font-medium text-slate-400 dark:text-slate-500">
            {isRtl ? 'إجمالي الأبناء' : 'Total Children'}
          </p>
          <p className="text-2xl sm:text-3xl font-extrabold text-slate-800 dark:text-white mt-1">
            {totalChildren}
          </p>
        </div>
        <div className="h-12 w-12 rounded-2xl flex items-center justify-center text-[#00594C] dark:text-emerald-400">
          <Users size={28} strokeWidth={1.75} />
        </div>
      </div>

      <div className="bg-white dark:bg-slate-900 rounded-3xl p-6 border border-slate-100 dark:border-slate-800/80 shadow-soft flex items-center justify-between">
        <div className="text-start">
          <p className="text-xs sm:text-sm font-medium text-slate-400 dark:text-slate-500">
            {isRtl ? 'متوسط التقييم' : 'Average Rating'}
          </p>
          <p className="text-2xl sm:text-3xl font-extrabold text-[#F59E0B] mt-1">
            {rating}
          </p>
        </div>
        <div className="h-12 w-12 rounded-2xl flex items-center justify-center text-[#F59E0B]">
          <Star size={28} strokeWidth={1.75} />
        </div>
      </div>
    </div>
  )
}

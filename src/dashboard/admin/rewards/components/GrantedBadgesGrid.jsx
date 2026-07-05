import { Calendar } from 'lucide-react'
import { useTranslation } from 'react-i18next'

export default function GrantedBadgesGrid({ achievements }) {
  const { i18n } = useTranslation()
  const isRtl = i18n.language.startsWith('ar')

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5">
      {achievements.map((item) => (
        <div
          key={item.id}
          className="bg-white dark:bg-slate-900 rounded-3xl border border-slate-100 dark:border-slate-800/60 shadow-sm overflow-hidden flex flex-col hover:shadow-md transition-all"
        >
          <div className={`h-28 ${item.bgColor} flex items-center justify-center relative`}>
            <div className="w-14 h-14 rounded-2xl bg-white flex items-center justify-center text-3xl shadow-md">
              {item.emoji}
            </div>
          </div>

          <div className="p-5 flex flex-col items-center text-center flex-1">
            <h4 className="font-bold text-slate-800 dark:text-white text-sm">
              {isRtl ? item.title : item.titleEn}
            </h4>

            <p className="text-slate-400 dark:text-slate-500 text-xs mt-2 flex-1">
              {isRtl ? item.description : item.descriptionEn}
            </p>

            <div className="flex items-center gap-1.5 justify-center mt-3 text-xs font-semibold text-slate-600 dark:text-slate-400">
              <span>{item.studentName}</span>
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
            </div>

            <div className="flex items-center gap-1 justify-center mt-1 text-[10px] text-slate-400">
              <span>{item.date}</span>
              <Calendar size={11} />
            </div>
          </div>
        </div>
      ))}
    </div>
  )
}
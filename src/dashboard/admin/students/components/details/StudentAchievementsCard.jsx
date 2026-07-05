import { Trophy, Star, Award } from 'lucide-react'

export default function StudentAchievementsCard({ t }) {
  const achievements = [
    {
      title: t('adminDashboard.students.details.achievements.excellentMemorizer', 'متميز في الحفظ'),
      icon: Trophy,
      bgClass: 'bg-amber-50/50 dark:bg-amber-950/20 border-amber-100/50',
      textColor: 'text-amber-700 dark:text-amber-400'
    },
    {
      title: t('adminDashboard.students.details.achievements.regularAttendance', 'حضور منتظم'),
      icon: Star,
      bgClass: 'bg-emerald-50/50 dark:bg-emerald-955/10 border-emerald-100/50',
      textColor: 'text-emerald-700 dark:text-emerald-400'
    },
    {
      title: t('adminDashboard.students.details.achievements.studentOfTheMonth', 'أفضل طالب الشهر'),
      icon: Award,
      bgClass: 'bg-rose-50/50 dark:bg-rose-955/10 border-rose-100/50',
      textColor: 'text-rose-700 dark:text-rose-400'
    }
  ]

  return (
    <div className="bg-white dark:bg-slate-900 rounded-3xl border border-slate-100 dark:border-slate-800/80 p-6 shadow-soft space-y-6 text-start">
      <h3 className="text-base font-bold text-slate-800 dark:text-white">
        {t('adminDashboard.students.details.achievementsTitle', 'الشارات والإنجازات')}
      </h3>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
        {achievements.map((badge, index) => {
          const Icon = badge.icon
          return (
            <div
              key={index}
              className={`flex flex-col items-center justify-center p-6 rounded-3xl border text-center space-y-3 transition-all hover:scale-102 ${badge.bgClass}`}
            >
              <div className={`p-4 bg-white dark:bg-slate-900 rounded-2xl ${badge.textColor} shadow-sm`}>
                <Icon size={24} />
              </div>
              <span className={`text-sm font-bold ${badge.textColor}`}>
                {badge.title}
              </span>
            </div>
          )
        })}
      </div>
    </div>
  )
}
import { Trophy, Award } from 'lucide-react'

export default function StudentAchievementsCard({ student, isRtl, t }) {
  const rawRewards = student?.rewards || student?.Rewards || []
  const rewards = Array.isArray(rawRewards) ? rawRewards : (rawRewards ? [rawRewards] : [])

  const displayList = rewards.length > 0 ? rewards : []

  return (
    <div className="bg-white dark:bg-slate-900 rounded-3xl border border-slate-100 dark:border-slate-800/80 p-6 shadow-soft space-y-6 text-start">
      <div className="flex items-center justify-between border-b border-slate-100 dark:border-slate-800/60 pb-3">
        <div className="flex items-center gap-2 text-slate-800 dark:text-white">
          <Trophy className="text-[#005953]" size={20} />
          <h3 className="text-base font-bold">
            {t('adminDashboard.students.details.achievementsTitle', 'الشارات والإنجازات (Rewards)')}
          </h3>
        </div>
        <span className="text-xs font-bold text-slate-400 bg-slate-100 dark:bg-slate-800 px-2.5 py-0.5 rounded-full">
          {displayList.length}
        </span>
      </div>

      {displayList.length === 0 ? (
        <div className="p-8 text-center bg-slate-50/50 dark:bg-slate-950/20 rounded-3xl border border-slate-100/60 dark:border-slate-800/40 space-y-2">
          <Award size={32} className="mx-auto text-slate-300 dark:text-slate-600" />
          <p className="text-sm font-bold text-slate-500 dark:text-slate-400">
            {isRtl ? 'لا توجد شارات أو إنجازات مسجلة للطالب حتى الآن' : 'No rewards or badges recorded for this student yet'}
          </p>
          <p className="text-xs text-slate-400 dark:text-slate-500">
            {isRtl ? 'تظهر هنا جميع المكافآت والأوسمة الممنوحة للطالب من قاعدة البيانات (Rewards)' : 'All rewards earned by the student from the database will appear here'}
          </p>
        </div>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5">
          {displayList.map((reward, index) => {
            const rewardTitle = typeof reward === 'string'
              ? reward
              : (typeof reward.title === 'object' && reward.title !== null
                  ? (reward.title.ar || reward.title.en)
                  : (reward.title || reward.name?.ar || reward.name?.en || reward.name || `شارة ${index + 1}`))

            const rewardDesc = typeof reward === 'object' && reward !== null
              ? (reward.description?.ar || reward.description?.en || reward.description || reward.desc || '')
              : ''

            const rewardImg = typeof reward === 'object' && (reward.image || reward.iconUrl || reward.badge)
            const rewardEmoji = typeof reward === 'object' && (reward.emoji || reward.icon)
            const points = typeof reward === 'object' && reward.points ? reward.points : null

            return (
              <div
                key={reward.id || reward._id || index}
                className="flex flex-col items-center justify-center p-6 rounded-3xl border text-center space-y-3 transition-all hover:scale-102 bg-amber-50/40 dark:bg-amber-950/20 border-amber-100/50"
              >
                <div className="w-14 h-14 bg-white dark:bg-slate-900 rounded-2xl flex items-center justify-center text-amber-600 dark:text-amber-400 shadow-sm overflow-hidden shrink-0">
                  {rewardImg ? (
                    <img src={rewardImg} alt="" className="w-full h-full object-cover" />
                  ) : rewardEmoji && typeof rewardEmoji === 'string' && rewardEmoji.length <= 4 ? (
                    <span className="text-2xl">{rewardEmoji}</span>
                  ) : (
                    <Award size={26} />
                  )}
                </div>
                <div>
                  <span className="text-sm font-bold text-slate-800 dark:text-white block">
                    {rewardTitle}
                  </span>
                  {rewardDesc && (
                    <p className="text-xs text-slate-400 dark:text-slate-500 mt-1 line-clamp-2">
                      {rewardDesc}
                    </p>
                  )}
                  {points && (
                    <span className="inline-block mt-2 px-2.5 py-0.5 rounded-full text-[11px] font-black bg-amber-100 dark:bg-amber-900/40 text-amber-800 dark:text-amber-300">
                      +{points} {isRtl ? 'نقطة' : 'points'}
                    </span>
                  )}
                </div>
              </div>
            )
          })}
        </div>
      )}
    </div>
  )
}
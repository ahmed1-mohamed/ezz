import { Award, FileText } from 'lucide-react'
import { showSuccessToast } from '@/shared/utils/sweetAlert'

export default function StudentSubscriptionCard({ student, isRtl, t }) {
  return (
    <div className="space-y-6">
      <div className="bg-white dark:bg-slate-900 rounded-3xl border border-slate-100 dark:border-slate-800/80 p-6 shadow-soft space-y-6 text-start">
        <div className="flex items-center gap-2 text-slate-800 dark:text-white border-b border-slate-100 dark:border-slate-800/60 pb-3">
          <Award className="text-[#005953]" size={20} />
          <h3 className="text-base font-bold">
            {t('adminDashboard.students.details.subscriptionInfo', 'معلومات الاشتراك')}
          </h3>
        </div>

        <div className="space-y-3.5">
          <div className="flex justify-between items-center p-3.5 bg-[#f3f7f6] dark:bg-slate-950/20 rounded-2xl">
            <span className="text-xs font-bold text-slate-400 dark:text-slate-500">
              {t('adminDashboard.students.details.subscriptionStatus', 'حالة الاشتراك')}
            </span>
            <span className={`text-sm font-extrabold px-3 py-1 rounded-xl ${student.subscriptionStatus === 'Active'
              ? 'bg-emerald-50 text-emerald-700 dark:bg-emerald-955/20 dark:text-emerald-400'
              : 'bg-rose-50 text-rose-700 dark:bg-rose-955/20 dark:text-rose-400'
              }`}>
              {student.subscriptionStatus === 'Active'
                ? t('adminDashboard.students.details.active', 'فعال')
                : t('adminDashboard.students.details.subscriptionExpired', 'منتهي/معلق')}
            </span>
          </div>

          <div className="flex justify-between items-center p-3.5 bg-[#f3f7f6] dark:bg-slate-950/20 rounded-2xl">
            <span className="text-xs font-bold text-slate-400 dark:text-slate-500">
              {t('adminDashboard.students.details.totalSessions', 'عدد الحصص')}
            </span>
            <span className="text-sm font-extrabold text-slate-700 dark:text-slate-205">
              {t('adminDashboard.students.details.sessionsCount', { defaultValue: '{{count}} حصة', count: student.totalSessions || 16 })}
            </span>
          </div>

          <div className="flex justify-between items-center p-3.5 bg-[#f3f7f6] dark:bg-slate-950/20 rounded-2xl">
            <span className="text-xs font-bold text-slate-400 dark:text-slate-500">
              {t('adminDashboard.students.details.remainingSessions', 'الحصص المتبقية')}
            </span>
            <span className="text-sm font-extrabold text-slate-700 dark:text-slate-205">
              {t('adminDashboard.students.details.sessionsCount', { defaultValue: '{{count}} حصة', count: student.remainingSessions || 8 })}
            </span>
          </div>
        </div>
      </div>

      <div className="bg-white dark:bg-slate-900 rounded-3xl border border-slate-100 dark:border-slate-800/80 p-6 shadow-soft space-y-6 text-start">
        <div className="flex items-center gap-2 text-slate-800 dark:text-white border-b border-slate-100 dark:border-slate-800/60 pb-3">
          <FileText className="text-[#005953]" size={20} />
          <h3 className="text-base font-bold">
            {t('adminDashboard.students.details.subscriptionSummary', 'ملخص الاشتراك')}
          </h3>
        </div>

        <div className="flex flex-col sm:flex-row items-center justify-between p-5 bg-[#f3f7f6] dark:bg-slate-950/20 rounded-2xl gap-4">
          {isRtl ? (
            <>
              <button
                type="button"
                onClick={() => showSuccessToast(isRtl ? 'تجديد الاشتراك التلقائي...' : 'Renew subscription...', isRtl)}
                className="px-5 py-2.5 bg-[#bfa340] hover:bg-[#a98e35] text-white text-xs font-bold rounded-xl transition-all hover:scale-105 active:scale-95 shadow-sm cursor-pointer shrink-0 animate-pulse"
              >
                {t('adminDashboard.students.details.renewSubscription', 'تجديد الاشتراك')}
              </button>
              <div className="text-center">
                <span className="block text-xs font-bold text-slate-400 dark:text-slate-500">{t('adminDashboard.students.details.totalRemainingSessions', 'إجمالي الحصص المتبقية')}</span>
                <span className="text-sm font-extrabold text-slate-700 dark:text-slate-205 mt-1 block">
                  {t('adminDashboard.students.details.sessionsCount', { defaultValue: '{{count}} حصة', count: 29 })}
                </span>
              </div>
              <div className="text-end">
                <span className="block text-xs font-bold text-slate-400 dark:text-slate-500">{t('adminDashboard.students.details.currentPackage', 'الباقة الحالية')}</span>
                <span className="text-sm font-extrabold text-[#005953] dark:text-[#00736c] mt-1 block">
                  {t('adminDashboard.students.details.advancedPackage', 'الباقة المتقدمة')}
                </span>
              </div>
            </>
          ) : (
            <>
              <div className="text-start">
                <span className="block text-xs font-bold text-slate-400 dark:text-slate-500">{t('adminDashboard.students.details.currentPackage', 'الباقة الحالية')}</span>
                <span className="text-sm font-extrabold text-[#005953] dark:text-[#00736c] mt-1 block">
                  {t('adminDashboard.students.details.advancedPackage', 'Advanced Package')}
                </span>
              </div>
              <div className="text-center">
                <span className="block text-xs font-bold text-slate-400 dark:text-slate-500">{t('adminDashboard.students.details.totalRemainingSessions', 'إجمالي الحصص المتبقية')}</span>
                <span className="text-sm font-extrabold text-slate-700 dark:text-slate-205 mt-1 block">
                  {t('adminDashboard.students.details.sessionsCount', { defaultValue: '{{count}} Sessions', count: 29 })}
                </span>
              </div>
              <button
                type="button"
                onClick={() => showSuccessToast(isRtl ? 'تجديد الاشتراك التلقائي...' : 'Renew subscription...', isRtl)}
                className="px-5 py-2.5 bg-[#bfa340] hover:bg-[#a98e35] text-white text-xs font-bold rounded-xl transition-all hover:scale-105 active:scale-95 shadow-sm cursor-pointer shrink-0 animate-pulse"
              >
                {t('adminDashboard.students.details.renewSubscription', 'Renew Subscription')}
              </button>
            </>
          )}
        </div>
      </div>
    </div>
  )
}
import { useState, lazy, Suspense } from 'react'
import { useTranslation } from 'react-i18next'
import {
  ArrowRight,
  ArrowLeft,
  Pencil,
  Ban,
  BookOpen,
  Award,
  Clock,
  CheckCircle,
  TrendingUp,
} from 'lucide-react'
import { showErrorToast, showSuccessToast } from '@/shared/utils/sweetAlert'
import StudentProfileCard from './details/StudentProfileCard'
import StudentSecurityCard from './details/StudentSecurityCard'
import StudentParentCard from './details/StudentParentCard'
import StudentAchievementsCard from './details/StudentAchievementsCard'
import StudentGroupCard from './details/StudentGroupCard'
import StudentSubscriptionCard from './details/StudentSubscriptionCard'

const ChangeGroupModal = lazy(() => import('./ChangeGroupModal'))

export default function StudentDetailsScreen({
  student,
  isRtl,
  onCancel,
  onEdit,
  onToggleStatus,
  onChangeGroup
}) {
  const { t } = useTranslation()
  const [isChangeGroupOpen, setIsChangeGroupOpen] = useState(false)
  const [currentPassword, setCurrentPassword] = useState('')
  const [newPassword, setNewPassword] = useState('')
  const [confirmPassword, setConfirmPassword] = useState('')

  const BackArrow = isRtl ? ArrowRight : ArrowLeft

  if (!student) return null

  const isSuspended = student.subscriptionStatus === 'Expired'
  const studentDisplayName = typeof student.name === 'string' ? student.name : (student.name?.ar || student.name?.en || '-');

  const parentsMock = [
    { name: 'خالد المنصور', email: 'khalid@email.com', phone: '+966501234567', initial: 'خ' },
    { name: 'علي الهاشمي', email: 'ali@email.com', phone: '+966501234569', initial: 'ع' },
    { name: 'منى الكعبي', email: 'mona@email.com', phone: '+966501234570', initial: 'م' },
    { name: 'سارة العلي', email: 'sara@email.com', phone: '+966501234568', initial: 'س' }
  ]

  const parentInfo = parentsMock.find(p => p.name === student.parentName) || {
    name: student.parentName || (isRtl ? 'خالد المنصور' : 'Khaled Al-Mansour'),
    email: 'khalid@email.com',
    phone: '+966501234567',
    initial: student.parentName ? student.parentName.trim().charAt(0) : 'خ'
  }

  const handlePasswordUpdate = (e) => {
    e.preventDefault()
    if (!currentPassword || !newPassword || !confirmPassword) {
      showErrorToast(t('adminDashboard.students.details.fillPasswordFields', 'الرجاء ملء جميع حقول كلمة المرور'), isRtl)
      return
    }
    if (newPassword !== confirmPassword) {
      showErrorToast(t('adminDashboard.students.details.passwordsDoNotMatch', 'كلمة المرور الجديدة غير متطابقة!'), isRtl)
      return
    }
    showSuccessToast(t('adminDashboard.students.details.passwordUpdated', 'تم تحديث كلمة المرور بنجاح!'), isRtl)
    setCurrentPassword('')
    setNewPassword('')
    setConfirmPassword('')
  }

  const stats = [
    {
      label: t('adminDashboard.students.details.stats.totalSessions', 'إجمالي الحصص'),
      value: student.totalSessions || 24,
      icon: BookOpen,
      iconColor: 'text-[#005953]'
    },
    {
      label: t('adminDashboard.students.details.stats.attendanceRate', 'معدل الحضور'),
      value: '96%',
      icon: TrendingUp,
      iconColor: 'text-emerald-500'
    },
    {
      label: t('adminDashboard.students.details.stats.averageRating', 'متوسط التقييم'),
      value: '92',
      icon: Award,
      iconColor: 'text-amber-500'
    }
  ]

  const detailsItems = [
    {
      label: t('adminDashboard.students.details.group', 'المجموعة'),
      value: student.groupName || t('adminDashboard.students.details.noGroupName', 'مجموعة القرآن أ'),
      icon: BookOpen,
      iconColor: 'text-[#005953]',
      bgClass: 'bg-[#f3f7f6] dark:bg-slate-900'
    },
    {
      label: t('adminDashboard.students.details.sessionsDone', 'حصص الطالب'),
      value: (student.totalSessions || 12) - (student.remainingSessions || 8),
      icon: Clock,
      iconColor: 'text-amber-500',
      bgClass: 'bg-amber-50/30 dark:bg-amber-900/10'
    },
    {
      label: t('adminDashboard.students.details.email', 'البريد الإلكترونى'),
      value: student.email || '-',
      icon: Clock,
      iconColor: 'text-emerald-500',
      bgClass: 'bg-emerald-50/30 dark:bg-emerald-900/10'
    },
    {
      label: t('adminDashboard.students.details.status', 'الحالة'),
      value: t('adminDashboard.students.details.active', 'فعال'),
      icon: CheckCircle,
      iconColor: 'text-blue-500',
      bgClass: 'bg-blue-50/30 dark:bg-blue-900/10'
    }
  ]

  return (
    <div className="space-y-8 pb-10 text-start animate-fadeIn" dir={isRtl ? 'rtl' : 'ltr'}>
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
        <div className="flex items-center gap-3">
          <button
            type="button"
            onClick={onCancel}
            className="p-2.5 bg-white hover:bg-slate-50 dark:bg-slate-900 dark:hover:bg-slate-800 text-slate-600 dark:text-slate-300 rounded-full border border-slate-100 dark:border-slate-800 transition-all cursor-pointer hover:scale-105"
            title={t('common.backToList', 'العودة للقائمة')}
          >
            <BackArrow size={20} />
          </button>
          <div>
            <h1 className="text-2xl font-bold text-slate-800 dark:text-white flex items-center gap-2">
              <span>{t('adminDashboard.students.details.title', 'تفاصيل الطالب')}</span>
              <span className="text-slate-300 dark:text-slate-600 text-lg">/</span>
              <span className="text-slate-500 dark:text-slate-400 font-semibold text-lg font-bold">
                {studentDisplayName}
              </span>
            </h1>
            <p className="text-xs text-slate-400 dark:text-slate-500 mt-1 font-bold">
              {t('adminDashboard.students.details.subtitle', 'ملف شامل لـ {{name}}', { name: studentDisplayName })}
            </p>
          </div>
        </div>

        <div className="flex items-center gap-3">
          <button
            type="button"
            onClick={() => onEdit(student)}
            className="px-5 py-2.5 bg-[#005953] hover:bg-[#004742] text-white rounded-2xl text-sm font-semibold transition-all shadow-md flex items-center gap-2 cursor-pointer active:scale-95 animate-pulse"
          >
            <Pencil size={15} />
            <span>{t('adminDashboard.students.details.editData', 'تعديل البيانات')}</span>
          </button>

          <button
            type="button"
            onClick={() => onToggleStatus(student.id)}
            className={`px-5 py-2.5 font-semibold rounded-2xl text-sm transition-all flex items-center gap-2 cursor-pointer active:scale-95 ${isSuspended
              ? 'bg-emerald-50 text-emerald-700 hover:bg-emerald-100'
              : 'bg-rose-50 text-rose-700 hover:bg-rose-100'
              }`}
          >
            {isSuspended ? (
              <>
                <CheckCircle size={15} />
                <span>{t('adminDashboard.students.details.activateAccount', 'تفعيل الحساب')}</span>
              </>
            ) : (
              <>
                <Ban size={15} />
                <span>{t('adminDashboard.students.details.suspendAccount', 'تعليق الحساب')}</span>
              </>
            )}
          </button>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {stats.map((stat, index) => {
          const Icon = stat.icon
          return (
            <div
              key={index}
              className="flex items-center justify-between p-6 bg-white dark:bg-slate-900 rounded-3xl border border-slate-100 dark:border-slate-800/60 shadow-soft"
            >
              <div className="space-y-1">
                <span className="text-xs font-bold text-slate-400 dark:text-slate-500">
                  {stat.label}
                </span>
                <span className="text-3xl font-black text-slate-700 dark:text-slate-200 block">
                  {stat.value}
                </span>
              </div>
              <div className={`p-4 bg-slate-50 dark:bg-slate-950/40 rounded-2xl ${stat.iconColor} shrink-0`}>
                <Icon size={22} />
              </div>
            </div>
          )
        })}
      </div>

      <StudentProfileCard
        student={student}
        isRtl={isRtl}
        detailsItems={detailsItems}
      />

      <StudentAchievementsCard t={t} />

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div className="space-y-6">
          <StudentGroupCard
            student={student}
            isRtl={isRtl}
            onOpenChangeGroup={() => setIsChangeGroupOpen(true)}
            t={t}
          />

          <StudentSecurityCard
            isRtl={isRtl}
            currentPassword={currentPassword}
            setCurrentPassword={setCurrentPassword}
            newPassword={newPassword}
            setNewPassword={setNewPassword}
            confirmPassword={confirmPassword}
            setConfirmPassword={setConfirmPassword}
            handlePasswordUpdate={handlePasswordUpdate}
          />
        </div>

        <div className="space-y-6">
          <StudentSubscriptionCard
            student={student}
            isRtl={isRtl}
            t={t}
          />

          <StudentParentCard
            isRtl={isRtl}
            parentInfo={parentInfo}
          />
        </div>
      </div>

      <Suspense fallback={null}>
        {isChangeGroupOpen && (
          <ChangeGroupModal
            isOpen={isChangeGroupOpen}
            onClose={() => setIsChangeGroupOpen(false)}
            student={student}
            isRtl={isRtl}
            onChangeGroup={onChangeGroup}
          />
        )}
      </Suspense>
    </div>
  )
}
import { useState, lazy, Suspense } from 'react'
import { useTranslation } from 'react-i18next'
import {
  ArrowRight,
  ArrowLeft,
  Pencil,
  Ban,
  BookOpen,
  Award,
  CheckCircle,
  TrendingUp,
  Plus,
  Star,
  Mail,
  Globe,
  Cake,
  Phone,
  Loader2
} from 'lucide-react'
import { showErrorToast, showSuccessToast } from '@/shared/utils/sweetAlert'
import { getApiErrorText } from '@/shared/utils/errorHandler'
import { studentsApi } from '@/shared/services/api/studentsApi'
import StudentProfileCard from './details/StudentProfileCard'
import StudentSecurityCard from './details/StudentSecurityCard'
import StudentParentCard from './details/StudentParentCard'
import StudentAchievementsCard from './details/StudentAchievementsCard'
import StudentGroupCard from './details/StudentGroupCard'
import StudentSubscriptionCard from './details/StudentSubscriptionCard'
import AddSessionsModal from './AddSessionsModal'
import { getRemainingSessions } from '../utils/studentUtils'

const ChangeGroupModal = lazy(() => import('./ChangeGroupModal'))

export default function StudentDetailsScreen({
  student,
  isRtl,
  onCancel,
  onEdit,
  onToggleStatus,
  isTogglingStatus = false,
  onChangeGroup,
  onAddSessions
}) {
  const { t } = useTranslation()
  const [isChangeGroupOpen, setIsChangeGroupOpen] = useState(false)
  const [selectedSourceGroupId, setSelectedSourceGroupId] = useState(null)
  const [isAddSessionsOpen, setIsAddSessionsOpen] = useState(false)
  const [isAddingSessions, setIsAddingSessions] = useState(false)
  const [isUpdatingPassword, setIsUpdatingPassword] = useState(false)
  const [newPassword, setNewPassword] = useState('')
  const [confirmPassword, setConfirmPassword] = useState('')
  const BackArrow = isRtl ? ArrowRight : ArrowLeft
  if (!student) return null
  const isActive = student.active === true || String(student.active) === 'true'
  const isSuspended = !isActive
  const studentDisplayName = typeof student.name === 'string'
    ? student.name
    : (student.name?.ar || student.name?.en || '-')
  const rawParent = typeof student.parent === 'object' && student.parent !== null ? student.parent : {}
  const rawParentName = typeof rawParent.name === 'object' && rawParent.name !== null
    ? (rawParent.name.ar || rawParent.name.en || '-')
    : (rawParent.name || '-')
  const parentInfo = {
    id: rawParent.parent_id || rawParent.id || '',
    name: String(rawParentName || '-'),
    phone: rawParent.phone || '-',
    email: rawParent.email || '-',
    initial: String(rawParentName || '?').trim().charAt(0) || '?'
  }
  const handleOpenChangeGroup = (sourceGroupId = null) => {
    const cleanId = typeof sourceGroupId === 'string' && sourceGroupId.trim() ? sourceGroupId.trim() : null
    setSelectedSourceGroupId(cleanId)
    setIsChangeGroupOpen(true)
  }
  const handlePasswordUpdate = async (e) => {
    if (e && e.preventDefault) e.preventDefault()
    if (!newPassword || !confirmPassword) {
      showErrorToast(isRtl ? 'الرجاء إدخال كلمة المرور وتأكيدها' : 'Please enter and confirm new password', isRtl)
      return
    }
    if (newPassword.length < 6) {
      showErrorToast(isRtl ? 'كلمة المرور يجب أن لا تقل عن 6 أحرف' : 'Password must be at least 6 characters', isRtl)
      return
    }
    if (newPassword !== confirmPassword) {
      showErrorToast(isRtl ? 'كلمة المرور وتأكيد كلمة المرور غير متطابقتين!' : 'Passwords do not match!', isRtl)
      return
    }
    if (!student.user_id) {
      showErrorToast(isRtl ? 'تعذر تحديد معرّف المستخدم للطالب' : 'Could not resolve the student user ID', isRtl)
      return
    }
    try {
      setIsUpdatingPassword(true)
      await studentsApi.changeStudentPassword(student.user_id, { password: newPassword, confirmPassword })
      showSuccessToast(isRtl ? 'تم تحديث كلمة المرور بنجاح!' : 'Password updated successfully!', isRtl)
      setNewPassword('')
      setConfirmPassword('')
    } catch (err) {
      showErrorToast(getApiErrorText(err, isRtl ? 'فشل تحديث كلمة المرور' : 'Failed to update password'), isRtl)
    } finally {
      setIsUpdatingPassword(false)
    }
  }
  const handleAddSessions = async (studentId, count, reason) => {
    setIsAddingSessions(true)
    try {
      await onAddSessions(studentId, count, reason)
      setIsAddSessionsOpen(false)
    } catch {
    } finally {
      setIsAddingSessions(false)
    }
  }
  const sessionsBalance = getRemainingSessions(student.sessionsBalance)
  const attendanceRate = student.attendanceRate !== undefined && student.attendanceRate !== null
    ? `${Number(student.attendanceRate).toFixed(1)}%`
    : (isRtl ? 'غير محدد' : 'N/A')
  const totalEvaluations = Number(student.totalEvaluations ?? 0)
  const averageRating = student.averageRating !== undefined && student.averageRating !== null
    ? `${Number(student.averageRating).toFixed(1)} / 5.0`
    : (isRtl ? 'لا يوجد' : 'N/A')
  const stats = [
    {
      label: isRtl ? 'رصيد الحصص المتبقي' : 'Remaining Sessions',
      value: `${sessionsBalance} ${isRtl ? 'حصة' : 'Sessions'}`,
      icon: BookOpen,
      iconColor: 'text-[#005953]'
    },
    {
      label: isRtl ? 'معدل الحضور' : 'Attendance Rate',
      value: attendanceRate,
      icon: TrendingUp,
      iconColor: 'text-emerald-500'
    },
    {
      label: isRtl ? 'إجمالي عدد التقييمات' : 'Total Evaluations',
      value: `${totalEvaluations} ${isRtl ? 'تقييم' : 'Reviews'}`,
      icon: Star,
      iconColor: 'text-amber-500'
    }
  ]
  const levelVal = typeof student.studentLevel === 'object' && student.studentLevel !== null
    ? (student.studentLevel.name?.ar || student.studentLevel.name?.en || student.studentLevel.name || '')
    : String(student.studentLevel || student.levelName || '')
  const ageValue = student.age !== undefined && student.age !== null
    ? `${student.age} ${isRtl ? 'سنة' : 'years'}`
    : '-'
  const detailsItems = [
    {
      label: isRtl ? 'الدولة' : 'Country',
      value: typeof student.country === 'string' && student.country ? student.country : '-',
      icon: Globe,
      iconColor: 'text-sky-500',
      bgClass: 'bg-sky-50/40 dark:bg-sky-900/10'
    },
    {
      label: isRtl ? 'العمر' : 'Age',
      value: ageValue,
      icon: Cake,
      iconColor: 'text-pink-500',
      bgClass: 'bg-pink-50/40 dark:bg-pink-900/10'
    },
    {
      label: t('adminDashboard.students.details.level', 'المستوى التعليمي'),
      value: levelVal || '-',
      icon: Award,
      iconColor: 'text-[#005953]',
      bgClass: 'bg-[#f3f7f6] dark:bg-slate-900'
    },
    {
      label: isRtl ? 'متوسط التقييم' : 'Average Rating',
      value: averageRating,
      icon: Star,
      iconColor: 'text-amber-500',
      bgClass: 'bg-amber-50/30 dark:bg-amber-900/10'
    },
    {
      label: t('adminDashboard.students.details.email', 'البريد الإلكترونى'),
      value: student.email || '-',
      icon: Mail,
      iconColor: 'text-emerald-500',
      bgClass: 'bg-emerald-50/30 dark:bg-emerald-900/10',
      ltr: true
    },
    {
      label: isRtl ? 'رقم الهاتف' : 'Phone',
      value: student.phone || '-',
      icon: Phone,
      iconColor: 'text-violet-500',
      bgClass: 'bg-violet-50/30 dark:bg-violet-900/10',
      ltr: true
    },
    {
      label: t('adminDashboard.students.details.status', 'الحالة'),
      value: isActive ? (isRtl ? 'نشط' : 'Active') : (isRtl ? 'متوقف' : 'Stopped'),
      icon: CheckCircle,
      iconColor: isActive ? 'text-emerald-500' : 'text-rose-500',
      bgClass: isActive ? 'bg-emerald-50/30 dark:bg-emerald-900/10' : 'bg-rose-50/30 dark:bg-rose-900/10'
    }
  ]
  return (
    <div className="space-y-8 pb-10 text-start animate-fadeIn" dir={isRtl ? 'rtl' : 'ltr'}>
      <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4">
        <div className="flex items-center gap-3 min-w-0">
          <button
            type="button"
            onClick={onCancel}
            className="p-2.5 bg-white hover:bg-slate-50 dark:bg-slate-900 dark:hover:bg-slate-800 text-slate-600 dark:text-slate-300 rounded-full border border-slate-100 dark:border-slate-800 transition-all cursor-pointer hover:scale-105 shrink-0"
            title={t('common.backToList', 'العودة للقائمة')}
          >
            <BackArrow size={20} />
          </button>
          <div className="min-w-0">
            <h1 className="text-xl sm:text-2xl font-bold text-slate-800 dark:text-white flex flex-wrap items-center gap-x-2">
              <span>{t('adminDashboard.students.details.title', 'تفاصيل الطالب')}</span>
              <span className="text-slate-300 dark:text-slate-600 text-lg">/</span>
              <span className="text-slate-500 dark:text-slate-400 text-base sm:text-lg font-bold truncate">
                {studentDisplayName}
              </span>
            </h1>
          </div>
        </div>
        <div className="grid grid-cols-1 sm:flex sm:flex-wrap items-center gap-3">
          <button
            type="button"
            onClick={() => setIsAddSessionsOpen(true)}
            className="px-4 py-2.5 bg-emerald-600 hover:bg-emerald-700 text-white rounded-2xl text-sm font-semibold transition-all shadow-md flex items-center justify-center gap-2 cursor-pointer active:scale-95"
          >
            <Plus size={16} />
            <span>{isRtl ? 'إضافة حصص' : 'Add Sessions'}</span>
          </button>
          <button
            type="button"
            onClick={onEdit}
            className="px-4 py-2.5 bg-[#005953] hover:bg-[#004742] text-white rounded-2xl text-sm font-semibold transition-all shadow-md flex items-center justify-center gap-2 cursor-pointer active:scale-95"
          >
            <Pencil size={15} />
            <span>{t('adminDashboard.students.details.editData', 'تعديل البيانات')}</span>
          </button>
          <button
            type="button"
            onClick={() => onToggleStatus(student)}
            disabled={isTogglingStatus}
            className={`px-4 py-2.5 font-semibold rounded-2xl text-sm transition-all flex items-center justify-center gap-2 cursor-pointer active:scale-95 disabled:opacity-60 ${
              isSuspended
                ? 'bg-emerald-50 text-emerald-700 hover:bg-emerald-100 dark:bg-emerald-950/20 dark:text-emerald-400 border border-emerald-200/60 dark:border-emerald-800/40'
                : 'bg-rose-50 text-rose-700 hover:bg-rose-100 dark:bg-rose-950/20 dark:text-rose-400 border border-rose-200/60 dark:border-rose-800/40'
            }`}
          >
            {isTogglingStatus ? <Loader2 size={15} className="animate-spin" /> : (isSuspended ? <CheckCircle size={15} /> : <Ban size={15} />)}
            <span>
              {isSuspended
                ? t('adminDashboard.students.details.activateAccount', 'تفعيل الحساب')
                : t('adminDashboard.students.details.suspendAccount', 'تعليق الحساب')}
            </span>
          </button>
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-6">
        {stats.map((stat, index) => {
          const Icon = stat.icon
          return (
            <div
              key={index}
              className="flex items-center justify-between p-5 sm:p-6 bg-white dark:bg-slate-900 rounded-3xl border border-slate-100 dark:border-slate-800/60 shadow-soft"
            >
              <div className="space-y-1">
                <span className="text-xs font-bold text-slate-400 dark:text-slate-500">
                  {stat.label}
                </span>
                <span className="text-2xl sm:text-3xl font-black text-slate-700 dark:text-slate-200 block">
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
      <StudentAchievementsCard
        student={student}
        isRtl={isRtl}
        t={t}
      />
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div className="space-y-6">
          <StudentSubscriptionCard
            student={student}
            isRtl={isRtl}
          />
          <StudentGroupCard
            student={student}
            isRtl={isRtl}
            onOpenChangeGroup={handleOpenChangeGroup}
            t={t}
          />
        </div>
        <div className="space-y-6">
          <StudentSecurityCard
            isRtl={isRtl}
            newPassword={newPassword}
            setNewPassword={setNewPassword}
            confirmPassword={confirmPassword}
            setConfirmPassword={setConfirmPassword}
            handlePasswordUpdate={handlePasswordUpdate}
            isUpdating={isUpdatingPassword}
          />
          <StudentParentCard
            isRtl={isRtl}
            parentInfo={parentInfo}
          />
        </div>
      </div>
      {isAddSessionsOpen && (
        <AddSessionsModal
          isOpen={isAddSessionsOpen}
          onClose={() => setIsAddSessionsOpen(false)}
          student={student}
          isRtl={isRtl}
          isLoading={isAddingSessions}
          onAddSessions={handleAddSessions}
        />
      )}
      <Suspense fallback={null}>
        {isChangeGroupOpen && (
          <ChangeGroupModal
            isOpen={isChangeGroupOpen}
            onClose={() => {
              setIsChangeGroupOpen(false)
              setSelectedSourceGroupId(null)
            }}
            student={student}
            isRtl={isRtl}
            initialGroupId={selectedSourceGroupId}
            onChangeGroup={onChangeGroup}
          />
        )}
      </Suspense>
    </div>
  )
}

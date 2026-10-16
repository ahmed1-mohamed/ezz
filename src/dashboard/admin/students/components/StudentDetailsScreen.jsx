import { useState, useEffect, lazy, Suspense } from 'react'
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
  Mail
} from 'lucide-react'
import { showErrorToast, showSuccessToast } from '@/shared/utils/sweetAlert'
import { studentsApi } from '@/shared/services/api/studentsApi'
import StudentProfileCard from './details/StudentProfileCard'
import StudentSecurityCard from './details/StudentSecurityCard'
import StudentParentCard from './details/StudentParentCard'
import StudentAchievementsCard from './details/StudentAchievementsCard'
import StudentGroupCard from './details/StudentGroupCard'
import StudentSubscriptionCard from './details/StudentSubscriptionCard'
import AddSessionsModal from './AddSessionsModal'

const ChangeGroupModal = lazy(() => import('./ChangeGroupModal'))

export default function StudentDetailsScreen({
  student: initialStudent,
  isRtl,
  onCancel,
  onEdit,
  onToggleStatus,
  onChangeGroup,
  onAddSessions
}) {
  const { t } = useTranslation()
  const [student, setStudent] = useState(initialStudent)
  const [isChangeGroupOpen, setIsChangeGroupOpen] = useState(false)
  const [isAddSessionsOpen, setIsAddSessionsOpen] = useState(false)
  const [isUpdatingPassword, setIsUpdatingPassword] = useState(false)
  const [newPassword, setNewPassword] = useState('')
  const [confirmPassword, setConfirmPassword] = useState('')

  const BackArrow = isRtl ? ArrowRight : ArrowLeft

  useEffect(() => {
    if (initialStudent) {
      const studentId = initialStudent.student_id || initialStudent._id || initialStudent.id || initialStudent.user_id
      if (studentId) {
        studentsApi.fetchStudentById(studentId)
          .then((res) => {
            const fullData = res?.data || res
            if (fullData) {
              setStudent(fullData)
            }
          })
          .catch((err) => console.error('Failed to fetch full student details:', err))
      }
    }
  }, [initialStudent])

  if (!student) return null

  const studentId = student.student_id || student._id || student.id || student.user_id
  const isActive = student.active === true || String(student.active) === 'true'
  const isSuspended = !isActive

  const studentDisplayName = typeof student.name === 'string'
    ? student.name
    : (student.name?.ar || student.name?.en || '-')

  const rawParent = student.parent || {}
  const rawParentName = typeof rawParent === 'object' && rawParent !== null
    ? (rawParent.name?.ar || rawParent.name?.en || rawParent.name || student.parentName || '-')
    : (student.parentName || '-')

  const parentId = typeof rawParent === 'object' && rawParent !== null
    ? (rawParent.id || rawParent._id || rawParent.user_id || '')
    : (typeof rawParent === 'string' ? rawParent : '')

  const parentInfo = {
    id: parentId,
    name: String(rawParentName || '-'),
    phone: (typeof rawParent === 'object' ? rawParent.phone : null) || student.parentPhone || student.phone || '-',
    email: (typeof rawParent === 'object' ? rawParent.email : null) || student.parentEmail || '-',
    initial: String(rawParentName || '?').trim().charAt(0) || '?'
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

    try {
      setIsUpdatingPassword(true)
      const userId =
        (typeof student.user === 'string' && student.user) ||
        student.user?._id ||
        student.user?.id ||
        student.user_id ||
        (typeof student.userId === 'string' && student.userId) ||
        student.userId?._id ||
        student.userId?.id ||
        student.student_id ||
        student._id ||
        studentId
      await studentsApi.changeStudentPassword(userId, {
        password: newPassword,
        confirmPassword,
        email: student.email,
        phone: student.phone
      })
      showSuccessToast(isRtl ? 'تم تحديث كلمة المرور بنجاح!' : 'Password updated successfully!', isRtl)
      setNewPassword('')
      setConfirmPassword('')
    } catch (err) {
      const msg = err.response?.data?.message || (isRtl ? 'فشل تحديث كلمة المرور' : 'Failed to update password')
      showErrorToast(Array.isArray(msg) ? msg.join(' - ') : msg, isRtl)
    } finally {
      setIsUpdatingPassword(false)
    }
  }

  const rawSessionsBal = student.sessionsBalance ?? student.SessionsBalance ?? student.remainingSessions ?? 0
  const sessionsBalance = typeof rawSessionsBal === 'object' && rawSessionsBal !== null
    ? (rawSessionsBal.remaining !== undefined
        ? Number(rawSessionsBal.remaining)
        : Math.max(0, Number(rawSessionsBal.total ?? 0) - Number(rawSessionsBal.used ?? 0)))
    : Number(rawSessionsBal || 0)

  const attendanceRate = student.attendanceRate !== undefined && student.attendanceRate !== null
    ? `${Number(student.attendanceRate).toFixed(1)}%`
    : (isRtl ? 'غير محدد' : 'N/A')

  const totalEvaluations = student.totalEvaluations !== undefined && student.totalEvaluations !== null
    ? Number(student.totalEvaluations)
    : (student.evaluationsCount ?? 0)

  const averageRating = student.averageRating !== undefined && student.averageRating !== null
    ? Number(student.averageRating).toFixed(1)
    : (student.rating ? Number(student.rating).toFixed(1) : '5.0')

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

  const rawLevelVal = student.studentLevel?.name || student.levelName || student.level || (isRtl ? 'تمهيدي' : 'Beginner')
  const levelVal = typeof rawLevelVal === 'object' && rawLevelVal !== null
    ? (rawLevelVal.ar || rawLevelVal.en || '')
    : String(rawLevelVal || '')

  const detailsItems = [
    {
      label: t('adminDashboard.students.details.level', 'المستوى التعليمي'),
      value: levelVal || '-',
      icon: Award,
      iconColor: 'text-[#005953]',
      bgClass: 'bg-[#f3f7f6] dark:bg-slate-900'
    },
    {
      label: isRtl ? 'متوسط التقييم' : 'Average Rating',
      value: `${averageRating} / 5.0`,
      icon: Star,
      iconColor: 'text-amber-500',
      bgClass: 'bg-amber-50/30 dark:bg-amber-900/10'
    },
    {
      label: t('adminDashboard.students.details.email', 'البريد الإلكترونى'),
      value: student.email || '-',
      icon: Mail,
      iconColor: 'text-emerald-500',
      bgClass: 'bg-emerald-50/30 dark:bg-emerald-900/10'
    },
    {
      label: t('adminDashboard.students.details.status', 'الحالة'),
      value: isActive ? (isRtl ? 'نشط' : 'Active') : (isRtl ? 'متوقف' : 'Stopped'),
      icon: CheckCircle,
      iconColor: isActive ? 'text-emerald-500' : 'text-rose-500',
      bgClass: isActive ? 'bg-emerald-50/30 dark:bg-emerald-900/10' : 'bg-rose-50/30 dark:bg-rose-900/10'
    }
  ]

  const handleToggleStatusClick = () => {
    if (onToggleStatus) {
      onToggleStatus(student)
    }
  }

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

        
        <div className="flex flex-wrap items-center gap-3">
          <button
            type="button"
            onClick={() => setIsAddSessionsOpen(true)}
            className="px-4 py-2.5 bg-emerald-600 hover:bg-emerald-700 text-white rounded-2xl text-sm font-semibold transition-all shadow-md flex items-center gap-2 cursor-pointer active:scale-95"
          >
            <Plus size={16} />
            <span>{isRtl ? 'إضافة حصص' : 'Add Sessions'}</span>
          </button>

          <button
            type="button"
            onClick={() => onEdit && onEdit(student)}
            className="px-4 py-2.5 bg-[#005953] hover:bg-[#004742] text-white rounded-2xl text-sm font-semibold transition-all shadow-md flex items-center gap-2 cursor-pointer active:scale-95"
          >
            <Pencil size={15} />
            <span>{t('adminDashboard.students.details.editData', 'تعديل البيانات')}</span>
          </button>

          <button
            type="button"
            onClick={handleToggleStatusClick}
            className={`px-4 py-2.5 font-semibold rounded-2xl text-sm transition-all flex items-center gap-2 cursor-pointer active:scale-95 ${
              isSuspended
                ? 'bg-emerald-50 text-emerald-700 hover:bg-emerald-100 dark:bg-emerald-950/20 dark:text-emerald-400 border border-emerald-200/60 dark:border-emerald-800/40'
                : 'bg-rose-50 text-rose-700 hover:bg-rose-100 dark:bg-rose-955/20 dark:text-rose-400 border border-rose-200/60 dark:border-rose-800/40'
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

      
      <StudentAchievementsCard
        student={student}
        isRtl={isRtl}
        t={t}
      />

      
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
            newPassword={newPassword}
            setNewPassword={setNewPassword}
            confirmPassword={confirmPassword}
            setConfirmPassword={setConfirmPassword}
            handlePasswordUpdate={handlePasswordUpdate}
            isUpdating={isUpdatingPassword}
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

      
      <AddSessionsModal
        isOpen={isAddSessionsOpen}
        onClose={() => setIsAddSessionsOpen(false)}
        student={student}
        isRtl={isRtl}
        onAddSessions={(id, count) => {
          if (onAddSessions) {
            onAddSessions(id, count)
          }
          setIsAddSessionsOpen(false)
        }}
      />

      
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
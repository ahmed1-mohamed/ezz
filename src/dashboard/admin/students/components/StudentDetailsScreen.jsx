import { useState, lazy, Suspense } from 'react'
import {
  ArrowRight,
  ArrowLeft,
  Pencil,
  Ban,
  Calendar,
  BookOpen,
  Award,
  Clock,
  FileText,
  CheckCircle,
  TrendingUp,
  Star,
  Trophy
} from 'lucide-react'
import { showErrorToast, showSuccessToast } from '@/shared/utils/sweetAlert'
import StudentProfileCard from './details/StudentProfileCard'
import StudentSecurityCard from './details/StudentSecurityCard'
import StudentParentCard from './details/StudentParentCard'

const ChangeGroupModal = lazy(() => import('./ChangeGroupModal'))

export default function StudentDetailsScreen({
  student,
  isRtl,
  onCancel,
  onEdit,
  onToggleStatus,
  onChangeGroup
}) {
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
      showErrorToast(isRtl ? 'الرجاء ملء جميع حقول كلمة المرور' : 'Please fill all password fields', isRtl)
      return
    }
    if (newPassword !== confirmPassword) {
      showErrorToast(isRtl ? 'كلمة المرور الجديدة غير متطابقة!' : 'New passwords do not match!', isRtl)
      return
    }
    showSuccessToast(isRtl ? 'تم تحديث كلمة المرور بنجاح!' : 'Password updated successfully!', isRtl)
    setCurrentPassword('')
    setNewPassword('')
    setConfirmPassword('')
  }

  const stats = [
    {
      label: isRtl ? 'إجمالي الحصص' : 'Total Sessions',
      value: student.totalSessions || 24,
      icon: BookOpen,
      iconColor: 'text-[#005953]'
    },
    {
      label: isRtl ? 'معدل الحضور' : 'Attendance Rate',
      value: '96%',
      icon: TrendingUp,
      iconColor: 'text-emerald-500'
    },
    {
      label: isRtl ? 'متوسط التقييم' : 'Average Rating',
      value: '92',
      icon: Award,
      iconColor: 'text-amber-500'
    }
  ]

  const detailsItems = [
    {
      label: isRtl ? 'المجموعة' : 'Group',
      value: student.groupName || 'مجموعة القرآن أ',
      icon: BookOpen,
      iconColor: 'text-[#005953]',
      bgClass: 'bg-[#f3f7f6] dark:bg-slate-955/40'
    },
    {
      label: isRtl ? 'حصص الطالب' : 'Sessions Done',
      value: (student.totalSessions || 12) - (student.remainingSessions || 8),
      icon: Clock,
      iconColor: 'text-amber-500',
      bgClass: 'bg-amber-50/30 dark:bg-amber-955/10'
    },
    {
      label: isRtl ? 'الحصص المتبقية' : 'Remaining Sessions',
      value: student.remainingSessions || 8,
      icon: Clock,
      iconColor: 'text-emerald-500',
      bgClass: 'bg-emerald-50/30 dark:bg-emerald-955/10'
    },
    {
      label: isRtl ? 'الحالة' : 'Status',
      value: isRtl ? 'فعال' : 'Active',
      icon: CheckCircle,
      iconColor: 'text-blue-500',
      bgClass: 'bg-blue-50/30 dark:bg-blue-955/10'
    }
  ]

  const achievements = [
    {
      title: isRtl ? 'متميز في الحفظ' : 'Excellent Memorizer',
      icon: Trophy,
      bgClass: 'bg-amber-50/50 dark:bg-amber-955/10 border-amber-100/50',
      textColor: 'text-amber-705 dark:text-amber-400'
    },
    {
      title: isRtl ? 'حضور منتظم' : 'Regular Attendance',
      icon: Star,
      bgClass: 'bg-emerald-50/50 dark:bg-emerald-955/10 border-emerald-100/50',
      textColor: 'text-emerald-705 dark:text-emerald-400'
    },
    {
      title: isRtl ? 'أفضل طالب الشهر' : 'Student of the Month',
      icon: Award,
      bgClass: 'bg-rose-50/50 dark:bg-rose-955/10 border-rose-100/50',
      textColor: 'text-rose-705 dark:text-rose-400'
    }
  ]

  return (
    <div className="space-y-8 pb-10 text-start animate-fadeIn" dir={isRtl ? 'rtl' : 'ltr'}>
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
        <div className="flex items-center gap-3">
          <button
            type="button"
            onClick={onCancel}
            className="p-2.5 bg-white hover:bg-slate-50 dark:bg-slate-900 dark:hover:bg-slate-800 text-slate-655 dark:text-slate-300 rounded-full border border-slate-100 dark:border-slate-800 transition-all cursor-pointer hover:scale-105"
            title={isRtl ? 'العودة للقائمة' : 'Back to list'}
          >
            <BackArrow size={20} />
          </button>
          <div>
            <h1 className="text-2xl font-bold text-slate-800 dark:text-white flex items-center gap-2">
              <span>{isRtl ? 'تفاصيل الطالب' : 'Student Details'}</span>
              <span className="text-slate-350 dark:text-slate-600 text-lg">/</span>
              <span className="text-slate-500 dark:text-slate-400 font-semibold text-lg font-bold">
                {studentDisplayName}
              </span>
            </h1>
            <p className="text-xs text-slate-400 dark:text-slate-500 mt-1 font-bold">
              {isRtl ? `ملف شامل لـ ${studentDisplayName}` : `Comprehensive file for ${studentDisplayName}`}
            </p>
          </div>
        </div>

        <div className="flex items-center gap-3">
          <button
            type="button"
            onClick={() => onEdit(student)}
            className="px-5 py-2.5 bg-[#005953] hover:bg-[#004742] text-white rounded-2xl text-sm font-semibold transition-all shadow-md flex items-center gap-2 cursor-pointer active:scale-95"
          >
            <Pencil size={15} />
            <span>{isRtl ? 'تعديل البيانات' : 'Edit Data'}</span>
          </button>

          <button
            type="button"
            onClick={() => onToggleStatus(student.id)}
            className={`px-5 py-2.5 font-semibold rounded-2xl text-sm transition-all flex items-center gap-2 cursor-pointer active:scale-95 ${isSuspended
              ? 'bg-emerald-50 text-emerald-700 hover:bg-emerald-100'
              : 'bg-rose-50 text-rose-700 hover:bg-rose-105'
              }`}
          >
            {isSuspended ? (
              <>
                <CheckCircle size={15} />
                <span>{isRtl ? 'تفعيل الحساب' : 'Activate Account'}</span>
              </>
            ) : (
              <>
                <Ban size={15} />
                <span>{isRtl ? 'تعليق الحساب' : 'Suspend Account'}</span>
              </>
            )}
          </button>
        </div>
      </div>

      {/* Stats Cards */}
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
                <span className="text-3xl font-black text-slate-700 dark:text-slate-205 block">
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

      {/* Profile Card */}
      <StudentProfileCard
        student={student}
        isRtl={isRtl}
        detailsItems={detailsItems}
      />

      {/* Achievements */}
      <div className="bg-white dark:bg-slate-900 rounded-3xl border border-slate-100 dark:border-slate-800/80 p-6 shadow-soft space-y-6">
        <h3 className="text-base font-bold text-slate-855 dark:text-white">
          {isRtl ? 'الشارات والإنجازات' : 'Badges & Achievements'}
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

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div className="space-y-6">
          {/* Educational Group */}
          <div className="bg-white dark:bg-slate-900 rounded-3xl border border-slate-100 dark:border-slate-800/80 p-6 shadow-soft space-y-6 text-start">
            <div className="flex items-center justify-between border-b border-slate-100 dark:border-slate-800/60 pb-3">
              <div className="flex items-center gap-2 text-slate-800 dark:text-white">
                <BookOpen className="text-[#005953]" size={20} />
                <h3 className="text-base font-bold">
                  {isRtl ? 'المجموعة التعليمية' : 'Educational Group'}
                </h3>
              </div>
              <button
                type="button"
                onClick={() => setIsChangeGroupOpen(true)}
                className="px-3.5 py-1.5 bg-[#005953]/10 hover:bg-[#005953]/20 text-[#005953] dark:text-emerald-400 dark:bg-emerald-500/10 dark:hover:bg-emerald-500/25 text-xs font-bold rounded-xl transition-all cursor-pointer hover:scale-102"
              >
                {isRtl ? 'تغيير المجموعة' : 'Change Group'}
              </button>
            </div>

            <div className="p-5 bg-slate-50/50 dark:bg-slate-950/20 rounded-3xl border border-slate-100 dark:border-slate-850/60 space-y-4">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
                <div className="space-y-1">
                  <h4 className="text-base font-bold text-slate-800 dark:text-white">
                    {student.groupName || 'مجموعة القرآن أ'}
                  </h4>
                  <p className="text-xs text-slate-450 dark:text-slate-500 font-bold">
                    {isRtl ? 'المعلم: أ. فاطمة الزهراء' : 'Teacher: Mrs. Fatima Alzahraa'}
                    <span className="mx-2">·</span>
                    {isRtl ? `المستوى: ${student.level || 'متوسط'}` : `Level: ${student.level || 'Intermediate'}`}
                  </p>
                </div>

                <span className="inline-flex items-center self-start sm:self-center px-2.5 py-0.5 rounded-full text-xs font-bold bg-emerald-50 text-emerald-700 dark:bg-emerald-955/20 dark:text-emerald-400">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-600 me-1.5 animate-pulse" />
                  {isRtl ? 'نشط' : 'Active'}
                </span>
              </div>

              <div className="grid grid-cols-3 gap-4 pt-3 border-t border-slate-100 dark:border-slate-800/60 text-start">
                <div>
                  <span className="block text-xs font-bold text-slate-400 dark:text-slate-500">
                    {isRtl ? 'عدد الطلاب' : 'Students Count'}
                  </span>
                  <span className="text-sm font-extrabold text-slate-700 dark:text-slate-205 mt-0.5 block">
                    4/5
                  </span>
                </div>
                <div>
                  <span className="block text-xs font-bold text-slate-400 dark:text-slate-500">
                    {isRtl ? 'النوع' : 'Type'}
                  </span>
                  <span className="text-sm font-extrabold text-slate-700 dark:text-slate-205 mt-0.5 block">
                    {isRtl ? 'مجموعة' : 'Group'}
                  </span>
                </div>
                <div>
                  <span className="block text-xs font-bold text-slate-400 dark:text-slate-500">
                    {isRtl ? 'اللغة' : 'Language'}
                  </span>
                  <span className="text-sm font-extrabold text-slate-700 dark:text-slate-205 mt-0.5 block">
                    {isRtl ? 'عربي' : 'Arabic'}
                  </span>
                </div>
              </div>

              <div className="flex items-center gap-2 p-3 bg-slate-100/50 dark:bg-slate-900 rounded-xl text-xs font-semibold text-slate-500 dark:text-slate-400">
                <Calendar size={14} className="text-brand-500" />
                <span>{isRtl ? 'السبت، الاثنين، الأربعاء - 10:00' : 'Saturday, Monday, Wednesday - 10:00'}</span>
              </div>
            </div>
          </div>

          {/* Security & Password */}
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
          {/* Subscription details */}
          <div className="bg-white dark:bg-slate-900 rounded-3xl border border-slate-100 dark:border-slate-800/80 p-6 shadow-soft space-y-6 text-start">
            <div className="flex items-center gap-2 text-slate-800 dark:text-white border-b border-slate-100 dark:border-slate-800/60 pb-3">
              <Award className="text-[#005953]" size={20} />
              <h3 className="text-base font-bold">
                {isRtl ? 'معلومات الاشتراك' : 'Subscription Details'}
              </h3>
            </div>

            <div className="space-y-3.5">
              <div className="flex justify-between items-center p-3.5 bg-[#f3f7f6] dark:bg-slate-950/20 rounded-2xl">
                <span className="text-xs font-bold text-slate-450 dark:text-slate-500">
                  {isRtl ? 'حالة الاشتراك' : 'Subscription Status'}
                </span>
                <span className={`text-sm font-extrabold px-3 py-1 rounded-xl ${student.subscriptionStatus === 'Active'
                  ? 'bg-emerald-50 text-emerald-705 dark:bg-emerald-955/20 dark:text-emerald-400'
                  : 'bg-rose-50 text-rose-705 dark:bg-rose-955/20 dark:text-rose-400'
                  }`}>
                  {student.subscriptionStatus === 'Active'
                    ? (isRtl ? 'فعال' : 'Active')
                    : (isRtl ? 'منتهي/معلق' : 'Expired/Suspended')}
                </span>
              </div>

              <div className="flex justify-between items-center p-3.5 bg-[#f3f7f6] dark:bg-slate-950/20 rounded-2xl">
                <span className="text-xs font-bold text-slate-455 dark:text-slate-500">
                  {isRtl ? 'عدد الحصص' : 'Number of Sessions'}
                </span>
                <span className="text-sm font-extrabold text-slate-700 dark:text-slate-205">
                  {student.totalSessions || 16} {isRtl ? 'حصة' : 'Sessions'}
                </span>
              </div>

              <div className="flex justify-between items-center p-3.5 bg-[#f3f7f6] dark:bg-slate-955/20 rounded-2xl">
                <span className="text-xs font-bold text-slate-455 dark:text-slate-500">
                  {isRtl ? 'الحصص المتبقية' : 'Remaining Sessions'}
                </span>
                <span className="text-sm font-extrabold text-slate-700 dark:text-slate-205">
                  {student.remainingSessions || 8} {isRtl ? 'حصة' : 'Sessions'}
                </span>
              </div>
            </div>
          </div>

          {/* Parent Information */}
          <StudentParentCard
            isRtl={isRtl}
            parentInfo={parentInfo}
          />

          {/* Subscription Summary renewal banner */}
          <div className="bg-white dark:bg-slate-900 rounded-3xl border border-slate-100 dark:border-slate-800/80 p-6 shadow-soft space-y-6 text-start">
            <div className="flex items-center gap-2 text-slate-800 dark:text-white border-b border-slate-100 dark:border-slate-800/60 pb-3">
              <FileText className="text-[#005953]" size={20} />
              <h3 className="text-base font-bold">
                {isRtl ? 'ملخص الاشتراك' : 'Subscription Summary'}
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
                    تجديد الاشتراك
                  </button>
                  <div className="text-center">
                    <span className="block text-xs font-bold text-slate-450 dark:text-slate-500">إجمالي الحصص المتبقية</span>
                    <span className="text-sm font-extrabold text-slate-700 dark:text-slate-205 mt-1 block">29 حصة</span>
                  </div>
                  <div className="text-end">
                    <span className="block text-xs font-bold text-slate-455 dark:text-slate-500">الباقة الحالية</span>
                    <span className="text-sm font-extrabold text-[#005953] dark:text-[#00736c] mt-1 block">الباقة المتقدمة</span>
                  </div>
                </>
              ) : (
                <>
                  <div className="text-start">
                    <span className="block text-xs font-bold text-slate-455 dark:text-slate-500">Current Package</span>
                    <span className="text-sm font-extrabold text-[#005953] dark:text-[#00736c] mt-1 block">Advanced Package</span>
                  </div>
                  <div className="text-center">
                    <span className="block text-xs font-bold text-slate-455 dark:text-slate-500">Total Remaining Sessions</span>
                    <span className="text-sm font-extrabold text-slate-700 dark:text-slate-205 mt-1 block">29 Sessions</span>
                  </div>
                  <button
                    type="button"
                    onClick={() => showSuccessToast(isRtl ? 'تجديد الاشتراك التلقائي...' : 'Renew subscription...', isRtl)}
                    className="px-5 py-2.5 bg-[#bfa340] hover:bg-[#a98e35] text-white text-xs font-bold rounded-xl transition-all hover:scale-105 active:scale-95 shadow-sm cursor-pointer shrink-0 animate-pulse"
                  >
                    Renew Subscription
                  </button>
                </>
              )}
            </div>
          </div>
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
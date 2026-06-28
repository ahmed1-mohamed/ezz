import { useState, lazy, Suspense } from 'react'
import { ArrowRight, ArrowLeft, BookOpen, Clock, Award, TrendingUp, CheckCircle, Ban, Pencil, Star, Trophy, Calendar, Lock, Phone, Mail, UserCheck, CreditCard, FileText } from 'lucide-react'
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
      alert(isRtl ? 'الرجاء ملء جميع حقول كلمة المرور' : 'Please fill all password fields')
      return
    }
    if (newPassword !== confirmPassword) {
      alert(isRtl ? 'كلمة المرور الجديدة غير متطابقة!' : 'New passwords do not match!')
      return
    }
    alert(isRtl ? 'تم تحديث كلمة المرور بنجاح!' : 'Password updated successfully!')
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
      bgClass: 'bg-[#f3f7f6] dark:bg-slate-950/40'
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

      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">

        <div className="flex items-center gap-3">
          <button
            type="button"
            onClick={onCancel}
            className="p-2.5 bg-white hover:bg-slate-50 dark:bg-slate-900 dark:hover:bg-slate-800 text-slate-650 dark:text-slate-300 rounded-full border border-slate-100 dark:border-slate-800 transition-all cursor-pointer hover:scale-105"
            title={isRtl ? 'العودة للقائمة' : 'Back to list'}
          >
            <BackArrow size={20} />
          </button>
          <div>
            <h1 className="text-2xl font-bold text-slate-800 dark:text-white flex items-center gap-2">
              <span>{isRtl ? 'تفاصيل الطالب' : 'Student Details'}</span>
              <span className="text-slate-350 dark:text-slate-600 text-lg">/</span>
              <span className="text-slate-500 dark:text-slate-400 font-semibold text-lg font-bold">
                {student.name}
              </span>
            </h1>
            <p className="text-xs text-slate-400 dark:text-slate-500 mt-1">
              {isRtl ? `ملف شامل لـ ${student.name}` : `Comprehensive file for ${student.name}`}
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

      <div className="bg-white dark:bg-slate-900 rounded-3xl border border-slate-100 dark:border-slate-800/80 p-6 shadow-soft space-y-6">

        <div className="flex flex-col sm:flex-row items-center sm:items-start justify-between gap-4">

          <div className="flex items-center gap-3">
            <span className="inline-flex items-center px-2.5 py-1 rounded-xl text-xs font-bold bg-emerald-50 text-emerald-705 dark:bg-emerald-955/15 dark:text-emerald-400">
              {isRtl ? 'فعال' : 'Active'}
            </span>
            <span className="inline-flex items-center px-2.5 py-1 rounded-xl text-xs font-bold bg-blue-50 text-blue-705 dark:bg-blue-955/15 dark:text-blue-400">
              {isRtl ? `المستوى: ${student.level}` : `Level: ${student.level}`}
            </span>
          </div>

          <div className="flex items-center gap-4 text-center sm:text-end order-first sm:order-none">
            <div className="space-y-1">
              <div className="flex items-center justify-center sm:justify-end gap-2">
                <span className="text-xs font-bold text-amber-500 flex items-center gap-0.5">
                  <Star size={12} fill="currentColor" />
                  <span>4.9</span>
                </span>
                <h2 className="text-xl font-bold text-slate-850 dark:text-white">
                  {student.name}
                </h2>
              </div>
              <p className="text-xs text-slate-400 dark:text-slate-500 font-bold">
                {isRtl ? `العمر: ${student.age} سنوات` : `Age: ${student.age} years`}
              </p>
            </div>

            <div className="w-16 h-16 rounded-2xl bg-[#005953]/15 text-[#005953] flex items-center justify-center text-2xl font-black shrink-0">
              {student.name ? student.name.trim().charAt(0) : 'أ'}
            </div>
          </div>

        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {detailsItems.map((item, index) => {
            const Icon = item.icon
            return (
              <div
                key={index}
                className={`flex items-center justify-between p-4 rounded-2xl border border-slate-100/50 dark:border-slate-850/40 ${item.bgClass}`}
              >
                <div>
                  <span className="block text-xs font-bold text-slate-400 dark:text-slate-500">
                    {item.label}
                  </span>
                  <span className="text-sm font-extrabold text-slate-700 dark:text-slate-205 mt-1 block">
                    {item.value}
                  </span>
                </div>
                <div className={`p-2.5 bg-white dark:bg-slate-900 rounded-xl ${item.iconColor} shadow-sm shrink-0`}>
                  <Icon size={16} />
                </div>
              </div>
            )
          })}
        </div>

      </div>

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

                <span className="inline-flex items-center self-start sm:self-center px-2.5 py-0.5 rounded-full text-xs font-bold bg-emerald-50 text-emerald-700 dark:bg-emerald-950/20 dark:text-emerald-400">
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

          <div className="bg-white dark:bg-slate-900 rounded-3xl border border-slate-100 dark:border-slate-800/80 p-6 shadow-soft space-y-6 text-start">
            <div className="flex items-center gap-2 text-slate-800 dark:text-white border-b border-slate-100 dark:border-slate-800/60 pb-3">
              <Lock className="text-[#005953]" size={18} />
              <h3 className="text-base font-bold">
                {isRtl ? 'الأمان وكلمة المرور' : 'Security & Password'}
              </h3>
            </div>

            <div className="space-y-4">
              <span className="block text-xs font-bold text-slate-450 dark:text-slate-500">
                {isRtl ? 'تغيير كلمة المرور' : 'Change Password'}
              </span>

              <div>
                <label className="block text-xs font-bold text-slate-500 dark:text-slate-400 mb-1.5">
                  {isRtl ? 'كلمة المرور الحالية' : 'Current Password'}
                </label>
                <input
                  type="password"
                  value={currentPassword}
                  onChange={(e) => setCurrentPassword(e.target.value)}
                  className="w-full bg-[#f3f7f6] dark:bg-slate-950 border border-transparent focus:border-brand-500/20 focus:bg-white text-slate-850 dark:text-slate-100 rounded-2xl py-3 px-4 outline-none transition-all text-sm"
                  placeholder="************************"
                />
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                <div>
                  <label className="block text-xs font-bold text-slate-500 dark:text-slate-400 mb-1.5">
                    {isRtl ? 'كلمه المرور الجديدة' : 'New Password'}
                  </label>
                  <input
                    type="password"
                    value={newPassword}
                    onChange={(e) => setNewPassword(e.target.value)}
                    className="w-full bg-[#f3f7f6] dark:bg-slate-955 border border-transparent focus:border-brand-500/20 focus:bg-white text-slate-850 dark:text-slate-100 rounded-2xl py-3 px-4 outline-none transition-all text-sm"
                    placeholder="************************"
                  />
                </div>
                <div>
                  <label className="block text-xs font-bold text-slate-500 dark:text-slate-400 mb-1.5">
                    {isRtl ? 'تأكيد كلمة المرور' : 'Confirm Password'}
                  </label>
                  <input
                    type="password"
                    value={confirmPassword}
                    onChange={(e) => setConfirmPassword(e.target.value)}
                    className="w-full bg-[#f3f7f6] dark:bg-slate-955 border border-transparent focus:border-brand-500/20 focus:bg-white text-slate-850 dark:text-slate-100 rounded-2xl py-3 px-4 outline-none transition-all text-sm"
                    placeholder="************************"
                  />
                </div>
              </div>

              <div className="flex justify-end pt-2">
                <button
                  type="button"
                  onClick={handlePasswordUpdate}
                  className="px-6 py-3 bg-[#005953] hover:bg-[#004742] text-white font-bold text-sm rounded-2xl transition-all hover:scale-105 active:scale-95 cursor-pointer shadow-md shadow-[#005953]/15"
                >
                  {isRtl ? 'تحديث كلمة المرور' : 'Update Password'}
                </button>
              </div>
            </div>
          </div>

        </div>

        <div className="space-y-6">

          <div className="bg-white dark:bg-slate-900 rounded-3xl border border-slate-100 dark:border-slate-800/80 p-6 shadow-soft space-y-6 text-start">
            <div className="flex items-center gap-2 text-slate-800 dark:text-white border-b border-slate-100 dark:border-slate-800/60 pb-3">
              <CreditCard className="text-[#005953]" size={20} />
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
                <span className="text-xs font-bold text-slate-450 dark:text-slate-500">
                  {isRtl ? 'عدد الحصص' : 'Number of Sessions'}
                </span>
                <span className="text-sm font-extrabold text-slate-700 dark:text-slate-205">
                  {student.totalSessions || 16} {isRtl ? 'حصة' : 'Sessions'}
                </span>
              </div>

              <div className="flex justify-between items-center p-3.5 bg-[#f3f7f6] dark:bg-slate-950/20 rounded-2xl">
                <span className="text-xs font-bold text-slate-450 dark:text-slate-500">
                  {isRtl ? 'الحصص المتبقية' : 'Remaining Sessions'}
                </span>
                <span className="text-sm font-extrabold text-slate-700 dark:text-slate-205">
                  {student.remainingSessions || 8} {isRtl ? 'حصة' : 'Sessions'}
                </span>
              </div>
            </div>
          </div>

          <div className="bg-white dark:bg-slate-900 rounded-3xl border border-slate-100 dark:border-slate-800/80 p-6 shadow-soft space-y-6 text-start">
            <div className="flex items-center gap-2 text-slate-800 dark:text-white border-b border-slate-100 dark:border-slate-800/60 pb-3">
              <UserCheck className="text-[#005953]" size={20} />
              <h3 className="text-base font-bold">
                {isRtl ? 'معلومات ولي الأمر' : 'Parent Information'}
              </h3>
            </div>

            <div className="space-y-4">
              <div className="flex items-center justify-between p-4 bg-[#f3f7f6] dark:bg-slate-950/20 rounded-2xl">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-amber-500 text-white flex items-center justify-center font-black">
                    {parentInfo.initial}
                  </div>
                  <span className="text-sm font-bold text-slate-700 dark:text-slate-205">
                    {parentInfo.name}
                  </span>
                </div>

                <button
                  type="button"
                  onClick={() => alert(isRtl ? `عرض تفاصيل ولي الأمر: ${parentInfo.name}` : `View details for parent: ${parentInfo.name}`)}
                  className="px-4 py-2 bg-[#005953] hover:bg-[#004742] text-white text-xs font-bold rounded-xl transition-all cursor-pointer shadow-sm active:scale-95"
                >
                  {isRtl ? 'عرض التفاصيل' : 'View Details'}
                </button>
              </div>

              <div className={`flex items-center gap-3 p-3.5 bg-[#f3f7f6] dark:bg-slate-950/20 border border-transparent rounded-2xl ${isRtl ? 'justify-end' : 'justify-start'}`}>
                {isRtl ? (
                  <>
                    <span className="text-sm font-semibold text-slate-650 dark:text-slate-300 font-mono" dir="ltr">
                      {parentInfo.phone}
                    </span>
                    <Phone className="text-slate-450 shrink-0" size={16} />
                  </>
                ) : (
                  <>
                    <Phone className="text-slate-450 shrink-0" size={16} />
                    <span className="text-sm font-semibold text-slate-650 dark:text-slate-300 font-mono" dir="ltr">
                      {parentInfo.phone}
                    </span>
                  </>
                )}
              </div>

              <div className={`flex items-center gap-3 p-3.5 bg-[#f3f7f6] dark:bg-slate-950/20 border border-transparent rounded-2xl ${isRtl ? 'justify-end' : 'justify-start'}`}>
                {isRtl ? (
                  <>
                    <span className="text-sm font-semibold text-slate-650 dark:text-slate-300">
                      {parentInfo.email}
                    </span>
                    <Mail className="text-slate-455 shrink-0" size={16} />
                  </>
                ) : (
                  <>
                    <Mail className="text-slate-455 shrink-0" size={16} />
                    <span className="text-sm font-semibold text-slate-650 dark:text-slate-300">
                      {parentInfo.email}
                    </span>
                  </>
                )}
              </div>
            </div>
          </div>

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
                    onClick={() => alert(isRtl ? 'تجديد الاشتراك التلقائي...' : 'Renew subscription...')}
                    className="px-5 py-2.5 bg-[#bfa340] hover:bg-[#a98e35] text-white text-xs font-bold rounded-xl transition-all hover:scale-105 active:scale-95 shadow-sm cursor-pointer shrink-0 animate-pulse"
                  >
                    تجديد الاشتراك
                  </button>
                  <div className="text-center">
                    <span className="block text-xs font-bold text-slate-450 dark:text-slate-500">إجمالي الحصص المتبقية</span>
                    <span className="text-sm font-extrabold text-slate-700 dark:text-slate-205 mt-1 block">29 حصة</span>
                  </div>
                  <div className="text-end">
                    <span className="block text-xs font-bold text-slate-450 dark:text-slate-500">الباقة الحالية</span>
                    <span className="text-sm font-extrabold text-[#005953] dark:text-[#00736c] mt-1 block">الباقة المتقدمة</span>
                  </div>
                </>
              ) : (
                <>
                  <div className="text-start">
                    <span className="block text-xs font-bold text-slate-450 dark:text-slate-500">Current Package</span>
                    <span className="text-sm font-extrabold text-[#005953] dark:text-[#00736c] mt-1 block">Advanced Package</span>
                  </div>
                  <div className="text-center">
                    <span className="block text-xs font-bold text-slate-450 dark:text-slate-500">Total Remaining Sessions</span>
                    <span className="text-sm font-extrabold text-slate-700 dark:text-slate-205 mt-1 block">29 Sessions</span>
                  </div>
                  <button
                    type="button"
                    onClick={() => alert(isRtl ? 'تجديد الاشتراك التلقائي...' : 'Renew subscription...')}
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
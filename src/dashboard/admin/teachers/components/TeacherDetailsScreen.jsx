import { useState } from 'react'
import { ArrowRight, ArrowLeft, Calendar, MessageSquare, Ban, CheckCircle2, User, BookOpen, Clock, Users, Percent, CheckSquare, Award } from 'lucide-react'
import SendMessageModal from './SendMessageModal'

export default function TeacherDetailsScreen({
  teacher,
  isRtl,
  t,
  onCancel,
  onToggleStatus,
  onEdit
}) {
  const BackArrow = isRtl ? ArrowRight : ArrowLeft
  const isSuspended = teacher?.status !== 'Active'
  const [isMessageModalOpen, setIsMessageModalOpen] = useState(false)

  // Performance metrics (using real or fallback data matching screenshot)
  const metrics = [
    {
      label: isRtl ? 'معدل الحضور' : 'Attendance Rate',
      value: '98%',
      colorClass: 'text-emerald-600 dark:text-emerald-400',
      icon: CheckSquare
    },
    {
      label: isRtl ? 'رضا الطلاب' : 'Student Satisfaction',
      value: '95%',
      colorClass: 'text-emerald-600 dark:text-emerald-400',
      icon: Percent
    },
    {
      label: isRtl ? 'معدل التقييم' : 'Rating Rate',
      value: teacher?.rating || '4.9',
      colorClass: 'text-amber-500',
      icon: Award
    },
    {
      label: isRtl ? 'الحصص المكتملة' : 'Completed Sessions',
      value: teacher?.totalSessions || '120',
      colorClass: 'text-sky-600 dark:text-sky-400',
      icon: Clock
    }
  ]

  // Associated groups list (matching the mockup)
  const groups = [
    {
      id: 1,
      name: isRtl ? 'مجموعة القرآن أ' : 'Quran Group A',
      level: isRtl ? 'متوسط' : 'Intermediate',
      status: 'Active',
      studentsCount: '4/5',
      type: isRtl ? 'مجموعة' : 'Group',
      schedule: isRtl ? 'السبت، الاثنين، الأربعاء - 10:00' : 'Sat, Mon, Wed - 10:00'
    }
  ]

  // Recent sessions (matching the mockup)
  const sessions = [
    {
      id: 1,
      name: isRtl ? 'مجموعة القرآن أ' : 'Quran Group A',
      dateTime: '2024-04-23 - 10:00 (60 دقيقة)',
      status: 'Live', // مباشرة الآن
      students: isRtl ? '4 طلاب' : '4 students'
    },
    {
      id: 2,
      name: isRtl ? 'مجموعة القرآن أ' : 'Quran Group A',
      dateTime: '2024-04-24 - 10:00 (60 دقيقة)',
      status: 'Upcoming', // قادمة
      students: isRtl ? '4 طلاب' : '4 students'
    }
  ]

  return (
    <div className="space-y-8 pb-10 text-start animate-fadeIn" dir={isRtl ? 'rtl' : 'ltr'}>
      
      {/* 1. Header with back and edit buttons */}
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
        
        {/* Back and Title */}
        <div className="flex items-center gap-3">
          <button
            type="button"
            onClick={onCancel}
            className="p-2.5 bg-white hover:bg-slate-50 dark:bg-slate-900 dark:hover:bg-slate-800 text-slate-600 dark:text-slate-300 rounded-full border border-slate-100 dark:border-slate-800 transition-all cursor-pointer hover:scale-105"
            title={isRtl ? 'العودة للقائمة' : 'Back to list'}
          >
            <BackArrow size={20} />
          </button>
          <div>
            <h1 className="text-2xl font-bold text-slate-800 dark:text-white flex items-center gap-2">
              <span>{isRtl ? 'تفاصيل المعلم' : 'Teacher Details'}</span>
              <span className="text-slate-300 dark:text-slate-600 text-lg">/</span>
              <span className="text-slate-500 dark:text-slate-400 font-semibold text-lg">
                {teacher?.name}
              </span>
            </h1>
          </div>
        </div>

        {/* Edit Button */}
        <button
          type="button"
          onClick={() => onEdit(teacher)}
          className="px-5 py-2.5 bg-brand-500 hover:bg-brand-655 text-white rounded-2xl text-sm font-semibold transition-all shadow-md shadow-brand-500/10 active:scale-[0.98] cursor-pointer"
        >
          {isRtl ? 'تعديل البيانات' : 'Edit Profile'}
        </button>

      </div>

      {/* 2. Top Profile summary banner */}
      <div className="bg-white dark:bg-slate-900 rounded-3xl border border-slate-100 dark:border-slate-800/80 p-6 shadow-soft flex flex-col md:flex-row items-center md:items-start gap-6">
        <div className="w-20 h-20 rounded-2xl bg-[#005953]/10 text-[#005953] dark:bg-[#005953]/20 dark:text-brand-300 flex items-center justify-center text-3xl font-black shrink-0">
          {teacher?.name?.trim().charAt(0) || 'ف'}
        </div>
        <div className="space-y-2 text-center md:text-start flex-1">
          <div className="flex flex-col md:flex-row md:items-center gap-3">
            <h2 className="text-xl font-bold text-slate-850 dark:text-white">
              {teacher?.name}
            </h2>
            <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-bold self-center md:self-start ${
              isSuspended
                ? 'bg-rose-50 text-rose-700 dark:bg-rose-950/20 dark:text-rose-400'
                : 'bg-emerald-50 text-emerald-700 dark:bg-emerald-950/20 dark:text-emerald-400'
            }`}>
              <span className={`w-1.5 h-1.5 rounded-full me-1.5 ${isSuspended ? 'bg-rose-600' : 'bg-emerald-600'}`} />
              {isSuspended ? (isRtl ? 'موقوف' : 'Suspended') : (isRtl ? 'نشط' : 'Active')}
            </span>
          </div>
          <p className="text-sm font-bold text-slate-500 dark:text-slate-400">
            {teacher?.subject} · {teacher?.qualification}
          </p>
          <div className="flex flex-wrap justify-center md:justify-start gap-4 text-xs font-semibold text-slate-400 dark:text-slate-500 mt-2">
            <span>{isRtl ? 'تاريخ الانضمام:' : 'Join Date:'} <strong className="text-slate-600 dark:text-slate-300">{teacher?.joinDate}</strong></span>
            <span>·</span>
            <span>{isRtl ? 'البريد الالكتروني:' : 'Email:'} <strong className="text-slate-600 dark:text-slate-300">{teacher?.email}</strong></span>
            <span>·</span>
            <span>{isRtl ? 'رقم الهاتف:' : 'Phone:'} <strong className="text-slate-600 dark:text-slate-300" dir="ltr">{teacher?.phone}</strong></span>
          </div>
        </div>
      </div>

      {/* 3. Performance Statistics Card (إحصائيات الأداء) */}
      <div className="bg-white dark:bg-slate-900 rounded-3xl border border-slate-100 dark:border-slate-800/80 p-6 shadow-soft space-y-6">
        <h3 className="text-base font-bold text-slate-850 dark:text-white border-b border-slate-105 dark:border-slate-800/60 pb-3 flex items-center gap-2">
          <Award className="text-amber-500" size={18} />
          {isRtl ? 'إحصائيات الأداء' : 'Performance Statistics'}
        </h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {metrics.map((item, index) => {
            const Icon = item.icon
            return (
              <div
                key={index}
                className="flex items-center justify-between p-4 bg-[#f3f7f6] dark:bg-slate-950/40 rounded-2xl border border-slate-100/50 dark:border-slate-850/40"
              >
                <div>
                  <span className="block text-xs font-bold text-slate-450 dark:text-slate-500">
                    {item.label}
                  </span>
                  <span className={`text-xl font-black ${item.colorClass} mt-1 block`}>
                    {item.value}
                  </span>
                </div>
                <div className="p-3 bg-white dark:bg-slate-900 rounded-xl text-slate-400 dark:text-slate-500 shadow-sm shrink-0">
                  <Icon size={18} />
                </div>
              </div>
            )
          })}
        </div>
      </div>

      {/* 4. Associated Groups (المجموعات التابعة) */}
      <div className="bg-white dark:bg-slate-900 rounded-3xl border border-slate-100 dark:border-slate-800/80 p-6 shadow-soft space-y-6">
        <h3 className="text-base font-bold text-slate-855 dark:text-white border-b border-slate-105 dark:border-slate-800/60 pb-3 flex items-center gap-2">
          <Users className="text-[#005953]" size={18} />
          {isRtl ? `المجموعات التابعة (${groups.length})` : `Associated Groups (${groups.length})`}
        </h3>

        <div className="space-y-4">
          {groups.map((group) => (
            <div
              key={group.id}
              className="p-5 bg-slate-50/50 dark:bg-slate-950/20 rounded-3xl border border-slate-100 dark:border-slate-850/60 space-y-4"
            >
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
                <div className="space-y-1">
                  <h4 className="text-base font-bold text-slate-800 dark:text-white">
                    {group.name}
                  </h4>
                  <p className="text-xs text-slate-400 dark:text-slate-500 font-bold">
                    {group.level}
                  </p>
                </div>
                <span className="inline-flex items-center self-start sm:self-center px-2.5 py-0.5 rounded-full text-xs font-bold bg-emerald-50 text-emerald-700 dark:bg-emerald-950/20 dark:text-emerald-400">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-600 me-1.5" />
                  {isRtl ? 'نشط' : 'Active'}
                </span>
              </div>

              {/* Group Metadata Grid */}
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 pt-3 border-t border-slate-100 dark:border-slate-800/60 text-start">
                <div>
                  <span className="block text-xs font-bold text-slate-400 dark:text-slate-500">
                    {isRtl ? 'الطلاب' : 'Students'}
                  </span>
                  <span className="text-sm font-extrabold text-slate-700 dark:text-slate-205 mt-0.5 block">
                    {group.studentsCount}
                  </span>
                </div>
                <div>
                  <span className="block text-xs font-bold text-slate-400 dark:text-slate-500">
                    {isRtl ? 'النوع' : 'Type'}
                  </span>
                  <span className="text-sm font-extrabold text-slate-700 dark:text-slate-205 mt-0.5 block">
                    {group.type}
                  </span>
                </div>
                <div className="col-span-2">
                  <span className="block text-xs font-bold text-slate-400 dark:text-slate-500">
                    {isRtl ? 'المواعيد' : 'Schedule'}
                  </span>
                  <span className="text-sm font-extrabold text-slate-700 dark:text-slate-205 mt-0.5 block">
                    {group.schedule}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* 5. Recent Sessions (آخر الحصص) */}
      <div className="bg-white dark:bg-slate-900 rounded-3xl border border-slate-100 dark:border-slate-800/80 p-6 shadow-soft space-y-6">
        <h3 className="text-base font-bold text-slate-855 dark:text-white border-b border-slate-105 dark:border-slate-800/60 pb-3 flex items-center gap-2">
          <BookOpen className="text-blue-500" size={18} />
          {isRtl ? 'آخر الحصص' : 'Recent Sessions'}
        </h3>

        <div className="space-y-4">
          {sessions.map((session) => {
            const isLive = session.status === 'Live'
            return (
              <div
                key={session.id}
                className="flex items-center justify-between p-4 bg-slate-50 dark:bg-slate-950/40 rounded-2xl border border-slate-100/60 dark:border-slate-850/40"
              >
                <div className="flex items-center gap-4">
                  <div className="p-3 bg-brand-50 dark:bg-brand-950/20 text-brand-700 dark:text-brand-400 rounded-2xl shrink-0">
                    <BookOpen size={20} />
                  </div>
                  <div>
                    <h4 className="text-sm font-extrabold text-slate-850 dark:text-white">
                      {session.name}
                    </h4>
                    <p className="text-xs text-slate-400 dark:text-slate-500 mt-1 flex items-center gap-1.5">
                      <Calendar size={12} />
                      <span>{session.dateTime}</span>
                    </p>
                  </div>
                </div>

                <div className="flex items-center gap-3">
                  <span className={`inline-flex items-center px-3 py-1 rounded-full text-xs font-bold ${
                    isLive
                      ? 'bg-rose-50 text-rose-700 dark:bg-rose-955/20 dark:text-rose-400 animate-pulse'
                      : 'bg-blue-50 text-blue-705 dark:bg-blue-955/20 dark:text-blue-400'
                  }`}>
                    <span className={`w-1.5 h-1.5 rounded-full me-1.5 ${isLive ? 'bg-rose-600' : 'bg-blue-600'}`} />
                    {isLive
                      ? (isRtl ? 'مباشرة الآن' : 'Live Now')
                      : (isRtl ? 'قادمة' : 'Upcoming')}
                  </span>
                  <span className="text-xs font-bold text-slate-400 dark:text-slate-500 hidden sm:inline">
                    {session.students}
                  </span>
                </div>
              </div>
            )
          })}
        </div>
      </div>

      {/* 6. Bottom action buttons */}
      <div className="flex flex-col sm:flex-row gap-4 pt-4 border-t border-slate-105 dark:border-slate-800">
        
        {/* Send Message */}
        <button
          type="button"
          onClick={() => setIsMessageModalOpen(true)}
          className="flex-1 py-4 bg-[#005953] hover:bg-[#004742] text-white font-bold rounded-2xl transition-all shadow-md shadow-[#005953]/15 active:scale-[0.98] cursor-pointer flex items-center justify-center gap-2"
        >
          <MessageSquare size={18} />
          <span>{isRtl ? 'إرسال رسالة' : 'Send Message'}</span>
        </button>

        {/* Suspend / Activate Account */}
        <button
          type="button"
          onClick={() => onToggleStatus(teacher.id)}
          className={`flex-1 py-4 font-bold rounded-2xl transition-all active:scale-[0.98] cursor-pointer flex items-center justify-center gap-2 ${
            isSuspended
              ? 'bg-emerald-50 hover:bg-emerald-100 text-emerald-700 dark:bg-emerald-950/20 dark:text-emerald-400 border border-emerald-200 dark:border-transparent'
              : 'bg-rose-50 hover:bg-rose-100 text-rose-700 dark:bg-rose-955/20 dark:text-rose-455 border border-rose-200 dark:border-transparent'
          }`}
        >
          {isSuspended ? (
            <>
              <CheckCircle2 size={18} />
              <span>{isRtl ? 'تفعيل الحساب' : 'Activate Account'}</span>
            </>
          ) : (
            <>
              <Ban size={18} />
              <span>{isRtl ? 'تعليق الحساب' : 'Suspend Account'}</span>
            </>
          )}
        </button>

      </div>

      <SendMessageModal
        isOpen={isMessageModalOpen}
        onClose={() => setIsMessageModalOpen(false)}
        teacher={teacher}
        isRtl={isRtl}
        t={t}
      />

    </div>
  )
}

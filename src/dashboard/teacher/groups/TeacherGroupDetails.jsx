import { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { useQuery } from '@tanstack/react-query';
import {
  Users,
  BookOpen,
  GraduationCap,
  Calendar,
  Clock,
  Globe,
  Star,
  AlertCircle,
  ArrowRight,
  ArrowLeft,
  User,
  History,
  Sparkles,
  CalendarDays,
} from 'lucide-react';
import DashboardLayout from '../../../layouts/DashboardLayout.jsx';
import { roleNavigation } from '@/shared/constants/navigation.js';
import { teacherGroupsApi } from '@/shared/services/api/teacherGroupsApi.js';

/**
 * Formats time string to local HH:MM
 */
function formatTime(val) {
  if (!val) return '—';
  if (typeof val === 'string') {
    if (val.includes('T')) {
      const d = new Date(val);
      if (!isNaN(d.getTime())) {
        return d.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
      }
    }
    return val.length > 5 ? val.substring(0, 5) : val;
  }
  return String(val);
}

export default function TeacherGroupDetails() {
  const { id } = useParams();
  const { t, i18n } = useTranslation();
  const isRtl = i18n.language.startsWith('ar');

  const [activeTab, setActiveTab] = useState('students'); // 'students' | 'sessions'

  const {
    data: responseData,
    isLoading,
    error,
    refetch,
    isFetching,
  } = useQuery({
    queryKey: ['teacherGroupDetails', id],
    queryFn: () => teacherGroupsApi.fetchGroupDetails(id),
    enabled: Boolean(id),
  });

  const group = responseData?.data || null;
  const studentsList = group?.students || [];
  const sessionsList = group?.sessionsHistory || [];

  const getStatusBadge = (status) => {
    switch (status) {
      case 'نشطة':
      case 'active':
        return (
          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-emerald-500/15 text-emerald-700 dark:bg-emerald-500/20 dark:text-emerald-300 border border-emerald-500/30">
            <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
            {t('teacher.statusActive', 'نشطة')}
          </span>
        );
      case 'معلقة':
      case 'قيد الانتظار':
      case 'pending':
        return (
          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-amber-500/15 text-amber-700 dark:bg-amber-500/20 dark:text-amber-300 border border-amber-500/30">
            <span className="w-2 h-2 rounded-full bg-amber-500" />
            {t('teacher.statusPending', 'قيد الانتظار')}
          </span>
        );
      case 'متوقفة':
      case 'stopped':
        return (
          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-rose-500/15 text-rose-700 dark:bg-rose-500/20 dark:text-rose-300 border border-rose-500/30">
            <span className="w-2 h-2 rounded-full bg-rose-500" />
            {t('teacher.statusStopped', 'متوقفة')}
          </span>
        );
      case 'مكتملة':
      case 'completed':
        return (
          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-purple-500/15 text-purple-700 dark:bg-purple-500/20 dark:text-purple-300 border border-purple-500/30">
            <span className="w-2 h-2 rounded-full bg-purple-500" />
            {t('teacher.statusCompleted', 'مكتملة')}
          </span>
        );
      default:
        return (
          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-medium bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300">
            {status || '—'}
          </span>
        );
    }
  };

  return (
    <div className="space-y-6 max-w-7xl mx-auto pb-12" dir={isRtl ? 'rtl' : 'ltr'}>
      <div className="space-y-6">
        {/* Navigation Bar */}
        <div className="flex items-center justify-between">
          <Link
            to="/dashboard/teacher/groups"
            className="inline-flex items-center gap-2 text-sm font-semibold text-slate-600 hover:text-emerald-600 dark:text-slate-400 dark:hover:text-emerald-400 transition-colors"
          >
            {isRtl ? <ArrowRight size={18} /> : <ArrowLeft size={18} />}
            <span>{t('teacher.backToGroups', 'الرجوع للمجموعات')}</span>
          </Link>

          <button
            onClick={() => refetch()}
            disabled={isFetching}
            className="inline-flex items-center gap-2 px-3 py-1.5 rounded-xl border border-slate-200 dark:border-slate-700 text-xs font-semibold text-slate-700 dark:text-slate-300 hover:bg-slate-50 dark:hover:bg-slate-800 transition-all cursor-pointer disabled:opacity-50"
          >
            <Sparkles size={14} className={isFetching ? 'animate-spin' : ''} />
            {t('common.refresh', 'تحديث')}
          </button>
        </div>

        {/* Loading State */}
        {isLoading ? (
          <div className="space-y-6 animate-pulse">
            <div className="h-48 rounded-3xl bg-slate-200 dark:bg-slate-800" />
            <div className="h-12 w-1/3 rounded-xl bg-slate-200 dark:bg-slate-800" />
            <div className="h-64 rounded-3xl bg-slate-200 dark:bg-slate-800" />
          </div>
        ) : error || !group ? (
          <div className="flex flex-col items-center justify-center p-12 rounded-3xl border border-red-200 bg-red-50/50 text-center dark:border-red-900/40 dark:bg-red-950/20">
            <AlertCircle size={44} className="text-red-500 mb-3" />
            <h3 className="text-lg font-bold text-red-900 dark:text-red-200">
              {t('common.errorLoading', 'حدث خطأ أثناء تحميل تفاصيل المجموعة')}
            </h3>
            <p className="mt-1 text-sm text-red-700 dark:text-red-300">
              {error?.message || 'لم نتمكن من العثور على المجموعة المطلوبة.'}
            </p>
            <Link
              to="/dashboard/teacher/groups"
              className="mt-4 px-4 py-2 rounded-xl bg-slate-900 hover:bg-slate-800 text-white text-sm font-semibold transition-all cursor-pointer"
            >
              {t('teacher.backToGroups', 'الرجوع للمجموعات')}
            </Link>
          </div>
        ) : (
          <>
            {/* Top Group Overview Banner */}
            <div className="rounded-3xl border border-slate-200/80 bg-white/95 dark:border-slate-800 dark:bg-slate-900 shadow-soft p-6 sm:p-8 space-y-6">
              <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4">
                <div className="space-y-2">
                  <div className="flex items-center gap-2 flex-wrap">
                    {getStatusBadge(group.status)}
                    <span
                      className={`text-xs font-bold px-3 py-1 rounded-full ${
                        group.type === 'خاصة' || group.type?.toLowerCase() === 'private'
                          ? 'bg-blue-50 text-blue-700 border border-blue-200 dark:bg-blue-950/50 dark:text-blue-300 dark:border-blue-900/40'
                          : 'bg-emerald-50 text-emerald-700 border border-emerald-200 dark:bg-emerald-950/50 dark:text-emerald-300 dark:border-emerald-900/40'
                      }`}
                    >
                      {group.type || 'عامة'}
                    </span>
                    {group.country && (
                      <span className="text-xs font-medium px-3 py-1 rounded-full bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300">
                        {group.country}
                      </span>
                    )}
                  </div>
                  <h1 className="text-2xl sm:text-3xl font-extrabold text-slate-900 dark:text-white">
                    {group.name}
                  </h1>
                </div>

                {/* Capacity Counter */}
                <div className="p-4 rounded-2xl bg-emerald-50/70 border border-emerald-200/60 dark:bg-emerald-950/30 dark:border-emerald-900/40 shrink-0">
                  <div className="text-xs font-bold text-emerald-700 dark:text-emerald-400">
                    {t('teacher.capacity', 'السعة الحالية')}
                  </div>
                  <div className="mt-1 text-2xl font-black text-emerald-900 dark:text-emerald-200">
                    {group.currentStudentsCount ?? studentsList.length} / {group.maxStudents || 10}{' '}
                    <span className="text-xs font-semibold">طلاب</span>
                  </div>
                </div>
              </div>

              {/* Meta Grid */}
              <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4 pt-4 border-t border-slate-100 dark:border-slate-800">
                {group.curriculum && (
                  <div className="flex items-center gap-3">
                    <div className="p-2.5 rounded-xl bg-emerald-50 text-emerald-600 dark:bg-emerald-950/50 dark:text-emerald-400 shrink-0">
                      <BookOpen size={18} />
                    </div>
                    <div>
                      <div className="text-[11px] font-medium text-slate-400">
                        {t('teacher.curriculum', 'المنهج')}
                      </div>
                      <div className="text-sm font-bold text-slate-800 dark:text-slate-200">
                        {group.curriculum}
                      </div>
                    </div>
                  </div>
                )}

                {group.level && (
                  <div className="flex items-center gap-3">
                    <div className="p-2.5 rounded-xl bg-indigo-50 text-indigo-600 dark:bg-indigo-950/50 dark:text-indigo-400 shrink-0">
                      <GraduationCap size={18} />
                    </div>
                    <div>
                      <div className="text-[11px] font-medium text-slate-400">
                        {t('teacher.level', 'المستوى')}
                      </div>
                      <div className="text-sm font-bold text-slate-800 dark:text-slate-200">
                        {group.level}
                      </div>
                    </div>
                  </div>
                )}

                {group.language && (
                  <div className="flex items-center gap-3">
                    <div className="p-2.5 rounded-xl bg-teal-50 text-teal-600 dark:bg-teal-950/50 dark:text-teal-400 shrink-0">
                      <Globe size={18} />
                    </div>
                    <div>
                      <div className="text-[11px] font-medium text-slate-400">
                        {t('teacher.language', 'لغة التدريس')}
                      </div>
                      <div className="text-sm font-bold text-slate-800 dark:text-slate-200">
                        {group.language}
                      </div>
                    </div>
                  </div>
                )}

                {(group.startDate || group.endDate) && (
                  <div className="flex items-center gap-3">
                    <div className="p-2.5 rounded-xl bg-amber-50 text-amber-600 dark:bg-amber-950/50 dark:text-amber-400 shrink-0">
                      <CalendarDays size={18} />
                    </div>
                    <div>
                      <div className="text-[11px] font-medium text-slate-400">
                        الفترة الزمنية
                      </div>
                      <div className="text-xs font-bold text-slate-800 dark:text-slate-200">
                        {group.startDate || '—'} إلى {group.endDate || '—'}
                      </div>
                    </div>
                  </div>
                )}
              </div>

              {/* Weekly Schedule Row */}
              {group.weeklySchedule?.length > 0 && (
                <div className="pt-4 border-t border-slate-100 dark:border-slate-800 space-y-2">
                  <div className="text-xs font-bold text-slate-500 dark:text-slate-400 flex items-center gap-1.5">
                    <Calendar size={14} className="text-emerald-500" />
                    <span>{t('teacher.weeklySchedule', 'المواعيد الأسبوعية')}:</span>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {group.weeklySchedule.map((item, idx) => (
                      <div
                        key={idx}
                        className="inline-flex items-center gap-2 px-3 py-1.5 rounded-xl bg-slate-100 dark:bg-slate-800 text-xs font-semibold text-slate-800 dark:text-slate-200 border border-slate-200/60 dark:border-slate-700"
                      >
                        <Clock size={13} className="text-emerald-500" />
                        <span>{item.day}:</span>
                        <span className="font-mono text-emerald-600 dark:text-emerald-400">
                          {formatTime(item.startTime)} - {formatTime(item.endTime)}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>

            {/* The 2 Tabs ("مقسمهالك ل 2 tab جوا") */}
            <div className="space-y-4">
              {/* Tab Selector Buttons */}
              <div className="flex items-center gap-2 p-1.5 rounded-2xl bg-slate-100 dark:bg-slate-800/80 border border-slate-200/80 dark:border-slate-700/80 w-fit">
                <button
                  type="button"
                  onClick={() => setActiveTab('students')}
                  className={`inline-flex items-center gap-2 px-5 py-2.5 rounded-xl text-sm font-bold transition-all cursor-pointer ${
                    activeTab === 'students'
                      ? 'bg-white dark:bg-slate-900 text-emerald-600 dark:text-emerald-400 shadow-sm'
                      : 'text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white'
                  }`}
                >
                  <Users size={18} />
                  <span>{t('teacher.studentsTab', 'الطلاب المسجلون')}</span>
                  <span
                    className={`px-2 py-0.5 rounded-full text-xs font-bold ${
                      activeTab === 'students'
                        ? 'bg-emerald-50 text-emerald-700 dark:bg-emerald-950/60 dark:text-emerald-300'
                        : 'bg-slate-200 text-slate-700 dark:bg-slate-700 dark:text-slate-300'
                    }`}
                  >
                    {studentsList.length}
                  </span>
                </button>

                <button
                  type="button"
                  onClick={() => setActiveTab('sessions')}
                  className={`inline-flex items-center gap-2 px-5 py-2.5 rounded-xl text-sm font-bold transition-all cursor-pointer ${
                    activeTab === 'sessions'
                      ? 'bg-white dark:bg-slate-900 text-emerald-600 dark:text-emerald-400 shadow-sm'
                      : 'text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white'
                  }`}
                >
                  <History size={18} />
                  <span>{t('teacher.sessionsTab', 'سجل الحصص')}</span>
                  <span
                    className={`px-2 py-0.5 rounded-full text-xs font-bold ${
                      activeTab === 'sessions'
                        ? 'bg-emerald-50 text-emerald-700 dark:bg-emerald-950/60 dark:text-emerald-300'
                        : 'bg-slate-200 text-slate-700 dark:bg-slate-700 dark:text-slate-300'
                    }`}
                  >
                    {sessionsList.length}
                  </span>
                </button>
              </div>

              {/* Tab 1 Content: الطلاب (Students) */}
              {activeTab === 'students' && (
                <div className="space-y-4">
                  {studentsList.length === 0 ? (
                    <div className="flex flex-col items-center justify-center p-14 rounded-3xl border border-dashed border-slate-300 bg-white/70 dark:border-slate-700 dark:bg-slate-900/70 text-center shadow-soft">
                      <div className="p-4 rounded-2xl bg-slate-100 text-slate-400 dark:bg-slate-800 mb-3">
                        <Users size={36} />
                      </div>
                      <h3 className="text-base font-bold text-slate-800 dark:text-slate-200">
                        {t('teacher.noStudentsInGroup', 'لا يوجد طلاب مسجلون في هذه المجموعة بعد')}
                      </h3>
                      <p className="mt-1 text-xs text-slate-500 dark:text-slate-400">
                        عندما يتم تسجيل الطلاب في المجموعة، ستظهر بياناتهم ومعدل حضورهم وتقييماتهم هنا.
                      </p>
                    </div>
                  ) : (
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                      {studentsList.map((student, idx) => {
                        const attended = student.attendanceRate?.attendedSessions ?? 0;
                        const completed = student.attendanceRate?.completedGroupSessions ?? 0;
                        const attendancePercent =
                          completed > 0 ? Math.min(100, Math.round((attended / completed) * 100)) : 0;

                        const studentName =
                          typeof student.name === 'object' && student.name !== null
                            ? (isRtl ? student.name.ar || student.name.en : student.name.en || student.name.ar)
                            : (student.name || 'طالب');

                        return (
                          <div
                            key={student.student_id || idx}
                            className="p-5 rounded-2xl border border-slate-200/80 bg-white dark:border-slate-800 dark:bg-slate-900 shadow-soft hover:shadow-md transition-all flex flex-col justify-between space-y-4"
                          >
                            <div className="flex items-center gap-3">
                              {student.image ? (
                                <img
                                  src={student.image}
                                  alt={studentName}
                                  className="w-13 h-13 rounded-2xl object-cover border-2 border-emerald-500/20 shadow-xs shrink-0"
                                  onError={(e) => {
                                    e.currentTarget.style.display = 'none';
                                  }}
                                />
                              ) : (
                                <div className="w-13 h-13 rounded-2xl bg-gradient-to-br from-emerald-500 to-teal-600 text-white flex items-center justify-center font-bold text-lg shadow-xs shrink-0">
                                  {studentName ? studentName.charAt(0) : <User size={20} />}
                                </div>
                              )}

                              <div className="min-w-0 flex-1">
                                <h4 className="text-base font-bold text-slate-900 dark:text-white truncate">
                                  {studentName}
                                </h4>
                                {student.student_id && (
                                  <div className="text-[11px] font-mono text-slate-400 truncate">
                                    ID: {student.student_id}
                                  </div>
                                )}
                              </div>

                              {student.averageRating !== undefined && student.averageRating !== null && (
                                <div className="inline-flex items-center gap-1 px-2.5 py-1 rounded-xl bg-amber-50 dark:bg-amber-950/40 text-amber-700 dark:text-amber-300 border border-amber-200/60 dark:border-amber-900/40 shrink-0">
                                  <Star size={14} className="fill-amber-400 text-amber-400" />
                                  <span className="text-xs font-bold">
                                    {Number(student.averageRating).toFixed(1)}
                                  </span>
                                </div>
                              )}
                            </div>

                            {/* Attendance Rate */}
                            <div className="p-3 rounded-xl bg-slate-50 dark:bg-slate-800/60 border border-slate-100 dark:border-slate-800 space-y-1.5">
                              <div className="flex items-center justify-between text-xs">
                                <span className="font-semibold text-slate-600 dark:text-slate-400">
                                  {t('teacher.attendanceRate', 'معدل الحضور')}:
                                </span>
                                <span className="font-bold text-slate-900 dark:text-white">
                                  {attended} من {completed} حصة ({attendancePercent}%)
                                </span>
                              </div>
                              <div className="w-full h-2 rounded-full bg-slate-200 dark:bg-slate-700 overflow-hidden">
                                <div
                                  className={`h-full rounded-full transition-all duration-500 ${
                                    attendancePercent >= 80
                                      ? 'bg-emerald-500'
                                      : attendancePercent >= 50
                                      ? 'bg-amber-500'
                                      : 'bg-rose-500'
                                  }`}
                                  style={{ width: `${attendancePercent}%` }}
                                />
                              </div>
                            </div>
                          </div>
                        );
                      })}
                    </div>
                  )}
                </div>
              )}

              {/* Tab 2 Content: سجل الحصص (Sessions History) */}
              {activeTab === 'sessions' && (
                <div className="space-y-4">
                  {sessionsList.length === 0 ? (
                    <div className="flex flex-col items-center justify-center p-14 rounded-3xl border border-dashed border-slate-300 bg-white/70 dark:border-slate-700 dark:bg-slate-900/70 text-center shadow-soft">
                      <div className="p-4 rounded-2xl bg-slate-100 text-slate-400 dark:bg-slate-800 mb-3">
                        <History size={36} />
                      </div>
                      <h3 className="text-base font-bold text-slate-800 dark:text-slate-200">
                        {t('teacher.noSessionsInGroup', 'لا يوجد سجل حصص لهذه المجموعة حتى الآن')}
                      </h3>
                      <p className="mt-1 text-xs text-slate-500 dark:text-slate-400">
                        عندما يتم إكمال حصص في هذه المجموعة، سيتم تسجيلها وحفظ بياناتها هنا.
                      </p>
                    </div>
                  ) : (
                    <div className="overflow-hidden rounded-2xl border border-slate-200/80 bg-white dark:border-slate-800 dark:bg-slate-900 shadow-soft">
                      <div className="overflow-x-auto">
                        <table className="w-full text-start text-sm">
                          <thead className="bg-slate-50 dark:bg-slate-800/60 border-b border-slate-200/80 dark:border-slate-800 text-xs font-bold text-slate-600 dark:text-slate-300 uppercase">
                            <tr>
                              <th className="px-5 py-3.5 text-start">الحصة</th>
                              <th className="px-5 py-3.5 text-start">اليوم والتاريخ</th>
                              <th className="px-5 py-3.5 text-start">التوقيت</th>
                              <th className="px-5 py-3.5 text-start">المجموعة</th>
                              <th className="px-5 py-3.5 text-start">الحالة</th>
                            </tr>
                          </thead>
                          <tbody className="divide-y divide-slate-100 dark:divide-slate-800/80">
                            {sessionsList.map((session, sIdx) => (
                              <tr
                                key={session.id || sIdx}
                                className="hover:bg-slate-50/70 dark:hover:bg-slate-800/50 transition-colors"
                              >
                                <td className="px-5 py-4 font-bold text-slate-900 dark:text-white whitespace-nowrap">
                                  {session.title || `حصة ${sIdx + 1}`}
                                </td>
                                <td className="px-5 py-4 text-slate-600 dark:text-slate-300 whitespace-nowrap">
                                  <div className="flex items-center gap-1.5">
                                    <Calendar size={14} className="text-emerald-500" />
                                    <span>
                                      {session.day ? `${session.day} - ` : ''}
                                      {session.date}
                                    </span>
                                  </div>
                                </td>
                                <td className="px-5 py-4 text-slate-600 dark:text-slate-300 whitespace-nowrap font-mono text-xs">
                                  <div className="flex items-center gap-1.5">
                                    <Clock size={14} className="text-slate-400" />
                                    <span>
                                      {formatTime(session.startTime)} - {formatTime(session.endTime)}
                                    </span>
                                  </div>
                                </td>
                                <td className="px-5 py-4 text-slate-500 dark:text-slate-400 whitespace-nowrap">
                                  {session.group || group.name}
                                </td>
                                <td className="px-5 py-4 whitespace-nowrap">
                                  <span
                                    className={`inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-xs font-bold ${
                                      session.status === 'مكتملة' || session.status === 'completed'
                                        ? 'bg-emerald-50 text-emerald-700 dark:bg-emerald-950/40 dark:text-emerald-300 border border-emerald-200/50'
                                        : session.status === 'ملغاة' || session.status === 'cancelled'
                                        ? 'bg-rose-50 text-rose-700 dark:bg-rose-950/40 dark:text-rose-300 border border-rose-200/50'
                                        : 'bg-blue-50 text-blue-700 dark:bg-blue-950/40 dark:text-blue-300 border border-blue-200/50'
                                    }`}
                                  >
                                    <span
                                      className={`w-1.5 h-1.5 rounded-full ${
                                        session.status === 'مكتملة' || session.status === 'completed'
                                          ? 'bg-emerald-500'
                                          : session.status === 'ملغاة' || session.status === 'cancelled'
                                          ? 'bg-rose-500'
                                          : 'bg-blue-500'
                                      }`}
                                    />
                                    {session.status || 'مجدولة'}
                                  </span>
                                </td>
                              </tr>
                            ))}
                          </tbody>
                        </table>
                      </div>
                    </div>
                  )}
                </div>
              )}
            </div>
          </>
        )}
      </div>
    </div>
  );
}

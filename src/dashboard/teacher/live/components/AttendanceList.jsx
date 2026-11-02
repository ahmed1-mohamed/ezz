import { useMemo } from 'react';
import { useTranslation } from 'react-i18next';
import { Users, CheckCircle2, XCircle, Clock, HelpCircle } from 'lucide-react';

const STATUS_CONFIGS = {
  present: {
    labelKey: 'teacherLive.attendancePresent',
    defaultLabel: 'حاضر',
    icon: CheckCircle2,
    badgeClass: 'bg-emerald-50 dark:bg-emerald-950/40 text-emerald-700 dark:text-emerald-300 border-emerald-200 dark:border-emerald-800',
    iconClass: 'text-emerald-600 dark:text-emerald-400',
  },
  absent: {
    labelKey: 'teacherLive.attendanceAbsent',
    defaultLabel: 'غائب',
    icon: XCircle,
    badgeClass: 'bg-rose-50 dark:bg-rose-950/40 text-rose-700 dark:text-rose-300 border-rose-200 dark:border-rose-800',
    iconClass: 'text-rose-600 dark:text-rose-400',
  },
  late: {
    labelKey: 'teacherLive.attendanceLate',
    defaultLabel: 'متأخر',
    icon: Clock,
    badgeClass: 'bg-amber-50 dark:bg-amber-950/40 text-amber-700 dark:text-amber-300 border-amber-200 dark:border-amber-800',
    iconClass: 'text-amber-600 dark:text-amber-400',
  },
  pending: {
    labelKey: 'teacherLive.attendancePending',
    defaultLabel: 'قيد الانتظار',
    icon: HelpCircle,
    badgeClass: 'bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 border-slate-200 dark:border-slate-700',
    iconClass: 'text-slate-500 dark:text-slate-400',
  },
};

function normalizeAttendanceStatus(rawStatus) {
  if (!rawStatus) return 'pending';
  const normalized = String(rawStatus).trim().toLowerCase();
  if (normalized === 'present' || normalized === 'حاضر') return 'present';
  if (normalized === 'absent' || normalized === 'غائب') return 'absent';
  if (normalized === 'late' || normalized === 'متأخر') return 'late';
  return 'pending';
}

function resolveStudentName(student, isRtl) {
  if (!student) return '-';
  if (typeof student === 'string') return student;
  if (typeof student.name === 'object' && student.name !== null) {
    return isRtl ? (student.name.ar || student.name.en) : (student.name.en || student.name.ar);
  }
  return student.name || student.studentName || student.fullName || '-';
}

export default function AttendanceList({ session }) {
  const { t, i18n } = useTranslation();
  const isRtl = i18n?.language?.startsWith('ar') ?? true;

  const normalizedStudents = useMemo(() => {
    if (!session) return [];
    const rawList = Array.isArray(session.attendance)
      ? session.attendance
      : Array.isArray(session.students)
      ? session.students
      : Array.isArray(session.attendees)
      ? session.attendees
      : Array.isArray(session.group?.students)
      ? session.group.students
      : [];
    return rawList.map((item, index) => {
      const studentObj = item.student || item.user || item;
      const statusKey = normalizeAttendanceStatus(item.status || item.attendanceStatus || item.attendance || studentObj.status);
      const studentId = studentObj._id || studentObj.student_id || studentObj.id || `student-${index}`;
      const name = resolveStudentName(studentObj, isRtl);
      const avatar = studentObj.avatar || studentObj.image || studentObj.profilePicture || null;
      const code = studentObj.code || studentObj.studentCode || null;
      return { id: studentId, name, avatar, statusKey, code };
    });
  }, [session, isRtl]);

  const counts = useMemo(() => {
    const accumulator = { total: normalizedStudents.length, present: 0, absent: 0, late: 0, pending: 0 };
    normalizedStudents.forEach((student) => {
      if (accumulator[student.statusKey] !== undefined) {
        accumulator[student.statusKey] += 1;
      }
    });
    return accumulator;
  }, [normalizedStudents]);

  if (normalizedStudents.length === 0) {
    return (
      <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-2xl p-6 text-center">
        <Users className="w-10 h-10 text-slate-300 dark:text-slate-600 mx-auto mb-2" />
        <p className="text-sm font-semibold text-slate-600 dark:text-slate-400">
          {t('teacherLive.noStudentsFound', 'لا يوجد طلاب مسجلون في هذه الحصة')}
        </p>
      </div>
    );
  }

  return (
    <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-2xl p-5 space-y-4 shadow-sm">
      <div className="flex flex-wrap items-center justify-between gap-3 border-b border-slate-100 dark:border-slate-800 pb-3">
        <div className="flex items-center gap-2">
          <Users className="w-5 h-5 text-[#0f7a6c]" />
          <h3 className="font-bold text-slate-800 dark:text-slate-100 text-base">
            {t('teacherLive.attendanceTitle', 'حضور الطلاب')}
          </h3>
          <span className="text-xs bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300 font-bold px-2 py-0.5 rounded-full">
            {counts.total}
          </span>
        </div>
        <div className="flex flex-wrap items-center gap-1.5 text-xs font-semibold">
          <span className="px-2.5 py-1 rounded-lg bg-emerald-50 dark:bg-emerald-950/40 text-emerald-700 dark:text-emerald-300 border border-emerald-200 dark:border-emerald-800">
            {t('teacherLive.attendancePresent', 'حاضر')}: {counts.present}
          </span>
          <span className="px-2.5 py-1 rounded-lg bg-rose-50 dark:bg-rose-950/40 text-rose-700 dark:text-rose-300 border border-rose-200 dark:border-rose-800">
            {t('teacherLive.attendanceAbsent', 'غائب')}: {counts.absent}
          </span>
          <span className="px-2.5 py-1 rounded-lg bg-amber-50 dark:bg-amber-950/40 text-amber-700 dark:text-amber-300 border border-amber-200 dark:border-amber-800">
            {t('teacherLive.attendanceLate', 'متأخر')}: {counts.late}
          </span>
          <span className="px-2.5 py-1 rounded-lg bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-400 border border-slate-200 dark:border-slate-700">
            {t('teacherLive.attendancePending', 'قيد الانتظار')}: {counts.pending}
          </span>
        </div>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
        {normalizedStudents.map((student) => {
          const config = STATUS_CONFIGS[student.statusKey] || STATUS_CONFIGS.pending;
          const StatusIcon = config.icon;
          const initial = student.name ? student.name.trim().charAt(0) : 'ط';
          return (
            <div
              key={student.id}
              className="flex items-center justify-between p-3 rounded-xl bg-slate-50 dark:bg-slate-800/60 border border-slate-200/80 dark:border-slate-800 hover:border-[#0f7a6c]/40 transition-colors"
            >
              <div className="flex items-center gap-3 min-w-0">
                {student.avatar ? (
                  <img
                    src={student.avatar}
                    alt={student.name}
                    className="w-9 h-9 rounded-full object-cover shrink-0 border border-slate-200 dark:border-slate-700"
                  />
                ) : (
                  <div className="w-9 h-9 rounded-full bg-[#0f7a6c]/10 dark:bg-[#0f7a6c]/20 text-[#0f7a6c] dark:text-emerald-400 font-bold flex items-center justify-center shrink-0 text-sm">
                    {initial}
                  </div>
                )}
                <div className="min-w-0">
                  <p className="text-sm font-bold text-slate-800 dark:text-slate-100 truncate">
                    {student.name}
                  </p>
                  {student.code && (
                    <p className="text-[11px] text-slate-400 dark:text-slate-500 font-mono truncate">
                      {student.code}
                    </p>
                  )}
                </div>
              </div>
              <span
                className={`inline-flex items-center gap-1 text-xs font-bold px-2.5 py-1 rounded-lg border shrink-0 ${config.badgeClass}`}
              >
                <StatusIcon className={`w-3.5 h-3.5 ${config.iconClass}`} />
                <span>{t(config.labelKey, config.defaultLabel)}</span>
              </span>
            </div>
          );
        })}
      </div>
    </div>
  );
}

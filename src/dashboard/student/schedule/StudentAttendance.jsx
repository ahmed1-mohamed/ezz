import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import {
  ClipboardList,
  Calendar,
  User,
  Clock,
  CheckCircle2,
  XCircle,
  AlertCircle,
  ChevronLeft,
  ChevronRight,
  HelpCircle,
  ShieldCheck,
  Users,
} from 'lucide-react';
import { useTranslation } from 'react-i18next';
import { studentPortalApi } from '@/shared/services/api/studentPortalApi';
import Spinner from '@/shared/components/Spinner';

export default function StudentAttendance() {
  const { t, i18n } = useTranslation();
  const isRtl = i18n?.language?.startsWith('ar') ?? true;
  const ArrowPrev = isRtl ? ChevronRight : ChevronLeft;
  const ArrowNext = isRtl ? ChevronLeft : ChevronRight;
  const [loading, setLoading] = useState(true);
  const [attendancePayload, setAttendancePayload] = useState(null);
  const [page, setPage] = useState(1);
  const fetchAttendance = async (currentPage) => {
    try {
      setLoading(true);
      const res = await studentPortalApi.fetchAttendance({ page: currentPage, limit: 10 });
      const payload = res?.data?.statistics || res?.data?.data ? res.data : (res || {});
      setAttendancePayload(payload);
    } catch (err) {
      console.warn('Could not load student attendance:', err);
    } finally {
      setLoading(false);
    }
  };
  useEffect(() => {
    fetchAttendance(page);
  }, [page]);
  const stats = attendancePayload?.statistics || {};
  const records = Array.isArray(attendancePayload?.data)
    ? attendancePayload.data
    : (Array.isArray(attendancePayload) ? attendancePayload : []);
  const pagination = attendancePayload?.pagination || {
    totalPages: 1,
    currentPage: 1,
    totalItems: records.length,
    limit: 10,
  };
  const totalPages = Math.max(1, pagination.totalPages || 1);
  const totalItems = pagination.totalItems ?? records.length;
  const limit = pagination.limit || 10;
  const startIndex = totalItems > 0 ? (page - 1) * limit + 1 : 0;
  const endIndex = totalItems > 0 ? Math.min(page * limit, totalItems) : 0;
  const getAttendanceStatusBadge = (statusStr) => {
    const s = String(statusStr || '').trim().toLowerCase();
    if (s.includes('حاضر') || s === 'present' || s === 'attended') {
      return {
        label: isRtl ? 'حاضر' : 'Present',
        cls: 'bg-emerald-50 text-emerald-700 dark:bg-emerald-950/40 dark:text-emerald-400 border border-emerald-200/60 dark:border-emerald-800/60',
        icon: CheckCircle2,
      };
    }
    if (s.includes('غائب') || s === 'absent') {
      return {
        label: isRtl ? 'غائب' : 'Absent',
        cls: 'bg-rose-50 text-rose-700 dark:bg-rose-950/40 dark:text-rose-400 border border-rose-200/60 dark:border-rose-800/60',
        icon: XCircle,
      };
    }
    if (s.includes('متأخر') || s === 'late') {
      return {
        label: isRtl ? 'متأخر' : 'Late',
        cls: 'bg-amber-50 text-amber-700 dark:bg-amber-950/40 dark:text-amber-400 border border-amber-200/60 dark:border-amber-800/60',
        icon: AlertCircle,
      };
    }
    if (s.includes('معذور') || s === 'excused') {
      return {
        label: isRtl ? 'معذور' : 'Excused',
        cls: 'bg-purple-50 text-purple-700 dark:bg-purple-950/40 dark:text-purple-300 border border-purple-200/60 dark:border-purple-800/60',
        icon: ShieldCheck,
      };
    }
    return {
      label: statusStr || (isRtl ? 'قيد الانتظار' : 'Pending'),
      cls: 'bg-slate-100 text-slate-600 dark:bg-slate-800 dark:text-slate-400 border border-slate-200/60 dark:border-slate-700',
      icon: HelpCircle,
    };
  };
  const statCards = [
    {
      value: `${stats.attendanceRate ?? 0}%`,
      label: t('studentDashboard.attendance.rate', 'معدل الحضور'),
      bg: 'bg-emerald-50 dark:bg-emerald-950/30 border-emerald-100 dark:border-emerald-800/40',
      textCls: 'text-emerald-700 dark:text-emerald-400',
    },
    {
      value: stats.attendedCount ?? 0,
      label: t('studentDashboard.attendance.attended', 'حضور'),
      bg: 'bg-blue-50 dark:bg-blue-950/30 border-blue-100 dark:border-blue-800/40',
      textCls: 'text-blue-700 dark:text-blue-400',
    },
    {
      value: stats.absentCount ?? 0,
      label: t('studentDashboard.attendance.absent', 'غياب'),
      bg: 'bg-rose-50 dark:bg-rose-950/30 border-rose-100 dark:border-rose-800/40',
      textCls: 'text-rose-600 dark:text-rose-400',
    },
    {
      value: stats.lateCount ?? 0,
      label: t('studentDashboard.attendance.late', 'متأخر'),
      bg: 'bg-amber-50 dark:bg-amber-950/30 border-amber-100 dark:border-amber-800/40',
      textCls: 'text-amber-700 dark:text-amber-400',
    },
    {
      value: stats.excusedCount ?? 0,
      label: t('studentDashboard.attendance.excused', 'معذور'),
      bg: 'bg-purple-50 dark:bg-purple-950/30 border-purple-100 dark:border-purple-800/40',
      textCls: 'text-purple-700 dark:text-purple-300',
    },
    {
      value: stats.totalSessions ?? 0,
      label: t('studentDashboard.attendance.total', 'إجمالي الحصص'),
      bg: 'bg-slate-50 dark:bg-slate-900 border-slate-200/70 dark:border-slate-800',
      textCls: 'text-slate-800 dark:text-slate-200',
    },
  ];
  return (
    <div className="min-h-screen bg-[#f3f7f6] dark:bg-slate-900 p-4 sm:p-6" dir={isRtl ? 'rtl' : 'ltr'}>
      <motion.div
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        className="max-w-7xl mx-auto space-y-6"
      >
        <div className="bg-white dark:bg-slate-800 rounded-3xl p-6 sm:p-8 shadow-xs border border-slate-100 dark:border-slate-700 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <div className="flex items-center gap-4 text-start">
            <div className="w-14 h-14 bg-[#00695C]/10 text-[#00695C] dark:bg-emerald-950/40 dark:text-emerald-400 rounded-2xl flex items-center justify-center shrink-0">
              <ClipboardList size={28} />
            </div>
            <div>
              <h1 className="text-2xl sm:text-3xl font-black text-slate-800 dark:text-white">
                {t('studentDashboard.attendance.title', 'سجل الحضور والغياب')}
              </h1>
              <p className="text-xs sm:text-sm text-slate-400 dark:text-slate-500 font-semibold mt-1">
                {t('studentDashboard.attendance.subtitle', 'متابعة سجل حضورك وتفاصيل كل حصة دراسية')}
              </p>
            </div>
          </div>
        </div>
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3 sm:gap-4">
          {statCards.map((item, idx) => (
            <div
              key={idx}
              className={`rounded-3xl p-4 sm:p-5 text-center border shadow-xs ${item.bg}`}
            >
              <p className={`text-2xl sm:text-3xl font-black ${item.textCls}`} dir="ltr">
                {item.value}
              </p>
              <p className="text-xs font-bold text-slate-500 dark:text-slate-400 mt-1">
                {item.label}
              </p>
            </div>
          ))}
        </div>
        <div className="bg-white dark:bg-slate-800 rounded-3xl shadow-xs border border-slate-100 dark:border-slate-700 overflow-hidden">
          <div className="p-6 border-b border-slate-100 dark:border-slate-700/60 text-start flex items-center justify-between">
            <h2 className="text-base sm:text-lg font-bold text-slate-800 dark:text-white">
              {t('studentDashboard.attendance.detailedLog', 'السجل التفصيلي للحصص')}
            </h2>
            <span className="text-xs font-bold text-slate-400">
              {totalItems} {isRtl ? 'حصة' : 'sessions'}
            </span>
          </div>
          {loading ? (
            <div className="flex h-64 items-center justify-center">
              <Spinner />
            </div>
          ) : records.length === 0 ? (
            <div className="p-12 text-center text-slate-400 text-sm">
              {t('studentDashboard.attendance.noRecords', 'لا توجد سجلات حضور حتى الآن')}
            </div>
          ) : (
            <div className="divide-y divide-slate-100 dark:divide-slate-700/60">
              {records.map((r, index) => {
                const badge = getAttendanceStatusBadge(r.attendance?.status);
                const BadgeIcon = badge.icon;
                const teacherName = typeof r.teacher === 'object' && r.teacher !== null
                  ? (isRtl ? r.teacher.ar || r.teacher.en : r.teacher.en || r.teacher.ar) || r.teacher.name || ''
                  : String(r.teacher || '');
                const excuse = r.attendance?.excuse;
                return (
                  <div
                    key={r.id || r._id || index}
                    className="p-5 sm:p-6 flex flex-col md:flex-row md:items-center justify-between gap-4 text-start hover:bg-slate-50/60 dark:hover:bg-slate-750/30 transition-colors"
                  >
                    <div className="space-y-2 flex-1 min-w-0">
                      <div className="flex items-center gap-2.5 flex-wrap">
                        <span className="text-xs font-bold px-2.5 py-0.5 rounded-lg bg-[#00695C]/10 text-[#00695C] dark:bg-emerald-950/40 dark:text-emerald-400">
                          #{r.sessionNumber || index + 1}
                        </span>
                        <h3 className="text-sm sm:text-base font-bold text-slate-800 dark:text-white">
                          {r.title}
                        </h3>
                        {r.sessionStatus && (
                          <span className="text-[11px] font-semibold text-slate-400 bg-slate-100 dark:bg-slate-700 px-2.5 py-0.5 rounded-full">
                            {r.sessionStatus}
                          </span>
                        )}
                      </div>
                      <div className="flex flex-wrap items-center gap-3 text-xs text-slate-500 dark:text-slate-400">
                        {r.group && (
                          <span className="font-semibold text-slate-700 dark:text-slate-300 flex items-center gap-1">
                            <Users size={12} className="text-[#00695C] dark:text-emerald-400" />
                            <span>{r.group}</span>
                          </span>
                        )}
                        {teacherName && (
                          <span className="flex items-center gap-1 font-medium">
                            <User size={12} className="text-slate-400" />
                            <span>{teacherName}</span>
                          </span>
                        )}
                        <span className="flex items-center gap-1 font-medium" dir="ltr">
                          <Calendar size={12} className="text-slate-400" />
                          <span>{r.date}</span>
                        </span>
                        {r.day && <span className="font-medium">({r.day})</span>}
                        {r.durationMinutes && (
                          <span className="flex items-center gap-1 font-medium">
                            <Clock size={12} className="text-slate-400" />
                            <span>{r.durationMinutes} {t('common.minutes', 'دقيقة')}</span>
                          </span>
                        )}
                      </div>
                      {excuse?.reason && (
                        <div className="p-3 bg-purple-50/80 dark:bg-purple-950/30 rounded-2xl border border-purple-100 dark:border-purple-800/40 text-xs text-purple-900 dark:text-purple-300 flex items-start gap-2 mt-2">
                          <ShieldCheck size={16} className="text-purple-600 dark:text-purple-400 shrink-0 mt-0.5" />
                          <div className="space-y-0.5">
                            <span className="font-bold">{t('studentDashboard.attendance.excuseApproved', 'العذر المقبول:')} </span>
                            <span>{excuse.reason}</span>
                          </div>
                        </div>
                      )}
                      {r.attendance?.notes && (
                        <p className="text-xs text-slate-400 dark:text-slate-500 italic mt-1">
                          {r.attendance.notes}
                        </p>
                      )}
                    </div>
                    <div className="self-start md:self-auto shrink-0">
                      <span className={`inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-xl text-xs font-bold ${badge.cls}`}>
                        <BadgeIcon size={14} />
                        <span>{badge.label}</span>
                      </span>
                    </div>
                  </div>
                );
              })}
            </div>
          )}
          {totalPages > 1 && (
            <div className="p-5 border-t border-slate-100 dark:border-slate-700/60 flex flex-col sm:flex-row items-center justify-between gap-4">
              <p className="text-xs sm:text-sm font-semibold text-slate-400 dark:text-slate-500">
                {isRtl ? (
                  <>عرض <span className="text-slate-700 dark:text-slate-200 font-bold">{startIndex}</span> - <span className="text-slate-700 dark:text-slate-200 font-bold">{endIndex}</span> من أصل <span className="text-slate-700 dark:text-slate-200 font-bold">{totalItems}</span> حصة</>
                ) : (
                  <>Showing <span className="text-slate-700 dark:text-slate-200 font-bold">{startIndex}</span> - <span className="text-slate-700 dark:text-slate-200 font-bold">{endIndex}</span> of <span className="text-slate-700 dark:text-slate-200 font-bold">{totalItems}</span> sessions</>
                )}
              </p>
              <div className="flex items-center gap-2">
                <button
                  type="button"
                  disabled={page <= 1}
                  onClick={() => setPage((p) => Math.max(1, p - 1))}
                  aria-label="Previous Page"
                  className="p-2.5 rounded-xl bg-slate-50 hover:bg-slate-100 dark:bg-slate-900 dark:hover:bg-slate-700 text-slate-700 dark:text-slate-200 border border-slate-200 dark:border-slate-700 disabled:opacity-40 disabled:cursor-not-allowed transition-colors cursor-pointer"
                >
                  <ArrowPrev size={16} />
                </button>
                <div className="flex items-center gap-1">
                  {Array.from({ length: totalPages }, (_, i) => i + 1)
                    .filter((pNum) => pNum === 1 || pNum === totalPages || Math.abs(pNum - page) <= 1)
                    .map((pNum, index, arr) => {
                      const prevNum = arr[index - 1];
                      const showEllipsis = prevNum && pNum - prevNum > 1;
                      const isActive = page === pNum;
                      return (
                        <div key={pNum} className="flex items-center gap-1">
                          {showEllipsis && (
                            <span className="px-2 text-xs font-bold text-slate-400">...</span>
                          )}
                          <button
                            type="button"
                            onClick={() => setPage(pNum)}
                            className={`w-9 h-9 rounded-xl text-xs font-bold transition-all cursor-pointer ${
                              isActive
                                ? 'bg-[#00695C] text-white shadow-xs'
                                : 'bg-slate-50 hover:bg-slate-100 dark:bg-slate-900 dark:hover:bg-slate-700 text-slate-700 dark:text-slate-300 border border-slate-200 dark:border-slate-700'
                            }`}
                          >
                            {pNum}
                          </button>
                        </div>
                      );
                    })}
                </div>
                <button
                  type="button"
                  disabled={page >= totalPages}
                  onClick={() => setPage((p) => Math.min(totalPages, p + 1))}
                  aria-label="Next Page"
                  className="p-2.5 rounded-xl bg-slate-50 hover:bg-slate-100 dark:bg-slate-900 dark:hover:bg-slate-700 text-slate-700 dark:text-slate-200 border border-slate-200 dark:border-slate-700 disabled:opacity-40 disabled:cursor-not-allowed transition-colors cursor-pointer"
                >
                  <ArrowNext size={16} />
                </button>
              </div>
            </div>
          )}
        </div>
      </motion.div>
    </div>
  );
}

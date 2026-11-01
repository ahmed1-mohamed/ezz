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
  const [attendanceData, setAttendanceData] = useState(null);
  const [page, setPage] = useState(1);

  const fetchAttendance = async (currentPage) => {
    try {
      setLoading(true);
      const res = await studentPortalApi.fetchAttendance({ page: currentPage, limit: 10 });
      setAttendanceData(res);
    } catch (err) {
      console.warn('Could not load student attendance:', err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchAttendance(page);
  }, [page]);

  const stats = attendanceData?.statistics || {};
  const records = Array.isArray(attendanceData?.data) ? attendanceData.data : [];
  const pagination = attendanceData?.pagination || { totalPages: 1, currentPage: 1, totalItems: 0 };

  const getAttendanceStatusBadge = (statusStr) => {
    const s = String(statusStr || '').trim().toLowerCase();
    if (s.includes('حاضر') || s === 'present' || s === 'attended') {
      return {
        label: isRtl ? 'حاضر' : 'Present',
        cls: 'bg-emerald-100 text-emerald-700 dark:bg-emerald-900/30 dark:text-emerald-400',
        icon: CheckCircle2,
      };
    }
    if (s.includes('غائب') || s === 'absent') {
      return {
        label: isRtl ? 'غائب' : 'Absent',
        cls: 'bg-red-100 text-red-600 dark:bg-red-900/30 dark:text-red-400',
        icon: XCircle,
      };
    }
    if (s.includes('متأخر') || s === 'late') {
      return {
        label: isRtl ? 'متأخر' : 'Late',
        cls: 'bg-amber-100 text-amber-700 dark:bg-amber-900/30 dark:text-amber-400',
        icon: AlertCircle,
      };
    }
    if (s.includes('معذور') || s === 'excused') {
      return {
        label: isRtl ? 'معذور' : 'Excused',
        cls: 'bg-purple-100 text-purple-700 dark:bg-purple-900/30 dark:text-purple-400',
        icon: AlertCircle,
      };
    }
    return {
      label: statusStr || (isRtl ? 'قيد الانتظار' : 'Pending'),
      cls: 'bg-slate-100 text-slate-600 dark:bg-slate-800 dark:text-slate-400',
      icon: HelpCircle,
    };
  };

  return (
    <div className="min-h-screen bg-[#f3f7f6] dark:bg-slate-900 p-4 sm:p-6" dir={isRtl ? 'rtl' : 'ltr'}>
      <motion.div
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        className="max-w-7xl mx-auto space-y-6"
      >
        {/* Header */}
        <div className="bg-white dark:bg-slate-800 rounded-3xl p-6 sm:p-8 shadow-sm border border-slate-100 dark:border-slate-700 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <div className="flex items-center gap-4 text-start">
            <div className="w-14 h-14 bg-emerald-50 dark:bg-emerald-900/20 rounded-2xl flex items-center justify-center text-[#0f7a6c] dark:text-emerald-400">
              <ClipboardList size={28} />
            </div>
            <div>
              <h1 className="text-xl sm:text-2xl font-bold text-slate-800 dark:text-slate-100">
                {t('studentDashboard.attendance.title', 'سجل الحضور والغياب')}
              </h1>
              <p className="text-xs sm:text-sm text-slate-500 dark:text-slate-400 mt-1">
                {t('studentDashboard.attendance.subtitle', 'متابعة سجل حضورك وتفاصيل كل حصة دراسية')}
              </p>
            </div>
          </div>
        </div>

        {/* Statistics Cards */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
          {[
            {
              value: `${stats.attendanceRate ?? 0}%`,
              label: t('studentDashboard.attendance.rate', 'معدل الحضور'),
              bg: 'bg-emerald-50 dark:bg-emerald-900/20 border-emerald-100 dark:border-emerald-800/40',
              textCls: 'text-emerald-700 dark:text-emerald-400',
            },
            {
              value: stats.attendedCount ?? 0,
              label: t('studentDashboard.attendance.attended', 'حصص الحضور'),
              bg: 'bg-blue-50 dark:bg-blue-900/20 border-blue-100 dark:border-blue-800/40',
              textCls: 'text-blue-700 dark:text-blue-400',
            },
            {
              value: stats.absentCount ?? 0,
              label: t('studentDashboard.attendance.absent', 'حصص الغياب'),
              bg: 'bg-red-50 dark:bg-red-900/20 border-red-100 dark:border-red-800/40',
              textCls: 'text-red-600 dark:text-red-400',
            },
            {
              value: stats.totalSessions ?? 0,
              label: t('studentDashboard.attendance.total', 'إجمالي الحصص'),
              bg: 'bg-purple-50 dark:bg-purple-900/20 border-purple-100 dark:border-purple-800/40',
              textCls: 'text-purple-700 dark:text-purple-400',
            },
          ].map((item, idx) => (
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

        {/* Detailed Attendance Log */}
        <div className="bg-white dark:bg-slate-800 rounded-3xl shadow-sm border border-slate-100 dark:border-slate-700 overflow-hidden">
          <div className="p-6 border-b border-slate-100 dark:border-slate-700/60 text-start">
            <h2 className="text-base font-bold text-slate-800 dark:text-slate-100">
              {t('studentDashboard.attendance.detailedLog', 'السجل التفصيلي للحصص')}
            </h2>
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
              {records.map((r) => {
                const badge = getAttendanceStatusBadge(r.attendance?.status);
                const BadgeIcon = badge.icon;
                const timeStr = r.startTime
                  ? `${new Date(r.startTime).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}`
                  : '';

                return (
                  <div
                    key={r.id}
                    className="p-5 sm:p-6 flex flex-col md:flex-row md:items-center justify-between gap-4 text-start hover:bg-slate-50/50 dark:hover:bg-slate-700/20 transition-colors"
                  >
                    <div className="space-y-1.5 flex-1 min-w-0">
                      <div className="flex items-center gap-2 flex-wrap">
                        <span className="text-xs font-bold text-[#0f7a6c] dark:text-emerald-400">
                          #{r.sessionNumber || 1}
                        </span>
                        <h3 className="text-sm sm:text-base font-bold text-slate-800 dark:text-slate-100">
                          {r.title}
                        </h3>
                      </div>
                      <div className="flex flex-wrap items-center gap-3 text-xs text-slate-500 dark:text-slate-400">
                        {r.group && <span className="font-medium text-slate-600 dark:text-slate-300">{r.group}</span>}
                        {r.teacher && (
                          <span className="flex items-center gap-1">
                            <User size={12} className="text-slate-400" />
                            <span>{r.teacher}</span>
                          </span>
                        )}
                        <span className="flex items-center gap-1" dir="ltr">
                          <Calendar size={12} className="text-slate-400" />
                          <span>{r.date}</span>
                        </span>
                        {r.day && <span>({r.day})</span>}
                        {r.durationMinutes && (
                          <span className="flex items-center gap-1">
                            <Clock size={12} className="text-slate-400" />
                            <span>{r.durationMinutes} دقيقة</span>
                          </span>
                        )}
                      </div>
                      {r.attendance?.notes && (
                        <p className="text-xs text-slate-400 italic mt-1">
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

          {/* Pagination */}
          {pagination.totalPages > 1 && (
            <div className="p-4 border-t border-slate-100 dark:border-slate-700/60 flex items-center justify-center gap-2">
              <button
                disabled={page <= 1}
                onClick={() => setPage((p) => Math.max(1, p - 1))}
                className="p-2.5 rounded-xl bg-slate-50 dark:bg-slate-700 border border-slate-200 dark:border-slate-600 disabled:opacity-40 cursor-pointer"
              >
                <ArrowPrev size={16} />
              </button>
              <span className="text-xs font-bold text-slate-600 dark:text-slate-300 px-4">
                {page} / {pagination.totalPages}
              </span>
              <button
                disabled={page >= pagination.totalPages}
                onClick={() => setPage((p) => Math.min(pagination.totalPages, p + 1))}
                className="p-2.5 rounded-xl bg-slate-50 dark:bg-slate-700 border border-slate-200 dark:border-slate-600 disabled:opacity-40 cursor-pointer"
              >
                <ArrowNext size={16} />
              </button>
            </div>
          )}
        </div>
      </motion.div>
    </div>
  );
}

import { useState, useMemo } from 'react';
import {
  Calendar,
  Users,
  Clock,
  Search,
  Filter,
  CheckCircle,
  Clock3,
  CheckCheck,
  Receipt,
} from 'lucide-react';
import { matchesArabicQuery } from '@/shared/utils/stringUtils';

const getStatusBadge = (status, t) => {
  const norm = String(status || '').toLowerCase();
  if (norm === 'completed' || norm === 'مكتملة') {
    return {
      label: t('teacher.earnings.table.completed', 'مكتملة'),
      className: 'bg-emerald-50 text-emerald-700 dark:bg-emerald-950/40 dark:text-emerald-300 border-emerald-200/60 dark:border-emerald-800/60',
      icon: CheckCircle,
    };
  }
  if (norm === 'paid' || norm === 'تم الصرف' || norm === 'تم التحويل') {
    return {
      label: t('teacher.earnings.table.paid', 'تم الصرف'),
      className: 'bg-blue-50 text-blue-700 dark:bg-blue-950/40 dark:text-blue-300 border-blue-200/60 dark:border-blue-800/60',
      icon: CheckCheck,
    };
  }
  return {
    label: t('teacher.earnings.table.pending', 'قيد الاعتماد'),
    className: 'bg-amber-50 text-amber-700 dark:bg-amber-950/40 dark:text-amber-300 border-amber-200/60 dark:border-amber-800/60',
    icon: Clock3,
  };
};

export default function TeacherEarningsTable({
  records = [],
  isLoading = false,
  t,
  isRtl,
}) {
  const [searchTerm, setSearchTerm] = useState('');
  const [statusFilter, setStatusFilter] = useState('all');
  const [page, setPage] = useState(1);
  const itemsPerPage = 10;
  const currency = isRtl ? 'دولار' : '$';
  const formatAmount = (val) => {
    const num = Number(val ?? 0);
    if (Number.isNaN(num)) return '0';
    return num.toLocaleString('en-US', { minimumFractionDigits: 0, maximumFractionDigits: 2 });
  };
  const formatDate = (isoStr) => {
    if (!isoStr) return '—';
    const dateObj = new Date(isoStr);
    if (Number.isNaN(dateObj.getTime())) return String(isoStr);
    return dateObj.toLocaleDateString(isRtl ? 'ar-EG' : 'en-US', {
      year: 'numeric',
      month: 'short',
      day: 'numeric',
      hour: '2-digit',
      minute: '2-digit',
    });
  };
  const filteredRecords = useMemo(() => {
    const query = searchTerm.trim();
    return records.filter((rec) => {
      const title = String(rec.sessionTitle || rec.title || rec.session?.title || '');
      const group = String(rec.groupName || rec.group?.name || '');
      const matchesSearch = !query || matchesArabicQuery(title, query) || matchesArabicQuery(group, query);
      const matchesStatus = statusFilter === 'all' || String(rec.status || '').toLowerCase() === statusFilter;
      return matchesSearch && matchesStatus;
    });
  }, [records, searchTerm, statusFilter]);
  const totalPages = Math.max(1, Math.ceil(filteredRecords.length / itemsPerPage));
  const paginatedRecords = useMemo(() => {
    const start = (page - 1) * itemsPerPage;
    return filteredRecords.slice(start, start + itemsPerPage);
  }, [filteredRecords, page]);
  if (isLoading && records.length === 0) {
    return (
      <div className="p-8 rounded-3xl bg-white dark:bg-slate-900 border border-slate-100 dark:border-slate-800 shadow-soft animate-pulse space-y-4">
        <div className="h-6 w-1/4 rounded bg-slate-200 dark:bg-slate-800" />
        <div className="h-4 w-1/2 rounded bg-slate-100 dark:bg-slate-800/60" />
        <div className="h-48 rounded-2xl bg-slate-100 dark:bg-slate-800/40" />
      </div>
    );
  }
  return (
    <div className="space-y-4 text-start">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 bg-white dark:bg-slate-900 p-4 rounded-3xl border border-slate-100 dark:border-slate-800 shadow-soft">
        <div className="relative flex-1">
          <Search size={16} className={`absolute top-1/2 -translate-y-1/2 text-slate-400 ${isRtl ? 'right-3.5' : 'left-3.5'}`} />
          <input
            type="text"
            value={searchTerm}
            onChange={(e) => {
              setSearchTerm(e.target.value);
              setPage(1);
            }}
            placeholder={t('teacher.earnings.table.searchPlaceholder', 'بحث باسم الحصة أو المجموعة...')}
            className={`w-full py-2.5 rounded-2xl bg-slate-50 dark:bg-slate-800 border border-slate-200/60 dark:border-slate-700 text-xs sm:text-sm text-slate-800 dark:text-slate-100 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-[#005953]/20 ${
              isRtl ? 'pr-10 pl-4' : 'pl-10 pr-4'
            }`}
          />
        </div>
        <div className="flex items-center gap-2">
          <div className="flex items-center gap-1.5 px-3 py-2 rounded-2xl bg-slate-50 dark:bg-slate-800 border border-slate-200/60 dark:border-slate-700 text-xs font-bold text-slate-600 dark:text-slate-300">
            <Filter size={14} className="text-slate-400" />
            <select
              value={statusFilter}
              onChange={(e) => {
                setStatusFilter(e.target.value);
                setPage(1);
              }}
              className="bg-transparent focus:outline-none cursor-pointer"
            >
              <option value="all">{t('common.all', 'الكل')}</option>
              <option value="completed">{t('teacher.earnings.table.completed', 'مكتملة')}</option>
              <option value="pending">{t('teacher.earnings.table.pending', 'قيد الاعتماد')}</option>
              <option value="paid">{t('teacher.earnings.table.paid', 'تم الصرف')}</option>
            </select>
          </div>
        </div>
      </div>
      {paginatedRecords.length === 0 ? (
        <div className="p-8 sm:p-12 text-center rounded-3xl bg-white dark:bg-slate-900 border border-slate-100 dark:border-slate-800 shadow-soft space-y-4">
          <div className="w-16 h-16 rounded-3xl bg-[#005953]/10 dark:bg-[#005953]/20 text-[#005953] dark:text-brand-400 flex items-center justify-center mx-auto">
            <Receipt size={32} />
          </div>
          <div className="max-w-md mx-auto space-y-1.5">
            <h3 className="text-lg font-bold text-slate-800 dark:text-white">
              {t('teacher.earnings.table.emptyTitle', 'لا توجد تفاصيل أرباح مسجلة')}
            </h3>
            <p className="text-xs text-slate-500 dark:text-slate-400 leading-relaxed">
              {t('teacher.earnings.table.emptySubtitle', 'ستظهر هنا تفاصيل الأرباح بمجرد إتمام الحصص الدراسية.')}
            </p>
          </div>
        </div>
      ) : (
        <div className="rounded-3xl bg-white dark:bg-slate-900 border border-slate-100 dark:border-slate-800 shadow-soft overflow-hidden">
          <div className="overflow-x-auto">
            <table className="w-full text-start text-xs sm:text-sm">
              <thead className="bg-slate-50/80 dark:bg-slate-800/50 border-b border-slate-100 dark:border-slate-800 text-slate-500 dark:text-slate-400 font-bold">
                <tr>
                  <th className="px-5 py-4">{t('teacher.earnings.table.session', 'الحصة / الجلسة')}</th>
                  <th className="px-4 py-4">{t('teacher.earnings.table.date', 'التاريخ والوقت')}</th>
                  <th className="px-4 py-4">{t('teacher.earnings.table.students', 'الطلاب')}</th>
                  <th className="px-4 py-4">{t('teacher.earnings.table.duration', 'المدة')}</th>
                  <th className="px-4 py-4">{t('teacher.earnings.table.amount', 'المستحق')}</th>
                  <th className="px-5 py-4 text-center">{t('teacher.earnings.table.status', 'الحالة')}</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100 dark:divide-slate-800">
                {paginatedRecords.map((item, idx) => {
                  const badge = getStatusBadge(item.status, t);
                  const BadgeIcon = badge.icon;
                  const sessionName = item.sessionTitle || item.title || item.session?.title || t('teacher.liveSessionTitle', 'حصة دراسية');
                  const groupName = item.groupName || item.group?.name || '-';
                  const studentsCount = item.studentsCount ?? item.attendanceCount ?? item.students?.length ?? '-';
                  const durationMins = item.durationMinutes || item.duration || 60;
                  const earnedValue = item.earnedAmount ?? item.amount ?? item.teacherEarnings ?? 0;
                  return (
                    <tr key={item.id || idx} className="hover:bg-slate-50/60 dark:hover:bg-slate-800/40 transition-colors">
                      <td className="px-5 py-4">
                        <div className="font-bold text-slate-800 dark:text-white line-clamp-1">{sessionName}</div>
                        <div className="text-[11px] text-slate-400 mt-0.5 line-clamp-1">{groupName}</div>
                      </td>
                      <td className="px-4 py-4 text-slate-500 dark:text-slate-400 whitespace-nowrap">
                        <div className="flex items-center gap-1.5">
                          <Calendar size={13} className="text-slate-400 shrink-0" />
                          <span dir="ltr">{formatDate(item.date || item.createdAt || item.sessionDate)}</span>
                        </div>
                      </td>
                      <td className="px-4 py-4 text-slate-700 dark:text-slate-300">
                        <div className="flex items-center gap-1.5">
                          <Users size={13} className="text-slate-400 shrink-0" />
                          <span>{studentsCount}</span>
                        </div>
                      </td>
                      <td className="px-4 py-4 text-slate-700 dark:text-slate-300">
                        <div className="flex items-center gap-1.5">
                          <Clock size={13} className="text-slate-400 shrink-0" />
                          <span>{durationMins} دقيقة</span>
                        </div>
                      </td>
                      <td className="px-4 py-4 font-black text-emerald-700 dark:text-emerald-400 whitespace-nowrap">
                        {formatAmount(earnedValue)} {currency}
                      </td>
                      <td className="px-5 py-4 text-center">
                        <span className={`inline-flex items-center gap-1 px-2.5 py-1 rounded-full text-[11px] font-bold border ${badge.className}`}>
                          <BadgeIcon size={12} />
                          <span>{badge.label}</span>
                        </span>
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
          {totalPages > 1 && (
            <div className="flex items-center justify-between p-4 border-t border-slate-100 dark:border-slate-800 text-xs font-bold text-slate-500">
              <span>{page} / {totalPages}</span>
              <div className="flex items-center gap-2">
                <button
                  type="button"
                  disabled={page <= 1}
                  onClick={() => setPage((p) => p - 1)}
                  className="px-3 py-1.5 rounded-xl border border-slate-200 dark:border-slate-700 disabled:opacity-40 hover:bg-slate-50 dark:hover:bg-slate-800 cursor-pointer"
                >
                  {isRtl ? 'السابق' : 'Previous'}
                </button>
                <button
                  type="button"
                  disabled={page >= totalPages}
                  onClick={() => setPage((p) => p + 1)}
                  className="px-3 py-1.5 rounded-xl border border-slate-200 dark:border-slate-700 disabled:opacity-40 hover:bg-slate-50 dark:hover:bg-slate-800 cursor-pointer"
                >
                  {isRtl ? 'التالي' : 'Next'}
                </button>
              </div>
            </div>
          )}
        </div>
      )}
    </div>
  );
}

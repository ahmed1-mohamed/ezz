import { useState, useEffect, useRef, useCallback } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import {
  Calendar,
  Clock,
  CheckCircle,
  FileText,
  AlertCircle,
  Star,
  ClipboardList,
  Send,
  RefreshCcw,
  Search,
  X,
} from 'lucide-react';
import { useTranslation } from 'react-i18next';
import { studentPortalApi } from '@/shared/services/api/studentPortalApi';
import Spinner from '@/shared/components/Spinner';

/* ─── helpers ─────────────────────────────────────────────── */

function resolveSubmissionStatus(item) {
  const raw = (item?.submissionStatus || item?.status || '').toString().toLowerCase();
  if (raw.includes('فات') || raw.includes('overdue')) return 'overdue';
  if (raw.includes('متأخر') || raw.includes('late')) return 'submitted_late';
  if (raw.includes('تم التسليم') || raw.includes('submitted') || raw === 'completed') return 'submitted';
  return 'pending';
}

function resolveEvaluationStatus(item) {
  const raw = (item?.evaluationStatus || item?.evalStatus || '').toString().trim();
  const low = raw.toLowerCase();
  // Check "not evaluated" FIRST to avoid substring match with "evaluated"
  if (low === 'not_evaluated' || low.includes('لم يتم') || low.includes('غير مقيم') || low === 'pending') {
    return { isEvaluated: false, label: 'لم يتم التقييم' };
  }
  if (low === 'evaluated' || low.includes('تم التقييم') || low.includes('مقيم') || low === 'done') {
    return { isEvaluated: true, label: 'تم التقييم' };
  }
  // Fallback: rely on grade
  if (item?.grade !== null && item?.grade !== undefined && item?.grade !== '') {
    return { isEvaluated: true, label: 'تم التقييم' };
  }
  return { isEvaluated: false, label: 'لم يتم التقييم' };
}

function formatDate(dateStr, isRtl) {
  if (!dateStr) return '';
  const d = new Date(dateStr);
  if (Number.isNaN(d.getTime())) return String(dateStr);
  return d.toLocaleDateString(isRtl ? 'ar-EG' : 'en-US', {
    day: 'numeric',
    month: 'long',
    year: 'numeric',
  });
}

function normaliseItem(item, submissionKey, isRtl) {
  const submStatus = resolveSubmissionStatus({ ...item, status: submissionKey });
  const evalInfo = resolveEvaluationStatus(item);
  return {
    id: item.id || item._id,
    title: item.homework || item.title || item.name || (isRtl ? 'واجب' : 'Homework'),
    group: item.group || item.sessionName || '-',
    submissionStatus: submStatus,
    submissionStatusLabel: item.submissionStatus || '',
    evaluationStatus: evalInfo,
    grade: item.grade ?? null,
    teacherNotes: item.teacherNotes || null,
    submittedAt: item.submittedAt || null,
    submittedAtFormatted: formatDate(item.submittedAt, isRtl),
    deadline: item.deadline || null,
    deadlineFormatted: formatDate(item.deadline, isRtl),
    media: item.media || null,
    document: item.document || null,
    // pass through raw for details page
    _raw: item,
  };
}

/* ─── tabs config ─────────────────────────────────────────── */
// key → matches the state key in tabData
const TABS = [
  { key: 'pending',        labelAr: 'في الانتظار',      labelEn: 'Pending',         statKey: 'pending',        color: 'amber' },
  { key: 'submitted',      labelAr: 'تم التسليم',        labelEn: 'Submitted',       statKey: 'submitted',      color: 'emerald' },
  { key: 'submitted_late', labelAr: 'تسليم متأخر',       labelEn: 'Submitted Late',  statKey: 'submitted_late', color: 'orange' },
  { key: 'overdue',        labelAr: 'فات الموعد',        labelEn: 'Overdue',         statKey: 'overdue',        color: 'rose' },
];

const TAB_API = {
  pending:        (p) => studentPortalApi.fetchPendingHomework(p),
  submitted:      (p) => studentPortalApi.fetchSubmittedHomework(p),
  submitted_late: (p) => studentPortalApi.fetchSubmittedLateHomework(p),
  overdue:        (p) => studentPortalApi.fetchOverdueHomework(p),
};

const TAB_COLORS = {
  amber:   { active: 'bg-amber-500 text-white', badge: 'bg-amber-100 text-amber-700 dark:bg-amber-900/30 dark:text-amber-300' },
  emerald: { active: 'bg-emerald-600 text-white', badge: 'bg-emerald-100 text-emerald-700 dark:bg-emerald-900/30 dark:text-emerald-300' },
  orange:  { active: 'bg-orange-500 text-white', badge: 'bg-orange-100 text-orange-700 dark:bg-orange-900/30 dark:text-orange-300' },
  rose:    { active: 'bg-rose-600 text-white', badge: 'bg-rose-100 text-rose-700 dark:bg-rose-900/30 dark:text-rose-300' },
};

/* ─── KPI card data ───────────────────────────────────────── */
function buildKpiCards(stats, t) {
  return [
    {
      key: 'total',
      label: t('studentDashboard.assignments.kpiTotal', 'إجمالي الواجبات'),
      value: stats?.total ?? '-',
      color: 'bg-slate-50 dark:bg-slate-800 border-slate-200 dark:border-slate-700',
      textColor: 'text-slate-700 dark:text-slate-200',
      icon: ClipboardList,
      iconColor: 'text-slate-500 dark:text-slate-400',
      tab: null,
    },
    {
      key: 'pending',
      label: t('studentDashboard.assignments.kpiPending', 'في الانتظار'),
      value: stats?.pending ?? '-',
      color: 'bg-amber-50 dark:bg-amber-950/30 border-amber-200 dark:border-amber-800/50',
      textColor: 'text-amber-700 dark:text-amber-300',
      icon: Clock,
      iconColor: 'text-amber-500 dark:text-amber-400',
      tab: 'pending',
    },
    {
      key: 'submitted',
      label: t('studentDashboard.assignments.kpiSubmitted', 'تم التسليم'),
      value: stats?.submitted ?? '-',
      color: 'bg-emerald-50 dark:bg-emerald-950/30 border-emerald-200 dark:border-emerald-800/50',
      textColor: 'text-emerald-700 dark:text-emerald-300',
      icon: CheckCircle,
      iconColor: 'text-emerald-500 dark:text-emerald-400',
      tab: 'submitted',
    },
    {
      key: 'submitted_late',
      label: t('studentDashboard.assignments.kpiLate', 'تسليم متأخر'),
      value: stats?.submitted_late ?? '-',
      color: 'bg-orange-50 dark:bg-orange-950/30 border-orange-200 dark:border-orange-800/50',
      textColor: 'text-orange-700 dark:text-orange-300',
      icon: AlertCircle,
      iconColor: 'text-orange-500 dark:text-orange-400',
      tab: 'submitted_late',
    },
    {
      key: 'evaluated',
      label: t('studentDashboard.assignments.kpiEvaluated', 'تم التقييم'),
      value: stats?.evaluated ?? '-',
      color: 'bg-purple-50 dark:bg-purple-950/30 border-purple-200 dark:border-purple-800/50',
      textColor: 'text-purple-700 dark:text-purple-300',
      icon: Star,
      iconColor: 'text-purple-500 dark:text-purple-400',
      tab: null,
    },
    {
      key: 'overdue',
      label: t('studentDashboard.assignments.kpiOverdue', 'فات الموعد'),
      value: stats?.overdue ?? '-',
      color: 'bg-rose-50 dark:bg-rose-950/30 border-rose-200 dark:border-rose-800/50',
      textColor: 'text-rose-700 dark:text-rose-300',
      icon: AlertCircle,
      iconColor: 'text-rose-500 dark:text-rose-400',
      tab: 'overdue',
    },
  ];
}

/* ─── component ───────────────────────────────────────────── */
export default function StudentAssignments() {
  const navigate = useNavigate();
  const { t, i18n } = useTranslation();
  const isRtl = i18n.language.startsWith('ar');

  const [activeTab, setActiveTab] = useState('pending');
  const [statistics, setStatistics] = useState(null);
  const [tabData, setTabData] = useState({ pending: null, submitted: null, submitted_late: null, overdue: null });
  const [tabLoading, setTabLoading] = useState({ pending: false, submitted: false, submitted_late: false, overdue: false });
  const [search, setSearch] = useState('');

  // Track which tabs have been fetched so we don't re-fetch
  const loadedRef = useRef(new Set());

  const loadTab = useCallback(async (tabKey, force = false) => {
    if (!force && loadedRef.current.has(tabKey)) return;
    setTabLoading((prev) => ({ ...prev, [tabKey]: true }));
    try {
      const res = await TAB_API[tabKey]();
      const raw = res?.data || res;
      const stats = res?.statistics || null;
      // Statistics come from every endpoint — save on first successful load
      if (stats && !statistics) setStatistics(stats);
      if (stats) setStatistics(stats); // always overwrite to get latest
      const items = Array.isArray(raw) ? raw.map((it) => normaliseItem(it, tabKey, isRtl)) : [];
      setTabData((prev) => ({ ...prev, [tabKey]: items }));
      loadedRef.current.add(tabKey);
    } catch {
      setTabData((prev) => ({ ...prev, [tabKey]: [] }));
      loadedRef.current.add(tabKey);
    } finally {
      setTabLoading((prev) => ({ ...prev, [tabKey]: false }));
    }
  }, [isRtl, statistics]);

  // On mount: load only the pending tab
  useEffect(() => {
    loadTab('pending');
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  // When switching tabs, lazy-load if not yet fetched
  function handleTabChange(tabKey) {
    setActiveTab(tabKey);
    setSearch('');
    loadTab(tabKey);
  }

  function handleRefresh() {
    loadedRef.current.delete(activeTab);
    loadTab(activeTab, true);
  }

  function handleOpenDetails(item) {
    navigate(`/dashboard/student/assignments/${item.id}`, {
      state: { homework: item._raw || item },
    });
  }

  const currentItems = tabData[activeTab] ?? null;
  const isLoading = tabLoading[activeTab];

  const filteredItems = currentItems && search.trim()
    ? currentItems.filter((it) =>
        it.title.includes(search) ||
        it.group.includes(search) ||
        (it.deadlineFormatted && it.deadlineFormatted.includes(search))
      )
    : currentItems;

  const kpiCards = buildKpiCards(statistics, t);

  /* ─── render ──────────────────────────────────────────── */
  return (
    <div
      className="min-h-screen bg-[#EEF4F2] dark:bg-slate-950 p-4 sm:p-6 lg:p-8 font-sans transition-colors"
      dir={isRtl ? 'rtl' : 'ltr'}
    >
      <div className="max-w-6xl mx-auto space-y-5">

        {/* ── Header ── */}
        <div className="bg-white dark:bg-slate-900 rounded-3xl px-6 py-5 sm:px-8 border border-slate-100 dark:border-slate-800 shadow-xs">
          <h1 className="text-xl sm:text-2xl font-black text-slate-900 dark:text-slate-100 tracking-tight">
            {t('studentDashboard.assignments.title', 'الواجبات')}
          </h1>
          <p className="text-xs sm:text-sm text-slate-400 dark:text-slate-500 mt-1 font-medium">
            {t('studentDashboard.assignments.subtitle', 'تابع واجباتك وقم بتسليمها في الوقت المحدد')}
          </p>
        </div>

        {/* ── KPI Stats ── */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3">
          {kpiCards.map((card) => {
            const Icon = card.icon;
            return (
              <motion.button
                key={card.key}
                type="button"
                onClick={() => card.tab && handleTabChange(card.tab)}
                whileHover={card.tab ? { scale: 1.03 } : {}}
                whileTap={card.tab ? { scale: 0.97 } : {}}
                className={`${card.color} border rounded-2xl p-4 text-start space-y-2 transition-all ${card.tab ? 'cursor-pointer hover:shadow-sm' : 'cursor-default'}`}
              >
                <div className="flex items-center justify-between">
                  <Icon size={18} className={card.iconColor} />
                </div>
                <p className={`text-2xl font-black ${card.textColor}`}>
                  {card.value}
                </p>
                <p className="text-[11px] font-semibold text-slate-500 dark:text-slate-400 leading-tight">
                  {card.label}
                </p>
              </motion.button>
            );
          })}
        </div>

        {/* ── Tabs ── */}
        <div className="bg-white dark:bg-slate-900 rounded-3xl p-3 border border-slate-100 dark:border-slate-800 shadow-xs">
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
            {TABS.map((tab) => {
              const isSelected = activeTab === tab.key;
              const count = statistics?.[tab.statKey] ?? (tabData[tab.key]?.length ?? null);
              const colors = TAB_COLORS[tab.color];
              return (
                <button
                  key={tab.key}
                  type="button"
                  onClick={() => handleTabChange(tab.key)}
                  className={`py-3 px-3 rounded-2xl flex items-center justify-center gap-2 font-bold text-xs sm:text-sm transition-all cursor-pointer ${
                    isSelected
                      ? colors.active + ' shadow-sm'
                      : 'bg-slate-50 dark:bg-slate-800 text-slate-700 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-700'
                  }`}
                >
                  <span className="truncate">{isRtl ? tab.labelAr : tab.labelEn}</span>
                  {count !== null && (
                    <span
                      className={`w-5 h-5 shrink-0 rounded-full flex items-center justify-center text-[11px] font-bold ${
                        isSelected ? 'bg-white/25 text-white' : colors.badge
                      }`}
                    >
                      {count}
                    </span>
                  )}
                </button>
              );
            })}
          </div>
        </div>

        {/* ── Search + Refresh ── */}
        <div className="flex items-center gap-3">
          <div className="relative flex-1">
            <Search size={15} className={`absolute top-1/2 -translate-y-1/2 text-slate-400 ${isRtl ? 'right-3' : 'left-3'}`} />
            <input
              type="text"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              placeholder={t('studentDashboard.assignments.search', 'بحث في الواجبات...')}
              className={`w-full bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-700 rounded-2xl py-2.5 text-xs font-medium text-slate-800 dark:text-slate-100 placeholder-slate-400 focus:outline-none focus:border-[#00594C] dark:focus:border-emerald-500 transition ${isRtl ? 'pr-9 pl-4' : 'pl-9 pr-4'}`}
            />
            {search && (
              <button
                type="button"
                onClick={() => setSearch('')}
                className={`absolute top-1/2 -translate-y-1/2 text-slate-400 hover:text-slate-600 ${isRtl ? 'left-3' : 'right-3'}`}
              >
                <X size={14} />
              </button>
            )}
          </div>
          <button
            type="button"
            onClick={handleRefresh}
            disabled={isLoading}
            className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-700 rounded-2xl p-2.5 text-slate-500 dark:text-slate-400 hover:bg-slate-50 dark:hover:bg-slate-800 transition cursor-pointer disabled:opacity-50"
            title={t('studentDashboard.assignments.refresh', 'تحديث')}
          >
            <RefreshCcw size={16} className={isLoading ? 'animate-spin' : ''} />
          </button>
        </div>

        {/* ── Content ── */}
        {isLoading ? (
          <div className="flex h-56 items-center justify-center">
            <Spinner size="lg" />
          </div>
        ) : !filteredItems || filteredItems.length === 0 ? (
          <div className="bg-white dark:bg-slate-900 rounded-3xl p-12 text-center border border-slate-100 dark:border-slate-800 space-y-3">
            <FileText size={36} className="text-slate-300 dark:text-slate-600 mx-auto" />
            <h3 className="text-base font-bold text-slate-700 dark:text-slate-200">
              {search
                ? t('studentDashboard.assignments.noResults', 'لا توجد نتائج مطابقة')
                : t('studentDashboard.assignments.empty', 'لا توجد واجبات في هذا القسم')}
            </h3>
          </div>
        ) : (
          <AnimatePresence mode="wait">
            <motion.div
              key={activeTab}
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -8 }}
              transition={{ duration: 0.2 }}
              className="space-y-4"
            >
              {filteredItems.map((item) => {
                const isSubmitted = item.submissionStatus === 'submitted';
                const isLate = item.submissionStatus === 'submitted_late';
                const isOverdue = item.submissionStatus === 'overdue';
                const isPending = item.submissionStatus === 'pending';
                const isSubmittedAny = isSubmitted || isLate;
                const evalInfo = item.evaluationStatus;

                /* submission status badge */
                const submBadge = isLate
                  ? { label: isRtl ? 'تم التسليم متأخراً' : 'Submitted Late', cls: 'bg-orange-100 text-orange-700 dark:bg-orange-900/30 dark:text-orange-300' }
                  : isSubmitted
                  ? { label: isRtl ? 'تم التسليم' : 'Submitted', cls: 'bg-emerald-100 text-emerald-700 dark:bg-emerald-900/30 dark:text-emerald-300' }
                  : isOverdue
                  ? { label: isRtl ? 'فات الموعد' : 'Overdue', cls: 'bg-rose-100 text-rose-700 dark:bg-rose-900/30 dark:text-rose-300' }
                  : { label: isRtl ? 'في الانتظار' : 'Pending', cls: 'bg-amber-100 text-amber-700 dark:bg-amber-900/30 dark:text-amber-300' };

                /* action button */
                const btnLabel = isSubmittedAny
                  ? t('studentDashboard.assignments.viewDetails', 'عرض التفاصيل')
                  : isOverdue
                  ? t('studentDashboard.assignments.submitLate', 'تسليم متأخر')
                  : t('studentDashboard.assignments.viewSubmit', 'عرض التفاصيل والتسليم');

                const btnCls = isOverdue
                  ? 'bg-amber-500 hover:bg-amber-600 text-white'
                  : isSubmittedAny
                  ? 'bg-slate-100 dark:bg-slate-800 hover:bg-slate-200 dark:hover:bg-slate-700 text-slate-700 dark:text-slate-200'
                  : 'bg-[#00594C] hover:bg-[#004742] text-white';

                return (
                  <motion.div
                    key={item.id}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="bg-white dark:bg-slate-900 rounded-3xl p-5 sm:p-6 border border-slate-100 dark:border-slate-800 shadow-xs space-y-4 text-start"
                  >
                    {/* Top row */}
                    <div className="flex items-start justify-between gap-4">
                      <div className="flex-1 min-w-0 space-y-1.5">
                        <h3 className="text-sm sm:text-base font-bold text-slate-900 dark:text-slate-100 leading-snug">
                          {item.title}
                        </h3>
                        <p className="text-xs text-slate-500 dark:text-slate-400 font-medium truncate">
                          {item.group}
                        </p>
                        {/* dates */}
                        <div className="flex items-center gap-4 flex-wrap pt-0.5">
                          {item.deadlineFormatted && (
                            <span className="flex items-center gap-1 text-xs text-slate-400 dark:text-slate-500">
                              <Calendar size={12} className="shrink-0" />
                              <span>
                                {t('studentDashboard.assignments.dueDateLabel', 'الموعد:')} {item.deadlineFormatted}
                              </span>
                            </span>
                          )}
                          {item.submittedAtFormatted && (
                            <span className="flex items-center gap-1 text-xs text-emerald-600 dark:text-emerald-400 font-medium">
                              <CheckCircle size={12} className="shrink-0" />
                              <span>
                                {t('studentDashboard.assignments.submittedDateLabel', 'تاريخ التسليم:')} {item.submittedAtFormatted}
                              </span>
                            </span>
                          )}
                        </div>
                      </div>

                      {/* Badges column */}
                      <div className="flex flex-col items-end gap-2 shrink-0">
                        {/* Submission status badge */}
                        <span className={`text-[11px] font-bold px-3 py-1 rounded-full ${submBadge.cls}`}>
                          {submBadge.label}
                        </span>

                        {/* Evaluation badge — shown when submitted (any) */}
                        {isSubmittedAny && (
                          <span
                            className={`text-[11px] font-bold px-3 py-1 rounded-full border flex items-center gap-1 ${
                              evalInfo.isEvaluated
                                ? 'bg-purple-50 dark:bg-purple-950/30 text-purple-700 dark:text-purple-300 border-purple-200 dark:border-purple-800/50'
                                : 'bg-slate-50 dark:bg-slate-800 text-slate-500 dark:text-slate-400 border-slate-200 dark:border-slate-700'
                            }`}
                          >
                            <Star
                              size={11}
                              className={evalInfo.isEvaluated ? 'fill-purple-500 text-purple-500' : 'text-slate-400'}
                            />
                            <span>{evalInfo.label}</span>
                          </span>
                        )}

                        {/* Grade — shown when evaluated */}
                        {isSubmittedAny && evalInfo.isEvaluated && item.grade !== null && (
                          <span className="text-sm font-black text-slate-800 dark:text-slate-100 flex items-center gap-1">
                            <Star size={14} className="fill-amber-400 text-amber-400" />
                            {item.grade}
                          </span>
                        )}
                      </div>
                    </div>

                    {/* Teacher notes (shown when evaluated) */}
                    {isSubmittedAny && evalInfo.isEvaluated && item.teacherNotes && (
                      <div className="bg-emerald-50/60 dark:bg-emerald-950/20 border border-emerald-100 dark:border-emerald-900/30 rounded-2xl px-4 py-3">
                        <p className="text-xs font-semibold text-emerald-800 dark:text-emerald-300 leading-relaxed">
                          &ldquo;{item.teacherNotes}&rdquo;
                        </p>
                      </div>
                    )}

                    {/* Attachments */}
                    {(item.media || item.document) && (
                      <div className="flex items-center gap-3 flex-wrap">
                        {item.document && (
                          <a
                            href={item.document}
                            target="_blank"
                            rel="noreferrer"
                            className="flex items-center gap-1.5 text-xs font-bold text-[#00594C] dark:text-emerald-400 hover:underline"
                          >
                            <FileText size={13} />
                            {t('studentDashboard.assignments.downloadDocument', 'تحميل الملف')}
                          </a>
                        )}
                        {item.media && (
                          <a
                            href={item.media}
                            target="_blank"
                            rel="noreferrer"
                            className="flex items-center gap-1.5 text-xs font-bold text-[#00594C] dark:text-emerald-400 hover:underline"
                          >
                            <FileText size={13} />
                            {t('studentDashboard.assignments.viewMedia', 'عرض المرفق')}
                          </a>
                        )}
                      </div>
                    )}

                    {/* Overdue notice */}
                    {isOverdue && (
                      <div className="flex items-center gap-2 bg-amber-50 dark:bg-amber-950/20 border border-amber-200 dark:border-amber-800/40 rounded-2xl px-4 py-2.5">
                        <AlertCircle size={14} className="text-amber-600 dark:text-amber-400 shrink-0" />
                        <p className="text-xs font-medium text-amber-800 dark:text-amber-300">
                          {t('studentDashboard.assignments.overdueNotice', 'يمكنك تسليم هذا الواجب والسيصل إلى المعلم كـ (تسليم متأخر)')}
                        </p>
                      </div>
                    )}

                    {/* Action button */}
                    <button
                      type="button"
                      onClick={() => handleOpenDetails(item)}
                      className={`w-full py-3 rounded-2xl text-xs sm:text-sm font-bold transition-all shadow-xs cursor-pointer flex items-center justify-center gap-2 ${btnCls}`}
                    >
                      {isOverdue && <Send size={15} className="rotate-180" />}
                      {btnLabel}
                    </button>
                  </motion.div>
                );
              })}
            </motion.div>
          </AnimatePresence>
        )}
      </div>
    </div>
  );
}

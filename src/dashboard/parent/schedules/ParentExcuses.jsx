import { useState, useEffect, useCallback, useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { CalendarX, Plus, User, GraduationCap, Users, Calendar, Clock, AlertCircle, CheckCircle2, ChevronDown, X, Info, FileText } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import Swal from 'sweetalert2';
import toast from 'react-hot-toast';
import { parentApi } from '@/shared/services/api/parentApi';
import ParentPagination from '../overview/components/ParentPagination';

const containerVariants = {
  hidden: { opacity: 0 },
  show: { opacity: 1, transition: { staggerChildren: 0.08 } }
};

const itemVariants = {
  hidden: { opacity: 0, y: 15 },
  show: { opacity: 1, y: 0, transition: { type: 'spring', stiffness: 320, damping: 26 } }
};

function formatDate(dateStr, isRtl) {
  if (!dateStr) return '-';
  try {
    const d = new Date(dateStr);
    if (!isNaN(d.getTime())) {
      return new Intl.DateTimeFormat(isRtl ? 'ar-EG-u-ca-gregory' : 'en-GB-u-ca-gregory', {
        year: 'numeric',
        month: 'short',
        day: 'numeric'
      }).format(d);
    }
  } catch {
    return dateStr;
  }
  return dateStr;
}

export default function ParentExcuses() {
  const { t, i18n } = useTranslation();
  const isRtl = i18n?.language?.startsWith('ar') ?? true;
  const [isLoading, setIsLoading] = useState(true);
  const [studentsList, setStudentsList] = useState([]);
  const [selectedStudentFilter, setSelectedStudentFilter] = useState('all');
  const [currentPage, setCurrentPage] = useState(1);
  const [excusesData, setExcusesData] = useState({
    list: [],
    totalExcuses: 0,
    pagination: { currentPage: 1, totalPages: 1, limit: 10, totalItems: 0 }
  });
  const [isSubmitModalOpen, setIsSubmitModalOpen] = useState(false);
  const [isDetailsModalOpen, setIsDetailsModalOpen] = useState(false);
  const [activeExcuseDetails, setActiveExcuseDetails] = useState(null);
  const [isLoadingDetails, setIsLoadingDetails] = useState(false);
  const [formStudentId, setFormStudentId] = useState('');
  const [formSessionId, setFormSessionId] = useState('');
  const [formReason, setFormReason] = useState('');
  const [eligibleSessions, setEligibleSessions] = useState([]);
  const [isLoadingSessions, setIsLoadingSessions] = useState(false);
  const [isSubmittingExcuse, setIsSubmittingExcuse] = useState(false);
  useEffect(() => {
    let isMounted = true;
    const loadStudents = async () => {
      try {
        const res = await parentApi.fetchChildren();
        if (isMounted && res?.success && Array.isArray(res.data)) {
          setStudentsList(res.data);
          if (res.data.length > 0 && !formStudentId) {
            const firstId = res.data[0].student_id || res.data[0].user_id || res.data[0].id;
            setFormStudentId(firstId);
          }
        }
      } catch (err) {
        console.error('Failed to load students for excuses', err);
      }
    };
    loadStudents();
    return () => { isMounted = false; };
  }, [formStudentId]);
  const loadExcuses = useCallback(async (studentId, page) => {
    setIsLoading(true);
    try {
      const params = { page, limit: 10 };
      if (studentId && studentId !== 'all') {
        params.studentId = studentId;
      }
      const res = await parentApi.fetchExcusesList(params);
      const rawList = res?.success && Array.isArray(res.data) ? res.data : [];
      setExcusesData({
        list: rawList,
        totalExcuses: res?.totalExcuses ?? rawList.length,
        pagination: res?.pagination || {
          currentPage: page,
          totalPages: Math.max(1, Math.ceil(rawList.length / 10)),
          limit: 10,
          totalItems: res?.totalExcuses ?? rawList.length
        }
      });
    } catch (err) {
      console.error('Failed to load excuses list', err);
      setExcusesData({
        list: [],
        totalExcuses: 0,
        pagination: { currentPage: 1, totalPages: 1, limit: 10, totalItems: 0 }
      });
    } finally {
      setIsLoading(false);
    }
  }, []);
  useEffect(() => {
    loadExcuses(selectedStudentFilter, currentPage);
  }, [loadExcuses, selectedStudentFilter, currentPage]);
  const loadEligibleSessions = useCallback(async (studentId) => {
    if (!studentId) {
      setEligibleSessions([]);
      setFormSessionId('');
      return;
    }
    setIsLoadingSessions(true);
    try {
      const res = await parentApi.fetchStudentEligibleSessions(studentId);
      const sessions = res?.success && Array.isArray(res.data) ? res.data : [];
      setEligibleSessions(sessions);
      if (sessions.length > 0) {
        setFormSessionId(sessions[0].id || sessions[0]._id || '');
      } else {
        setFormSessionId('');
      }
    } catch (err) {
      console.error('Failed to load eligible sessions', err);
      setEligibleSessions([]);
      setFormSessionId('');
    } finally {
      setIsLoadingSessions(false);
    }
  }, []);
  useEffect(() => {
    if (isSubmitModalOpen && formStudentId) {
      loadEligibleSessions(formStudentId);
    }
  }, [isSubmitModalOpen, formStudentId, loadEligibleSessions]);
  const handleOpenSubmitModal = useCallback(() => {
    setIsSubmitModalOpen(true);
    setFormReason('');
    if (studentsList.length > 0) {
      const initId = formStudentId || studentsList[0].student_id || studentsList[0].user_id || studentsList[0].id;
      setFormStudentId(initId);
      loadEligibleSessions(initId);
    }
  }, [studentsList, formStudentId, loadEligibleSessions]);
  const handleCloseSubmitModal = useCallback(() => {
    setIsSubmitModalOpen(false);
    setFormReason('');
  }, []);
  const handleFormStudentChange = useCallback((e) => {
    const newStudentId = e.target.value;
    setFormStudentId(newStudentId);
    loadEligibleSessions(newStudentId);
  }, [loadEligibleSessions]);
  const handleSubmitExcuse = useCallback(async (e) => {
    e.preventDefault();
    if (!formStudentId) {
      toast.error(t('parent.excuses.selectStudentRequired', 'يرجى اختيار الطالب'));
      return;
    }
    if (!formSessionId) {
      toast.error(t('parent.excuses.selectSessionRequired', 'يرجى اختيار الحصة المعتذر عنها'));
      return;
    }
    if (!formReason.trim()) {
      toast.error(t('parent.excuses.enterReasonRequired', 'يرجى كتابة سبب الاعتذار'));
      return;
    }
    setIsSubmittingExcuse(true);
    try {
      const res = await parentApi.createSessionExcuse(formSessionId, {
        studentId: formStudentId,
        reason: formReason.trim()
      });
      if (res?.success) {
        await Swal.fire({
          icon: 'success',
          title: t('parent.excuses.submitSuccessTitle', 'تم تقديم العذر بنجاح'),
          text: res.message || t('parent.excuses.submitSuccessText', 'تم تسجيل طلب الاعتذار عن الحصة وجاري المتابعة'),
          confirmButtonColor: '#0f7a6c',
          confirmButtonText: t('common.ok', 'حسناً')
        });
        handleCloseSubmitModal();
        loadExcuses(selectedStudentFilter, 1);
      } else {
        toast.error(res?.message || t('parent.excuses.submitError', 'حدث خطأ أثناء تقديم العذر'));
      }
    } catch {
      toast.error(t('parent.excuses.submitError', 'حدث خطأ أثناء تقديم العذر'));
    } finally {
      setIsSubmittingExcuse(false);
    }
  }, [formStudentId, formSessionId, formReason, t, handleCloseSubmitModal, loadExcuses, selectedStudentFilter]);
  const handleViewDetails = useCallback(async (sessionId) => {
    setIsLoadingDetails(true);
    setIsDetailsModalOpen(true);
    setActiveExcuseDetails(null);
    try {
      const res = await parentApi.fetchExcuseDetails(sessionId);
      if (res?.success && res.data) {
        setActiveExcuseDetails(res.data);
      }
    } catch (err) {
      console.error('Failed to load excuse details', err);
    } finally {
      setIsLoadingDetails(false);
    }
  }, []);
  const handleCloseDetailsModal = useCallback(() => {
    setIsDetailsModalOpen(false);
    setActiveExcuseDetails(null);
  }, []);
  const handleFilterStudentChange = useCallback((e) => {
    setSelectedStudentFilter(e.target.value);
    setCurrentPage(1);
  }, []);
  const handlePageChange = useCallback((page) => {
    setCurrentPage(page);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, []);
  const stats = useMemo(() => {
    const list = excusesData.list || [];
    const excusedCount = list.filter(item => item.excuse?.status?.includes('معذور') || item.excuse?.status === 'excused').length;
    const withinCutoffCount = list.filter(item => item.excuse?.isWithinCutoff === true).length;
    return {
      total: excusesData.totalExcuses || list.length,
      excused: excusedCount,
      withinCutoff: withinCutoffCount
    };
  }, [excusesData.list, excusesData.totalExcuses]);
  return (
    <motion.div
      variants={containerVariants}
      initial="hidden"
      animate="show"
      className="p-4 md:p-8 max-w-7xl mx-auto space-y-6 font-sans min-h-screen relative"
      dir={isRtl ? 'rtl' : 'ltr'}
    >
      <motion.div variants={itemVariants} className="bg-white dark:bg-slate-800 rounded-3xl p-6 shadow-xs border border-slate-100 dark:border-slate-800 flex flex-col md:flex-row items-center justify-between gap-6">
        <div className="text-center md:text-start">
          <h1 className="text-2xl font-bold text-slate-800 dark:text-slate-100">
            {t('parent.excuses.title', 'طلبات اعتذار الأبناء')}
          </h1>
          <p className="text-sm text-slate-400 dark:text-slate-400 mt-1">
            {t('parent.excuses.subtitle', 'متابعة وتقديم طلبات الاعتذار عن حضور الحصص الدراسية للأبناء')}
          </p>
        </div>
        <div className="flex flex-col sm:flex-row items-center gap-3 w-full md:w-auto">
          <div className="relative w-full sm:w-60">
            <select
              value={selectedStudentFilter}
              onChange={handleFilterStudentChange}
              className="w-full appearance-none bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-700 text-slate-800 dark:text-slate-200 rounded-2xl py-3 px-4 pe-10 focus:outline-none focus:ring-2 focus:ring-[#0f7a6c]/50 transition-shadow cursor-pointer text-sm font-bold"
            >
              <option value="all">{t('parent.assignments.allStudents', 'جميع الأبناء')}</option>
              {studentsList.map((s) => {
                const id = s.student_id || s.user_id || s.id || s._id;
                const name = typeof s.name === 'object' ? (isRtl ? (s.name.ar || s.name.en) : (s.name.en || s.name.ar)) : s.name;
                return <option key={id} value={id}>{name}</option>;
              })}
            </select>
            <div className="absolute top-1/2 -translate-y-1/2 end-3 text-slate-400 pointer-events-none">
              <ChevronDown className="w-4 h-4" />
            </div>
          </div>
          <button
            type="button"
            onClick={handleOpenSubmitModal}
            className="w-full sm:w-auto flex items-center justify-center gap-2 px-6 py-3 bg-[#0f7a6c] hover:bg-[#0c6358] text-white rounded-2xl font-bold text-sm transition-all shadow-xs active:scale-95 whitespace-nowrap"
          >
            <Plus size={18} />
            <span>{t('parent.excuses.newRequestBtn', 'تقديم عذر جديد')}</span>
          </button>
        </div>
      </motion.div>
      <motion.div variants={itemVariants} className="grid grid-cols-1 sm:grid-cols-3 gap-4 md:gap-6">
        <div className="bg-white dark:bg-slate-800 rounded-3xl p-6 shadow-xs border border-slate-100 dark:border-slate-800 flex items-center justify-between">
          <div className="text-start">
            <span className="text-xs text-slate-400 font-medium block mb-1">
              {t('parent.excuses.totalExcusesStat', 'إجمالي طلبات الاعتذار')}
            </span>
            <span className="text-3xl font-bold text-slate-800 dark:text-slate-100">
              {stats.total}
            </span>
          </div>
          <div className="text-sky-500 shrink-0">
            <CalendarX size={28} strokeWidth={1.75} />
          </div>
        </div>
        <div className="bg-white dark:bg-slate-800 rounded-3xl p-6 shadow-xs border border-slate-100 dark:border-slate-800 flex items-center justify-between">
          <div className="text-start">
            <span className="text-xs text-slate-400 font-medium block mb-1">
              {t('parent.excuses.excusedStat', 'الطلبات المقبولة (معذور)')}
            </span>
            <span className="text-3xl font-bold text-emerald-500">
              {stats.excused}
            </span>
          </div>
          <div className="text-emerald-500 shrink-0">
            <CheckCircle2 size={28} strokeWidth={1.75} />
          </div>
        </div>
        <div className="bg-white dark:bg-slate-800 rounded-3xl p-6 shadow-xs border border-slate-100 dark:border-slate-800 flex items-center justify-between">
          <div className="text-start">
            <span className="text-xs text-slate-400 font-medium block mb-1">
              {t('parent.excuses.withinCutoffStat', 'في الموعد المحدد')}
            </span>
            <span className="text-3xl font-bold text-[#0f7a6c] dark:text-emerald-400">
              {stats.withinCutoff}
            </span>
          </div>
          <div className="text-[#0f7a6c] dark:text-emerald-400 shrink-0">
            <Clock size={28} strokeWidth={1.75} />
          </div>
        </div>
      </motion.div>
      {isLoading ? (
        <div className="space-y-4">
          {[1, 2, 3].map((n) => (
            <div key={n} className="h-36 bg-white dark:bg-slate-800 rounded-3xl animate-pulse" />
          ))}
        </div>
      ) : excusesData.list.length > 0 ? (
        <div className="space-y-4">
          {excusesData.list.map((item, idx) => {
            const excuseObj = item.excuse || {};
            const isExcused = excuseObj.status === 'معذور' || excuseObj.status === 'excused';
            const isCutoffOk = excuseObj.isWithinCutoff === true;
            const submittedDate = formatDate(excuseObj.submittedAt, isRtl);
            const timeText = item.time?.start ? `${item.time.start} ${item.time.end ? `- ${item.time.end}` : ''}` : '';
            return (
              <motion.div
                variants={itemVariants}
                key={item.sessionId || idx}
                className="bg-white dark:bg-slate-800 rounded-3xl p-6 shadow-xs border border-slate-100 dark:border-slate-800 flex flex-col md:flex-row md:items-center justify-between gap-6 transition-all hover:shadow-md"
              >
                <div className="flex-1 w-full text-start space-y-3 min-w-0">
                  <div className="flex items-center gap-3 flex-wrap">
                    <h3 className="text-lg font-bold text-slate-800 dark:text-slate-100">
                      {item.title || item.group || t('parent.excuses.defaultSessionTitle', 'حصة دراسية')}
                    </h3>
                    <span className={`text-xs font-bold px-3 py-1 rounded-full border ${
                      isExcused
                        ? 'bg-emerald-50 text-emerald-600 dark:bg-emerald-950/40 dark:text-emerald-400 border-emerald-200 dark:border-emerald-800'
                        : 'bg-amber-50 text-amber-600 dark:bg-amber-950/40 dark:text-amber-400 border-amber-200 dark:border-amber-800'
                    }`}>
                      {excuseObj.status || t('parent.excuses.excusedStatus', 'معذور')}
                    </span>
                    <span className={`text-[11px] font-semibold px-2.5 py-0.5 rounded-full ${
                      isCutoffOk
                        ? 'bg-emerald-50 text-emerald-600 dark:bg-emerald-950/30 dark:text-emerald-400'
                        : 'bg-amber-50 text-amber-600 dark:bg-amber-950/30 dark:text-amber-400'
                    }`}>
                      {isCutoffOk ? t('parent.excuses.withinCutoff', 'في الموعد المحدد') : t('parent.excuses.lateExcuse', 'عذر متأخر')}
                    </span>
                  </div>
                  <div className="flex flex-wrap items-center gap-4 sm:gap-6 text-xs text-slate-500 dark:text-slate-400 font-medium">
                    <div className="flex items-center gap-1.5">
                      <User className="w-3.5 h-3.5 text-[#0f7a6c] shrink-0" />
                      <span>{t('parent.assignments.student', 'الطالب')}: <strong className="text-slate-700 dark:text-slate-200">{item.student}</strong></span>
                    </div>
                    <div className="flex items-center gap-1.5">
                      <Users className="w-3.5 h-3.5 text-[#0f7a6c] shrink-0" />
                      <span>{t('parent.assignments.group', 'المجموعة')}: <strong className="text-slate-700 dark:text-slate-200">{item.group}</strong></span>
                    </div>
                    <div className="flex items-center gap-1.5">
                      <GraduationCap className="w-3.5 h-3.5 text-[#0f7a6c] shrink-0" />
                      <span>{t('parent.assignments.teacher', 'المعلم')}: <strong className="text-slate-700 dark:text-slate-200">{item.teacher}</strong></span>
                    </div>
                  </div>
                  <div className="flex flex-wrap items-center gap-4 sm:gap-6 text-xs text-slate-400 font-medium">
                    <div className="flex items-center gap-1.5">
                      <Calendar className="w-3.5 h-3.5 shrink-0" />
                      <span>{item.day || ''} {item.date || ''}</span>
                    </div>
                    {timeText && (
                      <div className="flex items-center gap-1.5">
                        <Clock className="w-3.5 h-3.5 shrink-0" />
                        <span>{timeText}</span>
                      </div>
                    )}
                    {excuseObj.submittedAt && (
                      <div className="flex items-center gap-1.5 text-slate-400">
                        <span>{t('parent.excuses.submittedAt', 'تاريخ تقديم العذر')}: {submittedDate}</span>
                      </div>
                    )}
                  </div>
                  {excuseObj.reason && (
                    <div className="bg-slate-50 dark:bg-slate-900/60 rounded-2xl p-3.5 border border-slate-100 dark:border-slate-800/80 flex items-start gap-2.5">
                      <AlertCircle className="w-4 h-4 text-[#0f7a6c] mt-0.5 shrink-0" />
                      <div className="min-w-0 flex-1">
                        <span className="text-[11px] font-bold text-slate-700 dark:text-slate-300 block mb-0.5">
                          {t('parent.excuses.reasonLabel', 'سبب الاعتذار')}:
                        </span>
                        <p className="text-xs text-slate-600 dark:text-slate-300 leading-relaxed font-medium">
                          {excuseObj.reason}
                        </p>
                      </div>
                    </div>
                  )}
                </div>
                <div className="shrink-0 flex items-center justify-end w-full md:w-auto">
                  <button
                    type="button"
                    onClick={() => handleViewDetails(item.sessionId)}
                    className="w-full md:w-auto px-7 py-3 bg-[#0f7a6c] hover:bg-[#0c6358] text-white rounded-2xl font-bold text-sm transition-all shadow-xs active:scale-95 text-center"
                  >
                    {t('parent.assignments.viewDetails', 'عرض التفاصيل')}
                  </button>
                </div>
              </motion.div>
            );
          })}
          {excusesData.pagination.totalPages > 1 && (
            <ParentPagination
              currentPage={currentPage}
              totalPages={excusesData.pagination.totalPages}
              totalItems={excusesData.totalExcuses}
              startIndex={(currentPage - 1) * excusesData.pagination.limit}
              endIndex={currentPage * excusesData.pagination.limit}
              itemLabel={t('parent.excuses.requestLabel', 'طلب اعتذار')}
              onPageChange={handlePageChange}
            />
          )}
        </div>
      ) : (
        <div className="bg-white dark:bg-slate-800 rounded-3xl p-12 text-center border border-slate-100 dark:border-slate-800 shadow-xs space-y-4">
          <CalendarX size={48} className="mx-auto text-slate-300 dark:text-slate-600" />
          <h3 className="text-base font-bold text-slate-700 dark:text-slate-200">
            {t('parent.excuses.emptyTitle', 'لا توجد طلبات اعتذار مسجلة')}
          </h3>
          <p className="text-xs text-slate-400 max-w-md mx-auto">
            {t('parent.excuses.emptyDesc', 'يمكنك تقديم طلب اعتذار جديد عن حضور الحصص القادمة بالضغط على زر "تقديم عذر جديد" أعلاه.')}
          </p>
        </div>
      )}
      <AnimatePresence>
        {isSubmitModalOpen && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-xs">
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 10 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 10 }}
              className="bg-white dark:bg-slate-800 rounded-3xl p-6 sm:p-8 max-w-lg w-full shadow-2xl border border-slate-100 dark:border-slate-700 space-y-6 relative max-h-[90vh] overflow-y-auto"
              dir={isRtl ? 'rtl' : 'ltr'}
            >
              <div className="flex items-center justify-between pb-4 border-b border-slate-100 dark:border-slate-700">
                <div className="flex items-center gap-2.5">
                  <div className="p-2.5 bg-[#0f7a6c]/10 text-[#0f7a6c] rounded-2xl">
                    <CalendarX size={22} />
                  </div>
                  <div>
                    <h2 className="text-lg font-bold text-slate-800 dark:text-slate-100">
                      {t('parent.excuses.modalTitle', 'تقديم عذر غياب عن حصة')}
                    </h2>
                    <p className="text-xs text-slate-400">
                      {t('parent.excuses.modalSubtitle', 'اختر الابن والحصة واكتب سبب الاعتذار')}
                    </p>
                  </div>
                </div>
                <button
                  type="button"
                  onClick={handleCloseSubmitModal}
                  className="p-2 text-slate-400 hover:text-slate-600 dark:hover:text-slate-200 rounded-xl hover:bg-slate-100 dark:hover:bg-slate-700 transition-colors"
                >
                  <X size={20} />
                </button>
              </div>
              <form onSubmit={handleSubmitExcuse} className="space-y-4">
                <div className="space-y-1.5 text-start">
                  <label className="text-xs font-bold text-slate-700 dark:text-slate-300">
                    {t('parent.schedule.selectStudent', 'اختر الابن')} <span className="text-red-500">*</span>
                  </label>
                  <div className="relative w-full">
                    <select
                      value={formStudentId}
                      onChange={handleFormStudentChange}
                      required
                      className="w-full appearance-none bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-700 text-slate-800 dark:text-slate-200 rounded-2xl py-3 px-4 pe-10 focus:outline-none focus:ring-2 focus:ring-[#0f7a6c]/50 transition-shadow cursor-pointer text-sm font-bold"
                    >
                      {studentsList.map((s) => {
                        const id = s.student_id || s.user_id || s.id || s._id;
                        const name = typeof s.name === 'object' ? (isRtl ? (s.name.ar || s.name.en) : (s.name.en || s.name.ar)) : s.name;
                        return <option key={id} value={id}>{name}</option>;
                      })}
                    </select>
                    <div className="absolute top-1/2 -translate-y-1/2 end-3 text-slate-400 pointer-events-none">
                      <ChevronDown className="w-4 h-4" />
                    </div>
                  </div>
                </div>
                <div className="space-y-1.5 text-start">
                  <label className="text-xs font-bold text-slate-700 dark:text-slate-300">
                    {t('parent.excuses.selectSessionLabel', 'اختر الحصة المعتذر عنها')} <span className="text-red-500">*</span>
                  </label>
                  {isLoadingSessions ? (
                    <div className="py-3 px-4 rounded-2xl bg-slate-50 dark:bg-slate-900 text-xs text-slate-400 animate-pulse">
                      {t('parent.excuses.loadingSessions', 'جاري جلب حصص الطالب المجدولة...')}
                    </div>
                  ) : eligibleSessions.length > 0 ? (
                    <div className="relative w-full">
                      <select
                        value={formSessionId}
                        onChange={(e) => setFormSessionId(e.target.value)}
                        required
                        className="w-full appearance-none bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-700 text-slate-800 dark:text-slate-200 rounded-2xl py-3 px-4 pe-10 focus:outline-none focus:ring-2 focus:ring-[#0f7a6c]/50 transition-shadow cursor-pointer text-sm font-medium"
                      >
                        {eligibleSessions.map((sess) => {
                          const sid = sess.id || sess._id;
                          const title = sess.title || sess.group || 'حصة دراسية';
                          const day = sess.day || '';
                          const date = sess.formattedDate || sess.date || '';
                          const time = sess.timeRange || (sess.startTime ? `${sess.startTime} - ${sess.endTime || ''}` : '');
                          return (
                            <option key={sid} value={sid}>
                              {title} {day && `| ${day}`} {date && `(${date})`} {time && `- ${time}`}
                            </option>
                          );
                        })}
                      </select>
                      <div className="absolute top-1/2 -translate-y-1/2 end-3 text-slate-400 pointer-events-none">
                        <ChevronDown className="w-4 h-4" />
                      </div>
                    </div>
                  ) : (
                    <div className="p-3.5 bg-amber-50 dark:bg-amber-950/30 border border-amber-200 dark:border-amber-800/40 rounded-2xl text-xs text-amber-700 dark:text-amber-300 flex items-center gap-2">
                      <AlertCircle size={16} className="shrink-0" />
                      <span>{t('parent.excuses.noEligibleSessions', 'لا توجد حصص مجدولة أو معاد جدولتها حالياً لهذا الابن')}</span>
                    </div>
                  )}
                </div>
                <div className="space-y-1.5 text-start">
                  <label className="text-xs font-bold text-slate-700 dark:text-slate-300">
                    {t('parent.excuses.reasonLabel', 'سبب الاعتذار')} <span className="text-red-500">*</span>
                  </label>
                  <textarea
                    value={formReason}
                    onChange={(e) => setFormReason(e.target.value)}
                    required
                    rows={4}
                    placeholder={t('parent.excuses.reasonPlaceholder', 'اكتب سبب الاعتذار بوضوح (مثال: ظرف صحي طارئ للطالب وسفر عائلي)...')}
                    className="w-full bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-700 text-slate-800 dark:text-slate-200 rounded-2xl p-4 text-sm focus:outline-none focus:ring-2 focus:ring-[#0f7a6c]/50 transition-shadow resize-none leading-relaxed"
                  />
                </div>
                <div className="pt-2 flex items-center justify-end gap-3">
                  <button
                    type="button"
                    onClick={handleCloseSubmitModal}
                    disabled={isSubmittingExcuse}
                    className="px-6 py-3 rounded-2xl text-sm font-bold text-slate-600 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-700 transition-colors"
                  >
                    {t('common.cancel', 'إلغاء')}
                  </button>
                  <button
                    type="submit"
                    disabled={isSubmittingExcuse || eligibleSessions.length === 0}
                    className="px-7 py-3 bg-[#0f7a6c] hover:bg-[#0c6358] text-white rounded-2xl text-sm font-bold transition-all shadow-xs active:scale-95 disabled:opacity-50 disabled:cursor-not-allowed flex items-center gap-2"
                  >
                    {isSubmittingExcuse && <div className="animate-spin rounded-full h-4 w-4 border-2 border-white border-t-transparent" />}
                    <span>{t('parent.excuses.submitBtn', 'إرسال طلب الاعتذار')}</span>
                  </button>
                </div>
              </form>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
      <AnimatePresence>
        {isDetailsModalOpen && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-xs">
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 10 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 10 }}
              className="bg-white dark:bg-slate-800 rounded-3xl p-6 sm:p-8 max-w-lg w-full shadow-2xl border border-slate-100 dark:border-slate-700 space-y-6 relative max-h-[90vh] overflow-y-auto"
              dir={isRtl ? 'rtl' : 'ltr'}
            >
              <div className="flex items-center justify-between pb-4 border-b border-slate-100 dark:border-slate-700">
                <div className="flex items-center gap-2.5">
                  <div className="p-2.5 bg-[#0f7a6c]/10 text-[#0f7a6c] rounded-2xl">
                    <Info size={22} />
                  </div>
                  <div>
                    <h2 className="text-lg font-bold text-slate-800 dark:text-slate-100">
                      {t('parent.excuses.detailsTitle', 'تفاصيل عذر الغياب')}
                    </h2>
                    <p className="text-xs text-slate-400">
                      {activeExcuseDetails?.title || t('parent.excuses.defaultSessionTitle', 'حصة دراسية')}
                    </p>
                  </div>
                </div>
                <button
                  type="button"
                  onClick={handleCloseDetailsModal}
                  className="p-2 text-slate-400 hover:text-slate-600 dark:hover:text-slate-200 rounded-xl hover:bg-slate-100 dark:hover:bg-slate-700 transition-colors"
                >
                  <X size={20} />
                </button>
              </div>
              {isLoadingDetails ? (
                <div className="flex justify-center items-center py-16">
                  <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-[#0f7a6c]" />
                </div>
              ) : activeExcuseDetails ? (
                <div className="space-y-4 text-start">
                  <div className="bg-slate-50 dark:bg-slate-900/60 p-4 rounded-2xl space-y-2 border border-slate-100 dark:border-slate-800">
                    <div className="flex items-center justify-between">
                      <span className="text-xs text-slate-400">{t('parent.assignments.student', 'الطالب')}:</span>
                      <strong className="text-xs text-slate-800 dark:text-slate-200">{activeExcuseDetails.student}</strong>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-xs text-slate-400">{t('parent.assignments.group', 'المجموعة')}:</span>
                      <strong className="text-xs text-slate-800 dark:text-slate-200">{activeExcuseDetails.group}</strong>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-xs text-slate-400">{t('parent.assignments.teacher', 'المعلم')}:</span>
                      <strong className="text-xs text-slate-800 dark:text-slate-200">{activeExcuseDetails.teacher}</strong>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-xs text-slate-400">{t('parent.assignments.date', 'الموعد')}:</span>
                      <span className="text-xs text-slate-700 dark:text-slate-300 font-medium">
                        {activeExcuseDetails.day} {activeExcuseDetails.date} ({activeExcuseDetails.time?.start} - {activeExcuseDetails.time?.end})
                      </span>
                    </div>
                  </div>
                  <div className="space-y-1.5">
                    <span className="text-xs font-bold text-slate-700 dark:text-slate-300 block">
                      {t('parent.excuses.reasonLabel', 'سبب الاعتذار')}:
                    </span>
                    <div className="p-3.5 bg-slate-50 dark:bg-slate-900/60 rounded-2xl border border-slate-100 dark:border-slate-800 text-xs text-slate-700 dark:text-slate-300 leading-relaxed font-medium">
                      {activeExcuseDetails.excuse?.reason}
                    </div>
                  </div>
                  {activeExcuseDetails.excuse?.notes && (
                    <div className="space-y-1.5">
                      <span className="text-xs font-bold text-slate-700 dark:text-slate-300 block">
                        {t('parent.reports.teacherNotes', 'ملاحظات الإدارة')}:
                      </span>
                      <div className="p-3.5 bg-emerald-50 dark:bg-emerald-950/30 rounded-2xl border border-emerald-100 dark:border-emerald-800 text-xs text-emerald-800 dark:text-emerald-300 leading-relaxed font-medium">
                        {activeExcuseDetails.excuse.notes}
                      </div>
                    </div>
                  )}
                  <div className="flex items-center justify-between text-xs text-slate-400 pt-2 border-t border-slate-100 dark:border-slate-800">
                    <span>{t('parent.excuses.submittedAt', 'تاريخ التقديم')}: {formatDate(activeExcuseDetails.excuse?.submittedAt, isRtl)}</span>
                    <span className="font-bold text-[#0f7a6c]">{activeExcuseDetails.excuse?.status || t('parent.excuses.excusedStatus', 'معذور')}</span>
                  </div>
                </div>
              ) : null}
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}


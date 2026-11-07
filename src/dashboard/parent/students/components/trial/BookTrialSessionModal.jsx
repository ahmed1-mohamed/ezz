import { useState, useEffect, useMemo } from 'react';
import { createPortal } from 'react-dom';
import {
  X,
  Sparkles,
  BookOpen,
  User,
  CheckCircle2,
  Clock,
  AlertCircle,
  ChevronLeft,
  ChevronRight,
  Send,
  GraduationCap,
  Globe,
} from 'lucide-react';
import { useTranslation } from 'react-i18next';
import { toast } from 'react-hot-toast';
import { parentTrialSessionsApi } from '@/shared/services/api/parentTrialSessionsApi';
import Spinner from '@/shared/components/Spinner';

export default function BookTrialSessionModal({
  isOpen,
  onClose,
  childrenList = [],
  initialChildId = null,
  initialTeacherId = null,
  onSuccess,
}) {
  const { i18n } = useTranslation();
  const isRtl = i18n?.language?.startsWith('ar') ?? true;
  const [isLoadingData, setIsLoadingData] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [eligibilityList, setEligibilityList] = useState([]);
  const [curriculaList, setCurriculaList] = useState([]);
  const [selectedStudentId, setSelectedStudentId] = useState('');
  const [selectedCurriculumId, setSelectedCurriculumId] = useState('');
  const [notes, setNotes] = useState('');
  const [step, setStep] = useState(1); // 1: Child, 2: Curriculum & Notes
  useEffect(() => {
    if (!isOpen) return;
    let isMounted = true;
    Promise.all([
      parentTrialSessionsApi.fetchTrialSessionsAndEligibility().catch((err) => {
        console.warn('[TrialModal] fetch eligibility failed:', err);
        return null;
      }),
      parentTrialSessionsApi.fetchTrialCurricula().catch((err) => {
        console.warn('[TrialModal] fetch curricula failed:', err);
        return null;
      }),
    ]).then(([eligibilityRes, curriculaRes]) => {
      if (!isMounted) return;
      const eligData = Array.isArray(eligibilityRes?.childrenEligibility)
        ? eligibilityRes.childrenEligibility
        : [];
      setEligibilityList(eligData);
      const currData = Array.isArray(curriculaRes?.data)
        ? curriculaRes.data
        : (Array.isArray(curriculaRes) ? curriculaRes : []);
      setCurriculaList(currData);
      // Pre-select child if passed or if only one child is eligible
      if (initialChildId) {
        setSelectedStudentId(initialChildId);
      } else {
        const firstEligible = eligData.find((c) => c.canRequestTrial);
        if (firstEligible) {
          setSelectedStudentId(firstEligible.studentId);
        }
      }
      setIsLoadingData(false);
    });
    return () => {
      isMounted = false;
    };
  }, [isOpen, initialChildId]);
  // Combine eligibility data with childrenList for rich details (images, groups)
  const enrichedChildren = useMemo(() => {
    if (eligibilityList.length > 0) {
      return eligibilityList.map((elig) => {
        const fullChild = childrenList.find(
          (c) => String(c.student_id || c.id || c.user_id) === String(elig.studentId)
        );
        return {
          ...fullChild,
          ...elig,
          studentId: elig.studentId,
          name: elig.name || fullChild?.name || 'طالب',
        };
      });
    }
    // Fallback if backend returned no eligibility yet
    return childrenList.map((c) => ({
      ...c,
      studentId: c.student_id || c.id || c.user_id,
      name: c.name || 'طالب',
      canRequestTrial: true,
      hasRequestedTrial: false,
      hasUsedTrial: false,
    }));
  }, [eligibilityList, childrenList]);
  const selectedChild = useMemo(() => {
    return enrichedChildren.find((c) => String(c.studentId) === String(selectedStudentId));
  }, [enrichedChildren, selectedStudentId]);
  const handleSubmit = async (e) => {
    e?.preventDefault();
    if (!selectedStudentId) {
      toast.error(isRtl ? 'يرجى اختيار الابن أولاً' : 'Please select a child');
      return;
    }
    if (!selectedCurriculumId) {
      toast.error(isRtl ? 'يرجى اختيار المنهج الدراسي' : 'Please select a curriculum');
      return;
    }
    setIsSubmitting(true);
    try {
      const payload = {
        studentId: selectedStudentId,
        curriculumId: selectedCurriculumId,
        ...(notes.trim() ? { notes: notes.trim() } : {}),
        ...(initialTeacherId ? { teacherId: initialTeacherId } : {}),
      };
      const res = await parentTrialSessionsApi.requestTrialSession(payload);
      toast.success(
        res?.message || (isRtl ? 'تم تقديم طلب الحصة التجريبية بنجاح!' : 'Trial session requested successfully!')
      );
      if (onSuccess) {
        onSuccess(res);
      }
      onClose();
    } catch (err) {
      console.error('Failed to request trial session:', err);
      const msg = err?.response?.data?.message || err?.message;
      toast.error(
        msg || (isRtl ? 'تعذّر إرسال طلب الحصة التجريبية' : 'Failed to request trial session')
      );
    } finally {
      setIsSubmitting(false);
    }
  };
  if (!isOpen || typeof document === 'undefined') return null;
  return createPortal(
    <div
      className="fixed inset-0 w-screen h-screen min-h-screen z-[99999] flex items-center justify-center p-3 sm:p-5 bg-black/80 backdrop-blur-sm animate-fade-in"
      dir={isRtl ? 'rtl' : 'ltr'}
      onClick={(e) => {
        if (e.target === e.currentTarget && !isSubmitting) onClose();
      }}
    >
      <div className="relative w-full max-w-2xl bg-white dark:bg-slate-900 rounded-[32px] border border-slate-100 dark:border-slate-800 shadow-2xl flex flex-col max-h-[90vh] overflow-hidden animate-scaleUp">
        {/* Modal Header */}
        <div className="px-6 py-5 border-b border-slate-100 dark:border-slate-800 flex items-center justify-between gap-4 bg-gradient-to-r from-emerald-500/5 via-teal-500/5 to-transparent shrink-0">
          <div className="flex items-center gap-3">
            <div className="w-12 h-12 rounded-2xl bg-[#0f7a6c]/10 text-[#0f7a6c] dark:text-emerald-400 flex items-center justify-center shrink-0">
              <Sparkles className="w-6 h-6 animate-pulse" />
            </div>
            <div>
              <h2 className="text-lg sm:text-xl font-black text-slate-800 dark:text-white">
                {isRtl ? 'حجز حصة تجريبية مجانية' : 'Book a Free Trial Session'}
              </h2>
              <p className="text-xs text-slate-400 dark:text-slate-500">
                {isRtl
                  ? 'اختر الابن والمنهج الدراسي لبدء جلسة استكشافية مجاناً'
                  : 'Select your child and preferred curriculum for a free discovery session'}
              </p>
            </div>
          </div>
          <button
            type="button"
            onClick={onClose}
            disabled={isSubmitting}
            className="p-2 text-slate-400 hover:text-slate-600 dark:hover:text-slate-200 hover:bg-slate-100 dark:hover:bg-slate-800 rounded-xl transition cursor-pointer"
          >
            <X size={20} />
          </button>
        </div>
        {/* Steps Tab Indicators */}
        <div className="px-6 pt-3 flex items-center gap-2 border-b border-slate-100 dark:border-slate-800 bg-slate-50/50 dark:bg-slate-900/30 shrink-0">
          <button
            type="button"
            onClick={() => setStep(1)}
            className={`pb-3 px-3 text-xs font-bold border-b-2 transition-all flex items-center gap-1.5 cursor-pointer ${
              step === 1
                ? 'border-[#0f7a6c] text-[#0f7a6c] dark:text-emerald-400'
                : 'border-transparent text-slate-400 hover:text-slate-600'
            }`}
          >
            <span className="w-5 h-5 rounded-full bg-slate-200 dark:bg-slate-700 text-slate-700 dark:text-slate-300 inline-flex items-center justify-center text-[11px] font-black">
              1
            </span>
            <span>{isRtl ? 'اختيار الابن' : 'Select Child'}</span>
            {selectedStudentId && <CheckCircle2 className="w-3.5 h-3.5 text-emerald-500" />}
          </button>
          <button
            type="button"
            onClick={() => {
              if (selectedStudentId) setStep(2);
            }}
            disabled={!selectedStudentId}
            className={`pb-3 px-3 text-xs font-bold border-b-2 transition-all flex items-center gap-1.5 cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed ${
              step === 2
                ? 'border-[#0f7a6c] text-[#0f7a6c] dark:text-emerald-400'
                : 'border-transparent text-slate-400 hover:text-slate-600'
            }`}
          >
            <span className="w-5 h-5 rounded-full bg-slate-200 dark:bg-slate-700 text-slate-700 dark:text-slate-300 inline-flex items-center justify-center text-[11px] font-black">
              2
            </span>
            <span>{isRtl ? 'اختيار المنهج والتأكيد' : 'Select Curriculum & Confirm'}</span>
            {selectedCurriculumId && <CheckCircle2 className="w-3.5 h-3.5 text-emerald-500" />}
          </button>
        </div>
        {/* Modal Content */}
        <div className="p-6 overflow-y-auto flex-1 space-y-6">
          {isLoadingData ? (
            <div className="py-16 flex flex-col items-center justify-center gap-3">
              <Spinner />
              <p className="text-xs sm:text-sm font-semibold text-slate-400">
                {isRtl ? 'جاري فحص استحقاق الأبناء والمناهج المتاحة...' : 'Loading children eligibility and curricula...'}
              </p>
            </div>
          ) : step === 1 ? (
            /* STEP 1: SELECT CHILD */
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <label className="text-xs sm:text-sm font-black text-slate-800 dark:text-slate-200 flex items-center gap-2">
                  <User className="w-4 h-4 text-[#0f7a6c]" />
                  <span>{isRtl ? 'اختر الابن المراد حجز الحصة التجريبية له:' : 'Choose the child for the trial session:'}</span>
                </label>
                <span className="text-[11px] text-slate-400 font-semibold">
                  {enrichedChildren.length} {isRtl ? 'أبناء مسجلين' : 'registered children'}
                </span>
              </div>
              {enrichedChildren.length === 0 ? (
                <div className="p-8 text-center bg-slate-50 dark:bg-slate-800/50 rounded-2xl border border-slate-100 dark:border-slate-800 space-y-2">
                  <AlertCircle className="w-8 h-8 text-amber-500 mx-auto" />
                  <p className="text-sm font-bold text-slate-700 dark:text-slate-300">
                    {isRtl ? 'لا يوجد أبناء مسجلين في حسابك حالياً' : 'No children found in your account'}
                  </p>
                  <p className="text-xs text-slate-400">
                    {isRtl ? 'يرجى إضافة بيانات ابن جديد أولاً للاستفادة من الحصة التجريبية المجانية.' : 'Please add a child first to claim the free trial.'}
                  </p>
                </div>
              ) : (
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                  {enrichedChildren.map((child) => {
                    const sid = String(child.studentId);
                    const isSelected = selectedStudentId === sid;
                    const canReq = child.canRequestTrial !== false;
                    const hasReq = Boolean(child.hasRequestedTrial);
                    const hasUsed = Boolean(child.hasUsedTrial);
                    return (
                      <div
                        key={sid}
                        onClick={() => {
                          if (canReq) {
                            setSelectedStudentId(sid);
                          }
                        }}
                        className={`p-4 rounded-2xl border-2 transition-all relative flex flex-col justify-between gap-3 ${
                          isSelected
                            ? 'border-[#0f7a6c] bg-[#0f7a6c]/5 dark:bg-[#0f7a6c]/10 shadow-sm'
                            : canReq
                            ? 'border-slate-200 dark:border-slate-800 hover:border-slate-300 dark:hover:border-slate-700 cursor-pointer bg-white dark:bg-slate-900'
                            : 'border-slate-200/60 dark:border-slate-800/40 bg-slate-50/60 dark:bg-slate-800/30 opacity-70 cursor-not-allowed'
                        }`}
                      >
                        <div className="flex items-center gap-3">
                          <div
                            className={`w-12 h-12 rounded-xl flex items-center justify-center font-black text-base shrink-0 ${
                              isSelected
                                ? 'bg-[#0f7a6c] text-white shadow-xs'
                                : canReq
                                ? 'bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300'
                                : 'bg-slate-200 dark:bg-slate-700 text-slate-400'
                            }`}
                          >
                            {child.name?.trim().charAt(0) || 'ط'}
                          </div>
                          <div className="min-w-0 flex-1">
                            <h4 className="font-black text-sm text-slate-800 dark:text-white truncate">
                              {child.name}
                            </h4>
                            <p className="text-[11px] text-slate-400 truncate">
                              {child.studentLevel || (isRtl ? 'طالب' : 'Student')}
                            </p>
                          </div>
                          <div className="shrink-0">
                            {isSelected ? (
                              <div className="w-5 h-5 rounded-full bg-[#0f7a6c] text-white flex items-center justify-center">
                                <CheckCircle2 className="w-4 h-4" />
                              </div>
                            ) : (
                              <div className="w-5 h-5 rounded-full border border-slate-300 dark:border-slate-600" />
                            )}
                          </div>
                        </div>
                        {/* Status Badge */}
                        <div className="pt-2 border-t border-slate-100 dark:border-slate-800 flex items-center justify-between text-[11px]">
                          {canReq ? (
                            <span className="inline-flex items-center gap-1 text-emerald-600 dark:text-emerald-400 font-bold">
                              <Sparkles className="w-3 h-3" />
                              <span>{isRtl ? 'مؤهل لحصة تجريبية مجانية' : 'Eligible for Free Trial'}</span>
                            </span>
                          ) : hasReq ? (
                            <span className="inline-flex items-center gap-1 text-amber-600 dark:text-amber-400 font-bold">
                              <Clock className="w-3 h-3" />
                              <span>{isRtl ? 'طلب قيد المراجعة' : 'Request Pending'}</span>
                            </span>
                          ) : hasUsed ? (
                            <span className="inline-flex items-center gap-1 text-slate-400 font-semibold">
                              <CheckCircle2 className="w-3 h-3 text-slate-400" />
                              <span>{isRtl ? 'تمت الاستفادة مسبقاً' : 'Trial Already Used'}</span>
                            </span>
                          ) : (
                            <span className="text-slate-400 font-semibold">
                              {child.statusLabel || (isRtl ? 'غير متاح حالياً' : 'Not Eligible')}
                            </span>
                          )}
                        </div>
                      </div>
                    );
                  })}
                </div>
              )}
            </div>
          ) : (
            /* STEP 2: SELECT CURRICULUM & NOTES */
            <div className="space-y-6 animate-fadeIn">
              {/* Selected Child Summary */}
              {selectedChild && (
                <div className="p-3.5 rounded-2xl bg-[#0f7a6c]/10 dark:bg-[#0f7a6c]/15 border border-[#0f7a6c]/20 flex items-center justify-between gap-3">
                  <div className="flex items-center gap-2.5 min-w-0">
                    <div className="w-9 h-9 rounded-xl bg-[#0f7a6c] text-white font-black flex items-center justify-center text-sm shrink-0">
                      {selectedChild.name?.trim().charAt(0) || 'ط'}
                    </div>
                    <div className="min-w-0">
                      <span className="text-[11px] font-bold text-[#0f7a6c] dark:text-emerald-400 block">
                        {isRtl ? 'الحصة التجريبية للابن:' : 'Trial Session for:'}
                      </span>
                      <strong className="text-xs sm:text-sm font-black text-slate-800 dark:text-white truncate block">
                        {selectedChild.name}
                      </strong>
                    </div>
                  </div>
                  <button
                    type="button"
                    onClick={() => setStep(1)}
                    className="text-xs font-bold text-[#0f7a6c] dark:text-emerald-400 hover:underline cursor-pointer shrink-0"
                  >
                    {isRtl ? 'تغيير الابن' : 'Change Child'}
                  </button>
                </div>
              )}
              {/* Curricula Selection */}
              <div className="space-y-3">
                <label className="text-xs sm:text-sm font-black text-slate-800 dark:text-slate-200 flex items-center gap-2">
                  <BookOpen className="w-4 h-4 text-[#0f7a6c]" />
                  <span>{isRtl ? 'اختر المنهج الدراسي المراد تجربته:' : 'Select the curriculum to trial:'}</span>
                </label>
                {curriculaList.length === 0 ? (
                  <div className="p-6 text-center bg-slate-50 dark:bg-slate-800 rounded-2xl text-xs text-slate-400">
                    {isRtl ? 'لا توجد مناهج معروضة حالياً' : 'No curricula available right now'}
                  </div>
                ) : (
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 max-h-[260px] overflow-y-auto pe-1">
                    {curriculaList.map((curriculum) => {
                      const cid = String(curriculum.id);
                      const isSelected = selectedCurriculumId === cid;
                      return (
                        <div
                          key={cid}
                          onClick={() => setSelectedCurriculumId(cid)}
                          className={`p-3.5 rounded-2xl border-2 transition-all cursor-pointer flex flex-col justify-between gap-2.5 ${
                            isSelected
                              ? 'border-[#0f7a6c] bg-[#0f7a6c]/5 dark:bg-[#0f7a6c]/10 shadow-xs'
                              : 'border-slate-200 dark:border-slate-800 hover:border-slate-300 dark:hover:border-slate-700 bg-white dark:bg-slate-900'
                          }`}
                        >
                          <div className="flex items-start gap-3">
                            {curriculum.image ? (
                              <img
                                src={curriculum.image}
                                alt={curriculum.name}
                                className="w-11 h-11 rounded-xl object-cover shrink-0 border border-slate-200 dark:border-slate-700"
                              />
                            ) : (
                              <div className="w-11 h-11 rounded-xl bg-gradient-to-br from-[#0f7a6c]/20 to-teal-500/10 text-[#0f7a6c] dark:text-emerald-400 flex items-center justify-center shrink-0">
                                <BookOpen className="w-5 h-5" />
                              </div>
                            )}
                            <div className="min-w-0 flex-1">
                              <h5 className="font-black text-xs sm:text-sm text-slate-800 dark:text-white leading-snug line-clamp-1">
                                {curriculum.name}
                              </h5>
                              <p className="text-[11px] text-slate-400 line-clamp-2 mt-0.5 leading-relaxed">
                                {curriculum.description || '—'}
                              </p>
                            </div>
                            <div className="shrink-0 mt-0.5">
                              {isSelected ? (
                                <div className="w-4 h-4 rounded-full bg-[#0f7a6c] text-white flex items-center justify-center">
                                  <CheckCircle2 className="w-3.5 h-3.5" />
                                </div>
                              ) : (
                                <div className="w-4 h-4 rounded-full border border-slate-300 dark:border-slate-600" />
                              )}
                            </div>
                          </div>
                          <div className="flex items-center gap-1.5 pt-1 text-[10px] font-bold text-slate-500 dark:text-slate-400">
                            {curriculum.language && (
                              <span className="px-2 py-0.5 rounded-md bg-slate-100 dark:bg-slate-800 flex items-center gap-1">
                                <Globe className="w-2.5 h-2.5" />
                                <span>{curriculum.language}</span>
                              </span>
                            )}
                            {curriculum.studentLevel && (
                              <span className="px-2 py-0.5 rounded-md bg-emerald-50 dark:bg-emerald-950/40 text-emerald-700 dark:text-emerald-300 flex items-center gap-1">
                                <GraduationCap className="w-2.5 h-2.5" />
                                <span>{curriculum.studentLevel}</span>
                              </span>
                            )}
                          </div>
                        </div>
                      );
                    })}
                  </div>
                )}
              </div>
              {/* Optional Notes */}
              <div className="space-y-1.5">
                <label className="text-xs font-bold text-slate-700 dark:text-slate-300 block">
                  {isRtl ? 'ملاحظات أو مواعيد مفضلة (اختياري):' : 'Preferred timings or notes (optional):'}
                </label>
                <textarea
                  rows={2}
                  value={notes}
                  onChange={(e) => setNotes(e.target.value)}
                  placeholder={
                    isRtl
                      ? 'مثال: نفضل مواعيد المساء، أو التركيز على تأسيس النطق والتهجئة...'
                      : 'e.g., We prefer evening sessions, or focus on fundamentals...'
                  }
                  className="w-full px-3.5 py-2.5 rounded-2xl bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-xs sm:text-sm text-slate-800 dark:text-white placeholder:text-slate-400 focus:outline-hidden focus:ring-2 focus:ring-[#0f7a6c]/40 transition-shadow resize-none"
                />
              </div>
            </div>
          )}
        </div>
        {/* Modal Footer Actions */}
        <div className="px-6 py-4 bg-slate-50 dark:bg-slate-900/60 border-t border-slate-100 dark:border-slate-800 flex items-center justify-between gap-3 shrink-0">
          {step === 1 ? (
            <>
              <button
                type="button"
                onClick={onClose}
                disabled={isSubmitting}
                className="px-5 py-2.5 rounded-2xl border border-slate-200 dark:border-slate-700 text-slate-600 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800 text-xs font-bold transition cursor-pointer"
              >
                {isRtl ? 'إلغاء' : 'Cancel'}
              </button>
              <button
                type="button"
                onClick={() => setStep(2)}
                disabled={!selectedStudentId}
                className="px-6 py-2.5 rounded-2xl bg-[#0f7a6c] hover:bg-[#0c6156] text-white text-xs font-black shadow-md shadow-[#0f7a6c]/20 transition flex items-center gap-2 cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed"
              >
                <span>{isRtl ? 'التالي: اختيار المنهج' : 'Next: Select Curriculum'}</span>
                {isRtl ? <ChevronLeft size={16} /> : <ChevronRight size={16} />}
              </button>
            </>
          ) : (
            <>
              <button
                type="button"
                onClick={() => setStep(1)}
                disabled={isSubmitting}
                className="px-5 py-2.5 rounded-2xl border border-slate-200 dark:border-slate-700 text-slate-600 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800 text-xs font-bold transition flex items-center gap-1.5 cursor-pointer"
              >
                {isRtl ? <ChevronRight size={16} /> : <ChevronLeft size={16} />}
                <span>{isRtl ? 'الرجوع لاختيار الابن' : 'Back to Children'}</span>
              </button>
              <button
                type="button"
                onClick={handleSubmit}
                disabled={isSubmitting || !selectedCurriculumId || !selectedStudentId}
                className="px-6 py-2.5 rounded-2xl bg-[#0f7a6c] hover:bg-[#0c6156] text-white text-xs font-black shadow-md shadow-[#0f7a6c]/20 transition flex items-center gap-2 cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {isSubmitting ? (
                  <>
                    <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                    <span>{isRtl ? 'جاري إرسال الطلب...' : 'Submitting...'}</span>
                  </>
                ) : (
                  <>
                    <Send size={15} />
                    <span>{isRtl ? 'تأكيد طلب الحصة التجريبية' : 'Confirm Trial Request'}</span>
                  </>
                )}
              </button>
            </>
          )}
        </div>
      </div>
    </div>,
    document.body
  );
}


import { useState } from 'react';
import { createPortal } from 'react-dom';
import { useTranslation } from 'react-i18next';
import {
  X,
  Star,
  MessageSquare,
  ShieldAlert,
  Send,
  } from 'lucide-react';
import { parentTeacherEvaluationsApi } from '@/shared/services/api/parentTeacherEvaluationsApi.js';
import { showSuccessToast, showErrorToast } from '@/shared/utils/sweetAlert.js';

const QUICK_SUGGESTIONS = [
  'شرح مبسط وممتع للأبناء',
  'معلم صبور ومشجع جداً',
  'التزام تام بمواعيد الحصص',
  'متابعة ممتازة للواجبات والتلاوة',
  'تفاعل رائع وطريقة تحفيزية',
];

function extractText(val, isRtl) {
  if (val === null || val === undefined) return '';
  if (typeof val === 'string') return val.trim();
  if (typeof val === 'number') return String(val);
  if (typeof val === 'object') {
    const localized = isRtl ? (val.ar || val.en) : (val.en || val.ar);
    if (localized && typeof localized === 'string') return localized.trim();
    if (val.name && typeof val.name === 'string') return val.name.trim();
    return '';
  }
  return '';
}

function getStarLabel(ratingValue, t) {
  switch (ratingValue) {
    case 5:
      return { text: t('parentTeacherEval.star5', 'ممتاز - أداء رائع ومتميز جداً'), color: 'text-emerald-600 dark:text-emerald-400' };
    case 4:
      return { text: t('parentTeacherEval.star4', 'جيد جداً - شرح متميز وتفاعل جيد'), color: 'text-teal-600 dark:text-teal-400' };
    case 3:
      return { text: t('parentTeacherEval.star3', 'جيد - أداء مرضي ومقبول'), color: 'text-amber-600 dark:text-amber-400' };
    case 2:
      return { text: t('parentTeacherEval.star2', 'مقبول - يحتاج إلى مزيد من المتابعة'), color: 'text-orange-600 dark:text-orange-400' };
    case 1:
      return { text: t('parentTeacherEval.star1', 'ضعيف - غير راضٍ عن الأداء'), color: 'text-rose-600 dark:text-rose-400' };
    default:
      return { text: t('parentTeacherEval.selectRatingHint', 'اختر عدد النجوم للتقييم'), color: 'text-slate-400' };
  }
}

export default function TeacherEvaluationModal({
  isOpen,
  teacher,
  onClose,
  onSuccess,
}) {
  const { t, i18n } = useTranslation();
  const isRtl = i18n?.language?.startsWith('ar') ?? true;
  const [selectedRating, setSelectedRating] = useState(5);
  const [hoverRating, setHoverRating] = useState(0);
  const [notes, setNotes] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  if (!isOpen || !teacher || typeof document === 'undefined') return null;
  const teacherId = teacher.teacherId || teacher.id || teacher._id;
  const teacherName = extractText(teacher.name, isRtl) || t('teacherLive.teacherDefaultName', 'المعلم');
  const teacherImage = typeof teacher.image === 'string' && teacher.image.trim() ? teacher.image : null;
  const currentActiveStar = hoverRating || selectedRating;
  const starMeta = getStarLabel(currentActiveStar, t);
  const handleQuickSuggestionClick = (phrase) => {
    setNotes((prev) => {
      const trimmed = prev.trim();
      if (!trimmed) return phrase;
      if (trimmed.includes(phrase)) return trimmed;
      return `${trimmed}، ${phrase}`;
    });
  };
  const handleSubmitEvaluation = async (e) => {
    e.preventDefault();
    if (selectedRating < 1 || selectedRating > 5) {
      showErrorToast(t('parentTeacherEval.invalidRatingError', 'يرجى اختيار تقييم بين 1 و 5 نجوم'), isRtl);
      return;
    }
    try {
      setIsSubmitting(true);
      await parentTeacherEvaluationsApi.submitTeacherEvaluation(teacherId, {
        rating: selectedRating,
        notes: notes.trim(),
      });
      showSuccessToast(t('parentTeacherEval.submitSuccessMessage', 'تم تسجيل تقييم المعلم بنجاح!'), isRtl);
      onSuccess?.();
      onClose();
    } catch (err) {
      const errMsg = err?.response?.data?.message || t('parentTeacherEval.submitErrorMessage', 'تعذر إرسال التقييم، يرجى المحاولة لاحقاً');
      showErrorToast(errMsg, isRtl);
    } finally {
      setIsSubmitting(false);
    }
  };
  return createPortal(
    <div
      className="fixed inset-0 w-screen h-screen min-h-screen z-[99999] flex items-center justify-center p-3 sm:p-5 bg-black/80 backdrop-blur-sm animate-fade-in overflow-y-auto"
      dir={isRtl ? 'rtl' : 'ltr'}
      onClick={onClose}
    >
      <div
        className="relative w-full max-w-lg bg-white dark:bg-slate-900 rounded-3xl shadow-2xl border border-slate-200 dark:border-slate-800 overflow-hidden my-8"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="p-6 border-b border-slate-100 dark:border-slate-800 flex items-center justify-between gap-4">
          <div className="flex items-center gap-3.5">
            <div className="w-12 h-12 rounded-2xl overflow-hidden bg-slate-100 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 flex items-center justify-center shrink-0 font-black text-base text-[#0f7a6c] dark:text-emerald-400">
              {teacherImage ? (
                <img src={teacherImage} alt={teacherName} className="w-full h-full object-cover" />
              ) : (
                <span>{teacherName.charAt(0) || 'T'}</span>
              )}
            </div>
            <div>
              <span className="text-[11px] font-bold text-slate-400 uppercase tracking-wide block">
                {t('parentTeacherEval.weeklyEvalModalTitle', 'التقييم الأسبوعي للمعلم')}
              </span>
              <h2 className="text-lg font-black text-slate-900 dark:text-white leading-tight">
                {teacherName}
              </h2>
            </div>
          </div>
          <button
            type="button"
            onClick={onClose}
            className="p-2 rounded-2xl text-slate-400 hover:text-slate-600 dark:hover:text-slate-200 hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors cursor-pointer"
          >
            <X className="w-5 h-5" />
          </button>
        </div>
        <form onSubmit={handleSubmitEvaluation} className="p-6 space-y-5">
          <div className="p-3.5 rounded-2xl bg-amber-50 dark:bg-amber-950/20 border border-amber-200/60 dark:border-amber-800/40 flex items-start gap-2.5 text-xs text-amber-800 dark:text-amber-300">
            <ShieldAlert className="w-4 h-4 text-amber-600 shrink-0 mt-0.5" />
            <span className="leading-relaxed font-semibold">
              {t(
                'parentTeacherEval.modalPolicyNotice',
                'يُسجل التقييم مرة واحدة أسبوعياً لكل معلم. تقييمك يساهم في تحسين جودة التعليم ومتابعة المعلمين.'
              )}
            </span>
          </div>
          <div className="text-center p-5 rounded-2xl bg-slate-50 dark:bg-slate-800/50 border border-slate-100 dark:border-slate-800 space-y-3">
            <span className="text-xs font-bold text-slate-500 dark:text-slate-400 block">
              {t('parentTeacherEval.chooseRatingLabel', 'حدد تقييمك للمعلم من 1 إلى 5 نجوم:')}
            </span>
            <div className="flex items-center justify-center gap-2 sm:gap-3 py-1">
              {[1, 2, 3, 4, 5].map((starIndex) => {
                const isLit = (hoverRating || selectedRating) >= starIndex;
                return (
                  <button
                    type="button"
                    key={starIndex}
                    onMouseEnter={() => setHoverRating(starIndex)}
                    onMouseLeave={() => setHoverRating(0)}
                    onClick={() => setSelectedRating(starIndex)}
                    className="p-1 transition-transform hover:scale-125 active:scale-95 cursor-pointer focus:outline-none"
                    aria-label={`${starIndex} Stars`}
                  >
                    <Star
                      className={`w-8 h-8 sm:w-9 sm:h-9 transition-colors ${
                        isLit
                          ? 'text-amber-400 fill-amber-400 drop-shadow-sm'
                          : 'text-slate-300 dark:text-slate-600'
                      }`}
                    />
                  </button>
                );
              })}
            </div>
            <div className={`text-xs font-black transition-colors ${starMeta.color}`}>
              {starMeta.text}
            </div>
          </div>
          <div className="space-y-2">
            <label className="text-xs font-bold text-slate-700 dark:text-slate-300 flex items-center justify-between">
              <span className="flex items-center gap-1.5">
                <MessageSquare className="w-3.5 h-3.5 text-[#0f7a6c] dark:text-emerald-400" />
                <span>{t('parentTeacherEval.notesFieldLabel', 'ملاحظاتك وانطباعك عن أداء المعلم')}</span>
              </span>
              <span className="text-[11px] text-slate-400 font-normal">
                {t('parentTeacherEval.optionalLabel', '(اختياري)')}
              </span>
            </label>
            <textarea
              rows={3}
              value={notes}
              onChange={(e) => setNotes(e.target.value)}
              placeholder={t(
                'parentTeacherEval.notesPlaceholder',
                'اكتب ملاحظاتك أو تقييمك لتفاعل المعلم وشرحه مع أبنائك خلال الأسبوع...'
              )}
              className="w-full p-3.5 rounded-2xl border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-800 text-slate-900 dark:text-slate-100 placeholder:text-slate-400 text-xs sm:text-sm font-semibold focus:outline-none focus:ring-2 focus:ring-[#0f7a6c]/30 focus:border-[#0f7a6c] transition-shadow resize-none"
            />
          </div>
          <div className="space-y-1.5">
            <span className="text-[11px] font-bold text-slate-400 dark:text-slate-500 block">
              {t('parentTeacherEval.quickSuggestions', 'عبارات مقترحة سريعة:')}
            </span>
            <div className="flex flex-wrap items-center gap-1.5">
              {QUICK_SUGGESTIONS.map((phrase, idx) => (
                <button
                  type="button"
                  key={idx}
                  onClick={() => handleQuickSuggestionClick(phrase)}
                  className="px-2.5 py-1 rounded-xl bg-slate-100 hover:bg-slate-200 dark:bg-slate-800 dark:hover:bg-slate-700 text-slate-600 dark:text-slate-300 text-[11px] font-bold transition-colors cursor-pointer"
                >
                  +{phrase}
                </button>
              ))}
            </div>
          </div>
          <div className="pt-2 flex items-center justify-end gap-3 border-t border-slate-100 dark:border-slate-800">
            <button
              type="button"
              onClick={onClose}
              disabled={isSubmitting}
              className="px-5 py-2.5 rounded-xl bg-slate-100 dark:bg-slate-800 hover:bg-slate-200 dark:hover:bg-slate-700 text-slate-700 dark:text-slate-300 text-xs font-bold transition-colors cursor-pointer disabled:opacity-50"
            >
              {t('parentTeacherEval.cancelBtn', 'إلغاء')}
            </button>
            <button
              type="submit"
              disabled={isSubmitting}
              className="px-6 py-2.5 rounded-xl bg-[#0f7a6c] hover:bg-[#0c6156] text-white text-xs font-black shadow-md shadow-[#0f7a6c]/20 transition-all flex items-center gap-2 cursor-pointer disabled:opacity-50 hover:scale-[1.01] active:scale-[0.99]"
            >
              {isSubmitting ? (
                <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin" />
              ) : (
                <Send className="w-3.5 h-3.5" />
              )}
              <span>{isSubmitting ? t('parentTeacherEval.submitting', 'جاري الإرسال...') : t('parentTeacherEval.submitEvalBtn', 'إرسال التقييم')}</span>
            </button>
          </div>
        </form>
      </div>
    </div>,
    document.body
  );
}

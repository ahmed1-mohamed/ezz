import { memo } from 'react';
import { useTranslation } from 'react-i18next';
import {
  Star,
  Users,
  CheckCircle2,
  Clock,
} from 'lucide-react';

function extractText(val, isRtl) {
  if (val === null || val === undefined) return '';
  if (typeof val === 'string') return val.trim();
  if (typeof val === 'number') return String(val);
  if (typeof val === 'object') {
    if (Array.isArray(val)) {
      return val.map((v) => extractText(v, isRtl)).filter(Boolean).join(', ');
    }
    const localized = isRtl ? (val.ar || val.en) : (val.en || val.ar);
    if (localized && typeof localized === 'string') return localized.trim();
    if (val.name && typeof val.name === 'string') return val.name.trim();
    if (val.title && typeof val.title === 'string') return val.title.trim();
    if (val.text && typeof val.text === 'string') return val.text.trim();
    return '';
  }
  return '';
}

function renderStarRow(ratingCount) {
  const stars = [];
  const count = Math.min(5, Math.max(1, Math.round(Number(ratingCount) || 5)));
  for (let i = 1; i <= 5; i++) {
    stars.push(
      <Star
        key={i}
        className={`w-4 h-4 ${
          i <= count
            ? 'text-amber-400 fill-amber-400'
            : 'text-slate-300 dark:text-slate-600'
        }`}
      />
    );
  }
  return stars;
}

const TeacherCard = memo(function TeacherCard({
  teacher,
  onEvaluate,
}) {
  const { t, i18n } = useTranslation();
  const isRtl = i18n?.language?.startsWith('ar') ?? true;
  const isEvaluated = Boolean(teacher?.isEvaluatedThisWeek);
  const thisWeek = teacher?.thisWeekEvaluation || null;
  const childrenList = Array.isArray(teacher?.children) ? teacher.children : [];
  const specializations = Array.isArray(teacher?.specializations) ? teacher.specializations : [];
   const teacherName = extractText(teacher?.name, isRtl) || t('teacherLive.teacherDefaultName', 'المعلم');
  const teacherBio = extractText(teacher?.bio, isRtl);
  const teacherImage = typeof teacher?.image === 'string' && teacher.image.trim() ? teacher.image : null;
  const overallRating = Number(teacher?.rating || 0).toFixed(1);
  const totalRatings = Number(teacher?.totalRatings || 0);
  const weekNotes = extractText(thisWeek?.notes, isRtl);
  return (
    <div
      className={`relative rounded-3xl p-6 sm:p-7 flex flex-col justify-between transition-all duration-300 border bg-white dark:bg-slate-900 shadow-sm hover:shadow-xl hover:-translate-y-1 ${
        isEvaluated
          ? 'border-emerald-200/80 dark:border-emerald-800/60'
          : 'border-slate-200/90 dark:border-slate-800'
      }`}
      dir={isRtl ? 'rtl' : 'ltr'}
    >
       <div>
        <div className="flex items-start justify-between gap-4 mb-4">
          <div className="flex items-center gap-3.5 min-w-0">
            <div className="w-14 h-14 rounded-2xl overflow-hidden bg-slate-100 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 flex items-center justify-center shrink-0 font-black text-lg text-[#0f7a6c] dark:text-emerald-400 shadow-xs">
              {teacherImage ? (
                <img
                  src={teacherImage}
                  alt={teacherName}
                  className="w-full h-full object-cover"
                />
              ) : (
                <span>{teacherName.charAt(0) || 'T'}</span>
              )}
            </div>
            <div className="min-w-0">
              <h3 className="font-extrabold text-slate-900 dark:text-white text-base sm:text-lg leading-snug truncate">
                {teacherName}
              </h3>
              <div className="flex items-center gap-2 mt-1">
                <div className="flex items-center gap-1 px-2.5 py-0.5 rounded-full bg-amber-50 dark:bg-amber-950/40 text-amber-700 dark:text-amber-300 border border-amber-200/60 dark:border-amber-800/60 text-xs font-bold">
                  <Star className="w-3.5 h-3.5 fill-amber-400 text-amber-400" />
                  <span>{overallRating}</span>
                </div>
                <span className="text-[11px] text-slate-400 dark:text-slate-500 font-medium">
                  ({totalRatings} {t('parentTeacherEval.ratingsCount', 'تقييم')})
                </span>
              </div>
            </div>
          </div>
          <span
            className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-black shrink-0 ${
              isEvaluated
                ? 'bg-emerald-50 text-emerald-700 dark:bg-emerald-950/40 dark:text-emerald-300 border border-emerald-200/60 dark:border-emerald-800/60'
                : 'bg-amber-50 text-amber-700 dark:bg-amber-950/40 dark:text-amber-300 border border-amber-200/60 dark:border-amber-800/60'
            }`}
          >
            {isEvaluated ? (
              <>
                <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 dark:text-emerald-400" />
                <span>{t('parentTeacherEval.evaluatedBadge', 'تم التقييم هذا الأسبوع')}</span>
              </>
            ) : (
              <>
                <Clock className="w-3.5 h-3.5 text-amber-600 dark:text-amber-400" />
                <span>{t('parentTeacherEval.pendingBadge', 'بانتظار التقييم')}</span>
              </>
            )}
          </span>
        </div>
         {childrenList.length > 0 && (
          <div className="p-3 rounded-2xl bg-slate-50 dark:bg-slate-800/50 border border-slate-100 dark:border-slate-800/80 mb-3.5 text-xs">
            <span className="text-slate-400 dark:text-slate-500 font-bold block mb-1.5 flex items-center gap-1.5">
              <Users className="w-3.5 h-3.5 text-[#0f7a6c] dark:text-emerald-400" />
              <span>{t('parentTeacherEval.teacherFor', 'معلّم الأبناء:')}</span>
            </span>
            <div className="flex flex-wrap items-center gap-1.5">
              {childrenList.map((ch, idx) => {
                const chName = typeof ch === 'object' && ch !== null
                  ? extractText(ch.name || ch.studentName || ch.fullName, isRtl)
                  : extractText(ch, isRtl);
                if (!chName) return null;
                return (
                  <span
                    key={ch.id || ch.studentId || idx}
                    className="px-2.5 py-1 rounded-xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-700 font-bold text-slate-800 dark:text-slate-200 text-xs shadow-xs"
                  >
                    {chName}
                  </span>
                );
              })}
            </div>
          </div>
        )}
        {specializations.length > 0 && (
          <div className="flex flex-wrap items-center gap-1.5 mb-4">
            {specializations.map((spec, idx) => {
              const specText = extractText(spec, isRtl);
              if (!specText) return null;
              return (
                <span
                  key={idx}
                  className="px-2.5 py-0.5 rounded-lg bg-[#0f7a6c]/10 text-[#0f7a6c] dark:bg-emerald-950/30 dark:text-emerald-300 text-[11px] font-bold"
                >
                  {specText}
                </span>
              );
            })}
          </div>
        )}
        {Boolean(teacherBio) && (
          <p className="text-xs text-slate-500 dark:text-slate-400 line-clamp-2 leading-relaxed mb-4">
            {teacherBio}
          </p>
        )}
      </div>
      <div className="mt-2 pt-4 border-t border-slate-100 dark:border-slate-800">
        {isEvaluated ? (
          <div className="p-4 rounded-2xl bg-emerald-50/70 dark:bg-emerald-950/20 border border-emerald-200/60 dark:border-emerald-800/40 space-y-2">
            <div className="flex items-center justify-between">
              <span className="text-xs font-extrabold text-emerald-800 dark:text-emerald-300 flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 dark:text-emerald-400" />
                <span>{t('parentTeacherEval.evaluatedThisWeekTitle', 'تقييمك لهذا الأسبوع:')}</span>
              </span>
              <div className="flex items-center gap-1">
                {renderStarRow(thisWeek?.rating || 5)}
              </div>
            </div>
            {Boolean(weekNotes) && (
              <p className="text-xs text-emerald-900 dark:text-emerald-200 font-medium italic bg-white/70 dark:bg-slate-900/60 p-2.5 rounded-xl border border-emerald-100 dark:border-emerald-900/40">
                "{weekNotes}"
              </p>
            )}
            <div className="text-[11px] text-emerald-700/80 dark:text-emerald-400/80 font-semibold pt-1">
              {t('parentTeacherEval.oncePerWeekPolicy', 'يُتاح تقييم المعلم مرة واحدة فقط أسبوعياً.')}
            </div>
          </div>
        ) : (
          <div className="p-4 rounded-2xl bg-amber-50/60 dark:bg-amber-950/20 border border-amber-200/60 dark:border-amber-800/40 flex flex-col sm:flex-row sm:items-center justify-between gap-3">
            <div>
              <span className="text-xs font-extrabold text-amber-900 dark:text-amber-200 block">
                {t('parentTeacherEval.pendingThisWeekTitle', 'لم تقم بتقييم المعلم لهذا الأسبوع')}
              </span>
              <span className="text-[11px] text-slate-500 dark:text-slate-400 font-medium block mt-0.5">
                {t('parentTeacherEval.pendingThisWeekDesc', 'تقييمك الأسبوعي يساعدنا في قياس الأداء وتطوير التجربة التعليمية')}
              </span>
            </div>
            <button
              type="button"
              onClick={() => onEvaluate?.(teacher)}
              className="px-5 py-2.5 rounded-xl bg-[#0f7a6c] hover:bg-[#0c6156] text-white text-xs font-black shadow-md shadow-[#0f7a6c]/20 transition-all flex items-center justify-center gap-2 cursor-pointer shrink-0 hover:scale-[1.02] active:scale-[0.98]"
            >
              <Star className="w-4 h-4 fill-current" />
              <span>{t('parentTeacherEval.evaluateNowBtn', 'تقييم المعلم الآن')}</span>
            </button>
          </div>
        )}
      </div>
    </div>
  );
});

TeacherCard.displayName = 'TeacherCard';
export default TeacherCard;

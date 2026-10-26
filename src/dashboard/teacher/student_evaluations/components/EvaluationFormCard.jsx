import { useTranslation } from 'react-i18next';
import { Star, Save, Loader2 } from 'lucide-react';

export default function EvaluationFormCard({
  currentSelectedStudent,
  studentAverageRating,
  studentAveragePercentage,
  levelInfo,
  rating,
  onRatingChange,
  notes,
  onNotesChange,
  onSave,
  isSubmitting,
  canSubmit,
}) {
  const { t } = useTranslation();

  const studentDisplayName = currentSelectedStudent?.name || t('teacherEvaluations.defaultStudent', 'الطالب');

  return (
    <div className="bg-white dark:bg-slate-900 rounded-3xl p-6 sm:p-7 shadow-xs border border-slate-100 dark:border-slate-800 space-y-7 text-start">
      <div className="flex items-center justify-between gap-4">
        <span
          className={`px-4 py-1 rounded-full text-xs sm:text-sm font-bold ${levelInfo.badgeClass}`}
        >
          {levelInfo.label}
        </span>

        <h3 className="text-base sm:text-lg font-black text-slate-800 dark:text-white">
          {t('teacherEvaluations.evaluationForStudent', 'تقييم {{name}}', { name: studentDisplayName })}
        </h3>
      </div>

      <div className="space-y-3">
        <div className="text-start">
          <span className="text-xs sm:text-sm font-bold text-slate-600 dark:text-slate-300 block mb-1">
            {t('teacherEvaluations.averageRating', 'متوسط تقييم الطالب')}
          </span>
          <div className="flex items-baseline gap-2">
            <span className="text-2xl sm:text-3xl font-black text-slate-800 dark:text-white">
              {studentAverageRating} / 5
            </span>
            <span className="text-xs sm:text-sm font-bold text-emerald-600 dark:text-emerald-400">
              ({studentAveragePercentage}%)
            </span>
          </div>
        </div>

        <div className="w-full h-4 rounded-full bg-slate-100 dark:bg-slate-800 overflow-hidden">
          <div
            className="h-full bg-[#00594C] rounded-full transition-all duration-500 ease-out"
            style={{ width: `${studentAveragePercentage}%` }}
          />
        </div>

        <div className="flex items-center justify-between text-xs text-slate-400 font-semibold px-1">
          <span>{t('teacherEvaluations.fiveStars', '5 نجوم (100%)')}</span>
          <span>{t('teacherEvaluations.halfStars', '2.5 نجمة (50%)')}</span>
          <span>{t('teacherEvaluations.zero', '0')}</span>
        </div>
      </div>

      <div className="space-y-4 pt-2">
        <h4 className="text-sm sm:text-base font-black text-slate-800 dark:text-white">
          {t('teacherEvaluations.ratingScaleTitle', 'تقييم الطالب في الحصة (من 1 إلى 5 نجوم)')}
        </h4>

        <div className="p-5 rounded-2xl bg-slate-50 dark:bg-slate-800/50 border border-slate-100 dark:border-slate-800 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-2" dir="ltr">
            {[1, 2, 3, 4, 5].map((starNum) => {
              const isFilled = starNum <= rating;
              return (
                <button
                  type="button"
                  key={starNum}
                  onClick={() => onRatingChange(starNum)}
                  className="p-1 text-amber-400 hover:scale-115 transition-transform focus:outline-none cursor-pointer"
                  title={t('teacherEvaluations.starsOutOfFive', '{{count}} من 5 نجوم', { count: starNum })}
                >
                  <Star
                    size={32}
                    className={
                      isFilled
                        ? 'fill-amber-400 text-amber-400'
                        : 'text-slate-200 dark:text-slate-700'
                    }
                  />
                </button>
              );
            })}
          </div>

          <div className="text-sm font-black text-slate-800 dark:text-white flex items-center gap-1.5">
            <span>{t('teacherEvaluations.selectedRating', 'التقييم المحدد:')}</span>
            <span className="text-[#00594C] dark:text-emerald-400 text-base font-black">
              {t('teacherEvaluations.starsOutOfFive', '{{count}} من 5 نجوم', { count: rating })}
            </span>
          </div>
        </div>
      </div>

      <div className="space-y-2 pt-2">
        <label className="block text-xs sm:text-sm font-bold text-slate-800 dark:text-white">
          {t('teacherEvaluations.teacherNotes', 'ملاحظة وتوجيهات المعلم للطالب')}
        </label>
        <textarea
          value={notes}
          onChange={(e) => onNotesChange(e.target.value)}
          rows={4}
          placeholder={t(
            'teacherEvaluations.notesPlaceholder',
            'اكتب ملاحظاتك وتوجيهاتك للطالب عن أدائه في هذه الحصة...'
          )}
          className="w-full p-4 rounded-2xl bg-slate-50 dark:bg-slate-800/50 border border-slate-200 dark:border-slate-700 text-xs sm:text-sm text-slate-800 dark:text-white placeholder:text-slate-400 focus:outline-none focus:border-[#00594C] transition resize-none"
        />
      </div>

      <button
        type="button"
        onClick={onSave}
        disabled={isSubmitting || !canSubmit}
        className="w-full py-3.5 px-6 rounded-2xl bg-[#00594C] hover:bg-[#00473c] text-white text-sm sm:text-base font-black transition flex items-center justify-center gap-2 shadow-xs disabled:opacity-50 cursor-pointer"
      >
        {isSubmitting ? (
          <>
            <Loader2 size={18} className="animate-spin" />
            <span>{t('teacherEvaluations.savingEvaluation', 'جاري حفظ التقييم...')}</span>
          </>
        ) : (
          <>
            <Save size={18} />
            <span>{t('teacherEvaluations.saveEvaluation', 'حفظ التقييم')}</span>
          </>
        )}
      </button>
    </div>
  );
}

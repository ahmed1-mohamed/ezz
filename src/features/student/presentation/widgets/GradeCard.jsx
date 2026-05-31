import { motion } from 'framer-motion';
import { Star, TrendingUp, AlertCircle, User, Calendar } from 'lucide-react';
import { useTranslation } from 'react-i18next';

export function StarDisplay({ rating, size = 16 }) {
  return (
    <div className="flex items-center gap-0.5">
      {[1, 2, 3, 4, 5].map((i) => (
        <Star
          key={i}
          size={size}
          className={i <= Math.round(rating) ? 'text-amber-400' : 'text-slate-300 dark:text-slate-600'}
          fill={i <= Math.round(rating) ? 'currentColor' : 'none'}
        />
      ))}
    </div>
  );
}

function SkillBar({ label, value }) {
  return (
    <div className="bg-white dark:bg-slate-700 rounded-xl p-3 text-center">
      <p className="text-xl font-extrabold text-slate-800 dark:text-slate-100">{value}%</p>
      <p className="text-[10px] text-slate-500 dark:text-slate-400 mt-0.5">{label}</p>
    </div>
  );
}

export function GradeCard({ grade, isRtl }) {
  const { t } = useTranslation();
  const strengths = isRtl ? grade.strengthsAr : grade.strengthsEn;
  const improvements = isRtl ? grade.improvementsAr : grade.improvementsEn;

  return (
    <motion.div
      variants={{ hidden: { opacity: 0, y: 16 }, visible: { opacity: 1, y: 0 } }}
      className="bg-white dark:bg-slate-800 rounded-2xl shadow-sm border border-slate-100 dark:border-slate-700 overflow-hidden"
      dir={isRtl ? 'rtl' : 'ltr'}
    >
      <div className="p-5 border-b border-slate-100 dark:border-slate-700">
        <div className="flex items-start justify-between gap-3 mb-2">
          <StarDisplay rating={grade.rating} />
          <div className="text-end">
            <div className="flex items-center justify-end gap-2 mb-1">
              <h3 className="text-base font-bold text-slate-800 dark:text-slate-100">
                {isRtl ? grade.sessionAr : grade.sessionEn}
              </h3>
              <div className="w-9 h-9 bg-[#0f7a6c] rounded-full flex items-center justify-center shrink-0 shadow-sm">
                <span className="text-white font-bold text-sm">أ</span>
              </div>
            </div>
            <span className="inline-block bg-emerald-50 dark:bg-emerald-900/20 text-[#0f7a6c] dark:text-emerald-400 text-[10px] font-bold px-2.5 py-0.5 rounded-full">
              {isRtl ? grade.subject : grade.subjectEn}
            </span>
          </div>
        </div>
        <div className="flex items-center justify-end gap-4 text-xs text-slate-500 dark:text-slate-400">
          <span className="flex items-center gap-1.5"><Calendar size={11} />{isRtl ? grade.date : grade.dateEn}</span>
          <span className="flex items-center gap-1.5"><User size={11} />{isRtl ? grade.teacher : grade.teacherEn}</span>
        </div>
      </div>

      <div className="p-5 space-y-4">
        <div className="grid grid-cols-4 gap-2">
          {grade.skills.map((s) => (
            <SkillBar key={s.labelAr} label={isRtl ? s.labelAr : s.labelEn} value={s.value} />
          ))}
        </div>

        <div>
          <p className="text-xs font-bold text-slate-700 dark:text-slate-300 mb-1.5">
            {t('studentDashboard.grades.teacherNotes')}
          </p>
          <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed bg-slate-50 dark:bg-slate-900 rounded-xl p-3">
            {isRtl ? grade.noteAr : grade.noteEn}
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
          {strengths.length > 0 && (
            <div className="bg-emerald-50 dark:bg-emerald-900/20 rounded-xl p-3">
              <p className="text-xs font-bold text-emerald-700 dark:text-emerald-400 mb-2 flex items-center gap-1.5">
                <TrendingUp size={12} />
                {t('studentDashboard.grades.strengths')}
              </p>
              <ul className="space-y-1">
                {strengths.map((s, i) => (
                  <li key={i} className="text-[11px] text-emerald-700 dark:text-emerald-400 flex items-center gap-1.5">
                    <span className="w-1 h-1 rounded-full bg-emerald-500 shrink-0" />
                    {s}
                  </li>
                ))}
              </ul>
            </div>
          )}
          {improvements.length > 0 && (
            <div className="bg-amber-50 dark:bg-amber-900/20 rounded-xl p-3">
              <p className="text-xs font-bold text-amber-700 dark:text-amber-400 mb-2 flex items-center gap-1.5">
                <AlertCircle size={12} />
                {t('studentDashboard.grades.toImprove')}
              </p>
              <ul className="space-y-1">
                {improvements.map((s, i) => (
                  <li key={i} className="text-[11px] text-amber-700 dark:text-amber-400 flex items-center gap-1.5">
                    <span className="w-1 h-1 rounded-full bg-amber-500 shrink-0" />
                    {s}
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>
      </div>
    </motion.div>
  );
}

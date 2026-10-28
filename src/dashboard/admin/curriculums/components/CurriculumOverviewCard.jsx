export default function CurriculumOverviewCard({
  curriculum,
  curriculumName,
  totalLevels,
  totalUnits,
  totalFiles,
  isRtl,
}) {
  const desc =
    typeof curriculum?.description === 'object'
      ? (isRtl ? curriculum?.description?.ar : curriculum?.description?.en) || curriculum?.description?.ar
      : curriculum?.description

  const parseLocalizedList = (raw) => {
    if (!raw) return []
    let list = raw
    if (typeof raw === 'object' && !Array.isArray(raw)) {
      list = (isRtl ? raw.ar : raw.en) || raw.ar || raw.en || []
    }
    if (!Array.isArray(list)) {
      if (typeof list === 'string') return [list]
      return []
    }
    return list
      .map((item) => {
        if (typeof item === 'string') return item
        if (typeof item === 'number') return String(item)
        if (typeof item === 'object' && item !== null) {
          return (
            (isRtl
              ? item.ar || item.name || item.title || item.en
              : item.en || item.name || item.title || item.ar) || ''
          )
        }
        return ''
      })
      .filter(Boolean)
  }

  const features = parseLocalizedList(curriculum?.features)
  const benefits = parseLocalizedList(curriculum?.benefitsAfterGraduation)

  return (
    <div className="bg-white dark:bg-slate-900 rounded-3xl border border-slate-100 dark:border-slate-800 p-6 sm:p-8 shadow-xs relative overflow-hidden text-start">
      <div className="absolute top-0 inset-x-0 h-40 bg-gradient-to-b from-[#00594C]/5 to-transparent pointer-events-none" />
      <div className="absolute top-0 end-0 w-80 h-80 bg-[#00594C]/5 dark:bg-emerald-500/5 rounded-full blur-3xl pointer-events-none" />

      <div className="relative z-10 flex flex-col md:flex-row gap-6 lg:gap-8 items-start">
        <div className="w-28 h-28 sm:w-36 sm:h-36 rounded-3xl overflow-hidden shrink-0 border-4 border-slate-100 dark:border-slate-800 shadow-md bg-slate-50 dark:bg-slate-800/80 flex items-center justify-center">
          {curriculum?.image && curriculum.image.trim() !== '' ? (
            <img
              src={curriculum.image}
              alt={curriculumName}
              className="w-full h-full object-cover"
            />
          ) : (
            <div className="w-full h-full bg-[#00594C]/10 text-[#00594C] dark:text-emerald-400 flex items-center justify-center text-5xl font-black">
              {curriculumName?.charAt(0) || 'م'}
            </div>
          )}
        </div>

        <div className="flex-1 space-y-4 w-full">
          <div>
            <div className="flex items-center gap-2.5 flex-wrap mb-2">
              <span className="px-3 py-1 rounded-full text-xs font-bold bg-[#d2ede6] text-[#00594C] dark:bg-emerald-950/70 dark:text-emerald-300">
                {isRtl ? 'منهج تعليمي معتمد' : 'Certified Curriculum'}
              </span>
              <span className="px-3 py-1 rounded-full text-xs font-bold bg-slate-100 text-slate-700 dark:bg-slate-800 dark:text-slate-300">
                {totalLevels} {isRtl ? 'مستويات' : 'Levels'}
              </span>
              <span className="px-3 py-1 rounded-full text-xs font-bold bg-slate-100 text-slate-700 dark:bg-slate-800 dark:text-slate-300">
                {totalUnits} {isRtl ? 'وحدات دراسية' : 'Units'}
              </span>
              <span className="px-3 py-1 rounded-full text-xs font-bold bg-slate-100 text-slate-700 dark:bg-slate-800 dark:text-slate-300">
                {totalFiles} {isRtl ? 'مصادر وملفات' : 'Resources'}
              </span>
            </div>

            <h2 className="text-2xl sm:text-3xl font-black text-slate-800 dark:text-white leading-tight">
              {curriculumName}
            </h2>

            {desc && (
              <p className="text-sm sm:text-base text-slate-600 dark:text-slate-300 leading-relaxed font-medium mt-2 max-w-3xl">
                {desc}
              </p>
            )}
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-4 border-t border-slate-100 dark:border-slate-800">
            {features.length > 0 && (
              <div className="bg-slate-50 dark:bg-slate-800/50 rounded-2xl p-5 border border-slate-100 dark:border-slate-800 space-y-3">
                <h3 className="text-sm font-black text-slate-800 dark:text-white flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-[#00594C]" />
                  <span>{isRtl ? 'مميزات المنهج' : 'Curriculum Features'}</span>
                </h3>
                <ul className="space-y-2">
                  {features.map((feature, idx) => (
                    <li
                      key={idx}
                      className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-600 dark:text-slate-300 font-medium"
                    >
                      <span className="w-5 h-5 rounded-full bg-[#e8f7f3] dark:bg-emerald-950/60 text-[#00594C] dark:text-emerald-400 flex items-center justify-center font-bold text-xs shrink-0 mt-0.5">
                        ✓
                      </span>
                      <span>{String(feature)}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )}

            {benefits.length > 0 && (
              <div className="bg-amber-50/40 dark:bg-amber-950/20 rounded-2xl p-5 border border-amber-100/70 dark:border-amber-900/30 space-y-3">
                <h3 className="text-sm font-black text-amber-900 dark:text-amber-300 flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-amber-500" />
                  <span>{isRtl ? 'شهادات واستفادات بعد التخرج' : 'Certifications & Benefits'}</span>
                </h3>
                <ul className="space-y-2">
                  {benefits.map((benefit, idx) => (
                    <li
                      key={idx}
                      className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-700 dark:text-slate-200 font-semibold bg-white/80 dark:bg-slate-800/80 p-2.5 rounded-xl border border-amber-100/60 dark:border-amber-900/40 shadow-xs"
                    >
                      <span className="text-base shrink-0">🏆</span>
                      <span className="mt-0.5">{String(benefit)}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}

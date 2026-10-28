import { BookOpen, Plus } from 'lucide-react'
import { getCleanId } from '../utils/curriculumDetailsUtils.js'
import CurriculumLevelCard from './CurriculumLevelCard.jsx'

export default function CurriculumLevelsSection({
  levels,
  curriculumName,
  expandedLevels,
  onToggleLevel,
  onEditLevel,
  onDeleteLevel,
  onAddLevel,
  onAddUnit,
  expandedUnits,
  onToggleUnit,
  onEditUnit,
  onDeleteUnit,
  onAddFile,
  onPreviewFile,
  onDownloadFile,
  onDeleteFile,
  isRtl,
}) {
  return (
    <div className="space-y-4">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pt-2 text-start">
        <div>
          <h2 className="text-xl sm:text-2xl font-black text-slate-800 dark:text-white flex items-center gap-2">
            <span>{isRtl ? 'المستويات والوحدات الدراسية' : 'Curriculum Levels & Units'}</span>
            <span className="text-xl">📚</span>
          </h2>
          <p className="text-xs sm:text-sm text-slate-400 font-semibold mt-0.5">
            {isRtl
              ? 'تصفح وإدارة مستويات المنهج والوحدات التعليمية والمصادر المرفقة'
              : 'Browse and manage levels, study units, and uploaded educational resources'}
          </p>
        </div>

        <div className="flex items-center gap-2">
          <span className="px-3.5 py-1.5 rounded-full text-xs font-bold bg-slate-100 text-slate-700 dark:bg-slate-800 dark:text-slate-300 border border-slate-200/60 dark:border-slate-700">
            {levels.length} {isRtl ? 'مستويات مسجلة' : 'Registered Levels'}
          </span>
        </div>
      </div>

      <div className="space-y-4">
        {levels.length === 0 ? (
          <div className="bg-white dark:bg-slate-900 rounded-3xl p-10 text-center border border-slate-100 dark:border-slate-800 shadow-xs space-y-3">
            <BookOpen size={40} className="mx-auto text-slate-300 dark:text-slate-600" />
            <h3 className="text-base font-bold text-slate-700 dark:text-slate-200">
              {isRtl ? 'لا توجد مستويات دراسية مضافة بعد' : 'No study levels added yet'}
            </h3>
            <p className="text-xs text-slate-400 max-w-md mx-auto">
              {isRtl
                ? 'ابدأ بإضافة أول مستوى دراسي لهذا المنهج لإرفاق الوحدات التعليمية والمصادر.'
                : 'Start by adding the first level to this curriculum to attach study units and learning materials.'}
            </p>
          </div>
        ) : (
          levels.map((level, levelIndex) => {
            const rawLevelId = getCleanId(level)
            const levelId = rawLevelId || `temp-${levelIndex}`
            const isExpanded = Boolean(
              expandedLevels[levelId] || (rawLevelId && expandedLevels[rawLevelId])
            )

            return (
              <CurriculumLevelCard
                key={levelId}
                level={level}
                levelIndex={levelIndex}
                isExpanded={isExpanded}
                onToggle={() => onToggleLevel(rawLevelId || levelId)}
                onEditLevel={onEditLevel}
                onDeleteLevel={onDeleteLevel}
                onAddUnit={onAddUnit}
                expandedUnits={expandedUnits}
                onToggleUnit={onToggleUnit}
                onEditUnit={onEditUnit}
                onDeleteUnit={onDeleteUnit}
                onAddFile={onAddFile}
                onPreviewFile={onPreviewFile}
                onDownloadFile={onDownloadFile}
                onDeleteFile={onDeleteFile}
                isRtl={isRtl}
              />
            )
          })
        )}

        <button
          type="button"
          onClick={onAddLevel}
          className="w-full mt-6 py-4 bg-white dark:bg-slate-900 border-2 border-dashed border-slate-200 dark:border-slate-700 rounded-3xl text-slate-600 dark:text-slate-300 hover:text-[#00594C] hover:border-[#00594C] hover:bg-[#00594C]/5 transition-all font-bold flex items-center justify-center gap-2 shadow-xs cursor-pointer"
        >
          <Plus size={20} />
          <span>
            {isRtl ? `إضافة مستوى جديد لـ ${curriculumName}` : `Add new level to ${curriculumName}`}
          </span>
        </button>
      </div>
    </div>
  )
}

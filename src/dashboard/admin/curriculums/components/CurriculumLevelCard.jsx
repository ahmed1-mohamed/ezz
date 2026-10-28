import { motion, AnimatePresence } from 'framer-motion'
import { Pencil, Trash2, ChevronDown, FolderOpen, Plus } from 'lucide-react'
import { getCleanId } from '../utils/curriculumDetailsUtils.js'
import CurriculumFileItem from './CurriculumFileItem.jsx'

export default function CurriculumLevelCard({
  level,
  levelIndex,
  isExpanded,
  onToggle,
  onEditLevel,
  onDeleteLevel,
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
  const rawLevelId = getCleanId(level)
  const levelId = rawLevelId || `temp-${levelIndex}`
  const levelName =
    typeof level === 'object'
      ? (typeof level.name === 'object'
          ? (isRtl ? level.name?.ar : level.name?.en) || level.name?.ar
          : level.name)
      : `مستوى ${levelIndex + 1}`

  const units = typeof level === 'object' ? level.units || [] : []

  return (
    <div className="bg-white dark:bg-slate-900 rounded-3xl border border-slate-100 dark:border-slate-800 shadow-xs overflow-hidden transition-all text-start">
      <div
        className="p-4 sm:p-5 flex flex-wrap sm:flex-nowrap items-center justify-between gap-4 cursor-pointer hover:bg-slate-50/70 dark:hover:bg-slate-800/40 transition-colors"
        onClick={onToggle}
      >
        <div className="flex items-center gap-3.5 w-full sm:w-auto">
          <div className="w-11 h-11 rounded-2xl bg-[#00594C] text-white flex items-center justify-center font-black text-base shrink-0 shadow-xs">
            {levelIndex + 1}
          </div>
          <div>
            <h3 className="text-base sm:text-lg font-black text-slate-800 dark:text-white leading-tight">
              {levelName}
            </h3>
            <p className="text-xs text-[#00594C] dark:text-emerald-400 font-bold mt-0.5">
              {units.length} {isRtl ? 'وحدات دراسية' : 'study units'}
            </p>
          </div>
        </div>

        <div className="flex items-center gap-2.5 ms-auto">
          <div
            className="flex items-center gap-1 bg-slate-50 dark:bg-slate-800/70 rounded-2xl p-1 border border-slate-100 dark:border-slate-700/60"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              type="button"
              onClick={() => onEditLevel(level)}
              className="p-2 text-slate-500 hover:text-blue-600 rounded-xl hover:bg-white dark:hover:bg-slate-700 transition-colors cursor-pointer"
              title={isRtl ? 'تعديل المستوى' : 'Edit Level'}
            >
              <Pencil size={15} />
            </button>
            <button
              type="button"
              onClick={() => onDeleteLevel(level)}
              className="p-2 text-slate-500 hover:text-rose-600 rounded-xl hover:bg-white dark:hover:bg-slate-700 transition-colors cursor-pointer"
              title={isRtl ? 'حذف المستوى' : 'Delete Level'}
            >
              <Trash2 size={15} />
            </button>
          </div>

          <div className="w-9 h-9 rounded-2xl bg-slate-100 dark:bg-slate-800 flex items-center justify-center text-slate-500 hover:text-[#00594C] transition-colors">
            <ChevronDown
              size={18}
              className={`transition-transform duration-300 ${isExpanded ? 'rotate-180' : 'rotate-0'}`}
            />
          </div>
        </div>
      </div>

      <AnimatePresence initial={false}>
        {isExpanded && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.25, ease: 'easeInOut' }}
            className="border-t border-slate-100 dark:border-slate-800 bg-slate-50/60 dark:bg-slate-900/40 p-4 sm:p-6 space-y-4 overflow-hidden"
          >
            {units.length === 0 ? (
              <div className="p-6 text-center text-slate-400 text-xs font-bold bg-white dark:bg-slate-800/50 rounded-2xl border border-dashed border-slate-200 dark:border-slate-700">
                <FolderOpen size={24} className="mx-auto mb-1 text-slate-300 dark:text-slate-600" />
                <p>{isRtl ? 'لا توجد وحدات دراسية مضافة في هذا المستوى' : 'No units added in this level'}</p>
              </div>
            ) : (
              units.map((unit, unitIndex) => {
                const rawUnitId = getCleanId(unit)
                const unitId = rawUnitId || `temp-${unitIndex}`
                const unitName =
                  typeof unit === 'object'
                    ? (typeof unit.name === 'object'
                        ? (isRtl ? unit.name?.ar : unit.name?.en) || unit.name?.ar
                        : unit.name)
                    : `وحدة ${unitIndex + 1}`
                const isUnitExpanded = Boolean(
                  expandedUnits[unitId] || (rawUnitId && expandedUnits[rawUnitId])
                )
                const files = typeof unit === 'object' ? unit.files || [] : []

                return (
                  <div
                    key={unitId}
                    className="bg-white dark:bg-slate-900 border border-slate-200/80 dark:border-slate-800 rounded-2xl overflow-hidden shadow-xs"
                  >
                    <div
                      className="p-3.5 sm:p-4 flex flex-wrap sm:flex-nowrap items-center justify-between gap-3 cursor-pointer hover:bg-slate-50/70 dark:hover:bg-slate-800/40 transition-colors"
                      onClick={() => onToggleUnit(rawUnitId || unitId)}
                    >
                      <div className="flex items-center gap-3 w-full sm:w-auto">
                        <div className="w-8 h-8 rounded-xl bg-[#e8f7f3] dark:bg-emerald-950/60 text-[#00594C] dark:text-emerald-400 flex items-center justify-center font-bold text-xs shrink-0">
                          {unitIndex + 1}
                        </div>
                        <div>
                          <h4 className="text-sm sm:text-base font-bold text-slate-800 dark:text-slate-200">
                            {unitName}
                          </h4>
                          <span className="text-[11px] font-semibold text-slate-400">
                            {files.length} {isRtl ? 'مصادر ومحتويات' : 'resources'}
                          </span>
                        </div>
                      </div>

                      <div className="flex items-center gap-2 ms-auto">
                        <div className="flex items-center gap-1" onClick={(e) => e.stopPropagation()}>
                          <button
                            type="button"
                            onClick={() => onEditUnit(unit, rawLevelId || levelId)}
                            className="p-1.5 text-slate-400 hover:text-blue-500 rounded-lg hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors cursor-pointer"
                            title={isRtl ? 'تعديل الوحدة' : 'Edit Unit'}
                          >
                            <Pencil size={14} />
                          </button>
                          <button
                            type="button"
                            onClick={() => onDeleteUnit(unit, rawLevelId || levelId)}
                            className="p-1.5 text-slate-400 hover:text-rose-500 rounded-lg hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors cursor-pointer"
                            title={isRtl ? 'حذف الوحدة' : 'Delete Unit'}
                          >
                            <Trash2 size={14} />
                          </button>
                        </div>
                        <div className="w-7 h-7 rounded-lg bg-slate-50 dark:bg-slate-800 flex items-center justify-center text-slate-400 ml-1">
                          <ChevronDown
                            size={15}
                            className={`transition-transform duration-300 ${
                              isUnitExpanded ? 'rotate-180' : 'rotate-0'
                            }`}
                          />
                        </div>
                      </div>
                    </div>

                    <AnimatePresence initial={false}>
                      {isUnitExpanded && (
                        <motion.div
                          initial={{ opacity: 0, height: 0 }}
                          animate={{ opacity: 1, height: 'auto' }}
                          exit={{ opacity: 0, height: 0 }}
                          transition={{ duration: 0.2, ease: 'easeInOut' }}
                          className="border-t border-slate-100 dark:border-slate-800 p-4 space-y-3 bg-slate-50/60 dark:bg-slate-900/60 overflow-hidden"
                        >
                          {files.length > 0 ? (
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                              {files.map((file, fileIdx) => (
                                <CurriculumFileItem
                                  key={getCleanId(file) || `file-${fileIdx}`}
                                  file={file}
                                  fileIdx={fileIdx}
                                  isRtl={isRtl}
                                  onPreview={onPreviewFile}
                                  onDownload={onDownloadFile}
                                  onDelete={() =>
                                    onDeleteFile(file, rawLevelId || levelId, rawUnitId || unitId)
                                  }
                                />
                              ))}
                            </div>
                          ) : (
                            <div className="text-center py-4 text-xs text-slate-400 font-semibold bg-white dark:bg-slate-800/40 rounded-xl border border-dashed border-slate-200 dark:border-slate-700">
                              {isRtl
                                ? 'لا توجد مصادر أو ملفات مضافة في هذه الوحدة'
                                : 'No resources in this unit'}
                            </div>
                          )}

                          <button
                            type="button"
                            onClick={() => onAddFile(level, unit)}
                            className="w-full py-3 border-2 border-dashed border-slate-200/90 dark:border-slate-700 rounded-xl text-slate-500 hover:text-[#00594C] hover:border-[#00594C] hover:bg-[#00594C]/5 transition-all text-xs font-bold flex items-center justify-center gap-2 cursor-pointer"
                          >
                            <Plus size={14} />
                            <span>
                              {isRtl ? 'إضافة مصادر ومحتوى للوحدة' : 'Add resources and content to unit'}
                            </span>
                          </button>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                )
              })
            )}

            <button
              type="button"
              onClick={() => onAddUnit(rawLevelId || levelId)}
              className="w-full py-3.5 border-2 border-dashed border-slate-200 dark:border-slate-700 rounded-2xl text-slate-600 dark:text-slate-300 hover:text-[#00594C] hover:border-[#00594C] hover:bg-[#00594C]/5 transition-all text-xs sm:text-sm font-bold flex items-center justify-center gap-2 cursor-pointer shadow-xs"
            >
              <Plus size={16} />
              <span>
                {isRtl ? 'إضافة وحدة دراسية جديدة لهذا المستوى' : 'Add new unit to this level'}
              </span>
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}

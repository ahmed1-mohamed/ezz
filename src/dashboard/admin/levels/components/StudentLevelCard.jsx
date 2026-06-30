import { useTranslation } from 'react-i18next'
import { GraduationCap, Trash2, Pencil, ChevronDown, ChevronUp, Check, X, Plus } from 'lucide-react'

export default function StudentLevelCard({
  lvl,
  isExpanded,
  onToggleExpand,
  onToggleVisibility,
  onEdit,
  onDelete,
  // Step Handlers
  addingStepLevelId,
  setAddingStepLevelId,
  newStepTitle,
  setNewStepTitle,
  editingStepId,
  setEditingStepId,
  editingStepTitle,
  setEditingStepTitle,
  handleAddStepSubmit,
  handleStartEditStep,
  handleSaveEditStepSubmit,
  handleDeleteStep
}) {
  const { i18n } = useTranslation()
  const isRtl = i18n.language.startsWith('ar')

  const isAddingStep = addingStepLevelId === lvl.id

  return (
    <div
      className={`bg-white dark:bg-slate-900 rounded-3xl border shadow-soft transition-all ${
        lvl.isVisible
          ? 'border-slate-100 dark:border-slate-800/80'
          : 'border-slate-100 dark:border-slate-800/80 opacity-60'
      }`}
    >
      <div
        className={`flex items-center justify-between p-6 select-none ${
          isExpanded ? 'border-b border-slate-100 dark:border-slate-800/60' : ''
        }`}
      >
        <div className="flex items-center gap-4">
          <div className="flex items-center gap-2">
            <span className="text-xs font-bold text-slate-400 dark:text-slate-500">
              {isRtl ? 'عرض المستوى' : 'Display Level'}
            </span>
            <label className="relative inline-flex items-center cursor-pointer">
              <input
                type="checkbox"
                checked={lvl.isVisible}
                onChange={() => onToggleVisibility(lvl.id)}
                className="sr-only peer"
              />
              <div className="w-11 h-6 bg-slate-200 peer-focus:outline-none rounded-full peer dark:bg-slate-700 peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-white after:border-slate-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-slate-600 peer-checked:bg-[#005953]" />
            </label>
          </div>

          <span className="text-slate-200 dark:text-slate-800">|</span>

          {/* Actions (Delete, Edit) */}
          <div className="flex items-center gap-2.5">
            <button
              type="button"
              onClick={() => onDelete(lvl.id)}
              className="p-1.5 text-slate-400 hover:text-rose-500 hover:bg-rose-50 dark:hover:bg-rose-950/20 rounded-lg transition-all cursor-pointer"
              title={isRtl ? 'حذف المستوى الدراسي' : 'Delete level'}
            >
              <Trash2 size={16} />
            </button>
            <button
              type="button"
              onClick={() => onEdit(lvl)}
              className="p-1.5 text-slate-400 hover:text-brand-500 hover:bg-slate-50 dark:hover:bg-slate-850 rounded-lg transition-all cursor-pointer"
              title={isRtl ? 'تعديل البيانات' : 'Edit level metadata'}
            >
              <Pencil size={16} />
            </button>
          </div>

          <span className="text-slate-200 dark:text-slate-800">|</span>

          {/* Accordion Toggle Arrow */}
          <button
            type="button"
            onClick={() => onToggleExpand(lvl.id)}
            className="p-1.5 text-slate-400 hover:text-slate-650 hover:bg-slate-50 dark:hover:bg-slate-850 rounded-lg transition-all cursor-pointer"
          >
            {isExpanded ? <ChevronUp size={16} /> : <ChevronDown size={16} />}
          </button>
        </div>

        {/* Right Side Header Detail (RTL: Right) */}
        <div className="flex items-center gap-4">
          <div className="text-end">
            <h3 className="text-base font-bold text-slate-800 dark:text-white">
              {isRtl ? lvl.name : lvl.nameEn}
            </h3>
            <span className="text-xs font-bold text-slate-400 dark:text-slate-500 mt-0.5 block">
              {lvl.steps?.length || 0} {isRtl ? 'درجات' : 'Grades'}
            </span>
          </div>

          <div className="w-12 h-12 bg-amber-50 dark:bg-amber-955/10 rounded-2xl flex items-center justify-center text-amber-600 shrink-0 shadow-sm border border-amber-100/50">
            <GraduationCap size={22} />
          </div>
        </div>
      </div>

      {/* Accordion Expanded Step List Content */}
      {isExpanded && (
        <div className="p-6 bg-slate-50/20 dark:bg-slate-950/10 rounded-b-3xl space-y-4">
          {lvl.description && (
            <p className="text-xs text-slate-450 dark:text-slate-500 text-start leading-relaxed max-w-2xl">
              {isRtl ? lvl.description : lvl.descriptionEn}
            </p>
          )}

          {/* Modules list inside level */}
          <div className="space-y-2.5">
            {lvl.steps?.map((step, index) => {
              const isEditingThisStep = editingStepId === step.id

              return (
                <div
                  key={step.id}
                  className="flex items-center justify-between p-3.5 bg-white dark:bg-slate-900 border border-slate-100/80 dark:border-slate-850/60 rounded-2xl shadow-sm hover:scale-[1.002] transition-transform"
                >
                  {/* Step Edit/Delete Action Controls */}
                  <div className="flex items-center gap-2">
                    {isEditingThisStep ? (
                      <div className="flex items-center gap-1.5">
                        <button
                          type="button"
                          onClick={() => handleSaveEditStepSubmit(lvl.id, step.id)}
                          className="p-1 bg-emerald-50 text-emerald-600 rounded-lg hover:bg-emerald-100 cursor-pointer"
                        >
                          <Check size={14} />
                        </button>
                        <button
                          type="button"
                          onClick={() => setEditingStepId(null)}
                          className="p-1 bg-slate-100 text-slate-500 rounded-lg hover:bg-slate-200 cursor-pointer"
                        >
                          <X size={14} />
                        </button>
                      </div>
                    ) : (
                      <>
                        <button
                          type="button"
                          onClick={() => handleDeleteStep(lvl.id, step.id)}
                          className="p-1.5 text-slate-350 hover:text-rose-500 hover:bg-rose-50 rounded-lg transition-all cursor-pointer"
                        >
                          <Trash2 size={14} />
                        </button>
                        <button
                          type="button"
                          onClick={() => handleStartEditStep(step)}
                          className="p-1.5 text-slate-350 hover:text-brand-500 hover:bg-slate-50 rounded-lg transition-all cursor-pointer"
                        >
                          <Pencil size={14} />
                        </button>
                      </>
                    )}
                  </div>

                  {/* Step Number Badge & Step Name Text */}
                  <div className="flex items-center gap-3.5">
                    {isEditingThisStep ? (
                      <input
                        type="text"
                        value={editingStepTitle}
                        onChange={(e) => setEditingStepTitle(e.target.value)}
                        className="bg-[#f3f7f6] dark:bg-slate-950 border border-brand-500/20 text-slate-800 dark:text-slate-100 rounded-xl py-1.5 px-3 outline-none text-xs w-48 sm:w-64 font-semibold"
                        autoFocus
                      />
                    ) : (
                      <span className="text-sm font-bold text-slate-700 dark:text-slate-250">
                        {step.title}
                      </span>
                    )}
                    <span className="w-6 h-6 rounded-full bg-slate-100 dark:bg-slate-800 text-slate-500 dark:text-slate-400 flex items-center justify-center font-bold text-xs shrink-0">
                      {index + 1}
                    </span>
                  </div>
                </div>
              )
            })}
          </div>

          {/* Inline Form to add a new step */}
          {isAddingStep ? (
            <div className="flex items-center gap-2 max-w-md pt-2">
              <button
                type="button"
                onClick={() => handleAddStepSubmit(lvl.id)}
                className="px-4 py-2 bg-[#005953] hover:bg-[#004742] text-white text-xs font-bold rounded-xl transition-all cursor-pointer"
              >
                {isRtl ? 'إضافة' : 'Add'}
              </button>
              <button
                type="button"
                onClick={() => setAddingStepLevelId(null)}
                className="p-2 bg-slate-100 hover:bg-slate-200 text-slate-500 rounded-xl cursor-pointer text-xs dark:bg-slate-800 dark:text-slate-300"
              >
                <X size={14} />
              </button>
              <input
                type="text"
                placeholder={isRtl ? 'ادخل اسم الدرجة الدراسية...' : 'Enter grade name...'}
                value={newStepTitle}
                onChange={(e) => setNewStepTitle(e.target.value)}
                className="flex-1 bg-white dark:bg-slate-900 border border-slate-100 dark:border-slate-800 text-slate-850 dark:text-slate-100 rounded-xl py-2 px-3.5 outline-none text-xs font-bold"
                autoFocus
              />
            </div>
          ) : (
            /* "+ اضافه درجه جديدة للمستوى" button */
            <div className="pt-2">
              <button
                type="button"
                onClick={() => {
                  setAddingStepLevelId(lvl.id)
                  setNewStepTitle('')
                }}
                className="px-4 py-2.5 bg-[#005953] hover:bg-[#004742] text-white text-xs font-bold rounded-xl transition-all flex items-center gap-1.5 cursor-pointer shadow-sm active:scale-95"
              >
                <Plus size={13} />
                <span>{isRtl ? 'اضافه درجه جديدة للمستوى' : 'Add New Grade/Step'}</span>
              </button>
            </div>
          )}
        </div>
      )}
    </div>
  )
}

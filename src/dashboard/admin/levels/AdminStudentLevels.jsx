import { useState } from 'react'
import { useTranslation } from 'react-i18next'
import { GraduationCap, Plus, Trash2, Pencil, ChevronDown, ChevronUp, Check, X } from 'lucide-react'

export default function AdminStudentLevels() {
  const { i18n } = useTranslation()
  const isRtl = i18n.language.startsWith('ar')

  // Mock initial levels data with grades (steps/modules)
  const [levels, setLevels] = useState([
    {
      id: 1,
      name: 'المستوى الأول',
      nameEn: 'Level One',
      description: 'أساسيات التجويد ومخارج الحروف الصحيحة للأطفال المبتدئين',
      descriptionEn: 'Basics of Tajweed and correct articulation for beginner children',
      isVisible: true,
      steps: [
        { id: 101, title: 'مقدمة في علم التجويد' },
        { id: 102, title: 'مخارج الحروف والصفات' },
        { id: 103, title: 'أحكام النون الساكنة والتنوين' },
        { id: 104, title: 'أحكام الميم الساكنة' },
        { id: 105, title: 'المدود وأنواعها البسيطة' },
        { id: 106, title: 'تطبيقات عملية على سورة الفاتحة' }
      ]
    },
    {
      id: 2,
      name: 'المستوى الثاني',
      nameEn: 'Level Two',
      description: 'تطبيق التلاوة الصحيحة والقاعدة النورانية وأساسيات التجويد والترتيل',
      descriptionEn: 'Applying correct recitation, Al-Qaida Al-Noorania, and fundamentals of Tajweed',
      isVisible: true,
      steps: [
        { id: 201, title: 'القاعدة النورانية' },
        { id: 202, title: 'أحكام التجويد الأساسية' }
      ]
    }
  ])

  // Form states for Add/Edit Level
  const [showForm, setShowForm] = useState(false)
  const [editingLevelId, setEditingLevelId] = useState(null)
  const [levelName, setLevelName] = useState('')
  const [levelDescription, setLevelDescription] = useState('')

  // Expanded card accordions state (storing level IDs)
  const [expandedLevels, setExpandedLevels] = useState({ 2: true }) // Level 2 expanded by default as in screenshot

  // State for adding a new step inline
  const [addingStepLevelId, setAddingStepLevelId] = useState(null)
  const [newStepTitle, setNewStepTitle] = useState('')

  // State for editing a step inline
  const [editingStepId, setEditingStepId] = useState(null)
  const [editingStepTitle, setEditingStepTitle] = useState('')

  const toggleAccordion = (levelId) => {
    setExpandedLevels((prev) => ({
      ...prev,
      [levelId]: !prev[levelId]
    }))
  }

  const handleToggleVisibility = (levelId) => {
    setLevels((prev) =>
      prev.map((lvl) => (lvl.id === levelId ? { ...lvl, isVisible: !lvl.isVisible } : lvl))
    )
  }

  const handleSaveLevel = (e) => {
    e.preventDefault()
    if (!levelName.trim()) {
      alert(isRtl ? 'الرجاء إدخال اسم المستوى الدراسي!' : 'Please enter the level name!')
      return
    }

    if (editingLevelId) {
      // Edit level
      setLevels((prev) =>
        prev.map((lvl) =>
          lvl.id === editingLevelId
            ? {
                ...lvl,
                name: levelName,
                description: levelDescription
              }
            : lvl
        )
      )
      setEditingLevelId(null)
    } else {
      // Add level
      const newLevel = {
        id: Date.now(),
        name: levelName,
        nameEn: levelName,
        description: levelDescription,
        descriptionEn: levelDescription,
        isVisible: true,
        steps: []
      }
      setLevels((prev) => [...prev, newLevel])
    }

    // Reset form
    setLevelName('')
    setLevelDescription('')
    setShowForm(false)
  }

  const handleEditLevelClick = (lvl) => {
    setEditingLevelId(lvl.id)
    setLevelName(lvl.name)
    setLevelDescription(lvl.description || '')
    setShowForm(true)
  }

  const handleDeleteLevel = (levelId) => {
    if (confirm(isRtl ? 'هل أنت متأكد من حذف هذا المستوى بالكامل؟' : 'Are you sure you want to delete this level entirely?')) {
      setLevels((prev) => prev.filter((lvl) => lvl.id !== levelId))
    }
  }

  // --- Step Management Handlers ---

  const handleAddStepSubmit = (levelId) => {
    if (!newStepTitle.trim()) return
    setLevels((prev) =>
      prev.map((lvl) => {
        if (lvl.id === levelId) {
          return {
            ...lvl,
            steps: [...lvl.steps, { id: Date.now(), title: newStepTitle }]
          }
        }
        return lvl
      })
    )
    setNewStepTitle('')
    setAddingStepLevelId(null)
  }

  const handleStartEditStep = (step) => {
    setEditingStepId(step.id)
    setEditingStepTitle(step.title)
  }

  const handleSaveEditStepSubmit = (levelId, stepId) => {
    if (!editingStepTitle.trim()) return
    setLevels((prev) =>
      prev.map((lvl) => {
        if (lvl.id === levelId) {
          return {
            ...lvl,
            steps: lvl.steps.map((st) => (st.id === stepId ? { ...st, title: editingStepTitle } : st))
          }
        }
        return lvl
      })
    )
    setEditingStepId(null)
    setEditingStepTitle('')
  }

  const handleDeleteStep = (levelId, stepId) => {
    if (confirm(isRtl ? 'هل أنت متأكد من حذف هذه الدرجة/المرحلة؟' : 'Are you sure you want to delete this step?')) {
      setLevels((prev) =>
        prev.map((lvl) => {
          if (lvl.id === levelId) {
            return {
              ...lvl,
              steps: lvl.steps.filter((st) => st.id !== stepId)
            }
          }
          return lvl
        })
      )
    }
  }

  return (
    <div className="space-y-8 p-1 md:p-6 text-start animate-fadeIn" dir={isRtl ? 'rtl' : 'ltr'}>
      
      {/* 1. Header with title & add button */}
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
        <div>
          <h1 className="text-2xl font-bold text-slate-800 dark:text-white">
            {isRtl ? 'مستويات الطلاب' : 'Student Levels'}
          </h1>
          <p className="text-sm text-slate-400 dark:text-slate-500 mt-1">
            {isRtl ? 'منارة العز أكاديمي · لوحة الإدارة' : 'Ezz Academy · Admin Dashboard'}
          </p>
        </div>

        <button
          type="button"
          onClick={() => {
            setShowForm(!showForm)
            setEditingLevelId(null)
            setLevelName('')
            setLevelDescription('')
          }}
          className="px-5 py-3 bg-[#005953] hover:bg-[#004742] text-white rounded-2xl text-sm font-semibold transition-all shadow-md flex items-center gap-2 cursor-pointer self-start sm:self-center hover:scale-102 active:scale-95"
        >
          <Plus size={16} />
          <span>{isRtl ? 'إضافة مستوى' : 'Add Level'}</span>
        </button>
      </div>

      {/* 2. Add / Edit Level Form Card */}
      {showForm && (
        <form
          onSubmit={handleSaveLevel}
          className="bg-white dark:bg-slate-900 rounded-3xl border border-slate-100 dark:border-slate-800/80 p-6 shadow-soft space-y-5 animate-slideDown max-w-4xl mx-auto"
        >
          <h3 className="text-base font-bold text-slate-800 dark:text-white border-b border-slate-100 dark:border-slate-800/60 pb-3">
            {editingLevelId
              ? (isRtl ? 'تعديل المستوى الدراسي' : 'Edit Academic Level')
              : (isRtl ? 'إضافة مستوى دراسي للطلاب جديد' : 'Add New Academic Level')}
          </h3>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            <div>
              <label className="block text-xs font-bold text-slate-500 dark:text-slate-400 mb-1.5">
                {isRtl ? 'اسم المستوى' : 'Level Name'}
              </label>
              <input
                type="text"
                required
                value={levelName}
                onChange={(e) => setLevelName(e.target.value)}
                className="w-full bg-[#f3f7f6] dark:bg-slate-950 border border-transparent focus:border-brand-500/20 focus:bg-white text-slate-850 dark:text-slate-105 rounded-2xl py-3 px-4 outline-none transition-all text-sm placeholder-slate-400"
                placeholder={isRtl ? 'مثل: المستوى الأول' : 'e.g. Level One'}
              />
            </div>
            <div>
              <label className="block text-xs font-bold text-slate-500 dark:text-slate-400 mb-1.5">
                {isRtl ? 'الوصف' : 'Description'}
              </label>
              <input
                type="text"
                value={levelDescription}
                onChange={(e) => setLevelDescription(e.target.value)}
                className="w-full bg-[#f3f7f6] dark:bg-slate-950 border border-transparent focus:border-brand-500/20 focus:bg-white text-slate-850 dark:text-slate-105 rounded-2xl py-3 px-4 outline-none transition-all text-sm placeholder-slate-400"
                placeholder={isRtl ? 'وصف مختصر للمستوى' : 'Brief description of the level'}
              />
            </div>
          </div>

          <div className="flex justify-end gap-3 pt-2">
            <button
              type="button"
              onClick={() => {
                setShowForm(false)
                setEditingLevelId(null)
              }}
              className="px-5 py-2.5 bg-slate-100 hover:bg-slate-200 text-slate-700 font-bold text-xs rounded-xl transition-all cursor-pointer dark:bg-slate-800 dark:text-slate-300"
            >
              {isRtl ? 'إلغاء' : 'Cancel'}
            </button>
            <button
              type="submit"
              className="px-6 py-2.5 bg-[#005953] hover:bg-[#004742] text-white font-bold text-xs rounded-xl transition-all cursor-pointer shadow-sm active:scale-95"
            >
              {editingLevelId
                ? (isRtl ? 'حفظ التغييرات' : 'Save Changes')
                : (isRtl ? 'إضافة' : 'Add')}
            </button>
          </div>
        </form>
      )}

      {/* List section title */}
      <div className="text-start">
        <h2 className="text-base font-bold text-slate-800 dark:text-white">
          {isRtl ? 'مستويات الطلاب المتاحة' : 'Available Student Levels'}
        </h2>
      </div>

      {/* 3. Levels Accordion Cards List */}
      <div className="space-y-5">
        {levels.map((lvl) => {
          const isExpanded = !!expandedLevels[lvl.id]
          const isAddingStep = addingStepLevelId === lvl.id

          return (
            <div
              key={lvl.id}
              className={`bg-white dark:bg-slate-900 rounded-3xl border shadow-soft transition-all ${
                lvl.isVisible
                  ? 'border-slate-100 dark:border-slate-800/80'
                  : 'border-slate-100 dark:border-slate-800/80 opacity-60'
              }`}
            >
              {/* Card Header Section */}
              <div
                className={`flex items-center justify-between p-6 select-none ${
                  isExpanded ? 'border-b border-slate-100 dark:border-slate-800/60' : ''
                }`}
              >
                {/* Left Side Controls (RTL: Left) */}
                <div className="flex items-center gap-4">
                  {/* Visibility Toggle Switch */}
                  <div className="flex items-center gap-2">
                    <span className="text-xs font-bold text-slate-400 dark:text-slate-500">
                      {isRtl ? 'عرض المستوى' : 'Display Level'}
                    </span>
                    <label className="relative inline-flex items-center cursor-pointer">
                      <input
                        type="checkbox"
                        checked={lvl.isVisible}
                        onChange={() => handleToggleVisibility(lvl.id)}
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
                      onClick={() => handleDeleteLevel(lvl.id)}
                      className="p-1.5 text-slate-400 hover:text-rose-500 hover:bg-rose-50 dark:hover:bg-rose-950/20 rounded-lg transition-all cursor-pointer"
                      title={isRtl ? 'حذف المستوى الدراسي' : 'Delete level'}
                    >
                      <Trash2 size={16} />
                    </button>
                    <button
                      type="button"
                      onClick={() => handleEditLevelClick(lvl)}
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
                    onClick={() => toggleAccordion(lvl.id)}
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
                      {lvl.steps.length} {isRtl ? 'درجات' : 'Grades'}
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
                    {lvl.steps.map((step, index) => {
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
        })}
      </div>
      
    </div>
  )
}

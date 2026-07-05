import { useMemo } from 'react'
import { Upload } from 'lucide-react'
import SelectField from './fields/SelectField'

const SUBJECTS = ['القرآن الكريم', 'اللغة العربية', 'التجويد', 'التفسير', 'العقيدة']
const LEVELS = ['مبتدئ', 'متوسطة', 'متقدم']
const GROUP_TYPES = ['مجموعة', 'خاصة']
const LANGUAGES = ['العربية', 'الإنجليزية', 'الفرنسية']
const MAX_STUDENTS = [3, 4, 5, 6, 7, 8, 10, 12, 15]
const STATUSES = ['نشط', 'متوقف', 'مكتمل']
const MOCK_TEACHERS = [
  { id: 1, name: 'أحمد علي محمد' },
  { id: 2, name: 'عائشة محمود' },
  { id: 3, name: 'فاطمة الزهراء' },
  { id: 4, name: 'محمد إبراهيم' },
]

export default function GroupInfoCard({
  formData,
  handleChange,
  handleImageSelect,
  fileInputRef,
  isRtl,
  t,
  isEditing
}) {
  const initial = formData.name ? formData.name.trim().charAt(0) : 'م'

  const getSubjectLabel = (subj) => {
    const map = {
      'القرآن الكريم': t('adminDashboard.groups.subjects.quran', 'القرآن الكريم'),
      'اللغة العربية': t('adminDashboard.groups.subjects.arabic', 'اللغة العربية'),
      'التجويد': t('adminDashboard.groups.subjects.tajweed', 'التجويد'),
      'التفسير': t('adminDashboard.groups.subjects.tafseer', 'التفسير'),
      'العقيدة': t('adminDashboard.groups.subjects.aqeedah', 'العقيدة'),
    }
    return map[subj] || subj
  }

  const getLevelLabel = (lvl) => {
    const map = {
      'مبتدئ': t('adminDashboard.groups.levels.beginner', 'مبتدئ'),
      'متوسطة': t('adminDashboard.groups.levels.intermediate', 'متوسطة'),
      'متقدم': t('adminDashboard.groups.levels.advanced', 'متقدم'),
    }
    return map[lvl] || lvl
  }

  const getLanguageLabel = (lang) => {
    const map = {
      'العربية': t('adminDashboard.groups.languages.arabic', 'العربية'),
      'الإنجليزية': t('adminDashboard.groups.languages.english', 'الإنجليزية'),
      'الفرنسية': t('adminDashboard.groups.languages.french', 'الفرنسية'),
    }
    return map[lang] || lang
  }

  const getTypeLabel = (type) => {
    const map = {
      'مجموعة': t('adminDashboard.groups.types.group', 'مجموعة'),
      'خاصة': t('adminDashboard.groups.types.private', 'خاصة'),
    }
    return map[type] || type
  }

  const getStatusLabel = (status) => {
    const map = {
      'نشط': t('adminDashboard.groups.statuses.active', 'نشط'),
      'متوقف': t('adminDashboard.groups.statuses.stopped', 'متوقف'),
      'مكتمل': t('adminDashboard.groups.statuses.completed', 'مكتمل'),
    }
    return map[status] || status
  }

  const localizedSubjects = useMemo(() => SUBJECTS.map(s => ({ value: s, label: getSubjectLabel(s) })), [t])
  const localizedLevels = useMemo(() => LEVELS.map(l => ({ value: l, label: getLevelLabel(l) })), [t])
  const localizedLanguages = useMemo(() => LANGUAGES.map(l => ({ value: l, label: getLanguageLabel(l) })), [t])
  const localizedTypes = useMemo(() => GROUP_TYPES.map(tOption => ({ value: tOption, label: getTypeLabel(tOption) })), [t])
  const localizedStatuses = useMemo(() => STATUSES.map(s => ({ value: s, label: getStatusLabel(s) })), [t])

  const localizedMaxStudents = useMemo(() => {
    return MAX_STUDENTS.map(val => ({
      value: String(val),
      label: t('adminDashboard.groups.maxStudentsValue', { defaultValue: '{{count}} طلاب', count: val })
    }))
  }, [t])

  const selectedSubjectLabel = getSubjectLabel(formData.subject)
  const selectedLevelLabel = getLevelLabel(formData.level)
  const selectedLanguageLabel = getLanguageLabel(formData.language)
  const selectedTypeLabel = getTypeLabel(formData.type)
  const selectedStatusLabel = getStatusLabel(formData.status)

  const selectedMaxStudentsLabel = formData.maxStudents
    ? t('adminDashboard.groups.maxStudentsValue', { defaultValue: '{{count}} طلاب', count: formData.maxStudents })
    : ''

  return (
    <div className="bg-white dark:bg-slate-900 rounded-3xl border border-slate-100 dark:border-slate-800/80 p-6 shadow-soft space-y-6">
      <h3 className="text-base font-bold text-slate-800 dark:text-white border-b border-slate-100 dark:border-slate-800/60 pb-3 text-start">
        {isEditing ? t('adminDashboard.groups.editDetails', 'تعديل بيانات المجموعة') : t('adminDashboard.groups.createNewGroup', 'إنشاء مجموعة جديدة')}
      </h3>

      <div className="flex flex-col items-center gap-3">
        <div className="relative">
          <div className="h-20 w-20 rounded-full bg-brand-600 flex items-center justify-center text-white text-2xl font-bold shadow-lg overflow-hidden">
            {formData.image ? (
              <img src={formData.image} alt="" className="w-full h-full object-cover" />
            ) : (
              <span>{initial}</span>
            )}
          </div>
        </div>
        <button
          type="button"
          onClick={() => fileInputRef.current?.click()}
          className="flex items-center gap-2 px-4 py-2 bg-brand-600 hover:bg-brand-700 text-white text-sm font-semibold rounded-xl transition-all cursor-pointer"
        >
          <Upload size={14} />
          <span>{t('adminDashboard.groups.changeImage', 'تغيير صورة المجموعة')}</span>
        </button>
        <p className="text-xs text-slate-400">{t('adminDashboard.groups.imageLimits', 'الحد الأقصى 5 ميجابايت، PNG أو JPG')}</p>
        <input
          ref={fileInputRef}
          type="file"
          className="hidden"
          accept="image/*"
          onChange={handleImageSelect}
        />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
        <div>
          <label className="block text-xs font-bold text-slate-500 dark:text-slate-400 mb-1.5 text-start">
            {t('adminDashboard.groups.nameEn', 'Group Name')}
          </label>
          <input
            type="text"
            value={formData.nameEn}
            onChange={(e) => handleChange('nameEn', e.target.value)}
            placeholder="Quran Group A"
            dir="ltr"
            className="w-full bg-[#f3f7f6] dark:bg-slate-950 border border-transparent focus:border-brand-500/20 focus:bg-white dark:focus:bg-slate-900 text-slate-800 dark:text-slate-100 rounded-2xl py-3 px-4 outline-none transition-all text-sm placeholder-slate-400"
          />
        </div>
        <div>
          <label className="block text-xs font-bold text-slate-500 dark:text-slate-400 mb-1.5 text-start">
            {t('adminDashboard.groups.nameAr', 'اسم المجموعة')}
            <span className="text-red-500 ms-0.5">*</span>
          </label>
          <input
            type="text"
            required
            value={formData.name}
            onChange={(e) => handleChange('name', e.target.value)}
            placeholder={t('adminDashboard.groups.nameArPlaceholder', 'مجموعة القرآن ...')}
            className="w-full bg-[#f3f7f6] dark:bg-slate-950 border border-transparent focus:border-brand-500/20 focus:bg-white dark:focus:bg-slate-900 text-slate-800 dark:text-slate-100 rounded-2xl py-3 px-4 outline-none transition-all text-sm placeholder-slate-400 text-start"
          />
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
        <SelectField
          label={t('adminDashboard.groups.subject', 'المادة')}
          value={selectedSubjectLabel}
          onChange={(val) => handleChange('subject', val)}
          options={localizedSubjects}
          placeholder={t('adminDashboard.groups.subjectPlaceholder', 'اختر المادة')}
          isRtl={isRtl}
        />
        <SelectField
          label={t('adminDashboard.groups.level', 'المستوى')}
          value={selectedLevelLabel}
          onChange={(val) => handleChange('level', val)}
          options={localizedLevels}
          placeholder={t('adminDashboard.groups.levelPlaceholder', 'المستوى الأول')}
          isRtl={isRtl}
        />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
        <SelectField
          label={t('adminDashboard.groups.language', 'اللغة')}
          value={selectedLanguageLabel}
          onChange={(val) => handleChange('language', val)}
          options={localizedLanguages}
          placeholder={t('adminDashboard.groups.languagePlaceholder', 'العربية')}
          isRtl={isRtl}
        />
        <SelectField
          label={t('adminDashboard.groups.groupType', 'نوع المجموعة')}
          value={selectedTypeLabel}
          onChange={(val) => handleChange('type', val)}
          options={localizedTypes}
          placeholder={t('adminDashboard.groups.typePlaceholder', 'خاصة')}
          isRtl={isRtl}
        />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
        <SelectField
          label={t('adminDashboard.groups.teacher', 'المعلم')}
          value={formData.teacher}
          onChange={(val) => {
            handleChange('teacher', typeof val === 'object' ? val.name : val)
            handleChange('teacherId', typeof val === 'object' ? val.id : null)
          }}
          options={MOCK_TEACHERS.map(tOption => ({ value: tOption, label: tOption.name }))}
          placeholder={t('adminDashboard.groups.teacherPlaceholder', 'أحمد علي محمد')}
          isRtl={isRtl}
        />
        <SelectField
          label={t('adminDashboard.groups.maxStudents', 'الحد الأقصى للطلاب')}
          value={selectedMaxStudentsLabel}
          onChange={(val) => handleChange('maxStudents', Number(val))}
          options={localizedMaxStudents}
          placeholder={t('adminDashboard.groups.maxStudentsPlaceholder', '5 طلاب')}
          isRtl={isRtl}
        />
      </div>

      <SelectField
        label={t('adminDashboard.groups.groupStatus', 'حالة المجموعة')}
        value={selectedStatusLabel}
        onChange={(val) => handleChange('status', val)}
        options={localizedStatuses}
        placeholder={t('adminDashboard.groups.statusPlaceholder', 'نشطة')}
        isRtl={isRtl}
      />
    </div>
  )
}
import { useMemo } from 'react'
import { Upload } from 'lucide-react'
import SelectField from './fields/SelectField'

const FALLBACK_COUNTRIES = [
  { id: '6a2d618a65f1cb3419a92672', name: 'جمهورية مصر العربية', flag: '🇪🇬' },
  { id: '6a2d618a65f1cb3419a92732', name: 'المملكة العربية السعودية', flag: '🇸🇦' },
  { id: '6a2d618a65f1cb3419a92674', name: 'الإمارات العربية المتحدة', flag: '🇦🇪' },
  { id: '6a2d618a65f1cb3419a926d7', name: 'العراق', flag: '🇮🇶' },
]

const FALLBACK_CURRICULA = [
  { id: '6a35c80bed7ee094f8cac020', name: 'منهج حفظ القرآن الكريم وتجويده' },
  { id: '6a35c80bed7ee094f8cac021', name: 'برنامج اللغة العربية واللسان المبين' },
  { id: '6a35c80bed7ee094f8cac022', name: 'قصص الأنبياء والآداب الإسلامية' },
]

const FALLBACK_LEVELS = [
  { id: '6a35c80bed7ee094f8cac010', name: 'المستوى التمهيدي - نور البيان' },
  { id: '6a35c80bed7ee094f8cac011', name: 'المستوى الأول - مبادئ القراءة' },
  { id: '6a35c80bed7ee094f8cac012', name: 'المستوى المتقدم - الإجازة' },
]

const FALLBACK_TEACHERS = [
  { id: '6a35c80bed7ee094f8cacfbe', name: 'الشيخ عبد الرحمن السديس' },
  { id: '6a35c80bed7ee094f8cacfbf', name: 'أ. د. محمد سالم الشنقيطي' },
  { id: '6a35c80bed7ee094f8cacfc0', name: 'الشيخ عبد الله بن علي البصري' },
  { id: '6a35c80bed7ee094f8cacfc1', name: 'أ. فاطمة الزهراء الشريف' },
]

const GROUP_TYPES = [
  { value: 'group', ar: 'مجموعة', en: 'Group' },
  { value: 'private', ar: 'خاصة', en: 'Private' },
]

const LANGUAGES = ['العربية', 'English', 'الفرنسية']
const MAX_STUDENTS = [3, 4, 5, 6, 7, 8, 10, 12, 15]

export default function GroupInfoCard({
  formData,
  handleChange,
  handleImageSelect,
  fileInputRef,
  countries = [],
  curricula = [],
  levels = [],
  teachers = [],
  isRtl,
  t,
  isEditing,
  errors = {},
}) {
  const initial = formData.name ? formData.name.trim().charAt(0) : 'م'

  // Countries list options
  const countryOptions = useMemo(() => {
    const list = countries.length > 0 ? countries : FALLBACK_COUNTRIES
    return list.map((c) => ({
      value: c.id,
      label: `${c.flag ? c.flag + ' ' : ''}${c.name}`,
    }))
  }, [countries])

  // Curricula options
  const curriculumOptions = useMemo(() => {
    const list = curricula.length > 0 ? curricula : FALLBACK_CURRICULA
    return list.map((c) => ({
      value: c.id || c._id,
      label: typeof c.name === 'object' ? (c.name.ar || c.name.en) : c.name,
    }))
  }, [curricula])

  // Levels options
  const levelOptions = useMemo(() => {
    const list = levels.length > 0 ? levels : FALLBACK_LEVELS
    return list.map((l) => ({
      value: l.id || l._id,
      label: typeof l.name === 'object' ? (l.name.ar || l.name.en) : l.name,
    }))
  }, [levels])

  // Teachers options
  const teacherOptions = useMemo(() => {
    const list = teachers.length > 0 ? teachers : FALLBACK_TEACHERS
    return list.map((tch) => ({
      value: tch.id || tch.teacher_id,
      label: typeof tch.name === 'object' ? (tch.name.ar || tch.name.en) : tch.name,
    }))
  }, [teachers])

  const typeOptions = useMemo(() => {
    return GROUP_TYPES.map((gt) => ({
      value: gt.value,
      label: isRtl ? gt.ar : gt.en,
    }))
  }, [isRtl])

  const maxStudentOptions = useMemo(() => {
    return MAX_STUDENTS.map((num) => ({
      value: num,
      label: `${num} ${t('adminDashboard.groups.students', 'طلاب')}`,
    }))
  }, [t])

  return (
    <div className="bg-white dark:bg-slate-900 rounded-3xl border border-slate-100 dark:border-slate-800/80 p-6 shadow-soft space-y-6">
      <h3 className="text-base font-bold text-slate-800 dark:text-white border-b border-slate-100 dark:border-slate-800/60 pb-3 text-start">
        {isEditing
          ? t('adminDashboard.groups.editDetails', 'تعديل بيانات المجموعة')
          : t('adminDashboard.groups.createNewGroup', 'إنشاء مجموعة جديدة')}
      </h3>

      {/* Image Upload Area */}
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
        <p className="text-xs text-slate-400">
          {t('adminDashboard.groups.imageLimits', 'الحد الأقصى 5 ميجابايت، PNG أو JPG')}
        </p>
        <input
          ref={fileInputRef}
          type="file"
          className="hidden"
          accept="image/*"
          onChange={handleImageSelect}
        />
      </div>

      {/* Group Names (Multilingual: Arabic & English) */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
        <div>
          <label className="block text-xs font-bold text-slate-500 dark:text-slate-400 mb-1.5 text-start">
            {t('adminDashboard.groups.nameAr', 'اسم المجموعة (بالعربية)')}
            <span className="text-red-500 ms-0.5">*</span>
          </label>
          <input
            type="text"
            required
            value={formData.nameAr || formData.name || ''}
            onChange={(e) => {
              handleChange('nameAr', e.target.value)
              handleChange('name', e.target.value)
            }}
            placeholder="مجموعة الإتقان - المستوى الثاني (بنين)"
            dir="rtl"
            className={`w-full bg-[#f3f7f6] dark:bg-slate-950 border ${
              errors.nameAr ? 'border-red-500 bg-red-50/20' : 'border-transparent focus:border-brand-500/20'
            } focus:bg-white dark:focus:bg-slate-900 text-slate-800 dark:text-slate-100 rounded-2xl py-3 px-4 outline-none transition-all text-sm placeholder-slate-400 text-start`}
          />
          {errors.nameAr && <span className="text-xs text-red-500 mt-1 block text-start">{errors.nameAr}</span>}
        </div>

        <div>
          <label className="block text-xs font-bold text-slate-500 dark:text-slate-400 mb-1.5 text-start">
            {t('adminDashboard.groups.nameEn', 'اسم المجموعة (بالإنجليزية)')}
            <span className="text-red-500 ms-0.5">*</span>
          </label>
          <input
            type="text"
            value={formData.nameEn || ''}
            onChange={(e) => handleChange('nameEn', e.target.value)}
            placeholder="Al-Itqan Group - Level 2 (Boys)"
            dir="ltr"
            className={`w-full bg-[#f3f7f6] dark:bg-slate-950 border ${
              errors.nameEn ? 'border-red-500 bg-red-50/20' : 'border-transparent focus:border-brand-500/20'
            } focus:bg-white dark:focus:bg-slate-900 text-slate-800 dark:text-slate-100 rounded-2xl py-3 px-4 outline-none transition-all text-sm placeholder-slate-400 text-start`}
          />
          {errors.nameEn && <span className="text-xs text-red-500 mt-1 block text-start">{errors.nameEn}</span>}
        </div>
      </div>

      {/* Country & Curriculum Select */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
        <SelectField
          label={t('adminDashboard.groups.country', 'الدولة')}
          value={formData.country}
          onChange={(val) => handleChange('country', val)}
          options={countryOptions}
          placeholder={t('adminDashboard.groups.countryPlaceholder', 'اختر الدولة')}
          isRtl={isRtl}
          error={errors.country}
          required
        />

        <SelectField
          label={t('adminDashboard.groups.curriculum', 'المنهج الدراسي')}
          value={formData.curriculum}
          onChange={(val) => handleChange('curriculum', val)}
          options={curriculumOptions}
          placeholder={t('adminDashboard.groups.curriculumPlaceholder', 'اختر المنهج الدراسي')}
          isRtl={isRtl}
          error={errors.curriculum}
          required
        />
      </div>

      {/* Student Level & Teacher Select */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
        <SelectField
          label={t('adminDashboard.groups.studentLevel', 'مستوى الطلاب')}
          value={formData.studentLevel}
          onChange={(val) => handleChange('studentLevel', val)}
          options={levelOptions}
          placeholder={t('adminDashboard.groups.studentLevelPlaceholder', 'اختر المستوى')}
          isRtl={isRtl}
          error={errors.studentLevel}
          required
        />

        <SelectField
          label={t('adminDashboard.groups.teacher', 'المعلم')}
          value={formData.teacher}
          onChange={(val) => handleChange('teacher', val)}
          options={teacherOptions}
          placeholder={t('adminDashboard.groups.teacherPlaceholder', 'اختر المعلم')}
          isRtl={isRtl}
          error={errors.teacher}
          required
        />
      </div>

      {/* Group Type & Language */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
        <SelectField
          label={t('adminDashboard.groups.groupType', 'نوع المجموعة')}
          value={formData.type}
          onChange={(val) => handleChange('type', val)}
          options={typeOptions}
          placeholder={t('adminDashboard.groups.typePlaceholder', 'مجموعة')}
          isRtl={isRtl}
          error={errors.type}
          required
        />

        <SelectField
          label={t('adminDashboard.groups.language', 'اللغة')}
          value={formData.language}
          onChange={(val) => handleChange('language', val)}
          options={LANGUAGES.map((l) => ({ value: l, label: l }))}
          placeholder="العربية"
          isRtl={isRtl}
          error={errors.language}
          required
        />
      </div>

      {/* Max Students & Dates */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
        <SelectField
          label={t('adminDashboard.groups.maxStudents', 'الحد الأقصى للطلاب')}
          value={formData.maxStudents}
          onChange={(val) => handleChange('maxStudents', Number(val))}
          options={maxStudentOptions}
          placeholder="5 طلاب"
          isRtl={isRtl}
          error={errors.maxStudents}
          required
        />

        <div>
          <label className="block text-xs font-bold text-slate-500 dark:text-slate-400 mb-1.5 text-start">
            {t('adminDashboard.groups.startDate', 'تاريخ البدء')}
            <span className="text-red-500 ms-0.5">*</span>
          </label>
          <input
            type="date"
            value={formData.startDate || ''}
            onChange={(e) => handleChange('startDate', e.target.value)}
            className={`w-full bg-[#f3f7f6] dark:bg-slate-950 border ${
              errors.startDate ? 'border-red-500 bg-red-50/20' : 'border-transparent focus:border-brand-500/20'
            } focus:bg-white dark:focus:bg-slate-900 text-slate-800 dark:text-slate-100 rounded-2xl py-2.5 px-4 outline-none transition-all text-sm text-start`}
          />
          {errors.startDate && <span className="text-xs text-red-500 mt-1 block text-start">{errors.startDate}</span>}
        </div>

        <div>
          <label className="block text-xs font-bold text-slate-500 dark:text-slate-400 mb-1.5 text-start">
            {t('adminDashboard.groups.endDate', 'تاريخ الانتهاء')}
            <span className="text-red-500 ms-0.5">*</span>
          </label>
          <input
            type="date"
            value={formData.endDate || ''}
            onChange={(e) => handleChange('endDate', e.target.value)}
            className={`w-full bg-[#f3f7f6] dark:bg-slate-950 border ${
              errors.endDate ? 'border-red-500 bg-red-50/20' : 'border-transparent focus:border-brand-500/20'
            } focus:bg-white dark:focus:bg-slate-900 text-slate-800 dark:text-slate-100 rounded-2xl py-2.5 px-4 outline-none transition-all text-sm text-start`}
          />
          {errors.endDate && <span className="text-xs text-red-500 mt-1 block text-start">{errors.endDate}</span>}
        </div>
      </div>

      {isEditing && (
        <div className="pt-2 border-t border-slate-100 dark:border-slate-800/60">
          <SelectField
            label={t('adminDashboard.groups.statusLabel', 'حالة المجموعة')}
            value={formData.status || 'active'}
            onChange={(val) => handleChange('status', val)}
            options={[
              { value: 'active', label: t('adminDashboard.groups.status.active', 'نشط') },
              { value: 'suspended', label: t('adminDashboard.groups.status.suspended', 'متوقف') },
              { value: 'completed', label: t('adminDashboard.groups.status.completed', 'مكتمل') },
            ]}
            isRtl={isRtl}
          />
        </div>
      )}
    </div>
  )
}
import { useState, useEffect, useMemo } from 'react'
import { Upload } from 'lucide-react'
import SelectField from './fields/SelectField'
import { landingApi } from '@/shared/services/api/landingApi'
import { adminCurriculaApi } from '@/shared/services/api/adminCurriculaApi'
import { adminLevelsApi } from '@/shared/services/api/adminLevelsApi'
import { teachersApi } from '@/shared/services/api/teachersApi'
import { explanationLanguagesApi } from '@/shared/services/api/explanationLanguagesApi'

const GROUP_TYPES = [
  { value: 'group', ar: 'مجموعة', en: 'Group' },
  { value: 'private', ar: 'خاصة', en: 'Private' },
]

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
  languages = [],
  isRtl,
  t,
  isEditing,
  errors = {},
}) {
  const initial = formData.name ? formData.name.trim().charAt(0) : 'م'

  // Internal states to fetch from endpoints if not provided by parent
  const [internalCountries, setInternalCountries] = useState([])
  const [internalCurricula, setInternalCurricula] = useState([])
  const [internalLevels, setInternalLevels] = useState([])
  const [internalTeachers, setInternalTeachers] = useState([])
  const [internalLanguages, setInternalLanguages] = useState([])
  const [isLoadingEndpoints, setIsLoadingEndpoints] = useState(false)

  useEffect(() => {
    let isMounted = true

    const loadMissingOptions = async () => {
      const needCountries = !countries || countries.length === 0
      const needCurricula = !curricula || curricula.length === 0
      const needLevels = !levels || levels.length === 0
      const needTeachers = !teachers || teachers.length === 0
      const needLanguages = !languages || languages.length === 0

      if (!needCountries && !needCurricula && !needLevels && !needTeachers && !needLanguages) {
        return
      }

      setIsLoadingEndpoints(true)
      try {
        const [cRes, curRes, lvlRes, tRes, langRes] = await Promise.allSettled([
          needCountries ? landingApi.fetchCountries() : Promise.resolve(null),
          needCurricula ? adminCurriculaApi.fetchCurricula() : Promise.resolve(null),
          needLevels ? adminLevelsApi.fetchLevels() : Promise.resolve(null),
          needTeachers ? teachersApi.fetchTeachers({ limit: 100 }) : Promise.resolve(null),
          needLanguages ? explanationLanguagesApi.fetchLanguages() : Promise.resolve(null),
        ])

        if (!isMounted) return

        if (cRes.status === 'fulfilled' && cRes.value) {
          const list = cRes.value?.data || (Array.isArray(cRes.value) ? cRes.value : [])
          if (Array.isArray(list) && list.length > 0) setInternalCountries(list)
        }
        if (curRes.status === 'fulfilled' && curRes.value) {
          const list = curRes.value?.data || (Array.isArray(curRes.value) ? curRes.value : [])
          if (Array.isArray(list) && list.length > 0) setInternalCurricula(list)
        }
        if (lvlRes.status === 'fulfilled' && lvlRes.value) {
          const list = lvlRes.value?.data || (Array.isArray(lvlRes.value) ? lvlRes.value : [])
          if (Array.isArray(list) && list.length > 0) setInternalLevels(list)
        }
        if (tRes.status === 'fulfilled' && tRes.value) {
          const list = tRes.value?.data || (Array.isArray(tRes.value) ? tRes.value : [])
          if (Array.isArray(list) && list.length > 0) setInternalTeachers(list)
        }
        if (langRes.status === 'fulfilled' && langRes.value) {
          const list = langRes.value?.data || (Array.isArray(langRes.value) ? langRes.value : [])
          if (Array.isArray(list) && list.length > 0) setInternalLanguages(list)
        }
      } catch (err) {
        console.warn('GroupInfoCard: error fetching endpoint options', err)
      } finally {
        if (isMounted) setIsLoadingEndpoints(false)
      }
    }

    loadMissingOptions()
    return () => {
      isMounted = false
    }
  }, [countries, curricula, levels, teachers, languages])

  const resolvedCountries = (countries && countries.length > 0) ? countries : internalCountries
  const resolvedCurricula = (curricula && curricula.length > 0) ? curricula : internalCurricula
  const resolvedLevels = (levels && levels.length > 0) ? levels : internalLevels
  const resolvedTeachers = (teachers && teachers.length > 0) ? teachers : internalTeachers
  const resolvedLanguages = (languages && languages.length > 0) ? languages : internalLanguages

  // Countries list options
  const countryOptions = useMemo(() => {
    return resolvedCountries.map((c) => {
      const id = c.id || c._id
      const name = typeof c.name === 'object'
        ? (isRtl ? (c.name.ar || c.name.en) : (c.name.en || c.name.ar))
        : (isRtl ? (c.name || c.nameAr) : (c.nameEn || c.name))
      const flag = c.flag ? `${c.flag} ` : ''
      return {
        value: id,
        label: `${flag}${name || id}`,
      }
    })
  }, [resolvedCountries, isRtl])

  // Curricula options
  const curriculumOptions = useMemo(() => {
    return resolvedCurricula.map((c) => {
      const id = c.id || c._id
      const name = typeof c.name === 'object'
        ? (isRtl ? (c.name.ar || c.name.en) : (c.name.en || c.name.ar))
        : (c.name || '')
      return {
        value: id,
        label: name || id,
      }
    })
  }, [resolvedCurricula, isRtl])

  // Selected curriculum object to check for sub-levels
  const selectedCurriculumObj = useMemo(() => {
    if (!formData.curriculum) return null
    return resolvedCurricula.find((c) => (c.id || c._id) === formData.curriculum)
  }, [formData.curriculum, resolvedCurricula])

  // Levels options: if selected curriculum defines levels, use them; otherwise use general levels
  const levelOptions = useMemo(() => {
    const list = (selectedCurriculumObj?.levels && selectedCurriculumObj.levels.length > 0)
      ? selectedCurriculumObj.levels
      : resolvedLevels

    return list.map((l) => {
      const id = l.id || l._id
      const name = typeof l.name === 'object'
        ? (isRtl ? (l.name.ar || l.name.en) : (l.name.en || l.name.ar))
        : (l.name || '')
      return {
        value: id,
        label: name || id,
      }
    })
  }, [selectedCurriculumObj, resolvedLevels, isRtl])

  // Teachers options
  const teacherOptions = useMemo(() => {
    return resolvedTeachers.map((tch) => {
      const id = tch.id || tch.teacher_id || tch._id
      const name = typeof tch.name === 'object'
        ? (isRtl ? (tch.name.ar || tch.name.en) : (tch.name.en || tch.name.ar))
        : (tch.name || '')
      return {
        value: id,
        label: name || id,
      }
    })
  }, [resolvedTeachers, isRtl])

  // Languages options
  const languageOptions = useMemo(() => {
    if (resolvedLanguages.length > 0) {
      return resolvedLanguages.map((l) => {
        const id = l.id || l._id || l.name
        const name = typeof l.name === 'object'
          ? (isRtl ? (l.name.ar || l.name.en) : (l.name.en || l.name.ar))
          : (l.name || '')
        return {
          value: name || id,
          label: name || id,
        }
      })
    }
    return [
      { value: 'العربية', label: isRtl ? 'العربية' : 'Arabic' },
      { value: 'English', label: isRtl ? 'الإنجليزية' : 'English' },
      { value: 'الفرنسية', label: isRtl ? 'الفرنسية' : 'French' },
    ]
  }, [resolvedLanguages, isRtl])

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

      <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
        <SelectField
          label={t('adminDashboard.groups.country', 'الدولة')}
          value={formData.country}
          onChange={(val) => handleChange('country', val)}
          options={countryOptions}
          placeholder={isLoadingEndpoints && countryOptions.length === 0 ? t('common.loading', 'جاري التحميل...') : t('adminDashboard.groups.countryPlaceholder', 'اختر الدولة')}
          isRtl={isRtl}
          error={errors.country}
          required
        />

        <SelectField
          label={t('adminDashboard.groups.curriculum', 'المنهج الدراسي')}
          value={formData.curriculum}
          onChange={(val) => {
            handleChange('curriculum', val)
            // If the current studentLevel does not exist in the new curriculum's levels, clear it
            const newCurriculum = resolvedCurricula.find((c) => (c.id || c._id) === val)
            if (newCurriculum?.levels && newCurriculum.levels.length > 0) {
              const hasCurrentLevel = newCurriculum.levels.some((l) => (l.id || l._id) === formData.studentLevel)
              if (!hasCurrentLevel) {
                handleChange('studentLevel', '')
              }
            }
          }}
          options={curriculumOptions}
          placeholder={isLoadingEndpoints && curriculumOptions.length === 0 ? t('common.loading', 'جاري التحميل...') : t('adminDashboard.groups.curriculumPlaceholder', 'اختر المنهج الدراسي')}
          isRtl={isRtl}
          error={errors.curriculum}
          required
        />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
        <SelectField
          label={t('adminDashboard.groups.studentLevel', 'مستوى الطلاب')}
          value={formData.studentLevel}
          onChange={(val) => handleChange('studentLevel', val)}
          options={levelOptions}
          placeholder={isLoadingEndpoints && levelOptions.length === 0 ? t('common.loading', 'جاري التحميل...') : t('adminDashboard.groups.studentLevelPlaceholder', 'اختر المستوى')}
          isRtl={isRtl}
          error={errors.studentLevel}
          required
        />

        <SelectField
          label={t('adminDashboard.groups.teacher', 'المعلم')}
          value={formData.teacher}
          onChange={(val) => handleChange('teacher', val)}
          options={teacherOptions}
          placeholder={isLoadingEndpoints && teacherOptions.length === 0 ? t('common.loading', 'جاري التحميل...') : t('adminDashboard.groups.teacherPlaceholder', 'اختر المعلم')}
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
          options={languageOptions}
          placeholder={isLoadingEndpoints && languageOptions.length === 0 ? t('common.loading', 'جاري التحميل...') : t('adminDashboard.groups.language', 'اللغة')}
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
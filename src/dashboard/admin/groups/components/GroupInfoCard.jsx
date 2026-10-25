import {  useMemo } from 'react'
import { Upload } from 'lucide-react'
import SelectField from './fields/SelectField'
 import { sortCountries, getCountryName } from '@/shared/utils/countryUtils'

const GROUP_TYPES = [
  { value: 'group', ar: 'عامة', en: 'General' },
  { value: 'private', ar: 'خاصة', en: 'Private' },
]

const MAX_STUDENTS = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 12, 15, 20, 25, 30]

export default function GroupInfoCard({
  formData = {},
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
  const initial = (
    typeof formData.name === 'string'
      ? formData.name.trim()
      : (typeof formData.nameAr === 'string'
          ? formData.nameAr.trim()
          : (typeof formData.name?.ar === 'string' ? formData.name.ar.trim() : 'م'))
  ).charAt(0) || 'م'

  const resolvedCountries = Array.isArray(countries) ? countries : []
  const resolvedCurricula = Array.isArray(curricula) ? curricula : []
  const resolvedLevels = Array.isArray(levels) ? levels : []
  const resolvedTeachers = Array.isArray(teachers) ? teachers : []
  const resolvedLanguages = Array.isArray(languages) ? languages : []

  const countryOptions = useMemo(() => {
    const sorted = sortCountries(resolvedCountries, isRtl)
    return sorted.map((c) => {
      const id = c.id || c._id
      const name = getCountryName(c, isRtl)
      const flag = c.flag ? `${c.flag} ` : ''
      return {
        value: id,
        label: `${flag}${name || id}`,
      }
    })
  }, [resolvedCountries, isRtl])

  const filteredCurricula = useMemo(() => {
    if (!formData.country) return resolvedCurricula
    const selectedCountryId = String(formData.country).trim()
    const selectedCountryObj = resolvedCountries.find(
      (c) => String(c.id || c._id || c.code) === selectedCountryId
    )
    const selectedCode = selectedCountryObj?.code ? String(selectedCountryObj.code).toLowerCase() : ''
    const selectedNameAr = selectedCountryObj?.name?.ar || (typeof selectedCountryObj?.name === 'string' ? selectedCountryObj.name : '')
    const selectedNameEn = selectedCountryObj?.name?.en || ''

    const matched = resolvedCurricula.filter((cur) => {
      if (!cur) return false
      const cCountry = cur.country || cur.countryId || cur.country_id
      if (!cCountry && (!cur.countries || cur.countries.length === 0)) {
        return false
      }
      if (typeof cCountry === 'string' || typeof cCountry === 'number') {
        const valStr = String(cCountry).trim()
        if (valStr === selectedCountryId) return true
        if (selectedCode && valStr.toLowerCase() === selectedCode) return true
        if (selectedNameAr && valStr === selectedNameAr) return true
        if (selectedNameEn && valStr.toLowerCase() === selectedNameEn.toLowerCase()) return true
      }
      if (typeof cCountry === 'object' && cCountry !== null) {
        const cId = String(cCountry.id || cCountry._id || '').trim()
        const cCode = String(cCountry.code || '').toLowerCase()
        if (cId && cId === selectedCountryId) return true
        if (selectedCode && cCode === selectedCode) return true
        const cNameAr = cCountry.name?.ar || (typeof cCountry.name === 'string' ? cCountry.name : '')
        if (selectedNameAr && cNameAr && cNameAr === selectedNameAr) return true
      }
      if (Array.isArray(cur.countries)) {
        return cur.countries.some((cnt) => {
          if (!cnt) return false
          if (typeof cnt === 'string' || typeof cnt === 'number') {
            const valStr = String(cnt).trim()
            return valStr === selectedCountryId || (selectedCode && valStr.toLowerCase() === selectedCode)
          }
          const cntId = String(cnt.id || cnt._id || cnt.code || '').trim()
          return cntId === selectedCountryId || (selectedCode && cntId.toLowerCase() === selectedCode)
        })
      }
      return false
    })

    return matched.length > 0 ? matched : resolvedCurricula
  }, [resolvedCurricula, formData.country, resolvedCountries])

  const curriculumOptions = useMemo(() => {
    return filteredCurricula.map((c) => {
      const id = c.id || c._id
      const name = typeof c.name === 'object'
        ? (isRtl ? (c.name.ar || c.name.en) : (c.name.en || c.name.ar))
        : (c.name || '')
      return {
        value: id,
        label: name || id,
      }
    })
  }, [filteredCurricula, isRtl])

  const selectedCurriculumObj = useMemo(() => {
    if (!formData.curriculum) return null
    return resolvedCurricula.find((c) => (c.id || c._id) === formData.curriculum)
  }, [formData.curriculum, resolvedCurricula])

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

  const filteredTeachers = useMemo(() => {
    const activeTeachers = resolvedTeachers.filter((tch) => {
      if (!tch) return false
      const isActive = tch.active !== false &&
        String(tch.status || '').toLowerCase() !== 'suspended' &&
        String(tch.status || '').toLowerCase() !== 'inactive'
      return isActive
    })

    if (!formData.curriculum) {
      return activeTeachers
    }

    const targetCurriculumId = String(formData.curriculum).trim()
    const targetCurriculumObj = resolvedCurricula.find((c) => String(c.id || c._id) === targetCurriculumId)
    const curNameAr = typeof targetCurriculumObj?.name === 'object' ? targetCurriculumObj?.name?.ar : targetCurriculumObj?.name
    const curNameEn = typeof targetCurriculumObj?.name === 'object' ? targetCurriculumObj?.name?.en : targetCurriculumObj?.name

    const teachingThisCurriculum = activeTeachers.filter((tch) => {
      const specs = Array.isArray(tch.specializations) ? tch.specializations : []
      const currs = Array.isArray(tch.curricula) ? tch.curricula : (tch.curriculum ? [tch.curriculum] : [])
      const subjects = Array.isArray(tch.subjects) ? tch.subjects : (tch.subject ? [tch.subject] : [])

      const matchesItem = (item) => {
        if (!item) return false
        if (typeof item === 'string' || typeof item === 'number') {
          const s = String(item).trim()
          if (s === targetCurriculumId) return true
          if (curNameAr && s === curNameAr) return true
          if (curNameEn && s.toLowerCase() === String(curNameEn).toLowerCase()) return true
          return false
        }
        if (typeof item === 'object') {
          const itemId = String(item.id || item._id || '').trim()
          if (itemId && itemId === targetCurriculumId) return true
          const itemNameAr = item.name?.ar || (typeof item.name === 'string' ? item.name : '')
          const itemNameEn = item.name?.en || ''
          if (curNameAr && itemNameAr && curNameAr === itemNameAr) return true
          if (curNameEn && itemNameEn && curNameEn.toLowerCase() === itemNameEn.toLowerCase()) return true
        }
        return false
      }

      return specs.some(matchesItem) || currs.some(matchesItem) || subjects.some(matchesItem)
    })

    return teachingThisCurriculum.length > 0 ? teachingThisCurriculum : activeTeachers
  }, [resolvedTeachers, formData.curriculum, resolvedCurricula])

  const teacherOptions = useMemo(() => {
    return filteredTeachers.map((tch) => {
      const id = tch.id || tch.teacher_id || tch._id
      const name = typeof tch.name === 'object'
        ? (isRtl ? (tch.name.ar || tch.name.en) : (tch.name.en || tch.name.ar))
        : (tch.displayName || tch.name || '')
      return {
        value: id,
        label: name || id,
      }
    })
  }, [filteredTeachers, isRtl])

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
    return MAX_STUDENTS.map((num) => {
      let label = `${num} ${t('adminDashboard.groups.students', 'طلاب')}`
      if (num === 1) {
        label = isRtl ? 'طالب واحد' : '1 Student'
      } else if (num === 2) {
        label = isRtl ? 'طالبان' : '2 Students'
      } else if (num > 10) {
        label = `${num} ${t('adminDashboard.groups.studentsCount', 'طالباً')}`
      }
      return {
        value: num,
        label,
      }
    })
  }, [t, isRtl])

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
            value={
              typeof formData.nameAr === 'string'
                ? formData.nameAr
                : (typeof formData.name === 'string'
                    ? formData.name
                    : (formData.name?.ar || ''))
            }
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
            value={
              typeof formData.nameEn === 'string'
                ? formData.nameEn
                : (typeof formData.name?.en === 'string' ? formData.name.en : '')
            }
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
          onChange={(val) => {
            handleChange('country', val)
            const countryMatches = resolvedCurricula.filter((cur) => {
              const cCountry = cur.country || cur.countryId
              if (!cCountry) return true
              return String(cCountry.id || cCountry._id || cCountry) === String(val)
            })
            const currentCurStillValid = countryMatches.some((c) => String(c.id || c._id) === String(formData.curriculum))
            if (!currentCurStillValid) {
              handleChange('curriculum', '')
              handleChange('studentLevel', '')
            }
          }}
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

      <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
        <SelectField
          label={t('adminDashboard.groups.groupType', 'نوع المجموعة')}
          value={formData.type || 'group'}
          onChange={(val) => handleChange('type', val)}
          options={typeOptions}
          placeholder={t('adminDashboard.groups.typePlaceholder', 'عامة')}
          isRtl={isRtl}
          error={errors.type}
          required
        />

        <SelectField
          label={t('adminDashboard.groups.language', 'اللغة')}
          value={formData.language || 'العربية'}
          onChange={(val) => handleChange('language', val)}
          options={languageOptions}
          placeholder={isLoadingEndpoints && languageOptions.length === 0 ? t('common.loading', 'جاري التحميل...') : t('adminDashboard.groups.language', 'اللغة')}
          isRtl={isRtl}
          error={errors.language}
          required
        />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
        <SelectField
          label={t('adminDashboard.groups.maxStudents', 'الحد الأقصى للطلاب')}
          value={formData.maxStudents || 5}
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
          </label>
          <input
            type="date"
            value={typeof formData.startDate === 'string' ? formData.startDate : ''}
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
          </label>
          <input
            type="date"
            value={typeof formData.endDate === 'string' ? formData.endDate : ''}
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
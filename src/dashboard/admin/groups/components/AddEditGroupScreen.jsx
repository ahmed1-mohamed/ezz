import React, { useState, useRef, useEffect } from 'react'
import { useTranslation } from 'react-i18next'
import { ArrowRight, ArrowLeft, Loader2 } from 'lucide-react'
import { showErrorToast } from '@/shared/utils/sweetAlert'
import { landingApi } from '@/shared/services/api/landingApi'
import { adminCurriculaApi } from '@/shared/services/api/adminCurriculaApi'
import { adminLevelsApi } from '@/shared/services/api/adminLevelsApi'
import { teachersApi } from '@/shared/services/api/teachersApi'
import { explanationLanguagesApi } from '@/shared/services/api/explanationLanguagesApi'
import { normalizeCountries } from '@/shared/utils/countryUtils'
import GroupInfoCard from './GroupInfoCard'
import GroupScheduleCard from './GroupScheduleCard'

class SafeErrorBoundary extends React.Component {
  constructor(props) {
    super(props)
    this.state = { hasError: false }
  }

  static getDerivedStateFromError() {
    return { hasError: true }
  }

  componentDidCatch(error, errorInfo) {
    console.error('SafeErrorBoundary caught group error:', error, errorInfo)
  }

  render() {
    if (this.state.hasError) {
      return (
        <div className="p-8 bg-white dark:bg-slate-900 rounded-3xl border border-rose-200 dark:border-rose-900/40 text-center space-y-4">
          <p className="text-sm font-bold text-rose-600 dark:text-rose-400">
            حدث خطأ أثناء عرض بيانات المجموعة
          </p>
          <button
            type="button"
            onClick={this.props.onCancel}
            className="px-5 py-2.5 bg-brand-500 hover:bg-brand-600 text-white text-xs font-bold rounded-2xl transition-all cursor-pointer shadow-md shadow-brand-500/20"
          >
            العودة إلى قائمة المجموعات
          </button>
        </div>
      )
    }
    return this.props.children
  }
}

const resolveEntityId = (val) => {
  if (val === null || val === undefined) return ''
  if (typeof val === 'string' || typeof val === 'number') return String(val)
  if (typeof val === 'object') {
    return String(val.id || val._id || val.teacher_id || val.user_id || val.code || val.value || '')
  }
  return ''
}

const safeExtractDateString = (val) => {
  if (!val) return ''
  if (typeof val === 'string') {
    const clean = val.includes('T') ? val.split('T')[0] : val.trim()
    return clean.length >= 8 ? clean : ''
  }
  if (typeof val === 'number' || val instanceof Date) {
    try {
      return new Date(val).toISOString().split('T')[0]
    } catch {
      return ''
    }
  }
  return ''
}

const safeExtractName = (nameVal, lang = 'ar') => {
  if (!nameVal) return ''
  if (typeof nameVal === 'string') return nameVal
  if (typeof nameVal === 'object') {
    return nameVal[lang] || nameVal.ar || nameVal.en || ''
  }
  return String(nameVal)
}

const normalizeScheduleList = (rawList) => {
  if (!Array.isArray(rawList) || rawList.length === 0) {
    return [
      { day: 'sunday', startTime: '16:00', endTime: '17:30' },
      { day: 'tuesday', startTime: '16:00', endTime: '17:30' },
    ]
  }

  const result = rawList.map((s) => {
    if (!s) return null
    let day = 'sunday'
    if (typeof s.day === 'object' && s.day !== null) {
      day = (s.day.key || s.day.en || s.day.ar || 'sunday').toString().toLowerCase()
    } else if (typeof s.day === 'string' && s.day.trim()) {
      day = s.day.trim().toLowerCase()
    }
    const startTime = typeof s.startTime === 'string' ? s.startTime : (s.timeFrom || '16:00')
    const endTime = typeof s.endTime === 'string' ? s.endTime : (s.timeTo || '17:30')
    return { day, startTime, endTime }
  }).filter(Boolean)

  return result.length > 0 ? result : [
    { day: 'sunday', startTime: '16:00', endTime: '17:30' },
    { day: 'tuesday', startTime: '16:00', endTime: '17:30' },
  ]
}

function AddEditGroupScreenContent({ group = null, isRtl, isSaving = false, onSave, onCancel }) {
  const { t, i18n } = useTranslation()
  const isRtlResolved = isRtl !== undefined ? isRtl : i18n.language.startsWith('ar')
  const BackArrow = isRtlResolved ? ArrowRight : ArrowLeft
  const fileInputRef = useRef(null)

  const [formData, setFormData] = useState({
    name: safeExtractName(group?.name, 'ar'),
    nameAr: safeExtractName(group?.name, 'ar') || safeExtractName(group?.nameAr, 'ar'),
    nameEn: safeExtractName(group?.name, 'en') || safeExtractName(group?.nameEn, 'en'),
    country: resolveEntityId(group?.country),
    curriculum: resolveEntityId(group?.curriculum),
    studentLevel: resolveEntityId(group?.studentLevel),
    teacher: resolveEntityId(group?.teacher),
    type: group?.type || 'group',
    language: group?.language || 'العربية',
    maxStudents: group?.maxStudents || 5,
    status: group?.status || 'active',
    startDate: safeExtractDateString(group?.startDate),
    endDate: safeExtractDateString(group?.endDate),
    image: group?.image || null,
  })

  const [schedule, setSchedule] = useState(() => {
    return normalizeScheduleList(group?.weeklySchedule || group?.schedule)
  })

  const [prevGroup, setPrevGroup] = useState(group)

  if (prevGroup !== group) {
    setPrevGroup(group)
    if (group) {
      setFormData({
        name: safeExtractName(group.name, 'ar'),
        nameAr: safeExtractName(group.name, 'ar') || safeExtractName(group.nameAr, 'ar'),
        nameEn: safeExtractName(group.name, 'en') || safeExtractName(group.nameEn, 'en'),
        country: resolveEntityId(group.country),
        curriculum: resolveEntityId(group.curriculum),
        studentLevel: resolveEntityId(group.studentLevel),
        teacher: resolveEntityId(group.teacher),
        type: group.type || 'group',
        language: group.language || 'العربية',
        maxStudents: group.maxStudents || 5,
        status: group.status || 'active',
        startDate: safeExtractDateString(group.startDate),
        endDate: safeExtractDateString(group.endDate),
        image: group.image || null,
      })
      setSchedule(normalizeScheduleList(group.weeklySchedule || group.schedule))
    }
  }

  const [newDay, setNewDay] = useState('sunday')
  const [newTimeFrom, setNewTimeFrom] = useState('16:00')
  const [newTimeTo, setNewTimeTo] = useState('17:30')
  const [errors, setErrors] = useState({})

  const [countries, setCountries] = useState([])
  const [curricula, setCurricula] = useState([])
  const [levels, setLevels] = useState([])
  const [teachers, setTeachers] = useState([])
  const [languages, setLanguages] = useState([])

  useEffect(() => {
    let isMounted = true
    const loadSelectOptions = async () => {
      try {
        const [cRes, curRes, lvlRes, tRes, langRes] = await Promise.allSettled([
          landingApi.fetchCountries(),
          adminCurriculaApi.fetchCurricula(),
          adminLevelsApi.fetchLevels(),
          teachersApi.fetchTeachers({ limit: 100 }),
          explanationLanguagesApi.fetchLanguages(),
        ])

        if (!isMounted) return

        if (cRes.status === 'fulfilled' && cRes.value) {
          const rawList = cRes.value?.data || (Array.isArray(cRes.value) ? cRes.value : [])
          const list = normalizeCountries(rawList)
          if (Array.isArray(list) && list.length > 0) setCountries(list)
        }
        if (curRes.status === 'fulfilled' && curRes.value) {
          const list = curRes.value?.data || (Array.isArray(curRes.value) ? curRes.value : [])
          if (Array.isArray(list) && list.length > 0) setCurricula(list)
        }
        if (lvlRes.status === 'fulfilled' && lvlRes.value) {
          const list = lvlRes.value?.data || (Array.isArray(lvlRes.value) ? lvlRes.value : [])
          if (Array.isArray(list) && list.length > 0) setLevels(list)
        }
        if (tRes.status === 'fulfilled' && tRes.value) {
          const list = tRes.value?.data || (Array.isArray(tRes.value) ? tRes.value : [])
          if (Array.isArray(list) && list.length > 0) setTeachers(list)
        }
        if (langRes.status === 'fulfilled' && langRes.value) {
          const list = langRes.value?.data || (Array.isArray(langRes.value) ? langRes.value : [])
          if (Array.isArray(list) && list.length > 0) setLanguages(list)
        }
      } catch (err) {
        console.warn('Could not load options for group form:', err)
      }
    }

    loadSelectOptions()
    return () => {
      isMounted = false
    }
  }, [])

  const handleChange = (key, value) => {
    setFormData((prev) => ({ ...prev, [key]: value }))
    if (errors[key]) {
      setErrors((prev) => {
        const next = { ...prev }
        delete next[key]
        return next
      })
    }
  }

  const handleImageSelect = (e) => {
    const file = e.target.files[0]
    if (!file) return
    const reader = new FileReader()
    reader.onloadend = () => handleChange('image', reader.result)
    reader.readAsDataURL(file)
  }

  const handleAddSchedule = () => {
    const exists = schedule.find((s) => s.day === newDay && s.startTime === newTimeFrom)
    if (exists) return
    setSchedule((prev) => [...prev, { day: newDay, startTime: newTimeFrom, endTime: newTimeTo }])
    if (errors.schedule) {
      setErrors((prev) => {
        const next = { ...prev }
        delete next.schedule
        return next
      })
    }
  }

  const handleRemoveSchedule = (day, index) => {
    setSchedule((prev) => prev.filter((_, idx) => idx !== index))
  }

  const handleSave = (e) => {
    e.preventDefault()
    const newErrors = {}
    const nameAr = (formData.nameAr || formData.name || '').trim()
    const nameEn = (formData.nameEn || '').trim()

    if (!nameAr) {
      newErrors.nameAr = t('adminDashboard.groups.enterGroupNameArError', 'الرجاء إدخال اسم المجموعة باللغة العربية!')
    }
    if (!nameEn) {
      newErrors.nameEn = t('adminDashboard.groups.enterGroupNameEnError', 'الرجاء إدخال اسم المجموعة باللغة الإنجليزية!')
    }

    if (!formData.country) {
      newErrors.country = t('adminDashboard.groups.selectCountryError', 'الرجاء اختيار الدولة!')
    }
    if (!formData.curriculum) {
      newErrors.curriculum = t('adminDashboard.groups.selectCurriculumError', 'الرجاء اختيار المنهج الدراسي!')
    }
    if (!formData.studentLevel) {
      newErrors.studentLevel = t('adminDashboard.groups.selectLevelError', 'الرجاء اختيار المستوى الدراسي!')
    }
    if (!formData.teacher) {
      newErrors.teacher = t('adminDashboard.groups.selectTeacherError', 'الرجاء اختيار المعلم!')
    }

    const maxStudentsNum = Number(formData.maxStudents)
    if (!formData.maxStudents || isNaN(maxStudentsNum) || maxStudentsNum < 1) {
      newErrors.maxStudents = t('adminDashboard.groups.maxStudentsError', 'الحد الأقصى للطلاب يجب أن يكون 1 على الأقل!')
    }

    if (formData.startDate && formData.endDate && new Date(formData.startDate) > new Date(formData.endDate)) {
      newErrors.endDate = t('adminDashboard.groups.dateOrderError', 'تاريخ الانتهاء يجب أن يكون بعد تاريخ البدء!')
    }

    if (!schedule || schedule.length === 0) {
      newErrors.schedule = t('adminDashboard.groups.scheduleEmptyError', 'الرجاء إضافة موعد واحد على الأقل في الجدول الأسبوعي!')
    } else {
      const invalidSlot = schedule.find((s) => !s.day || !s.startTime || !s.endTime)
      if (invalidSlot) {
        newErrors.schedule = t('adminDashboard.groups.scheduleInvalidError', 'الرجاء التأكد من صحة أوقات الحصص!')
      } else {
        const orderInvalid = schedule.find((s) => s.startTime >= s.endTime)
        if (orderInvalid) {
          newErrors.schedule = t('adminDashboard.groups.scheduleTimeOrderError', 'وقت بداية الحصة يجب أن يكون قبل وقت نهايتها!')
        }
      }
    }

    setErrors(newErrors)

    const firstError = Object.values(newErrors)[0]
    if (firstError) {
      showErrorToast(firstError, isRtlResolved)
      return
    }

    const payload = {
      name: {
        ar: nameAr,
        en: nameEn,
      },
      country: formData.country,
      curriculum: formData.curriculum,
      studentLevel: formData.studentLevel,
      type: formData.type || 'group',
      language: formData.language || 'العربية',
      maxStudents: maxStudentsNum || 1,
      teacher: formData.teacher,
      weeklySchedule: schedule.map((s) => ({
        day: (s.day || '').toLowerCase(),
        startTime: s.startTime || s.timeFrom || '16:00',
        endTime: s.endTime || s.timeTo || '17:30',
      })),
      ...(formData.startDate ? { startDate: formData.startDate } : {}),
      ...(formData.endDate ? { endDate: formData.endDate } : {}),
      ...(group && { status: formData.status || 'active' }),
    }

    onSave(payload)
  }

  return (
    <div className="space-y-6" dir={isRtlResolved ? 'rtl' : 'ltr'}>
      <div className="flex items-center justify-between">
        <button
          type="button"
          onClick={onCancel}
          className="flex items-center gap-2 text-slate-500 hover:text-slate-800 dark:hover:text-white transition-colors cursor-pointer text-sm font-semibold"
        >
          <BackArrow size={18} />
          <span>{t('common.cancel', 'إلغاء')}</span>
        </button>

        <h2 className="text-xl font-bold text-slate-800 dark:text-white">
          {group
            ? t('adminDashboard.groups.editDetails', 'تعديل بيانات المجموعة')
            : t('adminDashboard.groups.createNewGroup', 'إنشاء مجموعة جديدة')}
        </h2>

        <div className="w-16" />
      </div>

      <form onSubmit={handleSave} className="space-y-6">
        <GroupInfoCard
          formData={formData}
          handleChange={handleChange}
          handleImageSelect={handleImageSelect}
          fileInputRef={fileInputRef}
          countries={countries}
          curricula={curricula}
          levels={levels}
          teachers={teachers}
          languages={languages}
          isRtl={isRtlResolved}
          t={t}
          isEditing={Boolean(group)}
          errors={errors}
        />

        <GroupScheduleCard
          schedule={schedule}
          newDay={newDay}
          setNewDay={setNewDay}
          newTimeFrom={newTimeFrom}
          setNewTimeFrom={setNewTimeFrom}
          newTimeTo={newTimeTo}
          setNewTimeTo={setNewTimeTo}
          handleAddSchedule={handleAddSchedule}
          handleRemoveSchedule={handleRemoveSchedule}
          t={t}
          isRtl={isRtlResolved}
          error={errors.schedule}
        />

        <div className="flex items-center justify-end gap-3 pt-2">
          <button
            type="button"
            onClick={onCancel}
            disabled={isSaving}
            className="px-6 py-3 rounded-2xl border border-slate-200 dark:border-slate-800 text-slate-600 dark:text-slate-300 hover:bg-slate-50 dark:hover:bg-slate-800 text-sm font-semibold transition-all cursor-pointer disabled:opacity-50"
          >
            {t('common.cancel', 'إلغاء')}
          </button>
          <button
            type="submit"
            disabled={isSaving}
            className="px-8 py-3 rounded-2xl bg-brand-500 hover:bg-brand-600 text-white text-sm font-bold shadow-lg shadow-brand-500/20 active:scale-95 transition-all cursor-pointer flex items-center justify-center gap-2 disabled:opacity-50"
          >
            {isSaving && <Loader2 className="w-4 h-4 animate-spin" />}
            {group
              ? t('adminDashboard.groups.saveChanges', 'حفظ التعديلات')
              : t('adminDashboard.groups.createButton', 'إنشاء المجموعة')}
          </button>
        </div>
      </form>
    </div>
  )
}

export default function AddEditGroupScreen(props) {
  return (
    <SafeErrorBoundary onCancel={props.onCancel}>
      <AddEditGroupScreenContent {...props} />
    </SafeErrorBoundary>
  )
}
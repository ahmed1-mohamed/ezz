import { useState, useRef, useEffect } from 'react'
import { useTranslation } from 'react-i18next'
import { ArrowRight, ArrowLeft, Loader2 } from 'lucide-react'
import { showErrorToast } from '@/shared/utils/sweetAlert'
import { landingApi } from '@/shared/services/api/landingApi'
import { adminCurriculaApi } from '@/shared/services/api/adminCurriculaApi'
import { adminLevelsApi } from '@/shared/services/api/adminLevelsApi'
import { teachersApi } from '@/shared/services/api/teachersApi'
import GroupInfoCard from './GroupInfoCard'
import GroupScheduleCard from './GroupScheduleCard'

export default function AddEditGroupScreen({ group = null, isRtl, onSave, onCancel }) {
  const { t, i18n } = useTranslation()
  const isRtlResolved = isRtl !== undefined ? isRtl : i18n.language.startsWith('ar')
  const BackArrow = isRtlResolved ? ArrowRight : ArrowLeft
  const fileInputRef = useRef(null)

  const [formData, setFormData] = useState({
    name: typeof group?.name === 'object' ? (group.name.ar || '') : (group?.name || ''),
    nameAr: typeof group?.name === 'object' ? (group.name.ar || '') : (group?.name || ''),
    nameEn: typeof group?.name === 'object' ? (group.name.en || '') : (group?.nameEn || ''),
    country: group?.country?.id || group?.country || '6a2d618a65f1cb3419a92672',
    curriculum: group?.curriculum?.id || group?.curriculum || '6a35c80bed7ee094f8cac020',
    studentLevel: group?.studentLevel?.id || group?.studentLevel || '6a35c80bed7ee094f8cac010',
    teacher: group?.teacher?.id || (typeof group?.teacher === 'string' ? group.teacher : '6a35c80bed7ee094f8cacfbe'),
    type: group?.type || 'group',
    language: group?.language || 'العربية',
    maxStudents: group?.maxStudents || 5,
    status: group?.status || 'active',
    startDate: group?.startDate || '2026-02-01',
    endDate: group?.endDate || '2026-07-31',
    image: group?.image || null,
  })

  const [schedule, setSchedule] = useState(() => {
    if (Array.isArray(group?.weeklySchedule) && group.weeklySchedule.length > 0) {
      return group.weeklySchedule.map((s) => ({
        day: s.day,
        startTime: s.startTime || s.timeFrom || '16:00',
        endTime: s.endTime || s.timeTo || '17:30',
      }))
    }
    if (Array.isArray(group?.schedule) && group.schedule.length > 0) {
      return group.schedule.map((s) => ({
        day: s.day,
        startTime: s.startTime || s.timeFrom || '16:00',
        endTime: s.endTime || s.timeTo || '17:30',
      }))
    }
    return [
      { day: 'sunday', startTime: '16:00', endTime: '17:30' },
      { day: 'tuesday', startTime: '16:00', endTime: '17:30' },
    ]
  })

  const [newDay, setNewDay] = useState('sunday')
  const [newTimeFrom, setNewTimeFrom] = useState('16:00')
  const [newTimeTo, setNewTimeTo] = useState('17:30')
  const [errors, setErrors] = useState({})

  // Dropdown options state
  const [countries, setCountries] = useState([])
  const [curricula, setCurricula] = useState([])
  const [levels, setLevels] = useState([])
  const [teachers, setTeachers] = useState([])
  const [loadingOptions, setLoadingOptions] = useState(true)

  useEffect(() => {
    let isMounted = true
    const loadSelectOptions = async () => {
      try {
        const [cRes, curRes, lvlRes, tRes] = await Promise.allSettled([
          landingApi.fetchCountries(),
          adminCurriculaApi.fetchCurricula(),
          adminLevelsApi.fetchLevels(),
          teachersApi.fetchTeachers({ limit: 100 }),
        ])

        if (!isMounted) return

        if (cRes.status === 'fulfilled' && Array.isArray(cRes.value)) {
          setCountries(cRes.value)
        }
        if (curRes.status === 'fulfilled') {
          const list = curRes.value?.data || (Array.isArray(curRes.value) ? curRes.value : [])
          if (list.length > 0) setCurricula(list)
        }
        if (lvlRes.status === 'fulfilled') {
          const list = lvlRes.value?.data || (Array.isArray(lvlRes.value) ? lvlRes.value : [])
          if (list.length > 0) setLevels(list)
        }
        if (tRes.status === 'fulfilled') {
          const list = tRes.value?.data || (Array.isArray(tRes.value) ? tRes.value : [])
          if (list.length > 0) setTeachers(list)
        }
      } catch (err) {
        console.warn('Could not load options for group form:', err)
      } finally {
        if (isMounted) setLoadingOptions(false)
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

    // 1. Group Names Validation
    if (!nameAr) {
      newErrors.nameAr = t('adminDashboard.groups.enterGroupNameArError', 'الرجاء إدخال اسم المجموعة باللغة العربية!')
    }
    if (!nameEn) {
      newErrors.nameEn = t('adminDashboard.groups.enterGroupNameEnError', 'الرجاء إدخال اسم المجموعة باللغة الإنجليزية!')
    }

    // 2. Selects Validation
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

    // 3. Max Students Validation
    const maxStudentsNum = Number(formData.maxStudents)
    if (!formData.maxStudents || isNaN(maxStudentsNum) || maxStudentsNum < 1) {
      newErrors.maxStudents = t('adminDashboard.groups.maxStudentsError', 'الحد الأقصى للطلاب يجب أن يكون 1 على الأقل!')
    }

    // 4. Dates Validation
    if (!formData.startDate) {
      newErrors.startDate = t('adminDashboard.groups.selectStartDateError', 'الرجاء تحديد تاريخ بدء المجموعة!')
    }
    if (!formData.endDate) {
      newErrors.endDate = t('adminDashboard.groups.selectEndDateError', 'الرجاء تحديد تاريخ انتهاء المجموعة!')
    }
    if (formData.startDate && formData.endDate && new Date(formData.startDate) >= new Date(formData.endDate)) {
      newErrors.endDate = t('adminDashboard.groups.dateOrderError', 'تاريخ الانتهاء يجب أن يكون بعد تاريخ البدء!')
    }

    // 5. Weekly Schedule Validation
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

    // Prepare exact payload for POST / PATCH /api/v1/groups/private
    const payload = {
      name: {
        ar: nameAr,
        en: nameEn,
      },
      country: formData.country || '6a2d618a65f1cb3419a92672',
      curriculum: formData.curriculum,
      studentLevel: formData.studentLevel || '6a35c80bed7ee094f8cac010',
      type: formData.type || 'group',
      language: formData.language || 'العربية',
      maxStudents: maxStudentsNum || 5,
      teacher: formData.teacher,
      weeklySchedule: schedule.map((s) => ({
        day: (s.day || '').toLowerCase(),
        startTime: s.startTime || s.timeFrom || '16:00',
        endTime: s.endTime || s.timeTo || '17:30',
      })),
      startDate: formData.startDate || '2026-02-01',
      endDate: formData.endDate || '2026-07-31',
      status: formData.status || 'active',
    }

    onSave(payload)
  }

  return (
    <div className="space-y-6" dir={isRtlResolved ? 'rtl' : 'ltr'}>
      {/* Header bar */}
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

        {/* Action Buttons */}
        <div className="flex items-center justify-end gap-3 pt-2">
          <button
            type="button"
            onClick={onCancel}
            className="px-6 py-3 rounded-2xl border border-slate-200 dark:border-slate-800 text-slate-600 dark:text-slate-300 hover:bg-slate-50 dark:hover:bg-slate-800 text-sm font-semibold transition-all cursor-pointer"
          >
            {t('common.cancel', 'إلغاء')}
          </button>
          <button
            type="submit"
            className="px-8 py-3 rounded-2xl bg-brand-500 hover:bg-brand-600 text-white text-sm font-bold shadow-lg shadow-brand-500/20 active:scale-95 transition-all cursor-pointer"
          >
            {group
              ? t('adminDashboard.groups.saveChanges', 'حفظ التعديلات')
              : t('adminDashboard.groups.createButton', 'إنشاء المجموعة')}
          </button>
        </div>
      </form>
    </div>
  )
}
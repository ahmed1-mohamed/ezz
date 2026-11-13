import { useState, useEffect, useMemo, useCallback } from 'react'
import { useTranslation } from 'react-i18next'
import toast from 'react-hot-toast'
import api from '@/shared/services/api/axiosConfig'
import { landingApi } from '@/shared/services/api/landingApi'
import { fetchCountries, sortCountries } from '@/shared/utils/countryUtils'
import TestimonialsSection from '@/shared/components/TestimonialsSection.jsx'
import TrialSessionHero from './components/TrialSession/TrialSessionHero.jsx'
import TrialSessionForm from './components/TrialSession/TrialSessionForm.jsx'

export default function TrialSession() {
  const { t, i18n } = useTranslation()
  const isRtl = i18n.language.startsWith('ar')
  const [countriesList, setCountriesList] = useState([])
  const [curriculaList, setCurriculaList] = useState([])
  const [testimonialsList, setTestimonialsList] = useState([])
  const [contactInfo, setContactInfo] = useState(null)
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSuccess, setIsSuccess] = useState(false)
  const [submitError, setSubmitError] = useState('')
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    parentEmail: '',
    country: '',
    phone: '',
    curriculum: '',
    studentAge: '',
    preferredDay: '',
    preferredTime: '',
    notes: '',
  })
  const [errors, setErrors] = useState({})
  useEffect(() => {
    let isMounted = true
    fetchCountries({ sort: 'name' })
      .then((data) => {
        if (!isMounted) return
        const sorted = sortCountries(data, isRtl)
        setCountriesList(sorted)
        if (sorted.length > 0) {
          const defaultC = sorted.find((c) => c.code === 'AE' || c.name?.includes('الإمارات')) || sorted[0]
          setFormData((prev) => ({
            ...prev,
            country: prev.country || defaultC.id || defaultC._id || '',
          }))
        }
      })
      .catch((err) => {
        console.warn('Failed to load countries list:', err)
      })
    api.get('/api/v1/curricula/public', { params: { lang: isRtl ? 'ar' : 'en' } })
      .then((res) => {
        if (!isMounted) return
        const raw = res.data?.data || res.data || []
        const list = Array.isArray(raw) ? raw : []
        if (list.length > 0) {
          const formatted = list
            .map((item) => item?.data || item)
            .filter((c) => Boolean(c && (c.id || c._id)))
            .map((c) => {
              const nameValue = c.name || c.title || ''
              const nameAr = typeof nameValue === 'object' && nameValue !== null
                ? (nameValue.ar || nameValue.en || '')
                : (typeof c.titleAr === 'string' ? c.titleAr : (typeof nameValue === 'string' ? nameValue : ''))
              const nameEn = typeof nameValue === 'object' && nameValue !== null
                ? (nameValue.en || nameAr || '')
                : (typeof c.titleEn === 'string' ? c.titleEn : (typeof nameValue === 'string' ? nameValue : ''))
              return {
                id: String(c.id || c._id),
                name: typeof nameValue === 'string' ? nameValue : (nameAr || nameEn),
                titleAr: nameAr || nameEn || (typeof nameValue === 'string' ? nameValue : ''),
                titleEn: nameEn || nameAr || (typeof nameValue === 'string' ? nameValue : ''),
              }
            })
          if (formatted.length > 0) {
            setCurriculaList(formatted)
          }
        }
      })
      .catch((err) => {
        console.warn('Failed to load curricula list:', err)
      })
    api.get('/api/v1/testimonials/public', { params: { lang: isRtl ? 'ar' : 'en' } })
      .then((res) => {
        if (!isMounted) return
        const raw = res.data?.data || res.data || []
        const list = Array.isArray(raw) ? raw : []
        if (list.length > 0) {
          setTestimonialsList(list)
        }
      })
      .catch((err) => {
        console.warn('Failed to fetch testimonials list:', err)
      })
    landingApi.fetchContactInfo()
      .then((res) => {
        if (!isMounted) return
        const info = res?.data || res || null
        setContactInfo(info)
      })
      .catch((err) => {
        console.warn('Failed to load contact info:', err)
      })
    return () => {
      isMounted = false
    }
  }, [isRtl])
  const selectedCountryCode = useMemo(() => {
    const found = countriesList.find((c) =>
      String(c.id || c._id) === String(formData.country) ||
      String(c.code).toUpperCase() === String(formData.country).toUpperCase()
    )
    return found?.code || 'AE'
  }, [countriesList, formData.country])
  const handleInputChange = useCallback((field, value) => {
    setFormData((prev) => ({ ...prev, [field]: value }))
    setErrors((prev) => {
      if (prev[field]) {
        const copy = { ...prev }
        delete copy[field]
        return copy
      }
      return prev
    })
  }, [])
  const handlePhoneChange = useCallback((newPhone) => {
    handleInputChange('phone', newPhone)
  }, [handleInputChange])
  const validateForm = useCallback(() => {
    const nextErrors = {}
    if (!formData.name.trim() || formData.name.trim().length < 3) {
      nextErrors.name = t('trialSessionLanding.form.errors.nameRequired', 'اسم الطالب مطلوب (3 أحرف على الأقل)')
    }
    if (!formData.email.trim() || !/\S+@\S+\.\S+/.test(formData.email)) {
      nextErrors.email = t('trialSessionLanding.form.errors.emailInvalid', 'يرجى إدخال بريد إلكتروني صحيح للطالب')
    }
    if (!formData.parentEmail.trim() || !/\S+@\S+\.\S+/.test(formData.parentEmail)) {
      nextErrors.parentEmail = t('trialSessionLanding.form.errors.parentEmailInvalid', 'يرجى إدخال بريد إلكتروني صحيح لولي الأمر')
    }
    if (!formData.country) {
      nextErrors.country = t('trialSessionLanding.form.errors.countryRequired', 'يرجى اختيار الدولة')
    }
    if (!formData.phone.trim() || formData.phone.trim().length < 6) {
      nextErrors.phone = t('trialSessionLanding.form.errors.phoneRequired', 'رقم هاتف ولي الأمر مطلوب')
    }
    if (!formData.curriculum) {
      nextErrors.curriculum = t('trialSessionLanding.form.errors.curriculumRequired', 'يرجى اختيار المنهج الدراسي المراد تجربته')
    }
    if (!formData.studentAge || !formData.studentAge.trim()) {
      nextErrors.studentAge = t('trialSessionLanding.form.errors.ageRequired', 'يرجى إدخال عمر الطالب')
    }
    if (!formData.preferredDay) {
      nextErrors.preferredDay = t('trialSessionLanding.form.errors.dayRequired', 'يرجى اختيار اليوم المفضل للحصة')
    }
    if (!formData.preferredTime) {
      nextErrors.preferredTime = t('trialSessionLanding.form.errors.timeRequired', 'يرجى اختيار الوقت المفضل للحصة')
    }
    setErrors(nextErrors)
    return Object.keys(nextErrors).length === 0
  }, [formData, t])
  const executeFormSubmit = useCallback(async (e) => {
    e.preventDefault()
    setSubmitError('')
    if (!validateForm()) {
      toast.error(
        isRtl
          ? 'يرجى استكمال جميع الحقول المطلوبة بشكل صحيح'
          : 'Please complete all required fields correctly'
      )
      return
    }
    setIsSubmitting(true)
    const selectedCountryObj = countriesList.find((c) =>
      String(c.id || c._id) === String(formData.country) ||
      String(c.code).toUpperCase() === String(formData.country).toUpperCase()
    )
    const countryId = selectedCountryObj?.id || selectedCountryObj?._id || formData.country
    const selectedCurr = curriculaList.find((c) => String(c.id) === String(formData.curriculum))
    const currId = selectedCurr?.id || formData.curriculum
    const ageNum = parseInt(formData.studentAge, 10)
    const payload = {
      name: formData.name.trim(),
      email: formData.email.trim(),
      parentEmail: formData.parentEmail.trim(),
      country: countryId,
      phone: formData.phone.trim(),
      curriculum: currId,
      studentAge: isNaN(ageNum) ? 0 : ageNum,
      preferredDay: formData.preferredDay,
      preferredTime: formData.preferredTime,
    }
    if (formData.notes && formData.notes.trim()) {
      payload.notes = formData.notes.trim().slice(0, 500)
    }
    try {
      try {
        await api.post('/api/v1/trial-sessions/website/public', payload)
      } catch (postErr) {
        if (postErr.response?.status === 404) {
          await api.post('/api/v1/trial-sessions/public', payload)
        } else {
          throw postErr
        }
      }
      setIsSuccess(true)
      toast.success(
        isRtl
          ? 'تم إرسال طلب حجز الحصة التجريبية بنجاح!'
          : 'Trial session request submitted successfully!'
      )
      const defaultC = countriesList.find((c) => c.code === 'AE') || countriesList[0]
      setFormData({
        name: '',
        email: '',
        parentEmail: '',
        country: defaultC?.id || defaultC?._id || '',
        phone: '',
        curriculum: '',
        studentAge: '',
        preferredDay: '',
        preferredTime: '',
        notes: '',
      })
    } catch (err) {
      const msg = err.response?.data?.message || err.message || (isRtl ? 'حدث خطأ أثناء إرسال الطلب، يرجى المحاولة لاحقاً' : 'Failed to submit trial session request')
      const formattedMsg = Array.isArray(msg) ? msg.join(', ') : msg
      setSubmitError(formattedMsg)
      toast.error(formattedMsg)
    } finally {
      setIsSubmitting(false)
    }
  }, [formData, countriesList, curriculaList, validateForm, isRtl])
  return (
    <div className="space-y-12 sm:space-y-16 lg:space-y-20 pb-16 font-sans">
      <TrialSessionHero t={t} isRtl={isRtl} />
      <TrialSessionForm
        formData={formData}
        errors={errors}
        isSubmitting={isSubmitting}
        isSuccess={isSuccess}
        submitError={submitError}
        countriesList={countriesList}
        curriculaList={curriculaList}
        selectedCountryCode={selectedCountryCode}
        contactInfo={contactInfo}
        onInputChange={handleInputChange}
        onPhoneChange={handlePhoneChange}
        onSubmit={executeFormSubmit}
        t={t}
        isRtl={isRtl}
      />
      <section className="space-y-6">
        <TestimonialsSection testimonials={testimonialsList} />
      </section>
    </div>
  )
}

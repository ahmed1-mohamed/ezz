import { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { useQuery } from '@tanstack/react-query'
import { toast } from 'react-hot-toast'
import { adminParentsApi } from '@/shared/services/api/adminParentsApi'
import { studentsApi } from '@/shared/services/api/studentsApi'
import {
  sortCountries,
  sortCountryCodes,
  normalizeCountries,
  fetchCountries,
  toDialCodeOptions,
  resolveCountryIdFromLabel,
  splitPhoneNumber,
  joinPhoneNumber,
  DEFAULT_DIAL_CODE
} from '@/shared/utils/countryUtils'
import { getApiErrorText } from '@/shared/utils/errorHandler'
import ParentDetailsHeader from './details/ParentDetailsHeader'
import ParentStatsRow from './details/ParentStatsRow'
import ParentOverviewBanner from './details/ParentOverviewBanner'
import ParentPersonalInfoSection from './details/ParentPersonalInfoSection'
import ParentSecuritySection from './details/ParentSecuritySection'
import ParentChildrenSection from './details/ParentChildrenSection'
import ParentDetailsActions from './details/ParentDetailsActions'

export default function ParentDetailsScreen({
  parent,
  isRtl = true,
  onCancel,
  onSave,
  onToggleActive,
  onChildrenChanged,
}) {
  const navigate = useNavigate()
  const parentId = parent.parent_id || parent.id
  const [isSuspending, setIsSuspending] = useState(false)
  const [isSavingPersonal, setIsSavingPersonal] = useState(false)
  const [isUpdatingPassword, setIsUpdatingPassword] = useState(false)
  const [countriesList, setCountriesList] = useState([])
  const [countryCodesList, setCountryCodesList] = useState([])
  const [isPhoneDropdownOpen, setIsPhoneDropdownOpen] = useState(false)
  const [selectedCountryCode, setSelectedCountryCode] = useState(null)
  const [phoneVal, setPhoneVal] = useState('')
  const [formData, setFormData] = useState({
    name: parent?.name?.ar || '',
    nameEn: parent?.name?.en || '',
    email: parent?.email || '',
    country: '',
    profileImage: parent?.image || null,
    profileImageFile: null,
  })
  const { data: childrenList = [], refetch: refetchChildren } = useQuery({
    queryKey: ['parent-children', parentId],
    queryFn: async () => {
      const res = await studentsApi.fetchAllLocalizedStudents({ limit: 1000 })
      const list = Array.isArray(res?.data) ? res.data : []
      return list.filter((s) => s.parent?.parent_id === parentId)
    },
    enabled: Boolean(parentId),
    staleTime: 60 * 1000,
  })
  useEffect(() => {
    let isMounted = true
    fetchCountries().then((list) => {
      if (!isMounted || list.length === 0) return
      const normalized = normalizeCountries(list)
      const codes = sortCountryCodes(toDialCodeOptions(normalized), isRtl)
      setCountriesList(sortCountries(normalized, isRtl))
      setCountryCodesList(codes)
      const { code, number } = splitPhoneNumber(parent?.phone, codes)
      setPhoneVal(number)
      setSelectedCountryCode(code || codes.find((c) => c.code === DEFAULT_DIAL_CODE) || null)
      const countryId = resolveCountryIdFromLabel(normalized, parent?.country)
      if (countryId) setFormData((prev) => ({ ...prev, country: countryId }))
    })
    return () => {
      isMounted = false
    }
  }, [parent, isRtl])
  const handleFieldChange = (key, value) => {
    setFormData((prev) => ({ ...prev, [key]: value }))
  }
  const handleImageChange = (file) => {
    if (file.size > 5 * 1024 * 1024) {
      toast.error(isRtl ? 'حجم الصورة يجب ألا يتجاوز 5 ميجابايت' : 'Image must be 5MB or less')
      return
    }
    setFormData((prev) => ({ ...prev, profileImage: URL.createObjectURL(file), profileImageFile: file }))
  }
  const handleSavePersonalInfo = async () => {
    const nameAr = formData.name.trim()
    const nameEn = formData.nameEn.trim()
    if (nameAr.length < 2 || nameEn.length < 2) {
      toast.error(isRtl ? 'الرجاء إدخال الاسم بالعربية والإنجليزية (حرفان على الأقل)' : 'Please enter Arabic and English names (min 2 characters)')
      return
    }
    if (!/^\S+@\S+\.\S+$/.test(formData.email.trim())) {
      toast.error(isRtl ? 'الرجاء إدخال بريد إلكتروني صالح' : 'Please enter a valid email')
      return
    }
    const phone = joinPhoneNumber(selectedCountryCode?.code, phoneVal)
    if (!phone) {
      toast.error(isRtl ? 'الرجاء إدخال رقم هاتف صحيح مع مفتاح الدولة' : 'Please enter a valid phone number with country code')
      return
    }
    if (!formData.country) {
      toast.error(isRtl ? 'الرجاء اختيار الدولة' : 'Please select a country')
      return
    }
    setIsSavingPersonal(true)
    try {
      await onSave({
        name: { ar: nameAr, en: nameEn },
        email: formData.email.trim(),
        phone,
        country: formData.country,
        imageFile: formData.profileImageFile,
      })
      setFormData((prev) => ({ ...prev, profileImageFile: null }))
    } catch {
    } finally {
      setIsSavingPersonal(false)
    }
  }
  const handleUpdatePassword = async ({ newPassword, confirmPassword }, resetForm) => {
    if (!newPassword || !confirmPassword) {
      toast.error(isRtl ? 'الرجاء إدخال كلمة المرور الجديدة وتأكيدها' : 'Please enter and confirm new password')
      return
    }
    if (newPassword.length < 6) {
      toast.error(isRtl ? 'كلمة المرور يجب أن لا تقل عن 6 أحرف' : 'Password must be at least 6 characters')
      return
    }
    if (newPassword !== confirmPassword) {
      toast.error(isRtl ? 'كلمتا المرور غير متطابقتين' : 'Passwords do not match')
      return
    }
    if (!parent.user_id) {
      toast.error(isRtl ? 'تعذر تحديد معرّف المستخدم' : 'Could not resolve user ID')
      return
    }
    setIsUpdatingPassword(true)
    try {
      await adminParentsApi.changeParentPassword(parent.user_id, { password: newPassword, confirmPassword })
      toast.success(isRtl ? 'تم تحديث كلمة المرور بنجاح' : 'Password updated successfully')
      if (resetForm) resetForm()
    } catch (err) {
      console.error('Failed to update password:', err)
      toast.error(getApiErrorText(err, isRtl ? 'حدث خطأ أثناء تغيير كلمة المرور' : 'Failed to update password'))
    } finally {
      setIsUpdatingPassword(false)
    }
  }
  const handleAddChildToParent = async (student) => {
    await studentsApi.updateStudent(student.student_id, { parent: parentId })
    await refetchChildren()
    if (onChildrenChanged) onChildrenChanged()
  }
  const handleViewChildDetails = (child) => {
    navigate(`/dashboard/admin/students/${child.id}`)
  }
  const handleToggleSuspend = async () => {
    setIsSuspending(true)
    try {
      await onToggleActive(parent.user_id)
    } finally {
      setIsSuspending(false)
    }
  }
  const displayName = (isRtl ? parent?.name?.ar || parent?.name?.en : parent?.name?.en || parent?.name?.ar) || '-'
  const isSuspended = parent.active === false
  const totalRemaining = childrenList.reduce((sum, child) => {
    const balance = child.sessionsBalance || {}
    return sum + Math.max(0, Number(balance.total || 0) - Number(balance.used || 0))
  }, 0)
  return (
    <div className="space-y-6 pb-12" dir={isRtl ? 'rtl' : 'ltr'}>
      <ParentDetailsHeader
        parentName={displayName}
        isRtl={isRtl}
        isSaving={isSavingPersonal}
        onSave={handleSavePersonalInfo}
        onCancel={onCancel}
      />
      <ParentStatsRow
        totalChildren={childrenList.length}
        remainingSessions={totalRemaining}
        isRtl={isRtl}
      />
      <ParentOverviewBanner
        parent={parent}
        isRtl={isRtl}
        childrenCount={childrenList.length}
      />
      <ParentPersonalInfoSection
        formData={formData}
        handleChange={handleFieldChange}
        isRtl={isRtl}
        selectedCountryCode={selectedCountryCode}
        setSelectedCountryCode={setSelectedCountryCode}
        isPhoneDropdownOpen={isPhoneDropdownOpen}
        setIsPhoneDropdownOpen={setIsPhoneDropdownOpen}
        countryCodesList={countryCodesList}
        countriesList={countriesList}
        phoneVal={phoneVal}
        setPhoneVal={setPhoneVal}
        onImageChange={handleImageChange}
      />
      <ParentSecuritySection
        isRtl={isRtl}
        onUpdatePassword={handleUpdatePassword}
        isUpdatingPassword={isUpdatingPassword}
      />
      <ParentChildrenSection
        childrenList={childrenList}
        isRtl={isRtl}
        onAddChild={handleAddChildToParent}
        onViewChildDetails={handleViewChildDetails}
      />
      <ParentDetailsActions
        isRtl={isRtl}
        isSuspended={isSuspended}
        isSuspending={isSuspending}
        onToggleSuspend={handleToggleSuspend}
      />
    </div>
  )
}

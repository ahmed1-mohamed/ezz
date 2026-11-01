import { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { toast } from 'react-hot-toast'
import { landingApi } from '@/shared/services/api/landingApi'
import { adminParentsApi } from '@/shared/services/api/adminParentsApi'
import { studentsApi } from '@/shared/services/api/studentsApi'
import { sortCountries, sortCountryCodes, normalizeCountries } from '@/shared/utils/countryUtils'
import SendMessageModal from './SendMessageModal'
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
  t,
  onCancel,
  onSave,
  onSendMessage,
  onSuspend,
}) {
  const navigate = useNavigate()

  const [showMessageModal, setShowMessageModal] = useState(false)
  const [isSuspending, setIsSuspending] = useState(false)
  const [isSavingPersonal, setIsSavingPersonal] = useState(false)
  const [isUpdatingPassword, setIsUpdatingPassword] = useState(false)

  const [countriesList, setCountriesList] = useState([])
  const [countryCodesList, setCountryCodesList] = useState([])
  const [isPhoneDropdownOpen, setIsPhoneDropdownOpen] = useState(false)
  const [selectedCountryCode, setSelectedCountryCode] = useState(null)
  const [phoneVal, setPhoneVal] = useState('')
  const [childrenList, setChildrenList] = useState(parent?.children || [])

  const initialNameObj = typeof parent?.name === 'object' ? parent.name : null
  const initialNameAr = parent?.nameAr || (initialNameObj ? initialNameObj.ar : '') || (typeof parent?.name === 'string' ? parent.name : '') || ''
  const initialNameEn = parent?.nameEn || (initialNameObj ? initialNameObj.en : '') || ''
  const initialEmail = parent?.email || parent?.user?.email || parent?.userId?.email || ''

  const [formData, setFormData] = useState({
    name: initialNameAr,
    nameEn: initialNameEn,
    email: initialEmail,
    country: parent?.country || '',
    birthDate: parent?.birthDate || '',
    status: parent?.active === false || parent?.status === 'Expired' ? 'Expired' : 'Active',
    profileImage: parent?.profileImage || parent?.image || null,
    profileImageFile: null,
  })

  useEffect(() => {
    const fetchCountriesData = async () => {
      try {
        const res = await landingApi.fetchCountries()
        const rawCountries = Array.isArray(res) ? res : (res?.data || [])
        const normalized = normalizeCountries(rawCountries)
        if (normalized.length > 0) {
          const sortedC = sortCountries(normalized, isRtl)
          const sortedCodes = sortCountryCodes(
            normalized.map((c) => ({
              code: c.dialCode || c.phoneCode || '',
              flag: c.flag || '🌍',
              name: c.name || '',
              nameEn: c.nameEn || '',
            })).filter((c) => c.code),
            isRtl
          )

          setCountriesList(sortedC)
          setCountryCodesList(sortedCodes)

          const rawPhone = String(parent?.phone || parent?.user?.phone || parent?.userId?.phone || '').trim()
          let prefix = parent?.phonePrefix || ''
          let phonePart = rawPhone

          if (rawPhone) {
            const dialMatch = sortedCodes.find((c) => rawPhone.startsWith(c.code))
            if (dialMatch) {
              prefix = dialMatch.code
              phonePart = rawPhone.slice(prefix.length).trim()
            } else if (rawPhone.includes(' ')) {
              const parts = rawPhone.split(/\s+/)
              prefix = parts[0]
              phonePart = parts.slice(1).join(' ').trim()
            }
          }

          setPhoneVal(phonePart)

          if (prefix) {
            const matchedCountry = sortedCodes.find((c) => c.code === prefix)
            setSelectedCountryCode(matchedCountry || { code: prefix, flag: '🌍', name: prefix })
          } else if (sortedCodes.length > 0) {
            const defaultEgypt = sortedCodes.find((c) => c.code === '+20' || c.code === '+02')
            setSelectedCountryCode(defaultEgypt || sortedCodes[0])
          }

          if (parent?.country) {
            const matched = sortedC.find(
              (c) => c.id === parent.country || c._id === parent.country || c.name === parent.country
            )
            if (matched) {
              setFormData((prev) => ({ ...prev, country: matched.id || matched._id }))
            }
          }
        }
      } catch (err) {
        console.error('Failed to load countries in ParentDetailsScreen:', err)
      }
    }

    fetchCountriesData()
  }, [parent, isRtl])

  useEffect(() => {
    if (parent?.children) {
      setChildrenList(parent.children)
    }
  }, [parent?.children])

  const handleFieldChange = (key, value) => {
    setFormData((prev) => ({ ...prev, [key]: value }))
  }

  const handleImageChange = (file) => {
    const reader = new FileReader()
    reader.onloadend = () => {
      setFormData((prev) => ({
        ...prev,
        profileImage: reader.result,
        profileImageFile: file,
      }))
    }
    reader.readAsDataURL(file)
  }

  const handleSavePersonalInfo = async () => {
    if (!formData.name && !formData.nameEn) {
      toast.error(isRtl ? 'الرجاء إدخال اسم ولي الأمر' : 'Please enter parent name')
      return
    }

    setIsSavingPersonal(true)
    try {
      const cleanPhone = phoneVal.trim()
      const fullPhone = selectedCountryCode?.code
        ? `${selectedCountryCode.code} ${cleanPhone}`.trim()
        : cleanPhone

      const parentId = parent.parent_id || parent._id || parent.id || parent.user_id

      let payload
      if (formData.profileImageFile instanceof File) {
        payload = new FormData()
        payload.append('id', parentId)
        payload.append('name[ar]', formData.name || '')
        payload.append('name[en]', formData.nameEn || '')
        if (fullPhone) payload.append('phone', fullPhone)
        if (formData.country) payload.append('country', formData.country)
        if (formData.birthDate) payload.append('birthDate', formData.birthDate)
        payload.append('image', formData.profileImageFile)
      } else {
        payload = {
          name: {
            ar: formData.name || '',
            en: formData.nameEn || '',
          },
          phone: fullPhone || undefined,
          country: formData.country || undefined,
          birthDate: formData.birthDate || undefined,
        }
      }

      if (onSave) {
        await onSave(payload)
      }
    } catch (err) {
      console.error('Failed to save personal info:', err)
    } finally {
      setIsSavingPersonal(false)
    }
  }

  const handleUpdatePassword = async ({ currentPassword, newPassword, confirmPassword }, resetForm) => {
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

    const userId =
      (typeof parent?.user === 'string' && parent.user) ||
      parent?.user?._id ||
      parent?.user?.id ||
      parent?.user_id ||
      (typeof parent?.userId === 'string' && parent.userId) ||
      parent?.userId?._id ||
      parent?.userId?.id ||
      parent?.parent_id ||
      parent?._id ||
      parent?.id

    if (!userId) {
      toast.error(isRtl ? 'تعذر تحديد معرّف المستخدم' : 'Could not resolve user ID')
      return
    }

    setIsUpdatingPassword(true)
    try {
      await adminParentsApi.changeParentPassword(userId, {
        currentPassword: currentPassword || undefined,
        password: newPassword,
        confirmPassword,
      })
      toast.success(isRtl ? 'تم تحديث كلمة المرور بنجاح' : 'Password updated successfully')
      if (resetForm) resetForm()
    } catch (err) {
      console.error('Failed to update password:', err)
      const msg = err.response?.data?.message
      const errorText = Array.isArray(msg)
        ? msg.join(' - ')
        : (msg || (isRtl ? 'حدث خطأ أثناء تغيير كلمة المرور' : 'Failed to update password'))
      toast.error(errorText)
    } finally {
      setIsUpdatingPassword(false)
    }
  }

  const handleAddChildToParent = async (student) => {
    const parentId = parent.parent_id || parent._id || parent.id || parent.user_id
    const studentId = student.id || student._id || student.student_id

    await studentsApi.updateStudent(studentId, { parent: parentId })
    setChildrenList((prev) => [student, ...prev])
  }

  const handleViewChildDetails = (child) => {
    const childId = child.id || child._id || child.student_id
    if (childId && !String(childId).startsWith('sample-')) {
      navigate(`/dashboard/admin/students/${childId}`)
    } else {
      navigate('/dashboard/admin/students')
    }
  }

  const handleToggleSuspend = async () => {
    const isCurrentlySuspended =
      parent.active === false || parent.status === 'Expired' || parent.status === 'Suspended'
    const confirmMessage = isCurrentlySuspended
      ? (isRtl ? 'هل تريد تفعيل هذا الحساب؟' : 'Are you sure you want to activate this account?')
      : (isRtl ? 'هل أنت متأكد من تعليق هذا الحساب؟' : 'Are you sure you want to suspend this account?')

    if (!window.confirm(confirmMessage)) return

    setIsSuspending(true)
    try {
      const parentId = parent.parent_id || parent._id || parent.id || parent.user_id
      await onSuspend(parentId)
    } finally {
      setIsSuspending(false)
    }
  }

  const displayName = typeof parent?.name === 'object'
    ? (isRtl ? parent.name?.ar || parent.name?.en : parent.name?.en || parent.name?.ar)
    : (parent?.name || (isRtl ? 'خالد المنصور' : 'Khaled Al-Mansour'))

  const isSuspended =
    parent.active === false || parent.status === 'Expired' || parent.status === 'Suspended'

  const totalChildrenCount = childrenList.length > 0 ? childrenList.length : 3

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
        totalChildren={totalChildrenCount}
        rating={parent.rating || '4.8'}
        isRtl={isRtl}
      />

      <ParentOverviewBanner
        parent={parent}
        isRtl={isRtl}
        childrenCount={childrenList.length > 0 ? childrenList.length : 1}
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
        onOpenSendMessage={() => setShowMessageModal(true)}
      />

      {showMessageModal && (
        <SendMessageModal
          parent={parent}
          isRtl={isRtl}
          t={t}
          onClose={() => setShowMessageModal(false)}
          onSend={onSendMessage}
        />
      )}
    </div>
  )
}

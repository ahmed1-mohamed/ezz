import { useState } from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import { useTranslation } from 'react-i18next'
import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query'
import { toast } from 'react-hot-toast'
import axios from 'axios'
import { adminCurriculaApi } from '@/shared/services/api/adminCurriculaApi'
import Spinner from '@/shared/components/Spinner'
import { showDeleteConfirm } from '@/shared/utils/sweetAlert'
import { getCleanId } from './utils/curriculumDetailsUtils.js'
import CurriculumDetailsHeader from './components/CurriculumDetailsHeader.jsx'
import CurriculumOverviewCard from './components/CurriculumOverviewCard.jsx'
import CurriculumLevelsSection from './components/CurriculumLevelsSection.jsx'
import AddEditCurriculumScreen from './components/add_edit/AddEditCurriculumScreen.jsx'
import BasicModal from './components/BasicModal.jsx'
import FileModal from './components/FileModal.jsx'

export default function AdminCurriculumDetails() {
  const { id } = useParams()
  const navigate = useNavigate()
  const { i18n } = useTranslation()
  const isRtl = i18n.language.startsWith('ar')
  const queryClient = useQueryClient()

  const [isEditingCurriculum, setIsEditingCurriculum] = useState(false)
  const [isUpdatingCurriculum, setIsUpdatingCurriculum] = useState(false)

  const [expandedLevels, setExpandedLevels] = useState({})
  const [expandedUnits, setExpandedUnits] = useState({})

  const [modalConfig, setModalConfig] = useState({ isOpen: false, type: null, parentId: null, editingItem: null })
  const [fileModalConfig, setFileModalConfig] = useState({ isOpen: false, levelId: null, unitId: null })

  const { data: responseData, isLoading } = useQuery({
    queryKey: ['admin-curriculum-details', id],
    queryFn: async () => {
      try {
        return await adminCurriculaApi.fetchCurriculumByIdRaw(id)
      } catch (err) {
        console.warn('fetchCurriculumByIdRaw failed, falling back to fetchCurriculumById:', err)
        return await adminCurriculaApi.fetchCurriculumById(id)
      }
    },
  })

  const curriculum = responseData?.data || responseData

  const invalidate = () => queryClient.invalidateQueries({ queryKey: ['admin-curriculum-details', id] })

  const [localVisibility, setLocalVisibility] = useState(null)
  const [isUpdatingVisibility, setIsUpdatingVisibility] = useState(false)

  const showOnWebsite = localVisibility !== null ? localVisibility : Boolean(curriculum?.showOnWebsite)

  const [prevShowOnWebsite, setPrevShowOnWebsite] = useState(curriculum?.showOnWebsite)
  if (prevShowOnWebsite !== curriculum?.showOnWebsite) {
    setPrevShowOnWebsite(curriculum?.showOnWebsite)
    setLocalVisibility(null)
  }

  const handleToggleWebsiteVisibility = async () => {
    if (isUpdatingVisibility || !id) return
    const newValue = !showOnWebsite
    setIsUpdatingVisibility(true)
    setLocalVisibility(newValue)
    try {
      await adminCurriculaApi.updateCurriculum(id, {
        showOnWebsite: newValue,
      })
      toast.success(
        isRtl
          ? newValue
            ? 'تم إظهار المنهج على الموقع الإلكتروني بنجاح'
            : 'تم إخفاء المنهج من الموقع الإلكتروني بنجاح'
          : newValue
          ? 'Curriculum is now visible on website'
          : 'Curriculum is now hidden from website'
      )
      queryClient.setQueryData(['admin-curriculum-details', id], (old) => {
        if (!old) return old
        if (old.data) {
          return { ...old, data: { ...old.data, showOnWebsite: newValue } }
        }
        return { ...old, showOnWebsite: newValue }
      })
      invalidate()
    } catch (err) {
      setLocalVisibility(null)
      console.error('Failed to toggle curriculum visibility:', err)
      const errMsg = err.response?.data?.message
      toast.error(errMsg || (isRtl ? 'حدث خطأ أثناء تغيير حالة الظهور' : 'Failed to update visibility'))
    } finally {
      setIsUpdatingVisibility(false)
    }
  }

  const actionMutation = useMutation({
    mutationFn: async ({ action, payload, ids }) => {
      switch (action) {
        case 'addLevel': return adminCurriculaApi.addLevel(id, payload)
        case 'updateLevel': return adminCurriculaApi.updateLevel(id, ids.levelId, payload)
        case 'deleteLevel': return adminCurriculaApi.deleteLevel(id, ids.levelId)
        case 'addUnit': return adminCurriculaApi.addUnit(id, ids.levelId, payload)
        case 'updateUnit': return adminCurriculaApi.updateUnit(id, ids.levelId, ids.unitId, payload)
        case 'deleteUnit': return adminCurriculaApi.deleteUnit(id, ids.levelId, ids.unitId)
        case 'addFile': return adminCurriculaApi.addFile(id, ids.levelId, ids.unitId, payload)
        case 'deleteFile': return adminCurriculaApi.deleteFile(id, ids.levelId, ids.unitId, ids.fileId)
        default: throw new Error('Unknown action')
      }
    },
    onSuccess: () => {
      invalidate()
      closeModal()
      toast.success(isRtl ? 'تمت العملية بنجاح' : 'Operation successful')
    },
    onError: (err) => {
      console.error(err)
      const errMsg = err.response?.data?.message || err.message
      toast.error(errMsg || (isRtl ? 'حدث خطأ أثناء العملية' : 'Operation failed'))
    },
  })

  const toggleLevel = (levelId) => setExpandedLevels((prev) => ({ ...prev, [levelId]: !prev[levelId] }))
  const toggleUnit = (unitId) => setExpandedUnits((prev) => ({ ...prev, [unitId]: !prev[unitId] }))

  const closeModal = () => {
    setModalConfig({ isOpen: false, type: null, parentId: null, editingItem: null })
    setFileModalConfig({ isOpen: false, levelId: null, unitId: null })
  }

  const handleBasicSubmit = (payload) => {
    const { type, parentId, editingItem } = modalConfig
    if (type === 'level') {
      if (editingItem) actionMutation.mutate({ action: 'updateLevel', ids: { levelId: getCleanId(editingItem) }, payload })
      else actionMutation.mutate({ action: 'addLevel', payload })
    } else if (type === 'unit') {
      if (!parentId) {
        toast.error(isRtl ? 'معرّف المستوى مفقود' : 'Level ID is missing')
        return
      }
      if (editingItem) actionMutation.mutate({ action: 'updateUnit', ids: { levelId: getCleanId(parentId), unitId: getCleanId(editingItem) }, payload })
      else actionMutation.mutate({ action: 'addUnit', ids: { levelId: getCleanId(parentId) }, payload })
    }
  }

  const handleFileSubmit = (formData) => {
    const lId = getCleanId(fileModalConfig.levelId)
    const uId = getCleanId(fileModalConfig.unitId)

    if (!lId) {
      toast.error(isRtl ? 'معرّف المستوى غير صالح أو مفقود' : 'Invalid level ID')
      return
    }
    if (!uId) {
      toast.error(isRtl ? 'معرّف الوحدة غير صالح أو مفقود' : 'Invalid unit ID')
      return
    }

    actionMutation.mutate({ action: 'addFile', ids: { levelId: lId, unitId: uId }, payload: formData })
  }

  const handleDelete = async (type, item, ids = {}) => {
    const itemName = typeof item?.name === 'object' ? (isRtl ? item.name?.ar : item.name?.en) : (typeof item === 'string' ? item : item?.name || '')
    const isConfirmed = await showDeleteConfirm(isRtl, itemName)
    if (!isConfirmed) return

    const itemId = getCleanId(item)

    if (type === 'level') {
      if (!itemId) {
        toast.error(isRtl ? 'معرّف المستوى غير صالح أو مفقود' : 'Invalid level ID')
        return
      }
      actionMutation.mutate({ action: 'deleteLevel', ids: { levelId: itemId } })
    } else if (type === 'unit') {
      const parentLId = getCleanId(ids.levelId)
      if (!itemId) {
        toast.error(isRtl ? 'معرّف الوحدة غير صالح أو مفقود' : 'Invalid unit ID')
        return
      }
      actionMutation.mutate({ action: 'deleteUnit', ids: { levelId: parentLId, unitId: itemId } })
    } else if (type === 'file') {
      const parentLId = getCleanId(ids.levelId)
      const parentUId = getCleanId(ids.unitId)
      actionMutation.mutate({ action: 'deleteFile', ids: { levelId: parentLId, unitId: parentUId, fileId: itemId } })
    }
  }

  const handlePreviewFile = (fullUrl) => {
    if (!fullUrl) {
      toast.error(isRtl ? 'رابط الملف غير متاح' : 'File URL unavailable')
      return
    }
    window.open(fullUrl, '_blank', 'noopener,noreferrer')
  }

  const handleDownloadFile = async (fullUrl, fileName, isLink = false) => {
    if (!fullUrl) {
      toast.error(isRtl ? 'رابط الملف غير متاح' : 'File URL unavailable')
      return
    }

    if (isLink || (!fullUrl.includes('.') && fullUrl.startsWith('http'))) {
      window.open(fullUrl, '_blank', 'noopener,noreferrer')
      return
    }

    const toastId = toast.loading(isRtl ? 'جاري تحميل الملف...' : 'Downloading file...')

    try {
      const response = await axios.get(fullUrl, { responseType: 'blob' })
      const blob = new Blob([response.data], { type: response.headers['content-type'] || 'application/octet-stream' })
      const blobUrl = window.URL.createObjectURL(blob)

      const link = document.createElement('a')
      link.href = blobUrl
      const fallbackName = fullUrl.split('/').pop() || 'download'
      const cleanFileName = fileName
        ? (fileName.includes('.') ? fileName : `${fileName}.${fallbackName.split('.').pop() || 'file'}`)
        : fallbackName
      link.download = cleanFileName
      document.body.appendChild(link)
      link.click()
      document.body.removeChild(link)

      setTimeout(() => {
        window.URL.revokeObjectURL(blobUrl)
      }, 1000)

      toast.success(isRtl ? 'تم تحفيظ الملف على جهازك بنجاح' : 'File saved to your PC successfully', { id: toastId })
    } catch (err) {
      console.warn('Axios blob fetch failed, falling back to direct link download', err)
      toast.dismiss(toastId)
      const a = document.createElement('a')
      a.href = fullUrl
      a.download = fileName || 'download'
      a.target = '_blank'
      a.rel = 'noopener noreferrer'
      document.body.appendChild(a)
      a.click()
      document.body.removeChild(a)
    }
  }

  if (isLoading) {
    return (
      <div className="flex h-[60vh] items-center justify-center">
        <Spinner />
      </div>
    )
  }

  if (!curriculum) {
    return (
      <div className="p-8 text-center text-slate-500">
        {isRtl ? 'المنهج غير موجود' : 'Curriculum not found'}
      </div>
    )
  }

  const curriculumName =
    typeof curriculum.name === 'object'
      ? (isRtl ? curriculum.name?.ar : curriculum.name?.en) || curriculum.name?.ar
      : curriculum.name
  const levels = curriculum.levels || []

  const totalLevels = levels.length
  const totalUnits = levels.reduce((acc, lvl) => acc + (Array.isArray(lvl.units) ? lvl.units.length : 0), 0)
  const totalFiles = levels.reduce((acc, lvl) => {
    if (!Array.isArray(lvl.units)) return acc
    return acc + lvl.units.reduce((uAcc, unit) => uAcc + (Array.isArray(unit.files) ? unit.files.length : 0), 0)
  }, 0)

  const handleSaveCurriculum = async (payload) => {
    try {
      setIsUpdatingCurriculum(true)
      await adminCurriculaApi.updateCurriculum(id, payload)
      toast.success(isRtl ? 'تم تحديث المنهج بنجاح!' : 'Curriculum updated successfully!')
      queryClient.invalidateQueries({ queryKey: ['admin-curriculum-details', id] })
      queryClient.invalidateQueries({ queryKey: ['admin-curricula'] })
      setIsEditingCurriculum(false)
    } catch (err) {
      console.error('Failed to update curriculum from details:', err)
      const errMsg = err.response?.data?.message || err.response?.data?.error || (isRtl ? 'حدث خطأ أثناء تحديث المنهج' : 'Failed to update curriculum')
      toast.error(Array.isArray(errMsg) ? errMsg.join(', ') : errMsg)
    } finally {
      setIsUpdatingCurriculum(false)
    }
  }

  if (isEditingCurriculum) {
    return (
      <AddEditCurriculumScreen
        curriculum={curriculum}
        isRtl={isRtl}
        isSaving={isUpdatingCurriculum}
        onSave={handleSaveCurriculum}
        onCancel={() => setIsEditingCurriculum(false)}
      />
    )
  }

  return (
    <div className="p-4 sm:p-6 md:p-8 max-w-7xl mx-auto space-y-6 animate-fadeIn pb-16" dir={isRtl ? 'rtl' : 'ltr'}>
      <CurriculumDetailsHeader
        curriculumName={curriculumName}
        showOnWebsite={showOnWebsite}
        isUpdatingVisibility={isUpdatingVisibility}
        onToggleWebsiteVisibility={handleToggleWebsiteVisibility}
        onAddLevel={() => setModalConfig({ isOpen: true, type: 'level' })}
        onEditCurriculum={() => setIsEditingCurriculum(true)}
        onBack={() => navigate('/dashboard/admin/curriculums')}
        isRtl={isRtl}
      />

      <CurriculumOverviewCard
        curriculum={curriculum}
        curriculumName={curriculumName}
        totalLevels={totalLevels}
        totalUnits={totalUnits}
        totalFiles={totalFiles}
        isRtl={isRtl}
      />

      <CurriculumLevelsSection
        levels={levels}
        curriculumName={curriculumName}
        expandedLevels={expandedLevels}
        onToggleLevel={toggleLevel}
        onEditLevel={(level) => setModalConfig({ isOpen: true, type: 'level', editingItem: level })}
        onDeleteLevel={(level) => handleDelete('level', level)}
        onAddLevel={() => setModalConfig({ isOpen: true, type: 'level' })}
        onAddUnit={(levelId) => setModalConfig({ isOpen: true, type: 'unit', parentId: levelId })}
        expandedUnits={expandedUnits}
        onToggleUnit={toggleUnit}
        onEditUnit={(unit, parentLevelId) =>
          setModalConfig({ isOpen: true, type: 'unit', parentId: parentLevelId, editingItem: unit })
        }
        onDeleteUnit={(unit, parentLevelId) => handleDelete('unit', unit, { levelId: parentLevelId })}
        onAddFile={(level, unit) => setFileModalConfig({ isOpen: true, levelId: level, unitId: unit })}
        onPreviewFile={handlePreviewFile}
        onDownloadFile={handleDownloadFile}
        onDeleteFile={(file, parentLevelId, parentUnitId) =>
          handleDelete('file', file, { levelId: parentLevelId, unitId: parentUnitId })
        }
        isRtl={isRtl}
      />

      <BasicModal
        isOpen={modalConfig.isOpen}
        onClose={closeModal}
        onSubmit={handleBasicSubmit}
        isSaving={actionMutation.isPending}
        editingItem={modalConfig.editingItem}
        typeName={modalConfig.type === 'level' ? (isRtl ? 'مستوى' : 'Level') : (isRtl ? 'وحدة' : 'Unit')}
        title={
          modalConfig.editingItem
            ? isRtl
              ? 'تعديل البيانات'
              : 'Edit Details'
            : isRtl
            ? 'إضافة جديد'
            : 'Add New'
        }
      />

      <FileModal
        isOpen={fileModalConfig.isOpen}
        onClose={closeModal}
        onSubmit={handleFileSubmit}
        isSaving={actionMutation.isPending}
      />
    </div>
  )
}
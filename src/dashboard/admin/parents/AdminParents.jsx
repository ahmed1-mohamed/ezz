import { useState, useEffect } from 'react'
import { useTranslation } from 'react-i18next'
import { adminParentsApi } from '@/shared/services/api/adminParentsApi'
import ParentsList from './components/ParentsList'
import AddEditParentScreen from './components/AddEditParentScreen'
import ParentDetailsScreen from './components/ParentDetailsScreen'
import Spinner from '@/shared/components/Spinner'

export default function AdminParents() {
  const { t, i18n } = useTranslation()
  const isRtl = i18n.language.startsWith('ar')

  const [viewMode, setViewMode] = useState('list')
  const [parents, setParents] = useState([])
  const [selectedParent, setSelectedParent] = useState(null)
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    async function loadParents() {
      setIsLoading(true)
      try {
        const res = await adminParentsApi.fetchParents()
        if (res.success) setParents(res.data)
      } catch (err) {
        console.error('Failed to fetch parents:', err)
      } finally {
        setIsLoading(false)
      }
    }
    loadParents()
  }, [])

  const handleSaveParent = async (formData) => {
    if (viewMode === 'edit-parent' && selectedParent) {
      try {
        const res = await adminParentsApi.updateParent(selectedParent.id, {
          ...selectedParent,
          ...formData,
        })
        if (res.success) {
          setParents((prev) =>
            prev.map((p) => (p.id === selectedParent.id ? { ...p, ...res.data } : p))
          )
          setSelectedParent(null)
          setViewMode('list')
        }
      } catch (err) {
        console.error('Failed to update parent:', err)
      }
    } else {
      try {
        const res = await adminParentsApi.createParent(formData)
        if (res.success) {
          setParents((prev) => [res.data, ...prev])
          setViewMode('list')
        }
      } catch (err) {
        console.error('Failed to create parent:', err)
      }
    }
  }

  const handleDeleteParent = async (id) => {
    const msg = isRtl
      ? 'هل أنت متأكد من حذف ولي الأمر هذا؟'
      : 'Are you sure you want to delete this parent?'
    if (!window.confirm(msg)) return
    try {
      const res = await adminParentsApi.deleteParent(id)
      if (res.success) {
        setParents((prev) => prev.filter((p) => p.id !== id))
        if (selectedParent?.id === id) {
          setSelectedParent(null)
          setViewMode('list')
        }
      }
    } catch (err) {
      console.error('Failed to delete parent:', err)
    }
  }

  const handleSendMessage = async (parentId, message) => {
    try {
      await adminParentsApi.sendMessage(parentId, message)
    } catch (err) {
      console.error('Failed to send message:', err)
    }
  }

  const handleSuspend = async (id) => {
    try {
      const res = await adminParentsApi.suspendParent(id)
      if (res.success) {
        setParents((prev) =>
          prev.map((p) => (p.id === id ? { ...p, status: 'Expired' } : p))
        )
        setSelectedParent((prev) =>
          prev?.id === id ? { ...prev, status: 'Expired' } : prev
        )
      }
    } catch (err) {
      console.error('Failed to suspend parent:', err)
    }
  }

  const handleOpenEditScreen = (parent) => {
    setSelectedParent(parent)
    setViewMode('edit-parent')
  }

  const handleOpenDetails = (parent) => {
    setSelectedParent(parent)
    setViewMode('view-parent')
  }

  const handleSaveFromDetails = async (formData) => {
    try {
      const res = await adminParentsApi.updateParent(formData.id, formData)
      if (res.success) {
        setParents((prev) =>
          prev.map((p) => (p.id === formData.id ? { ...p, ...res.data } : p))
        )
        setSelectedParent((prev) => ({ ...prev, ...res.data }))
      }
    } catch (err) {
      console.error('Failed to update parent from details:', err)
    }
  }

  if (isLoading) {
    return (
      <div className="flex h-[60vh] items-center justify-center">
        <Spinner />
      </div>
    )
  }

  return (
    <div className="space-y-8 p-1 md:p-6" dir={isRtl ? 'rtl' : 'ltr'}>

      {viewMode === 'list' && (
        <>
          <div className="text-end">
            <h1 className="text-2xl font-bold text-slate-800 dark:text-white">
              {t('adminDashboard.parents.title', 'إدارة أولياء الأمور')}
            </h1>
            <p className="text-sm text-slate-400 dark:text-slate-500 mt-1">
              {t('adminDashboard.parents.subtitle', 'منارة العز أكاديمي · لوحة الإدارة')}
            </p>
          </div>
          <ParentsList
            parents={parents}
            isRtl={isRtl}
            t={t}
            onOpenAddScreen={() => setViewMode('add-parent')}
            onOpenEditScreen={handleOpenEditScreen}
            onOpenDetails={handleOpenDetails}
            onDelete={handleDeleteParent}
          />
        </>
      )}

      {(viewMode === 'add-parent' || viewMode === 'edit-parent') && (
        <AddEditParentScreen
          parent={viewMode === 'edit-parent' ? selectedParent : null}
          isRtl={isRtl}
          t={t}
          onSave={handleSaveParent}
          onCancel={() => {
            setSelectedParent(null)
            setViewMode('list')
          }}
        />
      )}

      {viewMode === 'view-parent' && selectedParent && (
        <ParentDetailsScreen
          parent={selectedParent}
          isRtl={isRtl}
          t={t}
          onCancel={() => {
            setSelectedParent(null)
            setViewMode('list')
          }}
          onSave={handleSaveFromDetails}
          onSendMessage={handleSendMessage}
          onSuspend={handleSuspend}
        />
      )}

    </div>
  )
}

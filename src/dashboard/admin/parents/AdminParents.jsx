import { useState, useEffect } from 'react'
import { useTranslation } from 'react-i18next'
import { adminParentsApi } from '@/shared/services/api/adminParentsApi'
import ParentsList from './components/ParentsList'
import AddEditParentScreen from './components/AddEditParentScreen'
import ParentDetailsScreen from './components/ParentDetailsScreen'
import Spinner from '@/shared/components/Spinner'
import StatsCard from '@/shared/components/StatsCard'
import { Users, UserCheck, UserX } from 'lucide-react'
import { showDeleteConfirm } from '@/shared/utils/sweetAlert'
import toast from 'react-hot-toast'

export default function AdminParents() {
  const { t, i18n } = useTranslation()
  const isRtl = i18n.language.startsWith('ar')

  const [viewMode, setViewMode] = useState('list')
  const [parents, setParents] = useState([])
  const [statistics, setStatistics] = useState(null)
  const [pagination, setPagination] = useState(null)
  const [selectedParent, setSelectedParent] = useState(null)
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    async function loadParents() {
      setIsLoading(true)
      try {
        const res = await adminParentsApi.fetchParents()
        if (res) {
          setParents(res.data || res)
          setStatistics(res.statistics || null)
          setPagination(res.pagination || null)
        }
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
        const payload = new FormData();
        payload.append('email', formData.email || '');
        payload.append('name[ar]', formData.name || '');
        payload.append('name[en]', formData.nameEn || '');
        payload.append('phone', formData.phone || '');
        payload.append('country', formData.country || '');
        if (formData.password && formData.password !== '********') {
          payload.append('password', formData.password);
          payload.append('confirmPassword', formData.confirmPassword);
        }
        if (formData.profileImageFile) {
          payload.append('image', formData.profileImageFile);
        }

        const targetId = selectedParent.parent_id || selectedParent._id || selectedParent.id;
        const res = await adminParentsApi.updateParent(targetId, payload)
        if (res) {
          setParents((prev) =>
            prev.map((p) => {
              const pId = p.parent_id || p._id || p.id;
              return pId === targetId ? { ...p, ...(res.data || res || formData) } : p;
            })
          )
          setSelectedParent(null)
          setViewMode('list')
          toast.success(isRtl ? 'تم تحديث البيانات بنجاح' : 'Parent updated successfully')
        }
      } catch (err) {
        console.error('Failed to update parent:', err)
        const msgs = err.response?.data?.message;
        if (Array.isArray(msgs)) {
          msgs.forEach(m => toast.error(m));
        } else if (typeof msgs === 'string') {
          toast.error(msgs);
        } else {
          toast.error(isRtl ? 'حدث خطأ أثناء التحديث' : 'Failed to update parent');
        }
      }
    } else {
      try {
        const payload = new FormData();
        payload.append('email', formData.email || '');
        payload.append('name[ar]', formData.name || '');
        payload.append('name[en]', formData.nameEn || '');
        payload.append('phone', formData.phone || '');
        payload.append('country', formData.country || '');
        payload.append('password', formData.password || '');
        payload.append('confirmPassword', formData.confirmPassword || '');
        if (formData.profileImageFile) {
          payload.append('image', formData.profileImageFile);
        }

        const res = await adminParentsApi.createParent(payload)
        if (res) {
          setParents((prev) => [res.data || res || formData, ...prev])
          setViewMode('list')
          toast.success(isRtl ? 'تم إضافة ولي الأمر بنجاح' : 'Parent created successfully')
        }
      } catch (err) {
        console.error('Failed to create parent:', err)
        const msgs = err.response?.data?.message;
        if (Array.isArray(msgs)) {
          msgs.forEach(m => toast.error(m));
        } else if (typeof msgs === 'string') {
          toast.error(msgs);
        } else {
          toast.error(isRtl ? 'حدث خطأ أثناء الإضافة' : 'Failed to create parent');
        }
      }
    }
  }

  const handleDeleteParent = async (parent) => {
    const parentName = typeof parent.name === 'object' ? (isRtl ? parent.name.ar || parent.name.en : parent.name.en || parent.name.ar) : parent.name;
    const isConfirmed = await showDeleteConfirm(isRtl, parentName);
    if (!isConfirmed) return;

    try {
      const targetId = parent.parent_id || parent._id || parent.id;
      const res = await adminParentsApi.deleteParent(targetId)
      if (res) {
        setParents((prev) => prev.filter((p) => {
          const pId = p.parent_id || p._id || p.id;
          return pId !== targetId;
        }))
        if ((selectedParent?.parent_id || selectedParent?._id || selectedParent?.id) === targetId) {
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

  const handleOpenEditScreen = async (parent) => {
    setIsLoading(true)
    try {
      const targetId = parent.parent_id || parent._id || parent.id;
      const fullParentData = await adminParentsApi.fetchParentById(targetId)
      setSelectedParent(fullParentData?.data || fullParentData || parent)
      setViewMode('edit-parent')
    } catch (error) {
      console.error('Failed to fetch parent details', error)
      toast.error(isRtl ? 'فشل في تحميل تفاصيل ولي الأمر' : 'Failed to fetch parent details')
      setSelectedParent(parent)
      setViewMode('edit-parent')
    } finally {
      setIsLoading(false)
    }
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

          {statistics && (
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 lg:gap-6 mt-6 mb-2">
              <StatsCard
                title={isRtl ? 'إجمالي أولياء الأمور' : 'Total Parents'}
                value={statistics.total}
                icon={<Users size={20} />}
                accent="bg-brand-500/10 text-brand-600 dark:bg-brand-500/20 dark:text-brand-400"
              />
              <StatsCard
                title={isRtl ? 'نشط' : 'Active'}
                value={statistics.active}
                icon={<UserCheck size={20} />}
                accent="bg-emerald-500/10 text-emerald-600 dark:bg-emerald-500/20 dark:text-emerald-400"
              />
              <StatsCard
                title={isRtl ? 'موقوف' : 'Stopped'}
                value={statistics.stopped}
                icon={<UserX size={20} />}
                accent="bg-red-500/10 text-red-600 dark:bg-red-500/20 dark:text-red-400"
              />
            </div>
          )}

          <ParentsList
            parents={parents}
            pagination={pagination}
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

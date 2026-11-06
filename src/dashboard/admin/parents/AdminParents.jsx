import { useState, useEffect } from 'react'
import { useNavigate, useSearchParams } from 'react-router-dom'
import { useTranslation } from 'react-i18next'
import { adminParentsApi } from '@/shared/services/api/adminParentsApi'
import ParentsList from './components/ParentsList'
import { getParentId } from './utils/parentUtils'
import Spinner from '@/shared/components/Spinner'
import StatsCard from '@/shared/components/StatsCard'
import { Users, UserCheck, UserX } from 'lucide-react'
import { showDeleteConfirm } from '@/shared/utils/sweetAlert'
import toast from 'react-hot-toast'

export default function AdminParents() {
  const navigate = useNavigate()
  const [searchParams] = useSearchParams()
  const legacyParentId = searchParams.get('id')
  const { t, i18n } = useTranslation()
  const isRtl = i18n.language.startsWith('ar')
  const [parents, setParents] = useState([])
  const [statistics, setStatistics] = useState(null)
  const [pagination, setPagination] = useState(null)
  const [isLoading, setIsLoading] = useState(true)
  useEffect(() => {
    if (legacyParentId) {
      navigate(`/dashboard/admin/parents/${legacyParentId}`, { replace: true })
    }
  }, [legacyParentId, navigate])
  useEffect(() => {
    async function loadParents() {
      setIsLoading(true)
      try {
        const res = await adminParentsApi.fetchParents()
        setParents(res?.data || [])
        setStatistics(res?.statistics || null)
        setPagination(res?.pagination || null)
      } catch (err) {
        console.error('Failed to fetch parents:', err)
        toast.error(isRtl ? 'تعذر تحميل أولياء الأمور' : 'Failed to load parents')
      } finally {
        setIsLoading(false)
      }
    }
    loadParents()
  }, [isRtl])
  const handleDeleteParent = async (parent) => {
    const parentName = typeof parent.name === 'object' ? (isRtl ? parent.name.ar || parent.name.en : parent.name.en || parent.name.ar) : parent.name
    const isConfirmed = await showDeleteConfirm(isRtl, parentName)
    if (!isConfirmed) return
    try {
      const targetId = getParentId(parent)
      await adminParentsApi.deleteParent(targetId)
      setParents((prev) => prev.filter((p) => getParentId(p) !== targetId))
      toast.success(isRtl ? 'تم حذف ولي الأمر بنجاح' : 'Parent deleted successfully')
    } catch (err) {
      console.error('Failed to delete parent:', err)
      toast.error(isRtl ? 'حدث خطأ أثناء حذف ولي الأمر' : 'Failed to delete parent')
    }
  }
  const openDetails = (parent) => navigate(`/dashboard/admin/parents/${getParentId(parent)}`)
  if (isLoading) {
    return (
      <div className="flex h-[60vh] items-center justify-center">
        <Spinner />
      </div>
    )
  }
  return (
    <div className="space-y-8 p-1 md:p-6" dir={isRtl ? 'rtl' : 'ltr'}>
      <div className="text-start">
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
            title={t('adminDashboard.parents.totalParents', 'إجمالي أولياء الأمور')}
            value={statistics.total}
            icon={<Users size={20} />}
            accent="bg-brand-500/10 text-brand-600 dark:bg-brand-500/20 dark:text-brand-400"
          />
          <StatsCard
            title={t('adminDashboard.parents.active', 'نشط')}
            value={statistics.active}
            icon={<UserCheck size={20} />}
            accent="bg-emerald-500/10 text-emerald-600 dark:bg-emerald-500/20 dark:text-emerald-400"
          />
          <StatsCard
            title={t('adminDashboard.parents.stopped', 'موقوف')}
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
        onOpenAddScreen={() => navigate('/dashboard/admin/parents/add')}
        onOpenEditScreen={openDetails}
        onOpenDetails={openDetails}
        onDelete={handleDeleteParent}
      />
    </div>
  )
}

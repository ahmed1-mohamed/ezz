import { useParams, useNavigate } from 'react-router-dom'
import { useTranslation } from 'react-i18next'
import { useQuery, useQueryClient } from '@tanstack/react-query'
import toast from 'react-hot-toast'
import { adminParentsApi } from '@/shared/services/api/adminParentsApi'
import ParentDetailsScreen from './components/ParentDetailsScreen'
import Spinner from '@/shared/components/Spinner'
import { getApiErrorText } from '@/shared/utils/errorHandler'

export default function AdminParentDetails() {
  const { id } = useParams()
  const navigate = useNavigate()
  const { i18n } = useTranslation()
  const isRtl = i18n.language.startsWith('ar')
  const queryClient = useQueryClient()
  const { data: parent, isLoading, isError, refetch } = useQuery({
    queryKey: ['parent-details', id],
    queryFn: async () => {
      const res = await adminParentsApi.fetchParentById(id)
      return res?.data || null
    },
    enabled: Boolean(id),
    staleTime: 60 * 1000,
  })
  const backToList = () => navigate('/dashboard/admin/parents')
  const handleSave = async (payload) => {
    try {
      await adminParentsApi.updateParent(id, payload)
      await refetch()
      toast.success(isRtl ? 'تم تحديث البيانات بنجاح' : 'Parent updated successfully')
    } catch (err) {
      console.error('Failed to update parent:', err)
      toast.error(getApiErrorText(err, isRtl ? 'حدث خطأ أثناء التحديث' : 'Failed to update parent'))
      throw err
    }
  }
  const handleToggleActive = async (userId) => {
    try {
      await adminParentsApi.toggleParentActive(userId)
      await refetch()
      queryClient.invalidateQueries({ queryKey: ['adminParents'] })
      toast.success(isRtl ? 'تم تحديث حالة الحساب بنجاح' : 'Account status updated successfully')
    } catch (err) {
      console.error('Failed to suspend parent:', err)
      toast.error(getApiErrorText(err, isRtl ? 'فشل في تحديث حالة الحساب' : 'Failed to update account status'))
    }
  }
  if (isLoading) {
    return (
      <div className="flex h-[60vh] items-center justify-center">
        <Spinner />
      </div>
    )
  }
  if (isError || !parent) {
    return (
      <div className="p-8 max-w-xl mx-auto my-12 bg-white dark:bg-slate-900 rounded-3xl border border-slate-100 dark:border-slate-800 text-center space-y-4 shadow-soft" dir={isRtl ? 'rtl' : 'ltr'}>
        <h2 className="text-lg font-bold text-slate-800 dark:text-white">
          {isRtl ? 'تعذر العثور على ولي الأمر' : 'Parent not found'}
        </h2>
        <div className="flex items-center justify-center gap-3 pt-2">
          <button
            type="button"
            onClick={() => refetch()}
            className="px-5 py-2.5 bg-slate-100 hover:bg-slate-200 dark:bg-slate-800 dark:hover:bg-slate-700 text-slate-700 dark:text-slate-200 rounded-2xl text-xs font-bold transition-all cursor-pointer"
          >
            {isRtl ? 'إعادة المحاولة' : 'Retry'}
          </button>
          <button
            type="button"
            onClick={backToList}
            className="px-5 py-2.5 bg-[#005953] hover:bg-[#004742] text-white rounded-2xl text-xs font-bold transition-all cursor-pointer"
          >
            {isRtl ? 'العودة لقائمة أولياء الأمور' : 'Back to Parents'}
          </button>
        </div>
      </div>
    )
  }
  return (
    <div className="p-1 md:p-6" dir={isRtl ? 'rtl' : 'ltr'}>
      <ParentDetailsScreen
        key={id}
        parent={parent}
        isRtl={isRtl}
        onCancel={backToList}
        onSave={handleSave}
        onToggleActive={handleToggleActive}
        onChildrenChanged={() => queryClient.invalidateQueries({ queryKey: ['adminStudents'] })}
      />
    </div>
  )
}

import React, { useState, useEffect, useMemo } from 'react'
import { useTranslation } from 'react-i18next'
import { useQuery, useQueryClient } from '@tanstack/react-query'
import { toast } from 'react-hot-toast'
import {
  CreditCard,
  ChevronLeft,
  ChevronRight,
  ShieldAlert,
  Coins,
  Receipt,
  FileSpreadsheet,
} from 'lucide-react'
import Spinner from '@/shared/components/Spinner'
import { adminPaymentsApi } from '@/shared/services/api/adminPaymentsApi'
import { useAdminPermissions } from '@/shared/hooks/useAdminPermissions'
import PaymentsStats from './components/PaymentsStats'
import PaymentsFilters from './components/PaymentsFilters'
import PaymentsTable from './components/PaymentsTable'
import SubscriptionDetailsModal from './components/SubscriptionDetailsModal'

export default function AdminPayments() {
  const { t, i18n } = useTranslation()
  const isRtl = i18n.language.startsWith('ar')
  const { hasPermission, isSuperAdmin } = useAdminPermissions()
  const queryClient = useQueryClient()

  const canView = hasPermission('packages.subscriptions') || hasPermission('payments.read') || isSuperAdmin

  const [activeStatus, setActiveStatus] = useState('all') // 'all' | 'paid' | 'pending' | 'expired'
  const [packageTypeFilter, setPackageTypeFilter] = useState('all') // 'all' | 'individual' | 'family'
  const [searchValue, setSearchValue] = useState('')
  const [debouncedSearch, setDebouncedSearch] = useState('')
  const [currentPage, setCurrentPage] = useState(1)
  const [isExporting, setIsExporting] = useState(false)
  const [selectedSubscription, setSelectedSubscription] = useState(null)

  // Debounce search input
  useEffect(() => {
    const timer = setTimeout(() => {
      setDebouncedSearch(searchValue.trim())
      setCurrentPage(1)
    }, 350)
    return () => clearTimeout(timer)
  }, [searchValue])

  // Reset page when status changes
  const handleStatusChange = (status) => {
    setActiveStatus(status)
    setCurrentPage(1)
  }

  // 1. Fetch Subscriptions list: GET /api/v1/packages-faqs/private/subscriptions
  const {
    data: subsRes,
    isLoading: isSubsLoading,
    isFetching: isSubsFetching,
    refetch: refetchSubs,
  } = useQuery({
    queryKey: ['admin-subscriptions', currentPage, activeStatus, debouncedSearch],
    queryFn: () =>
      adminPaymentsApi.fetchSubscriptions({
        page: currentPage,
        limit: 20,
        status: activeStatus,
        search: debouncedSearch,
      }),
    enabled: Boolean(canView),
    staleTime: 60 * 1000,
  })

  // 2. Fetch Standalone Revenue Statistics: GET /api/v1/packages-faqs/private/subscriptions/statistics
  const {
    data: statsRes,
    isLoading: isStatsLoading,
    refetch: refetchStats,
  } = useQuery({
    queryKey: ['admin-subscriptions-stats'],
    queryFn: () => adminPaymentsApi.fetchSubscriptionsStats(),
    enabled: Boolean(canView),
    staleTime: 60 * 1000,
  })

  // Merge stats from either stats endpoint or list response
  const stats = statsRes?.data || subsRes?.statistics || {}
  const rawSubscriptions = subsRes?.data || []
  const pagination = subsRes?.pagination || { currentPage: 1, limit: 20, numberOfPages: 1 }

  // Filter subscriptions client-side by package type if selected
  const filteredSubscriptions = useMemo(() => {
    if (!packageTypeFilter || packageTypeFilter === 'all') return rawSubscriptions
    return rawSubscriptions.filter((sub) => sub.package?.type === packageTypeFilter)
  }, [rawSubscriptions, packageTypeFilter])

  const handleRefresh = async () => {
    await Promise.all([refetchSubs(), refetchStats()])
    toast.success(isRtl ? 'تم تحديث بيانات المدفوعات' : 'Payments data updated')
  }

  const handleExport = async () => {
    if (filteredSubscriptions.length === 0) {
      toast.error(isRtl ? 'لا توجد بيانات لتصديرها' : 'No data to export')
      return
    }
    setIsExporting(true)
    try {
      await adminPaymentsApi.exportCsv(filteredSubscriptions)
      toast.success(isRtl ? 'تم تصدير ملف CSV بنجاح' : 'CSV file exported successfully')
    } catch {
      toast.error(isRtl ? 'حدث خطأ أثناء تصدير الملف' : 'Failed to export CSV')
    } finally {
      setIsExporting(false)
    }
  }

  if (!canView) {
    return (
      <div className="flex flex-col items-center justify-center py-20 bg-white dark:bg-slate-900 rounded-3xl border border-slate-100 dark:border-slate-800 text-center p-8 space-y-3">
        <div className="w-16 h-16 rounded-full bg-rose-50 dark:bg-rose-950/40 text-rose-600 dark:text-rose-400 flex items-center justify-center">
          <ShieldAlert size={30} />
        </div>
        <h3 className="text-lg font-bold text-slate-800 dark:text-white">
          {isRtl ? 'غير مصرح بعرض المدفوعات' : 'Access Denied'}
        </h3>
        <p className="text-slate-500 dark:text-slate-400 font-medium text-sm max-w-md">
          {isRtl
            ? 'يتطلب الوصول إلى هذه الصفحة صلاحية "عرض مدفوعات واشتراكات الباقات" (packages.subscriptions).'
            : 'Access to this page requires the "View Package Subscriptions" permission (packages.subscriptions).'}
        </p>
      </div>
    )
  }

  const currency = rawSubscriptions[0]?.currency || 'USD'

  return (
    <div className="space-y-6 text-start animate-fadeIn" dir={isRtl ? 'rtl' : 'ltr'}>
      {/* Top Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <h1 className="text-2xl font-bold text-slate-800 dark:text-white flex items-center gap-2.5">
            <CreditCard className="text-[#005953] dark:text-emerald-400" size={26} />
            <span>{isRtl ? 'مدفوعات واشتراكات الباقات' : 'Package Payments & Subscriptions'}</span>
          </h1>
          <p className="text-sm text-slate-400 dark:text-slate-500 mt-1">
            {isRtl
              ? 'متابعة وإدارة عمليات الدفع والاشتراكات الصادرة من أولياء الأمور وإحصائيات الإيرادات'
              : 'Monitor parent subscriptions, checkout transactions, and revenue statistics'}
          </p>
        </div>

        <div className="flex items-center gap-2 self-start sm:self-auto">
          <span className="inline-flex items-center gap-2 px-4 py-2 rounded-2xl bg-emerald-50 dark:bg-emerald-950/30 text-[#005953] dark:text-emerald-400 border border-emerald-200/50 text-xs font-bold shadow-sm">
            <Receipt size={16} />
            <span>
              {isRtl ? 'العملة الأساسية:' : 'Base Currency:'} {currency}
            </span>
          </span>
        </div>
      </div>

      {/* Revenue & Subscriptions Statistics Cards */}
      <PaymentsStats stats={stats} currency={currency} />

      {/* Filters (Status, Search, Type, Export, Refresh) */}
      <PaymentsFilters
        activeStatus={activeStatus}
        setActiveStatus={handleStatusChange}
        packageTypeFilter={packageTypeFilter}
        setPackageTypeFilter={setPackageTypeFilter}
        searchValue={searchValue}
        setSearchValue={setSearchValue}
        onClearSearch={() => setSearchValue('')}
        onExport={handleExport}
        isExporting={isExporting}
        onRefresh={handleRefresh}
        isFetching={isSubsFetching}
        stats={stats}
      />

      {/* Loading Indicator or Subscriptions Table */}
      {isSubsLoading && !subsRes ? (
        <div className="flex flex-col items-center justify-center p-16 space-y-3 bg-white dark:bg-slate-900 rounded-3xl border border-slate-100 dark:border-slate-800">
          <Spinner />
          <p className="text-xs font-bold text-slate-400">
            {isRtl ? 'جاري تحميل سجل الاشتراكات والمدفوعات...' : 'Loading subscriptions data...'}
          </p>
        </div>
      ) : (
        <div className="space-y-4">
          <PaymentsTable
            subscriptions={filteredSubscriptions}
            onViewDetails={(sub) => setSelectedSubscription(sub)}
          />

          {/* Pagination Controls */}
          {pagination.numberOfPages > 1 && (
            <div className="flex items-center justify-between p-4 bg-white dark:bg-slate-900 rounded-2xl border border-slate-100 dark:border-slate-800 shadow-sm text-xs">
              <span className="text-slate-400 font-semibold">
                {isRtl
                  ? `صفحة ${pagination.currentPage} من ${pagination.numberOfPages}`
                  : `Page ${pagination.currentPage} of ${pagination.numberOfPages}`}
              </span>

              <div className="flex items-center gap-2">
                <button
                  type="button"
                  onClick={() => setCurrentPage((p) => Math.max(p - 1, 1))}
                  disabled={currentPage <= 1 || isSubsFetching}
                  className="flex items-center gap-1 px-3 py-1.5 rounded-xl border border-slate-200 dark:border-slate-800 hover:bg-slate-50 dark:hover:bg-slate-800 font-bold text-slate-600 dark:text-slate-300 disabled:opacity-40 cursor-pointer"
                >
                  {isRtl ? <ChevronRight size={14} /> : <ChevronLeft size={14} />}
                  <span>{isRtl ? 'السابق' : 'Previous'}</span>
                </button>

                <div className="flex items-center gap-1">
                  {Array.from({ length: pagination.numberOfPages }, (_, i) => i + 1)
                    .filter((p) => p === 1 || p === pagination.numberOfPages || Math.abs(p - currentPage) <= 1)
                    .map((pageNum, idx, arr) => (
                      <React.Fragment key={pageNum}>
                        {idx > 0 && arr[idx - 1] !== pageNum - 1 && (
                          <span className="px-1 text-slate-400">...</span>
                        )}
                        <button
                          type="button"
                          onClick={() => setCurrentPage(pageNum)}
                          disabled={isSubsFetching}
                          className={`w-8 h-8 rounded-xl font-bold transition-all cursor-pointer ${
                            currentPage === pageNum
                              ? 'bg-[#005953] text-white shadow-sm'
                              : 'text-slate-600 dark:text-slate-400 hover:bg-slate-100 dark:hover:bg-slate-800'
                          }`}
                        >
                          {pageNum}
                        </button>
                      </React.Fragment>
                    ))}
                </div>

                <button
                  type="button"
                  onClick={() => setCurrentPage((p) => Math.min(p + 1, pagination.numberOfPages))}
                  disabled={currentPage >= pagination.numberOfPages || isSubsFetching}
                  className="flex items-center gap-1 px-3 py-1.5 rounded-xl border border-slate-200 dark:border-slate-800 hover:bg-slate-50 dark:hover:bg-slate-800 font-bold text-slate-600 dark:text-slate-300 disabled:opacity-40 cursor-pointer"
                >
                  <span>{isRtl ? 'التالي' : 'Next'}</span>
                  {isRtl ? <ChevronLeft size={14} /> : <ChevronRight size={14} />}
                </button>
              </div>
            </div>
          )}
        </div>
      )}

      {/* Subscription Details Modal */}
      {selectedSubscription && (
        <SubscriptionDetailsModal
          isOpen={Boolean(selectedSubscription)}
          onClose={() => setSelectedSubscription(null)}
          subscriptionId={selectedSubscription.id}
          initialData={selectedSubscription}
          isRtl={isRtl}
        />
      )}
    </div>
  )
}

import React, { useState, useEffect, useMemo } from 'react'
import { useQuery, useQueryClient } from '@tanstack/react-query'
import {
  ChevronLeft,
  ChevronRight,
  ShieldAlert,
  CalendarCheck,
  Globe,
  Users,
} from 'lucide-react'
import { useTranslation } from 'react-i18next'
import { useAdminPermissions } from '@/shared/hooks/useAdminPermissions'
import Spinner from '@/shared/components/Spinner'
import { adminTrialSessionsApi } from '@/shared/services/api/adminTrialSessionsApi'
import TrialSessionsStats from './components/TrialSessionsStats'
import TrialSessionsFilters from './components/TrialSessionsFilters'
import TrialSessionsTable from './components/TrialSessionsTable'
import TrialSessionDetailsModal from './components/TrialSessionDetailsModal'
import AssignSessionModal from './components/AssignSessionModal'
import CancelTrialSessionModal from './components/CancelTrialSessionModal'
import WebsiteTrialSessionsTable from './components/WebsiteTrialSessionsTable'
import WebsiteTrialDetailsModal from './components/WebsiteTrialDetailsModal'
import AcceptWebsiteTrialModal from './components/AcceptWebsiteTrialModal'
import RejectWebsiteTrialModal from './components/RejectWebsiteTrialModal'

export default function AdminTrialSessions() {
  const { i18n } = useTranslation()
  const isRtl = i18n.language.startsWith('ar')
  const { hasPermission, isSuperAdmin } = useAdminPermissions()
  const queryClient = useQueryClient()
  const canView = hasPermission('trial_sessions.read') || isSuperAdmin
  const [activeTab, setActiveTab] = useState('parent')
  const [activeStatus, setActiveStatus] = useState('all')
  const [searchValue, setSearchValue] = useState('')
  const [debouncedSearch, setDebouncedSearch] = useState('')
  const [currentPage, setCurrentPage] = useState(1)
  const [selectedTrialForDetails, setSelectedTrialForDetails] = useState(null)
  const [selectedTrialForAssign, setSelectedTrialForAssign] = useState(null)
  const [selectedTrialForCancel, setSelectedTrialForCancel] = useState(null)
  const [selectedWebsiteTrialForDetails, setSelectedWebsiteTrialForDetails] = useState(null)
  const [selectedWebsiteTrialForAccept, setSelectedWebsiteTrialForAccept] = useState(null)
  const [selectedWebsiteTrialForReject, setSelectedWebsiteTrialForReject] = useState(null)
  useEffect(() => {
    const timer = setTimeout(() => {
      setDebouncedSearch(searchValue.trim())
      setCurrentPage(1)
    }, 350)
    return () => clearTimeout(timer)
  }, [searchValue])
  const handleStatusChange = (status) => {
    setActiveStatus(status)
    setCurrentPage(1)
  }
  const handleTabChange = (newTab) => {
    setActiveTab(newTab)
    setActiveStatus('all')
    setSearchValue('')
    setDebouncedSearch('')
    setCurrentPage(1)
  }
  const {
    data: trialSessionsResponse,
    isLoading,
    isFetching,
    refetch,
  } = useQuery({
    queryKey: ['admin-trial-sessions', activeTab, currentPage, activeStatus, debouncedSearch],
    queryFn: () => {
      if (activeTab === 'website') {
        const websiteParams = {
          page: currentPage,
          limit: 10,
        }
        if (activeStatus && activeStatus !== 'all') {
          websiteParams.status = activeStatus
        }
        return adminTrialSessionsApi.fetchWebsiteTrialSessions(websiteParams)
      }
      const params = {
        page: currentPage,
        limit: 10,
        status: activeStatus,
        search: debouncedSearch,
      }
      return adminTrialSessionsApi.fetchTrialSessions(params)
    },
    enabled: canView,
    keepPreviousData: true,
  })
  const rawList = useMemo(() => {
    if (!trialSessionsResponse) return []
    if (Array.isArray(trialSessionsResponse.data)) return trialSessionsResponse.data
    if (Array.isArray(trialSessionsResponse.trialSessions)) return trialSessionsResponse.trialSessions
    if (Array.isArray(trialSessionsResponse)) return trialSessionsResponse
    if (Array.isArray(trialSessionsResponse.items)) return trialSessionsResponse.items
    return []
  }, [trialSessionsResponse])
  const displayedWebsiteList = useMemo(() => {
    if (!debouncedSearch) return rawList
    const q = debouncedSearch.toLowerCase().trim()
    return rawList.filter((item) => {
      const name = String(item.name || item.studentName || '').toLowerCase()
      const email = String(item.email || '').toLowerCase()
      const phone = String(item.phone || '').toLowerCase()
      const curriculum = String(
        typeof item.curriculum === 'object'
          ? item.curriculum?.name || ''
          : item.curriculum || item.curriculumName || ''
      ).toLowerCase()
      return name.includes(q) || email.includes(q) || phone.includes(q) || curriculum.includes(q)
    })
  }, [debouncedSearch, rawList])
  const paginationData = useMemo(() => {
    const pag = trialSessionsResponse?.pagination || trialSessionsResponse?.meta || {}
    const totalPages =
      pag.numberOfPages ||
      pag.totalPages ||
      pag.pages ||
      trialSessionsResponse?.numberOfPages ||
      trialSessionsResponse?.totalPages ||
      1
    const totalItems =
      pag.total ||
      pag.totalCount ||
      pag.totalItems ||
      trialSessionsResponse?.total ||
      trialSessionsResponse?.totalCount ||
      rawList.length
    const pageNum =
      pag.page ||
      pag.currentPage ||
      trialSessionsResponse?.page ||
      trialSessionsResponse?.currentPage ||
      currentPage
    return {
      totalPages: Math.max(1, Number(totalPages) || 1),
      totalItems: Number(totalItems) || 0,
      currentPage: Math.max(1, Number(pageNum) || 1),
    }
  }, [trialSessionsResponse, rawList.length, currentPage])
  const stats = useMemo(() => {
    const apiStats = trialSessionsResponse?.statistics || trialSessionsResponse?.stats || trialSessionsResponse?.summary || {}
    const computedTotal = paginationData.totalItems || rawList.length
    if (activeTab === 'website') {
      let pendingCount = 0
      let acceptedCount = 0
      let rejectedCount = 0
      rawList.forEach((item) => {
        const s = String(item.status || 'pending').toLowerCase()
        if (s === 'accepted') acceptedCount++
        else if (s === 'rejected') rejectedCount++
        else pendingCount++
      })
      return {
        total: Number(apiStats.total ?? computedTotal),
        pending: Number(apiStats.pending ?? pendingCount),
        accepted: Number(apiStats.accepted ?? acceptedCount),
        rejected: Number(apiStats.rejected ?? rejectedCount),
      }
    }
    if (apiStats.total !== undefined || apiStats.pending !== undefined) {
      return {
        total: Number(apiStats.total ?? 0),
        pending: Number(apiStats.pending ?? 0),
        scheduled: Number(apiStats.scheduled ?? apiStats.assigned ?? 0),
        assigned: Number(apiStats.scheduled ?? apiStats.assigned ?? 0),
        completed: Number(apiStats.completed ?? 0),
        missed: Number(apiStats.missed ?? 0),
        cancelled: Number(apiStats.cancelled ?? apiStats.canceled ?? 0),
      }
    }
    let pendingCount = 0
    let scheduledCount = 0
    let completedCount = 0
    let missedCount = 0
    let cancelledCount = 0
    rawList.forEach((item) => {
      const s = String(item.status || '').toLowerCase().trim()
      if (s === 'scheduled' || s === 'assigned' || s === 'تم التسكين' || s === 'مسكن' || s === 'مجدولة') scheduledCount++
      else if (s === 'cancelled' || s === 'canceled' || s === 'ملغي' || s === 'ملغاة' || s === 'rejected') cancelledCount++
      else if (s === 'completed' || s === 'مكتملة') completedCount++
      else if (s === 'missed' || s === 'لم يحضر' || s === 'فائتة') missedCount++
      else pendingCount++
    })
    return {
      total: computedTotal,
      pending: pendingCount,
      scheduled: scheduledCount,
      assigned: scheduledCount,
      completed: completedCount,
      missed: missedCount,
      cancelled: cancelledCount,
    }
  }, [trialSessionsResponse, paginationData.totalItems, rawList, activeTab])
  const handleActionSuccess = () => {
    queryClient.invalidateQueries(['admin-trial-sessions'])
  }
  const handleOpenAssignFromDetails = (trial) => {
    setSelectedTrialForDetails(null)
    setSelectedTrialForAssign(trial)
  }
  if (!canView) {
    return (
      <div className="flex flex-col items-center justify-center py-20 bg-white dark:bg-slate-900 rounded-3xl border border-slate-100 dark:border-slate-800 text-center p-8 space-y-3">
        <div className="w-16 h-16 rounded-full bg-rose-50 dark:bg-rose-950/40 text-rose-600 dark:text-rose-400 flex items-center justify-center">
          <ShieldAlert size={30} />
        </div>
        <h3 className="text-lg font-bold text-slate-800 dark:text-white">
          {isRtl ? 'غير مصرح بعرض الحصص التجريبية' : 'Access Denied'}
        </h3>
        <p className="text-slate-500 dark:text-slate-400 font-medium text-sm max-w-md">
          {isRtl
            ? 'يتطلب الوصول إلى هذه الصفحة صلاحية "عرض طلبات الحصص التجريبية" (trial_sessions.read).'
            : 'Access to this page requires the "View Trial Sessions" permission (trial_sessions.read).'}
        </p>
      </div>
    )
  }
  return (
    <div className="space-y-6 pb-12 animate-fade-in text-start" dir={isRtl ? 'rtl' : 'ltr'}>
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <div className="flex items-center gap-2 mb-1">
            <span className="p-2 rounded-2xl bg-[#005953]/10 text-[#005953] dark:bg-emerald-950/40 dark:text-emerald-400 inline-flex">
              <CalendarCheck size={20} />
            </span>
            <h1 className="text-xl sm:text-2xl font-black text-slate-800 dark:text-white">
              {isRtl ? 'إدارة طلبات الحصص التجريبية' : 'Trial Sessions Management'}
            </h1>
          </div>
          <p className="text-xs sm:text-sm text-slate-500 dark:text-slate-400 font-medium">
            {isRtl
              ? 'متابعة وتسكين وإدارة جميع طلبات الحصص التجريبية للطلاب'
              : 'Track, review, assign, and manage all trial session requests'}
          </p>
        </div>
        <div className="flex items-center gap-2 p-1.5 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200/80 dark:border-slate-800 shadow-xs w-fit">
          <button
            type="button"
            onClick={() => handleTabChange('parent')}
            className={`flex items-center gap-2 px-4 sm:px-5 py-2 sm:py-2.5 rounded-xl text-xs sm:text-sm font-bold transition-all cursor-pointer ${
              activeTab === 'parent'
                ? 'bg-[#005953] text-white shadow-md shadow-[#005953]/20'
                : 'text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white hover:bg-slate-50 dark:hover:bg-slate-800'
            }`}
          >
            <Users size={16} />
            <span>{isRtl ? 'طلبات أولياء الأمور' : 'Parent Requests'}</span>
          </button>
          <button
            type="button"
            onClick={() => handleTabChange('website')}
            className={`flex items-center gap-2 px-4 sm:px-5 py-2 sm:py-2.5 rounded-xl text-xs sm:text-sm font-bold transition-all cursor-pointer ${
              activeTab === 'website'
                ? 'bg-[#005953] text-white shadow-md shadow-[#005953]/20'
                : 'text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white hover:bg-slate-50 dark:hover:bg-slate-800'
            }`}
          >
            <Globe size={16} />
            <span>{isRtl ? 'طلبات الموقع الإلكتروني' : 'Website Requests'}</span>
          </button>
        </div>
      </div>
      <TrialSessionsStats stats={stats} isRtl={isRtl} mode={activeTab} />
      <TrialSessionsFilters
        activeStatus={activeStatus}
        setActiveStatus={handleStatusChange}
        searchValue={searchValue}
        setSearchValue={setSearchValue}
        onClearSearch={() => setSearchValue('')}
        onRefresh={() => refetch()}
        isFetching={isFetching}
        isRtl={isRtl}
        stats={stats}
        mode={activeTab}
      />
      {isLoading ? (
        <div className="bg-white dark:bg-slate-900 rounded-3xl border border-slate-100 dark:border-slate-800 p-16 flex flex-col items-center justify-center gap-3">
          <Spinner />
          <span className="text-xs font-bold text-slate-400">
            {isRtl ? 'جاري تحميل طلبات الحصص التجريبية...' : 'Loading trial sessions...'}
          </span>
        </div>
      ) : (
        <div className="space-y-4">
          {activeTab === 'website' ? (
            <WebsiteTrialSessionsTable
              trialSessions={displayedWebsiteList}
              onViewDetails={(item) => setSelectedWebsiteTrialForDetails(item)}
              onAccept={(item) => setSelectedWebsiteTrialForAccept(item)}
              onReject={(item) => setSelectedWebsiteTrialForReject(item)}
              isRtl={isRtl}
            />
          ) : (
            <TrialSessionsTable
              trialSessions={rawList}
              onViewDetails={(item) => setSelectedTrialForDetails(item)}
              onAssignSession={(item) => setSelectedTrialForAssign(item)}
              onCancelRequest={(item) => setSelectedTrialForCancel(item)}
              isRtl={isRtl}
            />
          )}
          {paginationData.totalPages > 1 && (
            <div className="flex flex-col sm:flex-row items-center justify-between gap-4 p-4 bg-white dark:bg-slate-900 rounded-2xl border border-slate-100 dark:border-slate-800 text-xs">
              <div className="text-slate-500 dark:text-slate-400 font-medium">
                {isRtl ? (
                  <>
                    عرض الصفحة <span className="font-bold text-slate-800 dark:text-white">{paginationData.currentPage}</span> من إجمالي <span className="font-bold text-slate-800 dark:text-white">{paginationData.totalPages}</span> صفحات ({paginationData.totalItems} طلب)
                  </>
                ) : (
                  <>
                    Showing page <span className="font-bold text-slate-800 dark:text-white">{paginationData.currentPage}</span> of <span className="font-bold text-slate-800 dark:text-white">{paginationData.totalPages}</span> pages ({paginationData.totalItems} requests)
                  </>
                )}
              </div>
              <div className="flex items-center gap-1.5">
                <button
                  type="button"
                  onClick={() => setCurrentPage((p) => Math.max(p - 1, 1))}
                  disabled={paginationData.currentPage <= 1 || isFetching}
                  className="flex items-center gap-1 px-3 py-1.5 rounded-xl border border-slate-200 dark:border-slate-800 hover:bg-slate-50 dark:hover:bg-slate-800 font-bold text-slate-600 dark:text-slate-300 disabled:opacity-40 cursor-pointer"
                >
                  {isRtl ? <ChevronRight size={14} /> : <ChevronLeft size={14} />}
                  <span>{isRtl ? 'السابق' : 'Prev'}</span>
                </button>
                <div className="flex items-center gap-1">
                  {Array.from({ length: paginationData.totalPages }, (_, i) => i + 1)
                    .filter((pageNum) => {
                      if (paginationData.totalPages <= 7) return true
                      if (pageNum === 1 || pageNum === paginationData.totalPages) return true
                      return Math.abs(pageNum - paginationData.currentPage) <= 1
                    })
                    .map((pageNum, idx, arr) => (
                      <React.Fragment key={pageNum}>
                        {idx > 0 && arr[idx - 1] !== pageNum - 1 && (
                          <span className="px-1 text-slate-400">...</span>
                        )}
                        <button
                          type="button"
                          onClick={() => setCurrentPage(pageNum)}
                          disabled={isFetching}
                          className={`w-8 h-8 rounded-xl font-bold transition-all cursor-pointer ${
                            paginationData.currentPage === pageNum
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
                  onClick={() => setCurrentPage((p) => Math.min(p + 1, paginationData.totalPages))}
                  disabled={paginationData.currentPage >= paginationData.totalPages || isFetching}
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
      {selectedTrialForDetails && (
        <TrialSessionDetailsModal
          isOpen={Boolean(selectedTrialForDetails)}
          onClose={() => setSelectedTrialForDetails(null)}
          trialSession={selectedTrialForDetails}
          isRtl={isRtl}
          onOpenAssign={handleOpenAssignFromDetails}
        />
      )}
      {selectedTrialForAssign && (
        <AssignSessionModal
          isOpen={Boolean(selectedTrialForAssign)}
          onClose={() => setSelectedTrialForAssign(null)}
          trialSession={selectedTrialForAssign}
          isRtl={isRtl}
          onSuccess={handleActionSuccess}
        />
      )}
      {selectedTrialForCancel && (
        <CancelTrialSessionModal
          isOpen={Boolean(selectedTrialForCancel)}
          onClose={() => setSelectedTrialForCancel(null)}
          trialSession={selectedTrialForCancel}
          isRtl={isRtl}
          onSuccess={handleActionSuccess}
        />
      )}
      {selectedWebsiteTrialForDetails && (
        <WebsiteTrialDetailsModal
          isOpen={Boolean(selectedWebsiteTrialForDetails)}
          onClose={() => setSelectedWebsiteTrialForDetails(null)}
          trialSession={selectedWebsiteTrialForDetails}
          isRtl={isRtl}
          onOpenAccept={(trial) => setSelectedWebsiteTrialForAccept(trial)}
          onOpenReject={(trial) => setSelectedWebsiteTrialForReject(trial)}
        />
      )}
      {selectedWebsiteTrialForAccept && (
        <AcceptWebsiteTrialModal
          isOpen={Boolean(selectedWebsiteTrialForAccept)}
          onClose={() => setSelectedWebsiteTrialForAccept(null)}
          trialSession={selectedWebsiteTrialForAccept}
          isRtl={isRtl}
          onSuccess={handleActionSuccess}
        />
      )}
      {selectedWebsiteTrialForReject && (
        <RejectWebsiteTrialModal
          isOpen={Boolean(selectedWebsiteTrialForReject)}
          onClose={() => setSelectedWebsiteTrialForReject(null)}
          trialSession={selectedWebsiteTrialForReject}
          isRtl={isRtl}
          onSuccess={handleActionSuccess}
        />
      )}
    </div>
  )
}


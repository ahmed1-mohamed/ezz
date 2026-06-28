import { useState, useEffect, useCallback } from 'react'
import { useTranslation } from 'react-i18next'
import Spinner from '@/shared/components/Spinner'
import { adminPaymentsApi } from '@/shared/services/api/adminPaymentsApi'
import PaymentsStats from './components/PaymentsStats'
import PaymentsFilters from './components/PaymentsFilters'
import PaymentsTable from './components/PaymentsTable'

export default function AdminPayments() {
  const { i18n } = useTranslation()
  const isRtl = i18n.language.startsWith('ar')

  const [stats, setStats] = useState(null)
  const [payments, setPayments] = useState([])
  const [loading, setLoading] = useState(true)

  const [activePeriod, setActivePeriod] = useState('annual')
  const [activeStatus, setActiveStatus] = useState('all')
  const [searchValue, setSearchValue] = useState('')

  const loadStats = useCallback(async () => {
    const res = await adminPaymentsApi.fetchPaymentsStats(activePeriod)
    if (res?.data) setStats(res.data)
  }, [activePeriod])

  const loadPayments = useCallback(async () => {
    setLoading(true)
    const res = await adminPaymentsApi.fetchPayments({
      period: activePeriod,
      status: activeStatus,
      search: searchValue,
    })
    if (res?.data) setPayments(res.data)
    setLoading(false)
  }, [activePeriod, activeStatus, searchValue])

  useEffect(() => {
    // eslint-disable-next-line react-hooks/set-state-in-effect
    loadStats()
  }, [loadStats])

  useEffect(() => {
    // eslint-disable-next-line react-hooks/set-state-in-effect
    loadPayments()
  }, [loadPayments])

  const handleApprove = async (id) => {
    const res = await adminPaymentsApi.approvePayment(id)
    if (res?.success) {
      setPayments((prev) =>
        prev.map((item) => (item.id === id ? { ...item, status: 'paid' } : item))
      )
      loadStats()
    }
  }

  const handleReject = async (id) => {
    const res = await adminPaymentsApi.rejectPayment(id)
    if (res?.success) {
      setPayments((prev) =>
        prev.map((item) => (item.id === id ? { ...item, status: 'failed' } : item))
      )
      loadStats()
    }
  }

  const handleExport = async () => {
    await adminPaymentsApi.exportCsv()
    alert(isRtl ? 'تم تصدير ملف CSV بنجاح!' : 'CSV exported successfully!')
  }

  const handleReviewAll = () => {
    setActiveStatus('pending')
  }

  if (loading && !stats) {
    return (
      <div className="flex items-center justify-center h-60">
        <Spinner />
      </div>
    )
  }

  return (
    <div className="space-y-8">
      {/* Top Stats */}
      {stats && <PaymentsStats stats={stats} />}

      {/* Filters Bar */}
      <PaymentsFilters
        activePeriod={activePeriod}
        setActivePeriod={setActivePeriod}
        activeStatus={activeStatus}
        setActiveStatus={setActiveStatus}
        searchValue={searchValue}
        setSearchValue={setSearchValue}
        onExport={handleExport}
      />

      {/* Main Table */}
      {loading ? (
        <div className="flex items-center justify-center h-40">
          <Spinner />
        </div>
      ) : (
        <PaymentsTable
          payments={payments}
          onApprove={handleApprove}
          onReject={handleReject}
          onReviewAll={handleReviewAll}
        />
      )}
    </div>
  )
}

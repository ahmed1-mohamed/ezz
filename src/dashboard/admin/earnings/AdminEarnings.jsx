import { useState, useEffect, useCallback } from 'react'
import { Calendar, ChevronLeft, ChevronRight } from 'lucide-react'
import { useTranslation } from 'react-i18next'
import Spinner from '@/shared/components/Spinner'
import { adminEarningsApi } from '@/shared/services/api/adminEarningsApi'
import EarningsStats from './components/EarningsStats'
import TeacherEarningsList from './components/TeacherEarningsList'
import WithdrawalRequests from './components/WithdrawalRequests'

export default function AdminEarnings() {
  const { i18n } = useTranslation()
  const isRtl = i18n.language.startsWith('ar')

  const [currentDate, setCurrentDate] = useState(new Date(2026, 0, 1))
  const [stats, setStats] = useState(null)
  const [teachers, setTeachers] = useState([])
  const [requests, setRequests] = useState([])
  const [loading, setLoading] = useState(true)

  const loadData = useCallback(async () => {
    setLoading(true)
    const monthStr = `${currentDate.getFullYear()}-${String(currentDate.getMonth() + 1).padStart(2, '0')}`
    const [statsRes, teachersRes, requestsRes] = await Promise.all([
      adminEarningsApi.fetchEarningsStats(monthStr),
      adminEarningsApi.fetchTeacherEarnings(monthStr),
      adminEarningsApi.fetchWithdrawalRequests(),
    ])

    if (statsRes?.data) setStats(statsRes.data)
    if (teachersRes?.data) setTeachers(teachersRes.data)
    if (requestsRes?.data) setRequests(requestsRes.data)
    setLoading(false)
  }, [currentDate])

  useEffect(() => {
    loadData()
  }, [loadData])

  const handlePrevMonth = () => {
    setCurrentDate((prev) => new Date(prev.getFullYear(), prev.getMonth() - 1, 1))
  }

  const handleNextMonth = () => {
    setCurrentDate((prev) => new Date(prev.getFullYear(), prev.getMonth() + 1, 1))
  }

  const formatMonth = () => {
    const options = { month: 'long', year: 'numeric' }
    return currentDate.toLocaleDateString(isRtl ? 'ar-EG' : 'en-US', options)
  }

  const handleApprove = async (id, proofImage) => {
    const res = await adminEarningsApi.approveWithdrawal(id, proofImage)
    if (res?.success) {
      setRequests((prev) =>
        prev.map((req) => (req.id === id ? { ...req, status: 'paid', proofImage: proofImage || 'https://via.placeholder.com/150' } : req))
      )
    }
  }

  const handleReject = async (id) => {
    const res = await adminEarningsApi.rejectWithdrawal(id)
    if (res?.success) {
      setRequests((prev) =>
        prev.map((req) => (req.id === id ? { ...req, status: 'rejected' } : req))
      )
    }
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
      <div className="flex items-center justify-between">
        <button
          aria-label={isRtl ? 'اختر التاريخ' : 'Select Date'}
          className="p-2.5 bg-teal-50 dark:bg-teal-950/20 text-[#0f7a6c] dark:text-emerald-400 rounded-xl hover:opacity-90 active:scale-95 transition-all shadow-sm"
        >
          <Calendar size={20} />
        </button>

        <div className="flex items-center gap-4 bg-white dark:bg-slate-900 px-4 py-2 rounded-2xl border border-slate-100 dark:border-slate-800/60 shadow-sm">
          <button
            onClick={isRtl ? handlePrevMonth : handleNextMonth}
            aria-label={isRtl ? 'الشهر السابق' : 'Previous Month'}
            className="p-1 rounded-lg hover:bg-slate-50 dark:hover:bg-slate-800 text-slate-400 hover:text-slate-600 transition-colors"
          >
            <ChevronRight size={18} />
          </button>
          <span className="text-sm font-bold text-slate-800 dark:text-white min-w-[90px] text-center">
            {formatMonth()}
          </span>
          <button
            onClick={isRtl ? handleNextMonth : handlePrevMonth}
            aria-label={isRtl ? 'الشهر التالي' : 'Next Month'}
            className="p-1 rounded-lg hover:bg-slate-50 dark:hover:bg-slate-800 text-slate-400 hover:text-slate-600 transition-colors"
          >
            <ChevronLeft size={18} />
          </button>
        </div>
      </div>

      {stats && <EarningsStats stats={stats} />}

      {teachers.length > 0 && <TeacherEarningsList teachers={teachers} />}

      <WithdrawalRequests
        requests={requests}
        onApprove={handleApprove}
        onReject={handleReject}
      />
    </div>
  )
}
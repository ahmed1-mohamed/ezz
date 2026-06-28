import { useState, useEffect, useCallback } from 'react'
import { useTranslation } from 'react-i18next'
import Spinner from '@/shared/components/Spinner'
import { adminAssignmentsApi } from '@/shared/services/api/adminAssignmentsApi'
import AssignmentsStats from './components/AssignmentsStats'
import AssignmentsFilters from './components/AssignmentsFilters'
import AssignmentsTable from './components/AssignmentsTable'

export default function AdminAssignments() {
  const { i18n } = useTranslation()
  const isRtl = i18n.language.startsWith('ar')

  const [stats, setStats] = useState(null)
  const [assignments, setAssignments] = useState([])
  const [loading, setLoading] = useState(true)

  const [activeTab, setActiveTab] = useState('assignments')
  const [searchValue, setSearchValue] = useState('')

  const loadData = useCallback(async () => {
    setLoading(true)
    const [statsRes, assignmentsRes] = await Promise.all([
      adminAssignmentsApi.fetchStats(),
      adminAssignmentsApi.fetchAssignments(searchValue),
    ])
    if (statsRes?.data) setStats(statsRes.data)
    if (assignmentsRes?.data) setAssignments(assignmentsRes.data)
    setLoading(false)
  }, [searchValue])

  useEffect(() => {
    // eslint-disable-next-line react-hooks/set-state-in-effect
    loadData()
  }, [loadData])

  const handleDelete = async (id) => {
    const res = await adminAssignmentsApi.deleteAssignment(id)
    if (res?.success) {
      setAssignments((prev) => prev.filter((item) => item.id !== id))
      // reload stats
      const statsRes = await adminAssignmentsApi.fetchStats()
      if (statsRes?.data) setStats(statsRes.data)
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
    <div className="space-y-8" dir={isRtl ? 'rtl' : 'ltr'}>
      {/* Top stats cards */}
      {stats && <AssignmentsStats stats={stats} />}

      {/* Filters bar */}
      <AssignmentsFilters
        activeTab={activeTab}
        setActiveTab={setActiveTab}
        searchValue={searchValue}
        setSearchValue={setSearchValue}
      />

      {/* Table list */}
      {loading ? (
        <div className="flex items-center justify-center h-40">
          <Spinner />
        </div>
      ) : (
        <AssignmentsTable
          assignments={assignments}
          onDelete={handleDelete}
        />
      )}
    </div>
  )
}

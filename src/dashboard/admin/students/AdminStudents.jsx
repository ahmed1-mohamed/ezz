import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { useTranslation } from 'react-i18next'
import { toast } from 'react-hot-toast'
import { useQuery, useQueryClient } from '@tanstack/react-query'
import { studentsApi } from '@/shared/services/api/studentsApi'
import StudentsList from './components/StudentsList'
import Spinner from '@/shared/components/Spinner'
import { showDeleteConfirm } from '@/shared/utils/sweetAlert'

import useDebounce from '@/shared/hooks/useDebounce'

export default function AdminStudents() {
  const { t, i18n } = useTranslation()
  const isRtl = i18n.language.startsWith('ar')
  const navigate = useNavigate()

  const queryClient = useQueryClient()
  const [statusFilter, setStatusFilter] = useState('all')
  const [currentPage, setCurrentPage] = useState(1)
  const [searchTerm, setSearchTerm] = useState('')
  const debouncedSearch = useDebounce(searchTerm, 400)

  const { data: fetchRes, isLoading } = useQuery({
    queryKey: ['adminStudents', statusFilter, currentPage, debouncedSearch],
    queryFn: () => studentsApi.fetchStudents({
      status: statusFilter,
      page: currentPage,
      limit: 10,
      search: debouncedSearch.trim() || undefined
    }),
    staleTime: 3 * 60 * 1000
  })

  const rawList = fetchRes?.data || (Array.isArray(fetchRes) ? fetchRes : [])
  const students = Array.isArray(rawList) ? rawList : []

  const pagination = fetchRes?.pagination || {}
  const totalPages = Number(pagination.numberOfPages || 1)
  const totalCount = Number(pagination.totalCount || pagination.total || students.length)

  const statistics = fetchRes?.statistics || {
    total: students.length,
    active: students.filter((s) => s.active === true || String(s.active) === 'true').length,
    stopped: students.filter((s) => s.active === false || String(s.active) === 'false').length
  }

  const handleStatusFilterChange = (newStatus) => {
    setStatusFilter(newStatus)
    setCurrentPage(1)
  }

  const handleDeleteStudent = async (student) => {
    if (!student) return
    const id = student.student_id || student._id || student.id
    const studentName = typeof student.name === 'string'
      ? student.name
      : (student.name?.ar || student.name?.en || 'الطالب')

    const isConfirmed = await showDeleteConfirm(isRtl, studentName)
    if (!isConfirmed) return

    try {
      await studentsApi.deleteStudent(id)
      await queryClient.invalidateQueries({ queryKey: ['adminStudents'] })
      toast.success(isRtl ? 'تم حذف الطالب بنجاح' : 'Student deleted successfully')
    } catch (err) {
      toast.error(isRtl ? 'حدث خطأ أثناء حذف الطالب' : 'Failed to delete student')
      console.error('Failed to delete student:', err)
    }
  }

  return (
    <div className="space-y-8 p-1 md:p-6 relative" dir={isRtl ? 'rtl' : 'ltr'}>
      {isLoading && (
        <div className="absolute inset-0 z-50 flex items-center justify-center bg-white/50 dark:bg-slate-900/50 backdrop-blur-sm rounded-3xl">
          <Spinner />
        </div>
      )}

      <div className="text-start">
        <h1 className="text-2xl font-bold text-slate-800 dark:text-white">
          {t('adminDashboard.students.title', 'إدارة الطلاب')}
        </h1>
        <p className="text-sm text-slate-400 dark:text-slate-500 mt-1">
          {t('adminDashboard.students.subtitle', 'منارة العز أكاديمي · لوحة الإدارة')}
        </p>
      </div>

      <StudentsList
        students={students}
        statistics={statistics}
        activeStatus={statusFilter}
        onStatusChange={handleStatusFilterChange}
        isRtl={isRtl}
        t={t}
        onOpenAddScreen={() => navigate('/dashboard/admin/students/add')}
        currentPage={currentPage}
        totalPages={totalPages}
        totalCount={totalCount}
        onPageChange={setCurrentPage}
        searchVal={searchTerm}
        onSearchChange={(val) => {
          setSearchTerm(val)
          setCurrentPage(1)
        }}
        onDelete={handleDeleteStudent}
      />
    </div>
  )
}

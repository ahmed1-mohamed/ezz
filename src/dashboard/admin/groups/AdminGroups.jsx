import { useState, useEffect, useMemo, useCallback } from 'react'
import { useTranslation } from 'react-i18next'
import {
  Search,
  Plus,

  Layers,
  ChevronLeft,
  ChevronRight,

} from 'lucide-react'
import { adminGroupsApi } from '@/shared/services/api/adminGroupsApi'
import { showDeleteConfirm, showSuccessToast, showErrorToast } from '@/shared/utils/sweetAlert'
import AddEditGroupScreen from './components/AddEditGroupScreen'
import AddStudentsModal from './components/AddStudentsModal'
import ChangeTeacherModal from './components/ChangeTeacherModal'
import Spinner from '@/shared/components/Spinner'

import { getLocalizedValue } from './utils/groupUtils'
import GroupCard from './components/GroupCard'
import GroupDetailsModal from './components/GroupDetailsModal'

export default function AdminGroups() {
  const { t, i18n } = useTranslation()
  const isRtl = i18n.language.startsWith('ar')

  const [viewMode, setViewMode] = useState('list')
  const [groups, setGroups] = useState([])
  const [pagination, setPagination] = useState(null)
  const [isLoading, setIsLoading] = useState(true)
  const [selectedGroup, setSelectedGroup] = useState(null)
  const [searchQuery, setSearchQuery] = useState('')
  const [statusFilter, setStatusFilter] = useState('all')
  const [currentPage, setCurrentPage] = useState(1)
  const [showStudentsModal, setShowStudentsModal] = useState(false)
  const [showAddStudentsModal, setShowAddStudentsModal] = useState(false)
  const [showChangeTeacherModal, setShowChangeTeacherModal] = useState(false)
  const [groupForTeacherChange, setGroupForTeacherChange] = useState(null)

  const itemsPerPage = 10

  const STATUS_FILTER_KEYS = useMemo(() => [
    { key: 'all', label: t('adminDashboard.groups.filterAll', 'الكل'), matchVal: 'الكل' },
    { key: 'active', label: t('adminDashboard.groups.filterActive', 'نشط'), matchVal: 'نشط' },
    { key: 'suspended', label: t('adminDashboard.groups.filterSuspended', 'متوقف'), matchVal: 'متوقف' },
    { key: 'completed', label: t('adminDashboard.groups.filterCompleted', 'مكتمل'), matchVal: 'مكتمل' },
  ], [t])

  const loadGroups = useCallback(async () => {
    setIsLoading(true)
    try {
      const params = {
        page: currentPage,
        limit: itemsPerPage,
      }
      if (searchQuery.trim()) {
        params.search = searchQuery.trim()
      }
      if (statusFilter !== 'all') {
        params.status = statusFilter
      }

      const res = await adminGroupsApi.fetchGroups(params)
      const data = res?.data || res
      const items = Array.isArray(data) ? data : (Array.isArray(res) ? res : [])

      setGroups(items)

      if (res?.pagination) {
        setPagination(res.pagination)
      } else {
        setPagination(null)
      }
    } catch (err) {
      console.error('Failed to fetch groups:', err)
    } finally {
      setIsLoading(false)
    }
  }, [currentPage, searchQuery, statusFilter, itemsPerPage])

  useEffect(() => {
    loadGroups()
  }, [loadGroups])

  const filtered = useMemo(() => {
    let result = groups

    if (statusFilter !== 'all' && !pagination) {
      const activeObj = STATUS_FILTER_KEYS.find((f) => f.key === statusFilter)
      const targetVal = activeObj ? activeObj.matchVal : statusFilter
      result = result.filter((g) => g.status === targetVal || g.status === statusFilter)
    }

    if (searchQuery.trim() && !pagination) {
      const q = searchQuery.toLowerCase()
      result = result.filter((g) => {
        const name = getLocalizedValue(g.name, isRtl).toLowerCase()
        const teacher = (getLocalizedValue(g.teacher?.name, isRtl) || (typeof g.teacher === 'string' ? g.teacher : '')).toLowerCase()
        const curriculum = getLocalizedValue(g.curriculum?.name || g.subject, isRtl).toLowerCase()
        const level = getLocalizedValue(g.studentLevel?.name || g.level, isRtl).toLowerCase()
        return name.includes(q) || teacher.includes(q) || curriculum.includes(q) || level.includes(q)
      })
    }

    return result
  }, [groups, statusFilter, searchQuery, pagination, STATUS_FILTER_KEYS, isRtl])

  // Metrics summary
  const metrics = useMemo(() => {
    const total = pagination?.totalCount ?? groups.length
    const active = groups.filter((g) => g.status === 'نشط' || g.status === 'active').length
    const suspended = groups.filter((g) => g.status === 'متوقف' || g.status === 'suspended').length
    const students = groups.reduce((acc, g) => acc + (g.currentStudentsCount ?? g.students?.length ?? 0), 0)

    return { total, active, suspended, students }
  }, [groups, pagination])

  // Pagination calculations
  const totalCount = pagination?.totalCount ?? filtered.length
  const totalPages = pagination?.numberOfPages ?? Math.max(1, Math.ceil(totalCount / itemsPerPage))
  const isPaginationDimmed = totalPages <= 1

  const paged = useMemo(() => {
    if (pagination) {
      // Backend returned pre-paginated data
      return filtered
    }
    const start = (currentPage - 1) * itemsPerPage
    return filtered.slice(start, start + itemsPerPage)
  }, [filtered, currentPage, pagination, itemsPerPage])

  const handleSaveGroup = async (formData) => {
    setIsLoading(true)
    try {
      if (viewMode === 'edit-group' && selectedGroup) {
        const res = await adminGroupsApi.updateGroup(selectedGroup.id, formData)
        const updatedItem = res?.data || res
        if (updatedItem) {
          setGroups((prev) => prev.map((g) => (g.id === selectedGroup.id ? { ...g, ...updatedItem } : g)))
          setSelectedGroup(null)
          setViewMode('list')
          loadGroups()
          showSuccessToast(res?.message || t('adminDashboard.groups.updateSuccess', 'تم تحديث بيانات المجموعة بنجاح'), isRtl)
        }
      } else {
        const res = await adminGroupsApi.createGroup(formData)
        const newItem = res?.data || res
        if (newItem) {
          setGroups((prev) => [newItem, ...prev])
          setSelectedGroup(null)
          setViewMode('list')
          loadGroups()
          showSuccessToast(res?.message || t('adminDashboard.groups.createSuccess', 'تم إنشاء المجموعة بنجاح'), isRtl)
        }
      }
    } catch (error) {
      console.error('Error saving group:', error)
      showErrorToast(error?.response?.data?.message || t('common.errorOccurred', 'حدث خطأ، يرجى المحاولة مرة أخرى'), isRtl)
    } finally {
      setIsLoading(false)
    }
  }

  const handleDeleteGroup = async (group) => {
    const isConfirmed = await showDeleteConfirm(isRtl, getLocalizedValue(group.name, isRtl))
    if (!isConfirmed) return
    setIsLoading(true)
    try {
      const res = await adminGroupsApi.deleteGroup(group.id)
      if (res?.success || res?.status === 200 || res) {
        setGroups((prev) => prev.filter((g) => g.id !== group.id))
        loadGroups()
        showSuccessToast(res?.message || t('adminDashboard.groups.deleteSuccess', 'تم حذف المجموعة بنجاح'), isRtl)
      }
    } catch (error) {
      console.error('Failed to delete group:', error)
      showErrorToast(error?.response?.data?.message || t('adminDashboard.groups.deleteError', 'فشل حذف المجموعة، يرجى المحاولة لاحقاً'), isRtl)
    } finally {
      setIsLoading(false)
    }
  }

  const handleRemoveStudent = async (groupId, studentId, studentName) => {
    const isConfirmed = await showDeleteConfirm(isRtl, studentName)
    if (!isConfirmed) return

    try {
      const res = await adminGroupsApi.removeStudentFromGroup(groupId, studentId)
      if (res?.success || res) {
        setGroups((prev) =>
          prev.map((g) => {
            if (g.id === groupId) {
              const list = (g.students || []).filter((s) => s.id !== studentId)
              return { ...g, students: list, currentStudentsCount: list.length }
            }
            return g
          })
        )
        if (selectedGroup?.id === groupId) {
          setSelectedGroup((prev) => {
            if (!prev) return prev
            const list = (prev.students || []).filter((s) => s.id !== studentId)
            return { ...prev, students: list, currentStudentsCount: list.length }
          })
        }
        showSuccessToast(res?.message || t('adminDashboard.groups.removeStudentSuccess', 'تمت إزالة الطالب من المجموعة بنجاح'), isRtl)
      }
    } catch (error) {
      console.error('Failed to remove student:', error)
      showErrorToast(error?.response?.data?.message || t('adminDashboard.groups.removeStudentError', 'فشل إزالة الطالب من المجموعة'), isRtl)
    }
  }

  const handleEditGroup = async (group) => {
    setIsLoading(true)
    try {
      // Use GET /api/v1/groups/private/{id} to get raw multilingual data
      const res = await adminGroupsApi.fetchGroupByIdRaw(group.id)
      const data = res?.data || res
      if (data && (data.id || data.name)) {
        setSelectedGroup(data)
      } else {
        setSelectedGroup(group)
      }
    } catch (err) {
      console.warn('Error fetching raw group for edit, using card data:', err)
      setSelectedGroup(group)
    } finally {
      setIsLoading(false)
      setViewMode('edit-group')
    }
  }

  const handleViewStudents = async (group) => {
    setSelectedGroup(group)
    setShowStudentsModal(true)
    try {
      // Use GET /api/v1/groups/private/localized/{id} to get localized student details
      const res = await adminGroupsApi.fetchGroupByIdLocalized(group.id)
      const detailedGroup = res?.data || res
      if (detailedGroup && (detailedGroup.students || detailedGroup.id)) {
        setSelectedGroup((prev) => ({ ...prev, ...detailedGroup }))
      }
    } catch (err) {
      console.warn('Could not load detailed localized group data:', err)
    }
  }

  const handleAddSingleStudent = async (groupId, student) => {
    try {
      setIsLoading(true)
      const res = await adminGroupsApi.addStudentToGroup(groupId, student)
      const detailRes = await adminGroupsApi.fetchGroupByIdLocalized(groupId)
      const detailedGroup = detailRes?.data || detailRes
      if (detailedGroup) {
        setGroups((prev) => prev.map((g) => (g.id === groupId ? { ...g, ...detailedGroup } : g)))
        setSelectedGroup(detailedGroup)
      }
      loadGroups()
      showSuccessToast(res?.message || t('adminDashboard.groups.addStudentSuccess', 'تمت إضافة الطالب إلى المجموعة بنجاح'), isRtl)
    } catch (error) {
      console.error('Failed to add student to group:', error)
      showErrorToast(error?.response?.data?.message || t('adminDashboard.groups.addStudentError', 'فشل إضافة الطالب إلى المجموعة'), isRtl)
    } finally {
      setIsLoading(false)
    }
  }

  const handleAddStudents = async (students) => {
    if (!students || students.length === 0) return
    setIsLoading(true)
    try {
      for (const student of students) {
        await adminGroupsApi.addStudentToGroup(selectedGroup.id, student)
      }
      const res = await adminGroupsApi.fetchGroupByIdLocalized(selectedGroup.id)
      const detailedGroup = res?.data || res
      if (detailedGroup) {
        setGroups((prev) => prev.map((g) => (g.id === selectedGroup.id ? { ...g, ...detailedGroup } : g)))
        setSelectedGroup(detailedGroup)
      }
      loadGroups()
      showSuccessToast(t('adminDashboard.groups.addStudentsSuccess', 'تمت إضافة الطلاب إلى المجموعة بنجاح'), isRtl)
      setShowAddStudentsModal(false)
    } catch (error) {
      console.error('Failed to add students:', error)
      showErrorToast(error?.response?.data?.message || t('adminDashboard.groups.addStudentsError', 'فشل إضافة الطلاب إلى المجموعة'), isRtl)
    } finally {
      setIsLoading(false)
    }
  }

  const handleOpenChangeTeacher = (group) => {
    setGroupForTeacherChange(group)
    setShowChangeTeacherModal(true)
  }

  const handleChangeTeacher = async (teacherId, teacherObj) => {
    if (!groupForTeacherChange) return
    const groupId = groupForTeacherChange.id
    setIsLoading(true)
    try {
      const teacherName = typeof teacherObj?.name === 'object'
        ? (teacherObj.name.ar || teacherObj.name.en)
        : (teacherObj?.name || 'المعلم الجديد')

      const res = await adminGroupsApi.changeTeacher(groupId, {
        teacher: teacherId,
        teacherId,
        name: teacherName,
        email: teacherObj?.email,
        phone: teacherObj?.phone,
      })

      const newTeacherData = {
        id: teacherId,
        name: teacherName,
        email: teacherObj?.email || '',
        phone: teacherObj?.phone || '',
      }

      setGroups((prev) =>
        prev.map((g) => (String(g.id) === String(groupId) ? { ...g, teacher: newTeacherData } : g))
      )

      if (selectedGroup && String(selectedGroup.id) === String(groupId)) {
        setSelectedGroup((prev) => (prev ? { ...prev, teacher: newTeacherData } : prev))
      }

      loadGroups()
      showSuccessToast(
        res?.message || t('adminDashboard.groups.changeTeacherSuccess', 'تم تغيير معلم المجموعة بنجاح'),
        isRtl
      )
    } catch (error) {
      console.error('Failed to change group teacher:', error)
      showErrorToast(
        error?.response?.data?.message || t('adminDashboard.groups.changeTeacherError', 'فشل تغيير معلم المجموعة'),
        isRtl
      )
    } finally {
      setIsLoading(false)
    }
  }

  if (viewMode === 'add-group' || viewMode === 'edit-group') {
    return (
      <AddEditGroupScreen
        group={viewMode === 'edit-group' ? selectedGroup : null}
        isRtl={isRtl}
        t={t}
        onSave={handleSaveGroup}
        onCancel={() => {
          setSelectedGroup(null)
          setViewMode('list')
        }}
      />
    )
  }

  const startIdx = totalCount > 0 ? (currentPage - 1) * itemsPerPage + 1 : 0
  const endIdx = totalCount > 0 ? Math.min(currentPage * itemsPerPage, totalCount) : 0

  return (
    <div className="space-y-6 p-1 md:p-6 relative" dir={isRtl ? 'rtl' : 'ltr'}>
      {isLoading && (
        <div className="absolute inset-0 z-50 flex items-center justify-center bg-white/50 dark:bg-slate-900/50 backdrop-blur-sm rounded-3xl">
          <Spinner />
        </div>
      )}
      <div className="text-start">
        <h1 className="text-2xl font-bold text-slate-800 dark:text-white">
          {t('adminDashboard.groups.title', 'إدارة المجموعات')}
        </h1>
        <p className="text-sm text-slate-400 dark:text-slate-500 mt-1">
          {t('adminDashboard.groups.subtitle', 'منارة العز أكاديمي · لوحة الإدارة')}
        </p>
      </div>

      {/* Metrics Row */}
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
        {[
          { label: t('adminDashboard.groups.totalGroups', 'إجمالي المجموعات'), value: metrics.total, cls: 'text-slate-700 dark:text-slate-200' },
          { label: t('adminDashboard.groups.activeGroups', 'المجموعات النشطة'), value: metrics.active, cls: 'text-brand-600 dark:text-brand-400' },
          { label: t('adminDashboard.groups.suspendedGroups', 'المتوقفة'), value: metrics.suspended, cls: 'text-amber-600 dark:text-amber-400' },
          { label: t('adminDashboard.groups.totalStudents', 'إجمالي الطلاب'), value: metrics.students, cls: 'text-blue-600 dark:text-blue-400' },
        ].map((m) => (
          <div
            key={m.label}
            className="flex flex-col items-center justify-center gap-1 p-5 bg-white dark:bg-slate-900 rounded-3xl border border-slate-100 dark:border-slate-800/60 shadow-soft"
          >
            <span className={`text-3xl font-extrabold ${m.cls}`}>{m.value}</span>
            <span className="text-xs font-semibold text-slate-400 dark:text-slate-500 text-center">{m.label}</span>
          </div>
        ))}
      </div>

      {/* Search and Filters Bar */}
      <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-3 p-4 bg-white dark:bg-slate-900 rounded-3xl border border-slate-100 dark:border-slate-800/60 shadow-soft">
        <div className="flex items-center gap-3 flex-wrap">
          <button
            onClick={() => {
              setSelectedGroup(null)
              setViewMode('add-group')
            }}
            className="flex items-center gap-2 px-5 py-2.5 rounded-2xl bg-brand-500 hover:bg-brand-600 text-white text-sm font-semibold transition-all shadow-md shadow-brand-500/20 active:scale-[0.98] cursor-pointer"
          >
            <Plus size={18} />
            <span>{t('adminDashboard.groups.addGroup', 'إضافة مجموعة')}</span>
          </button>
          <div className="flex items-center gap-1.5 flex-wrap">
            {STATUS_FILTER_KEYS.map((f) => (
              <button
                key={f.key}
                onClick={() => {
                  setStatusFilter(f.key)
                  setCurrentPage(1)
                }}
                className={`px-3 py-1.5 rounded-xl text-xs font-bold transition-all cursor-pointer ${statusFilter === f.key
                    ? 'bg-brand-500 text-white shadow-sm'
                    : 'bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300 hover:bg-slate-200 dark:hover:bg-slate-700'
                  }`}
              >
                {f.label}
              </button>
            ))}
          </div>
        </div>
        <div className="relative w-full sm:w-64">
          <Search size={16} className={`absolute ${isRtl ? 'right-3' : 'left-3'} top-1/2 -translate-y-1/2 text-slate-400 pointer-events-none`} />
          <input
            type="text"
            placeholder={t('adminDashboard.groups.searchPlaceholder', 'بحث في المجموعات...')}
            value={searchQuery}
            onChange={(e) => {
              setSearchQuery(e.target.value)
              setCurrentPage(1)
            }}
            className={`w-full bg-[#f3f7f6] dark:bg-slate-800 rounded-2xl py-2.5 ${isRtl ? 'pr-9 pl-4' : 'pl-9 pr-4'} text-sm text-slate-700 dark:text-slate-200 outline-none border border-transparent focus:border-brand-400 transition-colors placeholder-slate-400`}
          />
        </div>
      </div>

      {/* Grid of Groups */}
      {paged.length === 0 ? (
        <div className="flex flex-col items-center justify-center py-20 gap-3 text-slate-400 bg-white dark:bg-slate-900 rounded-3xl border border-slate-100 dark:border-slate-800/60">
          <Layers size={48} strokeWidth={1.5} />
          <p className="text-sm font-medium">{t('adminDashboard.groups.noGroupsFound', 'لا توجد مجموعات مطابقة')}</p>
        </div>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
          {paged.map((group) => (
            <GroupCard
              key={group.id}
              group={group}
              onEdit={handleEditGroup}
              onViewStudents={handleViewStudents}
              onDelete={handleDeleteGroup}
              onChangeTeacher={handleOpenChangeTeacher}
              t={t}
              isRtl={isRtl}
            />
          ))}
        </div>
      )}

      {/* Pagination — displays server or client pagination smoothly */}
      <div
        className={`flex flex-col sm:flex-row items-center justify-between gap-4 p-5 bg-white dark:bg-slate-900 border border-slate-100 dark:border-slate-800 rounded-3xl shadow-soft mt-6 transition-opacity duration-300 ${isPaginationDimmed ? 'opacity-40 pointer-events-none select-none' : ''
          }`}
      >
        <div className="text-sm text-slate-400 dark:text-slate-500 font-medium">
          {isRtl ? (
            <>
              {t('adminDashboard.students.pagination.showing', 'عرض')}{' '}
              <span className="font-semibold text-slate-700 dark:text-slate-200">{startIdx}</span>{' '}
              {t('adminDashboard.students.pagination.to', 'إلى')}{' '}
              <span className="font-semibold text-slate-700 dark:text-slate-200">{endIdx}</span>{' '}
              {t('adminDashboard.students.pagination.of', 'من أصل')}{' '}
              <span className="font-semibold text-slate-700 dark:text-slate-200">{totalCount}</span>{' '}
              {t('adminDashboard.groups.title', 'مجموعات')}
            </>
          ) : (
            <>
              {t('adminDashboard.students.pagination.showing', 'Showing')}{' '}
              <span className="font-semibold text-slate-700 dark:text-slate-200">{startIdx}</span>{' '}
              {t('adminDashboard.students.pagination.to', 'to')}{' '}
              <span className="font-semibold text-slate-700 dark:text-slate-200">{endIdx}</span>{' '}
              {t('adminDashboard.students.pagination.of', 'of')}{' '}
              <span className="font-semibold text-slate-700 dark:text-slate-200">{totalCount}</span>{' '}
              {t('adminDashboard.groups.title', 'groups')}
            </>
          )}
        </div>

        <div className="flex items-center gap-2">
          <button
            type="button"
            onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
            disabled={currentPage === 1 || isPaginationDimmed}
            className="flex items-center gap-1.5 px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold border border-slate-100 dark:border-slate-800 bg-white hover:bg-slate-50 dark:bg-slate-900 dark:hover:bg-slate-800 text-slate-700 dark:text-slate-300 disabled:opacity-40 disabled:cursor-not-allowed transition-all cursor-pointer"
          >
            {isRtl ? <ChevronRight size={16} aria-hidden="true" /> : <ChevronLeft size={16} aria-hidden="true" />}
          </button>

          <span className="px-3 py-2 rounded-xl text-xs sm:text-sm font-bold border border-slate-100 dark:border-slate-800 bg-white dark:bg-slate-900 text-slate-700 dark:text-slate-300 min-w-[80px] text-center">
            {currentPage} / {totalPages}
          </span>

          <button
            type="button"
            onClick={() => setCurrentPage((prev) => Math.min(prev + 1, totalPages))}
            disabled={currentPage === totalPages || isPaginationDimmed}
            className="flex items-center gap-1.5 px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold border border-slate-100 dark:border-slate-800 bg-white hover:bg-slate-50 dark:bg-slate-900 dark:hover:bg-slate-800 text-slate-700 dark:text-slate-300 disabled:opacity-40 disabled:cursor-not-allowed transition-all cursor-pointer"
          >
            {isRtl ? <ChevronLeft size={16} aria-hidden="true" /> : <ChevronRight size={16} aria-hidden="true" />}
          </button>
        </div>
      </div>

      {showStudentsModal && selectedGroup && (
        <GroupDetailsModal
          group={selectedGroup}
          onClose={() => {
            setShowStudentsModal(false)
            setSelectedGroup(null)
          }}
          onRemoveStudent={handleRemoveStudent}
          onOpenAddStudents={() => {
            setShowStudentsModal(false)
            setShowAddStudentsModal(true)
          }}
          onAddStudent={handleAddSingleStudent}
          onChangeTeacher={handleOpenChangeTeacher}
          t={t}
          isRtl={isRtl}
        />
      )}

      {showAddStudentsModal && selectedGroup && (
        <AddStudentsModal
          group={selectedGroup}
          isRtl={isRtl}
          onAdd={handleAddStudents}
          onCancel={() => setShowAddStudentsModal(false)}
        />
      )}

      {showChangeTeacherModal && groupForTeacherChange && (
        <ChangeTeacherModal
          group={groupForTeacherChange}
          onClose={() => {
            setShowChangeTeacherModal(false)
            setGroupForTeacherChange(null)
          }}
          onConfirm={handleChangeTeacher}
          isRtl={isRtl}
        />
      )}
    </div>
  )
}
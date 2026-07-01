import { useState, useEffect, useMemo } from 'react'
import { useTranslation } from 'react-i18next'
import {
  Search,
  Plus,
  Pencil,
  Trash2,
  Users,
  Layers,
} from 'lucide-react'
import { adminGroupsApi } from '@/shared/services/api/adminGroupsApi'
import { showDeleteConfirm } from '@/shared/utils/sweetAlert'
import AddEditGroupScreen from './components/AddEditGroupScreen'
import AddStudentsModal from './components/AddStudentsModal'
import Spinner from '@/shared/components/Spinner'

const STATUS_FILTERS = ['الكل', 'نشط', 'متوقف', 'مكتمل']

function StatusBadge({ status }) {
  const map = {
    'نشط': 'bg-brand-50 dark:bg-brand-900/20 text-brand-600 dark:text-brand-400 border-brand-200 dark:border-brand-800',
    'متوقف': 'bg-amber-50 dark:bg-amber-900/20 text-amber-600 dark:text-amber-400 border-amber-200 dark:border-amber-800',
    'مكتمل': 'bg-slate-100 dark:bg-slate-800 text-slate-500 dark:text-slate-400 border-slate-200 dark:border-slate-700',
  }
  return (
    <span className={`inline-flex items-center px-2.5 py-1 rounded-full text-xs font-bold border ${map[status] || map['مكتمل']}`}>
      {status}
    </span>
  )
}

function GroupCard({ group, onEdit, onViewStudents, onDelete }) {
  return (
    <div className="bg-white dark:bg-slate-900 rounded-3xl border border-slate-100 dark:border-slate-800/60 shadow-soft p-5 flex flex-col gap-4 hover:shadow-md transition-all group">
      <div className="flex items-start justify-between gap-3">
        <div className="flex items-center gap-2">
          <button
            onClick={() => onDelete(group.id)}
            className="opacity-0 group-hover:opacity-100 p-1.5 rounded-lg text-red-400 hover:bg-red-50 dark:hover:bg-red-900/20 transition-all"
          >
            <Trash2 size={14} />
          </button>
          <button
            onClick={() => onEdit(group)}
            className="p-1.5 rounded-lg text-slate-400 hover:bg-slate-100 dark:hover:bg-slate-800 transition-all"
          >
            <Pencil size={14} />
          </button>
        </div>
        <div className="flex flex-col items-end gap-1 min-w-0">
          <StatusBadge status={group.status} />
          <h3 className="text-sm font-bold text-slate-800 dark:text-white text-end truncate">{group.name}</h3>
          <p className="text-xs text-slate-400 dark:text-slate-500 text-end">{group.subject} · {group.level}</p>
        </div>
      </div>

      <div className="grid grid-cols-2 gap-3 text-xs">
        <div className="flex flex-col items-center gap-1 bg-slate-50 dark:bg-slate-800/50 rounded-2xl px-3 py-2">
          <span className="font-bold text-slate-700 dark:text-slate-200">{group.teacher}</span>
          <span className="text-slate-400 dark:text-slate-500">المعلم</span>
        </div>
        <div className="flex flex-col items-center gap-1 bg-slate-50 dark:bg-slate-800/50 rounded-2xl px-3 py-2">
          <span className="font-bold text-brand-600 dark:text-brand-400">{group.students?.length ?? 0} / {group.maxStudents}</span>
          <span className="text-slate-400 dark:text-slate-500">الطلاب</span>
        </div>
      </div>

      <div className="flex flex-wrap gap-1.5 justify-end">
        {(group.schedule || []).slice(0, 3).map((s, i) => (
          <span key={i} className="text-[11px] font-medium px-2 py-1 bg-brand-50 dark:bg-brand-900/20 text-brand-600 dark:text-brand-400 rounded-lg">
            {s.day}
          </span>
        ))}
      </div>

      <button
        onClick={() => onViewStudents(group)}
        className="w-full flex items-center justify-center gap-2 py-2 rounded-2xl border border-dashed border-brand-300 dark:border-brand-700 text-brand-600 dark:text-brand-400 text-xs font-semibold hover:bg-brand-50 dark:hover:bg-brand-900/10 transition-all"
      >
        <Users size={14} />
        <span>عرض الطلاب وإدارتهم</span>
      </button>
    </div>
  )
}

function GroupDetailsModal({ group, onClose, onRemoveStudent }) {
  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4"
      onClick={onClose}
    >
      <div className="absolute inset-0 bg-black/40 backdrop-blur-sm" />
      <div
        className="relative bg-white dark:bg-slate-900 rounded-3xl shadow-2xl w-full max-w-lg max-h-[80vh] overflow-y-auto"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex items-center justify-between p-5 border-b border-slate-100 dark:border-slate-800 sticky top-0 bg-white dark:bg-slate-900 z-10 rounded-t-3xl">
          <button
            onClick={onClose}
            className="p-2 rounded-xl bg-slate-50 dark:bg-slate-800 hover:bg-slate-100 dark:hover:bg-slate-700 transition-colors"
          >
            <Layers size={18} className="text-slate-500" />
          </button>
          <div className="text-end">
            <h2 className="text-sm font-bold text-slate-800 dark:text-white">{group.name}</h2>
            <p className="text-xs text-slate-400">طلاب المجموعة ({group.students?.length ?? 0})</p>
          </div>
        </div>
        <div className="p-5 space-y-3">
          {(!group.students || group.students.length === 0) ? (
            <p className="text-center text-slate-400 text-sm py-8">لا يوجد طلاب مسجلون في هذه المجموعة</p>
          ) : (
            group.students.map((student) => (
              <div
                key={student.id}
                className="flex items-center justify-between gap-3 p-3 bg-slate-50 dark:bg-slate-800 rounded-2xl"
              >
                <button
                  onClick={() => onRemoveStudent(group.id, student.id, student.name)}
                  className="flex items-center gap-1 px-2.5 py-1.5 rounded-xl text-xs font-semibold bg-red-50 dark:bg-red-900/20 text-red-600 dark:text-red-400 hover:bg-red-100 transition-all border border-red-200 dark:border-red-800"
                >
                  <Trash2 size={12} />
                  <span>إزالة</span>
                </button>
                <div className="text-end">
                  <p className="text-sm font-bold text-slate-800 dark:text-white">{student.name}</p>
                  <p className="text-xs text-slate-400">{student.joinDate}</p>
                </div>
              </div>
            ))
          )}
        </div>
      </div>
    </div>
  )
}

export default function AdminGroups() {
  const { t, i18n } = useTranslation()
  const isRtl = i18n.language.startsWith('ar')

  const [viewMode, setViewMode] = useState('list')
  const [groups, setGroups] = useState([])
  const [isLoading, setIsLoading] = useState(true)
  const [selectedGroup, setSelectedGroup] = useState(null)
  const [searchQuery, setSearchQuery] = useState('')
  const [statusFilter, setStatusFilter] = useState('الكل')
  const [currentPage, setCurrentPage] = useState(1)
  const [showStudentsModal, setShowStudentsModal] = useState(false)
  const [showAddStudentsModal, setShowAddStudentsModal] = useState(false)

  const itemsPerPage = 8

  useEffect(() => {
    async function loadGroups() {
      setIsLoading(true)
      try {
        const res = await adminGroupsApi.fetchGroups()
        if (res.success) setGroups(res.data)
      } catch (err) {
        console.error('Failed to fetch groups:', err)
      } finally {
        setIsLoading(false)
      }
    }
    loadGroups()
  }, [])

  const metrics = useMemo(() => ({
    total: groups.length,
    active: groups.filter((g) => g.status === 'نشط').length,
    suspended: groups.filter((g) => g.status === 'متوقف').length,
    students: groups.reduce((acc, g) => acc + (g.students?.length ?? 0), 0),
  }), [groups])

  const filtered = useMemo(() => {
    let result = groups
    if (statusFilter !== 'الكل') result = result.filter((g) => g.status === statusFilter)
    if (searchQuery.trim()) {
      const q = searchQuery.toLowerCase()
      result = result.filter(
        (g) =>
          g.name.toLowerCase().includes(q) ||
          g.teacher.toLowerCase().includes(q) ||
          g.subject.toLowerCase().includes(q)
      )
    }
    return result
  }, [groups, statusFilter, searchQuery])

  const totalPages = Math.ceil(filtered.length / itemsPerPage)
  const paged = useMemo(() => {
    const start = (currentPage - 1) * itemsPerPage
    return filtered.slice(start, start + itemsPerPage)
  }, [filtered, currentPage])

  const handleSaveGroup = async (formData) => {
    if (viewMode === 'edit-group' && selectedGroup) {
      const res = await adminGroupsApi.updateGroup(selectedGroup.id, { ...selectedGroup, ...formData })
      if (res.success) {
        setGroups((prev) => prev.map((g) => (g.id === selectedGroup.id ? { ...g, ...res.data } : g)))
        setSelectedGroup(null)
        setViewMode('list')
      }
    } else {
      const res = await adminGroupsApi.createGroup(formData)
      if (res.success) {
        setGroups((prev) => [res.data, ...prev])
        setViewMode('list')
      }
    }
  }

  const handleDeleteGroup = async (group) => {
    const isConfirmed = await showDeleteConfirm(isRtl, group.name);
    if (!isConfirmed) return;
    const res = await adminGroupsApi.deleteGroup(group.id)
    if (res.success) {
      setGroups((prev) => prev.filter((g) => g.id !== group.id))
    }
  }

  const handleRemoveStudent = async (groupId, studentId, studentName) => {
    const isConfirmed = await showDeleteConfirm(isRtl, studentName);
    if (!isConfirmed) return;

    const res = await adminGroupsApi.removeStudentFromGroup(groupId, studentId)
    if (res.success) {
      setGroups((prev) =>
        prev.map((g) =>
          g.id === groupId
            ? { ...g, students: (g.students || []).filter((s) => s.id !== studentId) }
            : g
        )
      )
      if (selectedGroup?.id === groupId) {
        setSelectedGroup((prev) => prev
          ? { ...prev, students: (prev.students || []).filter((s) => s.id !== studentId) }
          : prev
        )
      }
    }
  }

  const handleAddStudents = async (students) => {
    for (const student of students) {
      await adminGroupsApi.addStudentToGroup(selectedGroup.id, student)
    }
    const res = await adminGroupsApi.fetchGroupById(selectedGroup.id)
    if (res.success) {
      setGroups((prev) => prev.map((g) => (g.id === selectedGroup.id ? res.data : g)))
      setSelectedGroup(res.data)
    }
    setShowAddStudentsModal(false)
  }

  if (isLoading) {
    return (
      <div className="flex h-[60vh] items-center justify-center">
        <Spinner />
      </div>
    )
  }

  if (viewMode === 'add-group' || viewMode === 'edit-group') {
    return (
      <AddEditGroupScreen
        group={viewMode === 'edit-group' ? selectedGroup : null}
        isRtl={isRtl}
        t={t}
        onSave={handleSaveGroup}
        onCancel={() => { setSelectedGroup(null); setViewMode('list') }}
      />
    )
  }

  return (
    <div className="space-y-6 p-1 md:p-6" dir={isRtl ? 'rtl' : 'ltr'}>
      <div className="text-start">
        <h1 className="text-2xl font-bold text-slate-800 dark:text-white">إدارة المجموعات</h1>
        <p className="text-sm text-slate-400 dark:text-slate-500 mt-1">
          منارة العز أكاديمي · لوحة الإدارة
        </p>
      </div>

      <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
        {[
          { label: 'إجمالي المجموعات', value: metrics.total, cls: 'text-slate-700 dark:text-slate-200' },
          { label: 'المجموعات النشطة', value: metrics.active, cls: 'text-brand-600 dark:text-brand-400' },
          { label: 'المتوقفة', value: metrics.suspended, cls: 'text-amber-600 dark:text-amber-400' },
          { label: 'إجمالي الطلاب', value: metrics.students, cls: 'text-blue-600 dark:text-blue-400' },
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

      <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-3 p-4 bg-white dark:bg-slate-900 rounded-3xl border border-slate-100 dark:border-slate-800/60 shadow-soft">
        <div className="flex items-center gap-3 flex-wrap">
          <button
            onClick={() => { setSelectedGroup(null); setViewMode('add-group') }}
            className="flex items-center gap-2 px-5 py-2.5 rounded-2xl bg-brand-500 hover:bg-brand-600 text-white text-sm font-semibold transition-all shadow-md shadow-brand-500/20 active:scale-[0.98]"
          >
            <Plus size={18} />
            <span>إضافة مجموعة</span>
          </button>
          <div className="flex items-center gap-1.5 flex-wrap">
            {STATUS_FILTERS.map((f) => (
              <button
                key={f}
                onClick={() => { setStatusFilter(f); setCurrentPage(1) }}
                className={`px-3 py-1.5 rounded-xl text-xs font-bold transition-all ${statusFilter === f
                  ? 'bg-brand-500 text-white shadow-sm'
                  : 'bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300 hover:bg-slate-200 dark:hover:bg-slate-700'
                  }`}
              >
                {f}
              </button>
            ))}
          </div>
        </div>
        <div className="relative w-full sm:w-64">
          <Search size={16} className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-400 pointer-events-none" />
          <input
            type="text"
            placeholder="بحث في المجموعات..."
            value={searchQuery}
            onChange={(e) => { setSearchQuery(e.target.value); setCurrentPage(1) }}
            className="w-full bg-[#f3f7f6] dark:bg-slate-800 rounded-2xl py-2.5 pr-9 pl-4 text-sm text-slate-700 dark:text-slate-200 outline-none border border-transparent focus:border-brand-400 transition-colors placeholder-slate-400"
          />
        </div>
      </div>

      {paged.length === 0 ? (
        <div className="flex flex-col items-center justify-center py-20 gap-3 text-slate-400 bg-white dark:bg-slate-900 rounded-3xl border border-slate-100 dark:border-slate-800/60">
          <Layers size={48} strokeWidth={1.5} />
          <p className="text-sm font-medium">لا توجد مجموعات مطابقة</p>
        </div>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
          {paged.map((group) => (
            <GroupCard
              key={group.id}
              group={group}
              onEdit={(g) => { setSelectedGroup(g); setViewMode('edit-group') }}
              onViewStudents={(g) => { setSelectedGroup(g); setShowStudentsModal(true) }}
              onDelete={handleDeleteGroup}
            />
          ))}
        </div>
      )}

      {totalPages > 1 && (
        <div className="flex items-center justify-between px-2">
          <span className="text-xs text-slate-400">
            عرض {Math.min(currentPage * itemsPerPage, filtered.length)} من {filtered.length}
          </span>
          <div className="flex items-center gap-1.5">
            {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
              <button
                key={page}
                onClick={() => setCurrentPage(page)}
                className={`w-8 h-8 rounded-xl text-sm font-bold transition-all ${currentPage === page
                  ? 'bg-brand-500 text-white shadow-sm'
                  : 'bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 text-slate-600 dark:text-slate-300 hover:bg-slate-50 dark:hover:bg-slate-800'
                  }`}
              >
                {page}
              </button>
            ))}
          </div>
        </div>
      )}

      {showStudentsModal && selectedGroup && (
        <GroupDetailsModal
          group={selectedGroup}
          onClose={() => { setShowStudentsModal(false); setSelectedGroup(null) }}
          onRemoveStudent={handleRemoveStudent}
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
    </div>
  )
}
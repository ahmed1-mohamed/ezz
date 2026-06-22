import { useState, useEffect } from 'react'
import { useTranslation } from 'react-i18next'
import { studentsApi } from '@/shared/services/api/studentsApi'
import StudentsList from './components/StudentsList'
import AddEditStudentScreen from './components/AddEditStudentScreen'
import StudentDetailsScreen from './components/StudentDetailsScreen'
import Spinner from '@/shared/components/Spinner'

export default function AdminStudents() {
  const { t, i18n } = useTranslation()
  const isRtl = i18n.language.startsWith('ar')

  // View state: 'list' | 'add-student' | 'edit-student' | 'view-student'
  const [viewMode, setViewMode] = useState('list')
  const [students, setStudents] = useState([])
  const [selectedStudent, setSelectedStudent] = useState(null)
  const [isLoading, setIsLoading] = useState(true)

  // Load students from API on mount
  useEffect(() => {
    async function loadStudents() {
      setIsLoading(true)
      try {
        const res = await studentsApi.fetchStudents()
        if (res.success) {
          setStudents(res.data)
        }
      } catch (err) {
        console.error('Failed to fetch students:', err)
      } finally {
        setIsLoading(false)
      }
    }
    loadStudents()
  }, [])

  // Action: Add or Edit student details save handler
  const handleSaveStudent = async (formData) => {
    if (viewMode === 'edit-student' && selectedStudent) {
      // Edit mode
      try {
        const res = await studentsApi.updateStudent(selectedStudent.id, {
          ...selectedStudent,
          ...formData
        })
        if (res.success) {
          setStudents((prev) =>
            prev.map((s) => (s.id === selectedStudent.id ? { ...s, ...res.data } : s))
          )
          setSelectedStudent(null)
          setViewMode('list')
        }
      } catch (err) {
        console.error('Failed to update student details:', err)
      }
    } else {
      // Add mode
      try {
        const res = await studentsApi.createStudent({
          ...formData,
          totalSessions: 12
        })
        if (res.success) {
          setStudents((prev) => [...prev, res.data])
          setViewMode('list')
        }
      } catch (err) {
        console.error('Failed to create student:', err)
      }
    }
  }

  // Action: Delete student
  const handleDeleteStudent = async (id) => {
    try {
      const res = await studentsApi.deleteStudent(id)
      if (res.success) {
        setStudents((prev) => prev.filter((s) => s.id !== id))
        if (selectedStudent && selectedStudent.id === id) {
          setSelectedStudent(null)
          setViewMode('list')
        }
      }
    } catch (err) {
      console.error('Failed to delete student:', err)
    }
  }

  // Action: Toggle Subscription status (suspend/activate)
  const handleToggleStatus = async (id) => {
    const student = students.find((s) => s.id === id)
    if (!student) return
    const newStatus = student.subscriptionStatus === 'Active' ? 'Expired' : 'Active'
    try {
      const res = await studentsApi.updateStudent(id, { ...student, subscriptionStatus: newStatus })
      if (res.success) {
        setStudents((prev) =>
          prev.map((s) => (s.id === id ? { ...s, subscriptionStatus: newStatus } : s))
        )
        setSelectedStudent((prev) =>
          prev && prev.id === id ? { ...prev, subscriptionStatus: newStatus } : prev
        )
      }
    } catch (err) {
      console.error('Failed to toggle student subscription status:', err)
    }
  }

  // Action: Change student group
  const handleChangeGroup = async (studentId, newGroupName) => {
    const student = students.find((s) => s.id === studentId)
    if (!student) return
    try {
      const res = await studentsApi.updateStudent(studentId, { ...student, groupName: newGroupName })
      if (res.success) {
        setStudents((prev) =>
          prev.map((s) => (s.id === studentId ? { ...s, groupName: newGroupName } : s))
        )
        setSelectedStudent((prev) =>
          prev && prev.id === studentId ? { ...prev, groupName: newGroupName } : prev
        )
      }
    } catch (err) {
      console.error('Failed to change student group:', err)
    }
  }

  const handleOpenEditScreen = (student) => {
    setSelectedStudent(student)
    setViewMode('edit-student')
  }

  const handleOpenDetailsScreen = (student) => {
    setSelectedStudent(student)
    setViewMode('view-student')
  }

  if (isLoading) {
    return (
      <div className="flex h-[60vh] items-center justify-center">
        <Spinner />
      </div>
    )
  }

  return (
    <div className="space-y-8 p-1 md:p-6" dir={isRtl ? 'rtl' : 'ltr'}>
      
      {viewMode === 'list' && (
        <>
          {/* Header */}
          <div className="text-start">
            <h1 className="text-2xl font-bold text-slate-800 dark:text-white">
              {t('adminDashboard.students.title', 'إدارة الطلاب')}
            </h1>
            <p className="text-sm text-slate-400 dark:text-slate-500 mt-1">
              {t('adminDashboard.students.subtitle', 'منارة العز أكاديمي · لوحة الإدارة')}
            </p>
          </div>

          {/* List panel */}
          <StudentsList
            students={students}
            isRtl={isRtl}
            t={t}
            onOpenAddScreen={() => setViewMode('add-student')}
            onOpenEditScreen={handleOpenEditScreen}
            onOpenSessions={handleOpenDetailsScreen}
            onDelete={handleDeleteStudent}
          />
        </>
      )}

      {(viewMode === 'add-student' || viewMode === 'edit-student') && (
        <AddEditStudentScreen
          student={viewMode === 'edit-student' ? selectedStudent : null}
          isRtl={isRtl}
          t={t}
          onSave={handleSaveStudent}
          onCancel={() => {
            setSelectedStudent(null)
            setViewMode('list')
          }}
        />
      )}

      {viewMode === 'view-student' && (
        <StudentDetailsScreen
          student={selectedStudent}
          isRtl={isRtl}
          t={t}
          onCancel={() => {
            setSelectedStudent(null)
            setViewMode('list')
          }}
          onEdit={handleOpenEditScreen}
          onToggleStatus={handleToggleStatus}
          onChangeGroup={handleChangeGroup}
        />
      )}

    </div>
  )
}

import { useState, useEffect } from 'react'
import { useTranslation } from 'react-i18next'
import { toast } from 'react-hot-toast'
import { studentsApi } from '@/shared/services/api/studentsApi'
import StudentsList from './components/StudentsList'
import AddEditStudentScreen from './components/AddEditStudentScreen'
import StudentDetailsScreen from './components/StudentDetailsScreen'
import Spinner from '@/shared/components/Spinner'
import { showDeleteConfirm } from '@/shared/utils/sweetAlert'

export default function AdminStudents() {
  const { t, i18n } = useTranslation()
  const isRtl = i18n.language.startsWith('ar')

  const [viewMode, setViewMode] = useState('list')
  const [students, setStudents] = useState([])
  const [selectedStudent, setSelectedStudent] = useState(null)
  const [isLoading, setIsLoading] = useState(true)
  const [currentPage, setCurrentPage] = useState(1)
  const [totalPages, setTotalPages] = useState(1)

  useEffect(() => {
    async function loadStudents() {
      setIsLoading(true)
      try {
        const res = await studentsApi.fetchStudents({ page: currentPage, limit: 20 })
        const studentsData = res?.data || res || []
        const parsedStudents = Array.isArray(studentsData) ? studentsData : [];
        console.log("Fetched students from API:", parsedStudents);
        setStudents(parsedStudents)

        if (res?.pagination) {
          setTotalPages(res.pagination.numberOfPages || 1)
        }
      } catch (err) {
        console.error('Failed to fetch students:', err)
      } finally {
        setIsLoading(false)
      }
    }
    loadStudents()
  }, [currentPage])

  const buildStudentFormData = (data, isUpdate = false) => {
    const fd = new FormData();
    if (data.nameEn) fd.append('name[en]', data.nameEn);
    if (data.name) fd.append('name[ar]', data.name);
    if (data.phone) fd.append('phone', data.phone);
    if (data.country) fd.append('country', data.country);
    if (data.profileImageFile) fd.append('image', data.profileImageFile);

    if (!isUpdate) {
      if (data.email) fd.append('email', data.email);
      if (data.password) fd.append('password', data.password);
      if (data.confirmPassword) fd.append('confirmPassword', data.confirmPassword);
    }

    return fd;
  };

  const handleSaveStudent = async (formData) => {
    const isUpdate = viewMode === 'edit-student' && selectedStudent;
    const apiData = buildStudentFormData(formData, isUpdate);

    if (viewMode === 'edit-student' && selectedStudent) {
      console.log("Attempting to edit student:", selectedStudent);
      const studentId = selectedStudent._id || selectedStudent.student_id || selectedStudent.id || selectedStudent.studentId || selectedStudent.userId;

      if (!studentId || studentId === 'undefined') {
        toast.error('حدث خطأ: لا يوجد ID صالح للطالب!');
        return;
      }

      if (!String(studentId).match(/^[0-9a-fA-F]{24}$/)) {
        toast.error('تنبيه: الـ ID الخاص بالطالب يبدو غير صالح. الـ ID هو: ' + studentId);
      }

      console.log("Resolved student ID to edit:", studentId);
      try {
        await studentsApi.updateStudent(studentId, apiData)

        const res = await studentsApi.fetchStudents({ page: currentPage, limit: 20 })
        const studentsData = res?.data || res || []
        setStudents(Array.isArray(studentsData) ? studentsData : [])
        if (res?.pagination) setTotalPages(res.pagination.numberOfPages || 1)

        toast.success(isRtl ? 'تم تعديل بيانات الطالب بنجاح' : 'Student updated successfully');
        setSelectedStudent(null)
        setViewMode('list')
      } catch (err) {
        toast.error(isRtl ? 'حدث خطأ أثناء التعديل' : 'Failed to update student');
        console.error('Failed to update student details:', err)
        if (err.response?.data) console.error('Backend validation error:', err.response.data);
      }
    } else {
      try {
        await studentsApi.createStudent(apiData)

        const res = await studentsApi.fetchStudents({ page: currentPage, limit: 20 })
        const studentsData = res?.data || res || []
        setStudents(Array.isArray(studentsData) ? studentsData : [])
        if (res?.pagination) setTotalPages(res.pagination.numberOfPages || 1)

        setViewMode('list')
      } catch (err) {
        console.error('Failed to create student:', err)
        if (err.response?.data) console.error('Backend validation error:', err.response.data);
      }
    }
  }

  // Action: Delete student
  const handleDeleteStudent = async (student) => {
    if (!student) return;
    const id = student._id || student.student_id || student.id || student.studentId || student.userId;
    const studentName = typeof student.name === 'string' ? student.name : (student.name?.ar || student.name?.en || '');
    
    const isConfirmed = await showDeleteConfirm(isRtl, studentName);
    if (!isConfirmed) return;

    try {
      const res = await studentsApi.deleteStudent(id)
      if (res.success) {
        setStudents((prev) => prev.filter((s) => s.id !== id && s._id !== id))
        if (selectedStudent && (selectedStudent._id || selectedStudent.student_id || selectedStudent.id) === id) {
          setSelectedStudent(null)
          setViewMode('list')
        }
        toast.success(isRtl ? 'تم حذف الطالب بنجاح' : 'Student deleted successfully');
      }
    } catch (err) {
      toast.error(isRtl ? 'حدث خطأ أثناء حذف الطالب' : 'Failed to delete student');
      console.error('Failed to delete student:', err)
    }
  }

  const handleToggleStatus = async (id) => {
    const student = students.find((s) => (s._id || s.student_id || s.id || s.studentId || s.userId) === id)
    if (!student) return
    const newStatus = student.subscriptionStatus === 'Active' ? 'Expired' : 'Active'
    try {
      const res = await studentsApi.updateStudent(id, { ...student, subscriptionStatus: newStatus })
      if (res.success) {
        setStudents((prev) =>
          prev.map((s) => ((s._id || s.student_id || s.id || s.studentId || s.userId) === id ? { ...s, subscriptionStatus: newStatus } : s))
        )
        setSelectedStudent((prev) =>
          prev && (prev._id || prev.student_id || prev.id || prev.studentId || prev.userId) === id ? { ...prev, subscriptionStatus: newStatus } : prev
        )
      }
    } catch (err) {
      console.error('Failed to toggle student subscription status:', err)
    }
  }

  const handleChangeGroup = async (studentId, newGroupName) => {
    const student = students.find((s) => s.id === studentId)
    if (!student) return
    try {
      const res = await studentsApi.updateStudent(studentId, { ...student, groupName: newGroupName })
      if (res.success) {
        setStudents((prev) =>
          prev.map((s) => ((s._id || s.student_id || s.id || s.studentId || s.userId) === studentId ? { ...s, groupName: newGroupName } : s))
        )
        setSelectedStudent((prev) =>
          prev && (prev._id || prev.student_id || prev.id || prev.studentId || prev.userId) === studentId ? { ...prev, groupName: newGroupName } : prev
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
            isRtl={isRtl}
            t={t}
            onOpenAddScreen={() => setViewMode('add-student')}
            onOpenEditScreen={handleOpenEditScreen}
            currentPage={currentPage}
            totalPages={totalPages}
            onPageChange={setCurrentPage}
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
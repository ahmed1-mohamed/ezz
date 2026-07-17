import { useState, useEffect } from 'react'
import { useTranslation } from 'react-i18next'
import { toast } from 'react-hot-toast'
import { useQuery, useQueryClient } from '@tanstack/react-query'
import { studentsApi } from '@/shared/services/api/studentsApi'
import StudentsList from './components/StudentsList'
import AddEditStudentScreen from './components/AddEditStudentScreen'
import StudentDetailsScreen from './components/StudentDetailsScreen'
import Spinner from '@/shared/components/Spinner'
import { showDeleteConfirm } from '@/shared/utils/sweetAlert'

export default function AdminStudents() {
  const { t, i18n } = useTranslation()
  const isRtl = i18n.language.startsWith('ar')

  const queryClient = useQueryClient();
  const [viewMode, setViewMode] = useState('list')
  const [selectedStudent, setSelectedStudent] = useState(null)
  const [currentPage, setCurrentPage] = useState(1)

  const { data: fetchRes, isLoading } = useQuery({
    queryKey: ['students', currentPage],
    queryFn: () => studentsApi.fetchStudents({ page: currentPage, limit: 20 }),
    staleTime: 5 * 60 * 1000,
  });

  const studentsData = fetchRes?.data || fetchRes || [];
  const students = Array.isArray(studentsData) ? studentsData : [];
  const totalPages = fetchRes?.pagination?.numberOfPages || 1;

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
      const studentId = selectedStudent._id || selectedStudent.student_id || selectedStudent.id || selectedStudent.studentId || selectedStudent.userId;

      if (!studentId || studentId === 'undefined') {
        toast.error('حدث خطأ: لا يوجد ID صالح للطالب!');
        return;
      }

      if (!String(studentId).match(/^[0-9a-fA-F]{24}$/)) {
        toast.error('تنبيه: الـ ID الخاص بالطالب يبدو غير صالح. الـ ID هو: ' + studentId);
      }

      try {
        await studentsApi.updateStudent(studentId, apiData)
        await queryClient.invalidateQueries({ queryKey: ['students'] })
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
        await queryClient.invalidateQueries({ queryKey: ['students'] })
        setViewMode('list')
      } catch (err) {
        console.error('Failed to create student:', err)
        if (err.response?.data) console.error('Backend validation error:', err.response.data);
      }
    }
  }

  const handleDeleteStudent = async (student) => {
    if (!student) return;
    const id = student._id || student.student_id || student.id || student.studentId || student.userId;
    const studentName = typeof student.name === 'string' ? student.name : (student.name?.ar || student.name?.en || '');

    const isConfirmed = await showDeleteConfirm(isRtl, studentName);
    if (!isConfirmed) return;

    try {
      const res = await studentsApi.deleteStudent(id)
      if (res.success) {
        await queryClient.invalidateQueries({ queryKey: ['students'] })
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
        await queryClient.invalidateQueries({ queryKey: ['students'] })
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
        await queryClient.invalidateQueries({ queryKey: ['students'] })
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

  return (
    <div className="space-y-8 p-1 md:p-6 relative" dir={isRtl ? 'rtl' : 'ltr'}>
      {isLoading && viewMode === 'list' && (
        <div className="absolute inset-0 z-50 flex items-center justify-center bg-white/50 dark:bg-slate-900/50 backdrop-blur-sm rounded-3xl">
          <Spinner />
        </div>
      )}

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
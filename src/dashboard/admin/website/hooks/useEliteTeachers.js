import { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { landingApi } from '@/shared/services/api/landingApi';
import { showDeleteConfirm } from '@/shared/utils/sweetAlert';
import { teachersApi } from '@/shared/services/api/teachersApi';

export default function useEliteTeachers(showNotification) {
  const { t, i18n } = useTranslation();
  const isRtl = i18n.language.startsWith('ar');

  const [eliteTeachers, setEliteTeachers] = useState([]);
  const [isTeacherModalOpen, setIsTeacherModalOpen] = useState(false);
  const [selectedTeacher, setSelectedTeacher] = useState(null);
  const [isTeacherLoading, setIsTeacherLoading] = useState(false);
  const [isTeacherFormOpen, setIsTeacherFormOpen] = useState(false);
  const [currentTeacher, setCurrentTeacher] = useState({
    id: null,
    teacherId: '',
    name: '',
    nameEn: '',
    image: ''
  });
  const [systemTeachers, setSystemTeachers] = useState([]);

  useEffect(() => {
    async function loadEliteTeachers() {
      try {
        const res = await landingApi.fetchEliteTeachers();
        const data = res?.data || res;
        if (Array.isArray(data)) {
          setEliteTeachers(data);
        }
      } catch (err) {
        console.warn('Failed to fetch elite teachers:', err);
      }
    }
    loadEliteTeachers();
  }, []);

  const loadSystemTeachersLazily = async () => {
    if (systemTeachers.length > 0) return;
    try {
      const res = await landingApi.fetchSystemTeachers();
      const data = res?.data || res;
      if (Array.isArray(data)) {
        setSystemTeachers(data);
      }
    } catch (err) {
      console.warn('Failed to fetch system teachers:', err);
    }
  };

  const handleOpenAddTeacher = () => {
    loadSystemTeachersLazily();
    setCurrentTeacher({
      id: null,
      teacherId: '',
      name: '',
      nameEn: '',
      image: ''
    });
    setIsTeacherFormOpen(true);
  };

  const handleOpenEditTeacher = (teacher) => {
    loadSystemTeachersLazily();
    let nameAr = '';
    let nameEn = '';
    if (typeof teacher.name === 'object' && teacher.name !== null) {
      nameAr = teacher.name.ar || '';
      nameEn = teacher.name.en || '';
    } else if (typeof teacher.name === 'string') {
      nameAr = teacher.name;
      nameEn = teacher.nameEn || teacher.name || '';
    }

    const resolvedTeacherId =
      teacher.teacher?.id ||
      teacher.teacher?._id ||
      (typeof teacher.teacher === 'string' ? teacher.teacher : '') ||
      teacher.teacherId ||
      '';

    setCurrentTeacher({
      ...teacher,
      teacherId: resolvedTeacherId,
      name: nameAr,
      nameEn: nameEn,
      image: teacher.image || ''
    });
    setIsTeacherFormOpen(true);
  };

  const handleShowTeacherNotes = async (id) => {
    setIsTeacherLoading(true);
    setIsTeacherModalOpen(true);
    setSelectedTeacher(null);
    try {
      const res = await landingApi.fetchEliteTeacherById(id);
      const data = res?.data || res;
      setSelectedTeacher(data);
    } catch (err) {
      console.error('Failed to fetch teacher notes:', err);
      showNotification(t('adminDashboard.website.teacherNotesError', 'فشل تحميل ملاحظات المعلم'), 'error');
      setIsTeacherModalOpen(false);
    } finally {
      setIsTeacherLoading(false);
    }
  };

  const handleDeleteTeacher = async (teacher) => {
    const teacherNameStr = typeof teacher.name === 'string'
      ? teacher.name
      : (teacher.name?.ar || teacher.name?.en || 'معلم متميز');
      
    const isRtl = i18n.language.startsWith('ar');
    const isConfirmed = await showDeleteConfirm(isRtl, teacherNameStr);
    if (!isConfirmed) return;

    try {
      const id = teacher.id || teacher._id;
      await landingApi.deleteEliteTeacher(id);
      setEliteTeachers((prev) => prev.filter((t) => t.id !== id && t._id !== id));
      showNotification(t('adminDashboard.website.teacherDeleted', 'تم حذف المعلم بنجاح!'));
    } catch (err) {
      console.error(err);
      showNotification(t('adminDashboard.website.teacherDeleteError', 'فشل حذف المعلم'), 'error');
    }
  };

  const handleSaveTeacherSubmit = async (e) => {
    e.preventDefault();
    if (!currentTeacher.teacherId) {
      showNotification(t('adminDashboard.website.selectTeacherError', 'يرجى اختيار معلم من القائمة'), 'error');
      return;
    }

    const elitePayload = {
      teacher: currentTeacher.teacherId
    };

    try {
      if (currentTeacher.id === null) {
        const response = await landingApi.addEliteTeacher(elitePayload);
        const added = response?.data || response;
        const systemT = systemTeachers.find(t => String(t.id || t._id || t.teacher_id) === String(currentTeacher.teacherId));
        const resolvedName = systemT ? (typeof systemT.name === 'object' ? (isRtl ? systemT.name.ar : systemT.name.en) : systemT.name) : currentTeacher.name;
        
        const newTeacher = {
          ...added,
          id: added?.id || added?._id,
          teacher: systemT,
          name: resolvedName,
          image: systemT?.image || systemT?.avatar || currentTeacher.image,
          groupsCount: systemT?.groupsCount || 0,
          sessionsCount: systemT?.sessionsCount || 0
        };
        setEliteTeachers((prev) => [...prev, newTeacher]);
        showNotification(t('adminDashboard.website.teacherAdded', 'تمت إضافة المعلم بنجاح!'));
      } else {
        await landingApi.updateEliteTeacher(currentTeacher.id, elitePayload);
        const systemT = systemTeachers.find(t => String(t.id || t._id || t.teacher_id) === String(currentTeacher.teacherId));
        const resolvedName = systemT ? (typeof systemT.name === 'object' ? (isRtl ? systemT.name.ar : systemT.name.en) : systemT.name) : currentTeacher.name;
        
        const updatedTeacher = {
          id: currentTeacher.id,
          teacher: systemT,
          name: resolvedName,
          image: systemT?.image || systemT?.avatar || currentTeacher.image,
          groupsCount: systemT?.groupsCount || 0,
          sessionsCount: systemT?.sessionsCount || 0
        };
        setEliteTeachers((prev) =>
          prev.map((t) => (t.id === currentTeacher.id ? updatedTeacher : t))
        );
        showNotification(t('adminDashboard.website.teacherUpdated', 'تم تحديث بيانات المعلم بنجاح!'));
      }
      setIsTeacherFormOpen(false);
    } catch (err) {
      console.error(err);
      showNotification(t('adminDashboard.website.saveDataError', 'فشل حفظ البيانات'), 'error');
    }
  };

  return {
    eliteTeachers,
    isTeacherModalOpen,
    setIsTeacherModalOpen,
    selectedTeacher,
    isTeacherLoading,
    isTeacherFormOpen,
    setIsTeacherFormOpen,
    currentTeacher,
    setCurrentTeacher,
    systemTeachers,
    handleOpenAddTeacher,
    handleOpenEditTeacher,
    handleShowTeacherNotes,
    handleDeleteTeacher,
    handleSaveTeacherSubmit
  };
}

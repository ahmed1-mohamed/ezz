import { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { landingApi } from '@/shared/services/api/landingApi';
import { showDeleteConfirm } from '@/shared/utils/sweetAlert';

/**
 * Extracts all possible IDs from an elite teacher record.
 * Covers every known shape the API might return.
 */
function extractEliteTeacherRefIds(et) {
  const ids = new Set();
  if (!et) return ids;
  // teacher field might be a string ID, an object, or missing
  const teacher = et.teacher;
  if (typeof teacher === 'string' && teacher) ids.add(teacher);
  if (teacher && typeof teacher === 'object') {
    [teacher._id, teacher.id, teacher.teacher_id, teacher.teacherId, teacher.user_id, teacher.userId]
      .filter(Boolean).forEach(id => ids.add(String(id)));
  }
  // Direct fields on the elite teacher record
  [et.teacher_id, et.teacherId, et.userId, et.user_id]
    .filter(Boolean).forEach(id => ids.add(String(id)));
  return ids;
}

/**
 * Extracts all possible IDs from a system teacher record.
 */
function extractSystemTeacherIds(t) {
  const ids = new Set();
  if (!t) return ids;
  [t._id, t.id, t.teacher_id, t.teacherId, t.user_id, t.userId]
    .filter(Boolean).forEach(id => ids.add(String(id)));
  return ids;
}

/**
 * Normalizes a name (object or string) into a lowercase comparable string.
 */
function normalizeName(name) {
  if (!name) return '';
  if (typeof name === 'string') return name.trim().toLowerCase();
  if (typeof name === 'object') {
    return [name.ar, name.en].filter(Boolean).map(n => n.trim().toLowerCase()).join('|');
  }
  return '';
}

/**
 * Checks if a system teacher is already in the elite teachers list.
 * Uses both ID matching AND name matching as fallback.
 */
function isTeacherAlreadyElite(systemTeacher, eliteTeachers) {
  const sysIds = extractSystemTeacherIds(systemTeacher);
  const sysName = normalizeName(systemTeacher?.name);
  const sysEmail = (systemTeacher?.email || '').trim().toLowerCase();

  for (const et of eliteTeachers) {
    // 1) ID-based matching
    const etIds = extractEliteTeacherRefIds(et);
    for (const sysId of sysIds) {
      if (etIds.has(sysId)) return true;
    }

    // 2) Name-based matching (fallback when IDs don't line up)
    if (sysName) {
      const etName = normalizeName(et?.name || et?.teacher?.name);
      if (etName && sysName.split('|').some(part => etName.split('|').includes(part))) {
        return true;
      }
    }

    // 3) Email-based matching (another fallback)
    if (sysEmail) {
      const etEmail = (et?.email || et?.teacher?.email || '').trim().toLowerCase();
      if (etEmail && sysEmail === etEmail) return true;
    }
  }
  return false;
}

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

  const fetchEliteTeachers = async () => {
    try {
      const res = await landingApi.fetchEliteTeachers();
      const data = res?.data || res;
      if (Array.isArray(data)) {
        setEliteTeachers(data);
        return data;
      }
    } catch (err) {
      console.warn('Failed to fetch elite teachers:', err);
    }
    return eliteTeachers;
  };

  useEffect(() => {
    fetchEliteTeachers();
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

  const handleOpenAddTeacher = async () => {
    // Always re-fetch elite teachers before opening add modal for fresh data
    await fetchEliteTeachers();
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
        // Re-fetch elite teachers for the most up-to-date list before checking
        const freshElite = await fetchEliteTeachers();
        const freshEliteList = Array.isArray(freshElite) ? freshElite : eliteTeachers;

        // Find the system teacher object being added
        const selectedSystemTeacher = systemTeachers.find(st => {
          const stIds = extractSystemTeacherIds(st);
          return stIds.has(String(currentTeacher.teacherId));
        });

        // Check if already elite using comprehensive matching
        if (selectedSystemTeacher && isTeacherAlreadyElite(selectedSystemTeacher, freshEliteList)) {
          showNotification(t('adminDashboard.website.teacherAlreadyAdded', 'هذا المعلم مضاف بالفعل مسبقاً'), 'error');
          return;
        }

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
      // Handle backend duplicate error
      const errMsg = err?.response?.data?.message;
      if (typeof errMsg === 'string' && (errMsg.includes('already') || errMsg.includes('مضاف') || errMsg.includes('موجود') || errMsg.includes('duplicate'))) {
        showNotification(t('adminDashboard.website.teacherAlreadyAdded', 'هذا المعلم مضاف بالفعل مسبقاً'), 'error');
      } else {
        showNotification(t('adminDashboard.website.saveDataError', 'فشل حفظ البيانات'), 'error');
      }
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
    handleSaveTeacherSubmit,
    isTeacherAlreadyElite
  };
}

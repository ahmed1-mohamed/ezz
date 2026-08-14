import { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { landingApi } from '@/shared/services/api/landingApi';
import { teachersApi } from '@/shared/services/api/teachersApi';
import { showDeleteConfirm } from '@/shared/utils/sweetAlert';

function extractEliteTeacherRefIds(et) {
  const ids = new Set();
  if (!et) return ids;
  const teacher = et.teacher;
  if (typeof teacher === 'string' && teacher) ids.add(teacher);
  if (teacher && typeof teacher === 'object') {
    [teacher._id, teacher.id, teacher.teacher_id, teacher.teacherId, teacher.user_id, teacher.userId]
      .filter(Boolean).forEach(id => ids.add(String(id)));
  }
  [et.teacher_id, et.teacherId, et.userId, et.user_id]
    .filter(Boolean).forEach(id => ids.add(String(id)));
  return ids;
}


function extractSystemTeacherIds(t) {
  const ids = new Set();
  if (!t) return ids;
  [t._id, t.id, t.teacher_id, t.teacherId, t.user_id, t.userId]
    .filter(Boolean).forEach(id => ids.add(String(id)));
  return ids;
}


function normalizeName(name) {
  if (!name) return '';
  if (typeof name === 'string') return name.trim().toLowerCase();
  if (typeof name === 'object') {
    return [name.ar, name.en].filter(Boolean).map(n => n.trim().toLowerCase()).join('|');
  }
  return '';
}


function isTeacherAlreadyElite(systemTeacher, eliteTeachers) {
  const sysIds = extractSystemTeacherIds(systemTeacher);
  const sysName = normalizeName(systemTeacher?.name);
  const sysEmail = (systemTeacher?.email || '').trim().toLowerCase();

  for (const et of eliteTeachers) {
    const etIds = extractEliteTeacherRefIds(et);
    for (const sysId of sysIds) {
      if (etIds.has(sysId)) return true;
    }
    if (sysName) {
      const etName = normalizeName(et?.name || et?.teacher?.name);
      if (etName && sysName.split('|').some(part => etName.split('|').includes(part))) {
        return true;
      }
    }

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
    if (systemTeachers.length > 0) return systemTeachers;
    try {
      const res = await teachersApi.fetchActiveTeachers();
      const data = res?.data?.data || res?.data || res;
      if (Array.isArray(data)) {
        setSystemTeachers(data);
        return data;
      }
    } catch (err) {
      console.warn('Failed to fetch system teachers:', err);
    }
    return [];
  };

  const handleOpenAddTeacher = async () => {
    // Always re-fetch elite teachers before opening add modal for fresh data
    await fetchEliteTeachers();
    await loadSystemTeachersLazily();
    setCurrentTeacher({
      id: null,
      teacherId: '',
      name: '',
      nameEn: '',
      image: ''
    });
    setIsTeacherFormOpen(true);
  };

  const handleOpenEditTeacher = async (teacher) => {
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
      (typeof teacher.teacher === 'string' ? teacher.teacher : '') ||
      teacher.teacher?._id ||
      teacher.teacher?.id ||
      teacher.teacher?.teacher_id ||
      teacher.teacher_id ||
      teacher.teacherId ||
      teacher.user?._id ||
      teacher.user?.id ||
      teacher.user_id ||
      '';

    let finalTeacherId = resolvedTeacherId;
    if (!finalTeacherId) {
      const loadedTeachers = await loadSystemTeachersLazily();
      const currentSysTeachers = systemTeachers.length > 0 ? systemTeachers : loadedTeachers;
      if (currentSysTeachers.length > 0) {
        const matched = currentSysTeachers.find(st => {
          const sysName = typeof st.name === 'object' ? (st.name.ar || st.name.en) : st.name;
          return sysName && (sysName === nameAr || sysName === nameEn);
        });
        if (matched) {
          finalTeacherId = matched.id || matched._id || matched.teacher_id || '';
        }
      }
    }

    let extraData = {};
    if (finalTeacherId) {
      try {
        const res = await teachersApi.fetchRawTeacherById(finalTeacherId);
        const rawTeacher = res.success ? res.data : null;
        if (rawTeacher && typeof rawTeacher === 'object') {
          extraData = {
            name: typeof rawTeacher.name === 'object' && rawTeacher.name ? rawTeacher.name.ar || rawTeacher.ar || nameAr : rawTeacher.name || rawTeacher.ar || nameAr,
            nameEn: typeof rawTeacher.name === 'object' && rawTeacher.name ? rawTeacher.name.en || rawTeacher.en || nameEn : rawTeacher.nameEn || rawTeacher.en || nameEn,
            email: rawTeacher.email || teacher.email || '',
            phone: rawTeacher.phone || teacher.phone || '',
            country: rawTeacher.country || teacher.country || '',
            active: rawTeacher.active !== false,
            image: rawTeacher.image || rawTeacher.avatar || rawTeacher.user?.photoUrl || teacher.image || ''
          };
        }
      } catch (err) {
        console.warn('Failed to fetch raw teacher by id via GET /api/v1/teachers/:id', err);
      }
    }

    setCurrentTeacher({
      ...teacher,
      teacherId: finalTeacherId,
      name: nameAr,
      nameEn: nameEn,
      image: teacher.image || '',
      ...extraData
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
        const freshElite = await fetchEliteTeachers();
        const freshEliteList = Array.isArray(freshElite) ? freshElite : eliteTeachers;

        const selectedSystemTeacher = systemTeachers.find(st => {
          const stIds = extractSystemTeacherIds(st);
          return stIds.has(String(currentTeacher.teacherId));
        });

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
        const targetTeacherId = currentTeacher.teacherId;
        if (targetTeacherId) {
          try {
            await teachersApi.updateTeacher(targetTeacherId, {
              name: currentTeacher.name,
              nameEn: currentTeacher.nameEn,
              phone: currentTeacher.phone,
              active: currentTeacher.active !== false,
              profileImageFile: currentTeacher.profileImageFile
            });
          } catch (patchErr) {
            console.warn('Failed to update system teacher details via PATCH /api/v1/teachers/:id', patchErr);
          }
        }

        await landingApi.updateEliteTeacher(currentTeacher.id, elitePayload);
        const systemT = systemTeachers.find(t => String(t.id || t._id || t.teacher_id) === String(currentTeacher.teacherId));
        const resolvedName = currentTeacher.name || (systemT ? (typeof systemT.name === 'object' ? (isRtl ? systemT.name.ar : systemT.name.en) : systemT.name) : 'معلم متميز');

        const updatedTeacher = {
          ...currentTeacher,
          id: currentTeacher.id,
          teacher: systemT || currentTeacher.teacher,
          name: resolvedName,
          image: currentTeacher.image || systemT?.image || systemT?.avatar,
          email: currentTeacher.email || systemT?.email,
          phone: currentTeacher.phone || systemT?.phone,
          country: currentTeacher.country || systemT?.country,
          active: currentTeacher.active !== false
        };
        setEliteTeachers((prev) =>
          prev.map((t) => (t.id === currentTeacher.id ? updatedTeacher : t))
        );
        showNotification(t('adminDashboard.website.teacherUpdated', 'تم تحديث بيانات المعلم بنجاح!'));
      }
      setIsTeacherFormOpen(false);
    } catch (err) {
      console.error(err);
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

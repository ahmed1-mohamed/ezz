import { useState, useEffect, useCallback } from 'react';
import { useTranslation } from 'react-i18next';
import { landingApi } from '@/shared/services/api/landingApi';
import { teachersApi } from '@/shared/services/api/teachersApi';
import { showDeleteConfirm } from '@/shared/utils/sweetAlert';

const buildImageUrl = (url) => {
  if (!url || typeof url !== 'string') return '';
  if (url.startsWith('http://') || url.startsWith('https://') || url.startsWith('data:') || url.startsWith('blob:')) {
    return url;
  }
  const cleanPath = url.startsWith('/') ? url.slice(1) : url;
  return `https://manaret-ezz.dramcode.top/${cleanPath}`;
};

export const mapEliteTeacher = (item) => {
  if (!item) return null;

  const tRef = (item.teacher && typeof item.teacher === 'object') ? item.teacher : {};
  const userRef = (tRef.user && typeof tRef.user === 'object') ? tRef.user : {};

  // Extract Name (Arabic and English)
  let nameAr = '';
  let nameEn = '';
  const rawName = item.name || tRef.name || item.teacherName || tRef.teacherName;
  if (typeof rawName === 'object' && rawName !== null) {
    nameAr = rawName.ar || rawName.en || '';
    nameEn = rawName.en || rawName.ar || '';
  } else if (typeof rawName === 'string') {
    nameAr = rawName;
    nameEn = item.nameEn || tRef.nameEn || rawName;
  }

  // Extract Image
  const rawImage =
    item.image ||
    item.imageUrl ||
    item.avatar ||
    tRef.image ||
    tRef.imageUrl ||
    tRef.avatar ||
    tRef.photoUrl ||
    userRef.photoUrl ||
    userRef.avatar ||
    '';

  const finalImage = buildImageUrl(rawImage);

  // Extract Teacher Reference ID in the system
  const resolvedTeacherId =
    tRef.id ||
    tRef._id ||
    tRef.teacher_id ||
    tRef.teacherId ||
    (typeof item.teacher === 'string' ? item.teacher : '') ||
    item.teacherId ||
    item.teacher_id ||
    item.id ||
    item._id ||
    '';

  return {
    id: item.id || item._id, // Elite teacher row id
    _id: item._id || item.id,
    teacher: item.teacher || tRef,
    teacherId: String(resolvedTeacherId),
    name: nameAr || 'معلم متميز',
    nameEn: nameEn || nameAr || 'Elite Teacher',
    image: finalImage,
    email: item.email || tRef.email || userRef.email || '',
    phone: item.phone || tRef.phone || userRef.phone || '',
    country: item.country || tRef.country || userRef.country || '',
    active: item.active !== false && tRef.active !== false,
    groupsCount: item.groupsCount || tRef.groupsCount || 0,
    sessionsCount: item.sessionsCount || tRef.sessionsCount || 0,
    notes: item.notes || item.review || ''
  };
};

export const collectAllTeacherIds = (obj) => {
  if (!obj) return new Set();
  const ids = new Set();
  const add = (v) => { if (v !== undefined && v !== null && String(v).trim()) ids.add(String(v).trim()); };

  add(obj.id);
  add(obj._id);
  add(obj.teacher_id);
  add(obj.teacherId);
  add(obj.user_id);
  add(obj.userId);

  if (obj.teacher && typeof obj.teacher === 'object') {
    add(obj.teacher.id);
    add(obj.teacher._id);
    add(obj.teacher.teacher_id);
    add(obj.teacher.teacherId);
    add(obj.teacher.user_id);
    add(obj.teacher.userId);
  } else if (typeof obj.teacher === 'string') {
    add(obj.teacher);
  }

  if (obj.user && typeof obj.user === 'object') {
    add(obj.user.id);
    add(obj.user._id);
  }

  return ids;
};

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
  const [loading, setLoading] = useState(true);

  const loadData = useCallback(async () => {
    setLoading(true);
    try {
      const [eliteRes, sysRes] = await Promise.all([
        landingApi.fetchEliteTeachers().catch(() => []),
        landingApi.fetchSystemTeachers().catch(() => [])
      ]);

      const eliteData = eliteRes?.data || eliteRes;
      const eliteList = Array.isArray(eliteData) ? eliteData : (Array.isArray(eliteData?.data) ? eliteData.data : []);
      const mappedList = eliteList.map(mapEliteTeacher).filter(Boolean);
      setEliteTeachers(mappedList);

      const sysData = sysRes?.data || sysRes;
      const sysList = Array.isArray(sysData) ? sysData : (Array.isArray(sysData?.data) ? sysData.data : []);
      setSystemTeachers(sysList);
    } catch (err) {
      console.warn('Failed to fetch elite teachers data:', err);
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    loadData();
  }, [loadData]);

  const handleOpenAddTeacher = async () => {
    try {
      const sysRes = await landingApi.fetchSystemTeachers().catch(() => []);
      const sysData = sysRes?.data || sysRes;
      const sysList = Array.isArray(sysData) ? sysData : (Array.isArray(sysData?.data) ? sysData.data : []);
      if (sysList.length > 0) setSystemTeachers(sysList);
    } catch (e) {
      console.warn(e);
    }

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
    const resolvedTeacherId =
      teacher.teacherId ||
      teacher.teacher?._id ||
      teacher.teacher?.id ||
      teacher.teacher?.teacher_id ||
      (typeof teacher.teacher === 'string' ? teacher.teacher : '') ||
      teacher.id ||
      '';

    let finalTeacherId = String(resolvedTeacherId);

    // Fallback match by name
    if (!finalTeacherId && systemTeachers.length > 0) {
      const matched = systemTeachers.find(st => {
        const sysName = typeof st.name === 'object' ? (st.name.ar || st.name.en) : st.name;
        return sysName && (sysName === teacher.name || sysName === teacher.nameEn);
      });
      if (matched) {
        finalTeacherId = String(matched.id || matched._id || matched.teacher_id || '');
      }
    }

    let extraData = {};
    if (finalTeacherId) {
      try {
        const res = await teachersApi.fetchRawTeacherById(finalTeacherId);
        const rawTeacher = res.success ? res.data : null;
        if (rawTeacher && typeof rawTeacher === 'object') {
          extraData = {
            name: typeof rawTeacher.name === 'object' && rawTeacher.name ? rawTeacher.name.ar || teacher.name : rawTeacher.name || teacher.name,
            nameEn: typeof rawTeacher.name === 'object' && rawTeacher.name ? rawTeacher.name.en || teacher.nameEn : rawTeacher.nameEn || teacher.nameEn,
            email: rawTeacher.email || teacher.email || '',
            phone: rawTeacher.phone || teacher.phone || '',
            country: rawTeacher.country || teacher.country || '',
            active: rawTeacher.active !== false,
            image: buildImageUrl(rawTeacher.image || rawTeacher.avatar || rawTeacher.user?.photoUrl || teacher.image)
          };
        }
      } catch (err) {
        console.warn('Failed to fetch raw teacher by id:', err);
      }
    }

    setCurrentTeacher({
      ...teacher,
      teacherId: finalTeacherId,
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

        const systemT = systemTeachers.find(t => {
          const ids = collectAllTeacherIds(t);
          return ids.has(String(currentTeacher.teacherId));
        });

        const resolvedName = systemT
          ? (typeof systemT.name === 'object' ? (isRtl ? systemT.name.ar : systemT.name.en) : systemT.name)
          : currentTeacher.name;

        const newTeacher = {
          ...added,
          id: added?.id || added?._id,
          teacher: systemT || { id: currentTeacher.teacherId },
          teacherId: currentTeacher.teacherId,
          name: resolvedName || currentTeacher.name || 'معلم متميز',
          nameEn: currentTeacher.nameEn || resolvedName || 'Elite Teacher',
          image: currentTeacher.image || systemT?.image || systemT?.avatar || '',
          groupsCount: systemT?.groupsCount || 0,
          sessionsCount: systemT?.sessionsCount || 0
        };
        const mapped = mapEliteTeacher(newTeacher);
        setEliteTeachers((prev) => [...prev, mapped]);
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
            console.warn('Failed to update system teacher details:', patchErr);
          }
        }

        await landingApi.updateEliteTeacher(currentTeacher.id, elitePayload);

        const systemT = systemTeachers.find(t => {
          const ids = collectAllTeacherIds(t);
          return ids.has(String(currentTeacher.teacherId));
        });

        const resolvedName = currentTeacher.name || (systemT ? (typeof systemT.name === 'object' ? (isRtl ? systemT.name.ar : systemT.name.en) : systemT.name) : 'معلم متميز');

        const updatedTeacher = {
          ...currentTeacher,
          id: currentTeacher.id,
          teacher: systemT || currentTeacher.teacher,
          teacherId: currentTeacher.teacherId,
          name: resolvedName,
          nameEn: currentTeacher.nameEn || resolvedName,
          image: currentTeacher.image || systemT?.image || systemT?.avatar || '',
          email: currentTeacher.email || systemT?.email || '',
          phone: currentTeacher.phone || systemT?.phone || '',
          country: currentTeacher.country || systemT?.country || '',
          active: currentTeacher.active !== false
        };
        const mapped = mapEliteTeacher(updatedTeacher);
        setEliteTeachers((prev) =>
          prev.map((t) => (t.id === currentTeacher.id ? mapped : t))
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
    loading,
    handleOpenAddTeacher,
    handleOpenEditTeacher,
    handleShowTeacherNotes,
    handleDeleteTeacher,
    handleSaveTeacherSubmit
  };
}

import { useState, useEffect, useCallback } from 'react';
import { useTranslation } from 'react-i18next';
import { landingApi } from '@/shared/services/api/landingApi';
import { studentsApi } from '@/shared/services/api/studentsApi';
import { showDeleteConfirm } from '@/shared/utils/sweetAlert';

const buildImageUrl = (url) => {
  if (!url || typeof url !== 'string') return '';
  if (url.startsWith('http://') || url.startsWith('https://') || url.startsWith('data:') || url.startsWith('blob:')) {
    return url;
  }
  const cleanPath = url.startsWith('/') ? url.slice(1) : url;
  return `https://manaret-ezz.dramcode.top/${cleanPath}`;
};

export const parseStudentReview = (item) => {
  if (!item) return null;

  const sRef = (item.student && typeof item.student === 'object') ? item.student : {};
  const userRef = (sRef.user && typeof sRef.user === 'object') ? sRef.user : {};

  // Extract Name (Arabic and English)
  let nameAr = '';
  let nameEn = '';
  const rawName = item.name || sRef.name || item.studentName || sRef.studentName;
  if (typeof rawName === 'object' && rawName !== null) {
    nameAr = rawName.ar || rawName.en || '';
    nameEn = rawName.en || rawName.ar || '';
  } else if (typeof rawName === 'string') {
    nameAr = rawName;
    nameEn = item.nameEn || sRef.nameEn || rawName;
  }

  // Extract Image
  const rawImage =
    item.image ||
    item.imageUrl ||
    item.avatar ||
    sRef.image ||
    sRef.imageUrl ||
    sRef.photoUrl ||
    sRef.avatar ||
    userRef.photoUrl ||
    userRef.avatar ||
    '';

  const finalImage = buildImageUrl(rawImage);

  // Extract Student Reference ID (ID in system)
  const resolvedStudentId =
    sRef.id ||
    sRef._id ||
    sRef.student_id ||
    (typeof item.student === 'string' ? item.student : '') ||
    item.studentId ||
    item.student_id ||
    item.id ||
    item._id ||
    '';

  const review = item.review || '';
  const parts = review.split(' | ');
  const agePart = parts.find(p => p.startsWith('Age:')) || '';
  const levelPart = parts.find(p => p.startsWith('Level:')) || '';
  const groupPart = parts.find(p => p.startsWith('Group:')) || '';
  const parentPart = parts.find(p => p.startsWith('Parent:')) || '';

  const ageVal = parseInt(agePart.substring(agePart.indexOf(':') + 1).trim(), 10) || sRef.age || 10;
  const levelVal = levelPart.substring(levelPart.indexOf(':') + 1).trim() || sRef.level || 'متوسط';
  const groupVal = groupPart.substring(groupPart.indexOf(':') + 1).trim() || sRef.groupName || 'مجموعة القرآن أ';
  const parentVal = parentPart.substring(parentPart.indexOf(':') + 1).trim() || sRef.parentName || '';

  return {
    id: item.id || item._id, // Record ID
    _id: item._id || item.id,
    student: item.student || sRef,
    studentId: String(resolvedStudentId),
    name: nameAr || 'طالب متميز',
    nameEn: nameEn || nameAr || 'Featured Student',
    age: ageVal,
    level: levelVal,
    levelEn: levelVal === 'مبتدئ' ? 'Beginner' : levelVal === 'متقدم' ? 'Advanced' : 'Intermediate',
    groupName: groupVal,
    groupNameEn: groupVal,
    parentName: parentVal,
    parentNameEn: parentVal,
    image: finalImage,
    email: item.email || sRef.email || userRef.email || '',
    phone: item.phone || sRef.phone || userRef.phone || '',
    country: item.country || sRef.country || userRef.country || '',
    active: item.active !== false && sRef.active !== false,
    review: review
  };
};

const serializeStudentReview = (star) => {
  return `Age: ${star.age} | Level: ${star.level} | Group: ${star.groupName} | Parent: ${star.parentName}`;
};

export default function useFeaturedStudents(showNotification) {
  const { t, i18n } = useTranslation();

  const [stars, setStars] = useState([]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isViewModalOpen, setIsViewModalOpen] = useState(false);
  const [currentStar, setCurrentStar] = useState(null);
  const [systemStudents, setSystemStudents] = useState([]);
  const [loading, setLoading] = useState(true);

  const loadData = useCallback(async () => {
    setLoading(true);
    try {
      const [featRes, sysRes] = await Promise.all([
        landingApi.fetchFeaturedStudents().catch(() => []),
        landingApi.fetchSystemStudents().catch(() => [])
      ]);

      const featData = featRes?.data || featRes;
      const featList = Array.isArray(featData) ? featData : (Array.isArray(featData?.data) ? featData.data : []);
      const parsedStars = featList.map(parseStudentReview).filter(Boolean);
      setStars(parsedStars);

      const sysData = sysRes?.data || sysRes;
      const sysList = Array.isArray(sysData) ? sysData : (Array.isArray(sysData?.data) ? sysData.data : []);
      setSystemStudents(sysList);
    } catch (err) {
      console.warn('Failed to fetch featured students data:', err);
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    loadData();
  }, [loadData]);

  const handleOpenAddModal = async () => {
    try {
      const sysRes = await landingApi.fetchSystemStudents().catch(() => []);
      const sysData = sysRes?.data || sysRes;
      const sysList = Array.isArray(sysData) ? sysData : (Array.isArray(sysData?.data) ? sysData.data : []);
      if (sysList.length > 0) setSystemStudents(sysList);
    } catch (e) {
      console.warn(e);
    }

    setCurrentStar({
      id: null,
      studentId: '',
      name: '',
      nameEn: '',
      age: 10,
      level: 'متوسط',
      levelEn: 'Intermediate',
      groupName: 'مجموعة القرآن أ',
      groupNameEn: 'Quran Group A',
      parentName: '',
      parentNameEn: '',
      image: '',
      review: ''
    });
    setIsModalOpen(true);
  };

  const handleOpenEditModal = async (star) => {
    const resolvedStudentId =
      star.studentId ||
      star.student?.id ||
      star.student?._id ||
      star.student?.student_id ||
      (typeof star.student === 'string' ? star.student : '') ||
      star.id ||
      '';

    let studentId = String(resolvedStudentId);

    // Fallback match by name
    if (!studentId && systemStudents.length > 0) {
      const matched = systemStudents.find(s => {
        const studentName = typeof s.name === 'object' ? (s.name.ar || s.name.en) : s.name;
        return studentName && (studentName === star.name || studentName === star.nameEn);
      });
      if (matched) {
        studentId = String(matched.student_id || matched.id || matched._id || '');
      }
    }

    let extraData = {};
    if (studentId) {
      try {
        const res = await studentsApi.fetchRawStudentById(studentId);
        const rawStudent = res?.data || res;
        if (rawStudent) {
          extraData = {
            name: typeof rawStudent.name === 'object' ? rawStudent.name.ar || star.name : rawStudent.name || star.name,
            nameEn: typeof rawStudent.name === 'object' ? rawStudent.name.en || star.nameEn : rawStudent.nameEn || star.nameEn,
            image: buildImageUrl(rawStudent.image || rawStudent.user?.photoUrl || star.image),
            email: rawStudent.email || rawStudent.user?.email || star.email || '',
            phone: rawStudent.phone || rawStudent.user?.phone || star.phone || '',
            country: rawStudent.country || rawStudent.user?.country || star.country || '',
            active: rawStudent.active !== false
          };
        }
      } catch (err) {
        console.warn('Failed to fetch raw student by id:', err);
      }
    }

    setCurrentStar({ ...star, studentId, ...extraData });
    setIsModalOpen(true);
  };

  const handleOpenViewModal = (star) => {
    setCurrentStar({ ...star });
    setIsViewModalOpen(true);
  };

  const handleDeleteStar = async (star) => {
    const studentNameStr = typeof star.name === 'string'
      ? star.name
      : (star.name?.ar || star.name?.en || 'طالب متميز');

    const isRtl = i18n.language.startsWith('ar');
    const isConfirmed = await showDeleteConfirm(isRtl, studentNameStr);
    if (!isConfirmed) return;

    try {
      const id = star.id || star._id;
      await landingApi.deleteFeaturedStudent(id);
      setStars((prev) => prev.filter((s) => s.id !== id && s._id !== id));
      showNotification(t('adminDashboard.website.studentDeleted', 'تم حذف الطالب بنجاح!'));
    } catch (err) {
      console.error(err);
      showNotification(t('adminDashboard.website.studentDeleteError', 'فشل حذف الطالب'), 'error');
    }
  };

  const handleSaveModal = async (e) => {
    e.preventDefault();
    if (!currentStar.studentId) {
      showNotification(t('adminDashboard.website.selectStudentError', 'يرجى اختيار طالب من القائمة'), 'error');
      return;
    }

    try {
      const getAllStudentIds = (s) => [
        s.id, s._id, s.student_id, s.user_id,
        s.student?.id, s.student?._id, s.studentId
      ].filter(Boolean).map(String);

      const systemS = systemStudents.find(s =>
        getAllStudentIds(s).includes(String(currentStar.studentId))
      );

      const sNameAr = systemS ? (typeof systemS.name === 'object' ? systemS.name.ar : systemS.name) : '';
      const sNameEn = systemS ? (typeof systemS.name === 'object' ? systemS.name.en : (systemS.nameEn || systemS.name)) : '';

      const finalNameAr = currentStar.name?.trim() || sNameAr || 'طالب متميز';
      const finalNameEn = currentStar.nameEn?.trim() || sNameEn || finalNameAr;
      const finalAge = currentStar.age ? Number(currentStar.age) : (systemS?.age || 10);
      const finalLevel = currentStar.level || systemS?.level || 'متوسط';
      const finalGroupName = currentStar.groupName?.trim() || systemS?.groupName || 'مجموعة القرآن أ';
      const finalParentName = currentStar.parentName?.trim() || systemS?.parentName || '';
      const finalImage = currentStar.image || systemS?.image || systemS?.user?.photoUrl || '';

      const serializedReview = serializeStudentReview({
        age: finalAge,
        level: finalLevel,
        groupName: finalGroupName,
        parentName: finalParentName
      });

      const featuredPayload = {
        student: currentStar.studentId
      };

      if (currentStar.id === null) {
        const response = await landingApi.addFeaturedStudent(featuredPayload);
        const added = response?.data || response;

        const newStar = {
          ...added,
          id: added?.id || added?._id,
          student: systemS || { id: currentStar.studentId },
          studentId: currentStar.studentId,
          name: finalNameAr,
          nameEn: finalNameEn,
          age: finalAge,
          level: finalLevel,
          groupName: finalGroupName,
          parentName: finalParentName,
          image: finalImage,
          review: serializedReview
        };
        const parsed = parseStudentReview(newStar);
        setStars((prev) => [...prev, parsed]);
        showNotification(t('adminDashboard.website.studentAdded', 'تمت إضافة الطالب بنجاح!'));

        try {
          const formData = new FormData();
          if (currentStar.imageFile) formData.append('image', currentStar.imageFile);
          if (currentStar.name) formData.append('name[ar]', currentStar.name);
          if (currentStar.nameEn) formData.append('name[en]', currentStar.nameEn);
          if (currentStar.phone) formData.append('phone', currentStar.phone);
          formData.append('active', currentStar.active !== false);

          await studentsApi.updateStudent(currentStar.studentId, formData);
        } catch (e) {
          console.warn('Failed to update system student data:', e);
        }
      } else {
        const response = await landingApi.updateFeaturedStudent(currentStar.id, featuredPayload);
        const added = response?.data || response;

        const updatedStar = {
          ...added,
          id: currentStar.id,
          student: systemS || { id: currentStar.studentId },
          studentId: currentStar.studentId,
          name: finalNameAr,
          nameEn: finalNameEn,
          age: finalAge,
          level: finalLevel,
          groupName: finalGroupName,
          parentName: finalParentName,
          image: finalImage,
          review: serializedReview
        };
        const parsed = parseStudentReview(updatedStar);
        setStars((prev) =>
          prev.map((s) => (s.id === currentStar.id ? parsed : s))
        );
        showNotification(t('adminDashboard.website.studentUpdated', 'تم تحديث بيانات الطالب بنجاح!'));

        try {
          const formData = new FormData();
          if (currentStar.imageFile) formData.append('image', currentStar.imageFile);
          if (currentStar.name) formData.append('name[ar]', currentStar.name);
          if (currentStar.nameEn) formData.append('name[en]', currentStar.nameEn);
          if (currentStar.phone) formData.append('phone', currentStar.phone);
          formData.append('active', currentStar.active !== false);

          await studentsApi.updateStudent(currentStar.studentId, formData);
        } catch (e) {
          console.warn('Failed to update system student data:', e);
        }
      }
      setIsModalOpen(false);
    } catch (err) {
      console.error(err);
      const errMsg = err?.response?.data?.message;
      if (typeof errMsg === 'string' && (errMsg.includes('already') || errMsg.includes('مضاف') || errMsg.includes('موجود') || errMsg.includes('duplicate'))) {
        showNotification(t('adminDashboard.website.studentAlreadyAdded', 'هذا الطالب مضاف بالفعل مسبقاً'), 'error');
      } else {
        showNotification(t('adminDashboard.website.saveDataError', 'فشل حفظ البيانات'), 'error');
      }
    }
  };

  const handleSaveStarsList = () => {
    localStorage.setItem('website_stars', JSON.stringify(stars));
    showNotification(t('adminDashboard.website.starsListSaved', 'تمت مزامنة وحفظ قائمة نجوم التميز بنجاح!'));
  };

  const handleCancelStarsList = async () => {
    await loadData();
    showNotification(t('adminDashboard.website.changesReverted', 'تم إلغاء التغييرات وإعادة تحميل البيانات من الخادم'), 'info');
  };

  return {
    stars,
    isModalOpen,
    setIsModalOpen,
    isViewModalOpen,
    setIsViewModalOpen,
    currentStar,
    setCurrentStar,
    systemStudents,
    loading,
    handleOpenAddModal,
    handleOpenEditModal,
    handleOpenViewModal,
    handleDeleteStar,
    handleSaveModal,
    handleSaveStarsList,
    handleCancelStarsList
  };
}

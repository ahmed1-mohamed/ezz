import { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { landingApi } from '@/shared/services/api/landingApi';
import { studentsApi } from '@/shared/services/api/studentsApi';
import { showDeleteConfirm } from '@/shared/utils/sweetAlert';

const parseStudentReview = (student) => {
  const review = student.review || '';
  const parts = review.split(' | ');
  const agePart = parts.find(p => p.startsWith('Age:')) || '';
  const levelPart = parts.find(p => p.startsWith('Level:')) || '';
  const groupPart = parts.find(p => p.startsWith('Group:')) || '';
  const parentPart = parts.find(p => p.startsWith('Parent:')) || '';

  const levelVal = levelPart.substring(levelPart.indexOf(':') + 1).trim();
  const groupVal = groupPart.substring(groupPart.indexOf(':') + 1).trim();

  let studentNameStr = '';
  let studentNameEnStr = '';
  if (typeof student.name === 'object' && student.name !== null) {
    studentNameStr = student.name.ar || '';
    studentNameEnStr = student.name.en || '';
  } else if (typeof student.name === 'string') {
    studentNameStr = student.name;
    studentNameEnStr = student.nameEn || student.name || '';
  }

  const parentNameStr = parentPart.substring(parentPart.indexOf(':') + 1).trim();

  const resolvedStudentId =
    student.student?.id ||
    student.student?._id ||
    (typeof student.student === 'string' ? student.student : '') ||
    student.studentId ||
    '';

  return {
    id: student.id || student._id,
    studentId: resolvedStudentId,
    name: studentNameStr,
    nameEn: studentNameEnStr,
    age: parseInt(agePart.substring(agePart.indexOf(':') + 1).trim(), 10) || 10,
    level: levelVal,
    levelEn: levelVal === 'مبتدئ' ? 'Beginner' : levelVal === 'متقدم' ? 'Advanced' : 'Intermediate',
    groupName: groupVal,
    groupNameEn: groupVal,
    parentName: parentNameStr,
    parentNameEn: parentNameStr,
    image: student.image || ''
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

  useEffect(() => {
    async function loadFeaturedStudents() {
      try {
        const res = await landingApi.fetchFeaturedStudents();
        const data = res?.data || res;
        if (Array.isArray(data)) {
          const parsed = data.map((student) => parseStudentReview(student));
          setStars(parsed);
        }
      } catch (err) {
        console.warn('Failed to fetch featured students, loading from localStorage:', err);
        const savedStars = localStorage.getItem('website_stars');
        if (savedStars) {
          try {
            setStars(JSON.parse(savedStars));
          } catch (e) {
            console.error(e);
            setStars([]);
          }
        } else {
          setStars([]);
        }
      }
    }
    loadFeaturedStudents();
  }, []);

  const loadSystemStudentsLazily = async () => {
    if (systemStudents.length > 0) return systemStudents;
    try {
      const res = await landingApi.fetchSystemStudents();
      const data = res?.data || res;
      if (Array.isArray(data)) {
        setSystemStudents(data);
        return data;
      }
    } catch (err) {
      console.warn('Failed to fetch system students:', err);
    }
    return [];
  };

  const handleOpenAddModal = () => {
    loadSystemStudentsLazily();
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

    // Extract studentId from all possible shapes
    const resolvedStudentId =
      star.studentId ||
      (typeof star.student === 'string' ? star.student : '') ||
      star.student?.id ||
      star.student?._id ||
      star.student?.student_id ||
      star.student_id ||
      '';

    let studentId = resolvedStudentId;

    // Fallback: match by name if still no ID
    if (!studentId) {
      const loadedStudents = await loadSystemStudentsLazily();
      const currentSysStudents = systemStudents.length > 0 ? systemStudents : loadedStudents;
      if (currentSysStudents.length > 0) {
        const matched = currentSysStudents.find(s => {
          const studentName = typeof s.name === 'object' ? (s.name.ar || s.name.en) : s.name;
          return studentName && (studentName === star.name || studentName === star.nameEn);
        });
        if (matched) {
          studentId = matched.student_id || matched.id || matched._id || '';
        }
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
            image: rawStudent.image || rawStudent.user?.photoUrl || star.image,
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
    const studentNameStr = typeof star.studentName === 'string'
      ? star.studentName
      : (star.studentName?.ar || star.studentName?.en || 'طالب متميز');

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
        const existing = stars.find(s =>
          getAllStudentIds(s).includes(String(currentStar.studentId))
        );
        if (existing) {
          showNotification(t('adminDashboard.website.studentAlreadyAdded', 'هذا الطالب مضاف بالفعل مسبقاً'), 'error');
          return;
        }

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
      showNotification(t('adminDashboard.website.saveDataError', 'فشل حفظ البيانات'), 'error');
    }
  };

  const handleSaveStarsList = () => {
    localStorage.setItem('website_stars', JSON.stringify(stars));
    showNotification(t('adminDashboard.website.starsListSaved', 'تمت مزامنة وحفظ قائمة نجوم التميز بنجاح!'));
  };

  const handleCancelStarsList = async () => {
    try {
      const res = await landingApi.fetchFeaturedStudents();
      const data = res?.data || res;
      if (Array.isArray(data)) {
        const parsed = data.map((student) => parseStudentReview(student));
        setStars(parsed);
      }
    } catch (err) {
      const savedStars = localStorage.getItem('website_stars');
      if (savedStars) {
        setStars(JSON.parse(savedStars));
      } else {
        setStars([]);
      }
    }
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
    handleOpenAddModal,
    handleOpenEditModal,
    handleOpenViewModal,
    handleDeleteStar,
    handleSaveModal,
    handleSaveStarsList,
    handleCancelStarsList
  };
}

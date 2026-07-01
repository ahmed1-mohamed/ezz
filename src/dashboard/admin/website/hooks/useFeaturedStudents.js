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
  const { t } = useTranslation();
  
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
    if (systemStudents.length > 0) return;
    try {
      const res = await studentsApi.fetchStudents();
      const data = res?.data || res;
      if (Array.isArray(data)) {
        setSystemStudents(data);
      }
    } catch (err) {
      console.warn('Failed to fetch system students:', err);
    }
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

  const handleOpenEditModal = (star) => {
    loadSystemStudentsLazily();
    let studentId = star.studentId || '';
    if (!studentId && systemStudents.length > 0) {
      const matched = systemStudents.find(s => {
        const studentName = typeof s.name === 'object' ? (s.name.ar || s.name.en) : s.name;
        return studentName && (studentName === star.name || studentName === star.nameEn || studentName === star.parentName);
      });
      if (matched) {
        studentId = matched.student_id || matched.id || matched._id;
      }
    }
    setCurrentStar({ ...star, studentId });
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
    if (!currentStar.image?.trim() || !currentStar.name?.trim() || !currentStar.nameEn?.trim()) {
      showNotification(t('adminDashboard.website.fillRequiredFields', 'يرجى ملء جميع الحقول المطلوبة'), 'error');
      return;
    }

    const studentPayload = {
      name: { ar: currentStar.name.trim(), en: currentStar.nameEn.trim() },
      image: currentStar.image.trim()
    };

    const featuredPayload = {
      ...(currentStar.studentId ? { student: currentStar.studentId } : {})
    };

    try {
      if (currentStar.id === null) {
        if (currentStar.studentId) {
          await studentsApi.updateStudent(currentStar.studentId, studentPayload);
        }

        const response = await landingApi.addFeaturedStudent(featuredPayload);
        const added = response?.data || response;
        const newStar = {
          ...currentStar,
          id: added?.id || added?._id || `local-${Date.now()}`,
          name: { ar: currentStar.name.trim(), en: currentStar.nameEn.trim() },
          review: serializeStudentReview(currentStar)
        };
        const parsed = parseStudentReview(newStar);
        setStars((prev) => [...prev, parsed]);
        showNotification(t('adminDashboard.website.studentAdded', 'تمت إضافة الطالب بنجاح!'));
      } else {
        if (currentStar.studentId) {
          await studentsApi.updateStudent(currentStar.studentId, studentPayload);
        }

        await landingApi.updateFeaturedStudent(currentStar.id, featuredPayload);
        const updatedStar = {
          ...currentStar,
          name: { ar: currentStar.name.trim(), en: currentStar.nameEn.trim() },
          review: serializeStudentReview(currentStar)
        };
        const parsed = parseStudentReview(updatedStar);
        setStars((prev) =>
          prev.map((s) => (s.id === currentStar.id ? parsed : s))
        );
        showNotification(t('adminDashboard.website.studentUpdated', 'تم تحديث بيانات الطالب بنجاح!'));
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

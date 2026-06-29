import { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { landingApi } from '@/shared/services/api/landingApi';
import { studentsApi } from '@/shared/services/api/studentsApi';
import { teachersApi } from '@/shared/services/api/teachersApi';

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

export default function useWebsiteAdmin() {
  const { i18n } = useTranslation();
  const isRtl = i18n.language.startsWith('ar');

  const [stats, setStats] = useState({
    classes: 320,
    teachers: 85,
    students: 1250
  });

  const [contactInfo, setContactInfo] = useState({
    phone: '',
    whatsapp: '',
    email: ''
  });

  const [stars, setStars] = useState([]);

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

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isViewModalOpen, setIsViewModalOpen] = useState(false);
  const [currentStar, setCurrentStar] = useState(null);
  const [systemStudents, setSystemStudents] = useState([]);
  const [systemTeachers, setSystemTeachers] = useState([]);
  const [toast, setToast] = useState({ show: false, message: '', type: 'success' });

  useEffect(() => {
    async function loadStats() {
      try {
        const res = await landingApi.fetchPrivateStatistics();
        const statsData = res?.data || res;
        if (statsData) {
          setStats({
            classes: statsData.classes ?? 320,
            teachers: statsData.teachers ?? 85,
            students: statsData.students ?? 1250
          });
        }
      } catch (err) {
        console.warn('Failed to fetch private statistics, loading from localStorage:', err);
        const savedStats = localStorage.getItem('website_stats');
        if (savedStats) {
          try {
            setStats(JSON.parse(savedStats));
          } catch (e) {
            console.error(e);
          }
        }
      }
    }
    loadStats();

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

    async function loadSystemStudents() {
      try {
        const res = await studentsApi.fetchStudents();
        const data = res?.data || res;
        if (Array.isArray(data)) {
          setSystemStudents(data);
        }
      } catch (err) {
        console.warn('Failed to fetch system students:', err);
      }
    }
    loadSystemStudents();

    async function loadSystemTeachers() {
      try {
        const res = await landingApi.fetchSystemTeachers();
        const data = res?.data || res;
        if (Array.isArray(data)) {
          setSystemTeachers(data);
        }
      } catch (err) {
        console.warn('Failed to fetch system teachers:', err);
      }
    }
    loadSystemTeachers();

    async function loadContactInfo() {
      try {
        const res = await landingApi.fetchContactUs();
        const data = res?.data || res;
        if (data) {
          setContactInfo({
            phone: data.phone || '',
            whatsapp: data.whatsapp || '',
            email: data.email || ''
          });
        }
      } catch (err) {
        console.warn('Failed to fetch contact-us info:', err);
      }
    }
    loadContactInfo();
  }, []);

  useEffect(() => {
    if (toast.show) {
      const timer = setTimeout(() => {
        setToast((prev) => ({ ...prev, show: false }));
      }, 3000);
      return () => clearTimeout(timer);
    }
  }, [toast.show]);

  const showNotification = (message, type = 'success') => {
    setToast({ show: true, message, type });
  };

  const handleStatChange = (field, val) => {
    const numericVal = parseInt(val, 10);
    setStats((prev) => ({
      ...prev,
      [field]: isNaN(numericVal) ? 0 : numericVal
    }));
  };

  const handleSaveStats = async () => {
    try {
      const payload = {
        students: parseInt(stats.students, 10) || 0,
        teachers: parseInt(stats.teachers, 10) || 0,
        classes: parseInt(stats.classes, 10) || 0
      };
      await landingApi.updatePrivateStatistics(payload);
      localStorage.setItem('website_stats', JSON.stringify(stats));
      showNotification(
        isRtl ? 'تم حفظ الأرقام الإحصائية بنجاح!' : 'Statistics saved successfully!'
      );
    } catch (err) {
      console.warn('Failed to update statistics via API, saving to localStorage:', err);
      localStorage.setItem('website_stats', JSON.stringify(stats));
      showNotification(
        isRtl ? 'تم حفظ الأرقام الإحصائية محلياً!' : 'Statistics saved locally!'
      );
    }
  };

  const handleCancelStats = async () => {
    try {
      const res = await landingApi.fetchPrivateStatistics();
      const statsData = res?.data || res;
      if (statsData) {
        setStats({
          classes: statsData.classes ?? 320,
          teachers: statsData.teachers ?? 85,
          students: statsData.students ?? 1250
        });
      }
    } catch (err) {
      const savedStats = localStorage.getItem('website_stats');
      if (savedStats) {
        setStats(JSON.parse(savedStats));
      } else {
        setStats({ classes: 320, teachers: 85, students: 1250 });
      }
    }
    showNotification(
      isRtl ? 'تم إلغاء التغييرات الإحصائية' : 'Statistics changes reverted',
      'info'
    );
  };

  const handleSaveContactInfo = async (updatedInfo) => {
    try {
      await landingApi.updateContactUs(updatedInfo);
      setContactInfo(updatedInfo);
      showNotification(
        isRtl ? 'تم تحديث أرقام التواصل بنجاح!' : 'Contact numbers updated successfully!'
      );
    } catch (err) {
      console.error(err);
      showNotification(
        isRtl ? 'فشل تحديث أرقام التواصل' : 'Failed to update contact numbers',
        'error'
      );
    }
  };

  const handleCancelContactInfo = async () => {
    try {
      const res = await landingApi.fetchContactUs();
      const data = res?.data || res;
      if (data) {
        setContactInfo({
          phone: data.phone || '',
          whatsapp: data.whatsapp || '',
          email: data.email || ''
        });
      }
    } catch (err) {
      console.error(err);
    }
    showNotification(
      isRtl ? 'تم إلغاء تعديلات أرقام التواصل' : 'Contact numbers changes reverted',
      'info'
    );
  };

  const handleOpenAddModal = () => {
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

  const handleDeleteStar = async (id) => {
    if (window.confirm(isRtl ? 'هل أنت متأكد من حذف هذا الطالب المتميز؟' : 'Are you sure you want to delete this featured student?')) {
      try {
        await landingApi.deleteFeaturedStudent(id);
        setStars((prev) => prev.filter((s) => s.id !== id));
        showNotification(isRtl ? 'تم حذف الطالب بنجاح!' : 'Student deleted successfully!');
      } catch (err) {
        console.error(err);
        showNotification(isRtl ? 'فشل حذف الطالب' : 'Failed to delete student', 'error');
      }
    }
  };

  const handleSaveModal = async (e) => {
    e.preventDefault();
    if (!currentStar.image?.trim() || !currentStar.name?.trim() || !currentStar.nameEn?.trim()) {
      showNotification(isRtl ? 'يرجى ملء جميع الحقول المطلوبة' : 'Please fill all required fields', 'error');
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
        showNotification(isRtl ? 'تمت إضافة الطالب بنجاح!' : 'Student added successfully!');
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
        showNotification(isRtl ? 'تم تحديث بيانات الطالب بنجاح!' : 'Student updated successfully!');
      }
      setIsModalOpen(false);
    } catch (err) {
      console.error(err);
      showNotification(isRtl ? 'فشل حفظ البيانات' : 'Failed to save data', 'error');
    }
  };

  const handleSaveStarsList = () => {
    localStorage.setItem('website_stars', JSON.stringify(stars));
    showNotification(
      isRtl ? 'تمت مزامنة وحفظ قائمة نجوم التميز بنجاح!' : 'Stars list synchronized and saved successfully!'
    );
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
    showNotification(
      isRtl ? 'تم إلغاء التغييرات وإعادة تحميل البيانات من الخادم' : 'Changes reverted and reloaded from server',
      'info'
    );
  };

  const handleOpenAddTeacher = () => {
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
      showNotification(
        isRtl ? 'فشل تحميل ملاحظات المعلم' : 'Failed to load teacher notes',
        'error'
      );
      setIsTeacherModalOpen(false);
    } finally {
      setIsTeacherLoading(false);
    }
  };

  const handleDeleteTeacher = async (id) => {
    if (window.confirm(isRtl ? 'هل أنت متأكد من حذف هذا المعلم المتميز؟' : 'Are you sure you want to delete this elite teacher?')) {
      try {
        await landingApi.deleteEliteTeacher(id);
        setEliteTeachers((prev) => prev.filter((t) => t.id !== id));
        showNotification(isRtl ? 'تم حذف المعلم بنجاح!' : 'Teacher deleted successfully!');
      } catch (err) {
        console.error(err);
        showNotification(isRtl ? 'فشل حذف المعلم' : 'Failed to delete teacher', 'error');
      }
    }
  };

  const handleSaveTeacherSubmit = async (e) => {
    e.preventDefault();
    if (!currentTeacher.teacherId) {
      showNotification(isRtl ? 'يرجى اختيار معلم من القائمة' : 'Please select a teacher from the list', 'error');
      return;
    }

    const teacherPayload = {
      name: { ar: currentTeacher.name.trim(), en: currentTeacher.nameEn.trim() },
      image: currentTeacher.image.trim()
    };

    const elitePayload = {
      teacher: currentTeacher.teacherId
    };
    console.log('[Elite Teacher] Payloads being sent:', { teacherPayload, elitePayload });

    try {
      await teachersApi.patchTeacher(currentTeacher.teacherId, teacherPayload);

      if (currentTeacher.id === null) {
        const response = await landingApi.addEliteTeacher(elitePayload);
        const added = response?.data || response;
        const newTeacher = {
          ...currentTeacher,
          id: added?.id || added?._id || `local-${Date.now()}`,
          name: isRtl ? currentTeacher.name.trim() : currentTeacher.nameEn.trim()
        };
        setEliteTeachers((prev) => [...prev, newTeacher]);
        showNotification(isRtl ? 'تمت إضافة المعلم بنجاح!' : 'Teacher added successfully!');
      } else {
        await landingApi.updateEliteTeacher(currentTeacher.id, elitePayload);
        const updatedTeacher = {
          ...currentTeacher,
          name: isRtl ? currentTeacher.name.trim() : currentTeacher.nameEn.trim()
        };
        setEliteTeachers((prev) =>
          prev.map((t) => (t.id === currentTeacher.id ? updatedTeacher : t))
        );
        showNotification(isRtl ? 'تم تحديث بيانات المعلم بنجاح!' : 'Teacher updated successfully!');
      }
      setIsTeacherFormOpen(false);
    } catch (err) {
      console.error(err);
      showNotification(isRtl ? 'فشل حفظ البيانات' : 'Failed to save data', 'error');
    }
  };

  return {
    isRtl,
    stats,
    contactInfo,
    stars,
    eliteTeachers,
    isTeacherModalOpen,
    selectedTeacher,
    isTeacherLoading,
    isTeacherFormOpen,
    currentTeacher,
    isModalOpen,
    isViewModalOpen,
    currentStar,
    systemStudents,
    systemTeachers,
    toast,
    setCurrentTeacher,
    setCurrentStar,
    handleStatChange,
    handleSaveStats,
    handleCancelStats,
    handleSaveContactInfo,
    handleCancelContactInfo,
    handleOpenAddModal,
    handleOpenEditModal,
    handleOpenViewModal,
    handleDeleteStar,
    handleCancelStarsList,
    handleSaveStarsList,
    handleOpenAddTeacher,
    handleOpenEditTeacher,
    handleShowTeacherNotes,
    handleDeleteTeacher,
    handleSaveModal,
    handleSaveTeacherSubmit,
    setIsModalOpen,
    setIsTeacherFormOpen,
    setIsViewModalOpen,
    setIsTeacherModalOpen
  };
}
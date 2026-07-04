import { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { landingApi } from '@/shared/services/api/landingApi';
import { showDeleteConfirm } from '@/shared/utils/sweetAlert';

export default function useTestimonials(showNotification) {
  const { t, i18n } = useTranslation();

  const [testimonials, setTestimonials] = useState([]);
  const [isTestimonialModalOpen, setIsTestimonialModalOpen] = useState(false);
  const [currentTestimonial, setCurrentTestimonial] = useState({
    id: null,
    parentNameAr: '',
    parentNameEn: '',
    reviewAr: '',
    reviewEn: '',
    image: null,
    previewImage: null
  });

  useEffect(() => {
    async function loadTestimonials() {
      try {
        const res = await landingApi.fetchPrivateTestimonials();
        const data = res?.data || res;
        if (Array.isArray(data)) {
          setTestimonials(data);
        } else if (data?.data && Array.isArray(data.data)) {
          setTestimonials(data.data);
        }
      } catch (err) {
        console.warn('Failed to fetch testimonials:', err);
      }
    }
    loadTestimonials();
  }, []);

  const handleOpenAddTestimonial = () => {
    setCurrentTestimonial({
      id: null,
      parentNameAr: '',
      parentNameEn: '',
      reviewAr: '',
      reviewEn: '',
      image: null,
      previewImage: null
    });
    setIsTestimonialModalOpen(true);
  };

  const handleOpenEditTestimonial = (testimonial) => {
    setCurrentTestimonial({
      id: testimonial.id || testimonial._id,
      parentNameAr: typeof testimonial.parentName === 'object' ? (testimonial.parentName.ar || '') : (testimonial.parentName || ''),
      parentNameEn: typeof testimonial.parentName === 'object' ? (testimonial.parentName.en || '') : (testimonial.parentName || ''),
      reviewAr: typeof testimonial.review === 'object' ? (testimonial.review.ar || '') : (testimonial.review || ''),
      reviewEn: typeof testimonial.review === 'object' ? (testimonial.review.en || '') : (testimonial.review || ''),
      image: testimonial.image || null,
      previewImage: testimonial.image || null
    });
    setIsTestimonialModalOpen(true);
  };

  const handleDeleteTestimonial = async (testimonial) => {
    const parentNameStr = typeof testimonial.parentName === 'string'
      ? testimonial.parentName
      : (testimonial.parentName?.ar || testimonial.parentName?.en || 'ولي أمر');
    
    const isRtl = i18n.language.startsWith('ar');
    const isConfirmed = await showDeleteConfirm(isRtl, parentNameStr);
    if (!isConfirmed) return;

    try {
      const id = testimonial.id || testimonial._id;
      await landingApi.deletePrivateTestimonial(id);
      setTestimonials((prev) => prev.filter((t) => t.id !== id && t._id !== id));
      showNotification(t('adminDashboard.website.testimonialDeleted', 'تم حذف الرأي بنجاح!'));
    } catch (err) {
      console.error(err);
      showNotification(t('adminDashboard.website.testimonialDeleteError', 'فشل حذف الرأي'), 'error');
    }
  };

  const handleSaveTestimonialSubmit = async (e) => {
    e.preventDefault();
    if (!currentTestimonial.parentNameAr?.trim() || !currentTestimonial.reviewAr?.trim()) {
      showNotification(t('adminDashboard.website.fillRequiredFields', 'يرجى ملء جميع الحقول المطلوبة'), 'error');
      return;
    }
    if (!currentTestimonial.image) {
      showNotification(t('adminDashboard.website.imageRequired', 'الصورة الشخصية إجبارية'), 'error');
      return;
    }

    const formData = new FormData();
    if (currentTestimonial.parentNameEn?.trim()) formData.append('parentName[en]', currentTestimonial.parentNameEn.trim());
    formData.append('parentName[ar]', currentTestimonial.parentNameAr.trim());
    if (currentTestimonial.reviewEn?.trim()) formData.append('review[en]', currentTestimonial.reviewEn.trim());
    formData.append('review[ar]', currentTestimonial.reviewAr.trim());

    if (currentTestimonial.image && currentTestimonial.image instanceof File) {
      formData.append('image', currentTestimonial.image);
    } else if (typeof currentTestimonial.image === 'string' && currentTestimonial.image.trim()) {
      try {
        const response = await fetch(currentTestimonial.image);
        const blob = await response.blob();
        const filename = currentTestimonial.image.split('/').pop() || 'image.webp';
        const file = new File([blob], filename, { type: blob.type || 'image/webp' });
        formData.append('image', file);
      } catch (err) {
        console.warn('Failed to fetch existing image to convert to file:', err);
        // We log the specific error that might occur here
      }
    }

    try {
      let updatedOrAdded;
      if (currentTestimonial.id === null) {
        const response = await landingApi.addPrivateTestimonial(formData);
        updatedOrAdded = response?.data || response;
        setTestimonials((prev) => [...prev, updatedOrAdded]);
        showNotification(t('adminDashboard.website.testimonialAdded', 'تمت إضافة الرأي بنجاح!'));
      } else {
        const response = await landingApi.updatePrivateTestimonial(currentTestimonial.id, formData);
        updatedOrAdded = response?.data || response;
        setTestimonials((prev) => prev.map((t) => (t.id === currentTestimonial.id || t._id === currentTestimonial.id ? updatedOrAdded : t)));
        showNotification(t('adminDashboard.website.testimonialUpdated', 'تم تحديث الرأي بنجاح!'));
      }
      setIsTestimonialModalOpen(false);
    } catch (err) {
      console.error('Backend validation error:', err.response?.data);
      console.error(err);
      const errMsg = err.response?.data?.message || err.message || '';
      showNotification(t('adminDashboard.website.saveDataError', 'فشل حفظ البيانات') + (errMsg ? `: ${JSON.stringify(errMsg)}` : ''), 'error');
    }
  };

  return {
    testimonials,
    isTestimonialModalOpen,
    setIsTestimonialModalOpen,
    currentTestimonial,
    setCurrentTestimonial,
    handleOpenAddTestimonial,
    handleOpenEditTestimonial,
    handleDeleteTestimonial,
    handleSaveTestimonialSubmit
  };
}

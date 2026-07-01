import { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { landingApi } from '@/shared/services/api/landingApi';

export default function useContactInfo(showNotification) {
  const { t } = useTranslation();

  const [contactInfo, setContactInfo] = useState({
    phone: '',
    whatsapp: '',
    email: ''
  });

  useEffect(() => {
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

  const handleSaveContactInfo = async (updatedInfo) => {
    try {
      await landingApi.updateContactUs(updatedInfo);
      setContactInfo(updatedInfo);
      showNotification(t('adminDashboard.website.contactSaved', 'تم تحديث أرقام التواصل بنجاح!'));
    } catch (err) {
      console.error(err);
      showNotification(t('adminDashboard.website.contactSaveError', 'فشل تحديث أرقام التواصل'), 'error');
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
    showNotification(t('adminDashboard.website.contactReverted', 'تم إلغاء تعديلات أرقام التواصل'), 'info');
  };

  return {
    contactInfo,
    handleSaveContactInfo,
    handleCancelContactInfo
  };
}

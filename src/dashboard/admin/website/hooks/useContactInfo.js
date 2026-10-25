import { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { landingApi } from '@/shared/services/api/landingApi';

export default function useContactInfo(showNotification, enabled = true) {
  const { t } = useTranslation();

  const [contactInfo, setContactInfo] = useState({
    phone: '',
    whatsapp: '',
    email: ''
  });

  const [isLoading, setIsLoading] = useState(enabled);
  const [isSaving, setIsSaving] = useState(false);

  useEffect(() => {
    if (!enabled) {
      setIsLoading(false);
      return;
    }
    async function loadContactInfo() {
      setIsLoading(true);
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
      } finally {
        setIsLoading(false);
      }
    }
    loadContactInfo();
  }, [enabled]);

  const handleSaveContactInfo = async (updatedInfo) => {
    setIsSaving(true);
    try {
      await landingApi.updateContactUs(updatedInfo);
      setContactInfo(updatedInfo);
      showNotification(t('adminDashboard.website.contactSaved', 'تم تحديث أرقام التواصل بنجاح!'));
    } catch (err) {
      console.error(err);
      showNotification(t('adminDashboard.website.contactSaveError', 'فشل تحديث أرقام التواصل'), 'error');
    } finally {
      setIsSaving(false);
    }
  };

  const handleCancelContactInfo = async () => {
    setIsLoading(true);
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
    } finally {
      setIsLoading(false);
    }
    showNotification(t('adminDashboard.website.contactReverted', 'تم إلغاء تعديلات أرقام التواصل'), 'info');
  };

  return {
    contactInfo,
    isLoading,
    isSaving,
    handleSaveContactInfo,
    handleCancelContactInfo
  };
}

import { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';

import Button from '@/shared/components/Button.jsx';
import CountryPhoneInput from '@/shared/components/CountryPhoneInput.jsx';

export default function ContactUsForm({
  contactInfo,
  onSave,
  onCancel
}) {
  const { t } = useTranslation();

  const [localContact, setLocalContact] = useState({
    phone: '',
    whatsapp: '',
    email: ''
  });

  useEffect(() => {
    if (contactInfo) {
      // eslint-disable-next-line react-hooks/set-state-in-effect
      setLocalContact({
        phone: contactInfo.phone || '',
        whatsapp: contactInfo.whatsapp || '',
        email: contactInfo.email || ''
      });
    }
  }, [contactInfo]);

  const handleSubmit = (e) => {
    e.preventDefault();
    onSave(localContact);
  };

  const handleCancelClick = () => {
    if (contactInfo) {
      setLocalContact({
        phone: contactInfo.phone || '',
        whatsapp: contactInfo.whatsapp || '',
        email: contactInfo.email || ''
      });
    }
    if (onCancel) {
      onCancel();
    }
  };

  return (
    <div className="bg-white dark:bg-slate-900 rounded-[2rem] border border-slate-100 dark:border-slate-800/60 shadow-soft p-5 lg:p-8">
      <h2 className="text-xl font-bold text-slate-800 dark:text-slate-100 mb-6 text-start">
        {t('adminDashboard.website.contactUsNumbers', 'ارقام التواصل معنا')}
      </h2>

      <form onSubmit={handleSubmit} className="space-y-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-end">
          <div className="space-y-2 text-start">
            <label className="text-sm font-semibold text-slate-600 dark:text-slate-400 block px-1">
              {t('common.email', 'البريد الإلكتروني')}
            </label>
            <div className="relative">
              <input
                type="email"
                required
                value={localContact.email}
                onChange={(e) => setLocalContact({ ...localContact, email: e.target.value })}
                placeholder="ahmed@gmail.com"
                className="w-full px-5 py-3.5 bg-[#F5F5F2] dark:bg-slate-950 border border-transparent dark:border-slate-850 rounded-2xl focus:border-[#0f7a6c] focus:bg-white dark:focus:bg-slate-900 focus:ring-1 focus:ring-[#0f7a6c] outline-none text-slate-800 dark:text-slate-200 text-sm font-medium transition-all"
              />
            </div>
          </div>

          <div className="space-y-2">
            <CountryPhoneInput
              value={localContact.phone}
              onChange={(val) => setLocalContact({ ...localContact, phone: val })}
              label={t('common.phoneNumber', 'رقم الهاتف')}
            />
          </div>

          <div className="space-y-2">
            <CountryPhoneInput
              value={localContact.whatsapp}
              onChange={(val) => setLocalContact({ ...localContact, whatsapp: val })}
              label={t('common.whatsapp', 'رقم الواتساب')}
            />
          </div>
        </div>

        <div className="flex flex-col sm:flex-row items-center justify-start gap-3 border-t border-slate-100 dark:border-slate-800/80 pt-6 mt-6">
          <Button
            type="submit"
            className="w-full sm:w-auto px-8 py-2.5 bg-[#0f7a6c] hover:bg-[#0c6256] text-white rounded-xl text-sm font-semibold shadow-sm flex items-center justify-center gap-1.5"
          >
            <span>{t('common.modify', 'تعديل')}</span>
          </Button>
          <Button
            type="button"
            variant="secondary"
            onClick={handleCancelClick}
            className="w-full sm:w-auto px-6 py-2.5 rounded-xl text-sm text-slate-650 dark:text-slate-300 font-semibold"
          >
            {t('common.cancel', 'إلغاء')}
          </Button>
        </div>
      </form>
    </div>
  );
}
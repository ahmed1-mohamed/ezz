import { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { z } from 'zod';

import Button from '@/shared/components/Button.jsx';
import CountryPhoneInput from '@/shared/components/CountryPhoneInput.jsx';

const contactSchema = z.object({
  email: z.string().min(1, 'البريد الإلكتروني مطلوب').email('البريد الإلكتروني غير صالح'),
  phone: z.string().min(5, 'رقم الهاتف مطلوب'),
  whatsapp: z.string().min(5, 'رقم الواتساب مطلوب')
});

export default function ContactUsForm({
  contactInfo,
  onSave,
  onCancel
}) {
  const { t, i18n } = useTranslation();
  const isRtl = i18n.language.startsWith('ar');
  const [errors, setErrors] = useState({});

  const [localContact, setLocalContact] = useState({
    phone: '',
    whatsapp: '',
    email: ''
  });

  useEffect(() => {
    if (contactInfo) {
      setLocalContact({
        phone: contactInfo.phone || '',
        whatsapp: contactInfo.whatsapp || '',
        email: contactInfo.email || ''
      });
    }
  }, [contactInfo]);

  const handleSubmit = (e) => {
    e.preventDefault();
    const result = contactSchema.safeParse(localContact);
    if (!result.success) {
      const formatted = {};
      result.error.issues.forEach(issue => {
        formatted[issue.path[0]] = isRtl ? issue.message : issue.message.replace('مطلوب', 'is required').replace('غير صالح', 'is invalid');
      });
      setErrors(formatted);
      return;
    }
    setErrors({});
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
    setErrors({});
  };

  return (
    <div className="bg-white dark:bg-slate-900 rounded-[2rem] border border-slate-100 dark:border-slate-800/60 shadow-soft p-5 lg:p-8">
      <h2 className="text-xl font-bold text-slate-800 dark:text-slate-100 mb-6 text-start">
        {t('adminDashboard.website.contactUsNumbers', isRtl ? 'ارقام التواصل معنا' : 'Contact Us Numbers')}
      </h2>

      <form onSubmit={handleSubmit} className="space-y-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-end">
          <div className="space-y-2 text-start">
            <label className="text-sm font-semibold text-slate-600 dark:text-slate-400 block px-1">
              {t('common.email', isRtl ? 'البريد الإلكتروني' : 'Email')}
            </label>
            <div className="relative">
              <input
                type="email"
                required
                value={localContact.email}
                onChange={(e) => {
                  setLocalContact({ ...localContact, email: e.target.value });
                  if (errors.email) setErrors({ ...errors, email: null });
                }}
                placeholder="ahmed@gmail.com"
                className={`w-full px-5 py-3.5 bg-[#F5F5F2] dark:bg-slate-950 border rounded-2xl focus:bg-white dark:focus:bg-slate-900 focus:ring-1 outline-none text-slate-800 dark:text-slate-200 text-sm font-medium transition-all ${errors.email ? 'border-red-500 focus:border-red-500 focus:ring-red-500' : 'border-transparent dark:border-slate-850 focus:border-[#0f7a6c] focus:ring-[#0f7a6c]'}`}
              />
            </div>
            {errors.email && <p className="text-xs text-red-500 font-medium">{errors.email}</p>}
          </div>

          <div className="space-y-2">
            <CountryPhoneInput
              value={localContact.phone}
              onChange={(val) => {
                setLocalContact({ ...localContact, phone: val });
                if (errors.phone) setErrors({ ...errors, phone: null });
              }}
              label={t('common.phoneNumber', isRtl ? 'رقم الهاتف' : 'Phone Number')}
            />
            {errors.phone && <p className="text-xs text-red-500 font-medium">{errors.phone}</p>}
          </div>

          <div className="space-y-2">
            <CountryPhoneInput
              value={localContact.whatsapp}
              onChange={(val) => {
                setLocalContact({ ...localContact, whatsapp: val });
                if (errors.whatsapp) setErrors({ ...errors, whatsapp: null });
              }}
              label={t('common.whatsapp', isRtl ? 'رقم الواتساب' : 'WhatsApp Number')}
            />
            {errors.whatsapp && <p className="text-xs text-red-500 font-medium">{errors.whatsapp}</p>}
          </div>
        </div>

        <div className="flex flex-col sm:flex-row items-center justify-start gap-3 border-t border-slate-100 dark:border-slate-800/80 pt-6 mt-6">
          <Button
            type="submit"
            className="w-full sm:w-auto px-8 py-2.5 bg-[#0f7a6c] hover:bg-[#0c6256] text-white rounded-xl text-sm font-semibold shadow-sm flex items-center justify-center gap-1.5"
          >
            <span>{t('common.modify', isRtl ? 'تعديل' : 'Modify')}</span>
          </Button>
          <Button
            type="button"
            variant="secondary"
            onClick={handleCancelClick}
            className="w-full sm:w-auto px-6 py-2.5 rounded-xl text-sm text-slate-650 dark:text-slate-300 font-semibold"
          >
            {t('common.cancel', isRtl ? 'إلغاء' : 'Cancel')}
          </Button>
        </div>
      </form>
    </div>
  );
}
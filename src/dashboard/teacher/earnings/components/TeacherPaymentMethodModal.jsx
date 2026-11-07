import { useState, useEffect, useRef } from 'react';
import { createPortal } from 'react-dom';
import {
  X,
  Building2,
  Smartphone,
  Zap,
  Globe,
  Banknote,
  Upload,
  CheckCircle2,
  Trash2,
  AlertCircle,
  Loader2,
  ShieldAlert,
} from 'lucide-react';

const METHOD_TYPES = [
  { id: 'bank_transfer', labelKey: 'teacher.earnings.methods.types.bank_transfer', defaultLabel: 'حساب بنكي', icon: Building2 },
  { id: 'instapay', labelKey: 'teacher.earnings.methods.types.instapay', defaultLabel: 'إنستاباي (InstaPay)', icon: Zap },
  { id: 'mobile_wallet', labelKey: 'teacher.earnings.methods.types.mobile_wallet', defaultLabel: 'محفظة إلكترونية', icon: Smartphone },
  { id: 'paypal', labelKey: 'teacher.earnings.methods.types.paypal', defaultLabel: 'باي بال (PayPal)', icon: Globe },
  { id: 'western_union', labelKey: 'teacher.earnings.methods.types.western_union', defaultLabel: 'ويسترن يونيون (Western Union)', icon: Banknote },
];

const WALLET_PROVIDERS = [
  { id: 'vodafone_cash', labelKey: 'teacher.earnings.methods.walletProviders.vodafone_cash', defaultLabel: 'فودافون كاش' },
  { id: 'etisalat_cash', labelKey: 'teacher.earnings.methods.walletProviders.etisalat_cash', defaultLabel: 'اتصالات كاش' },
  { id: 'orange_cash', labelKey: 'teacher.earnings.methods.walletProviders.orange_cash', defaultLabel: 'أورنج كاش' },
  { id: 'we_pay', labelKey: 'teacher.earnings.methods.walletProviders.we_pay', defaultLabel: 'وي باي (WE Pay)' },
  { id: 'stc_pay', labelKey: 'teacher.earnings.methods.walletProviders.stc_pay', defaultLabel: 'STC Pay (إس تي سي باي)' },
  { id: 'other', labelKey: 'teacher.earnings.methods.walletProviders.other', defaultLabel: 'أخرى' },
];

function getInitialFormState(initialData) {
  if (!initialData) {
    return {
      type: 'bank_transfer',
      accountHolderName: '',
      bankName: '',
      accountNumber: '',
      iban: '',
      swiftCode: '',
      branchName: '',
      walletProvider: 'vodafone_cash',
      walletNumber: '',
      instapayAddress: '',
      phoneNumber: '',
      paypalEmail: '',
      country: '',
      nationalIdOrPassport: '',
      notes: '',
      isDefault: false,
      isConfirmed: true,
      verificationImage: null,
    };
  }
  return {
    type: initialData.type || 'bank_transfer',
    accountHolderName: initialData.accountHolderName || '',
    bankName: initialData.bankName || '',
    accountNumber: initialData.accountNumber || '',
    iban: initialData.iban || '',
    swiftCode: initialData.swiftCode || '',
    branchName: initialData.branchName || '',
    walletProvider: initialData.walletProvider || 'vodafone_cash',
    walletNumber: initialData.walletNumber || '',
    instapayAddress: initialData.instapayAddress || '',
    phoneNumber: initialData.phoneNumber || '',
    paypalEmail: initialData.paypalEmail || '',
    country: initialData.country || '',
    nationalIdOrPassport: initialData.nationalIdOrPassport || '',
    notes: initialData.notes || '',
    isDefault: Boolean(initialData.isDefault),
    isConfirmed: true,
    verificationImage: null,
  };
}

function buildCleanPayload(formData, isEdit = false) {
  const isDefault = Boolean(formData.isDefault);
  const base = {
    isConfirmed: true,
    isDefault,
  };
  if (!isEdit) {
    base.type = formData.type;
  }
  if (formData.notes && formData.notes.trim()) {
    base.notes = formData.notes.trim();
  }
  if (formData.verificationImage instanceof File || formData.verificationImage instanceof Blob) {
    base.verificationImage = formData.verificationImage;
  }
  if (formData.type === 'bank_transfer') {
    base.bankName = (formData.bankName || '').trim();
    base.accountHolderName = (formData.accountHolderName || '').trim();
    base.accountNumber = (formData.accountNumber || '').trim();
    if (formData.iban && formData.iban.trim()) base.iban = formData.iban.trim();
    if (formData.swiftCode && formData.swiftCode.trim()) base.swiftCode = formData.swiftCode.trim();
    if (formData.branchName && formData.branchName.trim()) base.branchName = formData.branchName.trim();
    return base;
  }
  if (formData.type === 'instapay') {
    base.instapayAddress = (formData.instapayAddress || '').trim();
    base.accountHolderName = (formData.accountHolderName || '').trim();
    if (formData.bankName && formData.bankName.trim()) base.bankName = formData.bankName.trim();
    return base;
  }
  if (formData.type === 'mobile_wallet') {
    base.walletProvider = formData.walletProvider;
    base.walletNumber = (formData.walletNumber || '').trim();
    if (formData.accountHolderName && formData.accountHolderName.trim()) {
      base.accountHolderName = formData.accountHolderName.trim();
    }
    return base;
  }
  if (formData.type === 'paypal') {
    base.paypalEmail = (formData.paypalEmail || '').trim().toLowerCase();
    base.accountHolderName = (formData.accountHolderName || '').trim();
    return base;
  }
  if (formData.type === 'western_union') {
    base.accountHolderName = (formData.accountHolderName || '').trim();
    base.country = (formData.country || '').trim();
    base.phoneNumber = (formData.phoneNumber || '').trim();
    if (formData.nationalIdOrPassport && formData.nationalIdOrPassport.trim()) {
      base.nationalIdOrPassport = formData.nationalIdOrPassport.trim();
    }
    return base;
  }
  return base;
}

function TeacherPaymentMethodDialogContent({
  initialData,
  onClose,
  onSave,
  isSubmitting,
  serverError,
  t,
}) {
  const isEdit = Boolean(initialData?.id);
  const fileInputRef = useRef(null);
  const [formData, setFormData] = useState(() => getInitialFormState(initialData));
  const [previewUrl, setPreviewUrl] = useState(() => (typeof initialData?.verificationImage === 'string' ? initialData.verificationImage : ''));
  const [errorMsg, setErrorMsg] = useState('');
  const handleTypeChange = (newType) => {
    setFormData((prev) => ({ ...prev, type: newType }));
    setErrorMsg('');
  };
  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value,
    }));
    if (errorMsg) setErrorMsg('');
  };
  const handleFileChange = (e) => {
    const file = e.target.files?.[0];
    if (!file) return;
    setFormData((prev) => ({ ...prev, verificationImage: file }));
    const objectUrl = URL.createObjectURL(file);
    setPreviewUrl(objectUrl);
  };
  const handleRemoveImage = () => {
    setFormData((prev) => ({ ...prev, verificationImage: null }));
    setPreviewUrl('');
    if (fileInputRef.current) fileInputRef.current.value = '';
  };
  const validateForm = () => {
    if (formData.type === 'bank_transfer') {
      if (!formData.bankName?.trim()) {
        return t('teacher.earnings.modal.validation.bankRequired', 'يرجى إدخال اسم البنك');
      }
      if (!formData.accountHolderName?.trim()) {
        return t('teacher.earnings.modal.validation.holderRequired', 'يرجى إدخال اسم صاحب الحساب بالكامل كما هو مسجل في البنك');
      }
      if (!formData.accountNumber?.trim()) {
        return t('teacher.earnings.modal.validation.accountRequired', 'يرجى إدخال رقم الحساب البنكي');
      }
    } else if (formData.type === 'instapay') {
      if (!formData.instapayAddress?.trim()) {
        return t('teacher.earnings.modal.validation.instapayRequired', 'يرجى إدخال عنوان الدفع اللحظي IPA (مثل ahmed@instapay أو رقم الهاتف)');
      }
      if (!formData.accountHolderName?.trim()) {
        return t('teacher.earnings.modal.validation.instapayHolderRequired', 'يرجى إدخال الاسم المسجل على حساب إنستا باي للتأكيد');
      }
    } else if (formData.type === 'mobile_wallet') {
      if (!formData.walletProvider) {
        return t('teacher.earnings.modal.validation.walletProviderRequired', 'يرجى اختيار مزود المحفظة');
      }
      if (!formData.walletNumber?.trim()) {
        return t('teacher.earnings.modal.validation.walletNumberRequired', 'يرجى إدخال رقم هاتف المحفظة');
      }
    } else if (formData.type === 'paypal') {
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!formData.paypalEmail?.trim() || !emailRegex.test(formData.paypalEmail.trim())) {
        return t('teacher.earnings.modal.validation.paypalEmailRequired', 'يرجى إدخال بريد باي بال صحيح');
      }
      if (!formData.accountHolderName?.trim()) {
        return t('teacher.earnings.modal.validation.paypalHolderRequired', 'يرجى إدخال اسم صاحب حساب PayPal');
      }
    } else if (formData.type === 'western_union') {
      if (!formData.accountHolderName?.trim()) {
        return t('teacher.earnings.modal.validation.westernUnionHolderRequired', 'يرجى إدخال الاسم الرباعي مطابقاً لجواز السفر أو البطاقة');
      }
      if (!formData.country?.trim()) {
        return t('teacher.earnings.modal.validation.countryRequired', 'يرجى إدخال الدولة والمدينة المستلم منها');
      }
      if (!formData.phoneNumber?.trim()) {
        return t('teacher.earnings.modal.validation.phoneRequired', 'يرجى إدخال رقم الهاتف للتواصل');
      }
    }
    if (!formData.isConfirmed) {
      return t('teacher.earnings.modal.validation.acknowledgeRequired', 'يجب الإقرار بصحة البيانات المدخلة وتحمل مسؤولية أي خطأ فيها');
    }
    return null;
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    const err = validateForm();
    if (err) {
      setErrorMsg(err);
      return;
    }
    const cleanPayload = buildCleanPayload(formData, isEdit);
    onSave(cleanPayload);
  };
  const displayError = errorMsg || serverError;
  return (
    <div
      onClick={(e) => e.stopPropagation()}
      className="bg-white dark:bg-slate-900 w-full max-w-xl rounded-3xl shadow-2xl border border-slate-100 dark:border-slate-800 overflow-hidden flex flex-col max-h-[92vh] text-start relative z-10"
    >
      <div className="px-6 py-4 border-b border-slate-100 dark:border-slate-800 flex items-center justify-between shrink-0">
        <div>
          <h3 className="text-lg font-black text-slate-800 dark:text-white">
            {isEdit
              ? t('teacher.earnings.modal.editTitle', 'تعديل طريقة الدفع')
              : t('teacher.earnings.modal.addTitle', 'إضافة طريقة دفع جديدة')}
          </h3>
          <p className="text-xs text-slate-400 dark:text-slate-500 mt-0.5">
            {t('teacher.earnings.methods.subtitle', 'الحسابات والمحافظ المفعلة لاستلام مستحقاتك الشهرية')}
          </p>
        </div>
        <button
          type="button"
          onClick={onClose}
          className="p-2 rounded-xl text-slate-400 hover:text-slate-600 dark:hover:text-white hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors cursor-pointer"
        >
          <X size={20} />
        </button>
      </div>
      <form onSubmit={handleSubmit} className="p-6 overflow-y-auto space-y-5 flex-1">
        {displayError && (
          <div className="p-3.5 rounded-2xl bg-rose-50 dark:bg-rose-950/30 border border-rose-200 dark:border-rose-900/50 flex items-center gap-2.5 text-xs font-bold text-rose-700 dark:text-rose-400">
            <AlertCircle size={16} className="shrink-0" />
            <span>{displayError}</span>
          </div>
        )}
        <div className="space-y-2">
          <label className="text-xs font-bold text-slate-700 dark:text-slate-300">
            {t('teacher.earnings.modal.typeLabel', 'نوع طريقة الدفع')} *
          </label>
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
            {METHOD_TYPES.map((typeOption) => {
              const Icon = typeOption.icon;
              const isSelected = formData.type === typeOption.id;
              return (
                <button
                  type="button"
                  key={typeOption.id}
                  disabled={isEdit}
                  onClick={() => {
                    if (!isEdit) handleTypeChange(typeOption.id);
                  }}
                  className={`p-3 rounded-2xl border text-xs font-bold flex flex-col items-center justify-center gap-2 transition-all ${
                    isEdit ? 'cursor-not-allowed opacity-75' : 'cursor-pointer'
                  } ${
                    isSelected
                      ? 'border-[#005953] bg-[#005953]/10 text-[#005953] dark:text-brand-400 dark:border-brand-400 shadow-sm'
                      : 'border-slate-200 dark:border-slate-800 text-slate-600 dark:text-slate-400 hover:border-slate-300 dark:hover:border-slate-700'
                  }`}
                >
                  <Icon size={20} />
                  <span className="text-center">{t(typeOption.labelKey, typeOption.defaultLabel)}</span>
                </button>
              );
            })}
          </div>
          {isEdit && (
            <p className="text-[11px] text-slate-400 dark:text-slate-500">
              {t('teacher.earnings.modal.typeCantBeChanged', 'لا يمكن تغيير نوع وسيلة الدفع بعد إنشائها')}
            </p>
          )}
        </div>
        {formData.type === 'bank_transfer' && (
          <div className="space-y-4 pt-1 animate-fadeIn">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="space-y-1.5">
                <label className="text-xs font-bold text-slate-700 dark:text-slate-300">
                  {t('teacher.earnings.modal.bankNameLabel', 'اسم البنك')} *
                </label>
                <input
                  type="text"
                  name="bankName"
                  value={formData.bankName}
                  onChange={handleChange}
                  placeholder={t('teacher.earnings.modal.bankNamePlaceholder', 'مثال: البنك الأهلي المصري، CIB، مصرف الراجحي')}
                  className="w-full px-4 py-2.5 rounded-xl border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 text-sm text-slate-800 dark:text-white focus:outline-none focus:ring-2 focus:ring-[#005953]"
                />
              </div>
              <div className="space-y-1.5">
                <label className="text-xs font-bold text-slate-700 dark:text-slate-300">
                  {t('teacher.earnings.modal.holderLabel', 'اسم صاحب الحساب بالكامل')} *
                </label>
                <input
                  type="text"
                  name="accountHolderName"
                  value={formData.accountHolderName}
                  onChange={handleChange}
                  placeholder={t('teacher.earnings.modal.holderPlaceholder', 'الاسم بالكامل كما هو مسجل في البنك')}
                  className="w-full px-4 py-2.5 rounded-xl border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 text-sm text-slate-800 dark:text-white focus:outline-none focus:ring-2 focus:ring-[#005953]"
                />
              </div>
            </div>
            <div className="space-y-1.5">
              <label className="text-xs font-bold text-slate-700 dark:text-slate-300">
                {t('teacher.earnings.modal.accountNumberLabel', 'رقم الحساب البنكي')} *
              </label>
              <input
                type="text"
                name="accountNumber"
                dir="ltr"
                value={formData.accountNumber}
                onChange={handleChange}
                placeholder={t('teacher.earnings.modal.accountNumberPlaceholder', 'أدخل رقم الحساب البنكي')}
                className="w-full px-4 py-2.5 rounded-xl border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 text-sm text-slate-800 dark:text-white focus:outline-none focus:ring-2 focus:ring-[#005953]"
              />
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="space-y-1.5">
                <label className="text-xs font-bold text-slate-700 dark:text-slate-300">
                  {t('teacher.earnings.modal.ibanLabel', 'رقم الآيبان (IBAN) - اختياري')}
                </label>
                <input
                  type="text"
                  name="iban"
                  dir="ltr"
                  value={formData.iban}
                  onChange={handleChange}
                  placeholder={t('teacher.earnings.modal.ibanPlaceholder', 'EG38... / SA...')}
                  className="w-full px-4 py-2.5 rounded-xl border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 text-sm text-slate-800 dark:text-white focus:outline-none focus:ring-2 focus:ring-[#005953]"
                />
              </div>
              <div className="space-y-1.5">
                <label className="text-xs font-bold text-slate-700 dark:text-slate-300">
                  {t('teacher.earnings.modal.swiftCodeLabel', 'كود الـ SWIFT / BIC (اختياري)')}
                </label>
                <input
                  type="text"
                  name="swiftCode"
                  dir="ltr"
                  value={formData.swiftCode}
                  onChange={handleChange}
                  placeholder={t('teacher.earnings.modal.swiftCodePlaceholder', 'NBEGEGCX')}
                  className="w-full px-4 py-2.5 rounded-xl border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 text-sm text-slate-800 dark:text-white focus:outline-none focus:ring-2 focus:ring-[#005953]"
                />
              </div>
            </div>
            <div className="space-y-1.5">
              <label className="text-xs font-bold text-slate-700 dark:text-slate-300">
                {t('teacher.earnings.modal.branchNameLabel', 'اسم أو كود الفرع (اختياري)')}
              </label>
              <input
                type="text"
                name="branchName"
                value={formData.branchName}
                onChange={handleChange}
                placeholder={t('teacher.earnings.modal.branchNamePlaceholder', 'مثال: فرع مدينة نصر')}
                className="w-full px-4 py-2.5 rounded-xl border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 text-sm text-slate-800 dark:text-white focus:outline-none focus:ring-2 focus:ring-[#005953]"
              />
            </div>
          </div>
        )}
        {formData.type === 'instapay' && (
          <div className="space-y-4 pt-1 animate-fadeIn">
            <div className="space-y-1.5">
              <label className="text-xs font-bold text-slate-700 dark:text-slate-300">
                {t('teacher.earnings.modal.instapayAddressLabel', 'عنوان الدفع اللحظي (IPA)')} *
              </label>
              <input
                type="text"
                name="instapayAddress"
                dir="ltr"
                value={formData.instapayAddress}
                onChange={handleChange}
                placeholder={t('teacher.earnings.modal.instapayAddressPlaceholder', 'ahmed@instapay أو رقم الهاتف')}
                className="w-full px-4 py-2.5 rounded-xl border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 text-sm text-slate-800 dark:text-white focus:outline-none focus:ring-2 focus:ring-[#005953]"
              />
            </div>
            <div className="space-y-1.5">
              <label className="text-xs font-bold text-slate-700 dark:text-slate-300">
                {t('teacher.earnings.modal.instapayHolderLabel', 'الاسم المسجل على حساب إنستا باي')} *
              </label>
              <input
                type="text"
                name="accountHolderName"
                value={formData.accountHolderName}
                onChange={handleChange}
                placeholder={t('teacher.earnings.modal.instapayHolderPlaceholder', 'الاسم كما يظهر للأدمن في تطبيق إنستا باي')}
                className="w-full px-4 py-2.5 rounded-xl border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 text-sm text-slate-800 dark:text-white focus:outline-none focus:ring-2 focus:ring-[#005953]"
              />
              <p className="text-[11px] text-slate-400 dark:text-slate-500">
                {t('teacher.earnings.modal.instapayHolderHint', 'الاسم كما يظهر للأدمن في التطبيق للتأكد من التحويل للشخص الصحيح')}
              </p>
            </div>
            <div className="space-y-1.5">
              <label className="text-xs font-bold text-slate-700 dark:text-slate-300">
                {t('teacher.earnings.modal.instapayBankLabel', 'اسم البنك أو المحفظة المربوط عليها إنستا باي (اختياري)')}
              </label>
              <input
                type="text"
                name="bankName"
                value={formData.bankName}
                onChange={handleChange}
                placeholder={t('teacher.earnings.modal.instapayBankPlaceholder', 'مثال: البنك الأهلي المصري / بنك CIB / فودافون كاش')}
                className="w-full px-4 py-2.5 rounded-xl border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 text-sm text-slate-800 dark:text-white focus:outline-none focus:ring-2 focus:ring-[#005953]"
              />
            </div>
          </div>
        )}
        {formData.type === 'mobile_wallet' && (
          <div className="space-y-4 pt-1 animate-fadeIn">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="space-y-1.5">
                <label className="text-xs font-bold text-slate-700 dark:text-slate-300">
                  {t('teacher.earnings.modal.walletProviderLabel', 'اسم شركة المحفظة')} *
                </label>
                <select
                  name="walletProvider"
                  value={formData.walletProvider}
                  onChange={handleChange}
                  className="w-full px-4 py-2.5 rounded-xl border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 text-sm text-slate-800 dark:text-white focus:outline-none focus:ring-2 focus:ring-[#005953]"
                >
                  {WALLET_PROVIDERS.map((provider) => (
                    <option key={provider.id} value={provider.id}>
                      {t(provider.labelKey, provider.defaultLabel)}
                    </option>
                  ))}
                </select>
              </div>
              <div className="space-y-1.5">
                <label className="text-xs font-bold text-slate-700 dark:text-slate-300">
                  {t('teacher.earnings.modal.walletNumberLabel', 'رقم الموبايل المربوط بالمحفظة')} *
                </label>
                <input
                  type="text"
                  name="walletNumber"
                  dir="ltr"
                  value={formData.walletNumber}
                  onChange={handleChange}
                  placeholder={t('teacher.earnings.modal.walletNumberPlaceholder', '010xxxxxxxx')}
                  className="w-full px-4 py-2.5 rounded-xl border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 text-sm text-slate-800 dark:text-white focus:outline-none focus:ring-2 focus:ring-[#005953]"
                />
              </div>
            </div>
            <div className="space-y-1.5">
              <label className="text-xs font-bold text-slate-700 dark:text-slate-300">
                {t('teacher.earnings.modal.walletHolderLabel', 'اسم صاحب الخط / المحفظة للتأكيد (اختياري)')}
              </label>
              <input
                type="text"
                name="accountHolderName"
                value={formData.accountHolderName}
                onChange={handleChange}
                placeholder={t('teacher.earnings.modal.walletHolderPlaceholder', 'اسم صاحب الخط للتأكيد')}
                className="w-full px-4 py-2.5 rounded-xl border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 text-sm text-slate-800 dark:text-white focus:outline-none focus:ring-2 focus:ring-[#005953]"
              />
            </div>
          </div>
        )}
        {formData.type === 'paypal' && (
          <div className="space-y-4 pt-1 animate-fadeIn">
            <div className="space-y-1.5">
              <label className="text-xs font-bold text-slate-700 dark:text-slate-300">
                {t('teacher.earnings.modal.paypalEmailLabel', 'البريد الإلكتروني لحساب PayPal')} *
              </label>
              <input
                type="email"
                name="paypalEmail"
                dir="ltr"
                value={formData.paypalEmail}
                onChange={handleChange}
                placeholder={t('teacher.earnings.modal.paypalEmailPlaceholder', 'example@email.com')}
                className="w-full px-4 py-2.5 rounded-xl border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 text-sm text-slate-800 dark:text-white focus:outline-none focus:ring-2 focus:ring-[#005953]"
              />
            </div>
            <div className="space-y-1.5">
              <label className="text-xs font-bold text-slate-700 dark:text-slate-300">
                {t('teacher.earnings.modal.holderLabel', 'اسم صاحب حساب PayPal')} *
              </label>
              <input
                type="text"
                name="accountHolderName"
                value={formData.accountHolderName}
                onChange={handleChange}
                placeholder={t('teacher.earnings.modal.holderPlaceholder', 'اسم صاحب حساب PayPal بالكامل')}
                className="w-full px-4 py-2.5 rounded-xl border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 text-sm text-slate-800 dark:text-white focus:outline-none focus:ring-2 focus:ring-[#005953]"
              />
            </div>
          </div>
        )}
        {formData.type === 'western_union' && (
          <div className="space-y-4 pt-1 animate-fadeIn">
            <div className="space-y-1.5">
              <label className="text-xs font-bold text-slate-700 dark:text-slate-300">
                {t('teacher.earnings.modal.westernUnionHolderLabel', 'الاسم الرباعي مطابقاً لجواز السفر أو البطاقة')} *
              </label>
              <input
                type="text"
                name="accountHolderName"
                value={formData.accountHolderName}
                onChange={handleChange}
                placeholder={t('teacher.earnings.modal.westernUnionHolderPlaceholder', 'الاسم الرباعي بالإنجليزية أو العربية مطابقاً للوثيقة الرسمية')}
                className="w-full px-4 py-2.5 rounded-xl border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 text-sm text-slate-800 dark:text-white focus:outline-none focus:ring-2 focus:ring-[#005953]"
              />
              <p className="text-[11px] text-slate-400 dark:text-slate-500">
                {t('teacher.earnings.modal.westernUnionHolderHint', 'مطابق تماماً للهوية بالإنجليزية أو العربية لاستلام الحوالة بدون معوقات')}
              </p>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="space-y-1.5">
                <label className="text-xs font-bold text-slate-700 dark:text-slate-300">
                  {t('teacher.earnings.modal.countryLabel', 'الدولة والمدينة المستلم منها')} *
                </label>
                <input
                  type="text"
                  name="country"
                  value={formData.country}
                  onChange={handleChange}
                  placeholder={t('teacher.earnings.modal.countryPlaceholder', 'مثال: السعودية - الرياض')}
                  className="w-full px-4 py-2.5 rounded-xl border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 text-sm text-slate-800 dark:text-white focus:outline-none focus:ring-2 focus:ring-[#005953]"
                />
              </div>
              <div className="space-y-1.5">
                <label className="text-xs font-bold text-slate-700 dark:text-slate-300">
                  {t('teacher.earnings.modal.westernUnionPhoneLabel', 'رقم الهاتف للتواصل')} *
                </label>
                <input
                  type="text"
                  name="phoneNumber"
                  dir="ltr"
                  value={formData.phoneNumber}
                  onChange={handleChange}
                  placeholder={t('teacher.earnings.modal.westernUnionPhonePlaceholder', '+966... / +20...')}
                  className="w-full px-4 py-2.5 rounded-xl border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 text-sm text-slate-800 dark:text-white focus:outline-none focus:ring-2 focus:ring-[#005953]"
                />
              </div>
            </div>
            <div className="space-y-1.5">
              <label className="text-xs font-bold text-slate-700 dark:text-slate-300">
                {t('teacher.earnings.modal.nationalIdLabel', 'رقم البطاقة أو جواز السفر (اختياري)')}
              </label>
              <input
                type="text"
                name="nationalIdOrPassport"
                dir="ltr"
                value={formData.nationalIdOrPassport}
                onChange={handleChange}
                placeholder={t('teacher.earnings.modal.nationalIdPlaceholder', 'رقم البطاقة الوطنية أو جواز السفر')}
                className="w-full px-4 py-2.5 rounded-xl border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 text-sm text-slate-800 dark:text-white focus:outline-none focus:ring-2 focus:ring-[#005953]"
              />
            </div>
          </div>
        )}
        <div className="space-y-1.5">
          <label className="text-xs font-bold text-slate-700 dark:text-slate-300">
            {t('teacher.earnings.modal.notesLabel', 'ملاحظات إضافية (اختياري)')}
          </label>
          <textarea
            name="notes"
            rows={2}
            value={formData.notes}
            onChange={handleChange}
            placeholder={t('teacher.earnings.modal.notesPlaceholder', 'أي معلومات إضافية لتسهيل التحويل...')}
            className="w-full px-4 py-2.5 rounded-xl border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 text-sm text-slate-800 dark:text-white focus:outline-none focus:ring-2 focus:ring-[#005953] resize-none"
          />
        </div>
        <div className="space-y-2">
          <label className="text-xs font-bold text-slate-700 dark:text-slate-300">
            {t('teacher.earnings.modal.verificationLabel', 'صورة إثبات الحساب / المحفظة (اختياري)')}
          </label>
          <p className="text-[11px] text-slate-400 dark:text-slate-500">
            {t('teacher.earnings.modal.verificationHint', 'صورة من كشف الحساب، أو إشعار، أو لقطة شاشة من تطبيق المحفظة تثبت ملكيتك للحساب')}
          </p>
          <input
            type="file"
            ref={fileInputRef}
            accept="image/*"
            onChange={handleFileChange}
            className="hidden"
          />
          {previewUrl ? (
            <div className="relative p-2.5 rounded-2xl border border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-800/40 flex items-center justify-between gap-3">
              <div className="flex items-center gap-3 min-w-0">
                <img
                  src={previewUrl}
                  alt="Verification preview"
                  className="w-12 h-12 rounded-xl object-cover border border-slate-200 dark:border-slate-700"
                />
                <div className="min-w-0">
                  <p className="text-xs font-bold text-slate-800 dark:text-white truncate">
                    {formData.verificationImage?.name || t('teacher.earnings.methods.verificationImage', 'إثبات الحساب')}
                  </p>
                  <span className="text-[11px] text-emerald-600 dark:text-emerald-400 font-semibold flex items-center gap-1">
                    <CheckCircle2 size={12} />
                    {t('teacher.earnings.methods.confirmedBadge', 'صورة مرفقة')}
                  </span>
                </div>
              </div>
              <div className="flex items-center gap-2">
                <button
                  type="button"
                  onClick={() => fileInputRef.current?.click()}
                  className="px-3 py-1.5 rounded-xl text-xs font-bold bg-white dark:bg-slate-700 text-slate-700 dark:text-slate-200 border border-slate-200 dark:border-slate-600 hover:bg-slate-50 transition-colors cursor-pointer"
                >
                  {t('teacher.earnings.modal.changeFile', 'تغيير الصورة')}
                </button>
                <button
                  type="button"
                  onClick={handleRemoveImage}
                  className="p-1.5 rounded-xl text-rose-500 hover:bg-rose-50 dark:hover:bg-rose-950/40 transition-colors cursor-pointer"
                  title={t('teacher.earnings.modal.removeFile', 'إزالة')}
                >
                  <Trash2 size={16} />
                </button>
              </div>
            </div>
          ) : (
            <button
              type="button"
              onClick={() => fileInputRef.current?.click()}
              className="w-full p-4 rounded-2xl border-2 border-dashed border-slate-200 dark:border-slate-700 hover:border-[#005953] dark:hover:border-brand-400 bg-slate-50/50 dark:bg-slate-800/20 flex flex-col items-center justify-center gap-2 text-slate-500 hover:text-[#005953] dark:hover:text-brand-400 transition-colors cursor-pointer"
            >
              <div className="w-10 h-10 rounded-xl bg-slate-100 dark:bg-slate-800 flex items-center justify-center text-slate-400">
                <Upload size={18} />
              </div>
              <span className="text-xs font-bold">
                {t('teacher.earnings.modal.chooseFile', 'اختر صورة لإثبات ملكية الحساب')}
              </span>
            </button>
          )}
        </div>
        <div className="space-y-3 pt-2">
          <label className="flex items-start gap-3 p-3.5 rounded-2xl border border-amber-200/80 dark:border-amber-900/40 bg-amber-50/60 dark:bg-amber-950/20 cursor-pointer">
            <input
              type="checkbox"
              name="isConfirmed"
              checked={formData.isConfirmed}
              onChange={handleChange}
              className="w-4 h-4 mt-0.5 rounded text-[#005953] focus:ring-[#005953]"
            />
            <span className="text-xs font-bold text-amber-950 dark:text-amber-200 leading-relaxed flex items-center gap-1.5">
              <ShieldAlert size={15} className="shrink-0 text-amber-600 dark:text-amber-400" />
              <span>{t('teacher.earnings.modal.acknowledgeLabel', 'أقر بصحة البيانات المدخلة وأتحمل مسؤولية أي خطأ فيها')} *</span>
            </span>
          </label>
          <label className="flex items-center gap-3 p-3 rounded-2xl border border-slate-200/80 dark:border-slate-800 bg-slate-50/60 dark:bg-slate-800/30 cursor-pointer">
            <input
              type="checkbox"
              name="isDefault"
              checked={formData.isDefault}
              onChange={handleChange}
              className="w-4 h-4 rounded text-[#005953] focus:ring-[#005953]"
            />
            <span className="text-xs font-bold text-slate-700 dark:text-slate-200">
              {t('teacher.earnings.modal.isDefaultLabel', 'تعيين كطريقة دفع أساسية لاستلام الأرباح')}
            </span>
          </label>
        </div>
        <div className="flex items-center justify-end gap-3 pt-4 border-t border-slate-100 dark:border-slate-800">
          <button
            type="button"
            onClick={onClose}
            disabled={isSubmitting}
            className="px-5 py-2.5 rounded-xl border border-slate-200 dark:border-slate-700 text-xs font-bold text-slate-600 dark:text-slate-300 hover:bg-slate-50 dark:hover:bg-slate-800 transition-colors cursor-pointer"
          >
            {t('teacher.earnings.modal.cancelBtn', 'إلغاء')}
          </button>
          <button
            type="submit"
            disabled={isSubmitting}
            className="px-6 py-2.5 rounded-xl bg-[#005953] hover:bg-[#004742] text-white text-xs font-bold flex items-center gap-2 transition-all shadow-md hover:shadow-lg disabled:opacity-50 cursor-pointer"
          >
            {isSubmitting ? (
              <>
                <Loader2 size={16} className="animate-spin" />
                <span>{t('teacher.earnings.modal.saving', 'جاري الحفظ...')}</span>
              </>
            ) : (
              <span>{t('teacher.earnings.modal.saveBtn', 'حفظ')}</span>
            )}
          </button>
        </div>
      </form>
    </div>
  );
}

export default function TeacherPaymentMethodModal({
  isOpen,
  onClose,
  onSave,
  isSubmitting,
  initialData,
  serverError,
  t,
}) {
  useEffect(() => {
    if (!isOpen) return;
    const originalOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    return () => {
      document.body.style.overflow = originalOverflow;
    };
  }, [isOpen]);
  if (!isOpen || typeof document === 'undefined') return null;
  const handleBackdropClick = (e) => {
    if (e.target === e.currentTarget && !isSubmitting) {
      onClose();
    }
  };
  return createPortal(
    <div
      onClick={handleBackdropClick}
      className="fixed inset-0 w-screen h-screen min-h-screen z-[99999] flex items-center justify-center p-3 sm:p-4 bg-black/80 backdrop-blur-md animate-fade-in"
      dir="rtl"
    >
      <TeacherPaymentMethodDialogContent
        key={initialData?.id || 'new_payment_method'}
        initialData={initialData}
        onClose={onClose}
        onSave={onSave}
        isSubmitting={isSubmitting}
        serverError={serverError}
        t={t}
      />
    </div>,
    document.body
  );
}

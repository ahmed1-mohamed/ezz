import React, { useState, useMemo, useRef, useEffect } from 'react';
import { User, Calendar, Mail, GraduationCap, Save, ChevronDown, Lock, Search, Check } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import { sortCountries, sortCountryCodes, getCountryName } from '@/shared/utils/countryUtils';

export default React.memo(function StudentEditProfileForm({
  formData,
  onFormChange,
  countryCodes = [],
  countries = [],
  academicLevel = '-',
  email = '-',
  onSubmit,
  isSaving = false,
}) {
  const { t, i18n } = useTranslation();
  const isRtl = i18n?.language?.startsWith('ar') ?? true;
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const dropdownRef = useRef(null);
  const searchInputRef = useRef(null);
  const sortedCountryCodes = useMemo(
    () => sortCountryCodes(countryCodes.filter((c) => Boolean(c.dialCode || c.code || c.phoneCode)), isRtl),
    [countryCodes, isRtl]
  );
  const sortedCountries = useMemo(
    () => sortCountries(countries, isRtl),
    [countries, isRtl]
  );
  const selectedCountryCodeObj = useMemo(() => {
    const code = formData.countryDialCode || '+966';
    return sortedCountryCodes.find((c) => (c.dialCode || c.code || c.phoneCode) === code) || {
      dialCode: code,
      flag: '🇸🇦',
    };
  }, [sortedCountryCodes, formData.countryDialCode]);
  const selectedCountryId = useMemo(() => {
    if (!formData.country) return '';
    const raw = typeof formData.country === 'object' && formData.country !== null
      ? (formData.country.id || formData.country._id || formData.country.name)
      : String(formData.country).trim();
    const match = sortedCountries.find((c) => {
      const cid = c.id || c._id;
      return cid === raw ||
        c.name === raw ||
        c.nameEn === raw ||
        (c.code && c.code.toUpperCase() === raw.toUpperCase()) ||
        (c.name && raw.includes(c.name)) ||
        (c.nameEn && raw.toLowerCase().includes(c.nameEn.toLowerCase()));
    });
    return match ? (match.id || match._id) : raw;
  }, [formData.country, sortedCountries]);
  const filteredCountryCodes = useMemo(() => {
    const q = searchQuery.trim().toLowerCase();
    if (!q) return sortedCountryCodes;
    return sortedCountryCodes.filter((c) => {
      const dial = (c.dialCode || c.code || c.phoneCode || '').toLowerCase();
      const name = (c.name || '').toLowerCase();
      const nameEn = (c.nameEn || '').toLowerCase();
      return dial.includes(q) || name.includes(q) || nameEn.includes(q);
    });
  }, [sortedCountryCodes, searchQuery]);
  useEffect(() => {
    function handleClickOutside(event) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsDropdownOpen(false);
      }
    }
    function handleKeyDown(event) {
      if (event.key === 'Escape') {
        setIsDropdownOpen(false);
      }
    }
    if (isDropdownOpen) {
      document.addEventListener('mousedown', handleClickOutside);
      document.addEventListener('keydown', handleKeyDown);
      if (searchInputRef.current) {
        searchInputRef.current.focus();
      }
    }
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, [isDropdownOpen]);
  function handleSelectCode(country) {
    const dial = country.dialCode || country.code || country.phoneCode || '+966';
    onFormChange('countryDialCode', dial);
    setIsDropdownOpen(false);
  }
  function handleSelectCountry(e) {
    const countryId = e.target.value;
    onFormChange('country', countryId);
    const matched = sortedCountries.find((c) => (c.id || c._id) === countryId);
    if (matched && (matched.dialCode || matched.phoneCode)) {
      onFormChange('countryDialCode', matched.dialCode || matched.phoneCode);
    }
  }
  return (
    <form
      onSubmit={onSubmit}
      className="bg-white dark:bg-slate-900 rounded-[28px] border border-slate-100 dark:border-slate-800 p-6 sm:p-8 shadow-xs space-y-6 text-start"
      dir={isRtl ? 'rtl' : 'ltr'}
    >
      <div className="flex items-center gap-2.5 pb-3 border-b border-slate-100 dark:border-slate-800 text-slate-800 dark:text-white">
        <div className="w-8 h-8 rounded-xl bg-emerald-50 dark:bg-emerald-950/40 text-[#005953] dark:text-emerald-300 flex items-center justify-center shrink-0">
          <User size={17} />
        </div>
        <div>
          <h3 className="text-base font-black">
            {t('studentDashboard.profile.editProfileTitle', 'تعديل البيانات الشخصية')}
          </h3>
          <p className="text-xs text-slate-400 font-semibold mt-0.5">
            {t('studentDashboard.settings.subtitle', 'إدارة معلومات حسابك وبيانات الاتصال')}
          </p>
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
        <div className="space-y-1.5">
          <label className="text-xs font-black text-slate-700 dark:text-slate-300 block">
            {t('studentDashboard.profile.fullNameAr', 'الاسم الكامل')} *
          </label>
          <input
            type="text"
            required
            value={formData.name || ''}
            onChange={(e) => onFormChange('name', e.target.value)}
            className="w-full bg-[#f8faf9] dark:bg-slate-800 border border-slate-200 dark:border-slate-700 focus:border-[#005953] focus:bg-white dark:focus:bg-slate-800 text-slate-800 dark:text-slate-100 rounded-2xl py-3 px-4 outline-none transition-all text-sm font-semibold placeholder:text-slate-400"
            placeholder={isRtl ? 'عمر أحمد' : 'Omar Ahmed'}
          />
        </div>
        <div className="space-y-1.5">
          <label className="text-xs font-black text-slate-700 dark:text-slate-300 block">
            {t('studentDashboard.profile.fullNameEn', 'الاسم بالإنجليزية (اختياري)')}
          </label>
          <input
            type="text"
            value={formData.nameEn || ''}
            onChange={(e) => onFormChange('nameEn', e.target.value)}
            dir="ltr"
            className="w-full bg-[#f8faf9] dark:bg-slate-800 border border-slate-200 dark:border-slate-700 focus:border-[#005953] focus:bg-white dark:focus:bg-slate-800 text-slate-800 dark:text-slate-100 rounded-2xl py-3 px-4 outline-none transition-all text-sm font-semibold placeholder:text-slate-400"
            placeholder="Omar Ahmed"
          />
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
        <div className="space-y-1.5">
          <label className="text-xs font-black text-slate-700 dark:text-slate-300 block">
            {t('studentDashboard.profile.phone', 'رقم الهاتف')} *
          </label>
          <div className="flex gap-2.5 items-center" dir="ltr">
            <div ref={dropdownRef} className="relative shrink-0">
              <button
                type="button"
                onClick={() => {
                  setIsDropdownOpen((prev) => !prev);
                  setSearchQuery('');
                }}
                className="h-11.5 flex items-center justify-center gap-2 px-3.5 bg-[#f8faf9] dark:bg-slate-800 hover:bg-slate-100 dark:hover:bg-slate-700/80 border border-slate-200 dark:border-slate-700 rounded-2xl transition-all text-xs font-bold text-slate-800 dark:text-slate-200 cursor-pointer shadow-2xs active:scale-[0.98]"
              >
                <span className="text-base shrink-0">{selectedCountryCodeObj?.flag || '🌍'}</span>
                <span className="font-mono font-bold text-xs shrink-0">{selectedCountryCodeObj?.dialCode || selectedCountryCodeObj?.code || '+966'}</span>
                <ChevronDown size={13} className={`text-slate-400 transition-transform duration-200 ${isDropdownOpen ? 'rotate-180' : ''}`} />
              </button>
              {isDropdownOpen && (
                <div
                  className="absolute start-0 top-full mt-2 z-50 w-72 sm:w-80 bg-white/95 dark:bg-slate-900/95 backdrop-blur-md rounded-2xl shadow-2xl border border-slate-200 dark:border-slate-700 overflow-hidden flex flex-col"
                  dir={isRtl ? 'rtl' : 'ltr'}
                >
                  <div className="p-2.5 border-b border-slate-100 dark:border-slate-800 flex items-center gap-2 bg-slate-50/70 dark:bg-slate-800/80">
                    <Search size={14} className="text-slate-400 shrink-0" />
                    <input
                      ref={searchInputRef}
                      type="text"
                      value={searchQuery}
                      onChange={(e) => setSearchQuery(e.target.value)}
                      placeholder={isRtl ? 'ابحث عن دولة أو رمز...' : 'Search country or code...'}
                      className="w-full bg-transparent border-none text-slate-800 dark:text-white text-xs outline-none placeholder:text-slate-400 font-semibold"
                    />
                  </div>
                  <div className="max-h-60 overflow-y-auto divide-y divide-slate-50 dark:divide-slate-800/40 py-1">
                    {filteredCountryCodes.length > 0 ? (
                      filteredCountryCodes.map((country) => {
                        const dial = country.dialCode || country.code || country.phoneCode;
                        const isSelected = dial === (selectedCountryCodeObj?.dialCode || selectedCountryCodeObj?.code);
                        const cName = getCountryName(country, isRtl);
                        return (
                          <button
                            key={`${dial}-${country.id || country._id || country.name || country.code}`}
                            type="button"
                            onClick={() => handleSelectCode(country)}
                            className={`w-full px-3.5 py-2.5 flex items-center justify-between gap-2.5 transition-colors text-start cursor-pointer group ${
                              isSelected
                                ? 'bg-emerald-50/80 dark:bg-emerald-950/40 text-[#005953] dark:text-emerald-300 font-bold'
                                : 'hover:bg-slate-50 dark:hover:bg-slate-800/70 text-slate-700 dark:text-slate-200'
                            }`}
                          >
                            <div className="flex items-center gap-2.5 min-w-0">
                              <span className="text-lg shrink-0 group-hover:scale-110 transition-transform">{country.flag}</span>
                              <span className="text-xs truncate font-semibold">{cName}</span>
                            </div>
                            <div className="flex items-center gap-1.5 shrink-0">
                              <span
                                dir="ltr"
                                className={`text-[11px] font-mono px-2 py-0.5 rounded-full border ${
                                  isSelected
                                    ? 'bg-[#005953] text-white border-transparent'
                                    : 'bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-400 border-slate-200/60 dark:border-slate-700/60'
                                }`}
                              >
                                {dial}
                              </span>
                              {isSelected && <Check size={13} className="text-[#005953] dark:text-emerald-400 shrink-0" />}
                            </div>
                          </button>
                        );
                      })
                    ) : (
                      <div className="py-6 px-4 text-center text-xs text-slate-400 font-bold">
                        {isRtl ? 'لا توجد نتائج مطابقة' : 'No matching countries'}
                      </div>
                    )}
                  </div>
                </div>
              )}
            </div>
            <input
              type="tel"
              required
              value={formData.phone || ''}
              onChange={(e) => onFormChange('phone', e.target.value)}
              className="flex-1 bg-[#f8faf9] dark:bg-slate-800 border border-slate-200 dark:border-slate-700 focus:border-[#005953] focus:bg-white dark:focus:bg-slate-800 text-slate-800 dark:text-slate-100 rounded-2xl py-3 px-4 outline-none transition-all text-sm font-semibold placeholder:text-slate-400 font-mono"
              placeholder="501234567"
            />
          </div>
        </div>
        <div className="space-y-1.5">
          <label className="text-xs font-black text-slate-700 dark:text-slate-300 block">
            {t('studentDashboard.profile.country', 'الدولة')} *
          </label>
          <div className="relative">
            <select
              required
              value={selectedCountryId}
              onChange={handleSelectCountry}
              className="w-full appearance-none bg-[#f8faf9] dark:bg-slate-800 border border-slate-200 dark:border-slate-700 focus:border-[#005953] focus:bg-white dark:focus:bg-slate-800 text-slate-800 dark:text-slate-100 rounded-2xl py-3 px-4 outline-none transition-all text-sm font-semibold cursor-pointer"
            >
              <option value="" disabled>{t('studentDashboard.profile.selectCountry', 'اختر الدولة')}</option>
              {sortedCountries.map((c) => {
                const cid = c.id || c._id;
                const cname = getCountryName(c, isRtl);
                return (
                  <option key={cid} value={cid}>
                    {c.flag ? `${c.flag} ` : ''}{cname}
                  </option>
                );
              })}
            </select>
            <ChevronDown size={14} className="absolute top-1/2 -translate-y-1/2 end-3 text-slate-400 pointer-events-none" />
          </div>
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
        <div className="space-y-1.5">
          <label className="text-xs font-black text-slate-700 dark:text-slate-300 block flex items-center gap-1.5">
            <Calendar size={13} className="text-[#005953]" />
            <span>{t('studentDashboard.profile.birthDate', 'تاريخ الميلاد')} *</span>
          </label>
          <input
            type="date"
            required
            value={formData.birthDate || ''}
            onChange={(e) => onFormChange('birthDate', e.target.value)}
            className="w-full bg-[#f8faf9] dark:bg-slate-800 border border-slate-200 dark:border-slate-700 focus:border-[#005953] focus:bg-white dark:focus:bg-slate-800 text-slate-800 dark:text-slate-100 rounded-2xl py-3 px-4 outline-none transition-all text-sm font-semibold cursor-pointer"
          />
        </div>
        <div className="space-y-1.5">
          <div className="flex items-center justify-between">
            <label className="text-xs font-black text-slate-700 dark:text-slate-300 flex items-center gap-1.5">
              <Mail size={13} className="text-slate-400" />
              <span>{t('studentDashboard.profile.email', 'البريد الإلكتروني')}</span>
            </label>
            <span className="flex items-center gap-1 text-[11px] font-bold text-slate-400">
              <Lock size={11} />
              <span>{isRtl ? 'ثابت' : 'Fixed'}</span>
            </span>
          </div>
          <input
            type="email"
            disabled
            value={email}
            dir="ltr"
            className="w-full bg-slate-100/80 dark:bg-slate-800/60 border border-slate-200/60 dark:border-slate-700/60 text-slate-500 dark:text-slate-400 rounded-2xl py-3 px-4 outline-none text-sm font-semibold cursor-not-allowed select-none font-mono"
          />
          <p className="text-[11px] text-slate-400 font-semibold">
            {t('studentDashboard.profile.emailFixedNotice', 'البريد الإلكتروني مرتبط بحسابك ولا يمكن تعديله')}
          </p>
        </div>
      </div>
      <div className="space-y-1.5">
        <div className="flex items-center justify-between">
          <label className="text-xs font-black text-slate-700 dark:text-slate-300 flex items-center gap-1.5">
            <GraduationCap size={14} className="text-slate-400" />
            <span>{t('studentDashboard.profile.academicLevel', 'المستوى الدراسي')}</span>
          </label>
          <span className="flex items-center gap-1 text-[11px] font-bold text-slate-400">
            <Lock size={11} />
            <span>{isRtl ? 'ثابت' : 'Fixed'}</span>
          </span>
        </div>
        <input
          type="text"
          disabled
          value={academicLevel}
          className="w-full bg-slate-100/80 dark:bg-slate-800/60 border border-slate-200/60 dark:border-slate-700/60 text-slate-500 dark:text-slate-400 rounded-2xl py-3 px-4 outline-none text-sm font-semibold cursor-not-allowed select-none"
        />
        <p className="text-[11px] text-slate-400 font-semibold">
          {t('studentDashboard.profile.levelFixedNotice', 'المستوى الدراسي محدد وثابت من قِبل الإدارة والمعلم')}
        </p>
      </div>
      <div className="pt-2 flex justify-start">
        <button
          type="submit"
          disabled={isSaving}
          className="flex items-center gap-2 px-6 py-3 bg-[#005953] hover:bg-[#004843] active:scale-[0.98] text-white rounded-2xl text-xs sm:text-sm font-black transition-all shadow-xs cursor-pointer disabled:opacity-50"
        >
          <Save size={15} />
          <span>{isSaving ? t('studentDashboard.profile.saving', 'جاري الحفظ...') : t('studentDashboard.profile.saveChanges', 'حفظ التغييرات')}</span>
        </button>
      </div>
    </form>
  );
});

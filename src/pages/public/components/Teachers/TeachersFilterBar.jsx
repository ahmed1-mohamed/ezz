import { useTranslation } from 'react-i18next'
import { Search, BookOpen, Award, Filter } from 'lucide-react'
import { getCountryName } from '@/shared/utils/countryUtils'

export default function TeachersFilterBar({
  searchInput = '',
  onSearchInputChange,
  onSearchSubmit,
  selectedSubject = '',
  onSelectSubject,
  availableSubjects = [],
  selectedCountry = '',
  onSelectCountry,
  countriesList = [],
  isRtl = true,
  onResetFilters
}) {
  const { t } = useTranslation()
  return (
    <section className="bg-white/95 dark:bg-slate-900/95 backdrop-blur-md rounded-[32px] p-6 md:p-8 shadow-md border border-slate-100 dark:border-slate-800 w-full mx-auto transition-all duration-300">
      <form onSubmit={onSearchSubmit} className="flex flex-col md:flex-row items-end gap-5">
        <div className="flex-1 w-full space-y-2 text-start">
          <label htmlFor="teacher-search" className="block text-sm font-bold text-[#00695C] dark:text-emerald-400 mx-1">
            {t('teacher.searchLabel', 'ابحث عن معلم')}
          </label>
          <div className="relative flex items-center">
            <div className="absolute inset-y-0 start-0 ps-4 flex items-center pointer-events-none">
              <Search className="h-5 w-5 text-slate-400" />
            </div>
            <input
              id="teacher-search"
              type="text"
              placeholder={t('teacher.searchPlaceholder', 'الاسم، التخصص، المؤهل...')}
              value={searchInput}
              onChange={(e) => onSearchInputChange(e.target.value)}
              className="w-full bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-slate-900 dark:text-white dark:placeholder-slate-400 text-base rounded-2xl focus:ring-[#00695C] dark:focus:ring-emerald-500 focus:border-[#00695C] dark:focus:border-emerald-500 block ps-12 pe-24 p-4 transition-colors shadow-sm"
            />
            <button
              type="submit"
              className="absolute end-2 bg-[#00695C] hover:bg-[#005247] dark:bg-emerald-600 dark:hover:bg-emerald-700 text-white font-bold text-sm px-4 py-2.5 rounded-xl transition-all shadow-sm active:scale-95 cursor-pointer"
            >
              {t('common.search', 'بحث')}
            </button>
          </div>
        </div>

        <div className="w-full md:w-64 space-y-2 text-start">
          <label htmlFor="subject-select" className="block text-sm font-bold text-[#00695C] dark:text-emerald-400 mx-1">
            {t('teacher.subjectLabel', 'التخصص / المادة')}
          </label>
          <div className="relative">
            <select
              id="subject-select"
              value={selectedSubject}
              onChange={(e) => onSelectSubject(e.target.value)}
              className="w-full bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-slate-900 dark:text-white text-base rounded-2xl focus:ring-[#00695C] dark:focus:ring-emerald-500 focus:border-[#00695C] dark:focus:border-emerald-500 block p-4 appearance-none cursor-pointer pe-10 shadow-sm"
            >
              <option value="" className="dark:bg-slate-850">
                {t('teacher.allSubjects', 'جميع التخصصات')}
              </option>
              {availableSubjects.map((subj) => (
                <option key={subj} value={subj} className="dark:bg-slate-850">
                  {subj}
                </option>
              ))}
            </select>
            <BookOpen className="absolute end-4 top-1/2 -translate-y-1/2 h-5 w-5 text-slate-400 pointer-events-none" />
          </div>
        </div>

        <div className="w-full md:w-64 space-y-2 text-start">
          <label htmlFor="country-select" className="block text-sm font-bold text-[#00695C] dark:text-emerald-400 mx-1">
            {t('teacher.countryLabel', 'الدولة')}
          </label>
          <div className="relative">
            <select
              id="country-select"
              value={selectedCountry}
              onChange={(e) => onSelectCountry(e.target.value)}
              className="w-full bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-slate-900 dark:text-white text-base rounded-2xl focus:ring-[#00695C] dark:focus:ring-emerald-500 focus:border-[#00695C] dark:focus:border-emerald-500 block p-4 appearance-none cursor-pointer pe-10 shadow-sm"
            >
              <option value="" className="dark:bg-slate-850">
                {t('teacher.allCountries', 'جميع الدول')}
              </option>
              {countriesList.map((country) => {
                const countryIdentifier = country.id || country._id || country.code
                return (
                  <option key={countryIdentifier} value={countryIdentifier} className="dark:bg-slate-850">
                    {country.flag ? `${country.flag} ` : ''}{getCountryName(country, isRtl)}
                  </option>
                )
              })}
            </select>
            <Award className="absolute end-4 top-1/2 -translate-y-1/2 h-5 w-5 text-slate-400 pointer-events-none" />
          </div>
        </div>

        <button
          type="button"
          onClick={onResetFilters}
          className="w-full bg-[#735C00] dark:bg-amber-600 md:w-48 hover:bg-[#5c4a00] dark:hover:bg-amber-700 text-white font-bold py-4 px-6 rounded-2xl transition-all duration-300 ease-out flex items-center justify-center gap-2 shadow-md hover:shadow-lg h-[58px] text-base active:scale-95 cursor-pointer"
        >
          {t('teacher.clearFilter', 'مسح التصفية')}
          <Filter className="h-5 w-5" />
        </button>
      </form>
    </section>
  )
}

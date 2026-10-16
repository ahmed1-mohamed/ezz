import { useMemo } from 'react'
import { useQuery } from '@tanstack/react-query'
import { Loader2 } from 'lucide-react'
import { teachersApi } from '@/shared/services/api/teachersApi'

export default function TeacherDetailsPersonalInfoCard({ teacher, isRtl = true }) {
  const nameAr = teacher?.nameAr || (typeof teacher?.name === 'object' ? teacher?.name?.ar : teacher?.name) || '-'
  const nameEn = teacher?.nameEn || (typeof teacher?.name === 'object' ? teacher?.name?.en : '') || '-'
  const email = teacher?.email || '-'

  const rawPhone = teacher?.phone ? String(teacher.phone).trim() : ''
  const countryObj = typeof teacher?.country === 'object' && teacher?.country !== null ? teacher.country : null
  const rawCountry = countryObj
    ? (isRtl ? countryObj.name || countryObj.nameAr : countryObj.nameEn || countryObj.name) || ''
    : (teacher?.country ? String(teacher.country).trim() : '')

  const { data: countriesRes, isLoading: isLoadingCountries } = useQuery({
    queryKey: ['countries'],
    queryFn: () => teachersApi.fetchCountries(),
    staleTime: 5 * 60 * 1000
  })

  const countries = useMemo(() => {
    const rawList = countriesRes?.data || (Array.isArray(countriesRes) ? countriesRes : [])

    return rawList.map((c) => ({
      id: c.id || c._id,
      code: c.phoneCode || c.code || '',
      flag: c.flag || '🌐',
      nameAr: typeof c.name === 'object' ? (c.name.ar || c.name.en || '') : (c.name || c.nameAr || ''),
      nameEn: typeof c.name === 'object' ? (c.name.en || c.name.ar || '') : (c.nameEn || c.name || '')
    }))
  }, [countriesRes])

  let countryFlag = countryObj?.flag || ''
  if (!countryFlag && rawCountry) {
    const flagMatch = rawCountry.match(/[\uD83C][\uDDE6-\uDDFF][\uD83C][\uDDE6-\uDDFF]/u)
    if (flagMatch) {
      countryFlag = flagMatch[0]
    }
  }

  const matchedCountry = countries.find((c) =>
    (countryObj?._id && (c.id === countryObj._id || c.id === countryObj.id)) ||
    (rawCountry && c.id && c.id === rawCountry) ||
    (countryFlag && countryFlag === c.flag) ||
    (rawCountry && (
      (c.nameAr && rawCountry.toLowerCase().includes(c.nameAr.toLowerCase())) ||
      (c.nameEn && rawCountry.toLowerCase().includes(c.nameEn.toLowerCase())) ||
      (c.code && rawCountry.includes(c.code))
    ))
  )

  const sortedByCode = useMemo(() => {
    return [...countries]
      .filter((c) => c.code && String(c.code).startsWith('+'))
      .sort((a, b) => b.code.length - a.code.length)
  }, [countries])

  let phoneCode = matchedCountry?.code || ''
  let flag = countryFlag || matchedCountry?.flag || ''
  let localNumber = '-'

  if (rawPhone && rawPhone !== '-') {
    if (rawPhone.includes(' ')) {
      const parts = rawPhone.split(/\s+/)
      phoneCode = parts[0]
      localNumber = parts.slice(1).join(' ')
      const dialMatch = sortedByCode.find((c) => c.code === phoneCode)
      if (dialMatch && !countryFlag) flag = dialMatch.flag
    } else if (rawPhone.startsWith('+')) {
      const dialMatch = sortedByCode.find((c) => rawPhone.startsWith(c.code))
      if (dialMatch) {
        phoneCode = dialMatch.code
        localNumber = rawPhone.slice(dialMatch.code.length).trim()
        if (!countryFlag) flag = dialMatch.flag
      } else {
        phoneCode = rawPhone.slice(0, 4)
        localNumber = rawPhone.slice(4).trim()
      }
    } else {
      localNumber = rawPhone
    }
  }

  if (!localNumber || localNumber.trim() === '') {
    localNumber = '-'
  }

  const countryDisplayName = matchedCountry
    ? (isRtl ? matchedCountry.nameAr || matchedCountry.nameEn : matchedCountry.nameEn || matchedCountry.nameAr)
    : rawCountry

  const countryDisplay = matchedCountry
    ? `${matchedCountry.flag || ''} ${countryDisplayName}`.trim()
    : (rawCountry || '-')

  return (
    <div className="bg-white dark:bg-slate-900 rounded-[28px] p-6 sm:p-8 shadow-sm border border-slate-100/80 dark:border-slate-800/60 space-y-6 text-start">
      <h2 className="text-xl font-bold text-slate-800 dark:text-white">
        {isRtl ? 'البيانات الشخصية' : 'Personal Information'}
      </h2>


      <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
        <div>
          <label className="block text-xs font-bold text-slate-600 dark:text-slate-400 mb-1.5">
            {isRtl ? 'الإسم بالعربية' : 'Name in Arabic'}
          </label>
          <div className="w-full bg-[#f3f7f6] dark:bg-slate-950 text-slate-800 dark:text-slate-100 rounded-2xl py-3.5 px-4 text-sm font-medium border border-transparent">
            {nameAr}
          </div>
        </div>

        <div>
          <label className="block text-xs font-bold text-slate-600 dark:text-slate-400 mb-1.5">
            Full Name
          </label>
          <div className="w-full bg-[#f3f7f6] dark:bg-slate-950 text-slate-800 dark:text-slate-100 rounded-2xl py-3.5 px-4 text-sm font-medium border border-transparent" dir="ltr">
            {nameEn}
          </div>
        </div>
      </div>


      <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
        <div>
          <label className="block text-xs font-bold text-slate-600 dark:text-slate-400 mb-1.5">
            {isRtl ? 'البريد الإلكتروني' : 'Email Address'}
          </label>
          <div className="w-full bg-[#f3f7f6] dark:bg-slate-950 text-slate-800 dark:text-slate-100 rounded-2xl py-3.5 px-4 text-sm font-medium border border-transparent" dir="ltr">
            {email}
          </div>
        </div>

        <div>
          <label className="block text-xs font-bold text-slate-600 dark:text-slate-400 mb-1.5">
            {isRtl ? 'البلد' : 'Country'}
          </label>
          <div className="w-full bg-[#f3f7f6] dark:bg-slate-950 text-slate-800 dark:text-slate-100 rounded-2xl py-3.5 px-4 text-sm font-medium border border-transparent flex items-center min-h-[50px]">
            {isLoadingCountries && !rawCountry ? (
              <span className="flex items-center gap-2 text-slate-400">
                <Loader2 className="w-4 h-4 animate-spin" />
                <span>{isRtl ? 'جاري التحميل...' : 'Loading...'}</span>
              </span>
            ) : (
              <span>{countryDisplay}</span>
            )}
          </div>
        </div>
      </div>


      <div>
        <label className="block text-xs font-bold text-slate-600 dark:text-slate-400 mb-1.5">
          {isRtl ? 'رقم الهاتف' : 'Phone Number'}
        </label>
        <div className="flex gap-2.5" dir="ltr">
          <div className="h-12 flex items-center justify-center gap-2 px-3.5 bg-[#f3f7f6] dark:bg-slate-950 rounded-2xl text-sm font-bold text-slate-700 dark:text-slate-200 shrink-0 border border-slate-100/50 dark:border-slate-800/40 shadow-xs min-w-[70px]">
            {isLoadingCountries && !rawPhone ? (
              <Loader2 className="w-4 h-4 animate-spin text-slate-400" />
            ) : (
              <>
                {flag && <span className="text-lg leading-none">{flag}</span>}
                {phoneCode && <span className="text-xs font-mono font-bold text-slate-700 dark:text-slate-200">{phoneCode}</span>}
                {!flag && !phoneCode && <span className="text-xs font-mono text-slate-400">-</span>}
              </>
            )}
          </div>
          <div className="flex-1 bg-[#f3f7f6] dark:bg-slate-950 text-slate-800 dark:text-slate-100 rounded-2xl py-3.5 px-4 text-sm font-medium flex items-center font-mono">
            {localNumber}
          </div>
        </div>
      </div>
    </div>
  )
}

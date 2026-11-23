export const getTeacherTimezoneLabel = (country, isRtl = true) => {
  const timezone = typeof country === 'object' && country !== null ? country.timezone : ''
  if (!timezone) return isRtl ? 'التوقيت حسب دولة المعلم (UTC+00:00)' : "Teacher's country timezone (UTC+00:00)"
  let offset = 'UTC+00:00'
  try {
    const value = new Intl.DateTimeFormat('en', { timeZone: timezone, timeZoneName: 'longOffset' })
      .formatToParts(new Date()).find((part) => part.type === 'timeZoneName')?.value
    offset = String(value || 'GMT').replace(/^GMT/, 'UTC')
  } catch {
    // Offset is unavailable; retain the UTC fallback.
  }
  const countryName = isRtl
    ? (typeof country.name === 'object' ? country.name.ar || country.name.en : country.name || country.nameAr || country.nameEn)
    : (country.nameEn || (typeof country.name === 'object' ? country.name.en || country.name.ar : country.name) || country.nameAr)
  const place = countryName ? `${countryName} (${timezone})` : timezone
  return isRtl ? `الأوقات بتوقيت دولة المعلم: ${place}، ${offset}` : `Teacher's local time: ${place}, ${offset}`
}

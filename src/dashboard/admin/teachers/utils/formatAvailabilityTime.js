export function formatAvailabilityTime(value, isRtl = true) {
  if (!value || !/^([01]\d|2[0-3]):[0-5]\d$/.test(value)) return value || ''

  const date = new Date(`1970-01-01T${value}:00.000Z`)
  return new Intl.DateTimeFormat(isRtl ? 'ar-EG' : 'en-US', {
    hour: 'numeric',
    minute: '2-digit',
    hour12: true,
    timeZone: 'UTC',
  }).format(date)
}

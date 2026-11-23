const DAY_INDEX = {
  sunday: 0, monday: 1, tuesday: 2, wednesday: 3,
  thursday: 4, friday: 5, saturday: 6,
  'الأحد': 0, 'الاحد': 0, 'الاثنين': 1, 'الإثنين': 1,
  'الثلاثاء': 2, 'الأربعاء': 3, 'الاربعاء': 3,
  'الخميس': 4, 'الجمعة': 5, 'السبت': 6,
}

function readParts(date, timeZone) {
  const parts = new Intl.DateTimeFormat('en-US', {
    timeZone, weekday: 'short', year: 'numeric', month: '2-digit', day: '2-digit',
    hour: '2-digit', minute: '2-digit', hourCycle: 'h23',
  }).formatToParts(date)
  return Object.fromEntries(parts.map(({ type, value }) => [type, value]))
}

function wallTimeToUtc(year, month, day, hour, minute, timeZone) {
  let timestamp = Date.UTC(year, month - 1, day, hour, minute)
  for (let attempt = 0; attempt < 3; attempt += 1) {
    const parts = readParts(new Date(timestamp), timeZone)
    const represented = Date.UTC(
      Number(parts.year), Number(parts.month) - 1, Number(parts.day),
      Number(parts.hour), Number(parts.minute),
    )
    const desired = Date.UTC(year, month - 1, day, hour, minute)
    const correction = desired - represented
    if (!correction) break
    timestamp += correction
  }
  return new Date(timestamp)
}

function validTimeZone(value) {
  if (!value) return false
  try {
    new Intl.DateTimeFormat('en', { timeZone: value }).format(0)
    return true
  } catch {
    return false
  }
}

export function getGroupTimeZone(group) {
  const country = group?.country
  return country?.timezone || country?.country?.timezone || ''
}

export function getTimeZonePlace(timeZone, isRtl, countryName = '') {
  if (countryName) return countryName
  const city = String(timeZone || '').split('/').pop()?.replace(/_/g, ' ') || (isRtl ? 'المجموعة' : 'Group')
  if (!isRtl) return city
  const names = {
    Cairo: 'القاهرة', Riyadh: 'الرياض', Dubai: 'دبي', Kuwait: 'الكويت',
    Qatar: 'الدوحة', Bahrain: 'المنامة', Muscat: 'مسقط', Amman: 'عمّان',
    London: 'لندن', Paris: 'باريس', Berlin: 'برلين', Istanbul: 'إسطنبول',
  }
  return names[city] || city
}

export function formatGroupScheduleSlot(slot, group, adminTimeZone, isRtl) {
  const groupTimeZone = getGroupTimeZone(group)
  const sourceTimeZone = validTimeZone(groupTimeZone) ? groupTimeZone : 'UTC'
  const targetTimeZone = validTimeZone(adminTimeZone) ? adminTimeZone : sourceTimeZone
  const rawDay = slot?.day?.key || slot?.day?.en || slot?.day?.ar || slot?.day || ''
  const sourceDay = String(rawDay).trim().toLowerCase()
  const sourceDayIndex = DAY_INDEX[sourceDay]
  const start = String(slot?.startTime || slot?.timeFrom || '')
  const end = String(slot?.endTime || slot?.timeTo || '')
  const parseClock = (value) => {
    const match = value.match(/^(\d{1,2}):(\d{2})/)
    return match ? [Number(match[1]), Number(match[2])] : null
  }
  const startClock = parseClock(start)
  const endClock = parseClock(end)
  if (!startClock || !endClock) return { dayIndex: sourceDayIndex, range: `${start} - ${end}`, timeZone: targetTimeZone }

  let instant = null
  let endInstant = null
  if (sourceDayIndex !== undefined) {
    const nowParts = readParts(new Date(), sourceTimeZone)
    const today = new Date(Date.UTC(Number(nowParts.year), Number(nowParts.month) - 1, Number(nowParts.day)))
    const daysAhead = (sourceDayIndex - today.getUTCDay() + 7) % 7
    today.setUTCDate(today.getUTCDate() + daysAhead)
    instant = wallTimeToUtc(today.getUTCFullYear(), today.getUTCMonth() + 1, today.getUTCDate(), ...startClock, sourceTimeZone)
    endInstant = wallTimeToUtc(today.getUTCFullYear(), today.getUTCMonth() + 1, today.getUTCDate(), ...endClock, sourceTimeZone)
  }
  const locale = isRtl ? 'ar-EG' : 'en-US'
  const formatClock = (clock) => new Intl.DateTimeFormat(locale, {
    hour: 'numeric', minute: '2-digit', hour12: true, timeZone: 'UTC',
  }).format(new Date(Date.UTC(2000, 0, 1, clock[0], clock[1])))
  if (instant && endInstant) {
    const startLabel = new Intl.DateTimeFormat(locale, { hour: 'numeric', minute: '2-digit', hour12: true, timeZone: targetTimeZone }).format(instant)
    const endLabel = new Intl.DateTimeFormat(locale, { hour: 'numeric', minute: '2-digit', hour12: true, timeZone: targetTimeZone }).format(endInstant)
    const targetDay = Number(readParts(instant, targetTimeZone).weekday === 'Sun' ? 0 : ({ Mon: 1, Tue: 2, Wed: 3, Thu: 4, Fri: 5, Sat: 6 }[readParts(instant, targetTimeZone).weekday]))
    return { dayIndex: targetDay, range: `${startLabel} - ${endLabel}`, timeZone: targetTimeZone }
  }
  return { dayIndex: sourceDayIndex, range: `${formatClock(startClock)} - ${formatClock(endClock)}`, timeZone: targetTimeZone }
}

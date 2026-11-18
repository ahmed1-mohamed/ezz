export function formatSessionSchedule(startTime, locale) {
  if (!startTime) return '—';
  const value = String(startTime);
  const date = value.match(/^(\d{4}-\d{2}-\d{2})/)?.[1];
  const time = value.match(/T(\d{2}:\d{2})/)?.[1] || value.match(/^(\d{2}:\d{2})/)?.[1];
  if (date) {
    const dateAtUtc = new Date(`${date}T00:00:00.000Z`);
    const dateLabel = new Intl.DateTimeFormat(locale, {
      weekday: 'short',
      day: 'numeric',
      month: 'short',
      timeZone: 'UTC',
    }).format(dateAtUtc);
    const offset = value.match(/([+-]\d{2}:\d{2})$/)?.[1];
    const timezoneLabel = offset ? `UTC${offset}` : /Z$/.test(value) ? 'UTC' : '';
    if (!time) return dateLabel;
    const [hour, minute] = time.split(':').map(Number);
    const timeLabel = new Intl.DateTimeFormat(locale, {
      hour: '2-digit',
      minute: '2-digit',
      hour12: true,
      timeZone: 'UTC',
    }).format(new Date(`1970-01-01T${String(hour).padStart(2, '0')}:${String(minute).padStart(2, '0')}:00.000Z`));
    return `${dateLabel} · ${timeLabel}${timezoneLabel ? ` (${timezoneLabel})` : ''}`;
  }
  const parsed = new Date(value);
  if (Number.isNaN(parsed.getTime())) return value;
  return `${parsed.toLocaleDateString(locale, { weekday: 'short', day: 'numeric', month: 'short' })} · ${parsed.toLocaleTimeString(locale, { hour: '2-digit', minute: '2-digit' })}`;
}

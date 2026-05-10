import { useMemo } from 'react'
import { useTranslation } from 'react-i18next'
import Card from '../components/ui/Card.jsx'
import Badge from '../components/ui/Badge.jsx'

const daysOfWeek = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday']

function buildSchedule() {
    const start = new Date()
    const dayIndex = start.getDay()
    const first = new Date(start)
    first.setDate(start.getDate() - dayIndex)

    return Array.from({ length: 7 }).map((_, index) => {
        const date = new Date(first)
        date.setDate(first.getDate() + index)
        return {
            label: date.toLocaleDateString('en-US', { month: 'short', day: 'numeric' }),
            day: daysOfWeek[index],
            isToday: date.toDateString() === new Date().toDateString(),
            lessons: [
                { time: '09:00', title: 'Arabic Literature' },
                { time: '11:30', title: 'Math Workshop' },
            ],
        }
    })
}

export default function SchedulePage({ role }) {
    const { t, i18n } = useTranslation()
    const schedule = useMemo(() => buildSchedule(), [])

    return (
        <div className="space-y-6">
            <Card title={t('dashboard.schedule')} description={t('schedule.weekOverview')}>
                <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
                    {schedule.map((item) => (
                        <div key={item.label} className={`rounded-3xl border border-slate-200/80 p-5 shadow-soft dark:border-slate-700/60 dark:bg-slate-900/80 ${item.isToday ? 'bg-emerald-50 dark:bg-emerald-500/10' : 'bg-white/90 dark:bg-slate-950/80'}`}>
                            <div className="flex items-center justify-between gap-3">
                                <div>
                                    <p className="text-sm uppercase tracking-[0.18em] text-slate-500 dark:text-slate-400">{i18n.language === 'ar' ? t(`schedule.${item.day.toLowerCase()}`, { defaultValue: item.day }) : item.day}</p>
                                    <h3 className="mt-2 text-xl font-semibold text-slate-900 dark:text-slate-100">{item.label}</h3>
                                </div>
                                {item.isToday && <Badge variant="success">{t('schedule.today')}</Badge>}
                            </div>
                            <div className="mt-5 space-y-3">
                                {item.lessons.map((lesson) => (
                                    <div key={lesson.time} className="rounded-3xl bg-slate-50 p-4 text-sm text-slate-700 dark:bg-slate-800 dark:text-slate-200">
                                        <p className="font-semibold">{lesson.title}</p>
                                        <p className="mt-1 text-xs text-slate-500 dark:text-slate-400">{lesson.time}</p>
                                    </div>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>
            </Card>
            <Card title={t('dashboard.overview')} description={t('schedule.roleSummary', { role })}>
                <p className="text-sm text-slate-500 dark:text-slate-400">{t('schedule.summaryText')}</p>
            </Card>
        </div>
    )
}

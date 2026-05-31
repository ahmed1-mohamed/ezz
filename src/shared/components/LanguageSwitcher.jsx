import { useTranslation } from 'react-i18next'
import { setLanguage } from '../../i18n.js'

const options = [
    { code: 'ar', label: 'AR' },
    { code: 'en', label: 'EN' },
]

export default function LanguageSwitcher() {
    const { i18n } = useTranslation()
    const current = i18n.language || 'ar'

    return (
        <div className="inline-flex overflow-hidden rounded-full border border-brand-200 bg-white text-slate-700 shadow-sm dark:border-brand-700/50 dark:bg-slate-950 dark:text-slate-200">
            {options.map((option) => (
                <button
                    key={option.code}
                    type="button"
                    onClick={() => setLanguage(option.code)}
                    className={`px-3 py-2 text-xs font-semibold transition focus:outline-none focus:ring-2 focus:ring-brand-400 focus:ring-offset-2 focus:ring-offset-slate-50 dark:focus:ring-offset-slate-950 ${current === option.code
                        ? 'bg-brand-600 text-white dark:bg-brand-600/80 dark:text-white'
                        : 'bg-transparent text-slate-700 hover:bg-brand-50 dark:text-slate-200 dark:hover:bg-brand-700/10'
                        }`}
                >
                    {option.label}
                </button>
            ))}
        </div>
    )
}

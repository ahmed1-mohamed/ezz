import LanguageSwitcher from '../components/layout/LanguageSwitcher.jsx'

export default function AuthLayout({ children }) {
    return (
        <div className="relative min-h-screen bg-gradient-to-br from-slate-950 via-slate-900 to-slate-800 text-slate-100">
            <div className="absolute right-4 top-4 sm:right-6 sm:top-6">
                <LanguageSwitcher />
            </div>
            <div className="mx-auto flex min-h-screen max-w-7xl flex-col justify-center px-6 py-12 sm:px-10">
                {children}
            </div>
        </div>
    )
}

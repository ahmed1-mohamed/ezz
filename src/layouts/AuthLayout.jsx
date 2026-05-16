import LanguageSwitcher from '../components/layout/LanguageSwitcher.jsx'
import Container from '../components/ui/Container.jsx'

export default function AuthLayout({ children }) {
    return (
        <div className="relative min-h-screen bg-gradient-to-br from-slate-950 via-slate-900 to-slate-800 text-slate-100">
            <div className="absolute end-4 top-4 sm:end-6 sm:top-6">
                <LanguageSwitcher />
            </div>
            <Container className="flex min-h-screen flex-col justify-center py-12 sm:py-16">
                {children}
            </Container>
        </div>
    )
}

import { useAuth } from './context/useAuth.jsx'
import AppRoutes from './routes/AppRoutes.jsx'
import { useTranslation } from 'react-i18next'

function App() {
  const { theme } = useAuth()
  const { i18n } = useTranslation()

  return (
    <div dir={i18n.dir()} className={`${theme === 'dark' ? 'dark' : ''} min-h-screen bg-white text-slate-900 dark:bg-slate-950 dark:text-slate-100 transition-colors duration-300`}>
      <AppRoutes />
    </div>
  )
}

export default App

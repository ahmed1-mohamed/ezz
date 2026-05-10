import { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { useTranslation } from 'react-i18next'
import AuthLayout from '../layouts/AuthLayout.jsx'
import Button from '../components/ui/Button.jsx'
import Input from '../components/ui/Input.jsx'
import Card from '../components/ui/Card.jsx'
import { useAuth } from '../context/useAuth.jsx'
import { getRedirectPath } from '../services/authService.js'

const initialState = { email: '', password: '', remember: true }

export default function Login() {
    const { t } = useTranslation()
    const [formValues, setFormValues] = useState(initialState)
    const [errors, setErrors] = useState({})
    const [serverError, setServerError] = useState('')
    const { login, loading } = useAuth()
    const navigate = useNavigate()

    const validate = () => {
        const nextErrors = {}

        if (!formValues.email) {
            nextErrors.email = t('login.emailRequired', { defaultValue: 'Email is required.' })
        } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formValues.email)) {
            nextErrors.email = t('login.validEmail', { defaultValue: 'Provide a valid email address.' })
        }

        if (!formValues.password) {
            nextErrors.password = t('login.passwordRequired', { defaultValue: 'Password is required.' })
        } else if (formValues.password.length < 6) {
            nextErrors.password = t('login.passwordLength', { defaultValue: 'Password must be at least 6 characters.' })
        }

        setErrors(nextErrors)
        return Object.keys(nextErrors).length === 0
    }

    const handleSubmit = async (event) => {
        event.preventDefault()
        setServerError('')

        if (!validate()) {
            return
        }

        try {
            const user = await login(formValues.email, formValues.password, formValues.remember)
            navigate(getRedirectPath(user.role))
        } catch (error) {
            setServerError(error.message)
        }
    }

    return (
        <AuthLayout>
            <div className="mx-auto w-full max-w-3xl rounded-[2rem] border border-white/10 bg-slate-900/95 p-8 shadow-soft backdrop-blur-xl sm:p-12">
                <div className="grid gap-8 lg:grid-cols-[1.3fr_1fr] lg:items-center">
                    <div className="space-y-6">
                        <div>
                            <p className="text-sm uppercase tracking-[0.3em] text-sky-400/80">{t('login.title')}</p>
                            <h1 className="mt-4 text-4xl font-semibold text-white sm:text-5xl">{t('login.description')}</h1>
                        </div>
                        <p className="max-w-xl text-slate-400">{t('login.help')}</p>
                        <div className="rounded-3xl border border-slate-800/90 bg-slate-950/90 p-5 text-sm text-slate-300">
                            <p className="font-semibold text-slate-100">{t('login.testAccounts')}</p>
                            <ul className="mt-4 space-y-3">
                                <li>Admin: admin@eduplatform.com / Admin@123</li>
                                <li>Manager: manager@eduplatform.com / Manager@123</li>
                                <li>Teacher: teacher@eduplatform.com / Teacher@123</li>
                                <li>Student: student@eduplatform.com / Student@123</li>
                            </ul>
                        </div>
                    </div>

                    <Card title={t('login.title')} description={t('login.description')}>
                        <form className="space-y-5" onSubmit={handleSubmit} noValidate>
                            <Input
                                label={t('login.email')}
                                name="email"
                                type="email"
                                placeholder="user@eduplatform.com"
                                value={formValues.email}
                                onChange={(event) => setFormValues({ ...formValues, email: event.target.value })}
                                error={errors.email}
                            />
                            <Input
                                label={t('login.password')}
                                name="password"
                                type="password"
                                placeholder={t('login.password')}
                                value={formValues.password}
                                onChange={(event) => setFormValues({ ...formValues, password: event.target.value })}
                                error={errors.password}
                            />
                            <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
                                <label className="inline-flex items-center gap-3 text-sm text-slate-400">
                                    <input
                                        type="checkbox"
                                        checked={formValues.remember}
                                        onChange={(event) => setFormValues({ ...formValues, remember: event.target.checked })}
                                        className="h-4 w-4 rounded border-slate-300 text-brand-600 focus:ring-brand-500"
                                    />
                                    {t('login.remember')}
                                </label>
                                <a className="text-sm font-semibold text-sky-400 transition hover:text-sky-200" href="#help">
                                    {t('login.help')}
                                </a>
                            </div>
                            {serverError && <p className="text-sm text-rose-500">{serverError}</p>}
                            <Button type="submit" className="w-full" disabled={loading}>
                                {loading ? t('login.signingIn') : t('login.submit')}
                            </Button>
                        </form>
                        <p className="mt-5 text-center text-sm text-slate-400">
                            {t('login.noAccount')}{' '}
                            <Link className="font-semibold text-sky-400 hover:text-sky-200" to="/register">
                                {t('login.register')}
                            </Link>
                        </p>
                    </Card>
                </div>
            </div>
        </AuthLayout>
    )
}

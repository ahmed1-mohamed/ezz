import { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { useTranslation } from 'react-i18next'
import AuthLayout from '../layouts/AuthLayout.jsx'
import Button from '../components/ui/Button.jsx'
import Input from '../components/ui/Input.jsx'
import Card from '../components/ui/Card.jsx'

const initialState = { name: '', email: '', password: '', confirmPassword: '' }

export default function Register() {
    const { t } = useTranslation()
    const [formValues, setFormValues] = useState(initialState)
    const [errors, setErrors] = useState({})
    const [serverError, setServerError] = useState('')
    const [loading, setLoading] = useState(false)
    const navigate = useNavigate()

    const validate = () => {
        const nextErrors = {}

        if (!formValues.name) {
            nextErrors.name = t('register.nameRequired', { defaultValue: 'Name is required.' })
        }

        if (!formValues.email) {
            nextErrors.email = t('register.emailRequired', { defaultValue: 'Email is required.' })
        } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formValues.email)) {
            nextErrors.email = t('register.validEmail', { defaultValue: 'Provide a valid email address.' })
        }

        if (!formValues.password) {
            nextErrors.password = t('register.passwordRequired', { defaultValue: 'Password is required.' })
        } else if (formValues.password.length < 6) {
            nextErrors.password = t('register.passwordLength', { defaultValue: 'Password must be at least 6 characters.' })
        }

        if (!formValues.confirmPassword) {
            nextErrors.confirmPassword = t('register.confirmPasswordRequired', { defaultValue: 'Please confirm your password.' })
        } else if (formValues.password !== formValues.confirmPassword) {
            nextErrors.confirmPassword = t('register.passwordMismatch', { defaultValue: 'Passwords do not match.' })
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

        setLoading(true)
        await new Promise((resolve) => setTimeout(resolve, 500))
        setLoading(false)

        navigate('/login')
    }

    return (
        <AuthLayout>
            <div className="mx-auto w-full max-w-3xl rounded-[2rem] border border-white/10 bg-slate-900/95 p-8 shadow-soft backdrop-blur-xl sm:p-12">
                <div className="grid gap-8 lg:grid-cols-[1.3fr_1fr] lg:items-center">
                    <div className="space-y-6">
                        <div>
                            <p className="text-sm uppercase tracking-[0.3em] text-sky-400/80">{t('register.title')}</p>
                            <h1 className="mt-4 text-4xl font-semibold text-white sm:text-5xl">{t('register.description')}</h1>
                        </div>
                        <p className="max-w-xl text-slate-400">{t('register.help')}</p>
                        <div className="rounded-3xl border border-slate-800/90 bg-slate-950/90 p-5 text-sm text-slate-300">
                            <p className="font-semibold text-slate-100">{t('register.noteTitle')}</p>
                            <p className="mt-3 text-sm text-slate-400">{t('register.noteText')}</p>
                        </div>
                    </div>

                    <Card title={t('register.title')} description={t('register.description')}>
                        <form className="space-y-5" onSubmit={handleSubmit} noValidate>
                            <Input
                                label={t('register.name')}
                                name="name"
                                type="text"
                                placeholder={t('register.namePlaceholder')}
                                value={formValues.name}
                                onChange={(event) => setFormValues({ ...formValues, name: event.target.value })}
                                error={errors.name}
                            />
                            <Input
                                label={t('register.email')}
                                name="email"
                                type="email"
                                placeholder="user@eduplatform.com"
                                value={formValues.email}
                                onChange={(event) => setFormValues({ ...formValues, email: event.target.value })}
                                error={errors.email}
                            />
                            <Input
                                label={t('register.password')}
                                name="password"
                                type="password"
                                placeholder={t('register.password')}
                                value={formValues.password}
                                onChange={(event) => setFormValues({ ...formValues, password: event.target.value })}
                                error={errors.password}
                            />
                            <Input
                                label={t('register.confirmPassword')}
                                name="confirmPassword"
                                type="password"
                                placeholder={t('register.confirmPassword')}
                                value={formValues.confirmPassword}
                                onChange={(event) => setFormValues({ ...formValues, confirmPassword: event.target.value })}
                                error={errors.confirmPassword}
                            />
                            {serverError && <p className="text-sm text-rose-500">{serverError}</p>}
                            <Button type="submit" className="w-full" disabled={loading}>
                                {loading ? t('register.submitting') : t('register.submit')}
                            </Button>
                        </form>
                        <p className="mt-5 text-center text-sm text-slate-400">
                            {t('register.haveAccount')}{' '}
                            <Link className="font-semibold text-sky-400 hover:text-sky-200" to="/login">
                                {t('register.login')}
                            </Link>
                        </p>
                    </Card>
                </div>
            </div>
        </AuthLayout>
    )
}

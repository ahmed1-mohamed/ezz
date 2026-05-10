import { useTranslation } from 'react-i18next'
import Button from '../components/ui/Button.jsx'

export default function Pricing() {
    const { t } = useTranslation()

    const plans = [
        {
            name: 'Basic',
            price: 'Free',
            description: 'Perfect for getting started',
            features: [
                'Access to public curriculums',
                'Community support',
                'Mobile app access',
                'Basic progress tracking',
            ],
        },
        {
            name: 'Professional',
            price: '$99',
            period: '/month',
            description: 'Best for active learners',
            popular: true,
            features: [
                'All Basic features',
                'Unlimited curriculum access',
                'Live classes with instructors',
                'Personalized learning paths',
                'Priority email support',
                'Certificate of completion',
            ],
        },
        {
            name: 'Enterprise',
            price: 'Custom',
            description: 'For organizations',
            features: [
                'All Professional features',
                'Custom curriculum design',
                'Dedicated account manager',
                'Advanced analytics',
                'Team collaboration tools',
                'API access',
            ],
        },
    ]

    return (
        <section className="space-y-12">
            <div className="rounded-3xl border border-slate-200/80 bg-white/90 p-10 shadow-soft backdrop-blur-xl dark:border-slate-700/60 dark:bg-slate-900/80">
                <div className="space-y-4 text-center">
                    <p className="text-sm font-medium text-slate-500 dark:text-slate-400">{t('public.pricing?.subtitle', { defaultValue: 'Transparent Pricing' })}</p>
                    <h1 className="text-4xl font-semibold text-slate-900 dark:text-white">{t('public.pricing?.title', { defaultValue: 'Choose Your Plan' })}</h1>
                    <p className="text-lg text-slate-600 dark:text-slate-300">{t('public.pricing?.description', { defaultValue: 'Select the perfect plan for your learning journey.' })}</p>
                </div>
            </div>

            <div className="grid gap-6 md:grid-cols-3">
                {plans.map((plan) => (
                    <div
                        key={plan.name}
                        className={`rounded-3xl border p-8 shadow-soft backdrop-blur-xl transition ${plan.popular
                                ? 'border-brand-600 bg-brand-50/80 dark:border-brand-500 dark:bg-brand-900/20'
                                : 'border-slate-200/80 bg-white/90 dark:border-slate-700/60 dark:bg-slate-900/80'
                            }`}
                    >
                        {plan.popular && (
                            <div className="mb-4 inline-block rounded-full bg-brand-600 px-3 py-1 text-xs font-semibold text-white">
                                Most Popular
                            </div>
                        )}
                        <h3 className="text-2xl font-semibold text-slate-900 dark:text-white">{plan.name}</h3>
                        <div className="mt-3 space-y-1">
                            <div className="flex items-baseline gap-2">
                                <span className="text-4xl font-bold text-slate-900 dark:text-white">{plan.price}</span>
                                {plan.period && <span className="text-slate-600 dark:text-slate-400">{plan.period}</span>}
                            </div>
                            <p className="text-sm text-slate-600 dark:text-slate-400">{plan.description}</p>
                        </div>

                        <Button variant={plan.popular ? 'primary' : 'secondary'} className="mt-6 w-full">
                            {t('public.pricing?.cta', { defaultValue: 'Get Started' })}
                        </Button>

                        <ul className="mt-8 space-y-3">
                            {plan.features.map((feature) => (
                                <li key={feature} className="flex items-start gap-3">
                                    <span className="mt-1 inline-flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-brand-600/20 text-xs font-bold text-brand-700 dark:text-brand-400">
                                        ✓
                                    </span>
                                    <span className="text-sm text-slate-700 dark:text-slate-300">{feature}</span>
                                </li>
                            ))}
                        </ul>
                    </div>
                ))}
            </div>

            <div className="rounded-3xl border border-slate-200/80 bg-slate-50 p-10 text-center dark:border-slate-700/60 dark:bg-slate-950">
                <h2 className="text-2xl font-semibold text-slate-900 dark:text-white">{t('public.pricing?.faqTitle', { defaultValue: 'Have questions?' })}</h2>
                <p className="mt-2 text-slate-600 dark:text-slate-300">{t('public.pricing?.faqText', { defaultValue: 'Contact our support team for more details about pricing and available options.' })}</p>
                <Button variant="primary" className="mt-6">
                    {t('public.pricing?.contactCta', { defaultValue: 'Contact Sales' })}
                </Button>
            </div>
        </section>
    )
}

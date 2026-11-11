import { useMemo, memo } from 'react'
import { Sparkles, HeartHandshake, GraduationCap, Award, ShieldCheck, Percent } from 'lucide-react'
import logoImg from '@/images/programs/NewLogo.webp'

export default memo(function TrialSessionHero({ t, isRtl }) {
  const perksList = useMemo(() => [
    {
      icon: GraduationCap,
      title: t('trialSessionLanding.perks.oneOnOne', isRtl ? 'حصة مجانية مباشرة' : 'Free Live Session'),
      desc: isRtl ? 'تركيز كامل مع طفلك لتقييم مستواه واحتياجاته بدقة' : 'Full focus with your child to assess level and needs accurately',
    },
    {
      icon: Award,
      title: t('trialSessionLanding.perks.certifiedTeachers', isRtl ? 'معلمون ومعلمات معتمدون' : 'Certified Teachers'),
      desc: isRtl ? 'نخبة من خريجي الأزهر والجامعات الإسلامية المتخصصة' : 'Top graduates from Al-Azhar and Islamic universities',
    },
    {
      icon: Percent,
      title: t('trialSessionLanding.perks.discount', isRtl ? 'خصم 20% للشهر الأول' : '20% First Month Discount'),
      desc: t('trialSessionLanding.perks.discountDesc', isRtl ? 'خصم فوري 20% على اشتراك الشهر الأول عند التسجيل بعد الحصة التجريبية' : 'Instant 20% discount on first month enrollment when subscribing after the trial session'),
    },
    {
      icon: ShieldCheck,
      title: t('trialSessionLanding.perks.freeNoCommitment', isRtl ? 'مجانية تماماً بدون أي التزام' : 'Completely Free - No Obligation'),
      desc: isRtl ? 'فرصة حقيقية للتعرف إلى طريقة الشرح والمنصة بدون أي رسوم' : 'Genuine opportunity to experience our platform at zero cost',
    },
  ], [t, isRtl])
  return (
    <section className="relative overflow-hidden rounded-3xl sm:rounded-[36px] bg-gradient-to-br from-[#004D40] via-[#00695C] to-[#0A3D36] text-white p-6 sm:p-10 lg:p-14 shadow-2xl border border-emerald-600/30">
      <div className="absolute top-0 end-0 -mt-16 -me-16 w-80 h-80 rounded-full bg-amber-400/10 blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 start-0 -mb-16 -ms-16 w-80 h-80 rounded-full bg-emerald-400/10 blur-3xl pointer-events-none" />
      <div className="relative z-10 max-w-4xl mx-auto text-center space-y-6">
        <div className="flex flex-wrap items-center justify-center gap-3">
          <img
            src={logoImg}
            alt={t('appName', 'أكاديمية منارة العز')}
            className="w-11 h-11 sm:w-14 sm:h-14 object-contain drop-shadow-md"
            width="56"
            height="56"
          />
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-xs sm:text-sm font-bold text-amber-300 shadow-sm">
            <Sparkles size={16} className="text-amber-300 animate-pulse" />
            <span>{t('trialSessionLanding.badge', isRtl ? 'حصة تجريبية مجانية' : 'Free Trial Session')}</span>
          </div>
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-amber-400/20 backdrop-blur-md border border-amber-300/40 text-xs sm:text-sm font-black text-amber-300 shadow-sm animate-pulse">
            <Percent size={15} className="text-amber-300" />
            <span>{t('trialSessionLanding.discountBadge', isRtl ? 'خصم 20% على الشهر الأول' : '20% Off First Month')}</span>
          </div>
        </div>
        <div className="space-y-3">
          <h1 className="text-2xl sm:text-4xl lg:text-5xl font-black tracking-tight leading-tight sm:leading-snug text-amber-300">
            {t('trialSessionLanding.title', isRtl ? 'احجز حصتك التجريبية المجانية' : 'Book your free trial session')}
          </h1>
          <p className="text-sm sm:text-base md:text-lg font-bold text-emerald-50/95 max-w-2xl mx-auto leading-relaxed">
            {t(
              'trialSessionLanding.discountSubtitle',
              isRtl
                ? 'احجز حصتك التجريبية المجانية اليوم واستفد من خصم 20% على الشهر الأول لجميع البرامج التعليمية!'
                : 'Book your free trial session today and get 20% off your first month for all educational programs!'
            )}
          </p>
        </div>
        <div className="pt-4 border-t border-white/15 max-w-2xl mx-auto space-y-2 text-emerald-50/90 text-sm sm:text-base leading-relaxed">
          <div className="inline-flex items-center gap-2 text-xs uppercase tracking-wider font-extrabold text-amber-300/90">
            <HeartHandshake size={15} />
            <span>{t('trialSessionLanding.aboutSectionTitle', isRtl ? 'من نحن' : 'About Us')}</span>
          </div>
          <p className="text-slate-100/95 font-medium">
            {t(
              'trialSessionLanding.aboutBriefLine1',
              'منارة العز ليست مجرد أكاديمية، بل هي رحلة في أعماق المعرفة، صُممت لتكون ملاذاً رقمياً يجمع بين أصالة التراث وحداثة التكنولوجيا لنشر نور الوحي.'
            )}
          </p>
          <p className="text-emerald-100/85 text-xs sm:text-sm">
            {t(
              'trialSessionLanding.aboutBriefLine2',
              'نرافق أطفالكم خطوة بخطوة في رحلتهم التعليمية مع معلمين متخصصين يراعون مستوى كل متعلم وأهدافه التعليمية والتربوية.'
            )}
          </p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4 pt-4 text-start">
          {perksList.map((perk) => {
            const IconComp = perk.icon
            return (
              <div
                key={perk.title}
                className="p-4 rounded-2xl bg-white/10 backdrop-blur-md border border-white/10 flex items-start gap-3 shadow-xs"
              >
                <div className="w-10 h-10 rounded-xl bg-amber-400/20 text-amber-300 flex items-center justify-center shrink-0">
                  <IconComp size={20} />
                </div>
                <div>
                  <h3 className="text-xs sm:text-sm font-black text-white">{perk.title}</h3>
                  <p className="text-[11px] sm:text-xs text-emerald-100/80 mt-0.5 leading-snug">{perk.desc}</p>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
})

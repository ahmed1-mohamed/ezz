import { useState, useEffect, useCallback, useMemo } from 'react'
import { Link } from 'react-router-dom'
import { AnimatePresence, motion } from 'framer-motion'
import { Plus, Package, CreditCard } from 'lucide-react'
import { useTranslation } from 'react-i18next'
import { toast } from 'react-hot-toast'
import { adminPackagesApi } from '@/shared/services/api/adminPackagesApi'
import PackageCard from './components/PackageCard'
import PackageFormPanel from './components/PackageFormPanel'
import FaqInlineForm from './components/FaqInlineForm'
import FaqTable from './components/FaqTable'
import { showDeleteConfirm } from '@/shared/utils/sweetAlert'
import Spinner from '@/shared/components/Spinner'
import { useAdminPermissions } from '@/shared/hooks/useAdminPermissions'
import { normalizeCountries, sortCountries, getCountryName } from '@/shared/utils/countryUtils'

export default function AdminPackages() {
    const { t, i18n } = useTranslation()
    const isRtl = i18n.language.startsWith('ar')
    const { hasPermission, isSuperAdmin } = useAdminPermissions()
    const p = (key) => t(`adminDashboard.packages.${key}`)

    const [packages, setPackages] = useState([])
    const [faqs, setFaqs] = useState([])
    const [explanationLanguages, setExplanationLanguages] = useState([])
    const [countries, setCountries] = useState([])
    const [isLoading, setIsLoading] = useState(true)

    const [pkgPanelOpen, setPkgPanelOpen] = useState(false)
    const [editingPkg, setEditingPkg] = useState(null)
    const [editingFaq, setEditingFaq] = useState(null)
    const [isFaqFormOpen, setIsFaqFormOpen] = useState(false)
    const [selectedCountryFilter, setSelectedCountryFilter] = useState('all')

    const sortedCountries = useMemo(() => {
        return sortCountries(countries, isRtl)
    }, [countries, isRtl])

    const loadAll = useCallback(async () => {
        setIsLoading(true)
        try {
            const [res, langRes, countriesRes] = await Promise.all([
                adminPackagesApi.fetchPackagesAndFaqs(),
                adminPackagesApi.fetchExplanationLanguages(),
                adminPackagesApi.fetchCountries(),
            ])
            if (res?.packages) setPackages(res.packages)
            if (res?.faqs) setFaqs(res.faqs)
            if (langRes?.success) setExplanationLanguages(langRes.data)
            if (countriesRes?.success) setCountries(normalizeCountries(countriesRes.data))
        } finally {
            setIsLoading(false)
        }
    }, [])

    useEffect(() => {
        let isMounted = true
        Promise.resolve().then(() => {
            if (isMounted) loadAll()
        })
        return () => {
            isMounted = false
        }
    }, [loadAll])

    const handleSavePkg = async (data) => {
        let res;
        if (editingPkg) {
            res = await adminPackagesApi.updatePackage(editingPkg.id, data)
            if (res?.success) setPackages((prev) => prev.map((p) => (p.id === editingPkg.id ? res.data : p)))
        } else {
            res = await adminPackagesApi.createPackage(data)
            if (res?.success) setPackages((prev) => [...prev, res.data])
        }

        if (res?.success) {
            toast.success(isRtl ? 'تم حفظ الباقة بنجاح' : 'Package saved successfully')
            setPkgPanelOpen(false)
        } else {
            const err = Array.isArray(res?.error) ? res.error.join(', ') : res?.error;
            toast.error(err || (isRtl ? 'حدث خطأ أثناء حفظ الباقة' : 'Failed to save package'))
        }
    }

    const handleRemoveDiscount = async (id) => {
        try {
            const updated = await adminPackagesApi.removePackageDiscount(id)
            setPackages((prev) => prev.map((p) => (p.id === id ? { ...p, priceAfterDiscount: null, discountPercentage: null, ...updated, name: p.name, name_en: p.name_en, features: p.features, features_en: p.features_en } : p)))
            setEditingPkg((prev) => (prev && prev.id === id ? { ...prev, priceAfterDiscount: null } : prev))
            toast.success(isRtl ? 'تم إلغاء الخصم' : 'Discount removed')
            return true
        } catch (error) {
            const msg = error?.response?.data?.message
            toast.error((Array.isArray(msg) ? msg.join(', ') : msg) || (isRtl ? 'تعذر إلغاء الخصم' : 'Failed to remove discount'))
            return false
        }
    }

    const executeDelete = async (type, id, name) => {
        const isConfirmed = await showDeleteConfirm(isRtl, name);
        if (!isConfirmed) return;

        if (type === 'package') {
            await adminPackagesApi.deletePackage(id)
            setPackages((prev) => prev.filter((p) => p.id !== id))
        } else {
            await adminPackagesApi.deleteFaq(id)
            setFaqs((prev) => prev.filter((f) => f.id !== id))
        }
    }

    const handleSaveFaq = async (data) => {
        let res;
        if (editingFaq) {
            res = await adminPackagesApi.updateFaq(editingFaq.id, data)
            if (res?.success) setFaqs((prev) => prev.map((f) => (f.id === editingFaq.id ? { ...f, ...res.data } : f)))
        } else {
            res = await adminPackagesApi.createFaq(data)
            if (res?.success) setFaqs((prev) => [...prev, res.data])
        }

        if (res?.success) {
            toast.success(isRtl ? 'تم حفظ السؤال بنجاح' : 'FAQ saved successfully')
            setEditingFaq(null)
            setIsFaqFormOpen(false)
        } else {
            const err = Array.isArray(res?.error) ? res.error.join(', ') : res?.error;
            toast.error(err || (isRtl ? 'حدث خطأ أثناء حفظ السؤال' : 'Failed to save FAQ'))
        }
    }

    const handleEditPkgClick = async (pkg) => {
        const loadingToast = toast.loading(isRtl ? 'جاري تحميل بيانات الباقة...' : 'Loading package details...')
        try {
            const res = await adminPackagesApi.fetchPackageById(pkg.id)
            const pkgData = res?.data || res

            const langId = typeof pkgData.language === 'object' ? pkgData.language?.id || pkgData.language?._id : pkgData.language;

            const mappedPkg = {
                id: pkgData.id || pkgData._id,
                name: typeof pkgData.name === 'object' && pkgData.name !== null ? pkgData.name.ar || '' : pkgData.name || '',
                name_en: typeof pkgData.name === 'object' && pkgData.name !== null ? pkgData.name.en || '' : pkgData.name || '',
                price: pkgData.price,
                sessions_per_month: pkgData.sessionsCount,
                sessionDuration: pkgData.sessionDuration || pkgData.duration || pkgData.durationMinutes || pkg.sessionDuration || 60,
                sessions_language: langId,
                country: typeof pkgData.country === 'object' && pkgData.country !== null ? (pkgData.country.id || pkgData.country._id || pkgData.country.name) : (pkgData.country || pkg.country || ''),
                features: Array.isArray(pkgData.features) ? pkgData.features : (pkgData.features?.ar || []),
                features_en: Array.isArray(pkgData.features) ? pkgData.features : (pkgData.features?.en || []),
                image: pkg.image || null,
                type: pkgData.type === 'family' ? 'family' : 'individual',
                maxMembers: pkgData.maxMembers || null,
                familyTiers: Array.isArray(pkgData.familyTiers) ? pkgData.familyTiers : [],
                priceAfterDiscount: pkgData.priceAfterDiscount ?? null,
            }

            setEditingPkg(mappedPkg)
            setPkgPanelOpen(true)
        } catch (error) {
            console.error('Failed to fetch package details for edit:', error)
            toast.error(isRtl ? 'حدث خطأ أثناء تحميل تفاصيل الباقة' : 'Failed to load package details')
        } finally {
            toast.dismiss(loadingToast)
        }
    }

    const handleEditFaqClick = async (faq) => {
        const initialFaq = {
            id: faq.id || faq._id,
            question: typeof faq.question === 'object' && faq.question !== null ? (faq.question.ar || faq.question.en || '') : (faq.question || ''),
            question_en: typeof faq.question === 'object' && faq.question !== null ? (faq.question.en || faq.question.ar || '') : (faq.question_en || ''),
            answer: typeof faq.answer === 'object' && faq.answer !== null ? (faq.answer.ar || faq.answer.en || '') : (faq.answer || ''),
            answer_en: typeof faq.answer === 'object' && faq.answer !== null ? (faq.answer.en || faq.answer.ar || '') : (faq.answer_en || ''),
        };
        setEditingFaq(initialFaq);
        setIsFaqFormOpen(true);
        try {
            const res = await adminPackagesApi.fetchFaqById(faq.id || faq._id);
            let faqData = res?.data || res;
            if (Array.isArray(faqData)) {
                faqData = faqData[0];
            }
            if (faqData?.data && !faqData.question) {
                faqData = Array.isArray(faqData.data) ? faqData.data[0] : faqData.data;
            }
            if (faqData && typeof faqData === 'object') {
                const qAr = typeof faqData.question === 'object' && faqData.question !== null ? (faqData.question.ar || faqData.question.en || '') : (faqData.question || initialFaq.question);
                const qEn = typeof faqData.question === 'object' && faqData.question !== null ? (faqData.question.en || faqData.question.ar || '') : (faqData.question_en || initialFaq.question_en);
                const aAr = typeof faqData.answer === 'object' && faqData.answer !== null ? (faqData.answer.ar || faqData.answer.en || '') : (faqData.answer || initialFaq.answer);
                const aEn = typeof faqData.answer === 'object' && faqData.answer !== null ? (faqData.answer.en || faqData.answer.ar || '') : (faqData.answer_en || initialFaq.answer_en);
                setEditingFaq({
                    id: faqData.id || faqData._id || initialFaq.id,
                    question: qAr,
                    question_en: qEn,
                    answer: aAr,
                    answer_en: aEn,
                });
            }
        } catch (error) {
            console.warn('Failed to fetch single FAQ details, retaining table data:', error);
        }
    };

    const canViewPackages = hasPermission('packages.read') || hasPermission('packages_faqs.read') || isSuperAdmin
    const canCreatePackage = hasPermission('packages.create') || isSuperAdmin
    const canUpdatePackage = hasPermission('packages.update') || isSuperAdmin
    const canDeletePackage = hasPermission('packages.delete') || isSuperAdmin
    const canViewSubscriptions = hasPermission('packages.subscriptions') || isSuperAdmin

    const canViewFaqs = hasPermission('faqs.read') || hasPermission('packages_faqs.read') || isSuperAdmin
    const canCreateFaq = hasPermission('faqs.create') || isSuperAdmin
    const canUpdateFaq = hasPermission('faqs.update') || isSuperAdmin
    const canDeleteFaq = hasPermission('faqs.delete') || isSuperAdmin

    const filteredPackages = useMemo(() => {
        if (!selectedCountryFilter || selectedCountryFilter === 'all') return packages;
        return packages.filter(p => {
            const pCountry = p.countryRaw?._id || p.countryRaw?.id || p.country;
            return String(pCountry) === String(selectedCountryFilter) || p.country === selectedCountryFilter;
        });
    }, [packages, selectedCountryFilter]);

    if (isLoading) {
        return (
            <div className="flex h-[60vh] items-center justify-center">
                <Spinner />
            </div>
        )
    }

    if (!canViewPackages && !canViewFaqs) {
        return (
            <div className="flex flex-col items-center justify-center py-20 bg-white dark:bg-slate-900 rounded-3xl border border-slate-100 dark:border-slate-800 text-center p-8">
                <p className="text-slate-600 dark:text-slate-400 font-bold text-base">
                    {isRtl ? 'لا تملك الصلاحيات الكافية لعرض الباقات والأسئلة الشائعة' : 'You do not have permission to view packages or FAQs'}
                </p>
            </div>
        )
    }

    return (
        <div className="space-y-8">
            {canViewPackages && (
                <section>
                    <div className="flex flex-wrap items-center justify-between gap-3 mb-5">
                        <p className="text-slate-500 dark:text-slate-400 text-sm">
                            {filteredPackages.length} {p('available')}
                        </p>
                        <div className="flex items-center gap-2.5">
                            {canViewSubscriptions && (
                                <Link
                                    to="/dashboard/admin/payments"
                                    className="flex items-center gap-2 px-4 py-2.5 bg-white dark:bg-slate-900 border border-[#0f7a6c]/30 text-[#0f7a6c] dark:text-emerald-400 rounded-xl text-sm font-semibold hover:bg-slate-50 dark:hover:bg-slate-800 transition-colors shadow-sm"
                                >
                                    <CreditCard size={16} />
                                    <span>{isRtl ? 'عرض الاشتراكات والمدفوعات' : 'View Subscriptions & Payments'}</span>
                                </Link>
                            )}
                            {canCreatePackage && (
                                <button
                                    onClick={() => { setEditingPkg(null); setPkgPanelOpen(true) }}
                                    className="flex items-center gap-2 px-4 py-2.5 bg-[#0f7a6c] text-white rounded-xl text-sm font-semibold hover:bg-[#0d6b5e] transition-colors shadow-sm shadow-[#0f7a6c]/20 cursor-pointer"
                                >
                                    <Plus size={16} />
                                    {p('createPackage')}
                                </button>
                            )}
                        </div>
                    </div>

                    <div className="flex items-center gap-2 overflow-x-auto pb-2 mb-5 scrollbar-none">
                        <button
                            type="button"
                            onClick={() => setSelectedCountryFilter('all')}
                            className={`px-4 py-2 rounded-xl text-xs font-bold transition-all shrink-0 cursor-pointer ${
                                selectedCountryFilter === 'all'
                                    ? 'bg-[#0f7a6c] text-white shadow-sm shadow-[#0f7a6c]/20'
                                    : 'bg-white dark:bg-slate-800 text-slate-600 dark:text-slate-300 border border-slate-200/70 dark:border-slate-700 hover:bg-slate-50 dark:hover:bg-slate-700'
                            }`}
                        >
                            {isRtl ? 'كل الدول' : 'All Countries'} ({packages.length})
                        </button>
                        {sortedCountries.map((c) => {
                            const cid = c.id || c._id;
                            const cName = getCountryName(c, isRtl);
                            const flag = c.flag ? `${c.flag} ` : '';
                            const isSelected = selectedCountryFilter === cid || selectedCountryFilter === cName || selectedCountryFilter === c.name || selectedCountryFilter === c.nameEn;
                            const count = packages.filter(p => {
                                const pCountry = p.countryRaw?._id || p.countryRaw?.id || p.country;
                                return String(pCountry) === String(cid) || p.country === cName || p.country === c.name || p.country === c.nameEn;
                            }).length;

                            // Only list countries that actually have packages (the full list has ~250 entries)
                            if (count === 0 && !isSelected) return null;

                            return (
                                <button
                                    key={cid || cName}
                                    type="button"
                                    onClick={() => setSelectedCountryFilter(cid || cName)}
                                    className={`px-4 py-2 rounded-xl text-xs font-bold transition-all shrink-0 flex items-center gap-1.5 cursor-pointer ${
                                        isSelected
                                            ? 'bg-[#0f7a6c] text-white shadow-sm shadow-[#0f7a6c]/20'
                                            : 'bg-white dark:bg-slate-800 text-slate-600 dark:text-slate-300 border border-slate-200/70 dark:border-slate-700 hover:bg-slate-50 dark:hover:bg-slate-700'
                                    }`}
                                >
                                    <span>{flag}{cName}</span>
                                    <span className={`text-[10px] px-1.5 py-0.5 rounded-full ${isSelected ? 'bg-white/20 text-white' : 'bg-slate-100 dark:bg-slate-700 text-slate-500'}`}>
                                        {count}
                                    </span>
                                </button>
                            );
                        })}
                    </div>

                    {filteredPackages.length === 0 ? (
                        <div className="flex flex-col items-center justify-center py-20 bg-white dark:bg-slate-900 rounded-3xl border border-slate-100 dark:border-slate-800 text-center">
                            <div className="w-16 h-16 rounded-full bg-slate-100 dark:bg-slate-800 flex items-center justify-center mb-4">
                                <Package size={28} className="text-slate-300 dark:text-slate-600" />
                            </div>
                            <p className="text-slate-500 dark:text-slate-400 font-medium">{p('noPackages')}</p>
                            <p className="text-slate-400 dark:text-slate-500 text-sm mt-1">{p('noPackagesHint')}</p>
                        </div>
                    ) : (
                        <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-5">
                            <AnimatePresence>
                                {filteredPackages.map((pkg) => (
                                    <PackageCard
                                        key={pkg.id}
                                        pkg={pkg}
                                        onEdit={canUpdatePackage ? handleEditPkgClick : null}
                                        onDelete={canDeletePackage ? (id) => executeDelete('package', id, pkg.nameAr || pkg.name_ar || pkg.name || '') : null}
                                        explanationLanguages={explanationLanguages}
                                        countries={sortedCountries}
                                    />
                                ))}
                            </AnimatePresence>
                        </div>
                    )}
                </section>
            )}

            {canViewFaqs && (
                <section>
                    <div className="flex items-center justify-between mb-5">
                        <h2 className="text-slate-800 dark:text-white font-bold text-base">{p('faqTitle')}</h2>
                        {canCreateFaq && (
                            <button
                                onClick={() => { setEditingFaq(null); setIsFaqFormOpen((prev) => !prev) }}
                                className="flex items-center gap-2 px-4 py-2.5 bg-[#0f7a6c] text-white rounded-xl text-sm font-semibold hover:bg-[#0d6b5e] transition-colors shadow-sm shadow-[#0f7a6c]/20"
                            >
                                <Plus size={16} className={`transition-transform duration-300 ${isFaqFormOpen ? 'rotate-45' : ''}`} />
                                {isFaqFormOpen ? p('cancel') : p('createFaq')}
                            </button>
                        )}
                    </div>

                    <AnimatePresence initial={false}>
                        {(isFaqFormOpen || editingFaq) && (
                            <motion.div
                                initial={{ height: 0, opacity: 0 }}
                                animate={{ height: 'auto', opacity: 1 }}
                                exit={{ height: 0, opacity: 0 }}
                                className="mb-5 overflow-hidden"
                            >
                                <FaqInlineForm
                                    onSave={handleSaveFaq}
                                    editingFaq={editingFaq}
                                    onCancelEdit={() => { setEditingFaq(null); setIsFaqFormOpen(false) }}
                                />
                            </motion.div>
                        )}
                    </AnimatePresence>

                    <FaqTable
                        faqs={faqs}
                        onEdit={canUpdateFaq ? handleEditFaqClick : null}
                        onDelete={canDeleteFaq ? (id) => {
                            const faq = faqs.find(f => f.id === id);
                            executeDelete('faq', id, faq?.question || '');
                        } : null}
                    />
                </section>
            )}

            <PackageFormPanel
                isOpen={pkgPanelOpen}
                onClose={() => setPkgPanelOpen(false)}
                onSave={handleSavePkg}
                onRemoveDiscount={handleRemoveDiscount}
                editingPackage={editingPkg}
                explanationLanguages={explanationLanguages}
                countries={sortedCountries}
            />
        </div>
    )
}
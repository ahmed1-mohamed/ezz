import { useState, useEffect, useCallback, useMemo } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { Plus, Package } from 'lucide-react'
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
import { normalizeCountries, getCountryName } from '@/shared/utils/countryUtils'

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
                image: pkgData.image || pkg.image || null,
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
        let faqData = faq
        try {
            const res = await adminPackagesApi.fetchFaqById(faq.id || faq._id)
            if (res?.data) {
                faqData = res.data
            } else if (res && typeof res === 'object') {
                faqData = res
            }
        } catch (error) {
            console.warn('Failed to fetch single FAQ details, falling back to table data:', error)
        }

        const mappedFaq = {
            id: faqData.id || faqData._id || faq.id || faq._id,
            question: typeof faqData.question === 'object' && faqData.question !== null ? faqData.question.ar || faqData.question.en || '' : faqData.question || faq.question || '',
            question_en: typeof faqData.question === 'object' && faqData.question !== null ? faqData.question.en || faqData.question.ar || '' : faqData.question_en || faq.question_en || '',
            answer: typeof faqData.answer === 'object' && faqData.answer !== null ? faqData.answer.ar || faqData.answer.en || '' : faqData.answer || faq.answer || '',
            answer_en: typeof faqData.answer === 'object' && faqData.answer !== null ? faqData.answer.en || faqData.answer.ar || '' : faqData.answer_en || faq.answer_en || '',
        }

        setEditingFaq(mappedFaq)
        setIsFaqFormOpen(true)
    }

    if (isLoading) {
        return (
            <div className="flex h-[60vh] items-center justify-center">
                <Spinner />
            </div>
        )
    }

    const canViewPackages = hasPermission('packages.read') || hasPermission('packages_faqs.read') || isSuperAdmin
    const canCreatePackage = hasPermission('packages.create') || isSuperAdmin
    const canUpdatePackage = hasPermission('packages.update') || isSuperAdmin
    const canDeletePackage = hasPermission('packages.delete') || isSuperAdmin

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
                    <div className="flex items-center justify-between mb-5">
                        <p className="text-slate-500 dark:text-slate-400 text-sm">
                            {filteredPackages.length} {p('available')}
                        </p>
                        {canCreatePackage && (
                            <button
                                onClick={() => { setEditingPkg(null); setPkgPanelOpen(true) }}
                                className="flex items-center gap-2 px-4 py-2.5 bg-[#0f7a6c] text-white rounded-xl text-sm font-semibold hover:bg-[#0d6b5e] transition-colors shadow-sm shadow-[#0f7a6c]/20"
                            >
                                <Plus size={16} />
                                {p('createPackage')}
                            </button>
                        )}
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
                        {countries.map((c) => {
                            const cid = c.id || c._id;
                            const cName = getCountryName(c, isRtl);
                            const flag = c.flag ? `${c.flag} ` : '';
                            const isSelected = selectedCountryFilter === cid || selectedCountryFilter === cName || selectedCountryFilter === c.name || selectedCountryFilter === c.nameEn;
                            const count = packages.filter(p => {
                                const pCountry = p.countryRaw?._id || p.countryRaw?.id || p.country;
                                return String(pCountry) === String(cid) || p.country === cName || p.country === c.name || p.country === c.nameEn;
                            }).length;

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
                                        countries={countries}
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
                editingPackage={editingPkg}
                explanationLanguages={explanationLanguages}
                countries={countries}
            />
        </div>
    )
}
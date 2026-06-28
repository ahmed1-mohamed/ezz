import { useState, useEffect, useCallback } from 'react'
import { AnimatePresence } from 'framer-motion'
import { Plus, Package } from 'lucide-react'
import { useTranslation } from 'react-i18next'
import Spinner from '@/shared/components/Spinner'
import { adminPackagesApi } from '@/shared/services/api/adminPackagesApi'
import PackageCard from './components/PackageCard'
import PackageFormPanel from './components/PackageFormPanel'
import DeleteConfirmModal from './components/DeleteConfirmModal'
import FaqInlineForm from './components/FaqInlineForm'
import FaqTable from './components/FaqTable'

export default function AdminPackages() {
    const { t } = useTranslation()
    const p = (key) => t(`adminDashboard.packages.${key}`)

    const [packages, setPackages] = useState([])
    const [faqs, setFaqs] = useState([])
    const [loading, setLoading] = useState(true)

    const [pkgPanelOpen, setPkgPanelOpen] = useState(false)
    const [editingPkg, setEditingPkg] = useState(null)
    const [editingFaq, setEditingFaq] = useState(null)
    const [deleteConfirm, setDeleteConfirm] = useState({ open: false, type: null, id: null })

    const loadAll = useCallback(async () => {
        setLoading(true)
        const [pkgRes, faqRes] = await Promise.all([
            adminPackagesApi.fetchPackages(),
            adminPackagesApi.fetchFaqs(),
        ])
        if (pkgRes?.data) setPackages(pkgRes.data)
        if (faqRes?.data) setFaqs(faqRes.data)
        setLoading(false)
    }, [])

    useEffect(() => {
        // eslint-disable-next-line react-hooks/set-state-in-effect
        loadAll()
    }, [loadAll])

    const handleSavePkg = async (data) => {
        if (editingPkg) {
            const res = await adminPackagesApi.updatePackage(editingPkg.id, data)
            if (res?.success) setPackages((prev) => prev.map((p) => (p.id === editingPkg.id ? { ...p, ...data } : p)))
        } else {
            const res = await adminPackagesApi.createPackage(data)
            if (res?.success) setPackages((prev) => [...prev, res.data])
        }
        setPkgPanelOpen(false)
    }

    const executeDelete = async () => {
        if (deleteConfirm.type === 'package') {
            await adminPackagesApi.deletePackage(deleteConfirm.id)
            setPackages((prev) => prev.filter((p) => p.id !== deleteConfirm.id))
        } else {
            await adminPackagesApi.deleteFaq(deleteConfirm.id)
            setFaqs((prev) => prev.filter((f) => f.id !== deleteConfirm.id))
        }
        setDeleteConfirm({ open: false, type: null, id: null })
    }

    const handleSaveFaq = async (data) => {
        if (editingFaq) {
            const res = await adminPackagesApi.updateFaq(editingFaq.id, data)
            if (res?.success) setFaqs((prev) => prev.map((f) => (f.id === editingFaq.id ? { ...f, ...data } : f)))
        } else {
            const res = await adminPackagesApi.createFaq(data)
            if (res?.success) setFaqs((prev) => [...prev, res.data])
        }
        setEditingFaq(null)
    }

    if (loading) {
        return (
            <div className="flex items-center justify-center h-60">
                <Spinner />
            </div>
        )
    }

    return (
        <div className="space-y-8">
            <section>
                <div className="flex items-center justify-between mb-5">
                    <p className="text-slate-500 dark:text-slate-400 text-sm">
                        {packages.length} {p('available')}
                    </p>
                    <button
                        onClick={() => { setEditingPkg(null); setPkgPanelOpen(true) }}
                        className="flex items-center gap-2 px-4 py-2.5 bg-[#0f7a6c] text-white rounded-xl text-sm font-semibold hover:bg-[#0d6b5e] transition-colors shadow-sm shadow-[#0f7a6c]/20"
                    >
                        <Plus size={16} />
                        {p('createPackage')}
                    </button>
                </div>

                {packages.length === 0 ? (
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
                            {packages.map((pkg) => (
                                <PackageCard
                                    key={pkg.id}
                                    pkg={pkg}
                                    onEdit={(p) => { setEditingPkg(p); setPkgPanelOpen(true) }}
                                    onDelete={(id) => setDeleteConfirm({ open: true, type: 'package', id })}
                                />
                            ))}
                        </AnimatePresence>
                    </div>
                )}
            </section>

            <section>
                <div className="flex items-center justify-between mb-5">
                    <h2 className="text-slate-800 dark:text-white font-bold text-base">{p('faqTitle')}</h2>
                    <button
                        onClick={() => setEditingFaq(null)}
                        className="flex items-center gap-2 px-4 py-2.5 bg-[#0f7a6c] text-white rounded-xl text-sm font-semibold hover:bg-[#0d6b5e] transition-colors shadow-sm shadow-[#0f7a6c]/20"
                    >
                        <Plus size={16} />
                        {p('createFaq')}
                    </button>
                </div>

                <div className="mb-5">
                    <FaqInlineForm
                        onSave={handleSaveFaq}
                        editingFaq={editingFaq}
                        onCancelEdit={() => setEditingFaq(null)}
                    />
                </div>

                <FaqTable
                    faqs={faqs}
                    onDelete={(id) => setDeleteConfirm({ open: true, type: 'faq', id })}
                />
            </section>

            <PackageFormPanel
                isOpen={pkgPanelOpen}
                onClose={() => setPkgPanelOpen(false)}
                onSave={handleSavePkg}
                editingPackage={editingPkg}
            />

            <DeleteConfirmModal
                isOpen={deleteConfirm.open}
                onClose={() => setDeleteConfirm({ open: false, type: null, id: null })}
                onConfirm={executeDelete}
                label={deleteConfirm.type === 'package' ? p('deletePackageLabel') : p('deleteFaqLabel')}
            />
        </div>
    )
}
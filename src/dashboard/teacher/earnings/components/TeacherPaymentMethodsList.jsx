import { useState } from 'react'
import {
  Building2,
  Smartphone,
  Zap,
  Globe,
  Star,
  ShieldCheck,
  Clock,
  Copy,
  Check,
  Edit2,
  Trash2,
  Plus,
  CreditCard,
  Eye,
  Wallet,
} from 'lucide-react'

const getMethodIcon = (type) => {
  if (type === 'bank_transfer') return Building2
  if (type === 'mobile_wallet') return Smartphone
  if (type === 'instapay') return Zap
  if (type === 'paypal') return Globe
  return CreditCard
}

const getWalletProviderName = (provider, t) => {
  const map = {
    vodafone_cash: t('teacher.earnings.methods.walletProviders.vodafone_cash', 'فودافون كاش'),
    orange_cash: t('teacher.earnings.methods.walletProviders.orange_cash', 'أورنج كاش'),
    etisalat_cash: t('teacher.earnings.methods.walletProviders.etisalat_cash', 'اتصالات كاش'),
    we_pay: t('teacher.earnings.methods.walletProviders.we_pay', 'وي باي (WE Pay)'),
    smart_wallet: t('teacher.earnings.methods.walletProviders.smart_wallet', 'محفظة ذكية'),
  }
  return map[provider] || provider || t('teacher.earnings.methods.walletProviders.other', 'محفظة إلكترونية')
}

export default function TeacherPaymentMethodsList({
  methods = [],
  isLoading,
  onAdd,
  onEdit,
  onDelete,
  onSetDefault,
  onViewProof,
  t,
}) {
  const [copiedField, setCopiedField] = useState(null)
  const handleCopy = (key, text) => {
    if (!text) return
    navigator.clipboard?.writeText(String(text))
    setCopiedField(key)
    setTimeout(() => {
      setCopiedField(null)
    }, 2000)
  }
  if (isLoading && methods.length === 0) {
    return (
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
        {Array.from({ length: 2 }).map((_, idx) => (
          <div
            key={idx}
            className="p-6 rounded-3xl bg-white dark:bg-slate-900 border border-slate-100 dark:border-slate-800 shadow-soft animate-pulse space-y-4"
          >
            <div className="flex items-center justify-between">
              <div className="w-12 h-12 rounded-2xl bg-slate-200 dark:bg-slate-800" />
              <div className="h-6 w-20 rounded-full bg-slate-200 dark:bg-slate-800" />
            </div>
            <div className="h-5 w-1/2 rounded bg-slate-200 dark:bg-slate-800" />
            <div className="h-4 w-3/4 rounded bg-slate-100 dark:bg-slate-800/60" />
            <div className="h-10 rounded-xl bg-slate-100 dark:bg-slate-800/40" />
          </div>
        ))}
      </div>
    )
  }
  if (methods.length === 0) {
    return (
      <div className="p-8 sm:p-12 text-center rounded-3xl bg-white dark:bg-slate-900 border border-slate-100 dark:border-slate-800 shadow-soft space-y-4">
        <div className="w-16 h-16 rounded-3xl bg-[#005953]/10 dark:bg-[#005953]/20 text-[#005953] dark:text-brand-400 flex items-center justify-center mx-auto">
          <Wallet size={32} />
        </div>
        <div className="max-w-md mx-auto space-y-1.5">
          <h3 className="text-lg font-bold text-slate-800 dark:text-white">
            {t('teacher.earnings.methods.noMethods', 'لم تقم بإضافة أي طريقة دفع حتى الآن')}
          </h3>
          <p className="text-xs text-slate-500 dark:text-slate-400 leading-relaxed">
            {t('teacher.earnings.methods.noMethodsDesc', 'أضف حسابك البنكي أو محفظتك الإلكترونية لاستلام مستحقاتك وأرباحك بانتظام.')}
          </p>
        </div>
        <button
          type="button"
          onClick={onAdd}
          className="inline-flex items-center gap-2 px-6 py-2.5 rounded-xl bg-[#005953] hover:bg-[#004742] text-white text-xs font-bold transition-all shadow-md hover:shadow-lg cursor-pointer"
        >
          <Plus size={16} />
          <span>{t('teacher.earnings.methods.addBtn', 'إضافة طريقة دفع')}</span>
        </button>
      </div>
    )
  }
  return (
    <div className="space-y-4">
      <div className="flex items-center justify-between flex-wrap gap-3">
        <div>
          <h2 className="text-base sm:text-lg font-black text-slate-800 dark:text-white">
            {t('teacher.earnings.methods.title', 'طرق الدفع المعتمَدة')}
          </h2>
          <p className="text-xs text-slate-400 dark:text-slate-500">
            {t('teacher.earnings.methods.subtitle', 'الحسابات والمحافظ المفعلة لاستلام مستحقاتك الشهرية')}
          </p>
        </div>
        <button
          type="button"
          onClick={onAdd}
          className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-[#005953] hover:bg-[#004742] text-white text-xs font-bold transition-all shadow-sm hover:shadow cursor-pointer"
        >
          <Plus size={16} />
          <span>{t('teacher.earnings.methods.addBtn', 'إضافة طريقة دفع')}</span>
        </button>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
        {methods.map((item) => {
          const Icon = getMethodIcon(item.type)
          const isBank = item.type === 'bank_transfer'
          const isWallet = item.type === 'mobile_wallet'
          const isInstapay = item.type === 'instapay'
          const isPaypal = item.type === 'paypal'
          const methodTitle = isBank
            ? item.bankName || t('teacher.earnings.methods.types.bank_transfer', 'حساب بنكي')
            : isWallet
            ? getWalletProviderName(item.walletProvider, t)
            : isInstapay
            ? t('teacher.earnings.methods.types.instapay', 'إنستاباي (InstaPay)')
            : isPaypal
            ? t('teacher.earnings.methods.types.paypal', 'باي بال (PayPal)')
            : t('teacher.earnings.methods.types.other', 'طريقة أخرى')
          return (
            <div
              key={item.id}
              className={`p-6 rounded-3xl bg-white dark:bg-slate-900 border transition-all shadow-soft hover:shadow-md flex flex-col justify-between text-start relative overflow-hidden ${
                item.isDefault
                  ? 'border-[#005953] dark:border-brand-400/60 ring-2 ring-[#005953]/10 dark:ring-brand-400/20'
                  : 'border-slate-100 dark:border-slate-800'
              }`}
            >
              <div className="space-y-4">
                <div className="flex items-start justify-between gap-3">
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 rounded-2xl bg-[#005953]/10 dark:bg-[#005953]/20 text-[#005953] dark:text-brand-400 flex items-center justify-center shrink-0">
                      <Icon size={24} />
                    </div>
                    <div>
                      <h3 className="text-base font-extrabold text-slate-800 dark:text-white flex items-center gap-2">
                        <span>{methodTitle}</span>
                      </h3>
                      <p className="text-xs text-slate-400 dark:text-slate-500 font-semibold mt-0.5">
                        {item.accountHolderName}
                      </p>
                    </div>
                  </div>
                  <div className="flex flex-col items-end gap-1.5 shrink-0">
                    {item.isDefault && (
                      <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full text-[11px] font-bold bg-[#005953]/10 dark:bg-[#005953]/30 text-[#005953] dark:text-brand-300 border border-[#005953]/20 dark:border-brand-400/30">
                        <Star size={12} className="fill-[#005953] dark:fill-brand-300" />
                        {t('teacher.earnings.methods.defaultBadge', 'أساسية')}
                      </span>
                    )}
                    {item.isConfirmed ? (
                      <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full text-[10px] font-bold bg-emerald-50 dark:bg-emerald-950/40 text-emerald-700 dark:text-emerald-300 border border-emerald-200/60 dark:border-emerald-800/40">
                        <ShieldCheck size={12} />
                        {t('teacher.earnings.methods.confirmedBadge', 'معتمدة')}
                      </span>
                    ) : (
                      <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full text-[10px] font-bold bg-amber-50 dark:bg-amber-950/40 text-amber-700 dark:text-amber-300 border border-amber-200/60 dark:border-amber-800/40">
                        <Clock size={12} />
                        {t('teacher.earnings.methods.pendingBadge', 'قيد المراجعة')}
                      </span>
                    )}
                  </div>
                </div>
                <div className="p-3.5 rounded-2xl bg-slate-50 dark:bg-slate-800/40 border border-slate-100 dark:border-slate-800 space-y-2 text-xs">
                  {isBank && (
                    <>
                      {item.accountNumber && (
                        <div className="flex items-center justify-between gap-2">
                          <span className="text-slate-400 dark:text-slate-500 font-medium">
                            {t('teacher.earnings.methods.accountNumber', 'رقم الحساب')}:
                          </span>
                          <div className="flex items-center gap-1.5 font-bold font-mono text-slate-800 dark:text-white">
                            <span dir="ltr">{item.accountNumber}</span>
                            <button
                              type="button"
                              onClick={() => handleCopy(`acc_${item.id}`, item.accountNumber)}
                              className="p-1 rounded-md text-slate-400 hover:text-slate-700 dark:hover:text-slate-200 transition-colors cursor-pointer"
                              title={t('teacher.earnings.methods.copySuccess', 'نسخ')}
                            >
                              {copiedField === `acc_${item.id}` ? <Check size={14} className="text-emerald-500" /> : <Copy size={14} />}
                            </button>
                          </div>
                        </div>
                      )}
                      {item.iban && (
                        <div className="flex items-center justify-between gap-2">
                          <span className="text-slate-400 dark:text-slate-500 font-medium">
                            {t('teacher.earnings.methods.iban', 'الآيبان (IBAN)')}:
                          </span>
                          <div className="flex items-center gap-1.5 font-bold font-mono text-slate-800 dark:text-white truncate max-w-[200px]">
                            <span dir="ltr" className="truncate">{item.iban}</span>
                            <button
                              type="button"
                              onClick={() => handleCopy(`iban_${item.id}`, item.iban)}
                              className="p-1 rounded-md text-slate-400 hover:text-slate-700 dark:hover:text-slate-200 transition-colors cursor-pointer shrink-0"
                              title={t('teacher.earnings.methods.copySuccess', 'نسخ')}
                            >
                              {copiedField === `iban_${item.id}` ? <Check size={14} className="text-emerald-500" /> : <Copy size={14} />}
                            </button>
                          </div>
                        </div>
                      )}
                      {item.swiftCode && (
                        <div className="flex items-center justify-between gap-2">
                          <span className="text-slate-400 dark:text-slate-500 font-medium">
                            {t('teacher.earnings.methods.swiftCode', 'كود السويفت')}:
                          </span>
                          <span className="font-bold font-mono text-slate-800 dark:text-white" dir="ltr">{item.swiftCode}</span>
                        </div>
                      )}
                      {item.branchName && (
                        <div className="flex items-center justify-between gap-2">
                          <span className="text-slate-400 dark:text-slate-500 font-medium">
                            {t('teacher.earnings.methods.branchName', 'الفرع')}:
                          </span>
                          <span className="font-bold text-slate-800 dark:text-white">{item.branchName}</span>
                        </div>
                      )}
                    </>
                  )}
                  {isWallet && (
                    <div className="flex items-center justify-between gap-2">
                      <span className="text-slate-400 dark:text-slate-500 font-medium">
                        {t('teacher.earnings.methods.walletNumber', 'رقم المحفظة')}:
                      </span>
                      <div className="flex items-center gap-1.5 font-bold font-mono text-slate-800 dark:text-white">
                        <span dir="ltr">{item.walletNumber}</span>
                        <button
                          type="button"
                          onClick={() => handleCopy(`wallet_${item.id}`, item.walletNumber)}
                          className="p-1 rounded-md text-slate-400 hover:text-slate-700 dark:hover:text-slate-200 transition-colors cursor-pointer"
                          title={t('teacher.earnings.methods.copySuccess', 'نسخ')}
                        >
                          {copiedField === `wallet_${item.id}` ? <Check size={14} className="text-emerald-500" /> : <Copy size={14} />}
                        </button>
                      </div>
                    </div>
                  )}
                  {isInstapay && (
                    <>
                      <div className="flex items-center justify-between gap-2">
                        <span className="text-slate-400 dark:text-slate-500 font-medium">
                          {t('teacher.earnings.methods.instapayAddress', 'عنوان IPA')}:
                        </span>
                        <div className="flex items-center gap-1.5 font-bold font-mono text-slate-800 dark:text-white">
                          <span dir="ltr">{item.instapayAddress}</span>
                          <button
                            type="button"
                            onClick={() => handleCopy(`insta_${item.id}`, item.instapayAddress)}
                            className="p-1 rounded-md text-slate-400 hover:text-slate-700 dark:hover:text-slate-200 transition-colors cursor-pointer"
                          >
                            {copiedField === `insta_${item.id}` ? <Check size={14} className="text-emerald-500" /> : <Copy size={14} />}
                          </button>
                        </div>
                      </div>
                      {item.phoneNumber && (
                        <div className="flex items-center justify-between gap-2">
                          <span className="text-slate-400 dark:text-slate-500 font-medium">
                            {t('teacher.earnings.modal.phoneNumberLabel', 'الهاتف')}:
                          </span>
                          <span className="font-bold font-mono text-slate-800 dark:text-white" dir="ltr">{item.phoneNumber}</span>
                        </div>
                      )}
                    </>
                  )}
                  {isPaypal && (
                    <div className="flex items-center justify-between gap-2">
                      <span className="text-slate-400 dark:text-slate-500 font-medium">
                        {t('teacher.earnings.methods.paypalEmail', 'بريد PayPal')}:
                      </span>
                      <div className="flex items-center gap-1.5 font-bold font-mono text-slate-800 dark:text-white truncate max-w-[200px]">
                        <span dir="ltr" className="truncate">{item.paypalEmail}</span>
                        <button
                          type="button"
                          onClick={() => handleCopy(`pp_${item.id}`, item.paypalEmail)}
                          className="p-1 rounded-md text-slate-400 hover:text-slate-700 dark:hover:text-slate-200 transition-colors cursor-pointer shrink-0"
                        >
                          {copiedField === `pp_${item.id}` ? <Check size={14} className="text-emerald-500" /> : <Copy size={14} />}
                        </button>
                      </div>
                    </div>
                  )}
                </div>
                {item.notes && (
                  <p className="text-xs text-slate-500 dark:text-slate-400 italic line-clamp-2 px-1">
                    &quot;{item.notes}&quot;
                  </p>
                )}
                {item.verificationImage && (
                  <button
                    type="button"
                    onClick={() => onViewProof(item.verificationImage, t('teacher.earnings.methods.viewVerification', 'معاينة إثبات الحساب'))}
                    className="inline-flex items-center gap-1.5 text-xs font-bold text-[#005953] dark:text-brand-400 hover:underline cursor-pointer"
                  >
                    <Eye size={14} />
                    <span>{t('teacher.earnings.methods.viewVerification', 'معاينة إثبات الحساب')}</span>
                  </button>
                )}
              </div>
              <div className="flex items-center justify-between gap-2 pt-4 mt-4 border-t border-slate-100 dark:border-slate-800">
                {!item.isDefault ? (
                  <button
                    type="button"
                    onClick={() => onSetDefault(item.id)}
                    className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl text-xs font-bold text-slate-600 hover:text-[#005953] dark:text-slate-300 dark:hover:text-brand-400 hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors cursor-pointer"
                  >
                    <Star size={14} />
                    <span>{t('teacher.earnings.methods.setDefaultBtn', 'تعيين كأساسية')}</span>
                  </button>
                ) : (
                  <div />
                )}
                <div className="flex items-center gap-1 ms-auto">
                  <button
                    type="button"
                    onClick={() => onEdit(item)}
                    className="p-2 rounded-xl text-slate-500 hover:text-slate-700 dark:text-slate-400 dark:hover:text-white hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors cursor-pointer"
                    title={t('teacher.earnings.methods.editBtn', 'تعديل')}
                  >
                    <Edit2 size={16} />
                  </button>
                  <button
                    type="button"
                    onClick={() => onDelete(item)}
                    className="p-2 rounded-xl text-rose-500 hover:text-rose-700 hover:bg-rose-50 dark:hover:bg-rose-950/40 transition-colors cursor-pointer"
                    title={t('teacher.earnings.methods.deleteBtn', 'حذف')}
                  >
                    <Trash2 size={16} />
                  </button>
                </div>
              </div>
            </div>
          )
        })}
      </div>
    </div>
  )
}


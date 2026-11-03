import { useState, useMemo } from 'react';
import { useTranslation } from 'react-i18next';
import { CreditCard, Smartphone, Lock, ArrowRight, ArrowLeft } from 'lucide-react';
import { useNavigate, useLocation } from 'react-router-dom';

export default function ParentCheckout() {
  const { t, i18n } = useTranslation();
  const isRtl = i18n?.language?.startsWith('ar') ?? true;
  const [selectedMethod, setSelectedMethod] = useState('bank_transfer');
  const navigate = useNavigate();
  const location = useLocation();
  const selectedPackage = location.state?.package || null;
  const packageSummary = useMemo(() => {
    const name = selectedPackage?.name || t('parentPackages.advancedPackage', 'الباقة المتقدمة');
    const sessions = selectedPackage?.sessionsCount || 24;
    const price = Number(selectedPackage?.price) || 800;
    const tax = Number((price * 0.14).toFixed(2));
    const total = Number((price + tax).toFixed(2));
    return { name, sessions, price, tax, total };
  }, [selectedPackage, t]);
  return (
    <div className="min-h-screen bg-[#ecf0f1] dark:bg-slate-950 p-4 sm:p-8 font-sans transition-colors" dir={isRtl ? 'rtl' : 'ltr'}>
      <div className="max-w-7xl mx-auto">
        <div className="flex items-center gap-4 mb-8">
          <button
            onClick={() => navigate(-1)}
            className="p-2 hover:bg-slate-200 dark:hover:bg-slate-800 rounded-full transition-colors cursor-pointer"
            title={t('parentPackages.back', isRtl ? 'رجوع' : 'Back')}
          >
            {isRtl ? <ArrowRight className="w-6 h-6 text-slate-700 dark:text-slate-200" /> : <ArrowLeft className="w-6 h-6 text-slate-700 dark:text-slate-200" />}
          </button>
          <div>
            <h1 className="text-3xl font-extrabold text-slate-800 dark:text-white">
              {t('parentPackages.checkoutTitle', 'إتمام الدفع')}
            </h1>
            <p className="text-slate-500 dark:text-slate-400 mt-1 text-sm font-medium">
              {t('parentPackages.checkoutSubtitle', 'اختر طريقة الدفع المناسبة لك')}
            </p>
          </div>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          <div className="lg:col-span-2 space-y-6">
            <div className="bg-white dark:bg-slate-900 rounded-2xl p-6 shadow-sm border border-slate-100 dark:border-slate-800 transition-colors">
              <h2 className="text-lg font-bold text-slate-800 dark:text-white mb-6">
                {t('parentPackages.selectPaymentMethod', 'اختر طريقة الدفع')}
              </h2>
              <div className="space-y-4">
                <label
                  className={`flex items-center p-4 rounded-xl border-2 cursor-pointer transition-all ${
                    selectedMethod === 'credit_card'
                      ? 'border-[#0f7a6c] bg-[#0f7a6c]/5 dark:bg-[#0f7a6c]/10'
                      : 'border-slate-100 dark:border-slate-800 hover:border-slate-200 dark:hover:border-slate-700'
                  }`}
                  onClick={() => setSelectedMethod('credit_card')}
                >
                  <div className="flex items-center justify-center w-6 h-6 rounded-full border-2 border-slate-300 dark:border-slate-600 me-3 shrink-0">
                    {selectedMethod === 'credit_card' && <div className="w-3 h-3 rounded-full bg-[#0f7a6c]" />}
                  </div>
                  <div className="flex-1">
                    <div className="font-bold text-slate-800 dark:text-white">
                      {t('parentPackages.creditCard', 'بطاقة ائتمان / خصم')}
                    </div>
                    <div className="text-xs text-slate-400 dark:text-slate-400 mt-0.5">
                      {t('parentPackages.creditCardHint', 'فيزا، ماستركارد، أو ميزة')}
                    </div>
                  </div>
                  <div className="w-10 h-10 rounded-full bg-slate-50 dark:bg-slate-800 flex items-center justify-center text-slate-500 dark:text-slate-300 shrink-0">
                    <CreditCard className="w-5 h-5" />
                  </div>
                </label>
                <label
                  className={`flex items-center p-4 rounded-xl border-2 cursor-pointer transition-all ${
                    selectedMethod === 'wallet'
                      ? 'border-[#0f7a6c] bg-[#0f7a6c]/5 dark:bg-[#0f7a6c]/10'
                      : 'border-slate-100 dark:border-slate-800 hover:border-slate-200 dark:hover:border-slate-700'
                  }`}
                  onClick={() => setSelectedMethod('wallet')}
                >
                  <div className="flex items-center justify-center w-6 h-6 rounded-full border-2 border-slate-300 dark:border-slate-600 me-3 shrink-0">
                    {selectedMethod === 'wallet' && <div className="w-3 h-3 rounded-full bg-[#0f7a6c]" />}
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center gap-2">
                      <div className="font-bold text-slate-800 dark:text-white">
                        {t('parentPackages.eWallet', 'محفظة إلكترونية')}
                      </div>
                      <span className="w-1.5 h-1.5 rounded-full bg-red-500"></span>
                    </div>
                    <div className="text-xs text-slate-400 dark:text-slate-400 mt-0.5">
                      {t('parentPackages.eWalletHint', 'فودافون كاش، أورنج، وي، إتصالات')}
                    </div>
                  </div>
                  <div className="w-10 h-10 rounded-full bg-slate-50 dark:bg-slate-800 flex items-center justify-center text-slate-500 dark:text-slate-300 shrink-0">
                    <Smartphone className="w-5 h-5" />
                  </div>
                </label>
                <label
                  className={`flex items-center p-4 rounded-xl border-2 cursor-pointer transition-all ${
                    selectedMethod === 'bank_transfer'
                      ? 'border-[#0f7a6c] bg-[#0f7a6c]/5 dark:bg-[#0f7a6c]/10'
                      : 'border-slate-100 dark:border-slate-800 hover:border-slate-200 dark:hover:border-slate-700'
                  }`}
                  onClick={() => setSelectedMethod('bank_transfer')}
                >
                  <div className="flex items-center justify-center w-6 h-6 rounded-full border-2 border-slate-300 dark:border-slate-600 me-3 shrink-0">
                    {selectedMethod === 'bank_transfer' && <div className="w-3 h-3 rounded-full bg-[#0f7a6c]" />}
                  </div>
                  <div className="flex-1">
                    <div className="font-bold text-slate-800 dark:text-white">
                      {t('parentPackages.bankTransfer', 'تحويل بنكي')}
                    </div>
                    <div className="text-xs text-slate-400 dark:text-slate-400 mt-0.5">
                      {t('parentPackages.bankTransferHint', 'تحويل مباشر لحساب المنصة')}
                    </div>
                  </div>
                  <div className="w-10 h-10 rounded-full bg-slate-50 dark:bg-slate-800 flex items-center justify-center text-slate-500 dark:text-slate-300 shrink-0">
                    <CreditCard className="w-5 h-5" />
                  </div>
                </label>
              </div>
            </div>
            <div className="bg-white dark:bg-slate-900 rounded-2xl p-6 shadow-sm border border-slate-100 dark:border-slate-800 transition-colors">
              <h2 className="text-lg font-bold text-slate-800 dark:text-white mb-6">
                {t('parentPackages.paymentDetails', 'تفاصيل الدفع')}
              </h2>
              <div className="space-y-4 mb-8">
                {selectedMethod === 'bank_transfer' && (
                  <div className="bg-slate-50 dark:bg-slate-800/60 p-6 rounded-xl border border-slate-100 dark:border-slate-800">
                    <h3 className="font-bold text-slate-800 dark:text-white text-lg mb-4">
                      {t('parentPackages.bankAccountDetails', 'تفاصيل الحساب البنكي')}
                    </h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div className="p-3 bg-white dark:bg-slate-900 rounded-lg border border-slate-200 dark:border-slate-700">
                        <span className="text-slate-400 text-xs block mb-1">
                          {t('parentPackages.bankName', 'اسم البنك')}
                        </span>
                        <span className="font-bold text-slate-700 dark:text-slate-200">
                          {t('parentPackages.bankNameVal', 'البنك الأهلي المصري')}
                        </span>
                      </div>
                      <div className="p-3 bg-white dark:bg-slate-900 rounded-lg border border-slate-200 dark:border-slate-700">
                        <span className="text-slate-400 text-xs block mb-1">
                          {t('parentPackages.accountName', 'اسم الحساب')}
                        </span>
                        <span className="font-bold text-slate-700 dark:text-slate-200">
                          {t('parentPackages.accountNameVal', 'شركة التعليم الذكي المحدودة')}
                        </span>
                      </div>
                      <div className="p-3 bg-white dark:bg-slate-900 rounded-lg border border-slate-200 dark:border-slate-700">
                        <span className="text-slate-400 text-xs block mb-1">
                          {t('parentPackages.accountNumber', 'رقم الحساب')}
                        </span>
                        <span className="font-bold text-slate-700 dark:text-slate-200 font-mono" dir="ltr">12345678901234</span>
                      </div>
                      <div className="p-3 bg-white dark:bg-slate-900 rounded-lg border border-slate-200 dark:border-slate-700">
                        <span className="text-slate-400 text-xs block mb-1">
                          {t('parentPackages.iban', 'الآيبان (IBAN)')}
                        </span>
                        <span className="font-bold text-slate-700 dark:text-slate-200 font-mono text-xs" dir="ltr">EG123456789012345678901234</span>
                      </div>
                    </div>
                    <div className="text-red-500 dark:text-red-400 text-sm font-medium mt-4">
                      {t('parentPackages.transferNote', 'ملاحظة: بعد إتمام التحويل، يرجى إرسال إيصال التحويل على واتساب:')}{' '}
                      <span className="font-mono" dir="ltr">01234567890</span>
                    </div>
                  </div>
                )}
                {selectedMethod === 'credit_card' && (
                  <div className="text-slate-600 dark:text-slate-300 text-center py-8">
                    {t('parentPackages.creditCardRedirect', 'سيتم توجيهك إلى صفحة الدفع الآمنة لإدخال بيانات بطاقتك.')}
                  </div>
                )}
                {selectedMethod === 'wallet' && (
                  <div className="text-slate-600 dark:text-slate-300 text-center py-8">
                    {t('parentPackages.walletRedirect', 'سيتم توجيهك إلى صفحة الدفع الخاصة بالمحفظة الإلكترونية.')}
                  </div>
                )}
              </div>
              <div className="flex items-center justify-center gap-2 text-slate-500 dark:text-slate-400 text-xs bg-slate-50 dark:bg-slate-800/60 py-3 rounded-lg mb-4">
                <span>{t('parentPackages.secureTransactions', 'جميع المعاملات مؤمنة ومشفرة بتقنية SSL')}</span>
                <Lock className="w-4 h-4 text-[#0f7a6c]" />
              </div>
              <button className="w-full bg-[#0f7a6c] hover:bg-[#0c6559] text-white font-bold py-4 rounded-xl transition-colors flex items-center justify-between px-6 cursor-pointer">
                {isRtl ? <ArrowLeft className="w-5 h-5" /> : <ArrowRight className="w-5 h-5" />}
                <span>
                  {t('parentPackages.confirmPayment', 'تأكيد الدفع')} - {packageSummary.total.toFixed(2)} {t('parentPackages.currency', 'ج.م')}
                </span>
                <span className="w-5" />
              </button>
            </div>
          </div>
          <div className="lg:col-span-1">
            <div className="bg-white dark:bg-slate-900 rounded-2xl p-6 shadow-sm border border-slate-100 dark:border-slate-800 sticky top-6 transition-colors">
              <h2 className="text-lg font-bold text-slate-800 dark:text-white mb-6">
                {t('parentPackages.orderSummary', 'ملخص الطلب')}
              </h2>
              <div className="space-y-6">
                <div>
                  <div className="text-xs text-slate-400 mb-1">{t('parentPackages.package', 'الباقة')}</div>
                  <div className="font-bold text-slate-800 dark:text-white">{packageSummary.name}</div>
                </div>
                <div>
                  <div className="text-xs text-slate-400 mb-1">{t('parentPackages.sessionsCount', 'عدد الحصص')}</div>
                  <div className="font-bold text-slate-800 dark:text-white">
                    {packageSummary.sessions} {t('parentPackages.sessionsUnit', 'حصة شهرياً')}
                  </div>
                </div>
                <div>
                  <div className="text-xs text-slate-400 mb-1">{t('parentPackages.operationType', 'نوع العملية')}</div>
                  <div className="font-bold text-slate-800 dark:text-white">{t('parentPackages.subscriptionRenewal', 'تجديد الاشتراك')}</div>
                </div>
                <div className="border-t border-slate-100 dark:border-slate-800 pt-6 space-y-3">
                  <div className="flex justify-between items-center text-sm">
                    <span className="text-slate-500 dark:text-slate-400">{t('parentPackages.amount', 'المبلغ')}</span>
                    <span className="font-bold text-slate-800 dark:text-white">
                      {packageSummary.price.toFixed(2)} {t('parentPackages.currency', 'ج.م')}
                    </span>
                  </div>
                  <div className="flex justify-between items-center text-sm">
                    <span className="text-slate-500 dark:text-slate-400">{t('parentPackages.tax', 'الضريبة')}</span>
                    <span className="font-bold text-slate-800 dark:text-white">
                      {packageSummary.tax.toFixed(2)} {t('parentPackages.currency', 'ج.م')}
                    </span>
                  </div>
                </div>
                <div className="border-t border-slate-100 dark:border-slate-800 pt-4 flex justify-between items-center">
                  <span className="font-bold text-slate-800 dark:text-white text-lg">{t('parentPackages.total', 'الإجمالي')}</span>
                  <span className="font-bold text-[#0f7a6c] dark:text-brand-400 text-xl">
                    {packageSummary.total.toFixed(2)} {t('parentPackages.currency', 'ج.م')}
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

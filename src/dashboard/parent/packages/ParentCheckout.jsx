/* eslint-disable no-unused-vars */
import { useState } from 'react';
import { motion } from 'framer-motion';
import { CreditCard, Smartphone, Building2, Lock, ArrowRight } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

export default function ParentCheckout() {
    const [selectedMethod, setSelectedMethod] = useState('bank_transfer');
    const navigate = useNavigate();

    return (
        <div className="min-h-screen bg-[#ecf0f1] p-4 sm:p-8 font-sans" dir="rtl">
            <div className="max-w-7xl mx-auto">
                <div className="flex items-center gap-4 mb-8">
                    <button
                        onClick={() => navigate(-1)}
                        className="p-2 hover:bg-slate-200 rounded-full transition-colors"
                    >
                        <ArrowRight className="w-6 h-6 text-slate-700" />
                    </button>
                    <div>
                        <h1 className="text-3xl font-extrabold text-slate-800">إتمام الدفع</h1>
                        <p className="text-slate-500 mt-1 text-sm font-medium">اختر طريقة الدفع المناسبة لك</p>
                    </div>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                    <div className="lg:col-span-2 space-y-6">
                        <div className="bg-white rounded-2xl p-6 shadow-sm border border-slate-100">
                            <h2 className="text-lg font-bold text-slate-800 mb-6">اختر طريقة الدفع</h2>

                            <div className="space-y-4">
                                <label
                                    className={`flex items-center p-4 rounded-xl border-2 cursor-pointer transition-all ${selectedMethod === 'credit_card'
                                            ? 'border-[#0f7a6c] bg-[#0f7a6c]/5'
                                            : 'border-slate-100 hover:border-slate-200'
                                        }`}
                                    onClick={() => setSelectedMethod('credit_card')}
                                >
                                    <div className="flex items-center justify-center w-6 h-6 rounded-full border-2 border-slate-300 ms- shrink-0">
                                        {selectedMethod === 'credit_card' && <div className="w-3 h-3 rounded-full bg-[#0f7a6c]" />}
                                    </div>
                                    <div className="flex-1">
                                        <div className="font-bold text-slate-800">بطاقة ائتمان / خصم</div>
                                        <div className="text-xs text-slate-400 mt-0.5">فيزا، ماستركارد، أو ميزة</div>
                                    </div>
                                    <div className="w-10 h-10 rounded-full bg-slate-50 flex items-center justify-center text-slate-500 shrink-0">
                                        <CreditCard className="w-5 h-5" />
                                    </div>
                                </label>

                                <label
                                    className={`flex items-center p-4 rounded-xl border-2 cursor-pointer transition-all ${selectedMethod === 'wallet'
                                            ? 'border-[#0f7a6c] bg-[#0f7a6c]/5'
                                            : 'border-slate-100 hover:border-slate-200'
                                        }`}
                                    onClick={() => setSelectedMethod('wallet')}
                                >
                                    <div className="flex items-center justify-center w-6 h-6 rounded-full border-2 border-slate-300 ms- shrink-0">
                                        {selectedMethod === 'wallet' && <div className="w-3 h-3 rounded-full bg-[#0f7a6c]" />}
                                    </div>
                                    <div className="flex-1">
                                        <div className="flex items-center gap-2">
                                            <div className="font-bold text-slate-800">محفظة إلكترونية</div>
                                            <span className="w-1.5 h-1.5 rounded-full bg-red-500"></span>
                                        </div>
                                        <div className="text-xs text-slate-400 mt-0.5">فودافون كاش، أورانج كاش، إتصالات كاش</div>
                                    </div>
                                    <div className="w-10 h-10 rounded-full bg-slate-50 flex items-center justify-center text-slate-500 shrink-0">
                                        <Smartphone className="w-5 h-5" />
                                    </div>
                                </label>

                                <label
                                    className={`flex items-center p-4 rounded-xl border-2 cursor-pointer transition-all ${selectedMethod === 'bank_transfer'
                                            ? 'border-[#0f7a6c] bg-[#0f7a6c]/5'
                                            : 'border-slate-100 hover:border-slate-200'
                                        }`}
                                    onClick={() => setSelectedMethod('bank_transfer')}
                                >
                                    <div className="flex items-center justify-center w-6 h-6 rounded-full border-2 border-[#0f7a6c] ms- shrink-0">
                                        {selectedMethod === 'bank_transfer' && <div className="w-3 h-3 rounded-full bg-[#0f7a6c]" />}
                                    </div>
                                    <div className="flex-1">
                                        <div className="font-bold text-slate-800">تحويل بنكي</div>
                                        <div className="text-xs text-slate-400 mt-0.5">تحويل من حسابك البنكي</div>
                                    </div>
                                    <div className="w-10 h-10 rounded-full bg-[#0f7a6c] flex items-center justify-center text-white shrink-0">
                                        <CreditCard className="w-5 h-5" />
                                    </div>
                                </label>
                            </div>
                        </div>

                        <div className="bg-white rounded-2xl p-6 shadow-sm border border-slate-100">
                            <h2 className="text-lg font-bold text-slate-800 mb-6">تفاصيل الدفع</h2>

                            <div className="bg-slate-50 rounded-xl p-6 mb-6">
                                {selectedMethod === 'bank_transfer' && (
                                    <div className="space-y-4">
                                        <h3 className="font-bold text-slate-800 text-lg">تفاصيل الحساب البنكي</h3>
                                        <div className="space-y-2 text-sm">
                                            <div className="flex gap-2 text-slate-600">
                                                <span className="font-bold">اسم البنك:</span>
                                                <span>البنك الأهلي المصري</span>
                                            </div>
                                            <div className="flex gap-2 text-slate-600">
                                                <span className="font-bold">رقم الحساب:</span>
                                                <span className="font-mono">1234567890</span>
                                            </div>
                                            <div className="flex gap-2 text-slate-600">
                                                <span className="font-bold">اسم المستفيد:</span>
                                                <span>أكاديمية منارة العز</span>
                                            </div>
                                        </div>
                                        <div className="text-red-500 text-sm font-medium mt-4">
                                            ملاحظة: بعد إتمام التحويل، يرجى إرسال إيصال التحويل على واتساب: <span className="font-mono" dir="ltr">01234567890</span>
                                        </div>
                                    </div>
                                )}
                                {selectedMethod === 'credit_card' && (
                                    <div className="text-slate-600 text-center py-8">
                                        سيتم توجيهك إلى صفحة الدفع الآمنة لإدخال بيانات بطاقتك.
                                    </div>
                                )}
                                {selectedMethod === 'wallet' && (
                                    <div className="text-slate-600 text-center py-8">
                                        سيتم توجيهك إلى صفحة الدفع الخاصة بالمحفظة الإلكترونية.
                                    </div>
                                )}
                            </div>

                            <div className="flex items-center justify-center gap-2 text-slate-500 text-xs bg-slate-50 py-3 rounded-lg mb-4">
                                <span>جميع المعاملات مؤمنة ومشفرة بتقنية SSL</span>
                                <Lock className="w-4 h-4 text-[#0f7a6c]" />
                            </div>
                            <button className="w-full bg-[#0f7a6c] hover:bg-[#0c6559] text-white font-bold py-4 rounded-xl transition-colors flex items-center justify-between px-6">
                                <ArrowRight className="w-5 h-5 transform rotate-180" />
                                <span>تأكيد الدفع - 912.00 ج.م</span>
                                <span className="w-5" />
                            </button>
                        </div>
                    </div>

                    <div className="lg:col-span-1">
                        <div className="bg-white rounded-2xl p-6 shadow-sm border border-slate-100 sticky top-6">
                            <h2 className="text-lg font-bold text-slate-800 mb-6">ملخص الطلب</h2>

                            <div className="space-y-6">
                                <div>
                                    <div className="text-xs text-slate-400 mb-1">الباقة</div>
                                    <div className="font-bold text-slate-800">الباقة المتقدمة</div>
                                </div>

                                <div>
                                    <div className="text-xs text-slate-400 mb-1">عدد الحصص</div>
                                    <div className="font-bold text-slate-800">24 حصة شهرياً</div>
                                </div>

                                <div>
                                    <div className="text-xs text-slate-400 mb-1">نوع العملية</div>
                                    <div className="font-bold text-slate-800">تجديد الاشتراك</div>
                                </div>

                                <div className="border-t border-slate-100 pt-6 space-y-3">
                                    <div className="flex justify-between items-center text-sm">
                                        <span className="text-slate-500">المبلغ</span>
                                        <span className="font-bold text-slate-800">800 ج.م</span>
                                    </div>
                                    <div className="flex justify-between items-center text-sm">
                                        <span className="text-slate-500">الضريبة</span>
                                        <span className="font-bold text-slate-800">112.00 ج.م</span>
                                    </div>
                                </div>

                                <div className="border-t border-slate-100 pt-4 flex justify-between items-center">
                                    <span className="font-bold text-slate-800 text-lg">الإجمالي</span>
                                    <span className="font-bold text-[#0f7a6c] text-xl">912.00 ج.م</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

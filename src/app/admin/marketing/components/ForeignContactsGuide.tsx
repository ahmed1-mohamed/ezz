"use client";

import { useState } from "react";
import { useLanguage } from "@/contexts/LanguageContext";
import {
  FileText,
  CheckCircle2,
  ShieldCheck,
  Trash2,
  Sparkles,
  ChevronDown,
  ChevronUp,
  Info,
} from "lucide-react";

interface ForeignContactsGuideProps {
  contactType: "email" | "sms" | "whatsapp";
}

export function ForeignContactsGuide({ contactType }: ForeignContactsGuideProps) {
  const { language } = useLanguage();
  const isRTL = language === "ar";
  const [isOpen, setIsOpen] = useState(true);
  const isEmail = contactType === "email";

  return (
    <div className="border border-teal-100 dark:border-teal-900/40 bg-gradient-to-br from-teal-50/50 via-white to-blue-50/30 dark:from-teal-950/20 dark:via-neutral-900 dark:to-neutral-900 rounded-xl overflow-hidden shadow-xs transition-all">
      <button
        type="button"
        onClick={() => setIsOpen((prev) => !prev)}
        className="w-full flex items-center justify-between p-3.5 hover:bg-teal-50/60 dark:hover:bg-teal-950/30 transition-colors text-start"
      >
        <div className="flex items-center gap-2.5">
          <div className="p-1.5 rounded-lg bg-teal-100 dark:bg-teal-900/60 text-teal-700 dark:text-teal-400">
            <Info className="h-4 w-4" />
          </div>
          <div>
            <h3 className="text-xs font-bold text-gray-900 dark:text-gray-100 flex items-center gap-1.5">
              <span>
                {isRTL
                  ? "إرشادات وتنسيق ملف جهات الاتصال الخارجية (.csv / .txt)"
                  : "Foreign Contacts File Formats Guide (.csv / .txt)"}
              </span>
              <span className="text-[10px] px-1.5 py-0.5 rounded-md bg-teal-100 dark:bg-teal-900 text-teal-700 dark:text-teal-300 font-semibold">
                {isRTL ? "تلقائي" : "Auto-Processed"}
              </span>
            </h3>
            <p className="text-[11px] text-gray-500 dark:text-gray-400 mt-0.5">
              {isRTL
                ? "يقوم النظام تلقائياً بتحليل السجلات وتنقيتها وتنسيقها E.164 ومطابقتها"
                : "The system automatically parses, normalizes, and deduplicates records"}
            </p>
          </div>
        </div>
        <div className="text-gray-400 hover:text-gray-600 dark:hover:text-gray-200 transition-transform">
          {isOpen ? <ChevronUp className="h-4 w-4" /> : <ChevronDown className="h-4 w-4" />}
        </div>
      </button>

      {/* Body content */}
      {isOpen && (
        <div className="p-4 pt-1 border-t border-teal-100/60 dark:border-teal-900/30 space-y-4 text-xs">
          {/* Format rules based on type */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-3 pt-2">
            {/* Box 1: Formatting rules */}
            <div className="bg-white/80 dark:bg-neutral-950/60 p-3.5 rounded-lg border border-gray-100 dark:border-neutral-800 space-y-2 text-start">
              <div className="flex items-center gap-2 font-bold text-gray-800 dark:text-gray-200 text-xs">
                <FileText className="h-3.5 w-3.5 text-teal-600 dark:text-teal-400" />
                <span>
                  {isEmail
                    ? isRTL ? "تنسيق حملات البريد الإلكتروني" : "For Email Campaigns"
                    : isRTL ? "تنسيق حملات SMS / واتساب" : "For SMS & WhatsApp Campaigns"}
                </span>
              </div>

              {isEmail ? (
                <ul className="space-y-1.5 text-[11px] text-gray-600 dark:text-gray-400 list-disc list-inside">
                  <li>
                    <strong className="text-gray-800 dark:text-gray-200">
                      {isRTL ? "قائمة قياسية:" : "Standard list:"}
                    </strong>{" "}
                    {isRTL ? "بريد إلكتروني واحد لكل سطر" : "One email per line"}{" "}
                    <code className="bg-gray-100 dark:bg-neutral-800 px-1 py-0.5 rounded text-[10px]">
                      user@example.com
                    </code>
                  </li>
                  <li>
                    <strong className="text-gray-800 dark:text-gray-200">
                      {isRTL ? "مع الاسم:" : "With names:"}
                    </strong>{" "}
                    <code className="bg-gray-100 dark:bg-neutral-800 px-1 py-0.5 rounded text-[10px]">
                      Name, email@example.com
                    </code>{" "}
                    {isRTL ? "أو" : "or"}{" "}
                    <code className="bg-gray-100 dark:bg-neutral-800 px-1 py-0.5 rounded text-[10px]">
                      email@example.com, Name
                    </code>
                  </li>
                  <li>
                    <strong className="text-gray-800 dark:text-gray-200">
                      {isRTL ? "عناوين الأعمدة:" : "With header:"}
                    </strong>{" "}
                    {isRTL
                      ? "يتم تلقائياً تجاهل سطور الهيدر مثل email أو contact"
                      : "Header rows with email or contact are auto-detected & skipped"}
                  </li>
                  <li>
                    <strong className="text-gray-800 dark:text-gray-200">
                      {isRTL ? "تنظيف تلقائي:" : "Auto-clean:"}
                    </strong>{" "}
                    {isRTL
                      ? "إزالة المسافات، علامات التنصيص (\"...\")، الأقواس (<...>)، والفواصل"
                      : "Automatic trimming of whitespace, quotes, angle brackets, and punctuation"}
                  </li>
                </ul>
              ) : (
                <ul className="space-y-1.5 text-[11px] text-gray-600 dark:text-gray-400 list-disc list-inside">
                  <li>
                    <strong className="text-gray-800 dark:text-gray-200">
                      {isRTL ? "الصيغة الدولية:" : "International format:"}
                    </strong>{" "}
                    <code className="bg-gray-100 dark:bg-neutral-800 px-1 py-0.5 rounded text-[10px]">
                      +12025550123
                    </code>
                    ,{" "}
                    <code className="bg-gray-100 dark:bg-neutral-800 px-1 py-0.5 rounded text-[10px]">
                      00447911123456
                    </code>
                    ,{" "}
                    <code className="bg-gray-100 dark:bg-neutral-800 px-1 py-0.5 rounded text-[10px]">
                      +966 50 123 4567
                    </code>
                  </li>
                  <li>
                    <strong className="text-gray-800 dark:text-gray-200">
                      {isRTL ? "تنسيق E.164 قياسي:" : "Normalized to E.164:"}
                    </strong>{" "}
                    {isRTL
                      ? "تحويل تلقائي لصيغة (+ كود الدولة + الرقم) مع حذف أي رموز غير رقمية"
                      : "Automatically normalized (+ country code + number); non-digits are stripped"}
                  </li>
                  <li>
                    <strong className="text-gray-800 dark:text-gray-200">
                      {isRTL ? "تنسيق الملف:" : "File format:"}
                    </strong>{" "}
                    {isRTL ? "ملفات .csv أو .txt بحد أقصى 10MB" : ".csv or .txt file up to 10MB"}
                  </li>
                </ul>
              )}
            </div>

            {/* Box 2: Safety & Auto cleanup */}
            <div className="bg-white/80 dark:bg-neutral-950/60 p-3.5 rounded-lg border border-gray-100 dark:border-neutral-800 space-y-2 text-start">
              <div className="flex items-center gap-2 font-bold text-gray-800 dark:text-gray-200 text-xs">
                <ShieldCheck className="h-3.5 w-3.5 text-teal-600 dark:text-teal-400" />
                <span>{isRTL ? "الأمان والتنظيف الذكي" : "Safety & Auto-Cleanup"}</span>
              </div>

              <div className="space-y-2 text-[11px] text-gray-600 dark:text-gray-400">
                <div className="flex items-start gap-2">
                  <Sparkles className="h-3 w-3 text-teal-600 mt-0.5 flex-shrink-0" />
                  <span>
                    <strong className="text-gray-800 dark:text-gray-200">
                      {isRTL ? "دمج التكرار:" : "Deduplication:"}
                    </strong>{" "}
                    {isRTL
                      ? "يتم دمج ومسح الأرقام/العناوين المكررة تلقائياً بدون تكرار الإرسال."
                      : "Duplicates are automatically merged to prevent double sending."}
                  </span>
                </div>

                <div className="flex items-start gap-2">
                  <CheckCircle2 className="h-3 w-3 text-teal-600 mt-0.5 flex-shrink-0" />
                  <span>
                    <strong className="text-gray-800 dark:text-gray-200">
                      {isRTL ? "تجاوز السطور غير الصالحة:" : "Safe skipping:"}
                    </strong>{" "}
                    {isRTL
                      ? "يتم تخطي أي سطر تالف أو غير صالح بأمان دون إيقاف الحملة."
                      : "Invalid lines are skipped safely without halting the campaign execution."}
                  </span>
                </div>

                <div className="flex items-start gap-2">
                  <Trash2 className="h-3 w-3 text-teal-600 mt-0.5 flex-shrink-0" />
                  <span>
                    <strong className="text-gray-800 dark:text-gray-200">
                      {isRTL ? "حذف تلقائي للملفات:" : "Temporary storage:"}
                    </strong>{" "}
                    {isRTL
                      ? "تُحفظ جهات الاتصال مؤقتاً أثناء الإرسال وتُحذف تلقائياً فور اكتمال الحملة."
                      : "Contacts are stored temporarily during sending and automatically deleted once finished."}
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

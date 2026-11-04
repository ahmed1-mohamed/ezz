"use client";

import React, { useRef, useMemo, useState, useEffect } from "react";
import { Card, CardContent } from "@/components/ui/card";
import {
  FileText,
  X,
  Upload,
  CheckCircle2,
  AlertCircle,
  Phone,
  Mail,
  Users,
  Smartphone,
} from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";
import { MarketingCountrySelector } from "./MarketingCountrySelector";
import {
  MarketingAudienceCards,
  AudienceSegmentType,
} from "./MarketingAudienceCards";
import { ForeignContactsGuide } from "./ForeignContactsGuide";
import { UserSelect } from "@/components/shared/user-select";
import {
  parseAndNormalizePhoneContacts,
  parseAndNormalizeEmailContacts,
} from "../utils/campaignUtils";
import { getContactsFileError } from "../utils/campaign-validation";
import { toast } from "sonner";

export type RecipientMode = "list" | "audience";

interface MarketingRecipientsSectionProps {
  contactType: "sms" | "whatsapp" | "email";
  recipientMode?: RecipientMode;
  onRecipientModeChange?: (mode: RecipientMode) => void;
  siteAudience: AudienceSegmentType;
  onSiteAudienceChange: (aud: AudienceSegmentType) => void;
  contactsText: string;
  onContactsTextChange: (text: string) => void;
  contactsFile: File | null;
  onContactsFileChange: (file: File | null) => void;
  selectedCountries: string[];
  onToggleCountry: (code: string) => void;
  recipientUserIds: string;
  onRecipientUserIdsChange: (val: string) => void;

  contactsError?: string;
  recipientUserIdsError?: string;
  countryError?: string;
}

export const MarketingRecipientsSection = React.memo(({
  contactType,
  siteAudience,
  onSiteAudienceChange,
  contactsText,
  onContactsTextChange,
  contactsFile,
  onContactsFileChange,
  selectedCountries,
  onToggleCountry,
  recipientUserIds,
  onRecipientUserIdsChange,
  contactsError,
  recipientUserIdsError,
  countryError,
}: MarketingRecipientsSectionProps) => {
  const { t, language } = useLanguage();
  const isRTL = language === "ar";
  const isEmail = contactType === "email";
  const fileInputRef = useRef<HTMLInputElement>(null);
  const [fileError, setFileError] = useState<string | undefined>();

  // Tab mode for 'specific' audience: 'direct' | 'file' | 'user'
  const [entryMode, setEntryMode] = useState<"direct" | "file" | "user">(() => {
    if (siteAudience === "specific") return "user";
    if (recipientUserIds && !contactsText && !contactsFile) return "user";
    if (contactsFile) return "file";
    return "direct";
  });

  // Sync mode when siteAudience changes
  useEffect(() => {
    if (siteAudience === "specific") {
      setEntryMode("user");
    } else if (siteAudience === "foreign_contacts") {
      if (entryMode === "user") {
        setEntryMode("direct");
      }
    }
  }, [siteAudience]);

  // Sync mode if external state changes
  useEffect(() => {
    if (contactsFile && entryMode !== "file") {
      setEntryMode("file");
    } else if (recipientUserIds && !contactsText && !contactsFile && entryMode !== "user") {
      setEntryMode("user");
    }
  }, [contactsFile, recipientUserIds, contactsText]);

  const parsedList = useMemo(() => {
    if (!contactsText.trim()) return [];
    if (isEmail) {
      return parseAndNormalizeEmailContacts(contactsText);
    }
    return parseAndNormalizePhoneContacts(contactsText, selectedCountries[0]);
  }, [contactsText, isEmail, selectedCountries]);

  const validCount = parsedList.length;

  const handleFileSelect = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    e.target.value = "";
    if (file) {
      const error = getContactsFileError(file, t);
      if (error) {
        setFileError(error);
        toast.error(error, { id: "contacts-file-toast" });
        return;
      }
      setFileError(undefined);
      onContactsFileChange(file);
      setEntryMode("file");
    }
  };

  const handleRemoveFile = () => {
    setFileError(undefined);
    onContactsFileChange(null);
    if (fileInputRef.current) fileInputRef.current.value = "";
  };

  const handleQuickCountryPrefix = (prefix: string) => {
    if (!contactsText.trim()) {
      onContactsTextChange(prefix);
    } else {
      // If user typed e.g. 010..., replace leading 0 with prefix
      const trimmed = contactsText.trim();
      if (trimmed.startsWith("0")) {
        onContactsTextChange(prefix + trimmed.slice(1));
      } else if (!trimmed.startsWith("+")) {
        onContactsTextChange(prefix + trimmed);
      }
    }
  };

  const isSpecificAudience = siteAudience === "specific" || siteAudience === "foreign_contacts";

  return (
    <div className="space-y-4">
      <MarketingAudienceCards
        selectedAudience={siteAudience}
        onSelectAudience={onSiteAudienceChange}
        contactType={contactType}
      />

      {(siteAudience === "all" ||
        siteAudience === "registered" ||
        siteAudience === "visitors") && (
          <div className="space-y-4 animate-in fade-in slide-in-from-top-2 duration-200">
            <MarketingCountrySelector
              selectedCountries={selectedCountries}
              onToggleCountry={onToggleCountry}
              error={countryError}
            />
          </div>
        )}

      {isSpecificAudience && (
        <div className="space-y-4 animate-in fade-in slide-in-from-top-2 duration-200">
          <Card className="border-gray-200 dark:border-neutral-800 shadow-sm bg-white dark:bg-neutral-900 rounded-xl overflow-hidden">
            <CardContent className="p-6 space-y-4">
              {/* Header and Entry Mode Tabs */}
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 border-b border-gray-100 dark:border-neutral-800/80 pb-4">
                <div>
                  <h3 className="text-sm font-bold text-gray-900 dark:text-gray-100 text-start flex items-center gap-2">
                    {siteAudience === "specific" ? (
                      <Users className="h-4 w-4 text-teal-600 dark:text-teal-400" />
                    ) : isEmail ? (
                      <Mail className="h-4 w-4 text-teal-600 dark:text-teal-400" />
                    ) : (
                      <Phone className="h-4 w-4 text-teal-600 dark:text-teal-400" />
                    )}
                    <span>
                      {siteAudience === "specific"
                        ? isRTL ? "اختيار مستخدم مسجل بالمنصة" : "Select Platform User"
                        : isEmail
                        ? isRTL ? "جهات اتصال خارجية (بريد مباشر / ملف)" : "Foreign / Manual Contacts (Email / File)"
                        : isRTL ? "جهات اتصال خارجية / يدوية (أرقام الهواتف)" : "Foreign / Manual Contacts (Phone Numbers)"}
                    </span>
                  </h3>
                  <p className="text-xs text-gray-400 mt-0.5 text-start">
                    {siteAudience === "specific"
                      ? isRTL
                        ? "ابحث عن المستخدم بالاسم أو البريد الإلكتروني أو المعرّف (User ID)"
                        : "Search by user name, email or User ID"
                      : isEmail
                      ? isRTL
                        ? "أدخل بريداً محدداً أو عدة عناوين، أو ارفع ملف قائمة بريدية"
                        : "Enter direct email addresses, or upload a CSV/TXT list"
                      : isRTL
                        ? "أدخل رقم الهاتف مباشرة للإرسال إليه، أو ارفع ملف أرقام (CSV/TXT)"
                        : "Enter phone number directly to send to it, or upload numbers file"}
                  </p>
                </div>

                {/* Mode Selector Tabs (only shown for foreign_contacts) */}
                {siteAudience === "foreign_contacts" && (
                  <div className="inline-flex p-1 rounded-xl bg-gray-100 dark:bg-neutral-800/90 text-xs font-semibold">
                    <button
                      type="button"
                      onClick={() => setEntryMode("direct")}
                      className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg transition-all ${
                        entryMode === "direct"
                          ? "bg-white dark:bg-neutral-900 text-teal-600 dark:text-teal-400 shadow-xs"
                          : "text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-gray-200"
                      }`}
                    >
                      {isEmail ? <Mail className="h-3.5 w-3.5" /> : <Smartphone className="h-3.5 w-3.5" />}
                      <span>{isEmail ? (isRTL ? "بريد مباشر" : "Direct Email") : (isRTL ? "رقم الهاتف" : "Direct Phone")}</span>
                    </button>

                    <button
                      type="button"
                      onClick={() => setEntryMode("file")}
                      className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg transition-all ${
                        entryMode === "file"
                          ? "bg-white dark:bg-neutral-900 text-teal-600 dark:text-teal-400 shadow-xs"
                          : "text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-gray-200"
                      }`}
                    >
                      <Upload className="h-3.5 w-3.5" />
                      <span>{isRTL ? "رفع ملف" : "Upload File"}</span>
                    </button>
                  </div>
                )}
              </div>

              {/* Mode 1: Direct phone/email input */}
              {siteAudience === "foreign_contacts" && entryMode === "direct" && (
                <div className="space-y-3 animate-in fade-in duration-150 text-start">
                  {!isEmail && (
                    <div className="flex items-center gap-2 flex-wrap">
                      <span className="text-[11px] font-medium text-gray-500 dark:text-gray-400">
                        {isRTL ? "مفتاح الدولة السريع:" : "Quick country prefix:"}
                      </span>
                      <button
                        type="button"
                        onClick={() => handleQuickCountryPrefix("+20")}
                        className="text-[11px] px-2 py-0.5 rounded-md border border-gray-200 dark:border-neutral-700 bg-gray-50 dark:bg-neutral-800 text-gray-700 dark:text-gray-300 hover:border-teal-500 hover:text-teal-600 font-medium transition-colors"
                      >
                        🇪🇬 +20 {isRTL ? "مصر" : "Egypt"}
                      </button>
                      <button
                        type="button"
                        onClick={() => handleQuickCountryPrefix("+971")}
                        className="text-[11px] px-2 py-0.5 rounded-md border border-gray-200 dark:border-neutral-700 bg-gray-50 dark:bg-neutral-800 text-gray-700 dark:text-gray-300 hover:border-teal-500 hover:text-teal-600 font-medium transition-colors"
                      >
                        🇦🇪 +971 {isRTL ? "الإمارات" : "UAE"}
                      </button>
                      <button
                        type="button"
                        onClick={() => handleQuickCountryPrefix("+966")}
                        className="text-[11px] px-2 py-0.5 rounded-md border border-gray-200 dark:border-neutral-700 bg-gray-50 dark:bg-neutral-800 text-gray-700 dark:text-gray-300 hover:border-teal-500 hover:text-teal-600 font-medium transition-colors"
                      >
                        🇸🇦 +966 {isRTL ? "السعودية" : "KSA"}
                      </button>
                      <button
                        type="button"
                        onClick={() => handleQuickCountryPrefix("+968")}
                        className="text-[11px] px-2 py-0.5 rounded-md border border-gray-200 dark:border-neutral-700 bg-gray-50 dark:bg-neutral-800 text-gray-700 dark:text-gray-300 hover:border-teal-500 hover:text-teal-600 font-medium transition-colors"
                      >
                        🇴🇲 +968 {isRTL ? "عُمان" : "Oman"}
                      </button>
                    </div>
                  )}

                  <div className="relative">
                    <textarea
                      rows={3}
                      dir="ltr"
                      value={contactsText}
                      onChange={(e) => onContactsTextChange(e.target.value)}
                      aria-invalid={!!contactsError || undefined}
                      placeholder={
                        isEmail
                          ? t("marketingEmail.create.contactsPlaceholder")
                          : t("marketingWhatsappSms.create.contactsPlaceholder")
                      }
                      className={`w-full p-3.5 border bg-white dark:bg-neutral-950 rounded-xl text-sm font-mono text-gray-800 dark:text-gray-200 focus:outline-none focus:ring-2 focus:ring-teal-500 resize-y ${
                        contactsError
                          ? "border-red-500 focus:ring-red-500"
                          : "border-gray-200 dark:border-neutral-800"
                      }`}
                    />
                  </div>

                  {/* Live Validation Pill */}
                  {validCount === 1 ? (
                    <div className="flex items-center gap-2 p-2.5 rounded-lg bg-emerald-50 dark:bg-emerald-950/30 border border-emerald-200 dark:border-emerald-800/50 text-emerald-800 dark:text-emerald-300 text-xs font-semibold">
                      <CheckCircle2 className="h-4 w-4 text-emerald-600 dark:text-emerald-400 shrink-0" />
                      <span>
                        {isRTL ? "سيتم الإرسال مباشرة إلى:" : "Will send directly to:"}{" "}
                        <span className="font-mono underline">{parsedList[0]}</span>
                      </span>
                    </div>
                  ) : validCount > 1 ? (
                    <div className="flex items-center gap-2 p-2.5 rounded-lg bg-emerald-50 dark:bg-emerald-950/30 border border-emerald-200 dark:border-emerald-800/50 text-emerald-800 dark:text-emerald-300 text-xs font-semibold">
                      <CheckCircle2 className="h-4 w-4 text-emerald-600 dark:text-emerald-400 shrink-0" />
                      <span>
                        {isRTL ? `تم التعرف على (${validCount}) مستلمين صريحين:` : `Recognized (${validCount}) valid recipients:`}{" "}
                        <span className="font-mono">{parsedList.slice(0, 3).join(", ")}{validCount > 3 ? "..." : ""}</span>
                      </span>
                    </div>
                  ) : contactsText.trim() ? (
                    <div className="flex items-center gap-2 p-2.5 rounded-lg bg-amber-50 dark:bg-amber-950/30 border border-amber-200 dark:border-amber-800/50 text-amber-800 dark:text-amber-300 text-xs font-medium">
                      <AlertCircle className="h-4 w-4 text-amber-600 dark:text-amber-400 shrink-0" />
                      <span>
                        {isEmail
                          ? isRTL ? "يرجى التأكد من كتابة بريد إلكتروني صحيح (مثال: name@example.com)" : "Please enter a valid email address"
                          : isRTL ? "يرجى التأكد من كتابة رقم هاتف صحيح بالصيغة الدولية (+20...) أو المحلية (01...)" : "Please enter a valid phone number"}
                      </span>
                    </div>
                  ) : null}

                  {contactsError && (
                    <p role="alert" data-field-error="" className="text-xs text-red-500 font-medium">{contactsError}</p>
                  )}
                </div>
              )}

              {/* Mode 2: Upload CSV / TXT */}
              {siteAudience === "foreign_contacts" && entryMode === "file" && (
                <div className="space-y-3 animate-in fade-in duration-150 text-start">
                  <input
                    ref={fileInputRef}
                    type="file"
                    accept=".csv,.txt,text/csv,text/plain"
                    className="hidden"
                    onChange={handleFileSelect}
                  />

                  {contactsFile ? (
                    <div className="flex items-center justify-between p-3.5 bg-gray-50 dark:bg-neutral-800/60 rounded-xl border border-gray-200 dark:border-neutral-700">
                      <div className="flex items-center gap-3">
                        <div className="p-2 rounded-lg bg-teal-100 dark:bg-teal-900/50 text-teal-600 dark:text-teal-400">
                          <FileText className="h-5 w-5" />
                        </div>
                        <div>
                          <div className="text-xs font-bold text-gray-800 dark:text-gray-200">
                            {contactsFile.name}
                          </div>
                          <div className="text-[11px] text-gray-400">
                            {(contactsFile.size / 1024).toFixed(1)} KB • {isRTL ? "جاهز للإرسال" : "Ready for broadcast"}
                          </div>
                        </div>
                      </div>
                      <button
                        type="button"
                        onClick={handleRemoveFile}
                        className="p-1.5 rounded-lg text-gray-400 hover:text-red-500 hover:bg-red-50 dark:hover:bg-red-950/30 transition-colors"
                        title={isRTL ? "إزالة الملف" : "Remove file"}
                      >
                        <X className="h-4 w-4" />
                      </button>
                    </div>
                  ) : (
                    <div
                      onClick={() => fileInputRef.current?.click()}
                      aria-invalid={!!(fileError || contactsError) || undefined}
                      className={`border-2 border-dashed ${fileError || contactsError ? "border-red-500" : "border-gray-200 dark:border-neutral-800"} hover:border-teal-500 rounded-xl p-6 text-center cursor-pointer transition-colors bg-gray-50/50 dark:bg-neutral-950/50`}
                    >
                      <Upload className="h-6 w-6 text-teal-600 dark:text-teal-400 mx-auto mb-2" />
                      <p className="text-xs font-bold text-gray-800 dark:text-gray-200">
                        {isRTL ? "انقر لاختيار ملف (CSV أو TXT)" : "Click to select file (CSV or TXT)"}
                      </p>
                      <p className="text-[11px] text-gray-400 mt-1">
                        {isRTL ? "الحد الأقصى 10 ميجابايت" : "Max size 10MB"}
                      </p>
                    </div>
                  )}

                  {(fileError || contactsError) && (
                    <p role="alert" data-field-error="" className="text-xs text-red-500 font-medium">{fileError || contactsError}</p>
                  )}
                </div>
              )}

              {/* Mode 3: Select Registered Platform User */}
              {siteAudience === "specific" && (
                <div className="space-y-3 animate-in fade-in duration-150 text-start">
                  <label className="text-xs font-bold text-gray-800 dark:text-gray-200">
                    {isRTL ? "اختر مستخدماً من المنصة" : "Select Platform User"}
                  </label>
                  <p className="text-[11px] text-gray-400">
                    {isRTL
                      ? "ابحث بالاسم أو البريد الإلكتروني أو المعرّف (User ID)"
                      : "Search by name, email or User ID"}
                  </p>
                  <UserSelect
                    selectedId={recipientUserIds ? Number(recipientUserIds) : null}
                    onChange={(id) => onRecipientUserIdsChange(id ? String(id) : "")}
                    hasError={!!recipientUserIdsError}
                  />
                  {recipientUserIdsError && (
                    <p role="alert" data-field-error="" className="text-xs text-red-500 mt-1">{recipientUserIdsError}</p>
                  )}
                </div>
              )}
            </CardContent>
          </Card>

          {siteAudience === "foreign_contacts" && entryMode === "file" && (
            <ForeignContactsGuide contactType={contactType} />
          )}
        </div>
      )}
    </div>
  );
});

MarketingRecipientsSection.displayName = "MarketingRecipientsSection";
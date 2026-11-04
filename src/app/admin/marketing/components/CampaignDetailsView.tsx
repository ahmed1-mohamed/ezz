"use client";

import { useState, useEffect } from "react";
import { useParams, useRouter, usePathname } from "next/navigation";
import Link from "next/link";
import { useSession } from "next-auth/react";
import { useLanguage } from "@/contexts/LanguageContext";
import { viewCampaign } from "@/data/api-client";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { toast } from "sonner";
import { getApiErrorMessage } from "@/lib/api-errors";
import { API_ERROR_TOAST_ID } from "@/config/toast-config";
import {
  ArrowLeft,
  ChevronRight,
  Send,
  CheckCircle2,
  Eye,
  AlertTriangle,
  Clock,
  User,
  Users,
  Target,
  Image as ImageIcon,
  RefreshCw,
  Plus,
  MessageSquare,
} from "lucide-react";
import { getAudienceLabel } from "../utils/campaignUtils";

const STATUS_CONFIG: Record<
  string,
  { label_en: string; label_ar: string; color: string; dotColor: string }
> = {
  completed: {
    label_en: "Completed",
    label_ar: "مكتملة",
    color:
      "bg-emerald-50 text-emerald-700 border-emerald-200 dark:bg-emerald-950/40 dark:text-emerald-400 dark:border-emerald-800",
    dotColor: "bg-emerald-500",
  },
  running: {
    label_en: "Running",
    label_ar: "جاري التشغيل",
    color:
      "bg-blue-50 text-blue-700 border-blue-200 dark:bg-blue-950/40 dark:text-blue-400 dark:border-blue-800",
    dotColor: "bg-blue-500 animate-pulse",
  },
  scheduled: {
    label_en: "Scheduled",
    label_ar: "مجدولة",
    color:
      "bg-amber-50 text-amber-700 border-amber-200 dark:bg-amber-950/40 dark:text-amber-400 dark:border-amber-800",
    dotColor: "bg-amber-500",
  },
  draft: {
    label_en: "Draft",
    label_ar: "مسودة",
    color:
      "bg-gray-100 text-gray-700 border-gray-200 dark:bg-neutral-800 dark:text-gray-300 dark:border-neutral-700",
    dotColor: "bg-gray-400",
  },
  failed: {
    label_en: "Failed",
    label_ar: "فشلت",
    color:
      "bg-red-50 text-red-700 border-red-200 dark:bg-red-950/40 dark:text-red-400 dark:border-red-800",
    dotColor: "bg-red-500",
  },
};

const COUNTRY_NAMES: Record<string, { en: string; ar: string; flag: string }> = {
  ae: { en: "UAE", ar: "الإمارات", flag: "🇦🇪" },
  uae: { en: "UAE", ar: "الإمارات", flag: "🇦🇪" },
  eg: { en: "Egypt", ar: "مصر", flag: "🇪🇬" },
  om: { en: "Oman", ar: "عُمان", flag: "🇴🇲" },
};

export function CampaignDetailsView() {
  const { id } = useParams();
  const router = useRouter();
  const pathname = usePathname();
  const { t, language } = useLanguage();
  const isRTL = language === "ar";
  const basePath = pathname.startsWith("/developer") ? "/developer" : "/admin";

  const { data: session } = useSession();
  const token = session?.user?.accessToken;

  const [campaign, setCampaign] = useState<any | null>(null);
  const [loading, setLoading] = useState(true);
  const [isRefreshing, setIsRefreshing] = useState(false);

  const fetchDetails = async (isManualRefresh = false) => {
    if (!token || !id) return;
    if (isManualRefresh) setIsRefreshing(true);
    else setLoading(true);

    try {
      const res = await viewCampaign(id as string, token);
      const data = res?.data || res;
      setCampaign(data);
      if (isManualRefresh) {
        toast.success(isRTL ? "تم تحديث البيانات" : "Data refreshed");
      }
    } catch (err: any) {
      console.error("Failed to fetch campaign details:", err);
      toast.error(
        getApiErrorMessage(err, t, isRTL ? "فشل تحميل تفاصيل الحملة" : "Failed to load campaign details"),
        { id: API_ERROR_TOAST_ID }
      );
    } finally {
      setLoading(false);
      setIsRefreshing(false);
    }
  };

  useEffect(() => {
    if (id && token) {
      fetchDetails();
    }
  }, [id, token]);

  if (loading) {
    return (
      <div className="p-4 sm:p-6 max-w-7xl mx-auto space-y-6 animate-pulse">
        <div className="h-4 w-48 bg-gray-200 dark:bg-neutral-800 rounded"></div>
        <div className="flex justify-between items-center">
          <div className="h-8 w-80 bg-gray-200 dark:bg-neutral-800 rounded-lg"></div>
          <div className="h-10 w-32 bg-gray-200 dark:bg-neutral-800 rounded-lg"></div>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {[1, 2, 3, 4].map((i) => (
            <div
              key={i}
              className="h-28 bg-gray-100 dark:bg-neutral-900 rounded-xl border border-gray-200 dark:border-neutral-800"
            ></div>
          ))}
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          <div className="lg:col-span-2 h-96 bg-gray-100 dark:bg-neutral-900 rounded-xl"></div>
          <div className="h-96 bg-gray-100 dark:bg-neutral-900 rounded-xl"></div>
        </div>
      </div>
    );
  }

  if (!campaign && !loading) {
    return (
      <div className="p-6 max-w-4xl mx-auto text-center py-16 space-y-4">
        <div className="w-14 h-14 rounded-full bg-red-50 dark:bg-red-950/40 text-red-600 flex items-center justify-center mx-auto">
          <AlertTriangle className="h-7 w-7" />
        </div>
        <h2 className="text-xl font-bold text-gray-900 dark:text-gray-100">
          {isRTL ? "لم يتم العثور على الحملة" : "Campaign Not Found"}
        </h2>
        <p className="text-sm text-gray-500 max-w-md mx-auto">
          {isRTL
            ? "تعذر تحميل تفاصيل الحملة المطلوبة. قد تكون محذوفة أو أنك لا تملك صلاحية الوصول إليها."
            : "Could not load the requested campaign details. It might have been deleted or you don't have access permission."}
        </p>
        <Button
          variant="outline"
          onClick={() => router.back()}
          className="mt-4 border-gray-200 dark:border-neutral-800"
        >
          <ArrowLeft className={`h-4 w-4 me-2 ${isRTL && "rotate-180"}`} />
          {isRTL ? "الرجوع للحملات" : "Back to Campaigns"}
        </Button>
      </div>
    );
  }

  // Determine Type & Sub-path for breadcrumbs
  const campaignType = String(campaign.type || "email").toLowerCase();
  let categoryPath = "email";
  let categoryLabel_en = "Email";
  let categoryLabel_ar = "البريد الإلكتروني";

  if (campaignType === "whatsapp" || campaignType === "sms") {
    categoryPath = "whatsapp-sms";
    categoryLabel_en = "WhatsApp & SMS";
    categoryLabel_ar = "الرسائل وواتساب";
  } else if (campaignType === "notification") {
    categoryPath = "notifications";
    categoryLabel_en = "Notifications";
    categoryLabel_ar = "الإشعارات";
  }

  const statusKey = String(campaign.status || "scheduled").toLowerCase();
  const statusInfo = STATUS_CONFIG[statusKey] || STATUS_CONFIG.scheduled;

  // Stats calculation
  const totalSent = campaign.stats?.total_sent ?? campaign.sent ?? 0;
  const delivered = campaign.stats?.delivered ?? campaign.received ?? 0;
  const opened = campaign.stats?.opened ?? campaign.opened ?? 0;
  const read = campaign.stats?.read ?? campaign.read ?? 0;
  const failed = campaign.stats?.failed ?? campaign.failed ?? 0;

  const deliveryRate =
    totalSent > 0 ? ((delivered / totalSent) * 100).toFixed(1) : "0.0";
  const openRate =
    delivered > 0 ? (((opened || read) / delivered) * 100).toFixed(1) : "0.0";

  // Country
  const countryKey = (campaign.country || "").toLowerCase().trim();
  const countryObj = COUNTRY_NAMES[countryKey];
  const countryDisplayName = countryObj
    ? isRTL
      ? `${countryObj.flag} ${countryObj.ar}`
      : `${countryObj.flag} ${countryObj.en}`
    : campaign.country;

  // Audience
  const audienceKey = campaign.audience_segment || campaign.audience || "all";
  const audienceLabel = getAudienceLabel(audienceKey, isRTL);

  // Content
  const contentTitle =
    campaign.content?.title ||
    campaign.content?.subject ||
    campaign.name ||
    "";
  const contentBody =
    campaign.content?.body || campaign.content?.description || "";
  const imageUrl = campaign.content?.image_url;

  // Creator
  const creator = campaign.creator;
  const creatorName = creator
    ? `${creator.first_name || ""} ${creator.last_name || ""}`.trim() ||
      creator.email
    : null;

  return (
    <div className="p-4 sm:p-6 lg:p-8 max-w-7xl mx-auto space-y-6 text-start">
      {/* 1. Breadcrumb Navigation */}
      <nav
        className="flex items-center gap-2 text-xs sm:text-sm text-gray-500 flex-wrap"
        aria-label="breadcrumb"
      >
        <Link prefetch={false}
          href={`${basePath}/home`}
          className="hover:text-teal-600 dark:hover:text-teal-400 transition-colors"
        >
          {isRTL ? "الرئيسية" : "Home"}
        </Link>
        <ChevronRight className={`h-3.5 w-3.5 flex-shrink-0 ${isRTL && "rotate-180"}`} />
        <span>{isRTL ? "التسويق" : "Marketing"}</span>
        <ChevronRight className={`h-3.5 w-3.5 flex-shrink-0 ${isRTL && "rotate-180"}`} />
        <Link prefetch={false}
          href={`${basePath}/marketing/${categoryPath}`}
          className="hover:text-teal-600 dark:hover:text-teal-400 transition-colors capitalize"
        >
          {isRTL ? categoryLabel_ar : categoryLabel_en}
        </Link>
        <ChevronRight className={`h-3.5 w-3.5 flex-shrink-0 ${isRTL && "rotate-180"}`} />
        <span className="text-gray-900 dark:text-gray-100 font-bold truncate max-w-xs">
          #{campaign.id} - {campaign.name || campaignType}
        </span>
      </nav>

      {/* 2. Top Header with Actions */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 bg-white dark:bg-neutral-900 p-6 rounded-2xl border border-gray-200/80 dark:border-neutral-800 shadow-xs">
        <div className="space-y-2">
          <div className="flex items-center gap-2.5 flex-wrap">
            <button
              onClick={() => router.push(`${basePath}/marketing/${categoryPath}`)}
              className="p-2 rounded-xl border border-gray-200 dark:border-neutral-800 hover:bg-gray-100 dark:hover:bg-neutral-800 text-gray-600 dark:text-gray-300 transition-colors"
              title={isRTL ? "رجوع" : "Back"}
            >
              <ArrowLeft className={`h-4 w-4 ${isRTL && "rotate-180"}`} />
            </button>
            <h1 className="text-xl sm:text-2xl font-bold text-gray-900 dark:text-gray-100 tracking-tight">
              {campaign.name || contentTitle || t("marketingNotifications.details.campaignFallback", { id: campaign.id })}
            </h1>
            <div
              className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold border ${statusInfo.color}`}
            >
              <span className={`w-2 h-2 rounded-full ${statusInfo.dotColor}`} />
              <span>{isRTL ? statusInfo.label_ar : statusInfo.label_en}</span>
            </div>
            <span className="px-2.5 py-1 rounded-lg text-xs font-bold uppercase tracking-wider bg-teal-50 text-teal-700 border border-teal-200 dark:bg-teal-950/40 dark:text-teal-300 dark:border-teal-800">
              {campaignType}
            </span>
          </div>
          <p className="text-xs text-gray-500 dark:text-gray-400 ps-11">
            {isRTL ? "معرّف الحملة:" : "Campaign ID:"} #{campaign.id} •{" "}
            {isRTL ? "أنشئت في" : "Created on"}{" "}
            {campaign.created_at
              ? new Date(campaign.created_at).toLocaleDateString(
                  isRTL ? "ar-EG" : "en-US",
                  {
                    year: "numeric",
                    month: "short",
                    day: "numeric",
                    hour: "2-digit",
                    minute: "2-digit",
                  }
                )
              : "—"}
          </p>
        </div>

        {/* Action buttons */}
        <div className="flex items-center gap-2.5 flex-wrap self-start md:self-auto">
          <Button
            variant="outline"
            size="sm"
            onClick={() => fetchDetails(true)}
            disabled={isRefreshing}
            className="border-gray-200 dark:border-neutral-800 text-gray-700 dark:text-gray-300 bg-white dark:bg-neutral-900 gap-1.5"
          >
            <RefreshCw className={`h-3.5 w-3.5 ${isRefreshing && "animate-spin"}`} />
            <span>{isRTL ? "تحديث" : "Refresh"}</span>
          </Button>

          <Button
            size="sm"
            onClick={() =>
              router.push(`${basePath}/marketing/${categoryPath}/create`)
            }
            className="bg-teal-700 hover:bg-teal-800 text-white font-bold gap-1.5"
          >
            <Plus className="h-4 w-4" />
            <span>{isRTL ? "إنشاء حملة جديدة" : "New Campaign"}</span>
          </Button>
        </div>
      </div>

      {/* 3. High Impact Key Performance Metrics */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {/* Metric 1: Total Sent */}
        <Card className="border-gray-200/80 dark:border-neutral-800 shadow-xs bg-white dark:bg-neutral-900 rounded-2xl overflow-hidden hover:shadow-md transition-shadow">
          <CardContent className="p-5 space-y-2 text-start">
            <div className="flex items-center justify-between">
              <span className="text-xs font-bold text-gray-500 dark:text-gray-400">
                {isRTL ? "إجمالي المرسل" : "Total Sent"}
              </span>
              <div className="p-2 rounded-xl bg-blue-50 dark:bg-blue-950/50 text-blue-600 dark:text-blue-400">
                <Send className="h-4 w-4" />
              </div>
            </div>
            <div className="text-2xl font-extrabold text-gray-900 dark:text-gray-100">
              {totalSent.toLocaleString()}
            </div>
            <div className="text-[11px] text-gray-400 flex items-center gap-1">
              <span>{isRTL ? "إجمالي الرسائل المحولة للإرسال" : "Messages dispatched"}</span>
            </div>
          </CardContent>
        </Card>

        {/* Metric 2: Delivered */}
        <Card className="border-gray-200/80 dark:border-neutral-800 shadow-xs bg-white dark:bg-neutral-900 rounded-2xl overflow-hidden hover:shadow-md transition-shadow">
          <CardContent className="p-5 space-y-2 text-start">
            <div className="flex items-center justify-between">
              <span className="text-xs font-bold text-gray-500 dark:text-gray-400">
                {isRTL ? "تم التسليم" : "Delivered"}
              </span>
              <div className="p-2 rounded-xl bg-emerald-50 dark:bg-emerald-950/50 text-emerald-600 dark:text-emerald-400">
                <CheckCircle2 className="h-4 w-4" />
              </div>
            </div>
            <div className="flex items-baseline gap-2">
              <div className="text-2xl font-extrabold text-emerald-600 dark:text-emerald-400">
                {delivered.toLocaleString()}
              </div>
              <span className="text-xs font-bold text-emerald-600 dark:text-emerald-400 bg-emerald-50 dark:bg-emerald-950/60 px-2 py-0.5 rounded-md">
                {deliveryRate}%
              </span>
            </div>
            <div className="text-[11px] text-gray-400">
              {isRTL ? "نسبة استلام المستلمين" : "Delivery success rate"}
            </div>
          </CardContent>
        </Card>

        {/* Metric 3: Opened / Read */}
        <Card className="border-gray-200/80 dark:border-neutral-800 shadow-xs bg-white dark:bg-neutral-900 rounded-2xl overflow-hidden hover:shadow-md transition-shadow">
          <CardContent className="p-5 space-y-2 text-start">
            <div className="flex items-center justify-between">
              <span className="text-xs font-bold text-gray-500 dark:text-gray-400">
                {isRTL ? "تم الفتح / القراءة" : "Opened / Read"}
              </span>
              <div className="p-2 rounded-xl bg-teal-50 dark:bg-teal-950/50 text-teal-600 dark:text-teal-400">
                <Eye className="h-4 w-4" />
              </div>
            </div>
            <div className="flex items-baseline gap-2">
              <div className="text-2xl font-extrabold text-teal-600 dark:text-teal-400">
                {(opened || read).toLocaleString()}
              </div>
              <span className="text-xs font-bold text-teal-600 dark:text-teal-400 bg-teal-50 dark:bg-teal-950/60 px-2 py-0.5 rounded-md">
                {openRate}%
              </span>
            </div>
            <div className="text-[11px] text-gray-400">
              {isRTL ? "نسبة تفاعل المستلمين" : "Open and engagement rate"}
            </div>
          </CardContent>
        </Card>

        {/* Metric 4: Failed */}
        <Card className="border-gray-200/80 dark:border-neutral-800 shadow-xs bg-white dark:bg-neutral-900 rounded-2xl overflow-hidden hover:shadow-md transition-shadow">
          <CardContent className="p-5 space-y-2 text-start">
            <div className="flex items-center justify-between">
              <span className="text-xs font-bold text-gray-500 dark:text-gray-400">
                {isRTL ? "فشلت" : "Failed"}
              </span>
              <div className="p-2 rounded-xl bg-red-50 dark:bg-red-950/50 text-red-600 dark:text-red-400">
                <AlertTriangle className="h-4 w-4" />
              </div>
            </div>
            <div className="text-2xl font-extrabold text-red-600 dark:text-red-400">
              {failed.toLocaleString()}
            </div>
            <div className="text-[11px] text-gray-400">
              {isRTL ? "أرقام/عناوين لم يتم الوصول لها" : "Unreachable contacts"}
            </div>
          </CardContent>
        </Card>
      </div>

      {/* 4. Two-Column Detailed Layout */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Left Column (2/3 width) - Content & Recipients */}
        <div className="lg:col-span-2 space-y-6">
          {/* Card: Message Content */}
          <Card className="border-gray-200/80 dark:border-neutral-800 shadow-xs bg-white dark:bg-neutral-900 rounded-2xl overflow-hidden">
            <CardContent className="p-6 space-y-4">
              <div className="flex items-center justify-between border-b border-gray-100 dark:border-neutral-800 pb-3">
                <h2 className="text-sm font-bold text-gray-900 dark:text-gray-100 flex items-center gap-2">
                  <MessageSquare className="h-4 w-4 text-teal-600 dark:text-teal-400" />
                  <span>{isRTL ? "محتوى الرسالة" : "Message Content"}</span>
                </h2>
                {campaign.content?.channel && (
                  <span className="text-xs font-semibold px-2 py-0.5 rounded-md bg-gray-100 dark:bg-neutral-800 text-gray-600 dark:text-gray-300 uppercase">
                    {campaign.content.channel}
                  </span>
                )}
              </div>

              {/* Title / Subject */}
              {contentTitle && (
                <div className="space-y-1">
                  <span className="text-xs font-semibold text-gray-400">
                    {isRTL ? "العنوان / الموضوع" : "Title / Subject"}
                  </span>
                  <div className="text-base font-bold text-gray-900 dark:text-gray-100">
                    {contentTitle}
                  </div>
                </div>
              )}

              {/* Sender Info for Email */}
              {(campaign.content?.sender_name || campaign.content?.sender_email) && (
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 p-3 bg-gray-50 dark:bg-neutral-950 rounded-xl border border-gray-100 dark:border-neutral-800 text-xs">
                  <div>
                    <span className="text-gray-400">{isRTL ? "اسم المرسل:" : "Sender Name:"}</span>{" "}
                    <span className="font-bold text-gray-900 dark:text-gray-100">
                      {campaign.content.sender_name || "—"}
                    </span>
                  </div>
                  <div>
                    <span className="text-gray-400">{isRTL ? "بريد المرسل:" : "Sender Email:"}</span>{" "}
                    <span className="font-bold text-gray-900 dark:text-gray-100 font-mono">
                      {campaign.content.sender_email || "—"}
                    </span>
                  </div>
                </div>
              )}

              {/* Message Body */}
              <div className="space-y-1.5">
                <span className="text-xs font-semibold text-gray-400">
                  {isRTL ? "نص الرسالة" : "Message Body"}
                </span>
                <div className="p-4 rounded-xl bg-gray-50/80 dark:bg-neutral-950 border border-gray-100 dark:border-neutral-800 text-sm text-gray-800 dark:text-gray-200 whitespace-pre-wrap leading-relaxed font-sans">
                  {contentBody || (
                    <span className="text-gray-400 italic">
                      {isRTL ? "لا يوجد نص متاح" : "No content body available"}
                    </span>
                  )}
                </div>
              </div>

              {/* Attached Image */}
              {imageUrl && (
                <div className="space-y-1.5 pt-2">
                  <span className="text-xs font-semibold text-gray-400 flex items-center gap-1.5">
                    <ImageIcon className="h-3.5 w-3.5 text-teal-600" />
                    <span>{isRTL ? "صورة الإشعار / الحملة" : "Attached Campaign Image"}</span>
                  </span>
                  <div className="relative rounded-xl overflow-hidden border border-gray-200 dark:border-neutral-800 bg-neutral-950 flex items-center justify-center p-2 max-h-72">
                    <img
                      src={imageUrl}
                      alt={contentTitle || t("marketingNotifications.details.campaignImageAlt")}
                      className="max-h-68 w-auto object-contain rounded-lg"
                    />
                  </div>
                </div>
              )}
            </CardContent>
          </Card>

          {/* Card: Specific Recipients (if any) */}
          {campaign.specific_recipients && campaign.specific_recipients.length > 0 && (
            <Card className="border-gray-200/80 dark:border-neutral-800 shadow-xs bg-white dark:bg-neutral-900 rounded-2xl overflow-hidden">
              <CardContent className="p-6 space-y-4">
                <div className="flex items-center justify-between border-b border-gray-100 dark:border-neutral-800 pb-3">
                  <h2 className="text-sm font-bold text-gray-900 dark:text-gray-100 flex items-center gap-2">
                    <Users className="h-4 w-4 text-teal-600 dark:text-teal-400" />
                    <span>{isRTL ? "المستلمون المحددون" : "Specific Recipients"}</span>
                  </h2>
                  <Badge variant="secondary" className="text-xs">
                    {campaign.specific_recipients.length} {isRTL ? "مستلم" : "Recipients"}
                  </Badge>
                </div>

                <div className="divide-y divide-gray-100 dark:divide-neutral-800 max-h-80 overflow-y-auto">
                  {campaign.specific_recipients.map((rec: any, idx: number) => {
                    const recName =
                      typeof rec === "object"
                        ? `${rec.first_name || ""} ${rec.last_name || ""}`.trim() ||
                          rec.name ||
                          t("marketingNotifications.details.userFallback", { id: rec.user_id || rec.id })
                        : t("marketingNotifications.details.recipientFallback", { id: rec });
                    const recEmail =
                      typeof rec === "object" ? rec.email || rec.phone : null;
                    const recId = typeof rec === "object" ? rec.user_id || rec.id : rec;

                    return (
                      <div
                        key={idx}
                        className="py-3 flex items-center justify-between gap-3 text-start hover:bg-gray-50/50 dark:hover:bg-neutral-950/50 px-2 rounded-lg transition-colors"
                      >
                        <div className="flex items-center gap-3">
                          <div className="w-8 h-8 rounded-full bg-teal-100 dark:bg-teal-900/60 text-teal-700 dark:text-teal-300 font-bold text-xs flex items-center justify-center uppercase flex-shrink-0">
                            {recName.charAt(0) || "U"}
                          </div>
                          <div>
                            <div className="text-xs font-bold text-gray-900 dark:text-gray-100">
                              {recName}
                            </div>
                            {recEmail && (
                              <div className="text-[11px] text-gray-400 font-mono">
                                {recEmail}
                              </div>
                            )}
                          </div>
                        </div>

                        <span className="text-[11px] font-mono text-gray-400 bg-gray-100 dark:bg-neutral-800 px-2 py-0.5 rounded">
                          {t("marketingNotifications.details.idLabel", { id: recId })}
                        </span>
                      </div>
                    );
                  })}
                </div>
              </CardContent>
            </Card>
          )}
        </div>

        {/* Right Column (1/3 width) - Metadata & Author */}
        <div className="space-y-6">
          {/* Card: Targeting & Audience Info */}
          <Card className="border-gray-200/80 dark:border-neutral-800 shadow-xs bg-white dark:bg-neutral-900 rounded-2xl overflow-hidden">
            <CardContent className="p-6 space-y-4 text-start">
              <h2 className="text-sm font-bold text-gray-900 dark:text-gray-100 flex items-center gap-2 border-b border-gray-100 dark:border-neutral-800 pb-3">
                <Target className="h-4 w-4 text-teal-600 dark:text-teal-400" />
                <span>{isRTL ? "معلومات الاستهداف" : "Targeting Details"}</span>
              </h2>

              <div className="space-y-3 text-xs">
                {/* Audience Segment */}
                <div className="flex items-center justify-between py-1 border-b border-gray-50 dark:border-neutral-800/60">
                  <span className="text-gray-400">{isRTL ? "فئة الجمهور:" : "Audience:"}</span>
                  <span className="font-bold text-gray-900 dark:text-gray-100 bg-teal-50 dark:bg-teal-950/40 text-teal-700 dark:text-teal-300 px-2 py-0.5 rounded-md">
                    {audienceLabel}
                  </span>
                </div>

                {/* Country */}
                <div className="flex items-center justify-between py-1 border-b border-gray-50 dark:border-neutral-800/60">
                  <span className="text-gray-400">{isRTL ? "الدولة:" : "Country:"}</span>
                  <span className="font-bold text-gray-900 dark:text-gray-100">
                    {countryDisplayName || (isRTL ? "جميع الدول" : "All Countries")}
                  </span>
                </div>

                {/* Platform */}
                {campaign.content?.platform && (
                  <div className="flex items-center justify-between py-1 border-b border-gray-50 dark:border-neutral-800/60">
                    <span className="text-gray-400">{isRTL ? "المنصة:" : "Platform:"}</span>
                    <span className="font-semibold capitalize text-gray-900 dark:text-gray-100">
                      {campaign.content.platform}
                    </span>
                  </div>
                )}

                {/* Target Entity */}
                {campaign.content?.target_entity_type && (
                  <div className="flex items-center justify-between py-1">
                    <span className="text-gray-400">{isRTL ? "الجهة المرتبطة:" : "Linked Entity:"}</span>
                    <span className="font-bold text-teal-600 dark:text-teal-400 capitalize">
                      {campaign.content.target_entity_type} #{campaign.content.target_entity_id}
                    </span>
                  </div>
                )}
              </div>
            </CardContent>
          </Card>

          {/* Card: Execution & Timelines */}
          <Card className="border-gray-200/80 dark:border-neutral-800 shadow-xs bg-white dark:bg-neutral-900 rounded-2xl overflow-hidden">
            <CardContent className="p-6 space-y-4 text-start">
              <h2 className="text-sm font-bold text-gray-900 dark:text-gray-100 flex items-center gap-2 border-b border-gray-100 dark:border-neutral-800 pb-3">
                <Clock className="h-4 w-4 text-teal-600 dark:text-teal-400" />
                <span>{isRTL ? "التوقيت والجدولة" : "Execution Timeline"}</span>
              </h2>

              <div className="space-y-3 text-xs">
                {/* Created At */}
                <div className="flex items-center justify-between py-1 border-b border-gray-50 dark:border-neutral-800/60">
                  <span className="text-gray-400">{isRTL ? "تاريخ الإنشاء:" : "Created At:"}</span>
                  <span className="font-semibold text-gray-900 dark:text-gray-100">
                    {campaign.created_at
                      ? new Date(campaign.created_at).toLocaleString(
                          isRTL ? "ar-EG" : "en-US",
                          { dateStyle: "medium", timeStyle: "short" }
                        )
                      : "—"}
                  </span>
                </div>

                {/* Scheduled At */}
                {campaign.scheduled_at && (
                  <div className="flex items-center justify-between py-1 border-b border-gray-50 dark:border-neutral-800/60">
                    <span className="text-gray-400">{isRTL ? "موعد الجدولة:" : "Scheduled At:"}</span>
                    <span className="font-semibold text-amber-600 dark:text-amber-400">
                      {new Date(campaign.scheduled_at).toLocaleString(
                        isRTL ? "ar-EG" : "en-US",
                        { dateStyle: "medium", timeStyle: "short" }
                      )}
                    </span>
                  </div>
                )}

                {/* Status */}
                <div className="flex items-center justify-between py-1">
                  <span className="text-gray-400">{isRTL ? "حالة التنفيذ:" : "Status:"}</span>
                  <span
                    className={`font-bold px-2 py-0.5 rounded capitalize ${statusInfo.color}`}
                  >
                    {isRTL ? statusInfo.label_ar : statusInfo.label_en}
                  </span>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Card: Author / Creator */}
          {creator && (
            <Card className="border-gray-200/80 dark:border-neutral-800 shadow-xs bg-white dark:bg-neutral-900 rounded-2xl overflow-hidden">
              <CardContent className="p-6 space-y-4 text-start">
                <h2 className="text-sm font-bold text-gray-900 dark:text-gray-100 flex items-center gap-2 border-b border-gray-100 dark:border-neutral-800 pb-3">
                  <User className="h-4 w-4 text-teal-600 dark:text-teal-400" />
                  <span>{isRTL ? "منشئ الحملة" : "Author Details"}</span>
                </h2>

                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-teal-100 dark:bg-teal-900 text-teal-700 dark:text-teal-300 font-extrabold text-sm flex items-center justify-center uppercase">
                    {(creator.first_name || creator.email || "A").charAt(0)}
                  </div>
                  <div className="space-y-0.5">
                    <div className="text-sm font-bold text-gray-900 dark:text-gray-100">
                      {creatorName}
                    </div>
                    {creator.email && (
                      <div className="text-xs text-gray-400 font-mono">
                        {creator.email}
                      </div>
                    )}
                  </div>
                </div>

                <div className="pt-2 border-t border-gray-100 dark:border-neutral-800 text-[11px] text-gray-400 flex justify-between">
                  <span>{isRTL ? "معرّف المستخدم:" : "User ID:"}</span>
                  <span className="font-mono font-semibold">#{creator.user_id || campaign.created_by}</span>
                </div>
              </CardContent>
            </Card>
          )}
        </div>
      </div>
    </div>
  );
}

"use client";

import { use } from "react";
import { useRouter } from "next/navigation";
import { useQuery } from "@tanstack/react-query";
import { Button } from "@/components/ui/button";
import { ChevronLeft, ChevronRight, Loader2, Activity as ActivityIcon, Globe, Clock, Box, ShieldAlert } from "lucide-react";
import { AdminActivityService } from "@/features/activity/services/AdminActivityService";
import { Badge } from "@/components/ui/badge";
import { useLanguage } from "@/contexts/LanguageContext";

export default function ActivityDetailsPremiumPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id: activityId } = use(params);
  const router = useRouter();
  const { t } = useLanguage();

  const { data, isLoading, isError, error } = useQuery({
    queryKey: ["activity", activityId],
    queryFn: () => AdminActivityService.getActivityLog(Number(activityId)),
    enabled: !!activityId,
  });

  if (isLoading) {
    return (
      <div className="flex min-h-screen items-center justify-center p-4 bg-gray-50/50">
        <div className="flex flex-col items-center gap-4 bg-white p-8 rounded-2xl shadow-sm border border-gray-100">
          <Loader2 className="h-10 w-10 animate-spin text-teal-600" />
          <p className="text-sm font-medium text-gray-500 tracking-wide">
            {t("activity.details.retrieving")}
          </p>
        </div>
      </div>
    );
  }

  if (isError || !data) {
    return (
      <div className="flex min-h-screen items-center justify-center p-4 bg-gray-50/50">
        <div className="max-w-md text-center bg-white p-10 rounded-3xl shadow-sm border border-red-100 relative overflow-hidden">
          <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-red-400 to-red-600"></div>
          <div className="mx-auto h-16 w-16 bg-red-50 rounded-full flex items-center justify-center mb-6">
            <ShieldAlert className="h-8 w-8 text-red-500" />
          </div>
          <h2 className="text-2xl font-bold text-gray-900 mb-2">
            {t("activity.details.notFound")}
          </h2>
          <p className="text-gray-500 mb-8 leading-relaxed">
            {error instanceof Error ? error.message : t("activity.details.notFoundDesc")}
          </p>
          <Button
            onClick={() => router.push("/admin/activity")}
            className="w-full bg-gray-900 hover:bg-gray-800 text-white rounded-xl py-6"
          >
            <ChevronLeft className="me-2 h-4 w-4 rtl:rotate-180" /> {t("activity.details.returnToLogs")}
          </Button>
        </div>
      </div>
    );
  }

  const displayActionRaw = data.action?.toLowerCase() || "unknown";
  let displayAction = displayActionRaw;
  if (displayAction === "created") displayAction = "create";
  if (displayAction === "updated") displayAction = "update";
  if (displayAction === "deleted") displayAction = "delete";

  const actionKey = `activity.filters.${displayAction}`;
  const translatedAction = t(actionKey);
  const displayActionText = translatedAction && translatedAction !== actionKey ? translatedAction : (displayAction.charAt(0).toUpperCase() + displayAction.slice(1));

  const actionColors: Record<string, { bg: string; text: string; icon: string }> = {
    delete: { bg: "bg-red-50", text: "text-red-700", icon: "bg-red-500" },
    create: { bg: "bg-emerald-50", text: "text-emerald-700", icon: "bg-emerald-500" },
    login: { bg: "bg-blue-50", text: "text-blue-700", icon: "bg-blue-500" },
    update: { bg: "bg-amber-50", text: "text-amber-700", icon: "bg-amber-500" },
  };

  const style = actionColors[displayAction] || { bg: "bg-gray-50", text: "text-gray-700", icon: "bg-gray-500" };

  return (
    <div className="min-h-screen bg-slate-50/50 pb-12">
      <div className="bg-white border-b border-gray-100 shadow-sm  top-0 z-10">
        <div className="px-8 py-5 mx-auto max-w-7xl">
          <div className="flex items-center gap-2 text-[13px] font-medium text-gray-400 mb-5">
            <span
              className="cursor-pointer hover:text-gray-900 transition-colors"
              onClick={() => router.push("/admin/home")}
            >
              {t("activity.details.breadcrumbDashboard")}
            </span>
            <ChevronRight className="h-3.5 w-3.5 rtl:rotate-180" />
            <span
              className="cursor-pointer hover:text-gray-900 transition-colors"
              onClick={() => router.push("/admin/activity")}
            >
              {t("activity.details.breadcrumbActivityLogs")}
            </span>
            <ChevronRight className="h-3.5 w-3.5 rtl:rotate-180" />
            <span className="text-gray-900 font-semibold">{t("activity.details.breadcrumbActivity")}{data.id}</span>
          </div>

          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
            <div className="flex items-center gap-5">
              <Button
                variant="outline"
                size="icon"
                onClick={() => router.push("/admin/activity")}
                className="h-11 w-11 rounded-full border-gray-200 hover:bg-gray-50 hover:text-gray-900 shadow-sm transition-all bg-white"
              >
                <ChevronLeft className="h-5 w-5 rtl:rotate-180" />
              </Button>
              <div>
                <h1 className="text-3xl font-bold text-gray-900 tracking-tight flex items-center gap-3">
                  {t("activity.details.activityDetails")}
                  <Badge className={`${style.bg} ${style.text} px-3 py-1.5 text-xs font-bold uppercase tracking-widest border-0 rounded-full shadow-sm`}>
                    <span className={`w-2 h-2 rounded-full ${style.icon} me-2 inline-block`}></span>
                    {displayActionText}
                  </Badge>
                </h1>
                <p className="text-sm text-gray-500 mt-1.5 font-medium flex items-center gap-2">
                  <Clock className="w-4 h-4" />
                  {data.created_at ? new Date(data.created_at).toLocaleString('en-US', { dateStyle: 'full', timeStyle: 'medium' }) : t("activity.na")}
                </p>
              </div>
            </div>

            {(() => {
              const rawUserType = (data as any).user_type || (data as any).additional_info?.user_type;
              const formattedUserType = rawUserType ? (rawUserType.charAt(0).toUpperCase() + rawUserType.slice(1)) : undefined;
              const displayUserName = data.user_name || data.user?.name || data.user?.email || formattedUserType || t("activity.details.unknownUser");
              return (
                <div className="flex items-center gap-3 bg-white px-5 py-2.5 rounded-2xl border border-gray-200 shadow-sm hover:shadow-md transition-shadow">
                  <div className="h-10 w-10 rounded-full bg-teal-50 flex items-center justify-center text-teal-700 font-bold uppercase text-lg border border-teal-100">
                    {displayUserName.charAt(0)}
                  </div>
                  <div className="flex flex-col">
                    <span className="text-sm font-bold text-gray-900">{displayUserName}</span>
                    <span className="text-[11px] font-semibold text-gray-400 uppercase tracking-wider">{t("activity.details.userId")}: {data.user_id || data.user?.id || t("activity.na")}</span>
                  </div>
                </div>
              );
            })()}
          </div>
        </div>
      </div>

      <div className="px-8 py-8 mx-auto max-w-7xl space-y-8">

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-white rounded-3xl p-6 border border-gray-100 shadow-sm hover:shadow-md transition-all duration-300">
            <div className="flex items-center gap-4 mb-5">
              <div className="w-12 h-12 rounded-2xl bg-indigo-50/80 flex items-center justify-center border border-indigo-100/50">
                <Box className="w-6 h-6 text-indigo-600" />
              </div>
              <div>
                <h3 className="font-bold text-gray-900 text-lg">{t("activity.details.entity")}</h3>
                <p className="text-xs font-semibold text-gray-400 uppercase tracking-wider">{t("activity.details.targetObject")}</p>
              </div>
            </div>
            <div className="bg-slate-50 p-4 rounded-2xl border border-slate-100">
              <p className="text-xl font-bold text-gray-900">
                {data.entity_type
                  ? (t(`activity.filters.${data.entity_type.toLowerCase()}`) !== `activity.filters.${data.entity_type.toLowerCase()}`
                    ? t(`activity.filters.${data.entity_type.toLowerCase()}`)
                    : data.entity_type)
                  : (t("activity.na"))}
              </p>
              {data.entity_id && (
                <div className="mt-2 inline-flex items-center px-2.5 py-1 rounded-md bg-white border border-gray-200 shadow-sm">
                  <span className="text-xs font-semibold text-gray-500 me-2">{t("activity.details.id")}</span>
                  <span className="text-sm font-bold text-indigo-600">{data.entity_id}</span>
                </div>
              )}
            </div>
          </div>

          <div className="bg-white rounded-3xl p-6 border border-gray-100 shadow-sm hover:shadow-md transition-all duration-300">
            <div className="flex items-center gap-4 mb-5">
              <div className="w-12 h-12 rounded-2xl bg-cyan-50/80 flex items-center justify-center border border-cyan-100/50">
                <Globe className="w-6 h-6 text-cyan-600" />
              </div>
              <div>
                <h3 className="font-bold text-gray-900 text-lg">{t("activity.details.network")}</h3>
                <p className="text-xs font-semibold text-gray-400 uppercase tracking-wider">{t("activity.details.connectionInfo")}</p>
              </div>
            </div>
            <div className="bg-slate-50 p-4 rounded-2xl border border-slate-100 flex items-center h-[76px]">
              <p className="text-lg font-bold text-gray-900 tracking-wide font-mono">
                {data.ip_address || t("activity.details.notRecorded")}
              </p>
            </div>
          </div>

          <div className="bg-white rounded-3xl p-6 border border-gray-100 shadow-sm hover:shadow-md transition-all duration-300">
            <div className="flex items-center gap-4 mb-5">
              <div className="w-12 h-12 rounded-2xl bg-purple-50/80 flex items-center justify-center border border-purple-100/50">
                <ActivityIcon className="w-6 h-6 text-purple-600" />
              </div>
              <div>
                <h3 className="font-bold text-gray-900 text-lg">{t("activity.details.client")}</h3>
                <p className="text-xs font-semibold text-gray-400 uppercase tracking-wider">{t("activity.details.deviceInfo")}</p>
              </div>
            </div>
            <div className="bg-slate-50 p-4 rounded-2xl border border-slate-100 h-[76px] flex items-center overflow-hidden relative group">
              <p className="text-sm font-semibold text-gray-600 leading-relaxed line-clamp-2" title={data.user_agent}>
                {data.user_agent || t("activity.details.unknownClient")}
              </p>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-3xl border border-gray-200 shadow-sm overflow-hidden">
          <div className="px-8 py-5 border-b border-gray-100 bg-white flex items-center justify-between">
            <div className="flex items-center gap-3">
              <h3 className="text-xl font-bold text-gray-900">{t("activity.details.dataChanges")}</h3>
              <Badge variant="secondary" className="bg-slate-100 text-slate-600 font-semibold shadow-none border-0">{t("activity.details.jsonPayload")}</Badge>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 divide-y lg:divide-y-0 lg:divide-x divide-gray-100 bg-slate-50">
            <div className="p-8">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-8 h-8 rounded-xl bg-red-100 flex items-center justify-center border border-red-200">
                  <div className="w-3 h-0.5 bg-red-600 rounded-full"></div>
                </div>
                <h4 className="font-bold text-gray-900 text-lg">{t("activity.details.oldValues")}</h4>
              </div>

              {data.old_values && Object.keys(data.old_values).length > 0 ? (
                <div className="bg-white border border-red-100 p-6 rounded-2xl shadow-sm">
                  <pre className="text-[14px] text-red-900 overflow-x-auto leading-loose font-mono font-medium">
                    {JSON.stringify(data.old_values, null, 2)}
                  </pre>
                </div>
              ) : (
                <div className="flex flex-col items-center justify-center py-16 px-4 border-2 border-dashed border-gray-200 rounded-3xl bg-white">
                  <Box className="w-10 h-10 text-gray-300 mb-4" />
                  <p className="text-base font-bold text-gray-400">{t("activity.details.noPreviousState")}</p>
                </div>
              )}
            </div>

            <div className="p-8">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-8 h-8 rounded-xl bg-green-100 flex items-center justify-center border border-green-200">
                  <div className="w-3 h-3 relative">
                    <div className="absolute inset-x-0 top-1/2 -translate-y-1/2 h-0.5 bg-green-600 rounded-full"></div>
                    <div className="absolute inset-y-0 left-1/2 -translate-x-1/2 w-0.5 bg-green-600 rounded-full"></div>
                  </div>
                </div>
                <h4 className="font-bold text-gray-900 text-lg">{t("activity.details.newValues")}</h4>
              </div>

              {data.new_values && Object.keys(data.new_values).length > 0 ? (
                <div className="bg-white border border-green-100 p-6 rounded-2xl shadow-sm">
                  <pre className="text-[14px] text-green-900 overflow-x-auto leading-loose font-mono font-medium">
                    {JSON.stringify(data.new_values, null, 2)}
                  </pre>
                </div>
              ) : (
                <div className="flex flex-col items-center justify-center py-16 px-4 border-2 border-dashed border-gray-200 rounded-3xl bg-white">
                  <Box className="w-10 h-10 text-gray-300 mb-4" />
                  <p className="text-base font-bold text-gray-400">{t("activity.details.noNewState")}</p>
                </div>
              )}
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}
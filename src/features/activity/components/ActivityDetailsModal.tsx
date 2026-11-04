"use client";

import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { useQuery } from "@tanstack/react-query";
import { AdminActivityService } from "../services/AdminActivityService";
import { Loader2 } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";

interface ActivityDetailsModalProps {
  activityId: number | null;
  onClose: () => void;
}

export function ActivityDetailsModal({
  activityId,
  onClose,
}: ActivityDetailsModalProps) {
  const { t } = useLanguage();
  const { data, isLoading, isError } = useQuery({
    queryKey: ["activity", activityId],
    queryFn: () =>
      activityId
        ? AdminActivityService.getActivityLog(activityId)
        : Promise.reject("No ID"),
    enabled: !!activityId,
  });

  return (
    <Dialog open={!!activityId} onOpenChange={(open) => !open && onClose()}>
      <DialogContent className="max-w-2xl bg-white max-h-[80vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle className="text-xl font-semibold">
            {t("activity.details.activityDetails")}
          </DialogTitle>
        </DialogHeader>

        <div className="mt-4 space-y-4">
          {isLoading ? (
            <div className="flex justify-center py-8">
              <Loader2 className="h-6 w-6 animate-spin text-teal-600" />
            </div>
          ) : isError ? (
            <p className="text-red-600 text-sm py-4">
              {t("activity.details.loadFailed")}
            </p>
          ) : data ? (
            <div className="space-y-4">
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <div className="text-sm font-medium text-gray-500">{t("activity.columns.user")}</div>
                  <p className="text-sm font-semibold text-gray-900">
                    {(() => {
                      const rawUserType = (data as any).user_type || (data as any).additional_info?.user_type;
                      const formattedUserType = rawUserType ? (rawUserType.charAt(0).toUpperCase() + rawUserType.slice(1)) : undefined;
                      return data.user_name || data.user?.name || data.user?.email || formattedUserType || t("activity.details.unknownUser");
                    })()}
                  </p>
                </div>
                <div>
                  <div className="text-sm font-medium text-gray-500">
                    {t("activity.columns.dateTime")}
                  </div>
                  <p className="text-sm font-semibold text-gray-900">
                    {data.created_at ? new Date(data.created_at).toLocaleString() : t("activity.na")}
                  </p>
                </div>
                <div>
                  <div className="text-sm font-medium text-gray-500">{t("activity.columns.action")}</div>
                  <p className="text-sm font-semibold text-gray-900">
                    {data.action}
                  </p>
                </div>
                <div>
                  <div className="text-sm font-medium text-gray-500">{t("activity.columns.entity")}</div>
                  <p className="text-sm font-semibold text-gray-900">
                    {data.entity_type} {data.entity_id ? t("activity.details.entityId", { id: data.entity_id }) : ""}
                  </p>
                </div>
                <div>
                  <div className="text-sm font-medium text-gray-500">{t("activity.columns.ipAddress")}</div>
                  <p className="text-sm font-semibold text-gray-900">
                    {data.ip_address || t("activity.na")}
                  </p>
                </div>
                <div className="col-span-2">
                  <div className="text-sm font-medium text-gray-500">{t("activity.details.userAgent")}</div>
                  <p className="text-sm font-semibold text-gray-900 break-words">
                    {data.user_agent || t("activity.na")}
                  </p>
                </div>
              </div>

              {data.old_values && Object.keys(data.old_values).length > 0 && (
                <div className="mt-6 border-t pt-4">
                  <h3 className="text-sm font-semibold text-gray-900 mb-2">
                    {t("activity.details.oldValues")}
                  </h3>
                  <pre className="bg-gray-50 p-3 rounded-lg text-sm text-gray-700 overflow-x-auto whitespace-pre-wrap">
                    {JSON.stringify(data.old_values, null, 2)}
                  </pre>
                </div>
              )}

              {data.new_values && Object.keys(data.new_values).length > 0 && (
                <div className="mt-4">
                  <h3 className="text-sm font-semibold text-gray-900 mb-2">
                    {t("activity.details.newValues")}
                  </h3>
                  <pre className="bg-gray-50 p-3 rounded-lg text-sm text-gray-700 overflow-x-auto whitespace-pre-wrap">
                    {JSON.stringify(data.new_values, null, 2)}
                  </pre>
                </div>
              )}
            </div>
          ) : null}
        </div>
      </DialogContent>
    </Dialog>
  );
}
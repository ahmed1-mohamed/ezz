"use client";

import { useQuery } from "@tanstack/react-query";
import { Modal } from "@/components/ui/modal";
import { Badge } from "@/components/ui/badge";
import { Loader2, Check } from "lucide-react";
import { AdminSubscriptionsService } from "@/data/api-client";
import { useLanguage } from "@/contexts/LanguageContext";
import { getApiErrorMessage } from "@/lib/api-errors";

interface ViewCustomerPlanModalProps {
  open: boolean;
  onClose: () => void;
  planId: number | string | null;
}

export default function ViewCustomerPlanModal({
  open,
  onClose,
  planId,
}: ViewCustomerPlanModalProps) {
  const { t } = useLanguage();
  // staleTime 0: every (re)open of the modal flips `enabled` on and fetches fresh plan data once.
  const { data, isLoading, isError, error } = useQuery({
    queryKey: ["subscriptions", "customerPlan", planId],
    queryFn: () => {
      if (planId == null) return null;
      return AdminSubscriptionsService.getCustomerPlanById(planId);
    },
    enabled: planId != null && open,
    staleTime: 0,
  });

  const responsePayload = (data as any)?.data || data;
  const plan = responsePayload?.data || responsePayload || null;

  let features = plan?.features;
  if (typeof features === "string") {
    try {
      features = JSON.parse(features);
    } catch (e) {
      console.error("Error parsing features:", e);
    }
  }
  const featuresList: string[] = [];
  if (Array.isArray(features)) {
    features.forEach((feature: any) => {
      const isEnabled = feature.enabled === true || feature.enabled === 1 || feature.enabled === "true" || feature.enabled === "1" || feature.is_enabled === true || feature.is_enabled === 1 || feature.enabled === undefined;
      if (isEnabled) {
        let label = feature.name || feature.code;
        if (feature.limit !== undefined && feature.limit !== null && feature.limit !== "") {
          label += ` (${t("subscriptions.customerPlanCard.limitLabel", { limit: feature.limit === -1 || feature.limit === "-1" ? t("subscriptions.common.unlimited") : feature.limit })})`;
        }
        featuresList.push(label);
      }
    });
  } else if (features && typeof features === "object") {
    Object.entries(features).forEach(([key, value]) => {
      let formattedKey = key
        .split('_')
        .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
        .join(' ');
      if (key === 'map_filters') formattedKey = t("subscriptions.customerPlanCard.mapFilters");
      if (key === 'chat_support') formattedKey = t("subscriptions.customerPlanCard.chatSupport");
      let label = formattedKey;
      if (typeof value === 'boolean') {
        if (!value) return;
      } else if (value !== null && value !== '') {
        label = `${formattedKey} (${value === -1 || value === "-1" ? t("subscriptions.common.unlimited") : value})`;
      }
      featuresList.push(label);
    });
  }

  return (
    <Modal
      isOpen={open}
      onClose={onClose}
      title={t("subscriptions.viewCustomerPlanModal.title")}
      size="lg"
    >
      <div className="py-4">
        {isLoading ? (
          <div className="flex flex-col items-center justify-center py-12">
            <Loader2 className="h-8 w-8 animate-spin text-teal-600 mb-4" />
            <p className="text-gray-500">{t("subscriptions.updateCustomerPlanModal.loadingPlan")}</p>
          </div>
        ) : isError ? (
          <div className="flex flex-col items-center justify-center py-12">
            <p className="text-red-500 mb-2">{t("subscriptions.updateCustomerPlanModal.loadPlanFailed")}</p>
            <p className="text-sm text-gray-500 text-center">
              {getApiErrorMessage(error, t, t("subscriptions.viewCustomerPlanModal.unknownError"))}
            </p>
          </div>
        ) : !plan ? (
          <div className="flex flex-col items-center justify-center py-12">
            <p className="text-gray-500">{t("subscriptions.viewCustomerPlanModal.noData")}</p>
          </div>
        ) : (
          <div className="space-y-6">
            <div className="bg-gray-50 rounded-xl p-5 border border-gray-100 shadow-sm">
              <div className="flex justify-between items-start mb-4">
                <div>
                  <h3 className="text-2xl font-bold text-gray-900">{plan.name}</h3>
                  <div className="flex gap-2 mt-2 items-center flex-wrap">
                    <code className="text-xs text-gray-500 bg-white px-2 py-1 rounded border shadow-sm">
                      {t("subscriptions.common.codeLabel", { code: plan.code })}
                    </code>
                    {plan.sort_order !== undefined && (
                      <code className="text-xs text-gray-500 bg-white px-2 py-1 rounded border shadow-sm">
                        {t("subscriptions.common.sortOrderLabel", { value: plan.sort_order })}
                      </code>
                    )}
                    {plan.plan_id !== undefined && (
                      <code className="text-xs text-gray-500 bg-white px-2 py-1 rounded border shadow-sm">
                        {t("subscriptions.common.idLabel", { id: plan.plan_id })}
                      </code>
                    )}
                  </div>
                </div>
                <Badge
                  className={
                    plan.is_active
                      ? "bg-green-100 text-green-700 shadow-sm border-0"
                      : "bg-gray-200 text-gray-700 shadow-sm border-0"
                  }
                >
                  {plan.is_active ? t("common.active") : t("common.inactive")}
                </Badge>
              </div>

              <div className="flex items-baseline gap-1 mt-4">
                <span className="text-4xl font-extrabold bg-clip-text text-transparent bg-gradient-to-r from-gray-900 to-gray-600">
                  {plan.price} {plan.currency}
                </span>
                <span className="text-sm font-medium text-gray-500 ms-1">
                  /{plan.interval}
                </span>
              </div>
              
              <div className="text-sm text-gray-600 mt-4 border-t border-gray-200 pt-4">
                <strong className="text-gray-900 block mb-1">{t("subscriptions.addCustomerPlanModal.description")}</strong>
                {plan.description || t("subscriptions.viewCustomerPlanModal.noDescription")}
              </div>
            </div>

            <div>
              <h4 className="text-sm font-semibold text-gray-900 uppercase tracking-wider mb-3">
                {t("subscriptions.addCustomerPlanModal.includedFeatures")}
              </h4>
              <ul className="space-y-4 bg-white border border-gray-100 rounded-xl p-5 shadow-sm">
                {Array.isArray(features) && features.length > 0 ? (
                  features.map((feature: any, idx: number) => {
                    const isEnabled = feature.enabled === true || feature.enabled === 1 || feature.enabled === "true" || feature.enabled === "1" || feature.is_enabled === true || feature.is_enabled === 1 || feature.enabled === undefined;
                    return (
                      <li key={idx} className="flex flex-col gap-1.5 border-b border-gray-50 last:border-0 pb-4 last:pb-0">
                        <div className="flex items-center gap-3">
                          <div className={`flex-shrink-0 flex items-center justify-center w-6 h-6 rounded-full border ${isEnabled ? 'border-teal-200 bg-teal-50 text-teal-600' : 'border-gray-200 bg-gray-50 text-gray-400'}`}>
                            <Check className="w-4 h-4" />
                          </div>
                          <span className={`font-semibold text-base ${isEnabled ? 'text-gray-900' : 'text-gray-400 line-through'}`}>
                            {feature.name || feature.code}
                          </span>
                          {!isEnabled && (
                            <Badge variant="outline" className="text-[10px] uppercase px-1.5 py-0">{t("subscriptions.viewCustomerPlanModal.disabled")}</Badge>
                          )}
                        </div>
                        
                        {feature.description && (
                          <p className={`text-sm ms-9 ${isEnabled ? 'text-gray-500' : 'text-gray-400'}`}>
                            {feature.description}
                          </p>
                        )}
                        
                        {(feature.limit !== null || feature.unit !== null) && isEnabled && (
                          <div className="flex gap-3 text-xs text-gray-500 ms-9 mt-1 bg-gray-50 w-fit px-2 py-1 rounded-md border border-gray-100">
                            {feature.limit !== null && feature.limit !== undefined && (
                              <span>{t("subscriptions.viewCustomerPlanModal.limit")}: <strong className="text-gray-900">{feature.limit === -1 || feature.limit === "-1" ? t("subscriptions.common.unlimited") : feature.limit}</strong></span>
                            )}
                            {feature.unit !== null && feature.unit !== undefined && (
                              <span>{t("subscriptions.viewCustomerPlanModal.unit")}: <strong className="text-gray-900">{feature.unit}</strong></span>
                            )}
                          </div>
                        )}
                      </li>
                    );
                  })
                ) : featuresList.length > 0 ? (
                  featuresList.map((feature, idx) => (
                    <li key={idx} className="flex items-center gap-3 text-sm text-gray-700">
                      <div className="flex-shrink-0 flex items-center justify-center w-5 h-5 rounded-full border border-teal-200 bg-teal-50">
                        <Check className="w-3.5 h-3.5 text-teal-600" />
                      </div>
                      {feature}
                    </li>
                  ))
                ) : (
                  <li className="text-sm text-gray-400 italic text-center py-2">{t("subscriptions.viewCustomerPlanModal.noFeatures")}</li>
                )}
              </ul>
            </div>

            <div className="flex justify-between text-xs text-gray-400 border-t pt-4 px-1">
              {plan.created_at && <span>{t("subscriptions.common.createdLabel", { date: new Date(plan.created_at).toLocaleDateString() })}</span>}
              {plan.updated_at && <span>{t("subscriptions.common.updatedLabel", { date: new Date(plan.updated_at).toLocaleDateString() })}</span>}
            </div>
          </div>
        )}
      </div>
    </Modal>
  );
}

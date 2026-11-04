"use client";

import { useEffect } from "react";
import { useQuery } from "@tanstack/react-query";
import { useParams, useRouter } from "next/navigation";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { useSession } from "next-auth/react";
import { fetchAd } from "@/data/api-client";
import { ArrowLeft } from "lucide-react";
import { toast } from "sonner";
import { useLanguage } from "@/contexts/LanguageContext";
import { getApiErrorMessage } from "@/lib/api-errors";
import { API_ERROR_TOAST_ID } from "@/config/toast-config";
import { AdBasicInfo } from "@/features/ads/components/view/AdBasicInfo";
import { AdDetailsSection } from "@/features/ads/components/view/AdDetailsSection";
import { AdCTADetails } from "@/features/ads/components/view/AdCTADetails";
import { AdImage } from "@/features/ads/components/view/AdImage";
import { AdPlacementDetails } from "@/features/ads/components/view/AdPlacementDetails";
import { AdEntityDetails } from "@/features/ads/components/view/AdEntityDetails";
import { AdTimestamps } from "@/features/ads/components/view/AdTimestamps";

export default function ViewAdPage() {
  const { id } = useParams();
  const router = useRouter();
  const { data: session } = useSession();
  const { t } = useLanguage();
  const token = session?.user?.accessToken;

  // Keyed on the ad id only, so session object refreshes (e.g. on window focus) do not refetch the ad.
  const { data: adDetails, isPending: loading, isError, error } = useQuery<any>({
    queryKey: ["adDetails", id],
    queryFn: async () => {
      const response = await fetchAd(id as string, token as string);
      return (response as any)?.data || response || null;
    },
    enabled: !!id && !!token,
    retry: false,
    staleTime: 0,
    gcTime: 0,
  });

  useEffect(() => {
    if (!isError) return;
    const err = error as any;
    console.error("Error fetching ad details:", err);
    toast.error(getApiErrorMessage(err, t, t("ads.details.failedLoadDetails")), { id: API_ERROR_TOAST_ID });
  }, [isError, error, t]);

  if (loading) {
    return (
      <div className="flex items-center justify-center min-h-[60vh]">
        <div className="text-center">
          <div className="inline-block h-8 w-8 animate-spin rounded-full border-4 border-solid border-teal-600 border-r-transparent"></div>
          <p className="mt-4 text-sm text-gray-600">{t("ads.details.loading")}</p>
        </div>
      </div>
    );
  }

  if (!adDetails && !loading) {
    return (
      <div className="p-6">
        <Button variant="outline" onClick={() => router.back()} className="mb-6">
          <ArrowLeft className="w-4 h-4 me-2 rtl:rotate-180" />
          {t("ads.details.backToAds")}
        </Button>
        <div className="text-center py-12 text-gray-500">{t("ads.details.notFound")}</div>
      </div>
    );
  }

  return (
    <div className="p-6 max-w-8xl mx-auto space-y-6">
      <div className="flex items-center justify-between">
        <Button variant="outline" onClick={() => router.back()}>
          <ArrowLeft className="w-4 h-4 me-2 rtl:rotate-180" />
          {t("ads.details.backToAds")}
        </Button>
        <Button
          className="bg-teal-600 hover:bg-teal-700 text-white"
          onClick={() => router.push(`/admin/ads/${id}/edit`)}
        >
          {t("ads.details.editAd")}
        </Button>
      </div>

      <div className="bg-white rounded-xl border border-gray-200 shadow-sm p-6 space-y-6">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-12 h-12 rounded-lg bg-teal-100 flex items-center justify-center">
              <span className="text-teal-600 font-semibold text-lg">
                {(adDetails?.placement?.format || "A").charAt(0).toUpperCase()}
              </span>
            </div>
            <div>
              <h3 className="text-xl font-semibold text-gray-900">
                {adDetails?.title || adDetails?.creative_title || t("ads.details.untitledAd")}
              </h3>
              <p className="text-sm text-gray-500">
                {t("ads.details.creativeId")}: {adDetails?.creative_id}
              </p>
            </div>
          </div>
          <Badge
            variant={adDetails?.status === "active" ? "success" : "secondary"}
            className={
              adDetails?.status === "active"
                ? "bg-green-100 text-green-800"
                : "bg-gray-100 text-gray-800"
            }
          >
            {adDetails?.status === "active"
              ? t("ads.details.active")
              : t("ads.details.inactive")}
          </Badge>
        </div>

        <AdBasicInfo adDetails={adDetails} />
        <AdDetailsSection adDetails={adDetails} />
        <AdCTADetails adDetails={adDetails} />
        <AdImage adDetails={adDetails} />
        <AdPlacementDetails adDetails={adDetails} />
        <AdEntityDetails adDetails={adDetails} />
        <AdTimestamps adDetails={adDetails} />
      </div>
    </div>
  );
}

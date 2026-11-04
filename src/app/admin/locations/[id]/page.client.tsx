"use client";

import { useRouter, useParams } from "next/navigation";
import { ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";
import { EmptyState } from "@/components/ui/empty-state";
import { useLocationDetails } from "@/features/locations/hooks/useLocationDetails";
import { LocationDetail } from "@/features/locations/types";
import { LocationHeader } from "@/features/locations/components/view/LocationHeader";
import { LocationMainDetails } from "@/features/locations/components/view/LocationMainDetails";
import { LocationProjectsList } from "@/features/locations/components/view/LocationProjectsList";
import { LocationSidePanel } from "@/features/locations/components/view/LocationSidePanel";
import { LocationLoadingSkeleton } from "@/features/locations/components/view/LocationLoadingSkeleton";
import dynamic from "next/dynamic";
import { useState } from "react";
import { useLanguage } from "@/contexts/LanguageContext";
import { getApiErrorMessage } from "@/lib/api-errors";

const EditLocationModal = dynamic(() => import("@/components/modals/locations/EditLocationModal").then(mod => mod.EditLocationModal), { ssr: false });

export default function LocationViewPage() {
  const router = useRouter();
  const { t } = useLanguage();
  const params = useParams();
  const locationId = Number(params.id);
  const [isEditModalOpen, setIsEditModalOpen] = useState(false);

  const { locationData } = useLocationDetails(locationId);
  const { data, isLoading, isError, error } = locationData;

  if (isLoading) return <LocationLoadingSkeleton />;

  if (isError) {
    return (
      <div className="p-6 max-w-7xl mx-auto flex flex-col items-center">
        <EmptyState
          type="error"
          message={getApiErrorMessage(error, t, t("locations.view.loadFailed"))}
        />
        <Button variant="outline" onClick={() => router.back()} className="mt-4 border-gray-200 text-gray-700 hover:bg-gray-50">
          <ArrowLeft className="w-4 h-4 me-2 rtl:rotate-180" /> {t("locations.view.goBack")}
        </Button>
      </div>
    );
  }

  const payload = (data as any)?.data;
  const loc = (payload?.data ? payload.data : payload) as LocationDetail | undefined;
  if (!loc) return null;

  const cityName = loc.city?.name ?? t("common.na");
  const areaName = loc.area?.area_name ?? t("common.na");
  const regionName = loc.area?.region ?? t("common.na");
  const hasMapLink = !!loc.google_map_link;
  const hasCoords = !!loc.latitude && !!loc.longitude;
  const projects = loc.projects || [];
  const area = loc.area || null;

  return (
    <div className="p-3 sm:p-6 space-y-6 max-w-7xl mx-auto">
      <LocationHeader
        landmark={loc.landmark}
        cityName={cityName}
        areaName={areaName}
        onEdit={() => setIsEditModalOpen(true)}
      />

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-5">
        <div className="lg:col-span-2 space-y-5">
          <LocationMainDetails
            loc={loc}
            cityName={cityName}
            areaName={areaName}
            regionName={regionName}
            hasCoords={hasCoords}
          />
          <LocationProjectsList projects={projects} />
        </div>

        <LocationSidePanel
          loc={loc}
          area={area}
          hasCoords={hasCoords}
          hasMapLink={hasMapLink}
        />
      </div>

      <EditLocationModal
        locationId={locationId}
        isOpen={isEditModalOpen}
        onClose={() => setIsEditModalOpen(false)}
        onSuccess={() => locationData.refetch()}
      />
    </div>
  );
}
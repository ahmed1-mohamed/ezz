"use client";

import { useRouter, usePathname } from "next/navigation";
import { useState } from "react";
import {
  ArrowLeft,
  Edit,
  MapPin,
  Trash2,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { useSession } from "next-auth/react";
import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import { toast } from "sonner";
import { getApiErrorMessage } from "@/lib/api-errors";
import { API_ERROR_TOAST_ID } from "@/config/toast-config";
import { use } from "react";
import { fetchPropertyDetails } from "@/data/api-client";
import { AdminPropertiesService } from "@/features/properties/services/AdminPropertiesService";
import { PropertyMedia } from "@/features/properties/components/property-details/PropertyMedia";
import { PropertyDescription } from "@/features/properties/components/property-details/PropertyDescription";
import { PropertyInfo } from "@/features/properties/components/property-details/PropertyInfo";
import { PropertyFeatures } from "@/features/properties/components/property-details/PropertyFeatures";
import { PropertyPaymentPlans } from "@/features/properties/components/property-details/PropertyPaymentPlans";
import { extractPaymentPlans } from "@/lib/payment-plans";
import { PropertyFloorPlan } from "@/features/properties/components/property-details/PropertyFloorPlan";
import { PropertySidebar } from "@/features/properties/components/property-details/PropertySidebar";
import { EmptyState } from "@/components/ui/empty-state";
import { useLanguage } from "@/contexts/LanguageContext";

export default function PropertyDetailsPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = use(params);
  const router = useRouter();
  const pathname = usePathname();
  const routePrefix = pathname?.startsWith("/developer") ? "/developer" : "/admin";
  const { data: session } = useSession();
  const token = session?.user?.accessToken;
  const queryClient = useQueryClient();
  const { t } = useLanguage();

  const [deleteDialogOpen, setDeleteDialogOpen] = useState(false);

  const { data, isError, error, isLoading } = useQuery({
    queryKey: ["propertyDetails", id],
    queryFn: () => fetchPropertyDetails(Number(id), token!),
    select: (raw: any) => {
      const property = raw?.data ?? raw;
      if (!property) return null;
      return {
        ...property,
        property_type: property.property_type ? [property.property_type] : [],
        project: property.project ? [property.project] : [],
        _project: property.project ?? null,
        _building: property.building ?? null,
        floor: property.floor ?? null,
        area_name: property.zone_name || null,
        paymentPlansView: extractPaymentPlans(property),
        features: (property.features ?? []).map((f: any, index: number) => ({
          ...f,
          feature_id: f.feature_id ?? index + 1,
        })),
      };
    },
    enabled: !!token,
  });

  const deletePropertyMutation = useMutation({
    mutationFn: (propertyId: number) =>
      AdminPropertiesService.deleteProperty(propertyId),
    onSuccess: () => {
      toast.success(t("properties.messages.deleteSuccess"));
      queryClient.invalidateQueries({ queryKey: ["properties"] });
      router.push(`${routePrefix}/properties`);
    },
    onError: (error) => {
      toast.error(getApiErrorMessage(error, t, t("properties.messages.deleteFailed")), {
        id: API_ERROR_TOAST_ID,
      });
    },
  });

  if (isLoading)
    return (
      <div className="flex h-screen items-center justify-center text-gray-600 dark:text-gray-400">
        {t("common.loading")}
      </div>
    );
  if (isError)
    return (
      <EmptyState
        type="error"
        message={getApiErrorMessage(error, t, t("common.failedToLoad"))}
      />
    );
  if (!data)
    return (
      <EmptyState type="default" />
    );

  const property = data as any;
  const projectObj = Array.isArray(property._project)
    ? property._project[0]
    : Array.isArray(property.project)
      ? property.project[0]
      : property._project || property.project || null;

  const descriptionHtml =
    property.description || projectObj?.description || null;

  const projectMedias: any[] =
    projectObj?.medias ??
    projectObj?.media ??
    projectObj?.images ??
    property.project_medias ??
    property.projectMedias ??
    [];

  const floorPlanUrl =
    property.floor_plan_url ||
    property.medias?.find(
      (m: any) =>
        (m.media_type || "").toLowerCase() === "floor_plan" ||
        (m.media_type || "").toLowerCase() === "floorplan"
    )?.media_url ||
    projectMedias?.find(
      (m: any) =>
        (m.media_type || "").toLowerCase() === "floor_plan" ||
        (m.media_type || "").toLowerCase() === "floorplan"
    )?.media_url ||
    null;

  const availabilityLabel =
    t(`properties.create.options.availabilityStatus.${property.availability_status}`) ||
    property.availability_status;

  return (
    <div className="p-4 sm:p-6 lg:p-8 max-w-7xl mx-auto space-y-6">
      <div className="flex flex-wrap items-center justify-between gap-3 border-b pb-4 border-gray-200 dark:border-neutral-800">
        <div className="flex items-center gap-2 text-xs sm:text-sm text-gray-500 dark:text-gray-400">
          <button
            onClick={() => router.push(`${routePrefix}/properties`)}
            className="flex items-center gap-1.5 hover:text-teal-600 dark:hover:text-teal-400 transition-colors cursor-pointer"
          >
            <ArrowLeft className="h-4 w-4 rtl:rotate-180" />
            <span>{t("properties.title")}</span>
          </button>
          <span>/</span>
          <span className="font-medium text-gray-900 dark:text-gray-200 truncate max-w-[200px] sm:max-w-xs">
            {property.property_name}
          </span>
        </div>

        {property.property_id && (
          <div className="flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-gray-100 dark:bg-neutral-800 text-xs text-gray-600 dark:text-gray-400 font-mono">
            <span>{t("properties.details.id")}:</span>
            <span className="font-semibold text-gray-900 dark:text-gray-200">
              #{property.property_id}
            </span>
          </div>
        )}
      </div>

      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div className="space-y-1.5 min-w-0">
          <h1 className="text-2xl sm:text-3xl font-extrabold tracking-tight text-gray-900 dark:text-gray-100 truncate">
            {property.property_name}
          </h1>
          <div className="flex items-center gap-2.5 flex-wrap">
            {property.area_name && (
              <p className="text-gray-500 dark:text-gray-400 flex items-center gap-1 text-xs sm:text-sm">
                <MapPin className="h-3.5 w-3.5 text-teal-600 dark:text-teal-400 shrink-0" />
                <span>{property.area_name}</span>
              </p>
            )}
            <Badge
              variant={
                property.availability_status === "available"
                  ? "success"
                  : property.availability_status === "sold"
                    ? "destructive"
                    : "warning"
              }
              className="text-xs font-semibold px-2.5 py-0.5"
            >
              {availabilityLabel}
            </Badge>
            {property.unit_number && (
              <Badge variant="outline" className="text-xs font-mono">
                {t("properties.columns.unitNumber")}: {property.unit_number}
              </Badge>
            )}
          </div>
        </div>

        <div className="flex items-center gap-2.5 w-full sm:w-auto shrink-0">
          <Button
            variant="outline"
            className="flex-1 sm:flex-initial gap-2 border-gray-200 dark:border-neutral-700 hover:bg-teal-50 dark:hover:bg-teal-950/40 hover:border-teal-300 dark:hover:border-teal-800 text-gray-700 dark:text-gray-200 cursor-pointer"
            onClick={() => router.push(`${routePrefix}/properties/${id}/edit`)}
          >
            <Edit className="h-4 w-4 text-teal-600 dark:text-teal-400" />
            <span>{t("properties.breadcrumbs.edit")}</span>
          </Button>
          <Button
            variant="destructive"
            className="gap-2 bg-red-600 hover:bg-red-700 cursor-pointer"
            onClick={() => setDeleteDialogOpen(true)}
          >
            <Trash2 className="h-4 w-4" />
            <span className="hidden xs:inline sm:inline">{t("common.delete")}</span>
          </Button>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 lg:gap-8 items-start">
        <div className="lg:col-span-2 space-y-6 min-w-0">
          <PropertyMedia
            medias={property.medias}
            projectMedias={projectMedias}
            propertyName={property.property_name}
          />
          <PropertyDescription description={descriptionHtml} />
          <PropertyInfo
            bedrooms={property.bedrooms}
            bathrooms={property.bathrooms}
            size={property.size}
            floor={property.floor}
            bua_size={property.bua_size}
            plot_size={property.plot_size}
            parking_spaces={property.parking_spaces}
            maid_room={property.maid_room}
          />
          <PropertyFeatures features={property.features} />
          <PropertyPaymentPlans
            plans={property.paymentPlansView}
            propertyId={Number(id) || undefined}
            currency={property.currency ? String(property.currency).toUpperCase() : undefined}
          />
          <PropertyFloorPlan floorPlanUrl={floorPlanUrl} />
        </div>

        <div className="lg:col-span-1 space-y-6 lg:sticky lg:top-6">
          <PropertySidebar property={property} />
        </div>
      </div>

      <Dialog
        open={deleteDialogOpen}
        onOpenChange={(open) => !deletePropertyMutation.isPending && setDeleteDialogOpen(open)}
      >
        <DialogContent className="dark:bg-neutral-900 dark:border-neutral-800">
          <DialogHeader>
            <DialogTitle className="dark:text-gray-100">
              {t("properties.deleteDialog.title")}
            </DialogTitle>
            <DialogDescription className="dark:text-gray-400">
              {t("properties.deleteDialog.description")}
            </DialogDescription>
          </DialogHeader>
          <DialogFooter>
            <Button
              variant="outline"
              onClick={() => setDeleteDialogOpen(false)}
              disabled={deletePropertyMutation.isPending}
              className="dark:border-neutral-700 dark:text-gray-200"
            >
              {t("common.cancel")}
            </Button>
            <Button
              variant="destructive"
              onClick={() => deletePropertyMutation.mutate(Number(id))}
              disabled={deletePropertyMutation.isPending}
            >
              {deletePropertyMutation.isPending
                ? t("common.deleting")
                : t("common.delete")}
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </div>
  );
}
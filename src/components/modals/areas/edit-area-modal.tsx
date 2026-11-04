"use client";

import { useForm } from "@/hooks/use-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useAreaActions } from "@/hooks/use-area-actions";
import { Modal } from "@/components/ui/modal";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { areaSchema, toOptionalNumber, type AreaInput } from "@/validators/area.schema";
import { FieldError, FormErrorAlert } from "@/components/ui/form-message";
import { toast } from "sonner";
import { useState, useRef, useEffect } from "react";
import { MapPin, Loader2, Search } from "lucide-react";
import { useQuery } from "@tanstack/react-query";
import { AdminAreasService } from "@/data/api-client";
import { useLanguage } from "@/contexts/LanguageContext";
import { applyApiFormErrors } from "@/lib/form-utils";
import { API_ERROR_TOAST_ID } from "@/config/toast-config";

const AREA_FIELD_MAP: Record<string, keyof AreaInput> = {
  area_name: "dld_area_name",
  name: "dld_area_name",
  lat: "latitude",
  lng: "longitude",
};

interface EditAreaModalProps {
  isOpen: boolean;
  onClose: () => void;
  areaId: number;
  initialArea?: {
    area_id: number;
    area_name: string;
    latitude?: number | string;
    longitude?: number | string;
    description?: string;
  };
  onSuccess?: () => void;
}

export function EditAreaModal({ isOpen, onClose, areaId, initialArea, onSuccess }: EditAreaModalProps) {
  const [googleMapLink, setGoogleMapLink] = useState("");
  const [isExtracting, setIsExtracting] = useState(false);
  const modalContentRef = useRef<HTMLDivElement>(null);
  const { updateArea, isUpdating } = useAreaActions();
  const { t } = useLanguage();
  const {
    register,
    handleSubmit,
    setValue,
    reset,
    setError,
    getValues,
    formState: { errors },
  } = useForm<AreaInput>({
    resolver: zodResolver(areaSchema),
    defaultValues: {
      dld_area_name: "",
      latitude: undefined,
      longitude: undefined,
      description: "",
    },
  });
  const { data: areaData, isLoading: isFetching, isError } = useQuery({
    queryKey: ["areaDetails", areaId],
    queryFn: async () => {
      const response = await AdminAreasService.getArea(areaId);
      return (response as any).data?.data || (response as any).data || response;
    },
    enabled: isOpen && areaId != null,
  });
  const displayArea = areaData || initialArea;
  useEffect(() => {
    if (displayArea) {
      reset({
        dld_area_name: displayArea.area_name || displayArea.dld_area_name || "",
        latitude: displayArea.latitude ? Number(displayArea.latitude) : undefined,
        longitude: displayArea.longitude ? Number(displayArea.longitude) : undefined,
        description: displayArea.description || "",
      });
    }
  }, [displayArea, reset]);
  const resetAndClose = () => {
    reset();
    setGoogleMapLink("");
    onClose();
  };
  const handleClose = () => {
    if (isUpdating) return;
    resetAndClose();
  };
  const onSubmitForm = async (data: AreaInput) => {
    try {
      await updateArea({ areaId, data });
      toast.success(t("areas.messages.updateSuccess"));
      resetAndClose();
      if (onSuccess) onSuccess();
    } catch (error) {
      const { summary } = applyApiFormErrors(error, {
        setError,
        getValues,
        t,
        fieldMap: AREA_FIELD_MAP,
        fallbackMessage: t("areas.messages.updateFailed"),
      });
      toast.error(summary, { id: API_ERROR_TOAST_ID });
    }
  };
  const expandShortUrl = async (shortUrl: string): Promise<string | null> => {
    try {
      const res = await fetch(
        `/api/expand-url?shortUrl=${encodeURIComponent(shortUrl)}`,
      );
      const data = await res.json();
      return data.longUrl || null;
    } catch (error) {
      console.error("Error expanding URL:", error);
      return null;
    }
  };
  const extractCoordinatesFromUrl = (url: string): { lat: number; lng: number } | null => {
    try {
      const decodedUrl = decodeURIComponent(url);
      const patterns = [
        { regex: /@(-?\d+\.?\d*),(-?\d+\.?\d*)/, latFirst: true },
        { regex: /!3d(-?\d+\.?\d*).*?!4d(-?\d+\.?\d*)/, latFirst: true },
        { regex: /!4d(-?\d+\.?\d*).*?!3d(-?\d+\.?\d*)/, latFirst: false },
        { regex: /[?&]q=(-?\d+\.?\d*),(-?\d+\.?\d*)/, latFirst: true },
        { regex: /[?&]ll=(-?\d+\.?\d*),(-?\d+\.?\d*)/, latFirst: true },
        { regex: /[?&]center=(-?\d+\.?\d*),(-?\d+\.?\d*)/, latFirst: true },
        { regex: /[?&]sll=(-?\d+\.?\d*),(-?\d+\.?\d*)/, latFirst: true },
        { regex: /place\/.*?@(-?\d+\.?\d*),(-?\d+\.?\d*)/, latFirst: true },
        { regex: /data=.*?3d(-?\d+\.?\d*).*?4d(-?\d+\.?\d*)/, latFirst: true },
        {
          regex: /1s0x[a-f0-9]+:0x[a-f0-9]+.*?3d(-?\d+\.?\d*).*?4d(-?\d+\.?\d*)/,
          latFirst: true,
        },
        { regex: /pb=.*?2d(-?\d+\.?\d*).*?3d(-?\d+\.?\d*)/, latFirst: false },
      ];
      for (const { regex, latFirst } of patterns) {
        const match = decodedUrl.match(regex);
        if (match) {
          const lat = latFirst ? parseFloat(match[1]) : parseFloat(match[2]);
          const lng = latFirst ? parseFloat(match[2]) : parseFloat(match[1]);
          if (
            !isNaN(lat) &&
            !isNaN(lng) &&
            lat >= -90 &&
            lat <= 90 &&
            lng >= -180 &&
            lng <= 180
          ) {
            return { lat, lng };
          }
        }
      }
      return null;
    } catch (error) {
      console.error("Error extracting coordinates:", error);
      return null;
    }
  };
  const handleExtractFromGoogleMaps = async () => {
    if (!googleMapLink.trim()) {
      toast.error(t("areas.addModal.messages.enterMapLink"));
      return;
    }
    setIsExtracting(true);
    try {
      let expandedUrl = googleMapLink;
      if (googleMapLink.includes("goo.gl") || googleMapLink.includes("maps.app goo.gl")) {
        const expanded = await expandShortUrl(googleMapLink);
        if (expanded) {
          expandedUrl = expanded;
        }
      }
      const coordinates = extractCoordinatesFromUrl(expandedUrl);
      if (!coordinates) {
        toast.error(t("areas.addModal.messages.invalidMapLink"));
        return;
      }
      setValue("latitude", coordinates.lat, { shouldValidate: true });
      setValue("longitude", coordinates.lng, { shouldValidate: true });
      toast.success(t("areas.addModal.messages.extractSuccess"));
    } catch (error) {
      console.error("Error processing Google Maps link:", error);
      toast.error(t("areas.addModal.messages.extractError"));
    } finally {
      setIsExtracting(false);
    }
  };
  return (
    <Modal
      isOpen={isOpen}
      onClose={handleClose}
      title={t("areas.editModal.title")}
      size="md"
      showCloseButton={false}
      footer={
        <div className="flex gap-3 justify-end w-full">
          <Button
            variant="outline"
            onClick={handleClose}
            disabled={isUpdating}
          >
            {t("areas.editModal.close")}
          </Button>
          <Button
            className="bg-teal-600 hover:bg-teal-700 text-white"
            onClick={handleSubmit(onSubmitForm)}
            disabled={isUpdating || isFetching || isError}
          >
            {isUpdating && <Loader2 className="me-2 h-4 w-4 animate-spin" />}
            {isUpdating ? t("areas.editModal.updating") : t("areas.editModal.updateArea")}
          </Button>
        </div>
      }
    >
      <div ref={modalContentRef} className="max-h-[70vh] overflow-y-auto pe-2">
        <p className="text-sm text-gray-500 mb-6">
          {t("areas.editModal.description")}
        </p>
        {isFetching ? (
          <div className="flex flex-col items-center justify-center py-12">
            <Loader2 className="h-8 w-8 animate-spin text-teal-600 mb-4" />
            <p className="text-gray-500">{t("areas.editModal.loadingDetails")}</p>
          </div>
        ) : isError ? (
          <div className="flex flex-col items-center justify-center py-12">
            <p className="text-red-500 mb-2">{t("areas.editModal.failedDetails")}</p>
          </div>
        ) : (
          <form noValidate onSubmit={handleSubmit(onSubmitForm)} className="space-y-6">
            <FormErrorAlert message={errors.root?.server?.message} />
            <div>
              <Label htmlFor="google_map_link_edit">
                {t("areas.addModal.googleMapsLink")}
              </Label>
              <div className="flex gap-2 mt-1">
                <div className="relative flex-1">
                  <MapPin className="absolute start-3 top-1/2 -translate-y-1/2 h-4 w-4 text-gray-400" />
                  <Input
                    id="google_map_link_edit"
                    type="url"
                    dir="ltr"
                    placeholder={t("areas.addModal.googleMapsLinkPlaceholder")}
                    className="ps-10"
                    value={googleMapLink}
                    onChange={(e) => setGoogleMapLink(e.target.value)}
                  />
                </div>
                <Button
                  type="button"
                  variant="outline"
                  onClick={handleExtractFromGoogleMaps}
                  disabled={isExtracting || !googleMapLink.trim()}
                >
                  {isExtracting ? (
                    <Loader2 className="h-4 w-4 animate-spin" />
                  ) : (
                    <Search className="h-4 w-4" />
                  )}
                </Button>
              </div>
            </div>
            <div>
              <Label htmlFor="dld_area_name_edit">
                {t("areas.addModal.areaName")} <span className="text-red-500">*</span>
              </Label>
              <Input
                id="dld_area_name_edit"
                placeholder={t("areas.addModal.areaNamePlaceholder")}
                {...register("dld_area_name")}
                error={!!errors.dld_area_name}
                aria-invalid={!!errors.dld_area_name}
                className="mt-1"
              />
              <FieldError message={errors.dld_area_name ? t(String(errors.dld_area_name.message)) : undefined} />
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div>
                <Label htmlFor="latitude_edit">{t("areas.addModal.latitude")}</Label>
                <Input
                  id="latitude_edit"
                  type="number"
                  step="any"
                  placeholder={t("areas.addModal.latitudePlaceholder")}
                  dir="ltr"
                  {...register("latitude", { setValueAs: toOptionalNumber })}
                  error={!!errors.latitude}
                  aria-invalid={!!errors.latitude}
                  className="mt-1"
                />
                <FieldError message={errors.latitude ? t(String(errors.latitude.message)) : undefined} />
              </div>
              <div>
                <Label htmlFor="longitude_edit">{t("areas.addModal.longitude")}</Label>
                <Input
                  id="longitude_edit"
                  type="number"
                  step="any"
                  placeholder={t("areas.addModal.longitudePlaceholder")}
                  dir="ltr"
                  {...register("longitude", { setValueAs: toOptionalNumber })}
                  error={!!errors.longitude}
                  aria-invalid={!!errors.longitude}
                  className="mt-1"
                />
                <FieldError message={errors.longitude ? t(String(errors.longitude.message)) : undefined} />
              </div>
            </div>
            <div>
              <Label htmlFor="description_edit">{t("areas.addModal.description")}</Label>
              <Textarea
                id="description_edit"
                placeholder={t("areas.addModal.descriptionPlaceholder")}
                {...register("description")}
                error={!!errors.description}
                aria-invalid={!!errors.description}
                className="mt-1"
                rows={3}
              />
              <FieldError message={errors.description ? t(String(errors.description.message)) : undefined} />
            </div>
          </form>
        )}
      </div>
    </Modal>
  );
}

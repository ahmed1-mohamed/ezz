"use client";

import { Modal } from "@/components/ui/modal";
import { Button } from "@/components/ui/button";
import { Loader2 } from "lucide-react";
import { FormProvider } from "react-hook-form";
import { FormErrorAlert } from "@/components/ui/form-message";
import { useEditLocationForm } from "./hooks";

import { GoogleMapsExtractor } from "./components/GoogleMapsExtractor";
import { LocationBasicInfo } from "./components/LocationBasicInfo";
import { LocationCoordinates } from "./components/LocationCoordinates";
import { LocationBoundaries } from "./components/LocationBoundaries";
import { LocationAdditionalDetails } from "./components/LocationAdditionalDetails";

interface EditLocationModalProps {
  locationId: number;
  isOpen: boolean;
  onClose: () => void;
  onSuccess: () => void;
}

export function EditLocationModal({
  locationId,
  isOpen,
  onClose,
  onSuccess,
}: EditLocationModalProps) {
  const {
    methods,
    cities,
    areas,
    loading,
    isExtracting,
    isUpdating,
    handleExtractLocation,
    onSubmit,
    handleClose,
    t,
  } = useEditLocationForm(locationId, isOpen, onClose, onSuccess);

  const { handleSubmit, formState: { errors } } = methods;

  return (
    <Modal
      isOpen={isOpen}
      onClose={handleClose}
      title={t("locations.form.editLocation")}
      size="lg"
      showCloseButton={false}
      footer={
        <div className="flex gap-3 justify-end w-full">
          <Button variant="outline" onClick={handleClose} disabled={isUpdating}>
            {t("common.cancel")}
          </Button>
          <Button
            className="bg-teal-600 hover:bg-teal-700 text-white"
            onClick={handleSubmit(onSubmit)}
            disabled={isUpdating || isExtracting || loading}
          >
            {isUpdating ? (
              <>
                <Loader2 className="h-4 w-4 me-2 animate-spin" />
                {t("common.saving")}
              </>
            ) : (
              t("common.saveChanges")
            )}
          </Button>
        </div>
      }
    >
      {loading ? (
        <div className="flex justify-center items-center py-12">
          <Loader2 className="h-8 w-8 animate-spin text-teal-600" />
        </div>
      ) : (
        <FormProvider {...methods}>
          <div className="space-y-6 max-h-[70vh] overflow-y-auto pe-2">
            <FormErrorAlert message={errors.root?.server?.message} />
            <LocationBasicInfo cities={cities} areas={areas} loading={loading} />
            <GoogleMapsExtractor
              isExtracting={isExtracting}
              onExtract={handleExtractLocation}
            />
            <div className="grid grid-cols-2 gap-4">
              <LocationCoordinates />
            </div>
            <LocationBoundaries />
            <LocationAdditionalDetails />
          </div>
        </FormProvider>
      )}
    </Modal>
  );
}

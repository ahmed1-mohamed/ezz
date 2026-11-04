import { AlertTriangle } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import dynamic from "next/dynamic";
import { CityInput } from "@/validators/city.schema";

const AddCityModal = dynamic(() => import("@/components/modals/cities/add-city-modal").then(mod => mod.AddCityModal), { ssr: false });
const ViewCityModal = dynamic(() => import("@/components/modals/cities/view-city-modal").then(mod => mod.ViewCityModal), { ssr: false });
const EditCityModal = dynamic(() => import("@/components/modals/cities/edit-city-modal").then(mod => mod.EditCityModal), { ssr: false });
const BulkImportCitiesModal = dynamic(() => import("@/components/modals/cities/bulk-import-cities-modal").then(mod => mod.BulkImportCitiesModal), { ssr: false });

interface City {
  id: number;
  name: string;
  areaName: string;
  countryName: string;
  locationsCount: number;
  projectsCount: number;
  createdAt: string;
  updatedAt: string;
  status: boolean;
}

interface CitiesModalsProps {
  isAddCityModalOpen: boolean;
  setIsAddCityModalOpen: (val: boolean) => void;
  isViewModalOpen: boolean;
  setIsViewModalOpen: (val: boolean) => void;
  isEditModalOpen: boolean;
  setIsEditModalOpen: (val: boolean) => void;
  isImportModalOpen: boolean;
  setIsImportModalOpen: (val: boolean) => void;
  deleteDialogOpen: boolean;
  setDeleteDialogOpen: (val: boolean) => void;
  selectedCityId: number | null;
  setSelectedCityId: (id: number | null) => void;
  cityToDelete: number | null;
  setCityToDelete: (id: number | null) => void;
  selectedCity: City | null;
  cities: City[];
  createCityMutation: any;
  updateCityMutation: any;
  deleteCityMutation: any;
  t: (key: string) => string;
}

export function CitiesModals({
  isAddCityModalOpen,
  setIsAddCityModalOpen,
  isViewModalOpen,
  setIsViewModalOpen,
  isEditModalOpen,
  setIsEditModalOpen,
  isImportModalOpen,
  setIsImportModalOpen,
  deleteDialogOpen,
  setDeleteDialogOpen,
  selectedCityId,
  setSelectedCityId,
  cityToDelete,
  setCityToDelete,
  selectedCity,
  cities,
  createCityMutation,
  updateCityMutation,
  deleteCityMutation,
  t,
}: CitiesModalsProps) {
  const handleUpdateCity = async (params: {
    cityId: number;
    data: CityInput;
  }): Promise<void> => {
    await updateCityMutation.mutateAsync(params);
  };

  return (
    <>
      <AddCityModal
        isOpen={isAddCityModalOpen}
        onClose={() => setIsAddCityModalOpen(false)}
        isPending={createCityMutation.isPending}
        onSubmit={async (data: CityInput) => {
          await createCityMutation.mutateAsync(data);
          setIsAddCityModalOpen(false);
        }}
      />

      <ViewCityModal
        city={selectedCity}
        isOpen={isViewModalOpen}
        onClose={() => {
          setIsViewModalOpen(false);
          setSelectedCityId(null);
        }}
        onEdit={() => {
          setIsViewModalOpen(false);
          setIsEditModalOpen(true);
        }}
        onDelete={() => {
          setIsViewModalOpen(false);
          if (selectedCityId !== null) {
            setCityToDelete(selectedCityId);
            setDeleteDialogOpen(true);
          }
        }}
      />

      {selectedCityId !== null && (
        <EditCityModal
          cityId={selectedCityId}
          isOpen={isEditModalOpen}
          onClose={() => {
            setIsEditModalOpen(false);
            setSelectedCityId(null);
          }}
          onSuccess={() => {
            setIsEditModalOpen(false);
            setSelectedCityId(null);
          }}
          onUpdate={handleUpdateCity}
          isUpdating={updateCityMutation.isPending}
        />
      )}

      <Dialog
        open={deleteDialogOpen && cityToDelete !== null}
        onOpenChange={(open) => {
          if (deleteCityMutation.isPending) return;
          setDeleteDialogOpen(open);
          if (!open) setCityToDelete(null);
        }}
      >
        <DialogContent className="sm:max-w-md bg-white">
          <DialogHeader>
            <DialogTitle className="flex items-center gap-2 text-red-600">
              <AlertTriangle className="h-5 w-5" />
              {t("cities.deleteTitle")}
            </DialogTitle>
            <DialogDescription>
              {t("cities.deleteConfirm")}
            </DialogDescription>
          </DialogHeader>
          <div className="py-4">
            {cityToDelete && (
              <div className="bg-gray-50 rounded-lg p-3 space-y-2">
                <p className="font-medium text-gray-900">
                  {cities.find((c) => c.id === cityToDelete)?.name}
                </p>
                <p className="text-sm text-gray-500">
                  {cities.find((c) => c.id === cityToDelete)?.countryName}
                </p>
              </div>
            )}
          </div>
          <DialogFooter className="sm:justify-end">
            <Button
              variant="outline"
              onClick={() => {
                setDeleteDialogOpen(false);
                setCityToDelete(null);
              }}
              disabled={deleteCityMutation.isPending}
            >
              {t("cities.cancelBtn")}
            </Button>
            <Button
              variant="destructive"
              onClick={() => {
                if (cityToDelete) {
                  deleteCityMutation.mutate(cityToDelete, {
                    onSuccess: () => {
                      setDeleteDialogOpen(false);
                      setCityToDelete(null);
                    },
                  });
                }
              }}
              disabled={deleteCityMutation.isPending}
              className="bg-red-600 hover:bg-red-700 text-white"
            >
              {deleteCityMutation.isPending
                ? t("cities.deletingBtn")
                : t("cities.deleteBtn")}
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>

      {isImportModalOpen && (
        <BulkImportCitiesModal
          isOpen={isImportModalOpen}
          onClose={() => setIsImportModalOpen(false)}
        />
      )}
    </>
  );
}
"use client";

import { useState } from "react";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { toast } from "sonner";
import { Button } from "@/components/ui/button";
import { Plus, Edit, Trash2 } from "lucide-react";
import { deleteBuilding } from "@/data/api-client";
import { Building } from "../../types";
import { AddBuildingModal } from "@/components/modals/projects/add-building-modal";
import { EditBuildingModal } from "@/components/modals/projects/edit-building-modal";
import { DeleteFeatureModal } from "@/components/modals/projects/delete-feature-modal";
import { getApiErrorMessage } from "@/lib/api-errors";
import { API_ERROR_TOAST_ID } from "@/config/toast-config";
import { useLanguage } from "@/contexts/LanguageContext";
import { useRouter } from "next/navigation";


interface BuildingsTabProps {
  projectId: number;
  token: string;
  buildings: Building[];
}

export function BuildingsTab({ projectId, token, buildings }: BuildingsTabProps) {
  const queryClient = useQueryClient();
  const { t } = useLanguage();
  const router = useRouter();

  const [isBuildingModalOpen, setIsBuildingModalOpen] = useState(false);
  const [editingBuilding, setEditingBuilding] = useState<number | null>(null);
  const [isEditBuildingModalOpen, setIsEditBuildingModalOpen] = useState(false);
  const [buildingToDelete, setBuildingToDelete] = useState<number | null>(null);
  const [isDeleteBuildingModalOpen, setIsDeleteBuildingModalOpen] = useState(false);

  const deleteBuildingMutation = useMutation({
    mutationFn: (buildingId: number) => deleteBuilding(buildingId, token),
    onSuccess: () => {
      toast.success(t("projects.messages.buildingDeleteSuccess"));
      queryClient.invalidateQueries({ queryKey: ["projectDetails", projectId.toString()] });
      router.refresh();
      setIsDeleteBuildingModalOpen(false);
      setBuildingToDelete(null);
    },
    onError: (error) => {
      toast.error(getApiErrorMessage(error, t, t("projects.messages.buildingDeleteFailed")), { id: API_ERROR_TOAST_ID });
    },
  });

  return (
    <div>
      <div className="flex items-center justify-between mb-4">
        <h3 className="text-lg font-semibold">
          {t("projects.details.buildingsCount", { count: buildings.length })}
        </h3>
        <div className="flex gap-2">
          <Button
            className="bg-[#008081] hover:bg-[#006666] text-white gap-2"
            onClick={() => setIsBuildingModalOpen(true)}
          >
            <Plus className="h-4 w-4" />
            {t("projects.details.addBuilding")}
          </Button>
        </div>
      </div>
      <div className="space-y-4">
        {buildings.length === 0 ? (
          <div className="text-center py-12 text-gray-500">
            {t("projects.details.noBuildings")}
          </div>
        ) : (
          buildings.map((building, index) => (
            <div
              key={`building-${building.building_id || (building as any).id || index}-${index}`}
              className="border border-gray-200 rounded-lg p-5 hover:shadow-md transition-shadow"
            >
              <div className="flex items-center justify-between mb-4">
                <div>
                  <h4 className="text-lg font-semibold text-gray-900">
                    {building.building_name}
                  </h4>
                  <p className="text-sm text-gray-500">
                    {t("projects.details.floorsCount", { count: building.total_floors })}
                  </p>
                </div>
                <div className="flex items-center gap-2">
                  <Button
                    variant="ghost"
                    size="icon"
                    onClick={() => {
                      if (!building) {
                        toast.error(t("buildings.errors.dataMissing"));
                        return;
                      }
                      const idToEdit = building?.building_id || (building as any)?.id || (building as any)?.project_building_id;
                      if (!idToEdit) {
                        toast.error(t("buildings.errors.idMissing"));
                      }
                      setEditingBuilding(idToEdit || (building as any)?.id || 0);
                      setIsEditBuildingModalOpen(true);
                    }}
                  >
                    <Edit className="h-4 w-4" />
                  </Button>
                  <Button
                    variant="ghost"
                    size="icon"
                    onClick={() => {
                      if (!building) return;
                      const idToDelete = building?.building_id || (building as any)?.id || (building as any)?.project_building_id;
                      setBuildingToDelete(idToDelete || (building as any)?.id || 0);
                      setIsDeleteBuildingModalOpen(true);
                    }}
                  >
                    <Trash2 className="h-4 w-4 text-red-500" />
                  </Button>
                </div>
              </div>
              <div className="grid grid-cols-4 gap-4">
                <div>
                  <p className="text-xs text-gray-500 mb-1">
                    {t("buildings.totalUnits")}
                  </p>
                  <p className="text-lg font-semibold text-gray-900">
                    {building.total_units}
                  </p>
                </div>
                <div>
                  <p className="text-xs text-gray-500 mb-1">
                    {t("common.statusLabel")}
                  </p>
                  <p className="text-lg font-semibold text-gray-900">
                    {building.construction_status}
                  </p>
                </div>
                <div>
                  <p className="text-xs text-gray-500 mb-1">{t("projects.columns.type")}</p>
                  <p className="text-lg font-semibold text-gray-900">
                    {building.building_type}
                  </p>
                </div>
                <div>
                  <p className="text-xs text-gray-500 mb-1">
                    {t("unitsTab.parking")}
                  </p>
                  <p className="text-lg font-semibold text-gray-900">
                    {building.parking_spaces}
                  </p>
                </div>
              </div>
            </div>
          ))
        )}
      </div>

      <AddBuildingModal
        isOpen={isBuildingModalOpen}
        onClose={() => setIsBuildingModalOpen(false)}
        projectId={projectId}
      />

      <EditBuildingModal
        buildingId={editingBuilding!}
        projectId={projectId}
        isOpen={isEditBuildingModalOpen}
        onClose={() => {
          setIsEditBuildingModalOpen(false);
          setEditingBuilding(null);
        }}
      />

      <DeleteFeatureModal
        isOpen={isDeleteBuildingModalOpen}
        onClose={() => {
          setIsDeleteBuildingModalOpen(false);
          setBuildingToDelete(null);
        }}
        onConfirm={() => {
          if (buildingToDelete) {
            deleteBuildingMutation.mutate(buildingToDelete);
          }
        }}
        feature={null}
        isDeleting={deleteBuildingMutation.isPending}
      />
    </div>
  );
}

"use client";

import { useState } from "react";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { toast } from "sonner";
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import { Badge } from "@/components/ui/badge";
import { Plus, Edit, Trash2 } from "lucide-react";
import { deleteProjectFeature } from "@/data/api-client";
import { Feature } from "../../types";
import { AddProjectFeatureModal } from "@/components/modals/projects/add-project-feature-modal";
import { DeleteFeatureModal } from "@/components/modals/projects/delete-feature-modal";
import { getApiErrorMessage } from "@/lib/api-errors";
import { API_ERROR_TOAST_ID } from "@/config/toast-config";
import { useLanguage } from "@/contexts/LanguageContext";


interface FeaturesTabProps {
  projectId: number;
  token: string;
  features: Feature[];
}

export function FeaturesTab({ projectId, token, features }: FeaturesTabProps) {
  const queryClient = useQueryClient();
  const { t } = useLanguage();

  const [selectedFeatures, setSelectedFeatures] = useState<number[]>([]);
  const [isAddFeatureModalOpen, setIsAddFeatureModalOpen] = useState(false);
  const [featureToDelete, setFeatureToDelete] = useState<Feature | null>(null);
  const [isDeleteFeatureModalOpen, setIsDeleteFeatureModalOpen] = useState(false);

  const deleteFeatureMutation = useMutation({
    mutationFn: (featureId: number) => deleteProjectFeature(projectId, featureId, token),
    onSuccess: () => {
      toast.success(t("projects.messages.featureDeleteSuccess"));
      queryClient.invalidateQueries({ queryKey: ["projectDetails", projectId.toString()] });
      setIsDeleteFeatureModalOpen(false);
      setFeatureToDelete(null);
    },
    onError: (error) => {
      toast.error(getApiErrorMessage(error, t, t("projects.messages.featureDeleteFailed")), { id: API_ERROR_TOAST_ID });
    },
  });

  const handleDeleteFeature = (feature: Feature) => {
    setFeatureToDelete(feature);
    setIsDeleteFeatureModalOpen(true);
  };

  const confirmDeleteFeature = () => {
    if (featureToDelete) {
      deleteFeatureMutation.mutate(featureToDelete.feature_id);
    }
  };

  return (
    <div>
      <div className="flex items-center justify-between mb-4">
        <h3 className="text-lg font-semibold">{t("projects.details.projectFeatures")}</h3>
        <Button
          className="bg-[#008081] hover:bg-[#006666] text-white gap-2"
          onClick={() => setIsAddFeatureModalOpen(true)}
        >
          <Plus className="h-4 w-4" />
          {t("projects.details.addProjectFeature")}
        </Button>
      </div>
      {features.length === 0 ? (
        <div className="text-center py-12 text-gray-500">
          {t("projects.features.noFeaturesAvailable")}
        </div>
      ) : (
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead className="border-b border-gray-200 bg-gray-50">
              <tr>
                <th className="px-3 py-3 text-start">
                  <Checkbox />
                </th>
                <th className="px-3 py-3 text-start text-xs font-semibold text-gray-900">
                  {t("projects.details.featuresTable.featureName")}
                </th>
                <th className="px-3 py-3 text-start text-xs font-semibold text-gray-900">
                  {t("projects.features.value")}
                </th>
                <th className="px-3 py-3 text-start text-xs font-semibold text-gray-900">
                  {t("projects.details.featuresTable.description")}
                </th>
                <th className="px-3 py-3 text-start text-xs font-semibold text-gray-900">
                  {t("projects.details.featuresTable.isAmenity")}
                </th>
                <th className="px-3 py-3 text-start text-xs font-semibold text-gray-900">
                  {t("projects.columns.actions")}
                </th>
              </tr>
            </thead>
            <tbody>
              {features.map((feature, index) => (
                <tr
                  key={`feat-${feature.feature_id || index}-${index}`}
                  className="border-b border-gray-200 hover:bg-gray-50"
                >
                  <td className="px-3 py-3">
                    <Checkbox
                      checked={selectedFeatures.includes(feature.feature_id)}
                      onCheckedChange={(checked) => {
                        if (checked) {
                          setSelectedFeatures([...selectedFeatures, feature.feature_id]);
                        } else {
                          setSelectedFeatures(
                            selectedFeatures.filter((id) => id !== feature.feature_id)
                          );
                        }
                      }}
                    />
                  </td>
                  <td className="px-3 py-3 text-sm text-gray-900">
                    {feature.feature_name}
                  </td>
                  <td className="px-3 py-3 text-sm text-gray-600">
                    {feature.value}
                  </td>
                  <td className="px-3 py-3 text-sm text-gray-600">
                    {feature.description}
                  </td>
                  <td className="px-3 py-3">
                    <Badge
                      className={
                        feature.is_amenity
                          ? "bg-green-50 text-green-700"
                          : "bg-gray-50 text-gray-700"
                      }
                    >
                      {feature.is_amenity ? t("common.yes") : t("common.no")}
                    </Badge>
                  </td>
                  <td className="px-3 py-3 text-sm text-gray-500">
                    <div className="flex items-center gap-2">
                      <Button
                        variant="ghost"
                        size="sm"
                        className="h-8 w-8 p-0"

                      >
                        <Edit className="h-4 w-4" />
                      </Button>
                      <Button
                        variant="ghost"
                        size="sm"
                        className="h-8 w-8 p-0 text-red-600 hover:text-red-700"
                        onClick={() => handleDeleteFeature(feature)}
                      >
                        <Trash2 className="h-4 w-4" />
                      </Button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}

      <AddProjectFeatureModal
        isOpen={isAddFeatureModalOpen}
        onClose={() => setIsAddFeatureModalOpen(false)}
        projectId={projectId}
      />


      <DeleteFeatureModal
        isOpen={isDeleteFeatureModalOpen}
        onClose={() => {
          setIsDeleteFeatureModalOpen(false);
          setFeatureToDelete(null);
        }}
        onConfirm={confirmDeleteFeature}
        feature={featureToDelete}
        isDeleting={deleteFeatureMutation.isPending}
      />
    </div>
  );
}
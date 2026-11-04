"use client";

import { useState } from "react";
import { UseFormReturn } from "react-hook-form";
import { Button } from "@/components/ui/button";
import { Plus, Layers, Edit2, Trash2, Building2, Car, Layers3, Home } from "lucide-react";
import { CreateProjectInput } from "@/validators/create-project.schema";
import { SeoFieldsSection } from "@/components/shared/SeoFieldsSection";
import { useLanguage } from "@/contexts/LanguageContext";
import {
  AddProjectBuildingModal,
  ProjectBuildingItem,
} from "./AddProjectBuildingModal";
import { BulkAddProjectBuildingsModal } from "./BulkAddProjectBuildingsModal";

interface ProjectBuildingsFormProps {
  form: UseFormReturn<CreateProjectInput>;
  buildings?: ProjectBuildingItem[];
  setBuildings?: React.Dispatch<React.SetStateAction<ProjectBuildingItem[]>>;
}

export function ProjectBuildingsForm({
  form,
  buildings: externalBuildings,
  setBuildings: externalSetBuildings,
}: ProjectBuildingsFormProps) {
  const { register, watch, setValue } = form;
  const { language } = useLanguage();
  const isAr = language === "ar";

  const [internalBuildings, setInternalBuildings] = useState<ProjectBuildingItem[]>([]);
  const buildings = externalBuildings ?? internalBuildings;
  const setBuildings = externalSetBuildings ?? setInternalBuildings;
  const [isAddModalOpen, setIsAddModalOpen] = useState(false);
  const [isBulkModalOpen, setIsBulkModalOpen] = useState(false);
  const [editingBuilding, setEditingBuilding] = useState<ProjectBuildingItem | null>(null);

  const handleSaveBuilding = (building: ProjectBuildingItem) => {
    if (editingBuilding) {
      setBuildings((prev) =>
        prev.map((b) => (b.id === building.id ? building : b))
      );
      setEditingBuilding(null);
    } else {
      setBuildings((prev) => [...prev, building]);
    }
  };

  const handleAddBulkBuildings = (newBuildings: ProjectBuildingItem[]) => {
    setBuildings((prev) => [...prev, ...newBuildings]);
  };

  const handleEditBuilding = (building: ProjectBuildingItem) => {
    setEditingBuilding(building);
    setIsAddModalOpen(true);
  };

  const handleDeleteBuilding = (id: string) => {
    setBuildings((prev) => prev.filter((b) => b.id !== id));
  };

  const handleOpenAddModal = () => {
    setEditingBuilding(null);
    setIsAddModalOpen(true);
  };

  return (
    <div className="space-y-4">
      {/* ── Project Buildings Card ──────────────────────────────────────── */}
      <div className="bg-white dark:bg-neutral-900 rounded-xl border border-gray-200 dark:border-neutral-800 p-5 sm:p-6 space-y-3.5 shadow-2xs">
        <div>
          <h2 className="text-sm sm:text-base font-semibold text-gray-900 dark:text-gray-100">
            {isAr ? "مباني المشروع" : "Project Buildings"}
          </h2>
          <p className="text-xs text-gray-500 dark:text-gray-400 mt-0.5 leading-relaxed">
            {isAr
              ? "مباني المشروع — تحتوي كل منها على الأدوار، والوحدات، والحالة، والنوع ومواقف السيارات."
              : "The project's buildings — each with floors, units, status, type and parking."}
          </p>
        </div>

        {/* Empty state or Buildings list */}
        {buildings.length === 0 ? (
          <div className="rounded-lg border border-dashed border-gray-200 dark:border-neutral-800 py-6 px-4 text-center text-xs text-gray-400 dark:text-gray-500">
            {isAr ? "لا توجد مباني بعد." : "No buildings yet."}
          </div>
        ) : (
          <div className="space-y-2">
            {buildings.map((building) => (
              <div
                key={building.id}
                className="flex items-center justify-between p-3 rounded-lg border border-gray-200 dark:border-neutral-800 bg-gray-50/50 dark:bg-neutral-950/40 hover:bg-gray-50 dark:hover:bg-neutral-900 transition-colors gap-3"
              >
                <div className="space-y-1 flex-1 min-w-0">
                  <div className="flex flex-wrap items-center gap-2">
                    <div className="w-7 h-7 rounded-md bg-teal-50 dark:bg-teal-950/50 text-[#008081] flex items-center justify-center shrink-0">
                      <Building2 className="h-4 w-4" />
                    </div>
                    <h4 className="text-xs sm:text-sm font-semibold text-gray-900 dark:text-gray-100 truncate">
                      {building.building_name}
                    </h4>
                    <span className="text-[11px] px-2 py-0.5 rounded-full bg-teal-50 dark:bg-teal-950/50 text-[#008081] dark:text-teal-300 font-medium">
                      {building.building_type}
                    </span>
                    <span className="text-[11px] px-2 py-0.5 rounded-full bg-gray-100 dark:bg-neutral-800 text-gray-600 dark:text-gray-300 font-medium">
                      {building.construction_status}
                    </span>
                  </div>

                  {building.description && (
                    <p className="text-[11px] text-gray-500 dark:text-gray-400 truncate">
                      {building.description}
                    </p>
                  )}

                  <div className="flex flex-wrap items-center gap-3 text-[11px] text-gray-600 dark:text-gray-400 pt-0.5">
                    <div className="flex items-center gap-1">
                      <Layers3 className="h-3 w-3 text-gray-400" />
                      <span>
                        {building.total_floors} {isAr ? "طابق" : "Floors"}
                      </span>
                    </div>
                    <span>•</span>
                    <div className="flex items-center gap-1">
                      <Home className="h-3 w-3 text-gray-400" />
                      <span>
                        {building.total_units} {isAr ? "وحدة" : "Units"}
                      </span>
                    </div>
                    {building.parking_spaces !== undefined && building.parking_spaces > 0 && (
                      <>
                        <span>•</span>
                        <div className="flex items-center gap-1">
                          <Car className="h-3 w-3 text-gray-400" />
                          <span>
                            {building.parking_spaces} {isAr ? "موقف" : "Parking"}
                          </span>
                        </div>
                      </>
                    )}
                    {building.completion_date && (
                      <>
                        <span>•</span>
                        <span>
                          {isAr ? "التسليم: " : "Completion: "}
                          {building.completion_date}
                        </span>
                      </>
                    )}
                  </div>
                </div>

                {/* Actions: Edit, Delete */}
                <div className="flex items-center gap-1 shrink-0">
                  <Button
                    type="button"
                    variant="ghost"
                    size="icon"
                    onClick={() => handleEditBuilding(building)}
                    className="h-7 w-7 text-gray-500 hover:text-gray-900 dark:hover:text-gray-100 cursor-pointer"
                  >
                    <Edit2 className="h-3.5 w-3.5" />
                  </Button>
                  <Button
                    type="button"
                    variant="ghost"
                    size="icon"
                    onClick={() => handleDeleteBuilding(building.id)}
                    className="h-7 w-7 text-gray-400 hover:text-red-600 hover:bg-red-50 dark:hover:bg-red-950/30 cursor-pointer"
                  >
                    <Trash2 className="h-3.5 w-3.5" />
                  </Button>
                </div>
              </div>
            ))}
          </div>
        )}

        {/* Action buttons: + Add building, Bulk add */}
        <div className="flex items-center gap-2 pt-0.5">
          <Button
            type="button"
            variant="outline"
            onClick={handleOpenAddModal}
            className="gap-1.5 text-xs h-7 sm:h-8 px-2.5 text-gray-700 dark:text-gray-300 border-gray-300 dark:border-neutral-700 hover:bg-gray-50 dark:hover:bg-neutral-800 font-medium cursor-pointer shadow-2xs"
          >
            <Plus className="h-3.5 w-3.5" />
            {isAr ? "إضافة مبنى" : "Add building"}
          </Button>

          <Button
            type="button"
            variant="outline"
            onClick={() => setIsBulkModalOpen(true)}
            className="gap-1.5 text-xs h-7 sm:h-8 px-2.5 text-gray-700 dark:text-gray-300 border-gray-300 dark:border-neutral-700 hover:bg-gray-50 dark:hover:bg-neutral-800 font-medium cursor-pointer shadow-2xs"
          >
            <Layers className="h-3.5 w-3.5" />
            {isAr ? "إضافة مجمعة" : "Bulk add"}
          </Button>
        </div>
      </div>

      {/* ── Search Engine Optimization (SEO) Card ────────────────────────── */}
      <SeoFieldsSection
        register={register}
        setValue={setValue}
        watch={watch}
        nameFieldName="project_name"
        slugPlaceholder="my-property"
        compact={true}
      />

      {/* ── Add/Edit Building Modal ─────────────────────────────────────── */}
      <AddProjectBuildingModal
        isOpen={isAddModalOpen}
        onClose={() => {
          setIsAddModalOpen(false);
          setEditingBuilding(null);
        }}
        onSave={handleSaveBuilding}
        initialData={editingBuilding}
      />

      {/* ── Bulk Add Buildings Modal ───────────────────────────────────── */}
      <BulkAddProjectBuildingsModal
        isOpen={isBulkModalOpen}
        onClose={() => setIsBulkModalOpen(false)}
        onAddBulk={handleAddBulkBuildings}
      />
    </div>
  );
}

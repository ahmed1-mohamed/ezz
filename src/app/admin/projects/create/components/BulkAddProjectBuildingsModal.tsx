"use client";

import { useState } from "react";
import { Modal } from "@/components/ui/modal";
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import { Layers, CheckCircle2 } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";
import { ProjectBuildingItem } from "./AddProjectBuildingModal";

interface BulkAddProjectBuildingsModalProps {
  isOpen: boolean;
  onClose: () => void;
  onAddBulk: (buildings: ProjectBuildingItem[]) => void;
}

interface BuildingTemplate {
  id: string;
  name: string;
  type: string;
  status: string;
  floors: number;
  units: number;
  parking: number;
  description: string;
}

const PRESET_BUILDING_TEMPLATES: BuildingTemplate[] = [
  {
    id: "bld_tower_a",
    name: "Tower A (Residential)",
    type: "Residential",
    status: "Under Construction",
    floors: 25,
    units: 150,
    parking: 180,
    description: "Main residential luxury high-rise tower.",
  },
  {
    id: "bld_tower_b",
    name: "Tower B (Residential)",
    type: "Residential",
    status: "Under Construction",
    floors: 20,
    units: 120,
    parking: 140,
    description: "Secondary residential tower with panoramic views.",
  },
  {
    id: "bld_podium",
    name: "Commercial Podium & Retail",
    type: "Commercial",
    status: "Under Construction",
    floors: 3,
    units: 35,
    parking: 80,
    description: "Retail and commercial outlets at lower levels.",
  },
  {
    id: "bld_serviced_apts",
    name: "Hotel & Serviced Apartments",
    type: "Hotel Apartments",
    status: "Off Plan",
    floors: 18,
    units: 90,
    parking: 100,
    description: "Fully furnished serviced apartments with hospitality services.",
  },
];

export function BulkAddProjectBuildingsModal({
  isOpen,
  onClose,
  onAddBulk,
}: BulkAddProjectBuildingsModalProps) {
  const { language } = useLanguage();
  const isAr = language === "ar";

  const [selectedIds, setSelectedIds] = useState<string[]>([
    "bld_tower_a",
    "bld_tower_b",
  ]);

  const toggleSelect = (id: string) => {
    setSelectedIds((prev) =>
      prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id]
    );
  };

  const handleSelectAll = () => {
    if (selectedIds.length === PRESET_BUILDING_TEMPLATES.length) {
      setSelectedIds([]);
    } else {
      setSelectedIds(PRESET_BUILDING_TEMPLATES.map((b) => b.id));
    }
  };

  const handleConfirm = () => {
    const selectedTemplates = PRESET_BUILDING_TEMPLATES.filter((b) =>
      selectedIds.includes(b.id)
    );

    const newBuildings: ProjectBuildingItem[] = selectedTemplates.map((b, idx) => ({
      id: `bulk_bld_${Date.now()}_${idx}`,
      building_name: isAr
        ? b.name.replace("Tower A", "برج أ").replace("Tower B", "برج ب").replace("Commercial Podium & Retail", "مبنى تجاري وبوديوم").replace("Hotel & Serviced Apartments", "شقق فندقية")
        : b.name,
      building_type: b.type,
      construction_status: b.status,
      total_floors: b.floors,
      total_units: b.units,
      parking_spaces: b.parking,
      description: b.description,
    }));

    onAddBulk(newBuildings);
    onClose();
  };

  return (
    <Modal
      isOpen={isOpen}
      onClose={onClose}
      title={
        <div className="flex items-center gap-2">
          <Layers className="h-5 w-5 text-teal-600 dark:text-teal-400" />
          <span>{isAr ? "إضافة مباني مجمعة" : "Bulk Add Project Buildings"}</span>
        </div>
      }
      description={
        isAr
          ? "اختر نماذج الأبراج والمباني القياسية لإضافتها إلى المشروع دفعة واحدة."
          : "Select predefined building and tower templates to add them in batch."
      }
      size="xl"
    >
      <div className="space-y-3 pt-1">
        <div className="flex items-center justify-between pb-1.5 border-b border-gray-100 dark:border-neutral-800">
          <span className="text-[11px] font-semibold text-gray-500 uppercase tracking-wider">
            {isAr ? "النماذج الجاهزة" : "Available Templates"} ({PRESET_BUILDING_TEMPLATES.length})
          </span>
          <Button
            type="button"
            variant="ghost"
            size="sm"
            onClick={handleSelectAll}
            className="text-xs text-teal-600 hover:text-teal-700 h-6 px-1.5"
          >
            {selectedIds.length === PRESET_BUILDING_TEMPLATES.length
              ? isAr
                ? "إلغاء تحديد الكل"
                : "Deselect All"
              : isAr
              ? "تحديد الكل"
              : "Select All"}
          </Button>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 max-h-[50vh] overflow-y-auto pe-1">
          {PRESET_BUILDING_TEMPLATES.map((template) => {
            const isSelected = selectedIds.includes(template.id);
            return (
              <div
                key={template.id}
                onClick={() => toggleSelect(template.id)}
                className={`flex items-start gap-2.5 p-2.5 rounded-lg border cursor-pointer transition-all ${
                  isSelected
                    ? "bg-teal-50/70 dark:bg-teal-950/30 border-teal-500 dark:border-teal-500/70 shadow-2xs"
                    : "bg-white dark:bg-neutral-900 border-gray-200 dark:border-neutral-800 hover:border-gray-300 dark:hover:border-neutral-700"
                }`}
              >
                <div className="pt-0.5">
                  <Checkbox
                    checked={isSelected}
                    onCheckedChange={() => toggleSelect(template.id)}
                  />
                </div>
                <div className="flex-1 min-w-0">
                  <div className="flex items-center justify-between">
                    <h4 className="text-xs sm:text-sm font-semibold text-gray-900 dark:text-gray-100 truncate">
                      {template.name}
                    </h4>
                    {isSelected && (
                      <CheckCircle2 className="h-3.5 w-3.5 text-teal-600 dark:text-teal-400 shrink-0" />
                    )}
                  </div>
                  <p className="text-[11px] text-gray-500 dark:text-gray-400 mt-0.5 line-clamp-2">
                    {template.description}
                  </p>
                  <div className="flex flex-wrap items-center gap-1.5 mt-1.5 text-[10px] font-medium text-gray-600 dark:text-gray-300">
                    <span className="bg-gray-100 dark:bg-neutral-800 px-1.5 py-0.5 rounded">
                      {template.floors} {isAr ? "طابق" : "Floors"}
                    </span>
                    <span className="bg-gray-100 dark:bg-neutral-800 px-1.5 py-0.5 rounded">
                      {template.units} {isAr ? "وحدة" : "Units"}
                    </span>
                    <span className="bg-gray-100 dark:bg-neutral-800 px-1.5 py-0.5 rounded">
                      {template.parking} {isAr ? "موقف" : "Parking"}
                    </span>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        <div className="flex justify-end gap-2 pt-3 border-t border-gray-100 dark:border-neutral-800">
          <Button type="button" variant="outline" size="sm" onClick={onClose} className="text-xs h-8">
            {isAr ? "إلغاء" : "Cancel"}
          </Button>
          <Button
            type="button"
            size="sm"
            disabled={selectedIds.length === 0}
            onClick={handleConfirm}
            className="bg-[#008081] hover:bg-[#006666] text-white text-xs h-8"
          >
            {isAr
              ? `إضافة ${selectedIds.length} مبنى`
              : `Add ${selectedIds.length} Building(s)`}
          </Button>
        </div>
      </div>
    </Modal>
  );
}

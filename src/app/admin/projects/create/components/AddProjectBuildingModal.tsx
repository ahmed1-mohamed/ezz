"use client";

import { useState, useEffect } from "react";
import { Modal } from "@/components/ui/modal";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { useLanguage } from "@/contexts/LanguageContext";
import { FieldError } from "@/components/ui/form-message";
import { scrollToFirstInvalidField } from "@/lib/form-utils";
import { getDraftBuildingSchema } from "@/validators/buildingSchema";

export interface ProjectBuildingItem {
  id: string;
  building_name: string;
  building_type: string;
  construction_status: string;
  total_floors: number;
  total_units: number;
  parking_spaces?: number;
  completion_date?: string;
  description?: string;
}

interface AddProjectBuildingModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSave: (building: ProjectBuildingItem) => void;
  initialData?: ProjectBuildingItem | null;
}

export function AddProjectBuildingModal({
  isOpen,
  onClose,
  onSave,
  initialData,
}: AddProjectBuildingModalProps) {
  const { language, t } = useLanguage();
  const isAr = language === "ar";
  const [errors, setErrors] = useState<Record<string, string>>({});

  const clearError = (field: string) =>
    setErrors((prev) => {
      if (!prev[field]) return prev;
      const next = { ...prev };
      delete next[field];
      return next;
    });

  const [buildingName, setBuildingName] = useState("");
  const [buildingType, setBuildingType] = useState("Residential");
  const [constructionStatus, setConstructionStatus] = useState("Under Construction");
  const [totalFloors, setTotalFloors] = useState<number>(10);
  const [totalUnits, setTotalUnits] = useState<number>(50);
  const [parkingSpaces, setParkingSpaces] = useState<number>(50);
  const [completionDate, setCompletionDate] = useState("");
  const [description, setDescription] = useState("");

  useEffect(() => {
    if (initialData) {
      setBuildingName(initialData.building_name || "");
      setBuildingType(initialData.building_type || "Residential");
      setConstructionStatus(initialData.construction_status || "Under Construction");
      setTotalFloors(initialData.total_floors ?? 10);
      setTotalUnits(initialData.total_units ?? 50);
      setParkingSpaces(initialData.parking_spaces ?? 50);
      setCompletionDate(initialData.completion_date || "");
      setDescription(initialData.description || "");
    } else {
      setBuildingName("");
      setBuildingType("Residential");
      setConstructionStatus("Under Construction");
      setTotalFloors(10);
      setTotalUnits(50);
      setParkingSpaces(50);
      setCompletionDate("");
      setDescription("");
    }
    setErrors({});
  }, [initialData, isOpen]);

  const handleSubmit = (e?: React.FormEvent | React.MouseEvent) => {
    if (e) {
      e.preventDefault();
      e.stopPropagation();
    }
    const result = getDraftBuildingSchema(t).safeParse({
      building_name: buildingName,
      total_floors: totalFloors,
      total_units: totalUnits,
      parking_spaces: parkingSpaces,
      description,
    });
    if (!result.success) {
      const nextErrors: Record<string, string> = {};
      result.error.issues.forEach((issue) => {
        const field = String(issue.path[0] ?? "");
        if (field && !nextErrors[field]) nextErrors[field] = issue.message;
      });
      setErrors(nextErrors);
      scrollToFirstInvalidField(e?.currentTarget ?? null);
      return;
    }

    onSave({
      id: initialData?.id || `building_${Date.now()}`,
      building_name: buildingName.trim(),
      building_type: buildingType,
      construction_status: constructionStatus,
      total_floors: Number(totalFloors) || 1,
      total_units: Number(totalUnits) || 0,
      parking_spaces: Number(parkingSpaces) || 0,
      completion_date: completionDate || undefined,
      description: description.trim() || undefined,
    });
    onClose();
  };

  const buildingTypeOptions = [
    { value: "Residential", label: isAr ? "سكني" : "Residential" },
    { value: "Commercial", label: isAr ? "تجاري" : "Commercial" },
    { value: "Mixed-Use", label: isAr ? "متعدد الاستخدام" : "Mixed-Use" },
    { value: "Hotel Apartments", label: isAr ? "شقق فندقية" : "Hotel Apartments" },
    { value: "Villa", label: isAr ? "فيلا" : "Villa" },
  ];

  const statusOptions = [
    { value: "Under Construction", label: isAr ? "قيد الإنشاء" : "Under Construction" },
    { value: "Ready to Move", label: isAr ? "جاهز للسكن" : "Ready to Move" },
    { value: "Off Plan", label: isAr ? "على الخارطة" : "Off Plan" },
    { value: "Completed", label: isAr ? "مكتمل" : "Completed" },
  ];

  return (
    <Modal
      isOpen={isOpen}
      onClose={onClose}
      title={
        initialData
          ? isAr
            ? "تعديل مبنى المشروع"
            : "Edit Project Building"
          : isAr
          ? "إضافة مبنى جديد"
          : "Add Project Building"
      }
      description={
        isAr
          ? "أدخل مواصفات المبنى من حيث عدد الطوابق، الوحدات، النوع ومواقف السيارات."
          : "Configure building specifications including floors, units, type and parking."
      }
      size="lg"
    >
      <div className="space-y-3 pt-1">
        <div>
          <Label
            htmlFor="building_name"
            className="text-[11px] font-semibold uppercase tracking-wider text-gray-700 dark:text-gray-300"
          >
            {isAr ? "اسم المبنى / البرج" : "Building Name"} *
          </Label>
          <Input
            id="building_name"
            value={buildingName}
            onChange={(e) => {
              setBuildingName(e.target.value);
              clearError("building_name");
            }}
            placeholder={isAr ? "مثال: البرج A أو المبنى السكني 1" : "e.g. Tower A or Building 1"}
            required
            error={!!errors.building_name}
            aria-invalid={!!errors.building_name}
            className="h-8 text-xs mt-1"
          />
          <FieldError message={errors.building_name} />
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
          <div>
            <Label
              htmlFor="building_type"
              className="text-[11px] font-semibold uppercase tracking-wider text-gray-700 dark:text-gray-300"
            >
              {isAr ? "نوع المبنى" : "Building Type"}
            </Label>
            <Select value={buildingType} onValueChange={setBuildingType}>
              <SelectTrigger id="building_type" className="h-8 text-xs mt-1">
                <SelectValue placeholder={isAr ? "اختر النوع" : "Select Type"} />
              </SelectTrigger>
              <SelectContent>
                {buildingTypeOptions.map((opt) => (
                  <SelectItem key={opt.value} value={opt.value} className="text-xs">
                    {opt.label}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>

          <div>
            <Label
              htmlFor="construction_status"
              className="text-[11px] font-semibold uppercase tracking-wider text-gray-700 dark:text-gray-300"
            >
              {isAr ? "حالة البناء" : "Construction Status"}
            </Label>
            <Select value={constructionStatus} onValueChange={setConstructionStatus}>
              <SelectTrigger id="construction_status" className="h-8 text-xs mt-1">
                <SelectValue placeholder={isAr ? "اختر الحالة" : "Select Status"} />
              </SelectTrigger>
              <SelectContent>
                {statusOptions.map((opt) => (
                  <SelectItem key={opt.value} value={opt.value} className="text-xs">
                    {opt.label}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
          <div>
            <Label
              htmlFor="total_floors"
              className="text-[11px] font-semibold uppercase tracking-wider text-gray-700 dark:text-gray-300"
            >
              {isAr ? "عدد الطوابق" : "Total Floors"}
            </Label>
            <Input
              id="total_floors"
              type="number"
              min="1"
              step="1"
              dir="ltr"
              value={totalFloors}
              onChange={(e) => {
                setTotalFloors(Number(e.target.value));
                clearError("total_floors");
              }}
              error={!!errors.total_floors}
              aria-invalid={!!errors.total_floors}
              className="h-8 text-xs mt-1"
            />
            <FieldError message={errors.total_floors} />
          </div>

          <div>
            <Label
              htmlFor="total_units"
              className="text-[11px] font-semibold uppercase tracking-wider text-gray-700 dark:text-gray-300"
            >
              {isAr ? "إجمالي الوحدات" : "Total Units"}
            </Label>
            <Input
              id="total_units"
              type="number"
              min="0"
              step="1"
              dir="ltr"
              value={totalUnits}
              onChange={(e) => {
                setTotalUnits(Number(e.target.value));
                clearError("total_units");
              }}
              error={!!errors.total_units}
              aria-invalid={!!errors.total_units}
              className="h-8 text-xs mt-1"
            />
            <FieldError message={errors.total_units} />
          </div>

          <div>
            <Label
              htmlFor="parking_spaces"
              className="text-[11px] font-semibold uppercase tracking-wider text-gray-700 dark:text-gray-300"
            >
              {isAr ? "مواقف السيارات" : "Parking Spaces"}
            </Label>
            <Input
              id="parking_spaces"
              type="number"
              min="0"
              step="1"
              dir="ltr"
              value={parkingSpaces}
              onChange={(e) => {
                setParkingSpaces(Number(e.target.value));
                clearError("parking_spaces");
              }}
              error={!!errors.parking_spaces}
              aria-invalid={!!errors.parking_spaces}
              className="h-8 text-xs mt-1"
            />
            <FieldError message={errors.parking_spaces} />
          </div>
        </div>

        <div>
          <Label
            htmlFor="completion_date"
            className="text-[11px] font-semibold uppercase tracking-wider text-gray-700 dark:text-gray-300"
          >
            {isAr ? "تاريخ التسليم المتوقع" : "Expected Completion Date"}
          </Label>
          <Input
            id="completion_date"
            type="date"
            value={completionDate}
            onChange={(e) => setCompletionDate(e.target.value)}
            className="h-8 text-xs mt-1"
          />
        </div>

        <div>
          <Label
            htmlFor="building_desc"
            className="text-[11px] font-semibold uppercase tracking-wider text-gray-700 dark:text-gray-300"
          >
            {isAr ? "الوصف (اختياري)" : "Description (Optional)"}
          </Label>
          <Textarea
            id="building_desc"
            value={description}
            onChange={(e) => {
              setDescription(e.target.value);
              clearError("description");
            }}
            placeholder={isAr ? "تفاصيل إضافية عن المبنى ومرافقه..." : "Additional details about the building and its amenities..."}
            rows={2}
            error={!!errors.description}
            aria-invalid={!!errors.description}
            className="text-xs mt-1 resize-none"
          />
          <FieldError message={errors.description} />
        </div>

        <div className="flex items-center justify-end gap-2 pt-2 border-t border-gray-100 dark:border-neutral-800">
          <Button
            type="button"
            variant="outline"
            onClick={onClose}
            className="h-8 text-xs px-3 text-gray-700 dark:text-gray-300"
          >
            {isAr ? "إلغاء" : "Cancel"}
          </Button>
          <Button
            type="button"
            onClick={handleSubmit}
            className="h-8 text-xs px-4 bg-[#008081] hover:bg-[#006666] text-white"
          >
            {initialData
              ? isAr
                ? "حفظ التعديلات"
                : "Save Changes"
              : isAr
              ? "إضافة المبنى"
              : "Add Building"}
          </Button>
        </div>
      </div>
    </Modal>
  );
}

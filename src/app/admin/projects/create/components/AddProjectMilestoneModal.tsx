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
import { Percent } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";
import { FieldError } from "@/components/ui/form-message";
import { scrollToFirstInvalidField } from "@/lib/form-utils";
import { getDraftMilestoneSchema } from "@/validators/milestone.schema";

export interface ProjectMilestoneItem {
  id: string;
  milestone_name: string;
  description?: string;
  status: "pending" | "in_progress" | "completed" | "delayed";
  planned_start_date?: string;
  planned_end_date?: string;
  actual_start_date?: string;
  actual_end_date?: string;
  completion_percentage?: number;
  order: number;
}

interface AddProjectMilestoneModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSave: (milestone: ProjectMilestoneItem) => void;
  initialData?: ProjectMilestoneItem | null;
  totalCount: number;
}

export function AddProjectMilestoneModal({
  isOpen,
  onClose,
  onSave,
  initialData,
  totalCount,
}: AddProjectMilestoneModalProps) {
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

  const [milestoneName, setMilestoneName] = useState("");
  const [description, setDescription] = useState("");
  const [status, setStatus] = useState<ProjectMilestoneItem["status"]>("pending");
  const [plannedStartDate, setPlannedStartDate] = useState("");
  const [plannedEndDate, setPlannedEndDate] = useState("");
  const [actualStartDate, setActualStartDate] = useState("");
  const [actualEndDate, setActualEndDate] = useState("");
  const [completionPercentage, setCompletionPercentage] = useState<number>(0);

  useEffect(() => {
    if (initialData) {
      setMilestoneName(initialData.milestone_name || "");
      setDescription(initialData.description || "");
      setStatus(initialData.status || "pending");
      setPlannedStartDate(initialData.planned_start_date || "");
      setPlannedEndDate(initialData.planned_end_date || "");
      setActualStartDate(initialData.actual_start_date || "");
      setActualEndDate(initialData.actual_end_date || "");
      setCompletionPercentage(initialData.completion_percentage ?? 0);
    } else {
      setMilestoneName("");
      setDescription("");
      setStatus("pending");
      setPlannedStartDate("");
      setPlannedEndDate("");
      setActualStartDate("");
      setActualEndDate("");
      setCompletionPercentage(0);
    }
    setErrors({});
  }, [initialData, isOpen]);

  const handleSubmit = (e?: React.FormEvent | React.MouseEvent) => {
    if (e) {
      e.preventDefault();
      e.stopPropagation();
    }
    const result = getDraftMilestoneSchema(t).safeParse({
      milestone_name: milestoneName,
      description,
      completion_percentage: completionPercentage,
      planned_start_date: plannedStartDate,
      planned_end_date: plannedEndDate,
      actual_start_date: actualStartDate,
      actual_end_date: actualEndDate,
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
      id: initialData?.id || `milestone_${Date.now()}`,
      milestone_name: milestoneName.trim(),
      description: description.trim() || undefined,
      status,
      planned_start_date: plannedStartDate || undefined,
      planned_end_date: plannedEndDate || undefined,
      actual_start_date: actualStartDate || undefined,
      actual_end_date: actualEndDate || undefined,
      completion_percentage: Number(completionPercentage) || 0,
      order: initialData ? initialData.order : totalCount,
    });
    onClose();
  };

  const statusOptions = [
    { value: "pending", label: isAr ? "قيد الانتظار" : "Pending" },
    { value: "in_progress", label: isAr ? "قيد التنفيذ" : "In Progress" },
    { value: "completed", label: isAr ? "مكتمل" : "Completed" },
    { value: "delayed", label: isAr ? "متأخر" : "Delayed" },
  ];

  return (
    <Modal
      isOpen={isOpen}
      onClose={onClose}
      title={
        initialData
          ? isAr
            ? "تعديل مرحلة المشروع"
            : "Edit Project Milestone"
          : isAr
          ? "إضافة مرحلة جديدة"
          : "Add Project Milestone"
      }
      description={
        isAr
          ? "حدد تفاصيل مرحلة البناء، المواعيد المتوقعة والفعلية، ونسبة الإنجاز."
          : "Define construction stage details, planned/actual dates, and completion status."
      }
      size="lg"
    >
      <div className="space-y-3 pt-1">
        <div>
          <Label
            htmlFor="milestone_name"
            className="text-[11px] font-semibold uppercase tracking-wider text-gray-700 dark:text-gray-300"
          >
            {isAr ? "اسم المرحلة" : "Milestone Name"} *
          </Label>
          <Input
            id="milestone_name"
            value={milestoneName}
            onChange={(e) => {
              setMilestoneName(e.target.value);
              clearError("milestone_name");
            }}
            placeholder={isAr ? "مثال: مرحلة الأساسات والبناء الأولي" : "e.g. Foundation & Substructure"}
            required
            error={!!errors.milestone_name}
            aria-invalid={!!errors.milestone_name}
            className="h-8 text-xs mt-1"
          />
          <FieldError message={errors.milestone_name} />
        </div>

        <div>
          <Label
            htmlFor="milestone_status"
            className="text-[11px] font-semibold uppercase tracking-wider text-gray-700 dark:text-gray-300"
          >
            {isAr ? "حالة المرحلة" : "Status"}
          </Label>
          <Select
            value={status}
            onValueChange={(val) => setStatus(val as ProjectMilestoneItem["status"])}
          >
            <SelectTrigger id="milestone_status" className="h-8 text-xs mt-1">
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

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
          <div>
            <Label
              htmlFor="planned_start"
              className="text-[11px] font-semibold uppercase tracking-wider text-gray-700 dark:text-gray-300"
            >
              {isAr ? "تاريخ البدء المخطط" : "Planned Start Date"}
            </Label>
            <Input
              id="planned_start"
              type="date"
              value={plannedStartDate}
              onChange={(e) => {
                setPlannedStartDate(e.target.value);
                clearError("planned_end_date");
              }}
              error={!!errors.planned_start_date}
              aria-invalid={!!errors.planned_start_date}
              className="h-8 text-xs mt-1"
            />
            <FieldError message={errors.planned_start_date} />
          </div>

          <div>
            <Label
              htmlFor="planned_end"
              className="text-[11px] font-semibold uppercase tracking-wider text-gray-700 dark:text-gray-300"
            >
              {isAr ? "تاريخ الانتهاء المخطط" : "Planned End Date"}
            </Label>
            <Input
              id="planned_end"
              type="date"
              value={plannedEndDate}
              onChange={(e) => {
                setPlannedEndDate(e.target.value);
                clearError("planned_end_date");
              }}
              error={!!errors.planned_end_date}
              aria-invalid={!!errors.planned_end_date}
              className="h-8 text-xs mt-1"
            />
            <FieldError message={errors.planned_end_date} />
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
          <div>
            <Label
              htmlFor="actual_start"
              className="text-[11px] font-semibold uppercase tracking-wider text-gray-700 dark:text-gray-300"
            >
              {isAr ? "تاريخ البدء الفعلي" : "Actual Start Date"}
            </Label>
            <Input
              id="actual_start"
              type="date"
              value={actualStartDate}
              onChange={(e) => {
                setActualStartDate(e.target.value);
                clearError("actual_end_date");
              }}
              error={!!errors.actual_start_date}
              aria-invalid={!!errors.actual_start_date}
              className="h-8 text-xs mt-1"
            />
            <FieldError message={errors.actual_start_date} />
          </div>

          <div>
            <Label
              htmlFor="actual_end"
              className="text-[11px] font-semibold uppercase tracking-wider text-gray-700 dark:text-gray-300"
            >
              {isAr ? "تاريخ الانتهاء الفعلي" : "Actual End Date"}
            </Label>
            <Input
              id="actual_end"
              type="date"
              value={actualEndDate}
              onChange={(e) => {
                setActualEndDate(e.target.value);
                clearError("actual_end_date");
              }}
              error={!!errors.actual_end_date}
              aria-invalid={!!errors.actual_end_date}
              className="h-8 text-xs mt-1"
            />
            <FieldError message={errors.actual_end_date} />
          </div>
        </div>

        <div>
          <Label
            htmlFor="completion_pct"
            className="text-[11px] font-semibold uppercase tracking-wider text-gray-700 dark:text-gray-300"
          >
            {isAr ? "نسبة الإنجاز" : "Completion Percentage"} (%)
          </Label>
          <div className="relative mt-1">
            <Input
              id="completion_pct"
              type="number"
              min="0"
              max="100"
              value={completionPercentage}
              onChange={(e) => {
                setCompletionPercentage(Number(e.target.value));
                clearError("completion_percentage");
              }}
              placeholder="0"
              dir="ltr"
              error={!!errors.completion_percentage}
              aria-invalid={!!errors.completion_percentage}
              className="h-8 text-xs pe-7"
            />
            <span className="absolute end-2.5 top-1/2 -translate-y-1/2 text-gray-400 text-xs pointer-events-none">
              <Percent className="h-3.5 w-3.5" />
            </span>
          </div>
          <FieldError message={errors.completion_percentage} />
        </div>

        <div>
          <Label
            htmlFor="milestone_desc"
            className="text-[11px] font-semibold uppercase tracking-wider text-gray-700 dark:text-gray-300"
          >
            {isAr ? "الوصف (اختياري)" : "Description (Optional)"}
          </Label>
          <Textarea
            id="milestone_desc"
            value={description}
            onChange={(e) => {
              setDescription(e.target.value);
              clearError("description");
            }}
            placeholder={isAr ? "ملاحظات أو تفاصيل إضافية عن المرحلة..." : "Additional details or notes about this construction step..."}
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
              ? "إضافة المرحلة"
              : "Add Milestone"}
          </Button>
        </div>
      </div>
    </Modal>
  );
}

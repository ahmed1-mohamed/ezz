"use client";

import { useState } from "react";
import { UseFormReturn } from "react-hook-form";
import { Button } from "@/components/ui/button";
import { Plus, ArrowUp, ArrowDown, Edit2, Trash2, Calendar, CheckCircle2, Clock, AlertCircle } from "lucide-react";
import { CreateProjectInput } from "@/validators/create-project.schema";
import { SeoFieldsSection } from "@/components/shared/SeoFieldsSection";
import { useLanguage } from "@/contexts/LanguageContext";
import {
  AddProjectMilestoneModal,
  ProjectMilestoneItem,
} from "./AddProjectMilestoneModal";

interface ProjectMilestonesFormProps {
  form: UseFormReturn<CreateProjectInput>;
  milestones?: ProjectMilestoneItem[];
  setMilestones?: React.Dispatch<React.SetStateAction<ProjectMilestoneItem[]>>;
}

export function ProjectMilestonesForm({
  form,
  milestones: externalMilestones,
  setMilestones: externalSetMilestones,
}: ProjectMilestonesFormProps) {
  const { register, watch, setValue } = form;
  const { language } = useLanguage();
  const isAr = language === "ar";

  const [internalMilestones, setInternalMilestones] = useState<ProjectMilestoneItem[]>([]);
  const milestones = externalMilestones ?? internalMilestones;
  const setMilestones = externalSetMilestones ?? setInternalMilestones;
  const [isAddModalOpen, setIsAddModalOpen] = useState(false);
  const [editingMilestone, setEditingMilestone] = useState<ProjectMilestoneItem | null>(null);

  const handleSaveMilestone = (milestone: ProjectMilestoneItem) => {
    if (editingMilestone) {
      setMilestones((prev) =>
        prev.map((m) => (m.id === milestone.id ? milestone : m))
      );
      setEditingMilestone(null);
    } else {
      setMilestones((prev) => [...prev, milestone]);
    }
  };

  const handleEditMilestone = (milestone: ProjectMilestoneItem) => {
    setEditingMilestone(milestone);
    setIsAddModalOpen(true);
  };

  const handleDeleteMilestone = (id: string) => {
    setMilestones((prev) => prev.filter((m) => m.id !== id));
  };

  const handleOpenAddModal = () => {
    setEditingMilestone(null);
    setIsAddModalOpen(true);
  };

  const handleMoveUp = (index: number) => {
    if (index === 0) return;
    setMilestones((prev) => {
      const updated = [...prev];
      const temp = updated[index - 1];
      updated[index - 1] = updated[index];
      updated[index] = temp;
      return updated;
    });
  };

  const handleMoveDown = (index: number) => {
    if (index === milestones.length - 1) return;
    setMilestones((prev) => {
      const updated = [...prev];
      const temp = updated[index + 1];
      updated[index + 1] = updated[index];
      updated[index] = temp;
      return updated;
    });
  };

  const getStatusBadge = (status: ProjectMilestoneItem["status"]) => {
    switch (status) {
      case "completed":
        return (
          <span className="inline-flex items-center gap-1 text-[11px] px-2 py-0.5 rounded-full bg-emerald-50 dark:bg-emerald-950/50 text-emerald-700 dark:text-emerald-300 font-medium">
            <CheckCircle2 className="h-3 w-3" />
            {isAr ? "مكتمل" : "Completed"}
          </span>
        );
      case "in_progress":
        return (
          <span className="inline-flex items-center gap-1 text-[11px] px-2 py-0.5 rounded-full bg-teal-50 dark:bg-teal-950/50 text-[#008081] dark:text-teal-300 font-medium">
            <Clock className="h-3 w-3" />
            {isAr ? "قيد التنفيذ" : "In Progress"}
          </span>
        );
      case "delayed":
        return (
          <span className="inline-flex items-center gap-1 text-[11px] px-2 py-0.5 rounded-full bg-rose-50 dark:bg-rose-950/50 text-rose-700 dark:text-rose-300 font-medium">
            <AlertCircle className="h-3 w-3" />
            {isAr ? "متأخر" : "Delayed"}
          </span>
        );
      default:
        return (
          <span className="inline-flex items-center gap-1 text-[11px] px-2 py-0.5 rounded-full bg-gray-100 dark:bg-neutral-800 text-gray-700 dark:text-gray-300 font-medium">
            <Clock className="h-3 w-3" />
            {isAr ? "قيد الانتظار" : "Pending"}
          </span>
        );
    }
  };

  return (
    <div className="space-y-4">
      {/* ── Project Milestones Card ─────────────────────────────────────── */}
      <div className="bg-white dark:bg-neutral-900 rounded-xl border border-gray-200 dark:border-neutral-800 p-5 sm:p-6 space-y-3.5 shadow-2xs">
        <div>
          <h2 className="text-sm sm:text-base font-semibold text-gray-900 dark:text-gray-100">
            {isAr ? "مراحل المشروع" : "Project Milestones"}
          </h2>
          <p className="text-xs text-gray-500 dark:text-gray-400 mt-0.5 leading-relaxed">
            {isAr
              ? "مراحل وخطوات بناء المشروع بالترتيب — كل مرحلة مع تواريخ التخطيط/التنفيذ، نسبة الإنجاز، والحالة. أعد الترتيب باستخدام الأسهم."
              : "The project's construction steps in order — each with planned/actual dates, a completion %, and a status. Reorder with the arrows."}
          </p>
        </div>

        {/* Empty state or Milestones list */}
        {milestones.length === 0 ? (
          <div className="rounded-lg border border-dashed border-gray-200 dark:border-neutral-800 py-6 px-4 text-center text-xs text-gray-400 dark:text-gray-500">
            {isAr ? "لا توجد مراحل بعد." : "No milestones yet."}
          </div>
        ) : (
          <div className="space-y-2">
            {milestones.map((milestone, index) => (
              <div
                key={milestone.id}
                className="flex items-center justify-between p-3 rounded-lg border border-gray-200 dark:border-neutral-800 bg-gray-50/50 dark:bg-neutral-950/40 hover:bg-gray-50 dark:hover:bg-neutral-900 transition-colors gap-3"
              >
                {/* Reorder Arrows */}
                <div className="flex flex-col items-center gap-0.5 shrink-0 text-gray-400">
                  <button
                    type="button"
                    onClick={() => handleMoveUp(index)}
                    disabled={index === 0}
                    className="p-1 rounded hover:bg-gray-200 dark:hover:bg-neutral-800 disabled:opacity-30 cursor-pointer disabled:cursor-not-allowed"
                    title={isAr ? "تحريك لأعلى" : "Move up"}
                  >
                    <ArrowUp className="h-3 w-3" />
                  </button>
                  <button
                    type="button"
                    onClick={() => handleMoveDown(index)}
                    disabled={index === milestones.length - 1}
                    className="p-1 rounded hover:bg-gray-200 dark:hover:bg-neutral-800 disabled:opacity-30 cursor-pointer disabled:cursor-not-allowed"
                    title={isAr ? "تحريك لأسفل" : "Move down"}
                  >
                    <ArrowDown className="h-3 w-3" />
                  </button>
                </div>

                {/* Milestone Details */}
                <div className="space-y-1 flex-1 min-w-0">
                  <div className="flex flex-wrap items-center gap-2">
                    <h4 className="text-xs sm:text-sm font-semibold text-gray-900 dark:text-gray-100 truncate">
                      {milestone.milestone_name}
                    </h4>
                    {getStatusBadge(milestone.status)}
                    {milestone.completion_percentage !== undefined && (
                      <span className="text-[11px] px-1.5 py-0.5 rounded-full bg-blue-50 dark:bg-blue-950/50 text-blue-700 dark:text-blue-300 font-medium">
                        {milestone.completion_percentage}%
                      </span>
                    )}
                  </div>

                  {milestone.description && (
                    <p className="text-[11px] text-gray-500 dark:text-gray-400 truncate">
                      {milestone.description}
                    </p>
                  )}

                  <div className="flex flex-wrap items-center gap-3 text-[11px] text-gray-500 dark:text-gray-400 pt-0.5">
                    {(milestone.planned_start_date || milestone.planned_end_date) && (
                      <div className="flex items-center gap-1">
                        <Calendar className="h-3 w-3 text-gray-400" />
                        <span>
                          {isAr ? "المخطط: " : "Planned: "}
                          {milestone.planned_start_date || "—"} {isAr ? "إلى" : "to"}{" "}
                          {milestone.planned_end_date || "—"}
                        </span>
                      </div>
                    )}
                    {(milestone.actual_start_date || milestone.actual_end_date) && (
                      <div className="flex items-center gap-1">
                        <Calendar className="h-3 w-3 text-teal-600 dark:text-teal-400" />
                        <span>
                          {isAr ? "الفعلي: " : "Actual: "}
                          {milestone.actual_start_date || "—"} {isAr ? "إلى" : "to"}{" "}
                          {milestone.actual_end_date || "—"}
                        </span>
                      </div>
                    )}
                  </div>
                </div>

                {/* Actions: Edit, Delete */}
                <div className="flex items-center gap-1 shrink-0">
                  <Button
                    type="button"
                    variant="ghost"
                    size="icon"
                    onClick={() => handleEditMilestone(milestone)}
                    className="h-7 w-7 text-gray-500 hover:text-gray-900 dark:hover:text-gray-100 cursor-pointer"
                  >
                    <Edit2 className="h-3.5 w-3.5" />
                  </Button>
                  <Button
                    type="button"
                    variant="ghost"
                    size="icon"
                    onClick={() => handleDeleteMilestone(milestone.id)}
                    className="h-7 w-7 text-gray-400 hover:text-red-600 hover:bg-red-50 dark:hover:bg-red-950/30 cursor-pointer"
                  >
                    <Trash2 className="h-3.5 w-3.5" />
                  </Button>
                </div>
              </div>
            ))}
          </div>
        )}

        {/* Action button: + Add milestone */}
        <div className="flex items-center gap-2 pt-0.5">
          <Button
            type="button"
            variant="outline"
            onClick={handleOpenAddModal}
            className="gap-1.5 text-xs h-7 sm:h-8 px-2.5 text-gray-700 dark:text-gray-300 border-gray-300 dark:border-neutral-700 hover:bg-gray-50 dark:hover:bg-neutral-800 font-medium cursor-pointer shadow-2xs"
          >
            <Plus className="h-3.5 w-3.5" />
            {isAr ? "إضافة مرحلة" : "Add milestone"}
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

      {/* ── Add/Edit Milestone Modal ────────────────────────────────────── */}
      <AddProjectMilestoneModal
        isOpen={isAddModalOpen}
        onClose={() => {
          setIsAddModalOpen(false);
          setEditingMilestone(null);
        }}
        onSave={handleSaveMilestone}
        initialData={editingMilestone}
        totalCount={milestones.length}
      />
    </div>
  );
}

"use client";

import { useRouter, usePathname } from "next/navigation";
import { Modal } from "@/components/ui/modal";
import { Button } from "@/components/ui/button";
import { toast } from "sonner";
import { useLanguage } from "@/contexts/LanguageContext";
import { useSession } from "next-auth/react";
import { useEditProjectLogic } from "./hooks";
import { EditProjectForm } from "./EditProjectForm";
import { EditProjectModalProps } from "./types";

export function EditProjectModal({
  isOpen,
  onClose,
  projectId,
}: EditProjectModalProps) {
  const { data: session } = useSession();
  const token = session?.user?.accessToken;
  const { t } = useLanguage();
  const router = useRouter();
  const pathname = usePathname();
  const routePrefix = pathname.startsWith("/developer") ? "/developer" : "/admin";

  const {
    register,
    handleSubmit,
    setValue,
    watch,
    control,
    errors,
    projectLoading,
    developersList,
    isSubmitting,
    handleClose,
    onSubmit,
    projectData,
  } = useEditProjectLogic(projectId, token, isOpen, onClose, t);

  return (
    <Modal
      isOpen={isOpen}
      onClose={handleClose}
      title="Edit Project"
      size="xl"
      showCloseButton={false}
      footer={
        <div className="flex gap-3 justify-end w-full">
          <Button variant="outline" onClick={handleClose} disabled={isSubmitting}>
            Cancel
          </Button>
          <Button
            className="bg-[#008081] hover:bg-[#006666] text-white"
            onClick={handleSubmit(onSubmit, () => {
              toast.error(t("projects.create.errors.fillRequired"));
            })}
            disabled={isSubmitting || projectLoading}
          >
            {isSubmitting ? "Updating..." : "Update Project"}
          </Button>
        </div>
      }
    >
      {projectLoading ? (
        <div className="flex items-center justify-center py-8">
          <div className="inline-block h-8 w-8 animate-spin rounded-full border-4 border-solid border-[#008081] border-r-transparent" />
        </div>
      ) : (
        <div className="max-h-[calc(100vh-280px)] overflow-y-auto pr-2">
          <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
            <EditProjectForm 
              register={register} 
              control={control}
              setValue={setValue}
              watch={watch}
              errors={errors} 
              developersList={developersList}
              projectData={projectData}
            />

            <div className="mt-6 pt-4 border-t border-gray-200 dark:border-neutral-800 flex flex-col sm:flex-row sm:items-center justify-between gap-2 bg-teal-50/50 dark:bg-teal-950/20 p-4 rounded-xl">
              <div className="text-xs sm:text-sm text-teal-800 dark:text-teal-300 font-medium">
                Want to manage project photos, floor plans, or videos?
              </div>
              <Button
                type="button"
                variant="outline"
                size="sm"
                className="border-teal-200 dark:border-teal-800 text-teal-700 dark:text-teal-300 hover:bg-teal-50 dark:hover:bg-teal-950/40 rounded-lg shrink-0"
                onClick={() => {
                  handleClose();
                  router.push(`${routePrefix}/projects/${projectId}`);
                }}
              >
                Manage Media
              </Button>
            </div>
          </form>
        </div>
      )}
    </Modal>
  );
}

"use client";

import { useState } from "react";
import { SafeImage } from "@/components/ui/safe-image";
import { Button } from "@/components/ui/button";
import { Plus, Edit, Trash2, Video as VideoIcon, Image as ImageIcon } from "lucide-react";
import { Media } from "../types";
import dynamic from "next/dynamic";
import { useLanguage } from "@/contexts/LanguageContext";

const AddProjectMediaModal = dynamic(() => import("@/components/modals/projects/AddProjectMediaModal").then(mod => mod.AddProjectMediaModal), { ssr: false });
const DeleteProjectMediaModal = dynamic(() => import("@/components/modals/projects/delete-project-media-modal").then(mod => mod.DeleteProjectMediaModal), { ssr: false });
const EditProjectMediaModal = dynamic(() => import("@/components/modals/projects/edit-project-media-modal").then(mod => mod.EditProjectMediaModal), { ssr: false });

interface ProjectMediaProps {
  projectId: number;
  medias: Media[];
}

export function ProjectMedia({ projectId, medias }: ProjectMediaProps) {
  const { t } = useLanguage();
  const [isAddMediaModalOpen, setIsAddMediaModalOpen] = useState(false);
  const [editingMedia, setEditingMedia] = useState<Media | null>(null);
  const [isEditMediaModalOpen, setIsEditMediaModalOpen] = useState(false);
  const [mediaToDelete, setMediaToDelete] = useState<Media | null>(null);
  const [isDeleteMediaModalOpen, setIsDeleteMediaModalOpen] = useState(false);

  return (
    <div className="bg-white/80 dark:bg-slate-800/80 backdrop-blur-sm rounded-2xl border border-slate-200/60 dark:border-slate-700 p-6 shadow-sm">
      <div className="flex items-center justify-between mb-6">
        <h3 className="text-lg font-bold text-slate-900 dark:text-slate-100 tracking-tight">
          {t("projects.form.media.title")} <span className="text-slate-500 dark:text-slate-400 font-medium text-sm ms-2">({medias?.length || 0})</span>
        </h3>
        <Button
          onClick={() => setIsAddMediaModalOpen(true)}
          className="bg-teal-600 hover:bg-teal-700 text-white shadow-sm hover:shadow-md transition-all gap-2 rounded-full px-5"
        >
          <Plus className="h-4 w-4" />
          {t("projects.media.addMedia")}
        </Button>
      </div>

      {medias && medias.length > 0 ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
          {medias.map((media, index) => (
            <div
              key={`media-${media.media_id || (media as any).id || index}-${index}`}
              className="group relative aspect-[4/3] bg-slate-100 dark:bg-slate-700/50 rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-all duration-300 border border-slate-200/50 dark:border-slate-700"
            >
              {media.media_type === "video" ? (
                <video
                  src={media.media_url}
                  className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                  controls
                />
              ) : (
                <SafeImage
                  src={media.media_url}
                  alt={media.description || t("projects.media.projectMediaAlt")}
                  fill
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                  fallbackSrc="/images/default-logo.svg"
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
              )}

              <div className="absolute inset-0 bg-slate-900/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-3 backdrop-blur-[2px]">
                <button
                  onClick={() => {
                    setEditingMedia(media);
                    setIsEditMediaModalOpen(true);
                  }}
                  className="p-2.5 bg-white/90 dark:bg-slate-800/90 hover:bg-white dark:hover:bg-slate-800 text-slate-700 dark:text-slate-300 hover:text-teal-600 dark:hover:text-teal-400 rounded-full shadow-sm transition-all hover:scale-110"
                  title={t("common.edit")}
                >
                  <Edit className="h-4 w-4" />
                </button>
                <button
                  onClick={() => {
                    setMediaToDelete(media);
                    setIsDeleteMediaModalOpen(true);
                  }}
                  className="p-2.5 bg-white/90 dark:bg-slate-800/90 hover:bg-white dark:hover:bg-slate-800 text-red-600 dark:text-red-400 hover:text-red-700 dark:hover:text-red-300 rounded-full shadow-sm transition-all hover:scale-110"
                  title={t("common.delete")}
                >
                  <Trash2 className="h-4 w-4" />
                </button>
              </div>

              <div className="absolute top-3 start-3 flex flex-col gap-2 pointer-events-none">
                {media.media_type === "video" ? (
                  <span className="px-2.5 py-1 bg-blue-600/90 backdrop-blur-sm text-white text-xs font-medium rounded-md shadow-sm flex items-center gap-1.5">
                    <VideoIcon className="h-3.5 w-3.5" />
                    {t("projects.media.types.video")}
                  </span>
                ) : media.media_type === "floor_plan" ? (
                  <span className="px-2.5 py-1 bg-purple-600/90 backdrop-blur-sm text-white text-xs font-medium rounded-md shadow-sm">
                    {t("projects.media.types.floorPlan")}
                  </span>
                ) : media.media_type === "3D_tour" ? (
                  <span className="px-2.5 py-1 bg-amber-600/90 backdrop-blur-sm text-white text-xs font-medium rounded-md shadow-sm">
                    {t("projects.media.types.threeDTour")}
                  </span>
                ) : (
                  <span className="px-2.5 py-1 bg-slate-800/80 backdrop-blur-sm text-white text-xs font-medium rounded-md shadow-sm flex items-center gap-1.5">
                    <ImageIcon className="h-3.5 w-3.5" />
                    {t("projects.media.types.image")}
                  </span>
                )}
                {media.is_primary === 1 && (
                  <span className="px-2.5 py-1 bg-yellow-500/90 backdrop-blur-sm text-white text-xs font-medium rounded-md shadow-sm w-fit">
                    {t("projects.media.primary")}
                  </span>
                )}
              </div>

              {media.description && (
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-slate-900/90 via-slate-900/60 to-transparent p-4 pt-8">
                  <p className="text-white text-xs font-medium line-clamp-2 leading-relaxed">
                    {media.description}
                  </p>
                </div>
              )}
            </div>
          ))}
        </div>
      ) : (
        <div className="text-center py-12 px-4 border-2 border-dashed border-slate-200 dark:border-slate-700 rounded-xl bg-slate-50/50 dark:bg-slate-800/50">
          <div className="bg-white dark:bg-slate-800 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 shadow-sm border border-slate-100 dark:border-slate-700">
            <ImageIcon className="h-8 w-8 text-slate-300 dark:text-slate-600" />
          </div>
          <h4 className="text-slate-700 dark:text-slate-300 font-medium mb-1">{t("projects.media.noMedia")}</h4>
          <p className="text-slate-500 dark:text-slate-400 text-sm mb-4">{t("projects.media.noMediaDesc")}</p>
          <Button
            onClick={() => setIsAddMediaModalOpen(true)}
            variant="outline"
            className="text-teal-600 border-teal-200 hover:bg-teal-50 rounded-full px-6"
          >
            {t("projects.media.uploadMedia")}
          </Button>
        </div>
      )}

      {isAddMediaModalOpen && (
        <AddProjectMediaModal
          isOpen={isAddMediaModalOpen}
          onClose={() => setIsAddMediaModalOpen(false)}
          projectId={projectId}
        />
      )}

      {isEditMediaModalOpen && (
        <EditProjectMediaModal
          isOpen={isEditMediaModalOpen}
          onClose={() => {
            setIsEditMediaModalOpen(false);
            setEditingMedia(null);
          }}
          projectId={projectId}
          media={editingMedia}
        />
      )}

      {isDeleteMediaModalOpen && (
        <DeleteProjectMediaModal
          isOpen={isDeleteMediaModalOpen}
          onClose={() => {
            setIsDeleteMediaModalOpen(false);
            setMediaToDelete(null);
          }}
          projectId={projectId}
          media={mediaToDelete}
        />
      )}
    </div>
  );
}

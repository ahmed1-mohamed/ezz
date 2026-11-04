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
import { Area } from "./AreasTable";

const AddAreaModal = dynamic(() => import("@/components/modals/areas/add-area-modal").then(mod => mod.AddAreaModal), { ssr: false });
const ViewAreaModal = dynamic(() => import("@/components/modals/areas/view-area-modal").then(mod => mod.ViewAreaModal), { ssr: false });
const EditAreaModal = dynamic(() => import("@/components/modals/areas/edit-area-modal").then(mod => mod.EditAreaModal), { ssr: false });


interface AreasModalsProps {
  isAddAreaModalOpen: boolean;
  setIsAddAreaModalOpen: (val: boolean) => void;
  viewAreaModalOpen: boolean;
  setViewAreaModalOpen: (val: boolean) => void;
  editAreaModalOpen: boolean;
  setEditAreaModalOpen: (val: boolean) => void;
  deleteDialogOpen: boolean;
  setDeleteDialogOpen: (val: boolean) => void;
  areaToDelete: number | null;
  setAreaToDelete: (val: number | null) => void;
  areaToView: Area | null;
  setAreaToView: (val: Area | null) => void;
  areaToEdit: number | null;
  setAreaToEdit: (val: number | null) => void;
  areaToEditData: Area | null;
  setAreaToEditData: (val: Area | null) => void;
  areas: Area[];
  deleteAreaMutation: any;
  handleDeleteArea: (id: number | null) => void;
  confirmDeleteArea: () => void;
  t: (key: string) => string;
}

export function AreasModals({
  isAddAreaModalOpen,
  setIsAddAreaModalOpen,
  viewAreaModalOpen,
  setViewAreaModalOpen,
  editAreaModalOpen,
  setEditAreaModalOpen,
  deleteDialogOpen,
  setDeleteDialogOpen,
  areaToDelete,
  setAreaToDelete,
  areaToView,
  setAreaToView,
  areaToEdit,
  setAreaToEdit,
  areaToEditData,
  setAreaToEditData,
  areas,
  deleteAreaMutation,
  handleDeleteArea,
  confirmDeleteArea,
  t,
}: AreasModalsProps) {
  return (
    <>
      {isAddAreaModalOpen && (
        <AddAreaModal
          isOpen={isAddAreaModalOpen}
          onClose={() => setIsAddAreaModalOpen(false)}
        />
      )}

      {viewAreaModalOpen && (
        <ViewAreaModal
          area={areaToView}
          isOpen={viewAreaModalOpen}
          onClose={() => {
            setViewAreaModalOpen(false);
            setAreaToView(null);
          }}
          onEdit={() => {
            setViewAreaModalOpen(false);
            if (areaToView) {
              setAreaToEdit(areaToView.area_id);
              setAreaToEditData(areaToView);
              setEditAreaModalOpen(true);
            }
          }}
          onDelete={() => {
            setViewAreaModalOpen(false);
            if (areaToView) handleDeleteArea(areaToView.area_id);
          }}
        />
      )}

      <Dialog
        open={deleteDialogOpen}
        onOpenChange={(open) => {
          if (!deleteAreaMutation.isPending) setDeleteDialogOpen(open);
        }}
      >
        <DialogContent className="sm:max-w-md w-[95vw] sm:w-full bg-white">
          <DialogHeader>
            <DialogTitle className="flex items-center gap-2 text-red-600">
              <AlertTriangle className="h-5 w-5" />
              {t("areas.deleteTitle")}
            </DialogTitle>
            <DialogDescription>
              {t("areas.deleteConfirm")}
            </DialogDescription>
          </DialogHeader>
          <div className="py-4">
            {areaToDelete && (
              <div className="bg-gray-50 rounded-lg p-3 space-y-2">
                <p className="font-medium text-gray-900 break-words">
                  {areas.find((a) => a.area_id === areaToDelete)?.area_name}
                </p>
                <p className="text-sm text-gray-500 break-words line-clamp-2">
                  {areas.find((a) => a.area_id === areaToDelete)?.description ||
                    t("areas.table.noDescription")}
                </p>
              </div>
            )}
          </div>
          <DialogFooter className="sm:justify-end gap-2 sm:gap-0 mt-4">
            <Button
              variant="outline"
              onClick={() => {
                setDeleteDialogOpen(false);
                setAreaToDelete(null);
              }}
              disabled={deleteAreaMutation.isPending}
              className="w-full sm:w-auto"
            >
              {t("areas.cancelBtn")}
            </Button>
            <Button
              variant="destructive"
              onClick={confirmDeleteArea}
              disabled={deleteAreaMutation.isPending}
              className="bg-red-600 hover:bg-red-700 w-full sm:w-auto text-white"
            >
              {deleteAreaMutation.isPending ? t("areas.deletingBtn") : t("areas.deleteBtn")}
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>

      {editAreaModalOpen && (
        <EditAreaModal
          isOpen={editAreaModalOpen}
          onClose={() => {
            setEditAreaModalOpen(false);
            setAreaToEdit(null);
            setAreaToEditData(null);
          }}
          areaId={areaToEdit!}
          initialArea={areaToEditData || undefined}
        />
      )}
    </>
  );
}
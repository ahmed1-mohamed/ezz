import { AlertTriangle, Loader2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { useLanguage } from "@/contexts/LanguageContext";

interface DeleteProjectDialogProps {
  isOpen: boolean;
  onClose: (isOpen: boolean) => void;
  onConfirm: () => void;
  isPending: boolean;
}

export function DeleteProjectDialog({
  isOpen,
  onClose,
  onConfirm,
  isPending,
}: DeleteProjectDialogProps) {
  const { t } = useLanguage();

  // The dialog stays open while the delete is in flight; the caller closes it on success.
  const handleOpenChange = (open: boolean) => {
    if (isPending) return;
    onClose(open);
  };

  return (
    <Dialog open={isOpen} onOpenChange={handleOpenChange}>
      <DialogContent>
        <DialogHeader>
          <DialogTitle className="flex items-center gap-2 text-red-600">
            <AlertTriangle className="h-5 w-5" /> {t("projects.deleteDialog.title")}
          </DialogTitle>
          <DialogDescription>
            {t("projects.deleteDialog.description")}
          </DialogDescription>
        </DialogHeader>
        <DialogFooter>
          <Button variant="outline" onClick={() => handleOpenChange(false)} disabled={isPending}>
            {t("common.actions.cancel")}
          </Button>
          <Button
            variant="destructive"
            onClick={onConfirm}
            disabled={isPending}
          >
            {isPending && <Loader2 className="me-2 h-4 w-4 animate-spin" />}
            {isPending ? t("common.actions.deleting") : t("common.actions.delete")}
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}

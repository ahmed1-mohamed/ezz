"use client";

import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { AlertTriangle } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";

interface PropertiesDeleteDialogProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  onConfirm: () => void;
  isDeleting: boolean;
}

export function PropertiesDeleteDialog({
  open,
  onOpenChange,
  onConfirm,
  isDeleting,
}: PropertiesDeleteDialogProps) {
  const { t } = useLanguage();

  return (
    <Dialog open={open} onOpenChange={(next) => !isDeleting && onOpenChange(next)}>
      <DialogContent className="max-w-sm mx-4 sm:mx-auto">
        <DialogHeader>
          <DialogTitle className="flex items-center gap-2 text-red-600">
            <AlertTriangle className="h-5 w-5" />
            {t("properties.deleteDialog.title")}
          </DialogTitle>
          <DialogDescription>
            {t("properties.deleteDialog.description")}
          </DialogDescription>
        </DialogHeader>
        <DialogFooter className="flex-col gap-2 sm:flex-row">
          <Button
            variant="outline"
            className="w-full sm:w-auto"
            onClick={() => onOpenChange(false)}
            disabled={isDeleting}
          >
            {t("properties.deleteDialog.cancel")}
          </Button>
          <Button
            variant="destructive"
            className="w-full sm:w-auto"
            onClick={onConfirm}
            disabled={isDeleting}
          >
            {isDeleting
              ? t("properties.deleteDialog.deleting")
              : t("properties.deleteDialog.delete")}
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}

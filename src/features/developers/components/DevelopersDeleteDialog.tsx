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

interface DevelopersDeleteDialogProps {
  isOpen: boolean;
  isPending: boolean;
  onClose: () => void;
  onConfirm: () => void;
}

export function DevelopersDeleteDialog({
  isOpen,
  isPending,
  onClose,
  onConfirm,
}: DevelopersDeleteDialogProps) {
  const { t } = useLanguage();

  return (
    <Dialog
      open={isOpen}
      onOpenChange={(open) => {
        if (!open) onClose();
      }}
    >
      <DialogContent className="sm:max-w-md">
        <DialogHeader>
          <DialogTitle className="flex items-center gap-2 text-red-600">
            <AlertTriangle className="h-5 w-5" />
            {t("developers.deleteTitle") || "Delete Developer"}
          </DialogTitle>
          <DialogDescription>
            {t("developers.deleteConfirm") ||
              "Are you sure you want to delete this developer? This action cannot be undone."}
          </DialogDescription>
        </DialogHeader>
        <DialogFooter className="sm:justify-end">
          <Button
            variant="outline"
            onClick={onClose}
            disabled={isPending}
          >
            {t("common.cancel") || "Cancel"}
          </Button>
          <Button
            variant="destructive"
            onClick={onConfirm}
            disabled={isPending}
          >
            {isPending
              ? t("common.deleting") || "Deleting..."
              : t("common.delete") || "Delete"}
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}

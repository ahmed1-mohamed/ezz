import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Trash2, Edit, Eye, MoreHorizontal, Loader2 } from "lucide-react";
import { useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { useLanguage } from "@/contexts/LanguageContext";

export function BadgeCard({
  badge,
  onView,
  onEdit,
  onDelete,
  isDeleting,
}: {
  badge: any;
  onView: (badge: any) => void;
  onEdit: (badge: any) => void;
  onDelete: (id: number) => void;
  isDeleting?: boolean;
}) {
  const { t } = useLanguage();
  const [dialogOpen, setDialogOpen] = useState(false);

  const handleDeleteClick = () => {
    onDelete(badge.id || badge.badge_id);
    setDialogOpen(false);
  };
  return (
    <Card className="border border-gray-200 shadow-sm hover:shadow-lg rounded-xl bg-white overflow-hidden flex flex-col transition-all duration-300">
      <CardContent className="p-5 flex-1 flex flex-col">
        <div className="flex justify-between items-start mb-2">
          <button
            onClick={() => onView(badge)}
            className="text-xl text-gray-900 font-medium tracking-tight hover:text-teal-600 transition-colors no-underline text-start outline-none focus:text-teal-600 group-hover:text-teal-600"
          >
            {badge.name}
          </button>
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="ghost" size="icon" className="h-8 w-8 -me-2 text-gray-500 hover:text-gray-900 rounded-full">
                <MoreHorizontal className="w-5 h-5" />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end" className="w-40 rounded-xl shadow-lg border-gray-100">
              <DropdownMenuItem className="gap-2 cursor-pointer rounded-lg m-1" onSelect={(e) => { e.preventDefault(); onView(badge); }}>
                <Eye className="w-4 h-4" />
                {t("subscriptions.badgeCard.view")}
              </DropdownMenuItem>
              <DropdownMenuItem className="gap-2 cursor-pointer rounded-lg m-1" onSelect={(e) => { e.preventDefault(); onEdit(badge); }}>
                <Edit className="w-4 h-4" />
                {t("subscriptions.badgeCard.edit")}
              </DropdownMenuItem>
              <DropdownMenuItem className="gap-2 cursor-pointer text-red-600 focus:text-red-700 focus:bg-red-50 rounded-lg m-1" onSelect={(e) => { e.preventDefault(); setDialogOpen(true); }}>
                <Trash2 className="w-4 h-4" />
                {t("subscriptions.badgeCard.delete")}
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>

        <div className="mb-4">
          <span className="text-[#A855F7] font-semibold text-lg">
            {(badge.monthly_price_credits || badge.price_credits || 0).toLocaleString()} {t("subscriptions.badgeCard.credits")}
          </span>
        </div>

        <div className="text-sm text-gray-500 mb-6">
          {badge.placement ? (
            <span>
              {badge.placement.location} {badge.placement.format ? `(${badge.placement.format})` : ""}
            </span>
          ) : (
            <span>{t("subscriptions.badgeCard.globalPlacement")}</span>
          )}
        </div>

        <div className="mt-auto">
          <div className="border-t border-gray-100 mb-4" />

          <div className="flex justify-between items-center">
            <span className="text-sm text-gray-500">{t("subscriptions.badgeCard.status")}</span>
            <Badge
              className={
                badge.is_active
                  ? "bg-green-100 text-green-700 hover:bg-green-100 rounded-md px-2 py-0.5 text-xs font-medium border-0 shadow-none"
                  : "bg-gray-100 text-gray-700 hover:bg-gray-100 rounded-md px-2 py-0.5 text-xs font-medium border-0 shadow-none"
              }
            >
              {badge.is_active
                ? (t("subscriptions.badgeCard.active"))
                : (t("subscriptions.badgeCard.inactive"))}
            </Badge>
          </div>
        </div>
      </CardContent>

      <Dialog open={dialogOpen} onOpenChange={setDialogOpen}>
        <DialogContent className="sm:max-w-[425px] rounded-2xl">
          <DialogHeader>
            <DialogTitle className="text-red-600 flex items-center gap-2">
              <Trash2 className="w-5 h-5" />
              {t("subscriptions.badgeCard.deleteTitle")}
            </DialogTitle>
            <DialogDescription className="pt-2">
              {t("subscriptions.badgeCard.deleteConfirm", { name: badge.name })}
            </DialogDescription>
          </DialogHeader>
          <DialogFooter className="mt-4 sm:justify-end gap-2">
            <Button
              type="button"
              variant="outline"
              onClick={() => setDialogOpen(false)}
              disabled={isDeleting}
            >
              {t("subscriptions.badgeCard.cancel")}
            </Button>
            <Button
              type="button"
              variant="destructive"
              onClick={handleDeleteClick}
              disabled={isDeleting}
            >
              {isDeleting ? (
                <>
                  <Loader2 className="w-4 h-4 me-2 animate-spin" />
                  {t("subscriptions.badgeCard.deleting")}
                </>
              ) : (
                (t("subscriptions.badgeCard.deleteFeature"))
              )}
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </Card>
  );
}
import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Trash2, AlertTriangle, Loader2, MoreHorizontal, Edit, Eye } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";

export function PackageCard({
  pkg,
  isBestValue,
  onView,
  onEdit,
  onDelete,
  isDeleting,
}: {
  pkg: any;
  isBestValue: boolean;
  onView: (pkg: any) => void;
  onEdit: (pkg: any) => void;
  onDelete: (packageId: number) => void;
  isDeleting: boolean;
}) {
  const { t } = useLanguage();
  const [dialogOpen, setDialogOpen] = useState(false);

  const handleDeleteClick = () => {
    onDelete(pkg.id);
    setDialogOpen(false);
  };

  const parsedPrice = typeof pkg.price === 'string'
    ? Number(pkg.price.replace(/,/g, ''))
    : (pkg.price !== undefined ? pkg.price : (pkg.price_cents ? pkg.price_cents / 100 : 0));

  const isActive = pkg.status !== undefined ? pkg.status : pkg.is_active;
  const subscribers = pkg.subscribers || 0;

  return (
    <>
      <Card className="border border-gray-200 shadow-sm hover:shadow-xl rounded-xl bg-white overflow-hidden flex flex-col transition-all duration-300 hover:-translate-y-1 group">
        <CardContent className="p-5 flex-1 flex flex-col">
          <div className="flex justify-between items-start">
            <div>
              <button
                onClick={() => onView(pkg)}
                className="text-xl text-gray-800 font-medium group-hover:text-teal-600 transition-colors no-underline text-start outline-none focus:text-teal-600"
              >
                {pkg.name}
              </button>
            </div>
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="ghost" size="icon" className="h-8 w-8 -me-2 text-gray-500 hover:text-gray-900 rounded-full">
                  <MoreHorizontal className="w-5 h-5" />
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end" className="w-40 rounded-xl shadow-lg border-gray-100">
                <DropdownMenuItem className="gap-2 cursor-pointer rounded-lg m-1" onSelect={(e) => { e.preventDefault(); onView(pkg); }}>
                  <Eye className="w-4 h-4" />
                  {t("subscriptions.common.view")}
                </DropdownMenuItem>
                <DropdownMenuItem className="gap-2 cursor-pointer rounded-lg m-1" onSelect={(e) => { e.preventDefault(); onEdit(pkg); }}>
                  <Edit className="w-4 h-4" />
                  {t("common.edit")}
                </DropdownMenuItem>
                <DropdownMenuItem className="gap-2 cursor-pointer text-red-600 focus:text-red-700 focus:bg-red-50 rounded-lg m-1" onSelect={(e) => { e.preventDefault(); setDialogOpen(true); }}>
                  <Trash2 className="w-4 h-4" />
                  {t("common.delete")}
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </div>

          <div className="flex items-baseline gap-2 mt-1">
            <span className="text-[#A855F7] font-semibold text-lg">
              {pkg.currency || "AED"} {parsedPrice.toLocaleString()}
            </span>
            <span className="text-gray-500 text-sm">
              {pkg.credits?.toLocaleString() || 0} {t("subscriptions.common.credits")}
            </span>
          </div>

          <div className="border-t border-gray-100 my-4" />

          <div className="flex justify-between items-center mb-3">
            <span className="text-sm text-gray-500">{t("subscriptions.packageCard.subscribers")}</span>
            <span className="text-sm text-gray-800">{subscribers}</span>
          </div>


          <div className="flex justify-between items-center">
            <span className="text-sm text-gray-500">{t("subscriptions.common.status")}</span>
            <Badge
              className={
                isActive
                  ? "bg-green-100 text-green-700 hover:bg-green-100 rounded-md px-2 py-0.5 text-xs font-medium border-0 shadow-none"
                  : "bg-gray-100 text-gray-700 hover:bg-gray-100 rounded-md px-2 py-0.5 text-xs font-medium border-0 shadow-none"
              }
            >
              {isActive ? t("common.active") : t("common.inactive")}
            </Badge>
          </div>
        </CardContent>
      </Card>

      <Dialog open={dialogOpen} onOpenChange={setDialogOpen}>
        <DialogContent className="sm:max-w-md">
          <DialogHeader>
            <DialogTitle className="flex items-center gap-2 text-red-600">
              <AlertTriangle className="h-5 w-5" />
              {t("subscriptions.packageCard.deletePackage")}
            </DialogTitle>
            <DialogDescription>
              {t("subscriptions.packageCard.deleteConfirm")}
            </DialogDescription>
          </DialogHeader>
          <div className="py-4">
            <div className="bg-gray-50 rounded-lg p-3 space-y-2">
              <p className="font-medium text-gray-900">{pkg.name}</p>
              <p className="text-sm text-gray-500">
                {pkg.code} • {pkg.currency || "AED"} {pkg.price} • {pkg.credits?.toLocaleString() || 0}{" "}
                {t("subscriptions.common.credits")}
              </p>
              {subscribers > 0 && (
                <p className="text-sm text-amber-600">
                  {t("subscriptions.packageCard.subscribersWarning", { count: subscribers })}
                </p>
              )}
            </div>
          </div>
          <DialogFooter className="sm:justify-end">
            <Button
              variant="outline"
              onClick={() => setDialogOpen(false)}
              disabled={isDeleting}
            >
              {t("common.cancel")}
            </Button>
            <Button
              variant="destructive"
              onClick={handleDeleteClick}
              disabled={isDeleting}
              className="gap-2"
            >
              {isDeleting ? (
                <>
                  <Loader2 className="h-4 w-4 animate-spin" />
                  {t("common.deleting")}
                </>
              ) : (
                <>
                  <Trash2 className="h-4 w-4" />
                  {t("subscriptions.packageCard.deletePackage")}
                </>
              )}
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </>
  );
}

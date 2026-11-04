import { useRouter } from "next/navigation";
import { useLanguage } from "@/contexts/LanguageContext";
import { useTableSettings } from "@/hooks/use-table-settings";
import { Button } from "@/components/ui/button";
import { Switch } from "@/components/ui/switch";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { EmptyState } from "@/components/ui/empty-state";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import {
  AlertTriangle,
  Star,
  Eye,
  Edit,
  Trash2, Loader2 } from "lucide-react";

interface Expert {
  id: number;
  name: string;
  email: string;
  phone: string;
  specializations: string[];
  countries: string[];
  consultations: number;
  rating_avg: number;
  rating_count: number;
  status: string;
}

interface ExpertsTableProps {
  tableSettings: ReturnType<typeof useTableSettings>;
  experts: Expert[];
  expertActiveStatus: Record<number, boolean>;
  updatingExpertId: number | null;
  toggleStatus: (id: number, checked: boolean) => void;
  setBulkImportModalOpen: (open: boolean) => void;
  deleteDialogOpen: boolean;
  setDeleteDialogOpen: (open: boolean) => void;
  expertToDelete: number | null;
  setExpertToDelete: (id: number | null) => void;
  handleDeleteExpert: (id: number) => void;
  isDeleting?: boolean;
}

export function ExpertsTable({
  tableSettings,
  experts,
  expertActiveStatus,
  updatingExpertId,
  toggleStatus,
  setBulkImportModalOpen,
  deleteDialogOpen,
  setDeleteDialogOpen,
  expertToDelete,
  setExpertToDelete,
  handleDeleteExpert,
  isDeleting = false,
}: ExpertsTableProps) {
  const router = useRouter();
  const { t } = useLanguage();

  const getInitials = (name: string) => {
    if (!name) return "EX";
    return name
      .split(" ")
      .map((n) => n.charAt(0))
      .join("")
      .toUpperCase()
      .slice(0, 2);
  };

  return (
    <div className="rounded-xl border border-gray-100 dark:border-neutral-800 bg-white dark:bg-neutral-900 overflow-hidden overflow-x-auto w-full">
      <Table className="w-full min-w-[1000px]">
        <TableHeader>
          <TableRow className="bg-white dark:bg-neutral-900 hover:bg-white dark:hover:bg-neutral-900 border-b border-gray-100 dark:border-neutral-800">
            {tableSettings.isColumnVisible("expert") && (
              <TableHead className="font-semibold text-gray-500 uppercase tracking-wider w-[220px] px-3 text-[11px] bg-transparent">
                {t("experts.columns.expert")}
              </TableHead>
            )}
            {tableSettings.isColumnVisible("specializations") && (
              <TableHead className="font-semibold text-gray-500 uppercase tracking-wider w-[180px] px-3 text-[11px] bg-transparent">
                {t("experts.columns.specializations")}
              </TableHead>
            )}
            {tableSettings.isColumnVisible("country") && (
              <TableHead className="font-semibold text-gray-500 uppercase tracking-wider w-[120px] px-3 text-[11px] bg-transparent">
                {t("experts.columns.country")}
              </TableHead>
            )}
            {tableSettings.isColumnVisible("contact") && (
              <TableHead className="font-semibold text-gray-500 uppercase tracking-wider w-[150px] px-3 text-[11px] bg-transparent">
                {t("experts.columns.contact")}
              </TableHead>
            )}
            {tableSettings.isColumnVisible("email") && (
              <TableHead className="font-semibold text-gray-500 uppercase tracking-wider w-[180px] px-3 text-[11px] bg-transparent">
                {t("experts.columns.email")}
              </TableHead>
            )}
            {tableSettings.isColumnVisible("consultations") && (
              <TableHead className="font-semibold text-gray-500 uppercase tracking-wider w-[120px] px-3 text-[11px] text-center bg-transparent">
                {t("experts.columns.consultations")}
              </TableHead>
            )}
            {tableSettings.isColumnVisible("responseRate") && (
              <TableHead className="font-semibold text-gray-500 uppercase tracking-wider w-[120px] px-3 text-[11px] bg-transparent">
                {t("experts.details.rating")}
              </TableHead>
            )}
            {tableSettings.isColumnVisible("status") && (
              <TableHead className="font-semibold text-gray-500 uppercase tracking-wider w-[120px] px-3 text-[11px] bg-transparent">
                {t("experts.columns.status")}
              </TableHead>
            )}
            {tableSettings.isColumnVisible("actions") && (
              <TableHead className="font-semibold text-gray-500 uppercase tracking-wider text-center w-[100px] px-3 text-[11px] bg-transparent">
                {t("experts.columns.actions")}
              </TableHead>
            )}
          </TableRow>
        </TableHeader>
        <TableBody>
          {experts.length === 0 ? (
            <TableRow>
              <TableCell colSpan={9} className="p-0">
                <EmptyState
                  type="no_results"
                  title={t("experts.table.noExperts")}
                  className="py-12"
                />
              </TableCell>
            </TableRow>
          ) : (
            experts.map((expert) => (
              <TableRow
                key={expert.id}
                className="hover:bg-gray-50/60 dark:hover:bg-neutral-800/50 cursor-pointer border-b border-gray-100 dark:border-neutral-800 transition-colors"
                onClick={() => router.push(`/admin/experts/${expert.id}`)}
              >
                {tableSettings.isColumnVisible("expert") && (
                  <TableCell className="px-3 py-3">
                    <div className="flex items-center gap-3">
                      <div className="h-9 w-9 rounded-full overflow-hidden flex-shrink-0 bg-teal-50 dark:bg-teal-900/30 flex items-center justify-center text-teal-700 dark:text-teal-400 font-semibold text-xs tracking-wider border border-teal-100/60 dark:border-teal-800/60">
                        {getInitials(expert.name)}
                      </div>
                      <div className="min-w-0">
                        <p className="text-gray-900 dark:text-gray-100 text-[13px] font-semibold hover:text-teal-600 dark:hover:text-teal-400 transition-colors truncate">
                          {expert.name}
                        </p>
                        <p className="text-gray-400 text-[11px] truncate">
                          {expert.email}
                        </p>
                      </div>
                    </div>
                  </TableCell>
                )}

                {tableSettings.isColumnVisible("specializations") && (
                  <TableCell className="px-3 py-3 text-[13px] text-gray-700 dark:text-gray-300">
                    <div className="truncate max-w-[170px]">
                      {expert.specializations.length > 0
                        ? expert.specializations.join(", ")
                        : t("experts.table.noSpecializations")}
                    </div>
                  </TableCell>
                )}

                {tableSettings.isColumnVisible("country") && (
                  <TableCell className="px-3 py-3">
                    <div className="flex items-center text-[13px]">
                      {expert.countries.length > 0 ? (
                        expert.countries.join(", ").split(" ").map((word, i) => (
                          <span
                            key={i}
                            className={
                              i === 0 && word.length <= 2
                                ? "text-gray-400 dark:text-gray-500 me-1 text-xs font-medium"
                                : "text-gray-700 dark:text-gray-300"
                            }
                          >
                            {word}{i !== expert.countries.join(", ").split(" ").length - 1 ? " " : ""}
                          </span>
                        ))
                      ) : (
                        <span className="text-gray-400 text-xs">
                          {t("experts.table.na")}
                        </span>
                      )}
                    </div>
                  </TableCell>
                )}

                {tableSettings.isColumnVisible("contact") && (
                  <TableCell className="px-3 py-3 text-[13px] text-gray-700 dark:text-gray-300">
                    <span className="font-normal">{expert.phone || "—"}</span>
                  </TableCell>
                )}

                {tableSettings.isColumnVisible("email") && (
                  <TableCell className="px-3 py-3 text-[13px] text-gray-700 dark:text-gray-300 truncate max-w-[160px]">
                    {expert.email}
                  </TableCell>
                )}

                {tableSettings.isColumnVisible("consultations") && (
                  <TableCell className="px-3 py-3 text-center text-[13px] font-medium text-gray-700 dark:text-gray-300">
                    {expert.consultations}
                  </TableCell>
                )}

                {tableSettings.isColumnVisible("responseRate") && (
                  <TableCell className="px-3 py-3">
                    <div className="flex items-center gap-1 text-[13px]">
                      <Star className="h-3.5 w-3.5 text-amber-500 fill-amber-500 shrink-0" />
                      <span className="font-semibold text-gray-800 dark:text-gray-200">
                        {expert.rating_avg ? expert.rating_avg.toFixed(1) : "0.0"}
                      </span>
                      <span className="text-gray-400 text-xs">
                        ({expert.rating_count ?? 0})
                      </span>
                    </div>
                  </TableCell>
                )}

                {tableSettings.isColumnVisible("status") && (
                  <TableCell className="px-3 py-3" onClick={(e) => e.stopPropagation()}>
                    <div className="flex items-center gap-2">
                      <Switch
                        checked={Boolean(
                          expertActiveStatus[expert.id] !== undefined
                            ? expertActiveStatus[expert.id]
                            : expert.status === "approved" || expert.status === "active"
                        )}
                        disabled={updatingExpertId === expert.id}
                        onCheckedChange={(checked) => toggleStatus(expert.id, checked)}
                      />
                      <span
                        className={`px-2.5 py-0.5 rounded-md text-xs font-medium capitalize ${
                          (expertActiveStatus[expert.id] !== undefined
                            ? expertActiveStatus[expert.id]
                            : expert.status === "approved" || expert.status === "active")
                            ? "bg-teal-50 text-teal-600 dark:bg-teal-950/50 dark:text-teal-400 border border-teal-100/50"
                            : "bg-gray-100 text-gray-600 dark:bg-neutral-800 dark:text-gray-400"
                        }`}
                      >
                        {(expertActiveStatus[expert.id] !== undefined
                          ? expertActiveStatus[expert.id]
                          : expert.status === "approved" || expert.status === "active")
                          ? (t("common.active"))
                          : (t("common.inactive"))}
                      </span>
                    </div>
                  </TableCell>
                )}

                {tableSettings.isColumnVisible("actions") && (
                  <TableCell className="px-3 py-3 text-center" onClick={(e) => e.stopPropagation()}>
                    <div className="flex items-center justify-center gap-1">
                      <button
                        onClick={(e) => {
                          e.stopPropagation();
                          router.push(`/admin/experts/${expert.id}`);
                        }}
                        title={t("experts.table.view")}
                        className="h-7 w-7 inline-flex items-center justify-center rounded text-gray-400 hover:text-teal-600 hover:bg-teal-50 dark:hover:bg-slate-800 transition-colors cursor-pointer"
                      >
                        <Eye className="h-3.5 w-3.5" />
                      </button>
                      <button
                        onClick={(e) => {
                          e.stopPropagation();
                          router.push(`/admin/experts/${expert.id}/edit`);
                        }}
                        title={t("common.edit")}
                        className="h-7 w-7 inline-flex items-center justify-center rounded text-gray-400 hover:text-teal-600 hover:bg-teal-50 dark:hover:bg-slate-800 transition-colors cursor-pointer"
                      >
                        <Edit className="h-3.5 w-3.5" />
                      </button>
                      <button
                        onClick={(e) => {
                          e.stopPropagation();
                          setExpertToDelete(expert.id);
                          setDeleteDialogOpen(true);
                        }}
                        title={t("common.delete")}
                        className="h-7 w-7 inline-flex items-center justify-center rounded text-red-400 hover:text-red-600 hover:bg-red-50 dark:hover:bg-red-950/30 transition-colors cursor-pointer"
                      >
                        <Trash2 className="h-3.5 w-3.5" />
                      </button>
                    </div>
                  </TableCell>
                )}
              </TableRow>
            ))
          )}
        </TableBody>
      </Table>

      {/* Delete Confirmation Dialog */}
      <Dialog
        open={deleteDialogOpen}
        onOpenChange={(open) => {
          if (isDeleting) return;
          setDeleteDialogOpen(open);
          if (!open) setExpertToDelete(null);
        }}
      >
        <DialogContent className="sm:max-w-md">
          <DialogHeader>
            <DialogTitle className="flex items-center gap-2 text-red-600">
              <AlertTriangle className="h-5 w-5" />
              {t("experts.deleteModal.title")}
            </DialogTitle>
            <DialogDescription>
              {t("experts.deleteModal.description")}
            </DialogDescription>
          </DialogHeader>
          {expertToDelete && (
            <div className="py-4">
              <div className="bg-gray-50 rounded-lg p-3 space-y-1">
                <p className="font-medium text-gray-900">
                  {experts.find((e) => e.id === expertToDelete)?.name}
                </p>
                <p className="text-sm text-gray-500">
                  {experts.find((e) => e.id === expertToDelete)?.email}
                </p>
              </div>
            </div>
          )}
          <DialogFooter className="sm:justify-end">
            <Button
              variant="outline"
              onClick={() => {
                setDeleteDialogOpen(false);
                setExpertToDelete(null);
              }}
              disabled={isDeleting}
            >
              {t("experts.deleteModal.cancel")}
            </Button>
            <Button
              variant="destructive"
              onClick={() => expertToDelete && handleDeleteExpert(expertToDelete)}
              className="bg-red-600 hover:bg-red-700"
              disabled={isDeleting}
            >
              {isDeleting && <Loader2 className="h-4 w-4 me-2 animate-spin" />}
              {isDeleting ? t("common.deleting") : t("experts.deleteModal.delete")}
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </div>
  );
}

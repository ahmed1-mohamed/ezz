import { Button } from "@/components/ui/button";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";

interface PaginationProps {
  page: number;
  totalPages: number;
  perPage: number;
  totalItems: number;
  onPageChange: (page: number) => void;
  onPerPageChange: (perPage: string) => void;
  perPageOptions?: string[];
  isLoading?: boolean;
  currentItemsCount?: number;
}

export function Pagination({
  page,
  totalPages,
  perPage,
  totalItems,
  onPageChange,
  onPerPageChange,
  perPageOptions = ["10", "15", "20", "50", "100"],
  isLoading = false,
  currentItemsCount,
}: PaginationProps) {
  const { t } = useLanguage();

  const effectiveTotalPages =
    currentItemsCount !== undefined && currentItemsCount < perPage && page >= totalPages
      ? page
      : Math.max(1, totalPages);

  const getPageNumbers = () => {
    const pages: (number | string)[] = [];
    const maxVisible = 5;

    if (effectiveTotalPages <= maxVisible) {
      for (let i = 1; i <= effectiveTotalPages; i++) {
        pages.push(i);
      }
    } else {
      pages.push(1);
      if (page > 3) {
        pages.push("...");
      }
      let start = Math.max(2, page - 1);
      let end = Math.min(effectiveTotalPages - 1, page + 1);
      if (page <= 2) {
        start = 2;
        end = Math.min(3, effectiveTotalPages - 1);
      }
      if (page >= effectiveTotalPages - 1) {
        start = Math.max(2, effectiveTotalPages - 2);
        end = effectiveTotalPages - 1;
      }
      for (let i = start; i <= end; i++) {
        pages.push(i);
      }
      if (page < effectiveTotalPages - 2) {
        pages.push("...");
      }
      pages.push(effectiveTotalPages);
    }
    return pages;
  };

  const startIndex = (page - 1) * perPage;
  const endIndex = Math.min(startIndex + perPage, totalItems);

  if (effectiveTotalPages <= 1 && totalItems === 0) return null;

  return (
    <div className="flex flex-col sm:flex-row items-center justify-between gap-3 sm:gap-4 mt-4 w-full">
      <div className="flex flex-wrap items-center justify-center sm:justify-start gap-2 text-center sm:text-start">
        <span className="text-xs sm:text-sm text-gray-500">{t("common.pagination.show")}</span>
        <Select
          value={perPage.toString()}
          onValueChange={onPerPageChange}
          disabled={isLoading}
        >
          <SelectTrigger className="w-[70px] h-8 text-xs sm:text-sm">
            <SelectValue />
          </SelectTrigger>
          <SelectContent>
            {perPageOptions.map((opt) => (
              <SelectItem key={opt} value={opt}>
                {opt}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
        <span className="text-xs sm:text-sm text-gray-500">
          {t("common.pagination.showing")} {totalItems > 0 ? startIndex + 1 : 0}-{endIndex} {t("common.pagination.of")} {totalItems} {t("common.pagination.results")}
        </span>
      </div>

      {effectiveTotalPages > 1 && (
        <div className="flex items-center justify-center gap-1 flex-wrap">
          <Button
            variant="outline"
            size="icon"
            onClick={() => onPageChange(Math.max(1, page - 1))}
            disabled={page === 1 || isLoading}
            className="h-8 w-8 border-gray-200"
          >
            <ChevronLeft className="h-4 w-4 rtl:rotate-180" />
          </Button>
          {getPageNumbers().map((pageNum, index) =>
            typeof pageNum === "number" ? (
              <Button
                key={index}
                variant={page === pageNum ? "default" : "outline"}
                size="icon"
                onClick={() => onPageChange(pageNum)}
                disabled={isLoading}
                className={
                  page === pageNum
                    ? "h-8 w-8 bg-teal-600 hover:bg-teal-700 text-white border-0"
                    : "h-8 w-8 border-gray-200"
                }
              >
                {pageNum}
              </Button>
            ) : (
              <span key={index} className="px-1 text-gray-400">
                {pageNum}
              </span>
            ),
          )}
          <Button
            variant="outline"
            size="icon"
            onClick={() => onPageChange(Math.min(effectiveTotalPages, page + 1))}
            disabled={page === effectiveTotalPages || effectiveTotalPages === 0 || isLoading}
            className="h-8 w-8 border-gray-200"
          >
            <ChevronRight className="h-4 w-4 rtl:rotate-180" />
          </Button>
        </div>
      )}
    </div>
  );
}

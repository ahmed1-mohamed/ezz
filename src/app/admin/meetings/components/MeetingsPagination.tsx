import { ChevronLeft, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

interface MeetingsPaginationProps {
  currentPage: number;
  setCurrentPage: (page: number | ((p: number) => number)) => void;
  perPage: number;
  handlePerPageChange: (value: string) => void;
  total: number;
  totalPages: number;
  getPageNumbers: () => number[];
}

export function MeetingsPagination({
  currentPage,
  setCurrentPage,
  perPage,
  handlePerPageChange,
  total,
  totalPages,
  getPageNumbers,
}: MeetingsPaginationProps) {
  return (
    <div className="flex items-center justify-between">
      <div className="flex items-center gap-2">
        <span className="text-sm text-gray-500">Show</span>
        <Select
          value={perPage.toString()}
          onValueChange={handlePerPageChange}
        >
          <SelectTrigger className="w-[80px] h-8">
            <SelectValue />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="10">10</SelectItem>
            <SelectItem value="25">25</SelectItem>
            <SelectItem value="50">50</SelectItem>
            <SelectItem value="100">100</SelectItem>
          </SelectContent>
        </Select>
        <span className="text-sm text-gray-500">of {total} entries</span>
      </div>
      <div className="flex items-center gap-1">
        <Button
          variant="outline"
          size="icon"
          onClick={() => setCurrentPage((p) => Math.max(1, p - 1))}
          disabled={currentPage === 1}
          className="h-8 w-8 border-gray-200"
        >
          <ChevronLeft className="h-4 w-4" />
        </Button>
        {getPageNumbers().map((page, index) => (
          <Button
            key={index}
            variant={currentPage === page ? "default" : "outline"}
            size="icon"
            onClick={() => setCurrentPage(page)}
            className={
              currentPage === page
                ? "h-8 w-8 bg-gray-900 hover:bg-gray-800 text-white"
                : "h-8 w-8 border-gray-200"
            }
          >
            {page}
          </Button>
        ))}
        <Button
          variant="outline"
          size="icon"
          onClick={() =>
            setCurrentPage((p) => Math.min(totalPages, p + 1))
          }
          disabled={currentPage === totalPages || totalPages === 0}
          className="h-8 w-8 border-gray-200"
        >
          <ChevronRight className="h-4 w-4" />
        </Button>
      </div>
    </div>
  );
}
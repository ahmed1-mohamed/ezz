import { TableRow, TableCell } from "@/components/ui/table";

interface TableRowSkeletonProps {
  cols: number;
}

export function TableRowSkeleton({ cols }: TableRowSkeletonProps) {
  return (
    <TableRow>
      {Array.from({ length: cols }).map((_, i) => (
        <TableCell key={i} className="px-4 py-4">
          <div
            className="h-4 rounded bg-gray-200 dark:bg-neutral-700 animate-pulse"
            style={{ width: `${50 + (i % 3) * 20}%` }}
          />
        </TableCell>
      ))}
    </TableRow>
  );
}

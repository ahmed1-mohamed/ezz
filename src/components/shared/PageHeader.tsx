import React from "react";
import { Button } from "@/components/ui/button";
import { Plus } from "lucide-react";

interface PageHeaderProps {
  title: string;
  totalItems?: number;
  actionButtonText?: string;
  onActionClick?: () => void;
  actionIcon?: React.ReactNode;
  children?: React.ReactNode;
}

export function PageHeader({
  title,
  totalItems,
  actionButtonText,
  onActionClick,
  actionIcon = <Plus className="h-4 w-4" />,
  children,
}: PageHeaderProps) {
  return (
    <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
      <div>
        <h1 className="text-lg font-bold text-gray-900 dark:text-white">{title}</h1>
        {totalItems !== undefined && (
          <p className="text-xs text-gray-400 font-normal mt-0.5">
            {totalItems.toLocaleString()} {title.toLowerCase()}
          </p>
        )}
      </div>
      <div className="flex flex-wrap items-center gap-2 w-full sm:w-auto">
        {children}
        {actionButtonText && onActionClick && (
          <Button
            className="bg-teal-600 hover:bg-teal-700 text-white gap-1.5 h-8 px-3.5 text-xs font-semibold rounded-md"
            onClick={onActionClick}
          >
            {actionIcon}
            {actionButtonText}
          </Button>
        )}
      </div>
    </div>
  );
}

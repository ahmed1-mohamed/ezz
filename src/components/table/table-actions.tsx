"use client";

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Button } from "@/components/ui/button";
import { MoreVertical, Eye, Edit, Trash2 } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";

interface TableActionsProps {
  onView?: () => void;
  onEdit?: () => void;
  onDelete?: () => void;
  customActions?: Array<{
    label: string;
    icon?: React.ReactNode;
    onClick: () => void;
    variant?: "default" | "destructive";
  }>;
}

export function TableActions({
  onView,
  onEdit,
  onDelete,
  customActions,
}: TableActionsProps) {
  const { t } = useLanguage();

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild onClick={(e) => e.stopPropagation()}>
        <Button variant="ghost" size="sm" className="h-8 w-8 p-0" onClick={(e) => e.stopPropagation()}>
          <MoreVertical className="h-4 w-4" />
          <span className="sr-only">{t("common.actions.openMenu")}</span>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end" className="w-40" onClick={(e) => e.stopPropagation()}>
        {onView && (
          <DropdownMenuItem
            onClick={(e) => {
              e.stopPropagation();
              onView();
            }}
            className="gap-2 cursor-pointer"
          >
            <Eye className="h-4 w-4" />
            {t("common.actions.view")}
          </DropdownMenuItem>
        )}
        {onEdit && (
          <DropdownMenuItem
            onClick={(e) => {
              e.stopPropagation();
              onEdit();
            }}
            className="gap-2 cursor-pointer"
          >
            <Edit className="h-4 w-4" />
            {t("common.edit")}
          </DropdownMenuItem>
        )}
        {customActions?.map((action, index) => (
          <DropdownMenuItem
            key={index}
            onClick={(e) => {
              e.stopPropagation();
              action.onClick();
            }}
            className={`gap-2 cursor-pointer ${action.variant === "destructive" ? "text-red-600" : ""
              }`}
          >
            {action.icon}
            {action.label}
          </DropdownMenuItem>
        ))}
        {(onView || onEdit || customActions) && onDelete && (
          <DropdownMenuSeparator />
        )}
        {onDelete && (
          <DropdownMenuItem
            onClick={(e) => {
              e.stopPropagation();
              onDelete();
            }}
            className="gap-2 text-red-600 focus:text-red-600 cursor-pointer"
          >
            <Trash2 className="h-4 w-4" />
            {t("common.delete")}
          </DropdownMenuItem>
        )}
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
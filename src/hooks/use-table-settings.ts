"use client";

import { useState, useEffect } from "react";

export interface ColumnConfig {
  id: string;
  label: string;
  visible: boolean;
}

export type Density = "compact" | "comfortable" | "spacious";

export interface SortConfig {
  column: string;
  direction: "asc" | "desc";
}

export interface TableSettingsState {
  columns: ColumnConfig[];
  density: Density;
  itemsPerPage: number;
  sort: SortConfig | null;
}

export function useTableSettings(
  tableId: string,
  defaultColumns: ColumnConfig[],
  defaultItemsPerPage: number = 15,
) {
  const [settings, setSettings] = useState<TableSettingsState>({
    columns: defaultColumns,
    density: "comfortable",
    itemsPerPage: defaultItemsPerPage,
    sort: null,
  });

  const [isInitialized, setIsInitialized] = useState(false);

  useEffect(() => {
    if (typeof window !== "undefined") {
      const stored = localStorage.getItem(`table-settings-${tableId}`);
      if (stored) {
        try {
          const parsed = JSON.parse(stored) as Partial<TableSettingsState>;
          const parsedColumns = parsed.columns || [];
          const mergedColumns = defaultColumns.map((defCol) => {
            const found = parsedColumns.find((pCol) => pCol.id === defCol.id);
            return found ? { ...defCol, visible: found.visible } : defCol;
          });

          const rawItemsPerPage = parsed.itemsPerPage;
          const validItemsPerPage =
            typeof rawItemsPerPage === "number" && rawItemsPerPage >= 5
              ? rawItemsPerPage
              : defaultItemsPerPage >= 5
                ? defaultItemsPerPage
                : 10;

          setSettings({
            columns: mergedColumns,
            density: parsed.density || "comfortable",
            itemsPerPage: validItemsPerPage,
            sort: parsed.sort || null,
          });
        } catch (error) {
          console.error("Failed to parse table settings from localStorage", error);
        }
      } else {
        setSettings((prev) => ({
          ...prev,
          columns: defaultColumns,
        }));
      }
      setIsInitialized(true);
    }
  }, [tableId]);

  const defaultLabelsSerialized = JSON.stringify(
    defaultColumns.map((c) => ({ id: c.id, label: c.label }))
  );

  useEffect(() => {
    setSettings((prev) => {
      let hasChanged = false;
      const updatedColumns = prev.columns.map((col) => {
        const defCol = defaultColumns.find((d) => d.id === col.id);
        if (defCol && defCol.label !== col.label) {
          hasChanged = true;
          return { ...col, label: defCol.label };
        }
        return col;
      });

      if (!hasChanged) return prev;
      return { ...prev, columns: updatedColumns };
    });
  }, [defaultLabelsSerialized]);

  useEffect(() => {
    if (isInitialized && typeof window !== "undefined") {
      localStorage.setItem(`table-settings-${tableId}`, JSON.stringify(settings));
    }
  }, [settings, tableId, isInitialized]);

  const toggleColumn = (columnId: string) => {
    setSettings((prev) => ({
      ...prev,
      columns: prev.columns.map((col) =>
        col.id === columnId ? { ...col, visible: !col.visible } : col
      ),
    }));
  };

  const setDensity = (density: Density) => {
    setSettings((prev) => ({ ...prev, density }));
  };

  const setItemsPerPage = (itemsPerPage: number) => {
    setSettings((prev) => ({ ...prev, itemsPerPage }));
  };

  const setSort = (sort: SortConfig | null) => {
    setSettings((prev) => ({ ...prev, sort }));
  };

  const resetToDefaults = () => {
    setSettings({
      columns: defaultColumns,
      density: "comfortable",
      itemsPerPage: defaultItemsPerPage >= 5 ? defaultItemsPerPage : 10,
      sort: null,
    });
  };

  const isColumnVisible = (columnId: string) => {
    return settings.columns.find((col) => col.id === columnId)?.visible ?? true;
  };

  return {
    settings,
    toggleColumn,
    setDensity,
    setItemsPerPage,
    setSort,
    resetToDefaults,
    isColumnVisible,
    // True once stored settings (e.g. itemsPerPage) have been read from localStorage.
    // Server-paginated pages can gate their list query on it to avoid a first request
    // with the default page size followed by a second one with the stored size.
    isInitialized,
  };
}
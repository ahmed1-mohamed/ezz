"use client";

import { useState } from "react";
import { Settings2, Columns, LayoutGrid, Download, Check, FileSpreadsheet, FileText, FileDown } from "lucide-react";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { Button } from "@/components/ui/button";
import { Switch } from "@/components/ui/switch";
import { Label } from "@/components/ui/label";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { useTableSettings } from "@/hooks/use-table-settings";
import { useLanguage } from "@/contexts/LanguageContext";

interface TableSettingsProps {
  settings: ReturnType<typeof useTableSettings>;
  onExportCsv?: () => void;
  onExportExcel?: () => void;
  onExportPdf?: () => void;
  isExporting?: boolean;
}

export function TableSettings({
  settings,
  onExportCsv,
  onExportExcel,
  onExportPdf,
  isExporting = false,
}: TableSettingsProps) {
  const [isOpen, setIsOpen] = useState(false);
  const { t } = useLanguage();

  return (
    <Popover open={isOpen} onOpenChange={setIsOpen}>
      <PopoverTrigger asChild>
        <Button variant="outline" className="gap-2 border-gray-200 w-full sm:w-auto justify-center">
          <Settings2 className="h-4 w-4" />
          {t("tableSettings.settings")}
        </Button>
      </PopoverTrigger>
      <PopoverContent align="end" className="w-[340px] max-w-[calc(100vw-24px)] p-0" sideOffset={8}>
        <div className="p-4 border-b border-gray-100">
          <div className="flex items-center justify-between">
            <div className="font-semibold text-gray-900 flex items-center gap-2">
              <Settings2 className="h-4 w-4 text-teal-600" />
              {t("tableSettings.title")}
            </div>
            <Button
              variant="ghost"
              size="sm"
              onClick={settings.resetToDefaults}
              className="h-8 text-xs text-gray-500 hover:text-gray-900"
            >
              {t("tableSettings.reset")}
            </Button>
          </div>
          <p className="text-xs text-gray-500 mt-1">
            {t("tableSettings.customize")}
          </p>
        </div>

        <Tabs defaultValue="columns" className="w-full">
          <div className="px-4 pt-2">
            <TabsList className="grid w-full grid-cols-3">
              <TabsTrigger value="columns" className="text-xs gap-1">
                <Columns className="h-3 w-3" /> {t("tableSettings.cols")}
              </TabsTrigger>
              <TabsTrigger value="display" className="text-xs gap-1">
                <LayoutGrid className="h-3 w-3" /> {t("tableSettings.view")}
              </TabsTrigger>
              <TabsTrigger value="export" className="text-xs gap-1">
                <Download className="h-3 w-3" /> {t("tableSettings.export")}
              </TabsTrigger>
            </TabsList>
          </div>

          <div className="p-4 pt-2">
            <TabsContent value="columns" className="space-y-4 outline-none">
              <div className="space-y-3 max-h-[240px] overflow-y-auto pe-2 custom-scrollbar">
                {settings.settings.columns.map((col) => (
                  <div key={col.id} className="flex items-center justify-between group">
                    <Label
                      htmlFor={`col-${col.id}`}
                      className="text-sm cursor-pointer select-none group-hover:text-gray-900"
                    >
                      {col.label}
                    </Label>
                    <Switch
                      id={`col-${col.id}`}
                      checked={col.visible}
                      onCheckedChange={() => settings.toggleColumn(col.id)}
                      className="data-[state=checked]:bg-teal-500"
                    />
                  </div>
                ))}
              </div>
            </TabsContent>

            <TabsContent value="display" className="space-y-5 outline-none">
              <div className="space-y-3">
                <Label className="text-xs font-semibold text-gray-500 uppercase tracking-wider">
                  {t("tableSettings.density")}
                </Label>
                <div className="grid grid-cols-3 gap-2">
                  {(["compact", "comfortable", "spacious"] as const).map((density) => (
                    <Button
                      key={density}
                      variant={settings.settings.density === density ? "default" : "outline"}
                      size="sm"
                      onClick={() => settings.setDensity(density)}
                      className={`h-8 text-xs capitalize ${settings.settings.density === density
                        ? "bg-teal-50 text-teal-700 border-teal-200 hover:bg-teal-100 hover:text-teal-800"
                        : "text-gray-600 border-gray-200 hover:bg-gray-50"
                        }`}
                    >
                      {settings.settings.density === density && <Check className="h-3 w-3 me-1" />}
                      {t(`tableSettings.densities.${density}`)}
                    </Button>
                  ))}
                </div>
              </div>

              <div className="space-y-3">
                <Label className="text-xs font-semibold text-gray-500 uppercase tracking-wider">
                  {t("tableSettings.rowsPerPage")}
                </Label>
                <Select
                  value={settings.settings.itemsPerPage.toString()}
                  onValueChange={(val) => settings.setItemsPerPage(Number(val))}
                >
                  <SelectTrigger className="w-full h-9">
                    <SelectValue placeholder={t("tableSettings.selectRowsPerPage")} />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="10">10 {t("tableSettings.rows")}</SelectItem>
                    <SelectItem value="25">25 {t("tableSettings.rows")}</SelectItem>
                    <SelectItem value="50">50 {t("tableSettings.rows")}</SelectItem>
                    <SelectItem value="100">100 {t("tableSettings.rows")}</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </TabsContent>

            <TabsContent value="export" className="space-y-4 outline-none">
              <p className="text-sm text-gray-600 mb-2">
                {t("tableSettings.downloadFull")}
              </p>
              <div className="space-y-2">
                {onExportExcel && (
                  <Button
                    variant="outline"
                    className="w-full justify-start gap-3 h-10 border-green-200 hover:bg-green-50 hover:text-green-700 text-green-700 bg-green-50/50"
                    onClick={() => {
                      onExportExcel();
                      setIsOpen(false);
                    }}
                    disabled={isExporting}
                  >
                    <FileSpreadsheet className="h-4 w-4" />
                    {t("tableSettings.exportExcel")}
                  </Button>
                )}
                {onExportCsv && (
                  <Button
                    variant="outline"
                    className="w-full justify-start gap-3 h-10 border-blue-200 hover:bg-blue-50 hover:text-blue-700 text-blue-700 bg-blue-50/50"
                    onClick={() => {
                      onExportCsv();
                      setIsOpen(false);
                    }}
                    disabled={isExporting}
                  >
                    <FileDown className="h-4 w-4" />
                    {t("tableSettings.exportCsv")}
                  </Button>
                )}
                {onExportPdf && (
                  <Button
                    variant="outline"
                    className="w-full justify-start gap-3 h-10 border-red-200 hover:bg-red-50 hover:text-red-700 text-red-700 bg-red-50/50"
                    onClick={() => {
                      onExportPdf();
                      setIsOpen(false);
                    }}
                    disabled={isExporting}
                  >
                    <FileText className="h-4 w-4" />
                    {t("tableSettings.exportPdf")}
                  </Button>
                )}
                {!onExportExcel && !onExportCsv && !onExportPdf && (
                  <div className="py-4 text-center text-sm text-gray-500 bg-gray-50 rounded-md border border-gray-100">
                    {t("tableSettings.exportUnavailable")}
                  </div>
                )}
              </div>
            </TabsContent>
          </div>
        </Tabs>
      </PopoverContent>
    </Popover>
  );
}
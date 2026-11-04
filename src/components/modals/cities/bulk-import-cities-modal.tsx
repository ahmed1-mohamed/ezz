"use client";

import { useState, useRef } from "react";
import { useRouter, usePathname } from "next/navigation";
import { useSession } from "next-auth/react";
import { Modal } from "@/components/ui/modal";
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import { Label } from "@/components/ui/label";
import { Download, UploadCloud, X, FileSpreadsheet, Info, Loader2 } from "lucide-react";
import { toast } from "sonner";
import { useLanguage } from "@/contexts/LanguageContext";
import { CitiesTemplate } from "@/lib/handle-export";
import { DASHBOARD_API_BASE_URL } from "@/config/api";
import { FieldError } from "@/components/ui/form-message";
import { getApiErrorMessage } from "@/lib/api-errors";
import { scrollToFirstInvalidField } from "@/lib/form-utils";
import { API_ERROR_TOAST_ID } from "@/config/toast-config";

interface BulkImportCitiesModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export function BulkImportCitiesModal({
  isOpen,
  onClose,
}: BulkImportCitiesModalProps) {
  const router = useRouter();
  const pathname = usePathname();
  const routePrefix = pathname?.startsWith("/developer") ? "/developer" : "/admin";
  const { data: session } = useSession();
  const token = session?.user?.accessToken;

  const { t } = useLanguage();
  const [replaceExisting, setReplaceExisting] = useState(false);
  const [removeNonExisting, setRemoveNonExisting] = useState(false);
  const [selectedFile, setSelectedFile] = useState<File | null>(null);
  const [isUploading, setIsUploading] = useState(false);
  const [isDragging, setIsDragging] = useState(false);
  const [fileError, setFileError] = useState<string | undefined>();
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleDownloadTemplate = () => {
    try {
      CitiesTemplate();
      toast.success(t("cities.bulkImport.templateSuccess"));
    } catch (error) {
      toast.error(t("cities.bulkImport.templateFailed"));
    }
  };

  const handleDragOver = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    e.stopPropagation();
    setIsDragging(true);
  };

  const handleDragLeave = () => {
    setIsDragging(false);
  };

  const handleDrop = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    e.stopPropagation();
    setIsDragging(false);

    if (e.dataTransfer.files && e.dataTransfer.files.length > 0) {
      const file = e.dataTransfer.files[0];
      validateAndSetFile(file);
    }
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files.length > 0) {
      validateAndSetFile(e.target.files[0]);
    }
  };

  const validateAndSetFile = (file: File) => {
    const validExtensions = [".csv", ".xlsx", ".xls"];
    const fileExtension = file.name.substring(file.name.lastIndexOf(".")).toLowerCase();
    if (!validExtensions.includes(fileExtension)) {
      setFileError(t("cities.bulkImport.invalidFile"));
      toast.error(t("cities.bulkImport.invalidFile"));
      return;
    }
    if (file.size === 0) {
      setFileError(t("cities.bulkImport.emptyFile"));
      return;
    }
    setFileError(undefined);
    setSelectedFile(file);
  };

  const handleUpload = async () => {
    if (!selectedFile) {
      setFileError(t("cities.bulkImport.selectFile"));
      toast.error(t("cities.bulkImport.selectFile"));
      scrollToFirstInvalidField();
      return;
    }

    setIsUploading(true);

    const formData = new FormData();
    formData.append("file", selectedFile);
    formData.append("replace", replaceExisting ? "true" : "false");
    formData.append("remove", removeNonExisting ? "true" : "false");

    try {
      const apiUrl = DASHBOARD_API_BASE_URL;
      const response = await fetch(`${apiUrl}/import/cities`, {
        method: "POST",
        body: formData,
        headers: { Authorization: `Bearer ${token}` },
        cache: "no-store",
      });

      // A non-JSON body (e.g. a gateway error page) is treated like an empty error response.
      const result = await response.json().catch(() => ({}));

      localStorage.setItem("projectName", JSON.stringify({ projectName: t("cities.title") }));
      localStorage.setItem("report", JSON.stringify({
        success: result.success,
        message: result.message,
        data: result.data,
      }));

      if (response.ok) {
        toast.success(t("cities.bulkImport.success"));
        setSelectedFile(null);
        onClose();
        router.push(`${routePrefix}/reports`);
      } else {
        toast.error(
          getApiErrorMessage({ response: { status: response.status, data: result } }, t, t("cities.bulkImport.failed")),
          { id: API_ERROR_TOAST_ID },
        );
        router.push(`${routePrefix}/reports`);
      }
    } catch (error) {
      console.error("Error importing cities:", error);
      toast.error(t("validation.api.network"), { id: API_ERROR_TOAST_ID });
    } finally {
      setIsUploading(false);
    }
  };

  const resetState = () => {
    setSelectedFile(null);
    setReplaceExisting(false);
    setRemoveNonExisting(false);
    setIsUploading(false);
    setFileError(undefined);
  };

  const handleClose = () => {
    if (isUploading) return;
    resetState();
    onClose();
  };

  return (
    <Modal
      isOpen={isOpen}
      onClose={handleClose}
      title={t("cities.bulkImport.title")}
      size="lg"
      showCloseButton={true}
      footer={
        <div className="flex gap-3 justify-end w-full">
          <Button variant="outline" onClick={handleClose} disabled={isUploading}>
            {t("common.close")}
          </Button>
          <Button
            className="bg-teal-600 hover:bg-teal-700 text-white"
            onClick={handleUpload}
            disabled={!selectedFile || isUploading}
          >
            {isUploading && <Loader2 className="me-2 h-4 w-4 animate-spin" />}
            {isUploading ? t("cities.bulkImport.uploading") : t("experts.bulkImport.uploadBtn")}
          </Button>
        </div>
      }
    >
      <div className="space-y-6 max-h-[70vh] overflow-y-auto">
        <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
          <p className="text-sm text-blue-800">
            {t("cities.bulkImport.desc")}
          </p>
        </div>

        <div className="bg-gray-50 rounded-lg p-4 border border-gray-200">
          <div className="flex items-start gap-3">
            <FileSpreadsheet className="h-5 w-5 text-gray-600 mt-0.5 shrink-0" />
            <div className="flex-1">
              <h3 className="font-semibold text-gray-900 text-sm mb-1">{t("cities.bulkImport.downloadTemplate")}</h3>
              <p className="text-xs text-gray-600 mb-3">
                {t("cities.bulkImport.downloadTemplateDesc")}
              </p>
              <Button
                variant="outline"
                size="sm"
                onClick={handleDownloadTemplate}
                className="gap-2 bg-white"
              >
                <Download className="h-4 w-4" />
                {t("cities.bulkImport.emptyTemplate")}
              </Button>
            </div>
          </div>
        </div>

        <div className="bg-gray-50 rounded-lg p-4 border border-gray-200">
          <h3 className="font-semibold text-gray-900 text-sm mb-3">{t("experts.bulkImport.options")}</h3>
          <div className="space-y-3">
            <div className="flex items-center gap-3">
              <Checkbox
                id="replace-cities"
                checked={replaceExisting}
                onCheckedChange={(checked) => setReplaceExisting(checked as boolean)}
              />
              <Label htmlFor="replace-cities" className="text-sm text-gray-700 cursor-pointer">
                {t("experts.bulkImport.replaceOption")}
              </Label>
            </div>
            <div className="flex items-center gap-3">
              <Checkbox
                id="remove-cities"
                checked={removeNonExisting}
                onCheckedChange={(checked) => setRemoveNonExisting(checked as boolean)}
              />
              <Label htmlFor="remove-cities" className="text-sm text-gray-700 cursor-pointer">
                {t("experts.bulkImport.removeOption")}
              </Label>
            </div>
          </div>
        </div>

        <div>
          <div className="flex items-center gap-1 mb-2">
            <Label>{t("experts.bulkImport.uploadFile")} <span className="text-red-500">*</span></Label>
            <Info className="h-3 w-3 text-gray-400" />
          </div>

          <div
            onDragOver={handleDragOver}
            onDragLeave={handleDragLeave}
            onDrop={handleDrop}
            onClick={() => fileInputRef.current?.click()}
            onKeyDown={(e) => {
              if (e.key === "Enter" || e.key === " ") {
                e.preventDefault();
                fileInputRef.current?.click();
              }
            }}
            role="button"
            tabIndex={0}
            className={`border-2 border-dashed rounded-lg p-8 text-center cursor-pointer transition-colors ${isDragging
                ? "border-teal-500 bg-teal-50"
                : fileError
                  ? "border-red-500 bg-red-50"
                  : selectedFile
                  ? "border-green-500 bg-green-50"
                  : "border-gray-300 bg-gray-50"
              }`}
            aria-invalid={!!fileError || undefined}
          >
            <input
              type="file"
              className="hidden"
              ref={fileInputRef}
              onChange={handleFileChange}
              accept=".csv, application/vnd.openxmlformats-officedocument.spreadsheetml.sheet, application/vnd.ms-excel"
            />
            <div className="flex flex-col items-center gap-3">
              <div className={`w-12 h-12 rounded-full flex items-center justify-center ${selectedFile ? "bg-green-100" : "bg-gray-200"}`}>
                <UploadCloud className={`h-6 w-6 ${selectedFile ? "text-green-600" : "text-gray-600"}`} />
              </div>
              <div>
                {selectedFile ? (
                  <div className="space-y-1">
                    <p className="text-sm font-medium text-gray-900">{selectedFile.name}</p>
                    <p className="text-xs text-gray-500">{(selectedFile.size / 1024).toFixed(2)} KB</p>
                  </div>
                ) : (
                  <>
                    <p className="text-sm text-gray-600 mb-1">{t("experts.bulkImport.dragDrop")}</p>
                    <p className="text-xs text-gray-500">{t("experts.bulkImport.supportedFormats")}</p>
                  </>
                )}
              </div>
            </div>
          </div>

          <FieldError message={fileError} />

          {selectedFile && (
            <div className="flex items-center justify-between mt-3 p-3 bg-gray-50 rounded-lg">
              <div className="flex items-center gap-2">
                <FileSpreadsheet className="h-5 w-5 text-green-600" />
                <span className="text-sm text-gray-700">{selectedFile.name}</span>
              </div>
              <Button
                variant="ghost"
                size="sm"
                disabled={isUploading}
                onClick={(e) => {
                  e.stopPropagation();
                  setSelectedFile(null);
                }}
                className="text-red-600 hover:text-red-700 hover:bg-red-50"
              >
                <X className="w-4 h-4 me-1" />
                {t("cities.bulkImport.remove")}
              </Button>
            </div>
          )}
        </div>
      </div>
    </Modal>
  );
}
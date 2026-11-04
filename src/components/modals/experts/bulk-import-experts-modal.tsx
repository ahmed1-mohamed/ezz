"use client";

import { useState, useEffect } from "react";
import { useRouter, usePathname } from "next/navigation";
import { useSession } from "next-auth/react";
import { Modal } from "@/components/ui/modal";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { Checkbox } from "@/components/ui/checkbox";
import { Upload, Info, Download, FileSpreadsheet, Loader2 } from "lucide-react";
import { toast } from "sonner";
import {
  ExpertsTemplate,
  ExpertsFilledTemplate,
} from "@/lib/handle-export";
import { useLanguage } from "@/contexts/LanguageContext";
import { DASHBOARD_API_BASE_URL } from "@/config/api";
import { API_ERROR_TOAST_ID } from "@/config/toast-config";
import { getApiErrorMessage } from "@/lib/api-errors";
import { scrollToFirstInvalidField } from "@/lib/form-utils";
import { FieldError } from "@/components/ui/form-message";

const IMPORT_MAX_SIZE = 30 * 1024 * 1024;

interface BulkImportExpertsModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export function BulkImportExpertsModal({
  isOpen,
  onClose,
}: BulkImportExpertsModalProps) {
  const router = useRouter();
  const pathname = usePathname();
  const routePrefix = pathname?.startsWith("/developer") ? "/developer" : "/admin";
  const { data: session } = useSession();
  const token = session?.user?.accessToken;
  const { t } = useLanguage();

  const [selectedFile, setSelectedFile] = useState<File | null>(null);
  const [isUploaded, setIsUploaded] = useState(false);
  const [isUploading, setIsUploading] = useState(false);
  const [isDownloading, setIsDownloading] = useState(false);
  const [isChecked, setIsChecked] = useState(false);
  const [isChecked2, setIsChecked2] = useState(false);
  const [isDragging, setIsDragging] = useState(false);
  const [fileError, setFileError] = useState<string>();

  useEffect(() => {
    if (isOpen) {
      setSelectedFile(null);
      setFileError(undefined);
      setIsUploaded(false);
      setIsUploading(false);
      setIsChecked(false);
      setIsChecked2(false);
    }
  }, [isOpen]);

  /** Returns a translated error for an unsupported or oversized file. */
  const getFileError = (file: File): string | undefined => {
    const validExtensions = [".xlsx", ".xls", ".csv"];
    if (!validExtensions.some((ext) => file.name.toLowerCase().endsWith(ext))) return t("validation.file_type");
    if (file.size > IMPORT_MAX_SIZE) return t("validation.file_size");
    return undefined;
  };

  const pickFile = (file: File) => {
    const error = getFileError(file);
    setFileError(error);
    if (error) return;
    setSelectedFile(file);
    setIsUploaded(false);
  };

  const handleFileSelect = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    // Allow picking the same file again.
    event.target.value = "";
    if (file) pickFile(file);
  };

  const handleDragOver = (event: React.DragEvent) => {
    event.preventDefault();
    setIsDragging(true);
  };

  const handleDragLeave = () => setIsDragging(false);

  const handleDrop = (event: React.DragEvent) => {
    event.preventDefault();
    setIsDragging(false);
    if (isUploading) return;
    const file = event.dataTransfer.files?.[0];
    if (file) pickFile(file);
  };

  const prepareFormData = () => {
    if (!selectedFile) return null;
    const formData = new FormData();
    formData.append("file", selectedFile);
    formData.append("replace", isChecked ? "true" : "false");
    formData.append("remove", isChecked2 ? "true" : "false");
    return formData;
  };

  const handleUpload = async () => {
    if (!selectedFile) {
      setFileError(t("validation.required"));
      scrollToFirstInvalidField();
      return;
    }

    const formData = prepareFormData();
    if (!formData) return;

    setIsUploading(true);
    try {
      const apiUrl = DASHBOARD_API_BASE_URL;
      const response = await fetch(`${apiUrl}/import/experts`, {
        method: "POST",
        body: formData,
        headers: { Authorization: `Bearer ${token}` },
        cache: "no-store",
      });

      // A non-JSON body (e.g. an HTML error page) is treated as an empty result.
      const result = await response.json().catch(() => ({}));

      localStorage.setItem("projectName", JSON.stringify({ projectName: "Experts" }));
      localStorage.setItem("report", JSON.stringify({
        success: result.success,
        message: result.message,
        data: result.data,
      }));

      if (response.ok) {
        toast.success(t("experts.messages.importSuccess"));
        setIsUploaded(true);
      } else {
        const message = getApiErrorMessage(
          { response: { status: response.status, data: result } },
          t,
          t("experts.messages.importFailed"),
        );
        toast.error(message, { id: API_ERROR_TOAST_ID });
        setIsUploaded(false);
      }

      router.push(`${routePrefix}/reports`);
    } catch {
      // fetch only rejects when the request couldn't be sent.
      toast.error(t("validation.api.network"), { id: API_ERROR_TOAST_ID });
      setIsUploaded(false);
    } finally {
      setIsUploading(false);
    }
  };

  const downloadTemplate = () => {
    setIsDownloading(true);
    ExpertsTemplate();
    toast.success(t("experts.messages.downloadSuccess"));
    setIsDownloading(false);
  };

  const downloadFilledFile = async () => {
    setIsDownloading(true);
    await ExpertsFilledTemplate(token!);
    setIsDownloading(false);
  };

  const handleClose = () => {
    if (isUploading) return;
    setSelectedFile(null);
    setFileError(undefined);
    setIsUploaded(false);
    setIsUploading(false);
    setIsChecked(false);
    setIsChecked2(false);
    onClose();
  };

  return (
    <Modal
      isOpen={isOpen}
      onClose={handleClose}
      title={t("experts.bulkImport.title")}
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
            disabled={!selectedFile || isUploading || isUploaded}
          >
            {isUploading && <Loader2 className="h-4 w-4 me-2 animate-spin" />}
            {isUploading
              ? t("common.uploading")
              : t("experts.bulkImport.uploadBtn")}
          </Button>
        </div>
      }
    >
      <div className="space-y-6 max-h-[70vh] overflow-y-auto">
        <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
          <p className="text-sm text-blue-800">
            {t("experts.bulkImport.desc")}
          </p>
        </div>

        <div className="bg-gray-50 rounded-lg p-4 border border-gray-200">
          <div className="flex items-start gap-3 mb-4">
            <FileSpreadsheet className="h-5 w-5 text-gray-600 mt-0.5 shrink-0" />
            <div className="flex-1">
              <h3 className="font-semibold text-gray-900 text-sm mb-2">
                {t("experts.bulkImport.downloadTemplate")}
              </h3>
              <p className="text-xs text-gray-600 mb-3">
                {t("experts.bulkImport.downloadTemplateDesc")}
              </p>
              <div className="flex gap-3">
                <Button
                  variant="outline"
                  size="sm"
                  onClick={downloadTemplate}
                  disabled={isDownloading}
                  className="gap-2"
                >
                  <Download className="h-4 w-4" />
                  {t("experts.bulkImport.emptyTemplate")}
                </Button>
                <Button
                  variant="outline"
                  size="sm"
                  onClick={downloadFilledFile}
                  disabled={isDownloading || !token}
                  className="gap-2"
                >
                  <Download className="h-4 w-4" />
                  {t("experts.bulkImport.templateWithData")}
                </Button>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-gray-50 rounded-lg p-4 border border-gray-200">
          <h3 className="font-semibold text-gray-900 text-sm mb-3">
            {t("experts.bulkImport.options")}
          </h3>
          <div className="space-y-3">
            <div className="flex items-center space-x-3">
              <Checkbox
                id="replace"
                checked={isChecked}
                onCheckedChange={(checked) => setIsChecked(checked as boolean)}
              />
              <Label htmlFor="replace" className="text-sm text-gray-700 cursor-pointer">
                {t("experts.bulkImport.replaceOption")}
              </Label>
            </div>
            <div className="flex items-center space-x-3">
              <Checkbox
                id="remove"
                checked={isChecked2}
                onCheckedChange={(checked) => setIsChecked2(checked as boolean)}
              />
              <Label htmlFor="remove" className="text-sm text-gray-700 cursor-pointer">
                {t("experts.bulkImport.removeOption")}
              </Label>
            </div>
          </div>
        </div>

        <div>
          <div className="flex items-center gap-1 mb-2">
            <Label>
              {t("experts.bulkImport.uploadFile")}{" "}
              <span className="text-red-500">*</span>
            </Label>
            <Info className="h-3 w-3 text-gray-400" />
          </div>

          <div
            onDragOver={handleDragOver}
            onDragLeave={handleDragLeave}
            onDrop={handleDrop}
            aria-invalid={!!fileError || undefined}
            className={`border-2 border-dashed rounded-lg p-8 text-center transition-colors cursor-pointer ${isDragging
              ? "border-teal-500 bg-teal-50"
              : fileError
                ? "border-red-500 bg-red-50/40"
                : selectedFile
                ? "border-green-500 bg-green-50"
                : "border-gray-300 bg-gray-50"
              }`}
            onClick={() => document.getElementById("expert-file-upload-input")?.click()}
            onKeyDown={(e) => {
              if (e.key === "Enter" || e.key === " ") {
                e.preventDefault();
                document.getElementById("expert-file-upload-input")?.click();
              }
            }}
            role="button"
            tabIndex={0}
          >
            <label htmlFor="expert-file-upload-input" className="cursor-pointer">
              <span className="sr-only">{t("experts.bulkImport.uploadCsvOrExcel")}</span>
              <input
                id="expert-file-upload-input"
                type="file"
                accept=".csv,.xlsx,.xls"
                onChange={handleFileSelect}
                className="hidden"
              />
            </label>

            <div className="flex flex-col items-center gap-3">
              <div
                className={`w-12 h-12 rounded-full flex items-center justify-center ${selectedFile ? "bg-green-100" : "bg-gray-200"
                  }`}
              >
                <Upload
                  className={`h-6 w-6 ${selectedFile ? "text-green-600" : "text-gray-600"
                    }`}
                />
              </div>
              <div>
                {selectedFile ? (
                  <div className="space-y-1">
                    <p className="text-sm font-medium text-gray-900">
                      {selectedFile.name}
                    </p>
                    <p className="text-xs text-gray-500">
                      {(selectedFile.size / 1024).toFixed(2)} {t("experts.bulkImport.kb")}
                    </p>
                  </div>
                ) : (
                  <>
                    <p className="text-sm text-gray-600 mb-1">
                      {t("experts.bulkImport.dragDrop")}
                    </p>
                    <p className="text-xs text-gray-500">
                      {t("experts.bulkImport.supportedFormats")}
                    </p>
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
                onClick={(e) => {
                  e.stopPropagation();
                  setSelectedFile(null);
                }}
                disabled={isUploading}
                className="text-red-600 hover:text-red-700"
              >
                {t("experts.deleteModal.delete")}
              </Button>
            </div>
          )}
        </div>

        {isUploading && (
          <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
            <div className="flex items-center gap-3">
              <div className="h-5 w-5 border-2 border-blue-600 border-t-transparent rounded-full animate-spin" />
              <div className="flex-1">
                <p className="text-sm font-medium text-blue-800">
                  {t("experts.bulkImport.uploadingTitle")}
                </p>
                <p className="text-xs text-blue-600">
                  {t("experts.bulkImport.uploadingDesc")}
                </p>
              </div>
            </div>
          </div>
        )}

        {isUploaded && (
          <div className="bg-green-50 border border-green-200 rounded-lg p-4">
            <div className="flex items-center gap-3">
              <div className="h-5 w-5 rounded-full bg-green-600 flex items-center justify-center">
                <svg
                  className="h-3 w-3 text-white"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={3}
                    d="M5 13l4 4L19 7"
                  />
                </svg>
              </div>
              <div>
                <p className="text-sm font-medium text-green-800">
                  {t("experts.bulkImport.uploadSuccessTitle")}
                </p>
                <p className="text-xs text-green-600">
                  {t("experts.bulkImport.uploadSuccessDesc")}
                </p>
              </div>
            </div>
          </div>
        )}
      </div>
    </Modal>
  );
}
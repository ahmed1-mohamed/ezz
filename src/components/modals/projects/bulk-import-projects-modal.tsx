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
import { FieldError, FormErrorAlert } from "@/components/ui/form-message";
import { getApiErrorMessage } from "@/lib/api-errors";
import { scrollToFirstInvalidField } from "@/lib/form-utils";
import { API_ERROR_TOAST_ID } from "@/config/toast-config";
import {
  PropertiesTemplate,
  PropertiesFilledTemplate,
  ProjectsTemplate,
} from "@/lib/handle-export";
import { useLanguage } from "@/contexts/LanguageContext";
import { DASHBOARD_API_BASE_URL } from "@/config/api";

const VALID_IMPORT_EXTENSIONS = [".xlsx", ".xls", ".csv"];
/** Same limit the import screens advertise ("Max. File Size: 30MB"). */
const MAX_IMPORT_FILE_MB = 30;

interface BulkImportProjectsModalProps {
  isOpen: boolean;
  projectId?: number;
  projectName?: string;
  onClose: () => void;
  projects?: unknown[];
}

export function BulkImportProjectsModal({
  isOpen,
  projectId,
  projectName,
  onClose,
}: BulkImportProjectsModalProps) {
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
  const [fileError, setFileError] = useState<string | undefined>();
  const [uploadError, setUploadError] = useState<string | undefined>();

  useEffect(() => {
    if (isOpen) {
      setSelectedFile(null);
      setIsUploaded(false);
      setIsUploading(false);
      setIsChecked(false);
      setIsChecked2(false);
      setFileError(undefined);
      setUploadError(undefined);
    }
  }, [isOpen]);

  /** Returns why the file can't be imported, or undefined when it's fine. */
  const getFileError = (file: File): string | undefined => {
    const name = file.name.toLowerCase();
    if (!VALID_IMPORT_EXTENSIONS.some((ext) => name.endsWith(ext))) {
      return t("projects.bulkImport.invalidFile");
    }
    if (file.size > MAX_IMPORT_FILE_MB * 1024 * 1024) {
      return t("projects.bulkImport.fileTooLarge", { max: MAX_IMPORT_FILE_MB });
    }
    if (file.size === 0) {
      return t("projects.bulkImport.fileEmpty");
    }
    return undefined;
  };

  const pickFile = (file: File | undefined) => {
    if (!file) return;
    const error = getFileError(file);
    setFileError(error);
    setUploadError(undefined);
    if (error) return;
    setSelectedFile(file);
    setIsUploaded(false);
  };

  const handleFileSelect = (event: React.ChangeEvent<HTMLInputElement>) => {
    pickFile(event.target.files?.[0]);
    // Lets the same file be picked again after it was removed or rejected.
    event.target.value = "";
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
    pickFile(event.dataTransfer.files?.[0]);
  };

  const prepareFormData = () => {
    if (!selectedFile) return null;
    const formData = new FormData();
    formData.append("file", selectedFile);
    if (projectId != null) formData.append("project_id", String(projectId));
    formData.append("replace", isChecked ? "true" : "false");
    formData.append("remove", isChecked2 ? "true" : "false");
    return formData;
  };

  const handleUpload = async (e?: React.MouseEvent<HTMLButtonElement>) => {
    if (isUploading) return;
    const failValidation = (message: string) => {
      setFileError(message);
      scrollToFirstInvalidField(e?.currentTarget ?? null);
    };
    if (!selectedFile) { failValidation(t("projects.bulkImport.selectFile")); return; }

    const selectedFileError = getFileError(selectedFile);
    if (selectedFileError) { failValidation(selectedFileError); return; }

    const formData = prepareFormData();
    if (!formData) { failValidation(t("projects.bulkImport.selectFile")); return; }

    setUploadError(undefined);
    setIsUploading(true);
    try {
      const apiUrl = DASHBOARD_API_BASE_URL;
      const endpoint = projectId ? `${apiUrl}/import/properties` : `${apiUrl}/import/projects`;
      const response = await fetch(endpoint, {
        method: "POST",
        body: formData,
        headers: { Authorization: `Bearer ${token}` },
        cache: "no-store",
      });

      // A non-JSON body (e.g. an HTML error page) is treated as an empty result.
      const result = await response.json().catch(() => ({}));

      localStorage.setItem("projectName", JSON.stringify({ projectName: projectName || t("projects.title") }));
      localStorage.setItem("report", JSON.stringify({
        success: result.success,
        message: result.message,
        data: result.data,
      }));

      if (response.ok && result?.success !== false) {
        toast.success(t("projects.bulkImport.success"));
        setIsUploaded(true);
      } else {
        // Same shape as an axios error so the backend message is shown only when it's user-readable.
        const status = response.ok ? 400 : response.status;
        toast.error(
          getApiErrorMessage({ response: { status, data: result } }, t, t("projects.bulkImport.failed")),
          { id: API_ERROR_TOAST_ID }
        );
        setIsUploaded(false);
      }

      router.push(`${routePrefix}/reports`);
    } catch (error) {
      // fetch() rejects with a TypeError when the server can't be reached.
      const message = getApiErrorMessage(
        error instanceof TypeError ? { code: "ERR_NETWORK" } : error,
        t,
        t("projects.bulkImport.failed")
      );
      setUploadError(message);
      toast.error(message, { id: API_ERROR_TOAST_ID });
      setIsUploaded(false);
    } finally {
      setIsUploading(false);
    }
  };

  const downloadTemplate = () => {
    setIsDownloading(true);
    if (projectId) {
      PropertiesTemplate();
    } else {
      ProjectsTemplate();
    }
    toast.success(t("projects.bulkImport.templateSuccess"));
    setIsDownloading(false);
  };

  const downloadFilledFile = async () => {
    if (projectId == null || projectId === 0) { toast.error(t("projects.messages.invalidProjectId")); return; }
    setIsDownloading(true);
    try {
      await PropertiesFilledTemplate(projectId, token!);
    } catch (error) {
      console.error("Failed to build the filled template:", error);
      toast.error(t("common.errorOccurred"));
    } finally {
      setIsDownloading(false);
    }
  };

  const handleClose = () => {
    if (isUploading) return;
    setSelectedFile(null);
    setFileError(undefined);
    setUploadError(undefined);
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
      title={
        projectId
          ? (t("projects.bulkImport.titleProperties", { projectName: projectName || "" }))
          : (t("projects.bulkImport.titleProjects"))
      }
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
            {isUploading && <Loader2 className="me-2 h-4 w-4 animate-spin" />}
            {isUploading ? (t("common.uploading")) : (t("experts.bulkImport.uploadBtn"))}
          </Button>
        </div>
      }
    >
      <div className="space-y-6 max-h-[70vh] overflow-y-auto">
        <FormErrorAlert message={uploadError} />

        <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
          <p className="text-sm text-blue-800">
            {projectId
              ? (t("projects.bulkImport.descProperties"))
              : (t("projects.bulkImport.descProjects"))}
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
                {projectId && (
                  <Button
                    variant="outline"
                    size="sm"
                    onClick={downloadFilledFile}
                    disabled={isDownloading}
                    className="gap-2"
                  >
                    <Download className="h-4 w-4" />
                    {t("experts.bulkImport.templateWithData")}
                  </Button>
                )}
              </div>
            </div>
          </div>
        </div>

        <div className="bg-gray-50 rounded-lg p-4 border border-gray-200">
          <h3 className="font-semibold text-gray-900 text-sm mb-3">
            {t("experts.bulkImport.options")}
          </h3>
          <div className="space-y-3">
            <div className="flex items-center gap-3">
              <Checkbox
                id="replace"
                checked={isChecked}
                onCheckedChange={(checked) => setIsChecked(checked as boolean)}
              />
              <Label htmlFor="replace" className="text-sm text-gray-700 cursor-pointer">
                {t("experts.bulkImport.replaceOption")}
              </Label>
            </div>
            <div className="flex items-center gap-3">
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
              {t("experts.bulkImport.uploadFile")} <span className="text-red-500">*</span>
            </Label>
            <Info className="h-3 w-3 text-gray-400" />
          </div>

          <div
            onDragOver={handleDragOver}
            onDragLeave={handleDragLeave}
            onDrop={handleDrop}
            className={`border-2 border-dashed rounded-lg p-8 text-center transition-colors cursor-pointer ${isDragging
              ? "border-teal-500 bg-teal-50"
              : fileError
                ? "border-red-500 bg-red-50"
                : selectedFile
                  ? "border-green-500 bg-green-50"
                  : "border-gray-300 bg-gray-50"
              }`}
            onClick={() => { if (!isUploading) document.getElementById("proj-file-upload")?.click(); }}
            aria-invalid={!!fileError}
            aria-describedby={fileError ? "proj-file-upload-error" : undefined}
          >
            <label htmlFor="proj-file-upload" className="cursor-pointer">
              <span className="sr-only">{t("experts.bulkImport.uploadFile")}</span>
              <input
                id="proj-file-upload"
                type="file"
                accept=".csv,.xlsx,.xls"
                onChange={handleFileSelect}
                disabled={isUploading}
                aria-invalid={!!fileError}
                aria-describedby={fileError ? "proj-file-upload-error" : undefined}
                className="hidden"
              />
            </label>

            <div className="flex flex-col items-center gap-3">
              <div className={`w-12 h-12 rounded-full flex items-center justify-center ${selectedFile ? "bg-green-100" : "bg-gray-200"}`}>
                <Upload className={`h-6 w-6 ${selectedFile ? "text-green-600" : "text-gray-600"}`} />
              </div>
              <div>
                {selectedFile ? (
                  <div className="space-y-1">
                    <p className="text-sm font-medium text-gray-900">{selectedFile.name}</p>
                    <p className="text-xs text-gray-500">{(selectedFile.size / 1024).toFixed(2)} KB</p>
                  </div>
                ) : (
                  <>
                    <p className="text-sm text-gray-600 mb-1">
                      {t("experts.bulkImport.dragDrop")}
                    </p>
                    <p className="text-xs text-gray-500">
                      {t("experts.bulkImport.supportedFormats")}
                    </p>
                    <p className="text-xs text-gray-500">
                      {t("experts.bulkImport.maxSize")}
                    </p>
                  </>
                )}
              </div>
            </div>
          </div>

          <FieldError id="proj-file-upload-error" message={fileError} />

          {selectedFile && (
            <div className="flex items-center justify-between mt-3 p-3 bg-gray-50 rounded-lg">
              <div className="flex items-center gap-2">
                <FileSpreadsheet className="h-5 w-5 text-green-600" />
                <span className="text-sm text-gray-700">{selectedFile.name}</span>
              </div>
              <Button
                variant="ghost"
                size="sm"
                onClick={(e) => { e.stopPropagation(); setSelectedFile(null); setFileError(undefined); }}
                disabled={isUploading}
                className="text-red-600 hover:text-red-700"
              >
                {t("common.remove")}
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
                <svg className="h-3 w-3 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
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
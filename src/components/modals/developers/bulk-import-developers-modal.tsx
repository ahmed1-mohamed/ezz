"use client";

import { useState } from "react";
import { Modal } from "@/components/ui/modal";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { Upload, Info, Search, Loader2 } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";
import { toast } from "sonner";
import { FieldError, FormErrorAlert } from "@/components/ui/form-message";
import { parseApiError } from "@/lib/api-errors";
import { scrollToFirstInvalidField } from "@/lib/form-utils";
import { API_ERROR_TOAST_ID } from "@/config/toast-config";

const IMPORT_ALLOWED_EXTENSIONS = [".csv", ".xlsx", ".xls"];
const IMPORT_MAX_SIZE = 30 * 1024 * 1024;

interface BulkImportDevelopersModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSubmit: (file: File) => void | Promise<unknown>;
}

export function BulkImportDevelopersModal({
  isOpen,
  onClose,
  onSubmit,
}: BulkImportDevelopersModalProps) {
  const { t } = useLanguage();
  const [selectedFile, setSelectedFile] = useState<File | null>(null);
  const [isDragging, setIsDragging] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [fileError, setFileError] = useState<string>();
  const [generalError, setGeneralError] = useState<string>();

  const validateFile = (file: File | null): string | undefined => {
    if (!file) return t("validation.required");
    const name = file.name.toLowerCase();
    if (!IMPORT_ALLOWED_EXTENSIONS.some((ext) => name.endsWith(ext))) return t("validation.file_type");
    if (file.size > IMPORT_MAX_SIZE) return t("validation.file_size");
    return undefined;
  };

  const pickFile = (file: File) => {
    setSelectedFile(file);
    setFileError(validateFile(file));
    setGeneralError(undefined);
  };

  const handleFileSelect = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    // Allow picking the same file again.
    event.target.value = "";
    if (file) {
      pickFile(file);
    }
  };

  const handleDragOver = (event: React.DragEvent) => {
    event.preventDefault();
    setIsDragging(true);
  };

  const handleDragLeave = () => {
    setIsDragging(false);
  };

  const handleDrop = (event: React.DragEvent) => {
    event.preventDefault();
    setIsDragging(false);
    if (isSubmitting) return;
    const file = event.dataTransfer.files?.[0];
    if (file) {
      pickFile(file);
    }
  };

  const handleSubmit = async () => {
    const error = validateFile(selectedFile);
    setFileError(error);
    if (error || !selectedFile) {
      scrollToFirstInvalidField();
      return;
    }

    setIsSubmitting(true);
    setGeneralError(undefined);
    try {
      // The parent shows the success toast and closes the modal.
      await onSubmit(selectedFile);
    } catch (err) {
      const { fieldErrors, generalMessage, summary } = parseApiError(err, {
        t,
        fallbackMessage: t("developers.messages.importFailed"),
        fields: ["file"],
      });
      setFileError(fieldErrors.file);
      setGeneralError(generalMessage);
      toast.error(summary, { id: API_ERROR_TOAST_ID });
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleClose = () => {
    if (isSubmitting) return;
    setSelectedFile(null);
    setFileError(undefined);
    setGeneralError(undefined);
    onClose();
  };

  const handleDownloadTemplate = (withData: boolean) => {
  };

  return (
    <Modal
      isOpen={isOpen}
      onClose={handleClose}
      title={t("developers.bulkImport.title")}
      size="md"
      showCloseButton={false}
      footer={
        <div className="flex gap-3 justify-end w-full">
          <Button variant="outline" onClick={handleClose} disabled={isSubmitting}>
            {t("common.close")}
          </Button>
          <Button
            className="bg-teal-600 hover:bg-teal-700 text-white"
            onClick={handleSubmit}
            disabled={!selectedFile || isSubmitting}
          >
            {isSubmitting && <Loader2 className="h-4 w-4 me-2 animate-spin" />}
            {isSubmitting ? t("common.uploading") : t("developers.bulkImport.uploadBtn")}
          </Button>
        </div>
      }
    >
      <div className="space-y-5 max-h-[70vh] overflow-y-auto">
        <FormErrorAlert message={generalError} />
        <p className="text-sm text-gray-600">
          {t("developers.bulkImport.desc")}
        </p>

        <div className="bg-gray-50 rounded-lg p-4 border border-gray-200">
          <div className="flex items-start gap-2 mb-3">
            <Info className="h-5 w-5 text-gray-600 mt-0.5 shrink-0" />
            <div>
              <h3 className="font-semibold text-gray-900 text-sm mb-1">
                {t("developers.bulkImport.downloadTemplate")}
              </h3>
              <p className="text-xs text-gray-600">
                {t("developers.bulkImport.requiredColumns")}
              </p>
            </div>
          </div>
          <div className="flex gap-2">
            <Button
              variant="outline"
              className="bg-gray-800 text-white hover:bg-gray-900 hover:text-white text-sm"
              onClick={() => handleDownloadTemplate(false)}
            >
              {t("developers.bulkImport.emptyTemplate")}
            </Button>
            <Button
              variant="outline"
              className="bg-gray-700 text-white hover:bg-gray-800 hover:text-white text-sm"
              onClick={() => handleDownloadTemplate(true)}
            >
              {t("developers.bulkImport.templateWithData")}
            </Button>
          </div>
        </div>

        <div>
          <div className="flex items-center gap-1 mb-2">
            <Label>
              {t("developers.bulkImport.uploadFile")} <span className="text-red-500">*</span>
            </Label>
            <Info className="h-3 w-3 text-gray-400" />
          </div>

          <div
            onDragOver={handleDragOver}
            onDragLeave={handleDragLeave}
            onDrop={handleDrop}
            aria-invalid={!!fileError || undefined}
            className={`border-2 border-dashed rounded-lg p-8 text-center transition-colors ${isDragging
              ? "border-teal-500 bg-teal-50"
              : fileError
                ? "border-red-500 bg-red-50/40"
                : "border-gray-300 bg-gray-50"
              }`}
          >
            <div className="flex flex-col items-center gap-3">
              <div className="w-12 h-12 rounded-full bg-gray-200 flex items-center justify-center">
                <Upload className="h-6 w-6 text-gray-600" />
              </div>
              <div>
                <p className="text-sm text-gray-600 mb-1">
                  {selectedFile
                    ? selectedFile.name
                    : t("developers.bulkImport.dragDrop")}
                </p>
                <p className="text-xs text-gray-500">{t("developers.bulkImport.maxSize")}</p>
              </div>
              <Button
                className="bg-teal-600 hover:bg-teal-700 text-white gap-2"
                onClick={() => document.getElementById("file-upload")?.click()}
                disabled={isSubmitting}
              >
                <Search className="h-4 w-4" />
                {t("developers.bulkImport.browseFile")}
              </Button>
              <label htmlFor="file-upload" className="cursor-pointer">
                <input
                  id="file-upload"
                  type="file"
                  accept=".csv,.xlsx,.xls"
                  onChange={handleFileSelect}
                  className="hidden"
                />
                <span className="hidden">{t("developers.bulkImport.uploadFile")}</span>
              </label>
            </div>
          </div>

          <FieldError message={fileError} />
          <p className="text-xs text-gray-500 mt-2">
            {t("developers.bulkImport.supportedFormats")}
          </p>
        </div>
      </div>
    </Modal>
  );
}
"use client";

import { useState, useRef } from "react";
import { useRouter, usePathname } from "next/navigation";
import { useSession } from "next-auth/react";
import { Modal } from "@/components/ui/modal";
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import { Download, UploadCloud, X } from "lucide-react";
import { toast } from "sonner";
import { toUserMessage } from "@/lib/api-errors";
import { scrollToFirstInvalidField } from "@/lib/form-utils";
import { FieldError } from "@/components/ui/form-message";
import { API_ERROR_TOAST_ID } from "@/config/toast-config";
import { useLanguage } from "@/contexts/LanguageContext";
import { DASHBOARD_API_BASE_URL } from "@/config/api";

interface BulkImportPropertiesModalProps {
  isOpen: boolean;
  onClose: () => void;
  propertiesData?: any[];
  onSubmit?: (file: File) => void;
}

export function BulkImportPropertiesModal({
  isOpen,
  onClose,
  propertiesData = [],
  onSubmit,
}: BulkImportPropertiesModalProps) {
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
  const [fileError, setFileError] = useState<string>();
  const fileInputRef = useRef<HTMLInputElement>(null);

  const HEADERS = [
    "property_name",
    "property_no",
    "property_type_id",
    "property_subtype_id",
    "project_id",
    "location_id",
    "building_id",
    "plot_size",
    "bua_size",
    "maid_room",
    "status",
    "furnish_status",
    "finishing_status",
    "price",
    "size",
    "bedrooms",
    "bathrooms",
    "parking_spaces",
    "availability_status",
    "construction_status",
    "description",
    "reference_listed",
    "ownership_type",
    "broker_license",
    "agent_license",
    "zone_name",
    "dld_permit_number",
    "dld_barcode",
    "created_at",
    "updated_at",
    "deleted_at",
    "views_count",
    "is_active",
    "plan_type",
    "slug",
  ];

  const handleDownloadEmpty = () => {
    const csv = HEADERS.join(",") + "\n";
    downloadFile(csv, "properties_empty_template.csv");
  };

  const handleDownloadData = () => {
    let csv = HEADERS.join(",") + "\n";

    if (propertiesData && propertiesData.length > 0) {
      const rows = propertiesData.map((p) => {
        return HEADERS.map((header) => {
          let val = p[header];
          if (val === null || val === undefined) return '""';
          if (typeof val === "string") {
            val = val.replace(/"/g, '""');
            return `"${val}"`;
          }
          if (typeof val === "boolean") {
            return val ? 1 : 0;
          }
          return val;
        }).join(",");
      });
      csv += rows.join("\n");
    } else {
      const sample = HEADERS.map((h) => {
        if (h === "property_name") return `"Sample Property"`;
        if (h === "property_no") return `"101"`;
        if (h === "price") return `1000000`;
        return `""`;
      });
      csv += sample.join(",") + "\n";
    }

    downloadFile(csv, "properties_template_with_data.csv");
  };

  const downloadFile = (content: string, filename: string) => {
    const blob = new Blob([content], { type: "text/csv;charset=utf-8;" });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = filename;
    a.click();
    URL.revokeObjectURL(url);
    toast.success(t("properties.messages.bulkImportTemplateSuccess"));
  };

  const handleDragOver = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    e.stopPropagation();
  };

  const handleDrop = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    e.stopPropagation();

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
    const validTypes = [
      "text/csv",
      "application/vnd.ms-excel",
      "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet",
    ];
    if (!validTypes.includes(file.type) && !file.name.endsWith(".csv") && !file.name.endsWith(".xlsx")) {
      toast.error(t("properties.messages.bulkImportInvalidFile"));
      return;
    }
    setFileError(undefined);
    setSelectedFile(file);
  };

  const handleUpload = async () => {
    if (!selectedFile) {
      setFileError(t("properties.messages.bulkImportSelectFile"));
      toast.error(t("properties.messages.bulkImportSelectFile"));
      scrollToFirstInvalidField();
      return;
    }

    setIsUploading(true);

    if (onSubmit) {
      try {
        await onSubmit(selectedFile);
      } catch {
        toast.error(t("properties.messages.bulkImportFailed"), { id: API_ERROR_TOAST_ID });
      } finally {
        setIsUploading(false);
      }
      return;
    }

    const formData = new FormData();
    formData.append("file", selectedFile);
    formData.append("replace", replaceExisting ? "true" : "false");
    formData.append("remove", removeNonExisting ? "true" : "false");

    try {
      const apiUrl = DASHBOARD_API_BASE_URL;
      const response = await fetch(`${apiUrl}/import/properties`, {
        method: "POST",
        body: formData,
        headers: { Authorization: `Bearer ${token}` },
        cache: "no-store",
      });

      const result = await response.json();

      localStorage.setItem("projectName", JSON.stringify({ projectName: t("properties.title") }));
      localStorage.setItem("report", JSON.stringify({
        success: result.success,
        message: result.message,
        data: result.data,
      }));

      if (response.ok) {
        toast.success(t("properties.messages.bulkImportSuccess"));
        setSelectedFile(null);
        onClose();
        router.push(`${routePrefix}/reports`);
      } else {
        const reason = toUserMessage(result?.message);
        toast.error(
          reason ? `${t("properties.messages.bulkImportFailed")}: ${reason}` : t("properties.messages.bulkImportFailed"),
          { id: API_ERROR_TOAST_ID }
        );
        router.push(`${routePrefix}/reports`);
      }
    } catch (error) {
      console.error("Bulk import failed:", error);
      toast.error(t("properties.messages.bulkImportFailed"), { id: API_ERROR_TOAST_ID });
    } finally {
      setIsUploading(false);
    }
  };

  const resetState = () => {
    setSelectedFile(null);
    setFileError(undefined);
    setReplaceExisting(false);
    setRemoveNonExisting(false);
    setIsUploading(false);
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
      title={t("properties.bulkImport.title")}
      size="xl"
      showCloseButton={true}
      scrollable={true}
      footer={
        <div className="flex justify-end gap-3 w-full border-t border-gray-100 pt-4">
          <Button variant="outline" onClick={handleClose} disabled={isUploading} className="w-24">
            {t("common.close")}
          </Button>
          <Button
            onClick={handleUpload}
            disabled={!selectedFile || isUploading}
            className="bg-[#59AFA8] hover:bg-[#4d9a93] text-white w-24"
          >
            {isUploading ? t("common.uploading") : t("experts.bulkImport.uploadBtn")}
          </Button>
        </div>
      }
    >
      <div className="space-y-6">
        <div className="bg-[#f2f7ff] border border-[#d6e5ff] rounded-lg p-4">
          <p className="text-[#3b66c4] text-sm">
            {t("properties.bulkImport.desc")}
          </p>
        </div>

        <div className="border border-gray-200 rounded-xl p-5">
          <div className="flex gap-3 mb-2">
            <div className="mt-1 text-gray-500">
              <svg
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
                <polyline points="14 2 14 8 20 8" />
                <line x1="16" y1="13" x2="8" y2="13" />
                <line x1="16" y1="17" x2="8" y2="17" />
                <polyline points="10 9 9 9 8 9" />
              </svg>
            </div>
            <div>
              <h3 className="font-semibold text-gray-900">
                {t("experts.bulkImport.downloadTemplate")}
              </h3>
              <p className="text-sm text-gray-500 mt-1 mb-4">
                {t("experts.bulkImport.downloadTemplateDesc")}
              </p>
              <div className="flex flex-wrap gap-3">
                <Button
                  variant="outline"
                  className="bg-white"
                  onClick={handleDownloadEmpty}
                >
                  <Download className="w-4 h-4 me-2" />
                  {t("experts.bulkImport.emptyTemplate")}
                </Button>
                <Button
                  variant="outline"
                  className="bg-white"
                  onClick={handleDownloadData}
                >
                  <Download className="w-4 h-4 me-2" />
                  {t("experts.bulkImport.templateWithData")}
                </Button>
              </div>
            </div>
          </div>
        </div>

        <div className="border border-gray-200 rounded-xl p-5 bg-gray-50/50">
          <h3 className="font-semibold text-gray-900 mb-4">
            {t("experts.bulkImport.options")}
          </h3>
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <Checkbox
                id="replace-data"
                checked={replaceExisting}
                onCheckedChange={(checked) => setReplaceExisting(checked as boolean)}
              />
              <label
                htmlFor="replace-data"
                className="text-sm font-medium text-gray-700 leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
              >
                {t("experts.bulkImport.replaceOption")}
              </label>
            </div>
            <div className="flex items-center space-x-2">
              <Checkbox
                id="remove-data"
                checked={removeNonExisting}
                onCheckedChange={(checked) => setRemoveNonExisting(checked as boolean)}
              />
              <label
                htmlFor="remove-data"
                className="text-sm font-medium text-gray-700 leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
              >
                {t("experts.bulkImport.removeOption")}
              </label>
            </div>
          </div>
        </div>

        <div>
          <label className="text-sm font-medium text-gray-900 mb-2 block">
            {t("experts.bulkImport.uploadFile")} <span className="text-red-500">*</span>{" "}
            <span className="text-gray-400 cursor-help" title={t("properties.bulkImport.acceptedFormats")}>
              ⓘ
            </span>
          </label>
          <div
            onDragOver={handleDragOver}
            onDrop={handleDrop}
            onClick={() => fileInputRef.current?.click()}
            onKeyDown={(e) => {
              if (e.target === e.currentTarget && (e.key === "Enter" || e.key === " ")) {
                e.preventDefault();
                fileInputRef.current?.click();
              }
            }}
            role="button"
            tabIndex={0}
            aria-invalid={!!fileError || undefined}
            className={`border-2 border-dashed rounded-xl p-8 text-center cursor-pointer transition-colors ${selectedFile
              ? "border-[#59AFA8] bg-[#f2faf9]"
              : fileError
                ? "border-red-500 bg-red-50/40"
                : "border-gray-300 hover:bg-gray-50 bg-gray-50/30"
              }`}
          >
            <input
              type="file"
              className="hidden"
              ref={fileInputRef}
              onChange={handleFileChange}
              accept=".csv, application/vnd.openxmlformats-officedocument.spreadsheetml.sheet, application/vnd.ms-excel"
            />
            {selectedFile ? (
              <div className="flex flex-col items-center justify-center space-y-2">
                <div className="w-12 h-12 bg-[#59AFA8]/10 rounded-full flex items-center justify-center text-[#59AFA8]">
                  <svg
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
                    <polyline points="14 2 14 8 20 8" />
                    <line x1="16" y1="13" x2="8" y2="13" />
                    <line x1="16" y1="17" x2="8" y2="17" />
                    <polyline points="10 9 9 9 8 9" />
                  </svg>
                </div>
                <div className="font-medium text-gray-900">{selectedFile.name}</div>
                <div className="text-sm text-gray-500">
                  {(selectedFile.size / 1024).toFixed(2)} KB
                </div>
                <Button
                  variant="ghost"
                  size="sm"
                  className="text-red-500 hover:text-red-700 hover:bg-red-50 mt-2"
                  onClick={(e) => {
                    e.stopPropagation();
                    setSelectedFile(null);
                  }}
                >
                  <X className="w-4 h-4 me-1" /> {t("common.removeFile")}
                </Button>
              </div>
            ) : (
              <div className="flex flex-col items-center justify-center space-y-4">
                <p className="text-gray-900 font-medium">
                  {t("experts.bulkImport.dragDrop")}
                </p>
                <div className="w-12 h-12 bg-gray-100 rounded-full flex items-center justify-center text-gray-500 shadow-sm">
                  <UploadCloud className="w-6 h-6" />
                </div>
              </div>
            )}
          </div>
          <FieldError message={fileError} />
        </div>
      </div>
    </Modal>
  );
}
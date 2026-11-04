"use client";

import React, { useState, useRef } from "react";
import { Upload, FileText, X } from "lucide-react";
import { FieldError } from "@/components/ui/form-message";

interface BankTransferDetailsProps {
  receiptFile: File | null;
  onFileSelect: (file: File) => void;
  onFileRemove: () => void;
  t: (key: string) => string;
  /** E.g. "required", set by the checkout when paying without a receipt. */
  error?: string;
}

export function BankTransferDetails({
  receiptFile,
  onFileSelect,
  onFileRemove,
  t,
  error,
}: BankTransferDetailsProps) {
  const fileInputRef = useRef<HTMLInputElement>(null);
  const [isDragActive, setIsDragActive] = useState(false);
  const [fileError, setFileError] = useState<string | null>(null);

  const handleDrag = (e: React.DragEvent) => {
    e.preventDefault();
    e.stopPropagation();
    if (e.type === "dragenter" || e.type === "dragover") {
      setIsDragActive(true);
    } else if (e.type === "dragleave") {
      setIsDragActive(false);
    }
  };

  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setIsDragActive(false);

    if (e.dataTransfer.files && e.dataTransfer.files[0]) {
      const file = e.dataTransfer.files[0];
      if (isValidFile(file)) {
        onFileSelect(file);
      }
    }
  };

  const handleFileInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      const file = e.target.files[0];
      if (isValidFile(file)) {
        onFileSelect(file);
      }
    }
    e.target.value = "";
  };

  const isValidFile = (file: File): boolean => {
    const validTypes = ["image/png", "image/jpeg", "application/pdf"];
    const maxSize = 5 * 1024 * 1024;
    if (!validTypes.includes(file.type)) {
      setFileError(t("marketplace.checkout.validation.receiptType"));
      return false;
    }
    if (file.size > maxSize) {
      setFileError(t("marketplace.checkout.validation.receiptSize"));
      return false;
    }
    setFileError(null);
    return true;
  };

  const triggerFileInput = () => {
    fileInputRef.current?.click();
  };

  return (
    <div className="rounded-2xl border border-gray-100 bg-white p-5 space-y-4 shadow-sm">
      <p className="text-sm font-semibold text-gray-700">
        {t("marketplace.checkout.bankDetails.title")}
      </p>

      <div className="rounded-xl border border-amber-200 bg-amber-50/50 p-4 text-sm text-amber-800 space-y-1.5">
        <p className="font-bold">{t("marketplace.checkout.bankDetails.transferTo")}</p>
        <div className="space-y-0.5 font-medium text-gray-700">
          <p>{t("marketplace.checkout.bankDetails.bank")}</p>
          <p>{t("marketplace.checkout.bankDetails.account")}</p>
          <p className="font-mono text-xs mt-1">{t("marketplace.checkout.bankDetails.iban")}</p>
        </div>
      </div>
      <div className="space-y-2">
        <label className="block text-xs font-semibold text-gray-700">
          {t("marketplace.checkout.bankDetails.uploadReceipt")}
          <span className="text-rose-500"> *</span>
        </label>

        <input
          ref={fileInputRef}
          type="file"
          className="hidden"
          accept="image/png, image/jpeg, application/pdf"
          onChange={handleFileInputChange}
        />

        {!receiptFile ? (
          <div
            onDragEnter={handleDrag}
            onDragOver={handleDrag}
            onDragLeave={handleDrag}
            onDrop={handleDrop}
            onClick={triggerFileInput}
            className={`flex flex-col items-center justify-center rounded-xl border-2 border-dashed p-6 text-center cursor-pointer transition-all duration-200 ${
              isDragActive
                ? "border-emerald-500 bg-emerald-50/20"
                : fileError || error
                  ? "border-red-400 bg-red-50/30"
                  : "border-gray-200 bg-gray-50/50 hover:border-gray-300 hover:bg-gray-50"
            }`}
          >
            <div className="rounded-full bg-white p-2.5 shadow-sm text-gray-400 mb-3 border border-gray-100">
              <Upload className="h-5 w-5 text-gray-500" />
            </div>
            <p className="text-sm font-semibold text-gray-700">
              {t("marketplace.checkout.bankDetails.dragDrop")}
            </p>
            <p className="text-xs text-gray-400 mt-1">
              {t("marketplace.checkout.bankDetails.maxSize")}
            </p>
            <button
              type="button"
              className="mt-3 rounded-lg border border-gray-200 bg-white px-4 py-2 text-xs font-bold text-gray-700 shadow-sm hover:bg-gray-50"
            >
              {t("marketplace.checkout.bankDetails.browse")}
            </button>
          </div>
        ) : (
          <div className="flex items-center justify-between rounded-xl border border-emerald-500/20 bg-emerald-50/20 p-4">
            <div className="flex items-center gap-3">
              <div className="rounded-lg bg-emerald-500/10 p-2 text-emerald-600">
                <FileText className="h-5 w-5" />
              </div>
              <div className="text-start">
                <p className="text-sm font-bold text-gray-800 line-clamp-1">
                  {receiptFile.name}
                </p>
                <p className="text-xs text-gray-500 mt-0.5">
                  {(receiptFile.size / (1024 * 1024)).toFixed(2)} MB
                </p>
              </div>
            </div>
            <button
              type="button"
              onClick={onFileRemove}
              aria-label={t("marketplace.checkout.bankDetails.removeFile")}
              className="rounded-lg p-1.5 text-gray-400 hover:bg-gray-100 hover:text-gray-600 transition-colors"
            >
              <X className="h-4 w-4" />
            </button>
          </div>
        )}
        <FieldError message={fileError ?? (receiptFile ? undefined : error)} />
      </div>
    </div>
  );
}

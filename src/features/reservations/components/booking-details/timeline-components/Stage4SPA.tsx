import { useState } from "react";
import { Button } from "@/components/ui/button";
import { FieldError } from "@/components/ui/form-message";
import { File, Loader2, Upload } from "lucide-react";
import { cn } from "@/lib/utils";
import {
  BOOKING_DOCUMENT_RULE,
  toAcceptAttribute,
  validateUploadFile,
} from "@/features/reservations/utils/booking-validation";

interface Stage4SPAProps {
  spaFile: File | null;
  setSpaFile: (file: File | null) => void;
  handleSpaUpload: () => void;
  uploadSPAMutation: any;
  t: (key: string, values?: Record<string, string | number>) => string;
}

export function Stage4SPA({ spaFile, setSpaFile, handleSpaUpload, uploadSPAMutation, t }: Stage4SPAProps) {
  const [fileError, setFileError] = useState<string | undefined>();

  return (
    <div className="mt-4">
      <input
        type="file"
        id="spaUpload"
        className="hidden"
        accept={toAcceptAttribute(BOOKING_DOCUMENT_RULE)}
        disabled={uploadSPAMutation.isPending}
        onChange={(e) => {
          const file = e.target.files?.[0];
          e.target.value = "";
          if (!file) return;
          const message = validateUploadFile(file, BOOKING_DOCUMENT_RULE, t);
          setFileError(message);
          if (!message) {
            setSpaFile(file);
          }
        }}
      />
      <label
        htmlFor="spaUpload"
        aria-invalid={!!fileError}
        className={cn(
          "flex items-center justify-center gap-2 p-3 border-2 border-dashed rounded-lg cursor-pointer transition-colors",
          fileError
            ? "border-red-300 bg-red-50"
            : "border-gray-300 hover:border-teal-500 hover:bg-teal-50"
        )}
      >
        {spaFile ? (
          <>
            <File className="h-5 w-5 text-teal-600" />
            <span className="text-sm font-medium text-teal-600">{spaFile.name}</span>
          </>
        ) : (
          <>
            <Upload className="h-5 w-5 text-gray-400" />
            <span className="text-sm font-medium text-gray-500">
              {t("reservations.uploadOfferDialog.clickToSelect")}
            </span>
          </>
        )}
      </label>
      <FieldError message={fileError} />
      {spaFile && (
        <Button
          className="w-full mt-2 bg-teal-600 hover:bg-teal-700 text-white"
          onClick={handleSpaUpload}
          disabled={uploadSPAMutation.isPending}
        >
          {uploadSPAMutation.isPending ? (
            <>
              <Loader2 className="h-4 w-4 me-2 animate-spin" />
              {t("reservations.actions.uploading")}
            </>
          ) : (
            <>
              <Upload className="h-4 w-4 me-2" />
              {t("reservations.actions.uploadSPA")}
            </>
          )}
        </Button>
      )}
    </div>
  );
}

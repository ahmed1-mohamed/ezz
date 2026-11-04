import { Button } from "@/components/ui/button";
import { Download, FileText } from "lucide-react";

interface StageDocumentsListProps {
  documents: any[];
  handleDownload: (url: string, filename: string) => void;
  t: (key: string) => string;
}

export function StageDocumentsList({ documents, handleDownload, t }: StageDocumentsListProps) {
  if (!documents || documents.length === 0) return null;

  return (
    <div className="space-y-2">
      {documents.map((doc: any, idx: number) => {
        const isImage = Boolean(
          doc.url &&
            (doc.url.match(/\.(jpeg|jpg|png|webp|gif|svg)($|\?)/i) ||
              doc.url.includes("image") ||
              doc.url.startsWith("blob:") ||
              doc.name?.match(/\.(jpeg|jpg|png|webp|gif)$/i))
        );
        return (
          <div
            key={idx}
            className="flex items-center justify-between p-3 bg-gray-50 rounded-lg border border-gray-200"
          >
            <div className="flex items-center gap-3 min-w-0">
              {isImage ? (
                <div
                  className="w-12 h-12 rounded-lg overflow-hidden border border-teal-200 shrink-0 bg-white flex items-center justify-center cursor-pointer hover:opacity-90 transition-opacity"
                  onClick={() => window.open(doc.url, "_blank")}
                  title={t("reservations.documents.viewImageTitle")}
                >
                  <img src={doc.url} alt={doc.name} className="w-full h-full object-cover" />
                </div>
              ) : (
                <div className="w-10 h-10 bg-teal-100 rounded-lg flex items-center justify-center shrink-0">
                  <FileText className="h-5 w-5 text-teal-600" />
                </div>
              )}
              <div className="min-w-0">
                <span className="text-sm font-medium text-gray-900 block truncate">{doc.name}</span>
                {isImage && (
                  <button
                    type="button"
                    onClick={() => window.open(doc.url, "_blank")}
                    className="text-[11px] text-teal-600 hover:text-teal-700 hover:underline font-medium cursor-pointer"
                  >
                    {t("reservations.documents.viewImage")}
                  </button>
                )}
              </div>
            </div>
            <Button
              variant="ghost"
              size="sm"
              className="gap-2 text-teal-700 hover:text-teal-800 hover:bg-teal-50 shrink-0 cursor-pointer"
              onClick={() => handleDownload(doc.url, doc.name)}
            >
              <Download className="h-4 w-4" />
              {t("reservations.actions.download")}
            </Button>
          </div>
        );
      })}
    </div>
  );
}

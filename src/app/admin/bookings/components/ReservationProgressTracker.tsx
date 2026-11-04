import { FileText, ExternalLink, CheckCircle2 } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";

export interface Stage {
  id: string | number;
  name: string;
  step: string;
  status: string;
  subtitle?: string;
  documents?: Array<{ name: string; url: string }>;
  comments?: Array<{ author: string; text: string }>;
}

interface ReservationProgressTrackerProps {
  stages: Stage[];
  getStatusIcon: (status: string) => React.ReactNode;
  getStatusBadge: (status: string) => React.ReactNode;
}

export function ReservationProgressTracker({
  stages,
  getStatusIcon,
  getStatusBadge,
}: ReservationProgressTrackerProps) {
  const { t } = useLanguage();

  return (
    <div className="rounded-xl border border-gray-200 bg-white p-5 shadow-sm space-y-4">
      <h2 className="text-sm font-semibold text-gray-700">
        {t("reservations.details.progress")}
      </h2>
      <div className="space-y-3">
        {stages.map((stage, index) => (
          <div key={stage.id} className="flex items-start gap-4">
            <div className="flex flex-col items-center">
              <div
                className={`w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 ${stage.status === "Complete"
                    ? "bg-green-100"
                    : stage.status === "Rejected"
                      ? "bg-red-100"
                      : stage.status === "Pending"
                        ? "bg-orange-100"
                        : "bg-gray-100"
                  }`}
              >
                {getStatusIcon(stage.status)}
              </div>
              {index < stages.length - 1 && (
                <div
                  className={`w-px h-8 mt-1 ${stage.status === "Complete" ? "bg-green-300" : "bg-gray-200"
                    }`}
                />
              )}
            </div>

            <div className="flex-1 pb-2">
              <div className="flex items-center gap-2 flex-wrap">
                <span className="font-medium text-gray-900 text-sm">
                  {stage.name}
                </span>
                <span className="text-xs text-gray-400">{stage.step}</span>
                {getStatusBadge(stage.status)}
              </div>

              {stage.subtitle && (
                <p className="text-xs text-gray-500 mt-0.5">{stage.subtitle}</p>
              )}

              {Number(stage.id) === 1 && stage.status === "Complete" && (
                <div className="mt-2 flex items-center gap-1.5 text-xs text-emerald-700 bg-emerald-50 px-2.5 py-1 rounded-md border border-emerald-200 w-fit">
                  <CheckCircle2 className="h-3.5 w-3.5 text-emerald-600 shrink-0" />
                  <span>{t("reservations.stages.stage1Closed")}</span>
                </div>
              )}

              {stage.documents && stage.documents.length > 0 && (
                <div className="mt-2 flex flex-wrap gap-2">
                  {stage.documents.map((doc) => (
                    <a
                      key={doc.url}
                      href={doc.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 text-xs text-blue-600 hover:text-blue-800 bg-blue-50 hover:bg-blue-100 px-2.5 py-1 rounded-md border border-blue-200 transition-colors"
                    >
                      <FileText className="h-3.5 w-3.5" />
                      {doc.name}
                      <ExternalLink className="h-3 w-3" />
                    </a>
                  ))}
                </div>
              )}

              {stage.comments && stage.comments.length > 0 && (
                <div className="mt-2 space-y-1">
                  {stage.comments.map((comment, i) => (
                    <div
                      key={i}
                      className="text-xs text-gray-600 bg-gray-50 rounded px-2.5 py-1.5 border border-gray-100"
                    >
                      <span className="font-medium">{comment.author}: </span>
                      {comment.text}
                    </div>
                  ))}
                </div>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
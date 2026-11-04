"use client";

import { Edit2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Switch } from "@/components/ui/switch";

interface TriggeredTemplate {
  id: string;
  titleAr: string;
  titleEn: string;
  event: string;
  subject: string;
  body: string;
  actionLink: string;
  active: boolean;
  iconType?: "home" | "heart" | "flame" | "party" | "chart" | "none";
}

interface EngagementCardProps {
  template: TriggeredTemplate;
  onToggleActive: (id: string, currentStatus: boolean) => void;
  onStartEdit: (id: string) => void;
  language: string;
  t: (key: string) => string;
}

export default function EngagementCard({
  template,
  onToggleActive,
  onStartEdit,
  language,
  t
}: EngagementCardProps) {
  const isRTL = language === "ar";

  const renderSubjectIcon = (type?: string) => {
    if (type === "home") return "🏠 ";
    if (type === "heart") return "❤️ ";
    if (type === "flame") return "🔥 ";
    if (type === "party") return "🎉 ";
    if (type === "chart") return "📈 ";
    return "";
  };

  return (
    <Card
      className={`border-gray-200 dark:border-neutral-800 shadow-sm bg-white dark:bg-neutral-900 rounded-xl overflow-hidden transition-all duration-200 ${!template.active && "opacity-75"
        }`}
    >
      <CardContent className="p-6 space-y-4">
        <div className="flex items-center justify-between">
          <Switch
            checked={template.active}
            onCheckedChange={() => onToggleActive(template.id, template.active)}
            className="data-[state=checked]:bg-teal-600 dark:data-[state=checked]:bg-teal-500"
          />

          <h3 className="font-bold text-gray-900 dark:text-gray-100 text-base">
            {isRTL ? template.titleAr : template.titleEn}
          </h3>
        </div>

        <div className="flex flex-col items-end gap-1.5">
          <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-semibold bg-sky-50 text-sky-700 border border-sky-100 dark:bg-sky-950/20 dark:text-sky-400 dark:border-sky-900">
            {template.event}
          </span>

          <div className="text-xs text-gray-400 dark:text-gray-500 font-semibold flex items-center gap-1">
            <span>{renderSubjectIcon(template.iconType)}</span>
            <span>{template.subject}</span>
          </div>
        </div>

        <div className="p-4 bg-gray-50 dark:bg-neutral-950 rounded-xl border border-gray-100 dark:border-neutral-800 text-start">
          <p className="text-xs text-gray-500 dark:text-gray-400 font-medium leading-relaxed font-mono">
            {template.body}
          </p>
        </div>

        <div className="flex items-center justify-between pt-2 border-t border-gray-50 dark:border-neutral-800/50">
          <Button
            type="button"
            onClick={() => onStartEdit(template.id)}
            variant="outline"
            size="sm"
            className="gap-1.5 text-xs font-semibold border-gray-200 dark:border-neutral-800 text-gray-600 dark:text-gray-300 bg-white dark:bg-neutral-900 hover:bg-gray-50"
          >
            <Edit2 className="h-3 w-3" />
            {t("marketingAppEngagement.edit")}
          </Button>

          {template.actionLink && (
            <span className="text-xs font-bold text-amber-600 dark:text-amber-500 flex items-center gap-1 hover:underline cursor-default">
              {isRTL ? `← ${template.actionLink}` : `→ ${template.actionLink}`}
            </span>
          )}
        </div>
      </CardContent>
    </Card>
  );
}
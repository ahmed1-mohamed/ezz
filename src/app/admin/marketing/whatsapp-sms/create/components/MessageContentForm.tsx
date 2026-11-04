import React from "react";
import { FileText } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { useLanguage } from "@/contexts/LanguageContext";

interface MessageContentFormProps {
  message: string;
  setMessage: (val: string) => void;
  onOpenTemplates: () => void;
  errorMsg?: string;
}

export const MessageContentForm = React.memo(({
  message,
  setMessage,
  onOpenTemplates,
  errorMsg,
}: MessageContentFormProps) => {
  const { t, language } = useLanguage();
  const isRTL = language === "ar";

  return (
    <Card className="border-gray-200 dark:border-neutral-800 shadow-sm bg-white dark:bg-neutral-900 rounded-xl overflow-hidden">
      <CardContent className="p-6 space-y-3">
        <div className="flex items-center justify-between">
          <h2 className="text-sm font-bold text-gray-900 dark:text-gray-100 text-start">
            {isRTL ? "الرسالة" : "Message"}
          </h2>
          <Button
            type="button"
            variant="outline"
            onClick={onOpenTemplates}
            className="text-xs font-semibold gap-1.5 border-gray-200 dark:border-neutral-800 hover:bg-gray-50 text-teal-600 dark:text-teal-400"
          >
            <FileText className="h-3.5 w-3.5" />
            {t("marketingWhatsappSms.create.chooseFromTemplates")}
          </Button>
        </div>
        <div className="space-y-1.5 text-start">
          <label className="text-xs font-semibold text-gray-600 dark:text-gray-400">
            {isRTL ? "المحتوى" : "Content"} <span className="text-red-500">*</span>
          </label>
          <textarea
            required
            rows={5}
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            placeholder={isRTL ? "اكتب نص رسالتك القصيرة هنا..." : "Write your SMS text here..."}
            aria-invalid={!!errorMsg}
            className={`w-full p-3 border bg-white dark:bg-neutral-950 rounded-lg text-sm text-gray-800 dark:text-gray-200 focus:outline-none focus:ring-2 focus:ring-teal-500 resize-y ${errorMsg
                ? "border-red-500 focus:ring-red-500 focus:border-red-500"
                : "border-gray-200 dark:border-neutral-800"
              }`}
          />
          <div className="flex items-center justify-between">
            <p className="text-xs text-teal-600 dark:text-teal-400 font-semibold">
              {isRTL ? "الأحرف:" : "Characters:"} {message.length}
            </p>
            {errorMsg && <p role="alert" data-field-error="" className="text-xs text-red-500">{errorMsg}</p>}
          </div>
        </div>
      </CardContent>
    </Card>
  );
});

MessageContentForm.displayName = "MessageContentForm";
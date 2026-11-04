import { useState } from "react";
import { Image as ImageIcon } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { useLanguage } from "@/contexts/LanguageContext";
import { toast } from "sonner";
import { FieldError } from "@/components/ui/form-message";

interface MessageDetailsFormProps {
  title: string;
  setTitle: (val: string) => void;
  description: string;
  setDescription: (val: string) => void;
  selectedCountry: string;
  setSelectedCountry: (val: string) => void;
  countries: Array<{ id: string; name: string }>;
  imageFile: File | null;
  setImageFile: (file: File | null) => void;
  titleError?: string;
  descError?: string;
  countryError?: string;
}

export function MessageDetailsForm({
  title,
  setTitle,
  description,
  setDescription,
  selectedCountry,
  setSelectedCountry,
  countries,
  imageFile,
  setImageFile,
  titleError,
  descError,
  countryError,
}: MessageDetailsFormProps) {
  const { t } = useLanguage();
  const [imageError, setImageError] = useState<string | undefined>();

  const handleDragOver = (e: React.DragEvent) => e.preventDefault();

  const selectImage = (file: File) => {
    if (!file.type.startsWith("image/")) {
      const message = t("marketingNotifications.create.validImageError");
      setImageError(message);
      toast.error(message, { id: "campaign-image-toast" });
      return;
    }
    setImageError(undefined);
    setImageFile(file);
  };

  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault();
    const file = e.dataTransfer.files?.[0];
    if (file) selectImage(file);
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    e.target.value = "";
    if (file) selectImage(file);
  };

  return (
    <Card className="border-gray-200 dark:border-neutral-800 shadow-sm bg-white dark:bg-neutral-900 rounded-xl overflow-hidden">
      <CardContent className="p-6 space-y-5">
        <h2 className="text-sm font-bold text-gray-900 dark:text-gray-100 text-start">
          {t("marketingNotifications.create.messageContent")}
        </h2>

        <div className="flex flex-col gap-1.5 text-start">
          <label className="text-sm font-semibold text-gray-700 dark:text-gray-300">
            {t("marketingNotifications.create.notificationTitleLabel")}
          </label>
          <Input
            type="text"
            required
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            placeholder={t("marketingNotifications.create.notificationTitlePlaceholder")}
            error={!!titleError}
            aria-invalid={!!titleError}
            className={`bg-white dark:bg-neutral-950 focus:border-teal-500 focus:ring-teal-500 ${titleError ? "border-red-500 focus:ring-red-500 focus:border-red-500" : "border-gray-200 dark:border-neutral-800"}`}
          />
          <FieldError message={titleError} />
        </div>

        <div className="flex flex-col gap-1.5 text-start">
          <label className="text-sm font-semibold text-gray-700 dark:text-gray-300">
            {t("marketingNotifications.create.notificationDescLabel")}
          </label>
          <textarea
            required
            rows={4}
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            placeholder={t("marketingNotifications.create.notificationDescPlaceholder")}
            aria-invalid={!!descError}
            className={`w-full p-3 border bg-white dark:bg-neutral-950 rounded-lg text-sm text-gray-800 dark:text-gray-200 focus:outline-none focus:ring-2 focus:ring-teal-500 ${descError ? "border-red-500 focus:ring-red-500 focus:border-red-500" : "border-gray-200 dark:border-neutral-800"}`}
          />
          <FieldError message={descError} />
        </div>

        <div className="flex flex-col gap-1.5 text-start">
          <label className="text-sm font-semibold text-gray-700 dark:text-gray-300">
            {t("marketingNotifications.create.countryOptional")}
          </label>
          <select
            value={selectedCountry}
            onChange={(e) => setSelectedCountry(e.target.value)}
            aria-invalid={!!countryError}
            className={`w-full p-2.5 border bg-white dark:bg-neutral-950 rounded-lg text-sm text-gray-800 dark:text-gray-200 focus:outline-none focus:ring-2 focus:ring-teal-500 ${countryError ? "border-red-500 focus:ring-red-500 focus:border-red-500" : "border-gray-200 dark:border-neutral-800"}`}
          >
            <option value="">{t("marketingNotifications.create.selectCountry")}</option>
            {countries.map((c) => (
              <option key={c.id} value={c.id}>{c.name}</option>
            ))}
          </select>
          <FieldError message={countryError} />
        </div>

        <div className="flex flex-col gap-1.5 text-start">
          <label className="text-sm font-semibold text-gray-700 dark:text-gray-300">
            {t("marketingNotifications.create.imageOptional")}
          </label>
          <div
            onDragOver={handleDragOver}
            onDrop={handleDrop}
            className={`border-2 border-dashed ${imageError ? "border-red-500" : "border-gray-200 dark:border-neutral-800"} rounded-xl p-8 text-center bg-gray-50/50 dark:bg-neutral-950/20 hover:bg-gray-50 dark:hover:bg-neutral-950/40 transition-colors cursor-pointer relative`}
          >
            <input
              type="file"
              accept="image/*"
              onChange={handleFileChange}
              className="absolute inset-0 w-full h-full opacity-0 cursor-pointer"
            />
            <div className="space-y-2">
              <div className="mx-auto w-10 h-10 text-gray-400 flex items-center justify-center">
                <ImageIcon className="h-6 w-6" />
              </div>
              {imageFile ? (
                <p className="text-sm font-semibold text-teal-600 dark:text-teal-400">{imageFile.name}</p>
              ) : (
                <>
                  <p className="text-sm font-medium text-gray-700 dark:text-gray-300">
                    {t("marketingNotifications.create.dragAndDrop")}
                  </p>
                  <p className="text-xs text-gray-400">
                    {t("marketingNotifications.create.supportedFormats")}
                  </p>
                </>
              )}
            </div>
          </div>
          <FieldError message={imageError} />
        </div>
      </CardContent>
    </Card>
  );
}

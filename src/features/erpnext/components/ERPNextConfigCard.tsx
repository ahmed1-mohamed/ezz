"use client";

import React, { useState } from "react";
import { Loader2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { FieldError } from "@/components/ui/form-message";
import { useLanguage } from "@/contexts/LanguageContext";
import { cn } from "@/lib/utils";

interface ERPNextConfigCardProps {
  url: string;
  onUrlChange: (val: string) => void;
  onSave: () => void;
  isSaving?: boolean;
}

const URL_MAX = 2048;
const IPV4_PATTERN = /^\d{1,3}(\.\d{1,3}){3}$/;

/** Returns the translation key of the first problem with the URL, or null when it's valid. */
function getUrlErrorKey(value: string): string | null {
  const trimmed = value.trim();
  if (!trimmed) return "validation.required";
  if (trimmed.length > URL_MAX) return "validation.max_length";
  let parsed: URL;
  try {
    parsed = new URL(trimmed);
  } catch {
    return "validation.url_invalid";
  }
  if (!["http:", "https:"].includes(parsed.protocol) || !parsed.hostname) return "validation.url_invalid";
  // The domain hint below explains why: the SSL certificate is issued for the domain name.
  if (IPV4_PATTERN.test(parsed.hostname) || parsed.hostname.startsWith("[")) return "erpnext.validation.ipNotAllowed";
  return null;
}

export function ERPNextConfigCard({
  url,
  onUrlChange,
  onSave,
  isSaving,
}: ERPNextConfigCardProps) {
  const { t } = useLanguage();
  const [error, setError] = useState<string | null>(null);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (isSaving) return;
    const errorKey = getUrlErrorKey(url);
    if (errorKey) {
      setError(t(errorKey, { max: URL_MAX }));
      return;
    }
    setError(null);
    onSave();
  };

  const handleChange = (value: string) => {
    if (error) setError(null);
    onUrlChange(value);
  };

  return (
    <div className="rounded-xl border border-gray-200 dark:border-neutral-800 bg-white dark:bg-neutral-900 p-5 shadow-2xs space-y-2">
      <label htmlFor="erpnext-url" className="text-xs font-semibold text-gray-700 dark:text-gray-300 block">
        {t("erpnext.urlLabel")} <span className="text-red-500">*</span>
      </label>

      <form noValidate onSubmit={handleSubmit} className="space-y-1">
        <div className="flex items-center gap-2">
          <Input
            id="erpnext-url"
            type="url"
            dir="ltr"
            value={url}
            onChange={(e) => handleChange(e.target.value)}
            placeholder="https://crm.advixs.com"
            disabled={isSaving}
            error={!!error}
            aria-invalid={!!error}
            className={cn(
              "h-9 text-xs sm:text-sm bg-white dark:bg-neutral-950 shadow-2xs rounded-lg flex-1",
              !error && "border-gray-200 dark:border-neutral-800"
            )}
          />

          <Button
            type="submit"
            disabled={isSaving}
            className="h-9 bg-teal-700 hover:bg-teal-800 text-white text-xs font-medium px-4 rounded-lg shadow-xs shrink-0 cursor-pointer"
          >
            {isSaving ? <Loader2 className="h-3.5 w-3.5 animate-spin" /> : null}
            <span>{isSaving ? t("common.saving") : t("common.save")}</span>
          </Button>
        </div>
        <FieldError message={error ?? undefined} />
      </form>

      <p className="text-xs text-gray-400 dark:text-gray-500 leading-relaxed">
        {t("erpnext.domainHint")}
      </p>
    </div>
  );
}

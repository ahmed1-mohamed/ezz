"use client";

import { useState } from "react";
import { useFieldArray, Control } from "react-hook-form";
import { Plus, X } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { CERT_NAME_MAX_LENGTH, UpdateExpertValues } from "@/validators/dashboardExpert/updateExpertSchema";
import { FieldError } from "@/components/ui/form-message";
import { FieldLabel } from "./FieldLabel";
import { useLanguage } from "@/contexts/LanguageContext";

interface CertificationsSectionProps {
    control: Control<UpdateExpertValues>;
    /** The certifications list itself failed validation (e.g. none added). */
    hasError?: boolean;
}

export function CertificationsSection({ control, hasError }: CertificationsSectionProps) {
    const { t } = useLanguage();
    const [inputValue, setInputValue] = useState("");
    const [inputError, setInputError] = useState<string | undefined>();

    const { fields, append, remove } = useFieldArray({
        control,
        name: "certifications",
    });

    const handleAdd = () => {
        const trimmed = inputValue.trim();
        if (!trimmed) return;
        if (trimmed.length > CERT_NAME_MAX_LENGTH) {
            setInputError(t("experts.edit.form.validation.certMaxLength"));
            return;
        }
        if (fields.some((f) => f.cert_name.toLowerCase() === trimmed.toLowerCase())) {
            setInputError(t("experts.settings.validation.certificationDuplicate"));
            return;
        }
        append({ cert_name: trimmed });
        setInputValue("");
        setInputError(undefined);
    };

    const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
        if (e.key === "Enter") {
            e.preventDefault();
            handleAdd();
        }
    };

    return (
        <div className="flex flex-col gap-2.5">
            <FieldLabel
                label={t("experts.settings.certifications.label")}
                tooltip={t("experts.settings.certifications.tooltip")}
                required
            />

            <div className="flex gap-2 mt-1">
                <Input
                    value={inputValue}
                    onChange={(e) => {
                        setInputValue(e.target.value);
                        if (inputError) setInputError(undefined);
                    }}
                    onKeyDown={handleKeyDown}
                    placeholder={t("experts.settings.certifications.placeholder")}
                    error={!!inputError || hasError}
                    className="flex-1"
                />
                <Button
                    type="button"
                    variant="outline"
                    size="sm"
                    onClick={handleAdd}
                    disabled={!inputValue.trim()}
                    className="shrink-0 flex items-center gap-1 px-3 bg-[#008081] text-white"
                >
                    {t("experts.settings.certifications.add")}
                </Button>
            </div>
            <FieldError message={inputError} />

            {fields.length > 0 ? (
                <div className="flex flex-wrap gap-2 mt-3">
                    {fields.map((field, index) => (
                        <span
                            key={field.id}
                            className="inline-flex items-center gap-1.5 bg-teal-50 text-teal-700 border border-teal-200 rounded-full ps-3 pe-2 py-0.5 text-sm"
                        >
                            {field.cert_name}
                            <button
                                type="button"
                                onClick={() => remove(index)}
                                className="flex items-center justify-center w-4 h-4 rounded-full hover:bg-teal-200 transition-colors"
                                aria-label={`Remove ${field.cert_name}`}
                            >
                                <X className="w-3 h-3" />
                            </button>
                        </span>
                    ))}
                </div>
            ) : (
                <p className="text-sm text-gray-400 mt-2">
                    {t("experts.settings.certifications.noCertifications")}
                </p>
            )}
        </div>
    );
}

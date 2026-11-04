"use client";

import React, { useRef, useEffect, useState } from "react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Input } from "@/components/ui";
import { FieldValues, Path, Control, useController, PathValue } from "react-hook-form";
import { useLanguage } from "@/contexts/LanguageContext";
import { FieldError } from "@/components/ui/form-message";

type PhotoValue = File | { url: string; existingFile: true } | undefined;

interface ImgPickerProps<T extends FieldValues> {
    control: Control<T>;
    name: Path<T>;
}

export default function ImgPicker<T extends FieldValues>({ control, name }: ImgPickerProps<T>) {
    const { t } = useLanguage();
    const [preview, setPreview] = useState<string | null>(null);
    const inputRef = useRef<HTMLInputElement>(null);

    const {
        field,
        fieldState: { error },
    } = useController({ name, control });

    const value = field.value as PhotoValue;

    const fileName = value instanceof File ? value.name : null;

    useEffect(() => {
        if (!value) {
            setPreview(null);
            return;
        }
        if (value instanceof File) {
            const reader = new FileReader();
            reader.onload = () => setPreview(reader.result as string);
            reader.readAsDataURL(value);
        } else if ("url" in value) {
            setPreview(value.url);
        }
    }, [value]);

    const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const file = e.target.files?.[0];
        if (!file) return;
        field.onChange(file as PathValue<T, Path<T>>);
        e.target.value = "";
    };

    return (
        <div className="flex flex-col gap-2.5">
            <p className="text-[#15042B] text-[14px] font-[500]">{t("experts.settings.imagePicker.label")}</p>

            <div className="flex items-center gap-4">
                <Avatar className="w-16 h-16 rounded-[8px]">
                    <AvatarImage
                        src={preview ?? "/images/default-avatar.svg"}
                        alt="Profile photo"
                        className="object-cover"
                    />
                    <AvatarFallback>U</AvatarFallback>
                </Avatar>

                <div className="flex flex-col gap-2.5 w-full">
                    <Input
                        ref={inputRef}
                        type="file"
                        accept="image/svg+xml,image/png,image/jpeg,image/gif"
                        className="hidden"
                        onChange={handleFileChange}
                    />

                    <div
                        role="button"
                        tabIndex={0}
                        aria-invalid={!!error || undefined}
                        onClick={() => inputRef.current?.click()}
                        onKeyDown={(e) => {
                            if (e.key === "Enter" || e.key === " ") {
                                e.preventDefault();
                                inputRef.current?.click();
                            }
                        }}
                        className={`flex items-center border rounded-lg overflow-hidden cursor-pointer bg-[#F9FAFB] ${error ? "border-red-500" : "border-gray-200"}`}
                    >
                        <div className="bg-[#F1F3F5] px-4 py-2 border-e border-gray-200 text-[#4A5565] text-sm font-medium">
                            {t("experts.settings.imagePicker.choose")}
                        </div>
                        <div className="px-4 py-2 text-[#64748B] text-sm flex-1 truncate">
                            {fileName ?? t("experts.settings.imagePicker.noFile")}
                        </div>
                    </div>

                    <p className="text-[12px] text-[#4A5565]">{t("experts.settings.imagePicker.formats")}</p>
                </div>
            </div>
            {error && (
                <FieldError message={error.message || t("experts.settings.imagePicker.required")} className="mt-0" />
            )}
        </div>
    );
}

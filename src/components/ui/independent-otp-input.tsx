"use client";

import React, { useRef, useEffect } from "react";
import { cn } from "@/lib/utils";

interface IndependentOtpInputProps {
  value?: string;
  onChange: (value: string) => void;
  length?: number;
  hasError?: boolean;
  autoFocus?: boolean;
}

export function IndependentOtpInput({
  value = "",
  onChange,
  length = 6,
  hasError = false,
  autoFocus = true,
}: IndependentOtpInputProps) {
  const inputRefs = useRef<(HTMLInputElement | null)[]>([]);

  const digits = Array.from({ length }, (_, i) => value[i] || "");

  useEffect(() => {
    if (autoFocus && inputRefs.current[0]) {
      inputRefs.current[0].focus();
    }
  }, [autoFocus]);

  const updateOtp = (newDigits: string[]) => {
    const combined = newDigits.join("");
    onChange(combined);
  };

  const handleChange = (index: number, e: React.ChangeEvent<HTMLInputElement>) => {
    const rawVal = e.target.value;
    const digit = rawVal.replace(/\D/g, "").slice(-1);

    const newDigits = [...digits];
    newDigits[index] = digit;
    updateOtp(newDigits);

    if (digit && index < length - 1) {
      inputRefs.current[index + 1]?.focus();
    }
  };

  const handleKeyDown = (index: number, e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Backspace") {
      if (!digits[index] && index > 0) {
        const newDigits = [...digits];
        newDigits[index - 1] = "";
        updateOtp(newDigits);
        inputRefs.current[index - 1]?.focus();
      }
    } else if (e.key === "ArrowLeft" && index > 0) {
      inputRefs.current[index - 1]?.focus();
    } else if (e.key === "ArrowRight" && index < length - 1) {
      inputRefs.current[index + 1]?.focus();
    }
  };

  const handlePaste = (e: React.ClipboardEvent<HTMLInputElement>) => {
    e.preventDefault();
    const pastedData = e.clipboardData.getData("text/plain");
    const digitsOnly = pastedData.replace(/\D/g, "").slice(0, length);

    if (!digitsOnly) return;

    const newDigits = Array.from({ length }, (_, i) => digitsOnly[i] || "");
    updateOtp(newDigits);

    const nextFocusIndex = Math.min(digitsOnly.length, length - 1);
    inputRefs.current[nextFocusIndex]?.focus();
  };

  return (
    <div className="flex items-center justify-center gap-3" dir="ltr">
      {Array.from({ length }).map((_, index) => (
        <input
          key={index}
          ref={(el) => {
            inputRefs.current[index] = el;
          }}
          type="text"
          inputMode="numeric"
          pattern="[0-9]*"
          maxLength={1}
          value={digits[index] || ""}
          onChange={(e) => handleChange(index, e)}
          onKeyDown={(e) => handleKeyDown(index, e)}
          onPaste={handlePaste}
          aria-invalid={hasError || undefined}
          className={cn(
            "w-12 h-14 text-center border-2 rounded-xl text-xl font-semibold bg-[#F4F5F6] text-[#15042B] transition-all outline-none focus:bg-white focus:border-[#008081] focus:ring-2 focus:ring-[#008081]/20 dark:bg-background dark:text-white",
            hasError
              ? "border-red-500 focus:border-red-500 focus:ring-red-500/20"
              : "border-gray-300"
          )}
        />
      ))}
    </div>
  );
}

"use client";

import React from "react";
import { Lock, Info } from "lucide-react";
import { FieldError } from "@/components/ui/form-message";

export interface CardForm {
  fullName: string;
  cardNumber: string;
  cvv: string;
  expiryDate: string;
}

export const INITIAL_CARD_FORM: CardForm = {
  fullName: "",
  cardNumber: "",
  cvv: "",
  expiryDate: "",
};

function formatCardNumber(value: string): string {
  const digits = value.replace(/\D/g, "").slice(0, 16);
  return digits.replace(/(.{4})/g, "$1-").replace(/-$/, "");
}

function formatExpiry(value: string): string {
  const digits = value.replace(/\D/g, "").slice(0, 4);
  if (digits.length >= 3) {
    return `${digits.slice(0, 2)}/${digits.slice(2)}`;
  }
  return digits;
}

export type CardFormErrors = Partial<Record<keyof CardForm, string>>;

/** Luhn checksum of a digits-only card number. */
function passesLuhn(digits: string): boolean {
  let sum = 0;
  for (let i = 0; i < digits.length; i++) {
    let digit = Number(digits[digits.length - 1 - i]);
    if (i % 2 === 1) {
      digit *= 2;
      if (digit > 9) digit -= 9;
    }
    sum += digit;
  }
  return sum % 10 === 0;
}

/** Format checks only (nothing is charged here); returns a message per invalid field. */
export function validateCardForm(form: CardForm, t: (key: string) => string): CardFormErrors {
  const errors: CardFormErrors = {};

  const fullName = form.fullName.trim();
  if (!fullName) errors.fullName = t("validation.required");
  else if (fullName.length > 255) errors.fullName = t("marketplace.checkout.validation.nameTooLong");

  // The input keeps at most 16 digits; 13–16 covers the common card lengths it can hold.
  const digits = form.cardNumber.replace(/\D/g, "");
  if (!digits) errors.cardNumber = t("validation.required");
  else if (digits.length < 13 || !passesLuhn(digits)) errors.cardNumber = t("marketplace.checkout.validation.cardNumberInvalid");

  if (!form.cvv) errors.cvv = t("validation.required");
  else if (!/^\d{3,4}$/.test(form.cvv)) errors.cvv = t("marketplace.checkout.validation.cvvInvalid");

  const expiry = /^(\d{2})\/(\d{2})$/.exec(form.expiryDate);
  const month = expiry ? Number(expiry[1]) : 0;
  if (!form.expiryDate) {
    errors.expiryDate = t("validation.required");
  } else if (!expiry || month < 1 || month > 12) {
    errors.expiryDate = t("marketplace.checkout.validation.expiryInvalid");
  } else {
    // A card is valid through the last day of its expiry month.
    const now = new Date();
    const year = 2000 + Number(expiry[2]);
    if (year < now.getFullYear() || (year === now.getFullYear() && month < now.getMonth() + 1)) {
      errors.expiryDate = t("marketplace.checkout.validation.expiryPast");
    }
  }

  return errors;
}

interface CardDetailsFormProps {
  form: CardForm;
  onChange: (form: CardForm) => void;
  t: (key: string) => string;
  errors?: CardFormErrors;
  /** Called with the edited field so its error can be cleared. */
  onFieldEdit?: (field: keyof CardForm) => void;
}

const inputBase =
  "w-full rounded-xl border bg-white px-3.5 py-2.5 text-sm text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-1";
const inputState = (hasError: boolean) =>
  hasError
    ? "border-red-500 focus:border-red-500 focus:ring-red-500/30"
    : "border-gray-200 focus:border-[#0D7A70] focus:ring-[#0D7A70]/30";

export function CardDetailsForm({
  form,
  onChange,
  t,
  errors = {},
  onFieldEdit,
}: CardDetailsFormProps) {
  const handleField =
    (field: keyof CardForm, formatter?: (v: string) => string) =>
    (e: React.ChangeEvent<HTMLInputElement>): void => {
      const value = formatter ? formatter(e.target.value) : e.target.value;
      onChange({ ...form, [field]: value });
      onFieldEdit?.(field);
    };

  return (
    <div className="rounded-2xl border border-gray-100 bg-gray-50/30 p-5 space-y-4 shadow-sm">
      <p className="text-sm font-semibold text-gray-700 flex items-center gap-1.5">
        <Lock className="h-4 w-4 text-[#0D7A70]" />
        {t("marketplace.checkout.cardDetails")}
      </p>
      <div className="grid grid-cols-2 gap-4">
        <div className="col-span-2 sm:col-span-1">
          <label htmlFor="card-full-name" className="mb-1 block text-xs font-medium text-gray-600">
            {t("marketplace.checkout.fullName")}
            <span className="text-rose-500"> *</span>
          </label>
          <input
            id="card-full-name"
            type="text"
            placeholder={t("marketplace.checkout.fullNamePlaceholder")}
            value={form.fullName}
            onChange={handleField("fullName")}
            autoComplete="cc-name"
            aria-invalid={!!errors.fullName}
            className={`${inputBase} ${inputState(!!errors.fullName)}`}
          />
          <FieldError message={errors.fullName} />
        </div>
        <div className="col-span-2 sm:col-span-1">
          <label htmlFor="card-number" className="mb-1 block text-xs font-medium text-gray-600">
            {t("marketplace.checkout.cardNumber")}
            <span className="text-rose-500"> *</span>
          </label>
          <input
            id="card-number"
            type="text"
            inputMode="numeric"
            placeholder="XXXX-XXXX-XXXX-XXXX"
            value={form.cardNumber}
            onChange={handleField("cardNumber", formatCardNumber)}
            dir="ltr"
            autoComplete="cc-number"
            aria-invalid={!!errors.cardNumber}
            className={`${inputBase} font-mono ${inputState(!!errors.cardNumber)}`}
          />
          <FieldError message={errors.cardNumber} />
        </div>
        <div>
          <label htmlFor="card-cvv" className="mb-1 block text-xs font-medium text-gray-600">
            {t("marketplace.checkout.cvv")}
            <span className="text-rose-500"> *</span>
            <Info className="ms-1 inline h-3.5 w-3.5 text-gray-400 cursor-pointer" />
          </label>
          <input
            id="card-cvv"
            type="password"
            maxLength={4}
            placeholder={t("marketplace.checkout.cvvPlaceholder")}
            value={form.cvv}
            onChange={handleField("cvv")}
            inputMode="numeric"
            dir="ltr"
            autoComplete="cc-csc"
            aria-invalid={!!errors.cvv}
            className={`${inputBase} ${inputState(!!errors.cvv)}`}
          />
          <FieldError message={errors.cvv} />
        </div>
        <div>
          <label htmlFor="card-expiry" className="mb-1 block text-xs font-medium text-gray-600">
            {t("marketplace.checkout.expiryDate")}
            <span className="text-rose-500"> *</span>
          </label>
          <input
            id="card-expiry"
            type="text"
            inputMode="numeric"
            placeholder="MM/YY"
            value={form.expiryDate}
            onChange={handleField("expiryDate", formatExpiry)}
            dir="ltr"
            autoComplete="cc-exp"
            aria-invalid={!!errors.expiryDate}
            className={`${inputBase} ${inputState(!!errors.expiryDate)}`}
          />
          <FieldError message={errors.expiryDate} />
        </div>
      </div>
    </div>
  );
}

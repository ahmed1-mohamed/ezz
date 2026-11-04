"use client";

import React from "react";
import { CreditCard, Wallet, Building2, Smartphone } from "lucide-react";
import { type PaymentMethod } from "../../types";

interface PaymentOption {
  id: PaymentMethod;
  labelKey: string;
  icon: React.ReactNode;
}

const PAYMENT_OPTIONS: PaymentOption[] = [
  {
    id: "card",
    labelKey: "marketplace.checkout.paymentMethods.card",
    icon: <CreditCard className="h-5 w-5" />,
  },
  {
    id: "wallet",
    labelKey: "marketplace.checkout.paymentMethods.wallet",
    icon: <Wallet className="h-5 w-5" />,
  },
  {
    id: "bank",
    labelKey: "marketplace.checkout.paymentMethods.bank",
    icon: <Building2 className="h-5 w-5" />,
  },
  {
    id: "mobile",
    labelKey: "marketplace.checkout.paymentMethods.mobile",
    icon: <Smartphone className="h-5 w-5" />,
  },
];

interface PaymentMethodGridProps {
  selected: PaymentMethod;
  onSelect: (method: PaymentMethod) => void;
  t: (key: string) => string;
}

export function PaymentMethodGrid({
  selected,
  onSelect,
  t,
}: PaymentMethodGridProps) {
  return (
    <div>
      <p className="mb-3 text-sm font-semibold text-gray-700">
        {t("marketplace.checkout.choosePayment")}
      </p>
      <div className="grid grid-cols-2 gap-3 sm:grid-cols-4">
        {PAYMENT_OPTIONS.map((option) => {
          const isSelected = selected === option.id;
          return (
            <button
              key={option.id}
              id={`payment-method-${option.id}`}
              type="button"
              onClick={() => onSelect(option.id)}
              className={`flex flex-col items-center gap-2 rounded-xl border-2 p-4 text-xs font-semibold transition-all duration-200 ${
                isSelected
                  ? "border-emerald-500 bg-emerald-50/10 text-emerald-700"
                  : "border-gray-200 bg-white text-gray-600 hover:border-gray-300 hover:bg-gray-50"
              }`}
            >
              <span className={isSelected ? "text-emerald-600" : "text-gray-400"}>
                {option.icon}
              </span>
              {t(option.labelKey)}
            </button>
          );
        })}
      </div>
    </div>
  );
}

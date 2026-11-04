"use client";

import { CheckCircle2 } from "lucide-react";

interface SuccessViewProps {
  packageName: string;
  onClose: () => void;
  t: (key: string, values?: Record<string, any>) => string;
}

export function SuccessView({
  packageName,
  onClose,
  t,
}: SuccessViewProps) {
  return (
    <div className="flex flex-col items-center gap-4 py-12 text-center max-w-md mx-auto">
      <div className="flex h-20 w-20 items-center justify-center rounded-full bg-emerald-100 shadow-inner">
        <CheckCircle2 className="h-10 w-10 text-emerald-600" />
      </div>
      <div className="space-y-1.5">
        <h3 className="text-xl font-extrabold text-gray-900 tracking-tight">
          {t("marketplace.checkout.successTitle")}
        </h3>
        <p className="text-sm text-gray-500">
          {t("marketplace.checkout.successDesc", { package: packageName })}
        </p>
      </div>
      <button
        id="purchase-success-close"
        onClick={onClose}
        className="mt-4 rounded-xl bg-gradient-to-r from-[#0D7A70] to-[#0a6560] px-8 py-3 text-sm font-semibold text-white shadow-md transition-all hover:from-[#0a6560] hover:to-[#085550] active:scale-[0.98]"
      >
        {t("marketplace.checkout.done")}
      </button>
    </div>
  );
}

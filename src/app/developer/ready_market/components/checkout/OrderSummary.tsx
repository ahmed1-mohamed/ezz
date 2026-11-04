"use client";

interface OrderSummaryProps {
  packageName: string;
  credits: number;
  price: number;
  currency: string;
  t: (key: string, values?: Record<string, any>) => string;
}

export function OrderSummary({
  packageName,
  credits,
  price,
  currency,
  t,
}: OrderSummaryProps) {
  return (
    <div className="rounded-2xl border border-emerald-500/20 bg-emerald-50/10 p-5 shadow-sm">
      <p className="mb-3 text-sm font-semibold text-gray-700">
        {t("marketplace.checkout.orderSummary")}
      </p>
      <div className="space-y-2">
        <div className="flex items-center justify-between text-sm">
          <span className="text-gray-500">{t("marketplace.checkout.package")}</span>
          <span className="font-semibold text-gray-900">{packageName}</span>
        </div>
        <div className="flex items-center justify-between text-sm">
          <span className="text-gray-500">{t("marketplace.checkout.credits")}</span>
          <span className="font-bold text-amber-600">
            {credits.toLocaleString()}
          </span>
        </div>
      </div>
      <div className="mt-3 border-t border-gray-100 pt-3 flex items-center justify-between">
        <span className="font-bold text-gray-900">{t("marketplace.checkout.total")}</span>
        <span className="text-2xl font-extrabold text-gray-900">
          {currency === "AED" || currency === "USD" || currency === "$" ? "" : currency}{" "}
          {currency === "$" ? "$" : ""}{price.toLocaleString()}
        </span>
      </div>
    </div>
  );
}

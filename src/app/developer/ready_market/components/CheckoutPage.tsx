"use client";

import { useState } from "react";
import { useLanguage } from "@/contexts/LanguageContext";
import { useSession } from "next-auth/react";
import { toast } from "sonner";
import { purchaseAdCreditPackage } from "@/data/api-client";
import { getApiErrorMessage } from "@/lib/api-errors";
import { API_ERROR_TOAST_ID } from "@/config/toast-config";
import { Lock } from "lucide-react";
import { type MarketplaceItem, type PaymentMethod } from "../types";
import { OrderSummary } from "./checkout/OrderSummary";
import { PaymentMethodGrid } from "./checkout/PaymentMethodGrid";
import {
  CardDetailsForm,
  INITIAL_CARD_FORM,
  validateCardForm,
  type CardForm,
  type CardFormErrors,
} from "./checkout/CardDetailsForm";
import { BankTransferDetails } from "./checkout/BankTransferDetails";
import { SuccessView } from "./checkout/SuccessView";

interface CheckoutPageProps {
  item: MarketplaceItem;
  onClose: () => void;
}

export function CheckoutPage({ item, onClose }: CheckoutPageProps) {
  const { t } = useLanguage();
  const { data: session } = useSession();
  const [paymentMethod, setPaymentMethod] = useState<PaymentMethod>("bank");
  const [cardForm, setCardForm] = useState<CardForm>(INITIAL_CARD_FORM);
  const [receiptFile, setReceiptFile] = useState<File | null>(null);
  const [isProcessing, setIsProcessing] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [cardErrors, setCardErrors] = useState<CardFormErrors>({});
  const [receiptError, setReceiptError] = useState<string | undefined>();

  const packageName = t(item.titleKey);

  /** Shows a message under each invalid field; true when the selected method's details are valid. */
  const validate = (): boolean => {
    if (paymentMethod === "card") {
      const errors = validateCardForm(cardForm, t);
      setCardErrors(errors);
      const firstInvalid = Object.keys(errors)[0];
      if (firstInvalid) {
        const ids: Record<string, string> = {
          fullName: "card-full-name",
          cardNumber: "card-number",
          cvv: "card-cvv",
          expiryDate: "card-expiry",
        };
        document.getElementById(ids[firstInvalid])?.focus();
        return false;
      }
    }
    if (paymentMethod === "bank" && !receiptFile) {
      setReceiptError(t("marketplace.checkout.validation.receiptRequired"));
      return false;
    }
    return true;
  };

  const handlePay = async (): Promise<void> => {
    if (!validate()) return;
    setIsProcessing(true);

    try {
      const token = session?.user?.accessToken || "";
      const developerId = session?.user?.user_developer_relationship?.developer_id || 1;

      const paymentDetails = {
        payment_method: paymentMethod,
        card_name: paymentMethod === "card" ? cardForm.fullName : undefined,
        card_number: paymentMethod === "card" ? cardForm.cardNumber.replace(/-/g, "") : undefined,
        receipt_file_name: receiptFile ? receiptFile.name : undefined,
      };

      await purchaseAdCreditPackage(token, developerId, item.id, paymentDetails);
      setIsSuccess(true);
    } catch (error) {
      console.error("Purchase failed:", error);
      toast.error(getApiErrorMessage(error, t, t("marketplace.checkout.purchaseFailed")), {
        id: API_ERROR_TOAST_ID,
      });
    } finally {
      setIsProcessing(false);
    }
  };

  return (
    <div className="max-w-2xl mx-auto py-8 px-4 space-y-8 animate-fade-in">
      {!isSuccess && (
        <div className="text-center space-y-2">
          <h1 className="text-3xl font-extrabold text-gray-900 tracking-tight">
            {t("marketplace.checkout.title")}
          </h1>
          <p className="text-sm text-gray-500">
            {t("marketplace.checkout.subtitle")}
          </p>
        </div>
      )}

      <div className="rounded-2xl border border-gray-100 bg-white p-6 md:p-8 shadow-sm space-y-6">
        {isSuccess ? (
          <SuccessView packageName={packageName} onClose={onClose} t={t} />
        ) : (
          <div className="space-y-6">
            <OrderSummary
              packageName={packageName}
              credits={item.credits}
              price={item.price}
              currency={item.currency}
              t={t}
            />

            <PaymentMethodGrid
              selected={paymentMethod}
              onSelect={setPaymentMethod}
              t={t}
            />

            {paymentMethod === "card" && (
              <CardDetailsForm
                form={cardForm}
                onChange={setCardForm}
                t={t}
                errors={cardErrors}
                onFieldEdit={(field) =>
                  setCardErrors((prev) => (prev[field] ? { ...prev, [field]: undefined } : prev))
                }
              />
            )}

            {paymentMethod === "bank" && (
              <BankTransferDetails
                receiptFile={receiptFile}
                onFileSelect={(file) => {
                  setReceiptFile(file);
                  setReceiptError(undefined);
                }}
                onFileRemove={() => setReceiptFile(null)}
                t={t}
                error={receiptError}
              />
            )}

            {paymentMethod !== "card" && paymentMethod !== "bank" && (
              <div className="rounded-xl border border-gray-100 bg-gray-50 p-6 text-center text-sm text-gray-500">
                {t("marketplace.checkout.redirectNotice")}
              </div>
            )}

            <div className="flex justify-between items-center gap-4 pt-4 border-t border-gray-50">
              <button
                id="checkout-cancel-btn"
                type="button"
                onClick={onClose}
                disabled={isProcessing}
                className="rounded-xl border border-gray-200 bg-white px-6 py-3 text-sm font-semibold text-gray-700 transition-colors hover:bg-gray-50 active:scale-[0.98] disabled:cursor-not-allowed disabled:opacity-50"
              >
                {t("marketplace.checkout.back")}
              </button>
              <button
                id="checkout-pay-btn"
                type="button"
                onClick={handlePay}
                disabled={isProcessing}
                className="flex items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-[#0D7A70] to-[#0a6560] px-6 py-3 text-sm font-semibold text-white shadow-sm transition-all hover:from-[#0a6560] hover:to-[#085550] active:scale-[0.98] disabled:cursor-not-allowed disabled:opacity-50"
              >
                {isProcessing ? (
                  <span className="flex items-center gap-2">
                    <span className="h-4 w-4 animate-spin rounded-full border-2 border-white/30 border-t-white" />
                    {t("marketplace.checkout.processing")}
                  </span>
                ) : (
                  <>
                    <Lock className="h-4 w-4" />
                    {t("marketplace.checkout.pay")}{" "}
                    {item.currency === "$" ? "$" : ""}
                    {item.price.toLocaleString()}
                    {item.currency === "AED" || item.currency === "USD" ? ` ${item.currency}` : ""}
                  </>
                )}
              </button>
            </div>

            <p className="text-center text-xs text-gray-400 flex items-center justify-center gap-1">
              <Lock className="h-3 w-3" />
              {t("marketplace.checkout.secureNotice")}
            </p>
          </div>
        )}
      </div>
    </div>
  );
}
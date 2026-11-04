import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Badge } from "@/components/ui/badge";
import { useLanguage } from "@/contexts/LanguageContext";

interface Props {
  open: boolean;
  onClose: () => void;
  addonData: any;
}

export default function ViewAddonModal({ open, onClose, addonData }: Props) {
  const { t } = useLanguage();
  if (!addonData) return null;

  return (
    <Dialog open={open} onOpenChange={onClose}>
      <DialogContent className="sm:max-w-[500px] rounded-2xl max-h-[90vh] overflow-y-auto">
        <DialogHeader className="flex flex-row items-center justify-between space-y-0 pb-4 border-b border-gray-100">
          <DialogTitle className="text-xl font-semibold text-gray-900">
            {t("subscriptions.viewAddonModal.title")}
          </DialogTitle>
        </DialogHeader>

        <div className="space-y-6 mt-4">
          <div className="flex justify-between items-start">
            <div>
              <h3 className="text-xl font-bold text-gray-900">{addonData.name}</h3>
              <p className="text-sm text-gray-500 font-mono mt-1">{addonData.code}</p>
            </div>
            <Badge
              className={
                addonData.is_active
                  ? "bg-green-100 text-green-700 hover:bg-green-100 px-3 py-1"
                  : "bg-gray-100 text-gray-700 hover:bg-gray-100 px-3 py-1"
              }
            >
              {addonData.is_active ? t("common.active") : t("common.inactive")}
            </Badge>
          </div>

          <div className="bg-gray-50 rounded-xl p-5 border border-gray-100 space-y-4">
            <div className="flex justify-between items-center pb-3 border-b border-gray-200">
              <span className="text-sm font-medium text-gray-500">{t("subscriptions.viewAddonModal.featureId")}</span>
              <span className="text-sm font-semibold text-gray-900">{addonData.feature_id}</span>
            </div>
            <div className="flex justify-between items-center pb-3 border-b border-gray-200">
              <span className="text-sm font-medium text-gray-500">{t("subscriptions.viewAddonModal.amountQuantity")}</span>
              <span className="text-sm font-semibold text-gray-900">{addonData.amount}</span>
            </div>
            <div className="flex justify-between items-center pb-3 border-b border-gray-200">
              <span className="text-sm font-medium text-gray-500">{t("subscriptions.addCustomerPlanModal.price")}</span>
              <span className="text-sm font-bold text-teal-600">
                {addonData.currency || "AED"} {(addonData.price_cents / 100).toLocaleString(undefined, { minimumFractionDigits: 2, maximumFractionDigits: 2 })}
              </span>
            </div>
            {addonData.description && (
              <div className="pt-2">
                <span className="text-sm font-medium text-gray-500 block mb-1">{t("subscriptions.addCustomerPlanModal.description")}</span>
                <p className="text-sm text-gray-800 leading-relaxed bg-white p-3 rounded-lg border border-gray-100">
                  {addonData.description}
                </p>
              </div>
            )}
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}

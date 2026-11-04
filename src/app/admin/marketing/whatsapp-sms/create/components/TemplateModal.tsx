import React from "react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { useLanguage } from "@/contexts/LanguageContext";

interface TemplateModalProps {
  isOpen: boolean;
  onClose: (open: boolean) => void;
  onSelect: (text: string) => void;
  isRTL: boolean;
}

const MESSAGE_TEMPLATES = [
  { id: "1", titleAr: "رسالة ترحيبية", titleEn: "Welcome Message", textAr: "مرحباً بك في منصتنا! يسعدنا تسجيلك معنا ونتمنى لك تجربة بحث عقاري مميزة.", textEn: "Welcome to our platform! We are happy to have you registered and wish you a great property search experience." },
  { id: "2", titleAr: "تأكيد الحجز", titleEn: "Booking Confirmation", textAr: "عزيزنا العميل، تم تأكيد موعد استشارتك العقارية بنجاح. نتطلع لمقابلتك قريباً.", textEn: "Dear customer, your property consultation appointment has been successfully confirmed. We look forward to meeting you soon." },
  { id: "3", titleAr: "عروض الصيف", titleEn: "Summer Offers", textAr: "عروض الصيف الحصرية تبدأ اليوم! احصل على خصم فوري يصل إلى 15% على وحدات مختارة لفترة محدودة.", textEn: "Exclusive summer offers start today! Get an immediate discount up to 15% on selected units for a limited time." }
];

export const TemplateModal = React.memo(({
  isOpen,
  onClose,
  onSelect,
  isRTL,
}: TemplateModalProps) => {
  const { t } = useLanguage();
  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-md w-full bg-white dark:bg-neutral-900 border border-gray-200 dark:border-neutral-800 rounded-xl p-6 shadow-xl">
        <DialogHeader className="mb-4">
          <DialogTitle className="text-lg font-bold text-gray-900 dark:text-gray-100 text-start">
            {t("marketingWhatsappSms.create.chooseFromTemplates")}
          </DialogTitle>
        </DialogHeader>
        <div className="space-y-3 max-h-[350px] overflow-y-auto text-start">
          {MESSAGE_TEMPLATES.map((tmpl) => (
            <div
              key={tmpl.id}
              onClick={() => onSelect(isRTL ? tmpl.textAr : tmpl.textEn)}
              className="p-3 border border-gray-100 dark:border-neutral-800 rounded-xl hover:border-teal-500 hover:bg-teal-50/5 cursor-pointer transition-all"
            >
              <h3 className="text-sm font-bold text-gray-900 dark:text-gray-100 mb-1">
                {isRTL ? tmpl.titleAr : tmpl.titleEn}
              </h3>
              <p className="text-xs text-gray-500 leading-relaxed">
                {isRTL ? tmpl.textAr : tmpl.textEn}
              </p>
            </div>
          ))}
        </div>
      </DialogContent>
    </Dialog>
  );
});

TemplateModal.displayName = "TemplateModal";

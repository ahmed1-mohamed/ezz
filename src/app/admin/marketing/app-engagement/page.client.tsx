"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { toast } from "sonner";
import { ChevronRight, Plus } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";

import EngagementCard from "./components/engagement-card";
import EngagementEditForm from "./components/engagement-edit-form";
import { FieldError } from "@/components/ui/form-message";
import { scrollToFirstInvalidField } from "@/lib/form-utils";
import { validateEngagementTemplate, type EngagementTemplateErrors } from "./engagement-validation";

interface TriggeredTemplate {
  id: string;
  titleAr: string;
  titleEn: string;
  event: string;
  subject: string;
  body: string;
  actionLink: string;
  active: boolean;
  iconType?: "home" | "heart" | "flame" | "party" | "chart" | "none";
}

const INITIAL_TEMPLATES: TriggeredTemplate[] = [
  {
    id: "1",
    titleAr: "الترحيب بالمستخدم الجديد",
    titleEn: "Welcome New User",
    event: "User Registered",
    subject: "SUBJECT Welcome to Firnas",
    body: "Hello {{name}}, Welcome to Firnas! Start exploring properties and discover the best investment opportunities.",
    actionLink: "Browse Properties",
    active: true,
    iconType: "home"
  },
  {
    id: "2",
    titleAr: "إكمال الملف الشخصي",
    titleEn: "Complete Profile",
    event: "Profile Completed",
    subject: "SUBJECT Complete Your Profile",
    body: "Complete your profile to receive personalized property recommendations and investment insights.",
    actionLink: "Complete Profile",
    active: true,
    iconType: "none"
  },
  {
    id: "3",
    titleAr: "حفظ عقار في المفضلة",
    titleEn: "Save Property in Favorites",
    event: "Property Favorited",
    subject: "SUBJECT Property Added to Favorites",
    body: "You have saved \"{{property_name}}\" to your favorites list.",
    actionLink: "View Property",
    active: true,
    iconType: "heart"
  },
  {
    id: "4",
    titleAr: "انخفاض سعر العقار",
    titleEn: "Price Drop",
    event: "Price Changed",
    subject: "SUBJECT Price Drop Alert",
    body: "The price of \"{{property_name}}\" dropped from {{old_price}} to {{new_price}}.",
    actionLink: "View Deal",
    active: true,
    iconType: "flame"
  },
  {
    id: "5",
    titleAr: "عقار مشابه متاح",
    titleEn: "Similar Property Available",
    event: "New Property Added",
    subject: "SUBJECT New Property Matches Your Search",
    body: "We found new properties matching your preferences in {{location}}.",
    actionLink: "See Matches",
    active: true,
    iconType: "none"
  },
  {
    id: "6",
    titleAr: "تأكيد طلب المعاينة",
    titleEn: "Confirm Viewing Request",
    event: "Viewing Confirmed",
    subject: "SUBJECT Viewing Confirmed",
    body: "Your viewing for \"{{property_name}}\" is confirmed on {{date}} at {{time}}.",
    actionLink: "",
    active: true,
    iconType: "none"
  },
  {
    id: "7",
    titleAr: "تذكير قبل المعاينة",
    titleEn: "Viewing Reminder",
    event: "Viewing Booked",
    subject: "SUBJECT Upcoming Property Viewing",
    body: "Reminder: Your property viewing is scheduled tomorrow at {{time}}.",
    actionLink: "",
    active: true,
    iconType: "none"
  },
  {
    id: "8",
    titleAr: "إرسال استفسار للمالك",
    titleEn: "Send Inquiry to Owner",
    event: "Inquiry Submitted",
    subject: "SUBJECT Inquiry Sent Successfully",
    body: "Your inquiry regarding \"{{property_name}}\" has been sent.",
    actionLink: "",
    active: true,
    iconType: "none"
  },
  {
    id: "9",
    titleAr: "رد على الاستفسار",
    titleEn: "Reply to Inquiry",
    event: "Inquiry Submitted",
    subject: "SUBJECT You Have a New Reply",
    body: "The property owner has responded to your inquiry about \"{{property_name}}\".",
    actionLink: "View Conversation",
    active: true,
    iconType: "none"
  },
  {
    id: "10",
    titleAr: "عقارات جديدة في المنطقة",
    titleEn: "New Properties in Area",
    event: "New Property Added",
    subject: "SUBJECT New Properties Available",
    body: "New listings have just been added in {{location}}.",
    actionLink: "",
    active: false,
    iconType: "none"
  },
  {
    id: "11",
    titleAr: "انتهاء صلاحية الإعلان",
    titleEn: "Listing Expiring",
    event: "Listing Expiring",
    subject: "SUBJECT Your Listing is Expiring Soon",
    body: "Your listing \"{{property_name}}\" will expire in {{days}} days.",
    actionLink: "Renew Listing",
    active: true,
    iconType: "none"
  },
  {
    id: "12",
    titleAr: "تم بيع أو تأجير العقار",
    titleEn: "Property Sold",
    event: "Property Sold",
    subject: "SUBJECT Congratulations",
    body: "Your property \"{{property_name}}\" has been marked as sold/rented.",
    actionLink: "",
    active: true,
    iconType: "party"
  },
  {
    id: "13",
    titleAr: "استرجاع المستخدمين غير النشطين",
    titleEn: "Re-engage Inactive Users",
    event: "User Inactive",
    subject: "SUBJECT We Have Missed You",
    body: "New investment opportunities and exclusive properties are waiting for you.",
    actionLink: "Explore Now",
    active: false,
    iconType: "none"
  },
  {
    id: "14",
    titleAr: "توصيات AI",
    titleEn: "AI Recommendations",
    event: "AI Analysis Generated",
    subject: "SUBJECT AI Property Recommendations",
    body: "Based on your preferences, we have selected properties with strong ROI potential.",
    actionLink: "View Recommendations",
    active: true,
    iconType: "none"
  },
  {
    id: "15",
    titleAr: "تنبيه استثماري",
    titleEn: "Investment Alert",
    event: "Subscription Renewed",
    subject: "SUBJECT Investment Opportunity Alert",
    body: "A new property in {{location}} offers an estimated ROI of {{roi}}%.",
    actionLink: "Analyze Property",
    active: true,
    iconType: "chart"
  }
];

export default function AppEngagementPage() {
  const { t, language } = useLanguage();
  const pathname = usePathname();
  const isRTL = language === "ar";
  const basePath = pathname.startsWith("/developer") ? "/developer" : "/admin";

  const [templates, setTemplates] = useState<TriggeredTemplate[]>(INITIAL_TEMPLATES);
  const [editingId, setEditingId] = useState<string | null>(null);
  const [isCreateModalOpen, setIsCreateModalOpen] = useState(false);

  const [formTitleAr, setFormTitleAr] = useState("");
  const [formTitleEn, setFormTitleEn] = useState("");
  const [formEvent, setFormEvent] = useState("");
  const [formSubject, setFormSubject] = useState("");
  const [formBody, setFormBody] = useState("");
  const [formActionLink, setFormActionLink] = useState("");
  const [formErrors, setFormErrors] = useState<EngagementTemplateErrors>({});

  // Updates a create-form field and clears its error.
  const changeFormField =
    (field: keyof EngagementTemplateErrors, setter: (value: string) => void) => (value: string) => {
      setter(value);
      setFormErrors((prev) => {
        if (!prev[field]) return prev;
        const next = { ...prev };
        delete next[field];
        return next;
      });
    };

  const activeCount = templates.filter((t) => t.active).length;
  const totalCount = templates.length;

  const handleToggleActive = (id: string, currentStatus: boolean) => {
    setTemplates((prev) =>
      prev.map((item) => (item.id === id ? { ...item, active: !item.active } : item))
    );
    if (currentStatus) {
      toast.success(t("marketingAppEngagement.toastDisabled"));
    } else {
      toast.success(t("marketingAppEngagement.toastEnabled"));
    }
  };

  const handleSaveInline = (id: string, updatedFields: Partial<TriggeredTemplate>) => {
    setTemplates((prev) =>
      prev.map((item) => (item.id === id ? { ...item, ...updatedFields } : item))
    );
    setEditingId(null);
    toast.success(t("marketingAppEngagement.modal.successEdit"));
  };

  const handleOpenCreate = () => {
    setFormTitleAr("");
    setFormTitleEn("");
    setFormEvent("");
    setFormSubject("");
    setFormBody("");
    setFormActionLink("");
    setFormErrors({});
    setIsCreateModalOpen(true);
  };

  const handleCreateTemplate = (e: React.FormEvent) => {
    e.preventDefault();

    const validationErrors = validateEngagementTemplate(
      {
        titleAr: formTitleAr,
        titleEn: formTitleEn,
        event: formEvent,
        subject: formSubject,
        body: formBody,
        actionLink: formActionLink,
      },
      t
    );
    setFormErrors(validationErrors);
    if (Object.keys(validationErrors).length > 0) {
      scrollToFirstInvalidField(e.currentTarget);
      return;
    }

    const newTmpl: TriggeredTemplate = {
      id: (templates.length + 1).toString(),
      titleAr: formTitleAr || "قالب تفاعل جديد",
      titleEn: formTitleEn || "New Triggered Template",
      event: formEvent || "Event Triggered",
      subject: formSubject.startsWith("SUBJECT ") ? formSubject : `SUBJECT ${formSubject}`,
      body: formBody,
      actionLink: formActionLink,
      active: true,
      iconType: "none"
    };

    setTemplates((prev) => [...prev, newTmpl]);
    setIsCreateModalOpen(false);
    toast.success(t("marketingAppEngagement.modal.successCreate"));
  };

  return (
    <div className="p-6 space-y-6 max-w-[1600px] mx-auto text-start">
      <div className="flex items-center gap-2 text-sm text-gray-500">
        <Link href={`${basePath}/home`} className="hover:text-teal-600 transition-colors">
          {language === "ar" ? "الرئيسية" : "Home"}
        </Link>
        <ChevronRight className={`h-4 w-4 ${isRTL && "rotate-180"}`} />
        <span>{t("sidebar.marketingGroup")}</span>
        <ChevronRight className={`h-4 w-4 ${isRTL && "rotate-180"}`} />
        <span className="text-gray-900 font-medium">{t("sidebar.appEngagement")}</span>
      </div>

      <div className="flex items-center justify-between">
        <Button
          onClick={handleOpenCreate}
          className="bg-teal-700 hover:bg-teal-800 text-white font-medium gap-2 px-5 py-2.5 rounded-lg transition-all"
        >
          <Plus className="h-5 w-5" />
          {t("marketingAppEngagement.newTemplate")}
        </Button>

        <div className="text-end">
          <h1 className="text-2xl font-bold text-gray-900 dark:text-gray-100">
            {t("marketingAppEngagement.triggeredTemplates")}
          </h1>
          <p className="text-sm text-gray-500 mt-1">
            {t("marketingAppEngagement.activeTemplatesCount", { active: activeCount, total: totalCount })}
          </p>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {templates.map((tmpl) => (
          <div key={tmpl.id}>
            {editingId === tmpl.id ? (
              <EngagementEditForm
                template={tmpl}
                onSave={handleSaveInline}
                onCancel={() => setEditingId(null)}
                language={language}
                t={t}
              />
            ) : (
              <EngagementCard
                template={tmpl}
                onToggleActive={handleToggleActive}
                onStartEdit={(id) => setEditingId(id)}
                language={language}
                t={t}
              />
            )}
          </div>
        ))}
      </div>

      <Dialog open={isCreateModalOpen} onOpenChange={setIsCreateModalOpen}>
        <DialogContent className="max-w-md w-full bg-white dark:bg-neutral-900 border border-gray-200 dark:border-neutral-800 rounded-xl p-6 shadow-xl text-start">
          <DialogHeader>
            <DialogTitle className="text-lg font-bold text-gray-900 dark:text-gray-100">
              {t("marketingAppEngagement.modal.createNewTemplate")}
            </DialogTitle>
          </DialogHeader>

          <form onSubmit={handleCreateTemplate} noValidate className="space-y-4 pt-2">
            <div className="space-y-1">
              <label className="text-xs font-semibold text-gray-500">
                {t("marketingAppEngagement.modal.titleLabel")}
              </label>
              <Input
                type="text"
                required
                placeholder={t("marketingAppEngagement.modal.titlePlaceholder")}
                value={formTitleAr}
                onChange={(e) => changeFormField("titleAr", setFormTitleAr)(e.target.value)}
                error={!!formErrors.titleAr}
                aria-invalid={!!formErrors.titleAr}
                className={`bg-white dark:bg-neutral-950 ${formErrors.titleAr ? "" : "border-gray-200 dark:border-neutral-800"}`}
              />
              <FieldError message={formErrors.titleAr} />
            </div>

            <div className="space-y-1">
              <label className="text-xs font-semibold text-gray-500">
                Template Title (English)
              </label>
              <Input
                type="text"
                required
                placeholder="e.g. Welcome new user"
                value={formTitleEn}
                onChange={(e) => changeFormField("titleEn", setFormTitleEn)(e.target.value)}
                error={!!formErrors.titleEn}
                aria-invalid={!!formErrors.titleEn}
                className={`bg-white dark:bg-neutral-950 ${formErrors.titleEn ? "" : "border-gray-200 dark:border-neutral-800"}`}
              />
              <FieldError message={formErrors.titleEn} />
            </div>

            <div className="space-y-1">
              <label className="text-xs font-semibold text-gray-500">
                {t("marketingAppEngagement.modal.eventLabel")}
              </label>
              <Input
                type="text"
                required
                placeholder={t("marketingAppEngagement.modal.eventPlaceholder")}
                value={formEvent}
                onChange={(e) => changeFormField("event", setFormEvent)(e.target.value)}
                error={!!formErrors.event}
                aria-invalid={!!formErrors.event}
                className={`bg-white dark:bg-neutral-950 ${formErrors.event ? "" : "border-gray-200 dark:border-neutral-800"}`}
              />
              <FieldError message={formErrors.event} />
            </div>

            <div className="space-y-1">
              <label className="text-xs font-semibold text-gray-500">
                {t("marketingAppEngagement.modal.subjectLabel")}
              </label>
              <Input
                type="text"
                required
                placeholder={t("marketingAppEngagement.modal.subjectPlaceholder")}
                value={formSubject}
                onChange={(e) => changeFormField("subject", setFormSubject)(e.target.value)}
                error={!!formErrors.subject}
                aria-invalid={!!formErrors.subject}
                className={`bg-white dark:bg-neutral-950 ${formErrors.subject ? "" : "border-gray-200 dark:border-neutral-800"}`}
              />
              <FieldError message={formErrors.subject} />
            </div>

            <div className="space-y-1">
              <label className="text-xs font-semibold text-gray-500">
                {t("marketingAppEngagement.modal.bodyLabel")}
              </label>
              <textarea
                required
                rows={4}
                placeholder={t("marketingAppEngagement.modal.bodyPlaceholder")}
                value={formBody}
                onChange={(e) => changeFormField("body", setFormBody)(e.target.value)}
                aria-invalid={!!formErrors.body}
                className={`w-full p-2.5 border ${formErrors.body ? "border-red-500" : "border-gray-200 dark:border-neutral-800"} bg-white dark:bg-neutral-950 rounded-lg text-sm text-gray-800 dark:text-gray-200 focus:outline-none focus:ring-2 focus:ring-teal-500`}
              />
              <FieldError message={formErrors.body} />
            </div>

            <div className="space-y-1">
              <label className="text-xs font-semibold text-gray-500">
                {t("marketingAppEngagement.modal.actionLinkLabel")}
              </label>
              <Input
                type="text"
                placeholder={t("marketingAppEngagement.modal.actionLinkPlaceholder")}
                value={formActionLink}
                onChange={(e) => changeFormField("actionLink", setFormActionLink)(e.target.value)}
                error={!!formErrors.actionLink}
                aria-invalid={!!formErrors.actionLink}
                className={`bg-white dark:bg-neutral-950 ${formErrors.actionLink ? "" : "border-gray-200 dark:border-neutral-800"}`}
              />
              <FieldError message={formErrors.actionLink} />
            </div>

            <div className="flex items-center gap-3 pt-2">
              <Button type="submit" className="bg-teal-700 hover:bg-teal-800 text-white font-bold">
                {t("marketingAppEngagement.modal.create")}
              </Button>
              <Button
                type="button"
                variant="outline"
                onClick={() => setIsCreateModalOpen(false)}
                className="border-gray-200 dark:border-neutral-800 text-gray-700"
              >
                {t("marketingAppEngagement.modal.cancel")}
              </Button>
            </div>
          </form>
        </DialogContent>
      </Dialog>
    </div>
  );
}
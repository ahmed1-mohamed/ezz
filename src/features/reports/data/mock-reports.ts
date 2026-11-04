import { PerformanceReportsResponse } from "../types";

export const MOCK_REPORTS_DATA: PerformanceReportsResponse = {
  stats: {
    total_leads: 13,
    won_deals: 0,
    conversion_rate: 0,
    reservations: 1,
    contracts: 4,
    revenue: 7999999975,
    commission: 0,
    currency: "EGP",
  },
  stages: [
    { stage: "new", label_en: "New", label_ar: "جديد", count: 8 },
    { stage: "contacted", label_en: "Contacted", label_ar: "تم التواصل", count: 2 },
    { stage: "qualified", label_en: "Qualified", label_ar: "مؤهل", count: 0 },
    { stage: "meeting", label_en: "Meeting", label_ar: "اجتماع", count: 2 },
    { stage: "viewing", label_en: "Viewing", label_ar: "معاينة", count: 0 },
    { stage: "negotiation", label_en: "Negotiation", label_ar: "تفاوض", count: 0 },
    { stage: "reserved", label_en: "Reserved", label_ar: "محجوز", count: 1 },
    { stage: "contract", label_en: "Contract", label_ar: "عقد", count: 0 },
    { stage: "won", label_en: "Won", label_ar: "تم الفوز", count: 0 },
    { stage: "lost", label_en: "Lost", label_ar: "خسارة", count: 0 },
  ],
};

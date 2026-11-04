import { FollowUp } from "../types";

export const MOCK_FOLLOW_UPS: FollowUp[] = [
  {
    id: 1,
    customer_name: "Muaz Nasr",
    phone: "+201154285418",
    scheduled_at: "2026-07-29T19:10:00Z",
    note_ar: "متابعة مجدولة",
    note_en: "Scheduled follow-up",
    type: "call",
    status: "overdue",
    lead_id: 13,
  },
  {
    id: 2,
    customer_name: "Muaz Nasr",
    phone: "+201154285418",
    scheduled_at: "2026-08-06T19:24:00Z",
    note_ar: "متابعة مجدولة",
    note_en: "Scheduled follow-up",
    type: "call",
    status: "overdue",
    lead_id: 13,
  },
  {
    id: 3,
    customer_name: "معاذ احمد",
    phone: "01154285417",
    scheduled_at: "2026-08-06T19:58:00Z",
    note_ar: "متابعة مجدولة",
    note_en: "Scheduled follow-up",
    type: "call",
    status: "overdue",
    lead_id: 11,
  },
];
export type FollowUpStatus = "overdue" | "today" | "upcoming" | "completed";
export type FollowUpType = "call" | "meeting" | "whatsapp" | "email" | "general";

export interface FollowUp {
  id: string | number;
  customer_name: string;
  phone?: string | null;
  scheduled_at: string;
  note_en?: string;
  note_ar?: string;
  type: FollowUpType;
  status: FollowUpStatus;
  lead_id?: string | number;
  assigned_to?: string | null;
}

export interface FollowUpsResponse {
  data: FollowUp[];
  overdue_count: number;
  today_count: number;
  upcoming_count: number;
}

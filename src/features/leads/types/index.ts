export type LeadStatus =
  | "all"
  | "new"
  | "contacted"
  | "qualified"
  | "meeting"
  | "viewing"
  | "negotiation"
  | "reserved"
  | "contract"
  | "won"
  | "lost";

export type LeadPriority = "low" | "medium" | "high";

export interface Lead {
  id: string | number;
  code: string;
  customer_name: string;
  phone: string;
  email?: string | null;
  project_name?: string | null;
  unit?: string | null;
  budget?: string | null;
  source: string;
  assigned_to?: string | null;
  status: LeadStatus;
  priority: LeadPriority;
  tags?: string[];
  created_at: string;
}

export interface LeadsFilterParams {
  search?: string;
  status?: LeadStatus;
  page?: number;
  per_page?: number;
}

export interface LeadsResponse {
  data: Lead[];
  total: number;
  page: number;
  per_page: number;
  total_pages: number;
}

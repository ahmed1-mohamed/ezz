export type QuotationStatus = "all" | "draft" | "sent" | "accepted" | "rejected";

export interface Quotation {
  id: string | number;
  code: string;
  customer_name: string;
  unit: string;
  project_name?: string | null;
  net_price: string | number;
  currency?: string;
  status: QuotationStatus;
  created_at: string;
  lead_id?: string | number;
}

export interface QuotationsFilterParams {
  search?: string;
  status?: QuotationStatus;
  page?: number;
  per_page?: number;
}

export interface QuotationsResponse {
  data: Quotation[];
  total: number;
  page: number;
  per_page: number;
  total_pages: number;
}
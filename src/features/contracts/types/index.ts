export type ContractStatus = "all" | "draft" | "sent" | "signed" | "cancelled";

export interface Contract {
  id: string | number;
  code: string;
  customer_name: string;
  unit: string;
  project_name?: string | null;
  value: string | number;
  currency?: string;
  status: ContractStatus;
  created_at: string;
  lead_id?: string | number;
}

export interface ContractsFilterParams {
  search?: string;
  status?: ContractStatus;
  page?: number;
  per_page?: number;
}

export interface ContractsResponse {
  data: Contract[];
  total: number;
  page: number;
  per_page: number;
  total_pages: number;
}
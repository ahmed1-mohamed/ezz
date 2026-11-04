export interface ReportsStats {
  total_leads: number;
  won_deals: number;
  conversion_rate: number; // e.g. 0 (%)
  reservations: number;
  contracts: number;
  revenue: number;
  commission: number;
  currency: string;
}

export interface StageCount {
  stage: string;
  label_en: string;
  label_ar: string;
  count: number;
}

export interface PerformanceReportsResponse {
  stats: ReportsStats;
  stages: StageCount[];
}

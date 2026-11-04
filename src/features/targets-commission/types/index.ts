export interface RepTargetRow {
  rep_id: string | number | null; // null for default (all team)
  name: string;
  role?: string;
  is_default?: boolean;
  subtitle?: string;
  target: number | "";
  comm_rate: number | ""; // percentage e.g. 2.5%
  achieved: number;
  percentage?: number | null; // achieved / target * 100
  earned: number; // achieved * (comm_rate / 100)
  currency?: string;
}

export interface TargetsCommissionMonthData {
  month: string; // e.g. "2026-08"
  month_label: string; // e.g. "August 2026"
  currency: string;
  default_target: RepTargetRow;
  reps: RepTargetRow[];
  total_target: number;
  total_achieved: number;
  total_commission: number;
}

export interface SaveTargetsPayload {
  month: string;
  default_target: {
    target: number;
    comm_rate: number;
  };
  reps: {
    rep_id: string | number;
    target: number;
    comm_rate: number;
  }[];
}

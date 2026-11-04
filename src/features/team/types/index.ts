export interface RepresentativeStats {
  leads: number;
  won: number;
  contracts: number;
  revenue: number;
  currency: string;
}

export interface RepresentativeTarget {
  target_amount: number;
  current_amount: number;
  percentage: number;
}

export interface Representative {
  id: string | number;
  name: string;
  role: string; // e.g. "Sales Director", "Sales Rep", "Consultant"
  commission: number;
  currency: string;
  stats: RepresentativeStats;
  target?: RepresentativeTarget | null;
}

export interface TeamOverviewStats {
  leads: number;
  won: number;
  contracts: number;
  revenue: number;
  currency: string;
}

export interface TeamResponse {
  overview: TeamOverviewStats;
  representatives: Representative[];
}

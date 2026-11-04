export interface Campaign {
  id: string | number;
  campaign_name?: string;
  name?: string;
  audience?: string;
  audience_segment?: string;
  platform?: string;
  channel?: string;
  status?: any;
  sent?: number;
  received?: number;
  opened?: number;
  read?: number;
  failed?: number;
  date?: string;
  created_at?: string;
  type?: string;
  content?: any;
}

export type CampaignsType = "sms" | "email" | "notification";

export interface CampaignsTableProps {
  campaigns: Campaign[];
  isLoadingCampaigns: boolean;
  type: CampaignsType;
  handleToggleStatus: (id: string | number, status: any) => Promise<void> | void;
  handleView?: (id: string | number) => void;
  handleEdit?: (id: string | number) => void;
  handleDelete?: (id: string | number) => void;
}

export interface ActivityLogResponse {
  id?: number;
  log_id?: number;
  user_id?: number;
  user_name?: string;
  user?: {
    id: number;
    name: string;
    email: string;
  };
  level?: string; // "Warning", "Error", "Info"
  category?: string; // "integration", "whatsapp_no", "phone_call", "auth", "payment", "system"
  action?: string;
  entity_type?: string;
  entity_id?: number | string;
  event?: string;
  message?: string;
  method?: string;
  url?: string;
  source?: string;
  old_values?: Record<string, unknown> | null;
  new_values?: Record<string, unknown> | null;
  user_type?: string;
  additional_info?: Record<string, any> | null;
  created_at?: string;
  time?: string;
  ip_address?: string;
  user_agent?: string;
}

export interface ActivityLogItem {
  id: number;
  time: string;
  level: "Warning" | "Error" | "Info" | "Debug" | string;
  category: string;
  event: string;
  urlOrMethod?: string;
  sourceUser: string;
  ipAddress: string;
  raw?: ActivityLogResponse;
}

export interface Activity {
  id: number;
  userId: number;
  user: string;
  action: string;
  entity: string;
  description: string;
  dateTime: string;
  ipAddress: string;
}


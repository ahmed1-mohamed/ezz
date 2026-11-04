export interface ReservationLog {
  status?: string | null;
  time?: string | null;
  admin?: string | null;
}

export interface Booking {
  id: number;
  bookingNumber: string;
  status: string;
  status_type: string;
  last_log: ReservationLog | null;

  user_name: string;
  user_email?: string;
  user_phone?: string;
  user_id?: number;

  project_name: string;
  project_id?: number;
  property_name: string;
  property_id?: number;
  developer_name?: string;
  developer_id?: number;

  price?: string;
  price_after_discount?: string;
  country: string;
  currency?: string;

  reservation_date: string;
  expiry_date: string;
  reservation_status_type: string;
  last_status: string;
  types: string;

  comments?: string | null;
  reservation_fee?: string;
  reservation_status?: string;
  service_fee?: string;
  total_payment?: string;
  updated_at?: string;
  vat?: string;

  payment_plan?: {
    payment_plan_id?: number;
    name?: string;
    description?: string;
  };
  raw?: any;
}

export interface ReservationsApiResponse {
  status?: boolean;
  message?: string;
  data?: any;
  items?: any[];
  current_page?: number;
  last_page?: number;
  per_page?: number;
  total?: number;
}


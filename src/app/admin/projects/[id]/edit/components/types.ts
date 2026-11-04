export type TabKey =
  | "basic_info"
  | "location"
  | "units_pricing"
  | "amenities"
  | "payment_plans"
  | "milestones"
  | "buildings"
  | "media";

export interface ProjectFormValues {
  project_name: string;
  developer_id: string;
  project_type: string;
  status: string;
  currency: string;
  description: string;
  total_units: string;
  available_units: string;
  project_size: string;
  launch_date: string;
  completion_date: string;
  min_price: string;
  max_price: string;
  price_sq_min: string;
  price_sq_max: string;
  city_id: string;
  area_id: string;
  landmark: string;
  google_map_link: string;
  latitude: number;
  longitude: number;
  north_side: string;
  south_side: string;
  east_side: string;
  west_side: string;
  slug: string;
  meta_title: string;
  meta_description: string;
  permit_no?: string;
  phase?: string;
  barcode?: string;
  location_description?: string;
}
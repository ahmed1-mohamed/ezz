export type TabKey =
  | "basic_info"
  | "professional"
  | "specializations"
  | "pricing";

export interface CertificationItem {
  cert_name: string;
}

export interface ExpertFormValues {
  image: File | null;
  display_name: string;
  title: string;
  email: string;
  phone_number: string;
  bio: string;
  status: string;
  podcast: boolean;
  years_experience: number | "";
  website: string;
  linkedin: string;
  currency: string;
  starting_from: number | "";
  rate_per_30min_cents: number | "";
  languages: number[];
  categories: number[];
  countries: number[];
  certifications: CertificationItem[];
}

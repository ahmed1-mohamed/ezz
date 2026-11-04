export interface Certifications {
  cert_name?: string;
}

export interface ExpertFormData {
  image?: File | null;
  email: string;
  phone_number: string;
  display_name: string;
  title?: string;
  bio?: string;
  years_experience?: number | "";
  certifications?: Certifications[];
  website?: string;
  linkedin?: string;
  languages: (string | number)[];
  categories: number[];
  countries: number[];
  podcast?: boolean;
}

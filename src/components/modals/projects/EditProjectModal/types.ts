export interface EditProjectFormValues {
  project_name: string;
  status: string;
  project_type: string;
  total_units: string;
  available_units: string;
  launch_date: string;
  completion_date: string;
  currency: string;
  project_size: string;
  description: string;
  developer_id: string;
  slug?: string;
  meta_title?: string;
  meta_description?: string;
}

export interface EditProjectModalProps {
  isOpen: boolean;
  onClose: () => void;
  projectId: number | undefined;
}

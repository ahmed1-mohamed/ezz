export interface MediaItem {
  file?: File;
  originalFile?: File;
  description: string;
  is_primary: boolean;
  my_order: boolean;
  preview: string;
  isProcessed: boolean;
  media_type: "image" | "video" | "floor_plan" | "3D_tour";
  media_url?: string;
  originalSize?: number;
  compressedSize?: number;
  resizedWidth?: number;
  resizedHeight?: number;
}

export interface ProcessingConfig {
  enabled: boolean;
  imageSize: { width: number; height: number };
  maxSizeMB: number;
  quality: number;
  watermarkEnabled: boolean;
  watermarkOpacity: number;
  watermarkPosition:
  | "top-left"
  | "top-right"
  | "bottom-left"
  | "bottom-right"
  | "center";
  maintainAspectRatio: boolean;
  watermarkSize: number;
}

export interface AddProjectMediaModalProps {
  isOpen: boolean;
  onClose: () => void;
  projectId: number;
}

/** Client/API validation errors for the add-media form. `descriptions` is keyed by media item index. */
export interface MediaFormErrors {
  files?: string;
  videoLink?: string;
  descriptions?: Record<number, string>;
  general?: string;
}

export const MEDIA_DESCRIPTION_MAX_LENGTH = 2000;
/** Limit on the original file; images are resized and compressed to well under this before upload. */
export const MEDIA_MAX_FILE_SIZE_MB = 20;

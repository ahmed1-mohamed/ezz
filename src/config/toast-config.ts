import { toast } from "sonner";
import { extractErrorMessage } from "@/lib/utils";

/**
 * Shared id for API error toasts: the global request handler and forms both use it, so a form's
 * more specific message replaces the generic one instead of stacking a second toast.
 */
export const API_ERROR_TOAST_ID = "app-api-error-toast";

export const toastConfig = {
  duration: {
    short: 2000,
    medium: 3000,
    long: 5000,
  },
  position: "top-right" as const,
};

export const showSuccess = (title: string, description?: string) => {
  toast.success(title, {
    description,
    duration: toastConfig.duration.medium,
    position: toastConfig.position,
    richColors: true,
    closeButton: true,
  });
};

export const showError = (titleOrError: unknown, description?: string) => {
  const cleanMessage =
    typeof titleOrError === "string"
      ? extractErrorMessage({ message: titleOrError })
      : extractErrorMessage(titleOrError, "Operation failed");

  toast.error(cleanMessage, {
    duration: toastConfig.duration.medium,
    position: toastConfig.position,
    richColors: true,
    closeButton: true,
    id: "app-global-error-toast",
  });
};

export const showWarning = (title: string, description?: string) => {
  toast.warning(title, {
    description,
    duration: toastConfig.duration.medium,
    position: toastConfig.position,
    richColors: true,
    closeButton: true,
  });
};

export const showInfo = (title: string, description?: string) => {
  toast.info(title, {
    description,
    duration: toastConfig.duration.medium,
    position: toastConfig.position,
    richColors: true,
    closeButton: true,
  });
};

export const showPromise = <T>(
  promise: Promise<T>,
  {
    loading,
    success,
    error,
  }: {
    loading: string;
    success: (data: T) => string;
    error: (error: unknown) => string;
  }
) => {
  return toast.promise(promise, {
    loading,
    success: (data) => success(data),
    error: (error) => error(error),
  });
};

export const toastMessages = {
  auth: {
    loginSuccess: "Welcome back! Login successful.",
    loginError: "Invalid credentials. Please try again.",
    logoutSuccess: "You have been logged out successfully.",
    sessionExpired: "Your session has expired. Please log in again.",
    unauthorized: "You are not authorized to perform this action.",
  },
  ads: {
    createSuccess: "Advertisement created successfully!",
    createError: "Failed to create advertisement. Please try again.",
    updateSuccess: "Advertisement updated successfully!",
    updateError: "Failed to update advertisement. Please try again.",
    deleteSuccess: "Advertisement deleted successfully!",
    deleteError: "Failed to delete advertisement. Please try again.",
    statusToggle: (status: string) => `Ad ${status} successfully!`,
  },
  general: {
    saved: "Changes saved successfully!",
    savedError: "Failed to save changes. Please try again.",
    deleted: "Item deleted successfully!",
    deletedError: "Failed to delete item. Please try again.",
    loaded: "Data loaded successfully!",
    loadedError: "Failed to load data. Please try again.",
    networkError: "Network error. Please check your connection.",
    serverError: "Server error. Please try again later.",
  },
};
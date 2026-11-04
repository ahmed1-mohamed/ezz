import { AlertCircle } from "lucide-react";
import { cn } from "@/lib/utils";

interface FieldErrorProps {
  id?: string;
  message?: string;
  className?: string;
}

/** Validation message shown under an input. Renders nothing when there is no message. */
export function FieldError({ id, message, className }: FieldErrorProps) {
  if (!message) return null;
  return (
    <p id={id} role="alert" data-field-error="" className={cn("text-xs text-red-500 mt-1 text-start", className)}>
      {message}
    </p>
  );
}

/** Banner for a form-level error (e.g. an API error not tied to a single field). */
export function FormErrorAlert({ message, className }: { message?: string; className?: string }) {
  if (!message) return null;
  return (
    <div
      role="alert"
      data-form-error=""
      className={cn(
        "flex items-start gap-2 rounded-lg border border-red-200 bg-red-50 px-3 py-2.5 text-sm text-red-700 text-start dark:border-red-900/60 dark:bg-red-950/40 dark:text-red-300",
        className
      )}
    >
      <AlertCircle className="h-4 w-4 mt-0.5 shrink-0" />
      <span>{message}</span>
    </div>
  );
}

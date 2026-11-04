import React from "react";
import { cn } from "@/lib/utils";

export interface InputProps extends React.ComponentProps<"input"> {
  error?: boolean;
}
const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({ className, type, error, ...props }, ref) => {
    return (
      <input
        type={type}
        className={cn(
          "flex h-10 w-full rounded-[8px] border border-[#E5E7EB] bg-[#F9FAFB] px-3 py-2.5 text-base transition-colors file:border-0 file:bg-transparent file:text-sm file:font-medium file:text-foreground placeholder:text-[#6A7282] placeholder:text-[14px] placeholder:font-[400] focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50 md:text-sm",
          "autofill:bg-[#F9FAFB] autofill:text-white",
          "dark:bg-background dark:border-border dark:text-white dark:placeholder:text-white",
          "dark:autofill:bg-background dark:autofill:shadow-[inset_0_0_0px_1000px_var(--background)] dark:autofill:![-webkit-text-fill-color:white]",
          className,
          error && "border-red-500 dark:border-red-500 focus-visible:ring-red-500"
        )}
        ref={ref}
        aria-invalid={error || undefined}
        {...props}
      />
    );
  }
);

Input.displayName = "Input";

export { Input };

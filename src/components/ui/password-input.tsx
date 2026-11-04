import * as React from "react";
import { cn } from "@/lib/utils";
import { Input } from "@/components/ui/input";

interface PasswordInputProps extends React.ComponentProps<"input"> {
    error?: boolean;
}

const PasswordInput = React.forwardRef<HTMLInputElement, PasswordInputProps>(
    ({ className, error, ...props }, ref) => {
        return (
            <div className="relative">
                <Input
                    type="password"
                    className={cn(
                        "pe-10",
                        className
                    )}
                    error={error}
                    ref={ref}
                    {...props}
                />
            </div>
        );
    }
);

PasswordInput.displayName = "PasswordInput";

export { PasswordInput };
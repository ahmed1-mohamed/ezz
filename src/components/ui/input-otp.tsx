"use client";

import * as React from "react";
import { OTPInput, OTPInputContext } from "input-otp";
import { Minus } from "lucide-react";
import { cn } from "@/lib/utils";

const InputOTP = React.forwardRef<
  React.ElementRef<typeof OTPInput>,
  React.ComponentPropsWithoutRef<typeof OTPInput>
>(({ className, containerClassName, dir = "ltr", ...props }, ref) => (
  <OTPInput
    ref={ref}
    dir={dir}
    containerClassName={cn(
      "flex items-center gap-2 has-[:disabled]:opacity-50 [direction:ltr]",
      containerClassName
    )}
    className={cn("disabled:cursor-not-allowed [direction:ltr]", className)}
    autoFocus
    {...props}
  />
));

InputOTP.displayName = "InputOTP";

const InputOTPGroup = React.forwardRef<
  React.ElementRef<"div">,
  React.ComponentPropsWithoutRef<"div">
>(({ className, dir = "ltr", ...props }, ref) => (
  <div ref={ref} dir={dir} className={cn("flex items-center [direction:ltr]", className)} {...props} />
));
InputOTPGroup.displayName = "InputOTPGroup";

const InputOTPSlot = React.forwardRef<
  React.ElementRef<"div">,
  React.ComponentPropsWithoutRef<"div"> & { index: number }
>(({ index, className, dir = "ltr", ...props }, ref) => {
  const inputOTPContext = React.useContext(OTPInputContext);
  const { char, hasFakeCaret, isActive } = inputOTPContext.slots[index];

  const [showCaret, setShowCaret] = React.useState(hasFakeCaret);

  React.useEffect(() => {
    const interval = setInterval(() => {
      setShowCaret((prev) => !prev);
    }, 500);
    return () => clearInterval(interval);
  }, []);

  return (
    <div
      ref={ref}
      dir={dir}
      className={cn(
        "relative flex h-16 w-12 bg-[#F4F5F6] font-semibold items-center justify-center text-2xl transition-all first:rounded-l-md last:rounded-r-md dark:bg-background dark:text-white [direction:ltr]",
        isActive
          ? "z-10 bg-light ring-1 ring-[#E6E8EC] border border-input dark:ring-border dark:border-border"
          : "border-none",
        className
      )}
      {...props}
    >
      {char}
      {hasFakeCaret && showCaret && (
        <div className="pointer-events-none absolute inset-0 flex items-center justify-center">
          <div
            className={cn(
              "h-8 w-[2px] rounded-[1px] bg-[#23262F] dark:bg-white",
              "transition-opacity duration-500 ease-in-out",
              showCaret ? "opacity-100" : "opacity-0"
            )}
          />
        </div>
      )}
    </div>
  );
});
InputOTPSlot.displayName = "InputOTPSlot";

const InputOTPSeparator = React.forwardRef<
  React.ElementRef<"div">,
  React.ComponentPropsWithoutRef<"div">
>(({ ...props }, ref) => (
  <div ref={ref} role="separator" {...props}>
    <Minus />
  </div>
));
InputOTPSeparator.displayName = "InputOTPSeparator";

export { InputOTP, InputOTPGroup, InputOTPSlot, InputOTPSeparator };

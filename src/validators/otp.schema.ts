import { z } from "zod";

export function useOtpSchema() {
  const otpSchema = z.object({
    otp: z
      .string()
      .trim()
      .min(1, { message: 'validation.required' })
      .length(6, { message: 'validation.otp_invalid_length' })
      .regex(/^\d+$/, { message: 'validation.otp_numeric' }),

    email: z.string().optional()
  });

  return { otpSchema };
}

export type OtpSchema = z.infer<ReturnType<typeof useOtpSchema>["otpSchema"]>;

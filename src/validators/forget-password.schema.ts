import { z } from "zod"

export function useForgetPasswordSchema() {

    const forgetPasswordSchema = z
        .object({
            email: z.string()
                .trim()
                .min(1, { message: 'validation.required' })
                .max(255, { message: 'validation.email_invalid' })
                .email({ message: 'validation.email_invalid' })
        })

    return { forgetPasswordSchema }
}

export type ForgetPasswordSchema = z.infer<ReturnType<typeof useForgetPasswordSchema>["forgetPasswordSchema"]>;
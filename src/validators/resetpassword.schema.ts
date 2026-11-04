import { z } from 'zod';
import { newPasswordRule } from './admin/passwordSchema';

export function useResetPasswordSchema() {
    const resetpasswordSchema = z.object({
        reset_token: z.string().optional(),
        phone_number: z.string().optional(),
        email: z.string().optional(),
        password: newPasswordRule,
        password_confirmation: z.string()
            .min(1, { message: 'validation.confirm_password_required' }),
    }).refine((data) => data.password === data.password_confirmation, {
        message: 'validation.passwords_must_match',
        path: ["password_confirmation"],
    });

    return { resetpasswordSchema };
}

export type ResetpasswordSchema = z.infer<ReturnType<typeof useResetPasswordSchema>["resetpasswordSchema"]>;

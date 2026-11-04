import { z } from "zod";
import { userEmailField, userNameField, userPhoneField } from "./create-new-user.schema";

type Translate = (key: string, values?: Record<string, string | number>) => string;

export const getEditNewUserSchema = (t: Translate) =>
  z
    .object({
      first_name: userNameField(t),
      last_name: userNameField(t),
      email: userEmailField(t),
      phone_number: userPhoneField(t),
      role_id: z.union([z.number(), z.string()]).optional(),
      role: z.string().optional(),
      role_name: z.string().optional(),
      role_type: z.string().optional(),
      user_type: z.string().optional(),
      developer_id: z.number().optional(),
      developer_role: z.string().optional(),
      status: z.enum(["active", "inactive", "banned"]).optional(),
      description: z.string().trim().max(2000, t("validation.max_length", { max: 2000 })).optional(),
      profile_picture: z.string().optional(),
    });

export type EditNewUserInput = z.infer<ReturnType<typeof getEditNewUserSchema>>;

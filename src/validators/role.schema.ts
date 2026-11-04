import { z } from "zod";

// Messages are translation keys; the forms translate them when rendering.
const roleFields = {
  role_name: z.string().trim().max(255, "roles.validation.nameMax").optional(),
  role_name_ar: z.string().trim().max(255, "roles.validation.nameMax").optional(),
  role_type: z.string().optional(),
  user_type: z.string().optional(),
  description: z.string().trim().max(2000, "roles.validation.descriptionMax").optional(),
  is_active: z.boolean().optional(),
  permissions: z.any().optional(),
  permission_ids: z.array(z.number()).optional(),
};

export const rolesSchema = z
  .object(roleFields)
  .refine((data) => !!(data.role_name || data.role_name_ar), {
    message: "roles.roleNameRequired",
    path: ["role_name_ar"],
  });

export type RolesFormInput = z.infer<typeof rolesSchema>;

/** Edit form: only the English name is editable, so it is the required one. */
export const editRoleSchema = z.object({
  ...roleFields,
  role_name: z.string().trim()
    .min(1, "roles.roleNameRequired")
    .max(255, "roles.validation.nameMax"),
});

export type EditRoleFormInput = z.infer<typeof editRoleSchema>;

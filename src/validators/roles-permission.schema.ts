import { z } from "zod";

export const createRolesPermissionsSchema = z.object({
  role_id: z.number(),
  permission_ids: z.array(z.number()).optional(),
  permission_id: z.number().optional(),
});

export type CreateRolesPermissionsInput = z.infer<
  typeof createRolesPermissionsSchema
>;

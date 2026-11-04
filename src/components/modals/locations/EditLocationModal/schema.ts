import { z } from "zod";
import { getAddLocationFormSchema } from "../AddLocationModal/schema";

// Editing uses the same fields and rules as creating a location.
export const getEditLocationFormSchema = (t: any) => getAddLocationFormSchema(t);

export type EditLocationFormInput = z.infer<ReturnType<typeof getEditLocationFormSchema>>;

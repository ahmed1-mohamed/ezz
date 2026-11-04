import { z } from "zod";

// Messages are translation keys; the forms translate them when rendering.
export const citySchema = z.object({
  name: z.string().trim()
    .min(1, "validation.required")
    .max(255, "cities.validation.nameMax"),
  state_id: z.number({ message: "cities.validation.stateRequired" }).min(1, "cities.validation.stateRequired"),
  country_id: z.number({ message: "cities.validation.countryRequired" }).min(1, "cities.validation.countryRequired"),
});

export type CityInput = z.infer<typeof citySchema>;

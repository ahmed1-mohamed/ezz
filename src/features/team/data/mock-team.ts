import { TeamResponse } from "../types";

export const MOCK_TEAM_DATA: TeamResponse = {
  overview: {
    leads: 0,
    won: 0,
    contracts: 0,
    revenue: 0,
    currency: "EGP",
  },
  representatives: [
    {
      id: 1,
      name: "نادين معاذ",
      role: "Sales Director",
      commission: 0,
      currency: "EGP",
      stats: {
        leads: 0,
        won: 0,
        contracts: 0,
        revenue: 0,
        currency: "EGP",
      },
      target: null, // "no target"
    },
  ],
};

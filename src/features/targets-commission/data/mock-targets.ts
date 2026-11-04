import { TargetsCommissionMonthData } from "../types";

export const MOCK_TARGETS_DATA: TargetsCommissionMonthData = {
  month: "2026-08",
  month_label: "August 2026",
  currency: "EGP",
  default_target: {
    rep_id: null,
    name: "الافتراضي (كل الفريق)",
    subtitle: "Applies when no personal target",
    is_default: true,
    target: "",
    comm_rate: 0,
    achieved: 0,
    percentage: null,
    earned: 0,
    currency: "EGP",
  },
  reps: [
    {
      rep_id: 1,
      name: "نادين معاذ",
      role: "Sales Director",
      is_default: false,
      target: 0,
      comm_rate: 0,
      achieved: 0,
      percentage: null,
      earned: 0,
      currency: "EGP",
    },
  ],
  total_target: 0,
  total_achieved: 0,
  total_commission: 0,
};

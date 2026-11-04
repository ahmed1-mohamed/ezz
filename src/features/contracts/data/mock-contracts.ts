import { Contract } from "../types";

export const MOCK_CONTRACTS: Contract[] = [
  {
    id: 4,
    code: "CTR-0004",
    customer_name: "Muaz Nasr",
    unit: "Celesto 4",
    project_name: "Celesto 4",
    value: "896,448 AED",
    status: "draft",
    created_at: "2026-08-08T12:00:00Z",
  },
  {
    id: 3,
    code: "CTR-0003",
    customer_name: "Muaz Nasr",
    unit: "Celesto 4",
    project_name: "Celesto 4",
    value: "896,448 AED",
    status: "draft",
    created_at: "2026-08-05T15:30:00Z",
  },
  {
    id: 2,
    code: "CTR-0002",
    customer_name: "معاذ احمد",
    unit: "DIAA1/SD165/C053X02",
    project_name: "DAMAC ISLANDS 2 (Antigua 1)",
    value: "5,312,000 AED",
    status: "signed",
    created_at: "2026-08-05T10:15:00Z",
  },
  {
    id: 1,
    code: "CTR-0001",
    customer_name: "عبد الحميد",
    unit: "A وحدة",
    project_name: null,
    value: "7,999,999,975 USD",
    status: "sent",
    created_at: "2026-07-26T09:00:00Z",
  },
];

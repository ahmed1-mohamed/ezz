import { Quotation } from "../types";

export const MOCK_QUOTATIONS: Quotation[] = [
  {
    id: 4,
    code: "Q-0004",
    customer_name: "Muaz Nasr",
    unit: "Celesto 4",
    project_name: "Celesto 4",
    net_price: "896,448 AED",
    status: "draft",
    created_at: "2026-08-08T12:00:00Z",
  },
  {
    id: 3,
    code: "Q-0003",
    customer_name: "Muaz Nasr",
    unit: "Celesto 4",
    project_name: "Celesto 4",
    net_price: "896,448 AED",
    status: "draft",
    created_at: "2026-08-05T15:30:00Z",
  },
  {
    id: 2,
    code: "Q-0002",
    customer_name: "معاذ احمد",
    unit: "DIAA1/SD165/C053X02",
    project_name: "DAMAC ISLANDS 2 (Antigua 1)",
    net_price: "5,312,000 AED",
    status: "sent",
    created_at: "2026-08-05T10:15:00Z",
  },
  {
    id: 1,
    code: "Q-0001",
    customer_name: "عبد الحميد",
    unit: "A وحدة",
    project_name: null,
    net_price: "7,999,999,975 USD",
    status: "sent",
    created_at: "2026-07-26T09:00:00Z",
  },
];

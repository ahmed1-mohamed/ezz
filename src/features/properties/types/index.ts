export interface Property {
  id: number;
  unitNumber: string;
  type: string;
  area: string;
  size: string;
  price: string;
  property_name: string;
  ownerName: string;
  status: "Reserved" | "Available";
  listingStatus: string;
}

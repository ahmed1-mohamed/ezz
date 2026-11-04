import type { Metadata } from "next";
import AllBooking from "@/components/dashboardExperts/Booking/AllBooking";

export const metadata: Metadata = {
  title: "My Bookings",
  description: "View and manage all your client bookings and consultation appointments.",
};

export default function page() {
  return (
    <AllBooking />
  );
}

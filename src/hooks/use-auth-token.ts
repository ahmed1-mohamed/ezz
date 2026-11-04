import { useSession } from "next-auth/react";

export function useAuthToken() {
  const { data: session, status } = useSession();

  return {
    token: session?.user?.accessToken ?? null,
    loading: status === "loading",
    session,
  };
}
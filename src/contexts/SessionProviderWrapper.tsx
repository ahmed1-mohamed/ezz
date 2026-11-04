"use client";

import { createContext, useContext, ReactNode } from "react";
import { useSession } from "next-auth/react";

interface SessionContextType {
  token?: string;
  userId?: string;
  expertId?: number;
  roleName?: string;
  userType?: string;
  userName?: string;
  email?: string;
  expiresAt?: number
}

const SessionContext = createContext<SessionContextType>({});

export const useToken = () => useContext(SessionContext);

export const SessionProviderWrapper = ({ children }: { children: ReactNode }) => {
  const { data: session } = useSession();

  const token = session?.user?.accessToken;
  const userId = session?.user?.id;
  const expertId = session?.user?.expert_id;
  const roleName = session?.user?.role_name;
  const userType = session?.user?.user_type || session?.user?.role_name?.toLowerCase();
  const userName = session?.user?.name;
  const email = session?.user?.email;
  const expiresAt = session?.user?.expires_at;

  return (
    <SessionContext.Provider
      value={{
        token,
        userId,
        expertId,
        roleName,
        userType,
        userName,
        email,
        expiresAt,
      }}
    >
      {children}
    </SessionContext.Provider>
  );
};
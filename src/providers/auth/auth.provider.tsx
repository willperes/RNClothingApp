import React, { createContext, useContext } from "react";

import { useGetUserDetails } from "@/domain/user/hooks/get-user-details.hook";
import { UserDetails } from "@/domain/user/models/user-details.model";

export interface AuthContextType {
  currentUser: UserDetails | null;
}

export const AuthContext = createContext<AuthContextType>({
  currentUser: null,
});

export function AuthProvider({ children }: { children: React.ReactNode }) {
  const { data: userDetails } = useGetUserDetails();

  return (
    <AuthContext.Provider value={{ currentUser: userDetails ?? null }}>
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  const context = useContext(AuthContext);

  if (!context) {
    throw new Error("useAuth must be used within an AuthProvider");
  }

  return useContext(AuthContext);
}

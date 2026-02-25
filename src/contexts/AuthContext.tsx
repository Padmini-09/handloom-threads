import React, { createContext, useContext, useState, ReactNode } from "react";

interface User {
  email: string;
  role: "buyer" | "artisan" | "admin" | "marketing";
}

interface AuthContextType {
  user: User | null;
  login: (email: string, password: string) => boolean;
  signup: (email: string, password: string, role: User["role"]) => boolean;
  logout: () => void;
  isAuthenticated: boolean;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const AuthProvider = ({ children }: { children: ReactNode }) => {
  const [user, setUser] = useState<User | null>(null);

  const login = (email: string, _password: string) => {
    // Mock login — in production use Lovable Cloud auth
    setUser({ email, role: "buyer" });
    return true;
  };

  const signup = (email: string, _password: string, role: User["role"]) => {
    setUser({ email, role });
    return true;
  };

  const logout = () => setUser(null);

  return (
    <AuthContext.Provider value={{ user, login, signup, logout, isAuthenticated: !!user }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const ctx = useContext(AuthContext);
  if (!ctx) throw new Error("useAuth must be used within AuthProvider");
  return ctx;
};

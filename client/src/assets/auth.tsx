import { onAuthStateChanged } from "firebase/auth";
import React, { createContext, useState, useEffect, ReactNode } from "react";
import { auth } from "../firebase/firebase-config";

export const AuthContext = createContext(null);

export const AuthProvider = ({ children }: { children: ReactNode }) => {
  const [User, setUser] = useState<any>({});

  useEffect(() => {
    onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
    });
  }, []);

  return <AuthContext.Provider value={User}>{children}</AuthContext.Provider>;
};

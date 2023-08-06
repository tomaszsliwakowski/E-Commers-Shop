import { User, onAuthStateChanged } from "firebase/auth";
import React, { createContext, useState, useEffect, ReactNode } from "react";
import { auth } from "../firebase/firebase-config";

export const AuthContext = createContext({});

export const AuthProvider = ({ children }: { children: ReactNode }) => {
  const [User, setUser] = useState<User | null>(null);

  useEffect(() => {
    onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
    });
  }, []);

  return (
    <AuthContext.Provider value={User ? User : {}}>
      {children}
    </AuthContext.Provider>
  );
};

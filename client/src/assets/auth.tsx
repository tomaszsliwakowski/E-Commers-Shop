import { onAuthStateChanged } from "firebase/auth";
import React, { createContext, useState, useEffect } from "react";
import { auth } from "../firebase/firebase-config";
import { JsxProps } from "../types/Types";
export const AuthContext = createContext(null);

export const AuthProvider = (props: JsxProps) => {
  const [User, setUser] = useState<any>(null);

  useEffect(() => {
    onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
    });
  }, []);

  return (
    <AuthContext.Provider value={User}>{props.children}</AuthContext.Provider>
  );
};

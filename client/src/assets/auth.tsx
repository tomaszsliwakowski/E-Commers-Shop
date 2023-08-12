import React, { createContext, useState, useEffect, ReactNode } from "react";

import axios from "axios";
import { ServerRoute } from "../routes";

export const AuthContext = createContext({});

export const AuthProvider = ({ children }: { children: ReactNode }) => {
  const [User, setUser] = useState<any>(null);

  useEffect(() => {
    if (!User) {
      axios.get(`${ServerRoute}/profile`).then((res) => {
        setUser(res.data);
        console.log(res.data);
      });
    }
  }, []);

  return (
    <AuthContext.Provider value={{ User, setUser }}>
      {children}
    </AuthContext.Provider>
  );
};

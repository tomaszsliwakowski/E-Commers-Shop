import React, { createContext, useState, useEffect, ReactNode } from "react";

import axios from "axios";
import { ServerRoute } from "../routes";

export interface UserType {
  email: string;
  username: string;
  _id: string;
}

export const AuthContext = createContext({ email: "", username: "", _id: "" });

export const AuthProvider = ({ children }: { children: ReactNode }) => {
  const [User, setUser] = useState<UserType>({
    email: "",
    username: "",
    _id: "",
  });
  useEffect(() => {
    if (User._id === "") {
      axios
        .get(`${ServerRoute}/profile`, { withCredentials: true })
        .then((res) => {
          setUser(res.data);
        });
    }
  }, []);

  return <AuthContext.Provider value={User}>{children}</AuthContext.Provider>;
};

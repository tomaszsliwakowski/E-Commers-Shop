import React, { createContext, useState, useEffect, ReactNode } from "react";

import axios from "axios";
import { ServerRoute } from "../routes";

export interface UserType {
  email: string;
  username: string;
  _id: string;
  orderData?: {
    name: string;
    lastName: string;
    address: string;
    city: string;
    postCode: string;
    phone: string;
  };
}
export interface UserAuth {
  User: UserType;
  setUser: React.Dispatch<React.SetStateAction<UserType>>;
}
export const AuthContext = createContext<UserAuth>({
  User: { email: "", username: "", _id: "" },
  setUser: () => {},
});

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
          if (res.data) {
            setUser(res.data);
          }
        });
    }
  }, [User]);

  return (
    <AuthContext.Provider value={{ User, setUser }}>
      {children}
    </AuthContext.Provider>
  );
};

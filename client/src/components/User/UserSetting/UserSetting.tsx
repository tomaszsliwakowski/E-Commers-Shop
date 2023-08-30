import React, { useContext } from "react";
import styled from "styled-components/macro";
import UserPanel from "../Panel/Panel";
import { Settings } from ".";
import { AuthContext, UserAuth } from "../../../assets/auth";
import AccountData from "./AccountData";
import OrderData from "./OrderData";
import { Layout } from "../UserOrders/UserOrders";

const UserSetting = () => {
  const { User }: UserAuth = useContext(AuthContext);

  return (
    <Layout>
      <UserPanel />
      <Settings>
        <Settings.Title>Ustawienia</Settings.Title>
        <Settings.Title>Dane konta</Settings.Title>
        <AccountData User={User} />
        <Settings.Title>Dane do zamówienia</Settings.Title>
        <OrderData User={User} />
      </Settings>
    </Layout>
  );
};

export default UserSetting;

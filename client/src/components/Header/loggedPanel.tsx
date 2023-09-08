import React from "react";
import { Header } from ".";
import { UserType } from "../../assets/auth";

type Props = {
  User: UserType;
  logout: Function;
};

const LoggedPanel = (props: Props) => {
  const { User, logout } = props;
  return (
    <>
      <Header.DropOpt>
        <Header.UserName>
          {User.username !== "" && User.username !== undefined
            ? User.username.split(" ")[0]
            : null}
        </Header.UserName>
        <Header.Orders href="/E-Commers-Shop/user/orders">
          Zamówienia
        </Header.Orders>
        <Header.AccountSet href="/E-Commers-Shop/user/setting">
          Ustawiania
        </Header.AccountSet>
      </Header.DropOpt>
      <Header.DropOpt>
        <Header.LogOutBtn click={logout}>Wyloguj się</Header.LogOutBtn>
      </Header.DropOpt>
    </>
  );
};

export default LoggedPanel;

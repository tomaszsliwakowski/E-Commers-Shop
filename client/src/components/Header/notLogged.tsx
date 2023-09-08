import React from "react";
import { Header } from ".";
import { LoginRoute, RegisterRoute } from "../../routes";

const NotLogged = () => {
  return (
    <>
      <Header.DropOpt>
        <Header.LoginBtn href={LoginRoute}>Zaloguj</Header.LoginBtn>
      </Header.DropOpt>
      <Header.DropOpt>
        <Header.RegisterBtn href={RegisterRoute}>
          Zarejestruj się
        </Header.RegisterBtn>
      </Header.DropOpt>
    </>
  );
};

export default NotLogged;

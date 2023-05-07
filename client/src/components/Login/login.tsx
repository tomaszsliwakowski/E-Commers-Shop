import React, { useState } from "react";
import Login from ".";
import { LogRegBtn } from "../register&login";
import { RegisterRoute } from "../../routes";
import InfoList from "../register&login/infolist";

const LoginSection = () => {
  const [ShowPass, setShowPass] = useState<boolean>(false);
  return (
    <Login>
      <Login.Panel>
        <Login.Title>Zaloguj się</Login.Title>
        <Login.Form>
          <Login.InputCon>
            <Login.Input type="text" required />
            <Login.InputName>E-mail</Login.InputName>
          </Login.InputCon>
          <Login.InputCon>
            <Login.Input
              type={ShowPass ? "text" : "password"}
              autocomplete="off"
              required
            />
            <Login.InputName>Hasło</Login.InputName>
            <Login.PassShow click={setShowPass}>
              {ShowPass ? "Ukryj" : "Pokaż"}
            </Login.PassShow>
          </Login.InputCon>
          <LogRegBtn>Zaloguj się</LogRegBtn>
        </Login.Form>
      </Login.Panel>
      <Login.Info>
        <Login.InfoReg>
          <Login.Title>Nie masz konta?</Login.Title>
          <Login.RegBtn href={RegisterRoute}>Założ konto</Login.RegBtn>
        </Login.InfoReg>
        <InfoList />
      </Login.Info>
    </Login>
  );
};

export default LoginSection;

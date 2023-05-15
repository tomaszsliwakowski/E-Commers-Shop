import React, { useState } from "react";
import Login from ".";
import { LogRegBtn } from "../register&login";
import { RegisterRoute } from "../../routes";
import InfoList from "../register&login/infolist";

const LoginSection = () => {
  const [ShowPass, setShowPass] = useState<boolean>(false);

  const handleLogin = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const target = e.target;
    //const data = new FormData(target);
    console.log(target);
  };

  return (
    <Login>
      <Login.Panel>
        <Login.Title>Zaloguj się</Login.Title>
        <Login.Form submit={() => handleLogin}>
          <Login.InputCon>
            <Login.Input type="text" required name="email" />
            <Login.InputName>E-mail</Login.InputName>
          </Login.InputCon>
          <Login.InputCon>
            <Login.Input
              type={ShowPass ? "text" : "password"}
              autocomplete="off"
              required
              name="password"
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

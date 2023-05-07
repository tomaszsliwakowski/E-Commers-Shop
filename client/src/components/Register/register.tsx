import React, { useState } from "react";
import Login from "../Login/index";
import { LogRegBtn } from "../register&login";
import { LoginRoute } from "../../routes";
import InfoList from "../register&login/infolist";
import RegisterConsens from ".";

const RegisterSection = () => {
  const [ShowPass, setShowPass] = useState(false);
  return (
    <Login>
      <Login.Panel>
        <Login.Title>Załóż konto</Login.Title>
        <Login.Form>
          <Login.InputCon>
            <Login.Input type="text" autocomplete="off" required />
            <Login.InputName>Imię</Login.InputName>
          </Login.InputCon>
          <Login.InputCon>
            <Login.Input type="text" autocomplete="off" required />
            <Login.InputName>Nazwisko</Login.InputName>
          </Login.InputCon>
          <Login.InputCon>
            <Login.Input type="text" autocomplete="off" required />
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
          <RegisterConsens>
            <RegisterConsens.Title>Zgody formalne</RegisterConsens.Title>
            <RegisterConsens.Container>
              <RegisterConsens.Accept>
                Akceptuj regulamin sklepu
                <RegisterConsens.Checkbox type="checkbox" />
                <RegisterConsens.Mark></RegisterConsens.Mark>
              </RegisterConsens.Accept>
            </RegisterConsens.Container>
          </RegisterConsens>
          <LogRegBtn>Zaloguj się</LogRegBtn>
        </Login.Form>
      </Login.Panel>
      <Login.Info>
        <Login.InfoReg>
          <Login.Title>Masz już konto?</Login.Title>
          <Login.RegBtn href={LoginRoute}>Zaloguj się</Login.RegBtn>
        </Login.InfoReg>
        <InfoList />
      </Login.Info>
    </Login>
  );
};

export default RegisterSection;

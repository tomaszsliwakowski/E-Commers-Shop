import React, { useState, useEffect } from "react";
import Login from ".";
import { LogRegBtn, LogRegError } from "../register&login";
import { RegisterRoute, ServerRoute } from "../../routes";
import InfoList from "../register&login/infolist";
import { useNavigate } from "react-router";
import { FormErrorType, LoginValueType } from "../../types/Types";
import axios from "axios";

const LoginSection = () => {
  const [ShowPass, setShowPass] = useState<boolean>(false);
  const [LoginValues, setLoginValues] = useState<LoginValueType>({
    email: "",
    password: "",
  });
  const [FormError, setFormError] = useState<FormErrorType>({
    email: false,
    password: false,
  });
  const navigate = useNavigate();

  const handleLogin = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!Object.values(LoginValues).includes("false")) {
      login(LoginValues.email, LoginValues.password);
    }
  };

  const login = async (email: string, password: string) => {
    try {
      await axios
        .post(
          `${ServerRoute}/login`,
          { email, password },
          {
            headers: {
              "Content-Type": "application/x-www-form-urlencoded",
            },
            withCredentials: true,
          }
        )
        .then((res) => {
          navigate("/E-Commers-Shop/");
        });
    } catch (error) {
      console.log((error as Error).message);
    }
  };

  const HandleForm = (e: React.ChangeEvent<HTMLInputElement>) => {
    setLoginValues((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const HandleFormError = () => {
    setFormError({
      email: !(LoginValues.email.includes("@") && LoginValues.email.length > 6),
      password: !(LoginValues.password.length > 6),
    });
  };

  return (
    <Login>
      <Login.Panel>
        <Login.Title>Zaloguj się</Login.Title>
        <Login.Form submit={() => handleLogin}>
          <Login.InputCon style="log">
            <Login.Input
              type="text"
              required
              name="email"
              onChange={HandleForm}
            />
            <Login.InputName>E-mail</Login.InputName>
          </Login.InputCon>
          {FormError.email ? (
            <LogRegError>Podaj poprawny email</LogRegError>
          ) : null}
          <Login.InputCon style="log">
            <Login.Input
              type={ShowPass ? "text" : "password"}
              autocomplete="off"
              required
              name="password"
              onChange={HandleForm}
            />
            <Login.InputName>Hasło</Login.InputName>
            <Login.PassShow click={setShowPass}>
              {ShowPass ? "Ukryj" : "Pokaż"}
            </Login.PassShow>
          </Login.InputCon>
          {FormError.password ? (
            <LogRegError>
              {LoginValues.password.length < 1
                ? "Pole nie może być puste"
                : "Hasło musi być dłuższe niż 6 znaków"}
            </LogRegError>
          ) : null}
          <LogRegBtn click={HandleFormError}>Zaloguj się</LogRegBtn>
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

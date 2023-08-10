import React, { useState } from "react";
import Login from "../Login/index";
import { LogRegBtn, LogRegError } from "../register&login";
import { LoginRoute, ServerRoute } from "../../routes";
import InfoList from "../register&login/infolist";
import RegisterConsens from ".";
import { FormErrorTypeReg, RegisterValueType } from "../../types/Types";
import { createUserWithEmailAndPassword, updateProfile } from "firebase/auth";
import { auth } from "../../firebase/firebase-config";
import { useNavigate } from "react-router";
import axios from "axios";

const RegisterSection = () => {
  const [ShowPass, setShowPass] = useState<boolean>(false);
  const [Consens, setConsens] = useState<boolean>(false);
  const [ConsensError, setConsensError] = useState<boolean>(false);
  const [RegisterValues, setRegisterValues] = useState<RegisterValueType>({
    name: "",
    lastname: "",
    email: "",
    password: "",
  });
  const [FormError, setFormError] = useState<FormErrorTypeReg>({
    name: false,
    lastname: false,
    email: false,
    password: false,
  });
  const navigate = useNavigate();

  const HandleForm = (e: React.ChangeEvent<HTMLInputElement>) => {
    setRegisterValues((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const HandleFormError = () => {
    setFormError({
      name: !(RegisterValues.name.length > 0),
      lastname: !(RegisterValues.name.length > 0),
      email: !(
        RegisterValues.email.includes("@") && RegisterValues.email.length > 6
      ),
      password: !(RegisterValues.password.length > 6),
    });
    if (!Consens) {
      setConsensError(true);
    } else {
      setConsensError(false);
    }
  };

  const handleRegister = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!Object.values(RegisterValues).includes("false")) {
      Register(
        RegisterValues.email,
        RegisterValues.password,
        RegisterValues.name,
        RegisterValues.lastname
      );
    }
  };

  const Register = async (
    email: string,
    password: string,
    name: string,
    lastname: string
  ) => {
    try {
      await axios
        .post(
          `${ServerRoute}/register`,
          {
            email,
            password,
            username: `${name} ${lastname}`,
          },
          {
            headers: {
              "Content-Type": "application/x-www-form-urlencoded",
            },
          }
        )
        .then((res) => {
          setRegisterValues({
            name: "",
            lastname: "",
            email: "",
            password: "",
          });
          navigate("/E-Commers-Shop/");
        })
        .catch((err) => console.log(err.message));
    } catch (error) {
      console.log((error as Error).message);
    }
  };

  return (
    <Login>
      <Login.Panel>
        <Login.Title>Załóż konto</Login.Title>
        <Login.Form submit={() => handleRegister}>
          <Login.InputCon style="reg">
            <Login.Input
              type="text"
              autocomplete="off"
              required
              name="name"
              onChange={HandleForm}
            />
            <Login.InputName>Imię</Login.InputName>
          </Login.InputCon>
          {FormError.name ? (
            <LogRegError>Pole nie może być puste</LogRegError>
          ) : null}
          <Login.InputCon style="reg">
            <Login.Input
              type="text"
              autocomplete="off"
              required
              name="lastname"
              onChange={HandleForm}
            />
            <Login.InputName>Nazwisko</Login.InputName>
          </Login.InputCon>
          {FormError.lastname ? (
            <LogRegError>Pole nie może być puste</LogRegError>
          ) : null}
          <Login.InputCon style="reg">
            <Login.Input
              type="text"
              autocomplete="off"
              required
              name="email"
              onChange={HandleForm}
            />
            <Login.InputName>E-mail</Login.InputName>
          </Login.InputCon>
          {FormError.email ? (
            <LogRegError>Podaj poprawny email</LogRegError>
          ) : null}
          <Login.InputCon style="reg">
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
              {RegisterValues.password.length < 1
                ? "Pole nie może być puste"
                : "Hasło musi być dłuższe niż 6 znaków"}
            </LogRegError>
          ) : null}
          <RegisterConsens>
            <RegisterConsens.Title>Zgody formalne</RegisterConsens.Title>
            <RegisterConsens.Container>
              <RegisterConsens.Accept>
                Akceptuj regulamin sklepu
                <RegisterConsens.Checkbox
                  type="checkbox"
                  Checked={Consens}
                  onChange={() => setConsens((prev) => !prev)}
                />
                <RegisterConsens.Mark></RegisterConsens.Mark>
              </RegisterConsens.Accept>
            </RegisterConsens.Container>
          </RegisterConsens>
          {ConsensError ? <LogRegError>Zaznacz zgodę</LogRegError> : null}
          <LogRegBtn click={HandleFormError}>Zarejestruj się</LogRegBtn>
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

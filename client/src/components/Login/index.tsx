import React from "react";
import { FormProps, JsxProps, TsxPropsBoolean } from "../../types/Types";
import {
  Container,
  Panel,
  Info,
  Title,
  Form,
  Input,
  InputName,
  PassShow,
  InputCon,
  InfoReg,
  RegBtn,
} from "./style/loginStyle";

export default function Login(props: JsxProps) {
  return <Container>{props.children}</Container>;
}

Login.Panel = function LoginPanel(props: JsxProps) {
  return <Panel>{props.children}</Panel>;
};

Login.Info = function LoginInfo(props: JsxProps) {
  return <Info>{props.children}</Info>;
};

Login.Title = function LoginTitle(props: JsxProps) {
  return <Title>{props.children}</Title>;
};
Login.Form = function LoginForm(props: FormProps) {
  return <Form onSubmit={props.submit()}>{props.children}</Form>;
};

Login.Input = function LoginInput({ ...restprops }) {
  return <Input {...restprops} />;
};
Login.InputCon = function LoginInputCon(props: JsxProps) {
  return <InputCon>{props.children}</InputCon>;
};

Login.InputName = function LoginInputName(props: JsxProps) {
  return <InputName>{props.children}</InputName>;
};

Login.PassShow = function LoginPassShow(props: TsxPropsBoolean) {
  return (
    <PassShow onClick={() => props.click((prev) => !prev)}>
      {props.children}
    </PassShow>
  );
};
Login.InfoReg = function LoginInfoReg(props: JsxProps) {
  return <InfoReg>{props.children}</InfoReg>;
};

Login.RegBtn = function LoginRegBtn(props: JsxProps) {
  return <RegBtn href={props.href}>{props.children}</RegBtn>;
};

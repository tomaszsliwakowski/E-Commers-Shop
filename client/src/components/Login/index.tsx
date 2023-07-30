import React from "react";
import {
  DivProps,
  FormProps,
  HeadProps,
  HlinkProps,
  SpanProps,
} from "../../types/Types";
import {
  Container,
  Panel,
  Info,
  Title,
  Form,
  Input,
  InputName,
  PassShow,
  InputReg,
  InputLog,
  InfoReg,
  RegBtn,
} from "./style/loginStyle";

export default function Login({ children, ...restprops }: DivProps) {
  return <Container {...restprops}>{children}</Container>;
}

Login.Panel = function LoginPanel({ children, ...restprops }: DivProps) {
  return <Panel {...restprops}>{children}</Panel>;
};

Login.Info = function LoginInfo({ children, ...restprops }: DivProps) {
  return <Info {...restprops}>{children}</Info>;
};

Login.Title = function LoginTitle({ children, ...restprops }: HeadProps) {
  return <Title {...restprops}>{children}</Title>;
};
Login.Form = function LoginForm({
  children,
  submit,
  ...restprops
}: FormProps & { submit: Function }) {
  return (
    <Form {...restprops} onSubmit={submit()}>
      {children}
    </Form>
  );
};

Login.Input = function LoginInput({ ...restprops }) {
  return <Input {...restprops} />;
};
Login.InputCon = function LoginInputCon({
  children,
  style,
  ...restprops
}: DivProps & { style?: string }) {
  return style === "reg" ? (
    <InputReg {...restprops}>{children}</InputReg>
  ) : (
    <InputLog {...restprops}>{children}</InputLog>
  );
};

Login.InputName = function LoginInputName({
  children,
  ...restprops
}: SpanProps) {
  return <InputName {...restprops}>{children}</InputName>;
};

Login.PassShow = function LoginPassShow({
  children,
  click,
  ...restprops
}: SpanProps & { click: React.Dispatch<React.SetStateAction<boolean>> }) {
  return (
    <PassShow {...restprops} onClick={() => click((prev) => !prev)}>
      {children}
    </PassShow>
  );
};
Login.InfoReg = function LoginInfoReg({ children, ...restprops }: DivProps) {
  return <InfoReg {...restprops}>{children}</InfoReg>;
};

Login.RegBtn = function LoginRegBtn({
  children,
  href,
  ...restprops
}: HlinkProps & { href?: string }) {
  return (
    <RegBtn {...restprops} href={href}>
      {children}
    </RegBtn>
  );
};

import React from "react";
import { JsxProps } from "../../types/Types";
import { Container } from "./style/loginStyle";

export default function Login(props: JsxProps) {
  return <Container>{props.children}</Container>;
}

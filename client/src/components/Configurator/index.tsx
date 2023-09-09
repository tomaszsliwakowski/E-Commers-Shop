import React from "react";
import { Container } from "./style/index";
import { DivProps } from "../../types/Types";

export function Configurator({ children, ...restprops }: DivProps) {
  return <Container {...restprops}>{children}</Container>;
}

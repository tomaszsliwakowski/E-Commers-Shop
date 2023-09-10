import React from "react";
import { Container, Title } from "./style/index";
import { DivProps, HeadProps } from "../../types/Types";

export function Configurator({ children, ...restprops }: DivProps) {
  return <Container {...restprops}>{children}</Container>;
}

Configurator.Title = function ConfiguratorTitle({
  children,
  ...restprops
}: HeadProps) {
  return <Title {...restprops}>{children}</Title>;
};

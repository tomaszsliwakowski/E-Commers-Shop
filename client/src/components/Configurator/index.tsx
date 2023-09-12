import React from "react";
import {
  Container,
  Title,
  Components,
  Component,
  LeftPart,
  RightPart,
  Name,
  Image,
} from "./style/index";
import { DivProps, HeadProps, ImgProps } from "../../types/Types";

export function Configurator({ children, ...restprops }: DivProps) {
  return <Container {...restprops}>{children}</Container>;
}

Configurator.Title = function ConfiguratorTitle({
  children,
  ...restprops
}: HeadProps) {
  return <Title {...restprops}>{children}</Title>;
};
Configurator.Components = function ConfiguratorComponents({
  children,
  ...restprops
}: DivProps) {
  return <Components {...restprops}>{children}</Components>;
};
Configurator.Component = function ConfiguratorComponent({
  children,
  ...restprops
}: DivProps) {
  return <Component {...restprops}>{children}</Component>;
};
Configurator.LeftPart = function ConfiguratorLeftPart({
  children,
  ...restprops
}: DivProps) {
  return <LeftPart {...restprops}>{children}</LeftPart>;
};
Configurator.RightPart = function ConfiguratorRightPart({
  children,
  ...restprops
}: DivProps) {
  return <RightPart {...restprops}>{children}</RightPart>;
};
Configurator.Name = function ConfiguratorName({
  children,
  ...restprops
}: HeadProps) {
  return <Name {...restprops}>{children}</Name>;
};
Configurator.Image = function ConfiguratorImage({
  children,
  ...restprops
}: ImgProps) {
  return <Image {...restprops} />;
};

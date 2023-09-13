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
  Summary,
  SumPanel,
  SumBtn,
  SumField,
  SumValue,
  SumCon,
} from "./style/index";
import {
  BtnProps,
  DivProps,
  HeadProps,
  ImgProps,
  SpanProps,
} from "../../types/Types";

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
Configurator.Summary = function ConfiguratorSummary({
  children,
  ...restprops
}: DivProps) {
  return <Summary {...restprops}>{children}</Summary>;
};
Configurator.SumPanel = function ConfiguratorSumPanel({
  children,
  ...restprops
}: DivProps) {
  return <SumPanel {...restprops}>{children}</SumPanel>;
};
Configurator.SumCon = function ConfiguratorSumCon({
  children,
  ...restprops
}: DivProps) {
  return <SumCon {...restprops}>{children}</SumCon>;
};
Configurator.SumField = function ConfiguratorSumField({
  children,
  ...restprops
}: SpanProps) {
  return <SumField {...restprops}>{children}</SumField>;
};
Configurator.SumValue = function ConfiguratorSumValue({
  children,
  ...restprops
}: SpanProps) {
  return <SumValue {...restprops}>{children}</SumValue>;
};
Configurator.SumBtn = function ConfiguratorSumBtn({
  children,
  ...restprops
}: BtnProps) {
  return <SumBtn {...restprops}>{children}</SumBtn>;
};

import React from "react";
import {
  BtnProps,
  DivProps,
  ElProps,
  HeadProps,
  HlinkProps,
  ListProps,
  SpanProps,
} from "../../types/Types";
import {
  Header,
  Logo,
  Out,
  OutBtn,
  Btn,
  Info,
  Title,
  List,
  Element,
  Image,
  Name,
  Error,
} from "./style/reg&logStyle";

export default function LogRegHeader({ children, ...restprops }: DivProps) {
  return <Header {...restprops}>{children}</Header>;
}

LogRegHeader.Logo = function LogRegHeaderLogo({
  children,
  href,
  ...restprops
}: HlinkProps & { href: string }) {
  return (
    <Logo {...restprops} href={href}>
      {children}
    </Logo>
  );
};

export function LogRegOut({ children, ...restprops }: DivProps) {
  return <Out {...restprops}>{children}</Out>;
}

LogRegOut.OutBtn = function LogRegOutBtn({
  children,
  href,
  ...restprops
}: HlinkProps & { href?: string }) {
  return (
    <OutBtn {...restprops} to={href ? href : "/"}>
      {children}
    </OutBtn>
  );
};

export function LogRegBtn({
  children,
  click,
  ...restprops
}: BtnProps & { click: Function }) {
  return <Btn onClick={() => click()}>{children}</Btn>;
}

export function LogRegInfo({ children, ...restprops }: DivProps) {
  return <Info {...restprops}>{children}</Info>;
}

LogRegInfo.Title = function LogRegInfoTitle({
  children,
  ...restprops
}: HeadProps) {
  return <Title {...restprops}>{children}</Title>;
};

LogRegInfo.List = function LogRegInfoList({
  children,
  ...restprops
}: ListProps) {
  return <List {...restprops}>{children}</List>;
};
LogRegInfo.Element = function LogRegInfoElement({
  children,
  ...restprops
}: ElProps) {
  return <Element {...restprops}>{children}</Element>;
};

LogRegInfo.Image = function LogRegInfoImage({ ...restprops }) {
  return <Image {...restprops} />;
};
LogRegInfo.Name = function LogRegInfoName({
  children,
  ...restprops
}: SpanProps) {
  return <Name {...restprops}>{children}</Name>;
};

export function LogRegError({ children, ...restprops }: SpanProps) {
  return <Error {...restprops}>{children}</Error>;
}

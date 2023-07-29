import React from "react";
import {
  DivProps,
  ElProps,
  HeadProps,
  HlinkProps,
  JsxProps,
  ListProps,
  SpanProps,
  TextProps,
} from "../../types/Types";
import {
  Container,
  Top,
  Bottom,
  About,
  Contact,
  Copyright,
  ContactOption,
  List,
  Title,
  Text,
  Link,
} from "./style/footerStyle";

export default function Footer({ children, ...restprops }: DivProps) {
  return <Container>{children}</Container>;
}

Footer.Top = function FooterTop({ children, ...restprops }: DivProps) {
  return <Top>{children}</Top>;
};

Footer.Bottom = function FooterBottom({ children, ...restprops }: DivProps) {
  return <Bottom>{children}</Bottom>;
};

Footer.AboutUs = function FooterAboutsUs({ children, ...restprops }: DivProps) {
  return <About>{children}</About>;
};
Footer.Contact = function FooterContact({ children, ...restprops }: DivProps) {
  return <Contact>{children}</Contact>;
};

Footer.Copyright = function FooterCopyright({
  children,
  ...restprops
}: SpanProps) {
  return <Copyright>{children}</Copyright>;
};

Footer.List = function FooterList({ children, ...restprops }: ListProps) {
  return <List>{children}</List>;
};

Footer.ContactOption = function FooterContactOption({
  children,
  ...restprops
}: ElProps) {
  return <ContactOption>{children}</ContactOption>;
};

Footer.Title = function FooterTitle({ children, ...restprops }: HeadProps) {
  return <Title>{children}</Title>;
};
Footer.Text = function FooterText({ children, ...restprops }: TextProps) {
  return <Text>{children}</Text>;
};

Footer.Link = function FooterLink({
  children,
  href,
  style,
  ...restprops
}: HlinkProps & { style?: string }) {
  return (
    <Link href={href} color={style}>
      {children}
    </Link>
  );
};

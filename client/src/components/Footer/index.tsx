import React from "react";
import {
  DivProps,
  ElProps,
  HeadProps,
  HlinkProps,
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
  return <Container {...restprops}>{children}</Container>;
}

Footer.Top = function FooterTop({ children, ...restprops }: DivProps) {
  return <Top {...restprops}>{children}</Top>;
};

Footer.Bottom = function FooterBottom({ children, ...restprops }: DivProps) {
  return <Bottom {...restprops}>{children}</Bottom>;
};

Footer.AboutUs = function FooterAboutsUs({ children, ...restprops }: DivProps) {
  return <About {...restprops}>{children}</About>;
};
Footer.Contact = function FooterContact({ children, ...restprops }: DivProps) {
  return <Contact {...restprops}>{children}</Contact>;
};

Footer.Copyright = function FooterCopyright({
  children,
  ...restprops
}: SpanProps) {
  return <Copyright {...restprops}>{children}</Copyright>;
};

Footer.List = function FooterList({ children, ...restprops }: ListProps) {
  return <List {...restprops}>{children}</List>;
};

Footer.ContactOption = function FooterContactOption({
  children,
  ...restprops
}: ElProps) {
  return <ContactOption {...restprops}>{children}</ContactOption>;
};

Footer.Title = function FooterTitle({ children, ...restprops }: HeadProps) {
  return <Title {...restprops}>{children}</Title>;
};
Footer.Text = function FooterText({ children, ...restprops }: TextProps) {
  return <Text {...restprops}>{children}</Text>;
};

Footer.Link = function FooterLink({
  children,
  href,
  style,
  ...restprops
}: HlinkProps & { style?: string }) {
  return (
    <Link {...restprops} href={href} color={style}>
      {children}
    </Link>
  );
};

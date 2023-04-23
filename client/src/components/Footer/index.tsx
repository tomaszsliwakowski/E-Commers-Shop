import React from "react";
import { JsxProps } from "../../types/Types";
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

export default function Footer(props: JsxProps) {
  return <Container>{props.children}</Container>;
}

Footer.Top = function FooterTop(props: JsxProps) {
  return <Top>{props.children}</Top>;
};

Footer.Bottom = function FooterBottom(props: JsxProps) {
  return <Bottom>{props.children}</Bottom>;
};

Footer.AboutUs = function FooterAboutsUs(props: JsxProps) {
  return <About>{props.children}</About>;
};
Footer.Contact = function FooterContact(props: JsxProps) {
  return <Contact>{props.children}</Contact>;
};

Footer.Copyright = function FooterCopyright(props: JsxProps) {
  return <Copyright>{props.children}</Copyright>;
};

Footer.List = function FooterList(props: JsxProps) {
  return <List>{props.children}</List>;
};

Footer.ContactOption = function FooterContactOption(props: JsxProps) {
  return <ContactOption>{props.children}</ContactOption>;
};

Footer.Title = function FooterTitle(props: JsxProps) {
  return <Title>{props.children}</Title>;
};
Footer.Text = function FooterText(props: JsxProps) {
  return <Text>{props.children}</Text>;
};

Footer.Link = function FooterLink(props: JsxProps) {
  return (
    <Link href={props.href} color={props.style}>
      {props.children}
    </Link>
  );
};

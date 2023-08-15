import React from "react";
import { DivProps, HlinkProps, SpanProps } from "../../../types/Types";
import {
  Container,
  User,
  Name,
  LinkList,
  LinkEl,
  Icon,
  LinkName,
} from "./style";

export function Panel({ children, ...restprops }: DivProps) {
  return <Container {...restprops}>{children}</Container>;
}

Panel.User = function PanelUser({ children, ...restprops }: DivProps) {
  return <User {...restprops}>{children}</User>;
};

Panel.Name = function PanelName({ children, ...restprops }: SpanProps) {
  return <Name {...restprops}>{children}</Name>;
};
Panel.LinkList = function PanelLinkList({ children, ...restprops }: DivProps) {
  return <LinkList {...restprops}>{children}</LinkList>;
};
Panel.Link = function PanelLink({
  children,
  href,

  ...restprops
}: HlinkProps & { href?: string }) {
  return (
    <LinkEl to={href ? href : ""} {...restprops}>
      {children}
    </LinkEl>
  );
};
Panel.LinkName = function PanelLinkName({ children, ...restprops }: DivProps) {
  return <LinkName {...restprops}>{children}</LinkName>;
};

Panel.Icon = function PanelIcon({ children, ...restprops }: DivProps) {
  return <Icon {...restprops}>{children}</Icon>;
};

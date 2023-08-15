import React from "react";
import { Container, Title } from "./style/index";
import { DivProps, HeadProps } from "../../../types/Types";

export function Orders({ children, ...restprops }: DivProps) {
  return <Container {...restprops}>{children}</Container>;
}

Orders.Title = function OrdersTitle({ children, ...restprops }: HeadProps) {
  return <Title {...restprops}>{children}</Title>;
};

import React from "react";
import {
  Container,
  Title,
  SortPanel,
  SortCon,
  SortTitle,
  SortSelect,
} from "./style/index";
import { DivProps, HeadProps } from "../../../types/Types";

export function Orders({ children, ...restprops }: DivProps) {
  return <Container {...restprops}>{children}</Container>;
}

Orders.Title = function OrdersTitle({ children, ...restprops }: HeadProps) {
  return <Title {...restprops}>{children}</Title>;
};

Orders.SortPanel = function OrdersSortPanel({
  children,
  ...restprops
}: DivProps) {
  return <SortPanel {...restprops}>{children}</SortPanel>;
};
Orders.SortCon = function OrdersSortCon({ children, ...restprops }: DivProps) {
  return <SortCon {...restprops}>{children}</SortCon>;
};
Orders.SortTitle = function OrdersSortTitle({
  children,
  ...restprops
}: HeadProps) {
  return <SortTitle {...restprops}>{children}</SortTitle>;
};
Orders.SortSelect = function OrdersSortSelect({
  children,
  ...restprops
}: DivProps) {
  return <SortSelect {...restprops}>{children}</SortSelect>;
};

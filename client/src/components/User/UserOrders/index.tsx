import React from "react";
import {
  Container,
  Title,
  SortPanel,
  SortCon,
  SortTitle,
  SortSelect,
  SortCheckbox,
  SortShow,
  SortShowOpt,
  SortList,
  List,
} from "./style/index";
import {
  DivProps,
  HeadProps,
  ListProps,
  SpanProps,
} from "../../../types/Types";

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

Orders.SP_Checkbox = function OrdersSP_Checkbox({ ...restprops }) {
  return <SortCheckbox {...restprops} />;
};
Orders.SP_Show = function OrdersSP_Show({ children, ...restprops }: DivProps) {
  return <SortShow {...restprops}>{children}</SortShow>;
};
Orders.SP_ShowOpt = function OrdersSP_ShowOpt({
  children,

  ...restprops
}: SpanProps) {
  return <SortShowOpt {...restprops}>{children}</SortShowOpt>;
};
Orders.SP_List = function OrdersSP_List({ children, ...restprops }: ListProps) {
  return <SortList {...restprops}>{children}</SortList>;
};

Orders.List = function OrdersList({ children, ...restprops }: ListProps) {
  return <List {...restprops}>{children}</List>;
};

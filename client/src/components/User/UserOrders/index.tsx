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
  OrderContent,
  OrderDetails,
  OrderInfo,
  OrderInfoCon,
  OrderPrice,
  OrderStatus,
  Image,
} from "./style/index";
import {
  DivProps,
  HeadProps,
  ImgProps,
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
Orders.OrderDetails = function OrdersOrderDetails({
  children,
  ...restprops
}: DivProps) {
  return <OrderDetails {...restprops}>{children}</OrderDetails>;
};
Orders.OrderContent = function OrdersOrderContent({
  children,
  ...restprops
}: DivProps) {
  return <OrderContent {...restprops}>{children}</OrderContent>;
};

Orders.OrderStatus = function OrdersList({
  children,
  ...restprops
}: SpanProps) {
  return <OrderStatus {...restprops}>{children}</OrderStatus>;
};
Orders.OrderInfo = function OrdersList({ children, ...restprops }: SpanProps) {
  return <OrderInfo {...restprops}>{children}</OrderInfo>;
};
Orders.OrderInfoCon = function OrdersList({
  children,
  ...restprops
}: DivProps) {
  return <OrderInfoCon {...restprops}>{children}</OrderInfoCon>;
};
Orders.OrderPrice = function OrdersList({ children, ...restprops }: SpanProps) {
  return <OrderPrice {...restprops}>{children}</OrderPrice>;
};

Orders.Image = function OrdersImage({ children, ...restprops }: ImgProps) {
  return <Image {...restprops} />;
};

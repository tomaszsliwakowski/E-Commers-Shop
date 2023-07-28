import React from "react";
import { JsxProps } from "../../types/Types";
import {
  Container,
  Header,
  Delivery,
  Data,
  Payment,
  Summary,
  Main,
  SecondHeader,
  DeliveryList,
  DeliveryEl,
  DeliverySelect,
  DeliveryName,
  DeliveryPrice,
} from "./style/orderStyle";

export function Order(props: JsxProps) {
  return <Container>{props.children}</Container>;
}
Order.Main = function OrderMain(props: JsxProps) {
  return <Main>{props.children}</Main>;
};

Order.Header = function OrderHeader(props: JsxProps) {
  return <Header>{props.children}</Header>;
};
Order.SecondHeader = function OrderSecondHeader(props: JsxProps) {
  return <SecondHeader>{props.children}</SecondHeader>;
};

Order.List = function OrderDeliveryList(props: JsxProps) {
  return <DeliveryList>{props.children}</DeliveryList>;
};
Order.El = function OrderDeliveryEl(props: JsxProps) {
  return <DeliveryEl>{props.children}</DeliveryEl>;
};
Order.Select = function OrderDeliverySelect(props: JsxProps) {
  return <DeliverySelect>{props.children}</DeliverySelect>;
};
Order.Name = function OrderDeliveryName(props: JsxProps) {
  return <DeliveryName>{props.children}</DeliveryName>;
};
Order.Price = function OrderDeliveryPrice(props: JsxProps) {
  return <DeliveryPrice>{props.children}</DeliveryPrice>;
};

//Delivery
Order.Delivery = function OrderDelivery(props: JsxProps) {
  return <Delivery>{props.children}</Delivery>;
};

//Data
Order.Data = function OrderData(props: JsxProps) {
  return <Data>{props.children}</Data>;
};

//Payment
Order.Payment = function OrderPayment(props: JsxProps) {
  return <Payment>{props.children}</Payment>;
};

//Summary
Order.Summary = function OrderSummary(props: JsxProps) {
  return <Summary>{props.children}</Summary>;
};

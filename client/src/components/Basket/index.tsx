import React from "react";
import { JsxProps, LinkProps } from "../../types/Types";
import {
  Container,
  Items,
  Image,
  Sum,
  BuyPanel,
  BuyPanelPrice,
  Header,
  List,
  BuyPanelBtn,
  ClearBasket,
  PayAccept,
  PayAcceptList,
  PayAcceptTitle,
  Product,
  Property,
  PropertyOpt,
  Desc,
  OtherProperty,
  Title,
  Goto,
  BuyPanelCon,
} from "./style/basketStyle";

export default function Basket(props: JsxProps) {
  return <Container>{props.children}</Container>;
}

Basket.Items = function BasketItems(props: JsxProps) {
  return <Items>{props.children}</Items>;
};

Basket.BuyPanel = function BasketBuyPanel(props: JsxProps) {
  return <BuyPanel>{props.children}</BuyPanel>;
};

Basket.BuyPanelSum = function BasketBuyPanelSum(props: JsxProps) {
  return <Sum>{props.children}</Sum>;
};
Basket.BuyPanelPrice = function BasketBuyPanelPrice(props: JsxProps) {
  return <BuyPanelPrice>{props.children}</BuyPanelPrice>;
};
Basket.BuyPanelBtn = function BasketBuyPanelBtn(props: JsxProps) {
  return <BuyPanelBtn>{props.children}</BuyPanelBtn>;
};

Basket.Header = function BasketHeader(props: JsxProps) {
  return <Header>{props.children}</Header>;
};

Basket.Title = function BasketTitle(props: JsxProps) {
  return <Title>{props.children}</Title>;
};

Basket.ClearBasket = function BasketClearBasket(props: JsxProps) {
  return <ClearBasket>{props.children}</ClearBasket>;
};

Basket.List = function BasketList(props: JsxProps) {
  return <List>{props.children}</List>;
};

Basket.Product = function BasketProduct(props: JsxProps) {
  return <Product>{props.children}</Product>;
};

Basket.Property = function BasketProperty(props: JsxProps) {
  return <Property>{props.children}</Property>;
};
Basket.PropertyOpt = function BasketPropertyOpt(props: JsxProps) {
  return <PropertyOpt>{props.children}</PropertyOpt>;
};
Basket.ProductDesc = function BasketProductDesc(props: JsxProps) {
  return <Desc>{props.children}</Desc>;
};
Basket.OtherProperty = function BasketOtherProperty(props: JsxProps) {
  return <OtherProperty>{props.children}</OtherProperty>;
};

Basket.Image = function BasketImage({ ...restprops }) {
  return <Image {...restprops} />;
};
Basket.Goto = function BasketGoto(props: LinkProps) {
  return <Goto to={props.to}>{props.children}</Goto>;
};
Basket.BuyPanelCon = function BaskeBuyPanelCon(props: JsxProps) {
  return <BuyPanelCon>{props.children}</BuyPanelCon>;
};

Basket.PayAccept = function BasketPayAccept(props: JsxProps) {
  return <PayAccept>{props.children}</PayAccept>;
};

Basket.PayAcceptTitle = function BasketPayAcceptTitle(props: JsxProps) {
  return <PayAcceptTitle>{props.children}</PayAcceptTitle>;
};
Basket.PayAcceptList = function BasketPayAcceptList(props: JsxProps) {
  return <PayAcceptList>{props.children}</PayAcceptList>;
};

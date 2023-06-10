import React from "react";
import {
  AddBasketBtnType,
  JsxProps,
  LinkProps,
  ProdCountPropsType,
} from "../../types/Types";
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
  Info,
  ProdCount,
  CountInput,
  CountActive,
  CountList,
  CountEl,
  Count,
  ProductSmall,
  PropertyOptSmall,
  DescSmall,
  BuyPanelFixed,
  BuyPanelRelative,
  EmptyBasket,
  EmptyBasketBtn,
} from "./style/basketStyle";

export default function Basket(props: JsxProps) {
  return <Container>{props.children}</Container>;
}

Basket.Items = function BasketItems(props: JsxProps) {
  return <Items>{props.children}</Items>;
};

Basket.BuyPanel = function BasketBuyPanel(props: JsxProps) {
  return props.style === "fixed" ? (
    <BuyPanelFixed>{props.children}</BuyPanelFixed>
  ) : props.style === "relative" ? (
    <BuyPanelRelative>{props.children}</BuyPanelRelative>
  ) : (
    <BuyPanel>{props.children}</BuyPanel>
  );
};

Basket.BuyPanelSum = function BasketBuyPanelSum(props: JsxProps) {
  return <Sum>{props.children}</Sum>;
};
Basket.BuyPanelPrice = function BasketBuyPanelPrice(props: JsxProps) {
  return <BuyPanelPrice>{props.children}</BuyPanelPrice>;
};
Basket.BuyPanelBtn = function BasketBuyPanelBtn(props: AddBasketBtnType) {
  return (
    <BuyPanelBtn
      to={props.href && props.href ? props.href : "#"}
      onClick={() => props.click && props.click()}
    >
      {props.children}
    </BuyPanelBtn>
  );
};

Basket.Header = function BasketHeader(props: JsxProps) {
  return <Header>{props.children}</Header>;
};

Basket.Title = function BasketTitle(props: JsxProps) {
  return <Title>{props.children}</Title>;
};

Basket.ClearBasket = function BasketClearBasket(props: AddBasketBtnType) {
  return (
    <ClearBasket onClick={() => props.click && props.click()}>
      {props.children}
    </ClearBasket>
  );
};

Basket.List = function BasketList(props: JsxProps) {
  return <List>{props.children}</List>;
};

Basket.Product = function BasketProduct(props: JsxProps) {
  return props.style === "small" ? (
    <ProductSmall>{props.children}</ProductSmall>
  ) : (
    <Product>{props.children}</Product>
  );
};

Basket.Property = function BasketProperty(props: JsxProps) {
  return <Property>{props.children}</Property>;
};
Basket.PropertyOpt = function BasketPropertyOpt(props: JsxProps) {
  return props.style === "grid" ? (
    <PropertyOptSmall>{props.children}</PropertyOptSmall>
  ) : (
    <PropertyOpt>{props.children}</PropertyOpt>
  );
};
Basket.ProductDesc = function BasketProductDesc(props: JsxProps) {
  return props.style === "center" ? (
    <DescSmall>{props.children}</DescSmall>
  ) : (
    <Desc>{props.children}</Desc>
  );
};
Basket.OtherProperty = function BasketOtherProperty(props: JsxProps) {
  return (
    <OtherProperty
      style={{
        flexDirection: `${props.style === "column" ? props.style : "row"}`,
      }}
    >
      {props.children}
    </OtherProperty>
  );
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
Basket.Info = function BasketInfo(props: JsxProps) {
  return <Info>{props.children}</Info>;
};

Basket.ProdCount = function BasketProdCount(props: JsxProps) {
  return (
    <ProdCount
      id="count"
      style={{
        borderRadius: `${props.active2 ? "1rem 1rem 0 0 " : "2rem"}`,
        borderBottom: `${props.active2 ? "1px solid transparent" : ""}`,
      }}
    >
      {props.children}
    </ProdCount>
  );
};

Basket.CountInput = function BasketCountInput({ ...restprops }) {
  return <CountInput {...restprops} />;
};
Basket.CountActive = function BasketCountActive({ ...restprops }) {
  return <CountActive {...restprops} />;
};

Basket.CountList = function BasketCountList(props: JsxProps) {
  return (
    <CountList
      id="count"
      style={{ display: `${props.active2 ? "flex" : "none"}` }}
    >
      {props.children}
    </CountList>
  );
};
Basket.CountEl = function BasketCountEl(props: JsxProps) {
  return <CountEl id="count">{props.children}</CountEl>;
};
Basket.Count = function BasketCount(props: ProdCountPropsType) {
  return props.item && props.item < 9 ? (
    <Count id={props.id} onClick={() => props.click()}>
      {props.children}
    </Count>
  ) : (
    <Count id="count" onClick={() => props.click()}>
      {props.children}
    </Count>
  );
};

Basket.EmptyBasket = function BasketEmptyBasket(props: JsxProps) {
  return <EmptyBasket>{props.children}</EmptyBasket>;
};
Basket.EmptyBasketBtn = function BasketEmptyBasketBtn(props: JsxProps) {
  return <EmptyBasketBtn to={"/"}>{props.children}</EmptyBasketBtn>;
};

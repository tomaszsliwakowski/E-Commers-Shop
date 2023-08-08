import React from "react";
import {
  BtnProps,
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

export default function Basket({ children, ...restprops }: DivProps) {
  return <Container {...restprops}>{children}</Container>;
}

Basket.Items = function BasketItems({ children, ...restprops }: DivProps) {
  return <Items {...restprops}>{children}</Items>;
};

Basket.BuyPanel = function BasketBuyPanel({
  children,
  styleType,
  ...restprops
}: DivProps & { styleType?: string | undefined }) {
  return styleType === "fixed" ? (
    <BuyPanelFixed {...restprops}>{children}</BuyPanelFixed>
  ) : styleType === "relative" ? (
    <BuyPanelRelative {...restprops}>{children}</BuyPanelRelative>
  ) : (
    <BuyPanel {...restprops}>{children}</BuyPanel>
  );
};

Basket.BuyPanelSum = function BasketBuyPanelSum({
  children,
  ...restprops
}: DivProps) {
  return <Sum {...restprops}>{children}</Sum>;
};
Basket.BuyPanelPrice = function BasketBuyPanelPrice({
  children,
  ...restprops
}: SpanProps) {
  return <BuyPanelPrice {...restprops}>{children}</BuyPanelPrice>;
};
Basket.BuyPanelBtn = function BasketBuyPanelBtn({
  children,
  href,
  ...restprops
}: BtnProps & {
  click?: Function | undefined;
  href?: string | undefined;
}) {
  const { click } = restprops;
  return (
    <BuyPanelBtn
      to={href && href ? href : "#"}
      onClick={() => click && click()}
    >
      {children}
    </BuyPanelBtn>
  );
};

Basket.Header = function BasketHeader({ children, ...restprops }: DivProps) {
  return <Header {...restprops}>{children}</Header>;
};

Basket.Title = function BasketTitle({ children, ...restprops }: HeadProps) {
  return <Title {...restprops}>{children}</Title>;
};

Basket.ClearBasket = function BasketClearBasket({
  children,
  click,
  ...restprops
}: DivProps & { click: Function | undefined }) {
  return <ClearBasket onClick={() => click && click()}>{children}</ClearBasket>;
};

Basket.List = function BasketList({ children, ...restprops }: ListProps) {
  return <List {...restprops}>{children}</List>;
};

Basket.Product = function BasketProduct({
  children,
  style,
  ...restprops
}: DivProps & { style?: string }) {
  return style === "small" ? (
    <ProductSmall {...restprops}>{children}</ProductSmall>
  ) : (
    <Product {...restprops}>{children}</Product>
  );
};

Basket.Property = function BasketProperty({
  children,
  ...restprops
}: DivProps) {
  return <Property {...restprops}>{children}</Property>;
};
Basket.PropertyOpt = function BasketPropertyOpt({
  children,
  style,
  ...restprops
}: DivProps & { style?: string }) {
  return style === "grid" ? (
    <PropertyOptSmall {...restprops}>{children}</PropertyOptSmall>
  ) : (
    <PropertyOpt {...restprops}>{children}</PropertyOpt>
  );
};
Basket.ProductDesc = function BasketProductDesc({
  children,
  style,
  ...restprops
}: TextProps & { style?: string }) {
  return style === "center" ? (
    <DescSmall {...restprops}>{children}</DescSmall>
  ) : (
    <Desc {...restprops}>{children}</Desc>
  );
};
Basket.OtherProperty = function BasketOtherProperty({
  children,
  styleType,
  ...restprops
}: DivProps & { styleType?: string }) {
  return (
    <OtherProperty
      {...restprops}
      style={{
        flexDirection: `${styleType === "column" ? styleType : "row"}`,
      }}
    >
      {children}
    </OtherProperty>
  );
};

Basket.Image = function BasketImage({ ...restprops }) {
  return <Image {...restprops} />;
};
Basket.Goto = function BasketGoto({
  children,
  to,
  ...restprops
}: HlinkProps & { to: string }) {
  return (
    <Goto {...restprops} to={to}>
      {children}
    </Goto>
  );
};
Basket.BuyPanelCon = function BaskeBuyPanelCon({
  children,
  ...restprops
}: DivProps) {
  return <BuyPanelCon {...restprops}>{children}</BuyPanelCon>;
};

Basket.PayAccept = function BasketPayAccept({
  children,
  ...restprops
}: DivProps) {
  return <PayAccept {...restprops}>{children}</PayAccept>;
};

Basket.PayAcceptTitle = function BasketPayAcceptTitle({
  children,
  ...restprops
}: HeadProps) {
  return <PayAcceptTitle {...restprops}>{children}</PayAcceptTitle>;
};
Basket.PayAcceptList = function BasketPayAcceptList({
  children,
  ...restprops
}: DivProps) {
  return <PayAcceptList {...restprops}>{children}</PayAcceptList>;
};
Basket.Info = function BasketInfo({ children, ...restprops }: DivProps) {
  return <Info {...restprops}>{children}</Info>;
};

Basket.ProdCount = function BasketProdCount({
  children,
  active,
  ...restprops
}: DivProps & { active: boolean }) {
  return (
    <ProdCount
      id="count"
      style={{
        borderRadius: `${active ? "1rem 1rem 0 0 " : "2rem"}`,
        borderBottom: `${active ? "1px solid transparent" : ""}`,
      }}
      {...restprops}
    >
      {children}
    </ProdCount>
  );
};

Basket.CountInput = function BasketCountInput({ ...restprops }) {
  return <CountInput {...restprops} />;
};
Basket.CountActive = function BasketCountActive({ ...restprops }) {
  return <CountActive {...restprops} />;
};

Basket.CountList = function BasketCountList({
  children,
  active,
  ...restprops
}: ListProps & { active: boolean }) {
  return (
    <CountList
      {...restprops}
      id="count"
      style={{ display: `${active ? "flex" : "none"}` }}
    >
      {children}
    </CountList>
  );
};
Basket.CountEl = function BasketCountEl({ children, ...restprops }: ElProps) {
  return (
    <CountEl {...restprops} id="count">
      {children}
    </CountEl>
  );
};
Basket.Count = function BasketCount({
  children,
  item,
  click,
  id,
  ...restprops
}: SpanProps & { item: number; click: Function; id?: number | string }) {
  return item && item < 9 ? (
    <Count {...restprops} id={id} onClick={() => click()}>
      {children}
    </Count>
  ) : (
    <Count id="count" onClick={() => click()}>
      {children}
    </Count>
  );
};

Basket.EmptyBasket = function BasketEmptyBasket({
  children,
  ...restprops
}: SpanProps) {
  return <EmptyBasket {...restprops}>{children}</EmptyBasket>;
};
Basket.EmptyBasketBtn = function BasketEmptyBasketBtn({
  children,
  ...restprops
}: HlinkProps) {
  return (
    <EmptyBasketBtn {...restprops} to={"/E-Commers-Shop/"}>
      {children}
    </EmptyBasketBtn>
  );
};

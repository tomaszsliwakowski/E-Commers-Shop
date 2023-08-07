import React from "react";
import {
  BtnProps,
  DivProps,
  HeadProps,
  HlinkProps,
  SpanProps,
  TextProps,
} from "../../types/Types";
import {
  Container,
  Baner,
  Top,
  Left,
  Right,
  BestSellery,
  BestSelleryTop,
  BestSelleryBottom,
  Newsletter,
  Bottom,
  LeftImageAndTitleCon,
  Title,
  LeftName,
  LeftPriceCon,
  LeftTimerCon,
  Image,
  LeftNewPrice,
  LeftOldPrice,
  Hits,
  RightProduct,
  RightName,
  RightBuyPanel,
  RightPrice,
  RightAddToCart,
  BestProduct,
  BestAddToCart,
  BestBuyPanel,
  BestName,
  BestPrice,
  NextShot,
  RemTime,
  OneTime,
  TimeName,
  Dot,
  Time,
  BottomA,
  BottomB,
  BottomTitle,
  BottomText,
  BottomInput,
  BottomCon,
  BottomBtn,
  MobileAd,
} from "./style/MainStyle";

export function Main({
  children,
  width,
  ...restprops
}: DivProps & { width?: number | undefined }) {
  const set = width && width < 1250 ? (width && width > 768 ? 62 : 110) : 101;
  return <Container style={{ marginTop: `${set}px` }}>{children}</Container>;
}

Main.Baner = function MainBaner({ children, ...restprops }: DivProps) {
  return <Baner {...restprops}>{children}</Baner>;
};

Main.Top = function MainTop({ children, ...restprops }: DivProps) {
  return <Top {...restprops}>{children}</Top>;
};
Main.Title = function MainTitle({ children, ...restprops }: HeadProps) {
  return <Title {...restprops}>{children}</Title>;
};
Main.Image = function MainImage({ ...restprops }) {
  return <Image {...restprops} />;
};

Main.BestSellery = function MainBestSellery({
  children,
  ...restprops
}: DivProps) {
  return <BestSellery {...restprops}>{children}</BestSellery>;
};

Main.BestSelleryTop = function MainBestSelleryTop({
  children,
  ...restprops
}: HeadProps) {
  return <BestSelleryTop {...restprops}>{children}</BestSelleryTop>;
};
Main.BestSelleryBottom = function MainBestSelleryBotttom({
  children,
  ...restprops
}: DivProps) {
  return <BestSelleryBottom {...restprops}>{children}</BestSelleryBottom>;
};
Main.Bottom = function MainBotttom({ children, ...restprops }: DivProps) {
  return <Bottom {...restprops}>{children}</Bottom>;
};

Main.Newsletter = function MainNewsletter({
  children,
  ...restprops
}: DivProps) {
  return <Newsletter {...restprops}>{children}</Newsletter>;
};

export function TopLeft({
  children,
  href,
  ...restprops
}: HlinkProps & { href?: string }) {
  return (
    <Left {...restprops} to={href ? href : "/E-Commers-Shop/"}>
      {children}
    </Left>
  );
}

export function TopRight({ children, ...restprops }: DivProps) {
  return <Right>{children}</Right>;
}

TopLeft.ImageAndTitle = function TopLeftImageAndTitle({
  children,
  ...restprops
}: DivProps) {
  return <LeftImageAndTitleCon {...restprops}>{children}</LeftImageAndTitleCon>;
};
TopLeft.Name = function TopLeftName({ children, ...restprops }: SpanProps) {
  return <LeftName {...restprops}>{children}</LeftName>;
};

TopLeft.PriceCon = function TopLeftPriceCon({
  children,
  ...restprops
}: DivProps) {
  return <LeftPriceCon {...restprops}>{children}</LeftPriceCon>;
};

TopLeft.TimerCon = function TopLeftTimerCon({
  children,
  ...restprops
}: DivProps) {
  return <LeftTimerCon {...restprops}>{children}</LeftTimerCon>;
};

TopLeft.NewPrice = function TopLeftNewPrice({
  children,
  ...restprops
}: TextProps) {
  return <LeftNewPrice {...restprops}>{children}</LeftNewPrice>;
};

TopLeft.OldPrice = function TopLeftOldPrice({
  children,
  ...restprops
}: TextProps) {
  return <LeftOldPrice {...restprops}>{children}</LeftOldPrice>;
};
TopLeft.NextShot = function TopLeftNextShot({
  children,
  ...restprops
}: SpanProps) {
  return <NextShot {...restprops}>{children}</NextShot>;
};
TopLeft.OneTime = function TopLeftOneTime({
  children,
  ...restprops
}: DivProps) {
  return <OneTime {...restprops}>{children}</OneTime>;
};
TopLeft.TimeName = function TopLeftTimeName({
  children,
  ...restprops
}: SpanProps) {
  return <TimeName {...restprops}>{children}</TimeName>;
};

TopLeft.RemTime = function TopLeftRemTime({
  children,
  ...restprops
}: DivProps) {
  return <RemTime {...restprops}>{children}</RemTime>;
};
TopLeft.Time = function TopLeftTime({ children, ...restprops }: SpanProps) {
  return <Time {...restprops}>{children}</Time>;
};
TopLeft.Dot = function TopLeftDot({ children, ...restprops }: DivProps) {
  return <Dot {...restprops}>{children}</Dot>;
};

TopRight.Hits = function TopRightHits({ children, ...restprops }: DivProps) {
  return <Hits {...restprops}>{children}</Hits>;
};

TopRight.Product = function TopRightProduct({
  children,
  ...restprops
}: DivProps) {
  return <RightProduct {...restprops}>{children}</RightProduct>;
};

TopRight.Name = function TopRightName({ children, ...restprops }: DivProps) {
  return <RightName {...restprops}>{children}</RightName>;
};
TopRight.Price = function TopRightPrice({ children, ...restprops }: DivProps) {
  return <RightPrice {...restprops}>{children}</RightPrice>;
};
TopRight.BuyPanel = function TopRightBuyPanel({
  children,
  ...restprops
}: DivProps) {
  return <RightBuyPanel {...restprops}>{children}</RightBuyPanel>;
};
TopRight.AddToCart = function TopRightAddToCart({
  children,
  click,
  ...restprops
}: DivProps & { click?: Function }) {
  return (
    <RightAddToCart {...restprops} onClick={() => click && click()}>
      {children}
    </RightAddToCart>
  );
};

Main.Product = function MainProduct({ children, ...restprops }: DivProps) {
  return <BestProduct {...restprops}>{children}</BestProduct>;
};

Main.Name = function MainName({ children, ...restprops }: DivProps) {
  return <BestName {...restprops}>{children}</BestName>;
};
Main.Price = function MainPrice({ children, ...restprops }: DivProps) {
  return <BestPrice {...restprops}>{children}</BestPrice>;
};
Main.BuyPanel = function MainBuyPanel({ children, ...restprops }: DivProps) {
  return <BestBuyPanel {...restprops}>{children}</BestBuyPanel>;
};
Main.AddToCart = function MainAddToCart({
  children,
  click,
  ...restprops
}: DivProps & { click?: Function }) {
  return (
    <BestAddToCart {...restprops} onClick={() => click && click()}>
      {children}
    </BestAddToCart>
  );
};

Main.BottomA = function MainBottomA({ children, ...restprops }: DivProps) {
  return <BottomA {...restprops}>{children}</BottomA>;
};
Main.BottomB = function MainBottomB({ children, ...restprops }: DivProps) {
  return <BottomB {...restprops}>{children}</BottomB>;
};

Main.BottomTitle = function MainBottomTitle({
  children,
  ...restprops
}: HeadProps) {
  return <BottomTitle {...restprops}>{children}</BottomTitle>;
};
Main.BottomText = function MainBottomText({
  children,
  ...restprops
}: TextProps) {
  return <BottomText {...restprops}>{children}</BottomText>;
};
Main.BottomInput = function MainBottomInput({ ...restprops }) {
  return <BottomInput {...restprops} />;
};

Main.BottomCon = function MainBottomCon({ children, ...restprops }: DivProps) {
  return <BottomCon {...restprops}>{children}</BottomCon>;
};
Main.BottomBtn = function MainBottomBtn({ children, ...restprops }: BtnProps) {
  return <BottomBtn {...restprops}>{children}</BottomBtn>;
};

Main.MobileAd = function MainMobileAd({ children, ...restprops }: DivProps) {
  return <MobileAd {...restprops}>{children}</MobileAd>;
};

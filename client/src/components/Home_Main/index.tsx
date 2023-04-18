import React from "react";
import { JsxProps } from "../../types/propsTypes";
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
  Mobile,
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
} from "./style/MainStyle";

export function Main(props: JsxProps) {
  const set =
    props.width && props.width < 1250
      ? props.width && props.width > 768
        ? 62
        : 110
      : 101;
  return (
    <Container style={{ marginTop: `${set}px` }}>{props.children}</Container>
  );
}

Main.Baner = function MainBaner(props: JsxProps) {
  return <Baner>{props.children}</Baner>;
};

Main.Top = function MainTop(props: JsxProps) {
  return <Top>{props.children}</Top>;
};
Main.Title = function MainTitle(props: JsxProps) {
  return <Title>{props.children}</Title>;
};
Main.Image = function MainImage({ ...restprops }) {
  return <Image {...restprops} />;
};

Main.BestSellery = function MainBestSellery(props: JsxProps) {
  return <BestSellery>{props.children}</BestSellery>;
};

Main.BestSelleryTop = function MainBestSelleryTop(props: JsxProps) {
  return <BestSelleryTop>{props.children}</BestSelleryTop>;
};
Main.BestSelleryBottom = function MainBestSelleryBotttom(props: JsxProps) {
  return <BestSelleryBottom>{props.children}</BestSelleryBottom>;
};
Main.Bottom = function MainBotttom(props: JsxProps) {
  return <Bottom>{props.children}</Bottom>;
};

Main.Newsletter = function MainNewsletter(props: JsxProps) {
  return <Newsletter>{props.children}</Newsletter>;
};

Main.MobileApp = function MainMobileApp(props: JsxProps) {
  return <Mobile>{props.children}</Mobile>;
};

export function TopLeft(props: JsxProps) {
  return <Left>{props.children}</Left>;
}

export function TopRight(props: JsxProps) {
  return <Right>{props.children}</Right>;
}

TopLeft.ImageAndTitle = function TopLeftImageAndTitle(props: JsxProps) {
  return <LeftImageAndTitleCon>{props.children}</LeftImageAndTitleCon>;
};
TopLeft.Name = function TopLeftName(props: JsxProps) {
  return <LeftName>{props.children}</LeftName>;
};

TopLeft.PriceCon = function TopLeftPriceCon(props: JsxProps) {
  return <LeftPriceCon>{props.children}</LeftPriceCon>;
};

TopLeft.TimerCon = function TopLeftTimerCon(props: JsxProps) {
  return <LeftTimerCon>{props.children}</LeftTimerCon>;
};

TopLeft.NewPrice = function TopLeftNewPrice(props: JsxProps) {
  return <LeftNewPrice>{props.children}</LeftNewPrice>;
};

TopLeft.OldPrice = function TopLeftOldPrice(props: JsxProps) {
  return <LeftOldPrice>{props.children}</LeftOldPrice>;
};

TopRight.Hits = function TopRightHits(props: JsxProps) {
  return <Hits>{props.children}</Hits>;
};

TopRight.Product = function TopRightProduct(props: JsxProps) {
  return <RightProduct>{props.children}</RightProduct>;
};

TopRight.Name = function TopRightName(props: JsxProps) {
  return <RightName>{props.children}</RightName>;
};
TopRight.Price = function TopRightPrice(props: JsxProps) {
  return <RightPrice>{props.children}</RightPrice>;
};
TopRight.BuyPanel = function TopRightBuyPanel(props: JsxProps) {
  return <RightBuyPanel>{props.children}</RightBuyPanel>;
};
TopRight.AddToCart = function TopRightAddToCart(props: JsxProps) {
  return <RightAddToCart>{props.children}</RightAddToCart>;
};

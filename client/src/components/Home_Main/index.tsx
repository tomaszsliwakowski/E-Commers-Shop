import React from "react";
import { JsxProps, LinkProps } from "../../types/Types";
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
  NewsletterA,
  NewsletterB,
  NewsletterTitle,
  NewsletterText,
  NewsletterInput,
  NewsletterEmailInput,
  NewsletterBtn,
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

export function TopLeft(props: JsxProps) {
  return <Left href={props.href}>{props.children}</Left>;
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
TopLeft.NextShot = function TopLeftNextShot(props: JsxProps) {
  return <NextShot>{props.children}</NextShot>;
};
TopLeft.OneTime = function TopLeftOneTime(props: JsxProps) {
  return <OneTime>{props.children}</OneTime>;
};
TopLeft.TimeName = function TopLeftTimeName(props: JsxProps) {
  return <TimeName>{props.children}</TimeName>;
};

TopLeft.RemTime = function TopLeftRemTime(props: JsxProps) {
  return <RemTime>{props.children}</RemTime>;
};
TopLeft.Time = function TopLeftTime(props: JsxProps) {
  return <Time>{props.children}</Time>;
};
TopLeft.Dot = function TopLeftDot(props: JsxProps) {
  return <Dot>{props.children}</Dot>;
};

TopRight.Hits = function TopRightHits(props: JsxProps) {
  return <Hits>{props.children}</Hits>;
};

TopRight.Product = function TopRightProduct(props: LinkProps) {
  return <RightProduct to={props.to}>{props.children}</RightProduct>;
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

Main.Product = function MainProduct(props: LinkProps) {
  return <BestProduct to={props.to}>{props.children}</BestProduct>;
};

Main.Name = function MainName(props: JsxProps) {
  return <BestName>{props.children}</BestName>;
};
Main.Price = function MainPrice(props: JsxProps) {
  return <BestPrice>{props.children}</BestPrice>;
};
Main.BuyPanel = function MainBuyPanel(props: JsxProps) {
  return <BestBuyPanel>{props.children}</BestBuyPanel>;
};
Main.AddToCart = function MainAddToCart(props: JsxProps) {
  return <BestAddToCart>{props.children}</BestAddToCart>;
};

Main.NewsletterA = function MainNewsletterA(props: JsxProps) {
  return <NewsletterA>{props.children}</NewsletterA>;
};
Main.NewsletterB = function MainNewsletterB(props: JsxProps) {
  return <NewsletterB>{props.children}</NewsletterB>;
};

Main.NewsletterTitle = function MainNewsletterTitle(props: JsxProps) {
  return <NewsletterTitle>{props.children}</NewsletterTitle>;
};
Main.NewsletterText = function MainNewsletterText(props: JsxProps) {
  return <NewsletterText>{props.children}</NewsletterText>;
};
Main.NewsletterInput = function MainNewsletterInput({ ...restprops }) {
  return <NewsletterInput {...restprops} />;
};

Main.NewsletterEmailInput = function MainNewsletterEmailInput(props: JsxProps) {
  return <NewsletterEmailInput>{props.children}</NewsletterEmailInput>;
};
Main.NewsletterBtn = function MainNewsletterBtn(props: JsxProps) {
  return <NewsletterBtn>{props.children}</NewsletterBtn>;
};

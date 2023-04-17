import React from "react";
import { JsxProps } from "../../types/propsTypes";
import {
  Container,
  Baner,
  Top,
  TopLeft,
  TopRight,
  BestSellery,
  BestSelleryTop,
  BestSelleryBottom,
  Newsletter,
  Mobile,
  Bottom,
} from "./style/MainStyle";

export default function Main(props: JsxProps) {
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

Main.TopLeft = function MainTopLeft(props: JsxProps) {
  return <TopLeft>{props.children}</TopLeft>;
};

Main.TopRight = function MainTopRight(props: JsxProps) {
  return <TopRight>{props.children}</TopRight>;
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

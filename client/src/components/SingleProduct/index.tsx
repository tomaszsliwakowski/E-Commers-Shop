import React from "react";
import { JsxProps } from "../../types/Types";
import {
  Container,
  Top,
  Bottom,
  ProdImg,
  Image,
  ProdProperty,
  Header,
  Title,
  Opinion,
  Spec,
  BuyPanel,
  SpecList,
  SpecEl,
  Price,
  Basket,
  BuyInfoList,
  BuyInfoEl,
  BuyInfo,
} from "./style/SingleProductStyle.";

export default function SingleProduct(props: JsxProps) {
  return <Container>{props.children}</Container>;
}

SingleProduct.Top = function SingleProductTop(props: JsxProps) {
  return <Top>{props.children}</Top>;
};

SingleProduct.Bottom = function SingleProductBottom(props: JsxProps) {
  return <Bottom>{props.children}</Bottom>;
};

SingleProduct.ProdImg = function SingleProductProdImg(props: JsxProps) {
  return <ProdImg>{props.children}</ProdImg>;
};
SingleProduct.Image = function SingleProductImage({ ...restprops }) {
  return <Image {...restprops} />;
};

SingleProduct.ProdProperty = function SingleProductProdProperty(
  props: JsxProps
) {
  return <ProdProperty>{props.children}</ProdProperty>;
};

SingleProduct.Header = function SingleProductHeader(props: JsxProps) {
  return <Header>{props.children}</Header>;
};

SingleProduct.Title = function SingleProductTitle(props: JsxProps) {
  return <Title>{props.children}</Title>;
};

SingleProduct.Opinion = function SingleProductOpinion(props: JsxProps) {
  return <Opinion>{props.children}</Opinion>;
};

SingleProduct.Spec = function SingleProductSpec(props: JsxProps) {
  return <Spec>{props.children}</Spec>;
};
SingleProduct.BuyPanel = function SingleProductBuyPanel(props: JsxProps) {
  return <BuyPanel>{props.children}</BuyPanel>;
};

SingleProduct.SpecList = function SingleProductSpecList(props: JsxProps) {
  return <SpecList>{props.children}</SpecList>;
};

SingleProduct.SpecEl = function SingleProductSpecEl(props: JsxProps) {
  return <SpecEl>{props.children}</SpecEl>;
};

SingleProduct.Price = function SingleProductPrice(props: JsxProps) {
  return <Price>{props.children}</Price>;
};
SingleProduct.Basket = function SingleProductBasket(props: JsxProps) {
  return <Basket>{props.children}</Basket>;
};

SingleProduct.BuyInfoList = function SingleProductBuyInfoList(props: JsxProps) {
  return <BuyInfoList>{props.children}</BuyInfoList>;
};

SingleProduct.BuyInfoEL = function SingleProductBuyInfoEl(props: JsxProps) {
  return <BuyInfoEl>{props.children}</BuyInfoEl>;
};

SingleProduct.BuyInfo = function SingleProductBuyInfo(props: JsxProps) {
  return <BuyInfo>{props.children}</BuyInfo>;
};

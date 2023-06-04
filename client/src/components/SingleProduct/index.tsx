import React, { ReactNode } from "react";
import {
  GoToElmentType,
  JsxProps,
  OpinionJSXProps,
  SortJSXProps,
} from "../../types/Types";
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
  Desc,
  Nav,
  DescText,
  NavBtn,
  OpinionCom,
  OpinionHeader,
  OpinionMain,
  OpinionMainTop,
  OpinionMainBottom,
  OpinionStars,
  OpinionStarsCount,
  OpinionAdd,
  OpinionAddTitle,
  OpinionAddText,
  OpinionAddBtn,
  OpinionInput,
  OpinionAddCloseBtn,
  OpinionShowTitle,
  OpinionShowList,
  OpinionShowEl,
  OpinionShowUser,
  OpinionShowUserName,
  OpinionShowContent,
  OpinionShowDate,
  OpinionShowText,
  ShowMore,
  ShowMoreBtn,
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

SingleProduct.Navigation = function SingleProductNavigation(props: JsxProps) {
  return <Nav id="desc">{props.children}</Nav>;
};

SingleProduct.NavBtn = function SingleProductNavBtn(props: GoToElmentType) {
  return <NavBtn onClick={() => props.goTo(props.to)}>{props.children}</NavBtn>;
};

SingleProduct.Description = function SingleProductDescription(props: JsxProps) {
  return <Desc>{props.children}</Desc>;
};

SingleProduct.DescText = function SingleProductDescText(props: JsxProps) {
  return <DescText>{props.children}</DescText>;
};

SingleProduct.OpinionCom = function SingleProductOpinionCom(props: JsxProps) {
  return <OpinionCom id="opinion">{props.children}</OpinionCom>;
};

SingleProduct.OpinionHeader = function SingleProductOpinionHeader(
  props: JsxProps
) {
  return <OpinionHeader>{props.children}</OpinionHeader>;
};

SingleProduct.OpinionMain = function SingleProductMain(props: JsxProps) {
  return <OpinionMain>{props.children}</OpinionMain>;
};

SingleProduct.OpinionMainTop = function SingleProductMainTop(props: JsxProps) {
  return <OpinionMainTop>{props.children}</OpinionMainTop>;
};
SingleProduct.OpinionMainBottom = function SingleProductMainBottom(
  props: JsxProps
) {
  return <OpinionMainBottom>{props.children}</OpinionMainBottom>;
};

SingleProduct.OpinionStars = function SingleProductOpinionStars(
  props: JsxProps
) {
  return <OpinionStars>{props.children}</OpinionStars>;
};

SingleProduct.OpinionStarsCount = function SingleProductMainStarsCount(
  props: JsxProps
) {
  return <OpinionStarsCount>{props.children}</OpinionStarsCount>;
};

SingleProduct.OpinionAdd = function SingleProductOpinionAdd(props: JsxProps) {
  return <OpinionAdd>{props.children}</OpinionAdd>;
};

SingleProduct.OpinionAddTitle = function SingleProductAddTitle(
  props: JsxProps
) {
  return <OpinionAddTitle>{props.children}</OpinionAddTitle>;
};

SingleProduct.OpinionAddText = function SingleProductAddText(props: JsxProps) {
  return <OpinionAddText>{props.children}</OpinionAddText>;
};

SingleProduct.OpinionAddBtn = function SingleProductAddBtn(
  props: OpinionJSXProps
) {
  return (
    <OpinionAddBtn
      onClick={
        props.active ? () => props.handle() : () => props.click((prev) => !prev)
      }
    >
      {props.children}
    </OpinionAddBtn>
  );
};

SingleProduct.OpinionAddCloseBtn = function SingleProductAddCloseBtn(
  props: SortJSXProps
) {
  return (
    <OpinionAddCloseBtn onClick={() => props.click((prev) => !prev)}>
      {props.children}
    </OpinionAddCloseBtn>
  );
};

SingleProduct.OpinionInput = function SingleProductOpinionInput({
  ...restprops
}) {
  return <OpinionInput {...restprops} />;
};

SingleProduct.OpinionShowTitle = function SingleProductOpinionShowTitle(
  props: JsxProps
) {
  return <OpinionShowTitle>{props.children}</OpinionShowTitle>;
};

SingleProduct.OpinionShowList = function SingleProductOpinionShowList(
  props: JsxProps
) {
  return <OpinionShowList>{props.children}</OpinionShowList>;
};

SingleProduct.OpinionShowEl = function SingleProductOpinionShowEl(
  props: JsxProps
) {
  return <OpinionShowEl>{props.children}</OpinionShowEl>;
};
SingleProduct.OpinionShowUser = function SingleProductOpinionShowUser(
  props: JsxProps
) {
  return <OpinionShowUser>{props.children}</OpinionShowUser>;
};
SingleProduct.OpinionShowUserName = function SingleProductOpinionShowUserName(
  props: JsxProps
) {
  return <OpinionShowUserName>{props.children}</OpinionShowUserName>;
};
SingleProduct.OpinionShowContent = function SingleProductOpinionShowContent(
  props: JsxProps
) {
  return <OpinionShowContent>{props.children}</OpinionShowContent>;
};

SingleProduct.OpinionShowDate = function SingleProductOpinionShowDate(
  props: JsxProps
) {
  return <OpinionShowDate>{props.children}</OpinionShowDate>;
};

SingleProduct.OpinionShowText = function SingleProductOpinionShowText(
  props: JsxProps
) {
  return <OpinionShowText>{props.children}</OpinionShowText>;
};

SingleProduct.ShowMore = function SingleProductShowMore(props: JsxProps) {
  return <ShowMore>{props.children}</ShowMore>;
};
SingleProduct.ShowMoreBtn = function SingleProductShowMoreBtn(props: {
  handle: Function;
  children: ReactNode;
}) {
  return (
    <ShowMoreBtn onClick={() => props.handle()}>{props.children}</ShowMoreBtn>
  );
};

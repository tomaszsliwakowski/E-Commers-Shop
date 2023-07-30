import React, { ReactNode } from "react";
import {
  BtnProps,
  DivProps,
  ElProps,
  HeadProps,
  HlinkProps,
  ListProps,
  SpanProps,
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
  OpinionLoginBtn,
  OpinionShowUser,
  OpinionShowUserName,
  OpinionShowContent,
  OpinionShowDate,
  OpinionShowText,
  ShowMore,
  ShowMoreBtn,
  OptionsOpinion,
  OptionsListOpinion,
  OptionsElOpinion,
} from "./style/SingleProductStyle.";
import { LocalRoute, LoginRoute } from "../../routes";

export default function SingleProduct({ children, ...restprops }: DivProps) {
  return <Container {...restprops}>{children}</Container>;
}

SingleProduct.Top = function SingleProductTop({
  children,
  ...restprops
}: DivProps) {
  return <Top {...restprops}>{children}</Top>;
};

SingleProduct.Bottom = function SingleProductBottom({
  children,
  ...restprops
}: DivProps) {
  return <Bottom {...restprops}>{children}</Bottom>;
};

SingleProduct.ProdImg = function SingleProductProdImg({
  children,
  ...restprops
}: DivProps) {
  return <ProdImg {...restprops}>{children}</ProdImg>;
};
SingleProduct.Image = function SingleProductImage({ ...restprops }) {
  return <Image {...restprops} />;
};

SingleProduct.ProdProperty = function SingleProductProdProperty({
  children,
  ...restprops
}: DivProps) {
  return <ProdProperty {...restprops}>{children}</ProdProperty>;
};

SingleProduct.Header = function SingleProductHeader({
  children,
  ...restprops
}: DivProps) {
  return <Header {...restprops}>{children}</Header>;
};

SingleProduct.Title = function SingleProductTitle({
  children,
  ...restprops
}: HeadProps) {
  return <Title {...restprops}>{children}</Title>;
};

SingleProduct.Opinion = function SingleProductOpinion({
  children,
  ...restprops
}: SpanProps) {
  return <Opinion {...restprops}>{children}</Opinion>;
};

SingleProduct.Spec = function SingleProductSpec({
  children,
  ...restprops
}: DivProps) {
  return <Spec {...restprops}>{children}</Spec>;
};
SingleProduct.BuyPanel = function SingleProductBuyPanel({
  children,
  ...restprops
}: DivProps) {
  return <BuyPanel {...restprops}>{children}</BuyPanel>;
};

SingleProduct.SpecList = function SingleProductSpecList({
  children,
  ...restprops
}: ListProps) {
  return <SpecList {...restprops}>{children}</SpecList>;
};

SingleProduct.SpecEl = function SingleProductSpecEl({
  children,
  ...restprops
}: ElProps) {
  return <SpecEl {...restprops}>{children}</SpecEl>;
};

SingleProduct.Price = function SingleProductPrice({
  children,
  ...restprops
}: SpanProps) {
  return <Price {...restprops}>{children}</Price>;
};
SingleProduct.Basket = function SingleProductBasket({
  children,
  ...restprops
}: DivProps) {
  return <Basket {...restprops}>{children}</Basket>;
};

SingleProduct.BuyInfoList = function SingleProductBuyInfoList({
  children,
  ...restprops
}: ListProps) {
  return <BuyInfoList {...restprops}>{children}</BuyInfoList>;
};

SingleProduct.BuyInfoEL = function SingleProductBuyInfoEl({
  children,
  ...restprops
}: ElProps) {
  return <BuyInfoEl {...restprops}>{children}</BuyInfoEl>;
};

SingleProduct.BuyInfo = function SingleProductBuyInfo({
  children,
  ...restprops
}: SpanProps) {
  return <BuyInfo {...restprops}>{children}</BuyInfo>;
};

SingleProduct.Navigation = function SingleProductNavigation({
  children,
  ...restprops
}: DivProps) {
  return (
    <Nav id="desc" {...restprops}>
      {children}
    </Nav>
  );
};

SingleProduct.NavBtn = function SingleProductNavBtn({
  children,
  goTo,
  to,
  ...restprops
}: HlinkProps & { goTo: Function; to: string }) {
  return (
    <NavBtn {...restprops} onClick={() => goTo(to)}>
      {children}
    </NavBtn>
  );
};

SingleProduct.Description = function SingleProductDescription({
  children,
  ...restprops
}: DivProps) {
  return <Desc {...restprops}>{children}</Desc>;
};

SingleProduct.DescText = function SingleProductDescText({
  children,
  ...restprops
}: SpanProps) {
  return <DescText {...restprops}>{children}</DescText>;
};

SingleProduct.OpinionCom = function SingleProductOpinionCom({
  children,
  ...restprops
}: DivProps) {
  return (
    <OpinionCom id="opinion" {...restprops}>
      {children}
    </OpinionCom>
  );
};

SingleProduct.OpinionHeader = function SingleProductOpinionHeader({
  children,
  ...restprops
}: SpanProps) {
  return <OpinionHeader {...restprops}>{children}</OpinionHeader>;
};

SingleProduct.OpinionMain = function SingleProductMain({
  children,
  ...restprops
}: DivProps) {
  return <OpinionMain {...restprops}>{children}</OpinionMain>;
};

SingleProduct.OpinionMainTop = function SingleProductMainTop({
  children,
  ...restprops
}: DivProps) {
  return <OpinionMainTop {...restprops}>{children}</OpinionMainTop>;
};
SingleProduct.OpinionMainBottom = function SingleProductMainBottom({
  children,
  ...restprops
}: DivProps) {
  return <OpinionMainBottom {...restprops}>{children}</OpinionMainBottom>;
};

SingleProduct.OpinionStars = function SingleProductOpinionStars({
  children,
  ...restprops
}: DivProps) {
  return <OpinionStars {...restprops}>{children}</OpinionStars>;
};

SingleProduct.OpinionStarsCount = function SingleProductMainStarsCount({
  children,
  ...restprops
}: SpanProps) {
  return <OpinionStarsCount {...restprops}>{children}</OpinionStarsCount>;
};

SingleProduct.OpinionAdd = function SingleProductOpinionAdd({
  children,
  ...restprops
}: DivProps) {
  return <OpinionAdd {...restprops}>{children}</OpinionAdd>;
};

SingleProduct.OpinionAddTitle = function SingleProductAddTitle({
  children,
  ...restprops
}: HeadProps) {
  return <OpinionAddTitle {...restprops}>{children}</OpinionAddTitle>;
};

SingleProduct.OpinionAddText = function SingleProductAddText({
  children,
  ...restprops
}: SpanProps) {
  return <OpinionAddText {...restprops}>{children}</OpinionAddText>;
};

SingleProduct.OpinionAddBtn = function SingleProductAddBtn({
  children,
  active,
  handle,
  click,
  ...restprops
}: BtnProps & {
  active: boolean;
  handle: Function;
  click: React.Dispatch<React.SetStateAction<boolean>>;
}) {
  return (
    <OpinionAddBtn
      {...restprops}
      onClick={active ? () => handle() : () => click((prev) => !prev)}
    >
      {children}
    </OpinionAddBtn>
  );
};
SingleProduct.OpinionLoginBtn = function SingleProductOpinionLoginBtn({
  children,
  ...restprops
}: HlinkProps) {
  return (
    <OpinionLoginBtn {...restprops} to={LocalRoute + LoginRoute}>
      {children}
    </OpinionLoginBtn>
  );
};

SingleProduct.OpinionAddCloseBtn = function SingleProductAddCloseBtn({
  children,
  click,
  ...restprops
}: BtnProps & { click: React.Dispatch<React.SetStateAction<boolean>> }) {
  return (
    <OpinionAddCloseBtn {...restprops} onClick={() => click((prev) => !prev)}>
      {children}
    </OpinionAddCloseBtn>
  );
};

SingleProduct.OpinionInput = function SingleProductOpinionInput({
  ...restprops
}) {
  return <OpinionInput {...restprops} />;
};

SingleProduct.OpinionShowTitle = function SingleProductOpinionShowTitle({
  children,
  ...restprops
}: HeadProps) {
  return <OpinionShowTitle {...restprops}>{children}</OpinionShowTitle>;
};

SingleProduct.OpinionShowList = function SingleProductOpinionShowList({
  children,
  ...restprops
}: ListProps) {
  return <OpinionShowList {...restprops}>{children}</OpinionShowList>;
};

SingleProduct.OpinionShowEl = function SingleProductOpinionShowEl({
  children,
  ...restprops
}: ElProps) {
  return <OpinionShowEl {...restprops}>{children}</OpinionShowEl>;
};
SingleProduct.OpinionShowUser = function SingleProductOpinionShowUser({
  children,
  ...restprops
}: DivProps) {
  return <OpinionShowUser {...restprops}>{children}</OpinionShowUser>;
};
SingleProduct.OpinionShowUserName = function SingleProductOpinionShowUserName({
  children,
  ...restprops
}: SpanProps) {
  return <OpinionShowUserName {...restprops}>{children}</OpinionShowUserName>;
};
SingleProduct.OpinionShowContent = function SingleProductOpinionShowContent({
  children,
  ...restprops
}: DivProps) {
  return <OpinionShowContent {...restprops}>{children}</OpinionShowContent>;
};

SingleProduct.OpinionShowDate = function SingleProductOpinionShowDate({
  children,
  ...restprops
}: SpanProps) {
  return <OpinionShowDate {...restprops}>{children}</OpinionShowDate>;
};

SingleProduct.OpinionShowText = function SingleProductOpinionShowText({
  children,
  ...restprops
}: SpanProps) {
  return <OpinionShowText {...restprops}>{children}</OpinionShowText>;
};

SingleProduct.ShowMore = function SingleProductShowMore({
  children,
  ...restprops
}: DivProps) {
  return <ShowMore {...restprops}>{children}</ShowMore>;
};
SingleProduct.ShowMoreBtn = function SingleProductShowMoreBtn({
  children,
  handle,
  ...restprops
}: BtnProps & { handle: Function }) {
  return (
    <ShowMoreBtn {...restprops} onClick={() => handle()}>
      {children}
    </ShowMoreBtn>
  );
};
SingleProduct.OptionsOpinion = function SingleProductOptionsOpinion({
  children,
  click,
  item,
  ...restprops
}: SpanProps & {
  click: React.Dispatch<React.SetStateAction<{ active: boolean; id: number }>>;
  item: number;
}) {
  return (
    <OptionsOpinion
      id="options"
      {...restprops}
      onClick={() =>
        click((prev) =>
          prev.active
            ? {
                active: false,
                id: 0,
              }
            : {
                active: true,
                id: item,
              }
        )
      }
    >
      {children}
    </OptionsOpinion>
  );
};

SingleProduct.OptionsListOpinion = function SingleProductOptionsListOpinion({
  children,
  ...restprops
}: ListProps) {
  return <OptionsListOpinion {...restprops}>{children}</OptionsListOpinion>;
};
SingleProduct.OptionsElOpinion = function SingleProductOptionsElOpinion({
  children,
  click,
  item,
  ...restprops
}: ElProps & { click: Function; item: string }) {
  return (
    <OptionsElOpinion {...restprops} onClick={() => click(item)} id="options">
      {children}
    </OptionsElOpinion>
  );
};

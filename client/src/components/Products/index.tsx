import React from "react";
import { JsxProps, SortChooseJSXProps, SortJSXProps } from "../../types/Types";
import {
  Container,
  Filters,
  ProductsSec,
  Header,
  SortPanel,
  All,
  FTop,
  FBottom,
  FTitle,
  FClearBtn,
  FSection,
  FName,
  FList,
  FElement,
  HTitle,
  HCount,
  FCheckbox,
  FCheckmark,
  FChoose,
  Item,
  IBasket,
  IBuyPanel,
  IDesc,
  IImg,
  IName,
  IOpinion,
  IPrice,
  ISpecEl,
  ISpecList,
  Image,
  FPrice,
  FPriceCon,
  FPriceCurrensy,
  FPriceFromTo,
  FPriceInput,
  SPList,
  SPListEl,
  SPSelect,
  SPShow,
  SPShowOpt,
  SPSort,
  AddToCart,
  SPCheckbox,
  FiltrBtn,
  AcceptFiltrBtn,
} from "./style/productStyle";

export function Products(props: JsxProps) {
  return <Container>{props.children}</Container>;
}

Products.Filters = function ProductsFilters(props: JsxProps) {
  return (
    <Filters
      style={{
        display: `${
          props.width && props.width <= 550 && props.active2
            ? "flex"
            : !props.active2 && props.width && props.width <= 550
            ? "none"
            : "flex"
        }`,
      }}
    >
      {props.children}
    </Filters>
  );
};

Products.ProductsSec = function ProductsProductsSec(props: JsxProps) {
  return <ProductsSec>{props.children}</ProductsSec>;
};

Products.Header = function ProductsHeader(props: JsxProps) {
  return <Header>{props.children}</Header>;
};

Products.H_Title = function ProductsHeaderTitle(props: JsxProps) {
  return <HTitle>{props.children}</HTitle>;
};
Products.H_Count = function ProductsHeaderCount(props: JsxProps) {
  return <HCount>{props.children}</HCount>;
};

Products.SortPanel = function ProductsSortPanel(props: JsxProps) {
  return <SortPanel>{props.children}</SortPanel>;
};
Products.All = function ProductsAll(props: JsxProps) {
  return <All>{props.children}</All>;
};

Products.F_Top = function ProductsFTop(props: JsxProps) {
  return <FTop>{props.children}</FTop>;
};
Products.F_Bottom = function ProductsFBottom(props: JsxProps) {
  return <FBottom>{props.children}</FBottom>;
};

Products.F_Title = function ProductsFTitle(props: JsxProps) {
  return <FTitle>{props.children}</FTitle>;
};

Products.F_ClearBtn = function ProductsFClearBtn(props: JsxProps) {
  return <FClearBtn>{props.children}</FClearBtn>;
};

Products.F_Section = function ProductsFSection(props: JsxProps) {
  return <FSection>{props.children}</FSection>;
};

Products.F_Name = function ProductsFName(props: JsxProps) {
  return <FName>{props.children}</FName>;
};
Products.F_List = function ProductsFList(props: JsxProps) {
  return <FList>{props.children}</FList>;
};
Products.F_Element = function ProductsFElement(props: JsxProps) {
  return <FElement>{props.children}</FElement>;
};
Products.F_Checkbox = function ProductsFCheckbox({ ...restprops }) {
  return <FCheckbox {...restprops} />;
};

Products.F_Choose = function ProductsFChoose(props: JsxProps) {
  return <FChoose>{props.children}</FChoose>;
};

Products.F_Checkmark = function ProductsFCheckmark(props: JsxProps) {
  return <FCheckmark>{props.children}</FCheckmark>;
};

Products.F_PriceCon = function ProductsFPriceCon(props: JsxProps) {
  return <FPriceCon>{props.children}</FPriceCon>;
};
Products.F_Price = function ProductsFPrice(props: JsxProps) {
  return <FPrice>{props.children}</FPrice>;
};
Products.F_PriceFromTo = function ProductsFFromTo(props: JsxProps) {
  return <FPriceFromTo>{props.children}</FPriceFromTo>;
};
Products.F_PriceInput = function ProductsFPriceInput({ ...restprops }) {
  return <FPriceInput {...restprops} />;
};
Products.F_PriceCurrency = function ProductsFPriceCurrency(props: JsxProps) {
  return <FPriceCurrensy>{props.children}</FPriceCurrensy>;
};

Products.Item = function ProductsItem(props: JsxProps) {
  return <Item>{props.children}</Item>;
};

Products.I_Img = function ProductsItemImg(props: JsxProps) {
  return <IImg>{props.children}</IImg>;
};
Products.Image = function ProductsImage({ ...restprops }) {
  return <Image {...restprops} />;
};

Products.I_Desc = function ProductsItemDesc(props: JsxProps) {
  return <IDesc>{props.children}</IDesc>;
};

Products.I_Name = function ProductsItemName(props: JsxProps) {
  return <IName>{props.children}</IName>;
};

Products.I_Opinion = function ProductsItemOpinion(props: JsxProps) {
  return <IOpinion>{props.children}</IOpinion>;
};

Products.I_SpecList = function ProductsItemSpecList(props: JsxProps) {
  return <ISpecList>{props.children}</ISpecList>;
};
Products.I_SpecEl = function ProductsItemSpecEl(props: JsxProps) {
  return <ISpecEl>{props.children}</ISpecEl>;
};
Products.I_BuyPanel = function ProductsItemBuyPanel(props: JsxProps) {
  return <IBuyPanel>{props.children}</IBuyPanel>;
};

Products.I_Price = function ProductsItemPrice(props: JsxProps) {
  return <IPrice>{props.children}</IPrice>;
};
Products.I_Basket = function ProductsItemBasket(props: JsxProps) {
  return <IBasket>{props.children}</IBasket>;
};
Products.AddToCart = function ProductsAddToCart(props: JsxProps) {
  return <AddToCart>{props.children}</AddToCart>;
};

Products.SP_Select = function ProductsSPSelect(props: JsxProps) {
  return (
    <SPSelect
      id="sort"
      style={{
        borderRadius: `${props.active2 ? "10px 10px 0px 0px" : "10px"}`,
      }}
    >
      {props.children}
    </SPSelect>
  );
};
Products.SP_Sort = function ProductsSPSort(props: JsxProps) {
  return <SPSort id="sort">{props.children}</SPSort>;
};
Products.SP_Show = function ProductsSPShow(props: JsxProps) {
  return <SPShow id="sort">{props.children}</SPShow>;
};
Products.SP_ShowOpt = function ProductsSPShowOpt(props: JsxProps) {
  return <SPShowOpt id="sort">{props.children}</SPShowOpt>;
};
Products.SP_List = function ProductsSList(props: SortJSXProps) {
  return (
    <SPList
      id="sort"
      onClick={() => props.click((prev) => !prev)}
      style={{ display: `${props.active ? "flex" : "none"}` }}
    >
      {props.children}
    </SPList>
  );
};
Products.SP_ListEl = function ProductsSListEl(props: SortChooseJSXProps) {
  return (
    <SPListEl
      onClick={() => props.click(props.el)}
      style={{ fontWeight: `${props.active ? "bold" : "400"}` }}
      id="sort"
    >
      {props.children}
    </SPListEl>
  );
};

Products.SP_Checkbox = function ProductsSPCheckbox({ ...restprops }) {
  return <SPCheckbox {...restprops} />;
};

Products.FiltrBtn = function ProductsFiltrBtn(props: JsxProps) {
  return <FiltrBtn>{props.children}</FiltrBtn>;
};

Products.AcceptFiltrBtn = function ProductsAcceptFiltrBtn(props: JsxProps) {
  return <AcceptFiltrBtn>{props.children}</AcceptFiltrBtn>;
};

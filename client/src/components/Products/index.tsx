import React from "react";
import {
  BtnProps,
  DivProps,
  ElProps,
  HeadProps,
  LabelProps,
  ListProps,
  SpanProps,
} from "../../types/Types";
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

export function Products({ children, ...restprops }: DivProps) {
  return <Container {...restprops}>{children}</Container>;
}

Products.Filters = function ProductsFilters({
  children,
  active,
  width,
  ...restprops
}: DivProps & { active: boolean; width: number | undefined }) {
  return (
    <Filters
      {...restprops}
      style={{
        display: `${
          width && width <= 550 && active
            ? "flex"
            : !active && width && width <= 550
            ? "none"
            : "flex"
        }`,
      }}
    >
      {children}
    </Filters>
  );
};

Products.ProductsSec = function ProductsProductsSec({
  children,
  ...restprops
}: DivProps) {
  return <ProductsSec {...restprops}>{children}</ProductsSec>;
};

Products.Header = function ProductsHeader({
  children,
  ...restprops
}: DivProps) {
  return <Header {...restprops}>{children}</Header>;
};

Products.H_Title = function ProductsHeaderTitle({
  children,
  ...restprops
}: HeadProps) {
  return <HTitle {...restprops}>{children}</HTitle>;
};
Products.H_Count = function ProductsHeaderCount({
  children,
  ...restprops
}: SpanProps) {
  return <HCount {...restprops}>{children}</HCount>;
};

Products.SortPanel = function ProductsSortPanel({
  children,
  ...restprops
}: DivProps) {
  return <SortPanel {...restprops}>{children}</SortPanel>;
};
Products.All = function ProductsAll({
  children,
  style,
  ...restprops
}: DivProps & { style?: string }) {
  return (
    <All {...restprops} style={{ display: `${style}` }}>
      {children}
    </All>
  );
};

Products.F_Top = function ProductsFTop({ children, ...restprops }: DivProps) {
  return <FTop {...restprops}>{children}</FTop>;
};
Products.F_Bottom = function ProductsFBottom({
  children,
  ...restprops
}: DivProps) {
  return <FBottom {...restprops}>{children}</FBottom>;
};

Products.F_Title = function ProductsFTitle({
  children,
  ...restprops
}: HeadProps) {
  return <FTitle {...restprops}>{children}</FTitle>;
};

Products.F_ClearBtn = function ProductsFClearBtn({
  children,
  setfilters,
  ...restprops
}: BtnProps & { setfilters: Function }) {
  return (
    <FClearBtn {...restprops} onClick={() => setfilters()}>
      {children}
    </FClearBtn>
  );
};

Products.F_Section = function ProductsFSection({
  children,
  ...restprops
}: DivProps) {
  return <FSection {...restprops}>{children}</FSection>;
};

Products.F_Name = function ProductsFName({
  children,
  ...restprops
}: HeadProps) {
  return <FName {...restprops}>{children}</FName>;
};
Products.F_List = function ProductsFList({
  children,
  ...restprops
}: ListProps) {
  return <FList {...restprops}>{children}</FList>;
};
Products.F_Element = function ProductsFElement({
  children,
  ...restprops
}: ElProps) {
  return <FElement>{children}</FElement>;
};
Products.F_Checkbox = function ProductsFCheckbox({ ...restprops }) {
  return <FCheckbox {...restprops} />;
};

Products.F_Choose = function ProductsFChoose({
  children,
  ...restprops
}: LabelProps) {
  return <FChoose {...restprops}>{children}</FChoose>;
};

Products.F_Checkmark = function ProductsFCheckmark({
  children,
  ...restprops
}: SpanProps) {
  return <FCheckmark {...restprops}>{children}</FCheckmark>;
};

Products.F_PriceCon = function ProductsFPriceCon({
  children,
  ...restprops
}: DivProps) {
  return <FPriceCon {...restprops}>{children}</FPriceCon>;
};
Products.F_Price = function ProductsFPrice({
  children,
  ...restprops
}: DivProps) {
  return <FPrice {...restprops}>{children}</FPrice>;
};
Products.F_PriceFromTo = function ProductsFFromTo({
  children,
  ...restprops
}: DivProps) {
  return <FPriceFromTo {...restprops}>{children}</FPriceFromTo>;
};
Products.F_PriceInput = function ProductsFPriceInput({ ...restprops }) {
  return <FPriceInput {...restprops} />;
};
Products.F_PriceCurrency = function ProductsFPriceCurrency({
  children,
  ...restprops
}: DivProps) {
  return <FPriceCurrensy {...restprops}>{children}</FPriceCurrensy>;
};

Products.Item = function ProductsItem({ children, ...restprops }: DivProps) {
  return <Item {...restprops}>{children}</Item>;
};

Products.I_Img = function ProductsItemImg({
  children,
  ...restprops
}: DivProps) {
  return <IImg {...restprops}>{children}</IImg>;
};
Products.Image = function ProductsImage({ ...restprops }) {
  return <Image {...restprops} />;
};

Products.I_Desc = function ProductsItemDesc({
  children,
  ...restprops
}: DivProps) {
  return <IDesc {...restprops}>{children}</IDesc>;
};

Products.I_Name = function ProductsItemName({
  children,
  ...restprops
}: DivProps) {
  return <IName {...restprops}>{children}</IName>;
};

Products.I_Opinion = function ProductsItemOpinion({
  children,
  ...restprops
}: DivProps) {
  return <IOpinion {...restprops}>{children}</IOpinion>;
};

Products.I_SpecList = function ProductsItemSpecList({
  children,
  ...restprops
}: ListProps) {
  return <ISpecList {...restprops}>{children}</ISpecList>;
};
Products.I_SpecEl = function ProductsItemSpecEl({
  children,
  ...restprops
}: ElProps) {
  return <ISpecEl {...restprops}>{children}</ISpecEl>;
};
Products.I_BuyPanel = function ProductsItemBuyPanel({
  children,
  ...restprops
}: DivProps) {
  return <IBuyPanel {...restprops}>{children}</IBuyPanel>;
};

Products.I_Price = function ProductsItemPrice({
  children,
  ...restprops
}: SpanProps) {
  return <IPrice {...restprops}>{children}</IPrice>;
};
Products.I_Basket = function ProductsItemBasket({
  children,
  ...restprops
}: DivProps) {
  return <IBasket {...restprops}>{children}</IBasket>;
};
Products.AddToCart = function ProductsAddToCart({
  children,
  click,
  ...restprops
}: DivProps & { click?: Function }) {
  return (
    <AddToCart {...restprops} onClick={() => click && click()}>
      {children}
    </AddToCart>
  );
};

Products.SP_Select = function ProductsSPSelect({
  children,
  active,
  ...restprops
}: DivProps & { active: boolean }) {
  return (
    <SPSelect
      {...restprops}
      id="sort"
      style={{
        borderRadius: `${active ? "10px 10px 0px 0px" : "10px"}`,
      }}
    >
      {children}
    </SPSelect>
  );
};
Products.SP_Sort = function ProductsSPSort({
  children,
  ...restprops
}: SpanProps) {
  return (
    <SPSort {...restprops} id="sort">
      {children}
    </SPSort>
  );
};
Products.SP_Show = function ProductsSPShow({
  children,
  ...restprops
}: DivProps) {
  return (
    <SPShow {...restprops} id="sort">
      {children}
    </SPShow>
  );
};
Products.SP_ShowOpt = function ProductsSPShowOpt({
  children,
  ...restprops
}: SpanProps) {
  return (
    <SPShowOpt {...restprops} id="sort">
      {children}
    </SPShowOpt>
  );
};
Products.SP_List = function ProductsSList({
  children,
  click,
  active,
  ...restprops
}: ListProps & {
  click: React.Dispatch<React.SetStateAction<boolean>>;
  active: boolean;
}) {
  return (
    <SPList
      {...restprops}
      id="sort"
      onClick={() => click((prev) => !prev)}
      style={{ display: `${active ? "flex" : "none"}` }}
    >
      {children}
    </SPList>
  );
};
Products.SP_ListEl = function ProductsSListEl({
  children,
  click,
  active,
  el,
  ...restprops
}: ListProps & {
  click: React.Dispatch<React.SetStateAction<string>>;
  active?: boolean;
  el: string;
}) {
  return (
    <SPListEl
      onClick={() => click(el)}
      style={{ fontWeight: `${active ? "bold" : "400"}` }}
      id="sort"
    >
      {children}
    </SPListEl>
  );
};

Products.SP_Checkbox = function ProductsSPCheckbox({ ...restprops }) {
  return <SPCheckbox {...restprops} />;
};

Products.FiltrBtn = function ProductsFiltrBtn({
  children,
  ...restprops
}: SpanProps) {
  return <FiltrBtn {...restprops}>{children}</FiltrBtn>;
};

Products.AcceptFiltrBtn = function ProductsAcceptFiltrBtn({
  children,
  ...restprops
}: BtnProps) {
  return <AcceptFiltrBtn {...restprops}>{children}</AcceptFiltrBtn>;
};

import React from "react";
import { JsxProps } from "../../types/Types";
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
} from "./style/productStyle";

export function Products(props: JsxProps) {
  return <Container>{props.children}</Container>;
}

Products.Filters = function ProductsFilters(props: JsxProps) {
  return <Filters>{props.children}</Filters>;
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

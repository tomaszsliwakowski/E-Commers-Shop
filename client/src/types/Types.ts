import React, { ComponentPropsWithoutRef, ReactNode } from "react";

export interface DivProps extends ComponentPropsWithoutRef<"div"> {
  children?: ReactNode;
}
export interface SpanProps extends ComponentPropsWithoutRef<"span"> {
  children?: ReactNode;
}
export interface LabelProps extends ComponentPropsWithoutRef<"label"> {
  children?: ReactNode;
}
export interface HeadProps
  extends ComponentPropsWithoutRef<"h1" | "h2" | "h3" | "h4"> {
  children?: ReactNode;
}
export interface ListProps extends ComponentPropsWithoutRef<"ul"> {
  children?: ReactNode;
}
export interface ElProps extends ComponentPropsWithoutRef<"li"> {
  children?: ReactNode;
}
export interface TextProps extends ComponentPropsWithoutRef<"p"> {
  children?: ReactNode;
}
export interface BtnProps extends ComponentPropsWithoutRef<"button"> {
  children?: ReactNode;
}
export interface HlinkProps extends ComponentPropsWithoutRef<"a"> {
  children?: ReactNode;
}
export interface FormProps extends ComponentPropsWithoutRef<"form"> {
  children?: ReactNode;
}

export interface ProductType {
  id: number;
  name: string;
  img: string;
  price: number;
  category: string;
  producer: string;
  components?: string;
  accesories?: string;
  opinion: number;
  spec?: string[];
  destiny?: string;
  count?: number;
  newPrice?: number;
}

export interface BasketProductsProps {
  BasketProducts: {
    basket: Array<{ product: ProductType }>;
  };
}
export interface WindowSizeType {
  width: number | undefined;
  height: number | undefined;
}

export interface AllProductsType {
  products: Array<ProductType>;
}

export interface TimerType {
  second: number;
  minutes: number;
  hour: number;
}

export interface FiltersProps {
  product: GetProductsType;
  setfilters: React.Dispatch<React.SetStateAction<filtr>>;
  filters: filtr;
  ShowProd: ProductType[];
}
export interface GetProductsType {
  category?: string;
  products: Array<ProductType>;
  filters?: FiltersType;
}
type FiltersType = {
  Producent?: string[];
  Przeznaczenie?: string[];
  Komponenty?: string[];
  Akcesoria?: string[];
};
export interface filtr {
  filtr_one: string[];
  filtr_two: string[];
  price: {
    from: number;
    to: number;
  };
}
export interface FormErrorType {
  email: boolean;
  password: boolean;
}
export interface FormErrorTypeReg extends FormErrorType {
  name: boolean;
  lastname: boolean;
}
export interface LoginValueType {
  email: string;
  password: string;
}
export interface RegisterValueType extends LoginValueType {
  name: string;
  lastname: string;
}

export interface OpinionType {
  uid: string;
  email: String;
  name: String;
  content: String;
  date: String;
  prod_id: String;
  opinionId: number;
  _id: string;
}

export type BasketConPropsType = {
  ActiveCount: boolean;
  ActiveCountInput: boolean;
  CountInput: Number;
  HandleInputCount: Function;
  ProductCount: Number;
  setActiveCount: React.Dispatch<React.SetStateAction<boolean>>;
  HandleCount: Function;
  HandleActiveCountInput: Function;
};

export type sortOrdersType = {
  id: number;
  name: string;
};

export interface OrderType {
  Products: ProductType[];
  Data: {
    name: string;
    lastname: string;
    address: string;
    city: string;
    postCode: string;
    phone: string;
    delivery: {
      method: string;
      price: number;
    };
    payment: {
      method: string;
      price: number;
    };
  };
  UserId: string;
}

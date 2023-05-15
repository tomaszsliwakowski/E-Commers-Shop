import { type } from "os";
import { ReactNode } from "react";

export type JsxProps = {
  children?: ReactNode;
  href?: string;
  display?: string;
  scroll?: boolean;
  scrollDisplay?: string;
  width?: number;
  style?: string;
  active?: PanelActiveProps;
  active2?: boolean;
};

export type DropDownProps = {
  children?: ReactNode;
  href?: string;
  click: React.Dispatch<React.SetStateAction<PanelActiveProps>>;
};
export type SortJSXProps = {
  children?: ReactNode;
  click: React.Dispatch<React.SetStateAction<boolean>>;
  active?: boolean;
};

export type FormProps = {
  submit: Function;
  children: ReactNode;
};

export type SortChooseJSXProps = {
  children?: ReactNode;
  active?: boolean;
  click: React.Dispatch<React.SetStateAction<string>>;
  el: string;
};
export type ProdCountPropsType = {
  children?: ReactNode;
  click: Function;
  item: number;
  id?: string;
};

export type TsxPropsBoolean = {
  children?: ReactNode;
  click: React.Dispatch<React.SetStateAction<boolean>>;
};

export type SearchPropsFunction = {
  children?: ReactNode;
  click: Function;
};

export type PanelActiveProps = {
  Account: boolean;
  Basket: boolean;
};

export type LinkProps = {
  children?: ReactNode;
  to: string;
};

export type WindowSizeType = {
  width: number | undefined;
  height: number | undefined;
};

export type ScrollPositionType = {
  position: number | undefined;
};

export type DateType = {
  Year: number;
  Month: number;
  Day: number;
  Hours: number;
  Minutes: number;
  Seconds: number;
};

export type TimerType = {
  second: number;
  minutes: number;
  hour: number;
};

export type HomeProductType = {
  name: string;
  img: string;
  price: number;
  link: string;
};

export type UserPanelProps = {
  width?: number;
  activeRightMenu: PanelActiveProps;
  setActiveRightMenu: React.Dispatch<React.SetStateAction<PanelActiveProps>>;
};

export type UserMenuProps = {
  activeLeftMenu: boolean;
  setActiveLeftMenu: React.Dispatch<React.SetStateAction<boolean>>;
  ScrollAction: boolean;
};

export type HeaderProps = {
  children?: ReactNode;
  Click: Function;
  scroll?: boolean;
};

export type ProductsType = {
  id: number;
  name: string;
  img: string;
  price: number;
  link: string;
  category: string;
  components?: string;
  opinion: number;
  spec?: string[];
};

export type FiltersType = {
  Producent?: string[];
  Przeznaczenie?: string[];
  Komponenty?: string[];
};

export type GetProductsType = {
  category: string;
  products: Array<ProductsType>;
  filters?: FiltersType;
};

export type ProductsItemType = {
  item: ProductsType;
};

export type FiltersProps = {
  product: GetProductsType;
};

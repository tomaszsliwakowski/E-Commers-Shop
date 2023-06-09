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
export type OpinionJSXProps = {
  children?: ReactNode;
  click: React.Dispatch<React.SetStateAction<boolean>>;
  active?: boolean;
  handle: Function;
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
  prod?: number;
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

export type ProductsType = {
  id: number;
  name: string;
  img: string;
  price: number;
  link?: string;
  category: string;
  producer: string;
  components?: string;
  accesories?: string;
  opinion: number;
  spec?: string[];
  destiny?: string;
  count?: number;
};

export type FiltersType = {
  Producent?: string[];
  Przeznaczenie?: string[];
  Komponenty?: string[];
  Akcesoria?: string[];
};

export type GetProductsType = {
  category?: string;
  products: Array<ProductsType>;
  filters?: FiltersType;
};
export type AllProductsType = {
  products: Array<ProductsType>;
};
export type ProductsItemType = {
  item: ProductsType;
};

export type FiltersProps = {
  product: GetProductsType;
  setfilters: React.Dispatch<React.SetStateAction<filtr>>;
  filters: filtr;
  ShowProd: ProductsType[];
};

export type ClearFiltrProps = {
  children: ReactNode;
  setfilters: Function;
};

export type filtr = {
  filtr_one: string[];
  filtr_two: string[];
  price: {
    from: number;
    to: number;
  };
};

export type LoginValueType = {
  email: string;
  password: string;
};

export type RegisterValueType = {
  name: string;
  lastname: string;
  email: string;
  password: string;
};

export type FormErrorType = {
  name?: boolean;
  lastname?: boolean;
  email: boolean;
  password: boolean;
};

export type AuthProviderType = {
  children: ReactNode;
};

export type ImageType = {
  image: string;
};
export type opinionType = {
  uid: string;
  email: String;
  name: String;
  content: String;
  date: String;
  prod_id: String;
  opinionId: number;
  _id: string;
};
export type GoToElmentType = {
  goTo: Function;
  children?: ReactNode;
  to: string;
};
export type OpinionOptionsType = {
  children?: ReactNode;
  click: React.Dispatch<React.SetStateAction<{ active: boolean; id: number }>>;
  item: number;
};
export type OpinionDeleteType = {
  children?: ReactNode;
  click: Function;
  item: string;
};

export type AddBasketBtnType = {
  children?: ReactNode;
  click?: Function;
  href?: string;
};

export type basketprops = {
  BasketProducts: {
    basket: Array<{ product: ProductsType }>;
  };
};

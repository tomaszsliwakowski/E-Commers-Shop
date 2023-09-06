import { ModalLib, SetLibType, sortOrdersType } from "./types/Types";

export const PayAcceptList: string[] = [
  "https://assets.x-kom.pl/public-spa/xkom/c500d59374fe7d7d.png",
  "https://assets.x-kom.pl/public-spa/xkom/e51fb0a6ab97d090.png",
  "https://assets.x-kom.pl/public-spa/xkom/33dfc5a98f0f38a4.png",
  "https://assets.x-kom.pl/public-spa/xkom/73f77216756e0f1c.png",
  "https://assets.x-kom.pl/public-spa/xkom/d2cbf1eef4e6de73.png",
  "https://assets.x-kom.pl/public-spa/xkom/076d960cdaf096e1.png",
  "https://assets.x-kom.pl/public-spa/xkom/709b7294b9957695.png",
  "https://assets.x-kom.pl/public-spa/xkom/93e0b5378eed5aa5.png",
  "https://assets.x-kom.pl/public-spa/xkom/4ba359ebd3c94054.png",
  "https://assets.x-kom.pl/public-spa/xkom/c7fb289360e74bc3.png",
];

interface MethodType {
  name: string;
  price: number;
}

export const DeliveryMethod: MethodType[] = [
  { name: "Kurier", price: 20.0 },
  { name: "Odbiór w salonie", price: 0 },
  { name: "InPost Paczkomat 24/7", price: 9.9 },
  { name: "Odbiór w punkcie ", price: 8.9 },
];

export const PaymentMethod: MethodType[] = [
  { name: "Płatność online", price: 0 },
  { name: "Karta płatnicza online", price: 0 },
  { name: "Blik", price: 0 },
  { name: "Przelew tradycyjny", price: 0 },
  { name: "Przy odbiorze", price: 5.0 },
  { name: "Raty", price: 0 },
];

export const sortLib: sortOrdersType[] = [
  { id: 0, name: "Od najnowszych" },
  { id: 1, name: "Od najstarszych" },
  { id: 2, name: "Od najtańszych" },
  { id: 3, name: "Od najdroższych" },
];

export const SettingsLib: SetLibType[] = [
  {
    name: "username",
    regex: "[a-zA-Z]{4,}$",
    before: "Obecna nazwa",
    after: "Nowa nazwa",
    route: "/users/update/username/",
  },
  {
    name: "email",
    regex: "^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+.[a-zA-Z]{2,}$",
    before: "Obecny e-mail",
    after: "Nowy e-mail",
    route: "/users/update/email/",
  },
  {
    name: "password",
    regex: "^[A-Z][a-zA-Z0-9!@#$%^&*]{6,19}$",
    before: "Obecne hasło",
    after: "Nowe hasło",
    route: "/users/update/password/",
  },
];

export const ORDERDATA = {
  name: "",
  lastName: "",
  address: "",
  city: "",
  postCode: "",
  phone: "",
};

export const MODAL_LIB: ModalLib = {
  username: "nazwy konta",
  email: "e-mail",
  password: "hasła",
  orderdata: "danych",
};
export const MODAL_Type: ModalLib = {
  username: "username",
  email: "email",
  password: "password",
  orderdata: "orderdata",
};
export type Modalkeys = keyof typeof MODAL_Type;

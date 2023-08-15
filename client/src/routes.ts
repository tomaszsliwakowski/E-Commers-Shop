export const HomeRoute = "/E-Commers-Shop/";
export const ProductsRoute = "/E-Commers-Shop/products/:category";
export const ProductRoute = "/E-Commers-Shop/product/:id";
export const SearchRoute = "/E-Commers-Shop/products/search/:search";
export const LoginRoute = "/E-Commers-Shop/login";
export const RegisterRoute = "/E-Commers-Shop/register";
export const BasketRoute = "/E-Commers-Shop/basket";
export const OrderRoute = "/E-Commers-Shop/order";
export const UserOrderRoute = "/E-Commers-Shop/user/orders";
export const UserSettingRoute = "/E-Commers-Shop/user/setting";
//export const ServerRoute = "https://e-commers-shop.onrender.com";
export const ServerRoute = "http://localhost:10000";
export const LocalRoute = "http://localhost:3000"; //"https://tomaszsliwakowski.github.io"
export const SaleRoute = "/E-Commers-Shop//sale/product/:status";
export function GetOpinion(id: string) {
  return `${ServerRoute}/api/get/opinion/${id}`;
}

export const AddOpinion: string = `${ServerRoute}/api/add/opinion`;
export const GetSale: string = `${ServerRoute}/api/sale/product`;

export function GetProduct(id: string) {
  return `${ServerRoute}/api/product/${id}`;
}

export function GetProducts(category: string) {
  return `${ServerRoute}/api/products/${category}`;
}

export const GetAllProducts: string = `${ServerRoute}/api/products/all`;

export function DeleteOpnion(id: string) {
  return `${ServerRoute}/api/delete/opinion/${id}`;
}

export function GoToProduct(id: number) {
  return `/E-Commers-Shop/product/${id}`;
}

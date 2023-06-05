export const HomeRoute = "/";
export const ProductsRoute = "/products/:category";
export const ProductRoute = "/product/:id";
export const SearchRoute = "/products/search/:search";
export const LoginRoute = "/login";
export const RegisterRoute = "/register";
export const BasketRoute = "/basket";
const ServerRoute = "http://localhost:10000";

export function GetOpinion(id: string) {
  return `${ServerRoute}/api/get/opinion/${id}`;
}

export const AddOpinion: string = `${ServerRoute}/api/add/opinion`;

export function GetProduct(id: string) {
  return `${ServerRoute}/api/product/${id}`;
}

export function GetProducts(category: string) {
  return `${ServerRoute}/api/products/${category}`;
}

export const GetAllProducts: string = `${ServerRoute}/api/products/all`;

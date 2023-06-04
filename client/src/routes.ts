export const HomeRoute = "/";
export const ProductsRoute = "/products/:category";
export const ProductRoute = "/product/:id";
export const SearchRoute = "/products/search/:search";
export const LoginRoute = "/login";
export const RegisterRoute = "/register";
export const BasketRoute = "/basket";

export function GetOpinion(id: string) {
  return `http://localhost:10000/api/get/opinion/${id}`;
}

export const AddOpinion: string = "http://localhost:10000/api/add/opinion";

export function GetProduct(id: string) {
  return `http://localhost:10000/api/product/${id}`;
}

export function GetProducts(category: string) {
  return `http://localhost:10000/api/products/${category}`;
}

export const GetAllProducts: string = `http://localhost:10000/api/products/all`;

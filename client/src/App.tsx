import React, { useContext } from "react";
import HomePage from "./containers/HomePage";
import { Route, Routes } from "react-router";
import {
  BasketRoute,
  HomeRoute,
  LoginRoute,
  ProductRoute,
  ProductsRoute,
  RegisterRoute,
  SearchRoute,
} from "./routes";
import ProductsPage from "./containers/ProductsPage";
import LoginPage from "./containers/LoginPage";
import RegisterPage from "./containers/RegisterPage";
import BasketPage from "./containers/BasketPage";
import { AuthProvider } from "./assets/auth";
import SingleProductsPage from "./containers/SingleProductPage";
import { Provider } from "react-redux";
import { store } from "./store/store";
import NotFoundPage from "./containers/NotFoundPage";

function App() {
  return (
    <Provider store={store}>
      <AuthProvider>
        <Routes>
          <Route path={HomeRoute} element={<HomePage />} />
          <Route path={ProductsRoute} element={<ProductsPage />} />
          <Route path={ProductRoute} element={<SingleProductsPage />} />
          <Route path={SearchRoute} element={<ProductsPage />} />
          <Route path={LoginRoute} element={<LoginPage />} />
          <Route path={RegisterRoute} element={<RegisterPage />} />
          <Route path={BasketRoute} element={<BasketPage />} />
          <Route path={"*"} element={<NotFoundPage />} />
        </Routes>
      </AuthProvider>
    </Provider>
  );
}

export default App;

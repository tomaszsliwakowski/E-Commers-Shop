import React from "react";
import HomePage from "./containers/HomePage";
import { Route, Routes } from "react-router";
import {
  BasketRoute,
  HomeRoute,
  LoginRoute,
  ProductsRoute,
  RegisterRoute,
  SearchRoute,
} from "./routes";
import ProductsPage from "./containers/ProductsPage";
import LoginPage from "./containers/LoginPage";
import RegisterPage from "./containers/RegisterPage";
import BasketPage from "./containers/BasketPage";

function App() {
  return (
    <Routes>
      <Route path={HomeRoute} element={<HomePage />} />
      <Route path={ProductsRoute} element={<ProductsPage />} />
      <Route path={SearchRoute} element={<ProductsPage />} />
      <Route path={LoginRoute} element={<LoginPage />} />
      <Route path={RegisterRoute} element={<RegisterPage />} />
      <Route path={BasketRoute} element={<BasketPage />} />
    </Routes>
  );
}

export default App;

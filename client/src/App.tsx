import React, { useContext } from "react";
import HomePage from "./containers/HomePage";
import { Route, Routes } from "react-router";
import {
  BasketRoute,
  ConfiguratorRoute,
  HomeRoute,
  LoginRoute,
  OrderRoute,
  ProductRoute,
  ProductsRoute,
  RegisterRoute,
  SearchRoute,
  UserOrderRoute,
  UserSettingRoute,
} from "./routes";
import ProductsPage from "./containers/ProductsPage";
import LoginPage from "./containers/LoginPage";
import RegisterPage from "./containers/RegisterPage";
import BasketPage from "./containers/BasketPage";
import { AuthProvider } from "./assetsCon/auth";
import SingleProductsPage from "./containers/SingleProductPage";
import { Provider } from "react-redux";
import { store } from "./store/store";
import NotFoundPage from "./containers/NotFoundPage";
import { Toaster } from "react-hot-toast";
import OrderPage from "./containers/OrderPage";
import UserOrdersPage from "./containers/UserOrdersPage";
import UserSettingPage from "./containers/UserSettingPage";
import ConfiguratorPage from "./containers/ConfiguratorPage";

function App() {
  return (
    <Provider store={store}>
      <AuthProvider>
        <Toaster
          position="top-right"
          reverseOrder={false}
          toastOptions={{ duration: 2000 }}
        />
        <Routes>
          <Route path={HomeRoute} element={<HomePage />} />
          <Route path={ProductsRoute} element={<ProductsPage />} />
          <Route path={ProductRoute} element={<SingleProductsPage />} />
          <Route path={SearchRoute} element={<ProductsPage />} />
          <Route path={LoginRoute} element={<LoginPage />} />
          <Route path={UserOrderRoute} element={<UserOrdersPage />} />
          <Route path={UserSettingRoute} element={<UserSettingPage />} />
          <Route path={OrderRoute} element={<OrderPage />} />
          <Route path={RegisterRoute} element={<RegisterPage />} />
          <Route path={BasketRoute} element={<BasketPage />} />
          <Route path={ConfiguratorRoute} element={<ConfiguratorPage />} />
          <Route path={"*"} element={<NotFoundPage />} />
        </Routes>
      </AuthProvider>
    </Provider>
  );
}

export default App;

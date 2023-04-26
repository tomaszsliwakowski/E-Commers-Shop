import React from "react";
import HomePage from "./containers/HomePage";
import { Route, Routes } from "react-router";
import { HomeRoute, ProductsRoute } from "./routes";
import ProductsPage from "./containers/ProductsPage";

function App() {
  return (
    <Routes>
      <Route path={HomeRoute} element={<HomePage />} />
      <Route path={ProductsRoute} element={<ProductsPage />} />
    </Routes>
  );
}

export default App;
